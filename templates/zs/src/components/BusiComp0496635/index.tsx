// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  Card,
  Table,
  Tabs,
  TabPane,
  LoopList,
  View,
  Description,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = 'pageId 未找到';
const BusiComp0496635$$BusiComp: React.FC<PageProps> = ({
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
  useEffect(() => {
    // console 169095599948170020
    console.log(
      '是否大带宽isBig：',
      state?.isBig,
      'workId:',
      state?.workId,
      'busiObjNbr:',
      state?.busiObjNbr,
    );
    const eventDataapiRequest5: any = [
      {
        type: 'apiRequest',
        dataId: 169139367359633820,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '2865864',
          pageJsonId: '8430824',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _sourceName: '查询场景规格属性值列表-tsm',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
          _requestType: 'object',
          valueType: 'object',
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
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.catalogCode',
                      dataKey: '2865864_root.body.catalogCode',
                      value: { type: ['customize'], code: 'CLS_CP_0007_0007' },
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
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.attrCode',
                      dataKey: '2865864_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'accessLocationType',
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
                  dataKey: '2865864_root.body',
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
                  dataKey: '2865864_root.header',
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
                  dataKey: '2865864_root.path',
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
                  dataKey: '2865864_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '2865864_root',
            },
          ],
          params: 'object',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169139372911531840,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '46497',
              pageJsonId: '0496635',
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest5.params = [] || [];
    CMDGenerator(eventDataapiRequest5, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetVisible: any = [
      {
        type: 'setVisible',
        dataId: 166124658173694720,
        options: {
          compId: 'Table_40091',
          compLib: 'comm',
          pageJsonId: '0496635',
          compName: 'Table',
          id: '15387',
          visible: '',
        },
        line_number: 4,
      },
    ];
    eventDatasetVisible.params = [] || [];
    CMDGenerator(eventDatasetVisible, {}, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDatareloadDataSource: any = [
      {
        type: 'reloadDataSource',
        dataId: 166124659241889470,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '597593',
          pageJsonId: '0496635',
          dataSourceId: 166098462480131780,
          dataSourceName: 'optLogList',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '106142',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '404827',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '132079',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '110707',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '314373',
                  code: 'orderNbr',
                  name: 'orderNbr',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '920349',
                  code: 'workId',
                  name: 'workId',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '$state.workId$' },
                  type: 'string',
                  value: { type: ['context', '$state.workId$'], code: '' },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '509228',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '364551',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '278951',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '1680241',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'objectArray',
              children: [
                {
                  attrId: '1372683',
                  code: 'whetherChildNodes',
                  name: 'whetherChildNodes',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '59047',
                  code: 'fileId',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '986554',
                  code: 'tacheName',
                  name: 'tacheName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '218746',
                  code: 'optStaffId',
                  name: 'optStaffId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '17275',
                  code: 'optType',
                  name: 'optType',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3606005',
                  code: 'optStaffName',
                  name: 'optStaffName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '705776',
                  code: 'optStaffTel',
                  name: 'optStaffTel',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '277205',
                  code: 'workItemId',
                  name: 'workItemId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1461646',
                  code: 'instStatus',
                  name: 'instStatus',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '27863',
                  code: 'logType',
                  name: 'logType',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '591684',
                  code: 'optDate',
                  name: 'optDate',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1251903',
                  code: 'logSource',
                  name: 'logSource',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '55225',
                  code: 'nextOptStaffId',
                  name: 'nextOptStaffId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '7270574',
                  code: 'optInfo',
                  name: 'optInfo',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3551733',
                  code: 'optResult',
                  name: 'optResult',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3717706',
                  code: 'optResultDesc',
                  name: 'optResultDesc',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '669284',
                  code: 'optOrg',
                  name: 'optOrg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '682888',
                  code: 'optLogId',
                  name: 'optLogId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2310096',
                  code: 'shardingId',
                  name: 'shardingId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '080428',
                  code: 'createTime',
                  name: 'createTime',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '201414',
                  code: 'nextOptStaffName',
                  name: 'nextOptStaffName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '719736',
                  code: 'preInstStatus',
                  name: 'preInstStatus',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '563397',
                  code: 'parentWorkId',
                  name: 'parentWorkId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '308646',
                  code: 'workId',
                  name: 'workId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '977898',
                  code: 'instNbr',
                  name: 'instNbr',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '156058',
                  code: 'arrivedDate',
                  name: 'arrivedDate',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '859786',
                  code: 'createDate',
                  name: 'createDate',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '661605',
                  code: 'optRole',
                  name: 'optRole',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '4512605',
                  code: 'createStaff',
                  name: 'createStaff',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '941476',
                  code: 'nextTacheCode',
                  name: 'nextTacheCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '725277',
                  code: 'extInfo',
                  name: 'extInfo',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '540446',
                  code: 'tacheCode',
                  name: 'tacheCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1972747',
                  code: 'finishDate',
                  name: 'finishDate',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1833043',
                  code: 'preTacheCode',
                  name: 'preTacheCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '599058',
                  code: 'updateStaff',
                  name: 'updateStaff',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '53958',
                  code: 'nextTacheName',
                  name: 'nextTacheName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '145435',
                  code: 'updateDate',
                  name: 'updateDate',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '695866',
                  code: 'subTacheFallOptLogList',
                  name: 'subTacheFallOptLogList',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '159148',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1197487',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '171753',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '679107',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '796469',
                      code: 'optLogId',
                      name: 'optLogId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '003625',
                      code: 'instNbr',
                      name: 'instNbr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '503428',
                      code: 'workId',
                      name: 'workId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3995823',
                      code: 'parentWorkId',
                      name: 'parentWorkId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '072197',
                      code: 'preInstStatus',
                      name: 'preInstStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '822418',
                      code: 'instStatus',
                      name: 'instStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9630436',
                      code: 'preTacheCode',
                      name: 'preTacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '038109',
                      code: 'tacheCode',
                      name: 'tacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9480716',
                      code: 'nextTacheCode',
                      name: 'nextTacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4397565',
                      code: 'nextOptStaffId',
                      name: 'nextOptStaffId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '835056',
                      code: 'tacheName',
                      name: 'tacheName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '219508',
                      code: 'optStaffId',
                      name: 'optStaffId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '487061',
                      code: 'optStaffName',
                      name: 'optStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8823274',
                      code: 'optType',
                      name: 'optType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '884721',
                      code: 'optDate',
                      name: 'optDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '251828',
                      code: 'optStaffTel',
                      name: 'optStaffTel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '81347864',
                      code: 'optOrg',
                      name: 'optOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '006429',
                      code: 'optResult',
                      name: 'optResult',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '04221',
                      code: 'optResultDesc',
                      name: 'optResultDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '233448',
                      code: 'optInfo',
                      name: 'optInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '397611',
                      code: 'optRole',
                      name: 'optRole',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '925566',
                      code: 'arrivedDate',
                      name: 'arrivedDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '997372',
                      code: 'finishDate',
                      name: 'finishDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '509667',
                      code: 'extInfo',
                      name: 'extInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0605196',
                      code: 'logType',
                      name: 'logType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1277919',
                      code: 'logSource',
                      name: 'logSource',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '576818',
                      code: 'shardingId',
                      name: 'shardingId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4727093',
                      code: 'createTime',
                      name: 'createTime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5711144',
                      code: 'workItemId',
                      name: 'workItemId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '305558',
                      code: 'whetherChildNodes',
                      name: 'whetherChildNodes',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '3396876',
                      code: 'subTacheFallOptLogList',
                      name: 'subTacheFallOptLogList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '453457',
                          code: 'tacheName',
                          name: 'tacheName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '158631',
                          code: 'optStaffId',
                          name: 'optStaffId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '8176403',
                          code: 'optStaffName',
                          name: 'optStaffName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '23206625',
                          code: 'optType',
                          name: 'optType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4079837',
                          code: 'optDate',
                          name: 'optDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '240039',
                          code: 'optStaffTel',
                          name: 'optStaffTel',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '234566',
                          code: 'optOrg',
                          name: 'optOrg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '269057',
                          code: 'optResult',
                          name: 'optResult',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '928739',
                          code: 'optResultDesc',
                          name: 'optResultDesc',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '106894',
                          code: 'optInfo',
                          name: 'optInfo',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4075219',
                          code: 'optRole',
                          name: 'optRole',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '401936',
                          code: 'arrivedDate',
                          name: 'arrivedDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '361031',
                          code: 'finishDate',
                          name: 'finishDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3983533',
                          code: 'extInfo',
                          name: 'extInfo',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2251286',
                          code: 'logType',
                          name: 'logType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '116245',
                          code: 'logSource',
                          name: 'logSource',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '66646715',
                          code: 'shardingId',
                          name: 'shardingId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '01411',
                          code: 'createTime',
                          name: 'createTime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '815503',
                          code: 'workItemId',
                          name: 'workItemId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '767786',
                          code: 'whetherChildNodes',
                          name: 'whetherChildNodes',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3256596',
                          code: 'subTacheFallOptLogList',
                          name: 'subTacheFallOptLogList',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '299052',
                          code: 'createDate',
                          name: 'createDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '775964',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '0045776',
                          code: 'updateDate',
                          name: 'updateDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '334984',
                          code: 'updateStaff',
                          name: 'updateStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '247593',
                          code: 'optLogId',
                          name: 'optLogId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '963432',
                          code: 'instNbr',
                          name: 'instNbr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '7080456',
                          code: 'workId',
                          name: 'workId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '703189',
                          code: 'parentWorkId',
                          name: 'parentWorkId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '445881',
                          code: 'preInstStatus',
                          name: 'preInstStatus',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '016575',
                          code: 'instStatus',
                          name: 'instStatus',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '198954',
                          code: 'preTacheCode',
                          name: 'preTacheCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '1556133',
                          code: 'tacheCode',
                          name: 'tacheCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '93812',
                          code: 'nextTacheCode',
                          name: 'nextTacheCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '0084429',
                          code: 'nextOptStaffId',
                          name: 'nextOptStaffId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                      ],
                    },
                  ],
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
    ];
    eventDatareloadDataSource.params = [] || [];
    CMDGenerator(eventDatareloadDataSource, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
      platform: 'undefined',
    });
    const eventDatasetVisible1: any = [
      {
        type: 'setVisible',
        dataId: 166124660426674080,
        options: {
          compId: 'Table_40091',
          compLib: 'comm',
          pageJsonId: '0496635',
          compName: 'Table',
          id: '861457',
          visible: 'true',
        },
        line_number: 6,
      },
    ];
    eventDatasetVisible1.params = [] || [];
    CMDGenerator(eventDatasetVisible1, {}, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDataifelse5: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '920025',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.isBig$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168837624156296160,
        elseIfs: [],
        line_number: 7,
        callback1: [
          {
            type: 'console',
            dataId: 169138736705650430,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '760446',
              pageJsonId: '0496635',
              value: ['当前是大带宽：', '$state.isBig$'],
            },
            line_number: 8,
          },
          {
            type: 'sysSetVisible',
            dataId: 168837628344326750,
            options: {
              compId: ['Table_40091'],
              compName: 'page',
              id: '338144',
              pageJsonId: '0496635',
              visible: '',
              compid: ['Table_40091'],
            },
            line_number: 9,
          },
          {
            type: 'sysSetVisible',
            dataId: 168837628404289100,
            options: {
              compId: ['Tabs_280626'],
              compName: 'page',
              id: '022564',
              pageJsonId: '0496635',
              visible: 'true',
              compid: ['Tabs_280626'],
            },
            line_number: 10,
          },
          {
            type: 'apiRequest',
            dataId: 169139442058722800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '705245',
              pageJsonId: '8430824',
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryCatalogAttrValueList',
              _apiCode: 'qryCatalogAttrValueList',
              _source: 'rhin',
              _sourceName: '查询场景规格属性值列表-tsm',
              _serviceId: '889391610000404480',
              _serviceTitle:
                '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
              _requestType: 'object',
              valueType: 'object',
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
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.catalogCode',
                          dataKey: '705245_root.body.catalogCode',
                          value: {
                            type: ['customize'],
                            code: 'CLS_CP_0007_0007',
                          },
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
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.attrCode',
                          dataKey: '705245_root.body.attrCode',
                          value: {
                            type: ['customize'],
                            code: 'accessLocationType',
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
                      dataKey: '705245_root.body',
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
                      dataKey: '705245_root.header',
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
                      dataKey: '705245_root.path',
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
                      dataKey: '705245_root.query',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '705245_root',
                },
              ],
              params: 'object',
            },
            line_number: 11,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169139446336283620,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '6322295',
                  pageJsonId: '0496635',
                  code: 'function main(data,state,success,fail){var _reply_;var resData=(_reply_=reply_705245)===null||_reply_===void 0?void 0:_reply_.resultData;var obj={};for(var i=0;i<resData.length;i++){obj[resData[i]["attrValue"]]=resData[i]["attrValueName"]}console.log("\\u63A5\\u5165\\u5730\\u7C7B\\u578B\\u7684\\u7FFB\\u8BD1 = ",obj);success(obj)};',
                  actionTitle: '翻译接入地类型',
                },
                line_number: 12,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 169139456482610720,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '780984',
                      pageJsonId: '0496635',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'queryAuditProgressList',
                      _apiCode: 'queryAuditProgressList',
                      _source: 'rhin',
                      _sourceName: '查询总部接口进度-tzp',
                      _serviceId: '994486293211287552',
                      _serviceTitle:
                        '查询总部接口进度-tzp: queryAuditProgressList',
                      valueType: 'object',
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
                              dataKey: '280237_root.header',
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
                              dataKey: '280237_root.path',
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
                              dataKey: '280237_root.query',
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
                                  _id: 'root.body.busiObjNbr',
                                  compType: 'Input',
                                  name: 'busiObjNbr',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.busiObjNbr',
                                  dataKey: '280237_root.body.busiObjNbr',
                                  value: {
                                    type: ['context', '$state.busiObjNbr$'],
                                    code: '',
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
                              dataKey: '280237_root.body',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '280237_root',
                        },
                      ],
                      params: 'object',
                    },
                    line_number: 13,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169139456482662270,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '897948',
                          pageJsonId: '0496635',
                          code: 'function main(data,state,success,fail){var _reply_;var transObj=data_6322295;var resultDate=(_reply_=reply_780984)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u7ED3\\u679C = ",resultDate);var headDeal=[];if(resultDate!=null&&resultDate!=undefined){for(var i=0;i<resultDate.length;i++){var auditProgressList=resultDate[i].auditProgressList;var instAttrList=resultDate[i].instAttrList;var headNbr=resultDate[i].headNbr;var auditResultName=resultDate[i].auditResultName;var obj={};if(instAttrList!=undefined&&instAttrList.length>0){for(var j=0;j<instAttrList.length;j++){if(instAttrList[j].attrName!=null&&instAttrList[j].attrName!=undefined&&instAttrList[j].attrName!=""){obj[instAttrList[j].attrCode]=instAttrList[j].attrName}else{obj[instAttrList[j].attrCode]=instAttrList[j].attrValue}if(instAttrList[j].attrCode=="accessLocationType"){obj["accessLocationTypeName"]=transObj[instAttrList[j].attrValue]}}}obj.headNbr=headNbr;obj.auditResultName=auditResultName;obj.controlFee="5400";headDeal.push({"auditProgressListdata":auditProgressList,"headObj":obj});console.log("headDeal = ",headDeal)}}console.log("\\u5F53\\u524DheadDeal = ",headDeal);success(headDeal)};',
                        },
                        line_number: 14,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169139456482631360,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '4561223',
                              pageJsonId: '0496635',
                              dataSourceId: 168880493158764860,
                              dataSourceName: 'headDeal',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '221382',
                                  code: 'auditProgressList',
                                  name: '属性',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '277571',
                                  code: 'headObj',
                                  name: '属性',
                                  type: 'object',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                              ],
                              newData: '$data_897948$',
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 15,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 169139456482649630,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '0012005',
                                  pageJsonId: '0496635',
                                  value: ['数据源1', '$data.headDeal$'],
                                },
                                line_number: 16,
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
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 168872085725127100,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '280237',
              pageJsonId: '0496635',
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'queryAuditProgressList',
              _apiCode: 'queryAuditProgressList',
              _source: 'rhin',
              _sourceName: '查询总部接口进度-tzp',
              _serviceId: '994486293211287552',
              _serviceTitle: '查询总部接口进度-tzp: queryAuditProgressList',
              valueType: 'object',
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
                      dataKey: '280237_root.header',
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
                      dataKey: '280237_root.path',
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
                      dataKey: '280237_root.query',
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
                          _id: 'root.body.busiObjNbr',
                          compType: 'Input',
                          name: 'busiObjNbr',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.busiObjNbr',
                          dataKey: '280237_root.body.busiObjNbr',
                          value: {
                            type: ['context', '$state.busiObjNbr$'],
                            code: '',
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
                      dataKey: '280237_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '280237_root',
                },
              ],
              params: 'object',
            },
            line_number: 17,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168880504806925730,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '5088563',
                  pageJsonId: '0496635',
                  code: 'function main(data,state,success,fail){var _reply_;var resultDate=(_reply_=reply_280237)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u7ED3\\u679C = ",resultDate);var headDeal=[];if(resultDate!=null&&resultDate!=undefined){for(var i=0;i<resultDate.length;i++){var auditProgressList=resultDate[i].auditProgressList;var instAttrList=resultDate[i].instAttrList;var headNbr=resultDate[i].headNbr;var auditResultName=resultDate[i].auditResultName;var obj={};if(instAttrList!=undefined&&instAttrList.length>0){for(var j=0;j<instAttrList.length;j++){if(instAttrList[j].attrName!=null&&instAttrList[j].attrName!=undefined&&instAttrList[j].attrName!=""){obj[instAttrList[j].attrCode]=instAttrList[j].attrName}else{obj[instAttrList[j].attrCode]=instAttrList[j].attrValue}}}obj.headNbr=headNbr;obj.auditResultName=auditResultName;obj.controlFee="5400";headDeal.push({"auditProgressListdata":auditProgressList,"headObj":obj});console.log("resultDate.length = ",resultDate.length);console.log("headDeal = ",headDeal)}}console.log("\\u5F53\\u524DheadDeal = ",headDeal);success(headDeal)};',
                },
                line_number: 18,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168880631546733500,
                    shielding: true,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '369993',
                      pageJsonId: '0496635',
                      dataSourceId: 168880493158764860,
                      dataSourceName: 'headDeal',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '221382',
                          code: 'auditProgressList',
                          name: '属性',
                          type: 'objectArray',
                          initialData: { type: 'static' },
                          showInput: false,
                        },
                        {
                          attrId: '277571',
                          code: 'headObj',
                          name: '属性',
                          type: 'object',
                          initialData: { type: 'static' },
                          showInput: false,
                        },
                      ],
                      newData: '$data_5088563$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 19,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168880767682471800,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '960088',
                          pageJsonId: '0496635',
                          value: ['数据源1', '$data.headDeal$'],
                        },
                        line_number: 20,
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
        ],
      },
    ];
    eventDataifelse5.params = [] || [];
    CMDGenerator(eventDataifelse5, {}, 'ifelse', {
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
      className="__CustomClass_0496635__"
    >
      <Card
        name={'处理过程'}
        cardIconType={'middle'}
        title={'处理过程'}
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
          id: 'Card_5124717',
          uid: 'Card_5124717',
          type: 'Card',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          padding: '20px 20px 20px 20px',
          overflowY: 'visible',
          margin: '0px 0px 0px 0px',
          'margin-bottom': '2.5px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'Card_5124717')}
        {...injectData}
      >
        <Table
          name={'表格'}
          isFlexColumn={false}
          pageSize={10}
          current={1}
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
            hasCustom: true,
          }}
          columns={[
            {
              title: '环节名称',
              key: 'tacheName',
              dataIndex: 'tacheName',
              className: '',
              id: '772851',
              lineNum: 0,
              width: 250,
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
              title: '处理人',
              key: 'optStaffName',
              dataIndex: 'optStaffName',
              className: 'divider',
              id: '009462',
              lineNum: 0,
              width: 300,
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
              title: '处理时间',
              key: 'optDate',
              dataIndex: 'optDate',
              className: 'divider',
              id: '83939',
              width: 180,
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
              title: '处理结果',
              key: 'optResult',
              dataIndex: 'optResult',
              className: 'divider',
              id: '580993',
              width: 100,
              staticDataSource: [
                { id: '85735', label: '通过', value: '1000' },
                { id: '482888', label: '不通过', value: '2000' },
                { id: '57703995', label: '转派', value: '3000' },
                { id: '9012357', label: '办结', value: '4000' },
                { id: '268758', label: '作废', value: '5000' },
                { id: '307578', label: '回撤', value: '6000' },
              ],
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
              type: 'staticCol',
              id: '1514787',
              title: '等级',
              dataIndex: 'treelevel',
              key: '1514787',
              className: 'divider',
              hiddenRule: 'true',
              width: 10,
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
              title: '处理意见',
              dataIndex: 'optResultDesc',
              key: 'optResultDesc',
              edittype: 'string',
              id: '46044',
              className: 'divider',
              width: 600,
              lineNum: 0,
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
          page={false}
          rowKeyType={'specified'}
          editMode={'single'}
          selectType={'checkbox'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={undefined}
          showHead={false}
          showTotal={false}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.optLogList?.resultData}
          rowKey={'optLogId'}
          extendProps={{}}
          rowActions={[]}
          extend={[]}
          hiddenAction={false}
          tableColorFormat={[
            {
              formStyle: 1,
              field: '',
              foreColor: 'rgba(0, 0, 0, 1)',
              backColor: 'rgba(250, 250, 250, 1)',
              conditions: [
                {
                  items: [
                    {
                      code: 'treelevel',
                      name: '等级',
                      operator: '=',
                      operatorName: '等于',
                      relation: '',
                      relationName: '',
                      value: 'title',
                    },
                  ],
                  relation: '',
                  relationName: '',
                },
              ],
            },
          ]}
          colorFormatInfo={[
            {
              formStyle: 1,
              field: '',
              foreColor: 'rgba(0, 0, 0, 1)',
              backColor: 'rgba(250, 250, 250, 1)',
              conditions: [
                {
                  relation: '',
                  items: [
                    {
                      code: 'treelevel',
                      operator: '=',
                      relation: '',
                      value: 'title',
                    },
                  ],
                },
              ],
            },
          ]}
          defaultExpandAllRows={true}
          dataSourceFromDataSourceConfig={'data.optLogList.resultData'}
          $$componentItem={{
            id: 'Table_40091',
            uid: 'Table_40091',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '0px 0px 0px 0px', flex: '' }}
          onClickBtn1={(rowId: any, row: any, index: any) => {
            // console 166114712120795520
            console.log(row?.fileId);
            const eventDatadownloadByFileId1: any = [
              {
                type: 'downloadByFileId',
                dataId: 166114717899093980,
                options: {
                  compId: 'downloadByFileId',
                  compName: 'system',
                  id: '867753',
                  pageJsonId: '0496635',
                  data: '$row.fileId$',
                },
                line_number: 2,
              },
            ];
            eventDatadownloadByFileId1.params =
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
              eventDatadownloadByFileId1,
              { rowId, row, index },
              'downloadByFileId',
              {
                id: 'downloadByFileId',
                name: 'downloadByFileId',
                type: 'downloadByFileId',
                platform: 'pc',
              },
            );
          }}
          onClickBtn2={(rowId: any, row: any, index: any) => {
            const eventDataapiRequest14: any = [
              {
                type: 'apiRequest',
                dataId: 166355511159833860,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '160128',
                  pageJsonId: '0496635',
                  sync: false,
                  actionTitle: '批量下载',
                  method: 'get',
                  url: '/app/file/batchDownload',
                  _source: 'inner',
                  _serviceId: '1002',
                  _serviceTitle: '批量下载: /app/file/batchDownload',
                  params: 'object',
                  apiRequestSetParams: [
                    {
                      code: 'fileIds',
                      nickCode: 'fileIds',
                      name: '文件ID列表',
                      attrType: 'field',
                      type: 'string',
                      _id: 'fileIds',
                      compType: 'Input',
                      parents: [],
                      id: 'fileIds',
                      dataKey: '160128_fileIds',
                      value: {
                        type: ['context', '$row$'],
                        hideAttr: false,
                        code: '$row.fileId$',
                      },
                    },
                  ],
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDataapiRequest14.params =
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
              eventDataapiRequest14,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_40091')}
          {...injectData}
        />
        <Tabs
          name={'标签页'}
          defaultActiveKey={'1'}
          type={'line'}
          animated={false}
          tabActiveKey={'1'}
          tabBarGutter={'4px'}
          tabPosition={'top'}
          size={'default'}
          $$componentItem={{
            id: 'Tabs_280626',
            uid: 'Tabs_280626',
            type: 'Tabs',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            width: '100%',
            margin: '0 0 16px 0',
            padding: '20px 20px 20px 20px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Tabs_280626')}
          {...injectData}
        >
          <TabPane
            name={'标签子面板'}
            tab={'审批平台处理记录'}
            key={'1'}
            $$componentItem={{
              id: 'TabPane_7853296',
              uid: 'TabPane_7853296',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => refs.setComponentRef(r, 'TabPane_7853296')}
            {...injectData}
          >
            <Table
              name={'表格'}
              isFlexColumn={false}
              pageSize={10}
              current={1}
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
                hasCustom: true,
              }}
              columns={[
                {
                  title: '环节名称',
                  key: 'tacheName',
                  dataIndex: 'tacheName',
                  className: '',
                  id: '772851',
                  lineNum: 0,
                  width: 250,
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
                  title: '处理人',
                  key: 'optStaffName',
                  dataIndex: 'optStaffName',
                  className: 'divider',
                  id: '009462',
                  lineNum: 0,
                  width: 300,
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
                  title: '处理时间',
                  key: 'optDate',
                  dataIndex: 'optDate',
                  className: 'divider',
                  id: '83939',
                  width: 180,
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
                  title: '处理结果',
                  key: 'optResult',
                  dataIndex: 'optResult',
                  className: 'divider',
                  id: '580993',
                  width: 100,
                  staticDataSource: [
                    { id: '85735', label: '通过', value: '1000' },
                    { id: '482888', label: '不通过', value: '2000' },
                    { id: '57703995', label: '转派', value: '3000' },
                    { id: '9012357', label: '办结', value: '4000' },
                    { id: '268758', label: '作废', value: '5000' },
                    { id: '307578', label: '回撤', value: '6000' },
                  ],
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
                  type: 'staticCol',
                  id: '1514787',
                  title: '等级',
                  dataIndex: 'treelevel',
                  key: '1514787',
                  className: 'divider',
                  hiddenRule: 'true',
                  width: 10,
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
                  title: '处理意见',
                  dataIndex: 'optResultDesc',
                  key: 'optResultDesc',
                  edittype: 'string',
                  id: '46044',
                  className: 'divider',
                  width: 600,
                  lineNum: 0,
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
              page={false}
              rowKeyType={'specified'}
              editMode={'single'}
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={undefined}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              dataSource={data?.optLogList?.resultData}
              rowKey={'optLogId'}
              extendProps={{}}
              rowActions={[]}
              extend={[]}
              hiddenAction={false}
              tableColorFormat={[
                {
                  formStyle: 1,
                  field: '',
                  foreColor: 'rgba(0, 0, 0, 1)',
                  backColor: 'rgba(250, 250, 250, 1)',
                  conditions: [
                    {
                      items: [
                        {
                          code: 'treelevel',
                          name: '等级',
                          operator: '=',
                          operatorName: '等于',
                          relation: '',
                          relationName: '',
                          value: 'title',
                        },
                      ],
                      relation: '',
                      relationName: '',
                    },
                  ],
                },
              ]}
              colorFormatInfo={[
                {
                  formStyle: 1,
                  field: '',
                  foreColor: 'rgba(0, 0, 0, 1)',
                  backColor: 'rgba(250, 250, 250, 1)',
                  conditions: [
                    {
                      relation: '',
                      items: [
                        {
                          code: 'treelevel',
                          operator: '=',
                          relation: '',
                          value: 'title',
                        },
                      ],
                    },
                  ],
                },
              ]}
              defaultExpandAllRows={true}
              dataSourceFromDataSourceConfig={'data.optLogList.resultData'}
              $$componentItem={{
                id: 'Table_631766',
                uid: 'Table_631766',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '0px 0px 0px 0px', flex: '' }}
              onClickBtn1={(rowId: any, row: any, index: any) => {
                // console 166114712120795520
                console.log(row?.fileId);
                const eventDatadownloadByFileId2: any = [
                  {
                    type: 'downloadByFileId',
                    dataId: 166114717899093980,
                    options: {
                      compId: 'downloadByFileId',
                      compName: 'system',
                      id: '867753',
                      pageJsonId: '0496635',
                      data: '$row.fileId$',
                    },
                    line_number: 2,
                  },
                ];
                eventDatadownloadByFileId2.params =
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
                  eventDatadownloadByFileId2,
                  { rowId, row, index },
                  'downloadByFileId',
                  {
                    id: 'downloadByFileId',
                    name: 'downloadByFileId',
                    type: 'downloadByFileId',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn2={(rowId: any, row: any, index: any) => {
                const eventDataapiRequest15: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166355511159833860,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '160128',
                      pageJsonId: '0496635',
                      sync: false,
                      actionTitle: '批量下载',
                      method: 'get',
                      url: '/app/file/batchDownload',
                      _source: 'inner',
                      _serviceId: '1002',
                      _serviceTitle: '批量下载: /app/file/batchDownload',
                      params: 'object',
                      apiRequestSetParams: [
                        {
                          code: 'fileIds',
                          nickCode: 'fileIds',
                          name: '文件ID列表',
                          attrType: 'field',
                          type: 'string',
                          _id: 'fileIds',
                          compType: 'Input',
                          parents: [],
                          id: 'fileIds',
                          dataKey: '160128_fileIds',
                          value: {
                            type: ['context', '$row$'],
                            hideAttr: false,
                            code: '$row.fileId$',
                          },
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDataapiRequest15.params =
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
                  eventDataapiRequest15,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_631766')}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'标签子面板'}
            tab={'总部审批进度'}
            key={'2'}
            $$componentItem={{
              id: 'TabPane_141349',
              uid: 'TabPane_141349',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => refs.setComponentRef(r, 'TabPane_141349')}
            {...injectData}
          >
            <LoopList
              name={'循环列表'}
              mode={1}
              pieceData={[]}
              defaultValue={[]}
              columnNum={1}
              span={24}
              vspace={16}
              hspace={16}
              itemKey={'rowData'}
              indexKey={'rowIndex'}
              valueKey={'headMsg'}
              gridData={data?.headDeal}
              $$componentItem={{
                id: 'LoopList_0055633',
                uid: 'LoopList_0055633',
                type: 'LoopList',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ minHeight: 40 }}
              ref={(r: any) => refs.setComponentRef(r, 'LoopList_0055633')}
              {...injectData}
              getEngineApis={() => {
                return {
                  ...injectData.getEngineApis(),
                  MemoRenderer: {
                    renderer: null,
                    MemoLoopItem: (props: any) => {
                      const item = props[props.itemKey] ?? props?.item;
                      const i = props[props.indexKey] ?? props?.i;
                      const rowData = props[props.itemKey] ?? props?.item;
                      const rowIndex = props[props.indexKey] ?? props?.i;
                      return (
                        <>
                          <View
                            name={'布局容器'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: undefined,
                            }}
                            $$componentItem={{
                              id: 'View_451129',
                              uid: 'View_451129',
                              type: 'View',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              textAlign: 'left',
                              display: 'block',
                              flexDirection: 'column',
                              padding: '0px 0px 0px 0px',
                              width: '100%',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'View_451129')
                            }
                            {...injectData}
                          >
                            <Description
                              name={'描述列表'}
                              columns={[
                                {
                                  label: '总部审批单',
                                  dataIndex: 'headNbr',
                                  key: 'column1',
                                  id: '5035809',
                                  customRendering: undefined,
                                },
                                {
                                  label: '状态',
                                  dataIndex: 'auditResultName',
                                  key: 'column2',
                                  id: '5035810',
                                  span: 16,
                                  customRendering: undefined,
                                },
                                {
                                  label: '带宽',
                                  dataIndex: 'bandwidthName',
                                  key: 'column3',
                                  id: '5035811',
                                  span: 8,
                                  customRendering: undefined,
                                },
                                {
                                  label: '资费(元/G/月)',
                                  dataIndex: 'lineUsageFee',
                                  key: 'column4',
                                  id: '5035812',
                                  customRendering: undefined,
                                },
                                {
                                  label: '管控资费(元/G/月)',
                                  dataIndex: 'controlFee',
                                  key: 'column5',
                                  id: '5035813',
                                  customRendering: undefined,
                                },
                                {
                                  label: '条数',
                                  dataIndex: 'row',
                                  key: 'column6',
                                  id: '5035814',
                                  customRendering: undefined,
                                },
                                {
                                  label: '接入地类型',
                                  dataIndex: 'accessLocationTypeName',
                                  key: 'column7',
                                  id: '5035815',
                                  customRendering: undefined,
                                },
                                {
                                  label: '业务保障等级',
                                  dataIndex: 'busiEnsureGrade',
                                  key: 'column8',
                                  id: '5035816',
                                  customRendering: undefined,
                                },
                                {
                                  label: '接入地址',
                                  dataIndex: 'accessLocation',
                                  key: 'column9',
                                  id: '5035817',
                                  customRendering: undefined,
                                },
                              ]}
                              bordered={true}
                              labelWidth={undefined}
                              colSpan={8}
                              colon={true}
                              labelAlign={'left'}
                              dataSource={item?.headObj}
                              descColumns={[
                                {
                                  label: '总部审批单',
                                  dataIndex: 'headNbr',
                                  key: 'column1',
                                  id: '5035809',
                                },
                                {
                                  label: '状态',
                                  dataIndex: 'auditResultName',
                                  key: 'column2',
                                  id: '5035810',
                                  span: 16,
                                },
                                {
                                  label: '带宽',
                                  dataIndex: 'bandwidthName',
                                  key: 'column3',
                                  id: '5035811',
                                  span: 8,
                                },
                                {
                                  label: '资费(元/G/月)',
                                  dataIndex: 'lineUsageFee',
                                  key: 'column4',
                                  id: '5035812',
                                },
                                {
                                  label: '管控资费(元/G/月)',
                                  dataIndex: 'controlFee',
                                  key: 'column5',
                                  id: '5035813',
                                },
                                {
                                  label: '条数',
                                  dataIndex: 'row',
                                  key: 'column6',
                                  id: '5035814',
                                },
                                {
                                  label: '接入地类型',
                                  dataIndex: 'accessLocationTypeName',
                                  key: 'column7',
                                  id: '5035815',
                                },
                                {
                                  label: '业务保障等级',
                                  dataIndex: 'busiEnsureGrade',
                                  key: 'column8',
                                  id: '5035816',
                                },
                                {
                                  label: '接入地址',
                                  dataIndex: 'accessLocation',
                                  key: 'column9',
                                  id: '5035817',
                                },
                              ]}
                              labelSize={'120px'}
                              $$componentItem={{
                                id: 'Description_3958499',
                                uid: 'Description_3958499',
                                type: 'Description',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              ref={(r: any) =>
                                refs.setComponentRef(r, 'Description_3958499')
                              }
                              {...injectData}
                            />
                          </View>
                          <Table
                            name={'表格'}
                            isFlexColumn={false}
                            extendNum={3}
                            adjustModel={'auto'}
                            pageSize={10}
                            current={1}
                            tableTitle={'表格名称'}
                            headBtnNum={3}
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
                                title: '职位',
                                dataIndex: 'optOrg',
                                key: 'column1',
                                className: '',
                                id: '816118',
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
                                title: '处理人',
                                dataIndex: 'optStaffName',
                                key: 'column2',
                                className: 'divider',
                                id: '689287',
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
                                title: '手机号码',
                                dataIndex: 'optStaffTel',
                                key: 'column3',
                                className: 'divider',
                                id: '255557',
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
                                title: '处理时间',
                                dataIndex: 'optDate',
                                key: 'column4',
                                className: 'divider',
                                id: '099227',
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
                                title: '处理结果',
                                dataIndex: 'optResultName',
                                key: 'column5',
                                className: 'divider',
                                id: '511525',
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
                                type: 'staticCol',
                                id: '922889',
                                title: '处理意见',
                                dataIndex: 'optResultDesc',
                                key: '922889',
                                className: 'divider',
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
                            page={false}
                            rowKeyType={'specified'}
                            editMode={'single'}
                            selectType={'checkbox'}
                            bordered={'segmentation'}
                            size={'middle'}
                            fixedAction={false}
                            rowSelection={undefined}
                            showHead={false}
                            showTotal={false}
                            showSizeChanger={false}
                            showQuickJumper={false}
                            pageSizeOptions={'[5,10,20]'}
                            customNum={3}
                            rowKey={'rowId'}
                            dataSource={item?.auditProgressListdata}
                            $$componentItem={{
                              id: 'Table_0972668',
                              uid: 'Table_0972668',
                              type: 'Table',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{ margin: '10px 0px 0px 0px' }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'Table_0972668')
                            }
                            {...injectData}
                          />
                        </>
                      );
                    },
                  },
                };
              }}
            />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default withPageHOC(BusiComp0496635$$BusiComp, {
  pageId,
  hasLogin: true,
  defaultState: { workId: '', isBig: '', busiObjNbr: '' },
});
