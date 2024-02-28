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

const pageId = '922038101271379968';
const MyOrderDone_202212191506copy$$Page: React.FC<PageProps> = ({
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
    const eventDatagetFormValue2: any = [
      {
        type: 'getFormValue',
        dataId: 167143748580230180,
        options: {
          compId: 'BOFramer_6134255_4134006_1387917',
          compLib: '@/components',
          pageJsonId: '541575',
          compName: 'BOFramer',
          id: '6714146',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 169501760918924930,
            options: {
              compId: 'Table_37209506_850459_606135',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Table',
              id: '971072',
              loading: true,
            },
            line_number: 2,
          },
          {
            type: 'getValue',
            dataId: 169501762211750270,
            options: {
              compId: 'TreeSelect_07743_807969_276729',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '990517',
            },
            line_number: 3,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169501762211774620,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '8193552',
                  pageJsonId: '541575',
                  code: 'function main(data,state,success,fail){if(!value_990517||!value_990517.length){return success("")}return success(value_990517)};',
                  actionTitle: '场景值处理',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadDataSource',
                    dataId: 169501762211708130,
                    shielding: true,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '080135',
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
                                  'Form_071412_23739_6003683',
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
                                  'Form_126816_34484_8490105',
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
                                  'Form_071412_23739_6003683',
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
                                  'Form_126816_34484_8490105',
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
                                  'Form_071412_23739_6003683',
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
                                  'Form_126816_34484_8490105',
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
                                  'Form_126816_34484_8490105',
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
                              value: { type: ['customize'], code: 'Related' },
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
                                  'Form_9423813_486326_231002',
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
                                type: ['context', '$data_8193552$'],
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
                                  'Form_9423813_486326_231002',
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
                        dataId: 169501762211783580,
                        shielding: true,
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '858142',
                          loading: false,
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 169501762211775420,
                        shielding: true,
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '718117',
                          loading: false,
                        },
                        line_number: 7,
                      },
                    ],
                  },
                  {
                    type: 'getValue',
                    dataId: 169501762211732600,
                    options: {
                      compId: 'RangePicker_0811484_02404_122143',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'RangePicker',
                      id: '010186',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169501762211731230,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '990609',
                          pageJsonId: '541575',
                          code: 'function main(data,state,success,fail){if(value_010186==null||value_010186==undefined||value_010186=="undefined"||value_010186.length==0){return success(value_010186)}success([value_010186[0]+" 00:00:00",value_010186[1]+" 23:59:59"])};',
                        },
                        line_number: 9,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 169501762211704580,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '7121414',
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
                                          'Form_071412_23739_6003683',
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
                                          'Form_126816_34484_8490105',
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
                                        code: '$data_990609[0]$',
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
                                          'Form_126816_34484_8490105',
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
                                        code: '$data_990609[1]$',
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
                                          'Form_126816_34484_8490105',
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
                                          'Form_126816_34484_8490105',
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
                                        code: 'Related',
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
                                          'Form_9423813_486326_231002',
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
                                        type: ['context', '$data_8193552$'],
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
                                          'Form_9423813_486326_231002',
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
                                dataId: 169501763577754180,
                                options: {
                                  compId: 'Table_37209506_850459_606135',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '135054',
                                  loading: false,
                                },
                                line_number: 11,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 169501764715534500,
                                options: {
                                  compId: 'Table_37209506_850459_606135',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '103973',
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
    eventDatagetFormValue2.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDatagetFormValue2, { options_84995934 }, 'getFormValue', {
      id: 'getFormValue',
      name: 'getFormValue',
      type: 'getFormValue',
      platform: 'undefined',
    });
  };
  const jumpTab = (options_1211073: any) => {
    const eventDatacustomActionCode65: any = [
      {
        type: 'customActionCode',
        dataId: 170307384257847330,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '867531',
          pageJsonId: '541575',
          code: 'function main(data,state,success,fail){var localName=window.sessionStorage.getItem("gaap-localName")||"";console.log("localName = ",localName);success(localName)};',
          actionTitle: '获取localName',
        },
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170307384257851460,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '254344',
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
                      dataKey: '254344_root.header',
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
                          dataKey: '254344_root.path.pagePath',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                      dataKey: '254344_root.path',
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
                      dataKey: '254344_root.query',
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
                          dataKey: '254344_root.body.scene',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.instNbr',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.workId',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.flowCode',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.tacheName',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.workItemId',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.busiObjNbr',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.isRollback',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.isScreenshoot',
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
                          dataKey: '254344_root.body.origin',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.tacheCode',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.sceneOrigin',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.originTab',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.localName',
                          value: {
                            type: ['context', '$data_867531$'],
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
                          dataKey: '254344_root.body.title',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.approveOrdNbr',
                          value: {
                            type: ['context', '$options_1211073$'],
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
                          dataKey: '254344_root.body.openFrom',
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
                          dataKey: '254344_root.body.isScreenshot',
                          value: {
                            type: ['context', '$options_1211073$'],
                            code: 'isScreenshoot',
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
                      dataKey: '254344_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '254344_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170307384257825860,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '295607',
                  pageJsonId: '541575',
                  code: 'function main(data,state,success,fail){var _reply_;var url=(_reply_=reply_254344)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u8FD4\\u56DE\\u7684\\u8DF3\\u8F6C\\u94FE\\u63A5\\uFF1A",url);if(url){window.open(url)}else{fail()}};',
                  actionTitle: '打开一个新的tab页面',
                },
                line_number: 3,
                callback1: [],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 170307384257895780,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '7697804',
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
    eventDatacustomActionCode65.params =
      [
        {
          title: '事件入参',
          name: 'options_1211073',
          value: '$options_1211073$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode65,
      { options_1211073 },
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
    jumpTab,
  }));

  useEffect(() => {
    const eventDataapiRequest206: any = [
      {
        type: 'apiRequest',
        dataId: 170314699624918530,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '082606',
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
            dataId: 170314699624914460,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '602561',
              pageJsonId: '541575',
              dataSourceId: 170314675139132030,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '766651',
                  code: 'openNewTab',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$reply_082606?.resultData.cfValue$'],
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
                dataId: 170314699624947400,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '005638',
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
    eventDataapiRequest206.params = [] || [];
    CMDGenerator(eventDataapiRequest206, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest207: any = [
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
        line_number: 4,
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
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest207.params = [] || [];
    CMDGenerator(eventDataapiRequest207, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest208: any = [
      {
        type: 'apiRequest',
        dataId: 168117954996299900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '17723885',
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
        line_number: 6,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168117957213216100,
            options: {
              compId: 'MultipleSelect_6896146_382474',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'MultipleSelect',
              id: '454726',
              data: '$reply_17723885?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest208.params = [] || [];
    CMDGenerator(eventDataapiRequest208, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc26: any = [
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
        line_number: 8,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc26.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc26, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse121: any = [
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
        dataId: 167955653288039260,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167955653288083260,
            children: [
              {
                dataName: 'action',
                dataId: 167955653288035800,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167955653288052300,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167955655058588600,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 16795565505859788,
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
                          compId: 'TreeSelect_07743_807969_276729',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '7976923',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                          data: '$reply_4419273?.resultData$',
                        },
                        actionObjId: 'TreeSelect_07743_807969_276729',
                        actionObjName: 'TreeSelect',
                        value: 'reloadData',
                        compLib: 'comm',
                        line_number: 13,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 167955653288057250,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '4419273',
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
                line_number: 12,
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
                dataId: 167955653288035800,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '4419273',
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
                line_number: 12,
                callback1: [
                  {
                    type: 'reloadData',
                    dataId: 167955655058588600,
                    options: {
                      compId: 'TreeSelect_07743_807969_276729',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '7976923',
                      labelKey: 'nodeValue',
                      nodeValueKey: 'nodeKey',
                      childrenKey: 'children',
                      data: '$reply_4419273?.resultData$',
                    },
                    line_number: 13,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 167955653288079580,
            children: [
              {
                dataName: 'action',
                dataId: 167955653288073150,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167955653288069220,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167955655483241000,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167955655483288640,
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
                          compId: 'TreeSelect_07743_807969_276729',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '33398677',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                          data: '$reply_817158?.resultData$',
                        },
                        actionObjId: 'TreeSelect_07743_807969_276729',
                        actionObjName: 'TreeSelect',
                        value: 'reloadData',
                        compLib: 'comm',
                        line_number: 15,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 167955653288066370,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '817158',
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
                line_number: 14,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'apiRequest',
                dataId: 167955653288073150,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '817158',
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
                line_number: 14,
                callback1: [
                  {
                    type: 'reloadData',
                    dataId: 167955655483241000,
                    options: {
                      compId: 'TreeSelect_07743_807969_276729',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '33398677',
                      labelKey: 'nodeValue',
                      nodeValueKey: 'nodeKey',
                      childrenKey: 'children',
                      data: '$reply_817158?.resultData$',
                    },
                    line_number: 15,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 9,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167955653288052640,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '191421',
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
            line_number: 10,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167955654555512640,
                options: {
                  compId: 'TreeSelect_07743_807969_276729',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'TreeSelect',
                  id: '115412',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  childrenKey: 'children',
                  data: '$reply_191421?.resultData$',
                },
                line_number: 11,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse121.params = [] || [];
    CMDGenerator(eventDataifelse121, {}, 'ifelse', {
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
        className="View_View_541575_1_200529_475974"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
        $$componentItem={{
          id: 'View_541575_1_200529_475974',
          uid: 'View_541575_1_200529_475974',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_541575_1_200529_475974')}
        {...injectData}
      >
        <View
          className="View_View_065343_473472_05015"
          name={'查询类型'}
          fieldName={'data.global_variable.queryType'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_065343_473472_05015',
            uid: 'View_065343_473472_05015',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_065343_473472_05015')}
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
              id: 'Card_012576_415337_8750113',
              uid: 'Card_012576_415337_8750113',
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
              refs.setComponentRef(r, 'Card_012576_415337_8750113')
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
                id: 'Form_126816_34484_8490105',
                uid: 'Form_126816_34484_8490105',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Form_126816_34484_8490105')
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
                  id: 'Input_8789281_279559_7694383',
                  uid: 'Input_8789281_279559_7694383',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc339: any = [
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
                  eventDatacallSelfFunc339.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc339,
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
                  refs.setComponentRef(r, 'Input_8789281_279559_7694383')
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
                  id: 'Input_836023_877021_478428',
                  uid: 'Input_836023_877021_478428',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal85: any = [
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
                            compId: 'Input_836023_877021_478428',
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
                            compId: 'Input_295293_055905_56795',
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
                  eventDatashowCustomModal85.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal85,
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
                  refs.setComponentRef(r, 'Input_836023_877021_478428')
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
                  id: 'TreeSelect_07743_807969_276729',
                  uid: 'TreeSelect_07743_807969_276729',
                  type: 'TreeSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(value: any, label: any, extra: any) => {
                  const eventDataifelse420: any = [
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
                                compId: ['Input_116573_26982_403393'],
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '771525',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                                valueList: {
                                  Input_116573_26982_403393:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                compid: ['Input_116573_26982_403393'],
                              },
                              actionObjId: 'Input_116573_26982_403393',
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
                                compId: ['Input_116573_26982_403393'],
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '771525',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                                valueList: {
                                  Input_116573_26982_403393:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                compid: ['Input_116573_26982_403393'],
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
                          dataId: 167143833587039800,
                          options: {
                            compId: 'Input_116573_26982_403393',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Input',
                            id: '2947678',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse420.params =
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
                    eventDataifelse420,
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
                  refs.setComponentRef(r, 'TreeSelect_07743_807969_276729')
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
                  id: 'Input_85608_061495_715949',
                  uid: 'Input_85608_061495_715949',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_85608_061495_715949')
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
                  id: 'MultipleSelect_6896146_382474',
                  uid: 'MultipleSelect_6896146_382474',
                  type: 'MultipleSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'MultipleSelect_6896146_382474')
                }
                {...injectData}
              />
            </Form>
            <View
              className="View_View_158841_0371773_652933"
              name={'高级查询条件'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_158841_0371773_652933',
                uid: 'View_158841_0371773_652933',
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
                refs.setComponentRef(r, 'View_158841_0371773_652933')
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
                  refs.setComponentRef(r, 'BOFramer_6134255_4134006_1387917')
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
                  id: 'Form_071412_23739_6003683',
                  uid: 'Form_071412_23739_6003683',
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
                  refs.setComponentRef(r, 'Form_071412_23739_6003683')
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
                    id: 'Input_421306_059794_015079',
                    uid: 'Input_421306_059794_015079',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc341: any = [
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
                    eventDatacallSelfFunc341.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc341,
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
                    refs.setComponentRef(r, 'Input_421306_059794_015079')
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
                    id: 'RangePicker_0811484_02404_122143',
                    uid: 'RangePicker_0811484_02404_122143',
                    type: 'RangePicker',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'RangePicker_0811484_02404_122143')
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
                  id: 'Form_9423813_486326_231002',
                  uid: 'Form_9423813_486326_231002',
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
                  refs.setComponentRef(r, 'Form_9423813_486326_231002')
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
                    id: 'Input_295293_055905_56795',
                    uid: 'Input_295293_055905_56795',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_295293_055905_56795')
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
                    id: 'Input_116573_26982_403393',
                    uid: 'Input_116573_26982_403393',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_116573_26982_403393')
                  }
                  {...injectData}
                />
              </Form>
            </View>
            <View
              className="View_View_445165_7123897_657787_86374398"
              name={'布局容器'}
              formItemIndex={2}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_445165_7123897_657787_86374398',
                uid: 'View_445165_7123897_657787_86374398',
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
                refs.setComponentRef(r, 'View_445165_7123897_657787_86374398')
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
                ghost={true}
                block={false}
                size={'default'}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_616697_531957_2353575_491687',
                  uid: 'Button_616697_531957_2353575_491687',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc342: any = [
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
                  eventDatacallSelfFunc342.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc342,
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
                  refs.setComponentRef(r, 'Button_616697_531957_2353575_491687')
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
                  id: 'Button_505213_248117_519902_7821423',
                  uid: 'Button_505213_248117_519902_7821423',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDataclearValue105: any = [
                    {
                      type: 'clearValue',
                      dataId: 166626919455524860,
                      options: {
                        compId: 'TreeSelect_07743_807969_276729',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'TreeSelect',
                        id: '66017625',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue105.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue105, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const forms64 = getFormByCompId(
                    'Form_126816_34484_8490105',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms64) ? forms64 : [forms64]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms65 = getFormByCompId(
                    'Form_9423813_486326_231002',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms65) ? forms65 : [forms65]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms66 = getFormByCompId(
                    'Form_071412_23739_6003683',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms66) ? forms66 : [forms66]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms67 = getFormByCompId('Form_433981_013405', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms67) ? forms67 : [forms67]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms68 = getFormByCompId('Form_513266_945577', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms68) ? forms68 : [forms68]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDataresetForm1: any = [
                    {
                      type: 'resetForm',
                      dataId: 167143613912422500,
                      options: {
                        compId: 'BOFramer_6134255_4134006_1387917',
                        compLib: '@/components',
                        pageJsonId: '541575',
                        compName: 'BOFramer',
                        id: '20378',
                      },
                      line_number: 7,
                    },
                  ];
                  eventDataresetForm1.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataresetForm1, { e }, 'resetForm', {
                    id: 'resetForm',
                    name: 'resetForm',
                    type: 'resetForm',
                    platform: 'pc',
                  });
                  const forms69 = getFormByCompId(
                    'Form_071412_23739_6003683',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms69) ? forms69 : [forms69]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms70 = getFormByCompId(
                    'Form_9423813_486326_231002',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms70) ? forms70 : [forms70]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms71 = getFormByCompId(
                    'Form_126816_34484_8490105',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms71) ? forms71 : [forms71]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_505213_248117_519902_7821423')
                }
                {...injectData}
              />
              <Button
                name={'发起审批'}
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
                  id: 'Button_003003_6560496',
                  uid: 'Button_003003_6560496',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDataifelse421: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '054073',
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
                      dataId: 167893224008963620,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167893224008911230,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167893224008960900,
                              children: [],
                              todoOptions: [
                                'historyType',
                                'pathname',
                                'searchParams',
                              ],
                              options: {
                                compId: 'history',
                                compName: 'system',
                                id: '912126',
                                pageJsonId: '541575',
                                type: 'push',
                                pathname: '/marketDeptAuditStart',
                                selectedType: 'page',
                                paramsObj: { origin: '$state.origin$' },
                                paramsObjKeyValueMap: {
                                  origin: '$state.origin$',
                                },
                              },
                              actionObjId: 'history',
                              actionObjName: 'system',
                              value: 'history',
                              line_number: 3,
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
                              condId: '477465',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'history',
                              dataId: 167893224008960900,
                              options: {
                                compId: 'history',
                                compName: 'system',
                                id: '912126',
                                pageJsonId: '541575',
                                type: 'push',
                                pathname: '/marketDeptAuditStart',
                                selectedType: 'page',
                                paramsObj: { origin: '$state.origin$' },
                                paramsObjKeyValueMap: {
                                  origin: '$state.origin$',
                                },
                              },
                              line_number: 3,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'history',
                          dataId: 167893224008934240,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '96031',
                            pageJsonId: '541575',
                            type: 'push',
                            pathname: '/auditStart',
                            selectedType: 'page',
                            paramsObj: { origin: '$state.origin$' },
                            paramsObjKeyValueMap: { origin: '$state.origin$' },
                            pageId: '887537833022541824',
                            modalPath: '/auditStart',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse421.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataifelse421, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_003003_6560496')
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
                  id: '93826',
                  title: '状态',
                  dataIndex: 'busiObjStatusName',
                  key: '93826',
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
                  rule: "!(row.queryType == 'Related' && row.busiObjStatus=='1200')",
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
                id: 'Table_37209506_850459_606135',
                uid: 'Table_37209506_850459_606135',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '16px 0px 0px 0px' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatacallSelfFunc343: any = [
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
                eventDatacallSelfFunc343.params =
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
                  eventDatacallSelfFunc343,
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
                const eventDatagetTableSelectedKey41: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166204272281569760,
                    options: {
                      compId: 'Table_37209506_850459_606135',
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
                        dataId: 170314676848222460,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170314676848203100,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 170314679126068300,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170314679126065570,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '4779104',
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
                                        origin: '$state.origin$',
                                        originTab: '2',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'V',
                                        origin: '$state.origin$',
                                        originTab: '2',
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
                                    dataId: 170314679126064770,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170314679126001760,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '906364',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
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
                                        dataId: 170314679126001760,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '906364',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
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
                                dataId: 170314679126068300,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170314679126064770,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170314679126001760,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '906364',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
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
                                        dataId: 170314679126001760,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '906364',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/auditDealWith-PC',
                                          selectedType: 'page',
                                          paramsObj: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
                                            workItemId: '$row.workItemId$',
                                          },
                                          paramsObjKeyValueMap: {
                                            instNbr: '$row.approveOrdNbr$',
                                            scene: 'V',
                                            workId: '$row.workId$',
                                            origin: '$state.origin$',
                                            originTab: '2',
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
                                    dataId: 170314679126065570,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '4779104',
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
                                        origin: '$state.origin$',
                                        originTab: '2',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'V',
                                        origin: '$state.origin$',
                                        originTab: '2',
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
                            dataId: 170314677908571840,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170314677908529100,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170314677908519230,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '626226',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditDealWith-PC',
                                      selectedType: 'page',
                                      paramsObj: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '$state.origin$',
                                        originTab: '2',
                                        workItemId: '$row.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '$state.origin$',
                                        originTab: '2',
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
                                    dataId: 170314677908524400,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170314677908581100,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170314677908579940,
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
                                      id: '058514',
                                      pageJsonId: '541575',
                                      pathname: '/myOrderDone_202212191506copy',
                                      pageId: '922038101271379968',
                                      modalPath:
                                        '/myOrderDone_202212191506copy',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        pagePath: 'auditDealWith-PC',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        originTab: '2',
                                      },
                                      paramsObjKeyValueMap: {
                                        pagePath: 'auditDealWith-PC',
                                        workItemId: '$row.workItemId$',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        originTab: '2',
                                      },
                                    },
                                    actionObjId: 'callCustomPageFunc',
                                    actionObjName: 'system',
                                    value: 'callCustomPageFunc',
                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                    line_number: 9,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'history',
                                    dataId: 170314677908519230,
                                    shielding: true,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '626226',
                                      pageJsonId: '541575',
                                      type: 'push',
                                      pathname: '/auditDealWith-PC',
                                      selectedType: 'page',
                                      paramsObj: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '$state.origin$',
                                        originTab: '2',
                                        workItemId: '$row.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        instNbr: '$row.approveOrdNbr$',
                                        scene: 'V',
                                        workId: '$row.workId$',
                                        origin: '$state.origin$',
                                        originTab: '2',
                                        workItemId: '$row.workItemId$',
                                      },
                                      pageId: '884773713167953920',
                                      modalPath: '/auditDealWith-PC',
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 170314677908524400,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '058514',
                                      pageJsonId: '541575',
                                      pathname: '/myOrderDone_202212191506copy',
                                      pageId: '922038101271379968',
                                      modalPath:
                                        '/myOrderDone_202212191506copy',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        pagePath: 'auditDealWith-PC',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        originTab: '2',
                                      },
                                      paramsObjKeyValueMap: {
                                        pagePath: 'auditDealWith-PC',
                                        workItemId: '$row.workItemId$',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        originTab: '2',
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
                                dataId: 170314677908524540,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '479256',
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
                                    origin: '$state.origin$',
                                    originTab: '2',
                                  },
                                  paramsObjKeyValueMap: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'V',
                                    origin: '$state.origin$',
                                    originTab: '2',
                                  },
                                  modalPath: '/mergeOrderApprove',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'callCustomPageFunc',
                                dataId: 170314677908530780,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '2556451',
                                  pageJsonId: '541575',
                                  pathname: '/myOrderDone_202212191506copy',
                                  pageId: '922038101271379968',
                                  modalPath: '/myOrderDone_202212191506copy',
                                  customFuncName: 'jumpTab',
                                  customFuncParams: 'object',
                                  paramsObj: {
                                    pagePath: 'mergeOrderApprove',
                                    workItemId: '$row.workItemId$',
                                    origin: '$state.origin$',
                                    scene: 'V',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    title: '$row.title$',
                                    workId: '$row.workId$',
                                    originTab: '2',
                                  },
                                  paramsObjKeyValueMap: {
                                    pagePath: 'mergeOrderApprove',
                                    workItemId: '$row.workItemId$',
                                    origin: '$state.origin$',
                                    scene: 'V',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    title: '$row.title$',
                                    workId: '$row.workId$',
                                    originTab: '2',
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
                eventDatagetTableSelectedKey41.params =
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
                  eventDatagetTableSelectedKey41,
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
                const eventDatagetTableSelected29: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166521508521440860,
                    options: {
                      compId: 'Table_37209506_850459_606135',
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
                        dataId: 170314690687277300,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170314690687272640,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 170314693495025540,
                                children: [
                                  {
                                    dataName: 'condition',
                                    dataId: 170314693495085630,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170314693495037860,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '206195',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/mergeOrderApprove',
                                          selectedType: 'page',
                                          pageId: '908280951234510848',
                                          paramsObj: {
                                            workItemId: '$row.workItemId$',
                                            approveOrdNbr:
                                              '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            title: '$row.title$',
                                            scene: 'U',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          paramsObjKeyValueMap: {
                                            workItemId: '$row.workItemId$',
                                            approveOrdNbr:
                                              '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            title: '$row.title$',
                                            scene: 'U',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          modalPath: '/mergeOrderApprove',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        line_number: 24,
                                      },
                                    ],
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 170314693495018370,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 170314693495013540,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 170314693495062530,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5510337',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname:
                                                    '/auditOrderPrepare',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
                                                  },
                                                  pageId: '884045146848604160',
                                                  modalPath:
                                                    '/auditOrderPrepare',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 26,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314693495052200,
                                                children: [
                                                  {
                                                    dataName: 'condition',
                                                    dataId: 170314693495051330,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314693495092220,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 28,
                                                      },
                                                    ],
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    desc: '判断是否自动截图',
                                                    line_number: 27,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    dataId: 170314693495051330,
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                    line_number: 27,
                                                    callback1: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314693495092220,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 28,
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
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            line_number: 25,
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
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            dataId: 170314693495013540,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314693495052200,
                                                children: [
                                                  {
                                                    dataName: 'condition',
                                                    dataId: 170314693495051330,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314693495092220,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 28,
                                                      },
                                                    ],
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    desc: '判断是否自动截图',
                                                    line_number: 27,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    dataId: 170314693495051330,
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                    line_number: 27,
                                                    callback1: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314693495092220,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 28,
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 25,
                                            callback1: [
                                              {
                                                type: 'history',
                                                dataId: 170314693495062530,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5510337',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname:
                                                    '/auditOrderPrepare',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
                                                  },
                                                  pageId: '884045146848604160',
                                                  modalPath:
                                                    '/auditOrderPrepare',
                                                },
                                                line_number: 26,
                                              },
                                            ],
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
                                    line_number: 23,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170314693495073950,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170314693495067600,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '551994',
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
                                            origin: '$state.origin$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'V',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        line_number: 30,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'history',
                                        dataId: 170314693495067600,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '551994',
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
                                            origin: '$state.origin$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'V',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        line_number: 30,
                                      },
                                    ],
                                  },
                                ],
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
                                desc: '待办双击才进处理页面',
                                line_number: 22,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
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
                                dataId: 170314693495025540,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170314693495073950,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170314693495067600,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '551994',
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
                                            origin: '$state.origin$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'V',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        line_number: 30,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'history',
                                        dataId: 170314693495067600,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '551994',
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
                                            origin: '$state.origin$',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'V',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          pageId: '884773713167953920',
                                          modalPath: '/auditDealWith-PC',
                                        },
                                        line_number: 30,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 22,
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
                                    dataId: 170314693495085630,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 170314693495018370,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 170314693495013540,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 170314693495062530,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5510337',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname:
                                                    '/auditOrderPrepare',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
                                                  },
                                                  pageId: '884045146848604160',
                                                  modalPath:
                                                    '/auditOrderPrepare',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                line_number: 26,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314693495052200,
                                                children: [
                                                  {
                                                    dataName: 'condition',
                                                    dataId: 170314693495051330,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314693495092220,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 28,
                                                      },
                                                    ],
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    desc: '判断是否自动截图',
                                                    line_number: 27,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    dataId: 170314693495051330,
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                    line_number: 27,
                                                    callback1: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314693495092220,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 28,
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
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            line_number: 25,
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
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            dataId: 170314693495013540,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314693495052200,
                                                children: [
                                                  {
                                                    dataName: 'condition',
                                                    dataId: 170314693495051330,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314693495092220,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 28,
                                                      },
                                                    ],
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    desc: '判断是否自动截图',
                                                    line_number: 27,
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
                                                          context:
                                                            '$row.tacheCode$',
                                                          operate: '==',
                                                          manualValue:
                                                            'APPLY_FINISH',
                                                        },
                                                        conditionType:
                                                          'checkContextValue',
                                                        objType: 'system',
                                                        objId: 'sys',
                                                      },
                                                    ],
                                                    dataId: 170314693495051330,
                                                    elseIfs: [
                                                      {
                                                        dataName: 'elseIf',
                                                        dataId: 170314693495008500,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170314693495006140,
                                                            children: [],
                                                            todoOptions: [
                                                              'historyType',
                                                              'pathname',
                                                              'searchParams',
                                                            ],
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            actionObjId:
                                                              'history',
                                                            actionObjName:
                                                              'system',
                                                            value: 'history',
                                                            line_number: 29,
                                                          },
                                                        ],
                                                        condition: [],
                                                        callback: [
                                                          {
                                                            type: 'history',
                                                            dataId: 170314693495006140,
                                                            options: {
                                                              compId: 'history',
                                                              compName:
                                                                'system',
                                                              id: '1130396',
                                                              pageJsonId:
                                                                '541575',
                                                              type: 'push',
                                                              pathname:
                                                                '/auditDealWith-PC',
                                                              selectedType:
                                                                'page',
                                                              paramsObj: {
                                                                scene: 'U',
                                                                instNbr:
                                                                  '$row.approveOrdNbr$',
                                                                workId:
                                                                  '$row.workId$',
                                                                tacheName:
                                                                  '$row.tacheName$',
                                                                workItemId:
                                                                  '$row.workItemId$',
                                                                busiObjNbr:
                                                                  '$row.approveOrdNbr$',
                                                                origin:
                                                                  '$state.origin$',
                                                                tacheCode:
                                                                  '$row.tacheCode$',
                                                              },
                                                              paramsObjKeyValueMap:
                                                                {
                                                                  scene: 'U',
                                                                  instNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  workId:
                                                                    '$row.workId$',
                                                                  tacheName:
                                                                    '$row.tacheName$',
                                                                  workItemId:
                                                                    '$row.workItemId$',
                                                                  busiObjNbr:
                                                                    '$row.approveOrdNbr$',
                                                                  origin:
                                                                    '$state.origin$',
                                                                  tacheCode:
                                                                    '$row.tacheCode$',
                                                                },
                                                              pageId:
                                                                '884773713167953920',
                                                              modalPath:
                                                                '/auditDealWith-PC',
                                                            },
                                                            line_number: 29,
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                    line_number: 27,
                                                    callback1: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314693495092220,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '7906273',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            isScreenshot: '1',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshot: '1',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 28,
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 25,
                                            callback1: [
                                              {
                                                type: 'history',
                                                dataId: 170314693495062530,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '5510337',
                                                  pageJsonId: '541575',
                                                  type: 'push',
                                                  pathname:
                                                    '/auditOrderPrepare',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
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
                                                    isRollback: '1',
                                                    origin: '$state.origin$',
                                                  },
                                                  pageId: '884045146848604160',
                                                  modalPath:
                                                    '/auditOrderPrepare',
                                                },
                                                line_number: 26,
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 23,
                                    callback1: [
                                      {
                                        type: 'history',
                                        dataId: 170314693495037860,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '206195',
                                          pageJsonId: '541575',
                                          type: 'push',
                                          pathname: '/mergeOrderApprove',
                                          selectedType: 'page',
                                          pageId: '908280951234510848',
                                          paramsObj: {
                                            workItemId: '$row.workItemId$',
                                            approveOrdNbr:
                                              '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            title: '$row.title$',
                                            scene: 'U',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          paramsObjKeyValueMap: {
                                            workItemId: '$row.workItemId$',
                                            approveOrdNbr:
                                              '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            title: '$row.title$',
                                            scene: 'U',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            origin: '$state.origin$',
                                          },
                                          modalPath: '/mergeOrderApprove',
                                        },
                                        line_number: 24,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        line_number: 7,
                        callback1: [
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
                            dataId: 170314691824045660,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170314691824024260,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170314691824093660,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '180197',
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
                                        origin: '$state.origin$',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        origin: '$state.origin$',
                                      },
                                      pageId: '884773713167953920',
                                      modalPath: '/auditDealWith-PC',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    shielding: true,
                                    line_number: 20,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 170314691824088860,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170314691824059070,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170314691824074430,
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
                                      id: '996841',
                                      pageJsonId: '541575',
                                      pathname: '/myOrderDone_202212191506copy',
                                      pageId: '922038101271379968',
                                      modalPath:
                                        '/myOrderDone_202212191506copy',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        pagePath: 'auditDealWith-PC',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        tacheName: '$row.tacheName$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        pagePath: 'auditDealWith-PC',
                                        workItemId: '$row.workItemId$',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        isRollback: '',
                                        tacheName: '$row.tacheName$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        isScreenshoot: '',
                                        tacheCode: '',
                                      },
                                    },
                                    actionObjId: 'callCustomPageFunc',
                                    actionObjName: 'system',
                                    value: 'callCustomPageFunc',
                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                    line_number: 21,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'history',
                                    dataId: 170314691824093660,
                                    shielding: true,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '180197',
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
                                        origin: '$state.origin$',
                                      },
                                      paramsObjKeyValueMap: {
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        tacheName: '$row.tacheName$',
                                        workItemId: '$row.workItemId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        origin: '$state.origin$',
                                      },
                                      pageId: '884773713167953920',
                                      modalPath: '/auditDealWith-PC',
                                    },
                                    line_number: 20,
                                  },
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 170314691824088860,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '996841',
                                      pageJsonId: '541575',
                                      pathname: '/myOrderDone_202212191506copy',
                                      pageId: '922038101271379968',
                                      modalPath:
                                        '/myOrderDone_202212191506copy',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        pagePath: 'auditDealWith-PC',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        workItemId: '$row.workItemId$',
                                        tacheName: '$row.tacheName$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        pagePath: 'auditDealWith-PC',
                                        workItemId: '$row.workItemId$',
                                        origin: '$state.origin$',
                                        scene: 'V',
                                        instNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        isRollback: '',
                                        tacheName: '$row.tacheName$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        isScreenshoot: '',
                                        tacheCode: '',
                                      },
                                    },
                                    line_number: 21,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 8,
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
                                dataId: 170314691824090050,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170314691824068350,
                                    children: [
                                      {
                                        dataName: 'condition',
                                        dataId: 170314691824008960,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170314691824055800,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '5627344',
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
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                              },
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            actionObjId: 'history',
                                            actionObjName: 'system',
                                            value: 'history',
                                            shielding: true,
                                            line_number: 13,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 170314691824032000,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 170314691824026430,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 170314691824055550,
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
                                              id: '201458',
                                              pageJsonId: '541575',
                                              pathname:
                                                '/myOrderDone_202212191506copy',
                                              pageId: '922038101271379968',
                                              modalPath:
                                                '/myOrderDone_202212191506copy',
                                              customFuncName: 'jumpTab',
                                              customFuncParams: 'object',
                                              paramsObj: {
                                                pagePath: 'auditOrderPrepare',
                                                origin: '$state.origin$',
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                workItemId: '$row.workItemId$',
                                                isRollback: '1',
                                                originTab: '2',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                              paramsObjKeyValueMap: {
                                                pagePath: 'auditOrderPrepare',
                                                workItemId: '$row.workItemId$',
                                                origin: '$state.origin$',
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                isRollback: '1',
                                                originTab: '2',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                            },
                                            actionObjId: 'callCustomPageFunc',
                                            actionObjName: 'system',
                                            value: 'callCustomPageFunc',
                                            tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                            line_number: 14,
                                          },
                                        ],
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 170314691824016740,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 170314691824043400,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314691824097800,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '2017857',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    shielding: true,
                                                    line_number: 16,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314691824089300,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314691824041860,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314691824074800,
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
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '835161',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    actionObjId:
                                                      'callCustomPageFunc',
                                                    actionObjName: 'system',
                                                    value: 'callCustomPageFunc',
                                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                    line_number: 17,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314691824032500,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824090750,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        shielding: true,
                                                        line_number: 18,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824049920,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824058240,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824085820,
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
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        actionObjId:
                                                          'callCustomPageFunc',
                                                        actionObjName: 'system',
                                                        value:
                                                          'callCustomPageFunc',
                                                        tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                        line_number: 19,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314691824090750,
                                                        shielding: true,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 18,
                                                      },
                                                      {
                                                        type: 'callCustomPageFunc',
                                                        dataId: 170314691824049920,
                                                        options: {
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        line_number: 19,
                                                        callback1: [],
                                                        callback2: [],
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                dataId: 170314691824043400,
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314691824032500,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824090750,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        shielding: true,
                                                        line_number: 18,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824049920,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824058240,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824085820,
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
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        actionObjId:
                                                          'callCustomPageFunc',
                                                        actionObjName: 'system',
                                                        value:
                                                          'callCustomPageFunc',
                                                        tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                        line_number: 19,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314691824090750,
                                                        shielding: true,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 18,
                                                      },
                                                      {
                                                        type: 'callCustomPageFunc',
                                                        dataId: 170314691824049920,
                                                        options: {
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        line_number: 19,
                                                        callback1: [],
                                                        callback2: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                                line_number: 15,
                                                callback1: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314691824097800,
                                                    shielding: true,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '2017857',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 16,
                                                  },
                                                  {
                                                    type: 'callCustomPageFunc',
                                                    dataId: 170314691824089300,
                                                    options: {
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '835161',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    line_number: 17,
                                                    callback1: [],
                                                    callback2: [],
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
                                        line_number: 12,
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
                                        dataId: 170314691824008960,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 170314691824016740,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 170314691824043400,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314691824097800,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '2017857',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    shielding: true,
                                                    line_number: 16,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314691824089300,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314691824041860,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314691824074800,
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
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '835161',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    actionObjId:
                                                      'callCustomPageFunc',
                                                    actionObjName: 'system',
                                                    value: 'callCustomPageFunc',
                                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                    line_number: 17,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314691824032500,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824090750,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        shielding: true,
                                                        line_number: 18,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824049920,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824058240,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824085820,
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
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        actionObjId:
                                                          'callCustomPageFunc',
                                                        actionObjName: 'system',
                                                        value:
                                                          'callCustomPageFunc',
                                                        tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                        line_number: 19,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314691824090750,
                                                        shielding: true,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 18,
                                                      },
                                                      {
                                                        type: 'callCustomPageFunc',
                                                        dataId: 170314691824049920,
                                                        options: {
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        line_number: 19,
                                                        callback1: [],
                                                        callback2: [],
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                dataId: 170314691824043400,
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314691824032500,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824090750,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        shielding: true,
                                                        line_number: 18,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314691824049920,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824058240,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170314691824085820,
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
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        actionObjId:
                                                          'callCustomPageFunc',
                                                        actionObjName: 'system',
                                                        value:
                                                          'callCustomPageFunc',
                                                        tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                        line_number: 19,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314691824090750,
                                                        shielding: true,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '346473',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 18,
                                                      },
                                                      {
                                                        type: 'callCustomPageFunc',
                                                        dataId: 170314691824049920,
                                                        options: {
                                                          compId:
                                                            'callCustomPageFunc',
                                                          compName: 'system',
                                                          id: '728231',
                                                          pageJsonId: '541575',
                                                          pathname:
                                                            '/myOrderDone_202212191506copy',
                                                          pageId:
                                                            '922038101271379968',
                                                          modalPath:
                                                            '/myOrderDone_202212191506copy',
                                                          customFuncName:
                                                            'jumpTab',
                                                          customFuncParams:
                                                            'object',
                                                          paramsObj: {
                                                            pagePath:
                                                              'auditDealWith-PC',
                                                            origin:
                                                              '$state.origin$',
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              pagePath:
                                                                'auditDealWith-PC',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              origin:
                                                                '$state.origin$',
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              isRollback: '',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              isScreenshoot: '',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                            },
                                                        },
                                                        line_number: 19,
                                                        callback1: [],
                                                        callback2: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                                line_number: 15,
                                                callback1: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314691824097800,
                                                    shielding: true,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '2017857',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 16,
                                                  },
                                                  {
                                                    type: 'callCustomPageFunc',
                                                    dataId: 170314691824089300,
                                                    options: {
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '835161',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '1',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    line_number: 17,
                                                    callback1: [],
                                                    callback2: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 12,
                                        callback1: [
                                          {
                                            type: 'history',
                                            dataId: 170314691824055800,
                                            shielding: true,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '5627344',
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
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                              },
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            line_number: 13,
                                          },
                                          {
                                            type: 'callCustomPageFunc',
                                            dataId: 170314691824032000,
                                            options: {
                                              compId: 'callCustomPageFunc',
                                              compName: 'system',
                                              id: '201458',
                                              pageJsonId: '541575',
                                              pathname:
                                                '/myOrderDone_202212191506copy',
                                              pageId: '922038101271379968',
                                              modalPath:
                                                '/myOrderDone_202212191506copy',
                                              customFuncName: 'jumpTab',
                                              customFuncParams: 'object',
                                              paramsObj: {
                                                pagePath: 'auditOrderPrepare',
                                                origin: '$state.origin$',
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                workItemId: '$row.workItemId$',
                                                isRollback: '1',
                                                originTab: '2',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                              paramsObjKeyValueMap: {
                                                pagePath: 'auditOrderPrepare',
                                                workItemId: '$row.workItemId$',
                                                origin: '$state.origin$',
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                isRollback: '1',
                                                originTab: '2',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                            },
                                            line_number: 14,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'history',
                                    dataId: 170314691824080000,
                                    shielding: true,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '7157658',
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
                                        origin: '$state.origin$',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'U',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        origin: '$state.origin$',
                                      },
                                      modalPath: '/mergeOrderApprove',
                                    },
                                    line_number: 10,
                                  },
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 170314691824050700,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '940844',
                                      pageJsonId: '541575',
                                      pathname: '/myOrderDone_202212191506copy',
                                      pageId: '922038101271379968',
                                      modalPath:
                                        '/myOrderDone_202212191506copy',
                                      customFuncName: 'jumpTab',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        pagePath: 'mergeOrderApprove',
                                        workItemId: '$row.workItemId$',
                                        origin: '$state.origin$',
                                        scene: 'U',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        title: '$row.title$',
                                        workId: '$row.workId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        pagePath: 'mergeOrderApprove',
                                        workItemId: '$row.workItemId$',
                                        origin: '$state.origin$',
                                        scene: 'U',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        title: '$row.title$',
                                        workId: '$row.workId$',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        originTab: '',
                                      },
                                    },
                                    line_number: 11,
                                    callback1: [],
                                    callback2: [],
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
                eventDatagetTableSelected29.params =
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
                  eventDatagetTableSelected29,
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
                const eventDatagetTableSelected30: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166255419371255300,
                    options: {
                      compId: 'Table_37209506_850459_606135',
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
                        dataId: 170314684154954800,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170314684154939070,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 170314685377650080,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170314685377641020,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '175757',
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
                                        origin: '$state.origin$',
                                        originTab: '2',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'U',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        origin: '$state.origin$',
                                        originTab: '2',
                                      },
                                      modalPath: '/mergeOrderApprove',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    line_number: 21,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170314685377654340,
                                    children: [
                                      {
                                        dataName: 'condition',
                                        dataId: 170314685377679650,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170314685377620700,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '9986152',
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
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            actionObjId: 'history',
                                            actionObjName: 'system',
                                            value: 'history',
                                            line_number: 23,
                                          },
                                        ],
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 170314685377655330,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 170314685377680700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314685377662300,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 25,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                desc: '判断是否自动截图',
                                                line_number: 24,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                dataId: 170314685377680700,
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
                                                      },
                                                    ],
                                                  },
                                                ],
                                                line_number: 24,
                                                callback1: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314685377662300,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 25,
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
                                        line_number: 22,
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
                                        dataId: 170314685377679650,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 170314685377655330,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 170314685377680700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314685377662300,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 25,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                desc: '判断是否自动截图',
                                                line_number: 24,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                dataId: 170314685377680700,
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
                                                      },
                                                    ],
                                                  },
                                                ],
                                                line_number: 24,
                                                callback1: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314685377662300,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 25,
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 22,
                                        callback1: [
                                          {
                                            type: 'history',
                                            dataId: 170314685377620700,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '9986152',
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
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            line_number: 23,
                                          },
                                        ],
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
                                line_number: 20,
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
                                dataId: 170314685377650080,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 170314685377654340,
                                    children: [
                                      {
                                        dataName: 'condition',
                                        dataId: 170314685377679650,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170314685377620700,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '9986152',
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
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            actionObjId: 'history',
                                            actionObjName: 'system',
                                            value: 'history',
                                            line_number: 23,
                                          },
                                        ],
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 170314685377655330,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 170314685377680700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314685377662300,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 25,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                desc: '判断是否自动截图',
                                                line_number: 24,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                dataId: 170314685377680700,
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
                                                      },
                                                    ],
                                                  },
                                                ],
                                                line_number: 24,
                                                callback1: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314685377662300,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 25,
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
                                        line_number: 22,
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
                                        dataId: 170314685377679650,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 170314685377655330,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 170314685377680700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314685377662300,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    line_number: 25,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                desc: '判断是否自动截图',
                                                line_number: 24,
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
                                                      context:
                                                        '$row.tacheCode$',
                                                      operate: '==',
                                                      manualValue:
                                                        'APPLY_FINISH',
                                                    },
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                dataId: 170314685377680700,
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 170314685377664800,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170314685377628200,
                                                        children: [],
                                                        todoOptions: [
                                                          'historyType',
                                                          'pathname',
                                                          'searchParams',
                                                        ],
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        actionObjId: 'history',
                                                        actionObjName: 'system',
                                                        value: 'history',
                                                        line_number: 26,
                                                      },
                                                    ],
                                                    condition: [],
                                                    callback: [
                                                      {
                                                        type: 'history',
                                                        dataId: 170314685377628200,
                                                        options: {
                                                          compId: 'history',
                                                          compName: 'system',
                                                          id: '9180725',
                                                          pageJsonId: '541575',
                                                          type: 'push',
                                                          pathname:
                                                            '/auditDealWith-PC',
                                                          selectedType: 'page',
                                                          paramsObj: {
                                                            scene: 'U',
                                                            instNbr:
                                                              '$row.approveOrdNbr$',
                                                            workId:
                                                              '$row.workId$',
                                                            tacheName:
                                                              '$row.tacheName$',
                                                            workItemId:
                                                              '$row.workItemId$',
                                                            busiObjNbr:
                                                              '$row.approveOrdNbr$',
                                                            origin:
                                                              '$state.origin$',
                                                            tacheCode:
                                                              '$row.tacheCode$',
                                                            originTab: '2',
                                                          },
                                                          paramsObjKeyValueMap:
                                                            {
                                                              scene: 'U',
                                                              instNbr:
                                                                '$row.approveOrdNbr$',
                                                              workId:
                                                                '$row.workId$',
                                                              tacheName:
                                                                '$row.tacheName$',
                                                              workItemId:
                                                                '$row.workItemId$',
                                                              busiObjNbr:
                                                                '$row.approveOrdNbr$',
                                                              origin:
                                                                '$state.origin$',
                                                              tacheCode:
                                                                '$row.tacheCode$',
                                                              originTab: '2',
                                                            },
                                                          pageId:
                                                            '884773713167953920',
                                                          modalPath:
                                                            '/auditDealWith-PC',
                                                        },
                                                        line_number: 26,
                                                      },
                                                    ],
                                                  },
                                                ],
                                                line_number: 24,
                                                callback1: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314685377662300,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '566526',
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
                                                        isScreenshot: '1',
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 25,
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 22,
                                        callback1: [
                                          {
                                            type: 'history',
                                            dataId: 170314685377620700,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '9986152',
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
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                                isRollback: '1',
                                                origin: '$state.origin$',
                                                originTab: '2',
                                              },
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            line_number: 23,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                line_number: 20,
                                callback1: [
                                  {
                                    type: 'history',
                                    dataId: 170314685377641020,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '175757',
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
                                        origin: '$state.origin$',
                                        originTab: '2',
                                      },
                                      paramsObjKeyValueMap: {
                                        workItemId: '$row.workItemId$',
                                        approveOrdNbr: '$row.approveOrdNbr$',
                                        workId: '$row.workId$',
                                        title: '$row.title$',
                                        scene: 'U',
                                        busiObjNbr: '$row.approveOrdNbr$',
                                        origin: '$state.origin$',
                                        originTab: '2',
                                      },
                                      modalPath: '/mergeOrderApprove',
                                    },
                                    line_number: 21,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        line_number: 7,
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
                            dataId: 170314684824235870,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170314684824206340,
                                children: [
                                  {
                                    dataName: 'condition',
                                    dataId: 170314684824217540,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170314684824215040,
                                        children: [],
                                        todoOptions: [
                                          'historyType',
                                          'pathname',
                                          'searchParams',
                                        ],
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '0121654',
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
                                            origin: '$state.origin$',
                                            originTab: '2',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            isRollback: '1',
                                            origin: '$state.origin$',
                                            originTab: '2',
                                          },
                                          pageId: '884045146848604160',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        actionObjId: 'history',
                                        actionObjName: 'system',
                                        value: 'history',
                                        shielding: true,
                                        line_number: 12,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 170314684824243330,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170314684824294620,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170314684824256450,
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
                                          id: '596021',
                                          pageJsonId: '541575',
                                          pathname:
                                            '/myOrderDone_202212191506copy',
                                          pageId: '922038101271379968',
                                          modalPath:
                                            '/myOrderDone_202212191506copy',
                                          customFuncName: 'jumpTab',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            pagePath: 'auditOrderPrepare',
                                            origin: '$state.origin$',
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            workItemId: '$row.workItemId$',
                                            isRollback: '1',
                                            originTab: '2',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            pagePath: 'auditOrderPrepare',
                                            workItemId: '$row.workItemId$',
                                            origin: '$state.origin$',
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            isRollback: '1',
                                            originTab: '2',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                        },
                                        actionObjId: 'callCustomPageFunc',
                                        actionObjName: 'system',
                                        value: 'callCustomPageFunc',
                                        tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                        line_number: 13,
                                      },
                                    ],
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 170314684824291200,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 170314684824228400,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 170314684824206270,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '04038565',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                shielding: true,
                                                line_number: 15,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 170314684824298530,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170314684824210100,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170314684824277760,
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
                                                  id: '2588937',
                                                  pageJsonId: '541575',
                                                  pathname:
                                                    '/myOrderDone_202212191506copy',
                                                  pageId: '922038101271379968',
                                                  modalPath:
                                                    '/myOrderDone_202212191506copy',
                                                  customFuncName: 'jumpTab',
                                                  customFuncParams: 'object',
                                                  paramsObj: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    isRollback: '',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                },
                                                actionObjId:
                                                  'callCustomPageFunc',
                                                actionObjName: 'system',
                                                value: 'callCustomPageFunc',
                                                tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                line_number: 16,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314684824256700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824290530,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    shielding: true,
                                                    line_number: 17,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824270460,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824288100,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824252220,
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
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    actionObjId:
                                                      'callCustomPageFunc',
                                                    actionObjName: 'system',
                                                    value: 'callCustomPageFunc',
                                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                    line_number: 18,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314684824290530,
                                                    shielding: true,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                  {
                                                    type: 'callCustomPageFunc',
                                                    dataId: 170314684824270460,
                                                    options: {
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    line_number: 18,
                                                    callback1: [],
                                                    callback2: [],
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
                                            line_number: 14,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 170314684824228320,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '023442',
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
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                              pageId: '884773713167953920',
                                              modalPath: '/auditDealWith-PC',
                                            },
                                            actionObjId: 'history',
                                            actionObjName: 'system',
                                            value: 'history',
                                            shielding: true,
                                            line_number: 19,
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
                                            dataId: 170314684824228400,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314684824256700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824290530,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    shielding: true,
                                                    line_number: 17,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824270460,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824288100,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824252220,
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
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    actionObjId:
                                                      'callCustomPageFunc',
                                                    actionObjName: 'system',
                                                    value: 'callCustomPageFunc',
                                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                    line_number: 18,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314684824290530,
                                                    shielding: true,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                  {
                                                    type: 'callCustomPageFunc',
                                                    dataId: 170314684824270460,
                                                    options: {
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    line_number: 18,
                                                    callback1: [],
                                                    callback2: [],
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 14,
                                            callback1: [
                                              {
                                                type: 'history',
                                                dataId: 170314684824206270,
                                                shielding: true,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '04038565',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 15,
                                              },
                                              {
                                                type: 'callCustomPageFunc',
                                                dataId: 170314684824298530,
                                                options: {
                                                  compId: 'callCustomPageFunc',
                                                  compName: 'system',
                                                  id: '2588937',
                                                  pageJsonId: '541575',
                                                  pathname:
                                                    '/myOrderDone_202212191506copy',
                                                  pageId: '922038101271379968',
                                                  modalPath:
                                                    '/myOrderDone_202212191506copy',
                                                  customFuncName: 'jumpTab',
                                                  customFuncParams: 'object',
                                                  paramsObj: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    isRollback: '',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                },
                                                line_number: 16,
                                                callback1: [],
                                                callback2: [],
                                              },
                                            ],
                                          },
                                          {
                                            type: 'history',
                                            dataId: 170314684824228320,
                                            shielding: true,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '023442',
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
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                              pageId: '884773713167953920',
                                              modalPath: '/auditDealWith-PC',
                                            },
                                            line_number: 19,
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
                                    line_number: 11,
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
                                    dataId: 170314684824217540,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 170314684824291200,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 170314684824228400,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 170314684824206270,
                                                children: [],
                                                todoOptions: [
                                                  'historyType',
                                                  'pathname',
                                                  'searchParams',
                                                ],
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '04038565',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                actionObjId: 'history',
                                                actionObjName: 'system',
                                                value: 'history',
                                                shielding: true,
                                                line_number: 15,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 170314684824298530,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170314684824210100,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170314684824277760,
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
                                                  id: '2588937',
                                                  pageJsonId: '541575',
                                                  pathname:
                                                    '/myOrderDone_202212191506copy',
                                                  pageId: '922038101271379968',
                                                  modalPath:
                                                    '/myOrderDone_202212191506copy',
                                                  customFuncName: 'jumpTab',
                                                  customFuncParams: 'object',
                                                  paramsObj: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    isRollback: '',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                },
                                                actionObjId:
                                                  'callCustomPageFunc',
                                                actionObjName: 'system',
                                                value: 'callCustomPageFunc',
                                                tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                line_number: 16,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314684824256700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824290530,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    shielding: true,
                                                    line_number: 17,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824270460,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824288100,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824252220,
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
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    actionObjId:
                                                      'callCustomPageFunc',
                                                    actionObjName: 'system',
                                                    value: 'callCustomPageFunc',
                                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                    line_number: 18,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314684824290530,
                                                    shielding: true,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                  {
                                                    type: 'callCustomPageFunc',
                                                    dataId: 170314684824270460,
                                                    options: {
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    line_number: 18,
                                                    callback1: [],
                                                    callback2: [],
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
                                            line_number: 14,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 170314684824228320,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '023442',
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
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                              pageId: '884773713167953920',
                                              modalPath: '/auditDealWith-PC',
                                            },
                                            actionObjId: 'history',
                                            actionObjName: 'system',
                                            value: 'history',
                                            shielding: true,
                                            line_number: 19,
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
                                            dataId: 170314684824228400,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 170314684824256700,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824290530,
                                                    children: [],
                                                    todoOptions: [
                                                      'historyType',
                                                      'pathname',
                                                      'searchParams',
                                                    ],
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    actionObjId: 'history',
                                                    actionObjName: 'system',
                                                    value: 'history',
                                                    shielding: true,
                                                    line_number: 17,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170314684824270460,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824288100,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170314684824252220,
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
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    actionObjId:
                                                      'callCustomPageFunc',
                                                    actionObjName: 'system',
                                                    value: 'callCustomPageFunc',
                                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                    line_number: 18,
                                                  },
                                                ],
                                                condition: [],
                                                callback: [
                                                  {
                                                    type: 'history',
                                                    dataId: 170314684824290530,
                                                    shielding: true,
                                                    options: {
                                                      compId: 'history',
                                                      compName: 'system',
                                                      id: '870282',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
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
                                                        origin:
                                                          '$state.origin$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                        originTab: '2',
                                                      },
                                                      pageId:
                                                        '884773713167953920',
                                                      modalPath:
                                                        '/auditDealWith-PC',
                                                    },
                                                    line_number: 17,
                                                  },
                                                  {
                                                    type: 'callCustomPageFunc',
                                                    dataId: 170314684824270460,
                                                    options: {
                                                      compId:
                                                        'callCustomPageFunc',
                                                      compName: 'system',
                                                      id: '690673',
                                                      pageJsonId: '541575',
                                                      pathname:
                                                        '/myOrderDone_202212191506copy',
                                                      pageId:
                                                        '922038101271379968',
                                                      modalPath:
                                                        '/myOrderDone_202212191506copy',
                                                      customFuncName: 'jumpTab',
                                                      customFuncParams:
                                                        'object',
                                                      paramsObj: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                      paramsObjKeyValueMap: {
                                                        pagePath:
                                                          'auditDealWith-PC',
                                                        workItemId:
                                                          '$row.workItemId$',
                                                        origin:
                                                          '$state.origin$',
                                                        scene: 'U',
                                                        instNbr:
                                                          '$row.approveOrdNbr$',
                                                        workId: '$row.workId$',
                                                        isRollback: '',
                                                        tacheName:
                                                          '$row.tacheName$',
                                                        busiObjNbr:
                                                          '$row.approveOrdNbr$',
                                                        isScreenshoot: '',
                                                        tacheCode:
                                                          '$row.tacheCode$',
                                                      },
                                                    },
                                                    line_number: 18,
                                                    callback1: [],
                                                    callback2: [],
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 14,
                                            callback1: [
                                              {
                                                type: 'history',
                                                dataId: 170314684824206270,
                                                shielding: true,
                                                options: {
                                                  compId: 'history',
                                                  compName: 'system',
                                                  id: '04038565',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
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
                                                    origin: '$state.origin$',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                    originTab: '2',
                                                  },
                                                  pageId: '884773713167953920',
                                                  modalPath:
                                                    '/auditDealWith-PC',
                                                },
                                                line_number: 15,
                                              },
                                              {
                                                type: 'callCustomPageFunc',
                                                dataId: 170314684824298530,
                                                options: {
                                                  compId: 'callCustomPageFunc',
                                                  compName: 'system',
                                                  id: '2588937',
                                                  pageJsonId: '541575',
                                                  pathname:
                                                    '/myOrderDone_202212191506copy',
                                                  pageId: '922038101271379968',
                                                  modalPath:
                                                    '/myOrderDone_202212191506copy',
                                                  customFuncName: 'jumpTab',
                                                  customFuncParams: 'object',
                                                  paramsObj: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    pagePath:
                                                      'auditDealWith-PC',
                                                    workItemId:
                                                      '$row.workItemId$',
                                                    origin: '$state.origin$',
                                                    scene: 'U',
                                                    instNbr:
                                                      '$row.approveOrdNbr$',
                                                    workId: '$row.workId$',
                                                    isRollback: '',
                                                    tacheName:
                                                      '$row.tacheName$',
                                                    busiObjNbr:
                                                      '$row.approveOrdNbr$',
                                                    isScreenshoot: '1',
                                                    tacheCode:
                                                      '$row.tacheCode$',
                                                  },
                                                },
                                                line_number: 16,
                                                callback1: [],
                                                callback2: [],
                                              },
                                            ],
                                          },
                                          {
                                            type: 'history',
                                            dataId: 170314684824228320,
                                            shielding: true,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '023442',
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
                                              },
                                              paramsObjKeyValueMap: {
                                                scene: 'U',
                                                instNbr: '$row.approveOrdNbr$',
                                                workId: '$row.workId$',
                                                tacheName: '$row.tacheName$',
                                                workItemId: '$row.workItemId$',
                                                busiObjNbr:
                                                  '$row.approveOrdNbr$',
                                              },
                                              pageId: '884773713167953920',
                                              modalPath: '/auditDealWith-PC',
                                            },
                                            line_number: 19,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 11,
                                    callback1: [
                                      {
                                        type: 'history',
                                        dataId: 170314684824215040,
                                        shielding: true,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '0121654',
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
                                            origin: '$state.origin$',
                                            originTab: '2',
                                          },
                                          paramsObjKeyValueMap: {
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            tacheName: '$row.tacheName$',
                                            workItemId: '$row.workItemId$',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                            isRollback: '1',
                                            origin: '$state.origin$',
                                            originTab: '2',
                                          },
                                          pageId: '884045146848604160',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        line_number: 12,
                                      },
                                      {
                                        type: 'callCustomPageFunc',
                                        dataId: 170314684824243330,
                                        options: {
                                          compId: 'callCustomPageFunc',
                                          compName: 'system',
                                          id: '596021',
                                          pageJsonId: '541575',
                                          pathname:
                                            '/myOrderDone_202212191506copy',
                                          pageId: '922038101271379968',
                                          modalPath:
                                            '/myOrderDone_202212191506copy',
                                          customFuncName: 'jumpTab',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            pagePath: 'auditOrderPrepare',
                                            origin: '$state.origin$',
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            workItemId: '$row.workItemId$',
                                            isRollback: '1',
                                            originTab: '2',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            pagePath: 'auditOrderPrepare',
                                            workItemId: '$row.workItemId$',
                                            origin: '$state.origin$',
                                            scene: 'U',
                                            instNbr: '$row.approveOrdNbr$',
                                            workId: '$row.workId$',
                                            isRollback: '1',
                                            originTab: '2',
                                            busiObjNbr: '$row.approveOrdNbr$',
                                          },
                                        },
                                        line_number: 13,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'history',
                                dataId: 170314684824213730,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '64498',
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
                                    origin: '$state.origin$',
                                    originTab: '2',
                                  },
                                  paramsObjKeyValueMap: {
                                    workItemId: '$row.workItemId$',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    workId: '$row.workId$',
                                    title: '$row.title$',
                                    scene: 'U',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                    origin: '$state.origin$',
                                    originTab: '2',
                                  },
                                  modalPath: '/mergeOrderApprove',
                                },
                                line_number: 9,
                              },
                              {
                                type: 'callCustomPageFunc',
                                dataId: 170314684824252000,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '380987',
                                  pageJsonId: '541575',
                                  pathname: '/myOrderDone_202212191506copy',
                                  pageId: '922038101271379968',
                                  modalPath: '/myOrderDone_202212191506copy',
                                  customFuncName: 'jumpTab',
                                  customFuncParams: 'object',
                                  paramsObj: {
                                    pagePath: 'mergeOrderApprove',
                                    workItemId: '$row.workItemId$',
                                    origin: '$state.origin$',
                                    scene: 'U',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    title: '$row.title$',
                                    workId: '$row.workId$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                    originTab: '2',
                                  },
                                  paramsObjKeyValueMap: {
                                    pagePath: 'mergeOrderApprove',
                                    workItemId: '$row.workItemId$',
                                    origin: '$state.origin$',
                                    scene: 'U',
                                    approveOrdNbr: '$row.approveOrdNbr$',
                                    title: '$row.title$',
                                    workId: '$row.workId$',
                                    busiObjNbr: '$row.approveOrdNbr$',
                                    originTab: '2',
                                  },
                                },
                                line_number: 10,
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
                eventDatagetTableSelected30.params =
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
                  eventDatagetTableSelected30,
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
                const eventDatagetTableSelected31: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166581889093031800,
                    options: {
                      compId: 'Table_37209506_850459_606135',
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
                            origin: '$state.origin$',
                            originTab: '2',
                          },
                          paramsObjKeyValueMap: {
                            instNbr: '$row.approveOrdNbr$',
                            scene: 'R',
                            workId: '$row.workId$',
                            origin: '$state.origin$',
                            originTab: '2',
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
                eventDatagetTableSelected31.params =
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
                  eventDatagetTableSelected31,
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
                const eventDatashowModal9: any = [
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
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '256604_body',
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
                eventDatashowModal9.params =
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
                  eventDatashowModal9,
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
                const eventDataapiRequest706: any = [
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
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '84867_body',
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
                eventDataapiRequest706.params =
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
                  eventDataapiRequest706,
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
                const eventDatashowCustomModal86: any = [
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
                eventDatashowCustomModal86.params =
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
                  eventDatashowCustomModal86,
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
                const eventDatashowCustomModal87: any = [
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
                eventDatashowCustomModal87.params =
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
                  eventDatashowCustomModal87,
                  { rowId, row, index },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatashowModal10: any = [
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
                                    },
                                  ],
                                  _id: 'body.tacheAttachments',
                                  compType: 'Input',
                                  name: 'tacheAttachments',
                                  parents: ['body'],
                                  id: 'body.tacheAttachments',
                                  dataKey: '877642_body.tacheAttachments',
                                  value: { type: [], code: '' },
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
                                    },
                                  ],
                                  _id: 'body.sameList',
                                  compType: 'Input',
                                  name: 'sameList',
                                  parents: ['body'],
                                  id: 'body.sameList',
                                  dataKey: '877642_body.sameList',
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
                                    },
                                  ],
                                  _id: 'body.copyUserList',
                                  compType: 'Input',
                                  name: 'copyUserList',
                                  parents: ['body'],
                                  id: 'body.copyUserList',
                                  dataKey: '877642_body.copyUserList',
                                  value: { type: [], code: '' },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '877642_body',
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
                eventDatashowModal10.params =
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
                  eventDatashowModal10,
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
                refs.setComponentRef(r, 'Table_37209506_850459_606135')
              }
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MyOrderDone_202212191506copy$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { origin: '', openFrom: '' },
});
