// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '900572788518785024';
const Guigeshuxingxiangqing3867$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse320: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '857445',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166632049853731140,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'closeModal',
            dataId: 166632051117559300,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '9471005',
              pageJsonId: '348001',
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse320.params = [] || [];
    CMDGenerator(eventDataifelse320, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse321: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '857445',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'A',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166631982645577100,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166631988236198720,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '1954242',
              pageJsonId: '348001',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'addAttrSpec',
              _apiCode: 'addAttrSpec',
              _source: 'rhin',
              _serviceId: '880056003999580160',
              _serviceTitle: '添加规格属性-tsm: addAttrSpec',
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
                  dataKey: '1954242_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '1954242_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '1954242_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrName',
                      compType: 'Input',
                      name: 'attrName',
                      parents: ['body'],
                      id: 'body.attrName',
                      dataKey: '1954242_body.attrName',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrName',
                      },
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['body'],
                      id: 'body.attrCode',
                      dataKey: '1954242_body.attrCode',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrCode',
                      },
                    },
                    {
                      code: 'attrValueType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueType',
                      compType: 'Input',
                      name: 'attrValueType',
                      parents: ['body'],
                      id: 'body.attrValueType',
                      dataKey: '1954242_body.attrValueType',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrValueType',
                      },
                    },
                    {
                      code: 'attrValueDataType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueDataType',
                      compType: 'Input',
                      name: 'attrValueDataType',
                      parents: ['body'],
                      id: 'body.attrValueDataType',
                      dataKey: '1954242_body.attrValueDataType',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrValueDataType',
                      },
                    },
                    {
                      code: 'attrUnit',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrUnit',
                      compType: 'Input',
                      name: 'attrUnit',
                      parents: ['body'],
                      id: 'body.attrUnit',
                      dataKey: '1954242_body.attrUnit',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrUnit',
                      },
                    },
                    {
                      code: 'attrDefaultValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrDefaultValue',
                      compType: 'Input',
                      name: 'attrDefaultValue',
                      parents: ['body'],
                      id: 'body.attrDefaultValue',
                      dataKey: '1954242_body.attrDefaultValue',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrDefaultValue',
                      },
                    },
                    {
                      code: 'attrDesc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrDesc',
                      compType: 'Input',
                      name: 'attrDesc',
                      parents: ['body'],
                      id: 'body.attrDesc',
                      dataKey: '1954242_body.attrDesc',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrDesc',
                      },
                    },
                    {
                      code: 'minValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.minValue',
                      compType: 'Input',
                      name: 'minValue',
                      parents: ['body'],
                      id: 'body.minValue',
                      dataKey: '1954242_body.minValue',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'minValue',
                      },
                    },
                    {
                      code: 'maxValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.maxValue',
                      compType: 'Input',
                      name: 'maxValue',
                      parents: ['body'],
                      id: 'body.maxValue',
                      dataKey: '1954242_body.maxValue',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'maxValue',
                      },
                    },
                    {
                      code: 'isRequired',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isRequired',
                      compType: 'Input',
                      name: 'isRequired',
                      parents: ['body'],
                      id: 'body.isRequired',
                      dataKey: '1954242_body.isRequired',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isRequired',
                      },
                    },
                    {
                      code: 'isReadonly',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isReadonly',
                      compType: 'Input',
                      name: 'isReadonly',
                      parents: ['body'],
                      id: 'body.isReadonly',
                      dataKey: '1954242_body.isReadonly',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isReadonly',
                      },
                    },
                    {
                      code: 'isUnique',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isUnique',
                      compType: 'Input',
                      name: 'isUnique',
                      parents: ['body'],
                      id: 'body.isUnique',
                      dataKey: '1954242_body.isUnique',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isUnique',
                      },
                    },
                    {
                      code: 'isNullable',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isNullable',
                      compType: 'Input',
                      name: 'isNullable',
                      parents: ['body'],
                      id: 'body.isNullable',
                      dataKey: '1954242_body.isNullable',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isNullable',
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
                      dataKey: '1954242_body.remark',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '1954242_body',
                },
              ],
            },
            line_number: 4,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '6840515',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_1954242?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166632002598309600,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166632004014760670,
                    children: [],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                  },
                ],
                line_number: 5,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166632004649996480,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '5295433',
                      pageJsonId: '348001',
                      type: 'success',
                      value: '规格属性新增成功！',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166632007904597020,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '370874',
                      pageJsonId: '348001',
                    },
                    line_number: 7,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166632008391794300,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '940286',
                      pageJsonId: '348001',
                    },
                    line_number: 8,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse321.params = [] || [];
    CMDGenerator(eventDataifelse321, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse322: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '857445',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166631984830084100,
        elseIfs: [],
        line_number: 9,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166632009074531140,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '873532',
              pageJsonId: '348001',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'modAttrSpec',
              _apiCode: 'modAttrSpec',
              _source: 'rhin',
              _serviceId: '880653330660282368',
              _serviceTitle: '修改规格属性-tsm: modAttrSpec',
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
                  dataKey: '873532_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '873532_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '873532_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.attrId',
                      compType: 'Input',
                      name: 'attrId',
                      parents: ['body'],
                      id: 'body.attrId',
                      dataKey: '873532_body.attrId',
                      value: { type: ['context', '$state.attrId$'], code: '' },
                    },
                    {
                      code: 'attrName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrName',
                      compType: 'Input',
                      name: 'attrName',
                      parents: ['body'],
                      id: 'body.attrName',
                      dataKey: '873532_body.attrName',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrName',
                      },
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['body'],
                      id: 'body.attrCode',
                      dataKey: '873532_body.attrCode',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrCode',
                      },
                    },
                    {
                      code: 'attrValueType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueType',
                      compType: 'Input',
                      name: 'attrValueType',
                      parents: ['body'],
                      id: 'body.attrValueType',
                      dataKey: '873532_body.attrValueType',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrValueType',
                      },
                    },
                    {
                      code: 'attrValueDataType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueDataType',
                      compType: 'Input',
                      name: 'attrValueDataType',
                      parents: ['body'],
                      id: 'body.attrValueDataType',
                      dataKey: '873532_body.attrValueDataType',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrValueDataType',
                      },
                    },
                    {
                      code: 'attrUnit',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrUnit',
                      compType: 'Input',
                      name: 'attrUnit',
                      parents: ['body'],
                      id: 'body.attrUnit',
                      dataKey: '873532_body.attrUnit',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrUnit',
                      },
                    },
                    {
                      code: 'attrDefaultValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrDefaultValue',
                      compType: 'Input',
                      name: 'attrDefaultValue',
                      parents: ['body'],
                      id: 'body.attrDefaultValue',
                      dataKey: '873532_body.attrDefaultValue',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrDefaultValue',
                      },
                    },
                    {
                      code: 'attrDesc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrDesc',
                      compType: 'Input',
                      name: 'attrDesc',
                      parents: ['body'],
                      id: 'body.attrDesc',
                      dataKey: '873532_body.attrDesc',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'attrDesc',
                      },
                    },
                    {
                      code: 'minValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.minValue',
                      compType: 'Input',
                      name: 'minValue',
                      parents: ['body'],
                      id: 'body.minValue',
                      dataKey: '873532_body.minValue',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'minValue',
                      },
                    },
                    {
                      code: 'maxValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.maxValue',
                      compType: 'Input',
                      name: 'maxValue',
                      parents: ['body'],
                      id: 'body.maxValue',
                      dataKey: '873532_body.maxValue',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'maxValue',
                      },
                    },
                    {
                      code: 'isRequired',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isRequired',
                      compType: 'Input',
                      name: 'isRequired',
                      parents: ['body'],
                      id: 'body.isRequired',
                      dataKey: '873532_body.isRequired',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isRequired',
                      },
                    },
                    {
                      code: 'isReadonly',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isReadonly',
                      compType: 'Input',
                      name: 'isReadonly',
                      parents: ['body'],
                      id: 'body.isReadonly',
                      dataKey: '873532_body.isReadonly',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isReadonly',
                      },
                    },
                    {
                      code: 'isUnique',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isUnique',
                      compType: 'Input',
                      name: 'isUnique',
                      parents: ['body'],
                      id: 'body.isUnique',
                      dataKey: '873532_body.isUnique',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isUnique',
                      },
                    },
                    {
                      code: 'isNullable',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isNullable',
                      compType: 'Input',
                      name: 'isNullable',
                      parents: ['body'],
                      id: 'body.isNullable',
                      dataKey: '873532_body.isNullable',
                      value: {
                        type: ['form', 'Form_225398', 'validateFields'],
                        code: 'isNullable',
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
                      dataKey: '873532_body.remark',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '873532_body',
                },
              ],
            },
            line_number: 10,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '6840515',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_873532?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166632009074692540,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166632009074610100,
                    children: [],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                  },
                ],
                line_number: 11,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 16663200907462452,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '662445',
                      pageJsonId: '348001',
                      type: 'success',
                      value: '规格属性修改成功！',
                    },
                    line_number: 12,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166632009074653800,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '492538',
                      pageJsonId: '348001',
                    },
                    line_number: 13,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166632009074668030,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '6641915',
                      pageJsonId: '348001',
                    },
                    line_number: 14,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse322.params = [] || [];
    CMDGenerator(eventDataifelse322, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal100: any = [
      {
        type: 'closeModal',
        dataId: '83360455_1',
        options: { compId: 'page', compName: 'page', id: '963308' },
        line_number: 1,
      },
    ];
    eventDatacloseModal100.params = [] || [];
    CMDGenerator(eventDatacloseModal100, {}, 'closeModal', {
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
    const eventDataapiRequest627: any = [
      {
        type: 'apiRequest',
        dataId: 166632129465717200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6607877',
          pageJsonId: '348001',
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
              dataKey: '6607877_header',
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
                  dataKey: '6607877_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '6607877_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '6607877_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '6607877_body',
            },
          ],
          actionTitle: '查询属性值类型',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166632133829724500,
            options: {
              compId: 'Select_565132',
              compLib: 'comm',
              pageJsonId: '348001',
              compName: 'Select',
              id: '004556',
              data: '$reply_6607877?.resultData$',
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
    eventDataapiRequest627.params = [] || [];
    CMDGenerator(eventDataapiRequest627, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest628: any = [
      {
        type: 'apiRequest',
        dataId: 166632131838989730,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '71494',
          pageJsonId: '348001',
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
              dataKey: '71494_header',
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
                  dataKey: '71494_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_DATA_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '71494_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '71494_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '71494_body',
            },
          ],
          actionTitle: '查询属性值数据类型',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166632147429866500,
            options: {
              compId: 'Select_173614',
              compLib: 'comm',
              pageJsonId: '348001',
              compName: 'Select',
              id: '4970195',
              data: '$reply_71494?.resultData$',
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
    eventDataapiRequest628.params = [] || [];
    CMDGenerator(eventDataapiRequest628, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse323: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '857445',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166631972827690530,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 166631978161936220,
            options: {
              compId: 'Form_225398',
              compLib: 'comm',
              pageJsonId: '348001',
              compName: 'Form',
              id: '743993',
              params: '$state.attrObj$',
            },
            line_number: 6,
          },
          {
            type: 'setDisable',
            dataId: 166631979137068000,
            options: {
              compId: 'Form_225398',
              compLib: 'comm',
              pageJsonId: '348001',
              compName: 'Form',
              id: '293975',
              disabled: 'true',
            },
            line_number: 7,
          },
        ],
      },
    ];
    eventDataifelse323.params = [] || [];
    CMDGenerator(eventDataifelse323, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse324: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '857445',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'A',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166631975423711260,
        elseIfs: [],
        line_number: 8,
      },
    ];
    eventDataifelse324.params = [] || [];
    CMDGenerator(eventDataifelse324, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse325: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '857445',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166631975519135400,
        elseIfs: [],
        line_number: 9,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 166631981038016160,
            options: {
              compId: 'Form_225398',
              compLib: 'comm',
              pageJsonId: '348001',
              compName: 'Form',
              id: '9496425',
              params: '$state.attrObj$',
            },
            line_number: 10,
          },
        ],
      },
    ];
    eventDataifelse325.params = [] || [];
    CMDGenerator(eventDataifelse325, {}, 'ifelse', {
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
      className="__CustomClass_348001__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_348001_1',
          uid: 'View_348001_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_348001_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_462679',
            uid: 'View_462679',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_462679')}
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
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_225398'}
            $$componentItem={{
              id: 'Form_225398',
              uid: 'Form_225398',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_225398')}
            {...injectData}
          >
            <Input
              name={'属性名称'}
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
              formItemIndex={0}
              fieldName={'attrName'}
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
                id: 'Input_419861',
                uid: 'Input_419861',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_419861')}
              {...injectData}
            />
            <Input
              name={'属性编码'}
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
              fieldName={'attrCode'}
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
                id: 'Select_547977',
                uid: 'Select_547977',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_547977')}
              {...injectData}
            />
            <Select
              name={'属性值类型'}
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
              attr={{ selectedKeyTags: [], dataType: 'local' }}
              placeholder={'请选择'}
              formItemIndex={2}
              fieldName={'attrValueType'}
              $$componentItem={{
                id: 'Select_565132',
                uid: 'Select_565132',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_565132')}
              {...injectData}
            />
            <Select
              name={'属性值数据类型'}
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
              attr={{ selectedKeyTags: [], dataType: 'local' }}
              placeholder={'请选择'}
              formItemIndex={3}
              fieldName={'attrValueDataType'}
              $$componentItem={{
                id: 'Select_173614',
                uid: 'Select_173614',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_173614')}
              {...injectData}
            />
            <Input
              name={'属性单位'}
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
              formItemIndex={4}
              fieldName={'attrUnit'}
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
                id: 'Input_663264',
                uid: 'Input_663264',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_663264')}
              {...injectData}
            />
            <Input
              name={'属性默认值'}
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
              formItemIndex={5}
              fieldName={'attrDefaultValue'}
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
                id: 'Input_124547',
                uid: 'Input_124547',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_124547')}
              {...injectData}
            />
            <Input
              name={'最小值'}
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
              formItemIndex={6}
              fieldName={'minValue'}
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
                id: 'Input_970339195',
                uid: 'Input_970339195',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_970339195')}
              {...injectData}
            />
            <Input
              name={'最大值'}
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
              formItemIndex={7}
              fieldName={'maxValue'}
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
                id: 'Input_043301',
                uid: 'Input_043301',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_043301')}
              {...injectData}
            />
            <Select
              name={'是否必填'}
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
              formItemIndex={8}
              fieldName={'isRequired'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_053769',
                uid: 'Select_053769',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_053769')}
              {...injectData}
            />
            <Select
              name={'是否只读'}
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
              formItemIndex={9}
              fieldName={'isReadonly'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_4024093',
                uid: 'Select_4024093',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_4024093')}
              {...injectData}
            />
            <Select
              name={'是否唯一'}
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
              formItemIndex={10}
              fieldName={'isUnique'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_72153',
                uid: 'Select_72153',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_72153')}
              {...injectData}
            />
            <Select
              name={'是否可空'}
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
              formItemIndex={11}
              fieldName={'isNullable'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_422062505',
                uid: 'Select_422062505',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_422062505')}
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
              formItemIndex={12}
              fieldName={'createStaffName'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_9708224',
                uid: 'Input_9708224',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9708224')}
              {...injectData}
            />
            <Input
              name={'创建时间'}
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
              formItemIndex={13}
              fieldName={'createDate'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_822197',
                uid: 'Input_822197',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_822197')}
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
              formItemIndex={14}
              fieldName={'updateStaff'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_999963',
                uid: 'Input_999963',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_999963')}
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
              formItemIndex={15}
              disabled={false}
              visible={true}
              readOnly={true}
              fieldName={'updateDate'}
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
                id: 'Input_3556224',
                uid: 'Input_3556224',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3556224')}
              {...injectData}
            />
            <TextArea
              name={'属性描述'}
              selfSpan={24}
              labelCol={'4'}
              wrapperCol={20}
              readOnly={false}
              disabled={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={16}
              fieldName={'attrDesc'}
              $$componentItem={{
                id: 'TextArea_008307',
                uid: 'TextArea_008307',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_008307')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Guigeshuxingxiangqing3867$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', attrId: '', attrObj: '' },
});
