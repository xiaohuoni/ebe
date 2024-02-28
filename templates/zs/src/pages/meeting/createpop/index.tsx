// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Select,
  Input,
  TextArea,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '876645169117937664';
const MeetingCreatepop$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm45: any = [
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
              _serviceId: '883177501513625600',
              _serviceTitle: '流程会签启动-zzz: flowCountersignStart',
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
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'meetingOrderType',
                      },
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
                      code: 'orderId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orderId',
                      compType: 'Input',
                      name: 'orderId',
                      parents: ['body'],
                      id: 'body.orderId',
                      dataKey: '574745_body.orderId',
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
                      value: { type: [], code: '' },
                    },
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
                      value: { type: ['page', 'url'], code: 'busiObjNbr' },
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
                      value: { type: [], code: '' },
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
                      value: { type: ['page', 'url'], code: 'workItemId' },
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
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'meetingType',
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
                      dataKey: '574745_body.flowCode',
                      value: {
                        type: ['customize'],
                        code: 'COMMON_MEETING_FLOW',
                      },
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
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'meetingRemark',
                      },
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
                      value: { type: ['page', 'url'], code: 'workId' },
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
                      code: 'signUserList',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'userName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.signUserList.userName',
                          compType: 'Input',
                          name: 'userName',
                          parents: ['body', 'signUserList'],
                          id: 'body.signUserList.userName',
                          dataKey: '574745_body.signUserList.userName',
                        },
                        {
                          code: 'userCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.signUserList.userCode',
                          compType: 'Input',
                          name: 'userCode',
                          parents: ['body', 'signUserList'],
                          id: 'body.signUserList.userCode',
                          dataKey: '574745_body.signUserList.userCode',
                        },
                      ],
                      _id: 'body.signUserList',
                      compType: 'Input',
                      name: 'signUserList',
                      parents: ['body'],
                      id: 'body.signUserList',
                      dataKey: '574745_body.signUserList',
                      value: {
                        type: ['form', 'Form_30_1121', 'getFieldsValue'],
                        code: 'staffIdList',
                      },
                    },
                    {
                      code: 'tacheAttachments',
                      attrType: 'objectArray',
                      children: [
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
                      ],
                      _id: 'body.tacheAttachments',
                      compType: 'Input',
                      name: 'tacheAttachments',
                      parents: ['body'],
                      id: 'body.tacheAttachments',
                      dataKey: '574745_body.tacheAttachments',
                    },
                    {
                      code: 'sameList',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'nextTache',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.nextTache',
                          compType: 'Input',
                          name: 'nextTache',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.nextTache',
                          dataKey: '574745_body.sameList.nextTache',
                        },
                        {
                          code: 'nextStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.nextStaffName',
                          compType: 'Input',
                          name: 'nextStaffName',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.nextStaffName',
                          dataKey: '574745_body.sameList.nextStaffName',
                        },
                        {
                          code: 'workItemId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.workItemId',
                          compType: 'Input',
                          name: 'workItemId',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.workItemId',
                          dataKey: '574745_body.sameList.workItemId',
                        },
                        {
                          code: 'busiObjNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.busiObjNbr',
                          compType: 'Input',
                          name: 'busiObjNbr',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.busiObjNbr',
                          dataKey: '574745_body.sameList.busiObjNbr',
                        },
                        {
                          code: 'tachePass',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.tachePass',
                          compType: 'Input',
                          name: 'tachePass',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.tachePass',
                          dataKey: '574745_body.sameList.tachePass',
                        },
                        {
                          code: 'workId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.workId',
                          compType: 'Input',
                          name: 'workId',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.workId',
                          dataKey: '574745_body.sameList.workId',
                        },
                        {
                          code: 'tacheRemark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.tacheRemark',
                          compType: 'Input',
                          name: 'tacheRemark',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.tacheRemark',
                          dataKey: '574745_body.sameList.tacheRemark',
                        },
                        {
                          code: 'nextStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.nextStaff',
                          compType: 'Input',
                          name: 'nextStaff',
                          parents: ['body', 'sameList'],
                          id: 'body.sameList.nextStaff',
                          dataKey: '574745_body.sameList.nextStaff',
                        },
                      ],
                      _id: 'body.sameList',
                      compType: 'Input',
                      name: 'sameList',
                      parents: ['body'],
                      id: 'body.sameList',
                      dataKey: '574745_body.sameList',
                      value: {
                        type: ['context', '$state.sameList$'],
                        code: '',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '574745_body',
                },
              ],
              _capabilityCode: 'flowCountersignStart',
              _apiCode: 'flowCountersignStart',
              _sourceName: '流程会签启动-zzz',
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
                      value: '发起会签成功',
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
                  value: '发起会签失败',
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
    eventDatavalidateCurrentForm45.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm45, {}, 'validateCurrentForm', {
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
    const eventDatasetValue16: any = [
      {
        type: 'setValue',
        dataId: 166062027665216480,
        options: {
          compId: 'Select_525823',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Select',
          id: '319761',
          value: '$state.meetingType$',
          valueList: { Select_525823: '$state.meetingType$' },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue16.params = [] || [];
    CMDGenerator(eventDatasetValue16, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue17: any = [
      {
        type: 'setValue',
        dataId: 166220011356410370,
        options: {
          compId: 'Input_650024',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Input',
          id: '711239',
          value: '$state.meetingOrderType$',
          valueList: { Input_650024: '$state.meetingOrderType$' },
        },
        line_number: 2,
        callback1: [],
      },
    ];
    eventDatasetValue17.params = [] || [];
    CMDGenerator(eventDatasetValue17, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDataifelse195: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '54976',
            options: {
              context: '$state.approveList$',
              operate: 'notEmpty',
              manualValue: 'TRUE',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170001883550061470,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170001988498626800,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '4519554',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){if(state.approveList!=null&&state.approveList!=undefined){console.log("\\u4F1A\\u7B7E\\u4EBA\\u5217\\u8868:",state.approveList);success(state.approveList)}};',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setVisible',
                dataId: 170001996403862080,
                options: {
                  compId: 'Input_30_11218',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Input',
                  id: '664916',
                  visible: '',
                },
                line_number: 5,
              },
              {
                type: 'setVisible',
                dataId: 170001996597400100,
                shielding: true,
                options: {
                  compId: ['Text_718268', 'Input_8675667'],
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Input',
                  id: '322468',
                  visible: 'true',
                  compid: ['Text_718268', 'Input_8675667'],
                },
                line_number: 6,
              },
              {
                type: 'setCurrentFormValues',
                dataId: 170006473017837000,
                options: {
                  compId: 'Form_30_1121',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Form',
                  id: '379699',
                  params: 'object',
                  paramsObj: {
                    staffNameList: '$data_4519554.approveList.staffNameList$',
                    name: '$data_4519554.approveList.staffNameList$',
                    staffIdList: '$data_4519554.approveList.staffIdList$',
                  },
                  paramsObjKeyValueMap: {
                    staffNameList: '$data_4519554.approveList.staffNameList$',
                    name: '$data_4519554.approveList.staffNameList$',
                    staffIdList: '$data_4519554.approveList.staffIdList$',
                  },
                },
                line_number: 7,
              },
            ],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 170003859960684830,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '6158532',
              pageJsonId: 30,
              value: ['====发起会签，会签人员列表====', '$state.approveList$'],
            },
            line_number: 8,
          },
        ],
      },
    ];
    eventDataifelse195.params = [] || [];
    CMDGenerator(eventDataifelse195, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
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
              <Select
                name={'会签类型'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={18}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                formItemIndex={0}
                fieldName={'meetingType'}
                dataSource={[
                  { id: '958984', label: '其他领导会签', value: 'leader' },
                  { id: '095317', label: '指定人员会签', value: 'normal' },
                  { id: '8652416', label: '其他区县会签', value: 'area' },
                ]}
                $$componentItem={{
                  id: 'Select_525823',
                  uid: 'Select_525823',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_525823')}
                {...injectData}
              />
              <Input
                name={'审批人'}
                placeholder={'请选择处理人'}
                titleTip={'notext'}
                fieldName={'staffNameList'}
                selfSpan={24}
                formItemIndex={1}
                labelCol={'6'}
                wrapperCol={'18'}
                postfix={'选择处理人'}
                postfixStyle={'3'}
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
                  const eventDatashowCustomModal178: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166061840842273200,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '902563',
                        pageJsonId: 30,
                        modalname: '/meeting/selectuserlist',
                        pageId: '875208988329263104',
                        modalPath: '/meeting/selectuserlist',
                        paramsObj: { workItemId: '$state.workItemId$' },
                        paramsObjKeyValueMap: {
                          workItemId: '$state.workItemId$',
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
                            value: '$okData_902563.staffNameList$',
                            valueList: {
                              Input_30_11218: '$okData_902563.staffNameList$',
                            },
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
                            value: '$okData_902563.staffIdList$',
                            valueList: {
                              Input_662082: '$okData_902563.staffIdList$',
                            },
                          },
                          line_number: 3,
                          callback1: [],
                        },
                        {
                          type: 'console',
                          dataId: 170004185129610050,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '3099217',
                            pageJsonId: 30,
                            value: ['====弹窗确认回调===', '$okData_902563$'],
                          },
                          line_number: 4,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal178.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal178,
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
                formItemIndex={2}
                fieldName={'staffIdList'}
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
                name={'审批人列表'}
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
                formItemIndex={3}
                fieldName={'name'}
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
                  id: 'Input_8675667',
                  uid: 'Input_8675667',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_8675667')}
                {...injectData}
              />
              <Input
                name={'会签流程类型隐藏'}
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
                placeholder={'会签流程类型隐藏'}
                formItemIndex={4}
                fieldName={'meetingOrderType'}
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
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_650024')}
                {...injectData}
              />
              <TextArea
                name={'发起会签说明'}
                placeholder={'请输入'}
                fieldName={'meetingRemark'}
                formItemIndex={5}
                labelCol={'6'}
                wrapperCol={18}
                selfSpan={24}
                value={'请会签'}
                maxLength={256}
                $$componentItem={{
                  id: 'TextArea_30_11219',
                  uid: 'TextArea_30_11219',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'TextArea_30_11219')}
                {...injectData}
              />
            </Form>
          </View>
          <View
            className="View_View_30_1122_56129022"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_30_1122_56129022',
              uid: 'View_30_1122_56129022',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px 0px 12px 0px',
              width: '100%',
              borderRadius: '0px 0px 2px 2px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 1px 0px 0px #e7e8ea inset',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_1122_56129022')}
            {...injectData}
          >
            <Button
              name={'取消'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              classification={'default'}
              type={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_122_408084',
                uid: 'Button_30_122_408084',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatacloseModal130: any = [
                  {
                    type: 'closeModal',
                    dataId: 166928058970586270,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '152619',
                      pageJsonId: 30,
                    },
                    line_number: 1,
                  },
                ];
                eventDatacloseModal130.params =
                  [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacloseModal130, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_122_408084')}
              {...injectData}
            />
            <Button
              name={'提交'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              classification={'default'}
              type={'primary'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_121_490898',
                uid: 'Button_30_121_490898',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '0px 0px 0px 24px' }}
              onClick={(e: any) => {
                const eventDatavalidateCurrentForm73: any = [
                  {
                    type: 'validateCurrentForm',
                    dataId: 166928052840169440,
                    options: {
                      compId: 'Form_30_1121',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Form',
                      id: '047197',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setLoading',
                        dataId: 166928054636942100,
                        shielding: true,
                        options: {
                          compId: 'Button_30_121_490898',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '2196223',
                          loading: true,
                        },
                        line_number: 2,
                      },
                      {
                        type: 'setLoading',
                        dataId: 168923348832766940,
                        options: {
                          compId: 'View_30_1',
                          compLib: 'custom',
                          pageJsonId: 30,
                          compName: 'View',
                          id: '4424271',
                          loading: true,
                        },
                        line_number: 3,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166928052840144930,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '4398375',
                          pageJsonId: 30,
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          serviceVersionId: '883233259238359040',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'rhin',
                          _serviceId: '883177501513625600',
                          _serviceTitle:
                            '流程会签启动-zzz: flowCountersignStart',
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
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'getFieldsValue',
                                    ],
                                    code: 'meetingOrderType',
                                  },
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
                                  code: 'orderId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.orderId',
                                  compType: 'Input',
                                  name: 'orderId',
                                  parents: ['body'],
                                  id: 'body.orderId',
                                  dataKey: '574745_body.orderId',
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
                                  value: { type: [], code: '' },
                                },
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
                                    type: ['page', 'url'],
                                    code: 'busiObjNbr',
                                  },
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
                                  value: { type: [], code: '' },
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
                                    type: ['page', 'url'],
                                    code: 'workItemId',
                                  },
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
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'getFieldsValue',
                                    ],
                                    code: 'meetingType',
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
                                  dataKey: '574745_body.flowCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'COMMON_MEETING_FLOW',
                                  },
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
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'getFieldsValue',
                                    ],
                                    code: 'meetingRemark',
                                  },
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
                                    type: ['page', 'url'],
                                    code: 'workId',
                                  },
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
                                  code: 'signUserList',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'userName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.signUserList.userName',
                                      compType: 'Input',
                                      name: 'userName',
                                      parents: ['body', 'signUserList'],
                                      id: 'body.signUserList.userName',
                                      dataKey:
                                        '574745_body.signUserList.userName',
                                    },
                                    {
                                      code: 'userCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.signUserList.userCode',
                                      compType: 'Input',
                                      name: 'userCode',
                                      parents: ['body', 'signUserList'],
                                      id: 'body.signUserList.userCode',
                                      dataKey:
                                        '574745_body.signUserList.userCode',
                                    },
                                  ],
                                  _id: 'body.signUserList',
                                  compType: 'Input',
                                  name: 'signUserList',
                                  parents: ['body'],
                                  id: 'body.signUserList',
                                  dataKey: '574745_body.signUserList',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'getFieldsValue',
                                    ],
                                    code: 'staffIdList',
                                  },
                                },
                                {
                                  code: 'tacheAttachments',
                                  attrType: 'objectArray',
                                  children: [
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
                                      dataKey:
                                        '574745_body.tacheAttachments.fileName',
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
                                      dataKey:
                                        '574745_body.tacheAttachments.url',
                                    },
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
                                      dataKey:
                                        '574745_body.tacheAttachments.fileId',
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
                                  code: 'sameList',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'nextTache',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.nextTache',
                                      compType: 'Input',
                                      name: 'nextTache',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.nextTache',
                                      dataKey: '574745_body.sameList.nextTache',
                                    },
                                    {
                                      code: 'nextStaffName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.nextStaffName',
                                      compType: 'Input',
                                      name: 'nextStaffName',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.nextStaffName',
                                      dataKey:
                                        '574745_body.sameList.nextStaffName',
                                    },
                                    {
                                      code: 'workItemId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.workItemId',
                                      compType: 'Input',
                                      name: 'workItemId',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.workItemId',
                                      dataKey:
                                        '574745_body.sameList.workItemId',
                                    },
                                    {
                                      code: 'busiObjNbr',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.busiObjNbr',
                                      compType: 'Input',
                                      name: 'busiObjNbr',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.busiObjNbr',
                                      dataKey:
                                        '574745_body.sameList.busiObjNbr',
                                    },
                                    {
                                      code: 'tachePass',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.tachePass',
                                      compType: 'Input',
                                      name: 'tachePass',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.tachePass',
                                      dataKey: '574745_body.sameList.tachePass',
                                    },
                                    {
                                      code: 'workId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.workId',
                                      compType: 'Input',
                                      name: 'workId',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.workId',
                                      dataKey: '574745_body.sameList.workId',
                                    },
                                    {
                                      code: 'tacheRemark',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.tacheRemark',
                                      compType: 'Input',
                                      name: 'tacheRemark',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.tacheRemark',
                                      dataKey:
                                        '574745_body.sameList.tacheRemark',
                                    },
                                    {
                                      code: 'nextStaff',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.sameList.nextStaff',
                                      compType: 'Input',
                                      name: 'nextStaff',
                                      parents: ['body', 'sameList'],
                                      id: 'body.sameList.nextStaff',
                                      dataKey: '574745_body.sameList.nextStaff',
                                    },
                                  ],
                                  _id: 'body.sameList',
                                  compType: 'Input',
                                  name: 'sameList',
                                  parents: ['body'],
                                  id: 'body.sameList',
                                  dataKey: '574745_body.sameList',
                                  value: {
                                    type: ['context', '$state.sameList$'],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '574745_body',
                            },
                          ],
                          _capabilityCode: 'flowCountersignStart',
                          _apiCode: 'flowCountersignStart',
                          _sourceName: '流程会签启动-zzz',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '087103',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_4398375?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166928052840102200,
                            elseIfs: [],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166928052840118200,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '281264',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '发起会签成功',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'showCustomModal',
                                dataId: 167024331116985730,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '680734',
                                  pageJsonId: 30,
                                  modalname: '/auditSubmitPop',
                                  pageId: '891650785732694016',
                                  paramsObj: {
                                    nextStaffName:
                                      '$Form_30_1121.staffNameList$',
                                    instNbr: '$urlParam.busiObjNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    nextStaffName:
                                      '$Form_30_1121.staffNameList$',
                                    instNbr: '$urlParam.busiObjNbr$',
                                  },
                                  modalPath: '/auditSubmitPop',
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'closeModal',
                                    dataId: 167024332016038800,
                                    options: {
                                      compId: 'closeModal',
                                      compName: 'page',
                                      id: '525559',
                                      pageJsonId: 30,
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'okCallbackData',
                                    dataId: 167024332577009800,
                                    options: {
                                      compId: 'okCallbackData',
                                      compName: 'page',
                                      id: '219794',
                                      pageJsonId: 30,
                                    },
                                    line_number: 9,
                                  },
                                ],
                                callback2: [],
                              },
                              {
                                type: 'console',
                                dataId: 170006429504097120,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '8267401',
                                  pageJsonId: 30,
                                  value: ['===表单值====', '$Form_30_1121$'],
                                },
                                line_number: 10,
                              },
                            ],
                          },
                          {
                            type: 'setLoading',
                            dataId: 166928055605827230,
                            shielding: true,
                            options: {
                              compId: 'Button_30_121_490898',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '2547316',
                              loading: false,
                            },
                            line_number: 11,
                          },
                          {
                            type: 'setLoading',
                            dataId: 168923350601555330,
                            options: {
                              compId: 'View_30_1',
                              compLib: 'custom',
                              pageJsonId: 30,
                              compName: 'View',
                              id: '67810121',
                              loading: false,
                            },
                            line_number: 12,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166928052840105400,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '1191599',
                              pageJsonId: 30,
                              type: 'error',
                              value: '发起会签失败',
                            },
                            line_number: 13,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166928056371313000,
                            shielding: true,
                            options: {
                              compId: 'Button_30_121_490898',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '7431338',
                              loading: false,
                            },
                            line_number: 14,
                          },
                          {
                            type: 'setLoading',
                            dataId: 168923351517582430,
                            options: {
                              compId: 'View_30_1',
                              compLib: 'custom',
                              pageJsonId: 30,
                              compName: 'View',
                              id: '76934',
                              loading: false,
                            },
                            line_number: 15,
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166928052840166000,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '485958',
                          pageJsonId: 30,
                          type: 'info',
                          value: '表单验证失败',
                        },
                        line_number: 16,
                      },
                    ],
                  },
                ];
                eventDatavalidateCurrentForm73.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatavalidateCurrentForm73,
                  { e },
                  'validateCurrentForm',
                  {
                    id: 'validateCurrentForm',
                    name: 'validateCurrentForm',
                    type: 'validateCurrentForm',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_121_490898')}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MeetingCreatepop$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    meetingType: '',
    meetingOrderType: '',
    sameList: '',
    workItemId: '',
    approveList: '',
  },
});
