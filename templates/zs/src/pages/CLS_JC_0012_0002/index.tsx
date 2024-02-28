// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
  Select,
  MultipleSelect,
  TextArea,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '943765883351842816';
const ClsJc_0012_0002$$Page: React.FC<PageProps> = ({
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
  parentEngineId = pageId,
}) => {
  const fileUpload = (options_367977: any) => {
    const eventDatacustomActionCode174: any = [
      {
        type: 'customActionCode',
        dataId: 167282589156654980,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '54429',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_367977;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282590288772500,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '416412',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode174.params =
      [
        {
          title: '事件入参',
          name: 'options_367977',
          value: '$options_367977$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode174,
      { options_367977 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const bopControl = (options_752149: any) => {
    const eventDatagetSelectedData18: any = [
      {
        type: 'getSelectedData',
        dataId: 168673265697246180,
        options: {
          compId: 'Input_73115_437536_6950224',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'MultipleSelect',
          id: '748507',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 168673266379595170,
            options: {
              compId: 'Input_73115_437536_261477',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '119438',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168673323116372580,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '307643',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){console.log("\\u64CD\\u4F5C\\u7C7B\\u578B:",selectedData_119438[0]);console.log("\\u7533\\u8BF7\\u7C7B\\u578B:",selectedData_748507);if(selectedData_119438[0].value=="1001"){var select=selectedData_748507;for(var i=0;i<select.length;i++){if(select[i].value=="1001"){data.pageParam.bopControl="1";console.log("\\u9A8C\\u8BC1\\u6210\\u529F");success();return}}}console.log("\\u9A8C\\u8BC1\\u5931\\u8D25");fail()};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 168673349382035550,
                    options: {
                      compId: ['Select_4243044'],
                      compName: 'page',
                      id: '285932',
                      pageJsonId: '537892',
                      visible: 'true',
                      compid: ['Select_4243044'],
                    },
                    line_number: 4,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 168673351067639780,
                    options: {
                      compId: ['Input_73115_437536'],
                      compName: 'page',
                      id: '103388',
                      pageJsonId: '537892',
                      visible: '',
                      compid: ['Input_73115_437536'],
                    },
                    line_number: 5,
                  },
                ],
                callback2: [
                  {
                    type: 'sysSetVisible',
                    dataId: 168673352312374620,
                    options: {
                      compId: ['Select_4243044'],
                      compName: 'page',
                      id: '348796',
                      pageJsonId: '537892',
                      visible: '',
                      compid: ['Select_4243044'],
                    },
                    line_number: 6,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 168673352439665400,
                    options: {
                      compId: ['Input_73115_437536'],
                      compName: 'page',
                      id: '409717',
                      pageJsonId: '537892',
                      visible: 'true',
                      compid: ['Input_73115_437536'],
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetSelectedData18.params =
      [
        {
          title: '事件入参',
          name: 'options_752149',
          value: '$options_752149$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData18,
      { options_752149 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
    bopControl,
  }));

  useEffect(() => {
    const eventDataapiRequest473: any = [
      {
        type: 'apiRequest',
        dataId: 167714660600860130,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '716729',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'gainDraftMsg',
          _apiCode: 'gainDraftMsg',
          _source: 'rhin',
          _serviceId: '874490760619208704',
          _serviceTitle: '获取起草人信息-hdb: gainDraftMsg',
          params: 'object',
          _sourceName: '获取起草人信息-hdb',
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
                  dataKey: '716729_root.header',
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
                  dataKey: '716729_root.path',
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
                  dataKey: '716729_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '716729_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '716729_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 167714669589337470,
            shielding: true,
            options: {
              compId: 'Input_73115',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '397372',
              valueList: { Input_73115: '$reply_716729.resultData.staffCode$' },
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'apiRequest',
            dataId: 167714686232534800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '197169',
              pageJsonId: '537892',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryBopUserIdByOaUserId',
              _apiCode: 'qryBopUserIdByOaUserId',
              _source: 'rhin',
              _serviceId: '910432054329229312',
              _serviceTitle:
                '通过OA工号查询对应的BOP用户-lzs: qryBopUserIdByOaUserId',
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
                  dataKey: '197169_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '197169_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '197169_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'oaUserId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.oaUserId',
                      compType: 'Input',
                      name: 'oaUserId',
                      parents: ['body'],
                      id: 'body.oaUserId',
                      dataKey: '197169_body.oaUserId',
                      value: {
                        type: ['customize'],
                        code: '$reply_716729.resultData.staffCode$',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '197169_body',
                },
              ],
              _sourceName: '通过OA工号查询对应的BOP用户-lzs',
            },
            line_number: 3,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 167714817682825630,
                shielding: true,
                options: {
                  compId: 'Input_73115_437536',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Select',
                  id: '37298',
                  data: '$reply_197169?.resultData$',
                  labelKey: 'userId',
                  valueKey: 'userId',
                },
                line_number: 4,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 168673461170866980,
                options: {
                  compId: 'Input_73115_437536',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Select',
                  id: '832846',
                  data: '$reply_197169?.resultData$',
                  labelKey: 'userId',
                  valueKey: 'userId',
                },
                line_number: 5,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '390693',
                    options: { context: '$state.itemList$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168715488490707500,
                elseIfs: [],
                line_number: 6,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 16871549044422304,
                    options: {
                      compId: ['Select_4243044'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '226776',
                      valueList: {
                        Select_4243044: '$reply_197169?.resultData[0].userId$',
                      },
                      compid: ['Select_4243044'],
                    },
                    line_number: 7,
                    callback1: [],
                  },
                  {
                    type: 'setValue',
                    dataId: 168715490969809660,
                    options: {
                      compId: 'Input_73115',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '7322914',
                      valueList: {
                        Input_73115: '$reply_197169?.resultData[0].userName$',
                      },
                    },
                    line_number: 8,
                    callback1: [],
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest473.params = [] || [];
    CMDGenerator(eventDataapiRequest473, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest474: any = [
      {
        type: 'apiRequest',
        dataId: 166125298599862820,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9817429',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectCataLogTierByCode',
          _apiCode: 'selectCataLogTierByCode',
          _source: 'rhin',
          _serviceId: '879306380283035648',
          _serviceTitle:
            '根据类目编码获取类目层级信息-hdb: selectCataLogTierByCode',
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
              dataKey: '9817429_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9817429_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9817429_query',
            },
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9817429_body',
            },
          ],
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 9,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166139448631288800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6454073',
              pageJsonId: '537892',
              dataSourceId: 166096152690913730,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '154379',
                  code: 'catalogCode',
                  name: '类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.catalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '4562264',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'approveGrade' },
                },
                {
                  attrId: '63768',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'attrList' },
                },
                {
                  attrId: '919265',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [],
                  value: { type: [], code: 'fileInfo' },
                },
                {
                  attrId: '360171',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'catalogItemCode' },
                },
                {
                  attrId: '420623',
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '375466',
                  code: 'childCatalogCode',
                  name: '子类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '9257773',
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '5733013',
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '440627',
                  code: 'childCatalogDesc',
                  name: '子类目项描述',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '177104',
                  code: 'approveGradeName',
                  name: '审批等级名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '13154521',
                  code: 'custMemberList',
                  name: '成员信息',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5397914',
                  code: 'instList',
                  name: '多实例',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 10,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444018774646720,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '343439',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditOrderPrepare',
                },
                line_number: 11,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest474.params = [] || [];
    CMDGenerator(eventDataapiRequest474, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest475: any = [
      {
        type: 'apiRequest',
        dataId: 167662183493192130,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '71412',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
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
              dataKey: '71412_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '71412_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '71412_query',
            },
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '71412_body.catalogCode',
                  value: { type: ['customize'], code: 'CLS_JC_0012_0002' },
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
                  dataKey: '71412_body.attrCode',
                  value: { type: ['customize'], code: 'applyContentEnum' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '71412_body',
            },
          ],
          _sourceName: '查询场景规格属性值列表-tsm',
        },
        line_number: 12,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167662195291837980,
            options: {
              compId: 'Input_73115_437536_6950224',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'MultipleSelect',
              id: '6111136',
              data: '$reply_71412?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 13,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest475.params = [] || [];
    CMDGenerator(eventDataapiRequest475, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest476: any = [
      {
        type: 'apiRequest',
        dataId: 167662247559784700,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4798697',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
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
              dataKey: '4798697_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4798697_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4798697_query',
            },
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '4798697_body.catalogCode',
                  value: { type: ['customize'], code: 'CLS_JC_0012_0002' },
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
                  dataKey: '4798697_body.attrCode',
                  value: { type: ['customize'], code: 'jobNumOperTypeEnum' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4798697_body',
            },
          ],
          _sourceName: '查询场景规格属性值列表-tsm',
        },
        line_number: 14,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167662254985689060,
            options: {
              compId: 'Input_73115_437536_261477',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '281313',
              data: '$reply_4798697?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 15,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest476.params = [] || [];
    CMDGenerator(eventDataapiRequest476, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest477: any = [
      {
        type: 'apiRequest',
        dataId: 167662263389130780,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '061653',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
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
              dataKey: '061653_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '061653_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '061653_query',
            },
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '061653_body.catalogCode',
                  value: { type: ['customize'], code: 'CLS_JC_0012_0002' },
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
                  dataKey: '061653_body.attrCode',
                  value: { type: ['customize'], code: 'urgentDegreeEnum' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '061653_body',
            },
          ],
          _sourceName: '查询场景规格属性值列表-tsm',
        },
        line_number: 16,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167662286061331100,
            options: {
              compId: 'Input_73115_437536_2572505',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '439964',
              data: '$reply_061653?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 17,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest477.params = [] || [];
    CMDGenerator(eventDataapiRequest477, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse248: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167715227621160830,
        elseIfs: [],
        line_number: 18,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167715227621194400,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '7032456',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){var value=void 0;var key=attrList[i].attrCode;if(key==="applyContentEnum"){value=JSON.parse(attrList[i].attrValue)}else{value=attrList[i].attrValue}factorForm[attrList[i].attrCode]=value}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 19,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167715227621126080,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '02079774',
                  pageJsonId: '537892',
                  dataSourceId: 167051245225277920,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '459176',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '726922',
                      code: 'jobNumApplyPerson',
                      name: '工号申请人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '8593894',
                      code: 'bopJobNum',
                      name: 'BOP工号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '6464523',
                      code: 'post',
                      name: '岗位',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '51673',
                      code: 'applyContentEnum',
                      name: '申请内容',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '6286851',
                      code: 'jobNumOperTypeEnum',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '4597045',
                      code: 'urgentDegreeEnum',
                      name: '紧急程度',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '476464',
                      code: 'involvePowerRole',
                      name: '涉及权限或角色',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '2842133',
                      code: 'bopJobNumInput',
                      name: 'BOP工号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '2333711',
                      code: 'bopJobNumSelect',
                      name: 'BOP工号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 20,
                callback1: [],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 168715528649009000,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '637017',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){console.log(data_7032456,"\\u8FD9\\u91CClll");if(data_7032456.jobNumOperTypeEnum=="1001"){if(data_7032456.applyContentEnum!=null&&data_7032456.applyContentEnum!=undefined){for(var i=0;i<data_7032456.applyContentEnum.length;i++){if(data_7032456.applyContentEnum[i]=="1001"){success();return}}}}fail()};',
                  actionTitle: 'Bop工号显隐控制',
                },
                line_number: 21,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 168715559618676350,
                    options: {
                      compId: ['Input_73115_437536'],
                      compName: 'page',
                      id: '900185',
                      pageJsonId: '537892',
                      visible: '',
                      compid: ['Input_73115_437536'],
                    },
                    line_number: 22,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 168715560066633280,
                    options: {
                      compId: ['Select_4243044'],
                      compName: 'page',
                      id: '941109',
                      pageJsonId: '537892',
                      visible: 'true',
                      compid: ['Select_4243044'],
                    },
                    line_number: 23,
                  },
                ],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 167715227621183100,
                options: {
                  compId: 'Input_361479_887285',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '324336',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285: '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 24,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167715227621139740,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '42512096',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
            },
            line_number: 25,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167715227621115070,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '57914',
                  pageJsonId: '537892',
                  dataSourceId: 166192841018643170,
                  dataSourceName: 'fileInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'fileName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件名称',
                      defaultValue: '',
                      name: '附件名称',
                      attrId: '458544',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'filePath',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件文件路径',
                      defaultValue: '',
                      name: '附件文件路径',
                      attrId: '6354087',
                      initialData: { type: 'static', value: '附件文件路径' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileServerType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件文件服务器类型',
                      defaultValue: '',
                      name: '附件文件服务器类型',
                      attrId: '184934',
                      initialData: {
                        type: 'static',
                        value: '附件文件服务器类型',
                      },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileSubType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件分类-细类',
                      defaultValue: '',
                      name: '属性',
                      attrId: '551676',
                      initialData: { type: 'static', value: '附件分类-细类' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件分类-大类',
                      defaultValue: '',
                      name: '附件分类-大类',
                      attrId: '383524',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileUrl',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件url地址',
                      defaultValue: '',
                      name: '附件url地址',
                      attrId: '726875',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'tacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '环节编码',
                      defaultValue: '',
                      name: '环节编码',
                      attrId: '865444',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      attrId: '7419638',
                      code: 'fileCode',
                      name: '文件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '097484',
                      code: 'createTime',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '604675',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '729925',
                      code: 'fileTypeName',
                      name: '附件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_42512096$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 26,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    options: { context: '$data_42512096$', operate: 'empty' },
                    condId: '4927332',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.scene$',
                      operate: '==',
                      manualValue: 'V',
                    },
                    condId: '298542',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167715227621147260,
                elseIfs: [],
                line_number: 27,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 167715227621124320,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '8456476',
                      visible: '',
                    },
                    line_number: 28,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '626343',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'V',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'P',
                },
                condId: '7546792',
                connector: '||',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167715227621136770,
            elseIfs: [],
            line_number: 29,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167715227621181250,
                options: {
                  compId: 'Input_361479_887285',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '625453',
                  visible: 'true',
                },
                line_number: 30,
              },
              {
                type: 'setDisable',
                dataId: 167715227621135420,
                options: {
                  compId: [
                    'Form_449441',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '2108434',
                  disabled: 'true',
                  compid: [
                    'Form_449441',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                  ],
                },
                line_number: 31,
              },
              {
                type: 'sysSetVisible',
                dataId: 167715227621123420,
                options: {
                  compId: ['Row_851124'],
                  compName: 'page',
                  id: '935407',
                  pageJsonId: '537892',
                  compid: ['Row_851124'],
                  visible: '',
                },
                line_number: 32,
              },
              {
                type: 'setDisable',
                dataId: 167715227621112700,
                options: {
                  compId: 'Input_361479_887285',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '603045',
                  disabled: 'true',
                },
                line_number: 33,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse248.params = [] || [];
    CMDGenerator(eventDataifelse248, {}, 'ifelse', {
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
      className="__CustomClass_537892__"
    >
      <View
        className="View_View_537892_1_5615067"
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1_5615067',
          uid: 'View_537892_1_5615067',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_5615067')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'工号权限变更'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558_141775',
            uid: 'Divider_52558_141775',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558_141775')}
          {...injectData}
        />
        <View
          className="View_View_6806553_6211483"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_6211483',
            uid: 'View_6806553_6211483',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_6211483')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_4178765',
              uid: 'HorizontalView_004602_4178765',
              type: 'HorizontalView',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_4178765')
            }
            {...injectData}
          >
            <View
              className="View_View_339406_081044"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_081044',
                uid: 'View_339406_081044',
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
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_081044')}
              {...injectData}
            >
              <Form
                name={'表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254_67343096_8948264',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254_67343096_8948264',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254_67343096_8948264',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'工号权限变更'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={true}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402_518092_82609733',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402_518092_82609733',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402_518092_82609733',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234_3569864_15467365_781748_241037_2908738_374039"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_241037_2908738_374039',
                    uid: 'View_6319234_3569864_15467365_781748_241037_2908738_374039',
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
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'View_6319234_3569864_15467365_781748_241037_2908738_374039',
                    )
                  }
                  {...injectData}
                />
                <Input
                  name={'场景最高审批等级'}
                  size={'default'}
                  selfSpan={8}
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
                  fieldName={'auditClass'}
                  formItemIndex={2}
                  className={'fixed-form-item-label-width-150'}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_512399',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_512399',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_512399',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={12}
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
            relationDataSource={data?.factorForm}
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
              id: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
              uid: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource214: any = [
                {
                  type: 'setDataSource',
                  dataId: 167051245972911040,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '975754',
                    pageJsonId: '537892',
                    dataSourceId: 167051245225277920,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '459176',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'reason',
                        },
                        _codePath: ['reason'],
                        _idpath: ['459176'],
                      },
                      {
                        attrId: '726922',
                        code: 'jobNumApplyPerson',
                        name: '工号申请人',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'jobNumApplyPerson',
                        },
                        _codePath: ['jobNumApplyPerson'],
                        _idpath: ['726922'],
                      },
                      {
                        attrId: '8593894',
                        code: 'bopJobNum',
                        name: 'BOP工号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'bopJobNum',
                        },
                        _codePath: ['bopJobNum'],
                        _idpath: ['8593894'],
                      },
                      {
                        attrId: '6464523',
                        code: 'post',
                        name: '岗位',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'post',
                        },
                        _codePath: ['post'],
                        _idpath: ['6464523'],
                      },
                      {
                        attrId: '51673',
                        code: 'applyContentEnum',
                        name: '申请内容',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'applyContentEnum',
                        },
                        _codePath: ['applyContentEnum'],
                        _idpath: ['51673'],
                      },
                      {
                        attrId: '6286851',
                        code: 'jobNumOperTypeEnum',
                        name: '操作类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'jobNumOperTypeEnum',
                        },
                        _codePath: ['jobNumOperTypeEnum'],
                        _idpath: ['6286851'],
                      },
                      {
                        attrId: '4597045',
                        code: 'urgentDegreeEnum',
                        name: '紧急程度',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'urgentDegreeEnum',
                        },
                        _codePath: ['urgentDegreeEnum'],
                        _idpath: ['4597045'],
                      },
                      {
                        attrId: '476464',
                        code: 'involvePowerRole',
                        name: '涉及权限或角色',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'involvePowerRole',
                        },
                        _codePath: ['involvePowerRole'],
                        _idpath: ['476464'],
                      },
                      {
                        attrId: '2842133',
                        code: 'bopJobNumInput',
                        name: 'BOP工号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'bopJobNumInput',
                        },
                        _codePath: ['bopJobNumInput'],
                        _idpath: ['2842133'],
                      },
                      {
                        attrId: '2333711',
                        code: 'bopJobNumSelect',
                        name: 'BOP工号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bopJobNumSelect'],
                        _idpath: ['2333711'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
                            'getFieldsValue',
                          ],
                          code: 'bopJobNumSelect',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 167051279325582400,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '562019',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;if(data.pageParam.bopControl){obj.bopJobNum=data.factorForm.bopJobNumInput}else{obj.bopJobNum=data.factorForm.bopJobNumSelect}for(var key in obj){var value=void 0;if(key==="applyContentEnum"){value=JSON.stringify(obj[key])}else if(key==="bopJobNum"){value="".concat(obj[key])}else{value=obj[key]}attrList.push({"attrCode":key,"attrName":"","attrValue":value})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167051279325584320,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '192076',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource214.params =
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
                eventDatasetDataSource214,
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
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_4252077_25653',
              )
            }
            {...injectData}
          >
            <Input
              name={'工号申请人'}
              size={'default'}
              selfSpan={12}
              labelCol={8}
              wrapperCol={16}
              titleTip={'text'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              tipIcon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              fieldName={'jobNumApplyPerson'}
              value={data?.factorForm?.jobNumApplyPerson}
              formItemIndex={0}
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
                id: 'Input_73115',
                uid: 'Input_73115',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_73115')}
              {...injectData}
            />
            <Select
              name={'操作类型'}
              size={'default'}
              selfSpan={12}
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
              fieldName={'jobNumOperTypeEnum'}
              value={data?.factorForm?.jobNumOperTypeEnum}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_73115_437536_261477',
                uid: 'Input_73115_437536_261477',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc623: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168673439834774300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '287594',
                      pageJsonId: '537892',
                      customFuncName: 'bopControl',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc623.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc623, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_73115_437536_261477')
              }
              {...injectData}
            />
            <MultipleSelect
              name={'申请内容'}
              size={'default'}
              selfSpan={12}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'local'}
              attr={{}}
              placeholder={'请选择'}
              mode={'multiple'}
              fieldName={'applyContentEnum'}
              value={data?.factorForm?.applyContentEnum}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_73115_437536_6950224',
                uid: 'Input_73115_437536_6950224',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc624: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168673438335583550,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '6935',
                      pageJsonId: '537892',
                      customFuncName: 'bopControl',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc624.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc624, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_73115_437536_6950224')
              }
              {...injectData}
            />
            <Select
              name={'BOP工号'}
              size={'default'}
              selfSpan={12}
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
              fieldName={'bopJobNumSelect'}
              value={data?.factorForm?.bopJobNumSelect}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_73115_437536',
                uid: 'Input_73115_437536',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_73115_437536')}
              {...injectData}
            />
            <Input
              name={'BOP工号'}
              size={'default'}
              selfSpan={12}
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
              fieldName={'bopJobNumInput'}
              value={data?.factorForm?.bopJobNumInput}
              formItemIndex={4}
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
                id: 'Select_4243044',
                uid: 'Select_4243044',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_4243044')}
              {...injectData}
            />
            <Input
              name={'岗位'}
              size={'default'}
              selfSpan={12}
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
              fieldName={'post'}
              value={data?.factorForm?.post}
              formItemIndex={5}
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
                id: 'Input_73115_437536_7492944',
                uid: 'Input_73115_437536_7492944',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_73115_437536_7492944')
              }
              {...injectData}
            />
            <Select
              name={'紧急程度'}
              size={'default'}
              selfSpan={12}
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
              fieldName={'urgentDegreeEnum'}
              value={data?.factorForm?.urgentDegreeEnum}
              formItemIndex={6}
              $$componentItem={{
                id: 'Input_73115_437536_2572505',
                uid: 'Input_73115_437536_2572505',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_73115_437536_2572505')
              }
              {...injectData}
            />
            <TextArea
              name={'涉及权限或角色'}
              selfSpan={12}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'involvePowerRole'}
              value={data?.factorForm?.involvePowerRole}
              formItemIndex={7}
              tipIcon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              tipContent={
                '原已合作XX业务。现阶段有意向与我司合作商务快线业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              $$componentItem={{
                id: 'Input_7242206_974846_973427_623061_83606924_216267',
                uid: 'Input_7242206_974846_973427_623061_83606924_216267',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Input_7242206_974846_973427_623061_83606924_216267',
                )
              }
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              formItemIndex={8}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '原已合作XX业务。现阶段有意向与我司合作商务快线业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              $$componentItem={{
                id: 'Input_7242206_974846_973427_623061_83606924',
                uid: 'Input_7242206_974846_973427_623061_83606924',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Input_7242206_974846_973427_623061_83606924',
                )
              }
              {...injectData}
            />
          </Form>
        </View>
        <BusiComp0521965
          pageId={pageId}
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_544685_8146287')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0012_0002$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
