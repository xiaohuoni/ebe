// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Select,
  Table,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsJc_0010_0008$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest495: any = [
      {
        type: 'apiRequest',
        dataId: 166903300385083680,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '178605',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '178605_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '178605_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '178605_query',
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
                  dataKey: '178605_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '178605_body.attrCode',
                  value: { type: ['customize'], code: 'city' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '178605_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166908608748795230,
            options: {
              compId: 'Input_cityCode_49349',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '9692574',
              data: '$reply_178605?.resultData$',
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
    eventDataapiRequest495.params = [] || [];
    CMDGenerator(eventDataapiRequest495, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest496: any = [
      {
        type: 'apiRequest',
        dataId: 166903300724252740,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '434547',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '434547_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '434547_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '434547_query',
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
                  dataKey: '434547_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '434547_body.attrCode',
                  value: { type: ['customize'], code: 'requestLevel' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '434547_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166908612745022340,
            options: {
              compId: 'Input_requestLevel_975218',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '150838',
              labelKey: 'attrValueName',
              data: '$reply_434547?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest496.params = [] || [];
    CMDGenerator(eventDataapiRequest496, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse257: any = [
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
        dataId: 166132402524071650,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166926991715890430,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '969085',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var billQuota=item.customObject.billQuota;if(billQuota!=undefined&&billQuota!=null){success(billQuota)}};',
              actionTitle: '账单',
            },
            line_number: 6,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167041865720787420,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '828857',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var accQuotaList=data_969085;accQuotaList.forEach(function(v){v.monye=parseInt(v.monye)*0.01});success(accQuotaList)};',
                  actionTitle: '单位换算',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167041913009201060,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '9265721',
                      pageJsonId: '537892',
                      dataSourceId: 166920450939842240,
                      dataSourceName: 'accQuatoList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'accCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '帐户编码',
                          defaultValue: '',
                          name: '帐户编码',
                          attrId: '6773226',
                          initialData: { type: 'static', value: '帐户编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'userCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '用户号码',
                          defaultValue: '',
                          name: '用户号码',
                          attrId: '6936',
                          initialData: { type: 'static', value: '用户号码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'causeCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '原因编码',
                          defaultValue: '',
                          name: '原因编码',
                          attrId: '645687',
                          initialData: { type: 'static', value: '原因编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'quotaType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '调帐类型',
                          defaultValue: '',
                          name: '调帐类型',
                          attrId: '51852',
                          initialData: { type: 'static', value: '调帐类型' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'monye',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '金额',
                          defaultValue: '',
                          name: '金额',
                          attrId: '658782',
                          initialData: { type: 'static', value: '金额' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'extDeal',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '外部交易ID',
                          defaultValue: '',
                          name: '外部交易ID',
                          attrId: '27687',
                          initialData: { type: 'static', value: '外部交易ID' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'billPeriod',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '帐单周期ID',
                          defaultValue: '',
                          name: '帐单周期ID',
                          attrId: '156521',
                          initialData: { type: 'static', value: '帐单周期ID' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'billCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '帐单编码',
                          defaultValue: '',
                          name: '帐单编码',
                          attrId: '014911',
                          initialData: { type: 'static', value: '帐单编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'billDesc',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '帐单明细ID',
                          defaultValue: '',
                          name: '帐单明细ID',
                          attrId: '38739916',
                          initialData: { type: 'static', value: '帐单明细ID' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'accType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '帐目类型编码',
                          defaultValue: '',
                          name: '帐目类型编码',
                          attrId: '824391',
                          initialData: {
                            type: 'static',
                            value: '帐目类型编码',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'informSign',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '通知标识',
                          defaultValue: '',
                          name: '通知标识',
                          attrId: '557559',
                          initialData: { type: 'static', value: '通知标识' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'cutoffDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '截止日期',
                          defaultValue: '',
                          name: '截止日期',
                          attrId: '033991',
                          initialData: { type: 'static', value: '截止日期' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'remark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '备注',
                          defaultValue: '',
                          name: '备注',
                          attrId: '104809',
                          initialData: { type: 'static', value: '备注' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'cityCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '地市编码',
                          defaultValue: '',
                          name: '地市编码',
                          attrId: '415866',
                          initialData: { type: 'static', value: '地市编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'custCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '客户编码',
                          defaultValue: '',
                          name: '客户编码',
                          attrId: '557802',
                          initialData: { type: 'static', value: '客户编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'custName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '客户名称',
                          defaultValue: '',
                          name: '客户名称',
                          attrId: '685251',
                          initialData: { type: 'static', value: '客户名称' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                      ],
                      newData: '$data_828857$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 8,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'sysSetVisible',
                dataId: 166927057207705600,
                options: {
                  compId: ['Table_4668064'],
                  compName: 'page',
                  id: '5296836',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Table_4668064'],
                },
                line_number: 9,
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166927014804957980,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '50187',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var buildAcc=item.customObject.buildAcc;if(buildAcc!=undefined&&buildAcc!=null){success(buildAcc)}};',
              actionTitle: '账户',
            },
            line_number: 10,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167041911286868400,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '375023',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){console.log("-------------------jinlai-----------------");var accQuatoList=data_50187;accQuatoList.forEach(function(v){if(v.monye!=undefined&&v.monye!=null){v.monye=parseInt(v.monye)*0.01}});console.log(accQuatoList);success(accQuatoList)};',
                  actionTitle: '单位换算',
                },
                line_number: 11,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167041920797360300,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '552551',
                      pageJsonId: '537892',
                      dataSourceId: 166920501328521630,
                      dataSourceName: 'accQuotaList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'accCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '帐户编码',
                          defaultValue: '',
                          name: '帐户编码',
                          attrId: '067331',
                          initialData: { type: 'static', value: '帐户编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'serviceCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '服务编号',
                          defaultValue: '',
                          name: '服务编号',
                          attrId: '10873',
                          initialData: { type: 'static', value: '服务编号' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'causeCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '原因编码',
                          defaultValue: '',
                          name: '原因编码',
                          attrId: '284471',
                          initialData: { type: 'static', value: '原因编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'quotaType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '调帐类型',
                          defaultValue: '',
                          name: '调帐类型',
                          attrId: '012429',
                          initialData: { type: 'static', value: '调帐类型' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'opType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '操作类型',
                          defaultValue: '',
                          name: '操作类型',
                          attrId: '8284383',
                          initialData: { type: 'static', value: '操作类型' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'monye',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '金额',
                          defaultValue: '',
                          name: '金额',
                          attrId: '924028',
                          initialData: { type: 'static', value: '金额' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'extDeal',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '外部交易标识',
                          defaultValue: '',
                          name: '外部交易标识',
                          attrId: '434225',
                          initialData: {
                            type: 'static',
                            value: '外部交易标识',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'billPeriod',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '账单周期标识',
                          defaultValue: '',
                          name: '账单周期标识',
                          attrId: '6185159',
                          initialData: {
                            type: 'static',
                            value: '账单周期标识',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'accBalance',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '账户余额标识',
                          defaultValue: '',
                          name: '账户余额标识',
                          attrId: '242937',
                          initialData: {
                            type: 'static',
                            value: '账户余额标识',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'balanceType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '余额类型',
                          defaultValue: '',
                          name: '余额类型',
                          attrId: '342294',
                          initialData: { type: 'static', value: '余额类型' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'effectDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '生效日期',
                          defaultValue: '',
                          name: '生效日期',
                          attrId: '821844',
                          initialData: { type: 'static', value: '生效日期' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'loseDdate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '失效日期',
                          defaultValue: '',
                          name: '失效日期',
                          attrId: '7600186',
                          initialData: { type: 'static', value: '失效日期' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'informSign',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '通知标识',
                          defaultValue: '',
                          name: '通知标识',
                          attrId: '724197',
                          initialData: { type: 'static', value: '通知标识' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'cutoffDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '截止日期',
                          defaultValue: '',
                          name: '截止日期',
                          attrId: '1109149',
                          initialData: { type: 'static', value: '截止日期' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'remark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '备注',
                          defaultValue: '',
                          name: '备注',
                          attrId: '678464',
                          initialData: { type: 'static', value: '备注' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'accType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '账目类型编码',
                          defaultValue: '',
                          name: '账目类型编码',
                          attrId: '48463',
                          initialData: {
                            type: 'static',
                            value: '账目类型编码',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'cityCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '地市编码',
                          defaultValue: '',
                          name: '地市编码',
                          attrId: '3677386',
                          initialData: { type: 'static', value: '客户编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'custCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '客户编码',
                          defaultValue: '',
                          name: '客户编码',
                          attrId: '869227',
                          initialData: { type: 'static', value: '客户编码' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'custName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '客户名称',
                          defaultValue: '',
                          name: '客户名称',
                          attrId: '893998',
                          initialData: { type: 'static', value: '客户名称' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                      ],
                      newData: '$data_375023$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 12,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'sysSetVisible',
                dataId: 166927058709306940,
                options: {
                  compId: ['Table_56653'],
                  compName: 'page',
                  id: '795418',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Table_56653'],
                },
                line_number: 13,
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){if("adjustMoney"===attrList[i].attrCode&&attrList[i].attrValue!=undefined){var money=parseInt(attrList[i].attrValue)*0.01;factorForm[attrList[i].attrCode]=money}else{if(attrList[i].attrValueDesc!=undefined&&""!=attrList[i].attrValueDesc){factorForm[attrList[i].attrCode]=attrList[i].attrValueDesc}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}}data.factorForm=factorForm;console.log("..........1213123......");console.log(factorForm);data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 14,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132641356637300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '172885',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '08707745',
                      code: 'oprSeq',
                      name: '本次操作流水号',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'oprSeq',
                      },
                    },
                    {
                      attrId: '359926',
                      code: 'cityCode',
                      name: '地市编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'cityCode',
                      },
                    },
                    {
                      attrId: '65306653',
                      code: 'operID',
                      name: '操作员ID',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'operID',
                      },
                    },
                    {
                      attrId: '183177',
                      code: 'operName',
                      name: '操作员名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'operName',
                      },
                    },
                    {
                      attrId: '981621',
                      code: 'operOrgId',
                      name: '操作员组织机构',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'operOrgId',
                      },
                    },
                    {
                      attrId: '932317',
                      code: 'contactPhone',
                      name: '操作员联系电话',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'contactPhone',
                      },
                    },
                    {
                      attrId: '2715976',
                      code: 'custCode',
                      name: '客户编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'custCode',
                      },
                    },
                    {
                      attrId: '168205',
                      code: 'custName',
                      name: '客户名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'custName',
                      },
                    },
                    {
                      attrId: '54712',
                      code: 'acctCode',
                      name: '调帐帐户标识',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'acctCode',
                      },
                    },
                    {
                      attrId: '87964',
                      code: 'requestDate',
                      name: '调帐申请时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'requestDate',
                      },
                    },
                    {
                      attrId: '8387124',
                      code: 'requestLevel',
                      name: '调帐请求级别',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'requestLevel',
                      },
                    },
                    {
                      attrId: '1054964',
                      code: 'requestType',
                      name: '调帐请求类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'requestType',
                      },
                    },
                    {
                      attrId: '254088',
                      code: 'requestAmtTotal',
                      name: '调帐金额（含税）',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'requestAmtTotal',
                      },
                    },
                    {
                      attrId: '7715617',
                      code: 'balanceTypeName',
                      name: '帐本类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'balanceTypeName',
                      },
                    },
                    {
                      attrId: '0073597',
                      code: 'adjustReasonCode',
                      name: '调帐原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'adjustReasonCode',
                      },
                    },
                    {
                      attrId: '426495',
                      code: 'adjustDescription ',
                      name: '调帐说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'adjustDescription',
                      },
                    },
                    {
                      attrId: '398797',
                      code: 'adjustNum',
                      name: '调账户数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'adjustNum',
                      },
                    },
                    {
                      attrId: '5032014',
                      code: 'adjustMoney',
                      name: '调账总金额（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'adjustMoney',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 15,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 167091757373619460,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '6662023',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'quotaInquiry',
                      _apiCode: 'quotaInquiry',
                      _source: 'rhin',
                      _serviceId: '912340834461691904',
                      _serviceTitle: 'CMIOT额度查询接口-hdb: quotaInquiry',
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
                          dataKey: '6662023_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '6662023_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '6662023_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'boinsid',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.boinsid',
                              compType: 'Input',
                              name: 'boinsid',
                              parents: ['body'],
                              id: 'body.boinsid',
                              dataKey: '6662023_body.boinsid',
                            },
                            {
                              code: 'calculateAmount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.calculateAmount',
                              compType: 'Input',
                              name: 'calculateAmount',
                              parents: ['body'],
                              id: 'body.calculateAmount',
                              dataKey: '6662023_body.calculateAmount',
                            },
                            {
                              code: 'type',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.type',
                              compType: 'Input',
                              name: 'type',
                              parents: ['body'],
                              id: 'body.type',
                              dataKey: '6662023_body.type',
                            },
                            {
                              code: 'time',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.time',
                              compType: 'Input',
                              name: 'time',
                              parents: ['body'],
                              id: 'body.time',
                              dataKey: '6662023_body.time',
                            },
                            {
                              code: 'organ',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.organ',
                              compType: 'Input',
                              name: 'organ',
                              parents: ['body'],
                              id: 'body.organ',
                              dataKey: '6662023_body.organ',
                              value: {
                                type: ['customize'],
                                code: '$data.factorForm.operID$',
                              },
                            },
                            {
                              code: 'source_system',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.source_system',
                              compType: 'Input',
                              name: 'source_system',
                              parents: ['body'],
                              id: 'body.source_system',
                              dataKey: '6662023_body.source_system',
                            },
                            {
                              code: 'service_name',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.service_name',
                              compType: 'Input',
                              name: 'service_name',
                              parents: ['body'],
                              id: 'body.service_name',
                              dataKey: '6662023_body.service_name',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '6662023_body',
                        },
                      ],
                    },
                    line_number: 16,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167091757373675260,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7852055',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3,_reply_4;var res={};res.workNum=(_reply_=reply_6662023)===null||_reply_===void 0?void 0:_reply_.workNum;res.remainAmount=parseInt((_reply_2=reply_6662023)===null||_reply_2===void 0?void 0:_reply_2.resultData.remainAmount)*0.01;res.usedAmount=parseInt((_reply_3=reply_6662023)===null||_reply_3===void 0?void 0:_reply_3.resultData.usedAmount)*0.01;res.totalAmount=parseInt((_reply_4=reply_6662023)===null||_reply_4===void 0?void 0:_reply_4.resultData.totalAmount)*0.01;success(res)};',
                        },
                        line_number: 17,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 167091757373609200,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '829012',
                              pageJsonId: '537892',
                              dataSourceId: 166917216412453020,
                              dataSourceName: 'quotaObj',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '0136595',
                                  code: 'workNum',
                                  name: '唯一流水号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$data_7852055.workNum$',
                                  },
                                },
                                {
                                  attrId: '331495',
                                  code: 'remainAmount',
                                  name: '剩余金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$data_7852055.remainAmount$',
                                  },
                                },
                                {
                                  attrId: '84459695',
                                  code: 'usedAmount',
                                  name: '已使用金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$data_7852055.usedAmount$',
                                  },
                                },
                                {
                                  attrId: '1930736',
                                  code: 'totalAmount',
                                  name: '总额度金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$data_7852055.totalAmount$',
                                  },
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
                type: 'setValue',
                dataId: 166436729866871200,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_0235518_772568_273065_514098',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '7001685',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_0235518_772568_273065_514098:
                      '$state.itemList.approveGradeName$',
                  },
                  compid: [
                    'Input_361479_887285_2150708_0235518_772568_273065_514098',
                  ],
                },
                line_number: 19,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166132820169451970,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '859603',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
            },
            line_number: 20,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132828894265800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '391128',
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
                  newData: '$data_859603$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 21,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '512113',
                    options: { context: '$data_859603$', operate: 'empty' },
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
                    condId: '154347',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166745822672869400,
                elseIfs: [],
                line_number: 22,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166745828126503040,
                    options: {
                      compId: ['Table_5369494', 'Table_5369494_5499655'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '8532682',
                      visible: '',
                      compid: ['Table_5369494', 'Table_5369494_5499655'],
                    },
                    line_number: 23,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDisable',
            dataId: 166436756146657440,
            options: {
              compId: ['Form_412511_107682', 'Form_412511_107682_5442757'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Form',
              id: '089897',
              disabled: 'true',
              compid: ['Form_412511_107682', 'Form_412511_107682_5442757'],
            },
            line_number: 24,
          },
        ],
      },
    ];
    eventDataifelse257.params = [] || [];
    CMDGenerator(eventDataifelse257, {}, 'ifelse', {
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
        name={'页面'}
        className={'fixed-form-item-label-width-120'}
        $$componentItem={{
          id: 'View_537892_1_660616',
          uid: 'View_537892_1_660616',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'visible',
          width: '100.',
          overflow: 'hidden',
        }}
        ref={(r: any) => (refs['View_537892_1_660616'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'CMIOT批量调账审批'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_719552_00105',
            uid: 'Divider_719552_00105',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_719552_00105'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_5539646',
            uid: 'View_6806553_5539646',
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
          ref={(r: any) => (refs['View_6806553_5539646'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_688965',
              uid: 'HorizontalView_004602_688965',
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
            ref={(r: any) => (refs['HorizontalView_004602_688965'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_115985',
                uid: 'View_339406_115985',
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
              ref={(r: any) => (refs['View_339406_115985'] = r)}
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
                  id: 'Form_4311097_9385662_1929847_738917_68642_7960323',
                  uid: 'Form_4311097_9385662_1929847_738917_68642_7960323',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_1929847_738917_68642_7960323'] =
                    r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'CMIOT批量调账'}
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
                    id: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_949332_8499233',
                    uid: 'View_949332_8499233',
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
                  ref={(r: any) => (refs['View_949332_8499233'] = r)}
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
                    id: 'Input_361479_887285_2150708_0235518_772568_273065_514098',
                    uid: 'Input_361479_887285_2150708_0235518_772568_273065_514098',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_0235518_772568_273065_514098'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
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
          formCode={'Form_262755'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.quotaObj}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_262755',
            uid: 'Form_262755',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource222: any = [
              {
                type: 'setDataSource',
                dataId: 166917241693565600,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '782335',
                  pageJsonId: '537892',
                  dataSourceId: 166917216412453020,
                  dataSourceName: 'quotaObj',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '0136595',
                      code: 'workNum',
                      name: '唯一流水号',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '331495',
                      code: 'remainAmount',
                      name: '剩余金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_262755', 'getFieldsValue'],
                        code: 'remainAmount',
                      },
                    },
                    {
                      attrId: '84459695',
                      code: 'usedAmount',
                      name: '已使用金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_262755', 'getFieldsValue'],
                        code: 'usedAmount',
                      },
                    },
                    {
                      attrId: '1930736',
                      code: 'totalAmount',
                      name: '总额度金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_262755', 'getFieldsValue'],
                        code: 'totalAmount',
                      },
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource222.params =
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
              eventDatasetDataSource222,
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
          ref={(r: any) => (refs['Form_262755'] = r)}
          {...injectData}
        >
          <Input
            name={'季度总额度'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'totalAmount'}
            value={data?.quotaObj?.totalAmount}
            formItemIndex={0}
            postfixStyle={'1'}
            postfix={'元'}
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
              id: 'Input_totalAmount_0246657',
              uid: 'Input_totalAmount_0246657',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_totalAmount_0246657'] = r)}
            {...injectData}
          />
          <Input
            name={'已使用金额'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'元'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'usedAmount'}
            value={data?.quotaObj?.usedAmount}
            formItemIndex={1}
            postfixStyle={'1'}
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
              id: 'Input_usedAmount_1670002',
              uid: 'Input_usedAmount_1670002',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_usedAmount_1670002'] = r)}
            {...injectData}
          />
          <Input
            name={'剩余金额'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'元'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'remainAmount'}
            value={data?.quotaObj?.remainAmount}
            formItemIndex={2}
            postfixStyle={'1'}
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
              id: 'Input_remainAmount_344174',
              uid: 'Input_remainAmount_344174',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_remainAmount_344174'] = r)}
            {...injectData}
          />
        </Form>
        <Form
          name={'要素'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_412511'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.factorForm}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_412511_107682_5442757',
            uid: 'Form_412511_107682_5442757',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '15px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource223: any = [
              {
                type: 'setDataSource',
                dataId: 166790031249398270,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '0043',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '08707745',
                      code: 'oprSeq',
                      name: '本次操作流水号',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'oprSeq',
                      },
                    },
                    {
                      attrId: '359926',
                      code: 'cityCode',
                      name: '地市编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'cityCode',
                      },
                    },
                    {
                      attrId: '65306653',
                      code: 'operID',
                      name: '操作员ID',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'operID',
                      },
                    },
                    {
                      attrId: '183177',
                      code: 'operName',
                      name: '操作员名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'operName',
                      },
                    },
                    {
                      attrId: '981621',
                      code: 'operOrgId',
                      name: '操作员组织机构',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'operOrgId',
                      },
                    },
                    {
                      attrId: '932317',
                      code: 'contactPhone',
                      name: '操作员联系电话',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'contactPhone',
                      },
                    },
                    {
                      attrId: '2715976',
                      code: 'custCode',
                      name: '客户编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '168205',
                      code: 'custName',
                      name: '客户名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '54712',
                      code: 'acctCode',
                      name: '调帐帐户标识',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '87964',
                      code: 'requestDate',
                      name: '调帐申请时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'requestDate',
                      },
                    },
                    {
                      attrId: '8387124',
                      code: 'requestLevel',
                      name: '调帐请求级别',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'requestLevel',
                      },
                    },
                    {
                      attrId: '1054964',
                      code: 'requestType',
                      name: '调帐请求类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '254088',
                      code: 'requestAmtTotal',
                      name: '调帐金额（含税）',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7715617',
                      code: 'balanceTypeName',
                      name: '帐本类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0073597',
                      code: 'adjustReasonCode',
                      name: '调帐原因',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '426495',
                      code: 'adjustDescription ',
                      name: '调帐说明',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '398797',
                      code: 'adjustNum',
                      name: '调账户数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'adjustNum',
                      },
                    },
                    {
                      attrId: '5032014',
                      code: 'adjustMoney',
                      name: '调账总金额（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'adjustMoney',
                      },
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource223.params = [] || [];
            CMDGenerator(eventDatasetDataSource223, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Form_412511_107682_5442757'] = r)}
          {...injectData}
        >
          <Input
            name={'本次操作流水号'}
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
            fieldName={'oprSeq'}
            value={data?.factorForm?.oprSeq}
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
              id: 'Input_oprSeq_52986171',
              uid: 'Input_oprSeq_52986171',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_oprSeq_52986171'] = r)}
            {...injectData}
          />
          <Input
            name={'地市编码'}
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
            fieldName={'cityCode'}
            value={data?.factorForm?.cityCode}
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
              id: 'Input_cityCode_49349',
              uid: 'Input_cityCode_49349',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_cityCode_49349'] = r)}
            {...injectData}
          />
          <Input
            name={'操作员ID'}
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
            fieldName={'operID'}
            value={data?.factorForm?.operID}
            formItemIndex={2}
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
              id: 'Input_operID_720978',
              uid: 'Input_operID_720978',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_operID_720978'] = r)}
            {...injectData}
          />
          <Input
            name={'操作员名称'}
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
            fieldName={'operName'}
            value={data?.factorForm?.operName}
            formItemIndex={3}
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
              id: 'Input_operName_971538',
              uid: 'Input_operName_971538',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_operName_971538'] = r)}
            {...injectData}
          />
          <Input
            name={'操作员组织机构'}
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
            fieldName={'operOrgId'}
            value={data?.factorForm?.operOrgId}
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
              id: 'Input_operOrgId_336426',
              uid: 'Input_operOrgId_336426',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_operOrgId_336426'] = r)}
            {...injectData}
          />
          <Input
            name={'操作员联系电话'}
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
            fieldName={'contactPhone'}
            value={data?.factorForm?.contactPhone}
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
              id: 'Input_contactPhone_843647',
              uid: 'Input_contactPhone_843647',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_contactPhone_843647'] = r)}
            {...injectData}
          />
          <Input
            name={'调帐申请时间'}
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
            fieldName={'requestDate'}
            value={data?.factorForm?.requestDate}
            formItemIndex={6}
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
              id: 'Input_requestDate_715893',
              uid: 'Input_requestDate_715893',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_requestDate_715893'] = r)}
            {...injectData}
          />
          <Select
            name={'调帐请求级别'}
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
            attr={{}}
            placeholder={'请选择'}
            fieldName={'requestLevel'}
            value={data?.factorForm?.requestLevel}
            formItemIndex={7}
            $$componentItem={{
              id: 'Input_requestLevel_975218',
              uid: 'Input_requestLevel_975218',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_requestLevel_975218'] = r)}
            {...injectData}
          />
          <Input
            name={'调账户数'}
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
            fieldName={'adjustNum'}
            value={data?.factorForm?.adjustNum}
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
              id: 'Input_3965095',
              uid: 'Input_3965095',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_3965095'] = r)}
            {...injectData}
          />
          <Input
            name={'调账总金额'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'元'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={9}
            value={data?.factorForm?.adjustMoney}
            fieldName={'adjustMoney'}
            postfixStyle={'1'}
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
              id: 'Input_283936',
              uid: 'Input_283936',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_283936'] = r)}
            {...injectData}
          />
        </Form>
        <Table
          name={'账单调账'}
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
              title: '客户编码',
              key: 'custCode',
              dataIndex: 'custCode',
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
              title: '客户名称',
              key: 'custName',
              dataIndex: 'custName',
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
            {
              title: '地市编码',
              key: 'cityCode',
              dataIndex: 'cityCode',
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
            {
              title: '帐户编码',
              key: 'accCode',
              dataIndex: 'accCode',
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
            {
              title: '用户号码',
              key: 'userCode',
              dataIndex: 'userCode',
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
            {
              title: '原因编码',
              key: 'causeCode',
              dataIndex: 'causeCode',
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
            {
              title: '调帐类型',
              key: 'quotaType',
              dataIndex: 'quotaType',
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
            {
              title: '金额',
              key: 'monye',
              dataIndex: 'monye',
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
            {
              title: '外部交易ID',
              key: 'extDeal',
              dataIndex: 'extDeal',
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
            {
              title: '帐单周期ID',
              key: 'billPeriod',
              dataIndex: 'billPeriod',
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
            {
              title: '帐单编码',
              key: 'billCode',
              dataIndex: 'billCode',
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
            {
              title: '帐单明细ID',
              key: 'billDesc',
              dataIndex: 'billDesc',
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
            {
              title: '帐目类型编码',
              key: 'accType',
              dataIndex: 'accType',
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
            {
              title: '通知标识',
              key: 'informSign',
              dataIndex: 'informSign',
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
            {
              title: '截止日期',
              key: 'cutoffDate',
              dataIndex: 'cutoffDate',
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
            {
              title: '备注',
              key: 'remark',
              dataIndex: 'remark',
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
          rowKeyType={'auto'}
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
          dataSource={data?.accQuatoList}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.accQuatoList'}
          $$componentItem={{
            id: 'Table_56653',
            uid: 'Table_56653',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          ref={(r: any) => (refs['Table_56653'] = r)}
          {...injectData}
        />
        <Table
          name={'账户调账'}
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
              title: '客户编码',
              key: 'custCode',
              dataIndex: 'custCode',
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
              title: '客户名称',
              key: 'custName',
              dataIndex: 'custName',
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
            {
              title: '地市编码',
              key: 'cityCode',
              dataIndex: 'cityCode',
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
            {
              title: '帐户编码',
              key: 'accCode',
              dataIndex: 'accCode',
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
            {
              title: '服务编号',
              key: 'serviceCode',
              dataIndex: 'serviceCode',
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
            {
              title: '原因编码',
              key: 'causeCode',
              dataIndex: 'causeCode',
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
            {
              title: '调帐类型',
              key: 'quotaType',
              dataIndex: 'quotaType',
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
            {
              title: '操作类型',
              key: 'opType',
              dataIndex: 'opType',
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
            {
              title: '金额',
              key: 'monye',
              dataIndex: 'monye',
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
            {
              title: '外部交易标识',
              key: 'extDeal',
              dataIndex: 'extDeal',
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
            {
              title: '账单周期标识',
              key: 'billPeriod',
              dataIndex: 'billPeriod',
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
            {
              title: '账户余额标识',
              key: 'accBalance',
              dataIndex: 'accBalance',
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
            {
              title: '余额类型',
              key: 'balanceType',
              dataIndex: 'balanceType',
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
            {
              title: '生效日期',
              key: 'effectDate',
              dataIndex: 'effectDate',
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
            {
              title: '失效日期',
              key: 'loseDdate',
              dataIndex: 'loseDdate',
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
            {
              title: '通知标识',
              key: 'informSign',
              dataIndex: 'informSign',
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
            {
              title: '截止日期',
              key: 'cutoffDate',
              dataIndex: 'cutoffDate',
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
            {
              title: '账目类型编码',
              key: 'accType',
              dataIndex: 'accType',
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
            {
              title: '备注',
              key: 'remark',
              dataIndex: 'remark',
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
          rowKeyType={'auto'}
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
          dataSource={data?.accQuotaList}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.accQuotaList'}
          $$componentItem={{
            id: 'Table_4668064',
            uid: 'Table_4668064',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => (refs['Table_4668064'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          formItemIndex={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_161044',
            uid: 'View_4949093_161044',
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
          ref={(r: any) => (refs['View_4949093_161044'] = r)}
          {...injectData}
        >
          <Table
            name={'附件'}
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
              hasCustom: false,
            }}
            columns={[
              {
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
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
                title: '附件类型',
                key: 'fileTypeName',
                dataIndex: 'fileTypeName',
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
              {
                title: '创建人',
                key: 'createStaff',
                dataIndex: 'createStaff',
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
              {
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
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
            dataSource={data?.fileInfoList}
            rowActions={[]}
            extend={[
              {
                id: '5476746',
                title: '下载',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'download',
                  isIconFont: false,
                },
                checked: true,
              },
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_5369494_5499655',
              uid: 'Table_5369494_5499655',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode728: any = [
                {
                  type: 'customActionCode',
                  dataId: 166192918606345900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '8342055',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166193290759619360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '4133837',
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
                            initialData: {
                              type: 'static',
                              value: '附件文件路径',
                            },
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
                            initialData: {
                              type: 'static',
                              value: '附件分类-细类',
                            },
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
                        newData: '$data_8342055$',
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166193296648446750,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '773871',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/commonAuditOrder',
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
              eventDatacustomActionCode728.params =
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
                eventDatacustomActionCode728,
                { rowId, row, index },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatadownloadByFileId88: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166193298494793600,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '698245',
                    pageJsonId: '537892',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId88.params =
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
                eventDatadownloadByFileId88,
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
            ref={(r: any) => (refs['Table_5369494_5499655'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0010_0008$$Page, {
  pageId: '912665099090276352',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
