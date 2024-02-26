// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  HorizontalView,
  Card,
  Tree,
  Description,
  Form,
  Input,
  Button,
  Table,
  Select,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '907996928354811904';
const SceneAttrManage$$Page: React.FC<PageProps> = ({
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
  const reloadSceneAttrTable = (options_9406952: any) => {
    const eventDatareloadDataSource26: any = [
      {
        type: 'reloadDataSource',
        dataId: 166634308508132000,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '03514573',
          pageJsonId: '615837',
          dataSourceId: 166634156944981020,
          dataSourceName: 'qrySceneAttrPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '208875',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '390017',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '274222',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '7064604',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '465713',
                  code: 'sceneId',
                  name: 'sceneId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.sceneId',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'sceneId',
                  },
                },
                {
                  attrId: '757039',
                  code: 'attrName',
                  name: 'attrName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.attrName',
                  value: {
                    type: ['form', 'Form_581788', 'getFieldsValue'],
                    code: 'attrName',
                  },
                },
                {
                  attrId: '760099',
                  code: 'attrCode',
                  name: 'attrCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.attrCode',
                  value: {
                    type: ['form', 'Form_581788', 'getFieldsValue'],
                    code: 'attrCode',
                  },
                },
                {
                  attrId: '125085',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['context', '$options_9406952$'], code: '' },
                },
                {
                  attrId: '834086',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '169889',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '010371',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2730357',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '255422',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '063298',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '092066',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '516084',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '0061',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '298451',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '160243',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5256354',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '709439',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '772092',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '141157',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '330844',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '7483896',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '412751',
                      code: 'attrCode',
                      name: 'attrCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '34177',
                      code: 'sceneAttrId',
                      name: 'sceneAttrId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '4024326',
                      code: 'attrValueDataType',
                      name: 'attrValueDataType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5715156',
                      code: 'isMatrixAttr',
                      name: 'isMatrixAttr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '236034',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '251918',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1986799',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6444694',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '099428',
                      code: 'valueFrom',
                      name: 'valueFrom',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '49616077',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '966562',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '076662',
                      code: 'attrValueType',
                      name: 'attrValueType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '920363',
                      code: 'attrId',
                      name: 'attrId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '9640446',
                      code: 'sceneId',
                      name: 'sceneId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '228701',
                      code: 'intfAddress',
                      name: 'intfAddress',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '953166',
                      code: 'attrName',
                      name: 'attrName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8938866',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '170503',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource26.params =
      [
        {
          title: '事件入参',
          name: 'options_9406952',
          value: '$options_9406952$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource26,
      { options_9406952 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    reloadSceneAttrTable,
  }));

  useEffect(() => {
    const eventDataapiRequest436: any = [
      {
        type: 'apiRequest',
        dataId: 166634135882834200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '107177',
          pageJsonId: '615837',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
          _apiCode: 'qryCatalogToTreeNodeListByParentCode',
          _source: 'rhin',
          _serviceId: '877545868169199616',
          _serviceTitle:
            '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
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
              dataKey: '107177_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '107177_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '107177_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'isQryAll',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  defaultValue: 'false',
                  _id: 'body.isQryAll',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.isQryAll',
                  dataKey: '107177_body.isQryAll',
                  value: { type: ['customize'], code: 'true' },
                },
                {
                  code: 'parentCatalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCatalogCode',
                  compType: 'Input',
                  name: 'parentCatalogCode',
                  parents: ['body'],
                  id: 'body.parentCatalogCode',
                  dataKey: '107177_body.parentCatalogCode',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '107177_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166634138567817570,
            shielding: true,
            options: {
              compId: 'Tree_762542',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Tree',
              id: '284399',
              data: '$reply_107177?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 167841611353591650,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '7392945',
              pageJsonId: '90041',
              code: 'function main(data,state,success,fail){var _reply_,_reply_2;console.log("\\u8FD4\\u56DE\\u7684\\u6570\\u636E:",(_reply_=reply_107177)===null||_reply_===void 0?void 0:_reply_.resultData);var result=((_reply_2=reply_107177)===null||_reply_2===void 0?void 0:_reply_2.resultData)||[];var res=[];for(var i=0;i<result.length;i++){var subRes=result[i];var childrenOne=subRes["children"]||[];var subRes2=[];for(var j=0;j<childrenOne.length;j++){var finalRes=childrenOne[j];var childrenTwo=finalRes["children"]||[];var finalRes2=[];for(var k=0;k<childrenTwo.length;k++){var lastRes=childrenTwo[k]||[];var childrenThr=lastRes["children"]||[];for(var o=0;o<childrenThr.length;o++){lastRes["children"][o]["isCheck"]=true}finalRes2.push(lastRes)}subRes2.push(finalRes2)}res.push(subRes)}console.log("\\u7ED3\\u679C\\uFF1A",res);success(result)};',
              actionTitle: '将叶节点设置为可选中',
            },
            line_number: 3,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167841611820809950,
                options: {
                  compId: 'Tree_762542',
                  compLib: 'comm',
                  pageJsonId: '615837',
                  compName: 'Tree',
                  id: '1371447',
                  data: '$data_7392945$',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  selectable: 'isCheck',
                  childrenKey: 'children',
                },
                line_number: 4,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest436.params = [] || [];
    CMDGenerator(eventDataapiRequest436, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest437: any = [
      {
        type: 'apiRequest',
        dataId: 166634330866223000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '308171',
          pageJsonId: '615837',
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
              dataKey: '308171_header',
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
                  dataKey: '308171_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '308171_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '308171_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '308171_body',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166634334813021900,
            options: {
              compId: 'Table_22551098',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Table',
              id: '771699',
              colName: 'attrValueType',
              data: '$reply_308171?.resultData$',
            },
            line_number: 6,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest437.params = [] || [];
    CMDGenerator(eventDataapiRequest437, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest438: any = [
      {
        type: 'apiRequest',
        dataId: 166634335663877220,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '476389',
          pageJsonId: '615837',
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
              dataKey: '476389_header',
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
                  dataKey: '476389_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_DATA_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '476389_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '476389_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '476389_body',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166634337689049340,
            options: {
              compId: 'Table_22551098',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Table',
              id: '859295',
              colName: 'attrValueDataType',
              data: '$reply_476389?.resultData$',
            },
            line_number: 8,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest438.params = [] || [];
    CMDGenerator(eventDataapiRequest438, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest439: any = [
      {
        type: 'apiRequest',
        dataId: 166634639316591330,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '744611',
          pageJsonId: '615837',
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
              dataKey: '744611_header',
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
                  dataKey: '744611_path.attrCode',
                  value: { type: ['customize'], code: 'VALUE_FROM' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '744611_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '744611_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '744611_body',
            },
          ],
        },
        line_number: 9,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166634641503900930,
            options: {
              compId: 'Select_031271',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Select',
              id: '197714',
              data: '$reply_744611?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 10,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest439.params = [] || [];
    CMDGenerator(eventDataapiRequest439, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetDisable60: any = [
      {
        type: 'setDisable',
        dataId: 166634635460577470,
        options: {
          compId: 'Form_216578',
          compLib: 'comm',
          pageJsonId: '615837',
          compName: 'Form',
          id: '435744',
          disabled: 'true',
        },
        line_number: 11,
      },
    ];
    eventDatasetDisable60.params = [] || [];
    CMDGenerator(eventDatasetDisable60, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable61: any = [
      {
        type: 'setDisable',
        dataId: 166634636101411460,
        options: {
          compId: 'Button_3133285',
          compLib: 'comm',
          pageJsonId: '615837',
          compName: 'Button',
          id: '308333',
          disabled: 'true',
        },
        line_number: 12,
      },
    ];
    eventDatasetDisable61.params = [] || [];
    CMDGenerator(eventDatasetDisable61, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable62: any = [
      {
        type: 'setDisable',
        dataId: 166634636656992200,
        options: {
          compId: 'Button_550582',
          compLib: 'comm',
          pageJsonId: '615837',
          compName: 'Button',
          id: '668104',
          disabled: 'true',
        },
        line_number: 13,
      },
    ];
    eventDatasetDisable62.params = [] || [];
    CMDGenerator(eventDatasetDisable62, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable63: any = [
      {
        type: 'setDisable',
        dataId: 166635281102814720,
        options: {
          compId: 'Button_3440476',
          compLib: 'comm',
          pageJsonId: '615837',
          compName: 'Button',
          id: '792329',
          disabled: 'true',
        },
        line_number: 14,
      },
    ];
    eventDatasetDisable63.params = [] || [];
    CMDGenerator(eventDatasetDisable63, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable64: any = [
      {
        type: 'setDisable',
        dataId: 166635281819810370,
        options: {
          compId: 'Button_555132',
          compLib: 'comm',
          pageJsonId: '615837',
          compName: 'Button',
          id: '9719275',
          disabled: 'true',
        },
        line_number: 15,
      },
    ];
    eventDatasetDisable64.params = [] || [];
    CMDGenerator(eventDatasetDisable64, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataapiRequest440: any = [
      {
        type: 'apiRequest',
        dataId: 166660313376010080,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4761898',
          pageJsonId: '615837',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAllFlowList',
          _apiCode: 'qryAllFlowList',
          _source: 'rhin',
          _serviceId: '901761206359654400',
          _serviceTitle: '查询所有流程列表-tsm: qryAllFlowList',
          params: 'object',
        },
        line_number: 16,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166660315059699000,
            options: {
              compId: 'Description_503174',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Description',
              id: '484041',
              colName: 'importantFlowCode',
              data: '$reply_4761898?.resultData$',
            },
            line_number: 17,
          },
          {
            type: 'reloadColServiceData',
            dataId: 166660316523323740,
            options: {
              compId: 'Description_503174',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Description',
              id: '877329',
              colName: 'cityFlowCode',
              data: '$reply_4761898?.resultData$',
            },
            line_number: 18,
          },
          {
            type: 'reloadColServiceData',
            dataId: 166660316613636060,
            options: {
              compId: 'Description_503174',
              compLib: 'comm',
              pageJsonId: '615837',
              compName: 'Description',
              id: '301379',
              colName: 'countyFlowCode',
              data: '$reply_4761898?.resultData$',
            },
            line_number: 19,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest440.params = [] || [];
    CMDGenerator(eventDataapiRequest440, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_615837__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_615837_1',
          uid: 'View_615837_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_615837_1')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_446863',
            uid: 'HorizontalView_446863',
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
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_446863')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_778994',
              uid: 'View_778994',
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
              width: '30%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_778994')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'场景目录'}
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
                id: 'Card_80508',
                uid: 'Card_80508',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0px 8px 16px 0px',
                height: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_80508')}
              {...injectData}
            >
              <Tree
                name={'场景树'}
                defaultExpandAll={false}
                showLine={true}
                selectable={true}
                isAsync={false}
                treeData={[
                  {
                    title: '第一列',
                    key: 'column1',
                    selectable: true,
                    value: 'column1',
                    label: '第一列',
                    $$isParent: true,
                    children: [
                      {
                        title: '第二列',
                        key: 'column2',
                        value: 'column2',
                        selectable: true,
                        label: '第二列',
                      },
                    ],
                  },
                ]}
                showLineIcon={false}
                treeColumns={{
                  key: 'nodeKey',
                  selectable: 'isCheck',
                  children: 'children',
                  title: 'nodeValue',
                  selectedService: {
                    busiApiId: '877545868169199616',
                    busiApiNbr: 'qryCatalogToTreeNodeListByParentCode',
                    busiApiName: '根据父类目编码查询类目数据-tsm',
                    busiObjId: '877545868169199616',
                    apiParam:
                      '[{"apiId":877545868169199616,"apiParamId":877545868303417344,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868303417345,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868303417345,"serviceObjectPath":"877545868303417345","statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},"paramObjectId":877545868303417345,"paramType":"1000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868307611648,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868311805952,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868311805952,"serviceObjectPath":"877545868311805952","statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805952,"paramType":"2000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805953,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868311805954,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868311805954,"serviceObjectPath":"877545868311805954","statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805954,"paramType":"3000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805955,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点","rootServiceObjectId":877545868311805956,"serviceObject":[],"serviceObjectAttrs":[{"attrId":878888728903589890,"attrSpec":{"attrId":878888728903589890,"attrName":"是否全查","attrNbr":"isQryAll","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661149801670,"createStaff":50167,"defaultValue":"false","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"true","mustFlag":"F","remark":"新增节点","serviceObjAttrId":878888728903589889,"serviceObjectId":877545868311805956,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":877545868487966721,"attrSpec":{"attrId":877545868487966721,"attrName":"parentCatalogCode","attrNbr":"parentCatalogCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661150341276,"createStaff":50167,"exampleValue":"-1","mustFlag":"F","serviceObjAttrId":878890991944241152,"serviceObjectId":877545868311805956,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":877545868311805956,"serviceObjectPath":"877545868311805956","statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805956,"paramType":"4000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805957,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"isList":"T","level":2,"parServiceObjectId":877545868311805958,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"isList":"T","level":3,"parServiceObjectId":900674183637213184,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"isList":"T","level":4,"parServiceObjectId":900674183637213185,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[],"serviceObjectAttrs":[{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"true","mustFlag":"F","serviceObjAttrId":900674184174084096,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"政企客户服务费申请","mustFlag":"F","serviceObjAttrId":900674184174084097,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"1003","mustFlag":"F","serviceObjAttrId":900674184174084098,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"CLS_JC_0001","mustFlag":"F","serviceObjAttrId":900674184178278400,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184178278401,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":884431908100120578,"attrSpec":{"attrId":884431908100120578,"attrName":"isContainsMatrixAttr","attrNbr":"isContainsMatrixAttr","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184178278402,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"CLS_JC_0001_0001","mustFlag":"F","serviceObjAttrId":900674184178278403,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184178278404,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":1311,"attrSpec":{"attrId":1311,"attrName":"nodeId","attrNbr":"nodeId","attrValueDataType":"1400","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"10101","mustFlag":"F","serviceObjAttrId":900674184182472704,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":884431908100120582,"attrSpec":{"attrId":884431908100120582,"attrName":"isExclusiveFlow","attrNbr":"isExclusiveFlow","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184182472705,"serviceObjectId":900674183637213186,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"}],"serviceObjectCode":"children","serviceObjectId":900674183637213186,"serviceObjectPath":"877545868311805958,900674183637213184,900674183637213185,900674183637213186","statusCd":"1000","tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"false","mustFlag":"F","serviceObjAttrId":900674184203444224,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"政企客户服务费申请","mustFlag":"F","serviceObjAttrId":900674184207638528,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"1002","mustFlag":"F","serviceObjAttrId":900674184207638529,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"CLS_JC","mustFlag":"F","serviceObjAttrId":900674184207638530,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":884431908100120578,"attrSpec":{"attrId":884431908100120578,"attrName":"isContainsMatrixAttr","attrNbr":"isContainsMatrixAttr","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184207638531,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"CLS_JC_0001","mustFlag":"F","serviceObjAttrId":900674184207638532,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184211832832,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":1311,"attrSpec":{"attrId":1311,"attrName":"nodeId","attrNbr":"nodeId","attrValueDataType":"1400","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"101","mustFlag":"F","serviceObjAttrId":900674184211832833,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":884431908100120582,"attrSpec":{"attrId":884431908100120582,"attrName":"isExclusiveFlow","attrNbr":"isExclusiveFlow","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184211832834,"serviceObjectId":900674183637213185,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"}],"serviceObjectCode":"children","serviceObjectId":900674183637213185,"serviceObjectPath":"877545868311805958,900674183637213184,900674183637213185","statusCd":"1000","tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"false","mustFlag":"F","serviceObjAttrId":900674184236998656,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"基础类","mustFlag":"F","serviceObjAttrId":900674184241192960,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"1001","mustFlag":"F","serviceObjAttrId":900674184241192961,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"-1","mustFlag":"F","serviceObjAttrId":900674184241192962,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":884431908100120578,"attrSpec":{"attrId":884431908100120578,"attrName":"isContainsMatrixAttr","attrNbr":"isContainsMatrixAttr","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184241192963,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"CLS_JC","mustFlag":"F","serviceObjAttrId":900674184245387264,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184245387265,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":1311,"attrSpec":{"attrId":1311,"attrName":"nodeId","attrNbr":"nodeId","attrValueDataType":"1400","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"100","mustFlag":"F","serviceObjAttrId":900674184245387266,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":884431908100120582,"attrSpec":{"attrId":884431908100120582,"attrName":"isExclusiveFlow","attrNbr":"isExclusiveFlow","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184245387267,"serviceObjectId":900674183637213184,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":900674183637213184,"serviceObjectPath":"877545868311805958,900674183637213184","statusCd":"1000","tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":1226,"attrSpec":{"attrId":1226,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":900674184274747392,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":900674184274747393,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},{"attrId":1227,"attrSpec":{"attrId":1227,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666343858092,"createStaff":50167,"exampleValue":"SUCCESS","mustFlag":"F","serviceObjAttrId":900674184274747394,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":877545868311805958,"serviceObjectPath":"877545868311805958","statusCd":"1000","statusDate":1666343858092,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805958,"paramType":"5000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"}]',
                    request: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                        },
                        { code: 'query', name: 'URL 参数', attrType: 'object' },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'isQryAll',
                              name: '新增节点',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                              defaultValue: 'false',
                            },
                            {
                              code: 'parentCatalogCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                          ],
                        },
                      ],
                    },
                    response: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'resultCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultMsgCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultMsg',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultData',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'isCheck',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                            },
                            {
                              code: 'nodeValue',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'catalogType',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'parentCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isContainsMatrixAttr',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'nodeKey',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isMatrixSubType',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'nodeId',
                              attrType: 'field',
                              type: '1400',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isExclusiveFlow',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'children',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'isCheck',
                                  attrType: 'field',
                                  type: '1500',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeValue',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'catalogType',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'parentCode',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isContainsMatrixAttr',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeKey',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isMatrixSubType',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeId',
                                  attrType: 'field',
                                  type: '1400',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isExclusiveFlow',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'children',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'isCheck',
                                      attrType: 'field',
                                      type: '1500',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'nodeValue',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'catalogType',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'parentCode',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'children',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'isContainsMatrixAttr',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'nodeKey',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'isMatrixSubType',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'nodeId',
                                      attrType: 'field',
                                      type: '1400',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'isExclusiveFlow',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    productId: '11095',
                    api: '/app/rhin/gateway/callRhinEngine',
                    _source: 'rhin',
                    _serviceId: '877545868169199616',
                    _serviceTitle:
                      '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
                    _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
                    _apiCode: 'qryCatalogToTreeNodeListByParentCode',
                    isServiceParam: true,
                    requestType: 'object',
                    responseType: 'object',
                  },
                }}
                treeService={{
                  appId: '871672424566726656',
                  _serviceId: '877545868169199616',
                  _source: 'rhin',
                  api: '/app/rhin/gateway/callRhinEngine',
                  key: 'nodeKey',
                  selectable: 'isCheck',
                  children: 'children',
                  title: 'nodeValue',
                }}
                showSearch={true}
                $$componentItem={{
                  id: 'Tree_762542',
                  uid: 'Tree_762542',
                  type: 'Tree',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onSelect={(selectedKeys: any, { node }: any) => {
                  const eventDataifelse505: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '39833',
                          options: {
                            context: '$selectedKeys[0]$',
                            operate: 'empty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166808610205400130,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166808613595421400,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166808614976740670,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166808614976714880,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166808614976783400,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                },
                              ],
                              todoOptions: [
                                'selectAllDataSource',
                                'dataSourceSetValue',
                                'onlySetPatch',
                              ],
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '362472',
                                pageJsonId: '615837',
                                dataSourceId: 166634161598320160,
                                dataSourceName: 'local_vars',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '9175398',
                                    code: 'sceneId',
                                    name: '场景ID',
                                    type: 'number',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$node.props.data.data.nodeId$',
                                    },
                                  },
                                  {
                                    attrId: '895536',
                                    code: 'operType',
                                    name: '操作类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '732892',
                                    code: 'pageNum',
                                    name: '页码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6853637',
                                    code: 'sceneCode',
                                    name: '场景编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$node.props.data.data.nodeKey$',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              actionObjId: 'setDataSource',
                              actionObjName: 'page',
                              value: 'setDataSource',
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 166808615882473400,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166808615882410100,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166808615882463100,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                },
                              ],
                              todoOptions: [
                                'customFuncName',
                                'customFuncParams',
                              ],
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '157972',
                                pageJsonId: '615837',
                                customFuncName: 'reloadSceneAttrTable',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              line_number: 4,
                            },
                            {
                              dataName: 'action',
                              dataId: 16680861665073584,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166808616650753950,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166808616650792500,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                },
                              ],
                              todoOptions: [
                                'selectServerDataSource',
                                'dataSourceReloadFilter',
                              ],
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '9363547',
                                pageJsonId: '615837',
                                dataSourceId: 166660080557918880,
                                dataSourceName: 'getDcCatalogByCode',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '9124625',
                                    code: 'header',
                                    name: '请求头参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'header',
                                  },
                                  {
                                    attrId: '8139604',
                                    code: 'path',
                                    name: '请求路径参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '823104',
                                        code: 'catalogCode',
                                        name: '新增节点',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        key: 'path.catalogCode',
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedKeys[0]$',
                                          ],
                                          code: '',
                                        },
                                      },
                                    ],
                                    key: 'path',
                                  },
                                  {
                                    attrId: '977966',
                                    code: 'query',
                                    name: 'URL 参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'query',
                                  },
                                  {
                                    attrId: '773486',
                                    code: 'body',
                                    name: '请求体',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'body',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '4102092',
                                    code: 'resultCode',
                                    name: 'resultCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '300146',
                                    code: 'resultMsgCode',
                                    name: 'resultMsgCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '199169',
                                    code: 'resultMsg',
                                    name: 'resultMsg',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '122047',
                                    code: 'resultData',
                                    name: 'resultData',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '3415755',
                                        code: 'col9',
                                        name: 'col9',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '187307',
                                        code: 'col6',
                                        name: 'col6',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '614172',
                                        code: 'col7',
                                        name: 'col7',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '8006055',
                                        code: 'col4',
                                        name: 'col4',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '299971',
                                        code: 'col5',
                                        name: 'col5',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '883246',
                                        code: 'col2',
                                        name: 'col2',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4076966',
                                        code: 'col3',
                                        name: 'col3',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '012475',
                                        code: 'sourceFrom',
                                        name: 'sourceFrom',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '715236',
                                        code: 'updateDate',
                                        name: 'updateDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '064084',
                                        code: 'catalogType',
                                        name: 'catalogType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '498058',
                                        code: 'catalogCode',
                                        name: 'catalogCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9938663',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '0956455',
                                        code: 'lanId',
                                        name: 'lanId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '8802003',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5533062',
                                        code: 'isMultiInst',
                                        name: 'isMultiInst',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '603203',
                                        code: 'catalogId',
                                        name: 'catalogId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '695427',
                                        code: 'flowCode',
                                        name: 'flowCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '978106',
                                        code: 'col8',
                                        name: 'col8',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '7265094',
                                        code: 'sourceFromName',
                                        name: 'sourceFromName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '26031',
                                        code: 'col1',
                                        name: 'col1',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '644873',
                                        code: 'createDate',
                                        name: 'createDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '460914',
                                        code: 'col5Name',
                                        name: 'col5Name',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '179654',
                                        code: 'cfgVersion',
                                        name: 'cfgVersion',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '797713',
                                        code: 'catalogSubType',
                                        name: 'catalogSubType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '50463721',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '65192',
                                        code: 'sort',
                                        name: 'sort',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '135648',
                                        code: 'parentCatalogCode',
                                        name: 'parentCatalogCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '750016',
                                        code: 'provinceId',
                                        name: 'provinceId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3908624',
                                        code: 'catalogStatus',
                                        name: 'catalogStatus',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '453067',
                                        code: 'isExclusiveFlow',
                                        name: 'isExclusiveFlow',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '913107',
                                        code: 'createStaff',
                                        name: 'createStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '130876',
                                        code: 'catalogName',
                                        name: 'catalogName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '325239',
                                        code: 'col6Name',
                                        name: 'col6Name',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4861166',
                                        code: 'areaId',
                                        name: 'areaId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '606604',
                                        code: 'isContainsMatrixAttr',
                                        name: 'isContainsMatrixAttr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '850005',
                                        code: 'col10',
                                        name: 'col10',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '649024',
                                        code: 'col3Name',
                                        name: 'col3Name',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '488628',
                                        code: 'catalogDesc',
                                        name: 'catalogDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5604223',
                                        code: 'updateStaff',
                                        name: 'updateStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                    ],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                              },
                              actionObjId: 'reloadDataSource',
                              actionObjName: 'page',
                              value: 'reloadDataSource',
                              line_number: 5,
                            },
                            {
                              dataName: 'action',
                              dataId: 166808617338956480,
                              children: [],
                              todoOptions: ['disabled'],
                              options: {
                                compId: ['Button_3440476', 'Button_555132'],
                                compLib: 'comm',
                                pageJsonId: '615837',
                                compName: 'Button',
                                id: '908074',
                                disabled: '',
                                compid: ['Button_3440476', 'Button_555132'],
                              },
                              actionObjId: 'Button_3440476',
                              actionObjName: 'Button',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 6,
                            },
                          ],
                          condition: [],
                          desc: '已选树节点',
                          callback: [
                            {
                              type: 'setDataSource',
                              dataId: 166808614976740670,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '362472',
                                pageJsonId: '615837',
                                dataSourceId: 166634161598320160,
                                dataSourceName: 'local_vars',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '9175398',
                                    code: 'sceneId',
                                    name: '场景ID',
                                    type: 'number',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$node.props.data.data.nodeId$',
                                    },
                                  },
                                  {
                                    attrId: '895536',
                                    code: 'operType',
                                    name: '操作类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '732892',
                                    code: 'pageNum',
                                    name: '页码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6853637',
                                    code: 'sceneCode',
                                    name: '场景编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$node.props.data.data.nodeKey$',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166808615882473400,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '157972',
                                pageJsonId: '615837',
                                customFuncName: 'reloadSceneAttrTable',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'reloadDataSource',
                              dataId: 16680861665073584,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '9363547',
                                pageJsonId: '615837',
                                dataSourceId: 166660080557918880,
                                dataSourceName: 'getDcCatalogByCode',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '9124625',
                                    code: 'header',
                                    name: '请求头参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'header',
                                  },
                                  {
                                    attrId: '8139604',
                                    code: 'path',
                                    name: '请求路径参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '823104',
                                        code: 'catalogCode',
                                        name: '新增节点',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        key: 'path.catalogCode',
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedKeys[0]$',
                                          ],
                                          code: '',
                                        },
                                      },
                                    ],
                                    key: 'path',
                                  },
                                  {
                                    attrId: '977966',
                                    code: 'query',
                                    name: 'URL 参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'query',
                                  },
                                  {
                                    attrId: '773486',
                                    code: 'body',
                                    name: '请求体',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'body',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '4102092',
                                    code: 'resultCode',
                                    name: 'resultCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '300146',
                                    code: 'resultMsgCode',
                                    name: 'resultMsgCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '199169',
                                    code: 'resultMsg',
                                    name: 'resultMsg',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '122047',
                                    code: 'resultData',
                                    name: 'resultData',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '3415755',
                                        code: 'col9',
                                        name: 'col9',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '187307',
                                        code: 'col6',
                                        name: 'col6',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '614172',
                                        code: 'col7',
                                        name: 'col7',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '8006055',
                                        code: 'col4',
                                        name: 'col4',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '299971',
                                        code: 'col5',
                                        name: 'col5',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '883246',
                                        code: 'col2',
                                        name: 'col2',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4076966',
                                        code: 'col3',
                                        name: 'col3',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '012475',
                                        code: 'sourceFrom',
                                        name: 'sourceFrom',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '715236',
                                        code: 'updateDate',
                                        name: 'updateDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '064084',
                                        code: 'catalogType',
                                        name: 'catalogType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '498058',
                                        code: 'catalogCode',
                                        name: 'catalogCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9938663',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '0956455',
                                        code: 'lanId',
                                        name: 'lanId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '8802003',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5533062',
                                        code: 'isMultiInst',
                                        name: 'isMultiInst',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '603203',
                                        code: 'catalogId',
                                        name: 'catalogId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '695427',
                                        code: 'flowCode',
                                        name: 'flowCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '978106',
                                        code: 'col8',
                                        name: 'col8',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '7265094',
                                        code: 'sourceFromName',
                                        name: 'sourceFromName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '26031',
                                        code: 'col1',
                                        name: 'col1',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '644873',
                                        code: 'createDate',
                                        name: 'createDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '460914',
                                        code: 'col5Name',
                                        name: 'col5Name',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '179654',
                                        code: 'cfgVersion',
                                        name: 'cfgVersion',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '797713',
                                        code: 'catalogSubType',
                                        name: 'catalogSubType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '50463721',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '65192',
                                        code: 'sort',
                                        name: 'sort',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '135648',
                                        code: 'parentCatalogCode',
                                        name: 'parentCatalogCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '750016',
                                        code: 'provinceId',
                                        name: 'provinceId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3908624',
                                        code: 'catalogStatus',
                                        name: 'catalogStatus',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '453067',
                                        code: 'isExclusiveFlow',
                                        name: 'isExclusiveFlow',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '913107',
                                        code: 'createStaff',
                                        name: 'createStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '130876',
                                        code: 'catalogName',
                                        name: 'catalogName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '325239',
                                        code: 'col6Name',
                                        name: 'col6Name',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4861166',
                                        code: 'areaId',
                                        name: 'areaId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '606604',
                                        code: 'isContainsMatrixAttr',
                                        name: 'isContainsMatrixAttr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '850005',
                                        code: 'col10',
                                        name: 'col10',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '649024',
                                        code: 'col3Name',
                                        name: 'col3Name',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '488628',
                                        code: 'catalogDesc',
                                        name: 'catalogDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5604223',
                                        code: 'updateStaff',
                                        name: 'updateStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                    ],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDisable',
                              dataId: 166808617338956480,
                              options: {
                                compId: ['Button_3440476', 'Button_555132'],
                                compLib: 'comm',
                                pageJsonId: '615837',
                                compName: 'Button',
                                id: '908074',
                                disabled: '',
                                compid: ['Button_3440476', 'Button_555132'],
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 166808621158250700,
                          shielding: true,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '548571',
                            pageJsonId: '615837',
                            type: 'success',
                            value: '取消选择',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse505.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse505,
                    { selectedKeys, node },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Tree_762542')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_733267',
              uid: 'View_733267',
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
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_733267')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'场景详情'}
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
                id: 'Card_329487',
                uid: 'Card_329487',
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_329487')}
              {...injectData}
            >
              <Description
                name={'描述列表'}
                columns={[
                  {
                    title: 'catalogId',
                    key: 'catalogId',
                    dataIndex: 'catalogId',
                    label: '场景标识',
                    id: '95783',
                    customRendering: undefined,
                  },
                  {
                    title: 'catalogName',
                    key: 'catalogName',
                    dataIndex: 'catalogName',
                    label: '场景名称',
                    id: '352355',
                    customRendering: undefined,
                  },
                  {
                    title: 'catalogCode',
                    key: 'catalogCode',
                    dataIndex: 'catalogCode',
                    label: '场景编码',
                    id: '287874',
                    customRendering: undefined,
                  },
                  {
                    title: 'flowCode',
                    key: 'flowCode',
                    dataIndex: 'importantFlowCode',
                    label: '省级/重客流程',
                    id: '553659',
                    staticService: {
                      labelKey: 'flowName',
                      valueKey: 'flowCode',
                    },
                    customRendering: undefined,
                  },
                  {
                    title: 'col1',
                    key: 'col1',
                    dataIndex: 'cityFlowCode',
                    label: '地市流程',
                    id: '168879',
                    staticService: {
                      labelKey: 'flowName',
                      valueKey: 'flowCode',
                    },
                    customRendering: undefined,
                  },
                  {
                    title: 'col2',
                    key: 'col2',
                    dataIndex: 'countyFlowCode',
                    label: '区县流程',
                    id: '2976324',
                    staticService: {
                      labelKey: 'flowName',
                      valueKey: 'flowCode',
                    },
                    customRendering: undefined,
                  },
                  {
                    title: 'col3Name',
                    key: 'col3Name',
                    dataIndex: 'isExtSystemSupport',
                    label: '其他系统已支撑',
                    id: '1621735',
                    staticDataSource: attrDataMap['PUB_001'],
                    customRendering: undefined,
                  },
                  {
                    title: 'col4',
                    key: 'col4',
                    dataIndex: 'extSystemAddress',
                    label: '外部审批单地址',
                    id: '97482',
                    customRendering: undefined,
                  },
                  {
                    title: 'col6Name',
                    key: 'col6Name',
                    dataIndex: 'isBeforeApproveAfterHandle',
                    label: '边办边审',
                    id: '5826355',
                    staticDataSource: attrDataMap['PUB_001'],
                    customRendering: undefined,
                  },
                  {
                    title: 'sourceFromName',
                    key: 'sourceFromName',
                    dataIndex: 'sourceFromName',
                    label: '发起来源',
                    id: '816716',
                    customRendering: undefined,
                  },
                  {
                    title: 'isSupportThrowOrder',
                    key: 'isSupportThrowOrder',
                    dataIndex: 'isSupportThrowOrder',
                    label: '是否支持甩单',
                    id: '2801904',
                    staticDataSource: attrDataMap['PUB_001'],
                    customRendering: undefined,
                  },
                  {
                    title: 'isMultiInst',
                    key: 'isMultiInst',
                    dataIndex: 'isMultiInst',
                    label: '是否多实例',
                    id: '0168',
                    staticDataSource: attrDataMap['PUB_001'],
                    customRendering: undefined,
                  },
                ]}
                bordered={true}
                labelWidth={undefined}
                colSpan={8}
                colon={true}
                labelAlign={'left'}
                dataSource={data?.getDcCatalogByCode?.resultData}
                descColumns={[
                  {
                    title: 'catalogId',
                    key: 'catalogId',
                    dataIndex: 'catalogId',
                    label: '场景标识',
                    id: '95783',
                  },
                  {
                    title: 'catalogName',
                    key: 'catalogName',
                    dataIndex: 'catalogName',
                    label: '场景名称',
                    id: '352355',
                  },
                  {
                    title: 'catalogCode',
                    key: 'catalogCode',
                    dataIndex: 'catalogCode',
                    label: '场景编码',
                    id: '287874',
                  },
                  {
                    title: 'flowCode',
                    key: 'flowCode',
                    dataIndex: 'importantFlowCode',
                    label: '省级/重客流程',
                    id: '553659',
                    staticService: {
                      valueKey: 'flowCode',
                      labelKey: 'flowName',
                      _source: 'rhin',
                      _serviceId: '901761206359654400',
                      _serviceTitle: '查询所有流程列表-tsm: qryAllFlowList',
                    },
                  },
                  {
                    title: 'col1',
                    key: 'col1',
                    dataIndex: 'cityFlowCode',
                    label: '地市流程',
                    id: '168879',
                    staticService: {
                      valueKey: 'flowCode',
                      labelKey: 'flowName',
                      _source: 'rhin',
                      _serviceId: '901761206359654400',
                      _serviceTitle: '查询所有流程列表-tsm: qryAllFlowList',
                    },
                  },
                  {
                    title: 'col2',
                    key: 'col2',
                    dataIndex: 'countyFlowCode',
                    label: '区县流程',
                    id: '2976324',
                    staticService: {
                      valueKey: 'flowCode',
                      labelKey: 'flowName',
                      _source: 'rhin',
                      _serviceId: '901761206359654400',
                      _serviceTitle: '查询所有流程列表-tsm: qryAllFlowList',
                    },
                  },
                  {
                    title: 'col3Name',
                    key: 'col3Name',
                    dataIndex: 'isExtSystemSupport',
                    label: '其他系统已支撑',
                    id: '1621735',
                    attr: {
                      attrName: '公共_是否通用',
                      attrId: '884379924399366144',
                      attrNbr: 'PUB_001',
                    },
                  },
                  {
                    title: 'col4',
                    key: 'col4',
                    dataIndex: 'extSystemAddress',
                    label: '外部审批单地址',
                    id: '97482',
                  },
                  {
                    title: 'col6Name',
                    key: 'col6Name',
                    dataIndex: 'isBeforeApproveAfterHandle',
                    label: '边办边审',
                    id: '5826355',
                    attr: {
                      attrName: '公共_是否通用',
                      attrId: '884379924399366144',
                      attrNbr: 'PUB_001',
                    },
                  },
                  {
                    title: 'sourceFromName',
                    key: 'sourceFromName',
                    dataIndex: 'sourceFromName',
                    label: '发起来源',
                    id: '816716',
                  },
                  {
                    title: 'isSupportThrowOrder',
                    key: 'isSupportThrowOrder',
                    dataIndex: 'isSupportThrowOrder',
                    label: '是否支持甩单',
                    id: '2801904',
                    attr: {
                      attrName: '公共_是否通用',
                      attrId: '884379924399366144',
                      attrNbr: 'PUB_001',
                    },
                  },
                  {
                    title: 'isMultiInst',
                    key: 'isMultiInst',
                    dataIndex: 'isMultiInst',
                    label: '是否多实例',
                    id: '0168',
                    attr: {
                      attrName: '公共_是否通用',
                      attrId: '884379924399366144',
                      attrNbr: 'PUB_001',
                    },
                  },
                ]}
                labelSize={'120px'}
                $$componentItem={{
                  id: 'Description_503174',
                  uid: 'Description_503174',
                  type: 'Description',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => refs.setComponentRef(r, 'Description_503174')}
                {...injectData}
              />
            </Card>
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'场景要素列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '8042662',
                  title: '批量新增要素',
                  iconPos: 'left',
                  btnType: 'primary',
                  icon: '',
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
                id: 'Card_70762',
                uid: 'Card_70762',
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
              onClickBtn1={(e: any) => {
                const eventDataifelse506: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '160008',
                        options: {
                          context: '$data.local_vars.sceneId$',
                          operate: 'empty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166635284294013980,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166635288177417060,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166635289207105060,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166635289207125600,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166635577123311300,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 16663557712335116,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166635577123387970,
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
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '4624753',
                                      pageJsonId: '615837',
                                      customFuncName: 'reloadSceneAttrTable',
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    elseIfs: [],
                                    line_number: 4,
                                  },
                                ],
                                value: 'callback1',
                                params: [
                                  {
                                    title: '弹窗确认回调参数',
                                    name: 'okData_296096',
                                    value: '$okData_87915$',
                                  },
                                ],
                                elseIfs: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166635289207180160,
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
                              id: '87915',
                              pageJsonId: '615837',
                              modalname: '/piliangtianjiachangjingyaosu0035',
                              pageId: '900710694944481280',
                              paramsObj: { bizId: '$data.local_vars.sceneId$' },
                              paramsObjKeyValueMap: {
                                bizId: '$data.local_vars.sceneId$',
                              },
                            },
                            actionObjId: 'showCustomModal',
                            actionObjName: 'page',
                            value: 'showCustomModal',
                            elseIfs: [],
                            line_number: 3,
                          },
                        ],
                        condition: [],
                        desc: '已选择场景',
                        elseIfs: [],
                        callback: [
                          {
                            type: 'showCustomModal',
                            dataId: 166635289207105060,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '87915',
                              pageJsonId: '615837',
                              modalname: '/piliangtianjiachangjingyaosu0035',
                              pageId: '900710694944481280',
                              paramsObj: { bizId: '$data.local_vars.sceneId$' },
                              paramsObjKeyValueMap: {
                                bizId: '$data.local_vars.sceneId$',
                              },
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166635577123311300,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '4624753',
                                  pageJsonId: '615837',
                                  customFuncName: 'reloadSceneAttrTable',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166635289861856600,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '5270585',
                          pageJsonId: '615837',
                          type: 'info',
                          value: '请先选择一个场景！',
                        },
                        line_number: 2,
                      },
                    ],
                  },
                ];
                eventDataifelse506.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataifelse506, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_70762')}
              {...injectData}
            >
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_126841',
                  uid: 'View_126841',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_126841')}
                {...injectData}
              >
                <Form
                  name={'查询表单'}
                  colSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  colon={true}
                  layout={'horizontal'}
                  labelAlign={'right'}
                  header={'标题'}
                  colSpace={0}
                  rowSpace={16}
                  formCode={'Form_581788'}
                  $$componentItem={{
                    id: 'Form_581788',
                    uid: 'Form_581788',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    padding: '0px 0px 0px 0px',
                    margin: '0px 0px 12px 0px',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_581788')}
                  {...injectData}
                >
                  <Input
                    name={'要素名称'}
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
                      id: 'Input_950437',
                      uid: 'Input_950437',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc555: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166634888008621600,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '135942',
                            pageJsonId: '615837',
                            customFuncName: 'reloadSceneAttrTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc555.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc555,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_950437')}
                    {...injectData}
                  />
                  <Input
                    name={'要素编码'}
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
                    formItemIndex={1}
                    fieldName={'attrCode'}
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
                      id: 'Input_108908',
                      uid: 'Input_108908',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc556: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166634889550185150,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '6788382',
                            pageJsonId: '615837',
                            customFuncName: 'reloadSceneAttrTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc556.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc556,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_108908')}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_948154',
                      uid: 'View_948154',
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
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_948154')}
                    {...injectData}
                  >
                    <Button
                      name={'查询'}
                      shape={null}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'primary'}
                      labelCol={8}
                      wrapperCol={16}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_3440476',
                        uid: 'Button_3440476',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 20px 0px 20px',
                      }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc557: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 166634839562384540,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '3849064',
                              pageJsonId: '615837',
                              customFuncName: 'reloadSceneAttrTable',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc557.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc557,
                          { e },
                          'callSelfFunc',
                          {
                            id: 'callSelfFunc',
                            name: 'callSelfFunc',
                            type: 'callSelfFunc',
                            platform: 'pc',
                          },
                        );
                        const forms123 = getFormByCompId('Form_216578', refs);
                        // 支持循环容器中的表单重置
                        (Array.isArray(forms123)
                          ? forms123
                          : [forms123]
                        ).forEach((form) => form?.resetFields());
                        const eventDatasetDisable119: any = [
                          {
                            type: 'setDisable',
                            dataId: 166634842388941100,
                            options: {
                              compId: 'Form_216578',
                              compLib: 'comm',
                              pageJsonId: '615837',
                              compName: 'Form',
                              id: '9471946',
                              disabled: 'true',
                            },
                            line_number: 3,
                          },
                        ];
                        eventDatasetDisable119.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatasetDisable119,
                          { e },
                          'setDisable',
                          {
                            id: 'setDisable',
                            name: 'setDisable',
                            type: 'setDisable',
                            platform: 'pc',
                          },
                        );
                        const eventDatasetDisable120: any = [
                          {
                            type: 'setDisable',
                            dataId: 166634842899225500,
                            options: {
                              compId: 'Button_3133285',
                              compLib: 'comm',
                              pageJsonId: '615837',
                              compName: 'Button',
                              id: '369655',
                              disabled: 'true',
                            },
                            line_number: 4,
                          },
                        ];
                        eventDatasetDisable120.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatasetDisable120,
                          { e },
                          'setDisable',
                          {
                            id: 'setDisable',
                            name: 'setDisable',
                            type: 'setDisable',
                            platform: 'pc',
                          },
                        );
                        const eventDatasetDisable121: any = [
                          {
                            type: 'setDisable',
                            dataId: 166634843405756700,
                            options: {
                              compId: 'Button_550582',
                              compLib: 'comm',
                              pageJsonId: '615837',
                              compName: 'Button',
                              id: '37136',
                              disabled: 'true',
                            },
                            line_number: 5,
                          },
                        ];
                        eventDatasetDisable121.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatasetDisable121,
                          { e },
                          'setDisable',
                          {
                            id: 'setDisable',
                            name: 'setDisable',
                            type: 'setDisable',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Button_3440476')
                      }
                      {...injectData}
                    />
                    <Button
                      name={'重置'}
                      shape={null}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'default'}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_555132',
                        uid: 'Button_555132',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ width: 'fit-content' }}
                      onClick={(e: any) => {
                        const forms124 = getFormByCompId('Form_581788', refs);
                        // 支持循环容器中的表单重置
                        (Array.isArray(forms124)
                          ? forms124
                          : [forms124]
                        ).forEach((form) => form?.resetFields());
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Button_555132')}
                      {...injectData}
                    />
                  </View>
                </Form>
              </View>
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1373491',
                  uid: 'View_1373491',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_1373491')}
                {...injectData}
              >
                <Table
                  name={'要素表格'}
                  isFlexColumn={false}
                  pageSize={data?.qrySceneAttrPage?.resultData?.size}
                  current={data?.qrySceneAttrPage?.resultData?.current}
                  tableTitle={'表格名称'}
                  showCustom={{
                    iconPosition: 'left',
                    type: undefined,
                    theme: undefined,
                    fontAddress: undefined,
                    isIconFont: undefined,
                    customTitle: '自定义列',
                    customStyle: 'default',
                    iconFile: undefined,
                    hasCustom: false,
                  }}
                  columns={[
                    {
                      title: '要素标识',
                      key: 'sceneAttrId',
                      dataIndex: 'sceneAttrId',
                      id: '955612',
                      className: '',
                      customRendering: undefined,
                      editContent: {
                        edittype: 'title',
                        title: {
                          code: 'function main(text, row, index) { return text;}',
                          originCode: [
                            '/**',
                            ' * 计算绑定的内容',
                            ' * @param {String} text 行数据中数据字段翻译后的内容',
                            ' * @param {Object} row 行数据对象',
                            ' * @param {Number} index 行索引',
                            ' * @returns {Boolean} 实际值',
                            ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                            ' */',
                            'function main(text, row, index) {',
                            '    return text;',
                            '}',
                          ],
                        },
                      },
                    },
                    {
                      title: '要素名称',
                      key: 'attrName',
                      dataIndex: 'attrName',
                      className: 'divider',
                      id: '031927',
                      customRendering: undefined,
                      editContent: {
                        edittype: 'title',
                        title: {
                          code: 'function main(text, row, index) { return text;}',
                          originCode: [
                            '/**',
                            ' * 计算绑定的内容',
                            ' * @param {String} text 行数据中数据字段翻译后的内容',
                            ' * @param {Object} row 行数据对象',
                            ' * @param {Number} index 行索引',
                            ' * @returns {Boolean} 实际值',
                            ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                            ' */',
                            'function main(text, row, index) {',
                            '    return text;',
                            '}',
                          ],
                        },
                      },
                    },
                    {
                      title: '要素编码',
                      key: 'attrCode',
                      dataIndex: 'attrCode',
                      className: 'divider',
                      id: '8077006',
                      customRendering: undefined,
                      editContent: {
                        edittype: 'title',
                        title: {
                          code: 'function main(text, row, index) { return text;}',
                          originCode: [
                            '/**',
                            ' * 计算绑定的内容',
                            ' * @param {String} text 行数据中数据字段翻译后的内容',
                            ' * @param {Object} row 行数据对象',
                            ' * @param {Number} index 行索引',
                            ' * @returns {Boolean} 实际值',
                            ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                            ' */',
                            'function main(text, row, index) {',
                            '    return text;',
                            '}',
                          ],
                        },
                      },
                    },
                    {
                      title: '是否矩阵要素',
                      key: 'isMatrixAttr',
                      dataIndex: 'isMatrixAttr',
                      className: 'divider',
                      id: '149515',
                      customRendering:
                        '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  let fontColor;  if (row.isMatrixAttr === "1") {    fontColor = "#0000FF";  }  return fontColor ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : text;}',
                      originCustomRendering: [
                        '    /**',
                        ' * 自定义渲染函数',
                        ' * @param {String} text 单元格显示的文字内容',
                        ' * @param {Object} row 行数据对象',
                        ' * @param {number} index 行索引',
                        ' * @returns 渲染的内容：可以是 html 模板字符串',
                        ' */',
                        'function renderFunc(text, row, index) {',
                        '      let fontColor;',
                        '',
                        '      if (row.isMatrixAttr === "1") {',
                        '        fontColor = "#0000FF";',
                        '      }',
                        '    return fontColor ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : text;',
                        '}',
                      ],
                      staticDataSource: attrDataMap['PUB_001'],
                      editContent: {
                        edittype: 'title',
                        title: {
                          code: 'function main(text, row, index) { return text;}',
                          originCode: [
                            '/**',
                            ' * 计算绑定的内容',
                            ' * @param {String} text 行数据中数据字段翻译后的内容',
                            ' * @param {Object} row 行数据对象',
                            ' * @param {Number} index 行索引',
                            ' * @returns {Boolean} 实际值',
                            ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                            ' */',
                            'function main(text, row, index) {',
                            '    return text;',
                            '}',
                          ],
                        },
                      },
                    },
                    {
                      title: '要素值类型',
                      key: 'attrValueType',
                      dataIndex: 'attrValueType',
                      className: 'divider',
                      id: '517777',
                      staticService: {
                        labelKey: 'attrValueName',
                        valueKey: 'attrValue',
                      },
                      customRendering: undefined,
                      editContent: {
                        edittype: 'title',
                        title: {
                          code: 'function main(text, row, index) { return text;}',
                          originCode: [
                            '/**',
                            ' * 计算绑定的内容',
                            ' * @param {String} text 行数据中数据字段翻译后的内容',
                            ' * @param {Object} row 行数据对象',
                            ' * @param {Number} index 行索引',
                            ' * @returns {Boolean} 实际值',
                            ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                            ' */',
                            'function main(text, row, index) {',
                            '    return text;',
                            '}',
                          ],
                        },
                      },
                    },
                    {
                      title: '要素值数据类型',
                      key: 'attrValueDataType',
                      dataIndex: 'attrValueDataType',
                      className: 'divider',
                      id: '616206',
                      staticService: {
                        labelKey: 'attrValueName',
                        valueKey: 'attrValue',
                      },
                      customRendering: undefined,
                      editContent: {
                        edittype: 'title',
                        title: {
                          code: 'function main(text, row, index) { return text;}',
                          originCode: [
                            '/**',
                            ' * 计算绑定的内容',
                            ' * @param {String} text 行数据中数据字段翻译后的内容',
                            ' * @param {Object} row 行数据对象',
                            ' * @param {Number} index 行索引',
                            ' * @returns {Boolean} 实际值',
                            ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                            ' */',
                            'function main(text, row, index) {',
                            '    return text;',
                            '}',
                          ],
                        },
                      },
                    },
                  ]}
                  page={true}
                  rowKeyType={'specified'}
                  editMode={'single'}
                  selectType={'checkbox'}
                  bordered={'segmentation'}
                  size={'middle'}
                  fixedAction={false}
                  rowSelection={undefined}
                  showHead={false}
                  showTotal={true}
                  showSizeChanger={false}
                  showQuickJumper={true}
                  pageSizeOptions={'[5,10,20]'}
                  dataSource={data?.qrySceneAttrPage?.resultData?.records}
                  rowKey={'sceneAttrId'}
                  rowActions={[
                    {
                      title: '编辑',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'edit' },
                      type: 'edit',
                      id: '4063034',
                      checked: true,
                    },
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'delete' },
                      type: 'delete',
                      id: '642554',
                      checked: true,
                    },
                  ]}
                  extend={[
                    {
                      id: '388504',
                      title: '要素值',
                      iconPos: 'left',
                      icon: {
                        type: 'folder-open',
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      },
                      rule: 'row.attrValueType !== "2000"',
                      checked: true,
                    },
                    {
                      id: '797902',
                      title: '刷新值',
                      iconPos: 'left',
                      icon: {
                        type: 'reload',
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      },
                      rule: 'row.attrValueType !== "2000"',
                      checked: true,
                    },
                  ]}
                  fieldName={'data.qrySceneAttrPage.resultData.total'}
                  total={data?.qrySceneAttrPage?.resultData?.total}
                  extendNum={4}
                  dataSourceFromDataSourceConfig={
                    'data.qrySceneAttrPage.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_22551098',
                    uid: 'Table_22551098',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onPageChange={(page: any, pageSize: any) => {
                    const eventDatasetDataSource189: any = [
                      {
                        type: 'setDataSource',
                        dataId: 166634787561694560,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '469576',
                          pageJsonId: '615837',
                          dataSourceId: 166634161598320160,
                          dataSourceName: 'local_vars',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '9175398',
                              code: 'sceneId',
                              name: '场景ID',
                              type: 'number',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '895536',
                              code: 'operType',
                              name: '操作类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '732892',
                              code: 'pageNum',
                              name: '页码',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$page$'],
                                hideAttr: true,
                                code: '',
                              },
                            },
                            {
                              attrId: '6853637',
                              code: 'sceneCode',
                              name: '场景编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource189.params =
                      [
                        {
                          title: '当前页码取值',
                          name: 'page',
                          value: '$page$',
                          attrType: 'number',
                        },
                        {
                          title: '当前页尺寸',
                          name: 'pageSize',
                          value: '$pageSize$',
                          attrType: 'number',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDataSource189,
                      { page, pageSize },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                    const eventDatacallSelfFunc558: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166634327629347400,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '3638',
                          pageJsonId: '615837',
                          customFuncName: 'reloadSceneAttrTable',
                          customFuncParams: '$page$',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc558.params =
                      [
                        {
                          title: '当前页码取值',
                          name: 'page',
                          value: '$page$',
                          attrType: 'number',
                        },
                        {
                          title: '当前页尺寸',
                          name: 'pageSize',
                          value: '$pageSize$',
                          attrType: 'number',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc558,
                      { page, pageSize },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  onRowClick={(rowId: any, row: any, index: any) => {
                    const eventDatasetCurrentFormValues26: any = [
                      {
                        type: 'setCurrentFormValues',
                        dataId: 166634610639394140,
                        options: {
                          compId: 'Form_216578',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Form',
                          id: '416939',
                          params: '$row$',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetCurrentFormValues26.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetCurrentFormValues26,
                      { rowId, row, index },
                      'setCurrentFormValues',
                      {
                        id: 'setCurrentFormValues',
                        name: 'setCurrentFormValues',
                        type: 'setCurrentFormValues',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable122: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634611150224800,
                        options: {
                          compId: 'Form_216578',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Form',
                          id: '003264',
                          disabled: 'true',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable122.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDisable122,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable123: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634611584463940,
                        options: {
                          compId: 'Button_3133285',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Button',
                          id: '46219',
                          disabled: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetDisable123.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDisable123,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable124: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634611982733950,
                        options: {
                          compId: 'Button_550582',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Button',
                          id: '6696396',
                          disabled: 'true',
                        },
                        line_number: 4,
                      },
                    ];
                    eventDatasetDisable124.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDisable124,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    ); // console 166808829348882660
                    console.log(row);
                  }}
                  onRowEdit={(rowId: any, row: any, index: any) => {
                    const eventDatasetCurrentFormValues27: any = [
                      {
                        type: 'setCurrentFormValues',
                        dataId: 166634615193033380,
                        options: {
                          compId: 'Form_216578',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Form',
                          id: '59521028',
                          params: '$row$',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetCurrentFormValues27.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetCurrentFormValues27,
                      { rowId, row, index },
                      'setCurrentFormValues',
                      {
                        id: 'setCurrentFormValues',
                        name: 'setCurrentFormValues',
                        type: 'setCurrentFormValues',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable125: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634616865174430,
                        options: {
                          compId: 'Form_216578',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Form',
                          id: '799807',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable125.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDisable125,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable126: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634617307067200,
                        options: {
                          compId: 'Button_3133285',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Button',
                          id: '539524',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetDisable126.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDisable126,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable127: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634617557108770,
                        options: {
                          compId: 'Button_550582',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Button',
                          id: '9744715',
                        },
                        line_number: 4,
                      },
                    ];
                    eventDatasetDisable127.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDisable127,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDataSource190: any = [
                      {
                        type: 'setDataSource',
                        dataId: 166634681985048420,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '973913',
                          pageJsonId: '615837',
                          dataSourceId: 166634161598320160,
                          dataSourceName: 'local_vars',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '9175398',
                              code: 'sceneId',
                              name: '场景ID',
                              type: 'number',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '895536',
                              code: 'operType',
                              name: '操作类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: { type: ['customize'], code: 'M' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 5,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource190.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDataSource190,
                      { rowId, row, index },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                  }}
                  onRowDelete={(rowId: any, row: any, index: any) => {
                    const eventDatashowModal18: any = [
                      {
                        type: 'showModal',
                        dataId: 166634622959858500,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '92363',
                          pageJsonId: '4868135',
                          type: 'confirm',
                          title: '确定要删除该要素吗？',
                          content: '该操作为物理删除，请谨慎操作！',
                          okText: '确定',
                          cancelText: '取消',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 166634622959892380,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '0470233',
                              pageJsonId: '4868135',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'delDcSceneAttrById',
                              _apiCode: 'delDcSceneAttrById',
                              _source: 'rhin',
                              _serviceId: '900682682911924224',
                              _serviceTitle:
                                '删除场景要素-tsm: delDcSceneAttrById',
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
                                  dataKey: '0470233_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'sceneAttrId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'T',
                                      defaultValue: '',
                                      _id: 'path.sceneAttrId',
                                      compType: 'Input',
                                      parents: ['path'],
                                      id: 'path.sceneAttrId',
                                      dataKey: '0470233_path.sceneAttrId',
                                      value: {
                                        type: ['context', '$rowId$'],
                                        code: '',
                                      },
                                    },
                                  ],
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '0470233_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '0470233_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '0470233_body',
                                },
                              ],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '020915',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_0470233?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166634622959881540,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166634622959890050,
                                    children: [],
                                    condition: [],
                                    desc: '失败',
                                    elseIfs: [],
                                  },
                                ],
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166634622959842780,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '8899938',
                                      pageJsonId: '4868135',
                                      type: 'success',
                                      value: '场景要素删除成功！',
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166634622959826980,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '3615085',
                                      pageJsonId: '4868135',
                                      customFuncName: 'reloadSceneAttrTable',
                                    },
                                    line_number: 5,
                                    callback1: [],
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
                    ];
                    eventDatashowModal18.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatashowModal18,
                      { rowId, row, index },
                      'showModal',
                      {
                        id: 'showModal',
                        name: 'showModal',
                        type: 'showModal',
                        platform: 'pc',
                      },
                    );
                  }}
                  onClickBtn1={(rowId: any, row: any, index: any) => {
                    const eventDatashowCustomModal209: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 166815527354989730,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '464996',
                          pageJsonId: '615837',
                          modalname: '/changjingyaosuzhiguanli',
                          pageId: '907996928354811904',
                          paramsObj: { bizId: '$rowId$' },
                          paramsObjKeyValueMap: { bizId: '$rowId$' },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal209.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDatashowCustomModal209,
                      { rowId, row, index },
                      'showCustomModal',
                      {
                        id: 'showCustomModal',
                        name: 'showCustomModal',
                        type: 'showCustomModal',
                        platform: 'pc',
                      },
                    );
                  }}
                  onClickBtn2={(rowId: any, row: any, index: any) => {
                    const eventDataapiRequest765: any = [
                      {
                        type: 'apiRequest',
                        dataId: 166816802167676100,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '5069194',
                          pageJsonId: '615837',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'refreshSceneAttrCache',
                          _apiCode: 'refreshSceneAttrCache',
                          _source: 'rhin',
                          _serviceId: '908322939023941632',
                          _serviceTitle:
                            '根据场景编码和规格属性编码清空场景要素缓存-tsm: refreshSceneAttrCache',
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
                              dataKey: '5069194_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '5069194_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '5069194_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'sceneCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.sceneCode',
                                  compType: 'Input',
                                  name: 'sceneCode',
                                  parents: ['body'],
                                  id: 'body.sceneCode',
                                  dataKey: '5069194_body.sceneCode',
                                  value: {
                                    type: ['datasource', 'local_vars', 'data'],
                                    code: 'sceneCode',
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
                                  dataKey: '5069194_body.attrCode',
                                  value: {
                                    type: ['context', '$row$'],
                                    hideAttr: false,
                                    code: 'attrCode',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '5069194_body',
                            },
                          ],
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166816836434812220,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '63751',
                              pageJsonId: '615837',
                              type: 'success',
                              value: '场景要素值缓存刷新成功！',
                            },
                            line_number: 2,
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataapiRequest765.params =
                      [
                        { title: '行id', name: 'rowId', value: '$rowId$' },
                        {
                          title: '行对象',
                          name: 'row',
                          value: '$row$',
                          attrType: 'object',
                        },
                        { title: '行索引', name: 'index', value: '$index$' },
                      ] || [];
                    CMDGenerator(
                      eventDataapiRequest765,
                      { rowId, row, index },
                      'apiRequest',
                      {
                        id: 'apiRequest',
                        name: 'apiRequest',
                        type: 'apiRequest',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Table_22551098')}
                  {...injectData}
                />
              </View>
            </Card>
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'场景要素详情'}
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
                id: 'Card_5896703',
                uid: 'Card_5896703',
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_5896703')}
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
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_216578'}
                $$componentItem={{
                  id: 'Form_216578',
                  uid: 'Form_216578',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_216578')}
                {...injectData}
              >
                <Select
                  name={'适用省份'}
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
                  formItemIndex={0}
                  fieldName={'provinceId'}
                  defaultValue={'350000'}
                  dataSource={attrDataMap['PROVINCE_CODE']}
                  $$componentItem={{
                    id: 'Select_491898',
                    uid: 'Select_491898',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_491898')}
                  {...injectData}
                />
                <Select
                  name={'适用地市'}
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
                  formItemIndex={1}
                  fieldName={'lanId'}
                  dataSource={attrDataMap['CITY_CODE']}
                  $$componentItem={{
                    id: 'Select_0336964',
                    uid: 'Select_0336964',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_0336964')}
                  {...injectData}
                />
                <Input
                  name={'要素名称'}
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
                    id: 'Input_96601',
                    uid: 'Input_96601',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={true}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_96601')}
                  {...injectData}
                />
                <Input
                  name={'要素编码'}
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
                  fieldName={'attrCode'}
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
                    id: 'Input_504732',
                    uid: 'Input_504732',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={true}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_504732')}
                  {...injectData}
                />
                <Select
                  name={'是否矩阵要素'}
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
                  formItemIndex={4}
                  fieldName={'isMatrixAttr'}
                  allowClear={false}
                  dataSource={attrDataMap['PUB_001']}
                  $$componentItem={{
                    id: 'Select_119104',
                    uid: 'Select_119104',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_119104')}
                  {...injectData}
                />
                <Select
                  name={'值来源'}
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
                  formItemIndex={5}
                  fieldName={'valueFrom'}
                  $$componentItem={{
                    id: 'Select_031271',
                    uid: 'Select_031271',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onChange={(e: any) => {
                    // console 166634730416586780
                    console.log(e);
                    const eventDataclearValue177: any = [
                      {
                        type: 'clearValue',
                        dataId: 166634743541306600,
                        options: {
                          compId: 'Input_871951',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Input',
                          id: '6658823',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDataclearValue177.params =
                      [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(eventDataclearValue177, { e }, 'clearValue', {
                      id: 'clearValue',
                      name: 'clearValue',
                      type: 'clearValue',
                      platform: 'pc',
                    });
                    const eventDataifelse508: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '2819057',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166634653866461820,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166634657372039200,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166634753511597800,
                                children: [],
                                todoOptions: ['disabled'],
                                options: {
                                  compId: 'Input_871951',
                                  compLib: 'comm',
                                  pageJsonId: '615837',
                                  compName: 'Input',
                                  id: '560342',
                                  disabled: '',
                                },
                                actionObjId: 'Input_871951',
                                actionObjName: 'Input',
                                value: 'setDisable',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 166634662777880900,
                                children: [],
                                todoOptions: ['required'],
                                options: {
                                  compId: 'Input_871951',
                                  compLib: 'comm',
                                  pageJsonId: '615837',
                                  compName: 'Input',
                                  id: '853837',
                                  required: 'true',
                                },
                                actionObjId: 'Input_871951',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                elseIfs: [],
                                line_number: 7,
                              },
                            ],
                            condition: [],
                            desc: '接口',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'setDisable',
                                dataId: 166634753511597800,
                                options: {
                                  compId: 'Input_871951',
                                  compLib: 'comm',
                                  pageJsonId: '615837',
                                  compName: 'Input',
                                  id: '560342',
                                  disabled: '',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'setRequired',
                                dataId: 166634662777880900,
                                options: {
                                  compId: 'Input_871951',
                                  compLib: 'comm',
                                  pageJsonId: '615837',
                                  compName: 'Input',
                                  id: '853837',
                                  required: 'true',
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'setDisable',
                            dataId: 166634659770981200,
                            options: {
                              compId: 'Input_871951',
                              compLib: 'comm',
                              pageJsonId: '615837',
                              compName: 'Input',
                              id: '733338',
                              disabled: 'true',
                            },
                            line_number: 4,
                          },
                          {
                            type: 'setRequired',
                            dataId: 166634662180286400,
                            options: {
                              compId: 'Input_871951',
                              compLib: 'comm',
                              pageJsonId: '615837',
                              compName: 'Input',
                              id: '45106',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ];
                    eventDataifelse508.params =
                      [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(eventDataifelse508, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_031271')}
                  {...injectData}
                />
                <Input
                  name={'接口地址'}
                  size={'default'}
                  selfSpan={24}
                  labelCol={'4'}
                  wrapperCol={20}
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
                  fieldName={'intfAddress'}
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
                    id: 'Input_871951',
                    uid: 'Input_871951',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_871951')}
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
                  formItemIndex={7}
                  fieldName={'remark'}
                  $$componentItem={{
                    id: 'TextArea_729335',
                    uid: 'TextArea_729335',
                    type: 'TextArea',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'TextArea_729335')}
                  {...injectData}
                />
                <Input
                  name={'属性标识'}
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
                  fieldName={'attrId'}
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
                    id: 'Input_563747',
                    uid: 'Input_563747',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_563747')}
                  {...injectData}
                />
                <Input
                  name={'主键标识'}
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
                  fieldName={'sceneAttrId'}
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
                    id: 'Input_661498',
                    uid: 'Input_661498',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_661498')}
                  {...injectData}
                />
              </Form>
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_345884',
                  uid: 'View_345884',
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
                  textAlign: 'center',
                  margin: '20px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_345884')}
                {...injectData}
              >
                <Button
                  name={'确定'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'primary'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_3133285',
                    uid: 'Button_3133285',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDataifelse509: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '5463747',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.local_vars.operType$',
                              operate: '==',
                              manualValue: 'M',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166634686447409340,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166634691035603700,
                            children: [],
                            condition: [],
                            desc: '添加',
                            elseIfs: [],
                          },
                        ],
                        line_number: 1,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 166634691835344030,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '920932',
                              pageJsonId: '615837',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'modDcSceneAttr',
                              _apiCode: 'modDcSceneAttr',
                              _source: 'rhin',
                              _serviceId: '900681696352903168',
                              _serviceTitle: '修改场景要素-tsm: modDcSceneAttr',
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
                                  dataKey: '920932_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '920932_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '920932_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'sceneAttrId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'body.sceneAttrId',
                                      compType: 'Input',
                                      name: 'sceneAttrId',
                                      parents: ['body'],
                                      id: 'body.sceneAttrId',
                                      dataKey: '920932_body.sceneAttrId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'sceneAttrId',
                                      },
                                    },
                                    {
                                      code: 'sceneId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'body.sceneId',
                                      compType: 'Input',
                                      name: 'sceneId',
                                      parents: ['body'],
                                      id: 'body.sceneId',
                                      dataKey: '920932_body.sceneId',
                                      value: {
                                        type: [
                                          'datasource',
                                          'local_vars',
                                          'data',
                                        ],
                                        code: 'sceneId',
                                      },
                                    },
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
                                      dataKey: '920932_body.attrId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'attrId',
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
                                      dataKey: '920932_body.attrCode',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'attrCode',
                                      },
                                    },
                                    {
                                      code: 'isMatrixAttr',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.isMatrixAttr',
                                      compType: 'Input',
                                      name: 'isMatrixAttr',
                                      parents: ['body'],
                                      id: 'body.isMatrixAttr',
                                      dataKey: '920932_body.isMatrixAttr',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'isMatrixAttr',
                                      },
                                    },
                                    {
                                      code: 'valueFrom',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.valueFrom',
                                      compType: 'Input',
                                      name: 'valueFrom',
                                      parents: ['body'],
                                      id: 'body.valueFrom',
                                      dataKey: '920932_body.valueFrom',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'valueFrom',
                                      },
                                    },
                                    {
                                      code: 'intfAddress',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.intfAddress',
                                      compType: 'Input',
                                      name: 'intfAddress',
                                      parents: ['body'],
                                      id: 'body.intfAddress',
                                      dataKey: '920932_body.intfAddress',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'intfAddress',
                                      },
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
                                      dataKey: '920932_body.provinceId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'provinceId',
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
                                      dataKey: '920932_body.lanId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'lanId',
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
                                      dataKey: '920932_body.remark',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_216578',
                                          'validateFields',
                                        ],
                                        code: 'remark',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '920932_body',
                                },
                              ],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '439295',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_920932?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166634712609559870,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166634714422346560,
                                    children: [],
                                    condition: [],
                                    desc: '失败',
                                    elseIfs: [],
                                  },
                                ],
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166634715371421100,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '94879',
                                      pageJsonId: '615837',
                                      type: 'success',
                                      value: '场景要素修改成功！',
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166634719064978560,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '05836226',
                                      pageJsonId: '615837',
                                      customFuncName: 'reloadSceneAttrTable',
                                    },
                                    line_number: 5,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'resetCurrentForm',
                                    dataId: 166634773605108900,
                                    options: {
                                      compId: 'Form_216578',
                                      compLib: 'comm',
                                      pageJsonId: '615837',
                                      compName: 'Form',
                                      id: '1978615',
                                    },
                                    line_number: 6,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166634774171988960,
                                    options: {
                                      compId: 'Form_216578',
                                      compLib: 'comm',
                                      pageJsonId: '615837',
                                      compName: 'Form',
                                      id: '1302207',
                                      disabled: 'true',
                                    },
                                    line_number: 7,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166634774686302200,
                                    options: {
                                      compId: 'Button_3133285',
                                      compLib: 'comm',
                                      pageJsonId: '615837',
                                      compName: 'Button',
                                      id: '463965',
                                      disabled: 'true',
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166634775156201860,
                                    options: {
                                      compId: 'Button_550582',
                                      compLib: 'comm',
                                      pageJsonId: '615837',
                                      compName: 'Button',
                                      id: '5976395',
                                      disabled: 'true',
                                    },
                                    line_number: 9,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDataifelse509.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataifelse509, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_3133285')}
                  {...injectData}
                />
                <Button
                  name={'取消'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'default'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_550582',
                    uid: 'Button_550582',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const forms125 = getFormByCompId('Form_216578', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms125) ? forms125 : [forms125]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatasetDisable128: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634768067426530,
                        options: {
                          compId: 'Form_216578',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Form',
                          id: '2139435',
                          disabled: 'true',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable128.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable128, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable129: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634768922644100,
                        options: {
                          compId: 'Button_3133285',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Button',
                          id: '39955255',
                          disabled: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetDisable129.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable129, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable130: any = [
                      {
                        type: 'setDisable',
                        dataId: 166634769554455680,
                        options: {
                          compId: 'Button_550582',
                          compLib: 'comm',
                          pageJsonId: '615837',
                          compName: 'Button',
                          id: '080793',
                          disabled: 'true',
                        },
                        line_number: 4,
                      },
                    ];
                    eventDatasetDisable130.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable130, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_550582')}
                  {...injectData}
                />
              </View>
            </Card>
          </View>
        </HorizontalView>
      </View>
    </div>
  );
};

export default withPageHOC(SceneAttrManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
