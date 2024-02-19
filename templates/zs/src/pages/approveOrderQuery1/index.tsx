// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  CheckboxGroup,
  Form,
  Input,
  RangePicker,
  Table,
  TreeSelect,
  View,
} from '@/components/factory';

import BusiComp2086 from '@/components/BusiComp2086';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const ApproveOrderQuery1$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse58: any = [
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
                        line_number: 12,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                    elseIfs: [],
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
                        line_number: 13,
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
                  id: '989461',
                  pageJsonId: '541575',
                  dataSourceId: 166392708863272260,
                  dataSourceName: 'qryDcApproveOrdPage',
                  dataSourceRelType: 'service',
                  dataSourceReloadFilter: [
                    {
                      attrId: '062815',
                      code: 'header',
                      name: '请求头参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'header',
                    },
                    {
                      attrId: '322521',
                      code: 'path',
                      name: '请求路径参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'path',
                    },
                    {
                      attrId: '5351276',
                      code: 'query',
                      name: 'URL 参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'query',
                    },
                    {
                      attrId: '21748',
                      code: 'body',
                      name: '请求体',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      children: [
                        {
                          attrId: '247866',
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
                          attrId: '5476289',
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
                          attrId: '400817',
                          code: 'title',
                          name: 'title',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.title',
                          value: { type: [], code: 'title' },
                        },
                        {
                          attrId: '2276657',
                          code: 'minCreateTime',
                          name: 'minCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.minCreateTime',
                        },
                        {
                          attrId: '162279',
                          code: 'maxCreateTime',
                          name: 'maxCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.maxCreateTime',
                        },
                        {
                          attrId: '678688',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          key: 'body.createStaff',
                          value: { type: [], code: 'createStaff' },
                        },
                        {
                          attrId: '2237775',
                          code: 'approveGrade',
                          name: 'approveGrade',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.approveGrade',
                        },
                        {
                          attrId: '63922328',
                          code: 'lanId',
                          name: 'lanId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.lanId',
                        },
                        {
                          attrId: '70873',
                          code: 'regionId',
                          name: 'regionId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.regionId',
                        },
                        {
                          attrId: '31566',
                          code: 'busiObjStatusList',
                          name: 'busiObjStatusList',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '706486',
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
                          attrId: '302302',
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
                          attrId: '485843',
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
                      ],
                      key: 'body',
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '453954',
                      code: 'resultCode',
                      name: 'resultCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '631272',
                      code: 'resultMsg',
                      name: 'resultMsg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '089256',
                      code: 'resultMsgCode',
                      name: 'resultMsgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '56101479',
                      code: 'resultData',
                      name: 'resultData',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      children: [
                        {
                          attrId: '445002',
                          code: 'total',
                          name: 'total',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '1582793',
                          code: 'pages',
                          name: 'pages',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '762911',
                          code: 'size',
                          name: 'size',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '767145',
                          code: 'current',
                          name: 'current',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2627061',
                          code: 'orders',
                          name: 'orders',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '223743',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '14838',
                          code: 'optimizeCountSql',
                          name: 'optimizeCountSql',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '2163307',
                          code: 'hitCount',
                          name: 'hitCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '441011',
                          code: 'countId',
                          name: 'countId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '693232',
                          code: 'maxLimit',
                          name: 'maxLimit',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '291614',
                          code: 'searchCount',
                          name: 'searchCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '761065',
                          code: 'records',
                          name: 'records',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'objectArray',
                          children: [
                            {
                              attrId: '101216',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '9478',
                              code: 'title',
                              name: 'title',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '019189',
                              code: 'createStaffName',
                              name: 'createStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '126003',
                              code: 'handleStaffName',
                              name: 'handleStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '471329',
                              code: 'tacheName',
                              name: 'tacheName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '479106',
                              code: 'lastHandleTime',
                              name: 'lastHandleTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '30508',
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
                line_number: 11,
              },
            ],
            condition: [],
            desc: '简单查询',
            elseIfs: [],
            callback: [
              {
                type: 'setLoading',
                dataId: 166372530436147940,
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
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '989461',
                  pageJsonId: '541575',
                  dataSourceId: 166392708863272260,
                  dataSourceName: 'qryDcApproveOrdPage',
                  dataSourceRelType: 'service',
                  dataSourceReloadFilter: [
                    {
                      attrId: '062815',
                      code: 'header',
                      name: '请求头参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'header',
                    },
                    {
                      attrId: '322521',
                      code: 'path',
                      name: '请求路径参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'path',
                    },
                    {
                      attrId: '5351276',
                      code: 'query',
                      name: 'URL 参数',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      key: 'query',
                    },
                    {
                      attrId: '21748',
                      code: 'body',
                      name: '请求体',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      type: 'object',
                      children: [
                        {
                          attrId: '247866',
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
                          attrId: '5476289',
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
                          attrId: '400817',
                          code: 'title',
                          name: 'title',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.title',
                          value: { type: [], code: 'title' },
                        },
                        {
                          attrId: '2276657',
                          code: 'minCreateTime',
                          name: 'minCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.minCreateTime',
                        },
                        {
                          attrId: '162279',
                          code: 'maxCreateTime',
                          name: 'maxCreateTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.maxCreateTime',
                        },
                        {
                          attrId: '678688',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          key: 'body.createStaff',
                          value: { type: [], code: 'createStaff' },
                        },
                        {
                          attrId: '2237775',
                          code: 'approveGrade',
                          name: 'approveGrade',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.approveGrade',
                        },
                        {
                          attrId: '63922328',
                          code: 'lanId',
                          name: 'lanId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.lanId',
                        },
                        {
                          attrId: '70873',
                          code: 'regionId',
                          name: 'regionId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.regionId',
                        },
                        {
                          attrId: '31566',
                          code: 'busiObjStatusList',
                          name: 'busiObjStatusList',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '706486',
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
                          attrId: '302302',
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
                          attrId: '485843',
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
                      ],
                      key: 'body',
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '453954',
                      code: 'resultCode',
                      name: 'resultCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '631272',
                      code: 'resultMsg',
                      name: 'resultMsg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '089256',
                      code: 'resultMsgCode',
                      name: 'resultMsgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '56101479',
                      code: 'resultData',
                      name: 'resultData',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      children: [
                        {
                          attrId: '445002',
                          code: 'total',
                          name: 'total',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '1582793',
                          code: 'pages',
                          name: 'pages',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '762911',
                          code: 'size',
                          name: 'size',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '767145',
                          code: 'current',
                          name: 'current',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2627061',
                          code: 'orders',
                          name: 'orders',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '223743',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '14838',
                          code: 'optimizeCountSql',
                          name: 'optimizeCountSql',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '2163307',
                          code: 'hitCount',
                          name: 'hitCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '441011',
                          code: 'countId',
                          name: 'countId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '693232',
                          code: 'maxLimit',
                          name: 'maxLimit',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '291614',
                          code: 'searchCount',
                          name: 'searchCount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'boolean',
                        },
                        {
                          attrId: '761065',
                          code: 'records',
                          name: 'records',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'objectArray',
                          children: [
                            {
                              attrId: '101216',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '9478',
                              code: 'title',
                              name: 'title',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '019189',
                              code: 'createStaffName',
                              name: 'createStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '126003',
                              code: 'handleStaffName',
                              name: 'handleStaffName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '471329',
                              code: 'tacheName',
                              name: 'tacheName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '479106',
                              code: 'lastHandleTime',
                              name: 'lastHandleTime',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '30508',
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
                    dataId: 166627170511497200,
                    options: {
                      compId: 'TreeSelect_07743_7628562',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'TreeSelect',
                      id: '896059',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166627172526096000,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '6135721',
                          pageJsonId: '541575',
                          actionTitle: '场景值处理',
                          code: 'function main(data,state,success,fail){if(!value_896059||!value_896059.length){return success("")}return success(value_896059)};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166627178412460480,
                            options: {
                              compId: 'Table_37209506',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '648853',
                              loading: true,
                            },
                            line_number: 6,
                          },
                          {
                            type: 'reloadDataSource',
                            dataId: 166627179273266200,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '663088',
                              pageJsonId: '541575',
                              dataSourceId: 166392708863272260,
                              dataSourceName: 'qryDcApproveOrdPage',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '062815',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                },
                                {
                                  attrId: '322521',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                },
                                {
                                  attrId: '5351276',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                },
                                {
                                  attrId: '21748',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '2276657',
                                      code: 'minCreateTime',
                                      name: 'minCreateTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_071412',
                                          'getFieldsValue',
                                        ],
                                        code: 'createTime[0]',
                                      },
                                    },
                                    {
                                      attrId: '400817',
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
                                      attrId: '5476289',
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
                                      attrId: '247866',
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
                                      attrId: '2237775',
                                      code: 'approveGrade',
                                      name: 'approveGrade',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '31566',
                                      code: 'busiObjStatusList',
                                      name: 'busiObjStatusList',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'fieldArray',
                                      children: [
                                        {
                                          attrId: '706486',
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
                                      attrId: '678688',
                                      code: 'createStaff',
                                      name: 'createStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
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
                                      attrId: '70873',
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
                                      attrId: '63922328',
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
                                      attrId: '162279',
                                      code: 'maxCreateTime',
                                      name: 'maxCreateTime',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_071412',
                                          'getFieldsValue',
                                        ],
                                        code: 'createTime[1]',
                                      },
                                    },
                                    {
                                      attrId: '485843',
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
                                      attrId: '302302',
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
                                      attrId: '3355877',
                                      code: 'catalogValue',
                                      name: '场景值',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$data_6135721$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '910926',
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
                                  attrId: '453954',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '631272',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '089256',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '56101479',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '445002',
                                      code: 'total',
                                      name: 'total',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '1582793',
                                      code: 'pages',
                                      name: 'pages',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '762911',
                                      code: 'size',
                                      name: 'size',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '767145',
                                      code: 'current',
                                      name: 'current',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '441011',
                                      code: 'countId',
                                      name: 'countId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '693232',
                                      code: 'maxLimit',
                                      name: 'maxLimit',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '291614',
                                      code: 'searchCount',
                                      name: 'searchCount',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '2627061',
                                      code: 'orders',
                                      name: 'orders',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'fieldArray',
                                      children: [
                                        {
                                          attrId: '223743',
                                          code: 'listItem',
                                          name: '列表元素',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                        },
                                      ],
                                    },
                                    {
                                      attrId: '14838',
                                      code: 'optimizeCountSql',
                                      name: 'optimizeCountSql',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '2163307',
                                      code: 'hitCount',
                                      name: 'hitCount',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'boolean',
                                    },
                                    {
                                      attrId: '761065',
                                      code: 'records',
                                      name: 'records',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '479106',
                                          code: 'lastHandleTime',
                                          name: 'lastHandleTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '30508',
                                          code: 'createTime',
                                          name: 'createTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '101216',
                                          code: 'approveOrdNbr',
                                          name: 'approveOrdNbr',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '9478',
                                          code: 'title',
                                          name: 'title',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '019189',
                                          code: 'createStaffName',
                                          name: 'createStaffName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '126003',
                                          code: 'handleStaffName',
                                          name: 'handleStaffName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '471329',
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
                            line_number: 7,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 166627179273299000,
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '173454',
                                  loading: false,
                                },
                                line_number: 8,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 166627179273231420,
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '071901',
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
    eventDataifelse58.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDataifelse58, { options_84995934 }, 'ifelse', {
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
    const eventDataapiRequest550: any = [
      {
        type: 'apiRequest',
        dataId: 167888040825200500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '758241',
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
          actionTitle: '查询是否有功能权限',
          apiRequestSetParams: [
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '758241_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '758241_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '758241_query',
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
                      dataKey: '758241_body.privilegeCodes.listItem',
                    },
                  ],
                  _id: 'body.privilegeCodes',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.privilegeCodes',
                  dataKey: '758241_body.privilegeCodes',
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
              dataKey: '758241_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 167888045365636450,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '3368513',
              pageJsonId: '541575',
              value: ['$reply_758241?.resultData$'],
            },
            line_number: 2,
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '708973',
                options: {
                  context:
                    '$reply_758241?.resultData.F_SYNTHESIZE_QRY_EXPORT_CONFIG$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888046238907400,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888050143121570,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888053194250900,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: 'Button_912732',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '9207662',
                      visible: '',
                    },
                    actionObjId: 'Button_912732',
                    actionObjName: 'Button',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 5,
                  },
                ],
                condition: [],
                desc: '无导出配置权限',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888053194250900,
                    options: {
                      compId: 'Button_912732',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '9207662',
                      visible: '',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
            line_number: 3,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888051431895360,
                options: {
                  compId: 'Button_912732',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Button',
                  id: '995464',
                  visible: 'true',
                },
                line_number: 4,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '8415433',
                options: {
                  context:
                    '$reply_758241?.resultData.F_SYNTHESIZE_QRY_EXPORT_RESULT$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888054993670080,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888058497585800,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888060230708860,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: 'Button_7469188',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '971538',
                      visible: '',
                    },
                    actionObjId: 'Button_7469188',
                    actionObjName: 'Button',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 8,
                  },
                ],
                condition: [],
                desc: '无导出结果权限',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888060230708860,
                    options: {
                      compId: 'Button_7469188',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Button',
                      id: '971538',
                      visible: '',
                    },
                    line_number: 8,
                  },
                ],
              },
            ],
            line_number: 6,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888059379950820,
                options: {
                  compId: 'Button_7469188',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Button',
                  id: '446735',
                  visible: 'true',
                },
                line_number: 7,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest550.params = [] || [];
    CMDGenerator(eventDataapiRequest550, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest551: any = [
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
        line_number: 9,
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
            line_number: 10,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest551.params = [] || [];
    CMDGenerator(eventDataapiRequest551, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest552: any = [
      {
        type: 'apiRequest',
        dataId: 166627272036741860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9694997',
          pageJsonId: '541575',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAlltreeNode',
          _apiCode: 'qryAlltreeNode',
          _source: 'rhin',
          _serviceId: '946058969512980480',
          _serviceTitle: '根据编码查询所有节点及节点下的数据: qryAlltreeNode',
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
              dataKey: '9694997_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9694997_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9694997_query',
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
                  dataKey: '9694997_body.nodeValue',
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
                  dataKey: '9694997_body.nodeKey',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9694997_body',
            },
          ],
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166627275441218600,
            options: {
              compId: 'TreeSelect_07743_7628562',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '501034',
              data: '$reply_9694997?.resultData$',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest552.params = [] || [];
    CMDGenerator(eventDataapiRequest552, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacustomActionCode295: any = [
      {
        type: 'customActionCode',
        dataId: 167540500713535420,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '831417',
          pageJsonId: '541575',
          actionTitle: '初始化已选列',
          code: 'function main(data,state,success,fail){var selectedRowDef={};selectedRowDef["busiObjNbr"]="\\u5BA1\\u6279\\u5355\\u53F7";selectedRowDef["title"]="\\u5BA1\\u6279\\u5355\\u4E3B\\u9898";selectedRowDef["childCatalogName"]="\\u573A\\u666F\\u540D\\u79F0";selectedRowDef["createStaffName"]="\\u53D1\\u8D77\\u4EBA\\u59D3\\u540D";selectedRowDef["createStaff"]="\\u53D1\\u8D77\\u4EBA\\u5DE5\\u53F7";selectedRowDef["lanName"]="\\u5F52\\u5C5E\\u5730\\u5E02";selectedRowDef["regionName"]="\\u5F52\\u5C5E\\u533A\\u53BF";selectedRowDef["createDate"]="\\u521B\\u5EFA\\u65F6\\u95F4";selectedRowDef["lastHandleTime"]="\\u6700\\u540E\\u5904\\u7406\\u65F6\\u95F4";selectedRowDef["tacheName"]="\\u5F53\\u524D\\u73AF\\u8282";selectedRowDef["handleStaffName"]="\\u5F53\\u524D\\u73AF\\u8282\\u5904\\u7406\\u4EBA";data.selectedRow=selectedRowDef;success()};',
        },
        line_number: 13,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode295.params = [] || [];
    CMDGenerator(eventDatacustomActionCode295, {}, 'customActionCode', {
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
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_541575_1',
          uid: 'View_541575_1',
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
        ref={(r: any) => (refs['View_541575_1'] = r)}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'审批单查询'}
          bordered={true}
          size={'default'}
          hasHeader={true}
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
            id: 'Card_012576',
            uid: 'Card_012576',
            type: 'Card',
            ...componentItem,
          }}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['Card_012576'] = r)}
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
              id: 'Form_126816',
              uid: 'Form_126816',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_126816'] = r)}
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
                id: 'Input_8789281',
                uid: 'Input_8789281',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc759: any = [
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
                eventDatacallSelfFunc759.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc759, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_8789281'] = r)}
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
                id: 'Input_421306',
                uid: 'Input_421306',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc760: any = [
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
                eventDatacallSelfFunc760.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc760, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_421306'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_445165',
                uid: 'View_445165',
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
              ref={(r: any) => (refs['View_445165'] = r)}
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
                  id: 'Button_616697',
                  uid: 'Button_616697',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc761: any = [
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
                        paramsObj: { pageNum: '1', pageSize: '10' },
                        paramsObjKeyValueMap: { pageNum: '1', pageSize: '10' },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc761.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc761,
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
                ref={(r: any) => (refs['Button_616697'] = r)}
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
                  id: 'Button_505213',
                  uid: 'Button_505213',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                onClick={(e: any) => {
                  const forms180 = getFormByCompId('Form_126816', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms180) ? forms180 : [forms180]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms181 = getFormByCompId('Form_9423813', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms181) ? forms181 : [forms181]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms182 = getFormByCompId('Form_071412', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms182) ? forms182 : [forms182]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const forms183 = getFormByCompId('Form_433981', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms183) ? forms183 : [forms183]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDataclearValue199: any = [
                    {
                      type: 'clearValue',
                      dataId: 166627304630713280,
                      shielding: true,
                      options: {
                        compId: 'TreeSelect_07743_7628562',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'TreeSelect',
                        id: '399499',
                      },
                      line_number: 5,
                    },
                  ];
                  eventDataclearValue199.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue199, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatasetValue41: any = [
                    {
                      type: 'setValue',
                      dataId: 167591228265265470,
                      options: {
                        compId: 'TreeSelect_07743_7628562',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'TreeSelect',
                        id: '86963736',
                        valueList: { TreeSelect_07743_7628562: '$undefined$' },
                      },
                      line_number: 6,
                      callback1: [],
                    },
                  ];
                  eventDatasetValue41.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetValue41, { e }, 'setValue', {
                    id: 'setValue',
                    name: 'setValue',
                    type: 'setValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue200: any = [
                    {
                      type: 'clearValue',
                      dataId: 167359251393517800,
                      options: {
                        compId: 'CheckboxGroup_1187331',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'CheckboxGroup',
                        id: '772703',
                      },
                      line_number: 7,
                    },
                  ];
                  eventDataclearValue200.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue200, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_505213'] = r)}
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
                  id: 'Button_5899747',
                  uid: 'Button_5899747',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatasetVisible38: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079301235499620,
                      options: {
                        compId: 'View_158841',
                        compLib: 'custom',
                        pageJsonId: '541575',
                        compName: 'View',
                        id: '952157',
                        visible: 'true',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetVisible38.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible38, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible39: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079286454884380,
                      options: {
                        compId: 'Button_5899747',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '1268996',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetVisible39.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible39, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible40: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079287064451780,
                      options: {
                        compId: 'Button_582318',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '749752',
                        visible: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetVisible40.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible40, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetDataSource260: any = [
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
                  eventDatasetDataSource260.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatasetDataSource260,
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
                ref={(r: any) => (refs['Button_5899747'] = r)}
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
                  id: 'Button_582318',
                  uid: 'Button_582318',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatasetVisible41: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079292296954200,
                      options: {
                        compId: 'View_158841',
                        compLib: 'custom',
                        pageJsonId: '541575',
                        compName: 'View',
                        id: '053041',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetVisible41.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible41, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible42: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079293085521380,
                      options: {
                        compId: 'Button_582318',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '288935',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetVisible42.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible42, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible43: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079293398323970,
                      options: {
                        compId: 'Button_5899747',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '495837',
                        visible: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetVisible43.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible43, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetDataSource261: any = [
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
                  eventDatasetDataSource261.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatasetDataSource261,
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
                ref={(r: any) => (refs['Button_582318'] = r)}
                {...injectData}
              />
            </View>
          </Form>
          <View
            name={'高级查询条件'}
            visible={false}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_158841',
              uid: 'View_158841',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_158841'] = r)}
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
                id: 'Form_9423813',
                uid: 'Form_9423813',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_9423813'] = r)}
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
                  id: 'Input_85608',
                  uid: 'Input_85608',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_85608'] = r)}
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
                id: 'Form_071412',
                uid: 'Form_071412',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_071412'] = r)}
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
                  id: 'RangePicker_0811484',
                  uid: 'RangePicker_0811484',
                  type: 'RangePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['RangePicker_0811484'] = r)}
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
                  id: 'Input_116573_315388',
                  uid: 'Input_116573_315388',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_116573_315388'] = r)}
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
                id: 'Form_433981',
                uid: 'Form_433981',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_433981'] = r)}
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
                icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
                postfixStyle={'3'}
                disabled={false}
                visible={true}
                readOnly={true}
                allowClear={true}
                $$componentItem={{
                  id: 'Input_836023',
                  uid: 'Input_836023',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal270: any = [
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
                            compId: 'Input_836023',
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
                            compId: 'Input_295293',
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
                  eventDatashowCustomModal270.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal270,
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
                ref={(r: any) => (refs['Input_836023'] = r)}
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
                  id: 'TreeSelect_07743_7628562',
                  uid: 'TreeSelect_07743_7628562',
                  type: 'TreeSelect',
                  ...componentItem,
                }}
                isFormRootChild={true}
                onChange={(value: any, label: any, extra: any) => {
                  const eventDataifelse536: any = [
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
                              dataId: 166627285784328500,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166627285784320000,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['value'],
                              options: {
                                compId: 'Input_116573_315388',
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '872465',
                                value:
                                  '$extra.triggerNode.props.data.catalogType$',
                              },
                              actionObjId: 'Input_116573_315388',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 3,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 166627285784328500,
                              options: {
                                compId: 'Input_116573_315388',
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Input',
                                id: '872465',
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
                          dataId: 166627285157987780,
                          options: {
                            compId: 'Input_116573_315388',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Input',
                            id: '758237',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse536.params =
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
                    eventDataifelse536,
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
                ref={(r: any) => (refs['TreeSelect_07743_7628562'] = r)}
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
                  id: 'Input_295293',
                  uid: 'Input_295293',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_295293'] = r)}
                {...injectData}
              />
            </Form>
            <BusiComp2086
              name={'地市/区县二级联动'}
              visible={true}
              busiCompId={'878114493837852672'}
              style={{ margin: '12px 0px 12px 0px' }}
              ref={(r: any) => (refs['BOFramer_6134255'] = r)}
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
                id: 'Form_513266',
                uid: 'Form_513266',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_513266'] = r)}
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
                  { id: '451493', label: '处理中', value: '1000' },
                  { id: '786379', label: '已归档', value: '1200' },
                  { id: '488982', label: '作废', value: '1300' },
                  { id: '8240504', label: '撤单', value: '1400' },
                ]}
                $$componentItem={{
                  id: 'CheckboxGroup_1187331',
                  uid: 'CheckboxGroup_1187331',
                  type: 'CheckboxGroup',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['CheckboxGroup_1187331'] = r)}
                {...injectData}
              />
            </Form>
          </View>
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_706566',
              uid: 'View_706566',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              margin: '10px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['View_706566'] = r)}
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
              formCode={'Form_108511'}
              $$componentItem={{
                id: 'Form_108511',
                uid: 'Form_108511',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_108511'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_615533',
                  uid: 'View_615533',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
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
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  textAlign: 'right',
                }}
                ref={(r: any) => (refs['View_615533'] = r)}
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
                  disabled={false}
                  visible={true}
                  type={'primary'}
                  labelCol={8}
                  wrapperCol={16}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_912732',
                    uid: 'Button_912732',
                    type: 'Button',
                    ...componentItem,
                  }}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatashowCustomModal272: any = [
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
                    eventDatashowCustomModal272.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatashowCustomModal272,
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
                  ref={(r: any) => (refs['Button_912732'] = r)}
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
                  disabled={false}
                  visible={true}
                  type={'primary'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_7469188',
                    uid: 'Button_7469188',
                    type: 'Button',
                    ...componentItem,
                  }}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
                  onClick={(e: any) => {
                    const eventDataifelse538: any = [
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
                        dataId: 167540883039931940,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167540883039923230,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167540883039934660,
                                children: [],
                                todoOptions: ['loading'],
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '233006',
                                  loading: true,
                                },
                                actionObjId: 'Table_37209506',
                                actionObjName: 'Table',
                                value: 'setLoading',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 13,
                              },
                              {
                                dataName: 'action',
                                dataId: 167541065958133120,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167541065958157220,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167574001229343800,
                                        children: [],
                                        todoOptions: ['loading'],
                                        options: {
                                          compId: 'Table_37209506',
                                          compLib: 'comm',
                                          pageJsonId: '541575',
                                          compName: 'Table',
                                          id: '228986',
                                          loading: false,
                                        },
                                        actionObjId: 'Table_37209506',
                                        actionObjName: 'Table',
                                        value: 'setLoading',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 15,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 167574002117461950,
                                        children: [],
                                        todoOptions: ['dataSourceFileId'],
                                        options: {
                                          compId: 'downloadByFileId',
                                          compName: 'system',
                                          id: '152713',
                                          pageJsonId: '541575',
                                          data: '$reply_0151988.resultData.fileId$',
                                        },
                                        actionObjId: 'downloadByFileId',
                                        actionObjName: 'system',
                                        value: 'downloadByFileId',
                                        line_number: 16,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167541065958112930,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: [
                                  'actionTitle',
                                  'sync',
                                  'url',
                                  'params',
                                ],
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '0151988',
                                  pageJsonId: '541575',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'qryDcApproveOrdExport',
                                  _apiCode: 'qryDcApproveOrdExport',
                                  _source: 'rhin',
                                  _serviceId: '938694460448714752',
                                  _serviceTitle:
                                    '审批单导出-hdb: qryDcApproveOrdExport',
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
                                      dataKey: '0151988_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '0151988_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '0151988_query',
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
                                          _id: 'body.approveGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.approveGrade',
                                          dataKey: '0151988_body.approveGrade',
                                        },
                                        {
                                          code: 'approveOrdNbr',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.approveOrdNbr',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.approveOrdNbr',
                                          dataKey: '0151988_body.approveOrdNbr',
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
                                          code: 'regionId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.regionId',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.regionId',
                                          dataKey: '0151988_body.regionId',
                                        },
                                        {
                                          code: 'createStaff',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.createStaff',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.createStaff',
                                          dataKey: '0151988_body.createStaff',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'minCreateTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.minCreateTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.minCreateTime',
                                          dataKey: '0151988_body.minCreateTime',
                                        },
                                        {
                                          code: 'pageNum',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageNum',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageNum',
                                          dataKey: '0151988_body.pageNum',
                                        },
                                        {
                                          code: 'maxCreateTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.maxCreateTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.maxCreateTime',
                                          dataKey: '0151988_body.maxCreateTime',
                                        },
                                        {
                                          code: 'lanId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.lanId',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.lanId',
                                          dataKey: '0151988_body.lanId',
                                        },
                                        {
                                          code: 'catalogValue',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.catalogValue',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.catalogValue',
                                          dataKey: '0151988_body.catalogValue',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'catalogType',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.catalogType',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.catalogType',
                                          dataKey: '0151988_body.catalogType',
                                        },
                                        {
                                          code: 'pageSize',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageSize',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageSize',
                                          dataKey: '0151988_body.pageSize',
                                        },
                                        {
                                          code: 'extBusiObjNbr',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.extBusiObjNbr',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.extBusiObjNbr',
                                          dataKey: '0151988_body.extBusiObjNbr',
                                        },
                                        {
                                          code: 'title',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.title',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.title',
                                          dataKey: '0151988_body.title',
                                        },
                                        {
                                          code: 'busiObjStatusList',
                                          name: '新增节点',
                                          attrType: 'fieldArray',
                                          mustFlag: 'F',
                                          children: [
                                            {
                                              code: 'listItem',
                                              name: '列表元素',
                                              attrType: 'field',
                                              type: 'object',
                                              _id: 'body.busiObjStatusList.listItem',
                                              compType: 'Input',
                                              parents: [
                                                'body',
                                                'busiObjStatusList',
                                              ],
                                              id: 'body.busiObjStatusList.listItem',
                                              dataKey:
                                                '0151988_body.busiObjStatusList.listItem',
                                            },
                                          ],
                                          _id: 'body.busiObjStatusList',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.busiObjStatusList',
                                          dataKey:
                                            '0151988_body.busiObjStatusList',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'dcOrdQuery',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'object',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.dcOrdQuery',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.dcOrdQuery',
                                          dataKey: '0151988_body.dcOrdQuery',
                                          value: {
                                            type: ['customize'],
                                            code: '$data.selectedRow$',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '0151988_body',
                                    },
                                  ],
                                },
                                actionObjId: 'apiRequest',
                                actionObjName: 'system',
                                value: 'apiRequest',
                                elseIfs: [],
                                line_number: 14,
                              },
                              {
                                dataName: 'action',
                                dataId: 167540883039999100,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167540883039945340,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167540883039929500,
                                        children: [],
                                        todoOptions: ['loading'],
                                        options: {
                                          compId: 'Table_37209506',
                                          compLib: 'comm',
                                          pageJsonId: '541575',
                                          compName: 'Table',
                                          id: '061029',
                                          loading: false,
                                        },
                                        actionObjId: 'Table_37209506',
                                        actionObjName: 'Table',
                                        value: 'setLoading',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        shielding: true,
                                        line_number: 18,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                    shielding: true,
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167540883039932160,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167540883039959800,
                                        children: [],
                                        todoOptions: ['loading'],
                                        options: {
                                          compId: 'Table_37209506',
                                          compLib: 'comm',
                                          pageJsonId: '541575',
                                          compName: 'Table',
                                          id: '0572113',
                                          loading: false,
                                        },
                                        actionObjId: 'Table_37209506',
                                        actionObjName: 'Table',
                                        value: 'setLoading',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        shielding: true,
                                        line_number: 19,
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
                                  id: '990099',
                                  pageJsonId: '541575',
                                  dataSourceId: 166392708863272260,
                                  dataSourceName: 'qryDcApproveOrdPage',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '062815',
                                      code: 'header',
                                      name: '请求头参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'header',
                                    },
                                    {
                                      attrId: '322521',
                                      code: 'path',
                                      name: '请求路径参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'path',
                                    },
                                    {
                                      attrId: '5351276',
                                      code: 'query',
                                      name: 'URL 参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'query',
                                    },
                                    {
                                      attrId: '21748',
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
                                          attrId: '247866',
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
                                          attrId: '5476289',
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
                                          attrId: '400817',
                                          code: 'title',
                                          name: 'title',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.title',
                                          value: { type: [], code: 'title' },
                                        },
                                        {
                                          attrId: '2276657',
                                          code: 'minCreateTime',
                                          name: 'minCreateTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.minCreateTime',
                                        },
                                        {
                                          attrId: '162279',
                                          code: 'maxCreateTime',
                                          name: 'maxCreateTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.maxCreateTime',
                                        },
                                        {
                                          attrId: '678688',
                                          code: 'createStaff',
                                          name: 'createStaff',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          key: 'body.createStaff',
                                          value: {
                                            type: [],
                                            code: 'createStaff',
                                          },
                                        },
                                        {
                                          attrId: '2237775',
                                          code: 'approveGrade',
                                          name: 'approveGrade',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.approveGrade',
                                        },
                                        {
                                          attrId: '63922328',
                                          code: 'lanId',
                                          name: 'lanId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.lanId',
                                        },
                                        {
                                          attrId: '70873',
                                          code: 'regionId',
                                          name: 'regionId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.regionId',
                                        },
                                        {
                                          attrId: '31566',
                                          code: 'busiObjStatusList',
                                          name: 'busiObjStatusList',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'fieldArray',
                                          children: [
                                            {
                                              attrId: '706486',
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
                                          attrId: '302302',
                                          code: 'pageNum',
                                          name: 'pageNum',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          key: 'body.pageNum',
                                          value: {
                                            type: [
                                              'context',
                                              '$options_84995934$',
                                            ],
                                            code: 'pageNum',
                                          },
                                        },
                                        {
                                          attrId: '485843',
                                          code: 'pageSize',
                                          name: 'pageSize',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          key: 'body.pageSize',
                                          value: {
                                            type: [
                                              'context',
                                              '$options_84995934$',
                                            ],
                                            code: 'pageSize',
                                          },
                                        },
                                      ],
                                      key: 'body',
                                    },
                                  ],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '453954',
                                      code: 'resultCode',
                                      name: 'resultCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '631272',
                                      code: 'resultMsg',
                                      name: 'resultMsg',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '089256',
                                      code: 'resultMsgCode',
                                      name: 'resultMsgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '56101479',
                                      code: 'resultData',
                                      name: 'resultData',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '445002',
                                          code: 'total',
                                          name: 'total',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '1582793',
                                          code: 'pages',
                                          name: 'pages',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '762911',
                                          code: 'size',
                                          name: 'size',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '767145',
                                          code: 'current',
                                          name: 'current',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '2627061',
                                          code: 'orders',
                                          name: 'orders',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'fieldArray',
                                          children: [
                                            {
                                              attrId: '223743',
                                              code: 'listItem',
                                              name: '列表元素',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'object',
                                            },
                                          ],
                                        },
                                        {
                                          attrId: '14838',
                                          code: 'optimizeCountSql',
                                          name: 'optimizeCountSql',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '2163307',
                                          code: 'hitCount',
                                          name: 'hitCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '441011',
                                          code: 'countId',
                                          name: 'countId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '693232',
                                          code: 'maxLimit',
                                          name: 'maxLimit',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '291614',
                                          code: 'searchCount',
                                          name: 'searchCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '761065',
                                          code: 'records',
                                          name: 'records',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'objectArray',
                                          children: [
                                            {
                                              attrId: '101216',
                                              code: 'approveOrdNbr',
                                              name: 'approveOrdNbr',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '9478',
                                              code: 'title',
                                              name: 'title',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '019189',
                                              code: 'createStaffName',
                                              name: 'createStaffName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '126003',
                                              code: 'handleStaffName',
                                              name: 'handleStaffName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '471329',
                                              code: 'tacheName',
                                              name: 'tacheName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '479106',
                                              code: 'lastHandleTime',
                                              name: 'lastHandleTime',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '30508',
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
                                line_number: 17,
                              },
                            ],
                            condition: [],
                            desc: '简单查询',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'setLoading',
                                dataId: 167540883039934660,
                                options: {
                                  compId: 'Table_37209506',
                                  compLib: 'comm',
                                  pageJsonId: '541575',
                                  compName: 'Table',
                                  id: '233006',
                                  loading: true,
                                },
                                line_number: 13,
                              },
                              {
                                type: 'apiRequest',
                                dataId: 167541065958133120,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '0151988',
                                  pageJsonId: '541575',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'qryDcApproveOrdExport',
                                  _apiCode: 'qryDcApproveOrdExport',
                                  _source: 'rhin',
                                  _serviceId: '938694460448714752',
                                  _serviceTitle:
                                    '审批单导出-hdb: qryDcApproveOrdExport',
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
                                      dataKey: '0151988_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '0151988_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '0151988_query',
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
                                          _id: 'body.approveGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.approveGrade',
                                          dataKey: '0151988_body.approveGrade',
                                        },
                                        {
                                          code: 'approveOrdNbr',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.approveOrdNbr',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.approveOrdNbr',
                                          dataKey: '0151988_body.approveOrdNbr',
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
                                          code: 'regionId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.regionId',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.regionId',
                                          dataKey: '0151988_body.regionId',
                                        },
                                        {
                                          code: 'createStaff',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.createStaff',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.createStaff',
                                          dataKey: '0151988_body.createStaff',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'minCreateTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.minCreateTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.minCreateTime',
                                          dataKey: '0151988_body.minCreateTime',
                                        },
                                        {
                                          code: 'pageNum',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageNum',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageNum',
                                          dataKey: '0151988_body.pageNum',
                                        },
                                        {
                                          code: 'maxCreateTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.maxCreateTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.maxCreateTime',
                                          dataKey: '0151988_body.maxCreateTime',
                                        },
                                        {
                                          code: 'lanId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.lanId',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.lanId',
                                          dataKey: '0151988_body.lanId',
                                        },
                                        {
                                          code: 'catalogValue',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.catalogValue',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.catalogValue',
                                          dataKey: '0151988_body.catalogValue',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'catalogType',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.catalogType',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.catalogType',
                                          dataKey: '0151988_body.catalogType',
                                        },
                                        {
                                          code: 'pageSize',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageSize',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageSize',
                                          dataKey: '0151988_body.pageSize',
                                        },
                                        {
                                          code: 'extBusiObjNbr',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.extBusiObjNbr',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.extBusiObjNbr',
                                          dataKey: '0151988_body.extBusiObjNbr',
                                        },
                                        {
                                          code: 'title',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.title',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.title',
                                          dataKey: '0151988_body.title',
                                        },
                                        {
                                          code: 'busiObjStatusList',
                                          name: '新增节点',
                                          attrType: 'fieldArray',
                                          mustFlag: 'F',
                                          children: [
                                            {
                                              code: 'listItem',
                                              name: '列表元素',
                                              attrType: 'field',
                                              type: 'object',
                                              _id: 'body.busiObjStatusList.listItem',
                                              compType: 'Input',
                                              parents: [
                                                'body',
                                                'busiObjStatusList',
                                              ],
                                              id: 'body.busiObjStatusList.listItem',
                                              dataKey:
                                                '0151988_body.busiObjStatusList.listItem',
                                            },
                                          ],
                                          _id: 'body.busiObjStatusList',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.busiObjStatusList',
                                          dataKey:
                                            '0151988_body.busiObjStatusList',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'dcOrdQuery',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'object',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.dcOrdQuery',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.dcOrdQuery',
                                          dataKey: '0151988_body.dcOrdQuery',
                                          value: {
                                            type: ['customize'],
                                            code: '$data.selectedRow$',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '0151988_body',
                                    },
                                  ],
                                },
                                line_number: 14,
                                callback1: [
                                  {
                                    type: 'setLoading',
                                    dataId: 167574001229343800,
                                    options: {
                                      compId: 'Table_37209506',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'Table',
                                      id: '228986',
                                      loading: false,
                                    },
                                    line_number: 15,
                                  },
                                  {
                                    type: 'downloadByFileId',
                                    dataId: 167574002117461950,
                                    options: {
                                      compId: 'downloadByFileId',
                                      compName: 'system',
                                      id: '152713',
                                      pageJsonId: '541575',
                                      data: '$reply_0151988.resultData.fileId$',
                                    },
                                    line_number: 16,
                                  },
                                ],
                                callback2: [],
                              },
                              {
                                type: 'reloadDataSource',
                                dataId: 167540883039999100,
                                shielding: true,
                                options: {
                                  compId: 'reloadDataSource',
                                  compName: 'page',
                                  id: '990099',
                                  pageJsonId: '541575',
                                  dataSourceId: 166392708863272260,
                                  dataSourceName: 'qryDcApproveOrdPage',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '062815',
                                      code: 'header',
                                      name: '请求头参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'header',
                                    },
                                    {
                                      attrId: '322521',
                                      code: 'path',
                                      name: '请求路径参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'path',
                                    },
                                    {
                                      attrId: '5351276',
                                      code: 'query',
                                      name: 'URL 参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'query',
                                    },
                                    {
                                      attrId: '21748',
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
                                          attrId: '247866',
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
                                          attrId: '5476289',
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
                                          attrId: '400817',
                                          code: 'title',
                                          name: 'title',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.title',
                                          value: { type: [], code: 'title' },
                                        },
                                        {
                                          attrId: '2276657',
                                          code: 'minCreateTime',
                                          name: 'minCreateTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.minCreateTime',
                                        },
                                        {
                                          attrId: '162279',
                                          code: 'maxCreateTime',
                                          name: 'maxCreateTime',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.maxCreateTime',
                                        },
                                        {
                                          attrId: '678688',
                                          code: 'createStaff',
                                          name: 'createStaff',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          key: 'body.createStaff',
                                          value: {
                                            type: [],
                                            code: 'createStaff',
                                          },
                                        },
                                        {
                                          attrId: '2237775',
                                          code: 'approveGrade',
                                          name: 'approveGrade',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.approveGrade',
                                        },
                                        {
                                          attrId: '63922328',
                                          code: 'lanId',
                                          name: 'lanId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.lanId',
                                        },
                                        {
                                          attrId: '70873',
                                          code: 'regionId',
                                          name: 'regionId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.regionId',
                                        },
                                        {
                                          attrId: '31566',
                                          code: 'busiObjStatusList',
                                          name: 'busiObjStatusList',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'fieldArray',
                                          children: [
                                            {
                                              attrId: '706486',
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
                                          attrId: '302302',
                                          code: 'pageNum',
                                          name: 'pageNum',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          key: 'body.pageNum',
                                          value: {
                                            type: [
                                              'context',
                                              '$options_84995934$',
                                            ],
                                            code: 'pageNum',
                                          },
                                        },
                                        {
                                          attrId: '485843',
                                          code: 'pageSize',
                                          name: 'pageSize',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          key: 'body.pageSize',
                                          value: {
                                            type: [
                                              'context',
                                              '$options_84995934$',
                                            ],
                                            code: 'pageSize',
                                          },
                                        },
                                      ],
                                      key: 'body',
                                    },
                                  ],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '453954',
                                      code: 'resultCode',
                                      name: 'resultCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '631272',
                                      code: 'resultMsg',
                                      name: 'resultMsg',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '089256',
                                      code: 'resultMsgCode',
                                      name: 'resultMsgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '56101479',
                                      code: 'resultData',
                                      name: 'resultData',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '445002',
                                          code: 'total',
                                          name: 'total',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '1582793',
                                          code: 'pages',
                                          name: 'pages',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '762911',
                                          code: 'size',
                                          name: 'size',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '767145',
                                          code: 'current',
                                          name: 'current',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '2627061',
                                          code: 'orders',
                                          name: 'orders',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'fieldArray',
                                          children: [
                                            {
                                              attrId: '223743',
                                              code: 'listItem',
                                              name: '列表元素',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'object',
                                            },
                                          ],
                                        },
                                        {
                                          attrId: '14838',
                                          code: 'optimizeCountSql',
                                          name: 'optimizeCountSql',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '2163307',
                                          code: 'hitCount',
                                          name: 'hitCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '441011',
                                          code: 'countId',
                                          name: 'countId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '693232',
                                          code: 'maxLimit',
                                          name: 'maxLimit',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '291614',
                                          code: 'searchCount',
                                          name: 'searchCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '761065',
                                          code: 'records',
                                          name: 'records',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'objectArray',
                                          children: [
                                            {
                                              attrId: '101216',
                                              code: 'approveOrdNbr',
                                              name: 'approveOrdNbr',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '9478',
                                              code: 'title',
                                              name: 'title',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '019189',
                                              code: 'createStaffName',
                                              name: 'createStaffName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '126003',
                                              code: 'handleStaffName',
                                              name: 'handleStaffName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '471329',
                                              code: 'tacheName',
                                              name: 'tacheName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '479106',
                                              code: 'lastHandleTime',
                                              name: 'lastHandleTime',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '30508',
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
                                line_number: 17,
                                callback1: [
                                  {
                                    type: 'setLoading',
                                    dataId: 167540883039929500,
                                    shielding: true,
                                    options: {
                                      compId: 'Table_37209506',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'Table',
                                      id: '061029',
                                      loading: false,
                                    },
                                    line_number: 18,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'setLoading',
                                    dataId: 167540883039959800,
                                    shielding: true,
                                    options: {
                                      compId: 'Table_37209506',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'Table',
                                      id: '0572113',
                                      loading: false,
                                    },
                                    line_number: 19,
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
                            dataId: 167540883039951500,
                            options: {
                              compId: 'Form_071412',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Form',
                              id: '237829',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'getFormValue',
                                dataId: 167540883039964030,
                                options: {
                                  compId: 'BOFramer_6134255',
                                  compLib: '@/components',
                                  pageJsonId: '541575',
                                  compName: 'BOFramer',
                                  id: '040083',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'getValue',
                                    dataId: 167540883039959040,
                                    options: {
                                      compId: 'TreeSelect_07743_7628562',
                                      compLib: 'comm',
                                      pageJsonId: '541575',
                                      compName: 'TreeSelect',
                                      id: '0977334',
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 167540883039966750,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '234049',
                                          pageJsonId: '541575',
                                          actionTitle: '场景值处理',
                                          code: 'function main(data,state,success,fail){if(!value_896059||!value_896059.length){return success("")}return success(value_896059)};',
                                        },
                                        line_number: 5,
                                        callback1: [
                                          {
                                            type: 'setLoading',
                                            dataId: 167540883039945950,
                                            options: {
                                              compId: 'Table_37209506',
                                              compLib: 'comm',
                                              pageJsonId: '541575',
                                              compName: 'Table',
                                              id: '009939',
                                              loading: true,
                                            },
                                            line_number: 6,
                                          },
                                          {
                                            type: 'apiRequest',
                                            dataId: 167540901912858800,
                                            options: {
                                              compId: 'apiRequest',
                                              compName: 'system',
                                              id: '3768544',
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
                                                  code: 'header',
                                                  name: '请求头参数',
                                                  attrType: 'object',
                                                  _id: 'header',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'header',
                                                  dataKey: '3768544_header',
                                                },
                                                {
                                                  code: 'path',
                                                  name: '请求路径参数',
                                                  attrType: 'object',
                                                  _id: 'path',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'path',
                                                  dataKey: '3768544_path',
                                                },
                                                {
                                                  code: 'query',
                                                  name: 'URL 参数',
                                                  attrType: 'object',
                                                  _id: 'query',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'query',
                                                  dataKey: '3768544_query',
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
                                                      _id: 'body.approveGrade',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.approveGrade',
                                                      dataKey:
                                                        '3768544_body.approveGrade',
                                                    },
                                                    {
                                                      code: 'approveOrdNbr',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.approveOrdNbr',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.approveOrdNbr',
                                                      dataKey:
                                                        '3768544_body.approveOrdNbr',
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
                                                      code: 'regionId',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.regionId',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.regionId',
                                                      dataKey:
                                                        '3768544_body.regionId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$formValues$',
                                                        ],
                                                        code: 'areaId',
                                                      },
                                                    },
                                                    {
                                                      code: 'createStaff',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.createStaff',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.createStaff',
                                                      dataKey:
                                                        '3768544_body.createStaff',
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
                                                      code: 'minCreateTime',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.minCreateTime',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.minCreateTime',
                                                      dataKey:
                                                        '3768544_body.minCreateTime',
                                                      value: {
                                                        type: ['customize'],
                                                        code: '$Form_071412.createTime[0]$',
                                                      },
                                                    },
                                                    {
                                                      code: 'pageNum',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.pageNum',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.pageNum',
                                                      dataKey:
                                                        '3768544_body.pageNum',
                                                    },
                                                    {
                                                      code: 'maxCreateTime',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.maxCreateTime',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.maxCreateTime',
                                                      dataKey:
                                                        '3768544_body.maxCreateTime',
                                                      value: {
                                                        type: ['customize'],
                                                        code: '$Form_071412.createTime[1]$',
                                                      },
                                                    },
                                                    {
                                                      code: 'lanId',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.lanId',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.lanId',
                                                      dataKey:
                                                        '3768544_body.lanId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$formValues$',
                                                        ],
                                                        code: 'lanId',
                                                      },
                                                    },
                                                    {
                                                      code: 'catalogValue',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.catalogValue',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.catalogValue',
                                                      dataKey:
                                                        '3768544_body.catalogValue',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_433981',
                                                          'getFieldsValue',
                                                        ],
                                                        code: 'catalogValue',
                                                      },
                                                    },
                                                    {
                                                      code: 'catalogType',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.catalogType',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.catalogType',
                                                      dataKey:
                                                        '3768544_body.catalogType',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_071412',
                                                          'getFieldsValue',
                                                        ],
                                                        code: 'catalogType',
                                                      },
                                                    },
                                                    {
                                                      code: 'pageSize',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.pageSize',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.pageSize',
                                                      dataKey:
                                                        '3768544_body.pageSize',
                                                    },
                                                    {
                                                      code: 'extBusiObjNbr',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.extBusiObjNbr',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.extBusiObjNbr',
                                                      dataKey:
                                                        '3768544_body.extBusiObjNbr',
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
                                                      code: 'title',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.title',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.title',
                                                      dataKey:
                                                        '3768544_body.title',
                                                    },
                                                    {
                                                      code: 'busiObjStatusList',
                                                      name: '新增节点',
                                                      attrType: 'fieldArray',
                                                      mustFlag: 'F',
                                                      children: [
                                                        {
                                                          code: 'listItem',
                                                          name: '列表元素',
                                                          attrType: 'field',
                                                          type: 'object',
                                                          _id: 'body.busiObjStatusList.listItem',
                                                          compType: 'Input',
                                                          parents: [
                                                            'body',
                                                            'busiObjStatusList',
                                                          ],
                                                          id: 'body.busiObjStatusList.listItem',
                                                          dataKey:
                                                            '3768544_body.busiObjStatusList.listItem',
                                                        },
                                                      ],
                                                      _id: 'body.busiObjStatusList',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.busiObjStatusList',
                                                      dataKey:
                                                        '3768544_body.busiObjStatusList',
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
                                                      code: 'dcOrdQuery',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'object',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'body.dcOrdQuery',
                                                      compType: 'Input',
                                                      parents: ['body'],
                                                      id: 'body.dcOrdQuery',
                                                      dataKey:
                                                        '3768544_body.dcOrdQuery',
                                                      value: {
                                                        type: ['customize'],
                                                        code: '$data.selectedRow$',
                                                      },
                                                    },
                                                  ],
                                                  _id: 'body',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'body',
                                                  dataKey: '3768544_body',
                                                },
                                              ],
                                            },
                                            line_number: 7,
                                            callback1: [
                                              {
                                                type: 'setLoading',
                                                dataId: 167541064821496060,
                                                options: {
                                                  compId: 'Table_37209506',
                                                  compLib: 'comm',
                                                  pageJsonId: '541575',
                                                  compName: 'Table',
                                                  id: '527236',
                                                  loading: false,
                                                },
                                                line_number: 8,
                                              },
                                              {
                                                type: 'downloadByFileId',
                                                dataId: 167573986179205250,
                                                options: {
                                                  compId: 'downloadByFileId',
                                                  compName: 'system',
                                                  id: '931101',
                                                  pageJsonId: '541575',
                                                  data: '$reply_3768544.resultData.fileId$',
                                                },
                                                line_number: 9,
                                              },
                                            ],
                                            callback2: [],
                                          },
                                          {
                                            type: 'reloadDataSource',
                                            dataId: 167540883039920200,
                                            shielding: true,
                                            options: {
                                              compId: 'reloadDataSource',
                                              compName: 'page',
                                              id: '8072162',
                                              pageJsonId: '541575',
                                              dataSourceId: 166392708863272260,
                                              dataSourceName:
                                                'qryDcApproveOrdPage',
                                              dataSourceRelType: 'service',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '062815',
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
                                                  attrId: '322521',
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
                                                  attrId: '5351276',
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
                                                  attrId: '21748',
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
                                                      attrId: '2276657',
                                                      code: 'minCreateTime',
                                                      name: 'minCreateTime',
                                                      sort: { isSort: true },
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
                                                        code: 'createTime[0]',
                                                      },
                                                    },
                                                    {
                                                      attrId: '400817',
                                                      code: 'title',
                                                      name: 'title',
                                                      sort: { isSort: true },
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
                                                      attrId: '5476289',
                                                      code: 'extBusiObjNbr',
                                                      name: 'extBusiObjNbr',
                                                      sort: { isSort: true },
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
                                                      attrId: '247866',
                                                      code: 'approveOrdNbr',
                                                      name: 'approveOrdNbr',
                                                      sort: { isSort: true },
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
                                                      attrId: '2237775',
                                                      code: 'approveGrade',
                                                      name: 'approveGrade',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '31566',
                                                      code: 'busiObjStatusList',
                                                      name: 'busiObjStatusList',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'fieldArray',
                                                      children: [
                                                        {
                                                          attrId: '706486',
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
                                                      attrId: '678688',
                                                      code: 'createStaff',
                                                      name: 'createStaff',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'long',
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
                                                      attrId: '70873',
                                                      code: 'regionId',
                                                      name: 'regionId',
                                                      sort: { isSort: true },
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
                                                      attrId: '63922328',
                                                      code: 'lanId',
                                                      name: 'lanId',
                                                      sort: { isSort: true },
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
                                                      attrId: '162279',
                                                      code: 'maxCreateTime',
                                                      name: 'maxCreateTime',
                                                      sort: { isSort: true },
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
                                                        code: 'createTime[1]',
                                                      },
                                                    },
                                                    {
                                                      attrId: '485843',
                                                      code: 'pageSize',
                                                      name: 'pageSize',
                                                      sort: { isSort: true },
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
                                                      attrId: '302302',
                                                      code: 'pageNum',
                                                      name: 'pageNum',
                                                      sort: { isSort: true },
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
                                                      attrId: '3355877',
                                                      code: 'catalogValue',
                                                      name: '场景值',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$data_234049$',
                                                        ],
                                                        code: '',
                                                      },
                                                    },
                                                    {
                                                      attrId: '910926',
                                                      code: 'catalogType',
                                                      name: '场景值类型',
                                                      sort: { isSort: true },
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
                                                  attrId: '453954',
                                                  code: 'resultCode',
                                                  name: 'resultCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '631272',
                                                  code: 'resultMsg',
                                                  name: 'resultMsg',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '089256',
                                                  code: 'resultMsgCode',
                                                  name: 'resultMsgCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '56101479',
                                                  code: 'resultData',
                                                  name: 'resultData',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'object',
                                                  children: [
                                                    {
                                                      attrId: '445002',
                                                      code: 'total',
                                                      name: 'total',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '1582793',
                                                      code: 'pages',
                                                      name: 'pages',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '762911',
                                                      code: 'size',
                                                      name: 'size',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '767145',
                                                      code: 'current',
                                                      name: 'current',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '441011',
                                                      code: 'countId',
                                                      name: 'countId',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '693232',
                                                      code: 'maxLimit',
                                                      name: 'maxLimit',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '291614',
                                                      code: 'searchCount',
                                                      name: 'searchCount',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'boolean',
                                                    },
                                                    {
                                                      attrId: '2627061',
                                                      code: 'orders',
                                                      name: 'orders',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'fieldArray',
                                                      children: [
                                                        {
                                                          attrId: '223743',
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
                                                      attrId: '14838',
                                                      code: 'optimizeCountSql',
                                                      name: 'optimizeCountSql',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'boolean',
                                                    },
                                                    {
                                                      attrId: '2163307',
                                                      code: 'hitCount',
                                                      name: 'hitCount',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'boolean',
                                                    },
                                                    {
                                                      attrId: '761065',
                                                      code: 'records',
                                                      name: 'records',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'objectArray',
                                                      children: [
                                                        {
                                                          attrId: '479106',
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
                                                          attrId: '30508',
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
                                                          attrId: '101216',
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
                                                          attrId: '9478',
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
                                                          attrId: '019189',
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
                                                          attrId: '126003',
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
                                                          attrId: '471329',
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
                                                dataId: 167540883039960800,
                                                shielding: true,
                                                options: {
                                                  compId: 'Table_37209506',
                                                  compLib: 'comm',
                                                  pageJsonId: '541575',
                                                  compName: 'Table',
                                                  id: '998845',
                                                  loading: false,
                                                },
                                                line_number: 11,
                                              },
                                            ],
                                            callback2: [
                                              {
                                                type: 'setLoading',
                                                dataId: 167540883039962400,
                                                shielding: true,
                                                options: {
                                                  compId: 'Table_37209506',
                                                  compLib: 'comm',
                                                  pageJsonId: '541575',
                                                  compName: 'Table',
                                                  id: '491475',
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
                              },
                            ],
                          },
                        ],
                      },
                    ];
                    eventDataifelse538.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataifelse538, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => (refs['Button_7469188'] = r)}
                  {...injectData}
                />
              </View>
            </Form>
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
                title: '审批单号',
                key: 'approveOrdNbr',
                dataIndex: 'approveOrdNbr',
                className: '',
                id: '088558',
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
            rowKey={'approveOrdNbr'}
            total={data?.qryDcApproveOrdPage?.resultData?.total}
            dataSource={data?.qryDcApproveOrdPage?.resultData?.records}
            fieldName={'data.qryDcApproveOrdPage.resultData.total'}
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
            extend={[]}
            actionWidth={100}
            dataSourceFromDataSourceConfig={
              'data.qryDcApproveOrdPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_37209506',
              uid: 'Table_37209506',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '16px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatacallSelfFunc762: any = [
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
              eventDatacallSelfFunc762.params =
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
                eventDatacallSelfFunc762,
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
              const eventDatagetTableSelectedKey85: any = [
                {
                  type: 'getTableSelectedKey',
                  dataId: 166204272281569760,
                  options: {
                    compId: 'Table_37209506',
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
                      dataId: 166204272796731650,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '36631',
                        pageJsonId: '541575',
                        type: 'push',
                        pathname: '/auditDealWith-PC',
                        selectedType: 'page',
                        paramsObj: {
                          instNbr: '$rowId$',
                          scene: 'V',
                          workId: '$row.workId$',
                        },
                        paramsObjKeyValueMap: {
                          instNbr: '$rowId$',
                          scene: 'V',
                          workId: '$row.workId$',
                        },
                      },
                      line_number: 3,
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
                      line_number: 4,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelectedKey85.params =
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
                eventDatagetTableSelectedKey85,
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
              const eventDatagetTableSelected78: any = [
                {
                  type: 'getTableSelected',
                  dataId: 166208178673174560,
                  shielding: true,
                  options: {
                    compId: 'Table_37209506',
                    compLib: 'comm',
                    pageJsonId: '541575',
                    compName: 'Table',
                    id: '0979458',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 166208179653944700,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '147433',
                        pageJsonId: '541575',
                        value: ['$row$'],
                      },
                      line_number: 2,
                    },
                    {
                      type: 'history',
                      dataId: 166208347294309630,
                      shielding: true,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '134111',
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
                      dataId: 166219516723926340,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166219541534605980,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166219541964806820,
                              children: [],
                              todoOptions: [
                                'historyType',
                                'pathname',
                                'searchParams',
                              ],
                              options: {
                                compId: 'history',
                                compName: 'system',
                                id: '0373403',
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
                              dataId: 166219541964806820,
                              shielding: true,
                              options: {
                                compId: 'history',
                                compName: 'system',
                                id: '0373403',
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
                          dataId: 166219541245778530,
                          shielding: true,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '4057296',
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
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected78.params =
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
                eventDatagetTableSelected78,
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
              const eventDatagetTableSelected79: any = [
                {
                  type: 'getTableSelected',
                  dataId: 166255419371255300,
                  options: {
                    compId: 'Table_37209506',
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
                      type: 'console',
                      dataId: 166368062951142270,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '878225',
                        pageJsonId: '541575',
                        value: [
                          '========22222======================================',
                          '$row$',
                        ],
                      },
                      line_number: 7,
                    },
                    {
                      type: 'history',
                      dataId: 166271235189262240,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '9895437',
                        pageJsonId: '541575',
                        type: 'push',
                        pathname: '/auditDealWith',
                        selectedType: 'page',
                        paramsObj: {
                          scene: 'U',
                          instNbr: '$rowId$',
                          workId: '$row.workId$',
                          tacheName: '$row.tacheName$',
                          workItemId: '$row.workItemId$',
                          busiObjNbr: '$rowId$',
                        },
                        paramsObjKeyValueMap: {
                          scene: 'U',
                          instNbr: '$rowId$',
                          workId: '$row.workId$',
                          tacheName: '$row.tacheName$',
                          workItemId: '$row.workItemId$',
                          busiObjNbr: '$rowId$',
                        },
                        pageId: '884773713167953920',
                        modalPath: '/auditDealWith',
                      },
                      line_number: 8,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected79.params =
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
                eventDatagetTableSelected79,
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
            ref={(r: any) => (refs['Table_37209506'] = r)}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ApproveOrderQuery1$$Page, {
  pageId: '890538419908644864',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
