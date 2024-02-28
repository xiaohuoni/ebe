// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Input,
  MultipleSelect,
  Select,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '899974150071754752';
const Liuchengxiangqing6433$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse333: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '925114',
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
        dataId: 166617810663199170,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'closeModal',
            dataId: 166617824990385250,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '109096',
              pageJsonId: '689515',
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse333.params = [] || [];
    CMDGenerator(eventDataifelse333, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse334: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '925114',
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
        dataId: 166617813036450430,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'console',
            dataId: 166618778267526080,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '296659',
              pageJsonId: '689515',
              value: ['$state.bizId$'],
            },
            line_number: 4,
          },
          {
            type: 'console',
            dataId: 166618780563815420,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '397967',
              pageJsonId: '689515',
              value: ['$state.flowObi$'],
            },
            line_number: 5,
          },
          {
            type: 'apiRequest',
            dataId: 166617817886273020,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '1958846',
              pageJsonId: '689515',
              sync: false,
              actionTitle: '流程修改',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'modDcFlowDefine',
              _apiCode: 'modDcFlowDefine',
              _source: 'rhin',
              _serviceId: '899952973370597376',
              _serviceTitle: '流程修改-tsm: modDcFlowDefine',
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
                  dataKey: '1958846_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '1958846_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '1958846_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'flowDefineId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.flowDefineId',
                      compType: 'Input',
                      name: 'flowDefineId',
                      parents: ['body'],
                      id: 'body.flowDefineId',
                      dataKey: '1958846_body.flowDefineId',
                      value: { type: ['context', '$state.bizId$'], code: '' },
                    },
                    {
                      code: 'flowName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.flowName',
                      compType: 'Input',
                      name: 'flowName',
                      parents: ['body'],
                      id: 'body.flowName',
                      dataKey: '1958846_body.flowName',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'flowName',
                      },
                    },
                    {
                      code: 'flowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.flowCode',
                      compType: 'Input',
                      name: 'flowCode',
                      parents: ['body'],
                      id: 'body.flowCode',
                      dataKey: '1958846_body.flowCode',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'flowCode',
                      },
                    },
                    {
                      code: 'extFlowName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extFlowName',
                      compType: 'Input',
                      name: 'extFlowName',
                      parents: ['body'],
                      id: 'body.extFlowName',
                      dataKey: '1958846_body.extFlowName',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'extFlowName',
                      },
                    },
                    {
                      code: 'extFlowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extFlowCode',
                      compType: 'Input',
                      name: 'extFlowCode',
                      parents: ['body'],
                      id: 'body.extFlowCode',
                      dataKey: '1958846_body.extFlowCode',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'extFlowCode',
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
                      dataKey: '1958846_body.remark',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'remark',
                      },
                    },
                    {
                      code: 'flowTypeList',
                      name: '新增节点',
                      attrType: 'objectArray',
                      _id: 'body.flowTypeList',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.flowTypeList',
                      dataKey: '1958846_body.flowTypeList',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'flowTypeList',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '1958846_body',
                },
              ],
            },
            line_number: 6,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '584567',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_1958846?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166617817886273200,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166617817886232540,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166617817886222370,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '5692027',
                          pageJsonId: '689515',
                          type: 'error',
                          value: '流程修改失败！',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        elseIfs: [],
                        line_number: 11,
                      },
                    ],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166617817886222370,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '5692027',
                          pageJsonId: '689515',
                          type: 'error',
                          value: '流程修改失败！',
                        },
                        line_number: 11,
                      },
                    ],
                  },
                ],
                line_number: 7,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166617817886261920,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '073872',
                      pageJsonId: '689515',
                      type: 'success',
                      value: '流程修改成功！',
                    },
                    line_number: 8,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166617817886273300,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '058562',
                      pageJsonId: '689515',
                    },
                    line_number: 9,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166618890782494100,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '018208',
                      pageJsonId: '689515',
                    },
                    line_number: 10,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse334.params = [] || [];
    CMDGenerator(eventDataifelse334, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse335: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '925114',
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
        dataId: 166617813119583740,
        elseIfs: [],
        line_number: 12,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166617816782201920,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '139084',
              pageJsonId: '689515',
              sync: false,
              actionTitle: '流程新增',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'addDcFlowDefine',
              _apiCode: 'addDcFlowDefine',
              _source: 'rhin',
              _serviceId: '899952346695176192',
              _serviceTitle: '流程新增-tsm: addDcFlowDefine',
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
                  dataKey: '139084_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '139084_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '139084_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'flowName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.flowName',
                      compType: 'Input',
                      name: 'flowName',
                      parents: ['body'],
                      id: 'body.flowName',
                      dataKey: '139084_body.flowName',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'flowName',
                      },
                    },
                    {
                      code: 'flowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.flowCode',
                      compType: 'Input',
                      name: 'flowCode',
                      parents: ['body'],
                      id: 'body.flowCode',
                      dataKey: '139084_body.flowCode',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'flowCode',
                      },
                    },
                    {
                      code: 'extFlowName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extFlowName',
                      compType: 'Input',
                      name: 'extFlowName',
                      parents: ['body'],
                      id: 'body.extFlowName',
                      dataKey: '139084_body.extFlowName',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'extFlowName',
                      },
                    },
                    {
                      code: 'extFlowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extFlowCode',
                      compType: 'Input',
                      name: 'extFlowCode',
                      parents: ['body'],
                      id: 'body.extFlowCode',
                      dataKey: '139084_body.extFlowCode',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'extFlowCode',
                      },
                    },
                    {
                      code: 'flowType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.flowType',
                      compType: 'Input',
                      name: 'flowType',
                      parents: ['body'],
                      id: 'body.flowType',
                      dataKey: '139084_body.flowType',
                      value: { type: [], code: '' },
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
                      dataKey: '139084_body.remark',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'remark',
                      },
                    },
                    {
                      code: 'flowTypeList',
                      name: '新增节点',
                      attrType: 'objectArray',
                      _id: 'body.flowTypeList',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.flowTypeList',
                      dataKey: '139084_body.flowTypeList',
                      value: {
                        type: ['form', 'Form_088682', 'validateFields'],
                        code: 'flowTypeList',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '139084_body',
                },
              ],
            },
            line_number: 13,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '584567',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_139084?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166617816783470080,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166617816783477300,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166617816783457340,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '2014262',
                          pageJsonId: '689515',
                          type: 'error',
                          value: '流程新增失败！',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        elseIfs: [],
                        line_number: 18,
                      },
                    ],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166617816783457340,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '2014262',
                          pageJsonId: '689515',
                          type: 'error',
                          value: '流程新增失败！',
                        },
                        line_number: 18,
                      },
                    ],
                  },
                ],
                line_number: 14,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166617816783427420,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '659534',
                      pageJsonId: '689515',
                      type: 'success',
                      value: '流程新增成功！',
                    },
                    line_number: 15,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166617816783404400,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '226434',
                      pageJsonId: '689515',
                    },
                    line_number: 16,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166618932038294900,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '2570735',
                      pageJsonId: '689515',
                    },
                    line_number: 17,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse335.params = [] || [];
    CMDGenerator(eventDataifelse335, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal119: any = [
      {
        type: 'closeModal',
        dataId: '184629_1',
        options: { compId: 'page', compName: 'page', id: '1352485' },
        line_number: 1,
      },
    ];
    eventDatacloseModal119.params = [] || [];
    CMDGenerator(eventDatacloseModal119, {}, 'closeModal', {
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
    const eventDataapiRequest644: any = [
      {
        type: 'apiRequest',
        dataId: 166617752979262400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9027608',
          pageJsonId: '689515',
          sync: false,
          actionTitle: '',
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
              dataKey: '9027608_header',
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
                  dataKey: '9027608_path.attrCode',
                  value: { type: ['customize'], code: 'FLOW_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9027608_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9027608_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9027608_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166617767891062820,
            options: {
              compId: 'MultipleSelect_0354337',
              compLib: 'comm',
              pageJsonId: '689515',
              compName: 'MultipleSelect',
              id: '675327',
              data: '$reply_9027608?.resultData$',
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
    eventDataapiRequest644.params = [] || [];
    CMDGenerator(eventDataapiRequest644, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse336: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '143336',
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
        dataId: 166617725701258720,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'setDisable',
            dataId: 166617734649160350,
            options: {
              compId: 'Form_088682',
              compLib: 'comm',
              pageJsonId: '689515',
              compName: 'Form',
              id: '266436',
              disabled: 'true',
            },
            line_number: 4,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 166617735358239360,
            options: {
              compId: 'Form_088682',
              compLib: 'comm',
              pageJsonId: '689515',
              compName: 'Form',
              id: '0341996',
              params: '$state.flowObi$',
            },
            line_number: 5,
          },
          {
            type: 'setValue',
            dataId: 166617784718855740,
            options: {
              compId: 'MultipleSelect_0354337',
              compLib: 'comm',
              pageJsonId: '689515',
              compName: 'MultipleSelect',
              id: '887775',
              value: '$state.flowObi.flowType.split(",")$',
            },
            line_number: 6,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse336.params = [] || [];
    CMDGenerator(eventDataifelse336, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse337: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '143336',
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
        dataId: 166617730590333060,
        elseIfs: [],
        line_number: 7,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 166617830913611070,
            options: {
              compId: 'Form_088682',
              compLib: 'comm',
              pageJsonId: '689515',
              compName: 'Form',
              id: '781273',
              params: '$state.flowObi$',
            },
            line_number: 8,
          },
          {
            type: 'setValue',
            dataId: 166617831378594880,
            options: {
              compId: 'MultipleSelect_0354337',
              compLib: 'comm',
              pageJsonId: '689515',
              compName: 'MultipleSelect',
              id: '3296044',
              value: '$state.flowObi.flowType.split(",")$',
            },
            line_number: 9,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse337.params = [] || [];
    CMDGenerator(eventDataifelse337, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse338: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '143336',
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
        dataId: 166617731050287330,
        elseIfs: [],
        line_number: 10,
      },
    ];
    eventDataifelse338.params = [] || [];
    CMDGenerator(eventDataifelse338, {}, 'ifelse', {
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
      className="__CustomClass_689515__"
    >
      <View
        className="View_View_689515_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_689515_1',
          uid: 'View_689515_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_689515_1')}
        {...injectData}
      >
        <View
          className="View_View_168374"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_168374',
            uid: 'View_168374',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_168374')}
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
            formCode={'Form_088682'}
            $$componentItem={{
              id: 'Form_088682',
              uid: 'Form_088682',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '20px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_088682')}
            {...injectData}
          >
            <Input
              name={'流程名称'}
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
                id: 'Input_157513',
                uid: 'Input_157513',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_157513')}
              {...injectData}
            />
            <Input
              name={'流程编码'}
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
                id: 'Input_407501',
                uid: 'Input_407501',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_407501')}
              {...injectData}
            />
            <Input
              name={'外部流程名称'}
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
              formItemIndex={2}
              fieldName={'extFlowName'}
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
                id: 'Input_468987',
                uid: 'Input_468987',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_468987')}
              {...injectData}
            />
            <Input
              name={'外部流程编码'}
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
              formItemIndex={3}
              fieldName={'extFlowCode'}
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
                id: 'Input_45155',
                uid: 'Input_45155',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_45155')}
              {...injectData}
            />
            <MultipleSelect
              name={'流程类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              attr={{}}
              placeholder={'请选择'}
              mode={'multiple'}
              formItemIndex={4}
              fieldName={'flowTypeList'}
              $$componentItem={{
                id: 'MultipleSelect_0354337',
                uid: 'MultipleSelect_0354337',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'MultipleSelect_0354337')
              }
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
              formItemIndex={5}
              fieldName={'statusCd'}
              disabled={true}
              visible={true}
              readOnly={false}
              dataSource={attrDataMap['STATUS_CD']}
              $$componentItem={{
                id: 'Select_67822',
                uid: 'Select_67822',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_67822')}
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
              formItemIndex={6}
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
                id: 'Input_183301',
                uid: 'Input_183301',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_183301')}
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
              formItemIndex={7}
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
                id: 'Input_540411',
                uid: 'Input_540411',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_540411')}
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
              formItemIndex={8}
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
                id: 'Input_944097',
                uid: 'Input_944097',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_944097')}
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
              formItemIndex={9}
              fieldName={'updateDate'}
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
                id: 'Input_9293691',
                uid: 'Input_9293691',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9293691')}
              {...injectData}
            />
            <TextArea
              name={'备注'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'16'}
              readOnly={false}
              disabled={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={10}
              fieldName={'remark'}
              $$componentItem={{
                id: 'TextArea_348804',
                uid: 'TextArea_348804',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_348804')}
              {...injectData}
            />
            <Input
              name={'流程ID'}
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
              formItemIndex={11}
              fieldName={'flowDefineId'}
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
                id: 'Input_312662',
                uid: 'Input_312662',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_312662')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Liuchengxiangqing6433$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', flowObi: '' },
});
