// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1046254072908066816';
const NetworkAcrossProvincecopycopy$$Modal: React.FC<PageProps> = ({
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
  const calculEndDiscount = (options_152622: any) => {
    const eventDatagetValue70: any = [
      {
        type: 'getValue',
        dataId: 169874037517348930,
        options: {
          compId: 'Input_022401',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '176062',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 169874037887192130,
            options: {
              compId: 'Input_241407',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '167767',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '3877934',
                    options: { context: '$value_167767$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_176062$', operate: 'notEmpty' },
                    condId: '3292987',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169874038231717950,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169874040846774940,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '473218',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var price=parseFloat(value_167767)*10/parseFloat(value_176062);var discount=price.toFixed(3);success(discount)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 169874040846814460,
                        options: {
                          compId: [],
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '411621',
                          value: '$data_473218$',
                          valueList: {
                            Input_lastDiscount_72621: '$data_473218$',
                          },
                          compid: [],
                        },
                        line_number: 5,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 169874040846851460,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '285025',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '982351',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$data_473218$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '500349',
                              code: 'crmAreaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2669222',
                              code: 'crmJoinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7134342',
                              code: 'crmAreaTypeName',
                              name: '区域类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '707421',
                              code: 'crmJoinWayName',
                              name: '接入方式名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '007759',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '628577',
                              code: 'row',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '865421',
                              code: 'receiptsPriceSum',
                              name: '总实收价（元）',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '933879',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 6,
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
      },
    ];
    eventDatagetValue70.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue70, { options_152622 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculPrice = (options_4731497: any) => {
    const eventDatagetValue71: any = [
      {
        type: 'getValue',
        dataId: 169874017409680060,
        options: {
          compId: 'Select_371996',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '9646177',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '101459',
                options: { context: '$value_9646177$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169874020600458780,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169874020600528260,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '295169',
                  pageJsonId: '8430824',
                  actionTitle: '获取标准价格',
                  code: 'function main(data,state,success,fail){var result=null;console.log("\\u8D44\\u8D39\\u7ED3\\u679C\\u5217\\u8868",data.groupLineRateData);for(var i=0;i<data.groupLineRateData.groupLineRateInfo.length;++i){var groupInfo=data.groupLineRateData.groupLineRateInfo[i];if(groupInfo.lineTypeName=="\\u957F\\u9014"&&groupInfo.bandWidth==value_9646177){result=parseFloat(groupInfo.linePrice)/1000;break}}success(result==null?null:result)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '25599',
                        options: { context: '$data_295169$', operate: 'empty' },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169874020600532200,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169874020600530660,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169874020600578460,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 169874020600515170,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                            ],
                            todoOptions: ['compId', 'valueList'],
                            options: {
                              compId: ['Input_241407'],
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '359514',
                              valueList: { Input_241407: '$data_295169$' },
                              compid: ['Input_241407'],
                            },
                            actionObjId: 'Input_standardPrice_89896',
                            actionObjName: 'Input',
                            value: 'setValue',
                            compLib: 'comm',
                            line_number: 6,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874020600562940,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 169874020600512350,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 169874020600592350,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '777278',
                              pageJsonId: '8430824',
                              customFuncName: 'calculEndDiscount',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            line_number: 7,
                          },
                        ],
                        condition: [],
                        callback: [
                          {
                            type: 'setValue',
                            dataId: 169874020600578460,
                            options: {
                              compId: ['Input_241407'],
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '359514',
                              valueList: { Input_241407: '$data_295169$' },
                              compid: ['Input_241407'],
                            },
                            line_number: 6,
                            callback1: [],
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 169874020600562940,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '777278',
                              pageJsonId: '8430824',
                              customFuncName: 'calculEndDiscount',
                            },
                            line_number: 7,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'clearValue',
                        dataId: 169874025963449860,
                        options: {
                          compId: 'Input_241407',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '850766',
                        },
                        line_number: 5,
                      },
                    ],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 169874020600568640,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '0526987',
                      pageJsonId: '8430824',
                      dataSourceId: 166452624216490180,
                      dataSourceName: 'feeInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '982351',
                          code: 'busiType',
                          name: '业务类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '674311',
                          code: 'standardPrice',
                          name: '标准价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$data_295169$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '384707',
                          code: 'receiptsPrice',
                          name: '实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '7058047',
                          code: 'bandwidth',
                          name: '带宽',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '323129',
                          code: 'ipv6GiveNum',
                          name: 'IPv6赠送数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '535103',
                          code: 'ipv4GiveNum',
                          name: 'IPv4赠送数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '547733',
                          code: 'ipv6DemandNum',
                          name: 'IPv6需求数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '8454034',
                          code: 'ipv4DemandNum',
                          name: 'IPv4需求数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '618242',
                          code: 'ipv6BeyondSel',
                          name: 'IPv6超出选择',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '167631',
                          code: 'ipv4BeyondNum',
                          name: 'IPv4超出个数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '1633704',
                          code: 'ipv6BeyondCost',
                          name: 'IPv6超出费用',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '841439',
                          code: 'ipv4BeyondCount',
                          name: 'IPv4元/月/个',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '755452',
                          code: 'unitPrice',
                          name: '单价（元/G）',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '546822',
                          code: 'lastDiscount',
                          name: '最终折扣',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '359579',
                          code: 'market',
                          name: '营销案',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '122027',
                          code: 'busiTypeName',
                          name: '业务类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '500349',
                          code: 'areaType',
                          name: '区域类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '2669222',
                          code: 'joinWay',
                          name: '接入方式',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '8788325',
                          code: 'bandwidthUp',
                          name: '上行宽带',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '155411',
                          code: 'bandwidthDown',
                          name: '下行宽带',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '568368',
                          code: 'bandwidthPort',
                          name: 'SDWAN端口带宽',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '2474105',
                          code: 'singleUseFee',
                          name: '一次性费用',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '937028',
                          code: 'portFee',
                          name: '端口费',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '214875',
                          code: 'ipv6BeyondNum',
                          name: 'IPv6超出个数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '198626',
                          code: 'ipv6BeyondCount',
                          name: 'IPv6元/月/个',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '300842',
                          code: 'standardPriceSdWan',
                          name: 'SDWAN标准价格',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '39146',
                          code: 'receiptsPriceSdWan',
                          name: 'SDWAN实收价格',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '684821',
                          code: 'rowId',
                          name: '行id',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '7134342',
                          code: 'areaTypeName',
                          name: '区域类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '1659093',
                          code: 'bandwidthName',
                          name: '带宽名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '707421',
                          code: 'joinWayName',
                          name: '接入方式名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '007759',
                          code: 'marketList',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '628577',
                          code: 'row',
                          name: '条数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '865421',
                          code: 'receiptsPriceSum',
                          name: '总实收价（元）',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '933879',
                          code: 'marketName',
                          name: '营销案名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 8,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 169874020600597120,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '7974216',
                      pageJsonId: '8430824',
                      value: ['$data_295169$'],
                    },
                    line_number: 9,
                  },
                ],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 169874020600580580,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '987016',
                  pageJsonId: '8430824',
                  value: [
                    '===带宽===',
                    '$value_483814$',
                    '===区域类型====',
                    '$value_074724$',
                  ],
                },
                line_number: 10,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue71.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue71, { options_4731497 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculReceiptsPriceSum = (options_57729: any) => {
    const eventDatagetValue72: any = [
      {
        type: 'getValue',
        dataId: 167117516622405730,
        options: {
          compId: 'Input_7982073',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '215793',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 167117695720736960,
            options: {
              compId: 'Input_receiptsPrice_488443',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '8127602',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '36393',
                    options: { context: '$value_215793$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_8127602$',
                      operate: 'notEmpty',
                    },
                    condId: '0500753',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167117697523337540,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167117697523362080,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '831228',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var sum=value_8127602*parseInt(value_215793);sum=sum.toFixed(2);success(sum)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 167117697523339360,
                        options: {
                          compId: 'Input_973149',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '3149405',
                          valueList: { Input_973149: '$data_831228$' },
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
          },
        ],
      },
    ];
    eventDatagetValue72.params =
      [
        { title: '事件入参', name: 'options_57729', value: '$options_57729$' },
      ] || [];
    CMDGenerator(eventDatagetValue72, { options_57729 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    calculEndDiscount,
    calculPrice,
    calculReceiptsPriceSum,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm40: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166538297886250000,
        options: {
          compId: 'Form_981467',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Form',
          id: '1304908',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166970476803635360,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '15891',
              pageJsonId: '8430824',
              dataSourceId: 166452624216490180,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupId',
                  name: '属性',
                  type: 'string',
                  attrId: '2235443',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'groupId',
                  },
                },
                {
                  code: 'homeCityName',
                  name: '属性',
                  type: 'string',
                  attrId: '917574',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'homeCityName',
                  },
                },
                {
                  code: 'homeCountyName',
                  name: '属性',
                  type: 'string',
                  attrId: '4711633',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'homeCountyName',
                  },
                },
                {
                  code: 'groupName',
                  name: '属性',
                  type: 'string',
                  attrId: '6122937',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'groupName',
                  },
                },
                {
                  code: 'statusName',
                  name: '属性',
                  type: 'string',
                  attrId: '312967',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'statusName',
                  },
                },
                {
                  code: 'createTime',
                  name: '属性',
                  type: 'string',
                  attrId: '465875',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'createTime',
                  },
                },
                {
                  code: 'tradeclassTopName',
                  name: '属性',
                  type: 'string',
                  attrId: '042161',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'tradeclassTopName',
                  },
                },
                {
                  code: 'tradeclassName',
                  name: '属性',
                  type: 'string',
                  attrId: '666906',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'tradeclassName',
                  },
                },
                {
                  code: 'orgTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '598093',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'orgTypeName',
                  },
                },
                {
                  code: 'gridName',
                  name: '属性',
                  type: 'string',
                  attrId: '920177',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'gridName',
                  },
                },
                {
                  code: 'gridId',
                  name: '属性',
                  type: 'string',
                  attrId: '022697',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'gridId',
                  },
                },
                {
                  code: 'brokerId',
                  name: '属性',
                  type: 'string',
                  attrId: '2322123',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'brokerId',
                  },
                },
                {
                  code: 'brokerTel',
                  name: '属性',
                  type: 'string',
                  attrId: '160252',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'brokerTel',
                  },
                },
                {
                  code: 'brokerName',
                  name: '属性',
                  type: 'string',
                  attrId: '643626',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'brokerName',
                  },
                },
                {
                  code: 'valueLevelName',
                  name: '属性',
                  type: 'string',
                  attrId: '924002',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'valueLevelName',
                  },
                },
                {
                  code: 'planValueLevelName',
                  name: '属性',
                  type: 'string',
                  attrId: '9223028',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'planValueLevelName',
                  },
                },
                {
                  code: 'enterpriseKindName',
                  name: '属性',
                  type: 'string',
                  attrId: '399162',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'enterpriseKindName',
                  },
                },
                {
                  code: 'totalUser',
                  name: '属性',
                  type: 'string',
                  attrId: '608797',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'totalUser',
                  },
                },
                {
                  code: 'otherReason',
                  name: '属性',
                  type: 'string',
                  attrId: '5992162',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'otherReason',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169882738368567040,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '947169',
                  pageJsonId: '8430824',
                  actionTitle: '',
                  code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}success(data.feeInfo)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 169882738368575400,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '337774',
                      pageJsonId: '8430824',
                      params: '$data_947169$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 169882738368558620,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '5291476',
                      pageJsonId: '8430824',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'console',
                    dataId: 169882965076609540,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '169952',
                      pageJsonId: '8430824',
                      value: ['====点击确认===', '$data_947169$'],
                    },
                    line_number: 6,
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
    ];
    eventDatavalidateCurrentForm40.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm40, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal38: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal38.params = [] || [];
    CMDGenerator(eventDatacloseModal38, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    const eventDataapiRequest315: any = [
      {
        type: 'apiRequest',
        dataId: 166530115300733630,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '14766',
          pageJsonId: '8430824',
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
                  dataKey: '14766_root.header',
                  key: '0-0',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '14766_root.path',
                  key: '0-1',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '14766_root.query',
                  key: '0-2',
                  parentType: 'object',
                  parentKey: '0',
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
                      dataKey: '14766_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
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
                      dataKey: '14766_root.body.attrCode',
                      value: { type: ['customize'], code: 'valueLevel' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '14766_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '14766_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170122552205545300,
            options: {
              compId: 'Input_40462',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '762625',
              data: '$reply_14766?.resultData$',
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
    eventDataapiRequest315.params = [] || [];
    CMDGenerator(eventDataapiRequest315, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest316: any = [
      {
        type: 'apiRequest',
        dataId: 167386111804767330,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '59266',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryGroupLineRate',
          _apiCode: 'queryGroupLineRate',
          _source: 'rhin',
          _serviceId: '929637906224861184',
          _serviceTitle: '查询专线资费信息: queryGroupLineRate',
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
              dataKey: '1449723_header',
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
              dataKey: '1449723_path',
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
              dataKey: '1449723_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'bandWidth',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.bandWidth',
                  compType: 'Input',
                  name: 'bandWidth',
                  parents: ['body'],
                  id: 'body.bandWidth',
                  dataKey: '1449723_body.bandWidth',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
                {
                  code: 'lineType',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.lineType',
                  compType: 'Input',
                  name: 'lineType',
                  parents: ['body'],
                  id: 'body.lineType',
                  dataKey: '1449723_body.lineType',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'productId',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.productId',
                  compType: 'Input',
                  name: 'productId',
                  parents: ['body'],
                  id: 'body.productId',
                  dataKey: '1449723_body.productId',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-2',
                },
                {
                  code: 'status',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.status',
                  compType: 'Input',
                  name: 'status',
                  parents: ['body'],
                  id: 'body.status',
                  dataKey: '1449723_body.status',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-3',
                },
                {
                  code: 'transferMode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.transferMode',
                  compType: 'Input',
                  name: 'transferMode',
                  parents: ['body'],
                  id: 'body.transferMode',
                  dataKey: '1449723_body.transferMode',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-4',
                },
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
                  dataKey: '1449723_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-5',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1449723_body',
              key: '3',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '487137',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_59266.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_59266.resultData.groupLineRateInfo$',
                  operate: 'notEmpty',
                },
                condId: '202022',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167386111804755400,
            elseIfs: [],
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167386111804754340,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '6082486',
                  pageJsonId: '8430824',
                  dataSourceId: 167386192810503330,
                  dataSourceName: 'groupLineRateData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'groupLineRateInfo',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'bandWidth',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '2277785',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'configTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '20220417155847',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9507814',
                          initialData: {
                            type: 'static',
                            value: '20220417155847',
                          },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'portPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9667206',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'productId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '3367',
                          defaultValue: '',
                          name: '属性',
                          attrId: '826875',
                          initialData: { type: 'static', value: '3367' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'linePrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '200000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '187683',
                          initialData: { type: 'static', value: '200000' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '931143',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '10000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '75759',
                          initialData: { type: 'static', value: '10000' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'lineTypeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '452798',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'lowDiscount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '35',
                          defaultValue: '',
                          name: '属性',
                          attrId: '4721867',
                          initialData: { type: 'static', value: '35' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'configOperator',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1010112',
                          defaultValue: '',
                          name: '属性',
                          attrId: '6707121',
                          initialData: { type: 'static', value: '1010112' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'transferModeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: 'SDH',
                          defaultValue: '',
                          name: '属性',
                          attrId: '2835261',
                          initialData: { type: 'static', value: 'SDH' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'bandWidthName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '2M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '5988504',
                          initialData: { type: 'static', value: '2M' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipv6Price',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '65242',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipv6Amount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '0845926',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'lineType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '732054',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'transferMode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '546357',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'name',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '集团商务快线套餐',
                          defaultValue: '',
                          name: '属性',
                          attrId: '65596893',
                          initialData: {
                            type: 'static',
                            value: '集团商务快线套餐',
                          },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'statusName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '生效',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9581325',
                          initialData: { type: 'static', value: '生效' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'status',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '0',
                          defaultValue: '',
                          name: '属性',
                          attrId: '655548',
                          initialData: { type: 'static', value: '0' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'bandWidthDown',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9724986',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'bandWidthDownName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '2M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '0691144',
                          initialData: { type: 'static', value: '2M' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '204327',
                      initialData: { type: 'static' },
                      parentKey: '1',
                      parentType: 'object',
                      value: {
                        type: ['context', '$reply_59266$'],
                        code: 'resultData.groupLineRateInfo',
                        hideAttr: false,
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {
                    groupLineRateInfo: {
                      newData: '$reply_59266.resultData.groupLineRateInfo$',
                      operateType: 3,
                      onlySetPatch: true,
                    },
                  },
                },
                line_number: 5,
                callback1: [],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167533850158242880,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '835625',
                  pageJsonId: '8430824',
                  actionTitle: '区域类型',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.lineType==""||groupInfo.lineType==null){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].lineType==groupInfo.lineType){flag=false;break}}if(flag){console.log("\\u533A\\u57DF\\u7C7B\\u578B",groupInfo);lanList.push(groupInfo)}}success(lanList)};',
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167533887058808960,
                    shielding: true,
                    options: {
                      compId: 'Input_areaType_945066',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '382892',
                      labelKey: 'lineTypeName',
                      valueKey: 'lineType',
                      data: '$data_835625$',
                    },
                    line_number: 7,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167534197747662560,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '138771',
                  pageJsonId: '8430824',
                  actionTitle: '带宽',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.bandWidth==null||groupInfo.bandWidth==""){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].bandWidth==groupInfo.bandWidth){flag=false;break}}if(flag){lanList.push(groupInfo)}}for(var _i=0;_i<lanList.length;++_i){for(var _j=_i+1;_j<lanList.length;++_j){var bandWidthCompara=-1;if(lanList[_j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(lanList[_j].bandWidthName.split("M")[0])}else if(lanList[_j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(lanList[_j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(lanList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(lanList[_i].bandWidthName.split("M")[0])}else if(lanList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(lanList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=lanList[_i];lanList[_i]=lanList[_j];lanList[_j]=temp}}}success(lanList)};',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 169882764541661300,
                    shielding: true,
                    options: {
                      compId: 'Input_684602',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '0892368',
                      data: '$data_138771$',
                      labelKey: 'bandWidthName',
                      valueKey: 'bandWidth',
                    },
                    line_number: 9,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167534282301105760,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '473022',
                  pageJsonId: '8430824',
                  actionTitle: '接入方式',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.transferMode==null||groupInfo.transferMode==""){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].transferMode==groupInfo.transferMode){flag=false;break}}if(flag){lanList.push(groupInfo)}}success(lanList)};',
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 169866308146306720,
                    shielding: true,
                    options: {
                      compId: 'Input_areaType_945066',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '060288',
                      labelKey: 'transferModeName',
                      valueKey: 'transferMode',
                      data: '$data_473022$',
                    },
                    line_number: 11,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest316.params = [] || [];
    CMDGenerator(eventDataapiRequest316, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse171: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '452131',
            options: { context: '$state.feeInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167386144145118720,
        elseIfs: [],
        line_number: 12,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169874448059282180,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '546527',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){data.feeInfo=state.feeInfo;success()};',
            },
            line_number: 13,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse171.params = [] || [];
    CMDGenerator(eventDataifelse171, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169874609006342900
    console.log(state?.feeInfo);
    const eventDataifelse172: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '074357',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.isDetails$',
              operate: '==',
              manualValue: 'true',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170116570746662300,
        elseIfs: [],
        line_number: 15,
        callback1: [
          {
            type: 'sysSetDisable',
            dataId: 170116570746693440,
            options: {
              compId: ['Form_981467', 'Form_492914'],
              compName: 'page',
              id: '459808',
              pageJsonId: '8430824',
              disabled: 'true',
              compid: ['Form_981467', 'Form_492914'],
            },
            line_number: 16,
          },
        ],
      },
    ];
    eventDataifelse172.params = [] || [];
    CMDGenerator(eventDataifelse172, {}, 'ifelse', {
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
      className="__CustomClass_8430824__"
    >
      <View
        className="View_View_8430824_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_8430824_1',
          uid: 'View_8430824_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_8430824_1')}
        {...injectData}
      >
        <View
          className="View_View_917911"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911',
            uid: 'View_917911',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_917911')}
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
            formCode={'Form_1354964'}
            fieldName={'$dataform'}
            relationDataSource={data?.$dataform}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_492914',
              uid: 'Form_492914',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource140: any = [
                {
                  type: 'setDataSource',
                  dataId: 169882091249055800,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '2770386',
                    pageJsonId: '533858',
                    dataSourceId: 166452624216490180,
                    dataSourceName: 'feeInfo',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        code: 'groupId',
                        name: '属性',
                        type: 'string',
                        attrId: '2235443',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'groupId',
                        },
                      },
                      {
                        code: 'homeCityName',
                        name: '属性',
                        type: 'string',
                        attrId: '917574',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'homeCityName',
                        },
                      },
                      {
                        code: 'homeCountyName',
                        name: '属性',
                        type: 'string',
                        attrId: '4711633',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'homeCountyName',
                        },
                      },
                      {
                        code: 'groupName',
                        name: '属性',
                        type: 'string',
                        attrId: '6122937',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'groupName',
                        },
                      },
                      {
                        code: 'statusName',
                        name: '属性',
                        type: 'string',
                        attrId: '312967',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'statusName',
                        },
                      },
                      {
                        code: 'createTime',
                        name: '属性',
                        type: 'string',
                        attrId: '465875',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'createTime',
                        },
                      },
                      {
                        code: 'tradeclassTopName',
                        name: '属性',
                        type: 'string',
                        attrId: '042161',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'tradeclassTopName',
                        },
                      },
                      {
                        code: 'tradeclassName',
                        name: '属性',
                        type: 'string',
                        attrId: '666906',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'tradeclassName',
                        },
                      },
                      {
                        code: 'orgTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '598093',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'orgTypeName',
                        },
                      },
                      {
                        code: 'gridName',
                        name: '属性',
                        type: 'string',
                        attrId: '920177',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'gridName',
                        },
                      },
                      {
                        code: 'gridId',
                        name: '属性',
                        type: 'string',
                        attrId: '022697',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'gridId',
                        },
                      },
                      {
                        code: 'brokerId',
                        name: '属性',
                        type: 'string',
                        attrId: '2322123',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'brokerId',
                        },
                      },
                      {
                        code: 'brokerTel',
                        name: '属性',
                        type: 'string',
                        attrId: '160252',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'brokerTel',
                        },
                      },
                      {
                        code: 'brokerName',
                        name: '属性',
                        type: 'string',
                        attrId: '643626',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'brokerName',
                        },
                      },
                      {
                        code: 'valueLevelName',
                        name: '属性',
                        type: 'string',
                        attrId: '924002',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'valueLevelName',
                        },
                      },
                      {
                        code: 'planValueLevelName',
                        name: '属性',
                        type: 'string',
                        attrId: '9223028',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'planValueLevelName',
                        },
                      },
                      {
                        code: 'enterpriseKindName',
                        name: '属性',
                        type: 'string',
                        attrId: '399162',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'enterpriseKindName',
                        },
                      },
                      {
                        code: 'totalUser',
                        name: '属性',
                        type: 'string',
                        attrId: '608797',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'totalUser',
                        },
                      },
                      {
                        code: 'otherReason',
                        name: '属性',
                        type: 'string',
                        attrId: '5992162',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'otherReason',
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource140.params =
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
                eventDatasetDataSource140,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_492914')}
            {...injectData}
          >
            <Input
              name={'集团编号'}
              size={'default'}
              selfSpan={12}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'groupId'}
              value={data?.feeInfo?.groupId}
              formItemIndex={0}
              regexp={[
                {
                  id: '7649167',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
                },
              ]}
              icon={{
                type: 'search',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              postfixStyle={'1'}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_46663974',
                uid: 'Input_46663974',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue216: any = [
                  {
                    type: 'getValue',
                    dataId: 170106944921512060,
                    options: {
                      compId: 'Input_46663974',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '637628',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '6087289',
                            options: {
                              context: '$value_637628$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170130914575145900,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170130916066847040,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170130916572941600,
                                children: [],
                                todoOptions: ['msgType', 'value', 'duration'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '3782385',
                                  pageJsonId: '8430824',
                                  type: 'info',
                                  value: '请输入集团ID',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                line_number: 8,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 170130916572941600,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '3782385',
                                  pageJsonId: '8430824',
                                  type: 'info',
                                  value: '请输入集团ID',
                                },
                                line_number: 8,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 170130917952545300,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '169015',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var groupId=value_637628;if(groupId!=null&&groupId!=undefined){success({"groupId":groupId})}else{fail()}};',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 170130917952502530,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '826418',
                                  pageJsonId: '8430824',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'groupCustomerInfo',
                                  _apiCode: 'groupCustomerInfo',
                                  _source: 'rhin',
                                  _sourceName: '查询集团详情-hdb',
                                  _serviceId: '915442281117552640',
                                  _serviceTitle:
                                    '查询集团详情-hdb: groupCustomerInfo',
                                  valueType: 'object',
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
                                          parentType: 'object',
                                          parentKey: '0',
                                          key: '0-0',
                                          id: 'root.header',
                                          dataKey: '3972442_root.header',
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
                                          dataKey: '3972442_root.path',
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
                                          dataKey: '3972442_root.query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'objType',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'root.body.objType',
                                              compType: 'Input',
                                              name: 'objType',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-0',
                                              id: 'root.body.objType',
                                              dataKey:
                                                '3972442_root.body.objType',
                                            },
                                            {
                                              code: 'orderNbr',
                                              name: '新增节点',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              defaultValue: '',
                                              _id: 'root.body.orderNbr',
                                              compType: 'Input',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-1',
                                              id: 'root.body.orderNbr',
                                              dataKey:
                                                '3972442_root.body.orderNbr',
                                            },
                                            {
                                              code: 'objId',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'root.body.objId',
                                              compType: 'Input',
                                              name: 'objId',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-2',
                                              id: 'root.body.objId',
                                              dataKey:
                                                '3972442_root.body.objId',
                                              value: { type: [], code: '' },
                                            },
                                            {
                                              code: 'instanceList',
                                              name: '新增节点',
                                              attrType: 'objectArray',
                                              _id: 'root.body.instanceList',
                                              compType: 'Input',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-3',
                                              id: 'root.body.instanceList',
                                              dataKey:
                                                '3972442_root.body.instanceList',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_169015$',
                                                ],
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
                                          dataKey: '3972442_root.body',
                                        },
                                      ],
                                      _id: 'root',
                                      compType: 'Input',
                                      isRoot: true,
                                      parents: [],
                                      key: '0',
                                      id: 'root',
                                      dataKey: '3972442_root',
                                    },
                                  ],
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 170130917952545660,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '732748',
                                      pageJsonId: '8430824',
                                      code: 'function main(data,state,success,fail){success()};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 170130917952577250,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '686793',
                                          pageJsonId: '8430824',
                                          dataSourceId: 166452624216490180,
                                          dataSourceName: 'feeInfo',
                                          dataSourceRelType: 'custom',
                                          dataSourceSetValue: [
                                            {
                                              code: 'groupId',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '2235443',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: { type: [], code: '' },
                                            },
                                            {
                                              code: 'homeCityName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '917574',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].homeCityName',
                                              },
                                            },
                                            {
                                              code: 'homeCountyName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '4711633',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].homeCountyName',
                                              },
                                            },
                                            {
                                              code: 'groupName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '6122937',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].groupName',
                                              },
                                            },
                                            {
                                              code: 'statusName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '312967',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].statusName',
                                              },
                                            },
                                            {
                                              code: 'createTime',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '465875',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].createTime',
                                              },
                                            },
                                            {
                                              code: 'tradeclassTopName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '042161',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].tradeclassTopName',
                                              },
                                            },
                                            {
                                              code: 'tradeclassName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '666906',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].tradeclassName',
                                              },
                                            },
                                            {
                                              code: 'orgTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '598093',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].orgTypeName',
                                              },
                                            },
                                            {
                                              code: 'gridName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '920177',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].gridName',
                                              },
                                            },
                                            {
                                              code: 'gridId',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '022697',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].gridId',
                                              },
                                            },
                                            {
                                              code: 'brokerId',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '2322123',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].brokerId',
                                              },
                                            },
                                            {
                                              code: 'brokerTel',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '160252',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].brokerTel',
                                              },
                                            },
                                            {
                                              code: 'brokerName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '643626',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].brokerName',
                                              },
                                            },
                                            {
                                              code: 'valueLevelName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '924002',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].valueLevelName',
                                              },
                                            },
                                            {
                                              code: 'planValueLevelName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '9223028',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].planValueLevelName',
                                              },
                                            },
                                            {
                                              code: 'enterpriseKindName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '399162',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].enterpriseKindName',
                                              },
                                            },
                                            {
                                              code: 'totalUser',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '608797',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].totalUser',
                                              },
                                            },
                                            {
                                              code: 'otherReason',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '5992162',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$reply_826418$',
                                                ],
                                                hideAttr: false,
                                                code: 'resultData[0].otherReason',
                                              },
                                            },
                                          ],
                                          operateType: 1,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 6,
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
                            callback2: [
                              {
                                type: 'showMessage',
                                dataId: 170130917952558240,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '075353',
                                  pageJsonId: '8430824',
                                  type: 'info',
                                  value: '请输入集团ID',
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue216.params = [] || [];
                CMDGenerator(eventDatagetValue216, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_46663974')}
              {...injectData}
            />
            <Input
              name={'地市'}
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
              formItemIndex={1}
              fieldName={'homeCityName'}
              value={data?.feeInfo?.homeCityName}
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
                id: 'Input_298743',
                uid: 'Input_298743',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_298743')}
              {...injectData}
            />
            <Input
              name={'区县'}
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
              fieldName={'homeCountyName'}
              value={data?.feeInfo?.homeCountyName}
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
                id: 'Input_714433',
                uid: 'Input_714433',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_714433')}
              {...injectData}
            />
            <Input
              name={'集团名称'}
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
              fieldName={'groupName'}
              value={data?.feeInfo?.groupName}
              formItemIndex={3}
              regexp={[]}
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
                id: 'Input_3523423',
                uid: 'Input_3523423',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3523423')}
              {...injectData}
            />
            <Input
              name={'集团状态'}
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
              fieldName={'statusName'}
              value={data?.feeInfo?.statusName}
              formItemIndex={4}
              regexp={[]}
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
                id: 'Input_682981',
                uid: 'Input_682981',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_682981')}
              {...injectData}
            />
            <Input
              name={'建档时间'}
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
              fieldName={'createTime'}
              value={data?.feeInfo?.createTime}
              formItemIndex={5}
              regexp={[]}
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
                id: 'Input_413424',
                uid: 'Input_413424',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_413424')}
              {...injectData}
            />
            <Input
              name={'行业大类'}
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
              fieldName={'tradeclassTopName'}
              value={data?.feeInfo?.tradeclassTopName}
              formItemIndex={6}
              regexp={[]}
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
                id: 'Input_534712',
                uid: 'Input_534712',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_534712')}
              {...injectData}
            />
            <Input
              name={'行业小类'}
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
              fieldName={'tradeclassName'}
              value={data?.feeInfo?.tradeclassName}
              formItemIndex={7}
              regexp={[]}
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
                id: 'Input_244481',
                uid: 'Input_244481',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_244481')}
              {...injectData}
            />
            <Input
              name={'机构类型'}
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
              fieldName={'orgTypeName'}
              value={data?.feeInfo?.orgTypeName}
              formItemIndex={8}
              regexp={[]}
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
                id: 'Input_61272946',
                uid: 'Input_61272946',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_61272946')}
              {...injectData}
            />
            <Input
              name={'归属网格名称'}
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
              required={false}
              placeholder={'请输入'}
              fieldName={'gridName'}
              value={data?.feeInfo?.gridName}
              formItemIndex={9}
              regexp={[]}
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
                id: 'Input_374348',
                uid: 'Input_374348',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_374348')}
              {...injectData}
            />
            <Input
              name={'归属网格编号'}
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
              required={false}
              placeholder={'请输入'}
              fieldName={'gridId'}
              value={data?.feeInfo?.gridId}
              formItemIndex={10}
              regexp={[]}
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
                id: 'Input_1692267',
                uid: 'Input_1692267',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_1692267')}
              {...injectData}
            />
            <Input
              name={'看管人员工号'}
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
              fieldName={'brokerId'}
              value={data?.feeInfo?.brokerId}
              formItemIndex={11}
              regexp={[]}
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
                id: 'Input_937071',
                uid: 'Input_937071',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_937071')}
              {...injectData}
            />
            <Input
              name={'看管人员手机号'}
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
              fieldName={'brokerTel'}
              value={data?.feeInfo?.brokerTel}
              formItemIndex={12}
              regexp={[]}
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
                id: 'Input_976047',
                uid: 'Input_976047',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_976047')}
              {...injectData}
            />
            <Input
              name={'看管人员姓名'}
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
              fieldName={'brokerName'}
              value={data?.feeInfo?.brokerName}
              formItemIndex={13}
              regexp={[]}
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
                id: 'Input_684489948',
                uid: 'Input_684489948',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_684489948')}
              {...injectData}
            />
            <Input
              name={'当前价值等级'}
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
              fieldName={'valueLevelName'}
              value={data?.feeInfo?.valueLevelName}
              formItemIndex={14}
              regexp={[]}
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
                id: 'Input_2480726',
                uid: 'Input_2480726',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2480726')}
              {...injectData}
            />
            <Select
              name={'拟调入价值等级'}
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
              fieldName={'planValueLevelName'}
              value={data?.feeInfo?.planValueLevelName}
              formItemIndex={15}
              $$componentItem={{
                id: 'Input_40462',
                uid: 'Input_40462',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_40462')}
              {...injectData}
            />
            <Input
              name={'企业类型'}
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
              fieldName={'enterpriseKindName'}
              value={data?.feeInfo?.enterpriseKindName}
              formItemIndex={16}
              regexp={[]}
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
                id: 'Input_814444',
                uid: 'Input_814444',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_814444')}
              {...injectData}
            />
            <Input
              name={'单位员工数'}
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
              fieldName={'totalUser'}
              value={data?.feeInfo?.totalUser}
              formItemIndex={17}
              regexp={[
                {
                  id: '343656',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
                },
              ]}
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
                id: 'Input_40673',
                uid: 'Input_40673',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_40673')}
              {...injectData}
            />
            <TextArea
              name={'其他调整理由'}
              selfSpan={24}
              labelCol={'4'}
              wrapperCol={'20'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'otherReason'}
              value={data?.feeInfo?.otherReason}
              formItemIndex={18}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              $$componentItem={{
                id: 'TextArea_5651282',
                uid: 'TextArea_5651282',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_5651282')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopycopy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
  },
});
