// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Form,
  Input,
  MultipleSelect,
  RangePicker,
  Table,
  TreeSelect,
  View,
} from '@/components/factory';

import BusiComp416634 from '@/components/BusiComp416634';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const ApproveOrderQuery$$Page: React.FC<PageProps> = ({
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
  const query = (options_84995934: any) => {
    const eventDatagetFormValue1: any = [
      {
        type: 'getFormValue',
        dataId: 167955384478430850,
        options: {
          compId: 'BOFramer_838105',
          compLib: '@/components',
          pageJsonId: '541575',
          compName: 'BOFramer',
          id: '798104',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 167955385432096320,
            options: {
              compId: 'Table_37209506_850459_606135_0368544_489904_4374773',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Table',
              id: '434878',
              loading: true,
            },
            line_number: 2,
          },
          {
            type: 'getValue',
            dataId: 167955386001602430,
            options: {
              compId: 'TreeSelect_07743_807969_276729_0954643_904744_2077655',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '006397',
            },
            line_number: 3,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167955386001633400,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '765938',
                  pageJsonId: '541575',
                  code: 'function main(data,state,success,fail){if(!value_006397||!value_006397.length){return success("")}return success(value_006397)};',
                  actionTitle: '场景值处理',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadDataSource',
                    dataId: 167955386001647400,
                    shielding: true,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '351678',
                      pageJsonId: '541575',
                      dataSourceId: 167144522026613440,
                      dataSourceName: 'qryDcApproveOrdPage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '3159587',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'header',
                        },
                        {
                          attrId: '665219',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'path',
                        },
                        {
                          attrId: '2911287',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'query',
                        },
                        {
                          attrId: '7222795',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          children: [
                            {
                              attrId: '7736784',
                              code: 'extBusiObjNbr',
                              name: 'extBusiObjNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.extBusiObjNbr',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004_572759',
                                  'getFieldsValue',
                                ],
                                code: 'extBusiObjNbr',
                              },
                            },
                            {
                              attrId: '99901',
                              code: 'approveGrade',
                              name: 'approveGrade',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.approveGrade',
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365_026917',
                                  'getFieldsValue',
                                ],
                                code: 'approveGrade',
                              },
                            },
                            {
                              attrId: '5287916',
                              code: 'busiObjStatusList',
                              name: 'busiObjStatusList',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '$[]$' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '90653',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  key: 'body.busiObjStatusList.listItem',
                                },
                              ],
                              key: 'body.busiObjStatusList',
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365_026917',
                                  'getFieldsValue',
                                ],
                                code: 'busiObjStatusList',
                              },
                            },
                            {
                              attrId: '8041746',
                              code: 'createStaff',
                              name: 'createStaff',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.createStaff',
                              value: {
                                type: [
                                  'form',
                                  'Form_9423813_486326_231002_133159_154259_527665',
                                  'getFieldsValue',
                                ],
                                code: 'createStaff',
                              },
                            },
                            {
                              attrId: '81661606',
                              code: 'regionId',
                              name: 'regionId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.regionId',
                              value: {
                                type: ['context', '$formValues$'],
                                code: 'areaId',
                              },
                            },
                            {
                              attrId: '358201',
                              code: 'lanId',
                              name: 'lanId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.lanId',
                              value: {
                                type: ['context', '$formValues$'],
                                code: 'lanId',
                              },
                            },
                            {
                              attrId: '0199743',
                              code: 'minCreateTime',
                              name: 'minCreateTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.minCreateTime',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004_572759',
                                  'getFieldsValue',
                                ],
                                code: 'createTime[0]',
                              },
                            },
                            {
                              attrId: '532703',
                              code: 'title',
                              name: 'title',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.title',
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365_026917',
                                  'getFieldsValue',
                                ],
                                code: 'title',
                              },
                            },
                            {
                              attrId: '6757646',
                              code: 'maxCreateTime',
                              name: 'maxCreateTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.maxCreateTime',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004_572759',
                                  'getFieldsValue',
                                ],
                                code: 'createTime[1]',
                              },
                            },
                            {
                              attrId: '890388',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.pageSize',
                              value: {
                                type: ['context', '$options_84995934$'],
                                code: 'pageSize',
                              },
                            },
                            {
                              attrId: '578771',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.pageNum',
                              value: {
                                type: ['context', '$options_84995934$'],
                                code: 'pageNum',
                              },
                            },
                            {
                              attrId: '422575',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.approveOrdNbr',
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365_026917',
                                  'getFieldsValue',
                                ],
                                code: 'approveOrdNbr',
                              },
                            },
                            {
                              attrId: '413524',
                              code: 'catalogValue',
                              name: '场景值',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.catalogValue',
                              value: {
                                type: ['context', '$data_765938$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '779059',
                              code: 'catalogType',
                              name: '场景值类型',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.catalogType',
                              value: {
                                type: [
                                  'form',
                                  'Form_9423813_486326_231002_133159_154259_527665',
                                  'getFieldsValue',
                                ],
                                code: 'catalogType',
                              },
                            },
                          ],
                          key: 'body',
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '7480025',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '241316',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '8506247',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '715165',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '600912',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '192764',
                              code: 'pages',
                              name: 'pages',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '0128122',
                              code: 'countId',
                              name: 'countId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '319933',
                              code: 'maxLimit',
                              name: 'maxLimit',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '979141',
                              code: 'searchCount',
                              name: 'searchCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '3861119',
                              code: 'orders',
                              name: 'orders',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '9400206',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                            },
                            {
                              attrId: '819047',
                              code: 'optimizeCountSql',
                              name: 'optimizeCountSql',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '0085504',
                              code: 'hitCount',
                              name: 'hitCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '144354',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '908344',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '959223',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '0818943',
                                  code: 'createTime',
                                  name: 'createTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '6629487',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '184038',
                                  code: 'lastHandleTime',
                                  name: 'lastHandleTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '797543',
                                  code: 'title',
                                  name: 'title',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '071031',
                                  code: 'createStaffName',
                                  name: 'createStaffName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '334702',
                                  code: 'handleStaffName',
                                  name: 'handleStaffName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '887263',
                                  code: 'tacheName',
                                  name: 'tacheName',
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
                    line_number: 5,
                    callback1: [
                      {
                        type: 'setLoading',
                        dataId: 167955386001672860,
                        shielding: true,
                        options: {
                          compId:
                            'Table_37209506_850459_606135_0368544_489904_4374773',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '703483',
                          loading: false,
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167955386001650140,
                        shielding: true,
                        options: {
                          compId:
                            'Table_37209506_850459_606135_0368544_489904_4374773',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '2381473',
                          loading: false,
                        },
                        line_number: 7,
                      },
                    ],
                  },
                  {
                    type: 'getValue',
                    dataId: 169148622517814240,
                    options: {
                      compId:
                        'RangePicker_0811484_02404_122143_4701901_011063_1405673',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'RangePicker',
                      id: '952137',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 169148680335035680,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '67308',
                          pageJsonId: '541575',
                          value: ['$value_952137$'],
                        },
                        line_number: 9,
                      },
                      {
                        type: 'customActionCode',
                        dataId: 169148683100106620,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '169129',
                          pageJsonId: '541575',
                          code: 'function main(data,state,success,fail){if(value_952137==null||value_952137==undefined||value_952137=="undefined"||value_952137.length==0){return success(value_952137)}success([value_952137[0]+" 00:00:00",value_952137[1]+" 23:59:59"])};',
                          actionTitle: '处理日期',
                        },
                        line_number: 10,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 169148693557596380,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '322782',
                              pageJsonId: '541575',
                              dataSourceId: 167144522026613440,
                              dataSourceName: 'qryDcApproveOrdPage',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '3159587',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'header',
                                },
                                {
                                  attrId: '665219',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'path',
                                },
                                {
                                  attrId: '2911287',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'query',
                                },
                                {
                                  attrId: '7222795',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '7736784',
                                      code: 'extBusiObjNbr',
                                      name: 'extBusiObjNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.extBusiObjNbr',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_071412_23739_6003683_675321_569004_572759',
                                          'getFieldsValue',
                                        ],
                                        code: 'extBusiObjNbr',
                                      },
                                    },
                                    {
                                      attrId: '99901',
                                      code: 'approveGrade',
                                      name: 'approveGrade',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.approveGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365_026917',
                                          'getFieldsValue',
                                        ],
                                        code: 'approveGrade',
                                      },
                                    },
                                    {
                                      attrId: '5287916',
                                      code: 'busiObjStatusList',
                                      name: 'busiObjStatusList',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '$[]$',
                                      },
                                      type: 'fieldArray',
                                      children: [
                                        {
                                          attrId: '90653',
                                          code: 'listItem',
                                          name: '列表元素',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                          key: 'body.busiObjStatusList.listItem',
                                        },
                                      ],
                                      key: 'body.busiObjStatusList',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365_026917',
                                          'getFieldsValue',
                                        ],
                                        code: 'busiObjStatusList',
                                      },
                                    },
                                    {
                                      attrId: '8041746',
                                      code: 'createStaff',
                                      name: 'createStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      key: 'body.createStaff',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_9423813_486326_231002_133159_154259_527665',
                                          'getFieldsValue',
                                        ],
                                        code: 'createStaff',
                                      },
                                    },
                                    {
                                      attrId: '81661606',
                                      code: 'regionId',
                                      name: 'regionId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.regionId',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'areaId',
                                      },
                                    },
                                    {
                                      attrId: '358201',
                                      code: 'lanId',
                                      name: 'lanId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.lanId',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'lanId',
                                      },
                                    },
                                    {
                                      attrId: '0199743',
                                      code: 'minCreateTime',
                                      name: 'minCreateTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.minCreateTime',
                                      value: {
                                        type: ['customize'],
                                        code: '$data_169129[0]$',
                                      },
                                    },
                                    {
                                      attrId: '532703',
                                      code: 'title',
                                      name: 'title',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.title',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365_026917',
                                          'getFieldsValue',
                                        ],
                                        code: 'title',
                                      },
                                    },
                                    {
                                      attrId: '6757646',
                                      code: 'maxCreateTime',
                                      name: 'maxCreateTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.maxCreateTime',
                                      value: {
                                        type: ['customize'],
                                        code: '$data_169129[1]$',
                                      },
                                    },
                                    {
                                      attrId: '890388',
                                      code: 'pageSize',
                                      name: 'pageSize',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      key: 'body.pageSize',
                                      value: {
                                        type: ['context', '$options_84995934$'],
                                        code: 'pageSize',
                                      },
                                    },
                                    {
                                      attrId: '578771',
                                      code: 'pageNum',
                                      name: 'pageNum',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      key: 'body.pageNum',
                                      value: {
                                        type: ['context', '$options_84995934$'],
                                        code: 'pageNum',
                                      },
                                    },
                                    {
                                      attrId: '422575',
                                      code: 'approveOrdNbr',
                                      name: 'approveOrdNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.approveOrdNbr',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365_026917',
                                          'getFieldsValue',
                                        ],
                                        code: 'approveOrdNbr',
                                      },
                                    },
                                    {
                                      attrId: '413524',
                                      code: 'catalogValue',
                                      name: '场景值',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.catalogValue',
                                      value: {
                                        type: ['context', '$data_765938$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '779059',
                                      code: 'catalogType',
                                      name: '场景值类型',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.catalogType',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_9423813_486326_231002_133159_154259_527665',
                                          'getFieldsValue',
                                        ],
                                        code: 'catalogType',
                                      },
                                    },
                                  ],
                                  key: 'body',
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '7480025',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '241316',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '8506247',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '715165',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '600912',
                                      code: 'total',
                                      name: 'total',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '192764',
                                      code: 'pages',
                                      name: 'pages',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '0128122',
                                      code: 'countId',
                                      name: 'countId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '319933',
                                      code: 'maxLimit',
                                      name: 'maxLimit',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '979141',
                                      code: 'searchCount',
                                      name: 'searchCount',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '3861119',
                                      code: 'orders',
                                      name: 'orders',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'fieldArray',
                                      children: [
                                        {
                                          attrId: '9400206',
                                          code: 'listItem',
                                          name: '列表元素',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                        },
                                      ],
                                    },
                                    {
                                      attrId: '819047',
                                      code: 'optimizeCountSql',
                                      name: 'optimizeCountSql',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '0085504',
                                      code: 'hitCount',
                                      name: 'hitCount',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '144354',
                                      code: 'size',
                                      name: 'size',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '908344',
                                      code: 'current',
                                      name: 'current',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '959223',
                                      code: 'records',
                                      name: 'records',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '0818943',
                                          code: 'createTime',
                                          name: 'createTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '6629487',
                                          code: 'approveOrdNbr',
                                          name: 'approveOrdNbr',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '184038',
                                          code: 'lastHandleTime',
                                          name: 'lastHandleTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '797543',
                                          code: 'title',
                                          name: 'title',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '071031',
                                          code: 'createStaffName',
                                          name: 'createStaffName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '334702',
                                          code: 'handleStaffName',
                                          name: 'handleStaffName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '887263',
                                          code: 'tacheName',
                                          name: 'tacheName',
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
                            line_number: 11,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 169148693557589120,
                                options: {
                                  compId:
                                    'Table_37209506_850459_606135_0368544_489904_4374773',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '3286384',
                                  loading: false,
                                },
                                line_number: 12,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 169148693557541100,
                                options: {
                                  compId:
                                    'Table_37209506_850459_606135_0368544_489904_4374773',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '94841',
                                  loading: false,
                                },
                                line_number: 13,
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 169148745339103700,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '683028',
                              pageJsonId: '541575',
                              value: ['$data_169129$'],
                            },
                            line_number: 14,
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 168199054732368000,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '1726494',
                  pageJsonId: '541575',
                  value: ['$value_006397$'],
                },
                line_number: 15,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetFormValue1.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDatagetFormValue1, { options_84995934 }, 'getFormValue', {
      id: 'getFormValue',
      name: 'getFormValue',
      type: 'getFormValue',
      platform: 'undefined',
    });
  };
  const readyNotify = (options_262365: any) => {
    // console 167955708862001470
    console.log(options_262365);
    const eventDatacallSelfFunc3: any = [
      {
        type: 'callSelfFunc',
        dataId: 167955706609667520,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '1602309',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: { pageNum: '1', isDraft: 'false', pageSize: '10' },
          paramsObjKeyValueMap: {
            pageNum: '1',
            isDraft: 'false',
            pageSize: '10',
          },
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc3.params =
      [
        {
          title: '事件入参',
          name: 'options_262365',
          value: '$options_262365$',
        },
      ] || [];
    CMDGenerator(eventDatacallSelfFunc3, { options_262365 }, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
  };
  const jumpTab = (options_687467: any) => {
    const eventDatacustomActionCode63: any = [
      {
        type: 'customActionCode',
        dataId: 170528445458298180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '016287',
          pageJsonId: '541575',
          code: 'function main(data,state,success,fail){var localName=window.sessionStorage.getItem("gaap-localName")||"";console.log("localName = ",localName);success(localName)};',
          actionTitle: '获取localName',
        },
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170528445458200770,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '5593934',
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
                      dataKey: '5593934_root.header',
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
                          dataKey: '5593934_root.path.pagePath',
                          value: {
                            type: ['context', '$options_687467$'],
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
                      dataKey: '5593934_root.path',
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
                      dataKey: '5593934_root.query',
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
                          key: '0-3-15',
                          id: 'root.body.scene',
                          dataKey: '5593934_root.body.scene',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.instNbr',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.workId',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.flowCode',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.tacheName',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.workItemId',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.busiObjNbr',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.isRollback',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.isScreenshoot',
                          value: { type: [], code: '' },
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
                          dataKey: '5593934_root.body.origin',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.tacheCode',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.sceneOrigin',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.originTab',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          dataKey: '5593934_root.body.localName',
                          value: {
                            type: ['context', '$data_016287$'],
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
                          key: '0-3-14',
                          id: 'root.body.title',
                          dataKey: '5593934_root.body.title',
                          value: {
                            type: ['context', '$options_687467$'],
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
                          key: '0-3-16',
                          id: 'root.body.approveOrdNbr',
                          dataKey: '5593934_root.body.approveOrdNbr',
                          value: {
                            type: ['context', '$options_687467$'],
                            code: 'approveOrdNbr',
                          },
                        },
                        {
                          code: 'openFrom',
                          name: '审批工作台打开来源（GAAP表示是个审，为了区分OA打开的与自己打开的）',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.openFrom',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-13',
                          id: 'root.body.openFrom',
                          dataKey: '5593934_root.body.openFrom',
                          value: {
                            type: ['context', '$state.openFrom$'],
                            code: '',
                          },
                        },
                        {
                          code: 'isScreenshot',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.isScreenshot',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-17',
                          id: 'root.body.isScreenshot',
                          dataKey: '5593934_root.body.isScreenshot',
                          value: {
                            type: ['context', '$options_687467$'],
                            code: 'isScreenshot',
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
                      dataKey: '5593934_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '5593934_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170528445458258800,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '414804',
                  pageJsonId: '541575',
                  code: 'function main(data,state,success,fail){var _reply_;var url=(_reply_=reply_5593934)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u8FD4\\u56DE\\u7684\\u8DF3\\u8F6C\\u94FE\\u63A5\\uFF1A",url);if(url){window.open(url)}else{fail()}};',
                  actionTitle: '打开一个新的tab页面',
                },
                line_number: 3,
                callback1: [],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 170528445458280800,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '890411',
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
    eventDatacustomActionCode63.params =
      [
        {
          title: '事件入参',
          name: 'options_687467',
          value: '$options_687467$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode63,
      { options_687467 },
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
    query,
    readyNotify,
    jumpTab,
  }));

  useEffect(() => {
    const eventDataapiRequest201: any = [
      {
        type: 'apiRequest',
        dataId: 170528449554191420,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '789844',
          pageJsonId: '541575',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getSysConfigCacheByCode',
          _apiCode: 'getSysConfigCacheByCode',
          _source: 'rhin',
          _sourceName: '根据分组和编码获取缓存配置-zzz',
          _serviceId: '889805005870690304',
          _serviceTitle:
            '根据分组和编码获取缓存配置-zzz: getSysConfigCacheByCode',
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
                  dataKey: '6630029_root.header',
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
                  dataKey: '6630029_root.path',
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
                  dataKey: '6630029_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'cfCode',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.cfCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.cfCode',
                      dataKey: '6630029_root.body.cfCode',
                      value: { type: ['customize'], code: 'OPEN_NEW_TAB' },
                    },
                    {
                      code: 'cfGroupCode',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.cfGroupCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.cfGroupCode',
                      dataKey: '6630029_root.body.cfGroupCode',
                      value: { type: ['customize'], code: 'SYSTEM' },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '6630029_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '6630029_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170528449554153120,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6727767',
              pageJsonId: '541575',
              dataSourceId: 170528451788095200,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '258086',
                  code: 'openNewTab',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$reply_789844?.resultData.cfValue$'],
                    hideAttr: true,
                    code: '',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 170528449554109630,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '593383',
                  pageJsonId: '541575',
                  value: ['查询后的数据源pageData：', '$data.pageData$'],
                },
                line_number: 3,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest201.params = [] || [];
    CMDGenerator(eventDataapiRequest201, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest202: any = [
      {
        type: 'apiRequest',
        dataId: 167888092038284770,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4797203',
          pageJsonId: '541575',
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
              parents: [],
              id: 'header',
              dataKey: '4797203_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4797203_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4797203_query',
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
                      parents: ['body', 'privilegeCodes'],
                      id: 'body.privilegeCodes.listItem',
                      dataKey: '4797203_body.privilegeCodes.listItem',
                    },
                  ],
                  _id: 'body.privilegeCodes',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.privilegeCodes',
                  dataKey: '4797203_body.privilegeCodes',
                  value: {
                    type: ['customize'],
                    code: '["F_SYNTHESIZE_QRY_EXPORT_CONFIG","F_SYNTHESIZE_QRY_EXPORT_RESULT"]',
                  },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4797203_body',
            },
          ],
          _sourceName: '查询是否有权限-tsm',
        },
        line_number: 4,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '771183',
                options: {
                  context:
                    '$reply_4797203?.resultData.F_SYNTHESIZE_QRY_EXPORT_CONFIG$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888097737755300,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888100774457470,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888104104068670,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: 'Button_912732_333384',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '608508',
                      visible: '',
                    },
                    actionObjId: 'Button_912732_333384',
                    actionObjName: 'Button',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 7,
                  },
                ],
                condition: [],
                desc: '无导出列配置权限',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888104104068670,
                    options: {
                      compId: 'Button_912732_333384',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '608508',
                      visible: '',
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            line_number: 5,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888102076938270,
                options: {
                  compId: 'Button_912732_333384',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Button',
                  id: '139261',
                  visible: 'true',
                },
                line_number: 6,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '0732823',
                options: {
                  context:
                    '$reply_4797203?.resultData.F_SYNTHESIZE_QRY_EXPORT_RESULT$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888105585016450,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888108594024540,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888110122276480,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: 'Button_7469188_87179',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '8650687',
                      visible: '',
                    },
                    actionObjId: 'Button_7469188_87179',
                    actionObjName: 'Button',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 10,
                  },
                ],
                condition: [],
                desc: '无导出结果权限',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888110122276480,
                    options: {
                      compId: 'Button_7469188_87179',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '8650687',
                      visible: '',
                    },
                    line_number: 10,
                  },
                ],
              },
            ],
            line_number: 8,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888109438034600,
                options: {
                  compId: 'Button_7469188_87179',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Button',
                  id: '144917',
                  visible: 'true',
                },
                line_number: 9,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest202.params = [] || [];
    CMDGenerator(eventDataapiRequest202, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest203: any = [
      {
        type: 'apiRequest',
        dataId: 168118022231017380,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '243416',
          pageJsonId: '541575',
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
              dataKey: '0459555_header',
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
                  dataKey: '0459555_path.attrCode',
                  value: { type: ['customize'], code: 'busiObjStatus' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '0459555_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '0459555_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0459555_body',
            },
          ],
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168118051531075680,
            options: {
              compId: 'MultipleSelect_6896146_382474_219448_748634_681999',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'MultipleSelect',
              id: '3657398',
              data: '$reply_243416?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest203.params = [] || [];
    CMDGenerator(eventDataapiRequest203, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc25: any = [
      {
        type: 'callSelfFunc',
        dataId: 167143328890892480,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '912599',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: { pageNum: '1', isDraft: 'false', pageSize: '10' },
          paramsObjKeyValueMap: {
            pageNum: '1',
            isDraft: 'false',
            pageSize: '10',
          },
        },
        line_number: 13,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc25.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc25, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse120: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '312912',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.origin$',
              operate: '==',
              manualValue: '0',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167955478536022560,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167955480897620350,
            children: [
              {
                dataName: 'action',
                dataId: 167955481600054700,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167955481600122270,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167955481600199170,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167955481600141120,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                        ],
                        todoOptions: [
                          'dataSource',
                          'labelKey',
                          'nodeValueKey',
                          'selectable',
                          'childrenKey',
                        ],
                        options: {
                          compId:
                            'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '7881257',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                          data: '$reply_998022?.resultData$',
                        },
                        actionObjId:
                          'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                        actionObjName: 'TreeSelect',
                        value: 'reloadData',
                        compLib: 'comm',
                        line_number: 18,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 167955481600119520,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '998022',
                  pageJsonId: '541575',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAlltreeNode',
                  _apiCode: 'qryAlltreeNode',
                  _source: 'rhin',
                  _serviceId: '946058969512980480',
                  _serviceTitle:
                    '根据编码查询所有节点及节点下的数据: qryAlltreeNode',
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
                      dataKey: '998022_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '998022_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '998022_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'nodeValue',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeValue',
                          compType: 'Input',
                          name: 'nodeValue',
                          parents: ['body'],
                          id: 'body.nodeValue',
                          dataKey: '998022_body.nodeValue',
                        },
                        {
                          code: 'nodeKey',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeKey',
                          compType: 'Input',
                          name: 'nodeKey',
                          parents: ['body'],
                          id: 'body.nodeKey',
                          dataKey: '998022_body.nodeKey',
                          value: { type: ['customize'], code: 'SC' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '998022_body',
                    },
                  ],
                },
                actionObjId: 'apiRequest',
                actionObjName: 'system',
                value: 'apiRequest',
                line_number: 17,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.origin$',
                  operate: '==',
                  manualValue: '1',
                },
                condId: '7398797',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '市场工作台',
            callback: [
              {
                type: 'apiRequest',
                dataId: 167955481600054700,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '998022',
                  pageJsonId: '541575',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAlltreeNode',
                  _apiCode: 'qryAlltreeNode',
                  _source: 'rhin',
                  _serviceId: '946058969512980480',
                  _serviceTitle:
                    '根据编码查询所有节点及节点下的数据: qryAlltreeNode',
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
                      dataKey: '998022_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '998022_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '998022_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'nodeValue',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeValue',
                          compType: 'Input',
                          name: 'nodeValue',
                          parents: ['body'],
                          id: 'body.nodeValue',
                          dataKey: '998022_body.nodeValue',
                        },
                        {
                          code: 'nodeKey',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeKey',
                          compType: 'Input',
                          name: 'nodeKey',
                          parents: ['body'],
                          id: 'body.nodeKey',
                          dataKey: '998022_body.nodeKey',
                          value: { type: ['customize'], code: 'SC' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '998022_body',
                    },
                  ],
                },
                line_number: 17,
                callback1: [
                  {
                    type: 'reloadData',
                    dataId: 167955481600199170,
                    options: {
                      compId:
                        'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '7881257',
                      labelKey: 'nodeValue',
                      nodeValueKey: 'nodeKey',
                      childrenKey: 'children',
                      data: '$reply_998022?.resultData$',
                    },
                    line_number: 18,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 167955596880818530,
            children: [
              {
                dataName: 'action',
                dataId: 167955597831538700,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167955597831530660,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167955597831566560,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167955597831576130,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                        ],
                        todoOptions: [
                          'dataSource',
                          'labelKey',
                          'nodeValueKey',
                          'selectable',
                          'childrenKey',
                        ],
                        options: {
                          compId:
                            'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '3947566',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                          data: '$reply_413486?.resultData$',
                        },
                        actionObjId:
                          'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                        actionObjName: 'TreeSelect',
                        value: 'reloadData',
                        compLib: 'comm',
                        line_number: 20,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 167955597831555070,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '413486',
                  pageJsonId: '541575',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAlltreeNode',
                  _apiCode: 'qryAlltreeNode',
                  _source: 'rhin',
                  _serviceId: '946058969512980480',
                  _serviceTitle:
                    '根据编码查询所有节点及节点下的数据: qryAlltreeNode',
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
                      dataKey: '413486_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '413486_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '413486_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'nodeValue',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeValue',
                          compType: 'Input',
                          name: 'nodeValue',
                          parents: ['body'],
                          id: 'body.nodeValue',
                          dataKey: '413486_body.nodeValue',
                        },
                        {
                          code: 'nodeKey',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeKey',
                          compType: 'Input',
                          name: 'nodeKey',
                          parents: ['body'],
                          id: 'body.nodeKey',
                          dataKey: '413486_body.nodeKey',
                          value: { type: ['customize'], code: '-1' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '413486_body',
                    },
                  ],
                },
                actionObjId: 'apiRequest',
                actionObjName: 'system',
                value: 'apiRequest',
                line_number: 19,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'apiRequest',
                dataId: 167955597831538700,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '413486',
                  pageJsonId: '541575',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAlltreeNode',
                  _apiCode: 'qryAlltreeNode',
                  _source: 'rhin',
                  _serviceId: '946058969512980480',
                  _serviceTitle:
                    '根据编码查询所有节点及节点下的数据: qryAlltreeNode',
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
                      dataKey: '413486_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '413486_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '413486_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'nodeValue',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeValue',
                          compType: 'Input',
                          name: 'nodeValue',
                          parents: ['body'],
                          id: 'body.nodeValue',
                          dataKey: '413486_body.nodeValue',
                        },
                        {
                          code: 'nodeKey',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.nodeKey',
                          compType: 'Input',
                          name: 'nodeKey',
                          parents: ['body'],
                          id: 'body.nodeKey',
                          dataKey: '413486_body.nodeKey',
                          value: { type: ['customize'], code: '-1' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '413486_body',
                    },
                  ],
                },
                line_number: 19,
                callback1: [
                  {
                    type: 'reloadData',
                    dataId: 167955597831566560,
                    options: {
                      compId:
                        'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '3947566',
                      labelKey: 'nodeValue',
                      nodeValueKey: 'nodeKey',
                      childrenKey: 'children',
                      data: '$reply_413486?.resultData$',
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
        line_number: 14,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167955479728231500,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '414335',
              pageJsonId: '541575',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryAlltreeNode',
              _apiCode: 'qryAlltreeNode',
              _source: 'rhin',
              _serviceId: '946058969512980480',
              _serviceTitle:
                '根据编码查询所有节点及节点下的数据: qryAlltreeNode',
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
                  dataKey: '414335_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '414335_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '414335_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'nodeValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.nodeValue',
                      compType: 'Input',
                      name: 'nodeValue',
                      parents: ['body'],
                      id: 'body.nodeValue',
                      dataKey: '414335_body.nodeValue',
                    },
                    {
                      code: 'nodeKey',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.nodeKey',
                      compType: 'Input',
                      name: 'nodeKey',
                      parents: ['body'],
                      id: 'body.nodeKey',
                      dataKey: '414335_body.nodeKey',
                      value: { type: ['customize'], code: 'ZQ' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '414335_body',
                },
              ],
            },
            line_number: 15,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167955479728209630,
                options: {
                  compId:
                    'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'TreeSelect',
                  id: '194774',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  childrenKey: 'children',
                  data: '$reply_414335?.resultData$',
                },
                line_number: 16,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse120.params = [] || [];
    CMDGenerator(eventDataifelse120, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacustomActionCode244: any = [
      {
        type: 'customActionCode',
        dataId: 167592226102558340,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '717324',
          pageJsonId: '541575',
          actionTitle: '初始化已选列',
          code: 'function main(data,state,success,fail){var selectedRowDef={};selectedRowDef["busiObjNbr"]="\\u5BA1\\u6279\\u5355\\u53F7";selectedRowDef["title"]="\\u5BA1\\u6279\\u5355\\u4E3B\\u9898";selectedRowDef["childCatalogName"]="\\u573A\\u666F\\u540D\\u79F0";selectedRowDef["createStaffName"]="\\u53D1\\u8D77\\u4EBA\\u59D3\\u540D";selectedRowDef["createStaff"]="\\u53D1\\u8D77\\u4EBA\\u5DE5\\u53F7";selectedRowDef["addrName"]="\\u5F52\\u5C5E\\u5730\\u5E02";selectedRowDef["createDate"]="\\u521B\\u5EFA\\u65F6\\u95F4";selectedRowDef["lastHandleTime"]="\\u6700\\u540E\\u5904\\u7406\\u65F6\\u95F4";selectedRowDef["tacheName"]="\\u5F53\\u524D\\u73AF\\u8282";selectedRowDef["handleStaffName"]="\\u5F53\\u524D\\u73AF\\u8282\\u5904\\u7406\\u4EBA";data.selectedRow=selectedRowDef;success()};',
        },
        line_number: 21,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode244.params = [] || [];
    CMDGenerator(eventDatacustomActionCode244, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_541575__"
    >
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_541575_1_200529_475974_265917_515541_776758',
          uid: 'View_541575_1_200529_475974_265917_515541_776758',
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
        ref={(r: any) =>
          (refs['View_541575_1_200529_475974_265917_515541_776758'] = r)
        }
        {...injectData}
      >
        <View
          name={'查询类型'}
          fieldName={'data.global_variable.queryType'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_065343_473472_05015_3702278_362488_208726',
            uid: 'View_065343_473472_05015_3702278_362488_208726',
            type: 'View',
            ...componentItem,
          }}
          disabled={
            `${
              !!IF(
                '$data?.global_variable?.queryType$' == 'MyDraft',
                false,
                true,
              ) === false
                ? 2
                : 1
            }` === '3'
          }
          visible={
            `${
              !!IF(
                '$data?.global_variable?.queryType$' == 'MyDraft',
                false,
                true,
              ) === false
                ? 2
                : 1
            }` !== '2'
          }
          readOnly={
            `${
              !!IF(
                '$data?.global_variable?.queryType$' == 'MyDraft',
                false,
                true,
              ) === false
                ? 2
                : 1
            }` === '4'
          }
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) =>
            (refs['View_065343_473472_05015_3702278_362488_208726'] = r)
          }
          {...injectData}
        >
          <Card
            name={'卡片'}
            cardIconType={'middle'}
            title={'审批单待办'}
            bordered={true}
            size={'default'}
            hasHeader={false}
            hasIcon={true}
            className={'card-hidden-scroll'}
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
              id: 'Card_012576_415337_8750113_6572666_89382_805898',
              uid: 'Card_012576_415337_8750113_6572666_89382_805898',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) =>
              (refs['Card_012576_415337_8750113_6572666_89382_805898'] = r)
            }
            {...injectData}
          >
            <Form
              name={'普通查询条件'}
              colSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_126816'}
              $$componentItem={{
                id: 'Form_126816_34484_8490105_282851_768365_026917',
                uid: 'Form_126816_34484_8490105_282851_768365_026917',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs['Form_126816_34484_8490105_282851_768365_026917'] = r)
              }
              {...injectData}
            >
              <Input
                name={'审批单编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
                wrapperCol={'16'}
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
                fieldName={'approveOrdNbr'}
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
                  id: 'Input_8789281_279559_7694383_316381_877823_066734',
                  uid: 'Input_8789281_279559_7694383_316381_877823_066734',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc333: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166372531611285300,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '703487',
                        pageJsonId: '541575',
                        customFuncName: 'query',
                        customFuncParams: 'object',
                        paramsObj: { pageNum: '1' },
                        paramsObjKeyValueMap: { pageNum: '1' },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc333.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc333,
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
                  (refs['Input_8789281_279559_7694383_316381_877823_066734'] =
                    r)
                }
                {...injectData}
              />
              <Input
                name={'发起人'}
                size={'default'}
                selfSpan={8}
                labelCol={'8'}
                wrapperCol={'16'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'搜索'}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'createStaffName'}
                formItemIndex={1}
                prefixIcon={{
                  prefixIconType: '',
                  prefixIconTheme: '',
                  prefixIconFontAddress: '',
                  prefixIconIsIconFont: false,
                }}
                icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
                postfixStyle={'3'}
                allowClear={true}
                $$componentItem={{
                  id: 'Input_836023_877021_478428_405339_157414_186206',
                  uid: 'Input_836023_877021_478428_405339_157414_186206',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal82: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166372843814080600,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '659342',
                        pageJsonId: '541575',
                        modalname: '/creator/selectoneuser',
                        pageId: '900338214677487616',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setValue',
                          dataId: 166372870845713540,
                          options: {
                            compId:
                              'Input_836023_877021_478428_405339_157414_186206',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Input',
                            id: '262052',
                            value: '$okData_659342?.staffSelect?.userName$',
                          },
                          line_number: 2,
                          callback1: [],
                        },
                        {
                          type: 'setValue',
                          dataId: 166373946367909860,
                          options: {
                            compId:
                              'Input_295293_055905_56795_141712_648377_1884803',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Input',
                            id: '399972',
                            value: '$okData_659342?.staffSelect?.userCode$',
                          },
                          line_number: 3,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal82.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal82,
                    {},
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
                  (refs['Input_836023_877021_478428_405339_157414_186206'] = r)
                }
                {...injectData}
              />
              <TreeSelect
                name={'场景名称'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                selfSpan={''}
                labelCol={'8'}
                wrapperCol={'16'}
                treeDefaultExpandAll={true}
                size={'default'}
                showSearch={false}
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
                formItemIndex={2}
                fieldName={'catalogValue'}
                treeCheckable={false}
                treeColumns={{
                  key: 'nodeKey',
                  title: 'nodeValue',
                  children: 'children',
                  selectedService: {
                    isServiceParam: true,
                    productId: '11039',
                    busiApiId: '874896712636026880',
                    busiApiNbr: 'selectAlltreeNodeCode',
                    busiApiName: '获取树的所有节点-hdb',
                    busiObjId: '874896712636026880',
                    apiParam:
                      '[{"apiId":874896712636026880,"apiParamId":874896712757661696,"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"objId":874896712636026880,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":874896712761856000,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":874896712761856000,"serviceObjectPath":"874896712761856000","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},"paramObjectId":874896712761856000,"paramType":"1000","statusCd":"1000","statusDate":1660198031071,"tenantCode":"868768414651416576"},{"apiId":874896712636026880,"apiParamId":874896712766050304,"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"objId":874896712636026880,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":874896712766050305,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":874896712766050305,"serviceObjectPath":"874896712766050305","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},"paramObjectId":874896712766050305,"paramType":"2000","statusCd":"1000","statusDate":1660198031071,"tenantCode":"868768414651416576"},{"apiId":874896712636026880,"apiParamId":874896712766050306,"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"objId":874896712636026880,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":874896712766050307,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":874896712766050307,"serviceObjectPath":"874896712766050307","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},"paramObjectId":874896712766050307,"paramType":"3000","statusCd":"1000","statusDate":1660198031071,"tenantCode":"868768414651416576"},{"apiId":874896712636026880,"apiParamId":874896712766050308,"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"objId":874896712636026880,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点","rootServiceObjectId":874896712766050309,"serviceObject":[],"serviceObjectAttrs":[{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"ONE_JCL","mustFlag":"F","serviceObjAttrId":874896904399605760,"serviceObjectId":874896712766050309,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":874896712766050309,"serviceObjectPath":"874896712766050309","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},"paramObjectId":874896712766050309,"paramType":"4000","statusCd":"1000","statusDate":1660198031071,"tenantCode":"868768414651416576"},{"apiId":874896712636026880,"apiParamId":874896712766050310,"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"objId":874896712636026880,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660198031071,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":874896712770244608,"serviceObject":[{"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"isList":"T","level":2,"parServiceObjectId":874896712770244608,"paramType":"5000","rootServiceObjectId":874896712770244608,"serviceObject":[{"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"isList":"T","level":3,"parServiceObjectId":874896904437354496,"paramType":"5000","rootServiceObjectId":874896712770244608,"serviceObject":[],"serviceObjectAttrs":[{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"THREE_ZQKHFWFSQ","mustFlag":"F","serviceObjAttrId":874896904491880449,"serviceObjectId":874896904437354497,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"政企客户服务费申请","mustFlag":"F","serviceObjAttrId":874896904496074752,"serviceObjectId":874896904437354497,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":1309,"attrSpec":{"attrId":1309,"attrName":"children","attrNbr":"children","attrValueDataType":"1700","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"[]","mustFlag":"F","serviceObjAttrId":874896904496074753,"serviceObjectId":874896904437354497,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"TWO_ZQKHFWSQ","mustFlag":"F","serviceObjAttrId":874896904491880448,"serviceObjectId":874896904437354497,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"}],"serviceObjectCode":"children","serviceObjectId":874896904437354497,"serviceObjectPath":"874896712770244608,874896904437354496,874896904437354497","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"ONE_JCL","mustFlag":"F","serviceObjAttrId":874896904512851968,"serviceObjectId":874896904437354496,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"TWO_ZQKHFWSQ","mustFlag":"F","serviceObjAttrId":874896904512851969,"serviceObjectId":874896904437354496,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"政企客户服务费申请","mustFlag":"F","serviceObjAttrId":874896904512851970,"serviceObjectId":874896904437354496,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":874896904437354496,"serviceObjectPath":"874896712770244608,874896904437354496","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"mustFlag":"F","serviceObjAttrId":874896904529629186,"serviceObjectId":874896712770244608,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":1226,"attrSpec":{"attrId":1226,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":874896904529629184,"serviceObjectId":874896712770244608,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},{"attrId":1227,"attrSpec":{"attrId":1227,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660198076112,"createStaff":50169,"exampleValue":"处理成功","mustFlag":"F","serviceObjAttrId":874896904529629185,"serviceObjectId":874896712770244608,"statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":874896712770244608,"serviceObjectPath":"874896712770244608","statusCd":"1000","statusDate":1665576067157,"tenantCode":"868768414651416576"},"paramObjectId":874896712770244608,"paramType":"5000","statusCd":"1000","statusDate":1660198031071,"tenantCode":"868768414651416576"}]',
                    request: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                          _id: 'header',
                          compType: 'Input',
                          parents: [],
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'nodeKey',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.nodeKey',
                              compType: 'Input',
                              name: 'nodeKey',
                              parents: ['body'],
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                        },
                      ],
                    },
                    response: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'resultMsgCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'resultMsgCode',
                          name: 'resultMsgCode',
                        },
                        {
                          code: 'resultCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'resultCode',
                          name: 'resultCode',
                        },
                        {
                          code: 'resultMsg',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'resultMsg',
                          name: 'resultMsg',
                        },
                        {
                          code: 'resultData',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'parentCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'resultData.parentCode',
                              name: 'parentCode',
                            },
                            {
                              code: 'nodeKey',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'resultData.nodeKey',
                              name: 'nodeKey',
                            },
                            {
                              code: 'nodeValue',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'resultData.nodeValue',
                              name: 'nodeValue',
                            },
                            {
                              code: 'children',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'nodeKey',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'resultData.children.nodeKey',
                                  name: 'nodeKey',
                                },
                                {
                                  code: 'nodeValue',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'resultData.children.nodeValue',
                                  name: 'nodeValue',
                                },
                                {
                                  code: 'children',
                                  attrType: 'fieldArray',
                                  mustFlag: 'F',
                                  children: [
                                    {
                                      code: 'listItem',
                                      name: '列表元素',
                                      attrType: 'field',
                                      type: 'object',
                                      _id: 'resultData.children.children.listItem',
                                    },
                                  ],
                                  _id: 'resultData.children.children',
                                  name: 'children',
                                },
                                {
                                  code: 'parentCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'resultData.children.parentCode',
                                  name: 'parentCode',
                                },
                              ],
                              _id: 'resultData.children',
                              name: 'children',
                            },
                          ],
                          _id: 'resultData',
                          name: 'resultData',
                        },
                      ],
                    },
                    api: '/app/rhin/gateway/callRhinEngine',
                    _source: 'rhin',
                    _serviceId: '874896712636026880',
                    _serviceTitle:
                      '获取树的所有节点-hdb: selectAlltreeNodeCode',
                    _capabilityCode: 'selectAlltreeNodeCode',
                    _apiCode: 'selectAlltreeNodeCode',
                    requestType: 'object',
                    responseType: 'object',
                  },
                }}
                treeService={{
                  appId: '871672424566726656',
                  _serviceId: '874896712636026880',
                  _source: 'rhin',
                  api: '/app/rhin/gateway/callRhinEngine',
                  key: 'nodeKey',
                  title: 'nodeValue',
                  children: 'children',
                }}
                placeholder={'请选择'}
                allowClear={true}
                filter={'local'}
                $$componentItem={{
                  id: 'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                  uid: 'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                  type: 'TreeSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(value: any, label: any, extra: any) => {
                  const eventDataifelse418: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '86002',
                          options: { context: '$value$', operate: 'empty' },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166626606781277300,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166626941177895360,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166626942727566400,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166626942727583140,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: ['value'],
                              options: {
                                compId: [
                                  'Input_116573_26982_403393_072968_751494_1233534',
                                ],
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '771525',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                                valueList: {
                                  Input_116573_26982_403393_072968_751494_1233534:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                compid: [
                                  'Input_116573_26982_403393_072968_751494_1233534',
                                ],
                              },
                              actionObjId:
                                'Input_116573_26982_403393_072968_751494_1233534',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              elseIfs: [],
                              line_number: 3,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 166626942727566400,
                              options: {
                                compId: [
                                  'Input_116573_26982_403393_072968_751494_1233534',
                                ],
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '771525',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                                valueList: {
                                  Input_116573_26982_403393_072968_751494_1233534:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                compid: [
                                  'Input_116573_26982_403393_072968_751494_1233534',
                                ],
                              },
                              line_number: 3,
                              callback1: [],
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'clearValue',
                          dataId: 167144034982643740,
                          options: {
                            compId:
                              'Input_116573_26982_403393_072968_751494_1233534',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Input',
                            id: '559238',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse418.params =
                    [
                      { title: '节点key', name: 'value', value: '$value$' },
                      { title: '节点名称', name: 'label', value: '$label$' },
                      {
                        title: '节点数据',
                        name: 'extra',
                        value: '$extra.triggerNode.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse418,
                    { value, label, extra },
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
                  (refs[
                    'TreeSelect_07743_807969_276729_0954643_904744_2077655'
                  ] = r)
                }
                {...injectData}
              />
              <Input
                name={'审批单主题'}
                size={'default'}
                selfSpan={16}
                labelCol={'4'}
                wrapperCol={'20'}
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
                fieldName={'title'}
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
                  id: 'Input_85608_061495_715949_84455_302445_784239',
                  uid: 'Input_85608_061495_715949_84455_302445_784239',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_85608_061495_715949_84455_302445_784239'] = r)
                }
                {...injectData}
              />
              <MultipleSelect
                name={'状态'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
                wrapperCol={'16'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                placeholder={'请选择'}
                mode={'multiple'}
                formItemIndex={4}
                fieldName={'busiObjStatusList'}
                dataSource={{ selectedService: {} }}
                $$componentItem={{
                  id: 'MultipleSelect_6896146_382474_219448_748634_681999',
                  uid: 'MultipleSelect_6896146_382474_219448_748634_681999',
                  type: 'MultipleSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['MultipleSelect_6896146_382474_219448_748634_681999'] =
                    r)
                }
                {...injectData}
              />
            </Form>
            <View
              name={'高级查询条件'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_158841_0371773_652933_2275427_708486_46303',
                uid: 'View_158841_0371773_652933_2275427_708486_46303',
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
              ref={(r: any) =>
                (refs['View_158841_0371773_652933_2275427_708486_46303'] = r)
              }
              {...injectData}
            >
              <BusiComp416634
                busiCompId={'955762952733732864'}
                name={'用户区域二级联动'}
                style={{ margin: '12px 0px 12px 0px' }}
                ref={(r: any) => (refs['BOFramer_838105'] = r)}
                {...injectData}
              />
              <Form
                name={'创建时间表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_071412'}
                $$componentItem={{
                  id: 'Form_071412_23739_6003683_675321_569004_572759',
                  uid: 'Form_071412_23739_6003683_675321_569004_572759',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '12px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  (refs['Form_071412_23739_6003683_675321_569004_572759'] = r)
                }
                {...injectData}
              >
                <Input
                  name={'外部工单号'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'8'}
                  wrapperCol={'16'}
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
                  fieldName={'extBusiObjNbr'}
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
                    id: 'Input_421306_059794_015079_6574069_175269_2559798',
                    uid: 'Input_421306_059794_015079_6574069_175269_2559798',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc335: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166372535664147140,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '949779',
                          pageJsonId: '541575',
                          customFuncName: 'query',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '1' },
                          paramsObjKeyValueMap: { pageNum: '1' },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc335.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc335,
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
                    (refs['Input_421306_059794_015079_6574069_175269_2559798'] =
                      r)
                  }
                  {...injectData}
                />
                <RangePicker
                  name={'创建时间'}
                  timeMode={'date'}
                  format={'YYYY-MM-DD'}
                  separator={'~'}
                  size={'default'}
                  selfSpan={16}
                  labelCol={'4'}
                  wrapperCol={'12'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={false}
                  pickerType={'RangePicker'}
                  formItemIndex={1}
                  fieldName={'createTime'}
                  showTime={false}
                  $$componentItem={{
                    id: 'RangePicker_0811484_02404_122143_4701901_011063_1405673',
                    uid: 'RangePicker_0811484_02404_122143_4701901_011063_1405673',
                    type: 'RangePicker',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'RangePicker_0811484_02404_122143_4701901_011063_1405673'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
              <Form
                name={'隐藏表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={'16'}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_9423813'}
                $$componentItem={{
                  id: 'Form_9423813_486326_231002_133159_154259_527665',
                  uid: 'Form_9423813_486326_231002_133159_154259_527665',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '12px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  (refs['Form_9423813_486326_231002_133159_154259_527665'] = r)
                }
                {...injectData}
              >
                <Input
                  name={'发起人值'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={8}
                  wrapperCol={'16'}
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
                  fieldName={'createStaff'}
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
                    id: 'Input_295293_055905_56795_141712_648377_1884803',
                    uid: 'Input_295293_055905_56795_141712_648377_1884803',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_295293_055905_56795_141712_648377_1884803'] =
                      r)
                  }
                  {...injectData}
                />
                <Input
                  name={'场景类型'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={8}
                  wrapperCol={'16'}
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
                  fieldName={'catalogType'}
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
                    id: 'Input_116573_26982_403393_072968_751494_1233534',
                    uid: 'Input_116573_26982_403393_072968_751494_1233534',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_116573_26982_403393_072968_751494_1233534'] =
                      r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
            <View
              name={'布局容器'}
              formItemIndex={2}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_445165_7123897_657787_86374398_163868_526544_405938',
                uid: 'View_445165_7123897_657787_86374398_163868_526544_405938',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'block',
                padding: 'px px px px',
                width: '100%',
                textAlign: 'center',
                fontSize: '',
              }}
              ref={(r: any) =>
                (refs[
                  'View_445165_7123897_657787_86374398_163868_526544_405938'
                ] = r)
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
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_616697_531957_2353575_491687_570996345_136483_32587',
                  uid: 'Button_616697_531957_2353575_491687_570996345_136483_32587',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc336: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166372534775213060,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '3379907',
                        pageJsonId: '541575',
                        customFuncName: 'query',
                        customFuncParams: 'object',
                        paramsObj: { pageNum: '1' },
                        paramsObjKeyValueMap: { pageNum: '1' },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc336.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc336,
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
                  (refs[
                    'Button_616697_531957_2353575_491687_570996345_136483_32587'
                  ] = r)
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
                  id: 'Button_505213_248117_519902_7821423_005463_132764_639604',
                  uid: 'Button_505213_248117_519902_7821423_005463_132764_639604',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDataclearValue104: any = [
                    {
                      type: 'clearValue',
                      dataId: 166626919455524860,
                      options: {
                        compId:
                          'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'TreeSelect',
                        id: '66017625',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue104.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue104, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatasetCompState6: any = [
                    {
                      type: 'setCompState',
                      dataId: 167955179255227620,
                      options: {
                        compId: 'BOFramer_838105',
                        compLib: '@/components',
                        pageJsonId: '541575',
                        compName: 'BOFramer',
                        id: '2859213',
                        paramsObj: { resetPerform: 'Y' },
                        paramsObjKeyValueMap: { resetPerform: 'Y' },
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetCompState6.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetCompState6, { e }, 'setCompState', {
                    id: 'setCompState',
                    name: 'setCompState',
                    type: 'setCompState',
                    platform: 'pc',
                  });
                  const eventDatasetCompState7: any = [
                    {
                      type: 'setCompState',
                      dataId: 167955357949642980,
                      options: {
                        compId: 'BOFramer_838105',
                        compLib: '@/components',
                        pageJsonId: '541575',
                        compName: 'BOFramer',
                        id: '0050775',
                        paramsObj: {},
                        paramsObjKeyValueMap: { resetPerform: '' },
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetCompState7.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetCompState7, { e }, 'setCompState', {
                    id: 'setCompState',
                    name: 'setCompState',
                    type: 'setCompState',
                    platform: 'pc',
                  });
                  const forms56 = getFormByCompId(
                    'Form_126816_34484_8490105_282851_768365_026917',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms56) ? forms56 : [forms56]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms57 = getFormByCompId(
                    'Form_9423813_486326_231002_133159_154259_527665',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms57) ? forms57 : [forms57]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms58 = getFormByCompId(
                    'Form_071412_23739_6003683_675321_569004_572759',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms58) ? forms58 : [forms58]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms59 = getFormByCompId('Form_433981_013405', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms59) ? forms59 : [forms59]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms60 = getFormByCompId('Form_513266_945577', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms60) ? forms60 : [forms60]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms61 = getFormByCompId(
                    'Form_071412_23739_6003683_675321_569004_572759',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms61) ? forms61 : [forms61]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms62 = getFormByCompId(
                    'Form_9423813_486326_231002_133159_154259_527665',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms62) ? forms62 : [forms62]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms63 = getFormByCompId(
                    'Form_126816_34484_8490105_282851_768365_026917',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms63) ? forms63 : [forms63]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) =>
                  (refs[
                    'Button_505213_248117_519902_7821423_005463_132764_639604'
                  ] = r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1400643',
                  uid: 'View_1400643',
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
                  textAlign: 'right',
                }}
                ref={(r: any) => (refs['View_1400643'] = r)}
                {...injectData}
              >
                <Button
                  name={'导出列配置'}
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
                    id: 'Button_912732_333384',
                    uid: 'Button_912732_333384',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatashowCustomModal83: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 167522065200368930,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '567442',
                          pageJsonId: '541575',
                          modalname: '/auditExportRowCfg',
                          pageId: '937904579664711680',
                          modalPath: '/auditExportRowCfg',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 167567682586279580,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '41141',
                              pageJsonId: '541575',
                              code: 'function main(data,state,success,fail){data.selectedRow=okData_567442;success()};',
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal83.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatashowCustomModal83,
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
                  ref={(r: any) => (refs['Button_912732_333384'] = r)}
                  {...injectData}
                />
                <Button
                  name={'导出结果'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'primary'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_7469188_87179',
                    uid: 'Button_7469188_87179',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
                  onClick={(e: any) => {
                    const eventDatagetFormValue6: any = [
                      {
                        type: 'getFormValue',
                        dataId: 167955413984023900,
                        options: {
                          compId: 'BOFramer_838105',
                          compLib: '@/components',
                          pageJsonId: '541575',
                          compName: 'BOFramer',
                          id: '880933',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 167955414664959580,
                            options: {
                              compId: 'Button_7469188_87179',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Button',
                              id: '8473477',
                              loading: true,
                            },
                            line_number: 2,
                          },
                          {
                            type: 'getValue',
                            dataId: 167955415233776160,
                            options: {
                              compId:
                                'TreeSelect_07743_807969_276729_0954643_904744_2077655',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'TreeSelect',
                              id: '05501',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 167955415233775500,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '153643',
                                  pageJsonId: '541575',
                                  code: 'function main(data,state,success,fail){success()};',
                                  actionTitle: '场景值处理',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'getCurrentFormValues',
                                    dataId: 167955415233712770,
                                    options: {
                                      compId:
                                        'Form_071412_23739_6003683_675321_569004_572759',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'Form',
                                      id: '601418',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'console',
                                        dataId: 167955415233797800,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '0123043',
                                          pageJsonId: '541575',
                                          value: [
                                            '$Form_071412_23739_6003683_675321_569004_572759$',
                                          ],
                                        },
                                        line_number: 6,
                                      },
                                      {
                                        type: 'customActionCode',
                                        dataId: 169217165451712960,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '418777',
                                          pageJsonId: '541575',
                                          actionTitle: '给日期添加时分秒',
                                          code: 'function main(data,state,success,fail){var timeForm=Form_071412_23739_6003683_675321_569004_572759;var createTimeList=timeForm["createTime"];if(!!createTimeList&&!!createTimeList[0]&&!!createTimeList[1]){var minTime=createTimeList[0]+" 00:00:00";var maxTime=createTimeList[1]+" 23:59:59";var createTime=[minTime,maxTime];Object.assign(timeForm,{createTime:createTime})}success(timeForm)};',
                                        },
                                        line_number: 7,
                                        callback1: [
                                          {
                                            type: 'console',
                                            dataId: 169217223064108030,
                                            options: {
                                              compId: 'debug',
                                              compName: 'system',
                                              id: '8942111',
                                              pageJsonId: '541575',
                                              value: [
                                                '添加完时间后：',
                                                '$data_418777$',
                                              ],
                                            },
                                            line_number: 8,
                                          },
                                          {
                                            type: 'apiRequest',
                                            dataId: 169217197120041920,
                                            options: {
                                              compId: 'apiRequest',
                                              compName: 'system',
                                              id: '77804',
                                              pageJsonId: '541575',
                                              sync: false,
                                              actionTitle: '',
                                              method: 'post',
                                              url: '/app/rhin/gateway/callRhinEngine',
                                              _capabilityCode:
                                                'qryDcApproveOrdExport',
                                              _apiCode: 'qryDcApproveOrdExport',
                                              _source: 'rhin',
                                              _serviceId: '938694460448714752',
                                              _serviceTitle:
                                                '审批单导出-hdb: qryDcApproveOrdExport',
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
                                                      dataKey:
                                                        '77804_root.header',
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
                                                      dataKey:
                                                        '77804_root.path',
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
                                                      dataKey:
                                                        '77804_root.query',
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
                                                          code: 'approveGrade',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.approveGrade',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.approveGrade',
                                                          dataKey:
                                                            '77804_root.body.approveGrade',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_126816_34484_8490105_282851_768365_026917',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'approveGrade',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-0',
                                                        },
                                                        {
                                                          code: 'approveOrdNbr',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.approveOrdNbr',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.approveOrdNbr',
                                                          dataKey:
                                                            '77804_root.body.approveOrdNbr',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_126816_34484_8490105_282851_768365_026917',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'approveOrdNbr',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-1',
                                                        },
                                                        {
                                                          code: 'regionId',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.regionId',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.regionId',
                                                          dataKey:
                                                            '77804_root.body.regionId',
                                                          value: {
                                                            type: [
                                                              'context',
                                                              '$formValues$',
                                                            ],
                                                            code: 'areaId',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-2',
                                                        },
                                                        {
                                                          code: 'createStaff',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.createStaff',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.createStaff',
                                                          dataKey:
                                                            '77804_root.body.createStaff',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_9423813_486326_231002_133159_154259_527665',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'createStaff',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-3',
                                                        },
                                                        {
                                                          code: 'minCreateTime',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.minCreateTime',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.minCreateTime',
                                                          dataKey:
                                                            '77804_root.body.minCreateTime',
                                                          value: {
                                                            type: [
                                                              'context',
                                                              '$data_418777$',
                                                            ],
                                                            code: 'createTime[0]',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-4',
                                                        },
                                                        {
                                                          code: 'pageNum',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.pageNum',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.pageNum',
                                                          dataKey:
                                                            '77804_root.body.pageNum',
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-5',
                                                        },
                                                        {
                                                          code: 'maxCreateTime',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.maxCreateTime',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.maxCreateTime',
                                                          dataKey:
                                                            '77804_root.body.maxCreateTime',
                                                          value: {
                                                            type: [
                                                              'context',
                                                              '$data_418777$',
                                                            ],
                                                            code: 'createTime[1]',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-6',
                                                        },
                                                        {
                                                          code: 'lanId',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.lanId',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.lanId',
                                                          dataKey:
                                                            '77804_root.body.lanId',
                                                          value: {
                                                            type: [
                                                              'context',
                                                              '$formValues$',
                                                            ],
                                                            code: 'lanId',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-7',
                                                        },
                                                        {
                                                          code: 'catalogValue',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.catalogValue',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.catalogValue',
                                                          dataKey:
                                                            '77804_root.body.catalogValue',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_126816_34484_8490105_282851_768365_026917',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'catalogValue',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-10',
                                                        },
                                                        {
                                                          code: 'catalogType',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.catalogType',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.catalogType',
                                                          dataKey:
                                                            '77804_root.body.catalogType',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_9423813_486326_231002_133159_154259_527665',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'catalogType',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-11',
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
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.pageSize',
                                                          dataKey:
                                                            '77804_root.body.pageSize',
                                                          value: {
                                                            type: [],
                                                            code: '',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-12',
                                                        },
                                                        {
                                                          code: 'extBusiObjNbr',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.extBusiObjNbr',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.extBusiObjNbr',
                                                          dataKey:
                                                            '77804_root.body.extBusiObjNbr',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_071412_23739_6003683_675321_569004_572759',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'extBusiObjNbr',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-13',
                                                        },
                                                        {
                                                          code: 'title',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.title',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.title',
                                                          dataKey:
                                                            '77804_root.body.title',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_126816_34484_8490105_282851_768365_026917',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'title',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-14',
                                                        },
                                                        {
                                                          code: 'busiObjStatusList',
                                                          name: '新增节点',
                                                          attrType:
                                                            'fieldArray',
                                                          mustFlag: 'F',
                                                          children: [
                                                            {
                                                              code: 'listItem',
                                                              name: '列表元素',
                                                              attrType: 'field',
                                                              type: 'object',
                                                              _id: 'root.body.busiObjStatusList.listItem',
                                                              compType: 'Input',
                                                              parents: [
                                                                'root',
                                                                'body',
                                                                'busiObjStatusList',
                                                              ],
                                                              id: 'root.body.busiObjStatusList.listItem',
                                                              dataKey:
                                                                '77804_root.body.busiObjStatusList.listItem',
                                                              parentType:
                                                                'fieldArray',
                                                              parentKey:
                                                                '0-3-8',
                                                              key: '0-3-8-0',
                                                              parentCode:
                                                                'busiObjStatusList',
                                                            },
                                                          ],
                                                          _id: 'root.body.busiObjStatusList',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.busiObjStatusList',
                                                          dataKey:
                                                            '77804_root.body.busiObjStatusList',
                                                          value: {
                                                            type: [
                                                              'form',
                                                              'Form_126816_34484_8490105_282851_768365_026917',
                                                              'getFieldsValue',
                                                            ],
                                                            code: 'busiObjStatusList',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-8',
                                                        },
                                                        {
                                                          code: 'dcOrdQuery',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'object',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.dcOrdQuery',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.dcOrdQuery',
                                                          dataKey:
                                                            '77804_root.body.dcOrdQuery',
                                                          value: {
                                                            type: ['customize'],
                                                            code: '$data.selectedRow$',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-9',
                                                        },
                                                      ],
                                                      _id: 'root.body',
                                                      compType: 'Input',
                                                      parents: ['root'],
                                                      id: 'root.body',
                                                      dataKey:
                                                        '77804_root.body',
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
                                                  dataKey: '77804_root',
                                                },
                                              ],
                                              _sourceName: '审批单导出-hdb',
                                            },
                                            line_number: 9,
                                            callback1: [
                                              {
                                                type: 'downloadByFileId',
                                                dataId: 169217197120082620,
                                                options: {
                                                  compId: 'downloadByFileId',
                                                  compName: 'system',
                                                  id: '96086',
                                                  pageJsonId: '541575',
                                                  data: '$reply_77804.resultData.fileId$',
                                                },
                                                line_number: 10,
                                              },
                                              {
                                                type: 'setLoading',
                                                dataId: 169217197120003360,
                                                options: {
                                                  compId:
                                                    'Button_7469188_87179',
                                                  compLib: 'comm',
                                                  pageJsonId: '541575',
                                                  compName: 'Button',
                                                  id: '9763085',
                                                  loading: false,
                                                },
                                                line_number: 11,
                                              },
                                            ],
                                            callback2: [
                                              {
                                                type: 'setLoading',
                                                dataId: 169217197120059460,
                                                options: {
                                                  compId:
                                                    'Button_7469188_87179',
                                                  compLib: 'comm',
                                                  pageJsonId: '541575',
                                                  compName: 'Button',
                                                  id: '4077',
                                                  loading: false,
                                                },
                                                line_number: 12,
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
                            ],
                          },
                        ],
                      },
                    ];
                    eventDatagetFormValue6.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatagetFormValue6,
                      { e },
                      'getFormValue',
                      {
                        id: 'getFormValue',
                        name: 'getFormValue',
                        type: 'getFormValue',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Button_7469188_87179'] = r)}
                  {...injectData}
                />
              </View>
            </View>
            <Table
              name={'total'}
              isFlexColumn={false}
              pageSize={data?.qryDcApproveOrdPage?.resultData?.size}
              current={data?.qryDcApproveOrdPage?.resultData?.current}
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
                  title: '审批单编码',
                  key: 'approveOrdNbr',
                  dataIndex: 'approveOrdNbr',
                  className: '',
                  id: '088558',
                  customRendering:
                    '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  if (row.busiObjSubType === "1002") {    return \'<span style="color: blue">\' + text + \'</span>\';  }  return text;}',
                  originCustomRendering: [
                    '   /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '  if (row.busiObjSubType === "1002") {',
                    "    return '<span style=\"color: blue\">' + text + '</span>';",
                    '  }',
                    '  return  text;',
                    '}',
                  ],
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
                  title: '审批单主题',
                  key: 'title',
                  dataIndex: 'title',
                  className: 'divider',
                  id: '44924',
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
                  id: '546104',
                  dataIndex: 'catalogName',
                  title: '场景名称',
                  key: '546104',
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
                {
                  type: 'staticCol',
                  id: '964677',
                  title: '状态',
                  dataIndex: 'busiObjStatusName',
                  key: '964677',
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
                {
                  title: '发起人姓名',
                  key: 'createStaffName',
                  dataIndex: 'createStaffName',
                  className: 'divider',
                  id: '051054',
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
                  title: '环节处理人',
                  key: 'handleStaffName',
                  dataIndex: 'handleStaffName',
                  className: 'divider',
                  id: '534505',
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
                  title: '当前环节',
                  key: 'tacheName',
                  dataIndex: 'tacheName',
                  className: 'divider',
                  id: '938225',
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
                  title: '最后处理时间',
                  key: 'lastHandleTime',
                  dataIndex: 'lastHandleTime',
                  className: 'divider',
                  id: '0011918',
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
                  key: 'createTime',
                  dataIndex: 'createTime',
                  className: 'divider',
                  id: '796288',
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
              showSizeChanger={true}
              showQuickJumper={true}
              pageSizeOptions={'[5,10,20]'}
              rowKey={'approveOrdNbr'}
              total={data?.qryDcApproveOrdPage?.resultData?.total}
              dataSource={data?.qryDcApproveOrdPage?.resultData?.records}
              fieldName={'data.qryDcApproveOrdTodoPage.resultData.total'}
              hiddenAction={false}
              rowActions={[
                {
                  title: '详情',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'file-search' },
                  type: 'detail',
                  id: '750954',
                  rule: '',
                  checked: true,
                },
              ]}
              extend={[]}
              actionWidth={100}
              extendNum={5}
              dataSourceFromDataSourceConfig={
                'data.qryDcApproveOrdPage.resultData.records'
              }
              $$componentItem={{
                id: 'Table_37209506_850459_606135_0368544_489904_4374773',
                uid: 'Table_37209506_850459_606135_0368544_489904_4374773',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '16px 0px 0px 0px' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatacallSelfFunc337: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166389820424598850,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '396761',
                      pageJsonId: '541575',
                      customFuncName: 'query',
                      customFuncParams: 'object',
                      paramsObj: { pageNum: '$page$', pageSize: '$pageSize$' },
                      paramsObjKeyValueMap: {
                        pageNum: '$page$',
                        pageSize: '$pageSize$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc337.params =
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
                  eventDatacallSelfFunc337,
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
                const eventDatagetTableSelectedKey40: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166204272281569760,
                    options: {
                      compId:
                        'Table_37209506_850459_606135_0368544_489904_4374773',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '29205',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166204283508908260,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '527466',
                          pageJsonId: '541575',
                          value: ['$row.workId$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'history',
                        dataId: 166254378079597500,
                        shielding: true,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '265884',
                          pageJsonId: '541575',
                          type: 'push',
                          pathname: '/auditOrderSubmit',
                          selectedType: 'page',
                          paramsObj: {
                            instNbr: '$rowId$',
                            scene: 'V',
                            workId: '$row.workId$',
                            flowCode: '$row.workId$',
                          },
                          paramsObjKeyValueMap: {
                            instNbr: '$rowId$',
                            scene: 'V',
                            workId: '$row.workId$',
                            flowCode: '$row.workId$',
                          },
                          pageId: '884057477263503360',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '9354377',
                            options: {
                              context: '$data.pageData$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.pageData.openNewTab$',
                              operate: '==',
                              manualValue: 'Y',
                            },
                            condId: '144799',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170528458295291170,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170528458295294000,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 170528459720380220,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170528459720322100,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '8615112',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/mergeOrderApprove',
                                      selectedType: 'page',
                                      pageId: '908280951234510848',
                                      paramsObj: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'V',
                                        origin: '0',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'V',
                                        origin: '0',
                                      },
                                      modalPath: '/mergeOrderApprove',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    line_number: 11,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170528459720355300,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170528459720301100,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '85946',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        line_number: 12,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'history',
                                        dataId: 170528459720301100,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '85946',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        line_number: 12,
                                      },
                                    ],
                                  },
                                ],
                                condition: [
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$row.busiObjSubType$',
                                      operate: '==',
                                      manualValue: '1002',
                                    },
                                    condId: '311387',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                desc: '判断是否跳转到合单处理',
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$row.busiObjSubType$',
                                      operate: '==',
                                      manualValue: '1002',
                                    },
                                    condId: '311387',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 170528459720380220,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170528459720355300,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170528459720301100,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '85946',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        line_number: 12,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'history',
                                        dataId: 170528459720301100,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '85946',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '0',
                                            workItemId: '$row.workItemId$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        line_number: 12,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 10,
                                callback1: [
                                  {
                                    type: 'history',
                                    dataId: 170528459720322100,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '8615112',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/mergeOrderApprove',
                                      selectedType: 'page',
                                      pageId: '908280951234510848',
                                      paramsObj: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'V',
                                        origin: '0',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'V',
                                        origin: '0',
                                      },
                                      modalPath: '/mergeOrderApprove',
                                    },
                                    line_number: 11,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$row.busiObjSubType$',
                                  operate: '==',
                                  manualValue: '1002',
                                },
                                condId: '311387',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 170528460727254980,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170528460727295700,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170528460727227620,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '97199',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditDealWith-PC',
                                      selectedType: 'page',
                                      paramsObj: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '0',
                                        workItemId: '$row.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '0',
                                        workItemId: '$row.workItemId$',
                                      },
                                      pageId: '884773713167953920',
                                      modalPath: '/auditDealWith-PC',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    shielding: true,
                                    line_number: 8,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 170528595908367800,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170528595908345540,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170528595908341630,
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
                                      id: '147842',
                                      pageJsonId: '541575',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        origin: '0',
                                        pagePath: 'auditDealWith-PC',
                                        instNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'V',
                                        approveOrdNbr: '',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        origin: '0',
                                        pagePath: 'auditDealWith-PC',
                                        instNbr: '$row.approveOrdNbr$',
                                      },
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 9,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'history',
                                    dataId: 170528460727227620,
                                    shielding: true,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '97199',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditDealWith-PC',
                                      selectedType: 'page',
                                      paramsObj: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '0',
                                        workItemId: '$row.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '0',
                                        workItemId: '$row.workItemId$',
                                      },
                                      pageId: '884773713167953920',
                                      modalPath: '/auditDealWith-PC',
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 170528595908367800,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '147842',
                                      pageJsonId: '541575',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        origin: '0',
                                        pagePath: 'auditDealWith-PC',
                                        instNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'V',
                                        approveOrdNbr: '',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        origin: '0',
                                        pagePath: 'auditDealWith-PC',
                                        instNbr: '$row.approveOrdNbr$',
                                      },
                                    },
                                    line_number: 9,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'history',
                                dataId: 170528460727253920,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '8909599',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/mergeOrderApprove',
                                  selectedType: 'page',
                                  pageId: '908280951234510848',
                                  paramsObj: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'V',
                                    origin: '0',
                                  },
                                  paramsObjKeyValueMap: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'V',
                                    origin: '0',
                                  },
                                  modalPath: '/mergeOrderApprove',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 170528461760437600,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '411797',
                                  pageJsonId: '541575',
                                  customFuncName: 'jumpTab',
                                  customFuncParams: 'object',
                                  paramsObj: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'V',
                                    origin: '0',
                                    pagePath: 'mergeOrderApprove',
                                  },
                                  paramsObjKeyValueMap: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'V',
                                    origin: '0',
                                    pagePath: 'mergeOrderApprove',
                                  },
                                },
                                line_number: 7,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey40.params =
                  [
                    {
                      title: '行id',
                      name: 'rowId',
                      value: '$rowId$',
                      label: '行id',
                    },
                    {
                      title: '行对象',
                      name: 'row',
                      value: '$row$',
                      attrType: 'object',
                      label: '行对象',
                    },
                    {
                      title: '行索引',
                      name: 'index',
                      value: '$index$',
                      label: '行索引',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey40,
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
              ref={(r: any) =>
                (refs['Table_37209506_850459_606135_0368544_489904_4374773'] =
                  r)
              }
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ApproveOrderQuery$$Page, {
  pageId: '922050100039012352',
  hasLogin: false,
  dataSource,
  defaultState: { origin: '', openFrom: '' },
});
