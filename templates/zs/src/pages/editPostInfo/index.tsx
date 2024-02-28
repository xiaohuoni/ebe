// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '884729641678057472';
const EditPostInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm65: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166253614435038240,
        options: {
          compId: 'Form_31_1121',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '8849398',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166253617477045440,
            options: {
              compId: 'View_31_1',
              compLib: 'custom',
              pageJsonId: 31,
              compName: 'View',
              id: '208305',
              loading: true,
            },
            line_number: 2,
          },
          {
            type: 'apiRequest',
            dataId: 166253618727362050,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '3501953',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              busiObjectId: '874527733375414273',
              _source: 'rhin',
              _serviceId: '884737907556614144',
              _serviceTitle: '修改岗位信息: modDcPostInfo',
              params: 'object',
              _capabilityCode: 'modDcPostInfo',
              _apiCode: 'modDcPostInfo',
              apiRequestSetParams: [
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'header',
                  compType: 'Input',
                  parents: [],
                  id: 'header',
                  dataKey: '3501953_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '3501953_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '3501953_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'postFilterType',
                      name: '岗位过滤类型',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.postFilterType',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.postFilterType',
                      dataKey: '3501953_body.postFilterType',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'postFilterType',
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
                      dataKey: '3501953_body.createStaff',
                      value: {
                        type: ['datasource', 'dcPostInfo', 'data'],
                        code: 'createStaff',
                      },
                    },
                    {
                      code: 'provinceId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.provinceId',
                      compType: 'Input',
                      name: 'provinceId',
                      parents: ['body'],
                      id: 'body.provinceId',
                      dataKey: '3501953_body.provinceId',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'provinceId',
                      },
                    },
                    {
                      code: 'lanId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.lanId',
                      compType: 'Input',
                      name: 'lanId',
                      parents: ['body'],
                      id: 'body.lanId',
                      dataKey: '3501953_body.lanId',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'lanId',
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
                      dataKey: '3501953_body.createDate',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'createDate',
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
                      dataKey: '3501953_body.updateStaff',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'updateStaff',
                      },
                    },
                    {
                      code: 'postName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.postName',
                      compType: 'Input',
                      name: 'postName',
                      parents: ['body'],
                      id: 'body.postName',
                      dataKey: '3501953_body.postName',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'postName',
                      },
                    },
                    {
                      code: 'postCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.postCode',
                      compType: 'Input',
                      name: 'postCode',
                      parents: ['body'],
                      id: 'body.postCode',
                      dataKey: '3501953_body.postCode',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'postCode',
                      },
                    },
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
                      dataKey: '3501953_body.postId',
                      value: {
                        type: ['datasource', 'dcPostInfo', 'data'],
                        code: 'postId',
                      },
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
                      dataKey: '3501953_body.remark',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'remark',
                      },
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
                      dataKey: '3501953_body.statusCd',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'statusCd',
                      },
                    },
                    {
                      code: 'postDesc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.postDesc',
                      compType: 'Input',
                      name: 'postDesc',
                      parents: ['body'],
                      id: 'body.postDesc',
                      dataKey: '3501953_body.postDesc',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'postDesc',
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
                      dataKey: '3501953_body.updateDate',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'updateDate',
                      },
                    },
                    {
                      code: 'statusDate',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.statusDate',
                      compType: 'Input',
                      name: 'statusDate',
                      parents: ['body'],
                      id: 'body.statusDate',
                      dataKey: '3501953_body.statusDate',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'statusDate',
                      },
                    },
                    {
                      code: 'areaId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.areaId',
                      compType: 'Input',
                      name: 'areaId',
                      parents: ['body'],
                      id: 'body.areaId',
                      dataKey: '3501953_body.areaId',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'areaId',
                      },
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
                      dataKey: '3501953_body.createStaffName',
                      value: {
                        type: ['form', 'Form_31_1121', 'getFieldsValue'],
                        code: 'createStaffName',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '3501953_body',
                },
              ],
            },
            line_number: 3,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '8351688',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_3501953?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166253705235570050,
                elseIfs: [],
                line_number: 4,
                callback1: [
                  {
                    type: 'closeModal',
                    dataId: 166253714496277760,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '87845818',
                      pageJsonId: 31,
                    },
                    line_number: 5,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166253716952589920,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '661418',
                      pageJsonId: 31,
                    },
                    line_number: 6,
                  },
                ],
              },
              {
                type: 'setLoading',
                dataId: 166254225193645250,
                options: {
                  compId: 'View_31_1',
                  compLib: 'custom',
                  pageJsonId: 31,
                  compName: 'View',
                  id: '1505576',
                  loading: false,
                },
                line_number: 7,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 166254225650486750,
                options: {
                  compId: 'View_31_1',
                  compLib: 'custom',
                  pageJsonId: 31,
                  compName: 'View',
                  id: '748798',
                  loading: false,
                },
                line_number: 8,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm65.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm65, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal109: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal109.params = [] || [];
    CMDGenerator(eventDatacloseModal109, {}, 'closeModal', {
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
    const eventDataapiRequest634: any = [
      {
        type: 'apiRequest',
        dataId: 166929054718381860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '2158385',
          pageJsonId: 31,
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
              dataKey: '2158385_header',
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
                  dataKey: '2158385_path.attrCode',
                  value: { type: ['customize'], code: 'POST_FILTER_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '2158385_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '2158385_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '2158385_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166929056872769950,
            options: {
              compId: 'Select_82425973',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '102531',
              data: '$reply_2158385?.resultData$',
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
    eventDataapiRequest634.params = [] || [];
    CMDGenerator(eventDataapiRequest634, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacustomActionCode308: any = [
      {
        type: 'customActionCode',
        dataId: 166254382674757100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '783747',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){data.dcPostInfo=state.dcPostInfo;success(state.dcPostInfo)};',
        },
        line_number: 3,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166254387742826140,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '818822',
              pageJsonId: 31,
              dataSourceId: 166254239728513600,
              dataSourceName: 'dcPostInfo',
              dataSourceRelType: 'object',
              dataSourceReloadFilter: [
                {
                  attrId: '378602',
                  code: 'primaryValue',
                  name: '主键值',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  key: 'primaryValue',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '7998157',
                  code: 'postId',
                  name: '岗位id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'postId',
                  },
                },
                {
                  attrId: '1067796',
                  code: 'postCode',
                  name: '岗位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'postCode',
                  },
                },
                {
                  attrId: '1670304',
                  code: 'postName',
                  name: '岗位名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'postName',
                  },
                },
                {
                  attrId: '283228',
                  code: 'postDesc',
                  name: '岗位描述',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'postDesc',
                  },
                },
                {
                  attrId: '927772',
                  code: 'provinceId',
                  name: '省份id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'provinceId',
                  },
                },
                {
                  attrId: '8206618',
                  code: 'lanId',
                  name: '地市id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'lanId',
                  },
                },
                {
                  attrId: '197135',
                  code: 'areaId',
                  name: '区县id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'areaId',
                  },
                },
                {
                  attrId: '249991',
                  code: 'statusCd',
                  name: '状态',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'statusCd',
                  },
                },
                {
                  attrId: '8087615',
                  code: 'statusDate',
                  name: '状态时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'statusDate',
                  },
                },
                {
                  attrId: '712843',
                  code: 'createStaff',
                  name: '创建人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'createStaff',
                  },
                },
                {
                  attrId: '860897',
                  code: 'createStaffName',
                  name: '创建人名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'createStaffName',
                  },
                },
                {
                  attrId: '9366012',
                  code: 'createDate',
                  name: '创建时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'createDate',
                  },
                },
                {
                  attrId: '791758',
                  code: 'updateStaff',
                  name: '修改人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'updateStaff',
                  },
                },
                {
                  attrId: '282568',
                  code: 'updateDate',
                  name: '修改时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'updateDate',
                  },
                },
                {
                  attrId: '8357553',
                  code: 'remark',
                  name: '备注',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcPostInfo', 'data'],
                    code: 'remark',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 4,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '845712',
                    options: {
                      context: '$state.dcPostInfo.lanId$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166331665844473400,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166332152204636930,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166332154280991550,
                        children: [],
                        todoOptions: [],
                        options: {
                          compId: 'Input_areaId_105236',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '423291',
                        },
                        actionObjId: 'Input_areaId_105236',
                        actionObjName: 'Select',
                        value: 'clearOptions',
                        compLib: 'comm',
                        line_number: 10,
                      },
                      {
                        dataName: 'action',
                        dataId: 166332154862052220,
                        children: [],
                        todoOptions: ['disabled'],
                        options: {
                          compId: 'Input_areaId_105236',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '878808',
                          disabled: 'true',
                        },
                        actionObjId: 'Input_areaId_105236',
                        actionObjName: 'Select',
                        value: 'setDisable',
                        compLib: 'comm',
                        line_number: 11,
                      },
                    ],
                    condition: [],
                    desc: '地市为空',
                    callback: [
                      {
                        type: 'clearOptions',
                        dataId: 166332154280991550,
                        options: {
                          compId: 'Input_areaId_105236',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '423291',
                        },
                        line_number: 10,
                      },
                      {
                        type: 'setDisable',
                        dataId: 166332154862052220,
                        options: {
                          compId: 'Input_areaId_105236',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '878808',
                          disabled: 'true',
                        },
                        line_number: 11,
                      },
                    ],
                  },
                ],
                line_number: 5,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 166332169434404260,
                    options: {
                      compId: 'Input_areaId_105236',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '5549107',
                      disabled: 'true',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'apiRequest',
                    dataId: 166331666566985280,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '6644066',
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
                      actionTitle: '加载区县下拉框',
                      apiRequestSetParams: [
                        {
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                          _id: 'header',
                          compType: 'Input',
                          parents: [],
                          id: 'header',
                          dataKey: '307465_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '307465_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '307465_query',
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
                              dataKey: '307465_body.includeParent',
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
                              dataKey: '307465_body.parentRegionId',
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
                          dataKey: '307465_body',
                        },
                      ],
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 166331666566950240,
                        options: {
                          compId: 'Input_areaId_105236',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '195548',
                          data: '$reply_6644066?.resultData$',
                          labelKey: 'regionName',
                          valueKey: 'regionId',
                        },
                        line_number: 8,
                        callback1: [
                          {
                            type: 'setDisable',
                            dataId: 166332172886887040,
                            options: {
                              compId: 'Input_areaId_105236',
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'Select',
                              id: '681719',
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
              {
                type: 'apiRequest',
                dataId: 166314136496962140,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '7060233',
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
                  actionTitle: '加载省地市下拉框',
                  apiRequestSetParams: [
                    {
                      code: 'header',
                      name: '请求头参数',
                      attrType: 'object',
                      _id: 'header',
                      compType: 'Input',
                      parents: [],
                      id: 'header',
                      dataKey: '99749243_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '99749243_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '99749243_query',
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
                          dataKey: '99749243_body.includeParent',
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
                          dataKey: '99749243_body.parentRegionId',
                          value: { type: ['customize'], code: '-1' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '99749243_body',
                    },
                  ],
                },
                line_number: 12,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166314136496983200,
                    shielding: true,
                    options: {
                      compId: 'Input_provinceId_388796',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '632468',
                      data: '$reply_7060233?.resultData$',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                    },
                    line_number: 13,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166314146439681540,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '287223',
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
                          actionTitle: '加载地市下拉框',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '287223_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '287223_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '287223_query',
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
                                  dataKey: '287223_body.includeParent',
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
                                  dataKey: '287223_body.parentRegionId',
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
                              dataKey: '287223_body',
                            },
                          ],
                        },
                        line_number: 14,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 16631415490831500,
                            shielding: true,
                            options: {
                              compId: 'Input_lanId_5166484',
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'Select',
                              id: '81829155',
                              data: '$reply_287223?.resultData$',
                              labelKey: 'regionName',
                              valueKey: 'regionId',
                            },
                            line_number: 15,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 166314157480105660,
                                shielding: true,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '307465',
                                  pageJsonId: 31,
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode:
                                    'SYS_qryRegionListByParentId',
                                  _apiCode: 'qryRegionListByParentId',
                                  _source: 'rhin',
                                  _serviceId: '878100790201982976',
                                  _serviceTitle:
                                    '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
                                  params: 'object',
                                  actionTitle: '加载区县下拉框',
                                  apiRequestSetParams: [
                                    {
                                      code: 'header',
                                      name: '请求头参数',
                                      attrType: 'object',
                                      _id: 'header',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'header',
                                      dataKey: '307465_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '307465_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '307465_query',
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
                                          dataKey: '307465_body.includeParent',
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
                                          dataKey: '307465_body.parentRegionId',
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
                                      dataKey: '307465_body',
                                    },
                                  ],
                                },
                                line_number: 16,
                                callback1: [
                                  {
                                    type: 'reloadSelectData',
                                    dataId: 166314160493839840,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_areaId_105236',
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'Select',
                                      id: '7564495',
                                      data: '$reply_307465?.resultData$',
                                      labelKey: 'regionName',
                                      valueKey: 'regionId',
                                    },
                                    line_number: 17,
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
    eventDatacustomActionCode308.params = [] || [];
    CMDGenerator(eventDatacustomActionCode308, {}, 'customActionCode', {
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
              relationDataSource={data?.dcPostInfo}
              formItemIndex={9}
              busiObjectId={'884641929424756737'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource303: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166254242385352300,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '476056',
                      pageJsonId: 31,
                      dataSourceId: 166254239728513600,
                      dataSourceName: 'dcPostInfo',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '7998157',
                          code: 'postId',
                          name: '岗位id',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '1067796',
                          code: 'postCode',
                          name: '岗位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'postCode',
                          },
                        },
                        {
                          attrId: '1670304',
                          code: 'postName',
                          name: '岗位名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'postName',
                          },
                        },
                        {
                          attrId: '283228',
                          code: 'postDesc',
                          name: '岗位描述',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'postDesc',
                          },
                        },
                        {
                          attrId: '927772',
                          code: 'provinceId',
                          name: '省份id',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'provinceId',
                          },
                        },
                        {
                          attrId: '8206618',
                          code: 'lanId',
                          name: '地市id',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'lanId',
                          },
                        },
                        {
                          attrId: '197135',
                          code: 'areaId',
                          name: '区县id',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'areaId',
                          },
                        },
                        {
                          attrId: '249991',
                          code: 'statusCd',
                          name: '状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'statusCd',
                          },
                        },
                        {
                          attrId: '8087615',
                          code: 'statusDate',
                          name: '状态时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '712843',
                          code: 'createStaff',
                          name: '创建人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '860897',
                          code: 'createStaffName',
                          name: '创建人名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '9366012',
                          code: 'createDate',
                          name: '创建时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '791758',
                          code: 'updateStaff',
                          name: '修改人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '282568',
                          code: 'updateDate',
                          name: '修改时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '8357553',
                          code: 'remark',
                          name: '备注',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'remark',
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
                eventDatasetDataSource303.params = [] || [];
                CMDGenerator(eventDatasetDataSource303, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_31_1121')}
              {...injectData}
            >
              <Input
                name={'岗位编码'}
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
                fieldName={'postCode'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.postCode}
                formItemIndex={0}
                regexp={[
                  {
                    id: '895751',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '只允许输入英文和数字',
                    pattern: '/^[a-zA-Z0-9_]{0,}$/',
                  },
                ]}
                maxLength={64}
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
                  id: 'Input_postCode_401732',
                  uid: 'Input_postCode_401732',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_postCode_401732')
                }
                {...injectData}
              />
              <Input
                name={'岗位名称'}
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
                fieldName={'postName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.postName}
                formItemIndex={1}
                maxLength={20}
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
                  id: 'Input_postName_587397',
                  uid: 'Input_postName_587397',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_postName_587397')
                }
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
                value={data?.dcPostInfo?.provinceId}
                formItemIndex={2}
                defaultValue={'350000'}
                disabled={false}
                visible={true}
                readOnly={false}
                dataSource={attrDataMap['PROVINCE_CODE']}
                $$componentItem={{
                  id: 'Input_provinceId_388796',
                  uid: 'Input_provinceId_388796',
                  type: 'Select',
                  ...componentItem,
                }}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue240: any = [
                    {
                      type: 'clearValue',
                      dataId: 166314036646580220,
                      options: {
                        compId: 'Input_lanId_5166484',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '521047462',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue240.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue240, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue241: any = [
                    {
                      type: 'clearValue',
                      dataId: 166314036961053440,
                      options: {
                        compId: 'Input_areaId_105236',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '278627',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue241.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue241, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse566: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '576789',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_provinceId_388796',
                        },
                      ],
                      dataId: 166314037424435550,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166314037581974560,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166314041751444640,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_lanId_5166484',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '654536',
                              },
                              actionObjId: 'Input_lanId_5166484',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 6,
                            },
                            {
                              dataName: 'action',
                              dataId: 166314042083678300,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '526754',
                              },
                              actionObjId: 'Input_areaId_105236',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          desc: '清空下拉框选项',
                          callback: [
                            {
                              type: 'clearOptions',
                              dataId: 166314041751444640,
                              options: {
                                compId: 'Input_lanId_5166484',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '654536',
                              },
                              line_number: 6,
                            },
                            {
                              type: 'clearOptions',
                              dataId: 166314042083678300,
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '526754',
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
                          dataId: 166314086829244770,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '9454774',
                            pageJsonId: 31,
                            sync: false,
                            actionTitle: '加载地市下拉框',
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
                                dataKey: '9454774_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '9454774_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '9454774_query',
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
                                    dataKey: '9454774_body.includeParent',
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
                                    dataKey: '9454774_body.parentRegionId',
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
                                dataKey: '9454774_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166314091621109700,
                              options: {
                                compId: 'Input_lanId_5166484',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '926698',
                                data: '$reply_9454774?.resultData$',
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
                  eventDataifelse566.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse566, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_provinceId_388796')
                }
                {...injectData}
              />
              <Select
                name={'岗位过滤类型'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={3}
                fieldName={'postFilterType'}
                value={data?.dcPostInfo?.postFilterType}
                $$componentItem={{
                  id: 'Select_82425973',
                  uid: 'Select_82425973',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_82425973')}
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
                value={data?.dcPostInfo?.lanId}
                formItemIndex={4}
                dataSource={attrDataMap['CITY_CODE']}
                $$componentItem={{
                  id: 'Input_lanId_5166484',
                  uid: 'Input_lanId_5166484',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue242: any = [
                    {
                      type: 'clearValue',
                      dataId: 166314104744653700,
                      options: {
                        compId: 'Input_areaId_105236',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '5810925',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue242.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue242, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatasetDisable173: any = [
                    {
                      type: 'setDisable',
                      dataId: 166332157462307600,
                      options: {
                        compId: 'Input_areaId_105236',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '2382533',
                        disabled: 'true',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable173.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDatasetDisable173, { e }, 'setDisable', {
                    id: 'setDisable',
                    name: 'setDisable',
                    type: 'setDisable',
                    platform: 'pc',
                  });
                  const eventDataifelse567: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '161248',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_lanId_5166484',
                        },
                      ],
                      dataId: 166314105100980770,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166314105206679870,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166314114852755740,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '7444469',
                              },
                              actionObjId: 'Input_areaId_105236',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          desc: '选中地市某个选项',
                          elseIfs: [],
                          callback: [
                            {
                              type: 'clearOptions',
                              dataId: 166314114852755740,
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '7444469',
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
                          dataId: 166314112329622900,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '110335',
                            pageJsonId: 31,
                            sync: false,
                            actionTitle: '加载区县下拉框',
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
                                dataKey: '110335_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '110335_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '110335_query',
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
                                    dataKey: '110335_body.includeParent',
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
                                    dataKey: '110335_body.parentRegionId',
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
                                dataKey: '110335_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166314118491856500,
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '62199',
                                data: '$reply_110335?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'setDisable',
                                  dataId: 166332158377396200,
                                  options: {
                                    compId: 'Input_areaId_105236',
                                    compLib: 'comm',
                                    pageJsonId: 31,
                                    compName: 'Select',
                                    id: '0172042',
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
                  eventDataifelse567.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse567, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_lanId_5166484')}
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
                fieldName={'statusCd'}
                value={data?.dcPostInfo?.statusCd}
                formItemIndex={5}
                dataSource={attrDataMap['STATUS_CD']}
                $$componentItem={{
                  id: 'Input_statusCd_968499',
                  uid: 'Input_statusCd_968499',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_statusCd_968499')
                }
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
                value={data?.dcPostInfo?.areaId}
                formItemIndex={6}
                $$componentItem={{
                  id: 'Input_areaId_105236',
                  uid: 'Input_areaId_105236',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_areaId_105236')}
                {...injectData}
              />
              <TextArea
                name={'岗位描述'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                readOnly={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'postDesc'}
                value={data?.dcPostInfo?.postDesc}
                formItemIndex={7}
                maxLength={170}
                $$componentItem={{
                  id: 'Input_postDesc_4542983',
                  uid: 'Input_postDesc_4542983',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_postDesc_4542983')
                }
                {...injectData}
              />
              <TextArea
                name={'备注'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                readOnly={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'remark'}
                value={data?.dcPostInfo?.remark}
                formItemIndex={8}
                maxLength={170}
                $$componentItem={{
                  id: 'Input_remark_0706266',
                  uid: 'Input_remark_0706266',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_remark_0706266')
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

export default withPageHOC(EditPostInfo$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', dcPostInfo: '' },
});
