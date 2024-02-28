// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1036918679991119872';
const NetworkAcrossProvincecopy$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetValue74: any = [
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
    eventDatagetValue74.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue74, { options_152622 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculPrice = (options_4731497: any) => {
    const eventDatagetValue75: any = [
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
    eventDatagetValue75.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue75, { options_4731497 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculReceiptsPriceSum = (options_57729: any) => {
    const eventDatagetValue76: any = [
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
    eventDatagetValue76.params =
      [
        { title: '事件入参', name: 'options_57729', value: '$options_57729$' },
      ] || [];
    CMDGenerator(eventDatagetValue76, { options_57729 }, 'getValue', {
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
    const eventDatavalidateCurrentForm43: any = [
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
                  attrId: '070893',
                  code: 'busiType',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'busiType',
                  },
                  _codePath: ['busiType'],
                  _idpath: ['070893'],
                },
                {
                  attrId: '766864',
                  code: 'accessLocation',
                  name: '接入地址',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'accessLocation',
                  },
                  _codePath: ['accessLocation'],
                  _idpath: ['766864'],
                },
                {
                  attrId: '586158',
                  code: 'setMealName',
                  name: '套餐名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'setMealName',
                  },
                  _codePath: ['setMealName'],
                  _idpath: ['586158'],
                },
                {
                  attrId: '838957',
                  code: 'handingFee',
                  name: '受理资费',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'handingFee',
                  },
                  _codePath: ['handingFee'],
                  _idpath: ['838957'],
                },
                {
                  attrId: '210024',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthName'],
                  _idpath: ['210024'],
                },
                {
                  attrId: '895571',
                  code: 'number',
                  name: '开通数量',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'number',
                  },
                  _codePath: ['number'],
                  _idpath: ['895571'],
                },
                {
                  attrId: '956901',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'bandwidth',
                  },
                  _codePath: ['bandwidth'],
                  _idpath: ['956901'],
                },
                {
                  attrId: '8452564',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['busiTypeName'],
                  _idpath: ['8452564'],
                },
                {
                  attrId: '7948196',
                  code: 'handingFeeType',
                  name: '受理资费类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['handingFeeType'],
                  _idpath: ['7948196'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'handingFeeType',
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
    eventDatavalidateCurrentForm43.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm43, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal42: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal42.params = [] || [];
    CMDGenerator(eventDatacloseModal42, {}, 'closeModal', {
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
    const eventDataapiRequest350: any = [
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '14766_header',
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
              dataKey: '14766_path',
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
              dataKey: '14766_query',
              key: '2',
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
                  dataKey: '14766_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  dataKey: '14766_body.attrCode',
                  value: { type: ['customize'], code: 'busiType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '14766_body',
              key: '3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169882877022113120,
            options: {
              compId: 'Select_20939424',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '872319',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_14766?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest350.params = [] || [];
    CMDGenerator(eventDataapiRequest350, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest351: any = [
      {
        type: 'apiRequest',
        dataId: 166530305308729150,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '240965',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '240965_header',
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
              dataKey: '240965_path',
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
              dataKey: '240965_query',
              key: '2',
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
                  dataKey: '240965_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  dataKey: '240965_body.attrCode',
                  value: { type: ['customize'], code: 'bandwidth' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '240965_body',
              key: '3',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169889601945996220,
            options: {
              compId: 'Input_684602',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '3131513',
              data: '$reply_240965?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest351.params = [] || [];
    CMDGenerator(eventDataapiRequest351, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest352: any = [
      {
        type: 'apiRequest',
        dataId: 170061925932397760,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4482822',
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
                      dataKey: '4482822_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '4482822_root.body.attrCode',
                      value: { type: ['customize'], code: 'handingFeeType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '4482822_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '4482822_root',
              _deletable: true,
            },
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              key: '2',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170061928148677660,
            options: {
              compId: 'Select_056083',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '6199114',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_4482822?.resultData$',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest352.params = [] || [];
    CMDGenerator(eventDataapiRequest352, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest353: any = [
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
        line_number: 7,
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
            line_number: 8,
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
                line_number: 9,
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
                line_number: 10,
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
                    line_number: 11,
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
                line_number: 12,
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
                    line_number: 13,
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
                line_number: 14,
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
                    line_number: 15,
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
    eventDataapiRequest353.params = [] || [];
    CMDGenerator(eventDataapiRequest353, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse190: any = [
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
        line_number: 16,
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
            line_number: 17,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse190.params = [] || [];
    CMDGenerator(eventDataifelse190, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169874609006342900
    console.log(state?.feeInfo);

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
              const eventDatasetDataSource152: any = [
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
                        attrId: '070893',
                        code: 'busiType',
                        name: '业务类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'busiType',
                        },
                        _codePath: ['busiType'],
                        _idpath: ['070893'],
                      },
                      {
                        attrId: '766864',
                        code: 'accessLocation',
                        name: '接入地址',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'accessLocation',
                        },
                        _codePath: ['accessLocation'],
                        _idpath: ['766864'],
                      },
                      {
                        attrId: '586158',
                        code: 'setMealName',
                        name: '套餐名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'setMealName',
                        },
                        _codePath: ['setMealName'],
                        _idpath: ['586158'],
                      },
                      {
                        attrId: '838957',
                        code: 'handingFee',
                        name: '受理资费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'handingFee',
                        },
                        _codePath: ['handingFee'],
                        _idpath: ['838957'],
                      },
                      {
                        attrId: '210024',
                        code: 'bandwidthName',
                        name: '带宽名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthName'],
                        _idpath: ['210024'],
                      },
                      {
                        attrId: '895571',
                        code: 'number',
                        name: '开通数量',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'number',
                        },
                        _codePath: ['number'],
                        _idpath: ['895571'],
                      },
                      {
                        attrId: '956901',
                        code: 'bandwidth',
                        name: '带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'bandwidth',
                        },
                        _codePath: ['bandwidth'],
                        _idpath: ['956901'],
                      },
                      {
                        attrId: '8452564',
                        code: 'busiTypeName',
                        name: '业务类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['busiTypeName'],
                        _idpath: ['8452564'],
                      },
                      {
                        attrId: '7948196',
                        code: 'handingFeeType',
                        name: '受理资费类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['handingFeeType'],
                        _idpath: ['7948196'],
                        value: {
                          type: ['form', 'Form_492914', 'getFieldsValue'],
                          code: 'handingFeeType',
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
              eventDatasetDataSource152.params =
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
                eventDatasetDataSource152,
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
            <Select
              name={'业务类型'}
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
              fieldName={'busiType'}
              value={data?.feeInfo?.busiType}
              formItemIndex={0}
              $$componentItem={{
                id: 'Select_20939424',
                uid: 'Select_20939424',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData301: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169890733524620960,
                    options: {
                      compId: 'Select_20939424',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '6254433',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 169890734060924800,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '1007',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '070893',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['070893'],
                            },
                            {
                              attrId: '766864',
                              code: 'accessLocation',
                              name: '接入地址',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['accessLocation'],
                              _idpath: ['766864'],
                            },
                            {
                              attrId: '586158',
                              code: 'setMealName',
                              name: '套餐名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['setMealName'],
                              _idpath: ['586158'],
                            },
                            {
                              attrId: '838957',
                              code: 'handingFee',
                              name: '受理资费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['handingFee'],
                              _idpath: ['838957'],
                            },
                            {
                              attrId: '210024',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['210024'],
                            },
                            {
                              attrId: '895571',
                              code: 'number',
                              name: '开通数量',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['number'],
                              _idpath: ['895571'],
                            },
                            {
                              attrId: '956901',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['956901'],
                            },
                            {
                              attrId: '8452564',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_6254433[0]$'],
                                code: 'label',
                              },
                              _codePath: ['busiTypeName'],
                              _idpath: ['8452564'],
                            },
                            {
                              attrId: '7948196',
                              code: 'handingFeeType',
                              name: '受理资费类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['handingFeeType'],
                              _idpath: ['7948196'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData301.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData301,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_20939424')}
              {...injectData}
            />
            <Input
              name={'接入地址'}
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
              fieldName={'accessLocation'}
              value={data?.feeInfo?.accessLocation}
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
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_298743')}
              {...injectData}
            />
            <Input
              name={'套餐名称'}
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
              fieldName={'setMealName'}
              value={data?.feeInfo?.setMealName}
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
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_714433')}
              {...injectData}
            />
            <Select
              name={'带宽(M)'}
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
              fieldName={'bandwidth'}
              value={data?.feeInfo?.bandwidth}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_684602',
                uid: 'Input_684602',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData302: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169882892488005570,
                    options: {
                      compId: 'Input_684602',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '602522',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 169882892949936420,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '045513',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '070893',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['070893'],
                            },
                            {
                              attrId: '766864',
                              code: 'accessLocation',
                              name: '接入地址',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['accessLocation'],
                              _idpath: ['766864'],
                            },
                            {
                              attrId: '586158',
                              code: 'setMealName',
                              name: '套餐名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['setMealName'],
                              _idpath: ['586158'],
                            },
                            {
                              attrId: '838957',
                              code: 'handingFee',
                              name: '受理资费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['handingFee'],
                              _idpath: ['838957'],
                            },
                            {
                              attrId: '210024',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_602522[0]$'],
                                code: 'label',
                              },
                              _codePath: ['bandwidthName'],
                              _idpath: ['210024'],
                            },
                            {
                              attrId: '895571',
                              code: 'number',
                              name: '开通数量',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['number'],
                              _idpath: ['895571'],
                            },
                            {
                              attrId: '956901',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['956901'],
                            },
                            {
                              attrId: '8452564',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['8452564'],
                            },
                            {
                              attrId: '7948196',
                              code: 'handingFeeType',
                              name: '受理资费类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['handingFeeType'],
                              _idpath: ['7948196'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData302.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData302,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_684602')}
              {...injectData}
            />
            <Input
              name={'开通数量'}
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
              fieldName={'number'}
              value={data?.feeInfo?.number}
              formItemIndex={4}
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
                id: 'Input_46663974',
                uid: 'Input_46663974',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_46663974')}
              {...injectData}
            />
            <View
              className="View_View_3510257"
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_3510257',
                uid: 'View_3510257',
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
                  formItemIndex: 5,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_3510257')}
              {...injectData}
            />
            <Select
              name={'受理资费类型'}
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
              fieldName={'handingFeeType'}
              value={data?.feeInfo?.handingFeeType}
              formItemIndex={6}
              $$componentItem={{
                id: 'Select_056083',
                uid: 'Select_056083',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_056083')}
              {...injectData}
            />
            <Input
              name={'受理资费'}
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
              fieldName={'handingFee'}
              value={data?.feeInfo?.handingFee}
              formItemIndex={7}
              regexp={[
                {
                  id: '693526',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_3523423',
                uid: 'Input_3523423',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3523423')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopy$$Modal, {
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
