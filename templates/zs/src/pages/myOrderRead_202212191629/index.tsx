// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  TreeSelect,
  MultipleSelect,
  RangePicker,
  Button,
  Table,
} from '@/components/factory';

import BusiComp2086 from '@/components/BusiComp2086';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '922042996011565056';
const MyOrderRead_202212191629$$Page: React.FC<PageProps> = ({
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
  parentEngineId = pageId,
}) => {
  const query = (options_84995934: any) => {
    const eventDatagetFormValue4: any = [
      {
        type: 'getFormValue',
        dataId: 167143867189262000,
        options: {
          compId: 'BOFramer_6134255_4134006_1387917_41145_9069711',
          compLib: '@/components',
          pageJsonId: '541575',
          compName: 'BOFramer',
          id: '531139',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 167143868661976540,
            options: {
              compId: 'Table_37209506_850459_606135_0368544_489904',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Table',
              id: '3498625',
              loading: true,
            },
            line_number: 2,
          },
          {
            type: 'getValue',
            dataId: 167143870227646530,
            options: {
              compId: 'TreeSelect_07743_807969_276729_0954643_904744',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '833179',
            },
            line_number: 3,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167143870911706800,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '3847131',
                  pageJsonId: '541575',
                  code: 'function main(data,state,success,fail){if(!value_833179||!value_833179.length){return success("")}return success(value_833179)};',
                  actionTitle: '场景值处理',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadDataSource',
                    dataId: 167143870911712260,
                    shielding: true,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '0618336',
                      pageJsonId: '541575',
                      dataSourceId: 166201191339691900,
                      dataSourceName: 'qryDcApproveOrdTodoPage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '6704033',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                        },
                        {
                          attrId: '80970834',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                        },
                        {
                          attrId: '0203184',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                        },
                        {
                          attrId: '6462786',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          children: [
                            {
                              attrId: '726113',
                              code: 'extBusiObjNbr',
                              name: 'extBusiObjNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004',
                                  'getFieldsValue',
                                ],
                                code: 'extBusiObjNbr',
                              },
                            },
                            {
                              attrId: '587457',
                              code: 'title',
                              name: 'title',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004',
                                  'getFieldsValue',
                                ],
                                code: 'title',
                              },
                            },
                            {
                              attrId: '200483',
                              code: 'minCreateTime',
                              name: 'minCreateTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004',
                                  'getFieldsValue',
                                ],
                                code: 'createTime[0]',
                              },
                            },
                            {
                              attrId: '7965',
                              code: 'approveGrade',
                              name: 'approveGrade',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365',
                                  'getFieldsValue',
                                ],
                                code: 'approveGrade',
                              },
                            },
                            {
                              attrId: '973868',
                              code: 'maxCreateTime',
                              name: 'maxCreateTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_071412_23739_6003683_675321_569004',
                                  'getFieldsValue',
                                ],
                                code: 'createTime[1]',
                              },
                            },
                            {
                              attrId: '181711',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365',
                                  'getFieldsValue',
                                ],
                                code: 'approveOrdNbr',
                              },
                            },
                            {
                              attrId: '4933575',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: {
                                type: ['context', '$options_84995934$'],
                                code: 'pageNum',
                              },
                            },
                            {
                              attrId: '823621',
                              code: 'lanId',
                              name: 'lanId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: ['context', '$formValues$'],
                                code: 'lanId',
                              },
                            },
                            {
                              attrId: '211303',
                              code: 'busiObjStatusList',
                              name: 'busiObjStatusList',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '$[]$' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '590134',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                              value: {
                                type: [
                                  'form',
                                  'Form_126816_34484_8490105_282851_768365',
                                  'getFieldsValue',
                                ],
                                code: 'busiObjStatusList',
                              },
                            },
                            {
                              attrId: '347783',
                              code: 'regionId',
                              name: 'regionId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: ['context', '$formValues$'],
                                code: 'areaId',
                              },
                            },
                            {
                              attrId: '632095',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: {
                                type: ['context', '$options_84995934$'],
                                code: 'pageSize',
                              },
                            },
                            {
                              attrId: '211301',
                              code: 'loginUserCode',
                              name: 'loginUserCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '2834986',
                              code: 'queryType',
                              name: 'queryType',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: 'Todo' },
                              type: 'string',
                              value: { type: ['customize'], code: 'Read' },
                            },
                            {
                              attrId: '812173',
                              code: 'createStaff',
                              name: 'createStaff',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_9423813_486326_231002_133159_154259',
                                  'getFieldsValue',
                                ],
                                code: 'createStaff',
                              },
                            },
                            {
                              attrId: '4354343',
                              code: 'catalogCode',
                              name: '审批类型',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '892925',
                              code: 'custNameLike',
                              name: '集团名称',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '572475',
                              code: 'childCatalogCode',
                              name: '审批场景',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '7258495',
                              code: 'catalogValue',
                              name: '场景值',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: ['context', '$data_3847131$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '6840453',
                              code: 'catalogType',
                              name: '场景值类型',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: [
                                  'form',
                                  'Form_9423813_486326_231002_133159_154259',
                                  'getFieldsValue',
                                ],
                                code: 'catalogType',
                              },
                            },
                          ],
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '302455',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '489197',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '479545',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '614342',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '036436',
                              code: 'pages',
                              name: 'pages',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '5612557',
                              code: 'orders',
                              name: 'orders',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '3469592',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                            },
                            {
                              attrId: '806859',
                              code: 'optimizeCountSql',
                              name: 'optimizeCountSql',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '00201',
                              code: 'hitCount',
                              name: 'hitCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '826684',
                              code: 'countId',
                              name: 'countId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '975519',
                              code: 'maxLimit',
                              name: 'maxLimit',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '1958206',
                              code: 'searchCount',
                              name: 'searchCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '665284',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '7773136',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '5476424',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '517499',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '509195',
                                  code: 'handleStaffName',
                                  name: 'handleStaffName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '068298',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '084219',
                                  code: 'createStaffName',
                                  name: 'createStaffName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '9899845',
                                  code: 'lastHandleTime',
                                  name: 'lastHandleTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '884655',
                                  code: 'tacheName',
                                  name: 'tacheName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '949221',
                                  code: 'createTime',
                                  name: 'createTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '5712273',
                                  code: 'title',
                                  name: 'title',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '322515',
                                  code: 'isCurrentUserHandle',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '212249',
                                  code: 'queryType',
                                  name: '查询类型',
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
                        dataId: 167143886662905020,
                        shielding: true,
                        options: {
                          compId: 'Table_37209506_850459_606135_0368544_489904',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '19390124',
                          loading: false,
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167143886870074240,
                        shielding: true,
                        options: {
                          compId: 'Table_37209506_850459_606135_0368544_489904',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '37796',
                          loading: true,
                        },
                        line_number: 7,
                      },
                    ],
                  },
                  {
                    type: 'getValue',
                    dataId: 169149928724546980,
                    options: {
                      compId: 'RangePicker_0811484_02404_122143_4701901_011063',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'RangePicker',
                      id: '0950086',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169149931091331650,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '9594662',
                          pageJsonId: '541575',
                          code: 'function main(data,state,success,fail){if(value_0950086==null||value_0950086==undefined||value_0950086=="undefined"||value_0950086.length==0){return success(value_0950086)}success([value_0950086[0]+" 00:00:00",value_0950086[1]+" 23:59:59"])};',
                        },
                        line_number: 9,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 169149944663922100,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '632699',
                              pageJsonId: '541575',
                              dataSourceId: 166201191339691900,
                              dataSourceName: 'qryDcApproveOrdTodoPage',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '6704033',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                },
                                {
                                  attrId: '80970834',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                },
                                {
                                  attrId: '0203184',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                },
                                {
                                  attrId: '6462786',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '726113',
                                      code: 'extBusiObjNbr',
                                      name: 'extBusiObjNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_071412_23739_6003683_675321_569004',
                                          'getFieldsValue',
                                        ],
                                        code: 'extBusiObjNbr',
                                      },
                                    },
                                    {
                                      attrId: '587457',
                                      code: 'title',
                                      name: 'title',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_071412_23739_6003683_675321_569004',
                                          'getFieldsValue',
                                        ],
                                        code: 'title',
                                      },
                                    },
                                    {
                                      attrId: '200483',
                                      code: 'minCreateTime',
                                      name: 'minCreateTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['customize'],
                                        code: '$data_9594662[0]$',
                                      },
                                    },
                                    {
                                      attrId: '7965',
                                      code: 'approveGrade',
                                      name: 'approveGrade',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365',
                                          'getFieldsValue',
                                        ],
                                        code: 'approveGrade',
                                      },
                                    },
                                    {
                                      attrId: '973868',
                                      code: 'maxCreateTime',
                                      name: 'maxCreateTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['customize'],
                                        code: '$data_9594662[1]$',
                                      },
                                    },
                                    {
                                      attrId: '181711',
                                      code: 'approveOrdNbr',
                                      name: 'approveOrdNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365',
                                          'getFieldsValue',
                                        ],
                                        code: 'approveOrdNbr',
                                      },
                                    },
                                    {
                                      attrId: '4933575',
                                      code: 'pageNum',
                                      name: 'pageNum',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: {
                                        type: ['context', '$options_84995934$'],
                                        code: 'pageNum',
                                      },
                                    },
                                    {
                                      attrId: '823621',
                                      code: 'lanId',
                                      name: 'lanId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'lanId',
                                      },
                                    },
                                    {
                                      attrId: '211303',
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
                                          attrId: '590134',
                                          code: 'listItem',
                                          name: '列表元素',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                        },
                                      ],
                                      value: {
                                        type: [
                                          'form',
                                          'Form_126816_34484_8490105_282851_768365',
                                          'getFieldsValue',
                                        ],
                                        code: 'busiObjStatusList',
                                      },
                                    },
                                    {
                                      attrId: '347783',
                                      code: 'regionId',
                                      name: 'regionId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'areaId',
                                      },
                                    },
                                    {
                                      attrId: '632095',
                                      code: 'pageSize',
                                      name: 'pageSize',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: {
                                        type: ['context', '$options_84995934$'],
                                        code: 'pageSize',
                                      },
                                    },
                                    {
                                      attrId: '211301',
                                      code: 'loginUserCode',
                                      name: 'loginUserCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '2834986',
                                      code: 'queryType',
                                      name: 'queryType',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: 'Todo',
                                      },
                                      type: 'string',
                                      value: {
                                        type: ['customize'],
                                        code: 'Read',
                                      },
                                    },
                                    {
                                      attrId: '812173',
                                      code: 'createStaff',
                                      name: 'createStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_9423813_486326_231002_133159_154259',
                                          'getFieldsValue',
                                        ],
                                        code: 'createStaff',
                                      },
                                    },
                                    {
                                      attrId: '4354343',
                                      code: 'catalogCode',
                                      name: '审批类型',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '892925',
                                      code: 'custNameLike',
                                      name: '集团名称',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '572475',
                                      code: 'childCatalogCode',
                                      name: '审批场景',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '7258495',
                                      code: 'catalogValue',
                                      name: '场景值',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$data_3847131$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '6840453',
                                      code: 'catalogType',
                                      name: '场景值类型',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_9423813_486326_231002_133159_154259',
                                          'getFieldsValue',
                                        ],
                                        code: 'catalogType',
                                      },
                                    },
                                  ],
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '302455',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '489197',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '479545',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '614342',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '036436',
                                      code: 'pages',
                                      name: 'pages',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '5612557',
                                      code: 'orders',
                                      name: 'orders',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'fieldArray',
                                      children: [
                                        {
                                          attrId: '3469592',
                                          code: 'listItem',
                                          name: '列表元素',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                        },
                                      ],
                                    },
                                    {
                                      attrId: '806859',
                                      code: 'optimizeCountSql',
                                      name: 'optimizeCountSql',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '00201',
                                      code: 'hitCount',
                                      name: 'hitCount',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '826684',
                                      code: 'countId',
                                      name: 'countId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '975519',
                                      code: 'maxLimit',
                                      name: 'maxLimit',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '1958206',
                                      code: 'searchCount',
                                      name: 'searchCount',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '665284',
                                      code: 'size',
                                      name: 'size',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '7773136',
                                      code: 'current',
                                      name: 'current',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '5476424',
                                      code: 'total',
                                      name: 'total',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '517499',
                                      code: 'records',
                                      name: 'records',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '509195',
                                          code: 'handleStaffName',
                                          name: 'handleStaffName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '068298',
                                          code: 'approveOrdNbr',
                                          name: 'approveOrdNbr',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '084219',
                                          code: 'createStaffName',
                                          name: 'createStaffName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '9899845',
                                          code: 'lastHandleTime',
                                          name: 'lastHandleTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '884655',
                                          code: 'tacheName',
                                          name: 'tacheName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '949221',
                                          code: 'createTime',
                                          name: 'createTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '5712273',
                                          code: 'title',
                                          name: 'title',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '322515',
                                          code: 'isCurrentUserHandle',
                                          name: '新增节点',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '212249',
                                          code: 'queryType',
                                          name: '查询类型',
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
                            line_number: 10,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 169149944663908960,
                                options: {
                                  compId:
                                    'Table_37209506_850459_606135_0368544_489904',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '81341',
                                  loading: false,
                                },
                                line_number: 11,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 169149944663964220,
                                options: {
                                  compId:
                                    'Table_37209506_850459_606135_0368544_489904',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '706939',
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
    eventDatagetFormValue4.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDatagetFormValue4, { options_84995934 }, 'getFormValue', {
      id: 'getFormValue',
      name: 'getFormValue',
      type: 'getFormValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    query,
  }));

  useEffect(() => {
    const eventDataapiRequest226: any = [
      {
        type: 'apiRequest',
        dataId: 167143327843940030,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '247659',
          pageJsonId: '541575',
          sync: false,
          actionTitle: '加载归属地市下拉框',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'SYS_qryRegionListByParentId',
          _apiCode: 'qryRegionListByParentId',
          _source: 'rhin',
          _serviceId: '878100790201982976',
          _serviceTitle: '根据父区域ID查询所有子区域: qryRegionListByParentId',
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
              dataKey: '073905_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '073905_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '073905_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentRegionId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.parentRegionId',
                  compType: 'Input',
                  name: 'parentRegionId',
                  parents: ['body'],
                  id: 'body.parentRegionId',
                  dataKey: '073905_body.parentRegionId',
                  value: { type: ['customize'], code: '350000' },
                },
                {
                  code: 'includeParent',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  _id: 'body.includeParent',
                  compType: 'Input',
                  name: 'includeParent',
                  parents: ['body'],
                  id: 'body.includeParent',
                  dataKey: '073905_body.includeParent',
                  value: { type: ['customize'], code: 'true' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '073905_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167143327843979400,
            options: {
              compId: 'Input_836023_885786',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Select',
              id: '6403604',
              data: '$reply_247659?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest226.params = [] || [];
    CMDGenerator(eventDataapiRequest226, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest227: any = [
      {
        type: 'apiRequest',
        dataId: 168118093247984580,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '8610194',
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
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168118094614506300,
            options: {
              compId: 'MultipleSelect_6896146_382474_219448_748634',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'MultipleSelect',
              id: '86321534',
              data: '$reply_8610194?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest227.params = [] || [];
    CMDGenerator(eventDataapiRequest227, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc29: any = [
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
        line_number: 5,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc29.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc29, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse129: any = [
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
        dataId: 167955662938519550,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167955662938578340,
            children: [
              {
                dataName: 'action',
                dataId: 167955662938545000,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167955662938543900,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167955664241603780,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167955664241795460,
                            children: [],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
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
                            'TreeSelect_07743_807969_276729_0954643_904744',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '379648',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                          data: '$reply_973154?.resultData$',
                        },
                        actionObjId:
                          'TreeSelect_07743_807969_276729_0954643_904744',
                        actionObjName: 'TreeSelect',
                        value: 'reloadData',
                        compLib: 'comm',
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
                    dataId: 167955662938600000,
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
                  id: '973154',
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
                elseIfs: [],
                line_number: 9,
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
            elseIfs: [],
            callback: [
              {
                type: 'apiRequest',
                dataId: 167955662938545000,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '973154',
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
                line_number: 9,
                callback1: [
                  {
                    type: 'reloadData',
                    dataId: 167955664241603780,
                    options: {
                      compId: 'TreeSelect_07743_807969_276729_0954643_904744',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '379648',
                      labelKey: 'nodeValue',
                      nodeValueKey: 'nodeKey',
                      childrenKey: 'children',
                      data: '$reply_973154?.resultData$',
                    },
                    line_number: 10,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 167955662938542600,
            children: [
              {
                dataName: 'action',
                dataId: 167955662938580030,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167955662938550600,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167955664752175000,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167955664752180480,
                            children: [],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
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
                            'TreeSelect_07743_807969_276729_0954643_904744',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '163249',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                          data: '$reply_587048?.resultData$',
                        },
                        actionObjId:
                          'TreeSelect_07743_807969_276729_0954643_904744',
                        actionObjName: 'TreeSelect',
                        value: 'reloadData',
                        compLib: 'comm',
                        elseIfs: [],
                        line_number: 12,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                    elseIfs: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 167955662938598800,
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
                  id: '587048',
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
                elseIfs: [],
                line_number: 11,
              },
            ],
            condition: [],
            elseIfs: [],
            callback: [
              {
                type: 'apiRequest',
                dataId: 167955662938580030,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '587048',
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
                line_number: 11,
                callback1: [
                  {
                    type: 'reloadData',
                    dataId: 167955664752175000,
                    options: {
                      compId: 'TreeSelect_07743_807969_276729_0954643_904744',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '163249',
                      labelKey: 'nodeValue',
                      nodeValueKey: 'nodeKey',
                      childrenKey: 'children',
                      data: '$reply_587048?.resultData$',
                    },
                    line_number: 12,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 6,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167955662938587140,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '719499',
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
            line_number: 7,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167955663867345730,
                options: {
                  compId: 'TreeSelect_07743_807969_276729_0954643_904744',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'TreeSelect',
                  id: '7308696',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  childrenKey: 'children',
                  data: '$reply_719499?.resultData$',
                },
                line_number: 8,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse129.params = [] || [];
    CMDGenerator(eventDataifelse129, {}, 'ifelse', {
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
      className="__CustomClass_541575__"
    >
      <View
        className="View_View_541575_1_200529_475974_265917_515541"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_541575_1_200529_475974_265917_515541',
          uid: 'View_541575_1_200529_475974_265917_515541',
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
          refs.setComponentRef(r, 'View_541575_1_200529_475974_265917_515541')
        }
        {...injectData}
      >
        <View
          className="View_View_065343_473472_05015_3702278_362488"
          name={'查询类型'}
          fieldName={'data.global_variable.queryType'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_065343_473472_05015_3702278_362488',
            uid: 'View_065343_473472_05015_3702278_362488',
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
            refs.setComponentRef(r, 'View_065343_473472_05015_3702278_362488')
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
              id: 'Card_012576_415337_8750113_6572666_89382',
              uid: 'Card_012576_415337_8750113_6572666_89382',
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
              refs.setComponentRef(
                r,
                'Card_012576_415337_8750113_6572666_89382',
              )
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
                id: 'Form_126816_34484_8490105_282851_768365',
                uid: 'Form_126816_34484_8490105_282851_768365',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Form_126816_34484_8490105_282851_768365',
                )
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
                  id: 'Input_8789281_279559_7694383_316381_877823',
                  uid: 'Input_8789281_279559_7694383_316381_877823',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc357: any = [
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
                  eventDatacallSelfFunc357.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc357,
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
                  refs.setComponentRef(
                    r,
                    'Input_8789281_279559_7694383_316381_877823',
                  )
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
                  id: 'Input_836023_877021_478428_405339_157414',
                  uid: 'Input_836023_877021_478428_405339_157414',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal101: any = [
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
                            compId: 'Input_836023_877021_478428_405339_157414',
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
                            compId: 'Input_295293_055905_56795_141712_648377',
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
                  eventDatashowCustomModal101.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal101,
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
                  refs.setComponentRef(
                    r,
                    'Input_836023_877021_478428_405339_157414',
                  )
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
                  id: 'TreeSelect_07743_807969_276729_0954643_904744',
                  uid: 'TreeSelect_07743_807969_276729_0954643_904744',
                  type: 'TreeSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(value: any, label: any, extra: any) => {
                  const eventDataifelse427: any = [
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
                                  'Input_116573_26982_403393_072968_751494',
                                ],
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '771525',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                                valueList: {
                                  Input_116573_26982_403393_072968_751494:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                compid: [
                                  'Input_116573_26982_403393_072968_751494',
                                ],
                              },
                              actionObjId:
                                'Input_116573_26982_403393_072968_751494',
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
                                  'Input_116573_26982_403393_072968_751494',
                                ],
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '771525',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                                valueList: {
                                  Input_116573_26982_403393_072968_751494:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                compid: [
                                  'Input_116573_26982_403393_072968_751494',
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
                          dataId: 167143862586750300,
                          options: {
                            compId: 'Input_116573_26982_403393_072968_751494',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Input',
                            id: '203275',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse427.params =
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
                    eventDataifelse427,
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
                  refs.setComponentRef(
                    r,
                    'TreeSelect_07743_807969_276729_0954643_904744',
                  )
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
                  id: 'Input_85608_061495_715949_84455_302445',
                  uid: 'Input_85608_061495_715949_84455_302445',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_85608_061495_715949_84455_302445',
                  )
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
                  id: 'MultipleSelect_6896146_382474_219448_748634',
                  uid: 'MultipleSelect_6896146_382474_219448_748634',
                  type: 'MultipleSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'MultipleSelect_6896146_382474_219448_748634',
                  )
                }
                {...injectData}
              />
            </Form>
            <View
              className="View_View_158841_0371773_652933_2275427_708486"
              name={'高级查询条件'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_158841_0371773_652933_2275427_708486',
                uid: 'View_158841_0371773_652933_2275427_708486',
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
                refs.setComponentRef(
                  r,
                  'View_158841_0371773_652933_2275427_708486',
                )
              }
              {...injectData}
            >
              <BusiComp2086
                pageId={pageId}
                name={'地市/区县二级联动'}
                busiCompId={'878114493837852672'}
                basicStatus={1}
                style={{ margin: '12px 0px 12px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'BOFramer_6134255_4134006_1387917_41145_9069711',
                  )
                }
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
                  id: 'Form_071412_23739_6003683_675321_569004',
                  uid: 'Form_071412_23739_6003683_675321_569004',
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
                  refs.setComponentRef(
                    r,
                    'Form_071412_23739_6003683_675321_569004',
                  )
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
                    id: 'Input_421306_059794_015079_6574069_175269',
                    uid: 'Input_421306_059794_015079_6574069_175269',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc359: any = [
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
                    eventDatacallSelfFunc359.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc359,
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
                    refs.setComponentRef(
                      r,
                      'Input_421306_059794_015079_6574069_175269',
                    )
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
                    id: 'RangePicker_0811484_02404_122143_4701901_011063',
                    uid: 'RangePicker_0811484_02404_122143_4701901_011063',
                    type: 'RangePicker',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'RangePicker_0811484_02404_122143_4701901_011063',
                    )
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
                  id: 'Form_9423813_486326_231002_133159_154259',
                  uid: 'Form_9423813_486326_231002_133159_154259',
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
                  refs.setComponentRef(
                    r,
                    'Form_9423813_486326_231002_133159_154259',
                  )
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
                    id: 'Input_295293_055905_56795_141712_648377',
                    uid: 'Input_295293_055905_56795_141712_648377',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_295293_055905_56795_141712_648377',
                    )
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
                    id: 'Input_116573_26982_403393_072968_751494',
                    uid: 'Input_116573_26982_403393_072968_751494',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_116573_26982_403393_072968_751494',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
            <View
              className="View_View_445165_7123897_657787_86374398_163868_526544"
              name={'布局容器'}
              formItemIndex={2}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_445165_7123897_657787_86374398_163868_526544',
                uid: 'View_445165_7123897_657787_86374398_163868_526544',
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
                refs.setComponentRef(
                  r,
                  'View_445165_7123897_657787_86374398_163868_526544',
                )
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
                  id: 'Button_616697_531957_2353575_491687_570996345_136483',
                  uid: 'Button_616697_531957_2353575_491687_570996345_136483',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc360: any = [
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
                  eventDatacallSelfFunc360.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc360,
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
                  refs.setComponentRef(
                    r,
                    'Button_616697_531957_2353575_491687_570996345_136483',
                  )
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
                  id: 'Button_505213_248117_519902_7821423_005463_132764',
                  uid: 'Button_505213_248117_519902_7821423_005463_132764',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDataclearValue111: any = [
                    {
                      type: 'clearValue',
                      dataId: 166626919455524860,
                      options: {
                        compId: 'TreeSelect_07743_807969_276729_0954643_904744',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'TreeSelect',
                        id: '66017625',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue111.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue111, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const forms81 = getFormByCompId(
                    'Form_126816_34484_8490105_282851_768365',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms81) ? forms81 : [forms81]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms82 = getFormByCompId(
                    'Form_9423813_486326_231002_133159_154259',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms82) ? forms82 : [forms82]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms83 = getFormByCompId(
                    'Form_071412_23739_6003683_675321_569004',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms83) ? forms83 : [forms83]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms84 = getFormByCompId('Form_433981_013405', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms84) ? forms84 : [forms84]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms85 = getFormByCompId('Form_513266_945577', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms85) ? forms85 : [forms85]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDataresetForm3: any = [
                    {
                      type: 'resetForm',
                      dataId: 167143613912422500,
                      options: {
                        compId:
                          'BOFramer_6134255_4134006_1387917_41145_9069711',
                        compLib: '@/components',
                        pageJsonId: '541575',
                        compName: 'BOFramer',
                        id: '20378',
                      },
                      line_number: 7,
                    },
                  ];
                  eventDataresetForm3.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataresetForm3, { e }, 'resetForm', {
                    id: 'resetForm',
                    name: 'resetForm',
                    type: 'resetForm',
                    platform: 'pc',
                  });
                  const forms86 = getFormByCompId(
                    'Form_071412_23739_6003683_675321_569004',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms86) ? forms86 : [forms86]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms87 = getFormByCompId(
                    'Form_9423813_486326_231002_133159_154259',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms87) ? forms87 : [forms87]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms88 = getFormByCompId(
                    'Form_126816_34484_8490105_282851_768365',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms88) ? forms88 : [forms88]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Button_505213_248117_519902_7821423_005463_132764',
                  )
                }
                {...injectData}
              />
            </View>
            <Table
              name={'total'}
              isFlexColumn={false}
              pageSize={data?.qryDcApproveOrdTodoPage?.resultData?.size}
              current={data?.qryDcApproveOrdTodoPage?.resultData?.current}
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
                  title: '场景名称',
                  key: 'catalogName',
                  dataIndex: 'catalogName',
                  id: '836469',
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
                  id: '6545324',
                  title: '状态',
                  dataIndex: 'busiObjStatusName',
                  key: '6545324',
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
              rowKey={'keyId'}
              total={data?.qryDcApproveOrdTodoPage?.resultData?.total}
              dataSource={data?.qryDcApproveOrdTodoPage?.resultData?.records}
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
              extend={[
                {
                  id: '0006446',
                  title: '处理',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'edit', isIconFont: false },
                  rule: "row.queryType != 'Todo'",
                  checked: true,
                },
                {
                  id: '216759',
                  title: '催办',
                  iconPos: 'left',
                  rule: "(row.queryType == 'InitiatedApplication' && (!row.handleObjCode || row.createStaffName==row.handleStaffName)) || row.queryType != 'InitiatedApplication'",
                  icon: { theme: 'outlined', type: 'user', isIconFont: false },
                  checked: true,
                },
                {
                  id: '9520727',
                  title: '阅办',
                  iconPos: 'left',
                  rule: "row.queryType != 'Read'",
                  icon: { theme: 'outlined', type: 'edit', isIconFont: false },
                  checked: true,
                },
                {
                  id: '213003',
                  title: '延期',
                  iconPos: 'left',
                  rule: "!((row.queryType == 'InitiatedApplication' && row.canDelay=='Y')||(row.queryType == 'Todo' && row.canDelay=='Y'))",
                  icon: {
                    theme: 'outlined',
                    type: 'exclamation-circle',
                    isIconFont: false,
                  },
                  checked: true,
                },
                {
                  id: '86084',
                  title: '作废',
                  iconPos: 'left',
                  icon: {
                    type: 'delete',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  },
                  rule: "row.queryType != 'Todo' || row.tacheCode != 'APPLY_CREATE'",
                  checked: true,
                },
                {
                  id: '935869',
                  title: '撤回',
                  iconPos: 'left',
                  icon: {
                    type: 'arrow-left',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  },
                  rule: "row.queryType != 'InitiatedApplication' || row.canGoBack != 'Y'",
                  checked: true,
                },
              ]}
              actionWidth={100}
              extendNum={5}
              dataSourceFromDataSourceConfig={
                'data.qryDcApproveOrdTodoPage.resultData.records'
              }
              $$componentItem={{
                id: 'Table_37209506_850459_606135_0368544_489904',
                uid: 'Table_37209506_850459_606135_0368544_489904',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '16px 0px 0px 0px' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatacallSelfFunc361: any = [
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
                eventDatacallSelfFunc361.params =
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
                  eventDatacallSelfFunc361,
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
                const eventDatagetTableSelectedKey45: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166204272281569760,
                    options: {
                      compId: 'Table_37209506_850459_606135_0368544_489904',
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
                        dataId: 166839611633964800,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166839611633914880,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166839612679696100,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '879705',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/auditDealWith-PC',
                                  selectedType: 'page',
                                  paramsObj: {
                                    instNbr: '$row.approveOrdNbr$',
                                    scene: 'V',
                                    workId: '$row.workId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    instNbr: '$row.approveOrdNbr$',
                                    scene: 'V',
                                    workId: '$row.workId$',
                                  },
                                  pageId: '884773713167953920',
                                  modalPath: '/auditDealWith-PC',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'history',
                                dataId: 166839612679696100,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '879705',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/auditDealWith-PC',
                                  selectedType: 'page',
                                  paramsObj: {
                                    instNbr: '$row.approveOrdNbr$',
                                    scene: 'V',
                                    workId: '$row.workId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    instNbr: '$row.approveOrdNbr$',
                                    scene: 'V',
                                    workId: '$row.workId$',
                                  },
                                  pageId: '884773713167953920',
                                  modalPath: '/auditDealWith-PC',
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'history',
                            dataId: 166839611633926940,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '959692',
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
                              },
                              paramsObjKeyValueMap: {
                                workItemId: '$row.workItemId$',
                                approveOrdNbr: '$row.approveOrdNbr$',
                                workId: '$row.workId$',
                                title: '$row.title$',
                                scene: 'V',
                              },
                              modalPath: '/mergeOrderApprove',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey45.params =
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
                  eventDatagetTableSelectedKey45,
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
              onRowDoubleClick={(rowId: any, row: any, index: any) => {
                const eventDatagetTableSelected40: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166521508521440860,
                    options: {
                      compId: 'Table_37209506_850459_606135_0368544_489904',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '2911544',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166521508521416740,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '783602',
                          pageJsonId: '541575',
                          value: ['$row$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'history',
                        dataId: 166521508521449200,
                        shielding: true,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '39391',
                          pageJsonId: '541575',
                          type: 'push',
                          pathname: '/flow/audit',
                          selectedType: 'page',
                          pageId: '874567207627108352',
                          paramsObj: {
                            workId: '$row.workId$',
                            workItemId: '$row.workItemId$',
                            workOrderId: '$row.approveOrdNbr$',
                          },
                          paramsObjKeyValueMap: {
                            workId: '$row.workId$',
                            workItemId: '$row.workItemId$',
                            workOrderId: '$row.approveOrdNbr$',
                          },
                          modalPath: '/flow/audit',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '6396737',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$row.tacheName$',
                              operate: '==',
                              manualValue: '会签',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166521508521452030,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166521508521477700,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166521508521483070,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '866399',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/flow/audit',
                                  selectedType: 'page',
                                  pageId: '874567207627108352',
                                  paramsObj: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                shielding: true,
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'history',
                                dataId: 166521508521483070,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '866399',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/flow/audit',
                                  selectedType: 'page',
                                  pageId: '874567207627108352',
                                  paramsObj: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'history',
                            dataId: 166521508521471740,
                            shielding: true,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '066331',
                              pageJsonId: '541575',
                              type: 'push',
                              pathname: '/flow/meeting/audit',
                              selectedType: 'page',
                              paramsObj: {
                                workId: '$row.workId$',
                                workItemId: '$row.workItemId$',
                                workOrderId: '$row.workOrderId$',
                                busiObjNbr: '$row.approveOrdNbr$',
                              },
                              paramsObjKeyValueMap: {
                                workId: '$row.workId$',
                                workItemId: '$row.workItemId$',
                                workOrderId: '$row.workOrderId$',
                                busiObjNbr: '$row.approveOrdNbr$',
                              },
                              pageId: '875195010387558400',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '782023',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$row.queryType$',
                              operate: '==',
                              manualValue: 'Todo',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166668615874349700,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166744253879682880,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166744255406656130,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '604804',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/auditDealWith-PC',
                                  selectedType: 'page',
                                  paramsObj: {
                                    scene: 'V',
                                    instNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    tacheName: '$row.tacheName$',
                                    workItemId: '$row.workItemId$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    scene: 'V',
                                    instNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    tacheName: '$row.tacheName$',
                                    workItemId: '$row.workItemId$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  pageId: '884773713167953920',
                                  modalPath: '/auditDealWith-PC',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                line_number: 18,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'history',
                                dataId: 166744255406656130,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '604804',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/auditDealWith-PC',
                                  selectedType: 'page',
                                  paramsObj: {
                                    scene: 'V',
                                    instNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    tacheName: '$row.tacheName$',
                                    workItemId: '$row.workItemId$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    scene: 'V',
                                    instNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    tacheName: '$row.tacheName$',
                                    workItemId: '$row.workItemId$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  pageId: '884773713167953920',
                                  modalPath: '/auditDealWith-PC',
                                },
                                line_number: 18,
                              },
                            ],
                          },
                        ],
                        line_number: 7,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '3883163',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$row.tacheCode$',
                                  operate: '==',
                                  manualValue: 'APPLY_CREATE',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166668616703787400,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166668616703781760,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166668616703758880,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '250173',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditDealWith-PC',
                                      selectedType: 'page',
                                      paramsObj: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      pageId: '884773713167953920',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    shielding: true,
                                    line_number: 10,
                                  },
                                ],
                                condition: [],
                                shielding: true,
                                callback: [
                                  {
                                    type: 'history',
                                    dataId: 166668616703758880,
                                    shielding: true,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '250173',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditDealWith-PC',
                                      selectedType: 'page',
                                      paramsObj: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      pageId: '884773713167953920',
                                    },
                                    line_number: 10,
                                  },
                                ],
                              },
                            ],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'history',
                                dataId: 166668616703791070,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '486179',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/auditOrderPrepare',
                                  selectedType: 'page',
                                  paramsObj: {
                                    scene: 'U',
                                    instNbr: '$rowId$',
                                    workId: '$row.workId$',
                                    tacheName: '$row.tacheName$',
                                    workItemId: '$row.workItemId$',
                                    busiObjNbr: '$rowId$',
                                    isRollback: '1',
                                  },
                                  paramsObjKeyValueMap: {
                                    scene: 'U',
                                    instNbr: '$rowId$',
                                    workId: '$row.workId$',
                                    tacheName: '$row.tacheName$',
                                    workItemId: '$row.workItemId$',
                                    busiObjNbr: '$rowId$',
                                    isRollback: '1',
                                  },
                                  pageId: '884045146848604160',
                                },
                                line_number: 9,
                              },
                            ],
                          },
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
                            dataId: 166848329224568100,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166848329224578660,
                                children: [
                                  {
                                    dataName: 'condition',
                                    dataId: 166848329224555070,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166848329224522720,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '7459573',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditOrderPrepare',
                                          selectedType: 'page',
                                          paramsObj: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            isRollback: '1',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            isRollback: '1',
                                          },
                                          pageId: '884045146848604160',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        line_number: 14,
                                      },
                                    ],
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166848329224572960,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 167093089526693060,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167093089526691700,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '0595285',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 16,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 167093089526627040,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 167093089526603000,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 17,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 167093089526603000,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                ],
                                              },
                                            ],
                                            condition: [
                                              {
                                                condId: '311963',
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context: '$row.tacheCode$',
                                                  operate: '==',
                                                  manualValue: 'APPLY_FINISH',
                                                },
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            desc: '判断是否自动截图',
                                            line_number: 15,
                                          },
                                        ],
                                        condition: [],
                                        callback: [
                                          {
                                            type: 'ifelse',
                                            condition: [
                                              {
                                                condId: '311963',
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context: '$row.tacheCode$',
                                                  operate: '==',
                                                  manualValue: 'APPLY_FINISH',
                                                },
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            dataId: 167093089526693060,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 167093089526627040,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 167093089526603000,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 17,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 167093089526603000,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 15,
                                            callback1: [
                                              {
                                                type: 'history',
                                                dataId: 167093089526691700,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '0595285',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 16,
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    condition: [
                                      {
                                        condId: '3883163',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$row.tacheCode$',
                                          operate: '==',
                                          manualValue: 'APPLY_CREATE',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    line_number: 13,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '3883163',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$row.tacheCode$',
                                          operate: '==',
                                          manualValue: 'APPLY_CREATE',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 166848329224555070,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166848329224572960,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 167093089526693060,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167093089526691700,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '0595285',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 16,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 167093089526627040,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 167093089526603000,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 17,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 167093089526603000,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                ],
                                              },
                                            ],
                                            condition: [
                                              {
                                                condId: '311963',
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context: '$row.tacheCode$',
                                                  operate: '==',
                                                  manualValue: 'APPLY_FINISH',
                                                },
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            desc: '判断是否自动截图',
                                            line_number: 15,
                                          },
                                        ],
                                        condition: [],
                                        callback: [
                                          {
                                            type: 'ifelse',
                                            condition: [
                                              {
                                                condId: '311963',
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context: '$row.tacheCode$',
                                                  operate: '==',
                                                  manualValue: 'APPLY_FINISH',
                                                },
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            dataId: 167093089526693060,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 167093089526627040,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 167093089526603000,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 17,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 167093089526603000,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '871272',
                                                      pageJsonId: '541575',
                                                      type: 'push',
                                                      pathname:
                                                        '/auditDealWith-PC',
                                                      selectedType: 'page',
                                                      paramsObj: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 15,
                                            callback1: [
                                              {
                                                type: 'history',
                                                dataId: 167093089526691700,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '0595285',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshot: '1',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 16,
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 13,
                                    callback1: [
                                      {
                                        type: 'history',
                                        dataId: 166848329224522720,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '7459573',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditOrderPrepare',
                                          selectedType: 'page',
                                          paramsObj: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            isRollback: '1',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            isRollback: '1',
                                          },
                                          pageId: '884045146848604160',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        line_number: 14,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            line_number: 11,
                            callback1: [
                              {
                                type: 'history',
                                dataId: 166848329224560220,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '27901119',
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
                                    scene: 'U',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'U',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  modalPath: '/mergeOrderApprove',
                                },
                                line_number: 12,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected40.params =
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
                  eventDatagetTableSelected40,
                  { rowId, row, index },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn1={(rowId: any, row: any, index: any) => {
                const eventDatagetTableSelected41: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166255419371255300,
                    options: {
                      compId: 'Table_37209506_850459_606135_0368544_489904',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '3706402',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166255419371286980,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '1867025',
                          pageJsonId: '541575',
                          value: ['$row$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'history',
                        dataId: 166255419371298980,
                        shielding: true,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '181425',
                          pageJsonId: '541575',
                          type: 'push',
                          pathname: '/flow/audit',
                          selectedType: 'page',
                          pageId: '874567207627108352',
                          paramsObj: {
                            workId: '$row.workId$',
                            workItemId: '$row.workItemId$',
                            workOrderId: '$row.approveOrdNbr$',
                          },
                          paramsObjKeyValueMap: {
                            workId: '$row.workId$',
                            workItemId: '$row.workItemId$',
                            workOrderId: '$row.approveOrdNbr$',
                          },
                          modalPath: '/flow/audit',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '6396737',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$row.tacheName$',
                              operate: '==',
                              manualValue: '会签',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166255419371294660,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166255419371252800,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166255419371231100,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '344575',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/flow/audit',
                                  selectedType: 'page',
                                  pageId: '874567207627108352',
                                  paramsObj: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                shielding: true,
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'history',
                                dataId: 166255419371231100,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '344575',
                                  pageJsonId: '541575',
                                  type: 'push',
                                  pathname: '/flow/audit',
                                  selectedType: 'page',
                                  pageId: '874567207627108352',
                                  paramsObj: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    workId: '$row.workId$',
                                    workItemId: '$row.workItemId$',
                                    workOrderId: '$row.approveOrdNbr$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                  },
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'history',
                            dataId: 166255419371272450,
                            shielding: true,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '1671754',
                              pageJsonId: '541575',
                              type: 'push',
                              pathname: '/flow/meeting/audit',
                              selectedType: 'page',
                              paramsObj: {
                                workId: '$row.workId$',
                                workItemId: '$row.workItemId$',
                                workOrderId: '$row.workOrderId$',
                                busiObjNbr: '$row.approveOrdNbr$',
                              },
                              paramsObjKeyValueMap: {
                                workId: '$row.workId$',
                                workItemId: '$row.workItemId$',
                                workOrderId: '$row.workOrderId$',
                                busiObjNbr: '$row.approveOrdNbr$',
                              },
                              pageId: '875195010387558400',
                            },
                            line_number: 5,
                          },
                        ],
                      },
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
                        dataId: 166815971190234460,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166815991709173600,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 166823489813817280,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166823489813806700,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '2509557',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditOrderPrepare',
                                      selectedType: 'page',
                                      paramsObj: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        isRollback: '1',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        isRollback: '1',
                                      },
                                      pageId: '884045146848604160',
                                      modalPath: '/auditOrderPrepare',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    line_number: 10,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166823489813830940,
                                    children: [
                                      {
                                        dataName: 'condition',
                                        dataId: 167041527760345820,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 167041532821185950,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '8269384',
                                              pageJsonId: '541575',
                                              type: 'push',
                                              pathname: '/auditDealWith-PC',
                                              selectedType: 'page',
                                              paramsObj: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
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
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 167041706900850240,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167041708970425250,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 13,
                                              },
                                            ],
                                            condition: [],
                                            callback: [
                                              {
                                                type: 'history',
                                                dataId: 167041708970425250,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 13,
                                              },
                                            ],
                                          },
                                        ],
                                        condition: [
                                          {
                                            condId: '311963',
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context: '$row.tacheCode$',
                                              operate: '==',
                                              manualValue: 'APPLY_FINISH',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        desc: '判断是否自动截图',
                                        line_number: 11,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166823489813835650,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '847569',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        shielding: true,
                                        line_number: 14,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '311963',
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context: '$row.tacheCode$',
                                              operate: '==',
                                              manualValue: 'APPLY_FINISH',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 167041527760345820,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 167041706900850240,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167041708970425250,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 13,
                                              },
                                            ],
                                            condition: [],
                                            callback: [
                                              {
                                                type: 'history',
                                                dataId: 167041708970425250,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 13,
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 11,
                                        callback1: [
                                          {
                                            type: 'history',
                                            dataId: 167041532821185950,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '8269384',
                                              pageJsonId: '541575',
                                              type: 'push',
                                              pathname: '/auditDealWith-PC',
                                              selectedType: 'page',
                                              paramsObj: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
                                              },
                                              pageId: '884773713167953920',
                                              modalPath: '/auditDealWith-PC',
                                            },
                                            line_number: 12,
                                          },
                                        ],
                                      },
                                      {
                                        type: 'history',
                                        dataId: 166823489813835650,
                                        shielding: true,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '847569',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        line_number: 14,
                                      },
                                    ],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '3883163',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$row.tacheCode$',
                                      operate: '==',
                                      manualValue: 'APPLY_CREATE',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                line_number: 9,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '3883163',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$row.tacheCode$',
                                      operate: '==',
                                      manualValue: 'APPLY_CREATE',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166823489813817280,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166823489813830940,
                                    children: [
                                      {
                                        dataName: 'condition',
                                        dataId: 167041527760345820,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 167041532821185950,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '8269384',
                                              pageJsonId: '541575',
                                              type: 'push',
                                              pathname: '/auditDealWith-PC',
                                              selectedType: 'page',
                                              paramsObj: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
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
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 167041706900850240,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167041708970425250,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 13,
                                              },
                                            ],
                                            condition: [],
                                            callback: [
                                              {
                                                type: 'history',
                                                dataId: 167041708970425250,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 13,
                                              },
                                            ],
                                          },
                                        ],
                                        condition: [
                                          {
                                            condId: '311963',
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context: '$row.tacheCode$',
                                              operate: '==',
                                              manualValue: 'APPLY_FINISH',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        desc: '判断是否自动截图',
                                        line_number: 11,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166823489813835650,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '847569',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        shielding: true,
                                        line_number: 14,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '311963',
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context: '$row.tacheCode$',
                                              operate: '==',
                                              manualValue: 'APPLY_FINISH',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 167041527760345820,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 167041706900850240,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167041708970425250,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 13,
                                              },
                                            ],
                                            condition: [],
                                            callback: [
                                              {
                                                type: 'history',
                                                dataId: 167041708970425250,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5404926',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname: '/auditDealWith-PC',
                                                  selectedType: 'page',
                                                  paramsObj: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 13,
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 11,
                                        callback1: [
                                          {
                                            type: 'history',
                                            dataId: 167041532821185950,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '8269384',
                                              pageJsonId: '541575',
                                              type: 'push',
                                              pathname: '/auditDealWith-PC',
                                              selectedType: 'page',
                                              paramsObj: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isScreenshot: '1',
                                              },
                                              pageId: '884773713167953920',
                                              modalPath: '/auditDealWith-PC',
                                            },
                                            line_number: 12,
                                          },
                                        ],
                                      },
                                      {
                                        type: 'history',
                                        dataId: 166823489813835650,
                                        shielding: true,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '847569',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        line_number: 14,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'history',
                                    dataId: 166823489813806700,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '2509557',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditOrderPrepare',
                                      selectedType: 'page',
                                      paramsObj: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        isRollback: '1',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'U',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        isRollback: '1',
                                      },
                                      pageId: '884045146848604160',
                                      modalPath: '/auditOrderPrepare',
                                    },
                                    line_number: 10,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        line_number: 7,
                        callback1: [
                          {
                            type: 'history',
                            dataId: 166815980399127360,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '8080312',
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
                                scene: 'U',
                                busiObjNbr: '$row.approveOrdNbr$',
                              },
                              paramsObjKeyValueMap: {
                                workItemId: '$row.workItemId$',
                                approveOrdNbr: '$row.approveOrdNbr$',
                                workId: '$row.workId$',
                                title: '$row.title$',
                                scene: 'U',
                                busiObjNbr: '$row.approveOrdNbr$',
                              },
                              modalPath: '/mergeOrderApprove',
                            },
                            line_number: 8,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected41.params =
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
                  eventDatagetTableSelected41,
                  { rowId, row, index },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn3={(rowId: any, row: any, index: any) => {
                const eventDatagetTableSelected42: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166581889093031800,
                    options: {
                      compId: 'Table_37209506_850459_606135_0368544_489904',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '342791',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'history',
                        dataId: 167049094139243200,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '552274',
                          pageJsonId: '541575',
                          type: 'push',
                          pathname: '/auditDealWith-PC',
                          selectedType: 'page',
                          paramsObj: {
                            instNbr: '$row.approveOrdNbr$',
                            scene: 'R',
                            workId: '$row.workId$',
                            workItemId: '$row.workItemId$',
                          },
                          paramsObjKeyValueMap: {
                            instNbr: '$row.approveOrdNbr$',
                            scene: 'R',
                            workId: '$row.workId$',
                            workItemId: '$row.workItemId$',
                          },
                          pageId: '884773713167953920',
                          modalPath: '/auditDealWith-PC',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected42.params =
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
                  eventDatagetTableSelected42,
                  { rowId, row, index },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn2={(rowId: any, row: any, index: any) => {
                const eventDatashowModal13: any = [
                  {
                    type: 'showModal',
                    dataId: 166581902999530500,
                    options: {
                      compId: 'showModal',
                      compName: 'page',
                      id: '29326316',
                      pageJsonId: '541575',
                      type: 'confirm',
                      title: '催办',
                      okText: '确认',
                      content:
                        '每天只能催办一次，将发送短信给处理人，短信发送时间为【9:00-11:30，14:30-17:00】，确定要发起催办吗？',
                      cancelText: '取消',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166582009911668450,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '808014',
                          pageJsonId: '541575',
                          value: ['$row$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166581941609989000,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '256604',
                          pageJsonId: '541575',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'urgeTodoTask',
                          _apiCode: 'urgeTodoTask',
                          _source: 'rhin',
                          _serviceId: '898474968349646848',
                          _serviceTitle: '催办-tzp: urgeTodoTask',
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
                              dataKey: '256604_header',
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
                              dataKey: '256604_path',
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
                              dataKey: '256604_query',
                              key: '2',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'workItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.workItemId',
                                  compType: 'Input',
                                  name: 'workItemId',
                                  parents: ['body'],
                                  id: 'body.workItemId',
                                  dataKey: '256604_body.workItemId',
                                  value: {
                                    type: ['context', '$row$'],
                                    hideAttr: false,
                                    code: 'workItemId',
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
                              dataKey: '256604_body',
                              key: '3',
                            },
                          ],
                          _sourceName: '催办-tzp',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '896031',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_256604?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166581991453015330,
                            elseIfs: [],
                            line_number: 4,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166581992036209340,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '034536',
                                  pageJsonId: '541575',
                                  type: 'success',
                                  value: '催办成功',
                                },
                                line_number: 5,
                              },
                            ],
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166581963254770700,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '286074',
                              pageJsonId: '541575',
                              type: 'success',
                              value: '催办请求发送失败',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowModal13.params =
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
                  eventDatashowModal13,
                  { rowId, row, index },
                  'showModal',
                  {
                    id: 'showModal',
                    name: 'showModal',
                    type: 'showModal',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn4={(rowId: any, row: any, index: any) => {
                const eventDataapiRequest714: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166866841744459070,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '547317',
                      pageJsonId: '541575',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'checkApproveOrdDelayRequest',
                      _apiCode: 'checkApproveOrdDelayRequest',
                      _source: 'rhin',
                      _serviceId: '901035122441818112',
                      _serviceTitle:
                        '校验是否存在延迟申请记录--tzp: checkApproveOrdDelayRequest',
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
                          dataKey: '84867_header',
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
                          dataKey: '84867_path',
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
                          dataKey: '84867_query',
                          key: '2',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'approveOrdNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.approveOrdNbr',
                              compType: 'Input',
                              name: 'approveOrdNbr',
                              parents: ['body'],
                              id: 'body.approveOrdNbr',
                              dataKey: '84867_body.approveOrdNbr',
                              value: {
                                type: ['context', '$row$'],
                                hideAttr: false,
                                code: 'approveOrdNbr',
                              },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-0',
                            },
                            {
                              code: 'auditStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.auditStaff',
                              compType: 'Input',
                              name: 'auditStaff',
                              parents: ['body'],
                              id: 'body.auditStaff',
                              dataKey: '84867_body.auditStaff',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-1',
                            },
                            {
                              code: 'auditStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.auditStaffName',
                              compType: 'Input',
                              name: 'auditStaffName',
                              parents: ['body'],
                              id: 'body.auditStaffName',
                              dataKey: '84867_body.auditStaffName',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-2',
                            },
                            {
                              code: 'createDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createDate',
                              compType: 'Input',
                              name: 'createDate',
                              parents: ['body'],
                              id: 'body.createDate',
                              dataKey: '84867_body.createDate',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-3',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '84867_body.createStaff',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-4',
                            },
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body'],
                              id: 'body.createStaffName',
                              dataKey: '84867_body.createStaffName',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-5',
                            },
                            {
                              code: 'delayDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.delayDate',
                              compType: 'Input',
                              name: 'delayDate',
                              parents: ['body'],
                              id: 'body.delayDate',
                              dataKey: '84867_body.delayDate',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-6',
                            },
                            {
                              code: 'delayDay',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.delayDay',
                              compType: 'Input',
                              name: 'delayDay',
                              parents: ['body'],
                              id: 'body.delayDay',
                              dataKey: '84867_body.delayDay',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-7',
                            },
                            {
                              code: 'ordDelayRequestId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.ordDelayRequestId',
                              compType: 'Input',
                              name: 'ordDelayRequestId',
                              parents: ['body'],
                              id: 'body.ordDelayRequestId',
                              dataKey: '84867_body.ordDelayRequestId',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-8',
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
                              dataKey: '84867_body.remark',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-9',
                            },
                            {
                              code: 'statusCd',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.statusCd',
                              compType: 'Input',
                              name: 'statusCd',
                              parents: ['body'],
                              id: 'body.statusCd',
                              dataKey: '84867_body.statusCd',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-10',
                            },
                            {
                              code: 'updateDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateDate',
                              compType: 'Input',
                              name: 'updateDate',
                              parents: ['body'],
                              id: 'body.updateDate',
                              dataKey: '84867_body.updateDate',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-11',
                            },
                            {
                              code: 'updateStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateStaff',
                              compType: 'Input',
                              name: 'updateStaff',
                              parents: ['body'],
                              id: 'body.updateStaff',
                              dataKey: '84867_body.updateStaff',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-12',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '84867_body',
                          key: '3',
                        },
                      ],
                      _sourceName: '校验是否存在延迟申请记录--tzp',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '896031',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_547317?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166866841744416740,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showModal',
                            dataId: 166866846279635900,
                            options: {
                              compId: 'showModal',
                              compName: 'page',
                              id: '062209',
                              pageJsonId: '541575',
                              type: 'confirm',
                              title: '延期',
                              okText: '确认',
                              content: '只能延期生效一次，确认要延期吗？',
                              cancelText: '取消',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'showCustomModal',
                                dataId: 166866993753992770,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '786662',
                                  pageJsonId: '541575',
                                  modalname: '/meeting/createpopcopy',
                                  pageId: '900635954003288064',
                                  paramsObj: {
                                    busiObjNbr: '$row.approveOrdNbr$',
                                    title: '$row.title$',
                                    parentWorkId: '$row.workId$',
                                    expDate: '$row.effectDate$',
                                    parentWorkItemId: '$row.workItemId$',
                                    delayHint: '$reply_547317?.resultData$',
                                  },
                                  paramsObjKeyValueMap: {
                                    busiObjNbr: '$row.approveOrdNbr$',
                                    title: '$row.title$',
                                    parentWorkId: '$row.workId$',
                                    expDate: '$row.effectDate$',
                                    parentWorkItemId: '$row.workItemId$',
                                    delayHint: '$reply_547317?.resultData$',
                                  },
                                  modalPath: '/meeting/createpopcopy',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166866841744455970,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '594168',
                          pageJsonId: '541575',
                          type: 'success',
                          value: '延期校验请求发送失败',
                        },
                        line_number: 5,
                      },
                    ],
                  },
                ];
                eventDataapiRequest714.params =
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
                  eventDataapiRequest714,
                  { rowId, row, index },
                  'apiRequest',
                  {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn5={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal102: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 167022507646932200,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '7499883',
                      pageJsonId: 30,
                      modalname: '/giveupCommonPopup',
                      pageId: '912677238674382848',
                      paramsObj: {
                        tacheCode: '$row.tacheCode$',
                        workItemId: '$row.workItemId$',
                        busiObjNbr: '$row.approveOrdNbr$',
                        workId: '$row.workId$',
                      },
                      paramsObjKeyValueMap: {
                        tacheCode: '$row.tacheCode$',
                        workItemId: '$row.workItemId$',
                        busiObjNbr: '$row.approveOrdNbr$',
                        workId: '$row.workId$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 167022594524232160,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '492558',
                          pageJsonId: '541575',
                          customFuncName: 'query',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '1' },
                          paramsObjKeyValueMap: { pageNum: '1' },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal102.params =
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
                  eventDatashowCustomModal102,
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
              onClickBtn6={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal103: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 167022981608743200,
                    shielding: true,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '743929',
                      pageJsonId: 30,
                      modalname: '/gobackCommonPopup',
                      pageId: '916972510371729408',
                      paramsObj: {
                        tacheCode: '$row.tacheCode$',
                        workItemId: '$row.workItemId$',
                        busiObjNbr: '$row.approveOrdNbr$',
                        workId: '$row.workId$',
                      },
                      paramsObjKeyValueMap: {
                        tacheCode: '$row.tacheCode$',
                        workItemId: '$row.workItemId$',
                        busiObjNbr: '$row.approveOrdNbr$',
                        workId: '$row.workId$',
                      },
                      modalPath: '/gobackCommonPopup',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 167022981608760320,
                        shielding: true,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '998873',
                          pageJsonId: '541575',
                          customFuncName: 'query',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '1' },
                          paramsObjKeyValueMap: { pageNum: '1' },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal103.params =
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
                  eventDatashowCustomModal103,
                  { rowId, row, index },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatashowModal14: any = [
                  {
                    type: 'showModal',
                    dataId: 167101147079958340,
                    options: {
                      compId: 'showModal',
                      compName: 'page',
                      id: '7308223',
                      pageJsonId: '541575',
                      type: 'confirm',
                      cancelText: '取消',
                      okText: '确认',
                      title: '撤回',
                      content: '您确认要撤回该工单吗？',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'setLoading',
                        dataId: 167108892506509250,
                        options: {
                          compId: 'View_541575_1',
                          compLib: 'custom',
                          pageJsonId: '541575',
                          compName: 'View',
                          id: '0999235',
                          loading: true,
                        },
                        line_number: 4,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 167101162215007300,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '877642',
                          pageJsonId: 30,
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          serviceVersionId: '882904961025191936',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'rhin',
                          _serviceId: '890049764606439424',
                          _serviceTitle:
                            '保存数据并流转摩卡流程-tzp: saveDataAndDealFlow',
                          params: 'object',
                          _capabilityCode: 'saveDataAndDealFlow',
                          _apiCode: 'saveDataAndDealFlow',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '877642_header',
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
                              dataKey: '877642_path',
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
                              dataKey: '877642_query',
                              key: '2',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'nextTache',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.nextTache',
                                  compType: 'Input',
                                  name: 'nextTache',
                                  parents: ['body'],
                                  id: 'body.nextTache',
                                  dataKey: '877642_body.nextTache',
                                  value: {
                                    type: ['customize'],
                                    code: 'APPLY_CREATE',
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-7',
                                },
                                {
                                  code: 'nextStaff',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.nextStaff',
                                  compType: 'Input',
                                  name: 'nextStaff',
                                  parents: ['body'],
                                  id: 'body.nextStaff',
                                  dataKey: '877642_body.nextStaff',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-12',
                                },
                                {
                                  code: 'workItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.workItemId',
                                  compType: 'Input',
                                  name: 'workItemId',
                                  parents: ['body'],
                                  id: 'body.workItemId',
                                  dataKey: '877642_body.workItemId',
                                  value: {
                                    type: ['context', '$row$'],
                                    code: 'workItemId',
                                    hideAttr: false,
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-14',
                                },
                                {
                                  code: 'tacheCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.tacheCode',
                                  compType: 'Input',
                                  name: 'tacheCode',
                                  parents: ['body'],
                                  id: 'body.tacheCode',
                                  dataKey: '877642_body.tacheCode',
                                  value: {
                                    type: ['context', '$row$'],
                                    code: 'tacheCode',
                                    hideAttr: false,
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-13',
                                },
                                {
                                  code: 'parentWorkItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parentWorkItemId',
                                  compType: 'Input',
                                  name: 'parentWorkItemId',
                                  parents: ['body'],
                                  id: 'body.parentWorkItemId',
                                  dataKey: '877642_body.parentWorkItemId',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-0',
                                },
                                {
                                  code: 'isRollback',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.isRollback',
                                  compType: 'Input',
                                  name: 'isRollback',
                                  parents: ['body'],
                                  id: 'body.isRollback',
                                  dataKey: '877642_body.isRollback',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-1',
                                },
                                {
                                  code: 'tacheRemark',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.tacheRemark',
                                  compType: 'Input',
                                  name: 'tacheRemark',
                                  parents: ['body'],
                                  id: 'body.tacheRemark',
                                  dataKey: '877642_body.tacheRemark',
                                  value: { type: ['customize'], code: '撤回' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-2',
                                },
                                {
                                  code: 'mergeTitle',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.mergeTitle',
                                  compType: 'Input',
                                  name: 'mergeTitle',
                                  parents: ['body'],
                                  id: 'body.mergeTitle',
                                  dataKey: '877642_body.mergeTitle',
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-3',
                                },
                                {
                                  code: 'parentWorkId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parentWorkId',
                                  compType: 'Input',
                                  name: 'parentWorkId',
                                  parents: ['body'],
                                  id: 'body.parentWorkId',
                                  dataKey: '877642_body.parentWorkId',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-4',
                                },
                                {
                                  code: 'orderMessage',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.orderMessage',
                                  compType: 'Input',
                                  name: 'orderMessage',
                                  parents: ['body'],
                                  id: 'body.orderMessage',
                                  dataKey: '877642_body.orderMessage',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-5',
                                },
                                {
                                  code: 'workId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.workId',
                                  compType: 'Input',
                                  name: 'workId',
                                  parents: ['body'],
                                  id: 'body.workId',
                                  dataKey: '877642_body.workId',
                                  value: {
                                    type: ['context', '$row$'],
                                    code: 'workId',
                                    hideAttr: false,
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-6',
                                },
                                {
                                  code: 'tachePass',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.tachePass',
                                  compType: 'Input',
                                  name: 'tachePass',
                                  parents: ['body'],
                                  id: 'body.tachePass',
                                  dataKey: '877642_body.tachePass',
                                  value: {
                                    type: ['customize'],
                                    code: 'goback',
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-11',
                                },
                                {
                                  code: 'busiObjNbr',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.busiObjNbr',
                                  compType: 'Input',
                                  name: 'busiObjNbr',
                                  parents: ['body'],
                                  id: 'body.busiObjNbr',
                                  dataKey: '877642_body.busiObjNbr',
                                  value: {
                                    type: ['context', '$row$'],
                                    code: 'approveOrdNbr',
                                    hideAttr: false,
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-9',
                                },
                                {
                                  code: 'endLevel',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.endLevel',
                                  compType: 'Input',
                                  name: 'endLevel',
                                  parents: ['body'],
                                  id: 'body.endLevel',
                                  dataKey: '877642_body.endLevel',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-10',
                                },
                                {
                                  code: 'tacheAttachments',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'url',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.tacheAttachments.url',
                                      compType: 'Input',
                                      name: 'url',
                                      parents: ['body', 'tacheAttachments'],
                                      id: 'body.tacheAttachments.url',
                                      dataKey:
                                        '877642_body.tacheAttachments.url',
                                      parentType: 'objectArray',
                                      parentKey: '3-17',
                                      key: '3-17-1',
                                    },
                                    {
                                      code: 'fileId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.tacheAttachments.fileId',
                                      compType: 'Input',
                                      name: 'fileId',
                                      parents: ['body', 'tacheAttachments'],
                                      id: 'body.tacheAttachments.fileId',
                                      dataKey:
                                        '877642_body.tacheAttachments.fileId',
                                      parentType: 'objectArray',
                                      parentKey: '3-17',
                                      key: '3-17-2',
                                    },
                                    {
                                      code: 'fileName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.tacheAttachments.fileName',
                                      compType: 'Input',
                                      name: 'fileName',
                                      parents: ['body', 'tacheAttachments'],
                                      id: 'body.tacheAttachments.fileName',
                                      dataKey:
                                        '877642_body.tacheAttachments.fileName',
                                      parentType: 'objectArray',
                                      parentKey: '3-17',
                                      key: '3-17-0',
                                    },
                                  ],
                                  _id: 'body.tacheAttachments',
                                  compType: 'Input',
                                  name: 'tacheAttachments',
                                  parents: ['body'],
                                  id: 'body.tacheAttachments',
                                  dataKey: '877642_body.tacheAttachments',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-17',
                                },
                                {
                                  code: 'sameList',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'busiObjNbr',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.busiObjNbr',
                                      compType: 'Input',
                                      name: 'busiObjNbr',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.busiObjNbr',
                                      dataKey:
                                        '877642_body.sameList.busiObjNbr',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-5',
                                    },
                                    {
                                      code: 'tachePass',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.tachePass',
                                      compType: 'Input',
                                      name: 'tachePass',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.tachePass',
                                      dataKey: '877642_body.sameList.tachePass',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-3',
                                    },
                                    {
                                      code: 'workId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.workId',
                                      compType: 'Input',
                                      name: 'workId',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.workId',
                                      dataKey: '877642_body.sameList.workId',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-6',
                                    },
                                    {
                                      code: 'workItemId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.workItemId',
                                      compType: 'Input',
                                      name: 'workItemId',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.workItemId',
                                      dataKey:
                                        '877642_body.sameList.workItemId',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-7',
                                    },
                                    {
                                      code: 'tacheRemark',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.tacheRemark',
                                      compType: 'Input',
                                      name: 'tacheRemark',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.tacheRemark',
                                      dataKey:
                                        '877642_body.sameList.tacheRemark',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-0',
                                    },
                                    {
                                      code: 'nextStaff',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.nextStaff',
                                      compType: 'Input',
                                      name: 'nextStaff',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.nextStaff',
                                      dataKey: '877642_body.sameList.nextStaff',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-1',
                                    },
                                    {
                                      code: 'nextTache',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.nextTache',
                                      compType: 'Input',
                                      name: 'nextTache',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.nextTache',
                                      dataKey: '877642_body.sameList.nextTache',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-2',
                                    },
                                    {
                                      code: 'nextStaffName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.nextStaffName',
                                      compType: 'Input',
                                      name: 'nextStaffName',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.nextStaffName',
                                      dataKey:
                                        '877642_body.sameList.nextStaffName',
                                      parentType: 'objectArray',
                                      parentKey: '3-16',
                                      key: '3-16-4',
                                    },
                                  ],
                                  _id: 'body.sameList',
                                  compType: 'Input',
                                  name: 'sameList',
                                  parents: ['body'],
                                  id: 'body.sameList',
                                  dataKey: '877642_body.sameList',
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-16',
                                },
                                {
                                  code: 'copyUserList',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'userName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.copyUserList.userName',
                                      compType: 'Input',
                                      name: 'userName',
                                      parents: ['body', 'copyUserList'],
                                      id: 'body.copyUserList.userName',
                                      dataKey:
                                        '877642_body.copyUserList.userName',
                                      parentType: 'objectArray',
                                      parentKey: '3-15',
                                      key: '3-15-0',
                                    },
                                    {
                                      code: 'userCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.copyUserList.userCode',
                                      compType: 'Input',
                                      name: 'userCode',
                                      parents: ['body', 'copyUserList'],
                                      id: 'body.copyUserList.userCode',
                                      dataKey:
                                        '877642_body.copyUserList.userCode',
                                      parentType: 'objectArray',
                                      parentKey: '3-15',
                                      key: '3-15-1',
                                    },
                                  ],
                                  _id: 'body.copyUserList',
                                  compType: 'Input',
                                  name: 'copyUserList',
                                  parents: ['body'],
                                  id: 'body.copyUserList',
                                  dataKey: '877642_body.copyUserList',
                                  value: { type: [], code: '' },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-15',
                                },
                                {
                                  code: 'flowAssociationParams',
                                  name: '流程流转需要的参数',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.flowAssociationParams',
                                  compType: 'Input',
                                  parents: ['body'],
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-8',
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '877642_body',
                              key: '3',
                            },
                          ],
                          _sourceName: '保存数据并流转摩卡流程-tzp',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '387594',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_877642?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167101162215191230,
                            elseIfs: [],
                            line_number: 6,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 167101162215198560,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '477568',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程撤回成功',
                                },
                                line_number: 7,
                              },
                              {
                                type: 'setLoading',
                                dataId: 167108894440128060,
                                options: {
                                  compId: 'View_541575_1',
                                  compLib: 'custom',
                                  pageJsonId: '541575',
                                  compName: 'View',
                                  id: '1188954',
                                  loading: false,
                                },
                                line_number: 8,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 167101182041596700,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '931087',
                                  pageJsonId: '541575',
                                  customFuncName: 'query',
                                  customFuncParams: 'object',
                                  paramsObj: { pageNum: '1' },
                                  paramsObjKeyValueMap: { pageNum: '1' },
                                },
                                line_number: 9,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 167101162215142900,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '091955',
                              pageJsonId: 30,
                              type: 'success',
                              value: '流程撤回失败',
                            },
                            line_number: 10,
                          },
                          {
                            type: 'setLoading',
                            dataId: 167108895809651520,
                            options: {
                              compId: 'View_541575_1',
                              compLib: 'custom',
                              pageJsonId: '541575',
                              compName: 'View',
                              id: '732741',
                              loading: false,
                            },
                            line_number: 11,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowModal14.params =
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
                  eventDatashowModal14,
                  { rowId, row, index },
                  'showModal',
                  {
                    id: 'showModal',
                    name: 'showModal',
                    type: 'showModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Table_37209506_850459_606135_0368544_489904',
                )
              }
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MyOrderRead_202212191629$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { origin: '' },
});
