// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '884694349495664640';
const AddPostInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm25: any = [
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
              _serviceId: '884706354768117760',
              _serviceTitle: '新增岗位信息: addDcPostInfo',
              params: 'object',
              _capabilityCode: 'addDcPostInfo',
              _apiCode: 'addDcPostInfo',
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
                    },
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
    eventDatavalidateCurrentForm25.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm25, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal14: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal14.params = [] || [];
    CMDGenerator(eventDatacloseModal14, {}, 'closeModal', {
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
    const eventDataapiRequest175: any = [
      {
        type: 'apiRequest',
        dataId: 166313769420961180,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '551403',
          pageJsonId: 31,
          sync: false,
          actionTitle: '加载省地市下拉框',
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
              dataKey: '551403_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '551403_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '551403_query',
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
                  dataKey: '551403_body.includeParent',
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
                  dataKey: '551403_body.parentRegionId',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '551403_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'clearOptions',
            dataId: 166314489161101440,
            options: {
              compId: 'Input_areaId_103154',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '638431',
            },
            line_number: 2,
          },
          {
            type: 'reloadSelectData',
            dataId: 166313778353466270,
            shielding: true,
            options: {
              compId: 'Input_provinceId_393058',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '415526',
              data: '$reply_551403?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 3,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 166313875453973980,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '454695',
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
                      dataKey: '0966523_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '0966523_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '0966523_query',
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
                          dataKey: '0966523_body.includeParent',
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
                          dataKey: '0966523_body.parentRegionId',
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'provinceId',
                          },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '0966523_body',
                    },
                  ],
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166313875453945920,
                    shielding: true,
                    options: {
                      compId: 'Input_lanId_280023',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '7056063',
                      data: '$reply_454695?.resultData$',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                    },
                    line_number: 5,
                    callback1: [
                      {
                        type: 'clearOptions',
                        dataId: 166313898079880220,
                        shielding: true,
                        options: {
                          compId: 'Input_areaId_103154',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '973096',
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
          {
            type: 'setDisable',
            dataId: 166337850340877920,
            options: {
              compId: 'Input_areaId_103154',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '303482',
              disabled: 'true',
            },
            line_number: 7,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest175.params = [] || [];
    CMDGenerator(eventDataapiRequest175, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest176: any = [
      {
        type: 'apiRequest',
        dataId: 166929037744268540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '492999',
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
              dataKey: '492999_header',
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
                  dataKey: '492999_path.attrCode',
                  value: { type: ['customize'], code: 'POST_FILTER_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '492999_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '492999_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '492999_body',
            },
          ],
        },
        line_number: 8,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166929042082016450,
            options: {
              compId: 'Select_036437',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '9607393',
              data: '$reply_492999?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 9,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest176.params = [] || [];
    CMDGenerator(eventDataapiRequest176, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
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
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
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
              relationDataSource={''}
              formItemIndex={9}
              busiObjectId={''}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {}}
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
                required={true}
                placeholder={'请输入'}
                fieldName={'postCode'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                formItemIndex={0}
                maxLength={64}
                regexp={[
                  {
                    id: '16946',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '只允许输入英文和数字',
                    pattern: '/^[a-zA-Z0-9_]{0,}$/',
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
                  id: 'Input_postCode_222213',
                  uid: 'Input_postCode_222213',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_postCode_222213')
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
                required={true}
                placeholder={'请输入'}
                fieldName={'postName'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
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
                  id: 'Input_postName_813035',
                  uid: 'Input_postName_813035',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_postName_813035')
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
                formItemIndex={2}
                defaultValue={'350000'}
                dataSource={attrDataMap['PROVINCE_CODE']}
                $$componentItem={{
                  id: 'Input_provinceId_393058',
                  uid: 'Input_provinceId_393058',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue86: any = [
                    {
                      type: 'clearValue',
                      dataId: 166313801729654140,
                      options: {
                        compId: 'Input_lanId_280023',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '274185',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue86.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue86, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue87: any = [
                    {
                      type: 'clearValue',
                      dataId: 166313842786605000,
                      options: {
                        compId: 'Input_areaId_103154',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '858585',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue87.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue87, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse401: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '2039932',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_provinceId_393058',
                        },
                      ],
                      dataId: 166313803655733120,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166313843326027260,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166313844319605150,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_lanId_280023',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '017922',
                              },
                              actionObjId: 'Input_lanId_280023',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 6,
                            },
                            {
                              dataName: 'action',
                              dataId: 166313844777260000,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_areaId_103154',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '6507477',
                              },
                              actionObjId: 'Input_areaId_103154',
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
                              dataId: 166313844319605150,
                              options: {
                                compId: 'Input_lanId_280023',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '017922',
                              },
                              line_number: 6,
                            },
                            {
                              type: 'clearOptions',
                              dataId: 166313844777260000,
                              options: {
                                compId: 'Input_areaId_103154',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '6507477',
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
                          dataId: 166313810916299400,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '0966523',
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
                                dataKey: '0966523_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '0966523_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '0966523_query',
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
                                    dataKey: '0966523_body.includeParent',
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
                                    dataKey: '0966523_body.parentRegionId',
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
                                dataKey: '0966523_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166313815590379940,
                              options: {
                                compId: 'Input_lanId_280023',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '045775',
                                data: '$reply_0966523?.resultData$',
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
                  eventDataifelse401.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse401, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_provinceId_393058')
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
                $$componentItem={{
                  id: 'Select_036437',
                  uid: 'Select_036437',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_036437')}
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
                formItemIndex={4}
                dataSource={attrDataMap['CITY_CODE']}
                $$componentItem={{
                  id: 'Input_lanId_280023',
                  uid: 'Input_lanId_280023',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue88: any = [
                    {
                      type: 'clearValue',
                      dataId: 166313827695928200,
                      options: {
                        compId: 'Input_areaId_103154',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '298611',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue88.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue88, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse402: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '942011',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_lanId_280023',
                        },
                      ],
                      dataId: 166313829370023900,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166313829798392860,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166313840861276540,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_areaId_103154',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '943325',
                              },
                              actionObjId: 'Input_areaId_103154',
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
                              dataId: 166313840861276540,
                              options: {
                                compId: 'Input_areaId_103154',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '943325',
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 166337852848953000,
                          options: {
                            compId: 'Input_areaId_103154',
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Select',
                            id: '93921',
                            disabled: 'true',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166313832826805730,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '0283982',
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
                                dataKey: '0283982_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '0283982_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '0283982_query',
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
                                    dataKey: '0283982_body.includeParent',
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
                                    dataKey: '0283982_body.parentRegionId',
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
                                dataKey: '0283982_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166313836469807400,
                              options: {
                                compId: 'Input_areaId_103154',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '104942',
                                data: '$reply_0283982?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'setDisable',
                                  dataId: 166337854894403620,
                                  options: {
                                    compId: 'Input_areaId_103154',
                                    compLib: 'comm',
                                    pageJsonId: 31,
                                    compName: 'Select',
                                    id: '2046464',
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
                  eventDataifelse402.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse402, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_lanId_280023')}
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
                required={true}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'statusCd'}
                formItemIndex={5}
                defaultValue={'00A'}
                dataSource={attrDataMap['STATUS_CD']}
                $$componentItem={{
                  id: 'Input_statusCd_250547',
                  uid: 'Input_statusCd_250547',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_statusCd_250547')
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
                formItemIndex={6}
                $$componentItem={{
                  id: 'Input_areaId_103154',
                  uid: 'Input_areaId_103154',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_areaId_103154')}
                {...injectData}
              />
              <TextArea
                name={'岗位描述'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'postDesc'}
                formItemIndex={7}
                maxLength={170}
                $$componentItem={{
                  id: 'Input_postDesc_00867',
                  uid: 'Input_postDesc_00867',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_postDesc_00867')
                }
                {...injectData}
              />
              <TextArea
                name={'备注'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'remark'}
                formItemIndex={8}
                maxLength={170}
                $$componentItem={{
                  id: 'Input_remark_773047',
                  uid: 'Input_remark_773047',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_remark_773047')}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AddPostInfo$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', dcHrAct: '' },
});
