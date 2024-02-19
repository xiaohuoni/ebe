// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, TimePicker, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const EditOaOrganization$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm63: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166244999574236830,
        options: {
          compId: 'Form_31_1121',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '739056',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166245043260989000,
            options: {
              compId: 'View_31_1',
              compLib: 'custom',
              pageJsonId: 31,
              compName: 'View',
              id: '4268055',
              loading: true,
            },
            line_number: 2,
          },
          {
            type: 'apiRequest',
            dataId: 166245058726588830,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '719598',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'modDcOaOrg',
              _apiCode: 'modDcOaOrg',
              _source: 'rhin',
              _serviceId: '884346496702455808',
              _serviceTitle: 'OA组织根据主键更新-zzz: modDcOaOrg',
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
                  dataKey: '719598_header',
                  value: { type: [], code: '' },
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '719598_path',
                  value: { type: [], code: '' },
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '719598_query',
                  value: { type: [], code: '' },
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'orgUpdateby',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgUpdateby',
                      compType: 'Input',
                      name: 'orgUpdateby',
                      parents: ['body'],
                      id: 'body.orgUpdateby',
                      dataKey: '719598_body.orgUpdateby',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgUpdateby',
                      },
                    },
                    {
                      code: 'orgKeyPath',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgKeyPath',
                      compType: 'Input',
                      name: 'orgKeyPath',
                      parents: ['body'],
                      id: 'body.orgKeyPath',
                      dataKey: '719598_body.orgKeyPath',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgKeyPath',
                      },
                    },
                    {
                      code: 'orgUpdate',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgUpdate',
                      compType: 'Input',
                      name: 'orgUpdate',
                      parents: ['body'],
                      id: 'body.orgUpdate',
                      dataKey: '719598_body.orgUpdate',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgUpdate',
                      },
                    },
                    {
                      code: 'orgDisabled',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgDisabled',
                      compType: 'Input',
                      name: 'orgDisabled',
                      parents: ['body'],
                      id: 'body.orgDisabled',
                      dataKey: '719598_body.orgDisabled',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgDisabled',
                      },
                    },
                    {
                      code: 'parentOrgKey',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.parentOrgKey',
                      compType: 'Input',
                      name: 'parentOrgKey',
                      parents: ['body'],
                      id: 'body.parentOrgKey',
                      dataKey: '719598_body.parentOrgKey',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'parentOrgKey',
                      },
                    },
                    {
                      code: 'actUdfNum',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfNum',
                      compType: 'Input',
                      name: 'actUdfNum',
                      parents: ['body'],
                      id: 'body.actUdfNum',
                      dataKey: '719598_body.actUdfNum',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'actUdfNum',
                      },
                    },
                    {
                      code: 'isGe',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isGe',
                      compType: 'Input',
                      name: 'isGe',
                      parents: ['body'],
                      id: 'body.isGe',
                      dataKey: '719598_body.isGe',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'isGe',
                      },
                    },
                    {
                      code: 'orgCreateby',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgCreateby',
                      compType: 'Input',
                      name: 'orgCreateby',
                      parents: ['body'],
                      id: 'body.orgCreateby',
                      dataKey: '719598_body.orgCreateby',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgCreateby',
                      },
                    },
                    {
                      code: 'orgCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgCode',
                      compType: 'Input',
                      name: 'orgCode',
                      parents: ['body'],
                      id: 'body.orgCode',
                      dataKey: '719598_body.orgCode',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgCode',
                      },
                    },
                    {
                      code: 'orgOrder',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgOrder',
                      compType: 'Input',
                      name: 'orgOrder',
                      parents: ['body'],
                      id: 'body.orgOrder',
                      dataKey: '719598_body.orgOrder',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgOrder',
                      },
                    },
                    {
                      code: 'orgKey',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgKey',
                      compType: 'Input',
                      name: 'orgKey',
                      parents: ['body'],
                      id: 'body.orgKey',
                      dataKey: '719598_body.orgKey',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgKey',
                      },
                    },
                    {
                      code: 'orgCreate',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgCreate',
                      compType: 'Input',
                      name: 'orgCreate',
                      parents: ['body'],
                      id: 'body.orgCreate',
                      dataKey: '719598_body.orgCreate',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgCreate',
                      },
                    },
                    {
                      code: 'orgName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orgName',
                      compType: 'Input',
                      name: 'orgName',
                      parents: ['body'],
                      id: 'body.orgName',
                      dataKey: '719598_body.orgName',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgName',
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
                      dataKey: '719598_body.lanId',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'lanId',
                      },
                    },
                    {
                      code: 'areaId',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.areaId',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.areaId',
                      dataKey: '719598_body.areaId',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'areaId',
                      },
                    },
                    {
                      code: 'provinceId',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.provinceId',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.provinceId',
                      dataKey: '719598_body.provinceId',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'provinceId',
                      },
                    },
                    {
                      code: 'isImportant',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.isImportant',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.isImportant',
                      dataKey: '719598_body.isImportant',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'isImportant',
                      },
                    },
                    {
                      code: 'orgLevel',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.orgLevel',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.orgLevel',
                      dataKey: '719598_body.orgLevel',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgLevel',
                      },
                    },
                    {
                      code: 'orgType',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.orgType',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.orgType',
                      dataKey: '719598_body.orgType',
                      value: {
                        type: ['context', '$Form_31_1121$'],
                        code: 'orgType',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '719598_body',
                  value: { type: [], code: '' },
                },
              ],
            },
            line_number: 3,
            callback1: [
              {
                type: 'setLoading',
                dataId: 166245134844170100,
                options: {
                  compId: 'View_31_1',
                  compLib: 'custom',
                  pageJsonId: 31,
                  compName: 'View',
                  id: '701747',
                  loading: false,
                },
                line_number: 4,
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '2373803',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_719598?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166245147074380300,
                elseIfs: [],
                line_number: 5,
                callback1: [
                  {
                    type: 'closeModal',
                    dataId: 166245154280885250,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '31956',
                      pageJsonId: 31,
                    },
                    line_number: 6,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166245154487541380,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '111361',
                      pageJsonId: 31,
                    },
                    line_number: 7,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '206479',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_719598?.resultCode$',
                      operate: '!=',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166245155245915230,
                elseIfs: [],
                line_number: 8,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166245158551380960,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '329887',
                      pageJsonId: 31,
                      type: 'error',
                      value: '$reply_719598?.resultMsg$',
                    },
                    line_number: 9,
                  },
                ],
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 166245135179433700,
                options: {
                  compId: 'View_31_1',
                  compLib: 'custom',
                  pageJsonId: 31,
                  compName: 'View',
                  id: '2737254',
                  loading: false,
                },
                line_number: 10,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm63.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm63, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal96: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal96.params = [] || [];
    CMDGenerator(eventDatacloseModal96, {}, 'closeModal', {
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
    const eventDataapiRequest625: any = [
      {
        type: 'apiRequest',
        dataId: 166583832621411650,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '462852',
          pageJsonId: 31,
          sync: false,
          actionTitle: '查询组织等级',
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
              dataKey: '462852_header',
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
                  dataKey: '462852_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_LEVEL' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '462852_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '462852_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '462852_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166583836185457630,
            options: {
              compId: 'Select_991353',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '2421595',
              data: '$reply_462852?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest625.params = [] || [];
    CMDGenerator(eventDataapiRequest625, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest626: any = [
      {
        type: 'apiRequest',
        dataId: 166607301389175360,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3627',
          pageJsonId: 31,
          sync: false,
          actionTitle: '查询组织类型',
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
              dataKey: '3627_header',
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
                  dataKey: '3627_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '3627_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '3627_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '3627_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166607304090975580,
            options: {
              compId: 'Select_67637',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '060381',
              data: '$reply_3627?.resultData$',
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
    eventDataapiRequest626.params = [] || [];
    CMDGenerator(eventDataapiRequest626, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacustomActionCode302: any = [
      {
        type: 'customActionCode',
        dataId: 166244620862574620,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '150081',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){data.dcOaOrg=state.dcOaOrg;success(state.dcOaOrg)};',
          actionTitle: '',
        },
        line_number: 5,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166244625782259620,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '170053',
              pageJsonId: 31,
              dataSourceId: 166244580567644600,
              dataSourceName: 'dcOaOrg',
              dataSourceRelType: 'object',
              dataSourceReloadFilter: [
                {
                  attrId: '510364',
                  code: 'primaryValue',
                  name: '主键值',
                  type: 'string',
                  sort: { isSort: true, value: 'ascend' },
                  initialData: { type: 'static', value: '' },
                  key: 'primaryValue',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '692376',
                  code: 'orgKey',
                  name: 'OIM生成的ERP组织主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgKey',
                  },
                },
                {
                  attrId: '986457',
                  code: 'orgCode',
                  name: 'OA组织编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '312437',
                  code: 'parentOrgKey',
                  name: '上级OA组织主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'parentOrgKey',
                  },
                },
                {
                  attrId: '336532',
                  code: 'orgKeyPath',
                  name: 'OA组织路径',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgKeyPath',
                  },
                },
                {
                  attrId: '1279718',
                  code: 'orgName',
                  name: 'OA组织名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgName',
                  },
                },
                {
                  attrId: '8737',
                  code: 'orgDisabled',
                  name: '状态',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgDisabled',
                  },
                },
                {
                  attrId: '361558544',
                  code: 'orgCreate',
                  name: '记录创建时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgCreate',
                  },
                },
                {
                  attrId: '096509',
                  code: 'orgCreateby',
                  name: '记录创建人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgCreateby',
                  },
                },
                {
                  attrId: '541241',
                  code: 'orgUpdate',
                  name: '记录最后修改时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgUpdate',
                  },
                },
                {
                  attrId: '03742614',
                  code: 'orgUpdateby',
                  name: '记录最后修改人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgUpdateby',
                  },
                },
                {
                  attrId: '3927592',
                  code: 'orgOrder',
                  name: 'OA组织排序',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgOrder',
                  },
                },
                {
                  attrId: '8597216',
                  code: 'actUdfNum',
                  name: 'ERP组织的20位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'actUdfNum',
                  },
                },
                {
                  attrId: '580032',
                  code: 'isGe',
                  name: '是否政企',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'isGe',
                  },
                },
                {
                  attrId: '4021707',
                  code: 'provinceId',
                  name: '省份ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '180303',
                  code: 'lanId',
                  name: '地市ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '556811',
                  code: 'areaId',
                  name: '区县ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '995785',
                  code: 'isImportant',
                  name: '是否重客',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '355202',
                  code: 'orgLevel',
                  name: '组织等级',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgLevel',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 6,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '1743633',
                    options: {
                      context: '$state.dcOaOrg.lanId$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166331678981623870,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166332093399632740,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166332094542548860,
                        children: [],
                        todoOptions: [],
                        options: {
                          compId: 'Input_7412826',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '7274885',
                        },
                        actionObjId: 'Input_7412826',
                        actionObjName: 'Select',
                        value: 'clearOptions',
                        compLib: 'comm',
                        elseIfs: [],
                        line_number: 10,
                      },
                      {
                        dataName: 'action',
                        dataId: 166332146199262430,
                        children: [],
                        todoOptions: ['disabled'],
                        options: {
                          compId: 'Input_7412826',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '103318',
                          disabled: 'true',
                        },
                        actionObjId: 'Input_7412826',
                        actionObjName: 'Select',
                        value: 'setDisable',
                        compLib: 'comm',
                        elseIfs: [],
                        line_number: 11,
                      },
                    ],
                    condition: [],
                    desc: '地市为空',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'clearOptions',
                        dataId: 166332094542548860,
                        options: {
                          compId: 'Input_7412826',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '7274885',
                        },
                        line_number: 10,
                      },
                      {
                        type: 'setDisable',
                        dataId: 166332146199262430,
                        options: {
                          compId: 'Input_7412826',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '103318',
                          disabled: 'true',
                        },
                        line_number: 11,
                      },
                    ],
                  },
                ],
                line_number: 7,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166331682036945280,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '558759',
                      pageJsonId: 31,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'SYS_qryRegionListByParentId',
                      _apiCode: 'qryRegionListByParentId',
                      _source: 'rhin',
                      _serviceId: '878100790201982976',
                      _serviceTitle:
                        '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                          dataKey: '558759_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '558759_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '558759_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                              dataKey: '558759_body.includeParent',
                            },
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
                              dataKey: '558759_body.parentRegionId',
                              value: {
                                type: ['customize'],
                                code: '$state.dcOaOrg.lanId$',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '558759_body',
                        },
                      ],
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 166331682036974700,
                        options: {
                          compId: 'Input_7412826',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '94915',
                          data: '$reply_558759?.resultData$',
                          labelKey: 'regionName',
                          valueKey: 'regionId',
                        },
                        line_number: 9,
                        callback1: [],
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
        callback2: [],
      },
    ];
    eventDatacustomActionCode302.params = [] || [];
    CMDGenerator(eventDatacustomActionCode302, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
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
        ref={(r: any) => (refs['View_31_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => (refs['VerticalView_31_11'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              margin: '0px 0px 0px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => (refs['View_31_112'] = r)}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={12}
              colSpace={16}
              rowSpace={16}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              genRuleType={'object'}
              formType={'normal'}
              relationDataSource={data?.dcOaOrg}
              formItemIndex={9}
              busiObjectId={'884254102384115713'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource297: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166244649697725800,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '0012727',
                      pageJsonId: 31,
                      dataSourceId: 166244580567644600,
                      dataSourceName: 'dcOaOrg',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '692376',
                          code: 'orgKey',
                          name: 'OIM生成的ERP组织主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgKey',
                          },
                        },
                        {
                          attrId: '986457',
                          code: 'orgCode',
                          name: 'OA组织编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgCode',
                          },
                        },
                        {
                          attrId: '312437',
                          code: 'parentOrgKey',
                          name: '上级OA组织主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'parentOrgKey',
                          },
                        },
                        {
                          attrId: '336532',
                          code: 'orgKeyPath',
                          name: 'OA组织路径',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgKeyPath',
                          },
                        },
                        {
                          attrId: '1279718',
                          code: 'orgName',
                          name: 'OA组织名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgName',
                          },
                        },
                        {
                          attrId: '8737',
                          code: 'orgDisabled',
                          name: '状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgDisabled',
                          },
                        },
                        {
                          attrId: '361558544',
                          code: 'orgCreate',
                          name: '记录创建时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgCreate',
                          },
                        },
                        {
                          attrId: '096509',
                          code: 'orgCreateby',
                          name: '记录创建人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgCreateby',
                          },
                        },
                        {
                          attrId: '541241',
                          code: 'orgUpdate',
                          name: '记录最后修改时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgUpdate',
                          },
                        },
                        {
                          attrId: '03742614',
                          code: 'orgUpdateby',
                          name: '记录最后修改人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgUpdateby',
                          },
                        },
                        {
                          attrId: '3927592',
                          code: 'orgOrder',
                          name: 'OA组织排序',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgOrder',
                          },
                        },
                        {
                          attrId: '8597216',
                          code: 'actUdfNum',
                          name: 'ERP组织的20位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfNum',
                          },
                        },
                        {
                          attrId: '580032',
                          code: 'isGe',
                          name: '是否政企',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'isGe',
                          },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource297.params = [] || [];
                CMDGenerator(eventDatasetDataSource297, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Form_31_1121'] = r)}
              {...injectData}
            >
              <Input
                name={'组织主键'}
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
                fieldName={'orgKey'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgKey}
                formItemIndex={0}
                disabled={false}
                visible={true}
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
                  id: 'Input_orgKey_8701255',
                  uid: 'Input_orgKey_8701255',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgKey_8701255'] = r)}
                {...injectData}
              />
              <Input
                name={'上级OA组织主键'}
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
                fieldName={'parentOrgKey'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.parentOrgKey}
                formItemIndex={1}
                disabled={true}
                visible={true}
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
                  id: 'Input_parentOrgKey_4237584',
                  uid: 'Input_parentOrgKey_4237584',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_parentOrgKey_4237584'] = r)}
                {...injectData}
              />
              <Input
                name={'OA组织编码'}
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
                fieldName={'orgCode'}
                hidden={false}
                readOnly={false}
                showMore={false}
                attr={{}}
                value={data?.dcOaOrg?.orgCode}
                formItemIndex={2}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgCode_026975',
                  uid: 'Input_orgCode_026975',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgCode_026975'] = r)}
                {...injectData}
              />
              <Input
                name={'OA组织名称'}
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
                fieldName={'orgName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgName}
                formItemIndex={3}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgName_075202',
                  uid: 'Input_orgName_075202',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgName_075202'] = r)}
                {...injectData}
              />
              <Input
                name={'OA组织路径'}
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
                fieldName={'orgKeyPath'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgKeyPath}
                formItemIndex={4}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgKeyPath_446408',
                  uid: 'Input_orgKeyPath_446408',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgKeyPath_446408'] = r)}
                {...injectData}
              />
              <Select
                name={'状态'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'orgDisabled'}
                disabled={true}
                value={data?.dcOaOrg?.orgDisabled}
                formItemIndex={5}
                dataSource={[
                  { id: '7098003', label: '可用', value: '0' },
                  { id: '22924', label: '不可用', value: '2' },
                ]}
                $$componentItem={{
                  id: 'Input_orgDisabled_642199',
                  uid: 'Input_orgDisabled_642199',
                  type: 'Select',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgDisabled_642199'] = r)}
                {...injectData}
              />
              <Input
                name={'ERP组织的20位编码'}
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
                fieldName={'actUdfNum'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.actUdfNum}
                formItemIndex={6}
                disabled={true}
                visible={true}
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
                  id: 'Input_actUdfNum_160727',
                  uid: 'Input_actUdfNum_160727',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_actUdfNum_160727'] = r)}
                {...injectData}
              />
              <Input
                name={'OA组织排序'}
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
                fieldName={'orgOrder'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgOrder}
                formItemIndex={7}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgOrder_031215',
                  uid: 'Input_orgOrder_031215',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgOrder_031215'] = r)}
                {...injectData}
              />
              <Select
                name={'是否政企'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'isGe'}
                disabled={false}
                value={data?.dcOaOrg?.isGe}
                formItemIndex={8}
                visible={true}
                readOnly={false}
                dataSource={[
                  { id: '8286434', label: '是', value: '1' },
                  { id: '955189', label: '否', value: '0' },
                ]}
                $$componentItem={{
                  id: 'Input_isGe_6127975',
                  uid: 'Input_isGe_6127975',
                  type: 'Select',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_isGe_6127975'] = r)}
                {...injectData}
              />
              <Select
                name={'是否重客'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'isImportant'}
                value={data?.dcOaOrg?.isImportant}
                formItemIndex={9}
                dataSource={attrDataMap['PUB_001']}
                $$componentItem={{
                  id: 'Input_681931',
                  uid: 'Input_681931',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_681931'] = r)}
                {...injectData}
              />
              <Select
                name={'组织等级'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={10}
                fieldName={'data.dcOaOrg.orgLevel'}
                value={data?.dcOaOrg?.orgLevel}
                $$componentItem={{
                  id: 'Select_991353',
                  uid: 'Select_991353',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Select_991353'] = r)}
                {...injectData}
              />
              <Select
                name={'组织类型'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={11}
                fieldName={'orgType'}
                value={data?.dcOaOrg?.orgType}
                $$componentItem={{
                  id: 'Select_67637',
                  uid: 'Select_67637',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Select_67637'] = r)}
                {...injectData}
              />
              <Select
                name={'省份'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'provinceId'}
                value={data?.dcOaOrg?.provinceId}
                formItemIndex={12}
                defaultValue={'350000'}
                dataSource={attrDataMap['PROVINCE_CODE']}
                $$componentItem={{
                  id: 'Input_60563',
                  uid: 'Input_60563',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue221: any = [
                    {
                      type: 'clearValue',
                      dataId: 166331688685275230,
                      options: {
                        compId: 'Input_212391',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '8325537',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue221.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue221, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue222: any = [
                    {
                      type: 'clearValue',
                      dataId: 166331689109066140,
                      options: {
                        compId: 'Input_7412826',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '0455507',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue222.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue222, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse554: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '24613',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_60563',
                        },
                      ],
                      dataId: 166331692877347360,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166331693222967520,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166331697216110560,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_212391',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '7691703',
                              },
                              actionObjId: 'Input_212391',
                              actionObjName: 'Select',
                              value: 'clearValue',
                              compLib: 'comm',
                              line_number: 6,
                            },
                            {
                              dataName: 'action',
                              dataId: 166331697600317820,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_7412826',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '524289',
                              },
                              actionObjId: 'Input_7412826',
                              actionObjName: 'Select',
                              value: 'clearValue',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          desc: '清空下拉框选项',
                          callback: [
                            {
                              type: 'clearValue',
                              dataId: 166331697216110560,
                              options: {
                                compId: 'Input_212391',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '7691703',
                              },
                              line_number: 6,
                            },
                            {
                              type: 'clearValue',
                              dataId: 166331697600317820,
                              options: {
                                compId: 'Input_7412826',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '524289',
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      line_number: 3,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166331698127453820,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '784417',
                            pageJsonId: 31,
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'SYS_qryRegionListByParentId',
                            _apiCode: 'qryRegionListByParentId',
                            _source: 'rhin',
                            _serviceId: '878100790201982976',
                            _serviceTitle:
                              '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                dataKey: '784417_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '784417_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '784417_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
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
                                    dataKey: '784417_body.includeParent',
                                  },
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
                                    dataKey: '784417_body.parentRegionId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_31_1121',
                                        'getFieldsValue',
                                      ],
                                      code: 'provinceId',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '784417_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166331703579532960,
                              options: {
                                compId: 'Input_212391',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '554094',
                                data: '$reply_784417?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 5,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse554.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse554, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Input_60563'] = r)}
                {...injectData}
              />
              <Select
                name={'地市'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'lanId'}
                value={data?.dcOaOrg?.lanId}
                formItemIndex={13}
                allowClear={true}
                dataSource={attrDataMap['CITY_CODE']}
                $$componentItem={{
                  id: 'Input_212391',
                  uid: 'Input_212391',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue223: any = [
                    {
                      type: 'clearValue',
                      dataId: 166331754078807500,
                      options: {
                        compId: 'Input_7412826',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '053544',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue223.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue223, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatasetDisable171: any = [
                    {
                      type: 'setDisable',
                      dataId: 166332139216263000,
                      options: {
                        compId: 'Input_7412826',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '916877',
                        disabled: 'true',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable171.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDatasetDisable171, { e }, 'setDisable', {
                    id: 'setDisable',
                    name: 'setDisable',
                    type: 'setDisable',
                    platform: 'pc',
                  });
                  const eventDataifelse555: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '3619695',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_212391',
                        },
                      ],
                      dataId: 166331708613629380,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166331708795112860,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166331711564233100,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_7412826',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '5999875',
                              },
                              actionObjId: 'Input_7412826',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          desc: '选中地市某个选项',
                          callback: [
                            {
                              type: 'clearOptions',
                              dataId: 166331711564233100,
                              options: {
                                compId: 'Input_7412826',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '5999875',
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      line_number: 3,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166331712050380670,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '476824',
                            pageJsonId: 31,
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'SYS_qryRegionListByParentId',
                            _apiCode: 'qryRegionListByParentId',
                            _source: 'rhin',
                            _serviceId: '878100790201982976',
                            _serviceTitle:
                              '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                dataKey: '476824_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '476824_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '476824_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
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
                                    dataKey: '476824_body.includeParent',
                                  },
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
                                    dataKey: '476824_body.parentRegionId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_31_1121',
                                        'getFieldsValue',
                                      ],
                                      code: 'lanId',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '476824_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166331715498925470,
                              options: {
                                compId: 'Input_7412826',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '8008808',
                                data: '$reply_476824?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'setDisable',
                                  dataId: 166332140449981150,
                                  options: {
                                    compId: 'Input_7412826',
                                    compLib: 'comm',
                                    pageJsonId: 31,
                                    compName: 'Select',
                                    id: '879464',
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse555.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse555, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Input_212391'] = r)}
                {...injectData}
              />
              <Select
                name={'区县'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                fieldName={'areaId'}
                value={data?.dcOaOrg?.areaId}
                formItemIndex={14}
                allowClear={true}
                $$componentItem={{
                  id: 'Input_7412826',
                  uid: 'Input_7412826',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_7412826'] = r)}
                {...injectData}
              />
              <Input
                name={'创建人'}
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
                fieldName={'orgCreateby'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgCreateby}
                formItemIndex={15}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgCreateby_2921535',
                  uid: 'Input_orgCreateby_2921535',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgCreateby_2921535'] = r)}
                {...injectData}
              />
              <TimePicker
                name={'创建时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'orgCreate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgCreate}
                formItemIndex={16}
                isCurrent={'now'}
                disabled={true}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_orgCreate_5214955',
                  uid: 'TimePicker_orgCreate_5214955',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['TimePicker_orgCreate_5214955'] = r)}
                {...injectData}
              />
              <Input
                name={'修改人'}
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
                fieldName={'orgUpdateby'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgUpdateby}
                formItemIndex={17}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgUpdateby_499116',
                  uid: 'Input_orgUpdateby_499116',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgUpdateby_499116'] = r)}
                {...injectData}
              />
              <TimePicker
                name={'修改时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'orgUpdate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgUpdate}
                formItemIndex={18}
                isCurrent={'now'}
                disabled={true}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_orgUpdate_337173',
                  uid: 'TimePicker_orgUpdate_337173',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => (refs['TimePicker_orgUpdate_337173'] = r)}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(EditOaOrganization$$Modal, {
  pageId: '884318427577032704',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', dcOaOrg: '' },
});
