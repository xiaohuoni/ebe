// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, DatePicker, Text } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '900635954003288064';
const MeetingCreatepopcopy$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm60: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166061953173253630,
        options: {
          compId: 'Form_30_1121',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '450842',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166366230451057380,
            options: {
              compId: 'View_30_1',
              compLib: 'custom',
              pageJsonId: 30,
              compName: 'View',
              id: '1675143',
              loading: true,
            },
            line_number: 2,
          },
          {
            type: 'apiRequest',
            dataId: 166061953915722900,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '574745',
              pageJsonId: 30,
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              serviceVersionId: '883233259238359040',
              versionCode: '1.0',
              _serviceType: 'orchestration',
              _source: 'rhin',
              _serviceId: '901029591442493440',
              _serviceTitle: '发起延期申请--tzp: addDcApproveOrdDelayRequest',
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
                  dataKey: '574745_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '574745_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '574745_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'busiObjNbr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.busiObjNbr',
                      compType: 'Input',
                      name: 'busiObjNbr',
                      parents: ['body'],
                      id: 'body.busiObjNbr',
                      dataKey: '574745_body.busiObjNbr',
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'busiObjNbr',
                      },
                    },
                    {
                      code: 'endLevel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.endLevel',
                      compType: 'Input',
                      name: 'endLevel',
                      parents: ['body'],
                      id: 'body.endLevel',
                      dataKey: '574745_body.endLevel',
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
                      dataKey: '574745_body.flowCode',
                      value: { type: ['customize'], code: 'COMMON_DELAY_FLOW' },
                    },
                    {
                      code: 'groupCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.groupCode',
                      compType: 'Input',
                      name: 'groupCode',
                      parents: ['body'],
                      id: 'body.groupCode',
                      dataKey: '574745_body.groupCode',
                    },
                    {
                      code: 'isRollback',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isRollback',
                      compType: 'Input',
                      name: 'isRollback',
                      parents: ['body'],
                      id: 'body.isRollback',
                      dataKey: '574745_body.isRollback',
                    },
                    {
                      code: 'isSkip',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isSkip',
                      compType: 'Input',
                      name: 'isSkip',
                      parents: ['body'],
                      id: 'body.isSkip',
                      dataKey: '574745_body.isSkip',
                      value: { type: ['customize'], code: 'N' },
                    },
                    {
                      code: 'lastWorkItemId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.lastWorkItemId',
                      compType: 'Input',
                      name: 'lastWorkItemId',
                      parents: ['body'],
                      id: 'body.lastWorkItemId',
                      dataKey: '574745_body.lastWorkItemId',
                    },
                    {
                      code: 'nextStaff',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.nextStaff',
                      compType: 'Input',
                      name: 'nextStaff',
                      parents: ['body'],
                      id: 'body.nextStaff',
                      dataKey: '574745_body.nextStaff',
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'staffId',
                      },
                    },
                    {
                      code: 'nextStaffName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.nextStaffName',
                      compType: 'Input',
                      name: 'nextStaffName',
                      parents: ['body'],
                      id: 'body.nextStaffName',
                      dataKey: '574745_body.nextStaffName',
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'staffName',
                      },
                    },
                    {
                      code: 'nextTache',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.nextTache',
                      compType: 'Input',
                      name: 'nextTache',
                      parents: ['body'],
                      id: 'body.nextTache',
                      dataKey: '574745_body.nextTache',
                      value: { type: ['customize'], code: 'DELAY_AUDIT' },
                    },
                    {
                      code: 'optType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.optType',
                      compType: 'Input',
                      name: 'optType',
                      parents: ['body'],
                      id: 'body.optType',
                      dataKey: '574745_body.optType',
                    },
                    {
                      code: 'orderType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orderType',
                      compType: 'Input',
                      name: 'orderType',
                      parents: ['body'],
                      id: 'body.orderType',
                      dataKey: '574745_body.orderType',
                      value: { type: ['customize'], code: '1400' },
                    },
                    {
                      code: 'parentWorkId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.parentWorkId',
                      compType: 'Input',
                      name: 'parentWorkId',
                      parents: ['body'],
                      id: 'body.parentWorkId',
                      dataKey: '574745_body.parentWorkId',
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'parentWorkId',
                      },
                    },
                    {
                      code: 'parentWorkItemId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.parentWorkItemId',
                      compType: 'Input',
                      name: 'parentWorkItemId',
                      parents: ['body'],
                      id: 'body.parentWorkItemId',
                      dataKey: '574745_body.parentWorkItemId',
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'parentWorkItemId',
                      },
                    },
                    {
                      code: 'serviceAddress',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.serviceAddress',
                      compType: 'Input',
                      name: 'serviceAddress',
                      parents: ['body'],
                      id: 'body.serviceAddress',
                      dataKey: '574745_body.serviceAddress',
                    },
                    {
                      code: 'startFlag',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.startFlag',
                      compType: 'Input',
                      name: 'startFlag',
                      parents: ['body'],
                      id: 'body.startFlag',
                      dataKey: '574745_body.startFlag',
                      value: { type: ['customize'], code: 'Y' },
                    },
                    {
                      code: 'tacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tacheCode',
                      compType: 'Input',
                      name: 'tacheCode',
                      parents: ['body'],
                      id: 'body.tacheCode',
                      dataKey: '574745_body.tacheCode',
                    },
                    {
                      code: 'tachePass',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tachePass',
                      compType: 'Input',
                      name: 'tachePass',
                      parents: ['body'],
                      id: 'body.tachePass',
                      dataKey: '574745_body.tachePass',
                      value: { type: ['customize'], code: 'pass' },
                    },
                    {
                      code: 'tacheRemark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tacheRemark',
                      compType: 'Input',
                      name: 'tacheRemark',
                      parents: ['body'],
                      id: 'body.tacheRemark',
                      dataKey: '574745_body.tacheRemark',
                    },
                    {
                      code: 'workId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.workId',
                      compType: 'Input',
                      name: 'workId',
                      parents: ['body'],
                      id: 'body.workId',
                      dataKey: '574745_body.workId',
                    },
                    {
                      code: 'workItemId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.workItemId',
                      compType: 'Input',
                      name: 'workItemId',
                      parents: ['body'],
                      id: 'body.workItemId',
                      dataKey: '574745_body.workItemId',
                    },
                    {
                      code: 'tacheAttachments',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'fileId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tacheAttachments.fileId',
                          compType: 'Input',
                          name: 'fileId',
                          parents: ['body', 'tacheAttachments'],
                          id: 'body.tacheAttachments.fileId',
                          dataKey: '574745_body.tacheAttachments.fileId',
                        },
                        {
                          code: 'fileName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tacheAttachments.fileName',
                          compType: 'Input',
                          name: 'fileName',
                          parents: ['body', 'tacheAttachments'],
                          id: 'body.tacheAttachments.fileName',
                          dataKey: '574745_body.tacheAttachments.fileName',
                        },
                        {
                          code: 'url',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tacheAttachments.url',
                          compType: 'Input',
                          name: 'url',
                          parents: ['body', 'tacheAttachments'],
                          id: 'body.tacheAttachments.url',
                          dataKey: '574745_body.tacheAttachments.url',
                        },
                      ],
                      _id: 'body.tacheAttachments',
                      compType: 'Input',
                      name: 'tacheAttachments',
                      parents: ['body'],
                      id: 'body.tacheAttachments',
                      dataKey: '574745_body.tacheAttachments',
                    },
                    {
                      code: 'delayRequest',
                      attrType: 'object',
                      children: [
                        {
                          code: 'approveOrdNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.approveOrdNbr',
                          compType: 'Input',
                          name: 'approveOrdNbr',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.approveOrdNbr',
                          dataKey: '574745_body.delayRequest.approveOrdNbr',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'busiObjNbr',
                          },
                        },
                        {
                          code: 'auditStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.auditStaff',
                          compType: 'Input',
                          name: 'auditStaff',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.auditStaff',
                          dataKey: '574745_body.delayRequest.auditStaff',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'staffId',
                          },
                        },
                        {
                          code: 'auditStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.auditStaffName',
                          compType: 'Input',
                          name: 'auditStaffName',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.auditStaffName',
                          dataKey: '574745_body.delayRequest.auditStaffName',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'staffName',
                          },
                        },
                        {
                          code: 'createDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.createDate',
                          compType: 'Input',
                          name: 'createDate',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.createDate',
                          dataKey: '574745_body.delayRequest.createDate',
                        },
                        {
                          code: 'createStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.createStaff',
                          compType: 'Input',
                          name: 'createStaff',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.createStaff',
                          dataKey: '574745_body.delayRequest.createStaff',
                        },
                        {
                          code: 'createStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.createStaffName',
                          compType: 'Input',
                          name: 'createStaffName',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.createStaffName',
                          dataKey: '574745_body.delayRequest.createStaffName',
                        },
                        {
                          code: 'delayDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.delayDate',
                          compType: 'Input',
                          name: 'delayDate',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.delayDate',
                          dataKey: '574745_body.delayRequest.delayDate',
                        },
                        {
                          code: 'delayDay',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.delayDay',
                          compType: 'Input',
                          name: 'delayDay',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.delayDay',
                          dataKey: '574745_body.delayRequest.delayDay',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'delayDay',
                          },
                        },
                        {
                          code: 'ordDelayRequestId',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.ordDelayRequestId',
                          compType: 'Input',
                          name: 'ordDelayRequestId',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.ordDelayRequestId',
                          dataKey: '574745_body.delayRequest.ordDelayRequestId',
                        },
                        {
                          code: 'remark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.remark',
                          compType: 'Input',
                          name: 'remark',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.remark',
                          dataKey: '574745_body.delayRequest.remark',
                        },
                        {
                          code: 'statusCd',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.statusCd',
                          compType: 'Input',
                          name: 'statusCd',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.statusCd',
                          dataKey: '574745_body.delayRequest.statusCd',
                        },
                        {
                          code: 'updateDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.updateDate',
                          compType: 'Input',
                          name: 'updateDate',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.updateDate',
                          dataKey: '574745_body.delayRequest.updateDate',
                        },
                        {
                          code: 'updateStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.delayRequest.updateStaff',
                          compType: 'Input',
                          name: 'updateStaff',
                          parents: ['body', 'delayRequest'],
                          id: 'body.delayRequest.updateStaff',
                          dataKey: '574745_body.delayRequest.updateStaff',
                        },
                      ],
                      _id: 'body.delayRequest',
                      compType: 'Input',
                      name: 'delayRequest',
                      parents: ['body'],
                      id: 'body.delayRequest',
                      dataKey: '574745_body.delayRequest',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '574745_body',
                },
              ],
              _capabilityCode: 'addDcApproveOrdDelayRequest',
              _apiCode: 'addDcApproveOrdDelayRequest',
              _sourceName: '发起延期申请--tzp',
            },
            line_number: 3,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '087103',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_574745?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166375404953700200,
                elseIfs: [],
                line_number: 4,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166375407800293150,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '303116',
                      pageJsonId: 30,
                      type: 'success',
                      value: '发起延期成功',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166375408400843870,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '07996',
                      pageJsonId: 30,
                    },
                    line_number: 6,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166375408953777400,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '684194',
                      pageJsonId: 30,
                    },
                    line_number: 7,
                  },
                ],
              },
              {
                type: 'setLoading',
                dataId: 166366231230967900,
                options: {
                  compId: 'View_30_1',
                  compLib: 'custom',
                  pageJsonId: 30,
                  compName: 'View',
                  id: '634125',
                  loading: false,
                },
                line_number: 8,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 166062044859680060,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '697206',
                  pageJsonId: 30,
                  type: 'error',
                  value: '发起延期失败',
                },
                line_number: 9,
              },
              {
                type: 'setLoading',
                dataId: 166366231680557300,
                options: {
                  compId: 'View_30_1',
                  compLib: 'custom',
                  pageJsonId: 30,
                  compName: 'View',
                  id: '863627',
                  loading: false,
                },
                line_number: 10,
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'showMessage',
            dataId: 166062046454811070,
            options: {
              compId: 'showMessage',
              compName: 'system',
              id: '387546',
              pageJsonId: 30,
              type: 'info',
              value: '表单验证失败',
            },
            line_number: 11,
          },
        ],
      },
    ];
    eventDatavalidateCurrentForm60.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm60, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
  }));

  useEffect(() => {
    const eventDatasetValue20: any = [
      {
        type: 'setValue',
        dataId: 166220011356410370,
        options: {
          compId: 'Input_650024',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Input',
          id: '711239',
          value: '$state.title$',
          valueList: { Input_650024: '$state.title$' },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue20.params = [] || [];
    CMDGenerator(eventDatasetValue20, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue21: any = [
      {
        type: 'setValue',
        dataId: 166642090011070370,
        options: {
          compId: 'Input_662082_823594',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Input',
          id: '11660278',
          value: '$state.busiObjNbr$',
        },
        line_number: 2,
        callback1: [],
      },
    ];
    eventDatasetValue21.params = [] || [];
    CMDGenerator(eventDatasetValue21, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue22: any = [
      {
        type: 'setValue',
        dataId: 166659122193108700,
        options: {
          compId: 'DatePicker_306973',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'DatePicker',
          id: '463376',
          value: '$state.expDate$',
        },
        line_number: 3,
        callback1: [],
      },
    ];
    eventDatasetValue22.params = [] || [];
    CMDGenerator(eventDatasetValue22, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue23: any = [
      {
        type: 'setValue',
        dataId: 166660063702998880,
        options: {
          compId: 'Input_662082_823594_5980102',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Input',
          id: '923248',
          value: '$state.parentWorkId$',
          valueList: { Input_662082_823594_5980102: '$state.parentWorkId$' },
        },
        line_number: 4,
        callback1: [],
      },
    ];
    eventDatasetValue23.params = [] || [];
    CMDGenerator(eventDatasetValue23, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetCompContentValue4: any = [
      {
        type: 'setCompContentValue',
        dataId: 166867069868158720,
        options: {
          compId: 'Text_787048',
          compLib: 'custom',
          pageJsonId: 30,
          compName: 'Text',
          id: '027038',
          value: '$state.delayHint$',
        },
        line_number: 5,
        callback1: [],
      },
    ];
    eventDatasetCompContentValue4.params = [] || [];
    CMDGenerator(eventDatasetCompContentValue4, {}, 'setCompContentValue', {
      id: 'setCompContentValue',
      name: 'setCompContentValue',
      type: 'setCompContentValue',
      platform: 'undefined',
    });
    const eventDatasetValue24: any = [
      {
        type: 'setValue',
        dataId: 166867171872923900,
        options: {
          compId: 'Input_662082_823594_5980102_128552',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Input',
          id: '957559',
          valueList: {
            Input_662082_823594_5980102_128552: '$state.parentWorkItemId$',
          },
        },
        line_number: 6,
        callback1: [],
      },
    ];
    eventDatasetValue24.params = [] || [];
    CMDGenerator(eventDatasetValue24, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        className="View_View_30_1"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_30_1',
          uid: 'View_30_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1')}
        {...injectData}
      >
        <View
          className="View_VerticalView_30_11"
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11')}
          {...injectData}
        >
          <View
            className="View_View_30_112"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_112',
              uid: 'View_30_112',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              margin: '0px 0px 0px 0px',
              padding: '0px 0px 0px 0px',
              width: '100%',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_112')}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={24}
              colSpace={16}
              rowSpace={16}
              labelCol={'6'}
              wrapperCol={18}
              layout={'horizontal'}
              colon={true}
              labelAlign={'right'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={''}
              $$componentItem={{
                id: 'Form_30_1121',
                uid: 'Form_30_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{
                minHeight: 80,
                width: '50%',
                padding: '20px 20px 20px 20px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_30_1121')}
              {...injectData}
            >
              <Input
                name={'审批项目'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={18}
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
                  id: 'Input_650024',
                  uid: 'Input_650024',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_650024')}
                {...injectData}
              />
              <DatePicker
                name={'到期日期'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={18}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                placeholder={'请选择日期'}
                pickerType={'DatePicker'}
                formItemIndex={1}
                fieldName={'expDate'}
                $$componentItem={{
                  id: 'DatePicker_306973',
                  uid: 'DatePicker_306973',
                  type: 'DatePicker',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                defaultValue={undefined}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'DatePicker_306973')}
                {...injectData}
              />
              <Input
                name={'延期天数'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={18}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'小于等于30天'}
                formItemIndex={2}
                fieldName={'delayDay'}
                regexp={[
                  {
                    id: '155089',
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
                  id: 'Input_650024_470714',
                  uid: 'Input_650024_470714',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_650024_470714')}
                {...injectData}
              />
              <Input
                name={'审批人'}
                placeholder={'请选择处理人'}
                titleTip={'notext'}
                fieldName={'staffName'}
                selfSpan={24}
                formItemIndex={3}
                labelCol={'6'}
                wrapperCol={'18'}
                postfix={'选择处理人'}
                postfixStyle={'3'}
                required={true}
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
                  id: 'Input_30_11218',
                  uid: 'Input_30_11218',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal251: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166061840842273200,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '902563',
                        pageJsonId: 30,
                        modalname: '/audit/selectoneuser',
                        pageId: '881887068344979456',
                        paramsObj: {
                          flowCode: 'COMMON_DELAY_FLOW',
                          tacheCode: 'DELAY_AUDIT',
                        },
                        paramsObjKeyValueMap: {
                          flowCode: 'COMMON_DELAY_FLOW',
                          tacheCode: 'DELAY_AUDIT',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setValue',
                          dataId: 166061901893231460,
                          options: {
                            compId: 'Input_30_11218',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'Input',
                            id: '072426',
                            value: '$okData_902563.staffSelect.userName$',
                          },
                          line_number: 2,
                          callback1: [],
                        },
                        {
                          type: 'setValue',
                          dataId: 166061903447878560,
                          options: {
                            compId: 'Input_662082',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'Input',
                            id: '195956',
                            value: '$okData_902563.staffSelect.userCode$',
                          },
                          line_number: 3,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal251.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal251,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_30_11218')}
                {...injectData}
              />
              <Input
                name={'审批人id列表'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={18}
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
                fieldName={'staffId'}
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
                  id: 'Input_662082',
                  uid: 'Input_662082',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_662082')}
                {...injectData}
              />
              <Input
                name={'表单对象编码'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={18}
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
                fieldName={'busiObjNbr'}
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
                  id: 'Input_662082_823594',
                  uid: 'Input_662082_823594',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_662082_823594')}
                {...injectData}
              />
              <Input
                name={'父单流程实例id'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={18}
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
                fieldName={'parentWorkId'}
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
                  id: 'Input_662082_823594_5980102',
                  uid: 'Input_662082_823594_5980102',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_662082_823594_5980102')
                }
                {...injectData}
              />
              <Input
                name={'父单流程环节实例id'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={18}
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
                fieldName={'parentWorkItemId'}
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
                  id: 'Input_662082_823594_5980102_128552',
                  uid: 'Input_662082_823594_5980102_128552',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_662082_823594_5980102_128552')
                }
                {...injectData}
              />
              <Text
                name={'延期提示'}
                content={'延期提示'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                labelCol={'6'}
                wrapperCol={18}
                $$componentItem={{
                  id: 'Text_787048',
                  uid: 'Text_787048',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                schema={{
                  compType: 1,
                  props: {
                    formItemIndex: 8,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'rgba(208, 2, 27, 1)',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Text_787048')}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MeetingCreatepopcopy$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    busiObjNbr: '',
    title: '',
    expDate: '',
    parentWorkId: '',
    parentWorkItemId: '',
    delayHint: '',
  },
});
