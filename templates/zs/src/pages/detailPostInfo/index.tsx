// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Input,
  Select,
  TextArea,
  TimePicker,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '886805014632988672';
const DetailPostInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatacloseModal98: any = [
      {
        type: 'closeModal',
        dataId: 166303748468918880,
        options: { compId: 'page', compName: 'page', id: '671706' },
        line_number: 1,
      },
    ];
    eventDatacloseModal98.params = [] || [];
    CMDGenerator(eventDatacloseModal98, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal99: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal99.params = [] || [];
    CMDGenerator(eventDatacloseModal99, {}, 'closeModal', {
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
    const eventDatacustomActionCode303: any = [
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
        line_number: 1,
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
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 166314429391947140,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '7823344',
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
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
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
                line_number: 3,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166314429391988540,
                    options: {
                      compId: 'Input_areaId_105236',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '8763653',
                      data: '$reply_7823344?.resultData$',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'apiRequest',
                dataId: 166314220001493660,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '899912',
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
                line_number: 5,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166314220001443840,
                    shielding: true,
                    options: {
                      compId: 'Input_provinceId_388796',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '869798',
                      data: '$reply_899912?.resultData$',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166314220001417400,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '4652424',
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
                        line_number: 7,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 166314220001458600,
                            shielding: true,
                            options: {
                              compId: 'Input_lanId_5166484',
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'Select',
                              id: '186265',
                              data: '$reply_4652424?.resultData$',
                              labelKey: 'regionName',
                              valueKey: 'regionId',
                            },
                            line_number: 8,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 166314220001492260,
                                shielding: true,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '877767',
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
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'reloadSelectData',
                                    dataId: 166314220001404580,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_areaId_105236',
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'Select',
                                      id: '1812116',
                                      data: '$reply_877767?.resultData$',
                                      labelKey: 'regionName',
                                      valueKey: 'regionId',
                                    },
                                    line_number: 10,
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
    eventDatacustomActionCode303.params = [] || [];
    CMDGenerator(eventDatacustomActionCode303, {}, 'customActionCode', {
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
                const eventDatasetDataSource298: any = [
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
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
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
                        },
                        {
                          attrId: '860897',
                          code: 'createStaffName',
                          name: '创建人名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
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
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
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
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
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
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
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
                eventDatasetDataSource298.params = [] || [];
                CMDGenerator(eventDatasetDataSource298, {}, 'setDataSource', {
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
                dataSource={attrDataMap['PROVINCE_CODE']}
                $$componentItem={{
                  id: 'Input_provinceId_388796',
                  uid: 'Input_provinceId_388796',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue227: any = [
                    {
                      type: 'clearValue',
                      dataId: 166314230069458660,
                      options: {
                        compId: 'Input_lanId_5166484',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '689491',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue227.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue227, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue228: any = [
                    {
                      type: 'clearValue',
                      dataId: 166314242523731200,
                      options: {
                        compId: 'Input_areaId_105236',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '4185891',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue228.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue228, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse558: any = [
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
                      dataId: 166314245671555700,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166314245671580260,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166314245671506050,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_lanId_5166484',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '936987',
                              },
                              actionObjId: 'Input_lanId_5166484',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 6,
                            },
                            {
                              dataName: 'action',
                              dataId: 166314245671599870,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '2352244',
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
                              dataId: 166314245671506050,
                              options: {
                                compId: 'Input_lanId_5166484',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '936987',
                              },
                              line_number: 6,
                            },
                            {
                              type: 'clearOptions',
                              dataId: 166314245671599870,
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '2352244',
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
                          dataId: 166314245671503650,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '6136657',
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
                              dataId: 166314245671599040,
                              options: {
                                compId: 'Input_lanId_5166484',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '88471',
                                data: '$reply_6136657?.resultData$',
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
                  eventDataifelse558.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse558, { e }, 'ifelse', {
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
                formItemIndex={3}
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
                  const eventDataclearValue229: any = [
                    {
                      type: 'clearValue',
                      dataId: 166314248902421060,
                      options: {
                        compId: 'Input_areaId_105236',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '9330837',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue229.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue229, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse559: any = [
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
                      dataId: 166314252624652770,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166314252624613280,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166314252624649340,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '087326',
                              },
                              actionObjId: 'Input_areaId_105236',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          desc: '选中地市某个选项',
                          elseIfs: [],
                          callback: [
                            {
                              type: 'clearOptions',
                              dataId: 166314252624649340,
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '087326',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166314252624642780,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '235641',
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
                          line_number: 3,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166314252624634720,
                              options: {
                                compId: 'Input_areaId_105236',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '69222',
                                data: '$reply_235641?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 4,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse559.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse559, { e }, 'ifelse', {
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
                formItemIndex={4}
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
                formItemIndex={6}
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
                formItemIndex={7}
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
              <Input
                name={'创建人名称'}
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
                fieldName={'createStaffName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.createStaffName}
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
                  id: 'Input_createStaffName_730721',
                  uid: 'Input_createStaffName_730721',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_createStaffName_730721')
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
                fieldName={'createDate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.createDate}
                formItemIndex={9}
                $$componentItem={{
                  id: 'TimePicker_createDate_74093',
                  uid: 'TimePicker_createDate_74093',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_createDate_74093')
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
                fieldName={'updateStaff'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.updateStaff}
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
                  id: 'Input_updateStaff_179178',
                  uid: 'Input_updateStaff_179178',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_updateStaff_179178')
                }
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
                fieldName={'updateDate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.updateDate}
                formItemIndex={11}
                $$componentItem={{
                  id: 'TimePicker_updateDate_944627',
                  uid: 'TimePicker_updateDate_944627',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_updateDate_944627')
                }
                {...injectData}
              />
              <TimePicker
                name={'状态时间'}
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
                fieldName={'statusDate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcPostInfo?.statusDate}
                formItemIndex={12}
                $$componentItem={{
                  id: 'TimePicker_statusDate_097699',
                  uid: 'TimePicker_statusDate_097699',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_statusDate_097699')
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

export default withPageHOC(DetailPostInfo$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', dcPostInfo: '' },
});
