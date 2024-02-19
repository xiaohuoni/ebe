// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Form,
  Input,
  Row,
  Select,
  StdUpload,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp6260603$$BusiComp: React.FC<PageProps> = ({
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
    return () => {};
  }, []);

  useEffect(() => {
    // console 167279696687074080
    console.log('====起草环节组件-state==', state);
    // console 170590332608717800
    console.log(
      state?.flowAssociationParams,
      '1111',
      data?.globalParam?.flowAssociationParams,
    );
    const eventDataifelse2: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '1739582',
            options: {
              context: '$state.flowCode$',
              operate: 'notEmpty',
              objType: 'Input',
              objId: 'Input_272649',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$state.mode$',
              operate: '!=',
              manualValue: 'V',
            },
            condId: '620169',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: { context: '$state.level$', operate: 'notEmpty' },
            condId: '8972578',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            condId: '1075994',
            condition: [
              {
                options: {
                  useManual: false,
                  useObject: true,
                  objType: 'system',
                  objId: 'sys',
                  objOperate: 'setSysState',
                  stateVal: '$data.globalParam.flowCode$',
                  context: '$state.flowCode$',
                  operate: '!=',
                },
                condId: '149392',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                condId: '450212',
                condition: [
                  {
                    options: {
                      useManual: false,
                      useObject: true,
                      objType: 'system',
                      objId: 'sys',
                      objOperate: 'setSysState',
                      stateVal: '$data.globalParam.level$',
                      context: '$state.level$',
                      operate: '!=',
                    },
                    condId: '7947496',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                connector: '||',
              },
              {
                condId: '53387',
                condition: [
                  {
                    options: {
                      useManual: false,
                      useObject: true,
                      objType: 'system',
                      objId: 'sys',
                      objOperate: 'setSysState',
                      stateVal: '$data.globalParam.flowAssociationParams$',
                      context: '$state.flowAssociationParams$',
                      operate: '!=',
                    },
                    condId: '8520047',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                connector: '||',
              },
            ],
            connector: '&&',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$state.level$',
              operate: '!=',
              manualValue: '审批等级',
            },
            condId: '8075104',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168664053246266780,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'getFormValue',
            dataId: 168664061710678140,
            options: {
              compId: 'Form_0063102',
              compLib: 'comm',
              pageJsonId: '6260603',
              compName: 'Form',
              id: '933095',
            },
            line_number: 4,
            callback1: [
              {
                type: 'console',
                dataId: 168664061710666430,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '484686',
                  pageJsonId: '6260603',
                  value: ['表单取值数据', '$formValues$'],
                },
                line_number: 5,
              },
              {
                type: 'setValue',
                dataId: 168664062989544320,
                options: {
                  compId: 'Input_272649',
                  compLib: 'comm',
                  pageJsonId: '6260603',
                  compName: 'Input',
                  id: '429805',
                  value: '$state.flowCode$',
                  valueList: { Input_272649: '$state.flowCode$' },
                },
                line_number: 6,
                callback1: [],
              },
              {
                type: 'setValue',
                dataId: 169294816779790430,
                options: {
                  compId: ['Input_000159'],
                  compLib: 'comm',
                  pageJsonId: '6260603',
                  compName: 'Input',
                  id: '93061176',
                  value: '$state.flowCode$',
                  valueList: { Input_000159: '$state.level$' },
                  compid: ['Input_000159'],
                },
                line_number: 7,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 168664074133105700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '1914652',
                  pageJsonId: '6260603',
                  dataSourceId: 166952318396379700,
                  dataSourceName: 'globalParam',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '149565',
                      code: 'popupType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['popupType'],
                      _idpath: ['149565'],
                    },
                    {
                      attrId: '8495099',
                      code: 'flowCode',
                      name: 'flowCode',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.flowCode$'],
                        code: '',
                      },
                      _codePath: ['flowCode'],
                      _idpath: ['8495099'],
                    },
                    {
                      attrId: '194658',
                      code: 'level',
                      name: 'level',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['level'],
                      _idpath: ['194658'],
                      value: { type: ['context', '$state.level$'], code: '' },
                    },
                    {
                      attrId: '078528',
                      code: 'flowAssociationParams',
                      name: '流程流转需要的参数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['flowAssociationParams'],
                      _idpath: ['078528'],
                      value: {
                        type: ['context', '$state.flowAssociationParams$'],
                        code: '',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'reloadDataSource',
                dataId: 168664064421073150,
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '729125',
                  pageJsonId: '6260603',
                  dataSourceId: 166237707922689630,
                  dataSourceName: 'nextTacheList',
                  dataSourceRelType: 'service',
                  dataSourceReloadFilter: [
                    {
                      attrId: '781884',
                      code: 'header',
                      name: '请求头参数',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      key: 'header',
                      _codePath: ['header'],
                      _idpath: ['781884'],
                    },
                    {
                      attrId: '695524',
                      code: 'path',
                      name: '请求路径参数',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      key: 'path',
                      _codePath: ['path'],
                      _idpath: ['695524'],
                    },
                    {
                      attrId: '1731338',
                      code: 'query',
                      name: 'URL 参数',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      key: 'query',
                      _codePath: ['query'],
                      _idpath: ['1731338'],
                    },
                    {
                      attrId: '637018',
                      code: 'body',
                      name: '请求体',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      children: [
                        {
                          attrId: '0189512',
                          code: 'tachePass',
                          name: 'tachePass',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.tachePass',
                          value: { type: ['customize'], code: 'pass' },
                          _codePath: ['body', 'tachePass'],
                          _idpath: ['637018', '0189512'],
                        },
                        {
                          attrId: '562533',
                          code: 'orderType',
                          name: 'orderType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.orderType',
                          _codePath: ['body', 'orderType'],
                          _idpath: ['637018', '562533'],
                        },
                        {
                          attrId: '763715',
                          code: 'workItemId',
                          name: 'workItemId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.workItemId',
                          _codePath: ['body', 'workItemId'],
                          _idpath: ['637018', '763715'],
                        },
                        {
                          attrId: '739852',
                          code: 'endLevel',
                          name: 'endLevel',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.endLevel',
                          _codePath: ['body', 'endLevel'],
                          _idpath: ['637018', '739852'],
                        },
                        {
                          attrId: '2012854',
                          code: 'tacheCode',
                          name: 'tacheCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.tacheCode',
                          _codePath: ['body', 'tacheCode'],
                          _idpath: ['637018', '2012854'],
                        },
                        {
                          attrId: '618241',
                          code: 'flowCode',
                          name: 'flowCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.flowCode',
                          value: {
                            type: ['context', '$state.flowCode$'],
                            code: '',
                          },
                          _codePath: ['body', 'flowCode'],
                          _idpath: ['637018', '618241'],
                        },
                        {
                          attrId: '7132747',
                          code: 'workId',
                          name: 'workId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.workId',
                          _codePath: ['body', 'workId'],
                          _idpath: ['637018', '7132747'],
                        },
                        {
                          attrId: '984696',
                          code: 'sameList',
                          name: 'sameList',
                          type: 'objectArray',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          children: [
                            {
                              attrId: '880819',
                              code: 'meetingRemark',
                              name: 'meetingRemark',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'meetingRemark'],
                              _idpath: ['637018', '984696', '880819'],
                            },
                            {
                              attrId: '041054',
                              code: 'nextStaff',
                              name: 'nextStaff',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'nextStaff'],
                              _idpath: ['637018', '984696', '041054'],
                            },
                            {
                              attrId: '272454',
                              code: 'nextStaffName',
                              name: 'nextStaffName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'nextStaffName'],
                              _idpath: ['637018', '984696', '272454'],
                            },
                            {
                              attrId: '43432',
                              code: 'nextTache',
                              name: 'nextTache',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'nextTache'],
                              _idpath: ['637018', '984696', '43432'],
                            },
                            {
                              attrId: '9996626',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'approveOrdNbr'],
                              _idpath: ['637018', '984696', '9996626'],
                            },
                            {
                              attrId: '3554067',
                              code: 'busiObjStatus',
                              name: 'busiObjStatus',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'busiObjStatus'],
                              _idpath: ['637018', '984696', '3554067'],
                            },
                            {
                              attrId: '15863832',
                              code: 'busiObjSubType',
                              name: 'busiObjSubType',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'busiObjSubType'],
                              _idpath: ['637018', '984696', '15863832'],
                            },
                            {
                              attrId: '28212',
                              code: 'lastHandleTime',
                              name: 'lastHandleTime',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'lastHandleTime'],
                              _idpath: ['637018', '984696', '28212'],
                            },
                            {
                              attrId: '6458466',
                              code: 'workId',
                              name: 'workId',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'workId'],
                              _idpath: ['637018', '984696', '6458466'],
                            },
                            {
                              attrId: '264852',
                              code: 'workItemId',
                              name: 'workItemId',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'workItemId'],
                              _idpath: ['637018', '984696', '264852'],
                            },
                            {
                              attrId: '0008055',
                              code: 'tacheCode',
                              name: 'tacheCode',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tacheCode'],
                              _idpath: ['637018', '984696', '0008055'],
                            },
                            {
                              attrId: '0319372',
                              code: 'tacheName',
                              name: 'tacheName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tacheName'],
                              _idpath: ['637018', '984696', '0319372'],
                            },
                            {
                              attrId: '4774298',
                              code: 'tachePass',
                              name: 'tachePass',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tachePass'],
                              _idpath: ['637018', '984696', '4774298'],
                            },
                            {
                              attrId: '807132',
                              code: 'tacheRemark',
                              name: 'tacheRemark',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tacheRemark'],
                              _idpath: ['637018', '984696', '807132'],
                            },
                            {
                              attrId: '099249',
                              code: 'handleStaffName',
                              name: 'handleStaffName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: [
                                'body',
                                'sameList',
                                'handleStaffName',
                              ],
                              _idpath: ['637018', '984696', '099249'],
                            },
                            {
                              attrId: '191907',
                              code: 'keyId',
                              name: 'keyId',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'keyId'],
                              _idpath: ['637018', '984696', '191907'],
                            },
                            {
                              attrId: '905306',
                              code: 'title',
                              name: 'title',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'title'],
                              _idpath: ['637018', '984696', '905306'],
                            },
                            {
                              attrId: '075695',
                              code: 'createStaff',
                              name: 'createStaff',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'createStaff'],
                              _idpath: ['637018', '984696', '075695'],
                            },
                            {
                              attrId: '7522653',
                              code: 'createStaffName',
                              name: 'createStaffName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: [
                                'body',
                                'sameList',
                                'createStaffName',
                              ],
                              _idpath: ['637018', '984696', '7522653'],
                            },
                            {
                              attrId: '538503',
                              code: 'createTime',
                              name: 'createTime',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'createTime'],
                              _idpath: ['637018', '984696', '538503'],
                            },
                            {
                              attrId: '470403',
                              code: 'effectDate',
                              name: 'effectDate',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'effectDate'],
                              _idpath: ['637018', '984696', '470403'],
                            },
                            {
                              attrId: '0557298',
                              code: 'handleObjCode',
                              name: 'handleObjCode',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'handleObjCode'],
                              _idpath: ['637018', '984696', '0557298'],
                            },
                            {
                              attrId: '444799',
                              code: 'handleObjType',
                              name: 'handleObjType',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'handleObjType'],
                              _idpath: ['637018', '984696', '444799'],
                            },
                          ],
                          _codePath: ['body', 'sameList'],
                          _idpath: ['637018', '984696'],
                        },
                        {
                          attrId: '0829946',
                          code: 'level',
                          name: '最高审批等级',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'level'],
                          _idpath: ['637018', '0829946'],
                          value: {
                            type: ['context', '$state.level$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '0325505',
                          code: 'flowAssociationParams',
                          name: '流程相关的页面参数',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'flowAssociationParams'],
                          _idpath: ['637018', '0325505'],
                          value: {
                            type: ['context', '$state.flowAssociationParams$'],
                            code: '',
                          },
                        },
                      ],
                      key: 'body',
                      _codePath: ['body'],
                      _idpath: ['637018'],
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '582747',
                      code: 'resultCode',
                      name: 'resultCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '266917',
                      code: 'resultMsgCode',
                      name: 'resultMsgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9861157',
                      code: 'resultMsg',
                      name: 'resultMsg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '097864',
                      code: 'resultData',
                      name: 'resultData',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '224852',
                          code: 'tacheName',
                          name: '环节名称',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '038317',
                          code: 'tacheCode',
                          name: '环节编码',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '82762',
                          code: 'fixedUser',
                          name: '新增节点',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '910804',
                          code: 'hideUserSelect',
                          name: '新增节点',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                      ],
                    },
                  ],
                  otherObjectArrayOptions: {},
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '975184',
                        options: {
                          useManual: true,
                          useObject: false,
                          context:
                            '$refData.current.nextTacheList.resultData.length$',
                          operate: '==',
                          manualValue: '1',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168664064421003700,
                    elseIfs: [],
                    line_number: 10,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168664064421062500,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '405562',
                          pageJsonId: '6260603',
                          value: ['我只有一条数据'],
                        },
                        line_number: 11,
                      },
                      {
                        type: 'setValue',
                        dataId: 168664064421061570,
                        options: {
                          compId: 'Select_6041524',
                          compLib: 'comm',
                          pageJsonId: '6260603',
                          compName: 'Select',
                          id: '80569',
                          value:
                            '$refData.current.nextTacheList.resultData[0].tacheCode$',
                          valueList: {
                            Select_6041524:
                              '$refData.current.nextTacheList.resultData[0].tacheCode$',
                          },
                        },
                        line_number: 12,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168664064421054850,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '1349097',
                              pageJsonId: '6260603',
                              code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                            },
                            line_number: 13,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168664064421037100,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '69816',
                                  pageJsonId: '6260603',
                                  customFuncName: 'nextTacheChange',
                                  customFuncParams: '$data_1349097$',
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
      },
    ];
    eventDataifelse2.params = [] || [];
    CMDGenerator(eventDataifelse2, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_6260603__"
    >
      <Card
        name={'流程处理'}
        cardIconType={'middle'}
        title={'流程处理'}
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
            <Select
              name={'下一处理环节'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              formItemIndex={0}
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
                // console 166366817525553860
                console.log('我变了');
                const eventDatacustomActionCode9: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166367537015449300,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '0553858',
                      pageJsonId: '6260603',
                      code: 'function main(data,state,success,fail){return success({"nextTacheList":data.nextTacheList,"selectTacheCode":e})};',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166367546816287800,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '974924',
                          pageJsonId: '6260603',
                          customFuncName: 'nextTacheChange',
                          customFuncParams: '$data_0553858$',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode9.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode9,
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
              labelCol={'8'}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择处理人'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请选择处理人'}
              formItemIndex={1}
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
                id: 'Input_6680095',
                uid: 'Input_6680095',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue1: any = [
                  {
                    type: 'getValue',
                    dataId: 166599732489117440,
                    options: {
                      compId: 'Input_272649',
                      compLib: 'comm',
                      pageJsonId: '6260603',
                      compName: 'Input',
                      id: '34539516',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 166599733878642240,
                        options: {
                          compId: 'Select_6041524',
                          compLib: 'comm',
                          pageJsonId: '6260603',
                          compName: 'Select',
                          id: '012135',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '033497',
                                options: {
                                  context: '$value_012135$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166599734219689060,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166599736646721730,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166599740014709020,
                                    children: [],
                                    todoOptions: ['msgType', 'value'],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '842842',
                                      pageJsonId: '6260603',
                                      type: 'success',
                                      value: '请先选择下一处理环节',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    elseIfs: [],
                                    line_number: 11,
                                  },
                                ],
                                condition: [],
                                elseIfs: [],
                                callback: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166599740014709020,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '842842',
                                      pageJsonId: '6260603',
                                      type: 'success',
                                      value: '请先选择下一处理环节',
                                    },
                                    line_number: 11,
                                  },
                                ],
                              },
                            ],
                            line_number: 3,
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
                                dataId: 166952342390959970,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166952342390984130,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166952342390957500,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166952342390963040,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166952377946904740,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166952377946946270,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId: 'Input_6680095',
                                                  compLib: 'comm',
                                                  pageJsonId: '6260603',
                                                  compName: 'Input',
                                                  id: '295668',
                                                  value:
                                                    '$okData_499704.staffSelect.userName$',
                                                  valueList: {
                                                    Input_6680095:
                                                      '$okData_533411.staffSelect.userName$',
                                                  },
                                                },
                                                actionObjId: 'Input_6680095',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                                line_number: 9,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166952382484605200,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166952382484636640,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId: 'Input_602447',
                                                  compLib: 'comm',
                                                  pageJsonId: '6260603',
                                                  compName: 'Input',
                                                  id: '739848',
                                                  value:
                                                    '$okData_499704.staffSelect.userCode$',
                                                  valueList: {
                                                    Input_602447:
                                                      '$okData_533411.staffSelect.orgUserRelId$',
                                                  },
                                                },
                                                actionObjId: 'Input_602447',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                                line_number: 10,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [
                                              {
                                                title: '弹窗确认回调参数',
                                                name: 'okData_016049',
                                                value: '$okData_533411$',
                                              },
                                            ],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166952342391040260,
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
                                          id: '533411',
                                          pageJsonId: '530274',
                                          modalname: '/audit/selectoneuser',
                                          pageId: '881887068344979456',
                                          paramsObj: {
                                            tacheCode: '$value_012135$',
                                            flowCode: '$value_34539516$',
                                          },
                                          paramsObjKeyValueMap: {
                                            tacheCode: '$value_012135$',
                                            flowCode: '$value_34539516$',
                                          },
                                          modalPath: '/audit/selectoneuser',
                                        },
                                        actionObjId: 'showCustomModal',
                                        actionObjName: 'page',
                                        value: 'showCustomModal',
                                        elseIfs: [],
                                        line_number: 8,
                                      },
                                    ],
                                    condition: [],
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'showCustomModal',
                                        dataId: 166952342390957500,
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '533411',
                                          pageJsonId: '530274',
                                          modalname: '/audit/selectoneuser',
                                          pageId: '881887068344979456',
                                          paramsObj: {
                                            tacheCode: '$value_012135$',
                                            flowCode: '$value_34539516$',
                                          },
                                          paramsObjKeyValueMap: {
                                            tacheCode: '$value_012135$',
                                            flowCode: '$value_34539516$',
                                          },
                                          modalPath: '/audit/selectoneuser',
                                        },
                                        line_number: 8,
                                        callback1: [
                                          {
                                            type: 'setValue',
                                            dataId: 166952377946904740,
                                            options: {
                                              compId: 'Input_6680095',
                                              compLib: 'comm',
                                              pageJsonId: '6260603',
                                              compName: 'Input',
                                              id: '295668',
                                              value:
                                                '$okData_499704.staffSelect.userName$',
                                              valueList: {
                                                Input_6680095:
                                                  '$okData_533411.staffSelect.userName$',
                                              },
                                            },
                                            line_number: 9,
                                            callback1: [],
                                          },
                                          {
                                            type: 'setValue',
                                            dataId: 166952382484605200,
                                            options: {
                                              compId: 'Input_602447',
                                              compLib: 'comm',
                                              pageJsonId: '6260603',
                                              compName: 'Input',
                                              id: '739848',
                                              value:
                                                '$okData_499704.staffSelect.userCode$',
                                              valueList: {
                                                Input_602447:
                                                  '$okData_533411.staffSelect.orgUserRelId$',
                                              },
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
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'showCustomModal',
                                    dataId: 166952342390966340,
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '175805',
                                      pageJsonId: '530274',
                                      modalname: '/audit/selectonepostuser',
                                      pageId: '897014700989980672',
                                      paramsObj: {
                                        tacheCode: '$value_012135$',
                                        flowCode: '$value_34539516$',
                                      },
                                      paramsObjKeyValueMap: {
                                        tacheCode: '$value_012135$',
                                        flowCode: '$value_34539516$',
                                      },
                                      modalPath: '/audit/selectonepostuser',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setValue',
                                        dataId: 166952377578273400,
                                        options: {
                                          compId: 'Input_6680095',
                                          compLib: 'comm',
                                          pageJsonId: '6260603',
                                          compName: 'Input',
                                          id: '861183',
                                          value:
                                            '$okData_499704.staffSelect.userName$',
                                          valueList: {
                                            Input_6680095:
                                              '$okData_175805.userName$',
                                          },
                                        },
                                        line_number: 6,
                                        callback1: [],
                                      },
                                      {
                                        type: 'setValue',
                                        dataId: 166952382094022600,
                                        options: {
                                          compId: 'Input_602447',
                                          compLib: 'comm',
                                          pageJsonId: '6260603',
                                          compName: 'Input',
                                          id: '001648',
                                          value:
                                            '$okData_499704.staffSelect.userCode$',
                                          valueList: {
                                            Input_602447:
                                              '$okData_175805.orgUserRelId$',
                                          },
                                        },
                                        line_number: 7,
                                        callback1: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue1.params = [] || [];
                CMDGenerator(eventDatagetValue1, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_6680095'] = r)}
              {...injectData}
            />
            <Input
              name={'处理人隐藏框'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'8'}
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
                id: 'Input_602447',
                uid: 'Input_602447',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_602447'] = r)}
              {...injectData}
            />
            <Input
              name={'流程编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'流程编码'}
              formItemIndex={3}
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
                id: 'Input_272649',
                uid: 'Input_272649',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_272649'] = r)}
              {...injectData}
            />
            <Input
              name={'最高审批等级'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'最高审批等级'}
              formItemIndex={4}
              fieldName={'level'}
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
                id: 'Input_000159',
                uid: 'Input_000159',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_000159'] = r)}
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
              labelCol={'8'}
              wrapperCol={16}
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
              formItemIndex={5}
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
            <Row
              name={'行容器'}
              colSpan={24}
              gutterHorizontal={0}
              gutterVertical={0}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'Row_336863',
                uid: 'Row_336863',
                type: 'Row',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 0,
                props: {
                  formItemIndex: 6,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ paddingLeft: '33%' }}
              ref={(r: any) => (refs['Row_336863'] = r)}
              {...injectData}
            >
              <Text
                name={'附件提示'}
                content={'只允许上传一个附件，文件不超过100M'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                labelCol={8}
                wrapperCol={'16'}
                $$componentItem={{
                  id: 'Text_525684',
                  uid: 'Text_525684',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  fontSize: 12,
                  lineHeight: '24px',
                  color: 'rgba(155, 155, 155, 1)',
                  textAlign: 'left',
                }}
                ref={(r: any) => (refs['Text_525684'] = r)}
                {...injectData}
              />
            </Row>
          </Form>
        </View>
      </Card>
    </div>
  );
};

export default withPageHOC(BusiComp6260603$$BusiComp, {
  pageId: 'pageId 未找到',
  hasLogin: true,
  defaultState: {
    flowCode: '',
    mode: '',
    level: '',
    instNbr: '',
    flowAssociationParams: '',
  },
});
