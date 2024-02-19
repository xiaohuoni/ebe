// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Form,
  Input,
  Select,
  Table,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const NetworkFeeAudit$$Modal: React.FC<PageProps> = ({
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
}) => {
  const calculEndDiscount = (options_152622: any) => {
    const eventDataclearValue10: any = [
      {
        type: 'clearValue',
        dataId: 168137147297272480,
        options: {
          compId: 'Input_lastDiscount_72621',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '809838',
        },
        line_number: 1,
      },
    ];
    eventDataclearValue10.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue10, { options_152622 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatagetValue35: any = [
      {
        type: 'getValue',
        dataId: 168137148217624260,
        options: {
          compId: 'Input_receiptsPrice_488443',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '158575',
        },
        line_number: 2,
        callback1: [
          {
            type: 'getValue',
            dataId: 168137148217667500,
            options: {
              compId: 'Input_standardPrice_89896',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '393597',
            },
            line_number: 3,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '297098',
                    options: { context: '$value_393597$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_158575$', operate: 'notEmpty' },
                    condId: '3108041',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168137148217625760,
                elseIfs: [],
                line_number: 4,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168137148217655500,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '9291877',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var price=value_158575*10/value_393597;var discount=price.toFixed(3);success(discount)};',
                    },
                    line_number: 5,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 168137148217650270,
                        options: {
                          compId: 'Input_lastDiscount_72621',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '296283',
                          value: '$data_9291877$',
                          valueList: {
                            Input_lastDiscount_72621: '$data_9291877$',
                          },
                        },
                        line_number: 6,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168137154448416220,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '7021059',
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
                                type: ['context', '$data_9291877$'],
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
                        line_number: 7,
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
    eventDatagetValue35.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue35, { options_152622 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculPrice = (options_4731497: any) => {
    const eventDatagetSelectedData14: any = [
      {
        type: 'getSelectedData',
        dataId: 166556110250844500,
        shielding: true,
        options: {
          compId: 'Input_areaType_945066',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '728863',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166556110250855400,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '404162',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){var value=selectedData_728863[0].value;var price;if(value==="1"){price=data.pageParam.localPrice}else{price=data.pageParam.privincePrice}success(price)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 166556110250868130,
                shielding: true,
                options: {
                  compId: 'Input_standardPrice_89896',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '732025',
                  value: '$data_404162$',
                  valueList: { Input_standardPrice_89896: '$data_404162$' },
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'callSelfFunc',
                    dataId: 166556110250874430,
                    shielding: true,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '938447',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
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
    eventDatagetSelectedData14.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData14,
      { options_4731497 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    );
    const eventDataifelse40: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '8666456',
            options: { operate: 'notEmpty' },
            conditionType: 'checkValue',
            objType: 'Select',
            objId: 'Input_719179',
          },
          {
            options: { operate: 'notEmpty' },
            condId: '129181',
            connector: '&&',
            conditionType: 'checkValue',
            objType: 'Select',
            objId: 'Input_areaType_945066',
          },
          {
            options: { operate: 'notEmpty' },
            condId: '883129',
            connector: '&&',
            conditionType: 'checkValue',
            objType: 'Select',
            objId: 'Input_bandwidth_198362',
          },
        ],
        dataId: 167534142857664640,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 167534149611633900,
            shielding: true,
            options: {
              compId: 'Input_areaType_945066',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '92215',
            },
            line_number: 6,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 167534152749343260,
                shielding: true,
                options: {
                  compId: 'Input_719179',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '862124',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'getSelectedData',
                    dataId: 167534169168332900,
                    shielding: true,
                    options: {
                      compId: 'Input_bandwidth_198362',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '922909',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167534169482271230,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '9843979',
                          pageJsonId: '8430824',
                          actionTitle: '获取标准价格',
                          code: 'function main(data,state,success,fail){for(var i=0;i<data.groupLineRateData.length;++i){var groupInfo=groupLineRateData[i];console.log("123456",selectedData_374471[0]);if(groupInfo.lineType==selectedData_374471[0].value&&groupInfo.bandWidth==selectedData_922909[0].value&&groupInfo.transferMode==selectedData_862124[0].value){success(parseFloat(groupInfo.linePrice)/1000)}}};',
                        },
                        line_number: 9,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 167534179477665630,
                            shielding: true,
                            options: {
                              compId: 'Input_standardPrice_89896',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '373195',
                              valueList: {
                                Input_standardPrice_89896: '$data_9843979$',
                              },
                            },
                            line_number: 10,
                            callback1: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 167534184969810600,
                            shielding: true,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '3850568',
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
                                    type: ['customize'],
                                    code: '$parseFloat(data_9843979)*1000$',
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
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse40.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(eventDataifelse40, { options_4731497 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatagetValue36: any = [
      {
        type: 'getValue',
        dataId: 167534243245266020,
        shielding: true,
        options: {
          compId: 'Input_areaType_945066',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '628219',
        },
        line_number: 12,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '446323',
                options: { context: '$value_628219$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167534243505179330,
            elseIfs: [],
            line_number: 13,
            callback1: [
              {
                type: 'getValue',
                dataId: 167534244903420260,
                shielding: true,
                options: {
                  compId: 'Input_719179',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '1840543',
                },
                line_number: 14,
                callback1: [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '874001',
                        options: {
                          context: '$value_1840543$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167534246300853020,
                    elseIfs: [],
                    line_number: 15,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 167534248568811680,
                        shielding: true,
                        options: {
                          compId: 'Input_bandwidth_198362',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '708944',
                        },
                        line_number: 16,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '101459',
                                options: {
                                  context: '$value_708944$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167534249195370430,
                            elseIfs: [],
                            line_number: 17,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 167534250947137180,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '864269',
                                  pageJsonId: '8430824',
                                  actionTitle: '获取标准价格',
                                  code: 'function main(data,state,success,fail){var result=null;console.log("\\u8D44\\u8D39\\u7ED3\\u679C\\u5217\\u8868",data.groupLineRateData);for(var i=0;i<data.groupLineRateData.groupLineRateInfo.length;++i){var groupInfo=data.groupLineRateData.groupLineRateInfo[i];if(groupInfo.lineType==value_628219&&groupInfo.bandWidth==value_708944&&groupInfo.transferMode==value_1840543){result=parseFloat(groupInfo.linePrice)/1000;break}}success(result==null?null:result)};',
                                },
                                line_number: 18,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '25599',
                                        options: {
                                          context: '$data_864269$',
                                          operate: 'empty',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 168136962311437400,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 168136964188290500,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 168198235627669470,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 168198235627650140,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                shielding: true,
                                              },
                                            ],
                                            todoOptions: [
                                              'compId',
                                              'valueList',
                                            ],
                                            options: {
                                              compId:
                                                'Input_standardPrice_89896',
                                              compLib: 'comm',
                                              pageJsonId: '8430824',
                                              compName: 'Input',
                                              id: '457332',
                                              valueList: {
                                                Input_standardPrice_89896:
                                                  '$data_864269$',
                                              },
                                            },
                                            actionObjId:
                                              'Input_standardPrice_89896',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 21,
                                          },
                                        ],
                                        condition: [],
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'setValue',
                                            dataId: 168198235627669470,
                                            shielding: true,
                                            options: {
                                              compId:
                                                'Input_standardPrice_89896',
                                              compLib: 'comm',
                                              pageJsonId: '8430824',
                                              compName: 'Input',
                                              id: '457332',
                                              valueList: {
                                                Input_standardPrice_89896:
                                                  '$data_864269$',
                                              },
                                            },
                                            line_number: 21,
                                            callback1: [],
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 19,
                                    callback1: [
                                      {
                                        type: 'clearValue',
                                        dataId: 168137087913990720,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_standardPrice_89896',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '907402',
                                        },
                                        line_number: 20,
                                      },
                                    ],
                                  },
                                  {
                                    type: 'setDataSource',
                                    dataId: 168137007850594500,
                                    shielding: true,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '0275744',
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
                                            type: ['context', '$data_864269$'],
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
                                    line_number: 22,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'console',
                                    dataId: 168198239671894660,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '422794',
                                      pageJsonId: '8430824',
                                      value: ['$data_864269$'],
                                    },
                                    line_number: 23,
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
            ],
          },
        ],
      },
    ];
    eventDatagetValue36.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue36, { options_4731497 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
    const eventDatagetValue37: any = [
      {
        type: 'getValue',
        dataId: 168363471554286100,
        options: {
          compId: 'Input_areaType_945066',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '074724',
        },
        line_number: 24,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '446323',
                options: { context: '$value_074724$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168363471554226270,
            elseIfs: [],
            line_number: 25,
            callback1: [
              {
                type: 'getValue',
                dataId: 168363473958946430,
                options: {
                  compId: 'Input_bandwidth_198362',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '483814',
                },
                line_number: 26,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '101459',
                        options: {
                          context: '$value_483814$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168363473959051420,
                    elseIfs: [],
                    line_number: 27,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 168363473959043840,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '13194',
                          pageJsonId: '8430824',
                          actionTitle: '获取标准价格',
                          code: 'function main(data,state,success,fail){var result=null;console.log("\\u8D44\\u8D39\\u7ED3\\u679C\\u5217\\u8868",data.groupLineRateData);for(var i=0;i<data.groupLineRateData.groupLineRateInfo.length;++i){var groupInfo=data.groupLineRateData.groupLineRateInfo[i];if(groupInfo.lineType==value_074724&&groupInfo.bandWidth==value_483814){result=parseFloat(groupInfo.linePrice)/1000;break}}success(result==null?null:result)};',
                        },
                        line_number: 28,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '25599',
                                options: {
                                  context: '$data_13194$',
                                  operate: 'empty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 168363473959072480,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168363473959067940,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168363473959043400,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168363473959046800,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: ['compId', 'valueList'],
                                    options: {
                                      compId: 'Input_standardPrice_89896',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '869827',
                                      valueList: {
                                        Input_standardPrice_89896:
                                          '$data_13194$',
                                      },
                                    },
                                    actionObjId: 'Input_standardPrice_89896',
                                    actionObjName: 'Input',
                                    value: 'setValue',
                                    compLib: 'comm',
                                    line_number: 31,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168510230190596860,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168510230190576900,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168510230190505630,
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
                                      id: '8679214',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculEndDiscount',
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 32,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'setValue',
                                    dataId: 168363473959043400,
                                    options: {
                                      compId: 'Input_standardPrice_89896',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '869827',
                                      valueList: {
                                        Input_standardPrice_89896:
                                          '$data_13194$',
                                      },
                                    },
                                    line_number: 31,
                                    callback1: [],
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 168510230190596860,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '8679214',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculEndDiscount',
                                    },
                                    line_number: 32,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 29,
                            callback1: [
                              {
                                type: 'clearValue',
                                dataId: 168363473959036670,
                                options: {
                                  compId: 'Input_standardPrice_89896',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '260111',
                                },
                                line_number: 30,
                              },
                            ],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168363473959064450,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '664805',
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
                                    type: ['context', '$data_13194$'],
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
                            line_number: 33,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'console',
                            dataId: 168363473959068200,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '6547267',
                              pageJsonId: '8430824',
                              value: ['$data_13194$'],
                            },
                            line_number: 34,
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'console',
                        dataId: 169834112861123970,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '4491403',
                          pageJsonId: '8430824',
                          value: [
                            '===带宽===',
                            '$value_483814$',
                            '===区域类型====',
                            '$value_074724$',
                          ],
                        },
                        line_number: 35,
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
    eventDatagetValue37.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue37, { options_4731497 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculReceiptsPriceSum = (options_57729: any) => {
    const eventDatagetValue38: any = [
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
    eventDatagetValue38.params =
      [
        { title: '事件入参', name: 'options_57729', value: '$options_57729$' },
      ] || [];
    CMDGenerator(eventDatagetValue38, { options_57729 }, 'getValue', {
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
    const eventDatavalidateCurrentForm24: any = [
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
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '88138',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data.marketList.length$',
                  operate: '>',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166539616703540030,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166539621826567000,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166539622297927520,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '40315744',
                      pageJsonId: '8430824',
                      type: 'error',
                      value: '请选择营销案',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    shielding: true,
                    line_number: 7,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166539622297927520,
                    shielding: true,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '40315744',
                      pageJsonId: '8430824',
                      type: 'error',
                      value: '请选择营销案',
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166547340336712740,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '1158624',
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
                      value: { type: [], code: 'busiType' },
                      showInput: true,
                      _codePath: ['busiType'],
                      _idpath: ['982351'],
                    },
                    {
                      attrId: '674311',
                      code: 'standardPrice',
                      name: '标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'standardPrice',
                      },
                      showInput: true,
                      _codePath: ['standardPrice'],
                      _idpath: ['674311'],
                    },
                    {
                      attrId: '384707',
                      code: 'receiptsPrice',
                      name: '实收价',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'receiptsPrice',
                      },
                      showInput: true,
                      _codePath: ['receiptsPrice'],
                      _idpath: ['384707'],
                    },
                    {
                      attrId: '7058047',
                      code: 'bandwidth',
                      name: '带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'bandwidth' },
                      showInput: true,
                      _codePath: ['bandwidth'],
                      _idpath: ['7058047'],
                    },
                    {
                      attrId: '323129',
                      code: 'ipv6GiveNum',
                      name: 'IPv6赠送数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6GiveNum'],
                      _idpath: ['323129'],
                    },
                    {
                      attrId: '535103',
                      code: 'ipv4GiveNum',
                      name: 'IPv4赠送数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv4GiveNum'],
                      _idpath: ['535103'],
                    },
                    {
                      attrId: '547733',
                      code: 'ipv6DemandNum',
                      name: 'IPv6需求数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6DemandNum'],
                      _idpath: ['547733'],
                    },
                    {
                      attrId: '8454034',
                      code: 'ipv4DemandNum',
                      name: 'IPv4需求数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv4DemandNum'],
                      _idpath: ['8454034'],
                    },
                    {
                      attrId: '618242',
                      code: 'ipv6BeyondSel',
                      name: 'IPv6超出选择',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6BeyondSel'],
                      _idpath: ['618242'],
                    },
                    {
                      attrId: '167631',
                      code: 'ipv4BeyondNum',
                      name: 'IPv4超出个数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv4BeyondNum'],
                      _idpath: ['167631'],
                    },
                    {
                      attrId: '1633704',
                      code: 'ipv6BeyondCost',
                      name: 'IPv6超出费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6BeyondCost'],
                      _idpath: ['1633704'],
                    },
                    {
                      attrId: '841439',
                      code: 'ipv4BeyondCount',
                      name: 'IPv4元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv4BeyondCount'],
                      _idpath: ['841439'],
                    },
                    {
                      attrId: '755452',
                      code: 'unitPrice',
                      name: '单价（元/G）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['unitPrice'],
                      _idpath: ['755452'],
                    },
                    {
                      attrId: '546822',
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'lastDiscount',
                      },
                      showInput: true,
                      _codePath: ['lastDiscount'],
                      _idpath: ['546822'],
                    },
                    {
                      attrId: '359579',
                      code: 'market',
                      name: '营销案',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['market'],
                      _idpath: ['359579'],
                    },
                    {
                      attrId: '122027',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiTypeName'],
                      _idpath: ['122027'],
                    },
                    {
                      attrId: '8788325',
                      code: 'bandwidthUp',
                      name: '上行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['8788325'],
                    },
                    {
                      attrId: '155411',
                      code: 'bandwidthDown',
                      name: '下行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthDown'],
                      _idpath: ['155411'],
                    },
                    {
                      attrId: '568368',
                      code: 'bandwidthPort',
                      name: 'SDWAN端口带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthPort'],
                      _idpath: ['568368'],
                    },
                    {
                      attrId: '2474105',
                      code: 'singleUseFee',
                      name: '一次性费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['singleUseFee'],
                      _idpath: ['2474105'],
                    },
                    {
                      attrId: '937028',
                      code: 'portFee',
                      name: '端口费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['portFee'],
                      _idpath: ['937028'],
                    },
                    {
                      attrId: '214875',
                      code: 'ipv6BeyondNum',
                      name: 'IPv6超出个数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6BeyondNum'],
                      _idpath: ['214875'],
                    },
                    {
                      attrId: '198626',
                      code: 'ipv6BeyondCount',
                      name: 'IPv6元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6BeyondCount'],
                      _idpath: ['198626'],
                    },
                    {
                      attrId: '300842',
                      code: 'standardPriceSdWan',
                      name: 'SDWAN标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['standardPriceSdWan'],
                      _idpath: ['300842'],
                    },
                    {
                      attrId: '39146',
                      code: 'receiptsPriceSdWan',
                      name: 'SDWAN实收价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['receiptsPriceSdWan'],
                      _idpath: ['39146'],
                    },
                    {
                      attrId: '684821',
                      code: 'rowId',
                      name: '行id',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['rowId'],
                      _idpath: ['684821'],
                    },
                    {
                      attrId: '1659093',
                      code: 'bandwidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthName'],
                      _idpath: ['1659093'],
                    },
                    {
                      attrId: '336101',
                      code: 'specialLine',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['specialLine'],
                      _idpath: ['336101'],
                    },
                    {
                      attrId: '500349',
                      code: 'crmAreaType',
                      name: '区域类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['crmAreaType'],
                      _idpath: ['500349'],
                    },
                    {
                      attrId: '628577',
                      code: 'row',
                      name: '条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['row'],
                      _idpath: ['628577'],
                    },
                    {
                      attrId: '707421',
                      code: 'crmJoinWayName',
                      name: '接入方式名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['crmJoinWayName'],
                      _idpath: ['707421'],
                    },
                    {
                      attrId: '865421',
                      code: 'receiptsPriceSum',
                      name: '总实收价（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['receiptsPriceSum'],
                      _idpath: ['865421'],
                    },
                    {
                      attrId: '933879',
                      code: 'marketName',
                      name: '营销案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['marketName'],
                      _idpath: ['933879'],
                    },
                    {
                      attrId: '2669222',
                      code: 'crmJoinWay',
                      name: '接入方式',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['crmJoinWay'],
                      _idpath: ['2669222'],
                    },
                    {
                      attrId: '7134342',
                      code: 'crmAreaTypeName',
                      name: '区域类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['crmAreaTypeName'],
                      _idpath: ['7134342'],
                    },
                    {
                      attrId: '007759',
                      code: 'marketList',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['marketList'],
                      _idpath: ['007759'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166547340699023970,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '129328',
                      pageJsonId: '8430824',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var market="";for(var i=0;i<data.marketList.length;i++){if(i!=data.marketList.length-1){market+=data.marketList[i].saleId+";"}else{market+=data.marketList[i].saleId}}data.feeInfo.market=market;data.feeInfo.marketList=data.marketList;success(data.feeInfo)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 166547340699007600,
                        shielding: true,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '767915',
                          pageJsonId: '8430824',
                          params: '$data_129328$',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 166547340699065300,
                        shielding: true,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '704995',
                          pageJsonId: '8430824',
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
          },
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
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '982351',
                  code: 'busiType',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'busiType',
                  },
                  showInput: true,
                  _codePath: ['busiType'],
                  _idpath: ['982351'],
                },
                {
                  attrId: '674311',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'standardPrice',
                  },
                  showInput: true,
                  _codePath: ['standardPrice'],
                  _idpath: ['674311'],
                },
                {
                  attrId: '384707',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'receiptsPrice',
                  },
                  showInput: true,
                  _codePath: ['receiptsPrice'],
                  _idpath: ['384707'],
                },
                {
                  attrId: '7058047',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'bandwidth',
                  },
                  showInput: true,
                  _codePath: ['bandwidth'],
                  _idpath: ['7058047'],
                },
                {
                  attrId: '323129',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6GiveNum'],
                  _idpath: ['323129'],
                },
                {
                  attrId: '535103',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv4GiveNum'],
                  _idpath: ['535103'],
                },
                {
                  attrId: '547733',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6DemandNum'],
                  _idpath: ['547733'],
                },
                {
                  attrId: '8454034',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv4DemandNum'],
                  _idpath: ['8454034'],
                },
                {
                  attrId: '618242',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6BeyondSel'],
                  _idpath: ['618242'],
                },
                {
                  attrId: '167631',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv4BeyondNum'],
                  _idpath: ['167631'],
                },
                {
                  attrId: '1633704',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6BeyondCost'],
                  _idpath: ['1633704'],
                },
                {
                  attrId: '841439',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv4BeyondCount'],
                  _idpath: ['841439'],
                },
                {
                  attrId: '755452',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['unitPrice'],
                  _idpath: ['755452'],
                },
                {
                  attrId: '546822',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'lastDiscount',
                  },
                  showInput: true,
                  _codePath: ['lastDiscount'],
                  _idpath: ['546822'],
                },
                {
                  attrId: '359579',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['market'],
                  _idpath: ['359579'],
                },
                {
                  attrId: '122027',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['busiTypeName'],
                  _idpath: ['122027'],
                },
                {
                  attrId: '8788325',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthUp'],
                  _idpath: ['8788325'],
                },
                {
                  attrId: '155411',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthDown'],
                  _idpath: ['155411'],
                },
                {
                  attrId: '568368',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthPort'],
                  _idpath: ['568368'],
                },
                {
                  attrId: '2474105',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['singleUseFee'],
                  _idpath: ['2474105'],
                },
                {
                  attrId: '937028',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['portFee'],
                  _idpath: ['937028'],
                },
                {
                  attrId: '214875',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6BeyondNum'],
                  _idpath: ['214875'],
                },
                {
                  attrId: '198626',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6BeyondCount'],
                  _idpath: ['198626'],
                },
                {
                  attrId: '300842',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['standardPriceSdWan'],
                  _idpath: ['300842'],
                },
                {
                  attrId: '39146',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['receiptsPriceSdWan'],
                  _idpath: ['39146'],
                },
                {
                  attrId: '684821',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['684821'],
                },
                {
                  attrId: '1659093',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthName'],
                  _idpath: ['1659093'],
                },
                {
                  attrId: '007759',
                  code: 'marketList',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['marketList'],
                  _idpath: ['007759'],
                },
                {
                  attrId: '628577',
                  code: 'row',
                  name: '条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'row',
                  },
                  showInput: true,
                  _codePath: ['row'],
                  _idpath: ['628577'],
                },
                {
                  attrId: '865421',
                  code: 'receiptsPriceSum',
                  name: '总实收价（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'receiptsPriceSum',
                  },
                  showInput: true,
                  _codePath: ['receiptsPriceSum'],
                  _idpath: ['865421'],
                },
                {
                  attrId: '933879',
                  code: 'marketName',
                  name: '营销案名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['marketName'],
                  _idpath: ['933879'],
                },
                {
                  attrId: '336101',
                  code: 'specialLine',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['specialLine'],
                  _idpath: ['336101'],
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'specialLine',
                  },
                },
                {
                  attrId: '500349',
                  code: 'crmAreaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['crmAreaType'],
                  _idpath: ['500349'],
                },
                {
                  attrId: '707421',
                  code: 'crmJoinWayName',
                  name: '接入方式名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['crmJoinWayName'],
                  _idpath: ['707421'],
                },
                {
                  attrId: '2669222',
                  code: 'crmJoinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['crmJoinWay'],
                  _idpath: ['2669222'],
                },
                {
                  attrId: '7134342',
                  code: 'crmAreaTypeName',
                  name: '区域类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['crmAreaTypeName'],
                  _idpath: ['7134342'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 8,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166970476803611500,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '329408',
                  pageJsonId: '8430824',
                  actionTitle: '',
                  code: 'function main(data,state,success,fail){var _data$marketList;var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var market="";var marketName="";if(data!==null&&data!==void 0&&(_data$marketList=data.marketList)!==null&&_data$marketList!==void 0&&_data$marketList.length){for(var i=0;i<data.marketList.length;i++){if(i!=data.marketList.length-1){market+=data.marketList[i].saleId+";";marketName+=data.marketList[i].saleName+";"}else{market+=data.marketList[i].saleId;marketName+=data.marketList[i].saleName+";"}}}data.feeInfo.marketName=marketName;data.feeInfo.market=market;data.feeInfo.marketList=data.marketList||[];success(data.feeInfo)};',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 16697047680363892,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '829086',
                      pageJsonId: '8430824',
                      params: '$data_329408$',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166970476803656500,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '51397907',
                      pageJsonId: '8430824',
                    },
                    line_number: 11,
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
    eventDatavalidateCurrentForm24.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm24, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal12: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal12.params = [] || [];
    CMDGenerator(eventDatacloseModal12, {}, 'closeModal', {
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
    const eventDataapiRequest164: any = [
      {
        type: 'apiRequest',
        dataId: 166539187537183580,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '559387',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryMarketCaseInfo',
          _apiCode: 'queryMarketCaseInfo',
          _source: 'rhin',
          _serviceId: '896680797913452544',
          _serviceTitle: '查询营销案信息: queryMarketCaseInfo',
          params: 'object',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166539367958529820,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '3698476',
              pageJsonId: '8430824',
              dataSourceId: 166539345524605820,
              dataSourceName: 'marketCaseInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '852366',
                  code: 'code',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '795578',
                  code: 'name',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '690458',
                  code: 'desc',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              newData: '$reply_559387?.resultData$',
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '452131',
                    options: {
                      context: '$state.feeInfo$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166539708773773000,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166539708773839300,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '3874338',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var market=state.feeInfo.market;var markets=market.split(";");var marketList=[];for(var i=0;i<data.marketCaseInfo.length;i++){var exit=markets.findIndex(function(item){return item===data.marketCaseInfo[i].code});if(exit!=-1){marketList.push(data.marketCaseInfo[i])}}success(marketList)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166539849783559740,
                        shielding: true,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '863879',
                          pageJsonId: '8430824',
                          dataSourceId: 166452752557535940,
                          dataSourceName: 'marketList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '302396',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '969052',
                              code: 'saleId',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '395448',
                              code: 'saleName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7610088',
                              code: 'saleDesc',
                              name: '营销案描述',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_3874338$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 5,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 166540269101210050,
                    shielding: true,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '101353',
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
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'busiType',
                          },
                          showInput: true,
                          _codePath: ['busiType'],
                          _idpath: ['982351'],
                        },
                        {
                          attrId: '674311',
                          code: 'standardPrice',
                          name: '标准价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'standardPrice',
                          },
                          showInput: true,
                          _codePath: ['standardPrice'],
                          _idpath: ['674311'],
                        },
                        {
                          attrId: '384707',
                          code: 'receiptsPrice',
                          name: '实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'receiptsPrice',
                          },
                          showInput: true,
                          _codePath: ['receiptsPrice'],
                          _idpath: ['384707'],
                        },
                        {
                          attrId: '7058047',
                          code: 'bandwidth',
                          name: '带宽',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidth',
                          },
                          showInput: true,
                          _codePath: ['bandwidth'],
                          _idpath: ['7058047'],
                        },
                        {
                          attrId: '323129',
                          code: 'ipv6GiveNum',
                          name: 'IPv6赠送数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6GiveNum',
                          },
                          showInput: true,
                          _codePath: ['ipv6GiveNum'],
                          _idpath: ['323129'],
                        },
                        {
                          attrId: '535103',
                          code: 'ipv4GiveNum',
                          name: 'IPv4赠送数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4GiveNum',
                          },
                          showInput: true,
                          _codePath: ['ipv4GiveNum'],
                          _idpath: ['535103'],
                        },
                        {
                          attrId: '547733',
                          code: 'ipv6DemandNum',
                          name: 'IPv6需求数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6DemandNum',
                          },
                          showInput: true,
                          _codePath: ['ipv6DemandNum'],
                          _idpath: ['547733'],
                        },
                        {
                          attrId: '8454034',
                          code: 'ipv4DemandNum',
                          name: 'IPv4需求数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4DemandNum',
                          },
                          showInput: true,
                          _codePath: ['ipv4DemandNum'],
                          _idpath: ['8454034'],
                        },
                        {
                          attrId: '618242',
                          code: 'ipv6BeyondSel',
                          name: 'IPv6超出选择',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondSel',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondSel'],
                          _idpath: ['618242'],
                        },
                        {
                          attrId: '167631',
                          code: 'ipv4BeyondNum',
                          name: 'IPv4超出个数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4BeyondNum',
                          },
                          showInput: true,
                          _codePath: ['ipv4BeyondNum'],
                          _idpath: ['167631'],
                        },
                        {
                          attrId: '1633704',
                          code: 'ipv6BeyondCost',
                          name: 'IPv6超出费用',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondCost',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondCost'],
                          _idpath: ['1633704'],
                        },
                        {
                          attrId: '841439',
                          code: 'ipv4BeyondCount',
                          name: 'IPv4元/月/个',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4BeyondCount',
                          },
                          showInput: true,
                          _codePath: ['ipv4BeyondCount'],
                          _idpath: ['841439'],
                        },
                        {
                          attrId: '755452',
                          code: 'unitPrice',
                          name: '单价（元/G）',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'unitPrice',
                          },
                          showInput: true,
                          _codePath: ['unitPrice'],
                          _idpath: ['755452'],
                        },
                        {
                          attrId: '546822',
                          code: 'lastDiscount',
                          name: '最终折扣',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'lastDiscount',
                          },
                          showInput: true,
                          _codePath: ['lastDiscount'],
                          _idpath: ['546822'],
                        },
                        {
                          attrId: '359579',
                          code: 'market',
                          name: '营销案',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: [], code: 'market' },
                          showInput: true,
                          _codePath: ['market'],
                          _idpath: ['359579'],
                        },
                        {
                          attrId: '122027',
                          code: 'busiTypeName',
                          name: '业务类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'busiTypeName',
                          },
                          showInput: true,
                          _codePath: ['busiTypeName'],
                          _idpath: ['122027'],
                        },
                        {
                          attrId: '8788325',
                          code: 'bandwidthUp',
                          name: '上行宽带',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthUp',
                          },
                          showInput: true,
                          _codePath: ['bandwidthUp'],
                          _idpath: ['8788325'],
                        },
                        {
                          attrId: '155411',
                          code: 'bandwidthDown',
                          name: '下行宽带',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthDown',
                          },
                          showInput: true,
                          _codePath: ['bandwidthDown'],
                          _idpath: ['155411'],
                        },
                        {
                          attrId: '568368',
                          code: 'bandwidthPort',
                          name: 'SDWAN端口带宽',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthPort',
                          },
                          showInput: true,
                          _codePath: ['bandwidthPort'],
                          _idpath: ['568368'],
                        },
                        {
                          attrId: '2474105',
                          code: 'singleUseFee',
                          name: '一次性费用',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'singleUseFee',
                          },
                          showInput: true,
                          _codePath: ['singleUseFee'],
                          _idpath: ['2474105'],
                        },
                        {
                          attrId: '937028',
                          code: 'portFee',
                          name: '端口费',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'portFee',
                          },
                          showInput: true,
                          _codePath: ['portFee'],
                          _idpath: ['937028'],
                        },
                        {
                          attrId: '214875',
                          code: 'ipv6BeyondNum',
                          name: 'IPv6超出个数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondNum',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondNum'],
                          _idpath: ['214875'],
                        },
                        {
                          attrId: '198626',
                          code: 'ipv6BeyondCount',
                          name: 'IPv6元/月/个',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondCount',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondCount'],
                          _idpath: ['198626'],
                        },
                        {
                          attrId: '300842',
                          code: 'standardPriceSdWan',
                          name: 'SDWAN标准价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'standardPriceSdWan',
                          },
                          showInput: true,
                          _codePath: ['standardPriceSdWan'],
                          _idpath: ['300842'],
                        },
                        {
                          attrId: '39146',
                          code: 'receiptsPriceSdWan',
                          name: 'SDWAN实收价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'receiptsPriceSdWan',
                          },
                          showInput: true,
                          _codePath: ['receiptsPriceSdWan'],
                          _idpath: ['39146'],
                        },
                        {
                          attrId: '684821',
                          code: 'rowId',
                          name: '行id',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'rowId',
                          },
                          showInput: true,
                          _codePath: ['rowId'],
                          _idpath: ['684821'],
                        },
                        {
                          attrId: '1659093',
                          code: 'bandwidthName',
                          name: '带宽名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthName',
                          },
                          showInput: true,
                          _codePath: ['bandwidthName'],
                          _idpath: ['1659093'],
                        },
                        {
                          attrId: '007759',
                          code: 'marketList',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['marketList'],
                          _idpath: ['007759'],
                        },
                        {
                          attrId: '628577',
                          code: 'row',
                          name: '条数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['row'],
                          _idpath: ['628577'],
                        },
                        {
                          attrId: '865421',
                          code: 'receiptsPriceSum',
                          name: '总实收价（元）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['receiptsPriceSum'],
                          _idpath: ['865421'],
                        },
                        {
                          attrId: '933879',
                          code: 'marketName',
                          name: '营销案名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['marketName'],
                          _idpath: ['933879'],
                        },
                        {
                          attrId: '500349',
                          code: 'crmAreaType',
                          name: '区域类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['crmAreaType'],
                          _idpath: ['500349'],
                        },
                        {
                          attrId: '7134342',
                          code: 'crmAreaTypeName',
                          name: '区域类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['crmAreaTypeName'],
                          _idpath: ['7134342'],
                        },
                        {
                          attrId: '2669222',
                          code: 'crmJoinWay',
                          name: '接入方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['crmJoinWay'],
                          _idpath: ['2669222'],
                        },
                        {
                          attrId: '707421',
                          code: 'crmJoinWayName',
                          name: '接入方式名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['crmJoinWayName'],
                          _idpath: ['707421'],
                        },
                        {
                          attrId: '336101',
                          code: 'specialLine',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['specialLine'],
                          _idpath: ['336101'],
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 166556203035576420,
                        shielding: true,
                        options: {
                          compId: 'Input_bandwidth_198362',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '5368964',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 166556203035532200,
                            shielding: true,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '433466',
                              pageJsonId: '8430824',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'getLineConfig',
                              _apiCode: 'getLineConfig',
                              _source: 'rhin',
                              _serviceId: '896590341456502784',
                              _serviceTitle:
                                '获取专线配置信息-hdb: getLineConfig',
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
                                  dataKey: '514063_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '514063_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '514063_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'busiType',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.busiType',
                                      compType: 'Input',
                                      name: 'busiType',
                                      parents: ['body'],
                                      id: 'body.busiType',
                                      dataKey: '514063_body.busiType',
                                      value: {
                                        type: ['customize'],
                                        code: 'networkFeeAudit',
                                      },
                                    },
                                    {
                                      code: 'bandWitch',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.bandWitch',
                                      compType: 'Input',
                                      name: 'bandWitch',
                                      parents: ['body'],
                                      id: 'body.bandWitch',
                                      dataKey: '514063_body.bandWitch',
                                      value: {
                                        type: ['customize'],
                                        code: '$selectedData_5368964[0].label$',
                                      },
                                    },
                                    {
                                      code: 'bandwitchDown',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.bandwitchDown',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.bandwitchDown',
                                      dataKey: '514063_body.bandwitchDown',
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '514063_body',
                                },
                              ],
                            },
                            line_number: 8,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 166556203035533000,
                                shielding: true,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '61610564',
                                  pageJsonId: '8430824',
                                  dataSourceId: 166556050488506270,
                                  dataSourceName: 'pageParam',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '85042',
                                      code: 'localPrice',
                                      name: '标准价格、本地市价格',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_433466?.resultData[0].localPrice$',
                                      },
                                    },
                                    {
                                      attrId: '176213',
                                      code: 'privincePrice',
                                      name: '省内跨市价格',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_433466?.resultData[0].privincePrice$',
                                      },
                                    },
                                  ],
                                  operateType: 1,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                },
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166556203035587400,
                                    shielding: true,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '905747',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculPrice',
                                    },
                                    line_number: 10,
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
    ];
    eventDataapiRequest164.params = [] || [];
    CMDGenerator(eventDataapiRequest164, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest165: any = [
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '14766_body',
            },
          ],
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166530137693066660,
            options: {
              compId: 'Input_busiType_956176',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '908097',
              data: '$reply_14766?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest165.params = [] || [];
    CMDGenerator(eventDataapiRequest165, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest166: any = [
      {
        type: 'apiRequest',
        dataId: 166530305308729150,
        shielding: true,
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '240965_body',
            },
          ],
        },
        line_number: 13,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166530307974384420,
            shielding: true,
            options: {
              compId: 'Input_bandwidth_198362',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '511085',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_240965?.resultData$',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest166.params = [] || [];
    CMDGenerator(eventDataapiRequest166, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest167: any = [
      {
        type: 'apiRequest',
        dataId: 166530185199332640,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '485509',
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
              dataKey: '485509_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '485509_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '485509_query',
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
                  dataKey: '485509_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
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
                  dataKey: '485509_body.attrCode',
                  value: { type: ['customize'], code: 'areaType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '485509_body',
            },
          ],
        },
        line_number: 15,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166547536108699330,
            shielding: true,
            options: {
              compId: 'Input_areaType_945066',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '824402',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_485509?.resultData$',
            },
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest167.params = [] || [];
    CMDGenerator(eventDataapiRequest167, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest168: any = [
      {
        type: 'apiRequest',
        dataId: 166547108393365630,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '847654',
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
              dataKey: '847654_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '847654_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '847654_query',
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
                  dataKey: '847654_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
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
                  dataKey: '847654_body.attrCode',
                  value: { type: ['customize'], code: 'joinWay' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '847654_body',
            },
          ],
        },
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166547111826941570,
            shielding: true,
            options: {
              compId: 'Input_719179',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '869549',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_847654?.resultData$',
            },
            line_number: 18,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest168.params = [] || [];
    CMDGenerator(eventDataapiRequest168, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest169: any = [
      {
        type: 'apiRequest',
        dataId: 167386111804767330,
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1449723_body',
            },
          ],
        },
        line_number: 19,
        callback1: [
          {
            type: 'ifelse',
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
            line_number: 20,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167386111804754340,
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
                line_number: 21,
                callback1: [],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167533850158242880,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '835625',
                  pageJsonId: '8430824',
                  actionTitle: '区域类型',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.lineType==""||groupInfo.lineType==null){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].lineType==groupInfo.lineType){flag=false;break}}if(flag){console.log("\\u533A\\u57DF\\u7C7B\\u578B",groupInfo);lanList.push(groupInfo)}}success(lanList)};',
                },
                line_number: 22,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167533887058808960,
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
                    line_number: 23,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167534197747662560,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '138771',
                  pageJsonId: '8430824',
                  actionTitle: '带宽',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.bandWidth==null||groupInfo.bandWidth==""){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].bandWidth==groupInfo.bandWidth){flag=false;break}}if(flag){lanList.push(groupInfo)}}for(var _i=0;_i<lanList.length;++_i){for(var _j=_i+1;_j<lanList.length;++_j){var bandWidthCompara=-1;if(lanList[_j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(lanList[_j].bandWidthName.split("M")[0])}else if(lanList[_j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(lanList[_j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(lanList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(lanList[_i].bandWidthName.split("M")[0])}else if(lanList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(lanList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=lanList[_i];lanList[_i]=lanList[_j];lanList[_j]=temp}}}success(lanList)};',
                },
                line_number: 24,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167534202438540800,
                    options: {
                      compId: 'Input_bandwidth_198362',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '5477746',
                      data: '$data_138771$',
                      labelKey: 'bandWidthName',
                      valueKey: 'bandWidth',
                    },
                    line_number: 25,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167534282301105760,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '473022',
                  pageJsonId: '8430824',
                  actionTitle: '接入方式',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.transferMode==null||groupInfo.transferMode==""){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].transferMode==groupInfo.transferMode){flag=false;break}}if(flag){lanList.push(groupInfo)}}success(lanList)};',
                },
                line_number: 26,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167534288678270560,
                    options: {
                      compId: 'Input_719179',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '254512',
                      data: '$data_473022$',
                      valueKey: 'transferMode',
                      labelKey: 'transferModeName',
                    },
                    line_number: 27,
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
    eventDataapiRequest169.params = [] || [];
    CMDGenerator(eventDataapiRequest169, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse103: any = [
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
        line_number: 28,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167386144145100900,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '723304',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){var market=state.feeInfo.marketList;success(market)};',
            },
            line_number: 29,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167386144145102200,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '5635813',
                  pageJsonId: '8430824',
                  dataSourceId: 166452752557535940,
                  dataSourceName: 'marketList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '302396',
                      code: 'rowId',
                      name: '行id',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '969052',
                      code: 'saleId',
                      name: '营销案编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '395448',
                      code: 'saleName',
                      name: '营销案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7610088',
                      code: 'saleDesc',
                      name: '营销案描述',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_723304$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 30,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 167386144145163700,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '427075',
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
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiType',
                  },
                  showInput: true,
                  _codePath: ['busiType'],
                  _idpath: ['982351'],
                },
                {
                  attrId: '674311',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'standardPrice',
                  },
                  showInput: true,
                  _codePath: ['standardPrice'],
                  _idpath: ['674311'],
                },
                {
                  attrId: '384707',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'receiptsPrice',
                  },
                  showInput: true,
                  _codePath: ['receiptsPrice'],
                  _idpath: ['384707'],
                },
                {
                  attrId: '7058047',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidth',
                  },
                  showInput: true,
                  _codePath: ['bandwidth'],
                  _idpath: ['7058047'],
                },
                {
                  attrId: '323129',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6GiveNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6GiveNum'],
                  _idpath: ['323129'],
                },
                {
                  attrId: '535103',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4GiveNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4GiveNum'],
                  _idpath: ['535103'],
                },
                {
                  attrId: '547733',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6DemandNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6DemandNum'],
                  _idpath: ['547733'],
                },
                {
                  attrId: '8454034',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4DemandNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4DemandNum'],
                  _idpath: ['8454034'],
                },
                {
                  attrId: '618242',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondSel',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondSel'],
                  _idpath: ['618242'],
                },
                {
                  attrId: '167631',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4BeyondNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondNum'],
                  _idpath: ['167631'],
                },
                {
                  attrId: '1633704',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondCost',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondCost'],
                  _idpath: ['1633704'],
                },
                {
                  attrId: '841439',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4BeyondCount',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondCount'],
                  _idpath: ['841439'],
                },
                {
                  attrId: '755452',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'unitPrice',
                  },
                  showInput: true,
                  _codePath: ['unitPrice'],
                  _idpath: ['755452'],
                },
                {
                  attrId: '546822',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'lastDiscount',
                  },
                  showInput: true,
                  _codePath: ['lastDiscount'],
                  _idpath: ['546822'],
                },
                {
                  attrId: '359579',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'market',
                  },
                  showInput: true,
                  _codePath: ['market'],
                  _idpath: ['359579'],
                },
                {
                  attrId: '122027',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiTypeName',
                  },
                  showInput: true,
                  _codePath: ['busiTypeName'],
                  _idpath: ['122027'],
                },
                {
                  attrId: '500349',
                  code: 'crmAreaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'crmAreaType',
                  },
                  showInput: true,
                  _codePath: ['crmAreaType'],
                  _idpath: ['500349'],
                },
                {
                  attrId: '2669222',
                  code: 'crmJoinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'crmJoinWay',
                  },
                  showInput: true,
                  _codePath: ['crmJoinWay'],
                  _idpath: ['2669222'],
                },
                {
                  attrId: '8788325',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthUp',
                  },
                  showInput: true,
                  _codePath: ['bandwidthUp'],
                  _idpath: ['8788325'],
                },
                {
                  attrId: '155411',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthDown',
                  },
                  showInput: true,
                  _codePath: ['bandwidthDown'],
                  _idpath: ['155411'],
                },
                {
                  attrId: '568368',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthPort',
                  },
                  showInput: true,
                  _codePath: ['bandwidthPort'],
                  _idpath: ['568368'],
                },
                {
                  attrId: '2474105',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'singleUseFee',
                  },
                  showInput: true,
                  _codePath: ['singleUseFee'],
                  _idpath: ['2474105'],
                },
                {
                  attrId: '937028',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'portFee',
                  },
                  showInput: true,
                  _codePath: ['portFee'],
                  _idpath: ['937028'],
                },
                {
                  attrId: '214875',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondNum'],
                  _idpath: ['214875'],
                },
                {
                  attrId: '198626',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondCount',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondCount'],
                  _idpath: ['198626'],
                },
                {
                  attrId: '300842',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'standardPriceSdWan',
                  },
                  showInput: true,
                  _codePath: ['standardPriceSdWan'],
                  _idpath: ['300842'],
                },
                {
                  attrId: '39146',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'receiptsPriceSdWan',
                  },
                  showInput: true,
                  _codePath: ['receiptsPriceSdWan'],
                  _idpath: ['39146'],
                },
                {
                  attrId: '684821',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'rowId',
                  },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['684821'],
                },
                {
                  attrId: '7134342',
                  code: 'crmAreaTypeName',
                  name: '区域类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'crmAreaTypeName',
                  },
                  showInput: true,
                  _codePath: ['crmAreaTypeName'],
                  _idpath: ['7134342'],
                },
                {
                  attrId: '1659093',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthName',
                  },
                  showInput: true,
                  _codePath: ['bandwidthName'],
                  _idpath: ['1659093'],
                },
                {
                  attrId: '707421',
                  code: 'crmJoinWayName',
                  name: '接入方式名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'crmJoinWayName',
                  },
                  showInput: true,
                  _codePath: ['crmJoinWayName'],
                  _idpath: ['707421'],
                },
                {
                  attrId: '007759',
                  code: 'marketList',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'marketList',
                  },
                  showInput: true,
                  _codePath: ['marketList'],
                  _idpath: ['007759'],
                },
                {
                  attrId: '628577',
                  code: 'row',
                  name: '条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.feeInfo$'], code: 'row' },
                  showInput: true,
                  _codePath: ['row'],
                  _idpath: ['628577'],
                },
                {
                  attrId: '865421',
                  code: 'receiptsPriceSum',
                  name: '总实收价（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'receiptsPriceSum',
                  },
                  showInput: true,
                  _codePath: ['receiptsPriceSum'],
                  _idpath: ['865421'],
                },
                {
                  attrId: '933879',
                  code: 'marketName',
                  name: '营销案名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'marketName',
                  },
                  showInput: true,
                  _codePath: ['marketName'],
                  _idpath: ['933879'],
                },
                {
                  attrId: '336101',
                  code: 'specialLine',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['specialLine'],
                  _idpath: ['336101'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 31,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 167386144145115070,
                shielding: true,
                options: {
                  compId: 'Input_bandwidth_198362',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '4171',
                },
                line_number: 32,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 167386144145156900,
                    shielding: true,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '269694',
                      pageJsonId: '8430824',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'getLineConfig',
                      _apiCode: 'getLineConfig',
                      _source: 'rhin',
                      _serviceId: '896590341456502784',
                      _serviceTitle: '获取专线配置信息-hdb: getLineConfig',
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
                          dataKey: '514063_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '514063_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '514063_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'busiType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.busiType',
                              compType: 'Input',
                              name: 'busiType',
                              parents: ['body'],
                              id: 'body.busiType',
                              dataKey: '514063_body.busiType',
                              value: {
                                type: ['customize'],
                                code: 'networkFeeAudit',
                              },
                            },
                            {
                              code: 'bandWitch',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.bandWitch',
                              compType: 'Input',
                              name: 'bandWitch',
                              parents: ['body'],
                              id: 'body.bandWitch',
                              dataKey: '514063_body.bandWitch',
                              value: {
                                type: ['customize'],
                                code: '$selectedData_4171[0].label$',
                              },
                            },
                            {
                              code: 'bandwitchDown',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.bandwitchDown',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.bandwitchDown',
                              dataKey: '514063_body.bandwitchDown',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '514063_body',
                        },
                      ],
                    },
                    line_number: 33,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167386144145182530,
                        shielding: true,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '9027742',
                          pageJsonId: '8430824',
                          dataSourceId: 166556050488506270,
                          dataSourceName: 'pageParam',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '85042',
                              code: 'localPrice',
                              name: '标准价格、本地市价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_269694?.resultData[0].localPrice$',
                              },
                            },
                            {
                              attrId: '176213',
                              code: 'privincePrice',
                              name: '省内跨市价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_269694?.resultData[0].privincePrice$',
                              },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 34,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 167386144145163650,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '284351',
                              pageJsonId: '8430824',
                              customFuncName: 'calculPrice',
                            },
                            line_number: 35,
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
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '201595',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.feeInfo.busiType$',
                  operate: '==',
                  manualValue: '2',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170597483592394620,
            elseIfs: [],
            line_number: 36,
            callback1: [
              {
                type: 'setVisible',
                dataId: 170597486885008740,
                options: {
                  compId: [
                    'Input_40440484',
                    'View_9239465',
                    'View_731177',
                    'Text_78114',
                    'Text_15943706',
                    'View_30524',
                    'View_646185',
                    'View_08044',
                    'Button_9404796',
                  ],
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '493685',
                  visible: 'true',
                  compid: [
                    'Input_40440484',
                    'View_9239465',
                    'View_731177',
                    'Text_78114',
                    'Text_15943706',
                    'View_30524',
                    'View_646185',
                    'View_08044',
                    'Button_9404796',
                  ],
                },
                line_number: 37,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse103.params = [] || [];
    CMDGenerator(eventDataifelse103, {}, 'ifelse', {
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
        ref={(r: any) => (refs['View_8430824_1'] = r)}
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
          ref={(r: any) => (refs['View_917911'] = r)}
          {...injectData}
        >
          <Form
            name={'广域网'}
            colSpan={12}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_981467'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.feeInfo}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_981467',
              uid: 'Form_981467',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={() => {
              const eventDatasetDataSource72: any = [
                {
                  type: 'setDataSource',
                  dataId: 166452673655220600,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '74294704',
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
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'busiType',
                        },
                        showInput: true,
                        _codePath: ['busiType'],
                        _idpath: ['982351'],
                      },
                      {
                        attrId: '674311',
                        code: 'standardPrice',
                        name: '标准价格',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'standardPrice',
                        },
                        showInput: true,
                        _codePath: ['standardPrice'],
                        _idpath: ['674311'],
                      },
                      {
                        attrId: '384707',
                        code: 'receiptsPrice',
                        name: '实收价',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPrice',
                        },
                        showInput: true,
                        _codePath: ['receiptsPrice'],
                        _idpath: ['384707'],
                      },
                      {
                        attrId: '7058047',
                        code: 'bandwidth',
                        name: '带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'bandwidth',
                        },
                        showInput: true,
                        _codePath: ['bandwidth'],
                        _idpath: ['7058047'],
                      },
                      {
                        attrId: '323129',
                        code: 'ipv6GiveNum',
                        name: 'IPv6赠送数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6GiveNum'],
                        _idpath: ['323129'],
                      },
                      {
                        attrId: '535103',
                        code: 'ipv4GiveNum',
                        name: 'IPv4赠送数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv4GiveNum'],
                        _idpath: ['535103'],
                      },
                      {
                        attrId: '547733',
                        code: 'ipv6DemandNum',
                        name: 'IPv6需求数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6DemandNum'],
                        _idpath: ['547733'],
                      },
                      {
                        attrId: '8454034',
                        code: 'ipv4DemandNum',
                        name: 'IPv4需求数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv4DemandNum'],
                        _idpath: ['8454034'],
                      },
                      {
                        attrId: '618242',
                        code: 'ipv6BeyondSel',
                        name: 'IPv6超出选择',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6BeyondSel'],
                        _idpath: ['618242'],
                      },
                      {
                        attrId: '167631',
                        code: 'ipv4BeyondNum',
                        name: 'IPv4超出个数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv4BeyondNum'],
                        _idpath: ['167631'],
                      },
                      {
                        attrId: '1633704',
                        code: 'ipv6BeyondCost',
                        name: 'IPv6超出费用',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6BeyondCost'],
                        _idpath: ['1633704'],
                      },
                      {
                        attrId: '841439',
                        code: 'ipv4BeyondCount',
                        name: 'IPv4元/月/个',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv4BeyondCount'],
                        _idpath: ['841439'],
                      },
                      {
                        attrId: '755452',
                        code: 'unitPrice',
                        name: '单价（元/G）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['unitPrice'],
                        _idpath: ['755452'],
                      },
                      {
                        attrId: '546822',
                        code: 'lastDiscount',
                        name: '最终折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'lastDiscount',
                        },
                        showInput: true,
                        _codePath: ['lastDiscount'],
                        _idpath: ['546822'],
                      },
                      {
                        attrId: '359579',
                        code: 'market',
                        name: '营销案',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['market'],
                        _idpath: ['359579'],
                      },
                      {
                        attrId: '122027',
                        code: 'busiTypeName',
                        name: '业务类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['busiTypeName'],
                        _idpath: ['122027'],
                      },
                      {
                        attrId: '8788325',
                        code: 'bandwidthUp',
                        name: '上行宽带',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthUp'],
                        _idpath: ['8788325'],
                      },
                      {
                        attrId: '155411',
                        code: 'bandwidthDown',
                        name: '下行宽带',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthDown'],
                        _idpath: ['155411'],
                      },
                      {
                        attrId: '568368',
                        code: 'bandwidthPort',
                        name: 'SDWAN端口带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthPort'],
                        _idpath: ['568368'],
                      },
                      {
                        attrId: '2474105',
                        code: 'singleUseFee',
                        name: '一次性费用',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['singleUseFee'],
                        _idpath: ['2474105'],
                      },
                      {
                        attrId: '937028',
                        code: 'portFee',
                        name: '端口费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['portFee'],
                        _idpath: ['937028'],
                      },
                      {
                        attrId: '214875',
                        code: 'ipv6BeyondNum',
                        name: 'IPv6超出个数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6BeyondNum'],
                        _idpath: ['214875'],
                      },
                      {
                        attrId: '198626',
                        code: 'ipv6BeyondCount',
                        name: 'IPv6元/月/个',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6BeyondCount'],
                        _idpath: ['198626'],
                      },
                      {
                        attrId: '300842',
                        code: 'standardPriceSdWan',
                        name: 'SDWAN标准价格',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['standardPriceSdWan'],
                        _idpath: ['300842'],
                      },
                      {
                        attrId: '39146',
                        code: 'receiptsPriceSdWan',
                        name: 'SDWAN实收价格',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['receiptsPriceSdWan'],
                        _idpath: ['39146'],
                      },
                      {
                        attrId: '684821',
                        code: 'rowId',
                        name: '行id',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['rowId'],
                        _idpath: ['684821'],
                      },
                      {
                        attrId: '1659093',
                        code: 'bandwidthName',
                        name: '带宽名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthName'],
                        _idpath: ['1659093'],
                      },
                      {
                        attrId: '007759',
                        code: 'marketList',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['marketList'],
                        _idpath: ['007759'],
                      },
                      {
                        attrId: '628577',
                        code: 'row',
                        name: '条数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'row',
                        },
                        showInput: true,
                        _codePath: ['row'],
                        _idpath: ['628577'],
                      },
                      {
                        attrId: '865421',
                        code: 'receiptsPriceSum',
                        name: '总实收价（元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPriceSum',
                        },
                        showInput: true,
                        _codePath: ['receiptsPriceSum'],
                        _idpath: ['865421'],
                      },
                      {
                        attrId: '933879',
                        code: 'marketName',
                        name: '营销案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['marketName'],
                        _idpath: ['933879'],
                      },
                      {
                        attrId: '336101',
                        code: 'specialLine',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['specialLine'],
                        _idpath: ['336101'],
                      },
                      {
                        attrId: '500349',
                        code: 'crmAreaType',
                        name: '区域类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['crmAreaType'],
                        _idpath: ['500349'],
                      },
                      {
                        attrId: '707421',
                        code: 'crmJoinWayName',
                        name: '接入方式名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['crmJoinWayName'],
                        _idpath: ['707421'],
                      },
                      {
                        attrId: '2669222',
                        code: 'crmJoinWay',
                        name: '接入方式',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['crmJoinWay'],
                        _idpath: ['2669222'],
                      },
                      {
                        attrId: '7134342',
                        code: 'crmAreaTypeName',
                        name: '区域类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['crmAreaTypeName'],
                        _idpath: ['7134342'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource72.params = [] || [];
              CMDGenerator(eventDatasetDataSource72, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Form_981467'] = r)}
            {...injectData}
          >
            <Select
              name={'业务类型'}
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
              fieldName={'busiType'}
              value={data?.feeInfo?.busiType}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_busiType_956176',
                uid: 'Input_busiType_956176',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData132: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166547291715707900,
                    options: {
                      compId: 'Input_busiType_956176',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '215887',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166547292414076580,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '100739',
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
                              value: {
                                type: ['customize'],
                                code: '$selectedData_215887[0].value$',
                              },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_215887[0].label$',
                              },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '336101',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['336101'],
                            },
                            {
                              attrId: '500349',
                              code: 'crmAreaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmAreaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '628577',
                              code: 'row',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['row'],
                              _idpath: ['628577'],
                            },
                            {
                              attrId: '707421',
                              code: 'crmJoinWayName',
                              name: '接入方式名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmJoinWayName'],
                              _idpath: ['707421'],
                            },
                            {
                              attrId: '865421',
                              code: 'receiptsPriceSum',
                              name: '总实收价（元）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['865421'],
                            },
                            {
                              attrId: '933879',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['933879'],
                            },
                            {
                              attrId: '2669222',
                              code: 'crmJoinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmJoinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '7134342',
                              code: 'crmAreaTypeName',
                              name: '区域类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmAreaTypeName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '007759',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['007759'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '331495',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_215887[0].value$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170591198514236100,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170591200412121200,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170591203318739870,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '146878',
                                  visible: 'true',
                                  compid: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                  ],
                                },
                                actionObjId: 'Input_40440484',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 170591203318739870,
                                options: {
                                  compId: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '146878',
                                  visible: 'true',
                                  compid: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                  ],
                                },
                                line_number: 5,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 170591202110356000,
                            options: {
                              compId: [
                                'View_9239465',
                                'View_731177',
                                'Text_78114',
                                'Text_15943706',
                                'View_30524',
                                'View_646185',
                                'View_08044',
                                'Input_40440484',
                                'Button_9404796',
                              ],
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '738387',
                              visible: '',
                              compid: [
                                'View_9239465',
                                'View_731177',
                                'Text_78114',
                                'Text_15943706',
                                'View_30524',
                                'View_646185',
                                'View_08044',
                                'Input_40440484',
                                'Button_9404796',
                              ],
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData132.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData132,
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
              ref={(r: any) => (refs['Input_busiType_956176'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_9239465',
                uid: 'View_9239465',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
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
              ref={(r: any) => (refs['View_9239465'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                formItemIndex={1}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_731177',
                  uid: 'View_731177',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => (refs['View_731177'] = r)}
                {...injectData}
              >
                <Text
                  name={'*'}
                  content={'*'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_78114',
                    uid: 'Text_78114',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#ff4d4f',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                    flex: 1.9,
                    padding: '0px 4px 0px 0px',
                  }}
                  ref={(r: any) => (refs['Text_78114'] = r)}
                  {...injectData}
                />
                <Text
                  name={'专线编码'}
                  content={'专线编码：'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_15943706',
                    uid: 'Text_15943706',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  style={{
                    textAlign: 'right',
                    fontSize: 12,
                    lineHeight: '24px',
                    color: '#1c242e',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                    width: '60px',
                  }}
                  ref={(r: any) => (refs['Text_15943706'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_30524',
                    uid: 'View_30524',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  style={{
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flex: 6.5,
                  }}
                  ref={(r: any) => (refs['View_30524'] = r)}
                  {...injectData}
                >
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_646185',
                      uid: 'View_646185',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                      flex: 4,
                    }}
                    ref={(r: any) => (refs['View_646185'] = r)}
                    {...injectData}
                  >
                    <Input
                      name={'专线编码'}
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
                      fieldName={'specialLine'}
                      value={data?.feeInfo?.specialLine}
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
                        id: 'Input_40440484',
                        uid: 'Input_40440484',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      ref={(r: any) => (refs['Input_40440484'] = r)}
                      {...injectData}
                    />
                  </View>
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_08044',
                      uid: 'View_08044',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      display: 'block',
                      padding: '0px 0px 0px 0px',
                      width: '100px',
                      flex: 1,
                    }}
                    ref={(r: any) => (refs['View_08044'] = r)}
                    {...injectData}
                  >
                    <Button
                      shape={null}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'default'}
                      icon={{
                        type: 'search',
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      }}
                      iconType={'search'}
                      hasIcon={true}
                      $$componentItem={{
                        id: 'Button_9404796',
                        uid: 'Button_9404796',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={false}
                      readOnly={false}
                      style={{ width: '100%' }}
                      onClick={(e: any) => {
                        const eventDatacallCustomPageFunc11: any = [
                          {
                            type: 'callCustomPageFunc',
                            dataId: 168793854799980830,
                            options: {
                              compId: 'callCustomPageFunc',
                              compName: 'system',
                              id: '598112',
                              pageJsonId: '8430824',
                              pathname: '/auditOrderPrepare',
                              pageId: '884045146848604160',
                              modalPath: '/auditOrderPrepare',
                              customFuncName: 'getGroupInfo',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '3960426',
                                    options: {
                                      context: '$CustoPageFuncs_598112$',
                                      operate: 'notEmpty',
                                      manualValue: 'undefined',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168793937014273150,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 168793977986279580,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168793982300429950,
                                        children: [],
                                        todoOptions: [
                                          'msgType',
                                          'value',
                                          'duration',
                                        ],
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '5000003',
                                          pageJsonId: '8430824',
                                          type: 'info',
                                          value: '请先选择集团',
                                        },
                                        actionObjId: 'showMessage',
                                        actionObjName: 'system',
                                        value: 'showMessage',
                                        tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                        line_number: 26,
                                      },
                                    ],
                                    condition: [],
                                    value: 'elseIf',
                                    callback: [
                                      {
                                        type: 'showMessage',
                                        dataId: 168793982300429950,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '5000003',
                                          pageJsonId: '8430824',
                                          type: 'info',
                                          value: '请先选择集团',
                                        },
                                        line_number: 26,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 2,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 168793978507618980,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '104488',
                                      pageJsonId: '8430824',
                                      dataSourceId: 170591186033942240,
                                      dataSourceName: 'pageData',
                                      dataSourceRelType: 'custom',
                                      dataSourceSetValue: [
                                        {
                                          attrId: '173395',
                                          code: 'groupId',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: true,
                                          value: {
                                            type: [
                                              'context',
                                              '$CustoPageFuncs_598112$',
                                            ],
                                            code: '',
                                          },
                                        },
                                      ],
                                      operateType: 1,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      targetDataSourcePaths: [],
                                    },
                                    line_number: 3,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'showCustomModal',
                                    dataId: 168794008217604300,
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '5905692',
                                      pageJsonId: '8430824',
                                      modalname: '/queryLine',
                                      pageId: '991181819535351808',
                                      modalPath: '/queryLine',
                                      paramsObj: {
                                        groupId: '$CustoPageFuncs_598112$',
                                        prodId: '3514',
                                        prodName: '广域网专线',
                                      },
                                      paramsObjKeyValueMap: {
                                        groupId: '$CustoPageFuncs_598112$',
                                        prodId: '3514',
                                        prodName: '广域网专线',
                                      },
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'console',
                                        dataId: 168794173738251360,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '661837',
                                          pageJsonId: '8430824',
                                          value: [
                                            '$okData_5905692$',
                                            '弹窗确认回调',
                                          ],
                                        },
                                        line_number: 5,
                                      },
                                      {
                                        type: 'customActionCode',
                                        dataId: 168913057481113900,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '783205',
                                          pageJsonId: '8430824',
                                          code: 'function main(data,state,success,fail){console.log("1111111111",okData_5905692.bandwidth);var bandwidth=okData_5905692.bandwidth;var unit=bandwidth.charAt(bandwidth.length-1);var totalNum=bandwidth;if(unit=="G"){var str=bandwidth.slice(0,bandwidth.length-1);var num=parseFloat(str);totalNum=num*1024}if(unit=="M"){var str=bandwidth.slice(0,bandwidth.length-1);totalNum=parseFloat(str)}console.log("totalNum",totalNum);success(totalNum)};',
                                        },
                                        line_number: 6,
                                        callback1: [
                                          {
                                            type: 'setDataSource',
                                            dataId: 168913099458917440,
                                            options: {
                                              compId: 'setDataSource',
                                              compName: 'page',
                                              id: '844573',
                                              pageJsonId: '8430824',
                                              dataSourceId: 166452624216490180,
                                              dataSourceName: 'feeInfo',
                                              dataSourceRelType: 'custom',
                                              dataSourceSetValue: [
                                                {
                                                  attrId: '982351',
                                                  code: 'busiType',
                                                  name: '业务类型',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['busiType'],
                                                  _idpath: ['982351'],
                                                },
                                                {
                                                  attrId: '674311',
                                                  code: 'standardPrice',
                                                  name: '标准价格',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['standardPrice'],
                                                  _idpath: ['674311'],
                                                },
                                                {
                                                  attrId: '384707',
                                                  code: 'receiptsPrice',
                                                  name: '实收价',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['receiptsPrice'],
                                                  _idpath: ['384707'],
                                                },
                                                {
                                                  attrId: '7058047',
                                                  code: 'bandwidth',
                                                  name: '带宽',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$data_783205$',
                                                    ],
                                                    code: '',
                                                  },
                                                  _codePath: ['bandwidth'],
                                                  _idpath: ['7058047'],
                                                },
                                                {
                                                  attrId: '323129',
                                                  code: 'ipv6GiveNum',
                                                  name: 'IPv6赠送数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv6GiveNum'],
                                                  _idpath: ['323129'],
                                                },
                                                {
                                                  attrId: '535103',
                                                  code: 'ipv4GiveNum',
                                                  name: 'IPv4赠送数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv4GiveNum'],
                                                  _idpath: ['535103'],
                                                },
                                                {
                                                  attrId: '547733',
                                                  code: 'ipv6DemandNum',
                                                  name: 'IPv6需求数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv6DemandNum'],
                                                  _idpath: ['547733'],
                                                },
                                                {
                                                  attrId: '8454034',
                                                  code: 'ipv4DemandNum',
                                                  name: 'IPv4需求数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv4DemandNum'],
                                                  _idpath: ['8454034'],
                                                },
                                                {
                                                  attrId: '618242',
                                                  code: 'ipv6BeyondSel',
                                                  name: 'IPv6超出选择',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv6BeyondSel'],
                                                  _idpath: ['618242'],
                                                },
                                                {
                                                  attrId: '167631',
                                                  code: 'ipv4BeyondNum',
                                                  name: 'IPv4超出个数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv4BeyondNum'],
                                                  _idpath: ['167631'],
                                                },
                                                {
                                                  attrId: '1633704',
                                                  code: 'ipv6BeyondCost',
                                                  name: 'IPv6超出费用',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv6BeyondCost'],
                                                  _idpath: ['1633704'],
                                                },
                                                {
                                                  attrId: '841439',
                                                  code: 'ipv4BeyondCount',
                                                  name: 'IPv4元/月/个',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: [
                                                    'ipv4BeyondCount',
                                                  ],
                                                  _idpath: ['841439'],
                                                },
                                                {
                                                  attrId: '755452',
                                                  code: 'unitPrice',
                                                  name: '单价（元/G）',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['unitPrice'],
                                                  _idpath: ['755452'],
                                                },
                                                {
                                                  attrId: '546822',
                                                  code: 'lastDiscount',
                                                  name: '最终折扣',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['lastDiscount'],
                                                  _idpath: ['546822'],
                                                },
                                                {
                                                  attrId: '359579',
                                                  code: 'market',
                                                  name: '营销案',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['market'],
                                                  _idpath: ['359579'],
                                                },
                                                {
                                                  attrId: '122027',
                                                  code: 'busiTypeName',
                                                  name: '业务类型名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['busiTypeName'],
                                                  _idpath: ['122027'],
                                                },
                                                {
                                                  attrId: '500349',
                                                  code: 'crmAreaType',
                                                  name: '区域类型',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['crmAreaType'],
                                                  _idpath: ['500349'],
                                                },
                                                {
                                                  attrId: '2669222',
                                                  code: 'crmJoinWay',
                                                  name: '接入方式',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$okData_5905692$',
                                                    ],
                                                    code: 'transferMode',
                                                  },
                                                  _codePath: ['crmJoinWay'],
                                                  _idpath: ['2669222'],
                                                },
                                                {
                                                  attrId: '8788325',
                                                  code: 'bandwidthUp',
                                                  name: '上行宽带',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['bandwidthUp'],
                                                  _idpath: ['8788325'],
                                                },
                                                {
                                                  attrId: '155411',
                                                  code: 'bandwidthDown',
                                                  name: '下行宽带',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['bandwidthDown'],
                                                  _idpath: ['155411'],
                                                },
                                                {
                                                  attrId: '568368',
                                                  code: 'bandwidthPort',
                                                  name: 'SDWAN端口带宽',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['bandwidthPort'],
                                                  _idpath: ['568368'],
                                                },
                                                {
                                                  attrId: '2474105',
                                                  code: 'singleUseFee',
                                                  name: '一次性费用',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['singleUseFee'],
                                                  _idpath: ['2474105'],
                                                },
                                                {
                                                  attrId: '937028',
                                                  code: 'portFee',
                                                  name: '端口费',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['portFee'],
                                                  _idpath: ['937028'],
                                                },
                                                {
                                                  attrId: '214875',
                                                  code: 'ipv6BeyondNum',
                                                  name: 'IPv6超出个数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['ipv6BeyondNum'],
                                                  _idpath: ['214875'],
                                                },
                                                {
                                                  attrId: '198626',
                                                  code: 'ipv6BeyondCount',
                                                  name: 'IPv6元/月/个',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: [
                                                    'ipv6BeyondCount',
                                                  ],
                                                  _idpath: ['198626'],
                                                },
                                                {
                                                  attrId: '300842',
                                                  code: 'standardPriceSdWan',
                                                  name: 'SDWAN标准价格',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: [
                                                    'standardPriceSdWan',
                                                  ],
                                                  _idpath: ['300842'],
                                                },
                                                {
                                                  attrId: '39146',
                                                  code: 'receiptsPriceSdWan',
                                                  name: 'SDWAN实收价格',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: [
                                                    'receiptsPriceSdWan',
                                                  ],
                                                  _idpath: ['39146'],
                                                },
                                                {
                                                  attrId: '684821',
                                                  code: 'rowId',
                                                  name: '行id',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['rowId'],
                                                  _idpath: ['684821'],
                                                },
                                                {
                                                  attrId: '7134342',
                                                  code: 'crmAreaTypeName',
                                                  name: '区域类型名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: [
                                                    'crmAreaTypeName',
                                                  ],
                                                  _idpath: ['7134342'],
                                                },
                                                {
                                                  attrId: '1659093',
                                                  code: 'bandwidthName',
                                                  name: '带宽名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['bandwidthName'],
                                                  _idpath: ['1659093'],
                                                },
                                                {
                                                  attrId: '007759',
                                                  code: 'marketList',
                                                  name: '属性',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _idpath: ['007759'],
                                                  children: [],
                                                },
                                                {
                                                  attrId: '628577',
                                                  code: 'row',
                                                  name: '条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _idpath: ['628577'],
                                                },
                                                {
                                                  attrId: '865421',
                                                  code: 'receiptsPriceSum',
                                                  name: '总实收价（元）',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _idpath: ['865421'],
                                                },
                                                {
                                                  attrId: '933879',
                                                  code: 'marketName',
                                                  name: '营销案名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _idpath: ['933879'],
                                                },
                                                {
                                                  attrId: '501067',
                                                  code: 'busiEnsureGrade',
                                                  name: '业务保障等级\t',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$okData_5905692$',
                                                    ],
                                                    code: 'bizSecurityLvName',
                                                  },
                                                  _codePath: [
                                                    'busiEnsureGrade',
                                                  ],
                                                  _idpath: ['501067'],
                                                  _deletable: true,
                                                },
                                                {
                                                  attrId: '5532275',
                                                  code: 'accessLocation',
                                                  name: '接入地址',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$okData_5905692$',
                                                    ],
                                                    code: 'installAddr',
                                                  },
                                                  _codePath: ['accessLocation'],
                                                  _idpath: ['5532275'],
                                                  _deletable: true,
                                                },
                                                {
                                                  attrId: '336101',
                                                  code: 'specialLine',
                                                  name: '属性',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _idpath: ['336101'],
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$okData_5905692$',
                                                    ],
                                                    code: 'specialLine',
                                                  },
                                                },
                                                {
                                                  attrId: '707421',
                                                  code: 'crmJoinWayName',
                                                  name: '接入方式名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: true,
                                                  _codePath: ['crmJoinWayName'],
                                                  _idpath: ['707421'],
                                                },
                                              ],
                                              operateType: 1,
                                              onlySetPatch: true,
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                            },
                                            line_number: 7,
                                            callback1: [
                                              {
                                                type: 'setValue',
                                                dataId: 168913099458927260,
                                                options: {
                                                  compId: [
                                                    'Input_40440484',
                                                    'Input_bandwidth_198362',
                                                  ],
                                                  compLib: 'comm',
                                                  pageJsonId: '8430824',
                                                  compName: 'Select',
                                                  id: '870508',
                                                  valueList: {
                                                    Input_bandwidth_198362:
                                                      '$data_783205$',
                                                    Input_40440484:
                                                      '$okData_5905692.specialLine$',
                                                  },
                                                  compid: [
                                                    'Input_40440484',
                                                    'Input_bandwidth_198362',
                                                  ],
                                                },
                                                line_number: 8,
                                                callback1: [
                                                  {
                                                    type: 'getSelectedData',
                                                    dataId: 168913099458964580,
                                                    options: {
                                                      compId:
                                                        'Input_bandwidth_198362',
                                                      compLib: 'comm',
                                                      pageJsonId: '8430824',
                                                      compName: 'Select',
                                                      id: '899798',
                                                    },
                                                    line_number: 9,
                                                    callback1: [
                                                      {
                                                        type: 'customActionCode',
                                                        dataId: 168913099458983260,
                                                        options: {
                                                          compId:
                                                            'customActionCode',
                                                          compName: 'page',
                                                          id: '9624546',
                                                          pageJsonId: '8430824',
                                                          code: 'function main(data,state,success,fail){console.log("\\u9009\\u4E2D\\u5BBD\\u5E26:",selectedData_899798[0]);for(var i=0;i<data.groupLineRateData.groupLineRateInfo.length;++i){var item=data.groupLineRateData.groupLineRateInfo[i];if(item.bandWidth==selectedData_899798[0].value){var linePrice=parseFloat(item.linePrice)/1000;success({item:item,linePrice:linePrice})}}};',
                                                        },
                                                        line_number: 10,
                                                        callback1: [
                                                          {
                                                            type: 'setValue',
                                                            dataId: 168913099458925250,
                                                            options: {
                                                              compId: [
                                                                'Input_standardPrice_89896',
                                                                'Input_receiptsPrice_488443',
                                                                'Input_7982073',
                                                                'Input_areaType_945066',
                                                                'Input_719179',
                                                              ],
                                                              compLib: 'comm',
                                                              pageJsonId:
                                                                '8430824',
                                                              compName: 'Input',
                                                              id: '607042',
                                                              value:
                                                                '$reply_489762?.resultData[0].localPrice$',
                                                              valueList: {
                                                                Input_standardPrice_89896:
                                                                  '$data_9624546.linePrice$',
                                                                Input_719179:
                                                                  '$data_9624546.isStrideCity$',
                                                                Input_areaType_945066:
                                                                  '$data_9624546.transferMode$',
                                                              },
                                                              compid: [
                                                                'Input_standardPrice_89896',
                                                                'Input_receiptsPrice_488443',
                                                                'Input_7982073',
                                                                'Input_areaType_945066',
                                                                'Input_719179',
                                                              ],
                                                            },
                                                            line_number: 11,
                                                            callback1: [
                                                              {
                                                                type: 'callSelfFunc',
                                                                dataId: 168913099458951420,
                                                                options: {
                                                                  compId:
                                                                    'callSelfFunc',
                                                                  compName:
                                                                    'system',
                                                                  id: '505815',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  customFuncName:
                                                                    'calculEndDiscount',
                                                                },
                                                                line_number: 12,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                              {
                                                                type: 'callSelfFunc',
                                                                dataId: 168913099458932220,
                                                                options: {
                                                                  compId:
                                                                    'callSelfFunc',
                                                                  compName:
                                                                    'system',
                                                                  id: '057929',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  customFuncName:
                                                                    'calculPrice',
                                                                },
                                                                line_number: 13,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                              {
                                                                type: 'callSelfFunc',
                                                                dataId: 168913099458995330,
                                                                options: {
                                                                  compId:
                                                                    'callSelfFunc',
                                                                  compName:
                                                                    'system',
                                                                  id: '14523',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  customFuncName:
                                                                    'calculReceiptsPriceSum',
                                                                },
                                                                line_number: 14,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                        callback2: [],
                                                      },
                                                      {
                                                        type: 'ifelse',
                                                        shielding: true,
                                                        condition: [
                                                          {
                                                            condId: '8945507',
                                                            options: {
                                                              useManual: true,
                                                              useObject: false,
                                                              operate: '==',
                                                              manualValue: '2',
                                                            },
                                                            conditionType:
                                                              'checkValue',
                                                            objType: 'Select',
                                                            objId:
                                                              'Input_busiType_956176',
                                                          },
                                                        ],
                                                        dataId: 168913099458978850,
                                                        elseIfs: [],
                                                        line_number: 15,
                                                        callback1: [
                                                          {
                                                            type: 'customActionCode',
                                                            dataId: 168913099458920400,
                                                            shielding: true,
                                                            options: {
                                                              compId:
                                                                'customActionCode',
                                                              compName: 'page',
                                                              id: '4626977',
                                                              pageJsonId:
                                                                '8430824',
                                                              actionTitle:
                                                                '计算宽带是否大于1G',
                                                              code: 'function main(data,state,success,fail){console.log("\\u9009\\u4E2D\\u5BBD\\u5E26:",selectedData_899798[0].label);var bandwidth=selectedData_899798[0].label;var unit=bandwidth.charAt(bandwidth.length-1);if(unit=="M"){data.pageData.isBig=0;return fail()}if(unit=="G"){var str=bandwidth.slice(0,bandwidth.length-1);console.log(str);data.pageData.isBig=1;if(str>=1){return success()}}data.pageData.isBig=0;return fail()};',
                                                            },
                                                            line_number: 16,
                                                            callback1: [
                                                              {
                                                                type: 'sysSetVisible',
                                                                dataId: 168913099458973380,
                                                                shielding: true,
                                                                options: {
                                                                  compId: [
                                                                    'Card_08175294',
                                                                  ],
                                                                  compName:
                                                                    'page',
                                                                  id: '082132',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  visible:
                                                                    'true',
                                                                  compid: [
                                                                    'Card_08175294',
                                                                  ],
                                                                },
                                                                line_number: 17,
                                                              },
                                                              {
                                                                type: 'sysSetRequired',
                                                                dataId: 168913099458917220,
                                                                shielding: true,
                                                                options: {
                                                                  compId: [
                                                                    'Select_3511824',
                                                                    'Select_087001',
                                                                    'Input_665791',
                                                                    'Select_5731432',
                                                                    'Input_015922',
                                                                  ],
                                                                  compName:
                                                                    'page',
                                                                  id: '054444',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  required:
                                                                    'true',
                                                                  compid: [
                                                                    'Select_3511824',
                                                                    'Select_087001',
                                                                    'Input_665791',
                                                                    'Select_5731432',
                                                                    'Input_015922',
                                                                  ],
                                                                },
                                                                line_number: 18,
                                                              },
                                                              {
                                                                type: 'setDataSource',
                                                                dataId: 168913099458923140,
                                                                shielding: true,
                                                                options: {
                                                                  compId:
                                                                    'setDataSource',
                                                                  compName:
                                                                    'page',
                                                                  id: '620306',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  dataSourceId: 166452624216490180,
                                                                  dataSourceName:
                                                                    'feeInfo',
                                                                  dataSourceRelType:
                                                                    'custom',
                                                                  dataSourceSetValue:
                                                                    [
                                                                      {
                                                                        attrId:
                                                                          '982351',
                                                                        code: 'busiType',
                                                                        name: '业务类型',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'busiType',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '982351',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '674311',
                                                                        code: 'standardPrice',
                                                                        name: '标准价格',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'standardPrice',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '674311',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '384707',
                                                                        code: 'receiptsPrice',
                                                                        name: '实收价',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'receiptsPrice',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '384707',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '7058047',
                                                                        code: 'bandwidth',
                                                                        name: '带宽',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidth',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '7058047',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '323129',
                                                                        code: 'ipv6GiveNum',
                                                                        name: 'IPv6赠送数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6GiveNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '323129',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '535103',
                                                                        code: 'ipv4GiveNum',
                                                                        name: 'IPv4赠送数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4GiveNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '535103',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '547733',
                                                                        code: 'ipv6DemandNum',
                                                                        name: 'IPv6需求数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6DemandNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '547733',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '8454034',
                                                                        code: 'ipv4DemandNum',
                                                                        name: 'IPv4需求数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4DemandNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '8454034',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '618242',
                                                                        code: 'ipv6BeyondSel',
                                                                        name: 'IPv6超出选择',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondSel',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '618242',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '167631',
                                                                        code: 'ipv4BeyondNum',
                                                                        name: 'IPv4超出个数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4BeyondNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '167631',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '1633704',
                                                                        code: 'ipv6BeyondCost',
                                                                        name: 'IPv6超出费用',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondCost',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '1633704',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '841439',
                                                                        code: 'ipv4BeyondCount',
                                                                        name: 'IPv4元/月/个',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4BeyondCount',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '841439',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '755452',
                                                                        code: 'unitPrice',
                                                                        name: '单价（元/G）',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'unitPrice',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '755452',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '546822',
                                                                        code: 'lastDiscount',
                                                                        name: '最终折扣',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'lastDiscount',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '546822',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '359579',
                                                                        code: 'market',
                                                                        name: '营销案',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'market',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '359579',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '122027',
                                                                        code: 'busiTypeName',
                                                                        name: '业务类型名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'busiTypeName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '122027',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '500349',
                                                                        code: 'crmAreaType',
                                                                        name: '区域类型',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmAreaType',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '500349',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '2669222',
                                                                        code: 'crmJoinWay',
                                                                        name: '接入方式',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmJoinWay',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '2669222',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '8788325',
                                                                        code: 'bandwidthUp',
                                                                        name: '上行宽带',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthUp',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '8788325',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '155411',
                                                                        code: 'bandwidthDown',
                                                                        name: '下行宽带',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthDown',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '155411',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '568368',
                                                                        code: 'bandwidthPort',
                                                                        name: 'SDWAN端口带宽',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthPort',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '568368',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '2474105',
                                                                        code: 'singleUseFee',
                                                                        name: '一次性费用',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'singleUseFee',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '2474105',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '937028',
                                                                        code: 'portFee',
                                                                        name: '端口费',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'portFee',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '937028',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '214875',
                                                                        code: 'ipv6BeyondNum',
                                                                        name: 'IPv6超出个数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '214875',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '198626',
                                                                        code: 'ipv6BeyondCount',
                                                                        name: 'IPv6元/月/个',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondCount',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '198626',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '300842',
                                                                        code: 'standardPriceSdWan',
                                                                        name: 'SDWAN标准价格',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'standardPriceSdWan',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '300842',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '39146',
                                                                        code: 'receiptsPriceSdWan',
                                                                        name: 'SDWAN实收价格',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'receiptsPriceSdWan',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '39146',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '684821',
                                                                        code: 'rowId',
                                                                        name: '行id',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'rowId',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '684821',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '7134342',
                                                                        code: 'crmAreaTypeName',
                                                                        name: '区域类型名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmAreaTypeName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '7134342',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '1659093',
                                                                        code: 'bandwidthName',
                                                                        name: '带宽名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '1659093',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '007759',
                                                                        code: 'marketList',
                                                                        name: '属性',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '007759',
                                                                          ],
                                                                        children:
                                                                          [],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '628577',
                                                                        code: 'row',
                                                                        name: '条数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '628577',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '865421',
                                                                        code: 'receiptsPriceSum',
                                                                        name: '总实收价（元）',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '865421',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '933879',
                                                                        code: 'marketName',
                                                                        name: '营销案名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '933879',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '70285',
                                                                        code: 'isBig',
                                                                        name: '大带宽标识',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                            value:
                                                                              'false',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        value: {
                                                                          type: [
                                                                            'customize',
                                                                          ],
                                                                          code: '1',
                                                                        },
                                                                        _codePath:
                                                                          [
                                                                            'isBig',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '70285',
                                                                          ],
                                                                        _deletable:
                                                                          true,
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '336101',
                                                                        code: 'specialLine',
                                                                        name: '属性',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '336101',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '707421',
                                                                        code: 'crmJoinWayName',
                                                                        name: '接入方式名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmJoinWayName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '707421',
                                                                          ],
                                                                      },
                                                                    ],
                                                                  operateType: 1,
                                                                  onlySetPatch:
                                                                    true,
                                                                  otherObjectArrayOptions:
                                                                    {},
                                                                  targetDataSourcePaths:
                                                                    [],
                                                                },
                                                                line_number: 19,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                              {
                                                                type: 'setDataSource',
                                                                dataId: 168915465295429660,
                                                                shielding: true,
                                                                options: {
                                                                  compId:
                                                                    'setDataSource',
                                                                  compName:
                                                                    'page',
                                                                  id: '361119',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  dataSourceId: 168785075175965400,
                                                                  dataSourceName:
                                                                    'pageData',
                                                                  dataSourceRelType:
                                                                    'custom',
                                                                  dataSourceSetValue:
                                                                    [
                                                                      {
                                                                        attrId:
                                                                          '701447',
                                                                        code: 'isBig',
                                                                        name: '是否为大宽带',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        value: {
                                                                          type: [
                                                                            'customize',
                                                                          ],
                                                                          code: '1',
                                                                        },
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '4719166',
                                                                        code: 'groupId',
                                                                        name: '集团编号',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                      },
                                                                    ],
                                                                  operateType: 1,
                                                                  onlySetPatch:
                                                                    true,
                                                                  otherObjectArrayOptions:
                                                                    {},
                                                                  targetDataSourcePaths:
                                                                    [],
                                                                },
                                                                line_number: 20,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                            ],
                                                            callback2: [
                                                              {
                                                                type: 'sysSetVisible',
                                                                dataId: 168913099458942460,
                                                                shielding: true,
                                                                options: {
                                                                  compId: [
                                                                    'Card_08175294',
                                                                  ],
                                                                  compName:
                                                                    'page',
                                                                  id: '660866',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  visible: '',
                                                                  compid: [
                                                                    'Card_08175294',
                                                                  ],
                                                                },
                                                                line_number: 21,
                                                              },
                                                              {
                                                                type: 'sysSetRequired',
                                                                dataId: 168913099458937920,
                                                                shielding: true,
                                                                options: {
                                                                  compId: [
                                                                    'Select_3511824',
                                                                    'Select_087001',
                                                                    'Input_665791',
                                                                    'Select_5731432',
                                                                    'Input_015922',
                                                                  ],
                                                                  compName:
                                                                    'page',
                                                                  id: '163496',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  required: '',
                                                                  compid: [
                                                                    'Select_3511824',
                                                                    'Select_087001',
                                                                    'Input_665791',
                                                                    'Select_5731432',
                                                                    'Input_015922',
                                                                  ],
                                                                },
                                                                line_number: 22,
                                                              },
                                                              {
                                                                type: 'setDataSource',
                                                                dataId: 168913099458993700,
                                                                shielding: true,
                                                                options: {
                                                                  compId:
                                                                    'setDataSource',
                                                                  compName:
                                                                    'page',
                                                                  id: '0208',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  dataSourceId: 166452624216490180,
                                                                  dataSourceName:
                                                                    'feeInfo',
                                                                  dataSourceRelType:
                                                                    'custom',
                                                                  dataSourceSetValue:
                                                                    [
                                                                      {
                                                                        attrId:
                                                                          '982351',
                                                                        code: 'busiType',
                                                                        name: '业务类型',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'busiType',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '982351',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '674311',
                                                                        code: 'standardPrice',
                                                                        name: '标准价格',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'standardPrice',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '674311',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '384707',
                                                                        code: 'receiptsPrice',
                                                                        name: '实收价',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'receiptsPrice',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '384707',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '7058047',
                                                                        code: 'bandwidth',
                                                                        name: '带宽',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidth',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '7058047',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '323129',
                                                                        code: 'ipv6GiveNum',
                                                                        name: 'IPv6赠送数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6GiveNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '323129',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '535103',
                                                                        code: 'ipv4GiveNum',
                                                                        name: 'IPv4赠送数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4GiveNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '535103',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '547733',
                                                                        code: 'ipv6DemandNum',
                                                                        name: 'IPv6需求数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6DemandNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '547733',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '8454034',
                                                                        code: 'ipv4DemandNum',
                                                                        name: 'IPv4需求数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4DemandNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '8454034',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '618242',
                                                                        code: 'ipv6BeyondSel',
                                                                        name: 'IPv6超出选择',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondSel',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '618242',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '167631',
                                                                        code: 'ipv4BeyondNum',
                                                                        name: 'IPv4超出个数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4BeyondNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '167631',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '1633704',
                                                                        code: 'ipv6BeyondCost',
                                                                        name: 'IPv6超出费用',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondCost',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '1633704',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '841439',
                                                                        code: 'ipv4BeyondCount',
                                                                        name: 'IPv4元/月/个',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv4BeyondCount',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '841439',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '755452',
                                                                        code: 'unitPrice',
                                                                        name: '单价（元/G）',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'unitPrice',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '755452',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '546822',
                                                                        code: 'lastDiscount',
                                                                        name: '最终折扣',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'lastDiscount',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '546822',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '359579',
                                                                        code: 'market',
                                                                        name: '营销案',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'market',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '359579',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '122027',
                                                                        code: 'busiTypeName',
                                                                        name: '业务类型名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'busiTypeName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '122027',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '500349',
                                                                        code: 'crmAreaType',
                                                                        name: '区域类型',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmAreaType',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '500349',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '2669222',
                                                                        code: 'crmJoinWay',
                                                                        name: '接入方式',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmJoinWay',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '2669222',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '8788325',
                                                                        code: 'bandwidthUp',
                                                                        name: '上行宽带',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthUp',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '8788325',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '155411',
                                                                        code: 'bandwidthDown',
                                                                        name: '下行宽带',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthDown',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '155411',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '568368',
                                                                        code: 'bandwidthPort',
                                                                        name: 'SDWAN端口带宽',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthPort',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '568368',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '2474105',
                                                                        code: 'singleUseFee',
                                                                        name: '一次性费用',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'singleUseFee',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '2474105',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '937028',
                                                                        code: 'portFee',
                                                                        name: '端口费',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'portFee',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '937028',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '214875',
                                                                        code: 'ipv6BeyondNum',
                                                                        name: 'IPv6超出个数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondNum',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '214875',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '198626',
                                                                        code: 'ipv6BeyondCount',
                                                                        name: 'IPv6元/月/个',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'ipv6BeyondCount',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '198626',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '300842',
                                                                        code: 'standardPriceSdWan',
                                                                        name: 'SDWAN标准价格',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'standardPriceSdWan',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '300842',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '39146',
                                                                        code: 'receiptsPriceSdWan',
                                                                        name: 'SDWAN实收价格',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'receiptsPriceSdWan',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '39146',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '684821',
                                                                        code: 'rowId',
                                                                        name: '行id',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'rowId',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '684821',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '7134342',
                                                                        code: 'crmAreaTypeName',
                                                                        name: '区域类型名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmAreaTypeName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '7134342',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '1659093',
                                                                        code: 'bandwidthName',
                                                                        name: '带宽名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'bandwidthName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '1659093',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '007759',
                                                                        code: 'marketList',
                                                                        name: '属性',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '007759',
                                                                          ],
                                                                        children:
                                                                          [],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '628577',
                                                                        code: 'row',
                                                                        name: '条数',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '628577',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '865421',
                                                                        code: 'receiptsPriceSum',
                                                                        name: '总实收价（元）',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '865421',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '933879',
                                                                        code: 'marketName',
                                                                        name: '营销案名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '933879',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '70285',
                                                                        code: 'isBig',
                                                                        name: '大带宽标识',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                            value:
                                                                              'false',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        value: {
                                                                          type: [
                                                                            'customize',
                                                                          ],
                                                                          code: '0',
                                                                        },
                                                                        _codePath:
                                                                          [
                                                                            'isBig',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '70285',
                                                                          ],
                                                                        _deletable:
                                                                          true,
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '336101',
                                                                        code: 'specialLine',
                                                                        name: '属性',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _idpath:
                                                                          [
                                                                            '336101',
                                                                          ],
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '707421',
                                                                        code: 'crmJoinWayName',
                                                                        name: '接入方式名称',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        _codePath:
                                                                          [
                                                                            'crmJoinWayName',
                                                                          ],
                                                                        _idpath:
                                                                          [
                                                                            '707421',
                                                                          ],
                                                                      },
                                                                    ],
                                                                  operateType: 1,
                                                                  onlySetPatch:
                                                                    true,
                                                                  otherObjectArrayOptions:
                                                                    {},
                                                                  targetDataSourcePaths:
                                                                    [],
                                                                },
                                                                line_number: 23,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                              {
                                                                type: 'setDataSource',
                                                                dataId: 168915466480135360,
                                                                shielding: true,
                                                                options: {
                                                                  compId:
                                                                    'setDataSource',
                                                                  compName:
                                                                    'page',
                                                                  id: '117555',
                                                                  pageJsonId:
                                                                    '8430824',
                                                                  dataSourceId: 168785075175965400,
                                                                  dataSourceName:
                                                                    'pageData',
                                                                  dataSourceRelType:
                                                                    'custom',
                                                                  dataSourceSetValue:
                                                                    [
                                                                      {
                                                                        attrId:
                                                                          '701447',
                                                                        code: 'isBig',
                                                                        name: '是否为大宽带',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                        value: {
                                                                          type: [
                                                                            'customize',
                                                                          ],
                                                                          code: '1',
                                                                        },
                                                                      },
                                                                      {
                                                                        attrId:
                                                                          '4719166',
                                                                        code: 'groupId',
                                                                        name: '集团编号',
                                                                        type: 'string',
                                                                        initialData:
                                                                          {
                                                                            type: 'static',
                                                                          },
                                                                        showInput:
                                                                          true,
                                                                      },
                                                                    ],
                                                                  operateType: 1,
                                                                  onlySetPatch:
                                                                    true,
                                                                  otherObjectArrayOptions:
                                                                    {},
                                                                  targetDataSourcePaths:
                                                                    [],
                                                                },
                                                                line_number: 24,
                                                                callback1: [],
                                                                callback2: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                    callback2: [
                                                      {
                                                        type: 'console',
                                                        dataId: 168913099458938660,
                                                        options: {
                                                          compId: 'debug',
                                                          compName: 'system',
                                                          id: '908995',
                                                          pageJsonId: '8430824',
                                                          value: [
                                                            'adasdasdasd',
                                                          ],
                                                        },
                                                        line_number: 25,
                                                      },
                                                    ],
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
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatacallCustomPageFunc11.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallCustomPageFunc11,
                          { e },
                          'callCustomPageFunc',
                          {
                            id: 'callCustomPageFunc',
                            name: 'callCustomPageFunc',
                            type: 'callCustomPageFunc',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) => (refs['Button_9404796'] = r)}
                      {...injectData}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Select
              name={'区域类型'}
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
              fieldName={'crmAreaType'}
              value={data?.feeInfo?.crmAreaType}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_areaType_945066',
                uid: 'Input_areaType_945066',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData133: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166547539363113600,
                    options: {
                      compId: 'Input_areaType_945066',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '531023',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166547539700676030,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '409269',
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
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'crmAreaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_531023[0]$'],
                                code: 'value',
                              },
                              showInput: true,
                              _codePath: ['crmAreaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'crmAreaTypeName',
                              name: '区域类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_531023[0]$'],
                                code: 'label',
                              },
                              showInput: true,
                              _codePath: ['crmAreaTypeName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '007759',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['007759'],
                            },
                            {
                              attrId: '628577',
                              code: 'row',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['row'],
                              _idpath: ['628577'],
                            },
                            {
                              attrId: '865421',
                              code: 'receiptsPriceSum',
                              name: '总实收价（元）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['865421'],
                            },
                            {
                              attrId: '933879',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['933879'],
                            },
                            {
                              attrId: '336101',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['336101'],
                            },
                            {
                              attrId: '707421',
                              code: 'crmJoinWayName',
                              name: '接入方式名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmJoinWayName'],
                              _idpath: ['707421'],
                            },
                            {
                              attrId: '2669222',
                              code: 'crmJoinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmJoinWay'],
                              _idpath: ['2669222'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData133.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData133,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatacallSelfFunc202: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166556114919573760,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '587021',
                      pageJsonId: '8430824',
                      customFuncName: 'calculPrice',
                    },
                    line_number: 3,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc202.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc202, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_areaType_945066'] = r)}
              {...injectData}
            />
            <Select
              name={'接入方式'}
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
              fieldName={'crmJoinWay'}
              value={data?.feeInfo?.crmJoinWay}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_719179',
                uid: 'Input_719179',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData134: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166547320252666780,
                    options: {
                      compId: 'Input_719179',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '842675',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166547320838118820,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '354208',
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
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'crmAreaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmAreaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '2669222',
                              code: 'crmJoinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_842675[0]$'],
                                code: 'value',
                              },
                              showInput: true,
                              _codePath: ['crmJoinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'crmAreaTypeName',
                              name: '区域类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmAreaTypeName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '707421',
                              code: 'crmJoinWayName',
                              name: '接入方式名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_842675[0]$'],
                                code: 'label',
                              },
                              showInput: true,
                              _codePath: ['crmJoinWayName'],
                              _idpath: ['707421'],
                            },
                            {
                              attrId: '007759',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['007759'],
                            },
                            {
                              attrId: '628577',
                              code: 'row',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['row'],
                              _idpath: ['628577'],
                            },
                            {
                              attrId: '865421',
                              code: 'receiptsPriceSum',
                              name: '总实收价（元）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['865421'],
                            },
                            {
                              attrId: '933879',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['933879'],
                            },
                            {
                              attrId: '336101',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['336101'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData134.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData134,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatacallSelfFunc203: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167534134597131870,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '371084',
                      pageJsonId: '8430824',
                      customFuncName: 'calculPrice',
                    },
                    line_number: 3,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc203.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc203, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_719179'] = r)}
              {...injectData}
            />
            <Select
              name={'带宽'}
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
              fieldName={'bandwidth'}
              value={data?.feeInfo?.bandwidth}
              formItemIndex={4}
              $$componentItem={{
                id: 'Input_bandwidth_198362',
                uid: 'Input_bandwidth_198362',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData135: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166537089827458620,
                    options: {
                      compId: 'Input_bandwidth_198362',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '61832',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166537090227327520,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '514063',
                          pageJsonId: '8430824',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'getLineConfig',
                          _apiCode: 'getLineConfig',
                          _source: 'rhin',
                          _serviceId: '896590341456502784',
                          _serviceTitle: '获取专线配置信息-hdb: getLineConfig',
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
                              dataKey: '514063_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '514063_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '514063_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'busiType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.busiType',
                                  compType: 'Input',
                                  name: 'busiType',
                                  parents: ['body'],
                                  id: 'body.busiType',
                                  dataKey: '514063_body.busiType',
                                  value: {
                                    type: ['customize'],
                                    code: 'networkFeeAudit',
                                  },
                                },
                                {
                                  code: 'bandWitch',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.bandWitch',
                                  compType: 'Input',
                                  name: 'bandWitch',
                                  parents: ['body'],
                                  id: 'body.bandWitch',
                                  dataKey: '514063_body.bandWitch',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_61832[0].label$',
                                  },
                                },
                                {
                                  code: 'bandwitchDown',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.bandwitchDown',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.bandwitchDown',
                                  dataKey: '514063_body.bandwitchDown',
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '514063_body',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166556063730845060,
                            shielding: true,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '03131',
                              pageJsonId: '8430824',
                              dataSourceId: 166556050488506270,
                              dataSourceName: 'pageParam',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '85042',
                                  code: 'localPrice',
                                  name: '标准价格、本地市价格',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_514063?.resultData[0].localPrice$',
                                  },
                                },
                                {
                                  attrId: '176213',
                                  code: 'privincePrice',
                                  name: '省内跨市价格',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_514063?.resultData[0].privincePrice$',
                                  },
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166556118666789400,
                                shielding: true,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '863198',
                                  pageJsonId: '8430824',
                                  customFuncName: 'calculPrice',
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
                      {
                        type: 'setDataSource',
                        dataId: 166547315968104030,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '359353',
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
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_61832[0]$'],
                                code: 'value',
                              },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_61832[0]$'],
                                code: 'label',
                              },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '336101',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['336101'],
                            },
                            {
                              attrId: '500349',
                              code: 'crmAreaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmAreaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '628577',
                              code: 'row',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['row'],
                              _idpath: ['628577'],
                            },
                            {
                              attrId: '707421',
                              code: 'crmJoinWayName',
                              name: '接入方式名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmJoinWayName'],
                              _idpath: ['707421'],
                            },
                            {
                              attrId: '865421',
                              code: 'receiptsPriceSum',
                              name: '总实收价（元）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['865421'],
                            },
                            {
                              attrId: '933879',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketName'],
                              _idpath: ['933879'],
                            },
                            {
                              attrId: '2669222',
                              code: 'crmJoinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmJoinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '7134342',
                              code: 'crmAreaTypeName',
                              name: '区域类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['crmAreaTypeName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '007759',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['007759'],
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
                      {
                        type: 'callSelfFunc',
                        dataId: 167534091330618100,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '6351165',
                          pageJsonId: '8430824',
                          customFuncName: 'calculPrice',
                        },
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData135.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData135,
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
              ref={(r: any) => (refs['Input_bandwidth_198362'] = r)}
              {...injectData}
            />
            <Input
              name={'标准价格'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'standardPrice'}
              value={data?.feeInfo?.standardPrice}
              formItemIndex={5}
              allowClear={false}
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
                id: 'Input_standardPrice_89896',
                uid: 'Input_standardPrice_89896',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc204: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168510202818610560,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '4235825',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc204.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc204, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_standardPrice_89896'] = r)}
              {...injectData}
            />
            <Input
              name={'单条实收价'}
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
              required={true}
              placeholder={'请输入'}
              fieldName={'receiptsPrice'}
              value={data?.feeInfo?.receiptsPrice}
              formItemIndex={6}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_receiptsPrice_488443',
                uid: 'Input_receiptsPrice_488443',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc205: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166547425814970700,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '9772579',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc205.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc205, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc206: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167117524393861380,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '0735592',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc206.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc206, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_receiptsPrice_488443'] = r)}
              {...injectData}
            />
            <Input
              name={'最终折扣'}
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
              required={true}
              placeholder={'请输入'}
              fieldName={'lastDiscount'}
              value={data?.feeInfo?.lastDiscount}
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
                id: 'Input_lastDiscount_72621',
                uid: 'Input_lastDiscount_72621',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_lastDiscount_72621'] = r)}
              {...injectData}
            />
            <Input
              name={'条数'}
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
              formItemIndex={8}
              fieldName={'row'}
              value={data?.feeInfo?.row}
              regexp={[
                {
                  id: '8555996',
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
                id: 'Input_7982073',
                uid: 'Input_7982073',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc207: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167117525242588130,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '48056',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc207.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc207, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_7982073'] = r)}
              {...injectData}
            />
            <Input
              name={'总实收价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'after'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={9}
              fieldName={'receiptsPriceSum'}
              value={data?.feeInfo?.receiptsPriceSum}
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
                id: 'Input_973149',
                uid: 'Input_973149',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_973149'] = r)}
              {...injectData}
            />
          </Form>
          <View
            name={'布局容器'}
            formItemIndex={2}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_015288_239109_6528729',
              uid: 'View_015288_239109_6528729',
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
              textAlign: 'right',
              margin: '10px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['View_015288_239109_6528729'] = r)}
            {...injectData}
          >
            <Button
              name={'添加营销案'}
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
                id: 'Button_898304_051444_817773',
                uid: 'Button_898304_051444_817773',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal46: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166797487658661060,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '518004',
                      pageJsonId: '8430824',
                      modalname: '/marketSel',
                      pageId: '899632499889246208',
                      paramsObj: { marketCode: '$value_755259$' },
                      paramsObjKeyValueMap: { marketCode: '$value_755259$' },
                      modalPath: '/marketSel',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166797487658744700,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '17368196',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var res=data.marketList;okData_518004.forEach(function(y){var exit=data.marketList.findIndex(function(item){return item.saleId===y.saleId});if(exit===-1){res.push(y)}});data.marketList=res;success(res)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166797487658756400,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '792043',
                              pageJsonId: '8430824',
                              dataSourceId: 166452752557535940,
                              dataSourceName: 'marketList',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '302396',
                                  code: 'rowId',
                                  name: '行id',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                              ],
                              newData: '$data_17368196$',
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
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
                eventDatashowCustomModal46.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal46,
                  { e },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatashowCustomModal47: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166969027869134000,
                    shielding: true,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '8607187',
                      pageJsonId: '8430824',
                      modalname: '/yingxiaoanfangweixuanzhe',
                      pageId: '914478259933954048',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166969029077820300,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5651908',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var res=data.marketList;okData_8607187.forEach(function(y){var exit=data.marketList.findIndex(function(item){return item.saleId===y.saleId});if(exit===-1){res.push(y)}});data.marketList=res;success(res)};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166969029077844500,
                            shielding: true,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '4254603',
                              pageJsonId: '8430824',
                              dataSourceId: 166452752557535940,
                              dataSourceName: 'marketList',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '302396',
                                  code: 'rowId',
                                  name: '行id',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                              ],
                              newData: '$data_5651908$',
                              operateType: 3,
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
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal47.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal47,
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
              ref={(r: any) => (refs['Button_898304_051444_817773'] = r)}
              {...injectData}
            />
            <Button
              name={'删除'}
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
                id: 'Button_096039_453083_336442',
                uid: 'Button_096039_453083_336442',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey25: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166539451768850700,
                    options: {
                      compId: 'Table_6112271',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Table',
                      id: '18599',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '225119',
                            options: {
                              context: '$selectedRowKeys_18599$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166539467943390200,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166539469740832500,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166539470305867650,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '8825895',
                                  pageJsonId: '8430824',
                                  type: 'error',
                                  value: '请勾选营销案',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166539470305867650,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '8825895',
                                  pageJsonId: '8430824',
                                  type: 'error',
                                  value: '请勾选营销案',
                                },
                                line_number: 5,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 166539472968132200,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '963319',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var sel=selectedRowKeys_18599;var marketList=[];data.marketList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.saleId});if(exit===-1){marketList.push(v)}});success(marketList)};',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 166539492477862080,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '618361',
                                  pageJsonId: '8430824',
                                  dataSourceId: 166452752557535940,
                                  dataSourceName: 'marketList',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '302396',
                                      code: 'rowId',
                                      name: '行id',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                  ],
                                  newData: '$data_963319$',
                                  operateType: 3,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
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
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey25.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey25,
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
              ref={(r: any) => (refs['Button_096039_453083_336442'] = r)}
              {...injectData}
            />
          </View>
        </View>
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
            hasCustom: false,
          }}
          columns={[
            {
              title: '营销案编码',
              key: 'saleId',
              dataIndex: 'saleId',
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
              title: '营销案名称',
              key: 'saleName',
              dataIndex: 'saleName',
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
              title: '营销案描述',
              key: 'saleDesc',
              dataIndex: 'saleDesc',
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
          rowSelection={{ type: 'checkbox' }}
          showHead={false}
          showTotal={false}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.marketList}
          rowKey={'saleId'}
          dataSourceFromDataSourceConfig={'data.marketList'}
          $$componentItem={{
            id: 'Table_6112271',
            uid: 'Table_6112271',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          ref={(r: any) => (refs['Table_6112271'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(NetworkFeeAudit$$Modal, {
  pageId: '897009883231784960',
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
