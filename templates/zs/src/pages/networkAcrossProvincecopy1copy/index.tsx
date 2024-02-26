// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1050336965737771008';
const NetworkAcrossProvincecopy1copy$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetValue48: any = [
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
    eventDatagetValue48.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue48, { options_152622 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculPrice = (options_4731497: any) => {
    const eventDatagetValue49: any = [
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
    eventDatagetValue49.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue49, { options_4731497 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculReceiptsPriceSum = (options_57729: any) => {
    const eventDatagetValue50: any = [
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
    eventDatagetValue50.params =
      [
        { title: '事件入参', name: 'options_57729', value: '$options_57729$' },
      ] || [];
    CMDGenerator(eventDatagetValue50, { options_57729 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const updateSetMealInfo = (options_787263: any) => {
    const eventDatagetValue51: any = [
      {
        type: 'getValue',
        dataId: 170202839177222560,
        options: {
          compId: 'Select_2298495',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '5722226',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170202839480293470,
            options: {
              compId: 'Select_174897',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '192576',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170202840163261540,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '614294',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _data$setMealInfoList;var opType=options_787263.opType;var setMealPackage=value_5722226;var setMealPackageType=value_192576;var info=(_data$setMealInfoList=data.setMealInfoList)===null||_data$setMealInfoList===void 0?void 0:_data$setMealInfoList.totalInfo;var list=info[setMealPackage];console.log("====list",list);var setMealPackageTypeList=list.map(function(item){return item.setMealPackageType});console.log("=====setMealPackageTypeList",setMealPackageTypeList);if(opType=="setMealPackage"&&!!info){data.feeInfo.probation="";success({setMealPackageType:setMealPackageTypeList})}else if(opType=="setMealPackageType"&&!!info){var setMealInfo=list.filter(function(item){var _item$setMealPackageT;return(item===null||item===void 0?void 0:(_item$setMealPackageT=item.setMealPackageType)===null||_item$setMealPackageT===void 0?void 0:_item$setMealPackageT.attrValue)==setMealPackageType});console.log("\\u5F53\\u524D\\u83B7\\u5F97\\u7684\\u5957\\u9910\\u6570\\u636E\\uFF1A",setMealInfo[0]);data.feeInfo.unit=setMealInfo[0].unit;data.feeInfo.dirPrice=setMealInfo[0].dirPrice;data.feeInfo.probation="";data.feeInfo.lowPrice=setMealInfo[0].lowPrice;fail({unit:setMealInfo[0].unit,dirPrice:setMealInfo[0].dirPrice,probation:setMealInfo[0].probation,lowPrice:setMealInfo[0].lowPrice})}};',
                  actionTitle: '',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 170202889575947970,
                    options: {
                      compId: 'Select_174897',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '121355',
                      data: '$data_614294.setMealPackageType$',
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
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
            type: 'console',
            dataId: 170202947189100300,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '319925',
              pageJsonId: '8430824',
              value: ['===套餐====', '$value_5722226$'],
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDatagetValue51.params =
      [
        {
          title: '事件入参',
          name: 'options_787263',
          value: '$options_787263$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue51, { options_787263 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const feeVerification = (options_160036: any) => {
    const eventDatagetValue52: any = [
      {
        type: 'getValue',
        dataId: 170225851563376540,
        options: {
          compId: 'Input_460941',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '350168',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170225851940901800,
            options: {
              compId: 'Input_288872',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '587236',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170225852859964770,
                options: {
                  compId: 'Input_977196',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '7778863',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170225853651116200,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '7582473',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n==="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result="".concat(integer,".").concat(decimal.substr(0,n));var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var flag=0;var secondReducedDiscount=null;var firstReducedDiscount=null;var dirPrice=parseFloat(value_350168);var secondReducedValue=parseFloat(value_7778863);var firstReducedValue=parseFloat(value_587236);if(!isNaN(secondReducedValue)||!isNaN(firstReducedValue)){console.log("\\u4E00\\u6B21\\u4F18\\u60E0\\u540E\\uFF1A",firstReducedValue);console.log("\\u4E8C\\u6B21\\u4F18\\u60E0\\u540E\\uFF1A",secondReducedValue);if(!firstReducedValue&&secondReducedValue||firstReducedValue&&secondReducedValue&&secondReducedValue>firstReducedValue){secondReducedValue=0;flag=1}if(dirPrice&&dirPrice!=0&&(firstReducedValue||firstReducedValue==0)&&!isNaN(firstReducedValue)){firstReducedDiscount=toFixed(firstReducedValue*10/dirPrice,3)}if(dirPrice&&dirPrice!=0&&(secondReducedValue||secondReducedValue==0)&&!isNaN(secondReducedValue)){secondReducedDiscount=toFixed(secondReducedValue*10/dirPrice,3)}console.log("firstReducedDiscount:",firstReducedDiscount);if(flag){data.feeInfo.secondReducedPrice=null;data.feeInfo.secondReducedDiscount=null}else{data.feeInfo.secondReducedPrice=secondReducedValue||secondReducedValue==0?secondReducedValue:null;data.feeInfo.secondReducedDiscount=secondReducedDiscount||secondReducedDiscount==0?secondReducedDiscount:null}data.feeInfo.firstReducedDiscount=firstReducedDiscount||firstReducedDiscount==0?firstReducedDiscount:null;data.feeInfo.firstReducedPrice=firstReducedValue||firstReducedValue==0?firstReducedValue:null;console.log("secondReducedValue: ",secondReducedValue);console.log("firstReducedValue: ",firstReducedValue);console.log("dirPrice: ",dirPrice);console.log("firstReducedDiscount: ",firstReducedDiscount);console.log("secondReducedDiscount: ",secondReducedDiscount);if(flag){fail({secondReducedValue:secondReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}else if(!secondReducedValue&&secondReducedValue!=0){console.log("111111");success({secondReducedValue:secondReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}else if(!firstReducedValue&&firstReducedValue!=0){console.log("222222");fail({firstReducedValue:firstReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}else{console.log("333333");success({secondReducedValue:secondReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}}else{data.feeInfo.firstReducedDiscount=null;data.feeInfo.secondReducedDiscount=null;success({secondReducedValue:null,firstReducedDiscount:null,secondReducedDiscount:null})}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170225853651183780,
                        options: {
                          compId: ['Input_2563766', 'Input_076244'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '057106',
                          valueList: {
                            Input_2563766:
                              '$data_7582473.firstReducedDiscount$',
                            Input_076244:
                              '$data_7582473.secondReducedDiscount$',
                          },
                          compid: ['Input_2563766', 'Input_076244'],
                        },
                        line_number: 5,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 170225853651164580,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '274034',
                          pageJsonId: '537892',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'setMealPackage',
                              name: '属性',
                              type: 'string',
                              attrId: '1272852',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'setMealPackageType',
                              name: '属性',
                              type: 'string',
                              attrId: '072416',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'dirPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '6288557',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'firstReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '4849687',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'firstReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '911992',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lowPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '845769',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'secondReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '5338915',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'secondReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '1314893',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'marketName',
                              name: '属性',
                              type: 'string',
                              attrId: '32276',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
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
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 170225853651166940,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '742131',
                          pageJsonId: '537892',
                          type: 'info',
                          value: '二次优惠必须大于等于一次优惠',
                        },
                        line_number: 7,
                      },
                      {
                        type: 'setValue',
                        dataId: 170225853651161380,
                        options: {
                          compId: ['Input_2563766'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '142909',
                          valueList: {
                            Input_2563766:
                              '$fail_7582473.firstReducedDiscount$',
                          },
                          compid: ['Input_2563766'],
                        },
                        line_number: 8,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 170225853651192260,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '754485',
                          pageJsonId: '537892',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'setMealPackage',
                              name: '属性',
                              type: 'string',
                              attrId: '1272852',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'setMealPackageType',
                              name: '属性',
                              type: 'string',
                              attrId: '072416',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'dirPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '6288557',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'firstReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '4849687',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'firstReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '911992',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['context', '$fail_7582473$'],
                                code: 'firstReducedDiscount',
                              },
                            },
                            {
                              code: 'lowPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '845769',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'secondReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '5338915',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              code: 'secondReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '1314893',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              code: 'marketName',
                              name: '属性',
                              type: 'string',
                              attrId: '32276',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 9,
                        callback1: [],
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
    eventDatagetValue52.params =
      [
        {
          title: '事件入参',
          name: 'options_160036',
          value: '$options_160036$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue52, { options_160036 }, 'getValue', {
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
    updateSetMealInfo,
    feeVerification,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm32: any = [
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
                  code: 'setMealPackage',
                  name: '属性',
                  type: 'string',
                  attrId: '1272852',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'setMealPackage',
                  },
                  _codePath: ['setMealPackage'],
                  _idpath: ['1272852'],
                },
                {
                  code: 'setMealPackageType',
                  name: '属性',
                  type: 'string',
                  attrId: '072416',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'setMealPackageType',
                  },
                  _codePath: ['setMealPackageType'],
                  _idpath: ['072416'],
                },
                {
                  code: 'dirPrice',
                  name: '属性',
                  type: 'string',
                  attrId: '6288557',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'dirPrice',
                  },
                  _codePath: ['dirPrice'],
                  _idpath: ['6288557'],
                },
                {
                  code: 'firstReducedPrice',
                  name: '属性',
                  type: 'string',
                  attrId: '4849687',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'firstReducedPrice',
                  },
                  _codePath: ['firstReducedPrice'],
                  _idpath: ['4849687'],
                },
                {
                  code: 'firstReducedDiscount',
                  name: '属性',
                  type: 'string',
                  attrId: '911992',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'firstReducedDiscount',
                  },
                  _codePath: ['firstReducedDiscount'],
                  _idpath: ['911992'],
                },
                {
                  code: 'lowPrice',
                  name: '属性',
                  type: 'string',
                  attrId: '845769',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'lowPrice',
                  },
                  _codePath: ['lowPrice'],
                  _idpath: ['845769'],
                },
                {
                  code: 'secondReducedPrice',
                  name: '属性',
                  type: 'string',
                  attrId: '5338915',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['secondReducedPrice'],
                  _idpath: ['5338915'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'secondReducedPrice',
                  },
                },
                {
                  code: 'secondReducedDiscount',
                  name: '属性',
                  type: 'string',
                  attrId: '1314893',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['secondReducedDiscount'],
                  _idpath: ['1314893'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'secondReducedDiscount',
                  },
                },
                {
                  code: 'marketName',
                  name: '属性',
                  type: 'string',
                  attrId: '32276',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['marketName'],
                  _idpath: ['32276'],
                },
                {
                  attrId: '133968',
                  code: 'setMealPackageName',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['setMealPackageName'],
                  _idpath: ['133968'],
                },
                {
                  attrId: '994543',
                  code: 'setMealPackageTypeName',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['setMealPackageTypeName'],
                  _idpath: ['994543'],
                },
                {
                  attrId: '608209',
                  code: 'unit',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['unit'],
                  _idpath: ['608209'],
                },
                {
                  attrId: '418077',
                  code: 'serviceFeeTakeNum',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['serviceFeeTakeNum'],
                  _idpath: ['418077'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'serviceFeeTakeNum',
                  },
                },
                {
                  attrId: '453314',
                  code: 'servicePayment',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['servicePayment'],
                  _idpath: ['453314'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'servicePayment',
                  },
                },
                {
                  attrId: '492163',
                  code: 'probation',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['probation'],
                  _idpath: ['492163'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'probation',
                  },
                },
                {
                  attrId: '2909565',
                  code: 'serviceFeeReducedFee',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['serviceFeeReducedFee'],
                  _idpath: ['2909565'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'serviceFeeReducedFee',
                  },
                },
                {
                  attrId: '9945482',
                  code: 'serviceFee',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['serviceFee'],
                  _idpath: ['9945482'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'serviceFee',
                  },
                },
                {
                  attrId: '525809',
                  code: 'contractExpiredHandle',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['contractExpiredHandle'],
                  _idpath: ['525809'],
                  value: {
                    type: ['form', 'Form_492914', 'getFieldsValue'],
                    code: 'contractExpiredHandle',
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
    eventDatavalidateCurrentForm32.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm32, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal27: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal27.params = [] || [];
    CMDGenerator(eventDatacloseModal27, {}, 'closeModal', {
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
    // console 170202685531628860
    console.log('======DATA====', data, urlParam, state);
    const eventDataapiRequest234: any = [
      {
        type: 'apiRequest',
        dataId: 170202688317545100,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '089874',
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
              parents: ['root'],
              id: 'header',
              dataKey: '4165923_header',
              key: '0-0',
              parentType: 'object',
              parentKey: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: ['root'],
              id: 'path',
              dataKey: '4165923_path',
              key: '0-1',
              parentType: 'object',
              parentKey: '0',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: ['root'],
              id: 'query',
              dataKey: '4165923_query',
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['root', 'body'],
                  id: 'body.catalogCode',
                  dataKey: '4165923_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['root', 'body'],
                  id: 'body.attrCode',
                  dataKey: '4165923_body.attrCode',
                  value: { type: ['customize'], code: 'setMealPackage' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '4165923_body',
              key: '0-3',
              parentType: 'object',
              parentKey: '0',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170202699047574500,
            options: {
              compId: 'Select_2298495',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '847174',
              data: '$reply_089874?.resultData$',
              valueKey: 'attrValue',
              labelKey: 'attrValueName',
            },
            line_number: 3,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 170202688317580400,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '59933854',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var _reply_;var res=(_reply_=reply_089874)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u5957\\u9910\\u8FD4\\u56DE\\u7ED3\\u679C:",res);if(!!res){var finalRes={};for(var i=0;i<res.length;i++){finalRes[res[i].attrValue]=JSON.parse(res[i].attrValueDesc)}console.log("\\u5957\\u9910\\u89E3\\u6790\\u7ED3\\u679C:",finalRes);success(finalRes)}};',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 170202688317508450,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '416695',
                  pageJsonId: '537892',
                  dataSourceId: 170202873876992860,
                  dataSourceName: 'setMealInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '8623679',
                      code: 'totalInfo',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_59933854$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '851816',
                        options: {
                          context: '$state.feeInfo$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 170202688317586880,
                    elseIfs: [],
                    line_number: 6,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170202688317534720,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '145182',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var info=data_59933854;var setMealPackage=data.feeInfo.setMealPackage;var setMealPackageType=data.feeInfo.setMealPackageType;console.log("\\u5957\\u9910\\u4FE1\\u606F\\uFF1A",info);console.log("\\u5957\\u9910\\u5305\\uFF1A",setMealPackage);console.log("\\u5957\\u9910\\u5305\\u7C7B\\u578B\\uFF1A",setMealPackageType);var list=info[setMealPackage]||[];var setMealPackageTypeList=list.map(function(item){return item.setMealPackageType});console.log("setMealPackageTypeList",setMealPackageTypeList);success({setMealPackageType:setMealPackageTypeList})};',
                          actionTitle: '11',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 170202707190501820,
                            options: {
                              compId: 'Select_174897',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '76109',
                              data: '$data_145182.setMealPackageType$',
                              valueKey: 'attrValue',
                              labelKey: 'attrValueName',
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
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest234.params = [] || [];
    CMDGenerator(eventDataapiRequest234, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest235: any = [
      {
        type: 'apiRequest',
        dataId: 170359379896502050,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '17454',
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
                      dataKey: '899321_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '899321_root.body.attrCode',
                      value: { type: ['customize'], code: 'serviceFee' },
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
                  dataKey: '899321_root.body',
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
              dataKey: '899321_root',
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
        line_number: 9,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170359381054776320,
            options: {
              compId: 'Select_94911',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '491002',
              data: '$reply_17454?.resultData$',
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
    eventDataapiRequest235.params = [] || [];
    CMDGenerator(eventDataapiRequest235, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest236: any = [
      {
        type: 'apiRequest',
        dataId: 170359389449649150,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '711557',
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
                      dataKey: '761289_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '761289_root.body.attrCode',
                      value: { type: ['customize'], code: 'probation' },
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
                  dataKey: '761289_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '761289_root',
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
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170359390433745100,
            options: {
              compId: 'Select_603014',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '400456',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_711557?.resultData$',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest236.params = [] || [];
    CMDGenerator(eventDataapiRequest236, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest237: any = [
      {
        type: 'apiRequest',
        dataId: 170359397041031940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0176193',
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
                      dataKey: '443294_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '443294_root.body.attrCode',
                      value: { type: ['customize'], code: 'servicePayment' },
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
                  dataKey: '443294_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '443294_root',
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
        line_number: 13,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170359397728134100,
            options: {
              compId: 'Select_025227',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '8364088',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_0176193?.resultData$',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest237.params = [] || [];
    CMDGenerator(eventDataapiRequest237, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest238: any = [
      {
        type: 'apiRequest',
        dataId: 170433495927496600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '728322',
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
                      dataKey: '5090414_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '5090414_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'contractExpiredHandle',
                      },
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
                  dataKey: '5090414_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '5090414_root',
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
        line_number: 15,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170433497900222880,
            options: {
              compId: 'Select_847412',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '445095',
              data: '$reply_728322?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest238.params = [] || [];
    CMDGenerator(eventDataapiRequest238, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse133: any = [
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
        line_number: 17,
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
            line_number: 18,
            callback1: [],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '1334513',
                options: { context: '$state.isEdit$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170226312781297730,
            elseIfs: [],
            line_number: 19,
            callback1: [
              {
                type: 'setDisable',
                dataId: 170226314183760480,
                options: {
                  compId: 'Form_492914',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Form',
                  id: '913288',
                  disabled: 'true',
                },
                line_number: 20,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse133.params = [] || [];
    CMDGenerator(eventDataifelse133, {}, 'ifelse', {
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
              const eventDatasetDataSource117: any = [
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
                        _deletable: true,
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
                        _deletable: true,
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
                        _deletable: true,
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
                        _deletable: true,
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
                        _deletable: true,
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
                        _deletable: true,
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
                        _deletable: true,
                      },
                      {
                        code: 'marketName',
                        name: '属性',
                        type: 'string',
                        attrId: '32276',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['marketName'],
                        _idpath: ['32276'],
                      },
                      {
                        code: 'lowPrice',
                        name: '属性',
                        type: 'string',
                        attrId: '845769',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['lowPrice'],
                        _idpath: ['845769'],
                      },
                      {
                        code: 'firstReducedDiscount',
                        name: '属性',
                        type: 'string',
                        attrId: '911992',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['firstReducedDiscount'],
                        _idpath: ['911992'],
                      },
                      {
                        code: 'setMealPackage',
                        name: '属性',
                        type: 'string',
                        attrId: '1272852',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['setMealPackage'],
                        _idpath: ['1272852'],
                      },
                      {
                        code: 'secondReducedDiscount',
                        name: '属性',
                        type: 'string',
                        attrId: '1314893',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['secondReducedDiscount'],
                        _idpath: ['1314893'],
                      },
                      {
                        code: 'firstReducedPrice',
                        name: '属性',
                        type: 'string',
                        attrId: '4849687',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['firstReducedPrice'],
                        _idpath: ['4849687'],
                      },
                      {
                        code: 'secondReducedPrice',
                        name: '属性',
                        type: 'string',
                        attrId: '5338915',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['secondReducedPrice'],
                        _idpath: ['5338915'],
                      },
                      {
                        code: 'dirPrice',
                        name: '属性',
                        type: 'string',
                        attrId: '6288557',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['dirPrice'],
                        _idpath: ['6288557'],
                      },
                      {
                        code: 'setMealPackageType',
                        name: '属性',
                        type: 'string',
                        attrId: '072416',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['setMealPackageType'],
                        _idpath: ['072416'],
                      },
                      {
                        attrId: '133968',
                        code: 'setMealPackageName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['setMealPackageName'],
                        _idpath: ['133968'],
                      },
                      {
                        attrId: '994543',
                        code: 'setMealPackageTypeName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['setMealPackageTypeName'],
                        _idpath: ['994543'],
                      },
                      {
                        attrId: '608209',
                        code: 'unit',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['unit'],
                        _idpath: ['608209'],
                      },
                      {
                        attrId: '418077',
                        code: 'serviceFeeTakeNum',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceFeeTakeNum'],
                        _idpath: ['418077'],
                      },
                      {
                        attrId: '453314',
                        code: 'servicePayment',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['servicePayment'],
                        _idpath: ['453314'],
                      },
                      {
                        attrId: '492163',
                        code: 'probation',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['probation'],
                        _idpath: ['492163'],
                      },
                      {
                        attrId: '2909565',
                        code: 'serviceFeeReducedFee',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceFeeReducedFee'],
                        _idpath: ['2909565'],
                      },
                      {
                        attrId: '9945482',
                        code: 'serviceFee',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceFee'],
                        _idpath: ['9945482'],
                      },
                      {
                        attrId: '525809',
                        code: 'contractExpiredHandle',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['contractExpiredHandle'],
                        _idpath: ['525809'],
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
              eventDatasetDataSource117.params =
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
                eventDatasetDataSource117,
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
              name={'套餐'}
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
              attr={{}}
              placeholder={'请选择'}
              fieldName={'setMealPackage'}
              formItemIndex={0}
              value={data?.feeInfo?.setMealPackage}
              $$componentItem={{
                id: 'Select_2298495',
                uid: 'Select_2298495',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData186: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168731748037013660,
                    options: {
                      compId: 'Select_2298495',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '272458',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168731748411029020,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '38382',
                          pageJsonId: '537892',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'setMealPackage',
                              name: '属性',
                              type: 'string',
                              attrId: '1272852',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              value: { type: ['context', '$e$'], code: '' },
                              _codePath: ['setMealPackage'],
                              _idpath: ['1272852'],
                            },
                            {
                              code: 'setMealPackageType',
                              name: '属性',
                              type: 'string',
                              attrId: '072416',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['setMealPackageType'],
                              _idpath: ['072416'],
                            },
                            {
                              code: 'dirPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '6288557',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['dirPrice'],
                              _idpath: ['6288557'],
                            },
                            {
                              code: 'firstReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '4849687',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['firstReducedPrice'],
                              _idpath: ['4849687'],
                            },
                            {
                              code: 'firstReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '911992',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['firstReducedDiscount'],
                              _idpath: ['911992'],
                            },
                            {
                              code: 'lowPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '845769',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['845769'],
                            },
                            {
                              code: 'secondReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '5338915',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['secondReducedPrice'],
                              _idpath: ['5338915'],
                            },
                            {
                              code: 'secondReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '1314893',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['secondReducedDiscount'],
                              _idpath: ['1314893'],
                            },
                            {
                              code: 'marketName',
                              name: '属性',
                              type: 'string',
                              attrId: '32276',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['32276'],
                            },
                            {
                              attrId: '133968',
                              code: 'setMealPackageName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['setMealPackageName'],
                              _idpath: ['133968'],
                              value: {
                                type: ['context', '$selectedData_272458[0]$'],
                                code: 'label',
                              },
                            },
                            {
                              attrId: '994543',
                              code: 'setMealPackageTypeName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['setMealPackageTypeName'],
                              _idpath: ['994543'],
                            },
                            {
                              attrId: '608209',
                              code: 'unit',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['608209'],
                            },
                            {
                              attrId: '418077',
                              code: 'serviceFeeTakeNum',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['418077'],
                            },
                            {
                              attrId: '453314',
                              code: 'servicePayment',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['453314'],
                            },
                            {
                              attrId: '492163',
                              code: 'probation',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['492163'],
                            },
                            {
                              attrId: '2909565',
                              code: 'serviceFeeReducedFee',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['2909565'],
                            },
                            {
                              attrId: '9945482',
                              code: 'serviceFee',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['9945482'],
                            },
                            {
                              attrId: '525809',
                              code: 'contractExpiredHandle',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['525809'],
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
                            type: 'callSelfFunc',
                            dataId: 168731750066049000,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '328224',
                              pageJsonId: '537892',
                              customFuncName: 'updateSetMealInfo',
                              customFuncParams: 'object',
                              paramsObj: { opType: 'setMealPackage' },
                              paramsObjKeyValueMap: {
                                opType: 'setMealPackage',
                              },
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
                eventDatagetSelectedData186.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData186,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_2298495')}
              {...injectData}
            />
            <Select
              name={'套餐包类型'}
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
              attr={{}}
              placeholder={'请选择'}
              fieldName={'setMealPackageType'}
              formItemIndex={1}
              value={data?.feeInfo?.setMealPackageType}
              $$componentItem={{
                id: 'Select_174897',
                uid: 'Select_174897',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData187: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168731760270176160,
                    options: {
                      compId: 'Select_174897',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '0772151',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170226105093101200,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '2212507',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'setMealPackage',
                              name: '属性',
                              type: 'string',
                              attrId: '1272852',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['setMealPackage'],
                              _idpath: ['1272852'],
                            },
                            {
                              code: 'setMealPackageType',
                              name: '属性',
                              type: 'string',
                              attrId: '072416',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['setMealPackageType'],
                              _idpath: ['072416'],
                            },
                            {
                              code: 'dirPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '6288557',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['dirPrice'],
                              _idpath: ['6288557'],
                            },
                            {
                              code: 'firstReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '4849687',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['firstReducedPrice'],
                              _idpath: ['4849687'],
                            },
                            {
                              code: 'firstReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '911992',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['firstReducedDiscount'],
                              _idpath: ['911992'],
                            },
                            {
                              code: 'lowPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '845769',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['845769'],
                            },
                            {
                              code: 'secondReducedPrice',
                              name: '属性',
                              type: 'string',
                              attrId: '5338915',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['secondReducedPrice'],
                              _idpath: ['5338915'],
                            },
                            {
                              code: 'secondReducedDiscount',
                              name: '属性',
                              type: 'string',
                              attrId: '1314893',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['secondReducedDiscount'],
                              _idpath: ['1314893'],
                            },
                            {
                              code: 'marketName',
                              name: '属性',
                              type: 'string',
                              attrId: '32276',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['32276'],
                            },
                            {
                              attrId: '133968',
                              code: 'setMealPackageName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['setMealPackageName'],
                              _idpath: ['133968'],
                            },
                            {
                              attrId: '994543',
                              code: 'setMealPackageTypeName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_0772151[0]$'],
                                code: 'label',
                              },
                              _codePath: ['setMealPackageTypeName'],
                              _idpath: ['994543'],
                            },
                            {
                              attrId: '608209',
                              code: 'unit',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['608209'],
                            },
                            {
                              attrId: '418077',
                              code: 'serviceFeeTakeNum',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['418077'],
                            },
                            {
                              attrId: '453314',
                              code: 'servicePayment',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['453314'],
                            },
                            {
                              attrId: '492163',
                              code: 'probation',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['492163'],
                            },
                            {
                              attrId: '2909565',
                              code: 'serviceFeeReducedFee',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['2909565'],
                            },
                            {
                              attrId: '9945482',
                              code: 'serviceFee',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['9945482'],
                            },
                            {
                              attrId: '525809',
                              code: 'contractExpiredHandle',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['525809'],
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
                      {
                        type: 'setDataSource',
                        dataId: 168731760932019970,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '91163',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '08707745',
                              code: 'setMealPackage',
                              name: '套餐',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['setMealPackage'],
                              _idpath: ['08707745'],
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_0772151[0]$'],
                                code: 'value',
                              },
                              _codePath: ['setMealPackageType'],
                              _idpath: ['446449'],
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['756366'],
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['reason'],
                              _idpath: ['998092'],
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['963369'],
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '功能目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['dirPrice'],
                              _idpath: ['5900907'],
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['firstReducedPrice'],
                              _idpath: ['359503'],
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['firstReducedDiscount'],
                              _idpath: ['92711793'],
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['secondReducedPrice'],
                              _idpath: ['7291847'],
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['secondReducedDiscount'],
                              _idpath: ['481677'],
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 168731762904886400,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '238414',
                              pageJsonId: '537892',
                              customFuncName: 'updateSetMealInfo',
                              customFuncParams: 'object',
                              paramsObj: { opType: 'setMealPackageType' },
                              paramsObjKeyValueMap: {
                                opType: 'setMealPackageType',
                              },
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168731762904810660,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '126606',
                                  pageJsonId: '537892',
                                  customFuncName: 'feeVerification',
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
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData187.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData187,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_174897')}
              {...injectData}
            />
            <Input
              name={'功能费目录价'}
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
              formItemIndex={2}
              fieldName={'dirPrice'}
              postfix={data?.feeInfo?.unit}
              value={data?.feeInfo?.dirPrice}
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
                id: 'Input_460941',
                uid: 'Input_460941',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ flex: 10 }}
              onChange={(e: any) => {
                const eventDatacustomActionCode488: any = [
                  {
                    type: 'customActionCode',
                    dataId: 168715419868913540,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '238248',
                      pageJsonId: '537892',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 168715419868997950,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '585422',
                          pageJsonId: '537892',
                          pathname: '/commonAuditOrder',
                          pageId: '872682457815691264',
                          customFuncName: 'getFactor',
                          customFuncParams: '$data.sceneSubmit$',
                          modalPath: '/commonAuditOrder',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode488.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatacustomActionCode488,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_460941')}
              {...injectData}
            />
            <Input
              name={'一次优惠后功能费'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'firstReducedPrice'}
              regexp={[
                {
                  id: '799176',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多3位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,3})?$/',
                },
              ]}
              postfix={data?.feeInfo?.unit}
              value={data?.feeInfo?.firstReducedPrice}
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
                id: 'Input_288872',
                uid: 'Input_288872',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc390: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168629295600834600,
                    shielding: true,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '178665',
                      pageJsonId: '537892',
                      customFuncName: 'calFirstReducedDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc390.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc390, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc391: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168674346599108700,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '8195844',
                      pageJsonId: '537892',
                      customFuncName: 'feeVerification',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc391.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc391, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_288872')}
              {...injectData}
            />
            <Input
              name={'一次折扣'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'折'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'自动计算'}
              formItemIndex={4}
              fieldName={'firstReducedDiscount'}
              value={data?.feeInfo?.firstReducedDiscount}
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
                id: 'Input_2563766',
                uid: 'Input_2563766',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2563766')}
              {...injectData}
            />
            <Input
              name={'最低销售价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={data?.feeInfo?.unit}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'lowPrice'}
              formItemIndex={5}
              icon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              allowClear={false}
              value={data?.feeInfo?.lowPrice}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_01845',
                uid: 'Input_01845',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasetDataSource119: any = [
                  {
                    type: 'setDataSource',
                    dataId: 168733778814070270,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '889011',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '08707745',
                          code: 'setMealPackage',
                          name: '套餐',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['setMealPackage'],
                          _idpath: ['08707745'],
                        },
                        {
                          attrId: '446449',
                          code: 'setMealPackageType',
                          name: '套餐包类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['setMealPackageType'],
                          _idpath: ['446449'],
                        },
                        {
                          attrId: '756366',
                          code: 'market',
                          name: '营销案编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['market'],
                          _idpath: ['756366'],
                        },
                        {
                          attrId: '998092',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['reason'],
                          _idpath: ['998092'],
                        },
                        {
                          attrId: '963369',
                          code: 'marketName',
                          name: '营销案名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: { type: [], code: '' },
                          _codePath: ['marketName'],
                          _idpath: ['963369'],
                        },
                        {
                          attrId: '5900907',
                          code: 'dirPrice',
                          name: '功能目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['dirPrice'],
                          _idpath: ['5900907'],
                        },
                        {
                          attrId: '359503',
                          code: 'firstReducedPrice',
                          name: '一次优惠后功能费（元/成员）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['firstReducedPrice'],
                          _idpath: ['359503'],
                        },
                        {
                          attrId: '92711793',
                          code: 'firstReducedDiscount',
                          name: '一次优惠折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['firstReducedDiscount'],
                          _idpath: ['92711793'],
                        },
                        {
                          attrId: '7291847',
                          code: 'secondReducedPrice',
                          name: '二次优惠后功能费（元/成员）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['secondReducedPrice'],
                          _idpath: ['7291847'],
                        },
                        {
                          attrId: '481677',
                          code: 'secondReducedDiscount',
                          name: '二次优惠折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['secondReducedDiscount'],
                          _idpath: ['481677'],
                        },
                        {
                          attrId: '9092028',
                          code: 'probation',
                          name: '试用期',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['probation'],
                          _idpath: ['9092028'],
                        },
                        {
                          attrId: '660217',
                          code: 'servicePayment',
                          name: '服务范围和支付模式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['servicePayment'],
                          _idpath: ['660217'],
                        },
                        {
                          attrId: '945327',
                          code: 'contractExpiredHandle',
                          name: '合同到期后处理方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['contractExpiredHandle'],
                          _idpath: ['945327'],
                        },
                        {
                          attrId: '775544',
                          code: 'serviceFee',
                          name: '服务费',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceFee'],
                          _idpath: ['775544'],
                        },
                        {
                          attrId: '604853',
                          code: 'serviceFeeReducedFee',
                          name: '服务费减免价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceFeeReducedFee'],
                          _idpath: ['604853'],
                        },
                        {
                          attrId: '196345',
                          code: 'serviceFeeTakeNum',
                          name: '服务费收取次数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceFeeTakeNum'],
                          _idpath: ['196345'],
                        },
                        {
                          attrId: '662581',
                          code: 'busyDeadline',
                          name: '业务期限',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['busyDeadline'],
                          _idpath: ['662581'],
                        },
                        {
                          attrId: '18277721',
                          code: 'busyDeadlineBegin',
                          name: '业务期限（起）',
                          type: 'string',
                          initialData: { type: 'static', value: '' },
                          showInput: true,
                          _codePath: ['busyDeadlineBegin'],
                          _idpath: ['18277721'],
                        },
                        {
                          attrId: '407031',
                          code: 'busyDeadlineEnd',
                          name: '业务期限（止）',
                          type: 'string',
                          initialData: { type: 'static', value: '' },
                          showInput: true,
                          _codePath: ['busyDeadlineEnd'],
                          _idpath: ['407031'],
                        },
                        {
                          attrId: '153033',
                          code: 'unit',
                          name: '单位',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['unit'],
                          _idpath: ['153033'],
                        },
                        {
                          attrId: '0977105',
                          code: 'lowPrice',
                          name: '最低销售价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['lowPrice'],
                          _idpath: ['0977105'],
                          value: {
                            type: ['context', '$e.target.value$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '7768355',
                          code: 'busyDeadlineMonth',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['busyDeadlineMonth'],
                          _idpath: ['7768355'],
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
                eventDatasetDataSource119.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource119,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_01845')}
              {...injectData}
            />
            <Input
              name={'二次优惠后功能费'}
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
              formItemIndex={6}
              fieldName={'secondReducedPrice'}
              regexp={[
                {
                  id: '5719196',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多3位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,3})?$/',
                },
              ]}
              postfix={data?.factorForm?.unit}
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
                id: 'Input_977196',
                uid: 'Input_977196',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc392: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168674358789396930,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5009218',
                      pageJsonId: '537892',
                      customFuncName: 'feeVerification',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc392.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc392, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_977196')}
              {...injectData}
            />
            <Input
              name={'二次优惠折扣'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'折'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'自动计算'}
              formItemIndex={7}
              fieldName={'secondReducedDiscount'}
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
                id: 'Input_076244',
                uid: 'Input_076244',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_076244')}
              {...injectData}
            />
            <Select
              name={'服务费'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={8}
              fieldName={'serviceFee'}
              value={data?.feeInfo?.serviceFee}
              $$componentItem={{
                id: 'Select_94911',
                uid: 'Select_94911',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse437: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '052621',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: '==',
                          manualValue: '1001',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168673818238169060,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 168673825487347780,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168673829779413660,
                            children: [],
                            todoOptions: ['disabled', 'selectComp'],
                            options: {
                              compId: [
                                'Input_427622',
                                'Input_460679',
                                'Input_503727',
                                'Input_4349037',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '5597229',
                              disabled: '',
                              compid: [
                                'Input_427622',
                                'Input_460679',
                                'Input_503727',
                                'Input_4349037',
                              ],
                            },
                            actionObjId: 'Input_427622',
                            actionObjName: 'Input',
                            value: 'setDisable',
                            compLib: 'comm',
                            line_number: 5,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'setDisable',
                            dataId: 168673829779413660,
                            options: {
                              compId: [
                                'Input_427622',
                                'Input_460679',
                                'Input_503727',
                                'Input_4349037',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '5597229',
                              disabled: '',
                              compid: [
                                'Input_427622',
                                'Input_460679',
                                'Input_503727',
                                'Input_4349037',
                              ],
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 168673822792496260,
                        options: {
                          compId: ['Input_427622', 'Input_460679'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '791291',
                          valueList: { Input_427622: '', Input_460679: '' },
                          compid: ['Input_427622', 'Input_460679'],
                        },
                        line_number: 2,
                        callback1: [],
                      },
                      {
                        type: 'setDisable',
                        dataId: 168673828207275500,
                        options: {
                          compId: [
                            'Input_427622',
                            'Input_460679',
                            'Input_503727',
                            'Input_4349037',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '8042656',
                          disabled: 'true',
                          compid: [
                            'Input_427622',
                            'Input_460679',
                            'Input_503727',
                            'Input_4349037',
                          ],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168722359768356450,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '238838',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: { type: [], code: '' },
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 4,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse437.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse437, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDatagetSelectedData188: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168717502003085120,
                    options: {
                      compId: 'Select_94911',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '478028',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168717502328409470,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '866572',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_478028[0]$'],
                                code: 'value',
                              },
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 7,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData188.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData188,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_94911')}
              {...injectData}
            />
            <Input
              name={'服务费减免价'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/次'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={9}
              fieldName={'serviceFeeReducedFee'}
              regexp={[
                {
                  id: '571859',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多3位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,3})?$/',
                },
              ]}
              value={data?.feeInfo?.serviceFeeReducedFee}
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
                id: 'Input_503727',
                uid: 'Input_503727',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue176: any = [
                  {
                    type: 'getValue',
                    dataId: 168717565460196740,
                    options: {
                      compId: 'Input_503727',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '8826635',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168717565823290660,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '40836',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$value_8826635$'],
                                code: '',
                              },
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
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
                  },
                ];
                eventDatagetValue176.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue176, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_503727')}
              {...injectData}
            />
            <Input
              name={'服务费收取次数'}
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
              formItemIndex={10}
              fieldName={'serviceFeeTakeNum'}
              regexp={[
                {
                  id: '2146024',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
                },
              ]}
              value={data?.feeInfo?.serviceFeeReducedFee}
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
                id: 'Input_4349037',
                uid: 'Input_4349037',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue177: any = [
                  {
                    type: 'getValue',
                    dataId: 168717568111503230,
                    options: {
                      compId: 'Input_4349037',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '577946',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168717568450570430,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '129224',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$value_577946$'],
                                code: '',
                              },
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
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
                  },
                ];
                eventDatagetValue177.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue177, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_4349037')}
              {...injectData}
            />
            <Select
              name={'试用期'}
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
              fieldName={'probation'}
              formItemIndex={11}
              value={data?.feeInfo?.probation}
              $$componentItem={{
                id: 'Select_603014',
                uid: 'Select_603014',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData189: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168717493275973100,
                    options: {
                      compId: 'Select_603014',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '526332',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 169813625100954370,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '276454',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_526332[0]$'],
                                code: 'value',
                              },
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
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
                eventDatagetSelectedData189.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData189,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_603014')}
              {...injectData}
            />
            <Select
              name={'服务范围和支付模式'}
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
              formItemIndex={12}
              fieldName={'servicePayment'}
              value={data?.feeInfo?.servicePayment}
              $$componentItem={{
                id: 'Select_025227',
                uid: 'Select_025227',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData190: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168717473618863040,
                    options: {
                      compId: 'Select_025227',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '403171',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168717474186196500,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '6614694',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['probation'],
                              _idpath: ['9092028'],
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_403171[0]$'],
                                code: 'value',
                              },
                              _codePath: ['servicePayment'],
                              _idpath: ['660217'],
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFee'],
                              _idpath: ['775544'],
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeReducedFee'],
                              _idpath: ['604853'],
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['serviceFeeTakeNum'],
                              _idpath: ['196345'],
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '0977105',
                              code: 'lowPrice',
                              name: '最低销售价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lowPrice'],
                              _idpath: ['0977105'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
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
                eventDatagetSelectedData190.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData190,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_025227')}
              {...injectData}
            />
            <Select
              name={'合同到期后处理方式'}
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
              formItemIndex={13}
              fieldName={'contractExpiredHandle'}
              value={data?.feeInfo?.contractExpiredHandle}
              $$componentItem={{
                id: 'Select_847412',
                uid: 'Select_847412',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData191: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168717479084097600,
                    options: {
                      compId: 'Select_847412',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '982995',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 16871747981767100,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '205871',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_982995[0]$'],
                                code: 'value',
                              },
                              _codePath: ['contractExpiredHandle'],
                              _idpath: ['945327'],
                              _deletable: true,
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadline'],
                              _idpath: ['662581'],
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineBegin'],
                              _idpath: ['18277721'],
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              _codePath: ['busyDeadlineEnd'],
                              _idpath: ['407031'],
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unit'],
                              _idpath: ['153033'],
                            },
                            {
                              attrId: '7768355',
                              code: 'busyDeadlineMonth',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busyDeadlineMonth'],
                              _idpath: ['7768355'],
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
                eventDatagetSelectedData191.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData191,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_847412')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopy1copy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
    isEdit: '',
  },
});
