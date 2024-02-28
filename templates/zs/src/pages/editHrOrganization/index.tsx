// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  InputNumber,
  Input,
  Select,
  TimePicker,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '884409061105180672';
const EditHrOrganization$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm64: any = [
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
              _capabilityCode: 'modDcHrAct',
              _apiCode: 'modDcHrAct',
              _source: 'rhin',
              _serviceId: '884374423720960000',
              _serviceTitle: '根据主键更新HR组织: modDcHrAct',
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
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'actUdfComcode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfComcode',
                      compType: 'Input',
                      name: 'actUdfComcode',
                      parents: ['body'],
                      id: 'body.actUdfComcode',
                      dataKey: '719598_body.actUdfComcode',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfComcode',
                      },
                    },
                    {
                      code: 'actUpdate',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUpdate',
                      compType: 'Input',
                      name: 'actUpdate',
                      parents: ['body'],
                      id: 'body.actUpdate',
                      dataKey: '719598_body.actUpdate',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUpdate',
                      },
                    },
                    {
                      code: 'actUdfFunc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfFunc',
                      compType: 'Input',
                      name: 'actUdfFunc',
                      parents: ['body'],
                      id: 'body.actUdfFunc',
                      dataKey: '719598_body.actUdfFunc',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfFunc',
                      },
                    },
                    {
                      code: 'actKey',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actKey',
                      compType: 'Input',
                      name: 'actKey',
                      parents: ['body'],
                      id: 'body.actKey',
                      dataKey: '719598_body.actKey',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actKey',
                      },
                    },
                    {
                      code: 'actUdfMgr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfMgr',
                      compType: 'Input',
                      name: 'actUdfMgr',
                      parents: ['body'],
                      id: 'body.actUdfMgr',
                      dataKey: '719598_body.actUdfMgr',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfMgr',
                      },
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
                      dataKey: '719598_body.updateDate',
                      value: { type: [], code: '' },
                    },
                    {
                      code: 'actUdfTel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfTel',
                      compType: 'Input',
                      name: 'actUdfTel',
                      parents: ['body'],
                      id: 'body.actUdfTel',
                      dataKey: '719598_body.actUdfTel',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfTel',
                      },
                    },
                    {
                      code: 'actUdfFax',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfFax',
                      compType: 'Input',
                      name: 'actUdfFax',
                      parents: ['body'],
                      id: 'body.actUdfFax',
                      dataKey: '719598_body.actUdfFax',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfFax',
                      },
                    },
                    {
                      code: 'actName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actName',
                      compType: 'Input',
                      name: 'actName',
                      parents: ['body'],
                      id: 'body.actName',
                      dataKey: '719598_body.actName',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actName',
                      },
                    },
                    {
                      code: 'actUdfZip',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfZip',
                      compType: 'Input',
                      name: 'actUdfZip',
                      parents: ['body'],
                      id: 'body.actUdfZip',
                      dataKey: '719598_body.actUdfZip',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfZip',
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
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfNum',
                      },
                    },
                    {
                      code: 'actUpdateby',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUpdateby',
                      compType: 'Input',
                      name: 'actUpdateby',
                      parents: ['body'],
                      id: 'body.actUpdateby',
                      dataKey: '719598_body.actUpdateby',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUpdateby',
                      },
                    },
                    {
                      code: 'actUdfDspname',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfDspname',
                      compType: 'Input',
                      name: 'actUdfDspname',
                      parents: ['body'],
                      id: 'body.actUdfDspname',
                      dataKey: '719598_body.actUdfDspname',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfDspname',
                      },
                    },
                    {
                      code: 'actUdfSupvsr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfSupvsr',
                      compType: 'Input',
                      name: 'actUdfSupvsr',
                      parents: ['body'],
                      id: 'body.actUdfSupvsr',
                      dataKey: '719598_body.actUdfSupvsr',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfSupvsr',
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
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'isGe',
                      },
                    },
                    {
                      code: 'actCustType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actCustType',
                      compType: 'Input',
                      name: 'actCustType',
                      parents: ['body'],
                      id: 'body.actCustType',
                      dataKey: '719598_body.actCustType',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actCustType',
                      },
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
                      dataKey: '719598_body.createDate',
                      value: { type: [], code: '' },
                    },
                    {
                      code: 'actStatus',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actStatus',
                      compType: 'Input',
                      name: 'actStatus',
                      parents: ['body'],
                      id: 'body.actStatus',
                      dataKey: '719598_body.actStatus',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actStatus',
                      },
                    },
                    {
                      code: 'actCreateby',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actCreateby',
                      compType: 'Input',
                      name: 'actCreateby',
                      parents: ['body'],
                      id: 'body.actCreateby',
                      dataKey: '719598_body.actCreateby',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actCreateby',
                      },
                    },
                    {
                      code: 'actUdfErpid',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfErpid',
                      compType: 'Input',
                      name: 'actUdfErpid',
                      parents: ['body'],
                      id: 'body.actUdfErpid',
                      dataKey: '719598_body.actUdfErpid',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfErpid',
                      },
                    },
                    {
                      code: 'actUdfLoc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfLoc',
                      compType: 'Input',
                      name: 'actUdfLoc',
                      parents: ['body'],
                      id: 'body.actUdfLoc',
                      dataKey: '719598_body.actUdfLoc',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfLoc',
                      },
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
                      dataKey: '719598_body.createStaff',
                      value: { type: [], code: '' },
                    },
                    {
                      code: 'parentActUdfNum',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.parentActUdfNum',
                      compType: 'Input',
                      name: 'parentActUdfNum',
                      parents: ['body'],
                      id: 'body.parentActUdfNum',
                      dataKey: '719598_body.parentActUdfNum',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'parentActUdfNum',
                      },
                    },
                    {
                      code: 'actCreate',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actCreate',
                      compType: 'Input',
                      name: 'actCreate',
                      parents: ['body'],
                      id: 'body.actCreate',
                      dataKey: '719598_body.actCreate',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actCreate',
                      },
                    },
                    {
                      code: 'actUdfAddr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actUdfAddr',
                      compType: 'Input',
                      name: 'actUdfAddr',
                      parents: ['body'],
                      id: 'body.actUdfAddr',
                      dataKey: '719598_body.actUdfAddr',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actUdfAddr',
                      },
                    },
                    {
                      code: 'actRemark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.actRemark',
                      compType: 'Input',
                      name: 'actRemark',
                      parents: ['body'],
                      id: 'body.actRemark',
                      dataKey: '719598_body.actRemark',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'actRemark',
                      },
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
                      dataKey: '719598_body.updateStaff',
                      value: { type: [], code: '' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '719598_body',
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
    eventDatavalidateCurrentForm64.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm64, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal103: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal103.params = [] || [];
    CMDGenerator(eventDatacloseModal103, {}, 'closeModal', {
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
    const eventDatacustomActionCode305: any = [
      {
        type: 'customActionCode',
        dataId: 166244620862574620,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '150081',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){data.dcHrAct=state.dcHrAct;success(state.dcHrAct)};',
          actionTitle: '',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166244625782259620,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '170053',
              pageJsonId: 31,
              dataSourceId: 166246597673100450,
              dataSourceName: 'dcHrAct',
              dataSourceRelType: 'object',
              dataSourceReloadFilter: [
                {
                  attrId: '743118',
                  code: 'primaryValue',
                  name: '主键值',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '180429',
                  code: 'actKey',
                  name: 'OIM生成的ERP组织主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actKey',
                  },
                },
                {
                  attrId: '383039',
                  code: 'actUdfNum',
                  name: 'ERP组织的20位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfNum',
                  },
                },
                {
                  attrId: '50578825',
                  code: 'actName',
                  name: 'ERP组织名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actName',
                  },
                },
                {
                  attrId: '299791',
                  code: 'actCustType',
                  name: '类型',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actCustType',
                  },
                },
                {
                  attrId: '674687',
                  code: 'actStatus',
                  name: '状态',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actStatus',
                  },
                },
                {
                  attrId: '396685',
                  code: 'actCreate',
                  name: '记录创建时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actCreate',
                  },
                },
                {
                  attrId: '132968',
                  code: 'actCreateby',
                  name: '记录创建人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actCreateby',
                  },
                },
                {
                  attrId: '8936624',
                  code: 'actUpdate',
                  name: '记录最后修改时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUpdate',
                  },
                },
                {
                  attrId: '056348',
                  code: 'actUpdateby',
                  name: '记录最后修改人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUpdateby',
                  },
                },
                {
                  attrId: '435907',
                  code: 'actUdfDspname',
                  name: '显示的名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfDspname',
                  },
                },
                {
                  attrId: '4906457',
                  code: 'actUdfFunc',
                  name: '部门功能',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfFunc',
                  },
                },
                {
                  attrId: '3215403',
                  code: 'actUdfSupvsr',
                  name: '部门主管',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfSupvsr',
                  },
                },
                {
                  attrId: '75672',
                  code: 'actUdfMgr',
                  name: '部门经理',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfMgr',
                  },
                },
                {
                  attrId: '9344925',
                  code: 'actUdfAddr',
                  name: '部门地址',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfAddr',
                  },
                },
                {
                  attrId: '9710101',
                  code: 'actUdfZip',
                  name: '部门邮政编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfZip',
                  },
                },
                {
                  attrId: '701172',
                  code: 'actUdfTel',
                  name: '部门电话',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfTel',
                  },
                },
                {
                  attrId: '877372',
                  code: 'actUdfFax',
                  name: '部门传真',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfFax',
                  },
                },
                {
                  attrId: '308054',
                  code: 'actUdfErpid',
                  name: 'erp组织8位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfErpid',
                  },
                },
                {
                  attrId: '9578827',
                  code: 'actUdfLoc',
                  name: '部门位置',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfLoc',
                  },
                },
                {
                  attrId: '3419015',
                  code: 'parentActUdfNum',
                  name: '上级erp组织的20位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'parentActUdfNum',
                  },
                },
                {
                  attrId: '285131',
                  code: 'actRemark',
                  name: '备注说明',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actRemark',
                  },
                },
                {
                  attrId: '380002',
                  code: 'actUdfComcode',
                  name: '公司代码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'actUdfComcode',
                  },
                },
                {
                  attrId: '593294',
                  code: 'isGe',
                  name: '是否政企',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcHrAct', 'data'],
                    code: 'isGe',
                  },
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
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode305.params = [] || [];
    CMDGenerator(eventDatacustomActionCode305, {}, 'customActionCode', {
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
        className="View_View_31_1"
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
        ref={(r: any) => refs.setComponentRef(r, 'View_31_1')}
        {...injectData}
      >
        <View
          className="View_VerticalView_31_11"
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
          {...injectData}
        >
          <View
            className="View_View_31_112"
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
            ref={(r: any) => refs.setComponentRef(r, 'View_31_112')}
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
              relationDataSource={data?.dcHrAct}
              formItemIndex={9}
              busiObjectId={'884365014756237312'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource300: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166246601406093100,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '052533',
                      pageJsonId: 31,
                      dataSourceId: 166246597673100450,
                      dataSourceName: 'dcHrAct',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '180429',
                          code: 'actKey',
                          name: 'OIM生成的ERP组织主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actKey',
                          },
                        },
                        {
                          attrId: '383039',
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
                          attrId: '50578825',
                          code: 'actName',
                          name: 'ERP组织名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actName',
                          },
                        },
                        {
                          attrId: '299791',
                          code: 'actCustType',
                          name: '类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actCustType',
                          },
                        },
                        {
                          attrId: '674687',
                          code: 'actStatus',
                          name: '状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actStatus',
                          },
                        },
                        {
                          attrId: '396685',
                          code: 'actCreate',
                          name: '记录创建时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actCreate',
                          },
                        },
                        {
                          attrId: '132968',
                          code: 'actCreateby',
                          name: '记录创建人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actCreateby',
                          },
                        },
                        {
                          attrId: '8936624',
                          code: 'actUpdate',
                          name: '记录最后修改时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUpdate',
                          },
                        },
                        {
                          attrId: '056348',
                          code: 'actUpdateby',
                          name: '记录最后修改人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUpdateby',
                          },
                        },
                        {
                          attrId: '435907',
                          code: 'actUdfDspname',
                          name: '显示的名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfDspname',
                          },
                        },
                        {
                          attrId: '4906457',
                          code: 'actUdfFunc',
                          name: '部门功能',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfFunc',
                          },
                        },
                        {
                          attrId: '3215403',
                          code: 'actUdfSupvsr',
                          name: '部门主管',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfSupvsr',
                          },
                        },
                        {
                          attrId: '75672',
                          code: 'actUdfMgr',
                          name: '部门经理',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfMgr',
                          },
                        },
                        {
                          attrId: '9344925',
                          code: 'actUdfAddr',
                          name: '部门地址',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfAddr',
                          },
                        },
                        {
                          attrId: '9710101',
                          code: 'actUdfZip',
                          name: '部门邮政编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfZip',
                          },
                        },
                        {
                          attrId: '701172',
                          code: 'actUdfTel',
                          name: '部门电话',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfTel',
                          },
                        },
                        {
                          attrId: '877372',
                          code: 'actUdfFax',
                          name: '部门传真',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfFax',
                          },
                        },
                        {
                          attrId: '308054',
                          code: 'actUdfErpid',
                          name: 'erp组织8位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfErpid',
                          },
                        },
                        {
                          attrId: '9578827',
                          code: 'actUdfLoc',
                          name: '部门位置',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfLoc',
                          },
                        },
                        {
                          attrId: '3419015',
                          code: 'parentActUdfNum',
                          name: '上级erp组织的20位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'parentActUdfNum',
                          },
                        },
                        {
                          attrId: '285131',
                          code: 'actRemark',
                          name: '备注说明',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actRemark',
                          },
                        },
                        {
                          attrId: '380002',
                          code: 'actUdfComcode',
                          name: '公司代码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfComcode',
                          },
                        },
                        {
                          attrId: '593294',
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
                eventDatasetDataSource300.params = [] || [];
                CMDGenerator(eventDatasetDataSource300, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_31_1121')}
              {...injectData}
            >
              <InputNumber
                name={'OIM生成的ERP组织主键'}
                readOnly={false}
                disabled={false}
                visible={true}
                size={'default'}
                formatting={''}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                step={1}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                min={0}
                fieldName={'actKey'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actKey}
                formItemIndex={0}
                $$componentItem={{
                  id: 'InputNumber_actKey_714923',
                  uid: 'InputNumber_actKey_714923',
                  type: 'InputNumber',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'InputNumber_actKey_714923')
                }
                {...injectData}
              />
              <Input
                name={'ERP组织编码'}
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
                value={data?.dcHrAct?.actUdfNum}
                formItemIndex={1}
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
                  id: 'Input_actUdfNum_542427',
                  uid: 'Input_actUdfNum_542427',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfNum_542427')
                }
                {...injectData}
              />
              <Input
                name={'上级ERP组织编码'}
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
                fieldName={'parentActUdfNum'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.parentActUdfNum}
                formItemIndex={2}
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
                  id: 'Input_parentActUdfNum_952822',
                  uid: 'Input_parentActUdfNum_952822',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_parentActUdfNum_952822')
                }
                {...injectData}
              />
              <Input
                name={'ERP组织8位编码'}
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
                fieldName={'actUdfErpid'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfErpid}
                formItemIndex={3}
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
                  id: 'Input_actUdfErpid_777429',
                  uid: 'Input_actUdfErpid_777429',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfErpid_777429')
                }
                {...injectData}
              />
              <Input
                name={'ERP组织名称'}
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
                fieldName={'actName'}
                disabled={false}
                value={data?.dcHrAct?.actName}
                formItemIndex={4}
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
                  id: 'SuperSelect_actName_5260985',
                  uid: 'SuperSelect_actName_5260985',
                  type: 'Input',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'SuperSelect_actName_5260985')
                }
                {...injectData}
              />
              <Input
                name={'显示的名称'}
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
                fieldName={'actUdfDspname'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfDspname}
                formItemIndex={5}
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
                  id: 'Input_actUdfDspname_180864',
                  uid: 'Input_actUdfDspname_180864',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfDspname_180864')
                }
                {...injectData}
              />
              <Input
                name={'类型'}
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
                fieldName={'actCustType'}
                value={data?.dcHrAct?.actCustType}
                formItemIndex={6}
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
                  id: 'TimePicker_actCustType_3463196',
                  uid: 'TimePicker_actCustType_3463196',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_actCustType_3463196')
                }
                {...injectData}
              />
              <Input
                name={'部门功能'}
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
                fieldName={'actUdfFunc'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfFunc}
                formItemIndex={7}
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
                  id: 'Input_actUdfFunc_8037213',
                  uid: 'Input_actUdfFunc_8037213',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfFunc_8037213')
                }
                {...injectData}
              />
              <Input
                name={'部门经理'}
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
                fieldName={'actUdfMgr'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfMgr}
                formItemIndex={8}
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
                  id: 'Input_actUdfMgr_192139',
                  uid: 'Input_actUdfMgr_192139',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfMgr_192139')
                }
                {...injectData}
              />
              <Input
                name={'部门主管'}
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
                fieldName={'actUdfSupvsr'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfSupvsr}
                formItemIndex={9}
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
                  id: 'Input_actUdfSupvsr_412322',
                  uid: 'Input_actUdfSupvsr_412322',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfSupvsr_412322')
                }
                {...injectData}
              />
              <Input
                name={'部门电话'}
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
                fieldName={'actUdfTel'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfTel}
                formItemIndex={10}
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
                  id: 'Input_actUdfTel_6582803',
                  uid: 'Input_actUdfTel_6582803',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfTel_6582803')
                }
                {...injectData}
              />
              <Input
                name={'部门传真'}
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
                fieldName={'actUdfFax'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfFax}
                formItemIndex={11}
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
                  id: 'Input_actUdfFax_2286089',
                  uid: 'Input_actUdfFax_2286089',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfFax_2286089')
                }
                {...injectData}
              />
              <Input
                name={'部门地址'}
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
                fieldName={'actUdfAddr'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfAddr}
                formItemIndex={12}
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
                  id: 'Input_actUdfAddr_224402',
                  uid: 'Input_actUdfAddr_224402',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfAddr_224402')
                }
                {...injectData}
              />
              <Input
                name={'部门邮政编码'}
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
                fieldName={'actUdfZip'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfZip}
                formItemIndex={13}
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
                  id: 'Input_actUdfZip_883759',
                  uid: 'Input_actUdfZip_883759',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfZip_883759')
                }
                {...injectData}
              />
              <Input
                name={'部门位置'}
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
                fieldName={'actUdfLoc'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfLoc}
                formItemIndex={14}
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
                  id: 'Input_actUdfLoc_995008',
                  uid: 'Input_actUdfLoc_995008',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfLoc_995008')
                }
                {...injectData}
              />
              <Input
                name={'公司代码'}
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
                fieldName={'actUdfComcode'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUdfComcode}
                formItemIndex={15}
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
                  id: 'Input_actUdfComcode_698804',
                  uid: 'Input_actUdfComcode_698804',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfComcode_698804')
                }
                {...injectData}
              />
              <Input
                name={'主负责人'}
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
                formItemIndex={16}
                fieldName={'actMainManager'}
                value={data?.dcHrAct?.actMainManager}
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
                  id: 'Input_7438488',
                  uid: 'Input_7438488',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_7438488')}
                {...injectData}
              />
              <Input
                name={'辅负责人'}
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
                formItemIndex={17}
                fieldName={'actViceManager'}
                value={data?.dcHrAct?.actViceManager}
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
                  id: 'Input_06053',
                  uid: 'Input_06053',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_06053')}
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
                value={data?.dcHrAct?.isGe}
                formItemIndex={18}
                dataSource={attrDataMap['PUB_001']}
                $$componentItem={{
                  id: 'Input_isGe_625353',
                  uid: 'Input_isGe_625353',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_isGe_625353')}
                {...injectData}
              />
              <Input
                name={'状态'}
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
                fieldName={'actStatus'}
                disabled={false}
                value={data?.dcHrAct?.actStatus}
                formItemIndex={19}
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
                  id: 'SuperSelect_actStatus_265293',
                  uid: 'SuperSelect_actStatus_265293',
                  type: 'Input',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'SuperSelect_actStatus_265293')
                }
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
                fieldName={'actCreateby'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actCreateby}
                formItemIndex={20}
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
                  id: 'Input_actCreateby_3965916',
                  uid: 'Input_actCreateby_3965916',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actCreateby_3965916')
                }
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
                fieldName={'actCreate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actCreate}
                formItemIndex={21}
                isCurrent={'now'}
                $$componentItem={{
                  id: 'TimePicker_actCreate_5668258',
                  uid: 'TimePicker_actCreate_5668258',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_actCreate_5668258')
                }
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
                fieldName={'actUpdateby'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUpdateby}
                formItemIndex={22}
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
                  id: 'Input_actUpdateby_552979',
                  uid: 'Input_actUpdateby_552979',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUpdateby_552979')
                }
                {...injectData}
              />
              <Input
                name={'修改时间'}
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
                fieldName={'actUpdate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcHrAct?.actUpdate}
                formItemIndex={23}
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
                  id: 'Input_actUpdate_8836595',
                  uid: 'Input_actUpdate_8836595',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUpdate_8836595')
                }
                {...injectData}
              />
              <TextArea
                name={'备注说明'}
                selfSpan={12}
                labelCol={'8'}
                wrapperCol={16}
                readOnly={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'actRemark'}
                value={data?.dcHrAct?.actRemark}
                formItemIndex={24}
                $$componentItem={{
                  id: 'Input_actRemark_103843',
                  uid: 'Input_actRemark_103843',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actRemark_103843')
                }
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(EditHrOrganization$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', dcHrAct: '' },
});
