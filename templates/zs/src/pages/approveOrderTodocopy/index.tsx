// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Row,
  Text,
  Img,
  Icon,
  Card,
  Form,
  Input,
  Button,
  RangePicker,
  TreeSelect,
  CheckboxGroup,
  Table,
} from '@/components/factory';

import BusiComp2086 from '@/components/BusiComp2086';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '915422467695218688';
const ApproveOrderTodocopy$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse60: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '747885',
            options: {
              useManual: true,
              useObject: false,
              context: '$data.global_variable.queryMode$',
              operate: '==',
              manualValue: 'Complex',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166372530436195620,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166372530436159260,
            children: [
              {
                dataName: 'action',
                dataId: 166372530436147940,
                children: [],
                todoOptions: ['loading'],
                options: {
                  compId: 'Table_37209506',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Table',
                  id: '3568072',
                  loading: true,
                },
                actionObjId: 'Table_37209506',
                actionObjName: 'Table',
                value: 'setLoading',
                compLib: 'comm',
                elseIfs: [],
                shielding: true,
                line_number: 10,
              },
              {
                dataName: 'action',
                dataId: 166372530436190370,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166372530436161120,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166372530436158140,
                        children: [],
                        todoOptions: ['loading'],
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '898142564',
                          loading: false,
                        },
                        actionObjId: 'Table_37209506',
                        actionObjName: 'Table',
                        value: 'setLoading',
                        compLib: 'comm',
                        elseIfs: [],
                        shielding: true,
                        line_number: 12,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                    elseIfs: [],
                    shielding: true,
                  },
                  {
                    dataName: 'callback',
                    dataId: 166372530436125440,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166372530436195230,
                        children: [],
                        todoOptions: ['loading'],
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '537555',
                          loading: false,
                        },
                        actionObjId: 'Table_37209506',
                        actionObjName: 'Table',
                        value: 'setLoading',
                        compLib: 'comm',
                        elseIfs: [],
                        shielding: true,
                        line_number: 13,
                      },
                    ],
                    value: 'callback2',
                    params: [],
                    elseIfs: [],
                    shielding: true,
                  },
                ],
                todoOptions: [
                  'selectServerDataSource',
                  'dataSourceReloadFilter',
                ],
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '989461',
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
                      key: 'header',
                    },
                    {
                      attrId: '80970834',
                      code: 'path',
                      name: '请求路径参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'path',
                    },
                    {
                      attrId: '0203184',
                      code: 'query',
                      name: 'URL 参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'query',
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
                          attrId: '181711',
                          code: 'approveOrdNbr',
                          name: 'approveOrdNbr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.approveOrdNbr',
                          value: {
                            type: ['form', 'Form_126816', 'getFieldsValue'],
                            code: 'approveOrdNbr',
                          },
                        },
                        {
                          attrId: '726113',
                          code: 'extBusiObjNbr',
                          name: 'extBusiObjNbr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.extBusiObjNbr',
                          value: {
                            type: ['form', 'Form_126816', 'getFieldsValue'],
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
                          key: 'body.title',
                          value: { type: [], code: 'title' },
                        },
                        {
                          attrId: '200483',
                          code: 'minCreateTime',
                          name: 'minCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.minCreateTime',
                        },
                        {
                          attrId: '973868',
                          code: 'maxCreateTime',
                          name: 'maxCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.maxCreateTime',
                        },
                        {
                          attrId: '812173',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          key: 'body.createStaff',
                          value: { type: [], code: 'createStaff' },
                        },
                        {
                          attrId: '7965',
                          code: 'approveGrade',
                          name: 'approveGrade',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.approveGrade',
                          value: { type: [], code: 'approveGrade' },
                        },
                        {
                          attrId: '823621',
                          code: 'lanId',
                          name: 'lanId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.lanId',
                        },
                        {
                          attrId: '347783',
                          code: 'regionId',
                          name: 'regionId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.regionId',
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
                              key: 'body.busiObjStatusList.listItem',
                            },
                          ],
                          key: 'body.busiObjStatusList',
                          value: { type: [], code: 'busiObjStatusList' },
                        },
                        {
                          attrId: '4933575',
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
                          attrId: '632095',
                          code: 'pageSize',
                          name: 'pageSize',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          key: 'body.pageSize',
                          value: { type: ['customize'], code: '5' },
                        },
                        {
                          attrId: '2834986',
                          code: 'queryType',
                          name: 'queryType',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: 'Todo' },
                          type: 'string',
                          key: 'body.queryType',
                          value: {
                            type: ['datasource', 'global_variable', 'data'],
                            code: 'queryType',
                          },
                        },
                        {
                          attrId: '211301',
                          code: 'loginUserCode',
                          name: 'loginUserCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.loginUserCode',
                        },
                      ],
                      key: 'body',
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '698633',
                      code: 'resultCode',
                      name: 'resultCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1937216',
                      code: 'resultMsg',
                      name: 'resultMsg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8984083',
                      code: 'resultMsgCode',
                      name: 'resultMsgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '051735',
                      code: 'resultData',
                      name: 'resultData',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      children: [
                        {
                          attrId: '12089',
                          code: 'total',
                          name: 'total',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '549094',
                          code: 'size',
                          name: 'size',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '187698',
                          code: 'current',
                          name: 'current',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '094591',
                          code: 'orders',
                          name: 'orders',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '877565',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '751025',
                          code: 'optimizeCountSql',
                          name: 'optimizeCountSql',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '8686337',
                          code: 'hitCount',
                          name: 'hitCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '194243',
                          code: 'countId',
                          name: 'countId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '52476',
                          code: 'maxLimit',
                          name: 'maxLimit',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '719896',
                          code: 'searchCount',
                          name: 'searchCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '5544875',
                          code: 'pages',
                          name: 'pages',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '957554',
                          code: 'records',
                          name: 'records',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'objectArray',
                          children: [
                            {
                              attrId: '973882',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '91746',
                              code: 'title',
                              name: 'title',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '94146',
                              code: 'createStaffName',
                              name: 'createStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '5191185',
                              code: 'handleStaffName',
                              name: 'handleStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '3942426',
                              code: 'tacheName',
                              name: 'tacheName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '131691',
                              code: 'lastHandleTime',
                              name: 'lastHandleTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '4670344',
                              code: 'createTime',
                              name: 'createTime',
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
                actionObjId: 'reloadDataSource',
                actionObjName: 'page',
                value: 'reloadDataSource',
                elseIfs: [],
                shielding: true,
                line_number: 11,
              },
            ],
            condition: [],
            desc: '简单查询',
            elseIfs: [],
            shielding: true,
            callback: [
              {
                type: 'setLoading',
                dataId: 166372530436147940,
                shielding: true,
                options: {
                  compId: 'Table_37209506',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Table',
                  id: '3568072',
                  loading: true,
                },
                line_number: 10,
              },
              {
                type: 'reloadDataSource',
                dataId: 166372530436190370,
                shielding: true,
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '989461',
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
                      key: 'header',
                    },
                    {
                      attrId: '80970834',
                      code: 'path',
                      name: '请求路径参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'path',
                    },
                    {
                      attrId: '0203184',
                      code: 'query',
                      name: 'URL 参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'query',
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
                          attrId: '181711',
                          code: 'approveOrdNbr',
                          name: 'approveOrdNbr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.approveOrdNbr',
                          value: {
                            type: ['form', 'Form_126816', 'getFieldsValue'],
                            code: 'approveOrdNbr',
                          },
                        },
                        {
                          attrId: '726113',
                          code: 'extBusiObjNbr',
                          name: 'extBusiObjNbr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.extBusiObjNbr',
                          value: {
                            type: ['form', 'Form_126816', 'getFieldsValue'],
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
                          key: 'body.title',
                          value: { type: [], code: 'title' },
                        },
                        {
                          attrId: '200483',
                          code: 'minCreateTime',
                          name: 'minCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.minCreateTime',
                        },
                        {
                          attrId: '973868',
                          code: 'maxCreateTime',
                          name: 'maxCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.maxCreateTime',
                        },
                        {
                          attrId: '812173',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          key: 'body.createStaff',
                          value: { type: [], code: 'createStaff' },
                        },
                        {
                          attrId: '7965',
                          code: 'approveGrade',
                          name: 'approveGrade',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.approveGrade',
                          value: { type: [], code: 'approveGrade' },
                        },
                        {
                          attrId: '823621',
                          code: 'lanId',
                          name: 'lanId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.lanId',
                        },
                        {
                          attrId: '347783',
                          code: 'regionId',
                          name: 'regionId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.regionId',
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
                              key: 'body.busiObjStatusList.listItem',
                            },
                          ],
                          key: 'body.busiObjStatusList',
                          value: { type: [], code: 'busiObjStatusList' },
                        },
                        {
                          attrId: '4933575',
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
                          attrId: '632095',
                          code: 'pageSize',
                          name: 'pageSize',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          key: 'body.pageSize',
                          value: { type: ['customize'], code: '5' },
                        },
                        {
                          attrId: '2834986',
                          code: 'queryType',
                          name: 'queryType',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: 'Todo' },
                          type: 'string',
                          key: 'body.queryType',
                          value: {
                            type: ['datasource', 'global_variable', 'data'],
                            code: 'queryType',
                          },
                        },
                        {
                          attrId: '211301',
                          code: 'loginUserCode',
                          name: 'loginUserCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.loginUserCode',
                        },
                      ],
                      key: 'body',
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '698633',
                      code: 'resultCode',
                      name: 'resultCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1937216',
                      code: 'resultMsg',
                      name: 'resultMsg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8984083',
                      code: 'resultMsgCode',
                      name: 'resultMsgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '051735',
                      code: 'resultData',
                      name: 'resultData',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      children: [
                        {
                          attrId: '12089',
                          code: 'total',
                          name: 'total',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '549094',
                          code: 'size',
                          name: 'size',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '187698',
                          code: 'current',
                          name: 'current',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '094591',
                          code: 'orders',
                          name: 'orders',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '877565',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '751025',
                          code: 'optimizeCountSql',
                          name: 'optimizeCountSql',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '8686337',
                          code: 'hitCount',
                          name: 'hitCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '194243',
                          code: 'countId',
                          name: 'countId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '52476',
                          code: 'maxLimit',
                          name: 'maxLimit',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '719896',
                          code: 'searchCount',
                          name: 'searchCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '5544875',
                          code: 'pages',
                          name: 'pages',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '957554',
                          code: 'records',
                          name: 'records',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'objectArray',
                          children: [
                            {
                              attrId: '973882',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '91746',
                              code: 'title',
                              name: 'title',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '94146',
                              code: 'createStaffName',
                              name: 'createStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '5191185',
                              code: 'handleStaffName',
                              name: 'handleStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '3942426',
                              code: 'tacheName',
                              name: 'tacheName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '131691',
                              code: 'lastHandleTime',
                              name: 'lastHandleTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '4670344',
                              code: 'createTime',
                              name: 'createTime',
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
                    dataId: 166372530436158140,
                    shielding: true,
                    options: {
                      compId: 'Table_37209506',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '898142564',
                      loading: false,
                    },
                    line_number: 12,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 166372530436195230,
                    shielding: true,
                    options: {
                      compId: 'Table_37209506',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '537555',
                      loading: false,
                    },
                    line_number: 13,
                  },
                ],
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'getCurrentFormValues',
            dataId: 166372530436124900,
            shielding: true,
            options: {
              compId: 'Form_071412',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Form',
              id: '3682332',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getFormValue',
                dataId: 166372530436154800,
                shielding: true,
                options: {
                  compId: 'BOFramer_6134255',
                  compLib: '@/components',
                  pageJsonId: '541575',
                  compName: 'BOFramer',
                  id: '056494',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'getValue',
                    dataId: 166627011418639200,
                    shielding: true,
                    options: {
                      compId: 'TreeSelect_07743',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '928605',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166627046119524640,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5128',
                          pageJsonId: '541575',
                          code: 'function main(data,state,success,fail){if(!value_928605||!value_928605.length){return success("")}return success(value_928605)};',
                          actionTitle: '场景值处理',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166627084922012800,
                            shielding: true,
                            options: {
                              compId: 'Table_37209506',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '128142',
                              loading: true,
                            },
                            line_number: 6,
                          },
                          {
                            type: 'reloadDataSource',
                            dataId: 166627085380467070,
                            shielding: true,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '764844',
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
                                          'Form_126816',
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
                                          'Form_9423813',
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
                                        type: ['context', '$Form_071412$'],
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
                                          'Form_433981',
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
                                        type: ['context', '$Form_071412$'],
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
                                          'Form_126816',
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
                                          'Form_513266',
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
                                      value: { type: ['customize'], code: '5' },
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
                                        type: [
                                          'datasource',
                                          'global_variable',
                                          'data',
                                        ],
                                        code: 'queryType',
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
                                          'Form_433981',
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
                                        type: ['context', '$data_5128$'],
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
                                          'Form_071412',
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
                            line_number: 7,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 166627085380493900,
                                shielding: true,
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '993721',
                                  loading: false,
                                },
                                line_number: 8,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 166627085380415500,
                                shielding: true,
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '869495',
                                  loading: false,
                                },
                                line_number: 9,
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
            ],
          },
        ],
      },
    ];
    eventDataifelse60.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDataifelse60, { options_84995934 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse61: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '454677',
            options: {
              useManual: true,
              useObject: false,
              context: '$options_84995934.isDraft$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166778869893954000,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166778870160782140,
            children: [
              {
                dataName: 'condition',
                dataId: 166778870752419040,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166778870752521730,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 166778870752559940,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166778870752532380,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166778870752539260,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166778870752531840,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166778870752556320,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166778870752591400,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166778870752511520,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166778870752519070,
                                                    children: [],
                                                    todoOptions: ['loading'],
                                                    options: {
                                                      compId: 'Table_37209506',
                                                      compLib: 'comm',
                                                      pageJsonId: '541575',
                                                      compName: 'Table',
                                                      id: '29281715',
                                                      loading: true,
                                                    },
                                                    actionObjId:
                                                      'Table_37209506',
                                                    actionObjName: 'Table',
                                                    value: 'setLoading',
                                                    compLib: 'comm',
                                                    elseIfs: [],
                                                    line_number: 22,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166778870752554800,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166778870752599900,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 166778870752553730,
                                                            children: [],
                                                            todoOptions: [
                                                              'loading',
                                                            ],
                                                            options: {
                                                              compId:
                                                                'Table_37209506',
                                                              compLib: 'comm',
                                                              pageJsonId:
                                                                '541575',
                                                              compName: 'Table',
                                                              id: '300515',
                                                              loading: false,
                                                            },
                                                            actionObjId:
                                                              'Table_37209506',
                                                            actionObjName:
                                                              'Table',
                                                            value: 'setLoading',
                                                            compLib: 'comm',
                                                            elseIfs: [],
                                                            line_number: 24,
                                                          },
                                                        ],
                                                        value: 'callback1',
                                                        params: [],
                                                        elseIfs: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166778870752572320,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 166778870752534940,
                                                            children: [],
                                                            todoOptions: [
                                                              'loading',
                                                            ],
                                                            options: {
                                                              compId:
                                                                'Table_37209506',
                                                              compLib: 'comm',
                                                              pageJsonId:
                                                                '541575',
                                                              compName: 'Table',
                                                              id: '868915',
                                                              loading: false,
                                                            },
                                                            actionObjId:
                                                              'Table_37209506',
                                                            actionObjName:
                                                              'Table',
                                                            value: 'setLoading',
                                                            compLib: 'comm',
                                                            elseIfs: [],
                                                            line_number: 25,
                                                          },
                                                        ],
                                                        value: 'callback2',
                                                        params: [],
                                                        elseIfs: [],
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'selectServerDataSource',
                                                      'dataSourceReloadFilter',
                                                    ],
                                                    options: {
                                                      compId:
                                                        'reloadDataSource',
                                                      compName: 'page',
                                                      id: '0082386',
                                                      pageJsonId: '541575',
                                                      dataSourceId: 166201191339691900,
                                                      dataSourceName:
                                                        'qryDcApproveOrdTodoPage',
                                                      dataSourceRelType:
                                                        'service',
                                                      dataSourceReloadFilter: [
                                                        {
                                                          attrId: '6704033',
                                                          code: 'header',
                                                          name: '请求头参数',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                          type: 'object',
                                                        },
                                                        {
                                                          attrId: '80970834',
                                                          code: 'path',
                                                          name: '请求路径参数',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                          type: 'object',
                                                        },
                                                        {
                                                          attrId: '0203184',
                                                          code: 'query',
                                                          name: 'URL 参数',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                          type: 'object',
                                                        },
                                                        {
                                                          attrId: '6462786',
                                                          code: 'body',
                                                          name: '请求体',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                          type: 'object',
                                                          children: [
                                                            {
                                                              attrId: '726113',
                                                              code: 'extBusiObjNbr',
                                                              name: 'extBusiObjNbr',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_126816',
                                                                  'getFieldsValue',
                                                                ],
                                                                code: 'extBusiObjNbr',
                                                              },
                                                            },
                                                            {
                                                              attrId: '587457',
                                                              code: 'title',
                                                              name: 'title',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_9423813',
                                                                  'getFieldsValue',
                                                                ],
                                                                code: 'title',
                                                              },
                                                            },
                                                            {
                                                              attrId: '200483',
                                                              code: 'minCreateTime',
                                                              name: 'minCreateTime',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$Form_071412$',
                                                                ],
                                                                code: 'createTime[0]',
                                                              },
                                                            },
                                                            {
                                                              attrId: '7965',
                                                              code: 'approveGrade',
                                                              name: 'approveGrade',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_433981',
                                                                  'getFieldsValue',
                                                                ],
                                                                code: 'approveGrade',
                                                              },
                                                            },
                                                            {
                                                              attrId: '973868',
                                                              code: 'maxCreateTime',
                                                              name: 'maxCreateTime',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$Form_071412$',
                                                                ],
                                                                code: 'createTime[1]',
                                                              },
                                                            },
                                                            {
                                                              attrId: '181711',
                                                              code: 'approveOrdNbr',
                                                              name: 'approveOrdNbr',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_126816',
                                                                  'getFieldsValue',
                                                                ],
                                                                code: 'approveOrdNbr',
                                                              },
                                                            },
                                                            {
                                                              attrId: '4933575',
                                                              code: 'pageNum',
                                                              name: 'pageNum',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'long',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$options_84995934$',
                                                                ],
                                                                code: 'pageNum',
                                                              },
                                                            },
                                                            {
                                                              attrId: '823621',
                                                              code: 'lanId',
                                                              name: 'lanId',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$formValues$',
                                                                ],
                                                                code: 'lanId',
                                                              },
                                                            },
                                                            {
                                                              attrId: '211303',
                                                              code: 'busiObjStatusList',
                                                              name: 'busiObjStatusList',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                                value: '$[]$',
                                                              },
                                                              type: 'fieldArray',
                                                              children: [
                                                                {
                                                                  attrId:
                                                                    '590134',
                                                                  code: 'listItem',
                                                                  name: '列表元素',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'object',
                                                                },
                                                              ],
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_513266',
                                                                  'getFieldsValue',
                                                                ],
                                                                code: 'busiObjStatusList',
                                                              },
                                                            },
                                                            {
                                                              attrId: '347783',
                                                              code: 'regionId',
                                                              name: 'regionId',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$formValues$',
                                                                ],
                                                                code: 'areaId',
                                                              },
                                                            },
                                                            {
                                                              attrId: '632095',
                                                              code: 'pageSize',
                                                              name: 'pageSize',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'long',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$options_84995934$',
                                                                ],
                                                                code: 'pageSize',
                                                              },
                                                            },
                                                            {
                                                              attrId: '211301',
                                                              code: 'loginUserCode',
                                                              name: 'loginUserCode',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '2834986',
                                                              code: 'queryType',
                                                              name: 'queryType',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                                value: 'Todo',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'datasource',
                                                                  'global_variable',
                                                                  'data',
                                                                ],
                                                                code: 'queryType',
                                                              },
                                                            },
                                                            {
                                                              attrId: '812173',
                                                              code: 'createStaff',
                                                              name: 'createStaff',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_433981',
                                                                  'getFieldsValue',
                                                                ],
                                                                code: 'createStaff',
                                                              },
                                                            },
                                                            {
                                                              attrId: '4354343',
                                                              code: 'catalogCode',
                                                              name: '审批类型',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '892925',
                                                              code: 'custNameLike',
                                                              name: '集团名称',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '572475',
                                                              code: 'childCatalogCode',
                                                              name: '审批场景',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '7258495',
                                                              code: 'catalogValue',
                                                              name: '场景值',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'context',
                                                                  '$data_187782$',
                                                                ],
                                                                code: '',
                                                              },
                                                            },
                                                            {
                                                              attrId: '6840453',
                                                              code: 'catalogType',
                                                              name: '场景值类型',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                              value: {
                                                                type: [
                                                                  'form',
                                                                  'Form_071412',
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                        },
                                                        {
                                                          attrId: '489197',
                                                          code: 'resultCode',
                                                          name: 'resultCode',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                        },
                                                        {
                                                          attrId: '479545',
                                                          code: 'resultMsg',
                                                          name: 'resultMsg',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                        },
                                                        {
                                                          attrId: '614342',
                                                          code: 'resultData',
                                                          name: 'resultData',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'object',
                                                          children: [
                                                            {
                                                              attrId: '036436',
                                                              code: 'pages',
                                                              name: 'pages',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '5612557',
                                                              code: 'orders',
                                                              name: 'orders',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'fieldArray',
                                                              children: [
                                                                {
                                                                  attrId:
                                                                    '3469592',
                                                                  code: 'listItem',
                                                                  name: '列表元素',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'object',
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              attrId: '806859',
                                                              code: 'optimizeCountSql',
                                                              name: 'optimizeCountSql',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'boolean',
                                                            },
                                                            {
                                                              attrId: '00201',
                                                              code: 'hitCount',
                                                              name: 'hitCount',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'boolean',
                                                            },
                                                            {
                                                              attrId: '826684',
                                                              code: 'countId',
                                                              name: 'countId',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '975519',
                                                              code: 'maxLimit',
                                                              name: 'maxLimit',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '1958206',
                                                              code: 'searchCount',
                                                              name: 'searchCount',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'boolean',
                                                            },
                                                            {
                                                              attrId: '665284',
                                                              code: 'size',
                                                              name: 'size',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '7773136',
                                                              code: 'current',
                                                              name: 'current',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '5476424',
                                                              code: 'total',
                                                              name: 'total',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'string',
                                                            },
                                                            {
                                                              attrId: '517499',
                                                              code: 'records',
                                                              name: 'records',
                                                              sort: {
                                                                isSort: true,
                                                              },
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              type: 'objectArray',
                                                              children: [
                                                                {
                                                                  attrId:
                                                                    '509195',
                                                                  code: 'handleStaffName',
                                                                  name: 'handleStaffName',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '068298',
                                                                  code: 'approveOrdNbr',
                                                                  name: 'approveOrdNbr',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '084219',
                                                                  code: 'createStaffName',
                                                                  name: 'createStaffName',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '9899845',
                                                                  code: 'lastHandleTime',
                                                                  name: 'lastHandleTime',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '884655',
                                                                  code: 'tacheName',
                                                                  name: 'tacheName',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '949221',
                                                                  code: 'createTime',
                                                                  name: 'createTime',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '5712273',
                                                                  code: 'title',
                                                                  name: 'title',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '322515',
                                                                  code: 'isCurrentUserHandle',
                                                                  name: '新增节点',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                                {
                                                                  attrId:
                                                                    '212249',
                                                                  code: 'queryType',
                                                                  name: '查询类型',
                                                                  sort: {
                                                                    isSort: true,
                                                                  },
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  type: 'string',
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      otherObjectArrayOptions:
                                                        {},
                                                    },
                                                    actionObjId:
                                                      'reloadDataSource',
                                                    actionObjName: 'page',
                                                    value: 'reloadDataSource',
                                                    elseIfs: [],
                                                    line_number: 23,
                                                  },
                                                ],
                                                value: 'callback1',
                                                params: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 166778870752592960,
                                                children: [],
                                                value: 'callback2',
                                                params: [],
                                              },
                                            ],
                                            todoOptions: [
                                              'actionTitle',
                                              'editorCode',
                                            ],
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '187782',
                                              pageJsonId: '541575',
                                              code: 'function main(data,state,success,fail){if(!value_928605||!value_928605.length){return success("")}return success(value_928605)};',
                                              actionTitle: '场景值处理',
                                            },
                                            actionObjId: 'customActionCode',
                                            actionObjName: 'page',
                                            value: 'customActionCode',
                                            line_number: 21,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: [],
                                    options: {
                                      compId: 'TreeSelect_07743',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'TreeSelect',
                                      id: '6106478',
                                    },
                                    actionObjId: 'TreeSelect_07743',
                                    actionObjName: 'TreeSelect',
                                    value: 'getValue',
                                    compLib: 'comm',
                                    elseIfs: [],
                                    line_number: 20,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                                elseIfs: [],
                              },
                            ],
                            todoOptions: [],
                            options: {
                              compId: 'BOFramer_6134255',
                              compLib: '@/components',
                              pageJsonId: '541575',
                              compName: 'BOFramer',
                              id: '69363',
                            },
                            actionObjId: 'BOFramer_6134255',
                            actionObjName: 'BOFramer',
                            value: 'getFormValue',
                            compLib: '@/components',
                            elseIfs: [],
                            line_number: 19,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: [],
                    options: {
                      compId: 'Form_071412',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Form',
                      id: '941036',
                    },
                    actionObjId: 'Form_071412',
                    actionObjName: 'Form',
                    value: 'getCurrentFormValues',
                    compLib: 'comm',
                    elseIfs: [],
                    line_number: 18,
                  },
                ],
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166778870752575680,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166778870752543170,
                        children: [],
                        todoOptions: ['loading'],
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '69378',
                          loading: true,
                        },
                        actionObjId: 'Table_37209506',
                        actionObjName: 'Table',
                        value: 'setLoading',
                        compLib: 'comm',
                        elseIfs: [],
                        line_number: 26,
                      },
                      {
                        dataName: 'action',
                        dataId: 166778870752572160,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166778870752583100,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166778870752501440,
                                children: [],
                                todoOptions: ['loading'],
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '514643',
                                  loading: false,
                                },
                                actionObjId: 'Table_37209506',
                                actionObjName: 'Table',
                                value: 'setLoading',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 28,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166778870752517760,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166778870752531260,
                                children: [],
                                todoOptions: ['loading'],
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '218314',
                                  loading: false,
                                },
                                actionObjId: 'Table_37209506',
                                actionObjName: 'Table',
                                value: 'setLoading',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 29,
                              },
                            ],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [
                          'selectServerDataSource',
                          'dataSourceReloadFilter',
                        ],
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '140833',
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
                              key: 'header',
                            },
                            {
                              attrId: '80970834',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '0203184',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
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
                                  attrId: '181711',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveOrdNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
                                      'getFieldsValue',
                                    ],
                                    code: 'approveOrdNbr',
                                  },
                                },
                                {
                                  attrId: '726113',
                                  code: 'extBusiObjNbr',
                                  name: 'extBusiObjNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.extBusiObjNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
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
                                  key: 'body.title',
                                  value: { type: [], code: 'title' },
                                },
                                {
                                  attrId: '200483',
                                  code: 'minCreateTime',
                                  name: 'minCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.minCreateTime',
                                },
                                {
                                  attrId: '973868',
                                  code: 'maxCreateTime',
                                  name: 'maxCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.maxCreateTime',
                                },
                                {
                                  attrId: '812173',
                                  code: 'createStaff',
                                  name: 'createStaff',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  key: 'body.createStaff',
                                  value: { type: [], code: 'createStaff' },
                                },
                                {
                                  attrId: '7965',
                                  code: 'approveGrade',
                                  name: 'approveGrade',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveGrade',
                                  value: { type: [], code: 'approveGrade' },
                                },
                                {
                                  attrId: '823621',
                                  code: 'lanId',
                                  name: 'lanId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.lanId',
                                },
                                {
                                  attrId: '347783',
                                  code: 'regionId',
                                  name: 'regionId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.regionId',
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
                                      key: 'body.busiObjStatusList.listItem',
                                    },
                                  ],
                                  key: 'body.busiObjStatusList',
                                  value: {
                                    type: [],
                                    code: 'busiObjStatusList',
                                  },
                                },
                                {
                                  attrId: '4933575',
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
                                  attrId: '632095',
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
                                  attrId: '2834986',
                                  code: 'queryType',
                                  name: 'queryType',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: 'Todo',
                                  },
                                  type: 'string',
                                  key: 'body.queryType',
                                  value: {
                                    type: [
                                      'datasource',
                                      'global_variable',
                                      'data',
                                    ],
                                    code: 'queryType',
                                  },
                                },
                                {
                                  attrId: '211301',
                                  code: 'loginUserCode',
                                  name: 'loginUserCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.loginUserCode',
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '698633',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '1937216',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8984083',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '051735',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '12089',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '549094',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '187698',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '094591',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '877565',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '751025',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '8686337',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '194243',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '52476',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '719896',
                                  code: 'searchCount',
                                  name: 'searchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '5544875',
                                  code: 'pages',
                                  name: 'pages',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '957554',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '973882',
                                      code: 'approveOrdNbr',
                                      name: 'approveOrdNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '91746',
                                      code: 'title',
                                      name: 'title',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '94146',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '5191185',
                                      code: 'handleStaffName',
                                      name: 'handleStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '3942426',
                                      code: 'tacheName',
                                      name: 'tacheName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '131691',
                                      code: 'lastHandleTime',
                                      name: 'lastHandleTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '4670344',
                                      code: 'createTime',
                                      name: 'createTime',
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
                        actionObjId: 'reloadDataSource',
                        actionObjName: 'page',
                        value: 'reloadDataSource',
                        elseIfs: [],
                        line_number: 27,
                      },
                    ],
                    condition: [],
                    desc: '简单查询',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'setLoading',
                        dataId: 166778870752543170,
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '69378',
                          loading: true,
                        },
                        line_number: 26,
                      },
                      {
                        type: 'reloadDataSource',
                        dataId: 166778870752572160,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '140833',
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
                              key: 'header',
                            },
                            {
                              attrId: '80970834',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '0203184',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
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
                                  attrId: '181711',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveOrdNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
                                      'getFieldsValue',
                                    ],
                                    code: 'approveOrdNbr',
                                  },
                                },
                                {
                                  attrId: '726113',
                                  code: 'extBusiObjNbr',
                                  name: 'extBusiObjNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.extBusiObjNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
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
                                  key: 'body.title',
                                  value: { type: [], code: 'title' },
                                },
                                {
                                  attrId: '200483',
                                  code: 'minCreateTime',
                                  name: 'minCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.minCreateTime',
                                },
                                {
                                  attrId: '973868',
                                  code: 'maxCreateTime',
                                  name: 'maxCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.maxCreateTime',
                                },
                                {
                                  attrId: '812173',
                                  code: 'createStaff',
                                  name: 'createStaff',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  key: 'body.createStaff',
                                  value: { type: [], code: 'createStaff' },
                                },
                                {
                                  attrId: '7965',
                                  code: 'approveGrade',
                                  name: 'approveGrade',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveGrade',
                                  value: { type: [], code: 'approveGrade' },
                                },
                                {
                                  attrId: '823621',
                                  code: 'lanId',
                                  name: 'lanId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.lanId',
                                },
                                {
                                  attrId: '347783',
                                  code: 'regionId',
                                  name: 'regionId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.regionId',
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
                                      key: 'body.busiObjStatusList.listItem',
                                    },
                                  ],
                                  key: 'body.busiObjStatusList',
                                  value: {
                                    type: [],
                                    code: 'busiObjStatusList',
                                  },
                                },
                                {
                                  attrId: '4933575',
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
                                  attrId: '632095',
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
                                  attrId: '2834986',
                                  code: 'queryType',
                                  name: 'queryType',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: 'Todo',
                                  },
                                  type: 'string',
                                  key: 'body.queryType',
                                  value: {
                                    type: [
                                      'datasource',
                                      'global_variable',
                                      'data',
                                    ],
                                    code: 'queryType',
                                  },
                                },
                                {
                                  attrId: '211301',
                                  code: 'loginUserCode',
                                  name: 'loginUserCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.loginUserCode',
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '698633',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '1937216',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8984083',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '051735',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '12089',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '549094',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '187698',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '094591',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '877565',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '751025',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '8686337',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '194243',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '52476',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '719896',
                                  code: 'searchCount',
                                  name: 'searchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '5544875',
                                  code: 'pages',
                                  name: 'pages',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '957554',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '973882',
                                      code: 'approveOrdNbr',
                                      name: 'approveOrdNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '91746',
                                      code: 'title',
                                      name: 'title',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '94146',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '5191185',
                                      code: 'handleStaffName',
                                      name: 'handleStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '3942426',
                                      code: 'tacheName',
                                      name: 'tacheName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '131691',
                                      code: 'lastHandleTime',
                                      name: 'lastHandleTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '4670344',
                                      code: 'createTime',
                                      name: 'createTime',
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
                        line_number: 27,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166778870752501440,
                            options: {
                              compId: 'Table_37209506',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '514643',
                              loading: false,
                            },
                            line_number: 28,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 166778870752531260,
                            options: {
                              compId: 'Table_37209506',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '218314',
                              loading: false,
                            },
                            line_number: 29,
                          },
                        ],
                      },
                    ],
                  },
                ],
                condition: [
                  {
                    condId: '747885',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data.global_variable.queryMode$',
                      operate: '==',
                      manualValue: 'Complex',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '高级查询',
                line_number: 17,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '747885',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data.global_variable.queryMode$',
                      operate: '==',
                      manualValue: 'Complex',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166778870752419040,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166778870752575680,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166778870752543170,
                        children: [],
                        todoOptions: ['loading'],
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '69378',
                          loading: true,
                        },
                        actionObjId: 'Table_37209506',
                        actionObjName: 'Table',
                        value: 'setLoading',
                        compLib: 'comm',
                        elseIfs: [],
                        line_number: 26,
                      },
                      {
                        dataName: 'action',
                        dataId: 166778870752572160,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166778870752583100,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166778870752501440,
                                children: [],
                                todoOptions: ['loading'],
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '514643',
                                  loading: false,
                                },
                                actionObjId: 'Table_37209506',
                                actionObjName: 'Table',
                                value: 'setLoading',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 28,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166778870752517760,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166778870752531260,
                                children: [],
                                todoOptions: ['loading'],
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '218314',
                                  loading: false,
                                },
                                actionObjId: 'Table_37209506',
                                actionObjName: 'Table',
                                value: 'setLoading',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 29,
                              },
                            ],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [
                          'selectServerDataSource',
                          'dataSourceReloadFilter',
                        ],
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '140833',
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
                              key: 'header',
                            },
                            {
                              attrId: '80970834',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '0203184',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
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
                                  attrId: '181711',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveOrdNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
                                      'getFieldsValue',
                                    ],
                                    code: 'approveOrdNbr',
                                  },
                                },
                                {
                                  attrId: '726113',
                                  code: 'extBusiObjNbr',
                                  name: 'extBusiObjNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.extBusiObjNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
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
                                  key: 'body.title',
                                  value: { type: [], code: 'title' },
                                },
                                {
                                  attrId: '200483',
                                  code: 'minCreateTime',
                                  name: 'minCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.minCreateTime',
                                },
                                {
                                  attrId: '973868',
                                  code: 'maxCreateTime',
                                  name: 'maxCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.maxCreateTime',
                                },
                                {
                                  attrId: '812173',
                                  code: 'createStaff',
                                  name: 'createStaff',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  key: 'body.createStaff',
                                  value: { type: [], code: 'createStaff' },
                                },
                                {
                                  attrId: '7965',
                                  code: 'approveGrade',
                                  name: 'approveGrade',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveGrade',
                                  value: { type: [], code: 'approveGrade' },
                                },
                                {
                                  attrId: '823621',
                                  code: 'lanId',
                                  name: 'lanId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.lanId',
                                },
                                {
                                  attrId: '347783',
                                  code: 'regionId',
                                  name: 'regionId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.regionId',
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
                                      key: 'body.busiObjStatusList.listItem',
                                    },
                                  ],
                                  key: 'body.busiObjStatusList',
                                  value: {
                                    type: [],
                                    code: 'busiObjStatusList',
                                  },
                                },
                                {
                                  attrId: '4933575',
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
                                  attrId: '632095',
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
                                  attrId: '2834986',
                                  code: 'queryType',
                                  name: 'queryType',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: 'Todo',
                                  },
                                  type: 'string',
                                  key: 'body.queryType',
                                  value: {
                                    type: [
                                      'datasource',
                                      'global_variable',
                                      'data',
                                    ],
                                    code: 'queryType',
                                  },
                                },
                                {
                                  attrId: '211301',
                                  code: 'loginUserCode',
                                  name: 'loginUserCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.loginUserCode',
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '698633',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '1937216',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8984083',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '051735',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '12089',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '549094',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '187698',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '094591',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '877565',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '751025',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '8686337',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '194243',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '52476',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '719896',
                                  code: 'searchCount',
                                  name: 'searchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '5544875',
                                  code: 'pages',
                                  name: 'pages',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '957554',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '973882',
                                      code: 'approveOrdNbr',
                                      name: 'approveOrdNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '91746',
                                      code: 'title',
                                      name: 'title',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '94146',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '5191185',
                                      code: 'handleStaffName',
                                      name: 'handleStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '3942426',
                                      code: 'tacheName',
                                      name: 'tacheName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '131691',
                                      code: 'lastHandleTime',
                                      name: 'lastHandleTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '4670344',
                                      code: 'createTime',
                                      name: 'createTime',
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
                        actionObjId: 'reloadDataSource',
                        actionObjName: 'page',
                        value: 'reloadDataSource',
                        elseIfs: [],
                        line_number: 27,
                      },
                    ],
                    condition: [],
                    desc: '简单查询',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'setLoading',
                        dataId: 166778870752543170,
                        options: {
                          compId: 'Table_37209506',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '69378',
                          loading: true,
                        },
                        line_number: 26,
                      },
                      {
                        type: 'reloadDataSource',
                        dataId: 166778870752572160,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '140833',
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
                              key: 'header',
                            },
                            {
                              attrId: '80970834',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '0203184',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
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
                                  attrId: '181711',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveOrdNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
                                      'getFieldsValue',
                                    ],
                                    code: 'approveOrdNbr',
                                  },
                                },
                                {
                                  attrId: '726113',
                                  code: 'extBusiObjNbr',
                                  name: 'extBusiObjNbr',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.extBusiObjNbr',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_126816',
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
                                  key: 'body.title',
                                  value: { type: [], code: 'title' },
                                },
                                {
                                  attrId: '200483',
                                  code: 'minCreateTime',
                                  name: 'minCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.minCreateTime',
                                },
                                {
                                  attrId: '973868',
                                  code: 'maxCreateTime',
                                  name: 'maxCreateTime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.maxCreateTime',
                                },
                                {
                                  attrId: '812173',
                                  code: 'createStaff',
                                  name: 'createStaff',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  key: 'body.createStaff',
                                  value: { type: [], code: 'createStaff' },
                                },
                                {
                                  attrId: '7965',
                                  code: 'approveGrade',
                                  name: 'approveGrade',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.approveGrade',
                                  value: { type: [], code: 'approveGrade' },
                                },
                                {
                                  attrId: '823621',
                                  code: 'lanId',
                                  name: 'lanId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.lanId',
                                },
                                {
                                  attrId: '347783',
                                  code: 'regionId',
                                  name: 'regionId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.regionId',
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
                                      key: 'body.busiObjStatusList.listItem',
                                    },
                                  ],
                                  key: 'body.busiObjStatusList',
                                  value: {
                                    type: [],
                                    code: 'busiObjStatusList',
                                  },
                                },
                                {
                                  attrId: '4933575',
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
                                  attrId: '632095',
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
                                  attrId: '2834986',
                                  code: 'queryType',
                                  name: 'queryType',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: 'Todo',
                                  },
                                  type: 'string',
                                  key: 'body.queryType',
                                  value: {
                                    type: [
                                      'datasource',
                                      'global_variable',
                                      'data',
                                    ],
                                    code: 'queryType',
                                  },
                                },
                                {
                                  attrId: '211301',
                                  code: 'loginUserCode',
                                  name: 'loginUserCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.loginUserCode',
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '698633',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '1937216',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8984083',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '051735',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '12089',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '549094',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '187698',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '094591',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '877565',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '751025',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '8686337',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '194243',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '52476',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '719896',
                                  code: 'searchCount',
                                  name: 'searchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '5544875',
                                  code: 'pages',
                                  name: 'pages',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '957554',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '973882',
                                      code: 'approveOrdNbr',
                                      name: 'approveOrdNbr',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '91746',
                                      code: 'title',
                                      name: 'title',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '94146',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '5191185',
                                      code: 'handleStaffName',
                                      name: 'handleStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '3942426',
                                      code: 'tacheName',
                                      name: 'tacheName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '131691',
                                      code: 'lastHandleTime',
                                      name: 'lastHandleTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '4670344',
                                      code: 'createTime',
                                      name: 'createTime',
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
                        line_number: 27,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166778870752501440,
                            options: {
                              compId: 'Table_37209506',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '514643',
                              loading: false,
                            },
                            line_number: 28,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 166778870752531260,
                            options: {
                              compId: 'Table_37209506',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '218314',
                              loading: false,
                            },
                            line_number: 29,
                          },
                        ],
                      },
                    ],
                  },
                ],
                line_number: 17,
                callback1: [
                  {
                    type: 'getCurrentFormValues',
                    dataId: 166778870752521730,
                    options: {
                      compId: 'Form_071412',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Form',
                      id: '941036',
                    },
                    line_number: 18,
                    callback1: [
                      {
                        type: 'getFormValue',
                        dataId: 166778870752532380,
                        options: {
                          compId: 'BOFramer_6134255',
                          compLib: '@/components',
                          pageJsonId: '541575',
                          compName: 'BOFramer',
                          id: '69363',
                        },
                        line_number: 19,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166778870752531840,
                            options: {
                              compId: 'TreeSelect_07743',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'TreeSelect',
                              id: '6106478',
                            },
                            line_number: 20,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 166778870752591400,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '187782',
                                  pageJsonId: '541575',
                                  code: 'function main(data,state,success,fail){if(!value_928605||!value_928605.length){return success("")}return success(value_928605)};',
                                  actionTitle: '场景值处理',
                                },
                                line_number: 21,
                                callback1: [
                                  {
                                    type: 'setLoading',
                                    dataId: 166778870752519070,
                                    options: {
                                      compId: 'Table_37209506',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'Table',
                                      id: '29281715',
                                      loading: true,
                                    },
                                    line_number: 22,
                                  },
                                  {
                                    type: 'reloadDataSource',
                                    dataId: 166778870752554800,
                                    options: {
                                      compId: 'reloadDataSource',
                                      compName: 'page',
                                      id: '0082386',
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
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                        },
                                        {
                                          attrId: '80970834',
                                          code: 'path',
                                          name: '请求路径参数',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                        },
                                        {
                                          attrId: '0203184',
                                          code: 'query',
                                          name: 'URL 参数',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                        },
                                        {
                                          attrId: '6462786',
                                          code: 'body',
                                          name: '请求体',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
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
                                                  'Form_126816',
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
                                                  'Form_9423813',
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
                                                  'context',
                                                  '$Form_071412$',
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
                                                  'Form_433981',
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
                                                  'context',
                                                  '$Form_071412$',
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
                                                  'Form_126816',
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
                                                type: [
                                                  'context',
                                                  '$options_84995934$',
                                                ],
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
                                                type: [
                                                  'context',
                                                  '$formValues$',
                                                ],
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
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'object',
                                                },
                                              ],
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_513266',
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
                                                type: [
                                                  'context',
                                                  '$formValues$',
                                                ],
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
                                                type: [
                                                  'context',
                                                  '$options_84995934$',
                                                ],
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
                                                type: [
                                                  'datasource',
                                                  'global_variable',
                                                  'data',
                                                ],
                                                code: 'queryType',
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
                                                  'Form_433981',
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
                                                type: [
                                                  'context',
                                                  '$data_187782$',
                                                ],
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
                                                  'Form_071412',
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
                                                  initialData: {
                                                    type: 'static',
                                                  },
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
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '068298',
                                                  code: 'approveOrdNbr',
                                                  name: 'approveOrdNbr',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '084219',
                                                  code: 'createStaffName',
                                                  name: 'createStaffName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '9899845',
                                                  code: 'lastHandleTime',
                                                  name: 'lastHandleTime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '884655',
                                                  code: 'tacheName',
                                                  name: 'tacheName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '949221',
                                                  code: 'createTime',
                                                  name: 'createTime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '5712273',
                                                  code: 'title',
                                                  name: 'title',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '322515',
                                                  code: 'isCurrentUserHandle',
                                                  name: '新增节点',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '212249',
                                                  code: 'queryType',
                                                  name: '查询类型',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                      otherObjectArrayOptions: {},
                                    },
                                    line_number: 23,
                                    callback1: [
                                      {
                                        type: 'setLoading',
                                        dataId: 166778870752553730,
                                        options: {
                                          compId: 'Table_37209506',
                                          compLib: 'comm',
                                          pageJsonId: '541575',
                                          compName: 'Table',
                                          id: '300515',
                                          loading: false,
                                        },
                                        line_number: 24,
                                      },
                                    ],
                                    callback2: [
                                      {
                                        type: 'setLoading',
                                        dataId: 166778870752534940,
                                        options: {
                                          compId: 'Table_37209506',
                                          compLib: 'comm',
                                          pageJsonId: '541575',
                                          compName: 'Table',
                                          id: '868915',
                                          loading: false,
                                        },
                                        line_number: 25,
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
                    ],
                  },
                ],
              },
            ],
          },
        ],
        line_number: 14,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166778878890884930,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '952363',
              pageJsonId: '541575',
              actionTitle: '样式高亮',
              code: 'function main(data,state,success,fail){var tab0=document.querySelector(".card-tab-0");var tab1=document.querySelector(".card-tab-1");var tab2=document.querySelector(".card-tab-2");var tab3=document.querySelector(".card-tab-3");tab0.classList.remove("active");tab1.classList.remove("active");tab2.classList.remove("active");tab3.classList.add("active")};',
            },
            line_number: 15,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 166778880421512700,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '5099207',
              pageJsonId: '541575',
              dataSourceId: 166115824162750140,
              dataSourceName: 'global_variable',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '342771',
                  code: 'queryType',
                  name: '查询类型',
                  type: 'string',
                  initialData: { type: 'static', value: 'Todo' },
                  value: { type: ['customize'], code: 'MyDraft' },
                },
                {
                  attrId: '1757121',
                  code: 'queryMode',
                  name: '查询模式',
                  type: 'string',
                  initialData: { type: 'static', value: 'Simple' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 16,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse61.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDataifelse61, { options_84995934 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    query,
  }));

  useEffect(() => {
    const eventDataapiRequest623: any = [
      {
        type: 'apiRequest',
        dataId: 166096252894620860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '073905',
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
            dataId: 166096268222510430,
            options: {
              compId: 'Input_836023_885786',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Select',
              id: '593812',
              data: '$reply_073905?.resultData$',
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
    eventDataapiRequest623.params = [] || [];
    CMDGenerator(eventDataapiRequest623, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc49: any = [
      {
        type: 'callSelfFunc',
        dataId: 166400366662758240,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '226361',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: {
            pageNum: '1',
            isDraft: '$urlParam.isDraft$',
            pageSize: '5',
          },
          paramsObjKeyValueMap: {
            pageNum: '1',
            isDraft: '$urlParam.isDraft$',
            pageSize: '5',
          },
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc49.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc49, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataapiRequest624: any = [
      {
        type: 'apiRequest',
        dataId: 166625713069014750,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5870684',
          pageJsonId: '541575',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectAlltreeNodeCode',
          _apiCode: 'selectAlltreeNodeCode',
          _source: 'rhin',
          _serviceId: '874896712636026880',
          _serviceTitle: '获取树的所有节点-hdb: selectAlltreeNodeCode',
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
              dataKey: '5870684_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '5870684_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '5870684_query',
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
                  id: 'body.nodeKey',
                  dataKey: '5870684_body.nodeKey',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '5870684_body',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166625721654236400,
            options: {
              compId: 'TreeSelect_07743',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '99856',
              data: '$reply_5870684?.resultData$',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest624.params = [] || [];
    CMDGenerator(eventDataapiRequest624, {}, 'apiRequest', {
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
      className="__CustomClass_541575__"
    >
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_541575_1_210887',
          uid: 'View_541575_1_210887',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_541575_1_210887')}
        {...injectData}
      >
        <Row
          name={'行容器'}
          visible={true}
          colSpan={6}
          gutterHorizontal={12}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_781611_967166',
            uid: 'Row_781611_967166',
            type: 'Row',
            ...componentItem,
          }}
          style={{ backgroundColor: '#f0f2f5\n!important' }}
          ref={(r: any) => refs.setComponentRef(r, 'Row_781611_967166')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            className={'card-tab card-tab-0 active'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_011447_98638_751521_919607',
              uid: 'View_011447_98638_751521_919607',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '16px 20px 16px 20px',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100px',
            }}
            onClick={(e: any) => {
              const eventDatacustomActionCode891: any = [
                {
                  type: 'customActionCode',
                  dataId: 166251951772101280,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '072153',
                    pageJsonId: '541575',
                    actionTitle: '样式高亮',
                    code: 'function main(data,state,success,fail){var tab0=document.querySelector(".card-tab-0");var tab1=document.querySelector(".card-tab-1");var tab2=document.querySelector(".card-tab-2");var tab3=document.querySelector(".card-tab-3");tab0.classList.add("active");tab1.classList.remove("active");tab2.classList.remove("active");tab3.classList.remove("active")};',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode891.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode891,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDatasetDataSource289: any = [
                {
                  type: 'setDataSource',
                  dataId: 166122125638082430,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '591378',
                    pageJsonId: '541575',
                    dataSourceId: 166115824162750140,
                    dataSourceName: 'global_variable',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '342771',
                        code: 'queryType',
                        name: '查询类型',
                        type: 'string',
                        initialData: { type: 'static', value: 'Todo' },
                        value: { type: ['customize'], code: 'Todo' },
                      },
                      {
                        attrId: '1757121',
                        code: 'queryMode',
                        name: '查询模式',
                        type: 'string',
                        initialData: { type: 'static', value: 'Simple' },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 166254078179420800,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '054243',
                        pageJsonId: '541575',
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
                  callback2: [],
                },
              ];
              eventDatasetDataSource289.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasetDataSource289, { e }, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_011447_98638_751521_919607')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_15602_3008735_190707_3855435',
                uid: 'View_15602_3008735_190707_3855435',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_15602_3008735_190707_3855435')
              }
              {...injectData}
            >
              <Text
                name={'待办事项'}
                visible={true}
                content={'待办事项'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_609574_9990358_822433_383113',
                  uid: 'Text_609574_9990358_822433_383113',
                  type: 'Text',
                  ...componentItem,
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Text_609574_9990358_822433_383113')
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1478523_6666_08103_4591978',
                  uid: 'View_1478523_6666_08103_4591978',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '8px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_1478523_6666_08103_4591978')
                }
                {...injectData}
              >
                <Text
                  name={'resultData'}
                  visible={true}
                  content={data?.qryDcApproveOrdTodoCount?.resultData}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  fieldName={'data.qryDcApproveOrdTodoCount.resultData'}
                  $$componentItem={{
                    id: 'Text_074538_816425_1562435_3175163',
                    uid: 'Text_074538_816425_1562435_3175163',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: 30,
                    lineHeight: '24px',
                    color: '#1c242e',
                    fontWeight: 700,
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Text_074538_816425_1562435_3175163',
                    )
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'件'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_899064_131466_7776104_885414',
                    uid: 'Text_899064_131466_7776104_885414',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    letterSpacing: '',
                    marginLeft: '8px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_899064_131466_7776104_885414')
                  }
                  {...injectData}
                />
              </View>
            </View>
            <Img
              name={'图片'}
              visible={true}
              alt={'图片'}
              src={'待办事项'}
              fileCode={'todo_item'}
              $$componentItem={{
                id: 'Img_4689277_858797_5727136_130585',
                uid: 'Img_4689277_858797_5727136_130585',
                type: 'Img',
                ...componentItem,
              }}
              style={{ width: '48px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Img_4689277_858797_5727136_130585')
              }
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            className={'card-tab card-tab-1'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_011447_315475_353029',
              uid: 'View_011447_315475_353029',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '16px 20px 16px 20px',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100px',
            }}
            onClick={(e: any) => {
              const eventDatacustomActionCode892: any = [
                {
                  type: 'customActionCode',
                  dataId: 166252150435915070,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '826254',
                    pageJsonId: '541575',
                    code: 'function main(data,state,success,fail){var tab0=document.querySelector(".card-tab-0");var tab1=document.querySelector(".card-tab-1");var tab2=document.querySelector(".card-tab-2");var tab3=document.querySelector(".card-tab-3");tab0.classList.remove("active");tab1.classList.add("active");tab2.classList.remove("active");tab3.classList.remove("active")};',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode892.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode892,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDatasetDataSource290: any = [
                {
                  type: 'setDataSource',
                  dataId: 166123707685960060,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '71087',
                    pageJsonId: '541575',
                    dataSourceId: 166115824162750140,
                    dataSourceName: 'global_variable',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '342771',
                        code: 'queryType',
                        name: '查询类型',
                        type: 'string',
                        initialData: { type: 'static', value: 'Todo' },
                        value: {
                          type: ['customize'],
                          code: 'InitiatedApplication',
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 166254079502786780,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '340525',
                        pageJsonId: '541575',
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
                  callback2: [],
                },
              ];
              eventDatasetDataSource290.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasetDataSource290, { e }, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_011447_315475_353029')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_15602_1948197_126614',
                uid: 'View_15602_1948197_126614',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_15602_1948197_126614')
              }
              {...injectData}
            >
              <Text
                name={'发起的申请'}
                visible={true}
                content={'发起的申请'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_609574_82860284_762588',
                  uid: 'Text_609574_82860284_762588',
                  type: 'Text',
                  ...componentItem,
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Text_609574_82860284_762588')
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1478523_2604544_1623139',
                  uid: 'View_1478523_2604544_1623139',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '8px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_1478523_2604544_1623139')
                }
                {...injectData}
              >
                <Text
                  name={'resultData'}
                  visible={true}
                  content={
                    data?.qryDcApproveOrdInitiatedApplicationCount?.resultData
                  }
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  fieldName={
                    'data.qryDcApproveOrdInitiatedApplicationCount.resultData'
                  }
                  $$componentItem={{
                    id: 'Text_074538_584845_281666',
                    uid: 'Text_074538_584845_281666',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: 30,
                    lineHeight: '24px',
                    color: '#1c242e',
                    fontWeight: 700,
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_074538_584845_281666')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'件'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_899064_8603628_25583264',
                    uid: 'Text_899064_8603628_25583264',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    letterSpacing: '',
                    marginLeft: '8px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_899064_8603628_25583264')
                  }
                  {...injectData}
                />
              </View>
            </View>
            <Img
              name={'图片'}
              visible={true}
              alt={'图片'}
              src={'我发起的申请'}
              fileCode={'start_apply'}
              $$componentItem={{
                id: 'Img_4689277_7268616_951593',
                uid: 'Img_4689277_7268616_951593',
                type: 'Img',
                ...componentItem,
              }}
              style={{ width: '56px', height: '55px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Img_4689277_7268616_951593')
              }
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            className={'card-tab card-tab-2'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_011447_315475_771001_852093',
              uid: 'View_011447_315475_771001_852093',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '16px 20px 16px 20px',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100px',
            }}
            onClick={(e: any) => {
              const eventDatacustomActionCode893: any = [
                {
                  type: 'customActionCode',
                  dataId: 166253090905417700,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '6876777',
                    pageJsonId: '541575',
                    actionTitle: '样式高亮',
                    code: 'function main(data,state,success,fail){var tab0=document.querySelector(".card-tab-0");var tab1=document.querySelector(".card-tab-1");var tab2=document.querySelector(".card-tab-2");var tab3=document.querySelector(".card-tab-3");tab0.classList.remove("active");tab1.classList.remove("active");tab2.classList.add("active");tab3.classList.remove("active")};',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode893.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode893,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDatasetDataSource291: any = [
                {
                  type: 'setDataSource',
                  dataId: 166571827330139780,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '94726574',
                    pageJsonId: '541575',
                    dataSourceId: 166115824162750140,
                    dataSourceName: 'global_variable',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '342771',
                        code: 'queryType',
                        name: '查询类型',
                        type: 'string',
                        initialData: { type: 'static', value: 'Todo' },
                        value: { type: ['customize'], code: 'Read' },
                      },
                      {
                        attrId: '1757121',
                        code: 'queryMode',
                        name: '查询模式',
                        type: 'string',
                        initialData: { type: 'static', value: 'Simple' },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 166571827330171420,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '5975932',
                        pageJsonId: '541575',
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
                  callback2: [],
                },
              ];
              eventDatasetDataSource291.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasetDataSource291, { e }, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_011447_315475_771001_852093')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_15602_1948197_2625135_451015',
                uid: 'View_15602_1948197_2625135_451015',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_15602_1948197_2625135_451015')
              }
              {...injectData}
            >
              <Text
                name={'发起的申请'}
                visible={true}
                content={'待阅事项'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_609574_82860284_0895322_813604',
                  uid: 'Text_609574_82860284_0895322_813604',
                  type: 'Text',
                  ...componentItem,
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Text_609574_82860284_0895322_813604')
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1478523_2604544_7920888_963314',
                  uid: 'View_1478523_2604544_7920888_963314',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '8px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_1478523_2604544_7920888_963314')
                }
                {...injectData}
              >
                <Text
                  name={'resultData'}
                  visible={true}
                  content={data?.qryDcApproveOrdToReadCount?.resultData}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  fieldName={'data.qryDcApproveOrdToReadCount.resultData'}
                  $$componentItem={{
                    id: 'Text_074538_584845_8868265_961662',
                    uid: 'Text_074538_584845_8868265_961662',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: 30,
                    lineHeight: '24px',
                    color: '#1c242e',
                    fontWeight: 700,
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_074538_584845_8868265_961662')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'件'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_899064_8603628_84636_477363',
                    uid: 'Text_899064_8603628_84636_477363',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    letterSpacing: '',
                    marginLeft: '8px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_899064_8603628_84636_477363')
                  }
                  {...injectData}
                />
              </View>
            </View>
            <Img
              name={'图片'}
              visible={true}
              alt={'图片'}
              src={'待阅事项'}
              fileCode={'read_do_mention'}
              $$componentItem={{
                id: 'Img_4689277_7268616_128348_930795',
                uid: 'Img_4689277_7268616_128348_930795',
                type: 'Img',
                ...componentItem,
              }}
              style={{ width: '56px', height: '55px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Img_4689277_7268616_128348_930795')
              }
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            className={'card-tab card-tab-3'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_011447_103708_487827',
              uid: 'View_011447_103708_487827',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '16px 20px 16px 20px',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100px',
            }}
            onClick={(e: any) => {
              const eventDatacustomActionCode894: any = [
                {
                  type: 'customActionCode',
                  dataId: 166253097715229540,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '6460065',
                    pageJsonId: '541575',
                    actionTitle: '样式高亮',
                    code: 'function main(data,state,success,fail){var tab0=document.querySelector(".card-tab-0");var tab1=document.querySelector(".card-tab-1");var tab2=document.querySelector(".card-tab-2");var tab3=document.querySelector(".card-tab-3");tab0.classList.remove("active");tab1.classList.remove("active");tab2.classList.remove("active");tab3.classList.add("active")};',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode894.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode894,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDatasetDataSource292: any = [
                {
                  type: 'setDataSource',
                  dataId: 166261729155260740,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '254934',
                    pageJsonId: '541575',
                    dataSourceId: 166115824162750140,
                    dataSourceName: 'global_variable',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '342771',
                        code: 'queryType',
                        name: '查询类型',
                        type: 'string',
                        initialData: { type: 'static', value: 'Todo' },
                        value: { type: ['customize'], code: 'MyDraft' },
                      },
                      {
                        attrId: '1757121',
                        code: 'queryMode',
                        name: '查询模式',
                        type: 'string',
                        initialData: { type: 'static', value: 'Simple' },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 2,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource292.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasetDataSource292, { e }, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_011447_103708_487827')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_15602_302336_612127',
                uid: 'View_15602_302336_612127',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_15602_302336_612127')
              }
              {...injectData}
            >
              <Text
                name={'我的草稿'}
                visible={true}
                content={'我的草稿'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_609574_1616464_8609066',
                  uid: 'Text_609574_1616464_8609066',
                  type: 'Text',
                  ...componentItem,
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Text_609574_1616464_8609066')
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1478523_581132_4800225',
                  uid: 'View_1478523_581132_4800225',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '8px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_1478523_581132_4800225')
                }
                {...injectData}
              >
                <Text
                  name={'resultData'}
                  visible={true}
                  content={data?.qryMyDraftCount?.resultData}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  fieldName={'data.qryMyDraftCount.resultData'}
                  $$componentItem={{
                    id: 'Text_074538_886383_201425',
                    uid: 'Text_074538_886383_201425',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: 30,
                    lineHeight: '24px',
                    color: '#1c242e',
                    fontWeight: 700,
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_074538_886383_201425')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'件'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_899064_033877_9580497',
                    uid: 'Text_899064_033877_9580497',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    letterSpacing: '',
                    marginLeft: '8px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_899064_033877_9580497')
                  }
                  {...injectData}
                />
              </View>
            </View>
            <Img
              name={'图片'}
              visible={true}
              alt={'图片'}
              src={'我的草稿'}
              fileCode={'my_draft'}
              $$componentItem={{
                id: 'Img_4689277_9304956_72346655',
                uid: 'Img_4689277_9304956_72346655',
                type: 'Img',
                ...componentItem,
              }}
              style={{ width: '48px', height: '64px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Img_4689277_9304956_72346655')
              }
              {...injectData}
            />
          </View>
        </Row>
        <Row
          name={'行容器'}
          visible={false}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_843008_436616',
            uid: 'Row_843008_436616',
            type: 'Row',
            ...componentItem,
          }}
          style={{ margin: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Row_843008_436616')}
          {...injectData}
        >
          <Row
            name={'行容器'}
            visible={true}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_022256_600571',
              uid: 'Row_022256_600571',
              type: 'Row',
              ...componentItem,
            }}
            style={{
              margin: '0px 0px 0px 0px',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingTop: '16px',
              paddingBottom: '16px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Row_022256_600571')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'我的任务'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_8980095_165553',
                uid: 'Text_8980095_165553',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_8980095_165553')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_715972_474908',
                uid: 'View_715972_474908',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'space-between',
                margin: '12px 0px 0px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_715972_474908')}
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_751812_562956',
                  uid: 'View_751812_562956',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: 'auto',
                  alignItems: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_751812_562956')}
                {...injectData}
              >
                <Icon
                  name={'图标'}
                  rotate={0}
                  visible={true}
                  icon={{
                    theme: 'filled',
                    type: 'reconciliation',
                    isIconFont: false,
                  }}
                  $$componentItem={{
                    id: 'Icon_4101164_094153',
                    uid: 'Icon_4101164_094153',
                    type: 'Icon',
                    ...componentItem,
                  }}
                  style={{ color: '#2b86b3', fontSize: 22 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Icon_4101164_094153')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'待办任务单'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_6674564_94514086',
                    uid: 'Text_6674564_94514086',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    marginLeft: '4px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_6674564_94514086')
                  }
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_751812_237034_27382',
                  uid: 'View_751812_237034_27382',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: 'auto',
                  alignItems: 'center',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_751812_237034_27382')
                }
                {...injectData}
              >
                <Icon
                  name={'图标'}
                  rotate={0}
                  visible={true}
                  icon={{
                    theme: 'filled',
                    type: 'reconciliation',
                    isIconFont: false,
                  }}
                  $$componentItem={{
                    id: 'Icon_4101164_991908_984088',
                    uid: 'Icon_4101164_991908_984088',
                    type: 'Icon',
                    ...componentItem,
                  }}
                  style={{ color: '#52c41b', fontSize: 22 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Icon_4101164_991908_984088')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'已办任务单'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_6674564_282261_0704085',
                    uid: 'Text_6674564_282261_0704085',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    flex: '',
                    marginLeft: '4px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_6674564_282261_0704085')
                  }
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_751812_833089_40955585',
                  uid: 'View_751812_833089_40955585',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: 'auto',
                  alignItems: 'center',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_751812_833089_40955585')
                }
                {...injectData}
              >
                <Icon
                  name={'图标'}
                  rotate={0}
                  visible={true}
                  icon={{
                    theme: 'filled',
                    type: 'reconciliation',
                    isIconFont: false,
                  }}
                  $$componentItem={{
                    id: 'Icon_4101164_8364435_044917',
                    uid: 'Icon_4101164_8364435_044917',
                    type: 'Icon',
                    ...componentItem,
                  }}
                  style={{ color: '#2b86b3', fontSize: 22 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Icon_4101164_8364435_044917')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'待阅任务单'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_6674564_9192471_689094',
                    uid: 'Text_6674564_9192471_689094',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    marginLeft: '4px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_6674564_9192471_689094')
                  }
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_751812_504837_00492115',
                  uid: 'View_751812_504837_00492115',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: 'auto',
                  alignItems: 'center',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_751812_504837_00492115')
                }
                {...injectData}
              >
                <Icon
                  name={'图标'}
                  rotate={0}
                  visible={true}
                  icon={{
                    theme: 'filled',
                    type: 'reconciliation',
                    isIconFont: false,
                  }}
                  $$componentItem={{
                    id: 'Icon_4101164_1208576_677605',
                    uid: 'Icon_4101164_1208576_677605',
                    type: 'Icon',
                    ...componentItem,
                  }}
                  style={{ color: '#52c41b', fontSize: 22 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Icon_4101164_1208576_677605')
                  }
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  visible={true}
                  content={'已阅任务单'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_6674564_2758312_0911126',
                    uid: 'Text_6674564_2758312_0911126',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    marginLeft: '4px',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_6674564_2758312_0911126')
                  }
                  {...injectData}
                />
              </View>
            </View>
          </Row>
        </Row>
        <View
          name={'查询类型'}
          visible={functorsMap?.IF(
            data?.global_variable?.queryType == 'MyDraft',
            false,
            true,
          )}
          fieldName={'data.global_variable.queryType'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_065343_0367107',
            uid: 'View_065343_0367107',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            margin: '12px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_065343_0367107')}
          {...injectData}
        >
          <Card
            name={'卡片'}
            cardIconType={'middle'}
            title={'审批单待办'}
            bordered={true}
            size={'default'}
            hasHeader={false}
            visible={true}
            hasIcon={true}
            disabled={false}
            readOnly={false}
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
              id: 'Card_012576_982357',
              uid: 'Card_012576_982357',
              type: 'Card',
              ...componentItem,
            }}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_012576_982357')}
            {...injectData}
          >
            <Form
              name={'普通查询条件'}
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
              formCode={'Form_126816'}
              $$componentItem={{
                id: 'Form_126816_52006',
                uid: 'Form_126816_52006',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_126816_52006')}
              {...injectData}
            >
              <Input
                name={'审批单号'}
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
                  id: 'Input_8789281_057708',
                  uid: 'Input_8789281_057708',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc804: any = [
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
                  eventDatacallSelfFunc804.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc804,
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
                  refs.setComponentRef(r, 'Input_8789281_057708')
                }
                {...injectData}
              />
              <Input
                name={'外部工单号'}
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
                  id: 'Input_421306_869556',
                  uid: 'Input_421306_869556',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc805: any = [
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
                  eventDatacallSelfFunc805.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc805,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_421306_869556')}
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_445165_1895924',
                  uid: 'View_445165_1895924',
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
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 'px px px px',
                  width: '100%',
                  textAlign: 'right',
                  fontSize: '',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_445165_1895924')}
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
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_616697_954532',
                    uid: 'Button_616697_954532',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc806: any = [
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
                    eventDatacallSelfFunc806.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc806,
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
                    refs.setComponentRef(r, 'Button_616697_954532')
                  }
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
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_505213_4149997',
                    uid: 'Button_505213_4149997',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                  onClick={(e: any) => {
                    const eventDataclearValue217: any = [
                      {
                        type: 'clearValue',
                        dataId: 166626919455524860,
                        options: {
                          compId: 'TreeSelect_07743_3306392',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'TreeSelect',
                          id: '66017625',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDataclearValue217.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataclearValue217, { e }, 'clearValue', {
                      id: 'clearValue',
                      name: 'clearValue',
                      type: 'clearValue',
                      platform: 'pc',
                    });
                    const forms200 = getFormByCompId('Form_126816_52006', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms200) ? forms200 : [forms200]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const forms201 = getFormByCompId(
                      'Form_9423813_834841',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms201) ? forms201 : [forms201]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const forms202 = getFormByCompId(
                      'Form_071412_019488',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms202) ? forms202 : [forms202]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const forms203 = getFormByCompId(
                      'Form_433981_917962',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms203) ? forms203 : [forms203]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const forms204 = getFormByCompId('Form_513266_2673', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms204) ? forms204 : [forms204]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDataresetForm7: any = [
                      {
                        type: 'resetForm',
                        dataId: 166528220663409700,
                        options: {
                          compId: 'BOFramer_6134255_98179',
                          compLib: '@/components',
                          pageJsonId: '541575',
                          compName: 'BOFramer',
                          id: '812894',
                        },
                        line_number: 7,
                      },
                    ];
                    eventDataresetForm7.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataresetForm7, { e }, 'resetForm', {
                      id: 'resetForm',
                      name: 'resetForm',
                      type: 'resetForm',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Button_505213_4149997')
                  }
                  {...injectData}
                />
                <Button
                  name={'高级查询'}
                  visible={true}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'right'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  disabled={false}
                  type={'default'}
                  icon={{ theme: 'outlined', type: 'down', isIconFont: false }}
                  iconType={'down'}
                  hasIcon={true}
                  $$componentItem={{
                    id: 'Button_5899747_568383',
                    uid: 'Button_5899747_568383',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatasetVisible50: any = [
                      {
                        type: 'setVisible',
                        dataId: 166079301235499620,
                        options: {
                          compId: 'View_158841_251269',
                          compLib: 'custom',
                          pageJsonId: '541575',
                          compName: 'View',
                          id: '952157',
                          visible: 'true',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetVisible50.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetVisible50, { e }, 'setVisible', {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    });
                    const eventDatasetVisible51: any = [
                      {
                        type: 'setVisible',
                        dataId: 166079286454884380,
                        options: {
                          compId: 'Button_5899747_568383',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Button',
                          id: '1268996',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetVisible51.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetVisible51, { e }, 'setVisible', {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    });
                    const eventDatasetVisible52: any = [
                      {
                        type: 'setVisible',
                        dataId: 166079287064451780,
                        options: {
                          compId: 'Button_582318_337196',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Button',
                          id: '749752',
                          visible: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetVisible52.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetVisible52, { e }, 'setVisible', {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    });
                    const eventDatasetDataSource295: any = [
                      {
                        type: 'setDataSource',
                        dataId: 166253505442194240,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '98566',
                          pageJsonId: '541575',
                          dataSourceId: 166115824162750140,
                          dataSourceName: 'global_variable',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '342771',
                              code: 'queryType',
                              name: '查询类型',
                              type: 'string',
                              initialData: { type: 'static', value: 'Todo' },
                            },
                            {
                              attrId: '1757121',
                              code: 'queryMode',
                              name: '查询模式',
                              type: 'string',
                              initialData: { type: 'static', value: 'Simple' },
                              value: { type: ['customize'], code: 'Complex' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 4,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource295.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatasetDataSource295,
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
                    refs.setComponentRef(r, 'Button_5899747_568383')
                  }
                  {...injectData}
                />
                <Button
                  name={'高级查询'}
                  shape={null}
                  visible={false}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'right'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  disabled={false}
                  type={'default'}
                  icon={{ theme: 'outlined', type: 'up', isIconFont: false }}
                  iconType={'up'}
                  hasIcon={true}
                  $$componentItem={{
                    id: 'Button_582318_337196',
                    uid: 'Button_582318_337196',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatasetVisible53: any = [
                      {
                        type: 'setVisible',
                        dataId: 166079292296954200,
                        options: {
                          compId: 'View_158841_251269',
                          compLib: 'custom',
                          pageJsonId: '541575',
                          compName: 'View',
                          id: '053041',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetVisible53.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetVisible53, { e }, 'setVisible', {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    });
                    const eventDatasetVisible54: any = [
                      {
                        type: 'setVisible',
                        dataId: 166079293085521380,
                        options: {
                          compId: 'Button_582318_337196',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Button',
                          id: '288935',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetVisible54.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetVisible54, { e }, 'setVisible', {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    });
                    const eventDatasetVisible55: any = [
                      {
                        type: 'setVisible',
                        dataId: 166079293398323970,
                        options: {
                          compId: 'Button_5899747_568383',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Button',
                          id: '495837',
                          visible: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetVisible55.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetVisible55, { e }, 'setVisible', {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    });
                    const eventDatasetDataSource296: any = [
                      {
                        type: 'setDataSource',
                        dataId: 166253508486374180,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '523219',
                          pageJsonId: '541575',
                          dataSourceId: 166115824162750140,
                          dataSourceName: 'global_variable',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '342771',
                              code: 'queryType',
                              name: '查询类型',
                              type: 'string',
                              initialData: { type: 'static', value: 'Todo' },
                            },
                            {
                              attrId: '1757121',
                              code: 'queryMode',
                              name: '查询模式',
                              type: 'string',
                              initialData: { type: 'static', value: 'Simple' },
                              value: { type: ['customize'], code: 'Simple' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 4,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource296.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatasetDataSource296,
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
                    refs.setComponentRef(r, 'Button_582318_337196')
                  }
                  {...injectData}
                />
              </View>
            </Form>
            <View
              name={'高级查询条件'}
              visible={false}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_158841_251269',
                uid: 'View_158841_251269',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_158841_251269')}
              {...injectData}
            >
              <Form
                name={'工单主题表单'}
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
                formCode={'Form_9423813'}
                $$componentItem={{
                  id: 'Form_9423813_834841',
                  uid: 'Form_9423813_834841',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '12px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_9423813_834841')}
                {...injectData}
              >
                <Input
                  name={'工单主题'}
                  size={'default'}
                  selfSpan={16}
                  labelCol={4}
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
                    id: 'Input_85608_706666',
                    uid: 'Input_85608_706666',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_85608_706666')
                  }
                  {...injectData}
                />
              </Form>
              <Form
                name={'创建时间表单'}
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
                formCode={'Form_071412'}
                $$componentItem={{
                  id: 'Form_071412_019488',
                  uid: 'Form_071412_019488',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '12px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_071412_019488')}
                {...injectData}
              >
                <RangePicker
                  name={'创建时间'}
                  timeMode={'time'}
                  format={'YYYY-MM-DD HH:mm:ss'}
                  separator={'~'}
                  size={'default'}
                  selfSpan={16}
                  labelCol={'4'}
                  wrapperCol={'12'}
                  disabled={false}
                  visible={true}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={false}
                  pickerType={'RangePicker'}
                  formItemIndex={0}
                  fieldName={'createTime'}
                  showTime={false}
                  $$componentItem={{
                    id: 'RangePicker_0811484_1786124',
                    uid: 'RangePicker_0811484_1786124',
                    type: 'RangePicker',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'RangePicker_0811484_1786124')
                  }
                  {...injectData}
                />
                <Input
                  name={'场景类型'}
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
                  fieldName={'catalogType'}
                  disabled={false}
                  visible={false}
                  readOnly={false}
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
                    id: 'Input_116573_626916',
                    uid: 'Input_116573_626916',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_116573_626916')
                  }
                  {...injectData}
                />
              </Form>
              <Form
                name={'发起人表单'}
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
                formCode={'Form_433981'}
                $$componentItem={{
                  id: 'Form_433981_917962',
                  uid: 'Form_433981_917962',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '12px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_433981_917962')}
                {...injectData}
              >
                <Input
                  name={'发起人'}
                  size={'default'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
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
                  formItemIndex={0}
                  prefixIcon={{
                    prefixIconType: '',
                    prefixIconTheme: '',
                    prefixIconFontAddress: '',
                    prefixIconIsIconFont: false,
                  }}
                  icon={{
                    theme: 'outlined',
                    type: 'search',
                    isIconFont: false,
                  }}
                  postfixStyle={'3'}
                  disabled={false}
                  visible={true}
                  readOnly={true}
                  allowClear={true}
                  $$componentItem={{
                    id: 'Input_836023_2454495',
                    uid: 'Input_836023_2454495',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  onIconClick={() => {
                    const eventDatashowCustomModal298: any = [
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
                              compId: 'Input_836023_2454495',
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
                              compId: 'Input_295293_25015',
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
                    eventDatashowCustomModal298.params = [] || [];
                    CMDGenerator(
                      eventDatashowCustomModal298,
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
                    refs.setComponentRef(r, 'Input_836023_2454495')
                  }
                  {...injectData}
                />
                <TreeSelect
                  name={'场景名称'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  selfSpan={''}
                  labelCol={8}
                  wrapperCol={16}
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
                  formItemIndex={1}
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
                    id: 'TreeSelect_07743_3306392',
                    uid: 'TreeSelect_07743_3306392',
                    type: 'TreeSelect',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  onChange={(value: any, label: any, extra: any) => {
                    const eventDataifelse551: any = [
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
                                  compId: 'Input_116573_626916',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Input',
                                  id: '771525',
                                  value:
                                    '$extra.triggerNode.props.data.catalogType$',
                                },
                                actionObjId: 'Input_116573_626916',
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
                                  compId: 'Input_116573_626916',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Input',
                                  id: '771525',
                                  value:
                                    '$extra.triggerNode.props.data.catalogType$',
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
                            dataId: 166626611350413440,
                            options: {
                              compId: 'Input_116573_626916',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Input',
                              id: '483084',
                            },
                            line_number: 2,
                          },
                        ],
                      },
                    ];
                    eventDataifelse551.params =
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
                      eventDataifelse551,
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
                    refs.setComponentRef(r, 'TreeSelect_07743_3306392')
                  }
                  {...injectData}
                />
                <Input
                  name={'发起人值'}
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
                  formItemIndex={2}
                  fieldName={'createStaff'}
                  disabled={false}
                  visible={false}
                  readOnly={false}
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
                    id: 'Input_295293_25015',
                    uid: 'Input_295293_25015',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_295293_25015')
                  }
                  {...injectData}
                />
              </Form>
              <BusiComp2086
                name={'地市/区县二级联动'}
                visible={true}
                busiCompId={'878114493837852672'}
                style={{ margin: '12px 0px 12px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'BOFramer_6134255_98179')
                }
                {...injectData}
              />
              <Form
                name={'流程状态表单'}
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
                formCode={'Form_513266'}
                $$componentItem={{
                  id: 'Form_513266_2673',
                  uid: 'Form_513266_2673',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '12px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_513266_2673')}
                {...injectData}
              >
                <CheckboxGroup
                  name={'流程状态'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  selfSpan={16}
                  labelCol={'4'}
                  wrapperCol={'20'}
                  formItemIndex={0}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  required={false}
                  fieldName={'busiObjStatusList'}
                  disabled={false}
                  dataSource={[
                    { id: '451493', label: '处理中', value: '1' },
                    { id: '452132', label: '已生效', value: '2' },
                    { id: '786379', label: '已归档', value: '3' },
                  ]}
                  $$componentItem={{
                    id: 'CheckboxGroup_1187331_7703337',
                    uid: 'CheckboxGroup_1187331_7703337',
                    type: 'CheckboxGroup',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CheckboxGroup_1187331_7703337')
                  }
                  {...injectData}
                />
              </Form>
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
                  title: '审批单号',
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
                  title: '工单主题',
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
              visible={true}
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
                  rule: "(row.queryType == 'InitiatedApplication' && !row.handleObjCode) || row.queryType != 'InitiatedApplication'",
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
                  rule: "(row.queryType == 'InitiatedApplication' && !row.effectDate) || row.queryType != 'InitiatedApplication'",
                  icon: {
                    theme: 'outlined',
                    type: 'exclamation-circle',
                    isIconFont: false,
                  },
                  checked: true,
                },
              ]}
              actionWidth={100}
              extendNum={5}
              dataSourceFromDataSourceConfig={
                'data.qryDcApproveOrdTodoPage.resultData.records'
              }
              $$componentItem={{
                id: 'Table_37209506_336166',
                uid: 'Table_37209506_336166',
                type: 'Table',
                ...componentItem,
              }}
              style={{ margin: '16px 0px 0px 0px' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatacallSelfFunc807: any = [
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
                eventDatacallSelfFunc807.params =
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
                  eventDatacallSelfFunc807,
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
                const eventDatagetTableSelectedKey96: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166204272281569760,
                    options: {
                      compId: 'Table_37209506_336166',
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
                                elseIfs: [],
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
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
                              pathname: '/hedanshenpi2133667',
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
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey96.params =
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
                  eventDatagetTableSelectedKey96,
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
                const eventDatagetTableSelected82: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166521508521440860,
                    options: {
                      compId: 'Table_37209506_336166',
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
                                elseIfs: [],
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            elseIfs: [],
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
                                elseIfs: [],
                                line_number: 16,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
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
                                line_number: 16,
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
                                    elseIfs: [],
                                    shielding: true,
                                    line_number: 10,
                                  },
                                ],
                                condition: [],
                                elseIfs: [],
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
                                        elseIfs: [],
                                        line_number: 14,
                                      },
                                    ],
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166848329224572960,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166848329224572800,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '4965604',
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
                                            elseIfs: [],
                                            line_number: 15,
                                          },
                                        ],
                                        condition: [],
                                        elseIfs: [],
                                        callback: [
                                          {
                                            type: 'history',
                                            dataId: 166848329224572800,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '4965604',
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
                                            line_number: 15,
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
                                elseIfs: [],
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
                                            dataName: 'action',
                                            dataId: 166848329224572800,
                                            children: [],
                                            todoOptions: [
                                              'historyType',
                                              'pathname',
                                              'searchParams',
                                            ],
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '4965604',
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
                                            elseIfs: [],
                                            line_number: 15,
                                          },
                                        ],
                                        condition: [],
                                        elseIfs: [],
                                        callback: [
                                          {
                                            type: 'history',
                                            dataId: 166848329224572800,
                                            options: {
                                              compId: 'history',
                                              compName: 'system',
                                              id: '4965604',
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
                                            line_number: 15,
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
                                  pathname: '/hedanshenpi2133667',
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
                                  modalPath: '/hedanshenpi2133667',
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
                eventDatagetTableSelected82.params =
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
                  eventDatagetTableSelected82,
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
                const eventDatagetTableSelected83: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166255419371255300,
                    options: {
                      compId: 'Table_37209506_336166',
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
                                elseIfs: [],
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            elseIfs: [],
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
                                    elseIfs: [],
                                    line_number: 10,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166823489813830940,
                                    children: [
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
                                        elseIfs: [],
                                        line_number: 11,
                                      },
                                    ],
                                    condition: [],
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'history',
                                        dataId: 166823489813835650,
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
                                        line_number: 11,
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
                            elseIfs: [],
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
                                        elseIfs: [],
                                        line_number: 11,
                                      },
                                    ],
                                    condition: [],
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'history',
                                        dataId: 166823489813835650,
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
                                        line_number: 11,
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
                              pathname: '/hedanshenpi2133667',
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
                              modalPath: '/hedanshenpi2133667',
                            },
                            line_number: 8,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected83.params =
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
                  eventDatagetTableSelected83,
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
                const eventDatagetTableSelected84: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166581889093031800,
                    options: {
                      compId: 'Table_37209506_336166',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '342791',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'history',
                        dataId: 166581893533167140,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '447504',
                          pageJsonId: '541575',
                          type: 'push',
                          pathname: '/flow/read/audit',
                          selectedType: 'page',
                          paramsObj: {
                            scene: 'U',
                            instNbr: '$rowId$',
                            workId: '$row.workId$',
                            tacheName: '$row.tacheName$',
                            workItemId: '$row.workItemId$',
                            busiObjNbr: '$row.approveOrdNbr$',
                            isRollback: '1',
                          },
                          paramsObjKeyValueMap: {
                            scene: 'U',
                            instNbr: '$rowId$',
                            workId: '$row.workId$',
                            tacheName: '$row.tacheName$',
                            workItemId: '$row.workItemId$',
                            busiObjNbr: '$row.approveOrdNbr$',
                            isRollback: '1',
                          },
                          pageId: '898391867027853312',
                          modalPath: '/flow/read/audit',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected84.params =
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
                  eventDatagetTableSelected84,
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
                const eventDatashowModal23: any = [
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
                        '每天只能催办一次，将发送短信给处理人，短信发送时间为【9点-11点半，14点30分-17点】，确定要发起催办吗？',
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
                eventDatashowModal23.params =
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
                  eventDatashowModal23,
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
                const eventDataapiRequest808: any = [
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
                eventDataapiRequest808.params =
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
                  eventDataapiRequest808,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_37209506_336166')}
              {...injectData}
            />
          </Card>
        </View>
        <View
          name={'查询类型'}
          visible={functorsMap?.IF(
            data?.global_variable?.queryType == 'MyDraft',
            true,
            false,
          )}
          fieldName={'data.global_variable.queryType'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_8238124_81288',
            uid: 'View_8238124_81288',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            margin: '12px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_8238124_81288')}
          {...injectData}
        >
          <Pageview
            name={'页面容器'}
            pageViewCompState={{}}
            pageSrc={'/myDraft'}
            pageId={'879998060900732928'}
            style={{ height: 'auto', width: '100%', margin: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Pageview_361429_0568945')}
            {...injectData}
            parentEngineId={parentEngineId}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ApproveOrderTodocopy$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
