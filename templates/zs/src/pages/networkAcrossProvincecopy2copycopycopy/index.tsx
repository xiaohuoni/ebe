// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1065466978933657600';
const NetworkAcrossProvincecopy2copycopycopy$$Modal: React.FC<PageProps> = ({
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
  const caluZ = (options_066371: any) => {
    const eventDatagetValue44: any = [
      {
        type: 'getValue',
        dataId: 170467857673429950,
        options: {
          compId: 'Input_522238',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '2164677',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170467858028079300,
            options: {
              compId: 'Input_447768',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '605153',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170467859418643680,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '700673',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var z=parseFloat(value_2164677);var s=parseFloat(value_605153);if(z!=null&&z!=undefined&&s!=null&&s!=undefined){var r=(z*s).toFixed(2);if(r!=NaN&&r!="NaN"){success(r)}}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 170467865773341860,
                    options: {
                      compId: 'Input_310029',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '865297',
                      valueList: { Input_310029: '$data_700673$' },
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue44.params =
      [
        {
          title: '事件入参',
          name: 'options_066371',
          value: '$options_066371$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue44, { options_066371 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    caluZ,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm28: any = [
      {
        type: 'validateCurrentForm',
        dataId: 170468210909291070,
        options: {
          compId: 'Form_7980266',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Form',
          id: '92501039',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170468211344241150,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1684311',
              pageJsonId: '8430824',
              dataSourceId: 166452624216490180,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'busiType',
                  name: '属性',
                  type: 'string',
                  attrId: '4838715',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'busiType',
                  },
                },
                {
                  code: 'busiTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '509373',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'productName',
                  name: '属性',
                  type: 'string',
                  attrId: '745607',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'city',
                  name: '属性',
                  type: 'string',
                  attrId: '07786',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'city',
                  },
                },
                {
                  code: 'county',
                  name: '属性',
                  type: 'string',
                  attrId: '63817',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'county',
                  },
                },
                {
                  code: 'town',
                  name: '属性',
                  type: 'string',
                  attrId: '641853',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'town',
                  },
                },
                {
                  code: 'street',
                  name: '属性',
                  type: 'string',
                  attrId: '503086',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'street',
                  },
                },
                {
                  code: 'number',
                  name: '属性',
                  type: 'string',
                  attrId: '252152',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'number',
                  },
                },
                {
                  code: 'building',
                  name: '属性',
                  type: 'string',
                  attrId: '1516637',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'building',
                  },
                },
                {
                  code: 'unitNumber',
                  name: '属性',
                  type: 'string',
                  attrId: '313661',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'unitNumber',
                  },
                },
                {
                  code: 'level',
                  name: '属性',
                  type: 'string',
                  attrId: '466016',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'level',
                  },
                },
                {
                  code: 'room',
                  name: '属性',
                  type: 'string',
                  attrId: '749042',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'room',
                  },
                },
                {
                  code: 'address',
                  name: '属性',
                  type: 'string',
                  attrId: '1230766',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'address',
                  },
                },
                {
                  code: 'product',
                  name: '属性',
                  type: 'string',
                  attrId: '2197367',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'product',
                  },
                },
                {
                  code: 'rowId',
                  name: '属性',
                  type: 'string',
                  attrId: '959566',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'rowId',
                  },
                },
                {
                  code: 'count',
                  name: '属性',
                  type: 'string',
                  attrId: '686993',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'count',
                  },
                },
                {
                  code: 'bandwidth',
                  name: '属性',
                  type: 'string',
                  attrId: '888786',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'bandwidth',
                  },
                },
                {
                  code: 'serviceLevel',
                  name: '属性',
                  type: 'string',
                  attrId: '8392915',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'serviceLevel',
                  },
                },
                {
                  code: 'serviceLevelName',
                  name: '属性',
                  type: 'string',
                  attrId: '289779',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'days',
                  name: '属性',
                  type: 'string',
                  attrId: '049508',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'days',
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
                type: 'customActionCode',
                dataId: 170468211344298500,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '133075',
                  pageJsonId: '8430824',
                  actionTitle: '',
                  code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}console.log("form:",Form_7980266);var form=Form_7980266;success(data.feeInfo)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 170468211344283260,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '1009504',
                      pageJsonId: '8430824',
                      params: '$data_133075$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 170468211344286460,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '953922',
                      pageJsonId: '8430824',
                    },
                    line_number: 5,
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
    eventDatavalidateCurrentForm28.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm28, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal17: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal17.params = [] || [];
    CMDGenerator(eventDatacloseModal17, {}, 'closeModal', {
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
    // console 170326943571530720
    console.log(state?.feeInfo);
    const eventDataapiRequest186: any = [
      {
        type: 'apiRequest',
        dataId: 170324353578554240,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '83058011',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '83058011_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '83058011_root.body.attrCode',
                      value: { type: ['customize'], code: 'busiType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '83058011_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
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
                  dataKey: '83058011_root.header',
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
                  dataKey: '83058011_root.path',
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
                  dataKey: '83058011_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '83058011_root',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170565280360951460,
            options: {
              compId: 'Select_884095',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '8904667',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_83058011?.resultData$',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest186.params = [] || [];
    CMDGenerator(eventDataapiRequest186, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest187: any = [
      {
        type: 'apiRequest',
        dataId: 170588754777290660,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '842148',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '842148_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '842148_root.body.attrCode',
                      value: { type: ['customize'], code: 'HANDLE_REGION_ID' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '842148_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
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
                  dataKey: '842148_root.header',
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
                  dataKey: '842148_root.path',
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
                  dataKey: '842148_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '842148_root',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170588760249608480,
            options: {
              compId: 'Input_5642353',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '228704',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_842148?.resultData$',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest187.params = [] || [];
    CMDGenerator(eventDataapiRequest187, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest188: any = [
      {
        type: 'apiRequest',
        dataId: 170588927609075200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4856704',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '4856704_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '4856704_root.body.attrCode',
                      value: { type: ['customize'], code: 'productType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '4856704_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
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
                  dataKey: '4856704_root.header',
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
                  dataKey: '4856704_root.path',
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
                  dataKey: '4856704_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '4856704_root',
            },
          ],
        },
        line_number: 6,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170588929878542940,
            options: {
              compId: 'Select_74837894',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '7058634',
              data: '$reply_4856704?.resultData$',
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
    eventDataapiRequest188.params = [] || [];
    CMDGenerator(eventDataapiRequest188, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest189: any = [
      {
        type: 'apiRequest',
        dataId: 170588932620645730,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '7179516',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '7179516_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '7179516_root.body.attrCode',
                      value: { type: ['customize'], code: 'serviceLevel' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '7179516_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
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
                  dataKey: '7179516_root.header',
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
                  dataKey: '7179516_root.path',
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
                  dataKey: '7179516_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '7179516_root',
            },
          ],
        },
        line_number: 8,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170588984585300960,
            options: {
              compId: 'Select_581582',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '8170374',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_7179516?.resultData$',
            },
            line_number: 9,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest189.params = [] || [];
    CMDGenerator(eventDataapiRequest189, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse112: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '452131',
            options: { context: '$state.feeInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167386144145118720,
        elseIfs: [],
        line_number: 10,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170468282764722370,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '945211',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){data.feeInfo=state.feeInfo;success()};',
              actionTitle: '设置数据源值',
            },
            line_number: 11,
            callback1: [
              {
                type: 'setCurrentFormValues',
                dataId: 170468283248904350,
                options: {
                  compId: 'Form_7980266',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Form',
                  id: '2916685',
                  params: '$state.feeInfo$',
                },
                line_number: 12,
              },
              {
                type: 'apiRequest',
                dataId: 170589111278060860,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '850419',
                  pageJsonId: '8430824',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'SYS_qryRegionListByParentId',
                  _apiCode: 'qryRegionListByParentId',
                  _source: 'rhin',
                  _sourceName: '根据父区域ID查询所有子区域-tsm',
                  _serviceId: '878100790201982976',
                  _serviceTitle:
                    '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                          dataKey: '850419_root.header',
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
                          dataKey: '850419_root.path',
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
                          dataKey: '850419_root.query',
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
                              _id: 'root.body.includeParent',
                              compType: 'Input',
                              name: 'includeParent',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.includeParent',
                              dataKey: '850419_root.body.includeParent',
                            },
                            {
                              code: 'parentRegionId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'root.body.parentRegionId',
                              compType: 'Input',
                              name: 'parentRegionId',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.parentRegionId',
                              dataKey: '850419_root.body.parentRegionId',
                              value: {
                                type: ['context', '$state.feeInfo$'],
                                code: 'county',
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
                          dataKey: '850419_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '850419_root',
                    },
                  ],
                },
                line_number: 13,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 170589111278059500,
                    options: {
                      compId: 'Input_8904927',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '546653',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                      data: '$reply_850419?.resultData$',
                    },
                    line_number: 14,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'apiRequest',
                dataId: 170589114828357700,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '163293',
                  pageJsonId: '8430824',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'SYS_qryRegionListByParentId',
                  _apiCode: 'qryRegionListByParentId',
                  _source: 'rhin',
                  _sourceName: '根据父区域ID查询所有子区域-tsm',
                  _serviceId: '878100790201982976',
                  _serviceTitle:
                    '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                          dataKey: '163293_root.header',
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
                          dataKey: '163293_root.path',
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
                          dataKey: '163293_root.query',
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
                              _id: 'root.body.includeParent',
                              compType: 'Input',
                              name: 'includeParent',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.includeParent',
                              dataKey: '163293_root.body.includeParent',
                            },
                            {
                              code: 'parentRegionId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'root.body.parentRegionId',
                              compType: 'Input',
                              name: 'parentRegionId',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.parentRegionId',
                              dataKey: '163293_root.body.parentRegionId',
                              value: {
                                type: ['context', '$state.feeInfo$'],
                                code: 'city',
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
                          dataKey: '163293_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '163293_root',
                    },
                  ],
                },
                line_number: 15,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 170589114828373280,
                    options: {
                      compId: 'Input_899682',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '873161',
                      data: '$reply_163293?.resultData$',
                      valueKey: 'regionId',
                      labelKey: 'regionName',
                    },
                    line_number: 16,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '074357',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.isDetails$',
                  operate: '==',
                  manualValue: 'true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169934962822190980,
            elseIfs: [],
            line_number: 17,
            callback1: [
              {
                type: 'sysSetDisable',
                dataId: 169934962822120320,
                options: {
                  compId: ['Form_981467', 'Form_7980266'],
                  compName: 'page',
                  id: '854506',
                  pageJsonId: '8430824',
                  disabled: 'true',
                  compid: ['Form_981467', 'Form_7980266'],
                },
                line_number: 18,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse112.params = [] || [];
    CMDGenerator(eventDataifelse112, {}, 'ifelse', {
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
      className="__CustomClass_8430824__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_8430824_1',
          uid: 'View_8430824_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_8430824_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911',
            uid: 'View_917911',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_917911')}
          {...injectData}
        >
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={'8'}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_449441'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.feeInfo}
            busiObjectId={''}
            formColumns={[
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '动作',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'action',
                  value: data?.factorForm?.action,
                  formItemIndex: 8,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_action_124461',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理商名称',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'agentName',
                  value: data?.factorForm?.agentName,
                  formItemIndex: 9,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_agentName_3011749',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '法人代表',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'legalRep',
                  value: data?.factorForm?.legalRep,
                  formItemIndex: 10,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_legalRep_4905766',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '续签合约日期',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'contractTime',
                  value: data?.factorForm?.contractTime,
                  formItemIndex: 11,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_contractTime_637706',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '电话',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'phone',
                  value: data?.factorForm?.phone,
                  formItemIndex: 12,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_phone_089928',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理业务范围',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'busiScope',
                  value: data?.factorForm?.busiScope,
                  formItemIndex: 13,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_busiScope_198144',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '业绩评估',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'performance',
                  value: data?.factorForm?.performance,
                  formItemIndex: 14,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_performance_8186807',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '申请原因',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'reason',
                  value: data?.factorForm?.reason,
                  formItemIndex: 15,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_reason_4525674',
              },
            ]}
            formItemIndex={1}
            $$componentItem={{
              id: 'Form_7980266',
              uid: 'Form_7980266',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource94: any = [
                {
                  type: 'setDataSource',
                  dataId: 170467931079868400,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '435672',
                    pageJsonId: '8430824',
                    dataSourceId: 166452624216490180,
                    dataSourceName: 'feeInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '959566',
                        code: 'rowId',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static', value: '' },
                        showInput: true,
                        parentKey: '1',
                        parentType: 'object',
                        _idpath: ['959566'],
                      },
                      {
                        code: 'serviceLevel',
                        name: '属性',
                        type: 'string',
                        attrId: '8392915',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['8392915'],
                      },
                      {
                        code: 'count',
                        name: '属性',
                        type: 'string',
                        attrId: '686993',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['686993'],
                      },
                      {
                        code: 'number',
                        name: '属性',
                        type: 'string',
                        attrId: '252152',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['252152'],
                      },
                      {
                        code: 'town',
                        name: '属性',
                        type: 'string',
                        attrId: '641853',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['641853'],
                      },
                      {
                        code: 'room',
                        name: '属性',
                        type: 'string',
                        attrId: '749042',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['749042'],
                      },
                      {
                        code: 'unitNumber',
                        name: '属性',
                        type: 'string',
                        attrId: '313661',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['313661'],
                      },
                      {
                        code: 'level',
                        name: '属性',
                        type: 'string',
                        attrId: '466016',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['466016'],
                      },
                      {
                        code: 'days',
                        name: '属性',
                        type: 'string',
                        attrId: '049508',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['049508'],
                      },
                      {
                        code: 'address',
                        name: '属性',
                        type: 'string',
                        attrId: '1230766',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['1230766'],
                      },
                      {
                        code: 'building',
                        name: '属性',
                        type: 'string',
                        attrId: '1516637',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['1516637'],
                      },
                      {
                        code: 'product',
                        name: '属性',
                        type: 'string',
                        attrId: '2197367',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['2197367'],
                      },
                      {
                        code: 'bandwidth',
                        name: '属性',
                        type: 'string',
                        attrId: '888786',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['888786'],
                      },
                      {
                        code: 'county',
                        name: '属性',
                        type: 'string',
                        attrId: '63817',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['63817'],
                      },
                      {
                        code: 'city',
                        name: '属性',
                        type: 'string',
                        attrId: '07786',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['07786'],
                      },
                      {
                        code: 'street',
                        name: '属性',
                        type: 'string',
                        attrId: '503086',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['503086'],
                      },
                      {
                        code: 'busiType',
                        name: '属性',
                        type: 'string',
                        attrId: '4838715',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _idpath: ['4838715'],
                      },
                      {
                        code: 'serviceLevelName',
                        name: '属性',
                        type: 'string',
                        attrId: '289779',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['serviceLevelName'],
                        _idpath: ['289779'],
                      },
                      {
                        code: 'busiTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '509373',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['busiTypeName'],
                        _idpath: ['509373'],
                      },
                      {
                        code: 'productName',
                        name: '属性',
                        type: 'string',
                        attrId: '745607',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['productName'],
                        _idpath: ['745607'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource94.params =
                [
                  {
                    title: '表单当前改变字段编码',
                    name: 'changedFieldName',
                    value: '$changedFieldName$',
                  },
                  {
                    title: '表单当前改变字段值',
                    name: 'changedValue',
                    value: '$changedValue$',
                  },
                ] || [];
              CMDGenerator(
                eventDatasetDataSource94,
                { changedFieldName, changedValue },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_7980266')}
            {...injectData}
          >
            <Select
              name={'业务类型'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'busiType'}
              formItemIndex={0}
              allowClear={false}
              $$componentItem={{
                id: 'Select_884095',
                uid: 'Select_884095',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData161: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170588992370666020,
                    options: {
                      compId: 'Select_884095',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '0842008',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170588992769389820,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '816014',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'busiType',
                              name: '属性',
                              type: 'string',
                              attrId: '4838715',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_0842008[0]$'],
                                code: 'value',
                              },
                            },
                            {
                              code: 'busiTypeName',
                              name: '属性',
                              type: 'string',
                              attrId: '509373',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_0842008[0]$'],
                                code: 'label',
                              },
                            },
                            {
                              code: 'productName',
                              name: '属性',
                              type: 'string',
                              attrId: '745607',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'city',
                              name: '属性',
                              type: 'string',
                              attrId: '07786',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'county',
                              name: '属性',
                              type: 'string',
                              attrId: '63817',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'town',
                              name: '属性',
                              type: 'string',
                              attrId: '641853',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'street',
                              name: '属性',
                              type: 'string',
                              attrId: '503086',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'number',
                              name: '属性',
                              type: 'string',
                              attrId: '252152',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'building',
                              name: '属性',
                              type: 'string',
                              attrId: '1516637',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'unitNumber',
                              name: '属性',
                              type: 'string',
                              attrId: '313661',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'level',
                              name: '属性',
                              type: 'string',
                              attrId: '466016',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'room',
                              name: '属性',
                              type: 'string',
                              attrId: '749042',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'address',
                              name: '属性',
                              type: 'string',
                              attrId: '1230766',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'product',
                              name: '属性',
                              type: 'string',
                              attrId: '2197367',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'rowId',
                              name: '属性',
                              type: 'string',
                              attrId: '959566',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'count',
                              name: '属性',
                              type: 'string',
                              attrId: '686993',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'bandwidth',
                              name: '属性',
                              type: 'string',
                              attrId: '888786',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'serviceLevel',
                              name: '属性',
                              type: 'string',
                              attrId: '8392915',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'serviceLevelName',
                              name: '属性',
                              type: 'string',
                              attrId: '289779',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'days',
                              name: '属性',
                              type: 'string',
                              attrId: '049508',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData161.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData161,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_884095')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={'8'}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_664036',
                uid: 'View_664036',
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
                  formItemIndex: 1,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_664036')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={'8'}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_357167',
                uid: 'View_357167',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_357167')}
              {...injectData}
            />
            <Select
              name={'地市'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'city'}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_5642353',
                uid: 'Input_5642353',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData162: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170588790448092860,
                    options: {
                      compId: 'Input_5642353',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '8207657',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 170588870587745920,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '615435',
                          pageJsonId: '8430824',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'SYS_qryRegionListByParentId',
                          _apiCode: 'qryRegionListByParentId',
                          _source: 'rhin',
                          _sourceName: '根据父区域ID查询所有子区域-tsm',
                          _serviceId: '878100790201982976',
                          _serviceTitle:
                            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                  dataKey: '615435_root.header',
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
                                  dataKey: '615435_root.path',
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
                                  dataKey: '615435_root.query',
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
                                      _id: 'root.body.includeParent',
                                      compType: 'Input',
                                      name: 'includeParent',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.includeParent',
                                      dataKey: '615435_root.body.includeParent',
                                    },
                                    {
                                      code: 'parentRegionId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'root.body.parentRegionId',
                                      compType: 'Input',
                                      name: 'parentRegionId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                      id: 'root.body.parentRegionId',
                                      dataKey:
                                        '615435_root.body.parentRegionId',
                                      value: {
                                        type: [
                                          'context',
                                          '$selectedData_8207657[0]$',
                                        ],
                                        code: 'value',
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
                                  dataKey: '615435_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '615435_root',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 170588880941645060,
                            options: {
                              compId: 'Input_899682',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '1263965',
                              data: '$reply_615435?.resultData$',
                              valueKey: 'regionId',
                              labelKey: 'regionName',
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData162.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData162,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5642353')}
              {...injectData}
            />
            <Select
              name={'区县'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'county'}
              formItemIndex={4}
              $$componentItem={{
                id: 'Input_899682',
                uid: 'Input_899682',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData163: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170588886285498530,
                    options: {
                      compId: 'Input_899682',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '406694',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 170588887071091100,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '472644',
                          pageJsonId: '8430824',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'SYS_qryRegionListByParentId',
                          _apiCode: 'qryRegionListByParentId',
                          _source: 'rhin',
                          _sourceName: '根据父区域ID查询所有子区域-tsm',
                          _serviceId: '878100790201982976',
                          _serviceTitle:
                            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                  dataKey: '472644_root.header',
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
                                  dataKey: '472644_root.path',
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
                                  dataKey: '472644_root.query',
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
                                      _id: 'root.body.includeParent',
                                      compType: 'Input',
                                      name: 'includeParent',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.includeParent',
                                      dataKey: '472644_root.body.includeParent',
                                    },
                                    {
                                      code: 'parentRegionId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'root.body.parentRegionId',
                                      compType: 'Input',
                                      name: 'parentRegionId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                      id: 'root.body.parentRegionId',
                                      dataKey:
                                        '472644_root.body.parentRegionId',
                                      value: {
                                        type: [
                                          'context',
                                          '$selectedData_406694[0]$',
                                        ],
                                        code: 'value',
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
                                  dataKey: '472644_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '472644_root',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 170588888089140160,
                            options: {
                              compId: 'Input_8904927',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '809953',
                              labelKey: 'regionName',
                              valueKey: 'regionId',
                              data: '$reply_472644?.resultData$',
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData163.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData163,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_899682')}
              {...injectData}
            />
            <Select
              name={'街道/乡/镇'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'town'}
              formItemIndex={5}
              $$componentItem={{
                id: 'Input_8904927',
                uid: 'Input_8904927',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8904927')}
              {...injectData}
            />
            <Input
              name={'街/村'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'street'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={6}
              regexp={[]}
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
                id: 'Input_522238',
                uid: 'Input_522238',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_522238')}
              {...injectData}
            />
            <Input
              name={'号/弄'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'number'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={7}
              regexp={[]}
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
                id: 'Input_69556',
                uid: 'Input_69556',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_69556')}
              {...injectData}
            />
            <Input
              name={'楼宇/单元'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'building'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={8}
              regexp={[]}
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
                id: 'Input_447768',
                uid: 'Input_447768',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_447768')}
              {...injectData}
            />
            <Input
              name={'单元楼号'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'unitNumber'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={9}
              regexp={[]}
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
                id: 'Input_431989',
                uid: 'Input_431989',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_431989')}
              {...injectData}
            />
            <Input
              name={'层号'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'level'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={10}
              regexp={[]}
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
                id: 'Input_722694',
                uid: 'Input_722694',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_722694')}
              {...injectData}
            />
            <Input
              name={'房间号'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'room'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={11}
              regexp={[]}
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
                id: 'Input_208306',
                uid: 'Input_208306',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_208306')}
              {...injectData}
            />
            <Input
              name={'安装地址'}
              size={'default'}
              selfSpan={24}
              labelCol={'3'}
              wrapperCol={21}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'address'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={12}
              regexp={[]}
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
                id: 'Input_061865',
                uid: 'Input_061865',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_061865')}
              {...injectData}
            />
            <Select
              name={'产品'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'product'}
              formItemIndex={13}
              allowClear={false}
              $$componentItem={{
                id: 'Select_74837894',
                uid: 'Select_74837894',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_74837894')}
              {...injectData}
            />
            <Input
              name={'条数'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'count'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={14}
              regexp={[
                {
                  id: '594959135',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
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
                id: 'Input_792709',
                uid: 'Input_792709',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_792709')}
              {...injectData}
            />
            <Input
              name={'带宽'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'bandwidth'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={15}
              regexp={[]}
              postfix={'M'}
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
                id: 'Input_704213',
                uid: 'Input_704213',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_704213')}
              {...injectData}
            />
            <Select
              name={'业务保障等级'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'serviceLevel'}
              formItemIndex={16}
              allowClear={false}
              $$componentItem={{
                id: 'Select_581582',
                uid: 'Select_581582',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_581582')}
              {...injectData}
            />
            <Input
              name={'时长'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'days'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={17}
              regexp={[]}
              postfix={'天'}
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
                id: 'Input_110038',
                uid: 'Input_110038',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_110038')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopy2copycopycopy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
    isDetails: '',
  },
});
