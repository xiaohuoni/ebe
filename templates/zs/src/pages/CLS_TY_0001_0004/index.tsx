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
  TextArea,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '907192957799936000';
const ClsTy_0001_0004$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_15626: any) => {
    const eventDatacustomActionCode80: any = [
      {
        type: 'customActionCode',
        dataId: 167746570105322000,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '861848',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_15626;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167746570105443940,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '223828',
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
    eventDatacustomActionCode80.params =
      [
        { title: '事件入参', name: 'options_15626', value: '$options_15626$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode80,
      { options_15626 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
  }));

  useEffect(() => {
    // console 167748446759258660
    console.log('这里', state?.itemList, state, urlParam);
    // console 168664285846894460
    console.log('杠精来', data?.sceneSubmit);
    const eventDataapiRequest246: any = [
      {
        type: 'apiRequest',
        dataId: 167757733656823200,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '631887',
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
        },
        line_number: 3,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167757733656870270,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '873508',
              pageJsonId: '537892',
              dataSourceId: 166096152690913730,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '2361134',
                  code: 'catalogCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                  value: {
                    type: ['context', '$reply_631887?.resultData.catalogCode$'],
                    hideAttr: true,
                    code: '',
                  },
                  attrType: 'field',
                  mustFlag: 'F',
                  exampleValue: 'CLS_JC_0008',
                  defaultValue: '',
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _idpath: ['2361134'],
                  _codePath: ['catalogCode'],
                },
                {
                  attrId: '12522',
                  code: 'approveGrade',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                  value: { type: [], code: 'approveGrade' },
                  attrType: 'field',
                  mustFlag: 'F',
                  exampleValue: '审批等级',
                  defaultValue: '',
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _idpath: ['12522'],
                  _codePath: ['approveGrade'],
                },
                {
                  attrId: '256378',
                  code: 'attrList',
                  name: '',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'attrList' },
                  attrType: 'objectArray',
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _idpath: ['256378'],
                  _codePath: ['attrList'],
                },
                {
                  attrId: '4685407',
                  code: 'fileInfo',
                  name: '',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [],
                  value: { type: [], code: 'fileInfo' },
                  attrType: 'objectArray',
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _idpath: ['4685407'],
                  _codePath: ['fileInfo'],
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
                      '$reply_631887?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _deletable: true,
                },
                {
                  attrId: '7957011',
                  code: 'childCatalogCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: 'CLS_TY_0001_0004' },
                  value: {
                    type: [
                      'context',
                      '$reply_631887?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  attrType: 'field',
                  mustFlag: 'F',
                  exampleValue: 'CLS_JC_0008_0001',
                  defaultValue: '',
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _idpath: ['7957011'],
                  _codePath: ['childCatalogCode'],
                },
                {
                  attrId: '318402',
                  code: 'parentCatalogCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                  value: {
                    type: [
                      'context',
                      '$reply_631887?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  attrType: 'field',
                  mustFlag: 'F',
                  exampleValue: 'CLS_JC',
                  defaultValue: '',
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _idpath: ['318402'],
                  _codePath: ['parentCatalogCode'],
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
                      '$reply_631887?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _deletable: true,
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
                      '$reply_631887?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _deletable: true,
                },
                {
                  code: 'customObject',
                  attrType: 'object',
                  mustFlag: 'F',
                  children: [
                    {
                      code: 'acceptBusi',
                      attrType: 'object',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'acceptBusiContextList',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'amount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '金额（元）',
                              defaultValue: '',
                              name: '金额（元）',
                              attrId: '574589',
                              initialData: {
                                type: 'static',
                                value: '金额（元）',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'amount',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '574589',
                              ],
                            },
                            {
                              code: 'busiDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '业务名称(描述)',
                              defaultValue: '',
                              name: '业务名称(描述)',
                              attrId: '212807',
                              initialData: {
                                type: 'static',
                                value: '业务名称(描述)',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'busiDesc',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '212807',
                              ],
                            },
                            {
                              code: 'busiName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '业务名称',
                              defaultValue: '',
                              name: '业务名称',
                              attrId: '038162',
                              initialData: {
                                type: 'static',
                                value: '业务名称',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'busiName',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '038162',
                              ],
                            },
                            {
                              code: 'custCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '集团编码',
                              defaultValue: '',
                              name: '集团编码',
                              attrId: '0058434',
                              initialData: {
                                type: 'static',
                                value: '集团编码',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'custCode',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '0058434',
                              ],
                            },
                            {
                              code: 'custName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '集团名称',
                              defaultValue: '',
                              name: '集团名称',
                              attrId: '7757192',
                              initialData: {
                                type: 'static',
                                value: '集团名称',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'custName',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '7757192',
                              ],
                            },
                            {
                              code: 'depositExplain',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '保证金说明',
                              defaultValue: '',
                              name: '保证金说明',
                              attrId: '515682',
                              initialData: {
                                type: 'static',
                                value: '保证金说明',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'depositExplain',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '515682',
                              ],
                            },
                            {
                              code: 'depositType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '保证金类型',
                              defaultValue: '',
                              name: '保证金类型',
                              attrId: '274334',
                              initialData: {
                                type: 'static',
                                value: '保证金类型',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'depositType',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '274334',
                              ],
                            },
                            {
                              code: 'quantity',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '数量',
                              defaultValue: '',
                              name: '数量',
                              attrId: '055671',
                              initialData: { type: 'static', value: '数量' },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'quantity',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '055671',
                              ],
                            },
                            {
                              code: 'riskKint',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '风险提示',
                              defaultValue: '',
                              name: '风险提示',
                              attrId: '033346',
                              initialData: {
                                type: 'static',
                                value: '风险提示',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'riskKint',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '033346',
                              ],
                            },
                            {
                              code: 'serviceNumber',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '充值账号、密码接收号码',
                              defaultValue: '',
                              name: '充值账号、密码接收号码',
                              attrId: '10837',
                              initialData: {
                                type: 'static',
                                value: '充值账号、密码接收号码',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'serviceNumber',
                              ],
                              _idpath: ['123276', '646031', '7919295', '10837'],
                            },
                            {
                              code: 'subAcctCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '集团分账户编码',
                              defaultValue: '',
                              name: '集团分账户编码',
                              attrId: '117298',
                              initialData: {
                                type: 'static',
                                value: '集团分账户编码',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'subAcctCode',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '117298',
                              ],
                            },
                            {
                              code: 'subAcctName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '集团分账户名称',
                              defaultValue: '',
                              name: '集团分账户名称',
                              attrId: '1033775',
                              initialData: {
                                type: 'static',
                                value: '集团分账户名称',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'subAcctName',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '1033775',
                              ],
                            },
                            {
                              code: 'totalAmount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '合计金额（元）',
                              defaultValue: '',
                              name: '合计金额（元）',
                              attrId: '325721',
                              initialData: {
                                type: 'static',
                                value: '合计金额（元）',
                              },
                              parentKey: 'acceptBusiContextList',
                              parentType: 'objectArray',
                              parentCode: 'acceptBusiContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'acceptBusi',
                                'acceptBusiContextList',
                                'totalAmount',
                              ],
                              _idpath: [
                                '123276',
                                '646031',
                                '7919295',
                                '325721',
                              ],
                            },
                          ],
                          name: '',
                          type: 'objectArray',
                          attrId: '7919295',
                          initialData: { type: 'static' },
                          parentKey: 'acceptBusi',
                          parentType: 'object',
                          showInput: true,
                          _codePath: [
                            'customObject',
                            'acceptBusi',
                            'acceptBusiContextList',
                          ],
                          _idpath: ['123276', '646031', '7919295'],
                        },
                        {
                          code: 'bToaAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '银企实收金额-认领需求金额（元）B-A',
                          defaultValue: '',
                          name: '银企实收金额-认领需求金额（元）B-A',
                          attrId: '581875',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'acceptBusi',
                          parentType: 'object',
                          showInput: true,
                          _codePath: [
                            'customObject',
                            'acceptBusi',
                            'bToaAmount',
                          ],
                          _idpath: ['123276', '646031', '581875'],
                        },
                        {
                          code: 'claimAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '认领需求金额（元）A',
                          defaultValue: '',
                          name: '认领需求金额（元）A',
                          attrId: '7409087',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'acceptBusi',
                          parentType: 'object',
                          showInput: true,
                          _codePath: [
                            'customObject',
                            'acceptBusi',
                            'claimAmount',
                          ],
                          _idpath: ['123276', '646031', '7409087'],
                        },
                        {
                          code: 'realAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '银企实收金额（元）B',
                          defaultValue: '',
                          name: '银企实收金额（元）B',
                          attrId: '184444',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'acceptBusi',
                          parentType: 'object',
                          showInput: true,
                          _codePath: [
                            'customObject',
                            'acceptBusi',
                            'realAmount',
                          ],
                          _idpath: ['123276', '646031', '184444'],
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '646031',
                      initialData: { type: 'static' },
                      parentKey: 'customObject',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customObject', 'acceptBusi'],
                      _idpath: ['123276', '646031'],
                    },
                    {
                      code: 'bankAccountList',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'isGovEnterprise',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '是否政企专户',
                          defaultValue: '',
                          name: '是否政企专户',
                          attrId: '609703',
                          initialData: {
                            type: 'static',
                            value: '是否政企专户',
                          },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'isGovEnterprise',
                          ],
                          _idpath: ['123276', '688246', '609703'],
                        },
                        {
                          code: 'payeeAcctCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '收款方账号',
                          defaultValue: '',
                          name: '收款方账号',
                          attrId: '5286043',
                          initialData: { type: 'static', value: '收款方账号' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'payeeAcctCode',
                          ],
                          _idpath: ['123276', '688246', '5286043'],
                        },
                        {
                          code: 'payeeAcctName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '收款方户名',
                          defaultValue: '',
                          name: '收款方户名',
                          attrId: '384858',
                          initialData: { type: 'static', value: '收款方户名' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'payeeAcctName',
                          ],
                          _idpath: ['123276', '688246', '384858'],
                        },
                        {
                          code: 'paymentAcctCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '账户方账号',
                          defaultValue: '',
                          name: '账户方账号',
                          attrId: '1897006',
                          initialData: { type: 'static', value: '账户方账号' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'paymentAcctCode',
                          ],
                          _idpath: ['123276', '688246', '1897006'],
                        },
                        {
                          code: 'paymentAcctName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '转账方户名',
                          defaultValue: '',
                          name: '转账方户名',
                          attrId: '512689',
                          initialData: { type: 'static', value: '转账方户名' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'paymentAcctName',
                          ],
                          _idpath: ['123276', '688246', '512689'],
                        },
                        {
                          code: 'paymentBankName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '转账方银行',
                          defaultValue: '',
                          name: '转账方银行',
                          attrId: '218978',
                          initialData: { type: 'static', value: '转账方银行' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'paymentBankName',
                          ],
                          _idpath: ['123276', '688246', '218978'],
                        },
                        {
                          code: 'postscript',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附言',
                          defaultValue: '',
                          name: '附言',
                          attrId: '467401',
                          initialData: { type: 'static', value: '附言' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'postscript',
                          ],
                          _idpath: ['123276', '688246', '467401'],
                        },
                        {
                          code: 'summary',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '摘要',
                          defaultValue: '',
                          name: '摘要',
                          attrId: '511544',
                          initialData: { type: 'static', value: '摘要' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'summary',
                          ],
                          _idpath: ['123276', '688246', '511544'],
                        },
                        {
                          code: 'tradeAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '交易金额（元）',
                          defaultValue: '',
                          name: '交易金额（元）',
                          attrId: '683951',
                          initialData: {
                            type: 'static',
                            value: '交易金额（元）',
                          },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'tradeAmount',
                          ],
                          _idpath: ['123276', '688246', '683951'],
                        },
                        {
                          code: 'tradeTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '交易时间',
                          defaultValue: '',
                          name: '交易时间',
                          attrId: '675922',
                          initialData: { type: 'static', value: '交易时间' },
                          parentKey: 'bankAccountList',
                          parentType: 'objectArray',
                          parentCode: 'bankAccountList',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'bankAccountList',
                            'tradeTime',
                          ],
                          _idpath: ['123276', '688246', '675922'],
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '688246',
                      initialData: { type: 'static' },
                      parentKey: 'customObject',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customObject', 'bankAccountList'],
                      _idpath: ['123276', '688246'],
                    },
                    {
                      code: 'invoice',
                      attrType: 'object',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'invoiceContextList',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'amountOutstanding',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '未平账金额（元）',
                              defaultValue: '',
                              name: '未平账金额（元）',
                              attrId: '909473',
                              initialData: {
                                type: 'static',
                                value: '未平账金额（元）',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'amountOutstanding',
                              ],
                              _idpath: ['123276', '662578', '494306', '909473'],
                            },
                            {
                              code: 'invoiceAmount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '发票金额（元）',
                              defaultValue: '',
                              name: '发票金额（元）',
                              attrId: '646411',
                              initialData: {
                                type: 'static',
                                value: '发票金额（元）',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoiceAmount',
                              ],
                              _idpath: ['123276', '662578', '494306', '646411'],
                            },
                            {
                              code: 'invoiceClerk',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '开票员',
                              defaultValue: '',
                              name: '开票员',
                              attrId: '06778',
                              initialData: { type: 'static', value: '开票员' },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoiceClerk',
                              ],
                              _idpath: ['123276', '662578', '494306', '06778'],
                            },
                            {
                              code: 'invoiceCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '发票编码',
                              defaultValue: '',
                              name: '发票编码',
                              attrId: '668342',
                              initialData: {
                                type: 'static',
                                value: '发票编码',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoiceCode',
                              ],
                              _idpath: ['123276', '662578', '494306', '668342'],
                            },
                            {
                              code: 'invoiceDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '开票时间',
                              defaultValue: '',
                              name: '开票时间',
                              attrId: '580475',
                              initialData: {
                                type: 'static',
                                value: '开票时间',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoiceDate',
                              ],
                              _idpath: ['123276', '662578', '494306', '580475'],
                            },
                            {
                              code: 'invoiceNumber',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '发票号码',
                              defaultValue: '',
                              name: '发票号码',
                              attrId: '774018',
                              initialData: {
                                type: 'static',
                                value: '发票号码',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoiceNumber',
                              ],
                              _idpath: ['123276', '662578', '494306', '774018'],
                            },
                            {
                              code: 'invoiceType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '发票类型',
                              defaultValue: '',
                              name: '发票类型',
                              attrId: '853912',
                              initialData: {
                                type: 'static',
                                value: '发票类型',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoiceType',
                              ],
                              _idpath: ['123276', '662578', '494306', '853912'],
                            },
                            {
                              code: 'invoicedAmount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '已开票金额（元）',
                              defaultValue: '',
                              name: '已开票金额（元）',
                              attrId: '784066',
                              initialData: {
                                type: 'static',
                                value: '已开票金额（元）',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'invoicedAmount',
                              ],
                              _idpath: ['123276', '662578', '494306', '784066'],
                            },
                            {
                              code: 'purchase',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '购买信息',
                              defaultValue: '',
                              name: '购买信息',
                              attrId: '38791',
                              initialData: {
                                type: 'static',
                                value: '购买信息',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'purchase',
                              ],
                              _idpath: ['123276', '662578', '494306', '38791'],
                            },
                            {
                              code: 'redAccountAmount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '本次平账金额（元）',
                              defaultValue: '',
                              name: '本次平账金额（元）',
                              attrId: '4749197',
                              initialData: {
                                type: 'static',
                                value: '本次平账金额（元）',
                              },
                              parentKey: 'invoiceContextList',
                              parentType: 'objectArray',
                              parentCode: 'invoiceContextList',
                              showInput: false,
                              _codePath: [
                                'customObject',
                                'invoice',
                                'invoiceContextList',
                                'redAccountAmount',
                              ],
                              _idpath: [
                                '123276',
                                '662578',
                                '494306',
                                '4749197',
                              ],
                            },
                          ],
                          name: '',
                          type: 'objectArray',
                          attrId: '494306',
                          initialData: { type: 'static' },
                          parentKey: 'invoice',
                          parentType: 'object',
                          showInput: true,
                          _codePath: [
                            'customObject',
                            'invoice',
                            'invoiceContextList',
                          ],
                          _idpath: ['123276', '662578', '494306'],
                        },
                        {
                          code: 'totalAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '本次合计平账金额（元）A',
                          defaultValue: '',
                          name: '本次合计平账金额（元）A',
                          attrId: '396239',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'invoice',
                          parentType: 'object',
                          showInput: true,
                          _codePath: ['customObject', 'invoice', 'totalAmount'],
                          _idpath: ['123276', '662578', '396239'],
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '662578',
                      initialData: { type: 'static' },
                      parentKey: 'customObject',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customObject', 'invoice'],
                      _idpath: ['123276', '662578'],
                    },
                    {
                      code: 'reminder',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'contactPhone',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '联系电话',
                          defaultValue: '',
                          name: '联系电话',
                          attrId: '7801675',
                          initialData: { type: 'static', value: '联系电话' },
                          parentKey: 'reminder',
                          parentType: 'objectArray',
                          parentCode: 'reminder',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'reminder',
                            'contactPhone',
                          ],
                          _idpath: ['123276', '1428303', '7801675'],
                        },
                        {
                          code: 'paymentAcctCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '转账方账号',
                          defaultValue: '',
                          name: '转账方账号',
                          attrId: '752673',
                          initialData: { type: 'static', value: '转账方账号' },
                          parentKey: 'reminder',
                          parentType: 'objectArray',
                          parentCode: 'reminder',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'reminder',
                            'paymentAcctCode',
                          ],
                          _idpath: ['123276', '1428303', '752673'],
                        },
                        {
                          code: 'paymentAcctName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '转账方户名',
                          defaultValue: '',
                          name: '转账方户名',
                          attrId: '9751515',
                          initialData: { type: 'static', value: '转账方户名' },
                          parentKey: 'reminder',
                          parentType: 'objectArray',
                          parentCode: 'reminder',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'reminder',
                            'paymentAcctName',
                          ],
                          _idpath: ['123276', '1428303', '9751515'],
                        },
                        {
                          code: 'paymentBankName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '转账方银行',
                          defaultValue: '',
                          name: '转账方银行',
                          attrId: '6703021',
                          initialData: { type: 'static', value: '转账方银行' },
                          parentKey: 'reminder',
                          parentType: 'objectArray',
                          parentCode: 'reminder',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'reminder',
                            'paymentBankName',
                          ],
                          _idpath: ['123276', '1428303', '6703021'],
                        },
                        {
                          code: 'remindObject',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '提醒方',
                          defaultValue: '',
                          name: '提醒方',
                          attrId: '047058',
                          initialData: { type: 'static', value: '提醒方' },
                          parentKey: 'reminder',
                          parentType: 'objectArray',
                          parentCode: 'reminder',
                          showInput: false,
                          _codePath: [
                            'customObject',
                            'reminder',
                            'remindObject',
                          ],
                          _idpath: ['123276', '1428303', '047058'],
                        },
                        {
                          code: 'reminder',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '资金变动提醒人',
                          defaultValue: '',
                          name: '资金变动提醒人',
                          attrId: '350628',
                          initialData: {
                            type: 'static',
                            value: '资金变动提醒人',
                          },
                          parentKey: 'reminder',
                          parentType: 'objectArray',
                          parentCode: 'reminder',
                          showInput: false,
                          _codePath: ['customObject', 'reminder', 'reminder'],
                          _idpath: ['123276', '1428303', '350628'],
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '1428303',
                      initialData: { type: 'static' },
                      parentKey: 'customObject',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customObject', 'reminder'],
                      _idpath: ['123276', '1428303'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '123276',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['customObject'],
                  _idpath: ['123276'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 4,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 167757733656872930,
                shielding: true,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '058669',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditOrderPrepare',
                },
                line_number: 5,
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
    eventDataapiRequest246.params = [] || [];
    CMDGenerator(eventDataapiRequest246, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest247: any = [
      {
        type: 'apiRequest',
        dataId: 170417951998039460,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '047243',
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
                  id: 'root.header',
                  dataKey: '047243_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '047243_root.path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '047243_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
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
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '047243_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
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
                      id: 'root.body.attrCode',
                      dataKey: '047243_root.body.attrCode',
                      value: { type: ['customize'], code: 'channelReportType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '047243_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '047243_root',
            },
          ],
          actionTitle: '',
        },
        line_number: 6,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170417954349466600,
            options: {
              compId: 'Select_205718',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '2809453',
              data: '$reply_047243?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest247.params = [] || [];
    CMDGenerator(eventDataapiRequest247, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse135: any = [
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
        line_number: 8,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;console.log("itemList:",item);var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){if(attrList[i].attrValueDesc!=undefined&&""!=attrList[i].attrValueDesc){factorForm[attrList[i].attrCode]=attrList[i].attrValueDesc}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;console.log("factorForm:",data.factorForm);success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 9,
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
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['agentName'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '65306653',
                      code: 'devStaffName',
                      name: '发展人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['devStaffName'],
                      _idpath: ['65306653'],
                    },
                    {
                      attrId: '183177',
                      code: 'devStaffMobile',
                      name: '发展人手机号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['devStaffMobile'],
                      _idpath: ['183177'],
                    },
                    {
                      attrId: '981621',
                      code: 'oppCode',
                      name: '商机编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['oppCode'],
                      _idpath: ['981621'],
                    },
                    {
                      attrId: '932317',
                      code: 'oppName',
                      name: '商机名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['oppName'],
                      _idpath: ['932317'],
                    },
                    {
                      attrId: '2715976',
                      code: 'saveDays',
                      name: '申请保护天数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['saveDays'],
                      _idpath: ['2715976'],
                    },
                    {
                      attrId: '168205',
                      code: 'busiName',
                      name: '业务名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiName'],
                      _idpath: ['168205'],
                    },
                    {
                      attrId: '54712',
                      code: 'oppDesc',
                      name: '商机描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['oppDesc'],
                      _idpath: ['54712'],
                    },
                    {
                      attrId: '055928',
                      code: 'closeRatio',
                      name: '渠道费用结算比例',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['closeRatio'],
                      _idpath: ['055928'],
                    },
                    {
                      attrId: '8561964',
                      code: 'channelReportType',
                      name: '渠道调机报备类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['channelReportType'],
                      _idpath: ['8561964'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 10,
                callback1: [],
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
                line_number: 11,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$urlParam.scene$',
                  operate: '!=',
                  manualValue: 'V',
                },
                condId: '463816',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167746575467397950,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167747864933663460,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167747865107203680,
                    children: [],
                    todoOptions: ['disabled', 'selectComp'],
                    options: {
                      compId: ['Form_412511_107682_5442757'],
                      compName: 'page',
                      id: '251379',
                      pageJsonId: '537892',
                      disabled: 'toggle',
                      compid: ['Form_412511_107682_5442757'],
                    },
                    actionObjId: 'sysSetDisable',
                    actionObjName: 'page',
                    value: 'sysSetDisable',
                    line_number: 14,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'sysSetDisable',
                    dataId: 167747865107203680,
                    options: {
                      compId: ['Form_412511_107682_5442757'],
                      compName: 'page',
                      id: '251379',
                      pageJsonId: '537892',
                      disabled: 'toggle',
                      compid: ['Form_412511_107682_5442757'],
                    },
                    line_number: 14,
                  },
                ],
              },
            ],
            line_number: 12,
            callback1: [
              {
                type: 'sysSetDisable',
                dataId: 167746580237417250,
                options: {
                  compId: [
                    'Input_agentName_3824789',
                    'Input_devStaffName_706314',
                    'Input_agentCode_737854',
                    'Input_devStaffMobile_991173',
                    'Input_oppCode_845324',
                    'Input_oppName_4473983',
                    'Input_saveDays_8086668',
                    'Input_busiName_739216',
                    'Input_oppDesc_267495',
                    'Select_205718',
                  ],
                  compName: 'page',
                  id: '657291',
                  pageJsonId: '537892',
                  disabled: 'toggle',
                  compid: [
                    'Input_agentName_3824789',
                    'Input_devStaffName_706314',
                    'Input_agentCode_737854',
                    'Input_devStaffMobile_991173',
                    'Input_oppCode_845324',
                    'Input_oppName_4473983',
                    'Input_saveDays_8086668',
                    'Input_busiName_739216',
                    'Input_oppDesc_267495',
                    'Select_205718',
                  ],
                },
                line_number: 13,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse135.params = [] || [];
    CMDGenerator(eventDataifelse135, {}, 'ifelse', {
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_660616')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'渠道商机报备'}
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
          ref={(r: any) => refs.setComponentRef(r, 'Divider_719552_00105')}
          {...injectData}
        />
        <View
          className="View_View_6806553_5539646"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_5539646')}
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_688965')
            }
            {...injectData}
          >
            <View
              className="View_View_339406_115985"
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
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_115985')}
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
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_1929847_738917_68642_7960323',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'渠道商机报备'}
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
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_949332_8499233"
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_949332_8499233')
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
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_0235518_772568_273065_514098',
                    )
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
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource121: any = [
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
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'agentName',
                      },
                      showInput: true,
                      _codePath: ['agentName'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '359926',
                      code: 'agentCode',
                      name: '代理商编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'agentCode',
                      },
                      _deletable: true,
                    },
                    {
                      attrId: '65306653',
                      code: 'devStaffName',
                      name: '发展人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'devStaffName',
                      },
                      showInput: true,
                      _codePath: ['devStaffName'],
                      _idpath: ['65306653'],
                    },
                    {
                      attrId: '183177',
                      code: 'devStaffMobile',
                      name: '发展人手机号',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'devStaffMobile',
                      },
                      showInput: true,
                      _codePath: ['devStaffMobile'],
                      _idpath: ['183177'],
                    },
                    {
                      attrId: '981621',
                      code: 'oppCode',
                      name: '商机编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'oppCode',
                      },
                      showInput: true,
                      _codePath: ['oppCode'],
                      _idpath: ['981621'],
                    },
                    {
                      attrId: '932317',
                      code: 'oppName',
                      name: '商机名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'oppName',
                      },
                      showInput: true,
                      _codePath: ['oppName'],
                      _idpath: ['932317'],
                    },
                    {
                      attrId: '2715976',
                      code: 'saveDays',
                      name: '申请保护天数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'saveDays',
                      },
                      showInput: true,
                      _codePath: ['saveDays'],
                      _idpath: ['2715976'],
                    },
                    {
                      attrId: '168205',
                      code: 'busiName',
                      name: '业务名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'busiName',
                      },
                      showInput: true,
                      _codePath: ['busiName'],
                      _idpath: ['168205'],
                    },
                    {
                      attrId: '54712',
                      code: 'oppDesc',
                      name: '商机描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'oppDesc',
                      },
                      showInput: true,
                      _codePath: ['oppDesc'],
                      _idpath: ['54712'],
                    },
                    {
                      attrId: '055928',
                      code: 'closeRatio',
                      name: '渠道费用结算比例',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'closeRatio',
                      },
                      showInput: true,
                      _codePath: ['closeRatio'],
                      _idpath: ['055928'],
                    },
                    {
                      attrId: '8561964',
                      code: 'channelReportType',
                      name: '渠道调机报备类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['channelReportType'],
                      _idpath: ['8561964'],
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167748459764841660,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '071766',
                      pageJsonId: '537892',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168664267274787870,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '696035',
                          pageJsonId: '537892',
                          value: ['子页面表单=========', '$data.sceneSubmit$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'callParentCustomFunc',
                        dataId: 167748459764887870,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '866774',
                          pageJsonId: '537892',
                          pathname: '/commonAuditOrder',
                          pageId: '872682457815691264',
                          customFuncName: 'getFactor',
                          customFuncParams: '$data.sceneSubmit$',
                          modalPath: '/commonAuditOrder',
                        },
                        line_number: 4,
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
            eventDatasetDataSource121.params = [] || [];
            CMDGenerator(eventDatasetDataSource121, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Form_412511_107682_5442757')
          }
          {...injectData}
        >
          <Select
            name={'渠道调机报备类型'}
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
            formItemIndex={0}
            fieldName={'channelReportType'}
            value={data?.factorForm?.channelReportType}
            $$componentItem={{
              id: 'Select_205718',
              uid: 'Select_205718',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_205718')}
            {...injectData}
          />
          <Input
            name={'代理商名称'}
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
            fieldName={'agentName'}
            value={data?.factorForm?.agentName}
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
              id: 'Input_agentName_3824789',
              uid: 'Input_agentName_3824789',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_agentName_3824789')}
            {...injectData}
          />
          <Input
            name={'代理商编码'}
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
            fieldName={'agentCode'}
            value={data?.factorForm?.agentCode}
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
              id: 'Input_agentCode_737854',
              uid: 'Input_agentCode_737854',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_agentCode_737854')}
            {...injectData}
          />
          <Input
            name={'发展人姓名'}
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
            fieldName={'devStaffName'}
            value={data?.factorForm?.devStaffName}
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
              id: 'Input_devStaffName_706314',
              uid: 'Input_devStaffName_706314',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_devStaffName_706314')
            }
            {...injectData}
          />
          <Input
            name={'发展人手机号'}
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
            fieldName={'devStaffMobile'}
            value={data?.factorForm?.devStaffMobile}
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
              id: 'Input_devStaffMobile_991173',
              uid: 'Input_devStaffMobile_991173',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_devStaffMobile_991173')
            }
            {...injectData}
          />
          <Input
            name={'商机编码'}
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
            fieldName={'oppCode'}
            value={data?.factorForm?.oppCode}
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
              id: 'Input_oppCode_845324',
              uid: 'Input_oppCode_845324',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_oppCode_845324')}
            {...injectData}
          />
          <Input
            name={'商机名称'}
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
            fieldName={'oppName'}
            value={data?.factorForm?.oppName}
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
              id: 'Input_oppName_4473983',
              uid: 'Input_oppName_4473983',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_oppName_4473983')}
            {...injectData}
          />
          <Input
            name={'申请保护天数'}
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
            fieldName={'saveDays'}
            value={data?.factorForm?.saveDays}
            formItemIndex={7}
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
              id: 'Input_saveDays_8086668',
              uid: 'Input_saveDays_8086668',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_saveDays_8086668')}
            {...injectData}
          />
          <Input
            name={'业务名称'}
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
            fieldName={'busiName'}
            value={data?.factorForm?.busiName}
            formItemIndex={8}
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
              id: 'Input_busiName_739216',
              uid: 'Input_busiName_739216',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_busiName_739216')}
            {...injectData}
          />
          <Input
            name={'渠道费用结算比例'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'%'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            fieldName={'closeRatio'}
            value={data?.factorForm?.closeRatio}
            formItemIndex={9}
            regexp={[
              {
                id: '531857',
                title: '按钮1',
                iconPos: 'left',
                regexpType: 2,
                message: '结算比例范围:0~100',
                pattern:
                  '/^\\d\\.([1-9]{1,2}|[0-9][1-9])$|^[1-9]\\d{0,1}(\\.\\d{1,2}){0,1}$|^100(\\.0{1,2}){0,1}$/',
              },
            ]}
            defaultValue={'50'}
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
              id: 'Input_closeRatio_693466',
              uid: 'Input_closeRatio_693466',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_closeRatio_693466')}
            {...injectData}
          />
          <TextArea
            name={'商机描述'}
            selfSpan={24}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            fieldName={'oppDesc'}
            value={data?.factorForm?.oppDesc}
            formItemIndex={10}
            $$componentItem={{
              id: 'Input_oppDesc_267495',
              uid: 'Input_oppDesc_267495',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_oppDesc_267495')}
            {...injectData}
          />
        </Form>
        <View
          className="View_View_4949093_161044"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093_161044')}
          {...injectData}
        >
          <BusiComp0521965
            pageId={pageId}
            busiCompId={'922396081753948160'}
            name={'附件'}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '10px 0px 12px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_890419')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsTy_0001_0004$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
