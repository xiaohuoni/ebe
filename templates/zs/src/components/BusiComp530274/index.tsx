// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Form,
  Input,
  Radio,
  Select,
  StdUpload,
  TextArea,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp530274$$BusiComp: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    const eventDataapiRequest10: any = [
      {
        type: 'apiRequest',
        dataId: 166012414871678980,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '229455',
          pageJsonId: '530274',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getFlowItemSimpleInfo',
          _apiCode: 'getFlowItemSimpleInfo',
          _source: 'rhin',
          _serviceId: '874132034304221184',
          _serviceTitle: '获取流程环节实例简要信息: getFlowItemSimpleInfo',
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
              dataKey: '229455_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '229455_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '229455_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'workItemId',
                  name: '环节实例id',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.workItemId',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.workItemId',
                  dataKey: '229455_body.workItemId',
                  value: { type: ['page', 'url'], code: 'workItemId' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '229455_body',
              key: '3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 166012418641223420,
            shielding: true,
            options: {
              compId: 'Input_658782',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '827677',
              value: '$reply_229455?.resultData.traceCode$',
            },
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 166012529591252740,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '2343062',
                  pageJsonId: '530274',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'queryNextTacheList',
                  _apiCode: 'queryNextTacheList',
                  _source: 'rhin',
                  _serviceId: '874463664148983808',
                  _serviceTitle: '获取下一环节信息: queryNextTacheList',
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
                      dataKey: '2343062_header',
                      key: '0',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '2343062_path',
                      key: '1',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '2343062_query',
                      key: '2',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'tachePass',
                          name: 'tachePass',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tachePass',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.tachePass',
                          dataKey: '2343062_body.tachePass',
                          value: {
                            type: ['form', 'Form_0063102', 'getFieldsValue'],
                            code: 'tachePass',
                          },
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-5',
                        },
                        {
                          code: 'orderType',
                          name: 'orderType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orderType',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.orderType',
                          dataKey: '2343062_body.orderType',
                          value: { type: ['customize'], code: '1100' },
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-7',
                        },
                        {
                          code: 'workId',
                          name: 'workId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.workId',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.workId',
                          dataKey: '2343062_body.workId',
                          value: { type: ['page', 'url'], code: 'workId' },
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-1',
                        },
                        {
                          code: 'tacheCode',
                          name: 'tacheCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tacheCode',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.tacheCode',
                          dataKey: '2343062_body.tacheCode',
                          value: {
                            type: ['form', 'Form_0063102', 'getFieldsValue'],
                            code: 'tacheCode',
                          },
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-3',
                        },
                        {
                          code: 'workItemId',
                          name: 'workItemId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.workItemId',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.workItemId',
                          dataKey: '2343062_body.workItemId',
                          value: { type: ['page', 'url'], code: 'workItemId' },
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-2',
                        },
                        {
                          code: 'level',
                          name: '最高审批等级',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.level',
                          compType: 'Input',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-0',
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
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-4',
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
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-6',
                        },
                        {
                          code: 'sameList',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-0',
                            },
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-1',
                            },
                            {
                              code: 'createTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.createTime',
                              compType: 'Input',
                              name: 'createTime',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-2',
                            },
                            {
                              code: 'effectDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.effectDate',
                              compType: 'Input',
                              name: 'effectDate',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-3',
                            },
                            {
                              code: 'handleObjCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.handleObjCode',
                              compType: 'Input',
                              name: 'handleObjCode',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-4',
                            },
                            {
                              code: 'meetingRemark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.meetingRemark',
                              compType: 'Input',
                              name: 'meetingRemark',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-5',
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
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-6',
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
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-7',
                            },
                            {
                              code: 'nextTache',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.nextTache',
                              compType: 'Input',
                              name: 'nextTache',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-8',
                            },
                            {
                              code: 'approveOrdNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.approveOrdNbr',
                              compType: 'Input',
                              name: 'approveOrdNbr',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-9',
                            },
                            {
                              code: 'busiObjStatus',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.busiObjStatus',
                              compType: 'Input',
                              name: 'busiObjStatus',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-10',
                            },
                            {
                              code: 'busiObjSubType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.busiObjSubType',
                              compType: 'Input',
                              name: 'busiObjSubType',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-11',
                            },
                            {
                              code: 'lastHandleTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.lastHandleTime',
                              compType: 'Input',
                              name: 'lastHandleTime',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-12',
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
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-13',
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
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-14',
                            },
                            {
                              code: 'tacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.tacheCode',
                              compType: 'Input',
                              name: 'tacheCode',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-15',
                            },
                            {
                              code: 'tacheName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.tacheName',
                              compType: 'Input',
                              name: 'tacheName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-16',
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
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-17',
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
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-18',
                            },
                            {
                              code: 'handleStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.handleStaffName',
                              compType: 'Input',
                              name: 'handleStaffName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-19',
                            },
                            {
                              code: 'keyId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.keyId',
                              compType: 'Input',
                              name: 'keyId',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-20',
                            },
                            {
                              code: 'title',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.title',
                              compType: 'Input',
                              name: 'title',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-21',
                            },
                            {
                              code: 'handleObjType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.handleObjType',
                              compType: 'Input',
                              name: 'handleObjType',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-8',
                              key: '3-8-22',
                            },
                          ],
                          _id: 'body.sameList',
                          compType: 'Input',
                          name: 'sameList',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-8',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '2343062_body',
                      key: '3',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166012535367371420,
                    shielding: true,
                    options: {
                      compId: 'Select_6041524',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Select',
                      id: '15267',
                      data: '$reply_2343062?.resultData$',
                      labelKey: 'tacheName',
                      valueKey: 'tacheCode',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'setValue',
            dataId: 166096278677402460,
            shielding: true,
            options: {
              compId: 'Input_764551',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '853454349',
              value: '$reply_229455?.resultData.endLevel$',
            },
            line_number: 5,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166096280123725100,
            shielding: true,
            options: {
              compId: 'Input_6412724',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '2081568',
              value: '$reply_229455?.resultData.meetingType$',
            },
            line_number: 6,
            callback1: [],
          },
          {
            type: 'setCompNestedState',
            dataId: 166096367860579000,
            shielding: true,
            options: {
              compId: 'setCompNestedState',
              compName: 'page',
              id: '44443',
              pageJsonId: '530274',
              stateval: '$reply_229455?.resultData.showMeetingBtn$',
              stateName: 'showMeetingBtn',
            },
            line_number: 7,
          },
          {
            type: 'console',
            dataId: 166096452223798530,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '811026',
              pageJsonId: '530274',
              value: ['$state.showMeetingBtn$'],
            },
            line_number: 8,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest10.params = [] || [];
    CMDGenerator(eventDataapiRequest10, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {
    const eventDataifelse9: any = [
      {
        type: 'ifelse',
        condition: [
          {
            options: { context: '$state.tacheCode$', operate: 'notEmpty' },
            condId: '29876',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166096552668492670,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166807140241930780,
            children: [
              {
                dataName: 'action',
                dataId: 166807149212850020,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166807149212881700,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                ],
                todoOptions: ['compId', 'valueList'],
                options: {
                  compId: 'TextArea_4776246',
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'TextArea',
                  id: '485138',
                  valueList: { TextArea_4776246: '$state.optResultDesc$' },
                },
                actionObjId: 'TextArea_4776246',
                actionObjName: 'TextArea',
                value: 'setValue',
                compLib: 'comm',
                line_number: 25,
              },
            ],
            condition: [
              {
                options: {
                  context: '$state.optResultDesc$',
                  operate: 'notEmpty',
                },
                condId: '9920066',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '处理意见变更时',
            callback: [
              {
                type: 'setValue',
                dataId: 166807149212850020,
                options: {
                  compId: 'TextArea_4776246',
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'TextArea',
                  id: '485138',
                  valueList: { TextArea_4776246: '$state.optResultDesc$' },
                },
                line_number: 25,
                callback1: [],
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '400362',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.hidePass$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166384729684499840,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166384734790753000,
                options: {
                  compId: 'Radio_774135',
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Radio',
                  id: '785422',
                },
                line_number: 3,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '400362',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.readHandleType$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166536844997735040,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166572936949545700,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166572948747915330,
                    children: [],
                    todoOptions: ['visible'],
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '975685',
                      visible: 'true',
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 7,
                  },
                  {
                    dataName: 'action',
                    dataId: 166572951067927870,
                    children: [],
                    todoOptions: ['required'],
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '436342',
                      required: '',
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 8,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.readHandleType$',
                      operate: '==',
                      manualValue: '1',
                    },
                    condId: '355009',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '选择阅办(1)',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 166572948747915330,
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '975685',
                      visible: 'true',
                    },
                    line_number: 7,
                  },
                  {
                    type: 'setRequired',
                    dataId: 166572951067927870,
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '436342',
                      required: '',
                    },
                    line_number: 8,
                  },
                ],
              },
              {
                dataName: 'elseIf',
                dataId: 166572937094324320,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166572953815032060,
                    children: [],
                    todoOptions: ['visible'],
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '820784',
                      visible: 'true',
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 9,
                  },
                  {
                    dataName: 'action',
                    dataId: 166572952336728600,
                    children: [],
                    todoOptions: ['required'],
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '787781',
                      required: 'true',
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 10,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.readHandleType$',
                      operate: '==',
                      manualValue: '2',
                    },
                    condId: '938819',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '强制阅办(2)',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 166572953815032060,
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '820784',
                      visible: 'true',
                    },
                    line_number: 9,
                  },
                  {
                    type: 'setRequired',
                    dataId: 166572952336728600,
                    options: {
                      compId: 'Input_668689_0650375',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '787781',
                      required: 'true',
                    },
                    line_number: 10,
                  },
                ],
              },
            ],
            line_number: 4,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166536864383314270,
                options: {
                  compId: 'Input_668689_0650375',
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Input',
                  id: '7711489',
                },
                line_number: 5,
              },
              {
                type: 'setRequired',
                dataId: 166572950151911330,
                options: {
                  compId: 'Input_668689_0650375',
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Input',
                  id: '29169',
                },
                line_number: 6,
              },
            ],
          },
          {
            type: 'console',
            dataId: 166236098209199550,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '129506',
              pageJsonId: '530274',
              value: ['$state.meetingOrderType$'],
            },
            line_number: 11,
          },
          {
            type: 'setValue',
            dataId: 166096673159669660,
            options: {
              compId: 'Input_658782',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '472569',
              value: '$state.tacheCode$',
            },
            line_number: 12,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166219128008467840,
            options: {
              compId: 'Input_6412724',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '240369',
              value: '$state.meetingType$',
            },
            line_number: 13,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166219129668426240,
            options: {
              compId: 'Input_764551',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '661146',
              value: '$state.endLevel$',
            },
            line_number: 14,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166219183443717800,
            options: {
              compId: 'Input_587676',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '955402',
              value: '$state.firstTacheFlag$',
            },
            line_number: 15,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166219322803034370,
            options: {
              compId: 'Input_233347',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '909114',
              value: '$state.meetingOrderType$',
            },
            line_number: 16,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166536559439667870,
            options: {
              compId: 'TextArea_4776246',
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'TextArea',
              id: '4784285',
              value: '$state.optResultDesc$',
            },
            line_number: 17,
            callback1: [],
          },
          {
            type: 'setDataSource',
            dataId: 166547651488538430,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '871289',
              pageJsonId: '530274',
              dataSourceId: 166547644187262820,
              dataSourceName: 'globalParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '8768114',
                  code: 'flowCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '流程编码' },
                  value: { type: ['context', '$state.flowCode$'], code: '' },
                },
                {
                  attrId: '419751',
                  code: 'popupType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '处理人弹出框类型' },
                },
                {
                  attrId: '001699',
                  code: 'workItemId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '流程环节实例id' },
                  value: { type: ['context', '$state.workItemId$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 18,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadDataSource',
            dataId: 166236787874345340,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '5091214',
              pageJsonId: '530274',
              dataSourceId: 166236781087731100,
              dataSourceName: 'nextTacheList',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '005631',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'header',
                },
                {
                  attrId: '801318',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'path',
                },
                {
                  attrId: '235973',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'query',
                },
                {
                  attrId: '628615',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '373283',
                      code: 'tachePass',
                      name: '审批结果',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.tachePass',
                      value: {
                        type: ['form', 'Form_0063102', 'getFieldsValue'],
                        code: 'tachePass',
                      },
                    },
                    {
                      attrId: '951065',
                      code: 'orderType',
                      name: '流程订单类型',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.orderType',
                    },
                    {
                      attrId: '777996',
                      code: 'workItemId',
                      name: '流程环节实例id',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.workItemId',
                      value: { type: ['page', 'url'], code: 'workItemId' },
                    },
                    {
                      attrId: '130326',
                      code: 'endLevel',
                      name: '最高审批等级',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.endLevel',
                      value: {
                        type: ['context', '$state.endLevel$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '100482',
                      code: 'tacheCode',
                      name: '环节编码',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.tacheCode',
                      value: {
                        type: ['context', '$state.tacheCode$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '174732',
                      code: 'flowCode',
                      name: '流程编码',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.flowCode',
                    },
                    {
                      attrId: '167252',
                      code: 'workId',
                      name: '流程实例id',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.workId',
                      value: { type: ['page', 'url'], code: 'workId' },
                    },
                  ],
                  key: 'body',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '961445',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '348994',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '725231',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '972205',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '927784',
                      code: 'tacheName',
                      name: '环节名称',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '7057',
                      code: 'tacheCode',
                      name: '环节编码',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '783881',
                      code: 'hideUserSelect',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                  ],
                },
              ],
              otherObjectArrayOptions: {},
            },
            line_number: 19,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '975184',
                    options: {
                      context: '$refData.current.nextTacheList.resultData$',
                      operate: 'notEmpty',
                      manualValue: '1',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context:
                        '$refData.current.nextTacheList.resultData?.length$',
                      operate: '==',
                      manualValue: '1',
                    },
                    condId: '8359077',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166368105243411940,
                elseIfs: [],
                line_number: 20,
                callback1: [
                  {
                    type: 'console',
                    dataId: 166368105243469120,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '83564346',
                      pageJsonId: '6260603',
                      value: ['我只有一条数据'],
                    },
                    line_number: 21,
                  },
                  {
                    type: 'setValue',
                    dataId: 166368105243444160,
                    options: {
                      compId: 'Select_6041524',
                      compLib: 'comm',
                      pageJsonId: '6260603',
                      compName: 'Select',
                      id: '0452475',
                      value:
                        '$refData.current.nextTacheList.resultData[0].tacheCode$',
                      valueList: {
                        Select_6041524:
                          '$refData.current.nextTacheList.resultData[0].tacheCode$',
                      },
                    },
                    line_number: 22,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166368105243424030,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '8826841',
                          pageJsonId: '6260603',
                          code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                        },
                        line_number: 23,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166368105243456200,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '1698856',
                              pageJsonId: '6260603',
                              customFuncName: 'nextTacheChange',
                              customFuncParams: '$data_8826841$',
                            },
                            line_number: 24,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse9.params = [] || [];
    CMDGenerator(eventDataifelse9, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_530274__"
    >
      <Card
        name={'流程处理'}
        cardIconType={'middle'}
        title={'审批信息'}
        bordered={true}
        size={'default'}
        hasHeader={true}
        hasIcon={true}
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
          id: 'Card_674854',
          uid: 'Card_674854',
          type: 'Card',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          padding: '20px 20px 20px 20px',
          overflowY: 'visible',
          margin: '0 0 16px 0',
        }}
        ref={(r: any) => (refs['Card_674854'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6881883',
            uid: 'View_6881883',
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
          ref={(r: any) => (refs['View_6881883'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={'16'}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_0063102'}
            $$componentItem={{
              id: 'Form_0063102',
              uid: 'Form_0063102',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_0063102'] = r)}
            {...injectData}
          >
            <Radio
              name={'是否通过'}
              radioType={'Radio'}
              optionMarginRight={0}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={0}
              fieldName={'tachePass'}
              defaultValue={'pass'}
              dataSource={[
                { id: '862079', label: '同意', value: 'pass' },
                { id: '722802', label: '不同意', value: 'refuse' },
              ]}
              $$componentItem={{
                id: 'Radio_774135',
                uid: 'Radio_774135',
                type: 'Radio',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue7: any = [
                  {
                    type: 'clearValue',
                    dataId: 166117141387250340,
                    options: {
                      compId: 'Select_6041524',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Select',
                      id: '859948',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue7.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataclearValue7, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue8: any = [
                  {
                    type: 'clearValue',
                    dataId: 166210670801825440,
                    options: {
                      compId: 'Input_668689',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '2257707',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearValue8.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataclearValue8, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataifelse22: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '146032',
                        options: {
                          useManual: true,
                          useObject: false,
                          operate: '==',
                          manualValue: 'refuse',
                        },
                        conditionType: 'checkValue',
                        objType: 'Radio',
                        objId: 'Radio_774135',
                      },
                    ],
                    dataId: 166117027326730500,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166117033996744670,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166117160398699070,
                            children: [],
                            todoOptions: ['visible'],
                            options: {
                              compId: 'Select_6041524',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Select',
                              id: '731469',
                              visible: 'true',
                            },
                            actionObjId: 'Select_6041524',
                            actionObjName: 'Select',
                            value: 'setVisible',
                            compLib: 'comm',
                            elseIfs: [],
                            line_number: 15,
                          },
                          {
                            dataName: 'action',
                            dataId: 166210677212206180,
                            children: [],
                            todoOptions: ['visible'],
                            options: {
                              compId: 'Input_668689',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Input',
                              id: '351506',
                              visible: 'true',
                            },
                            actionObjId: 'Input_668689',
                            actionObjName: 'Input',
                            value: 'setVisible',
                            compLib: 'comm',
                            elseIfs: [],
                            line_number: 16,
                          },
                          {
                            dataName: 'action',
                            dataId: 166236961046413600,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166236961046419360,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166944349754959040,
                                    children: [],
                                    todoOptions: ['valueArray'],
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '828817',
                                      pageJsonId: '530274',
                                      value: ['ccccccccccccccc'],
                                    },
                                    actionObjId: 'debug',
                                    actionObjName: 'system',
                                    value: 'console',
                                    shielding: true,
                                    line_number: 18,
                                  },
                                  {
                                    dataName: 'condition',
                                    dataId: 166368111522588380,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166368111522547230,
                                        children: [],
                                        todoOptions: ['valueArray'],
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '555361',
                                          pageJsonId: '6260603',
                                          value: ['我只有一条数据'],
                                        },
                                        actionObjId: 'debug',
                                        actionObjName: 'system',
                                        value: 'console',
                                        elseIfs: [],
                                        shielding: true,
                                        line_number: 20,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166368111522535600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166368111522546850,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166368111522578430,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166368111522548400,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 166368111522520300,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 166368111522560800,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                            elseIfs: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 166368111522507740,
                                                            children: [],
                                                            value: 'callback2',
                                                            params: [],
                                                            elseIfs: [],
                                                          },
                                                        ],
                                                        todoOptions: [
                                                          'customFuncName',
                                                          'customFuncParams',
                                                        ],
                                                        options: {
                                                          compId:
                                                            'callSelfFunc',
                                                          compName: 'system',
                                                          id: '856161',
                                                          pageJsonId: '6260603',
                                                          customFuncName:
                                                            'nextTacheChange',
                                                          customFuncParams:
                                                            '$data_406126$',
                                                        },
                                                        actionObjId:
                                                          'callSelfFunc',
                                                        actionObjName: 'system',
                                                        value: 'callSelfFunc',
                                                        elseIfs: [],
                                                        line_number: 23,
                                                      },
                                                    ],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166368111522540960,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'actionTitle',
                                                  'editorCode',
                                                ],
                                                options: {
                                                  compId: 'customActionCode',
                                                  compName: 'page',
                                                  id: '406126',
                                                  pageJsonId: '6260603',
                                                  code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                                },
                                                actionObjId: 'customActionCode',
                                                actionObjName: 'page',
                                                value: 'customActionCode',
                                                elseIfs: [],
                                                line_number: 22,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: ['value'],
                                        options: {
                                          compId: 'Select_6041524',
                                          compLib: 'comm',
                                          pageJsonId: '6260603',
                                          compName: 'Select',
                                          id: '894812',
                                          value:
                                            '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                        },
                                        actionObjId: 'Select_6041524',
                                        actionObjName: 'Select',
                                        value: 'setValue',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 21,
                                      },
                                    ],
                                    elseIfs: [],
                                    condition: [
                                      {
                                        condId: '975184',
                                        options: {
                                          context:
                                            '$refData.current.nextTacheList.resultData$',
                                          operate: 'notEmpty',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                      {
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context:
                                            '$refData.current.nextTacheList.resultData.length$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        condId: '18781',
                                        connector: '&&',
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    desc: '如果只有一条数据',
                                    line_number: 19,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                                elseIfs: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166236961046401900,
                                children: [],
                                value: 'callback2',
                                params: [],
                                elseIfs: [],
                              },
                            ],
                            todoOptions: [
                              'selectServerDataSource',
                              'dataSourceReloadFilter',
                            ],
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '625243',
                              pageJsonId: '530274',
                              dataSourceId: 166236781087731100,
                              dataSourceName: 'nextTacheList',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '005631',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'header',
                                },
                                {
                                  attrId: '801318',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'path',
                                },
                                {
                                  attrId: '235973',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'query',
                                },
                                {
                                  attrId: '628615',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '373283',
                                      code: 'tachePass',
                                      name: '审批结果',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.tachePass',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_0063102',
                                          'getFieldsValue',
                                        ],
                                        code: 'tachePass',
                                      },
                                    },
                                    {
                                      attrId: '951065',
                                      code: 'orderType',
                                      name: '流程订单类型',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.orderType',
                                    },
                                    {
                                      attrId: '777996',
                                      code: 'workItemId',
                                      name: '流程环节实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.workItemId',
                                      value: {
                                        type: ['page', 'url'],
                                        code: 'workItemId',
                                      },
                                    },
                                    {
                                      attrId: '130326',
                                      code: 'endLevel',
                                      name: '最高审批等级',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.endLevel',
                                      value: {
                                        type: ['context', '$state.endLevel$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '100482',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.tacheCode',
                                      value: {
                                        type: ['context', '$state.tacheCode$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '174732',
                                      code: 'flowCode',
                                      name: '流程编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.flowCode',
                                    },
                                    {
                                      attrId: '167252',
                                      code: 'workId',
                                      name: '流程实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.workId',
                                      value: {
                                        type: ['page', 'url'],
                                        code: 'workId',
                                      },
                                    },
                                  ],
                                  key: 'body',
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '961445',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '348994',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '725231',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '972205',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '927784',
                                      code: 'tacheName',
                                      name: '环节名称',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      parentCode: 'resultData',
                                      parentKey: 'resultData',
                                    },
                                    {
                                      attrId: '7057',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      parentCode: 'resultData',
                                      parentKey: 'resultData',
                                    },
                                    {
                                      attrId: '783881',
                                      code: 'hideUserSelect',
                                      name: '新增节点',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      parentCode: 'resultData',
                                      parentKey: 'resultData',
                                    },
                                  ],
                                },
                              ],
                              otherObjectArrayOptions: {},
                            },
                            actionObjId: 'reloadDataSource',
                            actionObjName: 'page',
                            value: 'reloadDataSource',
                            elseIfs: [],
                            line_number: 17,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        desc: '值为通过',
                        callback: [
                          {
                            type: 'setVisible',
                            dataId: 166117160398699070,
                            options: {
                              compId: 'Select_6041524',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Select',
                              id: '731469',
                              visible: 'true',
                            },
                            line_number: 15,
                          },
                          {
                            type: 'setVisible',
                            dataId: 166210677212206180,
                            options: {
                              compId: 'Input_668689',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Input',
                              id: '351506',
                              visible: 'true',
                            },
                            line_number: 16,
                          },
                          {
                            type: 'reloadDataSource',
                            dataId: 166236961046413600,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '625243',
                              pageJsonId: '530274',
                              dataSourceId: 166236781087731100,
                              dataSourceName: 'nextTacheList',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '005631',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'header',
                                },
                                {
                                  attrId: '801318',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'path',
                                },
                                {
                                  attrId: '235973',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  key: 'query',
                                },
                                {
                                  attrId: '628615',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '373283',
                                      code: 'tachePass',
                                      name: '审批结果',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.tachePass',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_0063102',
                                          'getFieldsValue',
                                        ],
                                        code: 'tachePass',
                                      },
                                    },
                                    {
                                      attrId: '951065',
                                      code: 'orderType',
                                      name: '流程订单类型',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.orderType',
                                    },
                                    {
                                      attrId: '777996',
                                      code: 'workItemId',
                                      name: '流程环节实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.workItemId',
                                      value: {
                                        type: ['page', 'url'],
                                        code: 'workItemId',
                                      },
                                    },
                                    {
                                      attrId: '130326',
                                      code: 'endLevel',
                                      name: '最高审批等级',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.endLevel',
                                      value: {
                                        type: ['context', '$state.endLevel$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '100482',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.tacheCode',
                                      value: {
                                        type: ['context', '$state.tacheCode$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '174732',
                                      code: 'flowCode',
                                      name: '流程编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.flowCode',
                                    },
                                    {
                                      attrId: '167252',
                                      code: 'workId',
                                      name: '流程实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      key: 'body.workId',
                                      value: {
                                        type: ['page', 'url'],
                                        code: 'workId',
                                      },
                                    },
                                  ],
                                  key: 'body',
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '961445',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '348994',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '725231',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '972205',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '927784',
                                      code: 'tacheName',
                                      name: '环节名称',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      parentCode: 'resultData',
                                      parentKey: 'resultData',
                                    },
                                    {
                                      attrId: '7057',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      parentCode: 'resultData',
                                      parentKey: 'resultData',
                                    },
                                    {
                                      attrId: '783881',
                                      code: 'hideUserSelect',
                                      name: '新增节点',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      parentCode: 'resultData',
                                      parentKey: 'resultData',
                                    },
                                  ],
                                },
                              ],
                              otherObjectArrayOptions: {},
                            },
                            line_number: 17,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 166944349754959040,
                                shielding: true,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '828817',
                                  pageJsonId: '530274',
                                  value: ['ccccccccccccccc'],
                                },
                                line_number: 18,
                              },
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '975184',
                                    options: {
                                      context:
                                        '$refData.current.nextTacheList.resultData$',
                                      operate: 'notEmpty',
                                      manualValue: '1',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context:
                                        '$refData.current.nextTacheList.resultData.length$',
                                      operate: '==',
                                      manualValue: '1',
                                    },
                                    condId: '18781',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166368111522588380,
                                elseIfs: [],
                                line_number: 19,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166368111522547230,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '555361',
                                      pageJsonId: '6260603',
                                      value: ['我只有一条数据'],
                                    },
                                    line_number: 20,
                                  },
                                  {
                                    type: 'setValue',
                                    dataId: 166368111522535600,
                                    options: {
                                      compId: 'Select_6041524',
                                      compLib: 'comm',
                                      pageJsonId: '6260603',
                                      compName: 'Select',
                                      id: '894812',
                                      value:
                                        '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                    },
                                    line_number: 21,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 166368111522578430,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '406126',
                                          pageJsonId: '6260603',
                                          code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                        },
                                        line_number: 22,
                                        callback1: [
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 166368111522520300,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '856161',
                                              pageJsonId: '6260603',
                                              customFuncName: 'nextTacheChange',
                                              customFuncParams: '$data_406126$',
                                            },
                                            line_number: 23,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 3,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166236694988686400,
                        options: {
                          compId: 'Input_668689',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Input',
                          id: '3881435',
                        },
                        line_number: 4,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '993841',
                            options: {
                              useManual: true,
                              useObject: false,
                              operate: '==',
                              manualValue: 'Y',
                            },
                            conditionType: 'checkValue',
                            objType: 'Input',
                            objId: 'Input_587676',
                          },
                        ],
                        dataId: 166237948836877000,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166237956035378880,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166237957532121660,
                                children: [],
                                todoOptions: ['visible'],
                                options: {
                                  compId: 'Select_6041524',
                                  compLib: 'comm',
                                  pageJsonId: '530274',
                                  compName: 'Select',
                                  id: '436883',
                                  visible: 'true',
                                },
                                actionObjId: 'Select_6041524',
                                actionObjName: 'Select',
                                value: 'setVisible',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 7,
                              },
                              {
                                dataName: 'action',
                                dataId: 166237956571346340,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166237956571417920,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166944345651861120,
                                        children: [],
                                        todoOptions: ['valueArray'],
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '7840365',
                                          pageJsonId: '530274',
                                          value: ['bbbbbbbbbbbbbbbbbb'],
                                        },
                                        actionObjId: 'debug',
                                        actionObjName: 'system',
                                        value: 'console',
                                        shielding: true,
                                        line_number: 9,
                                      },
                                      {
                                        dataName: 'condition',
                                        dataId: 166368109878682940,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166368109878672640,
                                            children: [],
                                            todoOptions: ['valueArray'],
                                            options: {
                                              compId: 'debug',
                                              compName: 'system',
                                              id: '696208',
                                              pageJsonId: '6260603',
                                              value: ['我只有一条数据'],
                                            },
                                            actionObjId: 'debug',
                                            actionObjName: 'system',
                                            value: 'console',
                                            elseIfs: [],
                                            shielding: true,
                                            line_number: 11,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166368109878682240,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166368109878678080,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166368109878607550,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166368109878679650,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 166368109878606820,
                                                            children: [
                                                              {
                                                                dataName:
                                                                  'callback',
                                                                dataId: 166368109878693000,
                                                                children: [],
                                                                value:
                                                                  'callback1',
                                                                params: [],
                                                                elseIfs: [],
                                                              },
                                                              {
                                                                dataName:
                                                                  'callback',
                                                                dataId: 166368109878668060,
                                                                children: [],
                                                                value:
                                                                  'callback2',
                                                                params: [],
                                                                elseIfs: [],
                                                              },
                                                            ],
                                                            todoOptions: [
                                                              'customFuncName',
                                                              'customFuncParams',
                                                            ],
                                                            options: {
                                                              compId:
                                                                'callSelfFunc',
                                                              compName:
                                                                'system',
                                                              id: '731022',
                                                              pageJsonId:
                                                                '6260603',
                                                              customFuncName:
                                                                'nextTacheChange',
                                                              customFuncParams:
                                                                '$data_1337368$',
                                                            },
                                                            actionObjId:
                                                              'callSelfFunc',
                                                            actionObjName:
                                                              'system',
                                                            value:
                                                              'callSelfFunc',
                                                            elseIfs: [],
                                                            line_number: 14,
                                                          },
                                                        ],
                                                        value: 'callback1',
                                                        params: [],
                                                        elseIfs: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166368109878607230,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                        elseIfs: [],
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'actionTitle',
                                                      'editorCode',
                                                    ],
                                                    options: {
                                                      compId:
                                                        'customActionCode',
                                                      compName: 'page',
                                                      id: '1337368',
                                                      pageJsonId: '6260603',
                                                      code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                                    },
                                                    actionObjId:
                                                      'customActionCode',
                                                    actionObjName: 'page',
                                                    value: 'customActionCode',
                                                    elseIfs: [],
                                                    line_number: 13,
                                                  },
                                                ],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Select_6041524',
                                              compLib: 'comm',
                                              pageJsonId: '6260603',
                                              compName: 'Select',
                                              id: '550143',
                                              value:
                                                '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                            },
                                            actionObjId: 'Select_6041524',
                                            actionObjName: 'Select',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 12,
                                          },
                                        ],
                                        elseIfs: [],
                                        condition: [
                                          {
                                            condId: '975184',
                                            options: {
                                              context:
                                                '$refData.current.nextTacheList.resultData$',
                                              operate: 'notEmpty',
                                              manualValue: '1',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                          {
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context:
                                                '$refData.current.nextTacheList.resultData.length$',
                                              operate: '==',
                                              manualValue: '1',
                                            },
                                            condId: '2775226',
                                            connector: '&&',
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        desc: '如果只有一条数据',
                                        line_number: 10,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166237956571493470,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: [
                                  'selectServerDataSource',
                                  'dataSourceReloadFilter',
                                ],
                                options: {
                                  compId: 'reloadDataSource',
                                  compName: 'page',
                                  id: '706432',
                                  pageJsonId: '530274',
                                  dataSourceId: 166236781087731100,
                                  dataSourceName: 'nextTacheList',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '005631',
                                      code: 'header',
                                      name: '请求头参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'header',
                                    },
                                    {
                                      attrId: '801318',
                                      code: 'path',
                                      name: '请求路径参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'path',
                                    },
                                    {
                                      attrId: '235973',
                                      code: 'query',
                                      name: 'URL 参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'query',
                                    },
                                    {
                                      attrId: '628615',
                                      code: 'body',
                                      name: '请求体',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '373283',
                                          code: 'tachePass',
                                          name: '审批结果',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.tachePass',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_0063102',
                                              'getFieldsValue',
                                            ],
                                            code: 'tachePass',
                                          },
                                        },
                                        {
                                          attrId: '951065',
                                          code: 'orderType',
                                          name: '流程订单类型',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.orderType',
                                        },
                                        {
                                          attrId: '777996',
                                          code: 'workItemId',
                                          name: '流程环节实例id',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.workItemId',
                                          value: {
                                            type: ['page', 'url'],
                                            code: 'workItemId',
                                          },
                                        },
                                        {
                                          attrId: '130326',
                                          code: 'endLevel',
                                          name: '最高审批等级',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.endLevel',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.endLevel$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          attrId: '100482',
                                          code: 'tacheCode',
                                          name: '环节编码',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.tacheCode',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.tacheCode$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          attrId: '174732',
                                          code: 'flowCode',
                                          name: '流程编码',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.flowCode',
                                        },
                                        {
                                          attrId: '167252',
                                          code: 'workId',
                                          name: '流程实例id',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.workId',
                                          value: {
                                            type: ['page', 'url'],
                                            code: 'workId',
                                          },
                                        },
                                      ],
                                      key: 'body',
                                    },
                                  ],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '961445',
                                      code: 'resultMsg',
                                      name: 'resultMsg',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '348994',
                                      code: 'resultMsgCode',
                                      name: 'resultMsgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '725231',
                                      code: 'resultCode',
                                      name: 'resultCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '972205',
                                      code: 'resultData',
                                      name: 'resultData',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '927784',
                                          code: 'tacheName',
                                          name: '环节名称',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          parentCode: 'resultData',
                                          parentKey: 'resultData',
                                        },
                                        {
                                          attrId: '7057',
                                          code: 'tacheCode',
                                          name: '环节编码',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          parentCode: 'resultData',
                                          parentKey: 'resultData',
                                        },
                                        {
                                          attrId: '783881',
                                          code: 'hideUserSelect',
                                          name: '新增节点',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          parentCode: 'resultData',
                                          parentKey: 'resultData',
                                        },
                                      ],
                                    },
                                  ],
                                  otherObjectArrayOptions: {},
                                },
                                actionObjId: 'reloadDataSource',
                                actionObjName: 'page',
                                value: 'reloadDataSource',
                                elseIfs: [],
                                line_number: 8,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 166237957532121660,
                                options: {
                                  compId: 'Select_6041524',
                                  compLib: 'comm',
                                  pageJsonId: '530274',
                                  compName: 'Select',
                                  id: '436883',
                                  visible: 'true',
                                },
                                line_number: 7,
                              },
                              {
                                type: 'reloadDataSource',
                                dataId: 166237956571346340,
                                options: {
                                  compId: 'reloadDataSource',
                                  compName: 'page',
                                  id: '706432',
                                  pageJsonId: '530274',
                                  dataSourceId: 166236781087731100,
                                  dataSourceName: 'nextTacheList',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '005631',
                                      code: 'header',
                                      name: '请求头参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'header',
                                    },
                                    {
                                      attrId: '801318',
                                      code: 'path',
                                      name: '请求路径参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'path',
                                    },
                                    {
                                      attrId: '235973',
                                      code: 'query',
                                      name: 'URL 参数',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      key: 'query',
                                    },
                                    {
                                      attrId: '628615',
                                      code: 'body',
                                      name: '请求体',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '373283',
                                          code: 'tachePass',
                                          name: '审批结果',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.tachePass',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_0063102',
                                              'getFieldsValue',
                                            ],
                                            code: 'tachePass',
                                          },
                                        },
                                        {
                                          attrId: '951065',
                                          code: 'orderType',
                                          name: '流程订单类型',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.orderType',
                                        },
                                        {
                                          attrId: '777996',
                                          code: 'workItemId',
                                          name: '流程环节实例id',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.workItemId',
                                          value: {
                                            type: ['page', 'url'],
                                            code: 'workItemId',
                                          },
                                        },
                                        {
                                          attrId: '130326',
                                          code: 'endLevel',
                                          name: '最高审批等级',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.endLevel',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.endLevel$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          attrId: '100482',
                                          code: 'tacheCode',
                                          name: '环节编码',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.tacheCode',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.tacheCode$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          attrId: '174732',
                                          code: 'flowCode',
                                          name: '流程编码',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.flowCode',
                                        },
                                        {
                                          attrId: '167252',
                                          code: 'workId',
                                          name: '流程实例id',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          key: 'body.workId',
                                          value: {
                                            type: ['page', 'url'],
                                            code: 'workId',
                                          },
                                        },
                                      ],
                                      key: 'body',
                                    },
                                  ],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '961445',
                                      code: 'resultMsg',
                                      name: 'resultMsg',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '348994',
                                      code: 'resultMsgCode',
                                      name: 'resultMsgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '725231',
                                      code: 'resultCode',
                                      name: 'resultCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '972205',
                                      code: 'resultData',
                                      name: 'resultData',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '927784',
                                          code: 'tacheName',
                                          name: '环节名称',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          parentCode: 'resultData',
                                          parentKey: 'resultData',
                                        },
                                        {
                                          attrId: '7057',
                                          code: 'tacheCode',
                                          name: '环节编码',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          parentCode: 'resultData',
                                          parentKey: 'resultData',
                                        },
                                        {
                                          attrId: '783881',
                                          code: 'hideUserSelect',
                                          name: '新增节点',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          parentCode: 'resultData',
                                          parentKey: 'resultData',
                                        },
                                      ],
                                    },
                                  ],
                                  otherObjectArrayOptions: {},
                                },
                                line_number: 8,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166944345651861120,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '7840365',
                                      pageJsonId: '530274',
                                      value: ['bbbbbbbbbbbbbbbbbb'],
                                    },
                                    line_number: 9,
                                  },
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '975184',
                                        options: {
                                          context:
                                            '$refData.current.nextTacheList.resultData$',
                                          operate: 'notEmpty',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                      {
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context:
                                            '$refData.current.nextTacheList.resultData.length$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        condId: '2775226',
                                        connector: '&&',
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 166368109878682940,
                                    elseIfs: [],
                                    line_number: 10,
                                    callback1: [
                                      {
                                        type: 'console',
                                        dataId: 166368109878672640,
                                        shielding: true,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '696208',
                                          pageJsonId: '6260603',
                                          value: ['我只有一条数据'],
                                        },
                                        line_number: 11,
                                      },
                                      {
                                        type: 'setValue',
                                        dataId: 166368109878682240,
                                        options: {
                                          compId: 'Select_6041524',
                                          compLib: 'comm',
                                          pageJsonId: '6260603',
                                          compName: 'Select',
                                          id: '550143',
                                          value:
                                            '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                        },
                                        line_number: 12,
                                        callback1: [
                                          {
                                            type: 'customActionCode',
                                            dataId: 166368109878607550,
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '1337368',
                                              pageJsonId: '6260603',
                                              code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                            },
                                            line_number: 13,
                                            callback1: [
                                              {
                                                type: 'callSelfFunc',
                                                dataId: 166368109878606820,
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '731022',
                                                  pageJsonId: '6260603',
                                                  customFuncName:
                                                    'nextTacheChange',
                                                  customFuncParams:
                                                    '$data_1337368$',
                                                },
                                                line_number: 14,
                                                callback1: [],
                                                callback2: [],
                                              },
                                            ],
                                            callback2: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 166237955020183550,
                            options: {
                              compId: 'Select_6041524',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Select',
                              id: '6619175',
                              visible: '',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse22.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse22, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Radio_774135'] = r)}
              {...injectData}
            />
            <Select
              name={'下一处理环节'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              formItemIndex={1}
              fieldName={'nextTache'}
              allowClear={true}
              dataSource={getStaticDataSourceService(
                data?.nextTacheList?.resultData,
                'tacheName',
                'tacheCode',
              )}
              $$componentItem={{
                id: 'Select_6041524',
                uid: 'Select_6041524',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue9: any = [
                  {
                    type: 'clearValue',
                    dataId: 166210652528254240,
                    shielding: true,
                    options: {
                      compId: 'Input_668689',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '327033',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue9.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue9, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataifelse23: any = [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '914282',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: '==',
                          manualValue: '_EOF',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166219110617605250,
                    elseIfs: [],
                    line_number: 2,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166219115192543650,
                        shielding: true,
                        options: {
                          compId: 'Input_668689',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Input',
                          id: '3802185',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDataifelse23.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse23, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDatacustomActionCode15: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166236841713387100,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '0812765',
                      pageJsonId: '530274',
                      code: 'function main(data,state,success,fail){var result={};if(data.nextTacheList.resultData.length){data.nextTacheList.resultData.forEach(function(nextTache){if(nextTache.tacheCode===e){result=nextTache}})}return success(result)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166236895717560640,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '65947',
                          pageJsonId: '530274',
                          value: ['$data_0812765$'],
                        },
                        line_number: 5,
                      },
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '5060614',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data_0812765.hideUserSelect$',
                              operate: '==',
                              manualValue: 'Y',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166236883843868580,
                        elseIfs: [],
                        line_number: 6,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 166236887896795420,
                            shielding: true,
                            options: {
                              compId: 'Input_668689',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Input',
                              id: '296158',
                            },
                            line_number: 7,
                          },
                          {
                            type: 'setValue',
                            dataId: 166237885242425000,
                            shielding: true,
                            options: {
                              compId: 'Input_9206452',
                              compLib: 'comm',
                              pageJsonId: '530274',
                              compName: 'Input',
                              id: '2673614',
                              value: '$data_0812765.fixedUser$',
                            },
                            line_number: 8,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode15.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode15,
                  { e },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
                const eventDatacustomActionCode16: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166368062992132030,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '803468',
                      pageJsonId: '6260603',
                      code: 'function main(data,state,success,fail){return success({"nextTacheList":data.nextTacheList,"selectTacheCode":e})};',
                      actionTitle: '',
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166368062992137860,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2638336',
                          pageJsonId: '6260603',
                          customFuncName: 'nextTacheChange',
                          customFuncParams: '$data_803468$',
                        },
                        line_number: 10,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode16.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode16,
                  { e },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Select_6041524'] = r)}
              {...injectData}
            />
            <Input
              name={'下一步处理人'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择处理人'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请选择处理人'}
              formItemIndex={2}
              fieldName={'nextStaffName'}
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
                id: 'Input_668689',
                uid: 'Input_668689',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetSelectedData5: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166547684276573920,
                    options: {
                      compId: 'Select_6041524',
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Select',
                      id: '1932047',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '417841',
                            options: {
                              context: '$data.globalParam.popupType$',
                              operate: '==',
                              useManual: true,
                              manualValue: 'post',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 16659723928556222,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166597344303980830,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166597344881641600,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166597344881645300,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166597344881630400,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881636060,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: ['value'],
                                        options: {
                                          compId: 'Input_668689',
                                          compLib: 'comm',
                                          pageJsonId: '530274',
                                          compName: 'Input',
                                          id: '288118',
                                          value:
                                            '$okData_1424606.staffSelect.userName$',
                                          valueList: {
                                            Input_668689:
                                              '$okData_1424606.staffSelect.userName$',
                                          },
                                        },
                                        actionObjId: 'Input_668689',
                                        actionObjName: 'Input',
                                        value: 'setValue',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 7,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 16659734488161124,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881695360,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: ['value'],
                                        options: {
                                          compId: 'Input_9206452',
                                          compLib: 'comm',
                                          pageJsonId: '530274',
                                          compName: 'Input',
                                          id: '306824',
                                          value:
                                            '$okData_1424606.staffSelect.userCode$',
                                          valueList: {
                                            Input_9206452:
                                              '$okData_1424606.staffSelect.orgUserRelId$',
                                          },
                                        },
                                        actionObjId: 'Input_9206452',
                                        actionObjName: 'Input',
                                        value: 'setValue',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 8,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [
                                      {
                                        title: '弹窗确认回调参数',
                                        name: 'okData_016049',
                                        value: '$okData_1424606$',
                                      },
                                    ],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166597344881613600,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: ['modalname', 'compState'],
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '1424606',
                                  pageJsonId: '530274',
                                  modalname: '/audit/selectoneuser',
                                  pageId: '881887068344979456',
                                  paramsObj: {
                                    tacheCode:
                                      '$selectedData_1932047[0].value$',
                                    flowCode: '$data.globalParam.flowCode$',
                                    workItemId: '$data.globalParam.workItemId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    tacheCode:
                                      '$selectedData_1932047[0].value$',
                                    flowCode: '$data.globalParam.flowCode$',
                                    workItemId: '$data.globalParam.workItemId$',
                                  },
                                },
                                actionObjId: 'showCustomModal',
                                actionObjName: 'page',
                                value: 'showCustomModal',
                                elseIfs: [],
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'showCustomModal',
                                dataId: 166597344881641600,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '1424606',
                                  pageJsonId: '530274',
                                  modalname: '/audit/selectoneuser',
                                  pageId: '881887068344979456',
                                  paramsObj: {
                                    tacheCode:
                                      '$selectedData_1932047[0].value$',
                                    flowCode: '$data.globalParam.flowCode$',
                                    workItemId: '$data.globalParam.workItemId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    tacheCode:
                                      '$selectedData_1932047[0].value$',
                                    flowCode: '$data.globalParam.flowCode$',
                                    workItemId: '$data.globalParam.workItemId$',
                                  },
                                },
                                line_number: 6,
                                callback1: [
                                  {
                                    type: 'setValue',
                                    dataId: 166597344881630400,
                                    options: {
                                      compId: 'Input_668689',
                                      compLib: 'comm',
                                      pageJsonId: '530274',
                                      compName: 'Input',
                                      id: '288118',
                                      value:
                                        '$okData_1424606.staffSelect.userName$',
                                      valueList: {
                                        Input_668689:
                                          '$okData_1424606.staffSelect.userName$',
                                      },
                                    },
                                    line_number: 7,
                                    callback1: [],
                                  },
                                  {
                                    type: 'setValue',
                                    dataId: 16659734488161124,
                                    options: {
                                      compId: 'Input_9206452',
                                      compLib: 'comm',
                                      pageJsonId: '530274',
                                      compName: 'Input',
                                      id: '306824',
                                      value:
                                        '$okData_1424606.staffSelect.userCode$',
                                      valueList: {
                                        Input_9206452:
                                          '$okData_1424606.staffSelect.orgUserRelId$',
                                      },
                                    },
                                    line_number: 8,
                                    callback1: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 166597239957664580,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '443613',
                              pageJsonId: '530274',
                              modalname: '/audit/selectonepostuser',
                              pageId: '897014700989980672',
                              paramsObj: {
                                tacheCode: '$selectedData_1932047[0].value$',
                                flowCode: '$data.globalParam.flowCode$',
                              },
                              paramsObjKeyValueMap: {
                                tacheCode: '$selectedData_1932047[0].value$',
                                flowCode: '$data.globalParam.flowCode$',
                              },
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 166597239957605150,
                                options: {
                                  compId: 'Input_668689',
                                  compLib: 'comm',
                                  pageJsonId: '530274',
                                  compName: 'Input',
                                  id: '694321',
                                  value: '$okData_443613.userName$',
                                  valueList: {
                                    Input_668689: '$okData_443613.userName$',
                                  },
                                },
                                line_number: 4,
                                callback1: [],
                              },
                              {
                                type: 'setValue',
                                dataId: 166597239957634750,
                                options: {
                                  compId: 'Input_9206452',
                                  compLib: 'comm',
                                  pageJsonId: '530274',
                                  compName: 'Input',
                                  id: '6445214',
                                  value: '$okData_443613.userCode$',
                                  valueList: {
                                    Input_9206452:
                                      '$okData_443613.orgUserRelId$',
                                  },
                                },
                                line_number: 5,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166547754215848640,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '719037',
                          pageJsonId: '530274',
                          type: 'info',
                          value: '请先选择下一处理环节',
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ];
                eventDatagetSelectedData5.params = [] || [];
                CMDGenerator(eventDatagetSelectedData5, {}, 'getSelectedData', {
                  id: 'getSelectedData',
                  name: 'getSelectedData',
                  type: 'getSelectedData',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_668689'] = r)}
              {...injectData}
            />
            <Input
              name={'处理人隐藏框'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
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
              fieldName={'nextStaff'}
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
                id: 'Input_9206452',
                uid: 'Input_9206452',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_9206452'] = r)}
              {...injectData}
            />
            <Input
              name={'抄送阅办'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择抄送人'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请选择抄送人'}
              formItemIndex={4}
              fieldName={'copyUserNameList'}
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
                id: 'Input_668689_0650375',
                uid: 'Input_668689_0650375',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatashowCustomModal2: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166210687833854000,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '016049',
                      pageJsonId: '530274',
                      modalname: '/meeting/selectuserlist',
                      pageId: '875208988329263104',
                      modalPath: '/meeting/selectuserlist',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166536919364399330,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '449058',
                          pageJsonId: '530274',
                          value: ['$okData_016049$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'setValue',
                        dataId: 166536917165723040,
                        options: {
                          compId: 'Input_668689_0650375',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Input',
                          id: '537468',
                          value: '$okData_016049.staffNameList$',
                        },
                        line_number: 3,
                        callback1: [],
                      },
                      {
                        type: 'setValue',
                        dataId: 166536917492150800,
                        options: {
                          compId: 'Input_9206452_583366',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Input',
                          id: '970829',
                          value: '$okData_016049.staffIdList$',
                        },
                        line_number: 4,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal2.params = [] || [];
                CMDGenerator(eventDatashowCustomModal2, {}, 'showCustomModal', {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_668689_0650375'] = r)}
              {...injectData}
            />
            <Input
              name={'抄送人隐藏框'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
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
              fieldName={'copyUserList'}
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
                id: 'Input_9206452_583366',
                uid: 'Input_9206452_583366',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_9206452_583366'] = r)}
              {...injectData}
            />
            <TextArea
              name={'审批意见'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={6}
              fieldName={'tacheRemark'}
              $$componentItem={{
                id: 'TextArea_4776246',
                uid: 'TextArea_4776246',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_4776246'] = r)}
              {...injectData}
            />
            <Input
              name={'当前环节编码'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
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
              fieldName={'tacheCode'}
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
                id: 'Input_658782',
                uid: 'Input_658782',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_658782'] = r)}
              {...injectData}
            />
            <Input
              name={'会签类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
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
              fieldName={'meetingType'}
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
                id: 'Input_6412724',
                uid: 'Input_6412724',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_6412724'] = r)}
              {...injectData}
            />
            <Input
              name={'审批最高级别'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
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
              fieldName={'endLevel'}
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
                id: 'Input_764551',
                uid: 'Input_764551',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_764551'] = r)}
              {...injectData}
            />
            <Input
              name={'是否首环节'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={10}
              fieldName={'firstTacheFlag'}
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
                id: 'Input_587676',
                uid: 'Input_587676',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_587676'] = r)}
              {...injectData}
            />
            <Input
              name={'会签订单类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
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
                id: 'Input_233347',
                uid: 'Input_233347',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_233347'] = r)}
              {...injectData}
            />
            <StdUpload
              name={'附件'}
              uploadStyle={'click'}
              listType={'text'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              fileNameEncode={false}
              isWatermark={false}
              optionalFile={false}
              fileName={'file'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'16'}
              acceptType={[]}
              withCredentials={true}
              numberLimit={1}
              singleFileMaxSize={99}
              uploadText={'点击上传'}
              deleteIcon={{
                deleteIconTheme: 'outlined',
                deleteIconType: 'delete',
                deleteIconIsIconFont: false,
                showRemoveIcon: true,
              }}
              downloadIcon={{
                downloadIconTheme: 'outlined',
                downloadIconType: 'download',
                downloadIconIsIconFont: false,
                showDownloadIcon: true,
              }}
              previewIcon={{
                previewIconTheme: 'outlined',
                previewIconType: 'eye',
                previewIconIsIconFont: false,
                showPreviewIcon: true,
              }}
              formItemIndex={12}
              fieldName={'tacheAttachments'}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'StdUpload_3523188',
                uid: 'StdUpload_3523188',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['StdUpload_3523188'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </Card>
    </div>
  );
};

export default withPageHOC(BusiComp530274$$BusiComp, {
  pageId: 'pageId 未找到',
  hasLogin: true,
  defaultState: {
    tacheCode: '',
    meetingType: '',
    endLevel: '',
    firstTacheFlag: '',
    meetingOrderType: '',
    hidePass: '',
    optResultDesc: '',
    flowCode: '',
    readHandleType: '',
    workItemId: '',
  },
});
