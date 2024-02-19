// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Form,
  Input,
  Table,
  VerticalView,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const FlowConfigManage$$Page: React.FC<PageProps> = ({
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
  const reloadFlowTableList = (options_6814412: any) => {
    const eventDatareloadDataSource34: any = [
      {
        type: 'reloadDataSource',
        dataId: 166618904560042700,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '1085663',
          pageJsonId: '8383459',
          dataSourceId: 166617219785438750,
          dataSourceName: 'qryPageFlowDefineByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '31902',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '403226',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '7385195',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '3276497',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '981466',
                  code: 'flowCode',
                  name: 'flowCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.flowCode',
                  value: {
                    type: ['form', 'Form_7756987', 'getFieldsValue'],
                    code: 'flowCode',
                  },
                },
                {
                  attrId: '181131',
                  code: 'flowName',
                  name: 'flowName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.flowName',
                  value: {
                    type: ['form', 'Form_7756987', 'getFieldsValue'],
                    code: 'flowName',
                  },
                },
                {
                  attrId: '271401',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '153377',
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
              attrId: '048877',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '9593152',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '22275208',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '002455',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '8892446',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '625385',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '793842',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '448152',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '012674',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '515161',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '524329',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '718833',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '111714',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3772746',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '02947034',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '079486',
                      code: 'extFlowName',
                      name: 'extFlowName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4086079',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '42041',
                      code: 'extFlowCode',
                      name: 'extFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9698564',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6553693',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '963177',
                      code: 'flowName',
                      name: 'flowName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '091441',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0594314',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '195958',
                      code: 'flowCode',
                      name: 'flowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '969439',
                      code: 'flowTypeList',
                      name: 'flowTypeList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '534845',
                      code: 'flowDefineId',
                      name: 'flowDefineId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '596365',
                      code: 'flowType',
                      name: 'flowType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5408434',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '868043',
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
    eventDatareloadDataSource34.params =
      [
        {
          title: '事件入参',
          name: 'options_6814412',
          value: '$options_6814412$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource34,
      { options_6814412 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatareloadDataSource35: any = [
      {
        type: 'reloadDataSource',
        dataId: 166619022989559170,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '88202',
          pageJsonId: '8383459',
          dataSourceId: 166617228089581060,
          dataSourceName: 'qryPageTacheCfgByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '864884',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '116333',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '484362',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '310699',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '500627',
                  code: 'tacheCode',
                  name: 'tacheCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '543773',
                  code: 'tacheName',
                  name: 'tacheName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '047258',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '0312757',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '118823',
                  code: 'flowDefineId',
                  name: 'flowDefineId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '808231',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '725524',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '016006',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '891306',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '7451687',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '564971',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '598687',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '398952',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '495835',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '0158134',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '401566',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '240621',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '916387',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '07513',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '028825',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '8732666',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '111892',
                      code: 'handleStaff',
                      name: 'handleStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2538637',
                      code: 'isNormalCountersign',
                      name: 'isNormalCountersign',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '865795',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '532487317',
                      code: 'flowTypeList',
                      name: 'flowTypeList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '4644333',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                        },
                      ],
                    },
                    {
                      attrId: '560966',
                      code: 'extFlowName',
                      name: 'extFlowName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3158663',
                      code: 'isAreaCountersign',
                      name: 'isAreaCountersign',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9973353',
                      code: 'extFlowCode',
                      name: 'extFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '687103',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '951155',
                      code: 'handleRole',
                      name: 'handleRole',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '782595',
                      code: 'handleRegionFilterType',
                      name: 'handleRegionFilterType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '626688',
                      code: 'cfgId',
                      name: 'cfgId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '797216',
                      code: 'orgTypeList',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0982636',
                      code: 'handlePostLevel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8891493',
                      code: 'handleOrgLevel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '53456',
                      code: 'handlePosition',
                      name: 'handlePosition',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '292845',
                      code: 'tacheName',
                      name: 'tacheName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '138762',
                      code: 'tacheCode',
                      name: 'tacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '152597',
                      code: 'approveGrade',
                      name: 'approveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '429075',
                      code: 'extTacheCode',
                      name: 'extTacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7409216',
                      code: 'tacheSort',
                      name: 'tacheSort',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '316903',
                      code: 'approveGradeDesc',
                      name: 'approveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '164184',
                      code: 'flowName',
                      name: 'flowName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '30157947',
                      code: 'extTacheName',
                      name: 'extTacheName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '815714',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0714404',
                      code: 'flowType',
                      name: 'flowType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '323424',
                      code: 'flowCode',
                      name: 'flowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '431824',
                      code: 'readHandleType',
                      name: 'readHandleType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '384897',
                      code: 'isLeaderCountersign',
                      name: 'isLeaderCountersign',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8834133',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '052586',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3552875',
                      code: 'createStaffName',
                      name: 'createStaffName',
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
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource35.params =
      [
        {
          title: '事件入参',
          name: 'options_6814412',
          value: '$options_6814412$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource35,
      { options_6814412 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatasetDataSource13: any = [
      {
        type: 'setDataSource',
        dataId: 166619035015402700,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '472957',
          pageJsonId: '8383459',
          dataSourceId: 166617332539981500,
          dataSourceName: 'local_vars',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '320674',
              code: 'flowDefineId',
              name: '流程ID',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['EMPTY_DATA', 'string'],
                hideAttr: true,
                code: '$EMPTY_DATA.string$',
              },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource13.params =
      [
        {
          title: '事件入参',
          name: 'options_6814412',
          value: '$options_6814412$',
        },
      ] || [];
    CMDGenerator(
      eventDatasetDataSource13,
      { options_6814412 },
      'setDataSource',
      {
        id: 'setDataSource',
        name: 'setDataSource',
        type: 'setDataSource',
        platform: 'undefined',
      },
    );
  };
  const reloadTacheTableList = (options_1822893: any) => {
    const eventDatareloadDataSource36: any = [
      {
        type: 'reloadDataSource',
        dataId: 166619369104499900,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '3554507',
          pageJsonId: '8383459',
          dataSourceId: 166617228089581060,
          dataSourceName: 'qryPageTacheCfgByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '864884',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '116333',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '484362',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '310699',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '500627',
                  code: 'tacheCode',
                  name: 'tacheCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_57797197', 'getFieldsValue'],
                    code: 'tacheCode',
                  },
                },
                {
                  attrId: '543773',
                  code: 'tacheName',
                  name: 'tacheName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_57797197', 'getFieldsValue'],
                    code: 'tacheName',
                  },
                },
                {
                  attrId: '047258',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '0312757',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '118823',
                  code: 'flowDefineId',
                  name: 'flowDefineId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'flowDefineId',
                  },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '808231',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '725524',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '016006',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '891306',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '7451687',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '564971',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '598687',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '398952',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '495835',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '0158134',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '401566',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '240621',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '916387',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '07513',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '028825',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '8732666',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '111892',
                      code: 'handleStaff',
                      name: 'handleStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2538637',
                      code: 'isNormalCountersign',
                      name: 'isNormalCountersign',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '865795',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '532487317',
                      code: 'flowTypeList',
                      name: 'flowTypeList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '4644333',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                        },
                      ],
                    },
                    {
                      attrId: '560966',
                      code: 'extFlowName',
                      name: 'extFlowName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3158663',
                      code: 'isAreaCountersign',
                      name: 'isAreaCountersign',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9973353',
                      code: 'extFlowCode',
                      name: 'extFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '687103',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '951155',
                      code: 'handleRole',
                      name: 'handleRole',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '782595',
                      code: 'handleRegionFilterType',
                      name: 'handleRegionFilterType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '626688',
                      code: 'cfgId',
                      name: 'cfgId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '797216',
                      code: 'orgTypeList',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0982636',
                      code: 'handlePostLevel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8891493',
                      code: 'handleOrgLevel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '53456',
                      code: 'handlePosition',
                      name: 'handlePosition',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '292845',
                      code: 'tacheName',
                      name: 'tacheName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '138762',
                      code: 'tacheCode',
                      name: 'tacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '152597',
                      code: 'approveGrade',
                      name: 'approveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '429075',
                      code: 'extTacheCode',
                      name: 'extTacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7409216',
                      code: 'tacheSort',
                      name: 'tacheSort',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '316903',
                      code: 'approveGradeDesc',
                      name: 'approveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '164184',
                      code: 'flowName',
                      name: 'flowName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '30157947',
                      code: 'extTacheName',
                      name: 'extTacheName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '815714',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0714404',
                      code: 'flowType',
                      name: 'flowType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '323424',
                      code: 'flowCode',
                      name: 'flowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '431824',
                      code: 'readHandleType',
                      name: 'readHandleType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '384897',
                      code: 'isLeaderCountersign',
                      name: 'isLeaderCountersign',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8834133',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '052586',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3552875',
                      code: 'createStaffName',
                      name: 'createStaffName',
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
        callback1: [
          {
            type: 'setLoading',
            dataId: 168974722248819460,
            options: {
              compId: 'Table_279004',
              compLib: 'comm',
              pageJsonId: '8383459',
              compName: 'Table',
              id: '4947166',
              loading: true,
            },
            line_number: 2,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 168974722438966100,
            options: {
              compId: 'Table_279004',
              compLib: 'comm',
              pageJsonId: '8383459',
              compName: 'Table',
              id: '927325',
              loading: true,
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDatareloadDataSource36.params =
      [
        {
          title: '事件入参',
          name: 'options_1822893',
          value: '$options_1822893$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource36,
      { options_1822893 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatasetLoading26: any = [
      {
        type: 'setLoading',
        dataId: 168974721028350980,
        options: {
          compId: 'Table_279004',
          compLib: 'comm',
          pageJsonId: '8383459',
          compName: 'Table',
          id: '327946',
          loading: false,
        },
        line_number: 4,
      },
    ];
    eventDatasetLoading26.params =
      [
        {
          title: '事件入参',
          name: 'options_1822893',
          value: '$options_1822893$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading26, { options_1822893 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    reloadFlowTableList,
    reloadTacheTableList,
  }));

  useEffect(() => {
    const eventDataapiRequest466: any = [
      {
        type: 'apiRequest',
        dataId: 166937432064375600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '908828',
          pageJsonId: '8383459',
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
              dataKey: '908828_header',
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
                  dataKey: '908828_path.attrCode',
                  value: {
                    type: ['customize'],
                    code: 'TACHE_HANDLE_FILTER_TYPE',
                  },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '908828_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '908828_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '908828_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166937437323009380,
            options: {
              compId: 'Table_279004',
              compLib: 'comm',
              pageJsonId: '8383459',
              compName: 'Table',
              id: '368791',
              colName: 'handleFilterType',
              data: '$reply_908828?.resultData$',
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest466.params = [] || [];
    CMDGenerator(eventDataapiRequest466, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc39: any = [
      {
        type: 'callSelfFunc',
        dataId: 166618912384026100,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '1286485',
          pageJsonId: '8383459',
          customFuncName: 'reloadFlowTableList',
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc39.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc39, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_8383459__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_8383459_1',
          uid: 'View_8383459_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '20px 20px 20px 20px',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_8383459_1'] = r)}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_379285',
            uid: 'VerticalView_379285',
            type: 'VerticalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => (refs['VerticalView_379285'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_9595362',
              uid: 'View_9595362',
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
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_9595362'] = r)}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'流程列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '177389',
                  title: '新增流程',
                  iconPos: 'left',
                  btnType: 'primary',
                },
                {
                  id: '528085',
                  title: '刷新缓存',
                  iconPos: 'left',
                  btnType: 'primary',
                },
              ]}
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
                id: 'Card_523603',
                uid: 'Card_523603',
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
              onClickBtn1={(e: any) => {
                const eventDatashowCustomModal226: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166617838664048130,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '522239',
                      pageJsonId: '8383459',
                      modalname: '/liuchengxiangqing6433',
                      pageId: '899974150071754752',
                      paramsObj: { sceneCode: 'A' },
                      paramsObjKeyValueMap: { sceneCode: 'A' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166618914922323740,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '335205',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadFlowTableList',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal226.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal226,
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
              onClickBtn2={(e: any) => {
                const eventDatashowMessage4: any = [
                  {
                    type: 'showMessage',
                    dataId: 166619565126725820,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '950451',
                      pageJsonId: '8383459',
                      type: 'info',
                      value: '暂未开放！',
                    },
                    line_number: 1,
                  },
                ];
                eventDatashowMessage4.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatashowMessage4, { e }, 'showMessage', {
                  id: 'showMessage',
                  name: 'showMessage',
                  type: 'showMessage',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Card_523603'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_502387',
                  uid: 'View_502387',
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
                  margin: '0px 0px 20px 0px',
                }}
                ref={(r: any) => (refs['View_502387'] = r)}
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
                  header={'标题'}
                  colSpace={0}
                  rowSpace={16}
                  formCode={'Form_7756987'}
                  $$componentItem={{
                    id: 'Form_7756987',
                    uid: 'Form_7756987',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_7756987'] = r)}
                  {...injectData}
                >
                  <Input
                    name={'流程名称'}
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
                    fieldName={'flowName'}
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
                      id: 'Input_650422',
                      uid: 'Input_650422',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc596: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166671258219248900,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '8695752',
                            pageJsonId: '8383459',
                            customFuncName: 'reloadFlowTableList',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc596.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc596,
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
                    ref={(r: any) => (refs['Input_650422'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'流程编码'}
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
                    fieldName={'flowCode'}
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
                      id: 'Input_984985',
                      uid: 'Input_984985',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc597: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166671259378888060,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '80086',
                            pageJsonId: '8383459',
                            customFuncName: 'reloadFlowTableList',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc597.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc597,
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
                    ref={(r: any) => (refs['Input_984985'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_756929',
                      uid: 'View_756929',
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
                    ref={(r: any) => (refs['View_756929'] = r)}
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
                        id: 'Button_508625',
                        uid: 'Button_508625',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 0px 0px 20px',
                      }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc598: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 166618923141210180,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '942907',
                              pageJsonId: '8383459',
                              customFuncName: 'reloadFlowTableList',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc598.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc598,
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
                      ref={(r: any) => (refs['Button_508625'] = r)}
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
                        id: 'Button_228714',
                        uid: 'Button_228714',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 0px 0px 20px',
                      }}
                      onClick={(e: any) => {
                        const forms139 = getFormByCompId('Form_7756987', refs);
                        // 支持循环容器中的表单重置
                        (Array.isArray(forms139)
                          ? forms139
                          : [forms139]
                        ).forEach((form) => form?.resetFields());
                      }}
                      ref={(r: any) => (refs['Button_228714'] = r)}
                      {...injectData}
                    />
                  </View>
                </Form>
              </View>
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_41543',
                  uid: 'View_41543',
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
                ref={(r: any) => (refs['View_41543'] = r)}
                {...injectData}
              >
                <Table
                  name={'流程表格'}
                  isFlexColumn={false}
                  pageSize={data?.qryPageFlowDefineByReq?.resultData?.size}
                  current={data?.qryPageFlowDefineByReq?.resultData?.current}
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
                      title: '流程标识',
                      key: 'flowDefineId',
                      dataIndex: 'flowDefineId',
                      id: '3435443',
                      className: '',
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
                      title: '流程名称',
                      key: 'flowName',
                      dataIndex: 'flowName',
                      className: 'divider',
                      id: '165964',
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
                      title: '流程编码',
                      key: 'flowCode',
                      dataIndex: 'flowCode',
                      className: 'divider',
                      id: '381688',
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
                      title: '外部流程名称',
                      key: 'extFlowName',
                      dataIndex: 'extFlowName',
                      className: 'divider',
                      id: '865856',
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
                      title: '外部流程编码',
                      key: 'extFlowCode',
                      dataIndex: 'extFlowCode',
                      className: 'divider',
                      id: '451361',
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
                  selectType={'radio'}
                  bordered={'segmentation'}
                  size={'middle'}
                  fixedAction={false}
                  rowSelection={undefined}
                  showHead={false}
                  showTotal={true}
                  showSizeChanger={false}
                  showQuickJumper={true}
                  pageSizeOptions={'[5,10,20]'}
                  rowKey={'flowDefineId'}
                  rowActions={[
                    {
                      title: '详情',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'file-search' },
                      type: 'detail',
                      id: '816222',
                      checked: true,
                    },
                    {
                      title: '编辑',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'edit' },
                      type: 'edit',
                      id: '0095481',
                      checked: true,
                    },
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'delete' },
                      type: 'delete',
                      id: '701826',
                      checked: true,
                    },
                  ]}
                  extend={[]}
                  dataSource={data?.qryPageFlowDefineByReq?.resultData?.records}
                  fieldName={'data.qryPageFlowDefineByReq.resultData.total'}
                  total={data?.qryPageFlowDefineByReq?.resultData?.total}
                  dataSourceFromDataSourceConfig={
                    'data.qryPageFlowDefineByReq.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_197744',
                    uid: 'Table_197744',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onPageChange={(page: any, pageSize: any) => {
                    const eventDatareloadDataSource101: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 166617244113192350,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '805404',
                          pageJsonId: '8383459',
                          dataSourceId: 166617219785438750,
                          dataSourceName: 'qryPageFlowDefineByReq',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '31902',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'header',
                            },
                            {
                              attrId: '403226',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '7385195',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
                            },
                            {
                              attrId: '3276497',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '981466',
                                  code: 'flowCode',
                                  name: 'flowCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.flowCode',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_7756987',
                                      'getFieldsValue',
                                    ],
                                    code: 'flowCode',
                                  },
                                },
                                {
                                  attrId: '181131',
                                  code: 'flowName',
                                  name: 'flowName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.flowName',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_7756987',
                                      'getFieldsValue',
                                    ],
                                    code: 'flowName',
                                  },
                                },
                                {
                                  attrId: '271401',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  key: 'body.pageNum',
                                  value: {
                                    type: ['context', '$page$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '153377',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  key: 'body.pageSize',
                                  value: {
                                    type: ['context', '$pageSize$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '1449396',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '289333',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '886726',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '088734',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '4458373',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '446917',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '29205',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '488321',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '8592938',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '8326766',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '872789',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '372279',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '6017205',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '512783',
                                  code: 'isSearchCount',
                                  name: 'isSearchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '6042174',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '491512',
                                      code: 'extFlowName',
                                      name: 'extFlowName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '7342073',
                                      code: 'updateDate',
                                      name: 'updateDate',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '7030663',
                                      code: 'extFlowCode',
                                      name: 'extFlowCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '638123',
                                      code: 'statusCd',
                                      name: 'statusCd',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '637599',
                                      code: 'remark',
                                      name: 'remark',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '062167',
                                      code: 'flowName',
                                      name: 'flowName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '567552',
                                      code: 'createStaff',
                                      name: 'createStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '900663',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '421641',
                                      code: 'flowCode',
                                      name: 'flowCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '796473',
                                      code: 'flowTypeList',
                                      name: 'flowTypeList',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '451559',
                                      code: 'flowDefineId',
                                      name: 'flowDefineId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '910333',
                                      code: 'flowType',
                                      name: 'flowType',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '02914',
                                      code: 'createDate',
                                      name: 'createDate',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '7402396',
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
                    eventDatareloadDataSource101.params =
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
                      eventDatareloadDataSource101,
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
                    const eventDatashowCustomModal227: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 166617701008963740,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '390808',
                          pageJsonId: '8383459',
                          modalname: '/liuchengxiangqing6433',
                          pageId: '899974150071754752',
                          paramsObj: {
                            flowObi: '$row$',
                            bizId: '$rowId$',
                            sceneCode: 'V',
                          },
                          paramsObjKeyValueMap: {
                            flowObi: '$row$',
                            bizId: '$rowId$',
                            sceneCode: 'V',
                          },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal227.params =
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
                      eventDatashowCustomModal227,
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
                  onRowEdit={(rowId: any, row: any, index: any) => {
                    const eventDatashowCustomModal228: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 166617841579628000,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '702471',
                          pageJsonId: '8383459',
                          modalname: '/liuchengxiangqing6433',
                          pageId: '899974150071754752',
                          paramsObj: {
                            sceneCode: 'M',
                            bizId: '$rowId$',
                            flowObi: '$row$',
                          },
                          paramsObjKeyValueMap: {
                            sceneCode: 'M',
                            bizId: '$rowId$',
                            flowObi: '$row$',
                          },
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166618916376984960,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '223587',
                              pageJsonId: '8383459',
                              customFuncName: 'reloadFlowTableList',
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal228.params =
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
                      eventDatashowCustomModal228,
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
                  onRowDelete={(rowId: any, row: any, index: any) => {
                    const eventDataapiRequest782: any = [
                      {
                        type: 'apiRequest',
                        dataId: 166618938550871300,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '799171',
                          pageJsonId: '8383459',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'delDcFlowDefineById',
                          _apiCode: 'delDcFlowDefineById',
                          _source: 'rhin',
                          _serviceId: '899953418809876480',
                          _serviceTitle: '流程删除-tsm: delDcFlowDefineById',
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
                              dataKey: '799171_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'flowDefineId',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'T',
                                  defaultValue: '',
                                  _id: 'path.flowDefineId',
                                  compType: 'Input',
                                  parents: ['path'],
                                  id: 'path.flowDefineId',
                                  dataKey: '799171_path.flowDefineId',
                                  value: {
                                    type: ['context', '$rowId$'],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '799171_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '799171_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '799171_body',
                            },
                          ],
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '026819',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_799171?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166618953419442560,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166618955229836130,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166618958293311140,
                                    children: [],
                                    todoOptions: ['msgType', 'value'],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '567018',
                                      pageJsonId: '8383459',
                                      type: 'error',
                                      value: '流程删除失败！',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    elseIfs: [],
                                    line_number: 5,
                                  },
                                ],
                                condition: [],
                                desc: '失败',
                                elseIfs: [],
                                callback: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166618958293311140,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '567018',
                                      pageJsonId: '8383459',
                                      type: 'error',
                                      value: '流程删除失败！',
                                    },
                                    line_number: 5,
                                  },
                                ],
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166618956677960770,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '748376',
                                  pageJsonId: '8383459',
                                  type: 'success',
                                  value: '流程删除成功！',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 166618959377434240,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '3070098',
                                  pageJsonId: '8383459',
                                  customFuncName: 'reloadFlowTableList',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataapiRequest782.params =
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
                      eventDataapiRequest782,
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
                  onRowClick={(rowId: any, row: any, index: any) => {
                    const eventDatasetDataSource201: any = [
                      {
                        type: 'setDataSource',
                        dataId: 167894553256300350,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '2122246',
                          pageJsonId: '8383459',
                          dataSourceId: 166617332539981500,
                          dataSourceName: 'local_vars',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '320674',
                              code: 'flowDefineId',
                              name: '流程ID',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: { type: ['context', '$rowId$'], code: '' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource201.params =
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
                      eventDatasetDataSource201,
                      { rowId, row, index },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                    const eventDatareloadDataSource102: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 167894554388325200,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '2668858',
                          pageJsonId: '8383459',
                          dataSourceId: 166617228089581060,
                          dataSourceName: 'qryPageTacheCfgByReq',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '864884',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                            },
                            {
                              attrId: '116333',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                            },
                            {
                              attrId: '484362',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                            },
                            {
                              attrId: '310699',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '500627',
                                  code: 'tacheCode',
                                  name: 'tacheCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '543773',
                                  code: 'tacheName',
                                  name: 'tacheName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '047258',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '1' },
                                },
                                {
                                  attrId: '0312757',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '5' },
                                },
                                {
                                  attrId: '118823',
                                  code: 'flowDefineId',
                                  name: 'flowDefineId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', '$rowId$'],
                                    code: '',
                                  },
                                },
                              ],
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '808231',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '725524',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '016006',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '891306',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '7451687',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '564971',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '598687',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '398952',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '495835',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '0158134',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '401566',
                                  code: 'isSearchCount',
                                  name: 'isSearchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '240621',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '916387',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '07513',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '028825',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '8732666',
                                      code: 'updateDate',
                                      name: 'updateDate',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '111892',
                                      code: 'handleStaff',
                                      name: 'handleStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '2538637',
                                      code: 'isNormalCountersign',
                                      name: 'isNormalCountersign',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '865795',
                                      code: 'createDate',
                                      name: 'createDate',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '532487317',
                                      code: 'flowTypeList',
                                      name: 'flowTypeList',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'fieldArray',
                                      children: [
                                        {
                                          attrId: '4644333',
                                          code: 'listItem',
                                          name: '列表元素',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                        },
                                      ],
                                    },
                                    {
                                      attrId: '560966',
                                      code: 'extFlowName',
                                      name: 'extFlowName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '3158663',
                                      code: 'isAreaCountersign',
                                      name: 'isAreaCountersign',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '9973353',
                                      code: 'extFlowCode',
                                      name: 'extFlowCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '687103',
                                      code: 'createStaff',
                                      name: 'createStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '951155',
                                      code: 'handleRole',
                                      name: 'handleRole',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '782595',
                                      code: 'handleRegionFilterType',
                                      name: 'handleRegionFilterType',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '626688',
                                      code: 'cfgId',
                                      name: 'cfgId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '797216',
                                      code: 'orgTypeList',
                                      name: '新增节点',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '0982636',
                                      code: 'handlePostLevel',
                                      name: '新增节点',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '8891493',
                                      code: 'handleOrgLevel',
                                      name: '新增节点',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '53456',
                                      code: 'handlePosition',
                                      name: 'handlePosition',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '292845',
                                      code: 'tacheName',
                                      name: 'tacheName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '138762',
                                      code: 'tacheCode',
                                      name: 'tacheCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '152597',
                                      code: 'approveGrade',
                                      name: 'approveGrade',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '429075',
                                      code: 'extTacheCode',
                                      name: 'extTacheCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '7409216',
                                      code: 'tacheSort',
                                      name: 'tacheSort',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '316903',
                                      code: 'approveGradeDesc',
                                      name: 'approveGradeDesc',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '164184',
                                      code: 'flowName',
                                      name: 'flowName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '30157947',
                                      code: 'extTacheName',
                                      name: 'extTacheName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '815714',
                                      code: 'statusCd',
                                      name: 'statusCd',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '0714404',
                                      code: 'flowType',
                                      name: 'flowType',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '323424',
                                      code: 'flowCode',
                                      name: 'flowCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '431824',
                                      code: 'readHandleType',
                                      name: 'readHandleType',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '384897',
                                      code: 'isLeaderCountersign',
                                      name: 'isLeaderCountersign',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '8834133',
                                      code: 'updateStaff',
                                      name: 'updateStaff',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '052586',
                                      code: 'remark',
                                      name: 'remark',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '3552875',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
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
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatareloadDataSource102.params =
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
                      eventDatareloadDataSource102,
                      { rowId, row, index },
                      'reloadDataSource',
                      {
                        id: 'reloadDataSource',
                        name: 'reloadDataSource',
                        type: 'reloadDataSource',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Table_197744'] = r)}
                  {...injectData}
                />
              </View>
            </Card>
          </View>
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_082334',
              uid: 'View_082334',
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
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_082334'] = r)}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'环节列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '0508186',
                  title: '新增环节',
                  iconPos: 'left',
                  btnType: 'primary',
                },
              ]}
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
                id: 'Card_295202',
                uid: 'Card_295202',
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
              onClickBtn1={(e: any) => {
                // console 166619253652280500
                console.log(data);
                const eventDataifelse517: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '0957639',
                        options: {
                          context: '$data.local_vars.flowDefineId$',
                          operate: 'empty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166619392099567260,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166619397381681500,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166619402397730750,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166619402397797760,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166619405542973730,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166619405542963650,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166619405542951260,
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
                                      id: '085055',
                                      pageJsonId: '8383459',
                                      customFuncName: 'reloadTacheTableList',
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 5,
                                  },
                                ],
                                value: 'callback1',
                                params: [
                                  {
                                    title: '弹窗确认回调参数',
                                    name: 'okData_139928',
                                    value: '$okData_139928$',
                                  },
                                ],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166619402397778940,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['modalname', 'compState'],
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '139928',
                              pageJsonId: '8383459',
                              modalname: '/huanjiexiangqing9964',
                              pageId: '900035813064024064',
                              modalPath: '/huanjiexiangqing9964',
                              paramsObj: {
                                sceneCode: 'A',
                                flowDefineId: '$data.local_vars.flowDefineId$',
                              },
                              paramsObjKeyValueMap: {
                                sceneCode: 'A',
                                flowDefineId: '$data.local_vars.flowDefineId$',
                              },
                            },
                            actionObjId: 'showCustomModal',
                            actionObjName: 'page',
                            value: 'showCustomModal',
                            line_number: 4,
                          },
                        ],
                        condition: [],
                        desc: '已选择',
                        callback: [
                          {
                            type: 'showCustomModal',
                            dataId: 166619402397730750,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '139928',
                              pageJsonId: '8383459',
                              modalname: '/huanjiexiangqing9964',
                              pageId: '900035813064024064',
                              modalPath: '/huanjiexiangqing9964',
                              paramsObj: {
                                sceneCode: 'A',
                                flowDefineId: '$data.local_vars.flowDefineId$',
                              },
                              paramsObjKeyValueMap: {
                                sceneCode: 'A',
                                flowDefineId: '$data.local_vars.flowDefineId$',
                              },
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166619405542973730,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '085055',
                                  pageJsonId: '8383459',
                                  customFuncName: 'reloadTacheTableList',
                                },
                                line_number: 5,
                                callback1: [],
                                callback2: [],
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
                        dataId: 166619398278652060,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '405173',
                          pageJsonId: '8383459',
                          type: 'info',
                          value: '请先选择一个流程！',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDataifelse517.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataifelse517, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Card_295202'] = r)}
              {...injectData}
            >
              <Form
                name={'环节列表表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_7756987'}
                $$componentItem={{
                  id: 'Form_57797197',
                  uid: 'Form_57797197',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 10px 0px' }}
                ref={(r: any) => (refs['Form_57797197'] = r)}
                {...injectData}
              >
                <Input
                  name={'环节名称'}
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
                  fieldName={'tacheName'}
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
                    id: 'Input_728906',
                    uid: 'Input_728906',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc602: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 168958391134021300,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '621836',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadTacheTableList',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc602.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc602,
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
                  ref={(r: any) => (refs['Input_728906'] = r)}
                  {...injectData}
                />
                <Input
                  name={'环节编码'}
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
                  fieldName={'tacheCode'}
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
                    id: 'Input_878055',
                    uid: 'Input_878055',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc603: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671259378888060,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '80086',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadTacheTableList',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc603.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc603,
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
                  ref={(r: any) => (refs['Input_878055'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_1854728',
                    uid: 'View_1854728',
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
                  ref={(r: any) => (refs['View_1854728'] = r)}
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
                      id: 'Button_0164553',
                      uid: 'Button_0164553',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                    onClick={(e: any) => {
                      const eventDatacallSelfFunc604: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166618923141210180,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '942907',
                            pageJsonId: '8383459',
                            customFuncName: 'reloadTacheTableList',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc604.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc604,
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
                    ref={(r: any) => (refs['Button_0164553'] = r)}
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
                      id: 'Button_7121838',
                      uid: 'Button_7121838',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                    onClick={(e: any) => {
                      const forms141 = getFormByCompId('Form_57797197', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms141) ? forms141 : [forms141]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDatareloadDataSource104: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 168974728997892770,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '9455467',
                            pageJsonId: '8383459',
                            dataSourceId: 166617228089581060,
                            dataSourceName: 'qryPageTacheCfgByReq',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '864884',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '116333',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '484362',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '310699',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '118823',
                                    code: 'flowDefineId',
                                    name: 'flowDefineId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'datasource',
                                        'local_vars',
                                        'data',
                                      ],
                                      code: 'flowDefineId',
                                    },
                                  },
                                  {
                                    attrId: '500627',
                                    code: 'tacheCode',
                                    name: 'tacheCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '543773',
                                    code: 'tacheName',
                                    name: 'tacheName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '047258',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '1' },
                                  },
                                  {
                                    attrId: '0312757',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '5' },
                                  },
                                ],
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatareloadDataSource104.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatareloadDataSource104,
                        { e },
                        'reloadDataSource',
                        {
                          id: 'reloadDataSource',
                          name: 'reloadDataSource',
                          type: 'reloadDataSource',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Button_7121838'] = r)}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'环节表格'}
                isFlexColumn={false}
                pageSize={data?.qryPageTacheCfgByReq?.resultData?.size}
                current={data?.qryPageTacheCfgByReq?.resultData?.current}
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
                    title: '环节标识',
                    key: 'cfgId',
                    dataIndex: 'cfgId',
                    id: '543424',
                    className: '',
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
                    title: '环节名称',
                    key: 'tacheName',
                    dataIndex: 'tacheName',
                    className: 'divider',
                    id: '320004',
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
                    title: '环节编码',
                    key: 'tacheCode',
                    dataIndex: 'tacheCode',
                    className: 'divider',
                    id: '624529',
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
                    title: '外部环节名称',
                    key: 'extTacheName',
                    dataIndex: 'extTacheName',
                    className: 'divider',
                    id: '806685',
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
                    title: '外部环节编码',
                    key: 'extTacheCode',
                    dataIndex: 'extTacheCode',
                    className: 'divider',
                    id: '593497',
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
                    title: '环节过滤类型',
                    key: 'handleFilterType',
                    dataIndex: 'handleFilterType',
                    id: '495336',
                    staticService: {
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
                    },
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
                    title: '排序',
                    key: 'tacheSort',
                    dataIndex: 'tacheSort',
                    className: 'divider',
                    id: '8157021',
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
                    title: '审批等级',
                    key: 'approveGrade',
                    dataIndex: 'approveGrade',
                    className: 'divider',
                    id: '8448664',
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
                rowKey={'cfgId'}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '816222',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '0095481',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '701826',
                    checked: true,
                  },
                ]}
                extend={[
                  {
                    id: '100948',
                    title: '复制到',
                    iconPos: 'left',
                    icon: {
                      type: 'copy',
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    },
                    checked: true,
                  },
                ]}
                dataSource={data?.qryPageTacheCfgByReq?.resultData?.records}
                fieldName={'data.qryPageTacheCfgByReq.resultData.size'}
                total={data?.qryPageTacheCfgByReq?.resultData?.total}
                extendNum={4}
                dataSourceFromDataSourceConfig={
                  'data.qryPageTacheCfgByReq.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_279004',
                  uid: 'Table_279004',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatareloadDataSource105: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166617325007866430,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '7187',
                        pageJsonId: '8383459',
                        dataSourceId: 166617228089581060,
                        dataSourceName: 'qryPageTacheCfgByReq',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '864884',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                          },
                          {
                            attrId: '116333',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                          },
                          {
                            attrId: '484362',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                          },
                          {
                            attrId: '310699',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '500627',
                                code: 'tacheCode',
                                name: 'tacheCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: {
                                  type: [
                                    'form',
                                    'Form_57797197',
                                    'getFieldsValue',
                                  ],
                                  code: 'tacheCode',
                                },
                              },
                              {
                                attrId: '543773',
                                code: 'tacheName',
                                name: 'tacheName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: {
                                  type: [
                                    'form',
                                    'Form_57797197',
                                    'getFieldsValue',
                                  ],
                                  code: 'tacheName',
                                },
                              },
                              {
                                attrId: '047258',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                value: {
                                  type: ['context', '$page$'],
                                  code: '',
                                  hideAttr: true,
                                },
                              },
                              {
                                attrId: '0312757',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                value: {
                                  type: ['context', '$pageSize$'],
                                  code: '',
                                  hideAttr: true,
                                },
                              },
                              {
                                attrId: '118823',
                                code: 'flowDefineId',
                                name: 'flowDefineId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: {
                                  type: ['datasource', 'local_vars', 'data'],
                                  code: 'flowDefineId',
                                },
                              },
                            ],
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '808231',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '725524',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '016006',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '891306',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '7451687',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '564971',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '598687',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '398952',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '495835',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                  },
                                ],
                              },
                              {
                                attrId: '0158134',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '401566',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '240621',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '916387',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '07513',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '028825',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '8732666',
                                    code: 'updateDate',
                                    name: 'updateDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '111892',
                                    code: 'handleStaff',
                                    name: 'handleStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2538637',
                                    code: 'isNormalCountersign',
                                    name: 'isNormalCountersign',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '865795',
                                    code: 'createDate',
                                    name: 'createDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '532487317',
                                    code: 'flowTypeList',
                                    name: 'flowTypeList',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '4644333',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '560966',
                                    code: 'extFlowName',
                                    name: 'extFlowName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '3158663',
                                    code: 'isAreaCountersign',
                                    name: 'isAreaCountersign',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9973353',
                                    code: 'extFlowCode',
                                    name: 'extFlowCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '687103',
                                    code: 'createStaff',
                                    name: 'createStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '951155',
                                    code: 'handleRole',
                                    name: 'handleRole',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '782595',
                                    code: 'handleRegionFilterType',
                                    name: 'handleRegionFilterType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '626688',
                                    code: 'cfgId',
                                    name: 'cfgId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '797216',
                                    code: 'orgTypeList',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0982636',
                                    code: 'handlePostLevel',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8891493',
                                    code: 'handleOrgLevel',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '53456',
                                    code: 'handlePosition',
                                    name: 'handlePosition',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '292845',
                                    code: 'tacheName',
                                    name: 'tacheName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '138762',
                                    code: 'tacheCode',
                                    name: 'tacheCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '152597',
                                    code: 'approveGrade',
                                    name: 'approveGrade',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '429075',
                                    code: 'extTacheCode',
                                    name: 'extTacheCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '7409216',
                                    code: 'tacheSort',
                                    name: 'tacheSort',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '316903',
                                    code: 'approveGradeDesc',
                                    name: 'approveGradeDesc',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '164184',
                                    code: 'flowName',
                                    name: 'flowName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '30157947',
                                    code: 'extTacheName',
                                    name: 'extTacheName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '815714',
                                    code: 'statusCd',
                                    name: 'statusCd',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0714404',
                                    code: 'flowType',
                                    name: 'flowType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '323424',
                                    code: 'flowCode',
                                    name: 'flowCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '431824',
                                    code: 'readHandleType',
                                    name: 'readHandleType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '384897',
                                    code: 'isLeaderCountersign',
                                    name: 'isLeaderCountersign',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8834133',
                                    code: 'updateStaff',
                                    name: 'updateStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '052586',
                                    code: 'remark',
                                    name: 'remark',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '3552875',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
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
                  eventDatareloadDataSource105.params =
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
                    eventDatareloadDataSource105,
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
                  const eventDatashowCustomModal229: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166619257581091100,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '570226',
                        pageJsonId: '8383459',
                        modalname: '/huanjiexiangqing9964',
                        pageId: '900035813064024064',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          flowDefineId: '$data.local_vars.flowDefineId$',
                          tacheObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          flowDefineId: '$data.local_vars.flowDefineId$',
                          tacheObj: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal229.params =
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
                    eventDatashowCustomModal229,
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
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal230: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166619376220094370,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '362311',
                        pageJsonId: '8383459',
                        modalname: '/huanjiexiangqing9964',
                        pageId: '900035813064024064',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          flowDefineId: '$data.local_vars.flowDefineId$',
                          tacheObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          flowDefineId: '$data.local_vars.flowDefineId$',
                          tacheObj: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 166619378724760900,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '200545',
                            pageJsonId: '8383459',
                            customFuncName: 'reloadTacheTableList',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal230.params =
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
                    eventDatashowCustomModal230,
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
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest783: any = [
                    {
                      type: 'apiRequest',
                      dataId: 166619380090835000,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '121839',
                        pageJsonId: '8383459',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delDcTacheCfgById',
                        _apiCode: 'delDcTacheCfgById',
                        _source: 'rhin',
                        _serviceId: '884805459204812800',
                        _serviceTitle: '环节删除-tsm: delDcTacheCfgById',
                        params: 'object',
                        apiRequestSetParams: [
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'dcTacheCfgId',
                                name: '环节ID',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'T',
                                defaultValue: '',
                                _id: 'path.dcTacheCfgId',
                                compType: 'Input',
                                parents: ['path'],
                                id: 'path.dcTacheCfgId',
                                dataKey: '121839_path.dcTacheCfgId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                                _deletable: true,
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '121839_path',
                            _deletable: true,
                          },
                        ],
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '204456',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_121839?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166619382144510800,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166619383523563100,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166619385451451460,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '3565315',
                                    pageJsonId: '8383459',
                                    type: 'error',
                                    value: '环节删除失败！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  line_number: 5,
                                },
                              ],
                              condition: [],
                              desc: '失败',
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166619385451451460,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '3565315',
                                    pageJsonId: '8383459',
                                    type: 'error',
                                    value: '环节删除失败！',
                                  },
                                  line_number: 5,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166619384217314880,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '063564',
                                pageJsonId: '8383459',
                                type: 'success',
                                value: '环节删除成功！',
                              },
                              line_number: 3,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166619558766527140,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '3443072',
                                pageJsonId: '8383459',
                                customFuncName: 'reloadTacheTableList',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest783.params =
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
                    eventDataapiRequest783,
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
                onClickBtn1={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal231: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167636234625492770,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '866946',
                        pageJsonId: '8383459',
                        modalname: '/selectFlowPop',
                        pageId: '942679179824185344',
                        paramsObj: {
                          flowDefineId: '$data.local_vars.flowDefineId$',
                          tacheObj: '$row$',
                          tacheCfgId: '$rowId$',
                        },
                        paramsObjKeyValueMap: {
                          flowDefineId: '$data.local_vars.flowDefineId$',
                          tacheObj: '$row$',
                          tacheCfgId: '$rowId$',
                        },
                        modalPath: '/selectFlowPop',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 167636281655097800,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '166141',
                            pageJsonId: '8383459',
                            type: 'success',
                            value: '新增环节成功',
                          },
                          line_number: 2,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal231.params =
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
                    eventDatashowCustomModal231,
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
                ref={(r: any) => (refs['Table_279004'] = r)}
                {...injectData}
              />
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(FlowConfigManage$$Page, {
  pageId: '899899936245522432',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
