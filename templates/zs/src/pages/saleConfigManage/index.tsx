// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '912611949612380160';
const SaleConfigManage$$Page: React.FC<PageProps> = ({
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
  const query = (options_84995934: any) => {
    const eventDatareloadDataSource43: any = [
      {
        type: 'reloadDataSource',
        dataId: 166925864578479460,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '868717',
          pageJsonId: '541575',
          dataSourceId: 166925459865808000,
          dataSourceName: 'saleConfigList',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '133593',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '6786983',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '7376077',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '110724',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '6752181',
                  code: 'saleDesc',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleDesc',
                  },
                },
                {
                  attrId: '294087',
                  code: 'saleCode',
                  name: 'saleCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleCode',
                  },
                },
                {
                  attrId: '026035',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '10' },
                },
                {
                  attrId: '229813',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: {
                    type: ['context', '$options_84995934$'],
                    code: 'pageNum',
                  },
                },
                {
                  attrId: '7771103',
                  code: 'saleName',
                  name: 'saleName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleName',
                  },
                },
                {
                  attrId: '610559',
                  code: 'lanId',
                  name: 'lanId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'lanId',
                  },
                },
                {
                  attrId: '855995',
                  code: 'saleStatus',
                  name: 'saleStatus',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleStatus',
                  },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '363393',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '1189698',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '0879307',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '699439',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '4992505',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '7533176',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '19636276',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '4267135',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '940138',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '732748',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '063129',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '718951',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '651332',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5578116',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '896333',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '646067',
                      code: 'saleCfgId',
                      name: 'saleCfgId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '699076',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '349686',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '297238',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '001825',
                      code: 'saleDesc',
                      name: 'saleDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '680603',
                      code: 'saleCode',
                      name: 'saleCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '467772538',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '236534',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '112426',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '225749',
                      code: 'saleStatus',
                      name: 'saleStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6997805',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '096018',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '458328',
                      code: 'saleName',
                      name: 'saleName',
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
    eventDatareloadDataSource43.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource43,
      { options_84995934 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const cleanQuery = (options_2744055: any) => {
    const eventDataclearTableSelected1: any = [
      {
        type: 'clearTableSelected',
        dataId: 166927647236891200,
        options: {
          compId: 'Table_37209506_915744',
          compLib: 'comm',
          pageJsonId: '541575',
          compName: 'Table',
          id: '859121',
        },
        line_number: 1,
      },
    ];
    eventDataclearTableSelected1.params =
      [
        {
          title: '事件入参',
          name: 'options_2744055',
          value: '$options_2744055$',
        },
      ] || [];
    CMDGenerator(
      eventDataclearTableSelected1,
      { options_2744055 },
      'clearTableSelected',
      {
        id: 'clearTableSelected',
        name: 'clearTableSelected',
        type: 'clearTableSelected',
        platform: 'undefined',
      },
    );
    const eventDatacallSelfFunc7: any = [
      {
        type: 'callSelfFunc',
        dataId: 166927649782531840,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '833099',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: {
            pageNum: '$options_2744055.pageNum$',
            pageSize: '$options_2744055.pageSize$',
          },
          paramsObjKeyValueMap: {
            pageNum: '$options_2744055.pageNum$',
            pageSize: '$options_2744055.pageSize$',
          },
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc7.params =
      [
        {
          title: '事件入参',
          name: 'options_2744055',
          value: '$options_2744055$',
        },
      ] || [];
    CMDGenerator(eventDatacallSelfFunc7, { options_2744055 }, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    query,
    cleanQuery,
  }));

  useEffect(() => {
    const eventDataapiRequest540: any = [
      {
        type: 'apiRequest',
        dataId: 166096252894620860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '073905',
          pageJsonId: '541575',
          sync: false,
          actionTitle: '加载归属地市下拉框',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'SYS_qryRegionListByParentId',
          _apiCode: 'qryRegionListByParentId',
          _source: 'rhin',
          _serviceId: '878100790201982976',
          _serviceTitle: '根据父区域ID查询所有子区域: qryRegionListByParentId',
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
              dataKey: '073905_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '073905_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '073905_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentRegionId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.parentRegionId',
                  compType: 'Input',
                  name: 'parentRegionId',
                  parents: ['body'],
                  id: 'body.parentRegionId',
                  dataKey: '073905_body.parentRegionId',
                  value: { type: ['customize'], code: '350000' },
                },
                {
                  code: 'includeParent',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  _id: 'body.includeParent',
                  compType: 'Input',
                  name: 'includeParent',
                  parents: ['body'],
                  id: 'body.includeParent',
                  dataKey: '073905_body.includeParent',
                  value: { type: ['customize'], code: 'true' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '073905_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166096268222510430,
            options: {
              compId: 'Input_836023_885786',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Select',
              id: '593812',
              data: '$reply_073905?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest540.params = [] || [];
    CMDGenerator(eventDataapiRequest540, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc44: any = [
      {
        type: 'callSelfFunc',
        dataId: 166400366662758240,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '226361',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: {
            pageNum: '1',
            isDraft: '$urlParam.isDraft$',
            pageSize: '10',
          },
          paramsObjKeyValueMap: {
            pageNum: '1',
            isDraft: '$urlParam.isDraft$',
            pageSize: '10',
          },
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc44.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc44, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataapiRequest541: any = [
      {
        type: 'apiRequest',
        dataId: 166625713069014750,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5870684',
          pageJsonId: '541575',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectAlltreeNodeCode',
          _apiCode: 'selectAlltreeNodeCode',
          _source: 'rhin',
          _serviceId: '874896712636026880',
          _serviceTitle: '获取树的所有节点-hdb: selectAlltreeNodeCode',
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
              dataKey: '5870684_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '5870684_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '5870684_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'nodeKey',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.nodeKey',
                  compType: 'Input',
                  name: 'nodeKey',
                  parents: ['body'],
                  id: 'body.nodeKey',
                  dataKey: '5870684_body.nodeKey',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '5870684_body',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166625721654236400,
            options: {
              compId: 'TreeSelect_07743',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '99856',
              data: '$reply_5870684?.resultData$',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest541.params = [] || [];
    CMDGenerator(eventDataapiRequest541, {}, 'apiRequest', {
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
      className="__CustomClass_541575__"
    >
      <View
        className="View_View_541575_1_991005"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_541575_1_991005',
          uid: 'View_541575_1_991005',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_541575_1_991005')}
        {...injectData}
      >
        <View
          className="View_View_065343_495453"
          name={'查询类型'}
          fieldName={'data.global_variable.queryType'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_065343_495453',
            uid: 'View_065343_495453',
            type: 'View',
            ...componentItem,
          }}
          disabled={
            `${
              !!IF(
                '$data?.global_variable?.queryType$' == 'MyDraft',
                false,
                true,
              ) === false
                ? 2
                : 1
            }` === '3'
          }
          visible={
            `${
              !!IF(
                '$data?.global_variable?.queryType$' == 'MyDraft',
                false,
                true,
              ) === false
                ? 2
                : 1
            }` !== '2'
          }
          readOnly={
            `${
              !!IF(
                '$data?.global_variable?.queryType$' == 'MyDraft',
                false,
                true,
              ) === false
                ? 2
                : 1
            }` === '4'
          }
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            margin: '12px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_065343_495453')}
          {...injectData}
        >
          <Card
            name={'卡片'}
            cardIconType={'middle'}
            title={'营销案范围管理'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            extend={[
              {
                id: '187449',
                title: '新增',
                iconPos: 'left',
                icon: '',
                btnType: 'primary',
              },
              {
                id: '60836',
                title: '批量失效',
                iconPos: 'left',
                btnType: 'primary',
                icon: '',
              },
              { id: '123294', title: '模板下载', iconPos: 'left' },
              { id: '606372', title: 'Excel导入', iconPos: 'left' },
            ]}
            extendNum={4}
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
              id: 'Card_012576_955401',
              uid: 'Card_012576_955401',
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
            }}
            onClickBtn1={(e: any) => {
              const eventDatashowCustomModal254: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166925527980062600,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '091137',
                    pageJsonId: '541575',
                    modalname: '/bianjiyingxiaoanfanwei4145',
                    pageId: '912619917963702272',
                    modalPath: '/bianjiyingxiaoanfanwei4145',
                    paramsObj: { pageNum: '1' },
                    paramsObjKeyValueMap: { pageNum: '1' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal254.params =
                [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal254,
                { e },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn3={(e: any) => {
              const eventDatashowMessage5: any = [
                {
                  type: 'showMessage',
                  dataId: 166925529815231100,
                  options: {
                    compId: 'showMessage',
                    compName: 'system',
                    id: '0726343',
                    pageJsonId: '541575',
                    type: 'info',
                    value: '功能暂未开发',
                  },
                  line_number: 1,
                },
              ];
              eventDatashowMessage5.params =
                [{ title: '按钮3点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatashowMessage5, { e }, 'showMessage', {
                id: 'showMessage',
                name: 'showMessage',
                type: 'showMessage',
                platform: 'pc',
              });
              const eventDatadownloadByFileId101: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166963868737583330,
                  shielding: true,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '261345',
                    pageJsonId: '541575',
                    data: '10035',
                  },
                  line_number: 2,
                },
              ];
              eventDatadownloadByFileId101.params =
                [{ title: '按钮3点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatadownloadByFileId101,
                { e },
                'downloadByFileId',
                {
                  id: 'downloadByFileId',
                  name: 'downloadByFileId',
                  type: 'downloadByFileId',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn4={(e: any) => {
              const eventDatashowMessage6: any = [
                {
                  type: 'showMessage',
                  dataId: 166925532437698100,
                  options: {
                    compId: 'showMessage',
                    compName: 'system',
                    id: '847687',
                    pageJsonId: '541575',
                    type: 'info',
                    value: '功能暂未开发',
                  },
                  line_number: 1,
                },
              ];
              eventDatashowMessage6.params =
                [{ title: '按钮4点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatashowMessage6, { e }, 'showMessage', {
                id: 'showMessage',
                name: 'showMessage',
                type: 'showMessage',
                platform: 'pc',
              });
              const eventDatashowCustomModal255: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166964219797630880,
                  shielding: true,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '2066484',
                    pageJsonId: '541575',
                    modalname: '/yingxiaoanupload',
                    pageId: '914506771948519424',
                  },
                  line_number: 2,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal255.params =
                [{ title: '按钮4点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal255,
                { e },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn2={(e: any) => {
              const eventDatagetTableSelectedKey78: any = [
                {
                  type: 'getTableSelectedKey',
                  dataId: 166927326348340260,
                  options: {
                    compId: 'Table_37209506_915744',
                    compLib: 'comm',
                    pageJsonId: '541575',
                    compName: 'Table',
                    id: '609536',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '4230088',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$selectedRowKeys_609536.length$',
                            operate: '==',
                            manualValue: '0',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166927326618854050,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166927333773432260,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166927334538818140,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166927334538876060,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166927335613247200,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 166927335613248400,
                                          children: [
                                            {
                                              dataName: 'condition',
                                              dataId: 166927766257369660,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 166927776270167520,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 166927776270140060,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                      elseIfs: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 166927776270131170,
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
                                                    id: '920375',
                                                    pageJsonId: '541575',
                                                    customFuncName:
                                                      'cleanQuery',
                                                    customFuncParams: 'object',
                                                    paramsObj: { pageNum: '1' },
                                                    paramsObjKeyValueMap: {
                                                      pageNum: '1',
                                                    },
                                                  },
                                                  actionObjId: 'callSelfFunc',
                                                  actionObjName: 'system',
                                                  value: 'callSelfFunc',
                                                  elseIfs: [],
                                                  line_number: 7,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 166927777643725060,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '311829',
                                                    pageJsonId: '541575',
                                                    type: 'success',
                                                    value: '批量失效成功',
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  elseIfs: [],
                                                  line_number: 8,
                                                },
                                              ],
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 166927777958122750,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166927778208441020,
                                                      children: [],
                                                      todoOptions: [
                                                        'msgType',
                                                        'value',
                                                      ],
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '504011',
                                                        pageJsonId: '541575',
                                                        type: 'error',
                                                        value:
                                                          '$reply_549548.resultMsg$',
                                                      },
                                                      actionObjId:
                                                        'showMessage',
                                                      actionObjName: 'system',
                                                      value: 'showMessage',
                                                      elseIfs: [],
                                                      line_number: 9,
                                                    },
                                                  ],
                                                  condition: [],
                                                  elseIfs: [],
                                                  callback: [
                                                    {
                                                      type: 'showMessage',
                                                      dataId: 166927778208441020,
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '504011',
                                                        pageJsonId: '541575',
                                                        type: 'error',
                                                        value:
                                                          '$reply_549548.resultMsg$',
                                                      },
                                                      line_number: 9,
                                                    },
                                                  ],
                                                },
                                              ],
                                              condition: [
                                                {
                                                  condId: '7922395',
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$reply_549548.resultCode$',
                                                    operate: '==',
                                                    manualValue: '0',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              line_number: 6,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                          elseIfs: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 166927335613268700,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
                                          elseIfs: [],
                                        },
                                      ],
                                      todoOptions: [
                                        'actionTitle',
                                        'sync',
                                        'url',
                                        'params',
                                      ],
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '549548',
                                        pageJsonId: '541575',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'batchModSaleStatus',
                                        _apiCode: 'batchModSaleStatus',
                                        _source: 'rhin',
                                        _serviceId: '912650032745111552',
                                        _serviceTitle:
                                          '批量营销案生失效修改-tsm: batchModSaleStatus',
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
                                            dataKey: '549548_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '549548_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '549548_query',
                                          },
                                          {
                                            code: 'body',
                                            name: '请求体',
                                            attrType: 'object',
                                            children: [
                                              {
                                                code: 'saleStatus',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.saleStatus',
                                                compType: 'Input',
                                                name: 'saleStatus',
                                                parents: ['body'],
                                                id: 'body.saleStatus',
                                                dataKey:
                                                  '549548_body.saleStatus',
                                                value: {
                                                  type: ['customize'],
                                                  code: '1100',
                                                },
                                              },
                                              {
                                                code: 'saleCfgIds',
                                                attrType: 'fieldArray',
                                                mustFlag: 'F',
                                                children: [
                                                  {
                                                    code: 'listItem',
                                                    name: '列表元素',
                                                    attrType: 'field',
                                                    type: 'object',
                                                    _id: 'body.saleCfgIds.listItem',
                                                    compType: 'Input',
                                                    parents: [
                                                      'body',
                                                      'saleCfgIds',
                                                    ],
                                                    id: 'body.saleCfgIds.listItem',
                                                    dataKey:
                                                      '549548_body.saleCfgIds.listItem',
                                                  },
                                                ],
                                                _id: 'body.saleCfgIds',
                                                compType: 'Input',
                                                name: 'saleCfgIds',
                                                parents: ['body'],
                                                id: 'body.saleCfgIds',
                                                dataKey:
                                                  '549548_body.saleCfgIds',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$selectedRowKeys_609536$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                            ],
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '549548_body',
                                          },
                                        ],
                                      },
                                      actionObjId: 'apiRequest',
                                      actionObjName: 'system',
                                      value: 'apiRequest',
                                      elseIfs: [],
                                      line_number: 5,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166927334538817020,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'modalType',
                                'title',
                                'content',
                                'okText',
                                'cancelText',
                              ],
                              options: {
                                compId: 'showModal',
                                compName: 'page',
                                id: '30806',
                                pageJsonId: '541575',
                                type: 'confirm',
                                title: '是否将选中行失效',
                                okText: '确认',
                                cancelText: '取消',
                              },
                              actionObjId: 'showModal',
                              actionObjName: 'page',
                              value: 'showModal',
                              elseIfs: [],
                              line_number: 4,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'showModal',
                              dataId: 166927334538818140,
                              options: {
                                compId: 'showModal',
                                compName: 'page',
                                id: '30806',
                                pageJsonId: '541575',
                                type: 'confirm',
                                title: '是否将选中行失效',
                                okText: '确认',
                                cancelText: '取消',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 166927335613247200,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '549548',
                                    pageJsonId: '541575',
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'batchModSaleStatus',
                                    _apiCode: 'batchModSaleStatus',
                                    _source: 'rhin',
                                    _serviceId: '912650032745111552',
                                    _serviceTitle:
                                      '批量营销案生失效修改-tsm: batchModSaleStatus',
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
                                        dataKey: '549548_header',
                                      },
                                      {
                                        code: 'path',
                                        name: '请求路径参数',
                                        attrType: 'object',
                                        _id: 'path',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'path',
                                        dataKey: '549548_path',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        _id: 'query',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'query',
                                        dataKey: '549548_query',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'saleStatus',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.saleStatus',
                                            compType: 'Input',
                                            name: 'saleStatus',
                                            parents: ['body'],
                                            id: 'body.saleStatus',
                                            dataKey: '549548_body.saleStatus',
                                            value: {
                                              type: ['customize'],
                                              code: '1100',
                                            },
                                          },
                                          {
                                            code: 'saleCfgIds',
                                            attrType: 'fieldArray',
                                            mustFlag: 'F',
                                            children: [
                                              {
                                                code: 'listItem',
                                                name: '列表元素',
                                                attrType: 'field',
                                                type: 'object',
                                                _id: 'body.saleCfgIds.listItem',
                                                compType: 'Input',
                                                parents: ['body', 'saleCfgIds'],
                                                id: 'body.saleCfgIds.listItem',
                                                dataKey:
                                                  '549548_body.saleCfgIds.listItem',
                                              },
                                            ],
                                            _id: 'body.saleCfgIds',
                                            compType: 'Input',
                                            name: 'saleCfgIds',
                                            parents: ['body'],
                                            id: 'body.saleCfgIds',
                                            dataKey: '549548_body.saleCfgIds',
                                            value: {
                                              type: [
                                                'context',
                                                '$selectedRowKeys_609536$',
                                              ],
                                              code: '',
                                            },
                                          },
                                        ],
                                        _id: 'body',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'body',
                                        dataKey: '549548_body',
                                      },
                                    ],
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '7922395',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$reply_549548.resultCode$',
                                            operate: '==',
                                            manualValue: '0',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 166927766257369660,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 166927777958122750,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 166927778208441020,
                                              children: [],
                                              todoOptions: ['msgType', 'value'],
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '504011',
                                                pageJsonId: '541575',
                                                type: 'error',
                                                value:
                                                  '$reply_549548.resultMsg$',
                                              },
                                              actionObjId: 'showMessage',
                                              actionObjName: 'system',
                                              value: 'showMessage',
                                              elseIfs: [],
                                              line_number: 9,
                                            },
                                          ],
                                          condition: [],
                                          elseIfs: [],
                                          callback: [
                                            {
                                              type: 'showMessage',
                                              dataId: 166927778208441020,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '504011',
                                                pageJsonId: '541575',
                                                type: 'error',
                                                value:
                                                  '$reply_549548.resultMsg$',
                                              },
                                              line_number: 9,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 166927776270167520,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '920375',
                                            pageJsonId: '541575',
                                            customFuncName: 'cleanQuery',
                                            customFuncParams: 'object',
                                            paramsObj: { pageNum: '1' },
                                            paramsObjKeyValueMap: {
                                              pageNum: '1',
                                            },
                                          },
                                          line_number: 7,
                                          callback1: [],
                                          callback2: [],
                                        },
                                        {
                                          type: 'showMessage',
                                          dataId: 166927777643725060,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '311829',
                                            pageJsonId: '541575',
                                            type: 'success',
                                            value: '批量失效成功',
                                          },
                                          line_number: 8,
                                        },
                                      ],
                                    },
                                  ],
                                  callback2: [],
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
                          type: 'showMessage',
                          dataId: 166927330450784420,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '906629',
                            pageJsonId: '541575',
                            type: 'warn',
                            value: '请选择表格数据后，再进行批量失效',
                          },
                          line_number: 3,
                        },
                      ],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelectedKey78.params =
                [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatagetTableSelectedKey78,
                { e },
                'getTableSelectedKey',
                {
                  id: 'getTableSelectedKey',
                  name: 'getTableSelectedKey',
                  type: 'getTableSelectedKey',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_012576_955401')}
            {...injectData}
          >
            <Form
              name={'营销案查询条件表单'}
              colSpan={8}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_126816'}
              formColumns={[
                {
                  id: 'Input_8789281_676623',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '营销案编码',
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
                    formItemIndex: 0,
                    fieldName: 'saleCode',
                    allowClear: true,
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
                  setEvents: [
                    {
                      dataName: 'event',
                      dataId: 166372531217197630,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 166372531611285300,
                          children: [
                            {
                              dataName: 'callback',
                              dataId: 166372531611290050,
                              children: [],
                              value: 'callback1',
                              params: [],
                            },
                            {
                              dataName: 'callback',
                              dataId: 166372531611272500,
                              children: [],
                              value: 'callback2',
                              params: [],
                            },
                          ],
                          todoOptions: ['customFuncName', 'customFuncParams'],
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '703487',
                            pageJsonId: '541575',
                            customFuncName: 'query',
                            customFuncParams: 'object',
                            paramsObj: { pageNum: '1' },
                            paramsObjKeyValueMap: { pageNum: '1' },
                          },
                          actionObjId: 'callSelfFunc',
                          actionObjName: 'system',
                          value: 'callSelfFunc',
                        },
                      ],
                      value: 'onPressEnter',
                      params: [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: e?.target?.value,
                        },
                      ],
                    },
                  ],
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Select_250177',
                  label: '下拉框',
                  compName: 'Select',
                  type: 'Select',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '地市',
                    basicStatus: 1,
                    size: 'default',
                    selfSpan: '',
                    labelCol: 8,
                    wrapperCol: 16,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipPlacement: 'top',
                    required: false,
                    filter: 'none',
                    classification: 'default',
                    attr: {},
                    placeholder: '请选择',
                    formItemIndex: 1,
                    fieldName: 'lanId',
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'Select',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  setEvents: [],
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Select_349027',
                  label: '下拉单选',
                  compName: 'Select',
                  type: 'Select',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '状态',
                    basicStatus: 1,
                    size: 'default',
                    selfSpan: '',
                    labelCol: 8,
                    wrapperCol: 16,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipPlacement: 'top',
                    required: false,
                    filter: 'none',
                    classification: 'default',
                    attr: {},
                    placeholder: '请选择',
                    formItemIndex: 2,
                    fieldName: 'saleStatus',
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'Select',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  setEvents: [],
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'View_445165_85808',
                  label: '普通容器',
                  compName: 'View',
                  type: 'View',
                  compType: 0,
                  compLib: 'custom',
                  props: { name: '布局容器', visible: true, formItemIndex: 5 },
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 'px px px px',
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    textAlign: 'right',
                    fontSize: '',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  },
                  isContainer: true,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'View',
                  description: '',
                  image: '',
                  groupsName: '布局',
                  setEvents: [],
                  isLabelDropBoxChild: false,
                  components: [
                    {
                      id: 'Button_616697_167142',
                      label: '按钮',
                      compName: 'Button',
                      type: 'Button',
                      compType: 1,
                      compLib: 'comm',
                      props: {
                        name: '查询',
                        shape: null,
                        visible: true,
                        classification: 'default',
                        autoProcessFlow: false,
                        flowProcessResult: 'common',
                        iconPosition: 'left',
                        ghost: false,
                        block: false,
                        size: 'default',
                        disabled: false,
                        type: 'primary',
                      },
                      style: { width: 'fit-content' },
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Button',
                      description: '',
                      image: '',
                      groupsName: '通用',
                      isInlineBlock: true,
                      setEvents: [
                        {
                          dataName: 'event',
                          dataId: 166096591596917440,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166372534775213060,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166372534775273800,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166372534775216100,
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
                                id: '3379907',
                                pageJsonId: '541575',
                                customFuncName: 'query',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                            },
                          ],
                          value: 'onClick',
                          params: [{ title: '事件对象', value: e, name: 'e' }],
                          elseIfs: [],
                        },
                      ],
                      isLabelDropBoxChild: false,
                      components: [],
                    },
                    {
                      id: 'Button_505213_977442',
                      label: '按钮',
                      compName: 'Button',
                      type: 'Button',
                      compType: 1,
                      compLib: 'comm',
                      props: {
                        name: '重置',
                        shape: null,
                        visible: true,
                        classification: 'default',
                        autoProcessFlow: false,
                        flowProcessResult: 'common',
                        iconPosition: 'left',
                        ghost: false,
                        block: false,
                        size: 'default',
                        disabled: false,
                        type: 'default',
                      },
                      style: {
                        width: 'fit-content',
                        margin: '0px 8px 0px 8px',
                      },
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Button',
                      description: '',
                      image: '',
                      groupsName: '通用',
                      isInlineBlock: true,
                      setEvents: [
                        {
                          dataName: 'event',
                          dataId: 166372522389901920,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166919181574355650,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Form_126816_084922',
                                compLib: 'comm',
                                pageJsonId: '541575',
                                compName: 'Form',
                                id: '740968',
                              },
                              actionObjId: 'Form_126816_084922',
                              actionObjName: 'Form',
                              value: 'resetCurrentForm',
                              compLib: 'comm',
                            },
                            {
                              dataName: 'action',
                              dataId: 166919182472212930,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166919182472239550,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166919182472229000,
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
                                id: '1279756',
                                pageJsonId: '541575',
                                customFuncName: 'query',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                            },
                          ],
                          value: 'onClick',
                          params: [{ title: '事件对象', value: e, name: 'e' }],
                          elseIfs: [],
                        },
                      ],
                      isLabelDropBoxChild: false,
                      components: [],
                    },
                  ],
                },
              ]}
              $$componentItem={{
                id: 'Form_126816_084922',
                uid: 'Form_126816_084922',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_126816_084922')}
              {...injectData}
            >
              <Input
                name={'营销案编码'}
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
                formItemIndex={0}
                fieldName={'saleCode'}
                allowClear={true}
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
                  id: 'Input_8789281_676623',
                  uid: 'Input_8789281_676623',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc696: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166372531611285300,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '703487',
                        pageJsonId: '541575',
                        customFuncName: 'query',
                        customFuncParams: 'object',
                        paramsObj: { pageNum: '1' },
                        paramsObjKeyValueMap: { pageNum: '1' },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc696.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc696,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_8789281_676623')
                }
                {...injectData}
              />
              <Input
                name={'营销案名称'}
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
                fieldName={'saleName'}
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
                  id: 'Input_231425',
                  uid: 'Input_231425',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_231425')}
                {...injectData}
              />
              <View
                className="View_View_445165_85808"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_445165_85808',
                  uid: 'View_445165_85808',
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
                  padding: 'px px px px',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_445165_85808')}
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
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_616697_167142',
                    uid: 'Button_616697_167142',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc697: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166927687663021600,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '512364',
                          pageJsonId: '541575',
                          customFuncName: 'cleanQuery',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '1' },
                          paramsObjKeyValueMap: { pageNum: '1' },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc697.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc697,
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Button_616697_167142')
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
                    id: 'Button_505213_977442',
                    uid: 'Button_505213_977442',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                  onClick={(e: any) => {
                    const forms165 = getFormByCompId(
                      'Form_126816_084922',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms165) ? forms165 : [forms165]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacallSelfFunc698: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166927690450979840,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '976445',
                          pageJsonId: '541575',
                          customFuncName: 'cleanQuery',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '1' },
                          paramsObjKeyValueMap: { pageNum: '1' },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc698.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc698,
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Button_505213_977442')
                  }
                  {...injectData}
                />
              </View>
              <Select
                name={'地市'}
                size={'default'}
                selfSpan={8}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                formItemIndex={3}
                fieldName={'lanId'}
                dataSource={attrDataMap['CITY_CODE']}
                $$componentItem={{
                  id: 'Select_250177',
                  uid: 'Select_250177',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_250177')}
                {...injectData}
              />
              <Select
                name={'状态'}
                size={'default'}
                selfSpan={8}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                formItemIndex={4}
                fieldName={'saleStatus'}
                dataSource={[
                  { id: '9091504', label: '生效', value: '1000' },
                  { id: '1114829', label: '失效', value: '1100' },
                ]}
                $$componentItem={{
                  id: 'Select_349027',
                  uid: 'Select_349027',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_349027')}
                {...injectData}
              />
            </Form>
            <Table
              name={'营销案列表'}
              isFlexColumn={false}
              pageSize={data?.saleConfigList?.resultData?.size}
              current={data?.saleConfigList?.resultData?.current}
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
                  title: '营销案编码',
                  key: 'createStaffName',
                  dataIndex: 'saleCode',
                  className: '',
                  id: '051054',
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
                  title: '营销案名称',
                  key: 'updateDate',
                  dataIndex: 'saleName',
                  className: 'divider',
                  id: '036987',
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
                  title: '地市',
                  key: 'saleCode',
                  dataIndex: 'lanId',
                  className: 'divider',
                  id: '266609',
                  staticDataSource: attrDataMap['CITY_CODE'],
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
                  title: '营销案描述',
                  key: 'saleDesc',
                  dataIndex: 'saleDesc',
                  className: 'divider',
                  id: '0045463',
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
                  title: '状态',
                  key: 'saleStatus',
                  dataIndex: 'saleStatus',
                  className: 'divider',
                  id: '001876',
                  customRendering:
                    '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  let fontColor = "#0000FF";  if (row.saleStatus === "1100") {    fontColor = "#FF0000";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '      let fontColor = "#0000FF";',
                    '',
                    '      if (row.saleStatus === "1100") {',
                    '        fontColor = "#FF0000";',
                    '      }',
                    '    ',
                    '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                    '}',
                  ],
                  staticDataSource: [
                    { id: '523934', label: '生效', value: '1000' },
                    { id: '4378357', label: '失效', value: '1100' },
                  ],
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
                  title: '创建时间',
                  key: 'createDate',
                  dataIndex: 'createDate',
                  className: 'divider',
                  id: '381627',
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
                  id: '420725',
                  dataIndex: 'updateDate',
                  title: '更新时间',
                  key: '420725',
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
              page={true}
              rowKeyType={'specified'}
              editMode={'single'}
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'checkbox' }}
              showHead={false}
              showTotal={true}
              showSizeChanger={false}
              showQuickJumper={true}
              pageSizeOptions={'[5,10,20]'}
              rowKey={'saleCfgId'}
              total={data?.saleConfigList?.resultData?.total}
              dataSource={data?.saleConfigList?.resultData?.records}
              fieldName={'data.qryDcApproveOrdTodoPage.resultData.total'}
              hiddenAction={false}
              rowActions={[]}
              extend={[
                {
                  id: '0006446',
                  title: '修改',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'edit', isIconFont: false },
                  rule: '',
                  checked: true,
                },
                {
                  id: '216759',
                  title: '失效',
                  iconPos: 'left',
                  rule: 'row.saleStatus === "1100"',
                  icon: {
                    type: 'stop',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  },
                  checked: true,
                },
                {
                  id: '470635',
                  title: '生效',
                  iconPos: 'left',
                  icon: {
                    type: 'check-circle',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  },
                  rule: 'row.saleStatus === "1000"',
                  checked: true,
                },
              ]}
              actionWidth={100}
              extendNum={3}
              dataSourceFromDataSourceConfig={
                'data.saleConfigList.resultData.records'
              }
              $$componentItem={{
                id: 'Table_37209506_915744',
                uid: 'Table_37209506_915744',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '16px 0px 0px 0px' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatacallSelfFunc699: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166389820424598850,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '396761',
                      pageJsonId: '541575',
                      customFuncName: 'query',
                      customFuncParams: 'object',
                      paramsObj: { pageNum: '$page$', pageSize: '$pageSize$' },
                      paramsObjKeyValueMap: {
                        pageNum: '$page$',
                        pageSize: '$pageSize$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc699.params =
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
                  eventDatacallSelfFunc699,
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
              onClickBtn1={(rowId: any, row: any, index: any) => {
                const eventDatagetTableSelected77: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166255419371255300,
                    options: {
                      compId: 'Table_37209506_915744',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '3706402',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166255419371286980,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '1867025',
                          pageJsonId: '541575',
                          value: ['$row$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'getPageNum',
                        dataId: 166927712852881300,
                        options: {
                          compId: 'Table_37209506_915744',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '24388',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 166927713667803260,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '20518',
                              pageJsonId: '541575',
                              modalname: '/bianjiyingxiaoanfanwei4145',
                              pageId: '912619917963702272',
                              paramsObj: {
                                saleCfgId: '$row.saleCfgId$',
                                saleCode: '$row.saleCode$',
                                saleName: '$row.saleName$',
                                saleStatus: '$row.saleStatus$',
                                lanId: '$row.lanId$',
                                saleDesc: '$row.saleDesc$',
                                pageNum: '$pageNum_24388$',
                              },
                              paramsObjKeyValueMap: {
                                saleCfgId: '$row.saleCfgId$',
                                saleCode: '$row.saleCode$',
                                saleName: '$row.saleName$',
                                saleStatus: '$row.saleStatus$',
                                lanId: '$row.lanId$',
                                saleDesc: '$row.saleDesc$',
                                pageNum: '$pageNum_24388$',
                              },
                              modalPath: '/bianjiyingxiaoanfanwei4145',
                            },
                            line_number: 4,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected77.params =
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
                  eventDatagetTableSelected77,
                  { rowId, row, index },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn2={(rowId: any, row: any, index: any) => {
                const eventDatashowModal21: any = [
                  {
                    type: 'showModal',
                    dataId: 166926980955198560,
                    options: {
                      compId: 'showModal',
                      compName: 'page',
                      id: '262361',
                      pageJsonId: '541575',
                      type: 'confirm',
                      title: '是否让此方案失效？',
                      okText: '确认',
                      cancelText: '取消',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166926984836969280,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '4528635',
                          pageJsonId: '541575',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'modDcSaleConfig',
                          _apiCode: 'modDcSaleConfig',
                          _source: 'rhin',
                          _serviceId: '912649490086060032',
                          _serviceTitle: '营销案修改-tsm: modDcSaleConfig',
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
                              dataKey: '39918_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '39918_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '39918_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'saleCfgId',
                                  attrType: 'field',
                                  type: 'long',
                                  mustFlag: 'F',
                                  _id: 'body.saleCfgId',
                                  compType: 'Input',
                                  name: 'saleCfgId',
                                  parents: ['body'],
                                  id: 'body.saleCfgId',
                                  dataKey: '39918_body.saleCfgId',
                                  value: {
                                    type: ['context', '$row$'],
                                    hideAttr: false,
                                    code: 'saleCfgId',
                                  },
                                },
                                {
                                  code: 'saleCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleCode',
                                  compType: 'Input',
                                  name: 'saleCode',
                                  parents: ['body'],
                                  id: 'body.saleCode',
                                  dataKey: '39918_body.saleCode',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'saleName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleName',
                                  compType: 'Input',
                                  name: 'saleName',
                                  parents: ['body'],
                                  id: 'body.saleName',
                                  dataKey: '39918_body.saleName',
                                  value: { type: [], code: '' },
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
                                  dataKey: '39918_body.lanId',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'saleStatus',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleStatus',
                                  compType: 'Input',
                                  name: 'saleStatus',
                                  parents: ['body'],
                                  id: 'body.saleStatus',
                                  dataKey: '39918_body.saleStatus',
                                  value: { type: ['customize'], code: '1100' },
                                },
                                {
                                  code: 'saleDesc',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleDesc',
                                  compType: 'Input',
                                  name: 'saleDesc',
                                  parents: ['body'],
                                  id: 'body.saleDesc',
                                  dataKey: '39918_body.saleDesc',
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
                                  dataKey: '39918_body.remark',
                                  value: { type: [], code: '' },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '39918_body',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getPageNum',
                            dataId: 1669276961734804,
                            options: {
                              compId: 'Table_37209506_915744',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '4763131',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166927700810263870,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '961191',
                                  pageJsonId: '541575',
                                  customFuncName: 'cleanQuery',
                                  customFuncParams: 'object',
                                  paramsObj: { pageNum: '$pageNum_4763131$' },
                                  paramsObjKeyValueMap: {
                                    pageNum: '$pageNum_4763131$',
                                  },
                                },
                                line_number: 4,
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
                eventDatashowModal21.params =
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
                  eventDatashowModal21,
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
              onClickBtn3={(rowId: any, row: any, index: any) => {
                const eventDatashowModal22: any = [
                  {
                    type: 'showModal',
                    dataId: 166927030637871780,
                    options: {
                      compId: 'showModal',
                      compName: 'page',
                      id: '127097',
                      pageJsonId: '541575',
                      type: 'confirm',
                      title: '是否让此方案生效？',
                      okText: '确认',
                      cancelText: '取消',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166927033909718850,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '411824',
                          pageJsonId: '541575',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'modDcSaleConfig',
                          _apiCode: 'modDcSaleConfig',
                          _source: 'rhin',
                          _serviceId: '912649490086060032',
                          _serviceTitle: '营销案修改-tsm: modDcSaleConfig',
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
                              dataKey: '61759_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '61759_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '61759_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'saleCfgId',
                                  attrType: 'field',
                                  type: 'long',
                                  mustFlag: 'F',
                                  _id: 'body.saleCfgId',
                                  compType: 'Input',
                                  name: 'saleCfgId',
                                  parents: ['body'],
                                  id: 'body.saleCfgId',
                                  dataKey: '61759_body.saleCfgId',
                                  value: {
                                    type: ['context', '$row$'],
                                    hideAttr: false,
                                    code: 'saleCfgId',
                                  },
                                },
                                {
                                  code: 'saleCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleCode',
                                  compType: 'Input',
                                  name: 'saleCode',
                                  parents: ['body'],
                                  id: 'body.saleCode',
                                  dataKey: '61759_body.saleCode',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'saleName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleName',
                                  compType: 'Input',
                                  name: 'saleName',
                                  parents: ['body'],
                                  id: 'body.saleName',
                                  dataKey: '61759_body.saleName',
                                  value: { type: [], code: '' },
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
                                  dataKey: '61759_body.lanId',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'saleStatus',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleStatus',
                                  compType: 'Input',
                                  name: 'saleStatus',
                                  parents: ['body'],
                                  id: 'body.saleStatus',
                                  dataKey: '61759_body.saleStatus',
                                  value: { type: ['customize'], code: '1000' },
                                },
                                {
                                  code: 'saleDesc',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleDesc',
                                  compType: 'Input',
                                  name: 'saleDesc',
                                  parents: ['body'],
                                  id: 'body.saleDesc',
                                  dataKey: '61759_body.saleDesc',
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
                                  dataKey: '61759_body.remark',
                                  value: { type: [], code: '' },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '61759_body',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getPageNum',
                            dataId: 166927703736786080,
                            options: {
                              compId: 'Table_37209506_915744',
                              compLib: 'comm',
                              pageJsonId: '541575',
                              compName: 'Table',
                              id: '30005706',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166927704866243170,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '866522',
                                  pageJsonId: '541575',
                                  customFuncName: 'cleanQuery',
                                  customFuncParams: 'object',
                                  paramsObj: { pageNum: '$pageNum_30005706$' },
                                  paramsObjKeyValueMap: {
                                    pageNum: '$pageNum_30005706$',
                                  },
                                },
                                line_number: 4,
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
                eventDatashowModal22.params =
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
                  eventDatashowModal22,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_37209506_915744')}
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(SaleConfigManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
