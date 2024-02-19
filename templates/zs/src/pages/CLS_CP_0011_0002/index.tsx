// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  RangePicker,
  Row,
  Select,
  StdUpload,
  Table,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0011_0002$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_6628063: any) => {
    const eventDatacustomActionCode79: any = [
      {
        type: 'customActionCode',
        dataId: 167288452449889800,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '697295',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_6628063;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167288453527458050,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '593748',
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
    eventDatacustomActionCode79.params =
      [
        {
          title: '事件入参',
          name: 'options_6628063',
          value: '$options_6628063$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode79,
      { options_6628063 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calFirstReducedDiscount = (options_087246: any) => {
    const eventDatagetValue53: any = [
      {
        type: 'getValue',
        dataId: 168629236682044350,
        options: {
          compId: 'Input_2136805',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '0748326',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168629237522356930,
            options: {
              compId: 'Input_6868266',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '7699',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '320499',
                    options: { context: '$value_7699$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_0748326$',
                      operate: 'notEmpty',
                    },
                    condId: '949779',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168629237740879600,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168629256443434500,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168629256700383650,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168629256700365600,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168629256700303900,
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
                          id: '077808',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '目录价（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: { type: ['customize'], code: '0' },
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
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
                        actionObjId: 'setDataSource',
                        actionObjName: 'page',
                        value: 'setDataSource',
                        line_number: 6,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setDataSource',
                        dataId: 168629256700383650,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '077808',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '目录价（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: { type: ['customize'], code: '0' },
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
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
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168629241908507700,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '809058',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n==="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result="".concat(integer,".").concat(decimal.substr(0,n));var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var dirPrice=value_7699;var firstReducedPrice=value_0748326;if(dirPrice&&dirPrice!=0){var result=toFixed(parseFloat(firstReducedPrice)*10/parseFloat(dirPrice),3);success(result)}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168629250452518900,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '707068568',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '目录价（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_809058$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
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
                        line_number: 5,
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
    eventDatagetValue53.params =
      [
        {
          title: '事件入参',
          name: 'options_087246',
          value: '$options_087246$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue53, { options_087246 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calSecondDiscount = (options_887791: any) => {
    const eventDatagetValue54: any = [
      {
        type: 'getValue',
        dataId: 168629261998523740,
        options: {
          compId: 'Input_6868266',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '3703388',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168629262365465250,
            options: {
              compId: 'Input_291297',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '049589',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '177099',
                    options: { context: '$value_049589$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_3703388$',
                      operate: 'notEmpty',
                    },
                    condId: '938308',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168629263611017440,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168629265714139940,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168629287254703580,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168629287254725020,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168629287254723170,
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
                          id: '0148475',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '目录价（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
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
                        actionObjId: 'setDataSource',
                        actionObjName: 'page',
                        value: 'setDataSource',
                        line_number: 6,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setDataSource',
                        dataId: 168629287254703580,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '0148475',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '目录价（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
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
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168629267116585250,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '7957867',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n==="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result="".concat(integer,".").concat(decimal.substr(0,n));var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var dirPrice=value_3703388;var secondReducedPrice=value_049589;if(dirPrice&&dirPrice!=0){var result=toFixed(parseFloat(secondReducedPrice)*10/parseFloat(dirPrice),3);success(result)}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168629285996946700,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '78527',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '目录价（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后价格（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_7957867$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
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
                        line_number: 5,
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
    eventDatagetValue54.params =
      [
        {
          title: '事件入参',
          name: 'options_887791',
          value: '$options_887791$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue54, { options_887791 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const feeVerification = (options_074375: any) => {
    const eventDatagetValue55: any = [
      {
        type: 'getValue',
        dataId: 168715861042576930,
        options: {
          compId: 'Input_6868266',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '6105406',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168715861568601820,
            options: {
              compId: 'Input_2136805',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '224091',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 168715861568606940,
                options: {
                  compId: 'Input_291297',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '0862953',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168715861568671940,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '690293',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n==="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result="".concat(integer,".").concat(decimal.substr(0,n));var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var flag=0;var secondReducedDiscount=null;var firstReducedDiscount=null;var dirPrice=parseFloat(value_6105406);var secondReducedValue=parseFloat(value_0862953);var firstReducedValue=parseFloat(value_224091);if(!isNaN(secondReducedValue)||!isNaN(firstReducedValue)){console.log("\\u4E00\\u6B21\\u4F18\\u60E0\\u540E\\uFF1A",firstReducedValue);console.log("\\u4E8C\\u6B21\\u4F18\\u60E0\\u540E\\uFF1A",secondReducedValue);if(!firstReducedValue&&secondReducedValue||firstReducedValue&&secondReducedValue&&secondReducedValue>firstReducedValue){secondReducedValue=0;flag=1}if(dirPrice&&dirPrice!=0&&(firstReducedValue||firstReducedValue==0)&&!isNaN(firstReducedValue)){firstReducedDiscount=toFixed(firstReducedValue*10/dirPrice,3)}if(dirPrice&&dirPrice!=0&&(secondReducedValue||secondReducedValue==0)&&!isNaN(secondReducedValue)){secondReducedDiscount=toFixed(secondReducedValue*10/dirPrice,3)}if(flag){data.factorForm.secondReducedPrice=null;data.factorForm.secondReducedDiscount=null}else{data.factorForm.secondReducedPrice=secondReducedValue||secondReducedValue==0?secondReducedValue:null;data.factorForm.secondReducedDiscount=secondReducedDiscount||secondReducedDiscount==0?secondReducedDiscount:null}data.factorForm.firstReducedDiscount=firstReducedDiscount||firstReducedDiscount==0?firstReducedDiscount:null;data.factorForm.firstReducedPrice=firstReducedValue||firstReducedValue==0?firstReducedValue:null;console.log("secondReducedValue: ",secondReducedValue);console.log("firstReducedValue: ",firstReducedValue);console.log("dirPrice: ",dirPrice);console.log("firstReducedDiscount: ",firstReducedDiscount);console.log("secondReducedDiscount: ",secondReducedDiscount);if(flag){fail({secondReducedValue:secondReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}else if(!secondReducedValue&&secondReducedValue!=0){console.log("111111");success({secondReducedValue:secondReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}else if(!firstReducedValue&&firstReducedValue!=0){console.log("222222");fail({firstReducedValue:firstReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}else{console.log("333333");success({secondReducedValue:secondReducedValue,firstReducedDiscount:firstReducedDiscount,secondReducedDiscount:secondReducedDiscount})}}else{data.factorForm.firstReducedDiscount=null;data.factorForm.secondReducedDiscount=null;success({secondReducedValue:null,firstReducedDiscount:null,secondReducedDiscount:null})}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 168716391303885980,
                        options: {
                          compId: ['Input_7727055', 'Input_54708496'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '7071475',
                          valueList: {
                            Input_7727055: '$data_690293.firstReducedDiscount$',
                            Input_54708496:
                              '$data_690293.secondReducedDiscount$',
                          },
                          compid: ['Input_7727055', 'Input_54708496'],
                        },
                        line_number: 5,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168716642395026200,
                        shielding: true,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '4001055',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '功能目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_690293$'],
                                code: 'firstReducedDiscount',
                              },
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_690293$'],
                                code: 'secondReducedPrice',
                              },
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_690293$'],
                                code: 'secondReducedDiscount',
                              },
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
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
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168717551621885570,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '93113',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '功能目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
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
                        line_number: 7,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 168715861568688450,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '174406',
                          pageJsonId: '537892',
                          type: 'info',
                          value: '二次优惠必须大于等于一次优惠',
                        },
                        line_number: 8,
                      },
                      {
                        type: 'setValue',
                        dataId: 168715861568621920,
                        options: {
                          compId: [
                            'Input_291297',
                            'Input_54708496',
                            'Input_7727055',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '286634',
                          valueList: {
                            Input_7727055: '$fail_690293.firstReducedDiscount$',
                            Input_291297: '',
                            Input_54708496: '',
                          },
                          compid: [
                            'Input_291297',
                            'Input_54708496',
                            'Input_7727055',
                          ],
                        },
                        line_number: 9,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168716598910905250,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '2971013',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '功能目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['customize'],
                                code: '$fail_690293.firstReducedDiscount$',
                              },
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
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
                        line_number: 10,
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
    eventDatagetValue55.params =
      [
        {
          title: '事件入参',
          name: 'options_074375',
          value: '$options_074375$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue55, { options_074375 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const updateSetMealInfo = (options_6437462: any) => {
    const eventDatagetValue56: any = [
      {
        type: 'getValue',
        dataId: 168681326113134530,
        options: {
          compId: 'Input_setMeal_2651496',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Select',
          id: '41646',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168681326686727200,
            options: {
              compId: 'Input_setMealType_045128',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '543034',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168681327110107700,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '5038262',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _data$setMealInfoList;var opType=options_6437462.opType;var setMealPackage=value_41646;var setMealPackageType=value_543034;var info=(_data$setMealInfoList=data.setMealInfoList)===null||_data$setMealInfoList===void 0?void 0:_data$setMealInfoList.totalInfo;var list=info[setMealPackage];var setMealPackageTypeList=list.map(function(item){return item.setMealPackageType});if(opType=="setMealPackage"&&!!info){data.factorForm.probation="";success({setMealPackageType:setMealPackageTypeList})}else if(opType=="setMealPackageType"&&!!info){var setMealInfo=list.filter(function(item){var _item$setMealPackageT;return(item===null||item===void 0?void 0:(_item$setMealPackageT=item.setMealPackageType)===null||_item$setMealPackageT===void 0?void 0:_item$setMealPackageT.attrValue)==setMealPackageType});console.log("\\u5F53\\u524D\\u83B7\\u5F97\\u7684\\u5957\\u9910\\u6570\\u636E\\uFF1A",setMealInfo[0]);data.factorForm.unit=setMealInfo[0].unit;data.factorForm.dirPrice=setMealInfo[0].dirPrice;data.factorForm.probation="";data.factorForm.lowPrice=setMealInfo[0].lowPrice;fail({unit:setMealInfo[0].unit,dirPrice:setMealInfo[0].dirPrice,probation:setMealInfo[0].probation,lowPrice:setMealInfo[0].lowPrice})}};',
                  actionTitle: '',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 168681535779736700,
                    options: {
                      compId: [
                        'Input_6868266',
                        'Input_setMealType_045128',
                        'Input_255085',
                        'Input_745068',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '563617',
                      valueList: {
                        Input_6868266: '',
                        Input_setMealType_045128: '',
                        Input_745068: '',
                        Input_255085: '',
                      },
                      compid: [
                        'Input_6868266',
                        'Input_setMealType_045128',
                        'Input_255085',
                        'Input_745068',
                      ],
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'reloadSelectData',
                    dataId: 168681540543082720,
                    options: {
                      compId: 'Input_setMealType_045128',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '4962845',
                      data: '$data_5038262.setMealPackageType$',
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
                    },
                    line_number: 5,
                    callback1: [],
                  },
                  {
                    type: 'clearOptions',
                    dataId: 168681550149415500,
                    options: {
                      compId: 'Input_255085',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '288123',
                    },
                    line_number: 6,
                  },
                ],
                callback2: [
                  {
                    type: 'clearValue',
                    dataId: 168681807505700300,
                    options: {
                      compId: 'Input_255085',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '9249776',
                    },
                    line_number: 7,
                  },
                  {
                    type: 'setValue',
                    dataId: 168681808493730400,
                    options: {
                      compId: ['Input_6868266', 'Input_255085'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '381259',
                      valueList: {
                        Input_6868266: '$fail_5038262.dirPrice$',
                        Input_255085: '',
                      },
                      compid: ['Input_6868266', 'Input_255085'],
                    },
                    line_number: 8,
                    callback1: [],
                  },
                  {
                    type: 'setCompContentValue',
                    dataId: 168716919350825700,
                    options: {
                      compId: 'Text_93632',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '524728',
                      value: '$fail_5038262.unit$',
                    },
                    line_number: 9,
                    callback1: [],
                  },
                  {
                    type: 'reloadSelectData',
                    dataId: 168681808858156830,
                    options: {
                      compId: 'Input_255085',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '202982',
                      data: '$fail_5038262.probation$',
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
                    },
                    line_number: 10,
                    callback1: [],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 168716940979901340,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '718969',
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
                        },
                        {
                          attrId: '446449',
                          code: 'setMealPackageType',
                          name: '套餐包类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '756366',
                          code: 'market',
                          name: '营销案编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '998092',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '963369',
                          code: 'marketName',
                          name: '营销案名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '5900907',
                          code: 'dirPrice',
                          name: '功能目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '359503',
                          code: 'firstReducedPrice',
                          name: '一次优惠后功能费（元/成员）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '92711793',
                          code: 'firstReducedDiscount',
                          name: '一次优惠折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '7291847',
                          code: 'secondReducedPrice',
                          name: '二次优惠后功能费（元/成员）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '481677',
                          code: 'secondReducedDiscount',
                          name: '二次优惠折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '9092028',
                          code: 'probation',
                          name: '试用期',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '660217',
                          code: 'servicePayment',
                          name: '服务范围和支付模式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '945327',
                          code: 'contractExpiredHandle',
                          name: '合同到期后处理方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '775544',
                          code: 'serviceFee',
                          name: '服务费',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '604853',
                          code: 'serviceFeeReducedFee',
                          name: '服务费减免价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '196345',
                          code: 'serviceFeeTakeNum',
                          name: '服务费收取次数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '662581',
                          code: 'busyDeadline',
                          name: '业务期限',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '18277721',
                          code: 'busyDeadlineBegin',
                          name: '业务期限（起）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '407031',
                          code: 'busyDeadlineEnd',
                          name: '业务期限（止）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '153033',
                          code: 'unit',
                          name: '单位',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['context', '$fail_5038262$'],
                            code: 'unit',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 11,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'setCompContentValue',
                    dataId: 168717180960395360,
                    options: {
                      compId: 'Text_7369114',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '6584848',
                      value: '$fail_5038262.unit$',
                    },
                    line_number: 12,
                    callback1: [],
                  },
                  {
                    type: 'setCompContentValue',
                    dataId: 168717182608787070,
                    options: {
                      compId: 'Text_7369114',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '1183587',
                      value: '$fail_5038262.unit$',
                    },
                    line_number: 13,
                    callback1: [],
                  },
                  {
                    type: 'setValue',
                    dataId: 169790678393820700,
                    options: {
                      compId: 'Input_745068',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '663172',
                      valueList: { Input_745068: '$fail_5038262.lowPrice$' },
                    },
                    line_number: 14,
                    callback1: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue56.params =
      [
        {
          title: '事件入参',
          name: 'options_6437462',
          value: '$options_6437462$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue56, { options_6437462 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
    calFirstReducedDiscount,
    calSecondDiscount,
    feeVerification,
    updateSetMealInfo,
  }));

  useEffect(() => {
    const eventDataapiRequest239: any = [
      {
        type: 'apiRequest',
        dataId: 166972679330949760,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '625824',
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
              dataKey: '088178_header',
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
              dataKey: '088178_path',
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
              dataKey: '088178_query',
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
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
              key: '3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167342206727136540,
            options: {
              compId: 'Input_690228_5400337_280164_0694544_38738_7545196',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '824573',
              data: '$reply_625824?.resultData$',
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
    eventDataapiRequest239.params = [] || [];
    CMDGenerator(eventDataapiRequest239, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest240: any = [
      {
        type: 'apiRequest',
        dataId: 168673778946684000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '899321',
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
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168673782686429800,
            options: {
              compId: 'Select_9391529',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '1752387',
              data: '$reply_899321?.resultData$',
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
    eventDataapiRequest240.params = [] || [];
    CMDGenerator(eventDataapiRequest240, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest241: any = [
      {
        type: 'apiRequest',
        dataId: 167350529072084260,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4165923',
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
              dataKey: '4165923_header',
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
              dataKey: '4165923_path',
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
              dataKey: '4165923_query',
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
                  dataKey: '4165923_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '4165923_body.attrCode',
                  value: { type: ['customize'], code: 'setMealPackage' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4165923_body',
              key: '3',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168681257614079940,
            options: {
              compId: 'Input_setMeal_2651496',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '9074196',
              data: '$reply_4165923?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 6,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 168681260056695140,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '4385158',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var _reply_;var res=(_reply_=reply_4165923)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u5957\\u9910\\u8FD4\\u56DE\\u7ED3\\u679C:",res);if(!!res){var finalRes={};for(var i=0;i<res.length;i++){finalRes[res[i].attrValue]=JSON.parse(res[i].attrValueDesc)}console.log("\\u5957\\u9910\\u89E3\\u6790\\u7ED3\\u679C:",finalRes);success(finalRes)}};',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168681314810004930,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '241719',
                  pageJsonId: '537892',
                  dataSourceId: 168681217191166600,
                  dataSourceName: 'setMealInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '170783',
                      code: 'setMealPackage',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['setMealPackage'],
                      _idpath: ['170783'],
                    },
                    {
                      attrId: '826504',
                      code: 'setMealPackageType',
                      name: '套餐包类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['setMealPackageType'],
                      _idpath: ['826504'],
                    },
                    {
                      attrId: '385292',
                      code: 'dirPrice',
                      name: '目录价（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['dirPrice'],
                      _idpath: ['385292'],
                    },
                    {
                      attrId: '473367',
                      code: 'unit',
                      name: '单位',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['unit'],
                      _idpath: ['473367'],
                    },
                    {
                      attrId: '0570536',
                      code: 'probation',
                      name: '试用期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['probation'],
                      _idpath: ['0570536'],
                    },
                    {
                      attrId: '0528904',
                      code: 'totalInfo',
                      name: '总套餐信息',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_4385158$'], code: '' },
                      _codePath: ['totalInfo'],
                      _idpath: ['0528904'],
                    },
                    {
                      attrId: '989232',
                      code: 'lowPrice',
                      name: '最低销售价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['lowPrice'],
                      _idpath: ['989232'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '851816',
                        options: {
                          context: '$state.itemList$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168715408926956770,
                    elseIfs: [],
                    line_number: 9,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 168715559989400580,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '922058',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var info=data_4385158;var setMealPackage=data.feeInfo.setMealPackage;var setMealPackageType=data.feeInfo.setMealPackageType;console.log("\\u5957\\u9910\\u4FE1\\u606F\\uFF1A",info);console.log("\\u5957\\u9910\\u5305\\uFF1A",setMealPackage);console.log("\\u5957\\u9910\\u5305\\u7C7B\\u578B\\uFF1A",setMealPackageType);var list=info[setMealPackage]||[];var setMealPackageTypeList=list.map(function(item){return item.setMealPackageType});var setMealInfo=list.filter(function(item){var _item$setMealPackageT;return(item===null||item===void 0?void 0:(_item$setMealPackageT=item.setMealPackageType)===null||_item$setMealPackageT===void 0?void 0:_item$setMealPackageT.attrValue)==setMealPackageType});console.log("\\u5F53\\u524D\\u83B7\\u5F97\\u7684\\u5957\\u9910\\u6570\\u636E\\uFF1A",setMealInfo[0]);success({setMealPackageType:setMealPackageTypeList,probation:setMealInfo[0].probation})};',
                        },
                        line_number: 10,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 168715559989495040,
                            shielding: true,
                            options: {
                              compId: 'Input_setMealType_045128',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '881219',
                              data: '$data_922058.setMealPackageType$',
                              labelKey: 'attrValueName',
                              valueKey: 'attrValue',
                            },
                            line_number: 11,
                            callback1: [],
                          },
                          {
                            type: 'reloadSelectData',
                            dataId: 168715585028060480,
                            shielding: true,
                            options: {
                              compId: 'Input_255085',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '4726067',
                              data: '$data_922058.probation$',
                              labelKey: 'attrValueName',
                              valueKey: 'attrValue',
                            },
                            line_number: 12,
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
    eventDataapiRequest241.params = [] || [];
    CMDGenerator(eventDataapiRequest241, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest242: any = [
      {
        type: 'apiRequest',
        dataId: 167350622547878900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '443294',
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
            dataId: 168627898713370180,
            options: {
              compId: 'Select_287734',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '138066',
              data: '$reply_443294?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest242.params = [] || [];
    CMDGenerator(eventDataapiRequest242, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest243: any = [
      {
        type: 'apiRequest',
        dataId: 168627903698082780,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5090414',
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
            dataId: 168627916004201280,
            options: {
              compId: 'Select_339532',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '720452',
              data: '$reply_5090414?.resultData$',
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
    eventDataapiRequest243.params = [] || [];
    CMDGenerator(eventDataapiRequest243, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest244: any = [
      {
        type: 'apiRequest',
        dataId: 169699326210664060,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '761289',
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
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169699328258271700,
            options: {
              compId: 'Input_255085',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '9212963',
              data: '$reply_761289?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 18,
            callback1: [
              {
                type: 'setValue',
                dataId: 169699335284254700,
                shielding: true,
                options: {
                  compId: 'Input_255085',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Select',
                  id: '920259',
                  valueList: { Input_255085: '1004' },
                },
                line_number: 19,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest244.params = [] || [];
    CMDGenerator(eventDataapiRequest244, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest245: any = [
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
              dataKey: '9817429_path',
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
              dataKey: '9817429_query',
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
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9817429_body',
              key: '3',
            },
          ],
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 20,
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
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 21,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444103297703600,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '618033',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                },
                line_number: 22,
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
    eventDataapiRequest245.params = [] || [];
    CMDGenerator(eventDataapiRequest245, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse134: any = [
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
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 168906418717271700,
            children: [
              {
                dataName: 'action',
                dataId: 168906419126855740,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168906419126807140,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168906428166566620,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168906428166595700,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168906428166584220,
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
                          id: '386254',
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
                            },
                            {
                              attrId: '446449',
                              code: 'setMealPackageType',
                              name: '套餐包类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '756366',
                              code: 'market',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '998092',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '963369',
                              code: 'marketName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5900907',
                              code: 'dirPrice',
                              name: '功能目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '359503',
                              code: 'firstReducedPrice',
                              name: '一次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '92711793',
                              code: 'firstReducedDiscount',
                              name: '一次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '7291847',
                              code: 'secondReducedPrice',
                              name: '二次优惠后功能费（元/成员）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '481677',
                              code: 'secondReducedDiscount',
                              name: '二次优惠折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9092028',
                              code: 'probation',
                              name: '试用期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '660217',
                              code: 'servicePayment',
                              name: '服务范围和支付模式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '945327',
                              code: 'contractExpiredHandle',
                              name: '合同到期后处理方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '775544',
                              code: 'serviceFee',
                              name: '服务费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '604853',
                              code: 'serviceFeeReducedFee',
                              name: '服务费减免价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '196345',
                              code: 'serviceFeeTakeNum',
                              name: '服务费收取次数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '662581',
                              code: 'busyDeadline',
                              name: '业务期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '18277721',
                              code: 'busyDeadlineBegin',
                              name: '业务期限（起）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_630556$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '407031',
                              code: 'busyDeadlineEnd',
                              name: '业务期限（止）',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_630556$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '153033',
                              code: 'unit',
                              name: '单位',
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
                        actionObjId: 'setDataSource',
                        actionObjName: 'page',
                        value: 'setDataSource',
                        line_number: 47,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 168906419126847360,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'editorCode'],
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '630556',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){function getDate(){var date=new Date,year=date.getFullYear(),month=date.getMonth()+1,strDate=date.getDate();if(month<10)month="0".concat(month);if(strDate<10)strDate="0".concat(strDate);return"".concat(year,"-").concat(month,"-").concat(strDate)}success(getDate())};',
                  actionTitle: '初始化业务期限',
                },
                actionObjId: 'customActionCode',
                actionObjName: 'page',
                value: 'customActionCode',
                tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                line_number: 46,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'customActionCode',
                dataId: 168906419126855740,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '630556',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){function getDate(){var date=new Date,year=date.getFullYear(),month=date.getMonth()+1,strDate=date.getDate();if(month<10)month="0".concat(month);if(strDate<10)strDate="0".concat(strDate);return"".concat(year,"-").concat(month,"-").concat(strDate)}success(getDate())};',
                  actionTitle: '初始化业务期限',
                },
                line_number: 46,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168906428166566620,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '386254',
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
                        },
                        {
                          attrId: '446449',
                          code: 'setMealPackageType',
                          name: '套餐包类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '756366',
                          code: 'market',
                          name: '营销案编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '998092',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '963369',
                          code: 'marketName',
                          name: '营销案名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '5900907',
                          code: 'dirPrice',
                          name: '功能目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '359503',
                          code: 'firstReducedPrice',
                          name: '一次优惠后功能费（元/成员）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '92711793',
                          code: 'firstReducedDiscount',
                          name: '一次优惠折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '7291847',
                          code: 'secondReducedPrice',
                          name: '二次优惠后功能费（元/成员）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '481677',
                          code: 'secondReducedDiscount',
                          name: '二次优惠折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '9092028',
                          code: 'probation',
                          name: '试用期',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '660217',
                          code: 'servicePayment',
                          name: '服务范围和支付模式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '945327',
                          code: 'contractExpiredHandle',
                          name: '合同到期后处理方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '775544',
                          code: 'serviceFee',
                          name: '服务费',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '604853',
                          code: 'serviceFeeReducedFee',
                          name: '服务费减免价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '196345',
                          code: 'serviceFeeTakeNum',
                          name: '服务费收取次数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '662581',
                          code: 'busyDeadline',
                          name: '业务期限',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '18277721',
                          code: 'busyDeadlineBegin',
                          name: '业务期限（起）',
                          type: 'string',
                          initialData: { type: 'static', value: '' },
                          showInput: true,
                          value: {
                            type: ['context', '$data_630556$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '407031',
                          code: 'busyDeadlineEnd',
                          name: '业务期限（止）',
                          type: 'string',
                          initialData: { type: 'static', value: '' },
                          showInput: true,
                          value: {
                            type: ['context', '$data_630556$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '153033',
                          code: 'unit',
                          name: '单位',
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
                    line_number: 47,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 23,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}factorForm["busyDeadline"]=[factorForm["busyDeadlineBegin"],factorForm["busyDeadlineEnd"]];data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;console.log("\\u5F53\\u524D\\u56DE\\u586B\\u7684\\u6570\\u636E\\u6E90\\uFF1A",factorForm);data.sceneSubmit.instList=item.instList;data.sceneSubmit.attrList=item.attrList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});data.feeInfo=feeInfoList;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 24,
            callback1: [
              {
                type: 'setCurrentFormValues',
                dataId: 168732701241594530,
                options: {
                  compId: 'Form_449441_1900385_965292_804694_950772',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '855115',
                  params: '$data_9981685$',
                },
                line_number: 25,
              },
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
                },
                line_number: 26,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 170226252433405800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '0472415',
                  pageJsonId: '537892',
                  dataSourceId: 170202608908322900,
                  dataSourceName: 'feeInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '2471286',
                      code: 'setMealPackage',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '174431',
                      code: 'setMealPackageType',
                      name: '套餐包类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '5098645',
                      code: 'dirPrice',
                      name: '功能费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '8328933',
                      code: 'firstReducedPrice',
                      name: '一次优惠后功能费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '845346',
                      code: 'firstReducedDiscount',
                      name: '一次折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '056819',
                      code: 'lowPrice',
                      name: '最低销售价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '520389',
                      code: 'secondReducedPrice',
                      name: '二次优惠后功能费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '263545',
                      code: 'secondReducedDiscount',
                      name: '二次优惠折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '376008',
                      code: 'marketName',
                      name: '营销活动名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '652159',
                      code: 'setMealPackageTypeName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '9380438',
                      code: 'setMealPackageName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 27,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 167342268341607740,
                options: {
                  compId:
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '12362',
                  valueList: {
                    Input_361479_887285_2150708_7460276_97629287_177208_0881564:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 28,
                callback1: [],
              },
              {
                type: 'setRangeValue',
                dataId: 168715387884694050,
                shielding: true,
                options: {
                  compId: 'RangePicker_157477',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'RangePicker',
                  id: '118709',
                  startVal: '$data_9981685.busyDeadlineBegin$',
                  endVal: '$data_9981685.busyDeadlineEnd$',
                },
                line_number: 29,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '73468',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.busyDeadlineEnd$',
                      operate: '==',
                      manualValue: '2043-01-01',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168717711085442180,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168717723251173200,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168717724084402750,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168717724084434460,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168717724084454460,
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
                          id: '631449',
                          pageJsonId: '537892',
                          dataSourceId: 168682024060707230,
                          dataSourceName: 'pageData',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '448085',
                              code: 'isLongTerm',
                              name: '是否长期',
                              type: 'string',
                              initialData: { type: 'static', value: 'false' },
                              showInput: true,
                              value: { type: ['customize'], code: 'false' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        actionObjId: 'setDataSource',
                        actionObjName: 'page',
                        value: 'setDataSource',
                        line_number: 34,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    desc: '',
                    callback: [
                      {
                        type: 'setDataSource',
                        dataId: 168717724084402750,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '631449',
                          pageJsonId: '537892',
                          dataSourceId: 168682024060707230,
                          dataSourceName: 'pageData',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '448085',
                              code: 'isLongTerm',
                              name: '是否长期',
                              type: 'string',
                              initialData: { type: 'static', value: 'false' },
                              showInput: true,
                              value: { type: ['customize'], code: 'false' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 34,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                line_number: 30,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 168717714083995070,
                    options: {
                      compId: 'RangePicker_157477',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'RangePicker',
                      id: '961659',
                      disabled: 'true',
                    },
                    line_number: 31,
                  },
                  {
                    type: 'changeContent',
                    dataId: 168717721749203500,
                    options: {
                      compId: 'Button_791758',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Button',
                      id: '798783',
                      name: '取消',
                    },
                    line_number: 32,
                  },
                  {
                    type: 'setDataSource',
                    dataId: 168717722256831260,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '848382',
                      pageJsonId: '537892',
                      dataSourceId: 168682024060707230,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '448085',
                          code: 'isLongTerm',
                          name: '是否长期',
                          type: 'string',
                          initialData: { type: 'static', value: 'false' },
                          showInput: true,
                          value: { type: ['customize'], code: 'true' },
                          _codePath: ['isLongTerm'],
                          _idpath: ['448085'],
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 33,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '3011462',
                    options: {
                      context: '$data_9981685.serviceFee$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.serviceFee$',
                      operate: '!=',
                      manualValue: '1001',
                    },
                    condId: '3916394',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    condId: '441468',
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.scene$',
                          operate: '!=',
                          manualValue: 'V',
                        },
                        condId: '3877046',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.scene$',
                          operate: '!=',
                          manualValue: 'P',
                        },
                        condId: '431172',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    connector: '&&',
                  },
                ],
                dataId: 168733320694409470,
                elseIfs: [],
                line_number: 35,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 168733327865122660,
                    options: {
                      compId: ['Input_427622', 'Input_460679'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '04238064',
                      disabled: '',
                      compid: ['Input_427622', 'Input_460679'],
                    },
                    line_number: 36,
                  },
                ],
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
            line_number: 37,
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
                line_number: 38,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '811202',
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
                    condId: '882317',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746087697143550,
                elseIfs: [],
                line_number: 39,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 167342278363835300,
                    options: {
                      compId: ['Table_5369494_494011'],
                      compName: 'page',
                      id: '578829',
                      pageJsonId: '537892',
                      visible: '',
                      compid: ['Table_5369494_494011'],
                    },
                    line_number: 40,
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
            dataId: 166176038635760700,
            elseIfs: [],
            line_number: 41,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167342281795236400,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Table_937379',
                  ],
                  compName: 'page',
                  id: '391765',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Table_937379',
                  ],
                },
                line_number: 42,
              },
              {
                type: 'sysSetVisible',
                dataId: 167342284248845920,
                options: {
                  compId: ['Row_851124_14685846', 'Table_009428'],
                  compName: 'page',
                  id: '974426',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Row_851124_14685846', 'Table_009428'],
                },
                line_number: 43,
              },
              {
                type: 'setDisable',
                dataId: 166372674624233300,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Form_449441_1900385_965292_804694_950772',
                    'Button_791758',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '947932',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Form_449441_1900385_965292_804694_950772',
                    'Button_791758',
                  ],
                },
                line_number: 44,
              },
              {
                type: 'sysSetVisible',
                dataId: 170226261325742140,
                options: {
                  compId: [
                    'Row_851124',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628_433547',
                    'Button_061196_858258',
                    'Button_5473437',
                    'View_380221',
                  ],
                  compName: 'page',
                  id: '247393',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628_433547',
                    'Button_061196_858258',
                    'Button_5473437',
                    'View_380221',
                  ],
                  visible: '',
                },
                line_number: 45,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse134.params = [] || [];
    CMDGenerator(eventDataifelse134, {}, 'ifelse', {
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
        $$componentItem={{
          id: 'View_537892_1_939141',
          uid: 'View_537892_1_939141',
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
        ref={(r: any) => (refs['View_537892_1_939141'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'企业视频彩铃'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_27607_9559912',
            uid: 'Divider_27607_9559912',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_27607_9559912'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_683494',
            uid: 'View_6806553_683494',
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
          ref={(r: any) => (refs['View_6806553_683494'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_8085894',
              uid: 'HorizontalView_004602_8085894',
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
            ref={(r: any) => (refs['HorizontalView_004602_8085894'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_641214',
                uid: 'View_339406_641214',
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
              ref={(r: any) => (refs['View_339406_641214'] = r)}
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
                  id: 'Form_4311097_9385662_302551_716304_5234815_85629',
                  uid: 'Form_4311097_9385662_302551_716304_5234815_85629',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_302551_716304_5234815_85629'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'企业视频彩铃'}
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
                    id: 'Checkbox_882584_5289015_934499_292792_78633593_084225_440485',
                    uid: 'Checkbox_882584_5289015_934499_292792_78633593_084225_440485',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_292792_78633593_084225_440485'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_855319_4239901',
                    uid: 'View_855319_4239901',
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
                  ref={(r: any) => (refs['View_855319_4239901'] = r)}
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
                    id: 'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    uid: 'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_7460276_97629287_177208_0881564'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={'8'}
            wrapperCol={'16'}
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
              id: 'Form_449441_1900385_965292_804694_950772',
              uid: 'Form_449441_1900385_965292_804694_950772',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource120: any = [
                {
                  type: 'setDataSource',
                  dataId: 166124391997578100,
                  shielding: true,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '3788211',
                    pageJsonId: '537892',
                    dataSourceId: 166124254360037760,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '662581',
                        code: 'busyDeadline',
                        name: '业务期限',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '18277721',
                        code: 'busyDeadlineBegin',
                        name: '业务期限（起）',
                        type: 'string',
                        initialData: { type: 'static', value: '' },
                        showInput: true,
                      },
                      {
                        attrId: '407031',
                        code: 'busyDeadlineEnd',
                        name: '业务期限（止）',
                        type: 'string',
                        initialData: { type: 'static', value: '' },
                        showInput: true,
                      },
                      {
                        attrId: '153033',
                        code: 'unit',
                        name: '单位',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '7768355',
                        code: 'busyDeadlineMonth',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366244013133920,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '395614',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){if(key=="busyDeadline"){obj["busyDeadlineBegin"]=obj[key][0];obj["busyDeadlineEnd"]=obj[key][1];continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366244013131500,
                          shielding: true,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '384369',
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
                    {
                      type: 'console',
                      dataId: 168733189864626050,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '875434',
                        pageJsonId: '537892',
                        value: ['$changedFieldName$', '$changedValue$'],
                      },
                      line_number: 4,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource120.params =
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
                eventDatasetDataSource120,
                { changedFieldName, changedValue },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
              const eventDataifelse438: any = [
                {
                  type: 'ifelse',
                  condition: [
                    {
                      condId: '475141',
                      options: {
                        useManual: true,
                        useObject: false,
                        context: '$changedFieldName$',
                        operate: '!=',
                        manualValue: 'busyDeadline',
                      },
                      conditionType: 'checkContextValue',
                      objType: 'system',
                      objId: 'sys',
                    },
                  ],
                  dataId: 168804525927613380,
                  elseIfs: [],
                  line_number: 5,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 168804528019425000,
                      options: {
                        compId: 'page',
                        compName: 'page',
                        id: '80643',
                        pageJsonId: '537892',
                        dataSourceId: 166124254360037760,
                        dataSourceName: 'factorForm',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '998092',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: [
                                'form',
                                'Form_449441_1900385_965292_804694_950772',
                                'getFieldsValue',
                              ],
                              code: 'reason',
                            },
                            _codePath: ['reason'],
                            _idpath: ['998092'],
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
                        onlySetPatch: true,
                      },
                      line_number: 6,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 168804528019412380,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '594985',
                            pageJsonId: '537892',
                            actionTitle: '',
                            code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){if(key=="busyDeadline"){obj["busyDeadlineBegin"]=obj[key][0];obj["busyDeadlineEnd"]=obj[key][1];continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                          },
                          line_number: 7,
                          callback1: [
                            {
                              type: 'callParentCustomFunc',
                              dataId: 168804528019408580,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '558503',
                                pageJsonId: '537892',
                                pathname: '/commonAuditOrder',
                                pageId: '872682457815691264',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
                                modalPath: '/commonAuditOrder',
                              },
                              line_number: 8,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'console',
                          dataId: 168804528019427780,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '8472031',
                            pageJsonId: '537892',
                            value: ['$changedFieldName$', '$changedValue$'],
                          },
                          line_number: 9,
                        },
                      ],
                      callback2: [],
                    },
                  ],
                },
              ];
              eventDataifelse438.params =
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
                eventDataifelse438,
                { changedFieldName, changedValue },
                'ifelse',
                {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) =>
              (refs['Form_449441_1900385_965292_804694_950772'] = r)
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_427188',
                uid: 'View_427188',
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
                  formItemIndex: 0,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                height: '0A',
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}
              ref={(r: any) => (refs['View_427188'] = r)}
              {...injectData}
            >
              <View
                name={'标题布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_2989285',
                  uid: 'View_2989285',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '150px',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  borderSetting: 'border 0px solid ',
                  'border-left': '0px solid ',
                  'border-right': '0px solid ',
                  'border-top': '0px solid ',
                  'border-bottom': '0px solid ',
                }}
                ref={(r: any) => (refs['View_2989285'] = r)}
                {...injectData}
              >
                <Text
                  name={'*'}
                  content={'*'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_77289',
                    uid: 'Text_77289',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    fontSize: 20,
                    lineHeight: '30px',
                    color: '#f15a5c',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                    width: '10px',
                    padding: '4px 0px 0px 0px',
                  }}
                  ref={(r: any) => (refs['Text_77289'] = r)}
                  {...injectData}
                />
                <Text
                  name={'业务期限'}
                  content={'业务期限：'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_813967',
                    uid: 'Text_813967',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    fontSize: 12,
                    lineHeight: '24px',
                    color: '#1c242e',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                    width: 'auto',
                    padding: '0px 0px 0px 0px',
                    margin: '0px 0px 0px 0px',
                  }}
                  ref={(r: any) => (refs['Text_813967'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'表单布局容器'}
                formItemIndex={10}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_85103835',
                  uid: 'View_85103835',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'block',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  position: 'relative',
                  paddingRight: '66px',
                  maxWidth: '66.66666667%',
                }}
                ref={(r: any) => (refs['View_85103835'] = r)}
                {...injectData}
              >
                <RangePicker
                  name={'业务期限'}
                  timeMode={'date'}
                  format={'YYYY-MM-DD'}
                  separator={'~'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'8'}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={true}
                  pickerType={'RangePicker'}
                  fieldName={'busyDeadline'}
                  defaultValue={[
                    functorsMap?.DATENOW('YYYY-MM-DD'),
                    functorsMap?.DATENOW('YYYY-MM-DD'),
                  ]}
                  showTime={false}
                  allowClear={false}
                  value={data?.factorForm?.busyDeadline}
                  $$componentItem={{
                    id: 'RangePicker_157477',
                    uid: 'RangePicker_157477',
                    type: 'RangePicker',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onChange={(e: any) => {
                    const eventDatagetValue179: any = [
                      {
                        type: 'getValue',
                        dataId: 168674789803785380,
                        options: {
                          compId: 'RangePicker_157477',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'RangePicker',
                          id: '67726627',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168897967385916740,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '0165055',
                              pageJsonId: '537892',
                              actionTitle: '',
                              code: 'function main(data,state,success,fail){console.log("\\u5F53\\u524D\\u53D8\\u5316\\u65F6\\u95F4: ",e);success({busyDeadlineBegin:e[0]||undefined,busyDeadlineEnd:e[1]||undefined})};',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 168897967385917150,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '7060468',
                                  pageJsonId: '537892',
                                  dataSourceId: 166124254360037760,
                                  dataSourceName: 'factorForm',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
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
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_0165055$'],
                                        code: 'busyDeadlineBegin',
                                      },
                                      _codePath: ['busyDeadlineBegin'],
                                      _idpath: ['18277721'],
                                    },
                                    {
                                      attrId: '407031',
                                      code: 'busyDeadlineEnd',
                                      name: '业务期限（止）',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_0165055$'],
                                        code: 'busyDeadlineEnd',
                                      },
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
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 168897967385952000,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '12895',
                                      pageJsonId: '537892',
                                      actionTitle: '',
                                      code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){if(key=="busyDeadline"){obj["busyDeadlineBegin"]=obj[key][0];obj["busyDeadlineEnd"]=obj[key][1];continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}var start=e[0]||undefined;var end=e[1]||undefined;if(start!=undefined&&end!=undefined){var startDate=new Date(start);var endDate=new Date(end);var startYear=startDate.getFullYear();var startMonth=startDate.getMonth();var endYear=endDate.getFullYear();var endMonth=endDate.getMonth();var monthDiff=(endYear-startYear)*12+(endMonth-startMonth);console.log("====\\u8BA1\\u7B97\\u51FA===",monthDiff);data.factorForm.busyDeadlineMonth=monthDiff;var found=false;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode==="busyDeadlineMonth"){attrList[i].attrValue=monthDiff;found=true;break}}if(found==false){attrList.push({"attrCode":"busyDeadlineMonth","attrName":"","attrValue":monthDiff})}}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'callParentCustomFunc',
                                        dataId: 168897967385933980,
                                        options: {
                                          compId: 'callParentCustomFunc',
                                          compName: 'system',
                                          id: '7854413',
                                          pageJsonId: '537892',
                                          pathname: '/commonAuditOrder',
                                          pageId: '872682457815691264',
                                          customFuncName: 'getFactor',
                                          customFuncParams:
                                            '$data.sceneSubmit$',
                                          modalPath: '/commonAuditOrder',
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
                        ],
                      },
                    ];
                    eventDatagetValue179.params =
                      [
                        { title: '时间段选择框取值', name: 'e', value: '$e$' },
                      ] || [];
                    CMDGenerator(eventDatagetValue179, { e }, 'getValue', {
                      id: 'getValue',
                      name: 'getValue',
                      type: 'getValue',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => (refs['RangePicker_157477'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_426957',
                    uid: 'View_426957',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'right',
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    width: '66px',
                    flex: 1,
                    position: 'absolute',
                    top: '0',
                    right: '0',
                  }}
                  ref={(r: any) => (refs['View_426957'] = r)}
                  {...injectData}
                >
                  <Button
                    name={'长期'}
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
                      id: 'Button_791758',
                      uid: 'Button_791758',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDataifelse440: any = [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '626343',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$state.scene$',
                                operate: '!=',
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
                                operate: '!=',
                                manualValue: 'P',
                              },
                              condId: '7546792',
                              connector: '&&',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168716960021401540,
                          elseIfs: [],
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  options: {
                                    context: '$data.pageData.isLongTerm$',
                                    operate: 'notEmpty',
                                  },
                                  condId: '083717',
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                                {
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$data.pageData.isLongTerm$',
                                    operate: '==',
                                    manualValue: 'true',
                                  },
                                  condId: '644294',
                                  connector: '&&',
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 168716961447237920,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 168716961447210050,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 168716961447230400,
                                      children: [],
                                      todoOptions: ['disabled', 'selectComp'],
                                      options: {
                                        compId: 'RangePicker_157477',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'RangePicker',
                                        id: '922501',
                                        disabled: 'true',
                                      },
                                      actionObjId: 'RangePicker_157477',
                                      actionObjName: 'RangePicker',
                                      value: 'setDisable',
                                      compLib: 'comm',
                                      line_number: 11,
                                    },
                                    {
                                      dataName: 'action',
                                      dataId: 168716961447290530,
                                      children: [],
                                      todoOptions: ['name', 'icon'],
                                      options: {
                                        compId: 'Button_791758',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'Button',
                                        id: '8594044',
                                        name: '取消',
                                      },
                                      actionObjId: 'Button_791758',
                                      actionObjName: 'Button',
                                      value: 'changeContent',
                                      compLib: 'comm',
                                      line_number: 12,
                                    },
                                    {
                                      dataName: 'action',
                                      dataId: 168716961447218620,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 168716961447272770,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 168716961447285730,
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
                                        id: '928075',
                                        pageJsonId: '537892',
                                        dataSourceId: 168682024060707230,
                                        dataSourceName: 'pageData',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '448085',
                                            code: 'isLongTerm',
                                            name: '是否长期',
                                            type: 'string',
                                            initialData: {
                                              type: 'static',
                                              value: 'false',
                                            },
                                            showInput: true,
                                            value: {
                                              type: ['customize'],
                                              code: 'true',
                                            },
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      actionObjId: 'setDataSource',
                                      actionObjName: 'page',
                                      value: 'setDataSource',
                                      line_number: 13,
                                    },
                                    {
                                      dataName: 'action',
                                      dataId: 168733428002405220,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 168733428002426100,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 168898115945903700,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 168898115945988960,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                              ],
                                              todoOptions: [
                                                'startVal',
                                                'endVal',
                                              ],
                                              options: {
                                                compId: 'RangePicker_157477',
                                                compLib: 'comm',
                                                pageJsonId: '537892',
                                                compName: 'RangePicker',
                                                id: '842545',
                                                startVal:
                                                  '$data_825478.busyDeadlineBegin$',
                                                endVal: '2043-01-01',
                                              },
                                              actionObjId: 'RangePicker_157477',
                                              actionObjName: 'RangePicker',
                                              value: 'setRangeValue',
                                              compLib: 'comm',
                                              line_number: 15,
                                            },
                                            {
                                              dataName: 'action',
                                              dataId: 168733432269168220,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 168733432269187840,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 168804581302869440,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 168804581302836060,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'action',
                                                              dataId: 168804581302866850,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'callback',
                                                                  dataId: 168804581302874700,
                                                                  children: [],
                                                                  value:
                                                                    'callback1',
                                                                  params: [],
                                                                },
                                                                {
                                                                  dataName:
                                                                    'callback',
                                                                  dataId: 168804581302855100,
                                                                  children: [],
                                                                  value:
                                                                    'callback2',
                                                                  params: [],
                                                                },
                                                              ],
                                                              todoOptions: [
                                                                'pathname',
                                                                'customFuncName',
                                                                'customFuncParams',
                                                              ],
                                                              options: {
                                                                compId:
                                                                  'callParentCustomFunc',
                                                                compName:
                                                                  'system',
                                                                id: '9533602',
                                                                pageJsonId:
                                                                  '537892',
                                                                pathname:
                                                                  '/commonAuditOrder',
                                                                pageId:
                                                                  '872682457815691264',
                                                                customFuncName:
                                                                  'getFactor',
                                                                customFuncParams:
                                                                  '$data.sceneSubmit$',
                                                                modalPath:
                                                                  '/commonAuditOrder',
                                                              },
                                                              actionObjId:
                                                                'callParentCustomFunc',
                                                              actionObjName:
                                                                'system',
                                                              value:
                                                                'callParentCustomFunc',
                                                              line_number: 18,
                                                            },
                                                          ],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 168804581302875780,
                                                          children: [],
                                                          value: 'callback2',
                                                          params: [],
                                                        },
                                                      ],
                                                      todoOptions: [
                                                        'actionTitle',
                                                        'editorCode',
                                                      ],
                                                      options: {
                                                        compId:
                                                          'customActionCode',
                                                        compName: 'page',
                                                        id: '8126943',
                                                        pageJsonId: '537892',
                                                        actionTitle: '',
                                                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){if(key=="busyDeadline"){obj["busyDeadlineBegin"]=obj[key][0];obj["busyDeadlineEnd"]=obj[key][1];continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}var start;var end;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode=="busyDeadlineBegin"){start=attrList[i].attrValue}if(attrList[i].attrCode=="busyDeadlineEnd"){end=attrList[i].attrValue}}console.log("==================awdaw");if(start!=undefined&&end!=undefined){var startDate=new Date(start);var endDate=new Date(end);var startYear=startDate.getFullYear();var startMonth=startDate.getMonth();var endYear=endDate.getFullYear();var endMonth=endDate.getMonth();var monthDiff=(endYear-startYear)*12+(endMonth-startMonth);console.log("====\\u8BA1\\u7B97\\u51FA===",monthDiff);data.factorForm.busyDeadlineMonth=monthDiff;var found=false;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode==="busyDeadlineMonth"){attrList[i].attrValue=monthDiff;found=true;break}}if(found==false){attrList.push({"attrCode":"busyDeadlineMonth","attrName":"","attrValue":monthDiff})}}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                                      },
                                                      actionObjId:
                                                        'customActionCode',
                                                      actionObjName: 'page',
                                                      value: 'customActionCode',
                                                      line_number: 17,
                                                    },
                                                  ],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 168733432269108260,
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
                                                id: '325001',
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
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '446449',
                                                    code: 'setMealPackageType',
                                                    name: '套餐包类型',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '756366',
                                                    code: 'market',
                                                    name: '营销案编码',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '998092',
                                                    code: 'reason',
                                                    name: '申请原因',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '963369',
                                                    code: 'marketName',
                                                    name: '营销案名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '5900907',
                                                    code: 'dirPrice',
                                                    name: '功能目录价',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '359503',
                                                    code: 'firstReducedPrice',
                                                    name: '一次优惠后功能费（元/成员）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '92711793',
                                                    code: 'firstReducedDiscount',
                                                    name: '一次优惠折扣（折）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '7291847',
                                                    code: 'secondReducedPrice',
                                                    name: '二次优惠后功能费（元/成员）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '481677',
                                                    code: 'secondReducedDiscount',
                                                    name: '二次优惠折扣（折）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '9092028',
                                                    code: 'probation',
                                                    name: '试用期',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '660217',
                                                    code: 'servicePayment',
                                                    name: '服务范围和支付模式',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '945327',
                                                    code: 'contractExpiredHandle',
                                                    name: '合同到期后处理方式',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '775544',
                                                    code: 'serviceFee',
                                                    name: '服务费',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '604853',
                                                    code: 'serviceFeeReducedFee',
                                                    name: '服务费减免价',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '196345',
                                                    code: 'serviceFeeTakeNum',
                                                    name: '服务费收取次数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '662581',
                                                    code: 'busyDeadline',
                                                    name: '业务期限',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                  {
                                                    attrId: '18277721',
                                                    code: 'busyDeadlineBegin',
                                                    name: '业务期限（起）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '2023-01-01',
                                                    },
                                                    showInput: true,
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    attrId: '407031',
                                                    code: 'busyDeadlineEnd',
                                                    name: '业务期限（止）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '2023-01-01',
                                                    },
                                                    showInput: true,
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    attrId: '153033',
                                                    code: 'unit',
                                                    name: '单位',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                  },
                                                ],
                                                operateType: 1,
                                                onlySetPatch: true,
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
                                              },
                                              actionObjId: 'setDataSource',
                                              actionObjName: 'page',
                                              value: 'setDataSource',
                                              line_number: 16,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 168733428002470820,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
                                        },
                                      ],
                                      todoOptions: [
                                        'actionTitle',
                                        'editorCode',
                                      ],
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '825478',
                                        pageJsonId: '537892',
                                        code: 'function main(data,state,success,fail){function getDate(){var date=new Date,year=date.getFullYear(),month=date.getMonth()+1,strDate=date.getDate();if(month<10)month="0".concat(month);if(strDate<10)strDate="0".concat(strDate);return"".concat(year,"-").concat(month,"-").concat(strDate)}console.log("busyDeadlineBegin = ",data.factorForm.busyDeadlineBegin);data.factorForm.busyDeadlineBegin=getDate();data.factorForm.busyDeadlineEnd="2043-01-01";data.factorForm.busyDeadline=[getDate(),"2043-01-01"];success({busyDeadlineBegin:data.factorForm.busyDeadlineBegin,busyDeadlineEnd:data.factorForm.busyDeadlineEnd})};',
                                      },
                                      actionObjId: 'customActionCode',
                                      actionObjName: 'page',
                                      value: 'customActionCode',
                                      tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                      line_number: 14,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  callback: [
                                    {
                                      type: 'setDisable',
                                      dataId: 168716961447230400,
                                      options: {
                                        compId: 'RangePicker_157477',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'RangePicker',
                                        id: '922501',
                                        disabled: 'true',
                                      },
                                      line_number: 11,
                                    },
                                    {
                                      type: 'changeContent',
                                      dataId: 168716961447290530,
                                      options: {
                                        compId: 'Button_791758',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'Button',
                                        id: '8594044',
                                        name: '取消',
                                      },
                                      line_number: 12,
                                    },
                                    {
                                      type: 'setDataSource',
                                      dataId: 168716961447218620,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '928075',
                                        pageJsonId: '537892',
                                        dataSourceId: 168682024060707230,
                                        dataSourceName: 'pageData',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '448085',
                                            code: 'isLongTerm',
                                            name: '是否长期',
                                            type: 'string',
                                            initialData: {
                                              type: 'static',
                                              value: 'false',
                                            },
                                            showInput: true,
                                            value: {
                                              type: ['customize'],
                                              code: 'true',
                                            },
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 13,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'customActionCode',
                                      dataId: 168733428002405220,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '825478',
                                        pageJsonId: '537892',
                                        code: 'function main(data,state,success,fail){function getDate(){var date=new Date,year=date.getFullYear(),month=date.getMonth()+1,strDate=date.getDate();if(month<10)month="0".concat(month);if(strDate<10)strDate="0".concat(strDate);return"".concat(year,"-").concat(month,"-").concat(strDate)}console.log("busyDeadlineBegin = ",data.factorForm.busyDeadlineBegin);data.factorForm.busyDeadlineBegin=getDate();data.factorForm.busyDeadlineEnd="2043-01-01";data.factorForm.busyDeadline=[getDate(),"2043-01-01"];success({busyDeadlineBegin:data.factorForm.busyDeadlineBegin,busyDeadlineEnd:data.factorForm.busyDeadlineEnd})};',
                                      },
                                      line_number: 14,
                                      callback1: [
                                        {
                                          type: 'setRangeValue',
                                          dataId: 168898115945903700,
                                          options: {
                                            compId: 'RangePicker_157477',
                                            compLib: 'comm',
                                            pageJsonId: '537892',
                                            compName: 'RangePicker',
                                            id: '842545',
                                            startVal:
                                              '$data_825478.busyDeadlineBegin$',
                                            endVal: '2043-01-01',
                                          },
                                          line_number: 15,
                                          callback1: [],
                                        },
                                        {
                                          type: 'setDataSource',
                                          dataId: 168733432269168220,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '325001',
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
                                              },
                                              {
                                                attrId: '446449',
                                                code: 'setMealPackageType',
                                                name: '套餐包类型',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '756366',
                                                code: 'market',
                                                name: '营销案编码',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '998092',
                                                code: 'reason',
                                                name: '申请原因',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '963369',
                                                code: 'marketName',
                                                name: '营销案名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '5900907',
                                                code: 'dirPrice',
                                                name: '功能目录价',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '359503',
                                                code: 'firstReducedPrice',
                                                name: '一次优惠后功能费（元/成员）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '92711793',
                                                code: 'firstReducedDiscount',
                                                name: '一次优惠折扣（折）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '7291847',
                                                code: 'secondReducedPrice',
                                                name: '二次优惠后功能费（元/成员）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '481677',
                                                code: 'secondReducedDiscount',
                                                name: '二次优惠折扣（折）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '9092028',
                                                code: 'probation',
                                                name: '试用期',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '660217',
                                                code: 'servicePayment',
                                                name: '服务范围和支付模式',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '945327',
                                                code: 'contractExpiredHandle',
                                                name: '合同到期后处理方式',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '775544',
                                                code: 'serviceFee',
                                                name: '服务费',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '604853',
                                                code: 'serviceFeeReducedFee',
                                                name: '服务费减免价',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '196345',
                                                code: 'serviceFeeTakeNum',
                                                name: '服务费收取次数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '662581',
                                                code: 'busyDeadline',
                                                name: '业务期限',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                              },
                                              {
                                                attrId: '18277721',
                                                code: 'busyDeadlineBegin',
                                                name: '业务期限（起）',
                                                type: 'string',
                                                initialData: {
                                                  type: 'static',
                                                  value: '2023-01-01',
                                                },
                                                showInput: true,
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                attrId: '407031',
                                                code: 'busyDeadlineEnd',
                                                name: '业务期限（止）',
                                                type: 'string',
                                                initialData: {
                                                  type: 'static',
                                                  value: '2023-01-01',
                                                },
                                                showInput: true,
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                attrId: '153033',
                                                code: 'unit',
                                                name: '单位',
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
                                          line_number: 16,
                                          callback1: [
                                            {
                                              type: 'customActionCode',
                                              dataId: 168804581302869440,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '8126943',
                                                pageJsonId: '537892',
                                                actionTitle: '',
                                                code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){if(key=="busyDeadline"){obj["busyDeadlineBegin"]=obj[key][0];obj["busyDeadlineEnd"]=obj[key][1];continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}var start;var end;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode=="busyDeadlineBegin"){start=attrList[i].attrValue}if(attrList[i].attrCode=="busyDeadlineEnd"){end=attrList[i].attrValue}}console.log("==================awdaw");if(start!=undefined&&end!=undefined){var startDate=new Date(start);var endDate=new Date(end);var startYear=startDate.getFullYear();var startMonth=startDate.getMonth();var endYear=endDate.getFullYear();var endMonth=endDate.getMonth();var monthDiff=(endYear-startYear)*12+(endMonth-startMonth);console.log("====\\u8BA1\\u7B97\\u51FA===",monthDiff);data.factorForm.busyDeadlineMonth=monthDiff;var found=false;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode==="busyDeadlineMonth"){attrList[i].attrValue=monthDiff;found=true;break}}if(found==false){attrList.push({"attrCode":"busyDeadlineMonth","attrName":"","attrValue":monthDiff})}}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                              },
                                              line_number: 17,
                                              callback1: [
                                                {
                                                  type: 'callParentCustomFunc',
                                                  dataId: 168804581302866850,
                                                  options: {
                                                    compId:
                                                      'callParentCustomFunc',
                                                    compName: 'system',
                                                    id: '9533602',
                                                    pageJsonId: '537892',
                                                    pathname:
                                                      '/commonAuditOrder',
                                                    pageId:
                                                      '872682457815691264',
                                                    customFuncName: 'getFactor',
                                                    customFuncParams:
                                                      '$data.sceneSubmit$',
                                                    modalPath:
                                                      '/commonAuditOrder',
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
                                  ],
                                },
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'setDisable',
                                  dataId: 168716961447231460,
                                  options: {
                                    compId: 'RangePicker_157477',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'RangePicker',
                                    id: '111571',
                                    disabled: '',
                                  },
                                  line_number: 3,
                                },
                                {
                                  type: 'changeContent',
                                  dataId: 168716961447264160,
                                  options: {
                                    compId: 'Button_791758',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Button',
                                    id: '916844',
                                    name: '长期',
                                  },
                                  line_number: 4,
                                },
                                {
                                  type: 'setDataSource',
                                  dataId: 168716961447253380,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '564925',
                                    pageJsonId: '537892',
                                    dataSourceId: 168682024060707230,
                                    dataSourceName: 'pageData',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '448085',
                                        code: 'isLongTerm',
                                        name: '是否长期',
                                        type: 'string',
                                        initialData: {
                                          type: 'static',
                                          value: 'false',
                                        },
                                        showInput: true,
                                        value: {
                                          type: ['customize'],
                                          code: 'false',
                                        },
                                        _codePath: ['isLongTerm'],
                                        _idpath: ['448085'],
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'customActionCode',
                                  dataId: 168733366301105470,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '286591',
                                    pageJsonId: '537892',
                                    actionTitle: '',
                                    code: 'function main(data,state,success,fail){function getDate(){var date=new Date,year=date.getFullYear(),month=date.getMonth()+1,strDate=date.getDate();if(month<10)month="0".concat(month);if(strDate<10)strDate="0".concat(strDate);return"".concat(year,"-").concat(month,"-").concat(strDate)}data.factorForm.busyDeadline=[getDate(),getDate()];success({busyDeadline:data.factorForm.busyDeadline,busyDeadlineBegin:getDate(),busyDeadlineEnd:getDate()})};',
                                  },
                                  line_number: 6,
                                  callback1: [
                                    {
                                      type: 'setRangeValue',
                                      dataId: 168898213792637660,
                                      options: {
                                        compId: 'RangePicker_157477',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'RangePicker',
                                        id: '7128226',
                                        startVal:
                                          '$data_286591.busyDeadlineBegin$',
                                        endVal: '$data_286591.busyDeadlineEnd$',
                                      },
                                      line_number: 7,
                                      callback1: [],
                                    },
                                    {
                                      type: 'setDataSource',
                                      dataId: 168733374201113900,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '528094',
                                        pageJsonId: '537892',
                                        dataSourceId: 166124254360037760,
                                        dataSourceName: 'factorForm',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '662581',
                                            code: 'busyDeadline',
                                            name: '业务期限',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            value: {
                                              type: [
                                                'context',
                                                '$data_286591$',
                                              ],
                                              code: 'busyDeadline',
                                            },
                                            _codePath: ['busyDeadline'],
                                            _idpath: ['662581'],
                                          },
                                          {
                                            attrId: '18277721',
                                            code: 'busyDeadlineBegin',
                                            name: '业务期限（起）',
                                            type: 'string',
                                            initialData: {
                                              type: 'static',
                                              value: '',
                                            },
                                            showInput: true,
                                            value: {
                                              type: [
                                                'context',
                                                '$data_286591$',
                                              ],
                                              code: 'busyDeadlineBegin',
                                            },
                                            _codePath: ['busyDeadlineBegin'],
                                            _idpath: ['18277721'],
                                          },
                                          {
                                            attrId: '407031',
                                            code: 'busyDeadlineEnd',
                                            name: '业务期限（止）',
                                            type: 'string',
                                            initialData: {
                                              type: 'static',
                                              value: '',
                                            },
                                            showInput: true,
                                            value: {
                                              type: [
                                                'context',
                                                '$data_286591$',
                                              ],
                                              code: 'busyDeadlineEnd',
                                            },
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
                                      line_number: 8,
                                      callback1: [
                                        {
                                          type: 'customActionCode',
                                          dataId: 168804580698116500,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '0677873',
                                            pageJsonId: '537892',
                                            actionTitle: '',
                                            code: 'function main(data,state,success,fail){function getDate(){var date=new Date,year=date.getFullYear(),month=date.getMonth()+1,strDate=date.getDate();if(month<10)month="0".concat(month);if(strDate<10)strDate="0".concat(strDate);return"".concat(year,"-").concat(month,"-").concat(strDate)}var attrList=[];var obj=data.factorForm;for(var key in obj){if(key=="busyDeadline"){obj["busyDeadlineBegin"]=getDate();obj["busyDeadlineEnd"]=getDate();continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}var start;var end;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode=="busyDeadlineBegin"){start=attrList[i].attrValue}if(attrList[i].attrCode=="busyDeadlineEnd"){end=attrList[i].attrValue}}console.log("==================awdaw");if(start!=undefined&&end!=undefined){var startDate=new Date(start);var endDate=new Date(end);var startYear=startDate.getFullYear();var startMonth=startDate.getMonth();var endYear=endDate.getFullYear();var endMonth=endDate.getMonth();var monthDiff=(endYear-startYear)*12+(endMonth-startMonth);console.log("====\\u8BA1\\u7B97\\u51FA===",monthDiff);data.factorForm.busyDeadlineMonth=monthDiff;var found=false;for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode==="busyDeadlineMonth"){attrList[i].attrValue=monthDiff;found=true;break}}if(found==false){attrList.push({"attrCode":"busyDeadlineMonth","attrName":"","attrValue":monthDiff})}}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                          },
                                          line_number: 9,
                                          callback1: [
                                            {
                                              type: 'callParentCustomFunc',
                                              dataId: 168804580698138050,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '8316237',
                                                pageJsonId: '537892',
                                                pathname: '/commonAuditOrder',
                                                pageId: '872682457815691264',
                                                customFuncName: 'getFactor',
                                                customFuncParams:
                                                  '$data.sceneSubmit$',
                                                modalPath: '/commonAuditOrder',
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
                            },
                          ],
                        },
                      ];
                      eventDataifelse440.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDataifelse440, { e }, 'ifelse', {
                        id: 'ifelse',
                        name: 'ifelse',
                        type: 'ifelse',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Button_791758'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
            </View>
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={'22'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={1}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '该集团主要为XX（集团简单介绍），原已合作XX业务。现阶段有意向与我司合作工地监控业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_908595_147348',
                uid: 'TextArea_908595_147348',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_908595_147348'] = r)}
              {...injectData}
            />
          </Form>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_380221',
              uid: 'View_380221',
              type: 'View',
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
              justifyContent: 'flex-end',
              margin: '12px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['View_380221'] = r)}
            {...injectData}
          >
            <Button
              name={'新增'}
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
                id: 'Button_2162543',
                uid: 'Button_2162543',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal116: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166314610874318850,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '611628',
                      pageJsonId: '537892',
                      modalname: '/networkAcrossProvincecopy1copy',
                      pageId: '1050336965737771008',
                      paramsObj: {
                        phone: '$value_24586657$',
                        lanId: '$state.lanId$',
                        catalogCode: '$state.catalogCode$',
                        isCoreFlag: '1',
                      },
                      paramsObjKeyValueMap: {
                        phone: '$value_24586657$',
                        lanId: '$state.lanId$',
                        catalogCode: '$state.catalogCode$',
                        isCoreFlag: '1',
                      },
                      modalPath: '/networkAcrossProvincecopy1copy',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166314610874334820,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '195951',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){console.log("====\\u786E\\u8BA4\\u56DE\\u8C03===",okData_611628);data.feeInfo.push(okData_611628);var instList=[];for(var key in okData_611628){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_611628[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_611628[key])})}}var instObj={"instCode":okData_611628.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.push(instObj)}else{var instList=[];instList.push(instObj);data.sceneSubmit.instList=instList}success()};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166314610874380700,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '6286842',
                              pageJsonId: '537892',
                              dataSourceId: 170202608908322900,
                              dataSourceName: 'feeInfo',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '2471286',
                                  code: 'setMealPackage',
                                  name: '套餐',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackage'],
                                  _idpath: ['2471286'],
                                },
                                {
                                  attrId: '174431',
                                  code: 'setMealPackageType',
                                  name: '套餐包类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackageType'],
                                  _idpath: ['174431'],
                                },
                                {
                                  attrId: '5098645',
                                  code: 'dirPrice',
                                  name: '功能费目录价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['dirPrice'],
                                  _idpath: ['5098645'],
                                },
                                {
                                  attrId: '8328933',
                                  code: 'firstReducedPrice',
                                  name: '一次优惠后功能费',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['firstReducedPrice'],
                                  _idpath: ['8328933'],
                                },
                                {
                                  attrId: '845346',
                                  code: 'firstReducedDiscount',
                                  name: '一次折扣',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['firstReducedDiscount'],
                                  _idpath: ['845346'],
                                },
                                {
                                  attrId: '056819',
                                  code: 'lowPrice',
                                  name: '最低销售价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['lowPrice'],
                                  _idpath: ['056819'],
                                },
                                {
                                  attrId: '520389',
                                  code: 'secondReducedPrice',
                                  name: '二次优惠后功能费',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['secondReducedPrice'],
                                  _idpath: ['520389'],
                                },
                                {
                                  attrId: '263545',
                                  code: 'secondReducedDiscount',
                                  name: '二次优惠折扣',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['secondReducedDiscount'],
                                  _idpath: ['263545'],
                                },
                                {
                                  attrId: '376008',
                                  code: 'marketName',
                                  name: '营销活动名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['marketName'],
                                  _idpath: ['376008'],
                                },
                                {
                                  attrId: '652159',
                                  code: 'setMealPackageTypeName',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackageTypeName'],
                                  _idpath: ['652159'],
                                },
                                {
                                  attrId: '9380438',
                                  code: 'setMealPackageName',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackageName'],
                                  _idpath: ['9380438'],
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
                            type: 'callParentCustomFunc',
                            dataId: 166320792556447230,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '408505',
                              pageJsonId: '537892',
                              pathname: '/auditOrderPrepare',
                              pageId: '884045146848604160',
                              customFuncName: 'getFactor',
                              customFuncParams: '$data.sceneSubmit$',
                              modalPath: '/auditOrderPrepare',
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
                eventDatashowCustomModal116.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal116,
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
              ref={(r: any) => (refs['Button_2162543'] = r)}
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
                id: 'Button_576412',
                uid: 'Button_576412',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey47: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 170236156750841470,
                    options: {
                      compId: 'Table_009428',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '6084077',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '9152338',
                            options: {
                              context: '$selectedRowKeys_6084077$',
                              operate: 'empty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            condId: '6181125',
                            condition: [
                              {
                                options: {
                                  context: '$selectedRowKeys_6084077$',
                                  operate: 'notEmpty',
                                },
                                condId: '0586874',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$selectedRowKeys_6084077$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                condId: '771025',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            connector: '||',
                          },
                        ],
                        dataId: 170236157406584000,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170236157406543420,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170236157406522370,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 170236157406508130,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170236157406520160,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170236157406538700,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 170236157406538900,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170236157406591040,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170236157406545600,
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
                                                  id: '6920229',
                                                  pageJsonId: '537892',
                                                  dataSourceId: 170202608908322900,
                                                  dataSourceName: 'feeInfo',
                                                  dataSourceRelType: 'custom',
                                                  dataSourceSetValue: [
                                                    {
                                                      attrId: '2471286',
                                                      code: 'setMealPackage',
                                                      name: '套餐',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '174431',
                                                      code: 'setMealPackageType',
                                                      name: '套餐包类型',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '5098645',
                                                      code: 'dirPrice',
                                                      name: '功能费目录价',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '8328933',
                                                      code: 'firstReducedPrice',
                                                      name: '一次优惠后功能费',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '845346',
                                                      code: 'firstReducedDiscount',
                                                      name: '一次折扣',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '056819',
                                                      code: 'lowPrice',
                                                      name: '最低销售价',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '520389',
                                                      code: 'secondReducedPrice',
                                                      name: '二次优惠后功能费',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '263545',
                                                      code: 'secondReducedDiscount',
                                                      name: '二次优惠折扣',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '376008',
                                                      code: 'marketName',
                                                      name: '营销活动名称',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '652159',
                                                      code: 'setMealPackageTypeName',
                                                      name: '属性',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '9380438',
                                                      code: 'setMealPackageName',
                                                      name: '属性',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                  ],
                                                  operateType: 1,
                                                  onlySetPatch: true,
                                                  otherObjectArrayOptions: {},
                                                  targetDataSourcePaths: [],
                                                },
                                                actionObjId: 'setDataSource',
                                                actionObjName: 'page',
                                                value: 'setDataSource',
                                                line_number: 6,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 170236157406588700,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170236157406519740,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170236157406546100,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'pathname',
                                                  'customFuncName',
                                                  'customFuncParams',
                                                ],
                                                options: {
                                                  compId:
                                                    'callParentCustomFunc',
                                                  compName: 'system',
                                                  id: '813886',
                                                  pageJsonId: '537892',
                                                  pathname:
                                                    '/auditOrderPrepare',
                                                  pageId: '884045146848604160',
                                                  customFuncName: 'getFactor',
                                                  customFuncParams:
                                                    '$data.sceneSubmit$',
                                                  modalPath:
                                                    '/auditOrderPrepare',
                                                },
                                                actionObjId:
                                                  'callParentCustomFunc',
                                                actionObjName: 'system',
                                                value: 'callParentCustomFunc',
                                                line_number: 7,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170236157406542820,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'actionTitle',
                                          'editorCode',
                                        ],
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '4225024',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_6084077;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                        },
                                        actionObjId: 'customActionCode',
                                        actionObjName: 'page',
                                        value: 'customActionCode',
                                        line_number: 5,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 170236157406537820,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
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
                                  id: '335674',
                                  pageJsonId: '537892',
                                  type: 'confirm',
                                  title: '温馨提示',
                                  content: '您确定要删除吗?',
                                  okText: '确认',
                                },
                                actionObjId: 'showModal',
                                actionObjName: 'page',
                                value: 'showModal',
                                line_number: 4,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'showModal',
                                dataId: 170236157406522370,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '335674',
                                  pageJsonId: '537892',
                                  type: 'confirm',
                                  title: '温馨提示',
                                  content: '您确定要删除吗?',
                                  okText: '确认',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 170236157406520160,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '4225024',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_6084077;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 170236157406538900,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '6920229',
                                          pageJsonId: '537892',
                                          dataSourceId: 170202608908322900,
                                          dataSourceName: 'feeInfo',
                                          dataSourceRelType: 'custom',
                                          dataSourceSetValue: [
                                            {
                                              attrId: '2471286',
                                              code: 'setMealPackage',
                                              name: '套餐',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '174431',
                                              code: 'setMealPackageType',
                                              name: '套餐包类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '5098645',
                                              code: 'dirPrice',
                                              name: '功能费目录价',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '8328933',
                                              code: 'firstReducedPrice',
                                              name: '一次优惠后功能费',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '845346',
                                              code: 'firstReducedDiscount',
                                              name: '一次折扣',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '056819',
                                              code: 'lowPrice',
                                              name: '最低销售价',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '520389',
                                              code: 'secondReducedPrice',
                                              name: '二次优惠后功能费',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '263545',
                                              code: 'secondReducedDiscount',
                                              name: '二次优惠折扣',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '376008',
                                              code: 'marketName',
                                              name: '营销活动名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '652159',
                                              code: 'setMealPackageTypeName',
                                              name: '属性',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '9380438',
                                              code: 'setMealPackageName',
                                              name: '属性',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
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
                                      {
                                        type: 'callParentCustomFunc',
                                        dataId: 170236157406588700,
                                        options: {
                                          compId: 'callParentCustomFunc',
                                          compName: 'system',
                                          id: '813886',
                                          pageJsonId: '537892',
                                          pathname: '/auditOrderPrepare',
                                          pageId: '884045146848604160',
                                          customFuncName: 'getFactor',
                                          customFuncParams:
                                            '$data.sceneSubmit$',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        line_number: 7,
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
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 170236157406580100,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '307442',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '请先选择数据！',
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey47.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey47,
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
              ref={(r: any) => (refs['Button_576412'] = r)}
              {...injectData}
            />
            <Button
              name={'清空'}
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
                id: 'Button_804191',
                uid: 'Button_804191',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 10px 0px 0px' }}
              onClick={(e: any) => {
                const eventDataifelse441: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '913482',
                        options: {
                          context: '$data.feeInfo$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$data.feeInfo.length$',
                          operate: '>',
                          manualValue: '0',
                        },
                        condId: '225057',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168654928547086080,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 168654933664453340,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168654934060454430,
                            children: [],
                            todoOptions: ['msgType', 'value', 'duration'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '3807376',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '暂无数据！',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                            line_number: 6,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 168654934060454430,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '3807376',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '暂无数据！',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showModal',
                        dataId: 168654933030972830,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '465026',
                          pageJsonId: '537892',
                          type: 'confirm',
                          title: '温馨提示',
                          content: '您确定要清空全部数据吗?',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 168654933030923420,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '543478',
                              pageJsonId: '537892',
                              dataSourceId: 166096152690913730,
                              dataSourceName: 'sceneSubmit',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '154379',
                                  code: 'catalogCode',
                                  name: '类目编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '4562264',
                                  code: 'approveGrade',
                                  name: '审批等级',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '63768',
                                  code: 'attrList',
                                  name: '要素',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '919265',
                                  code: 'fileInfo',
                                  name: '附件',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  children: [],
                                },
                                {
                                  attrId: '360171',
                                  code: 'catalogItemCode',
                                  name: '类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '420623',
                                  code: 'catalogItemSubType',
                                  name: '类目项子类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '375466',
                                  code: 'childCatalogCode',
                                  name: '子类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '9257773',
                                  code: 'parentCatalogCode',
                                  name: '上级类目编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '5733013',
                                  code: 'parentCatalogItemCode',
                                  name: '上级类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '440627',
                                  code: 'childCatalogDesc',
                                  name: '子类目项描述',
                                  type: 'string',
                                  initialData: { type: 'static' },
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
                                  value: {
                                    type: ['EMPTY_DATA', 'array'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.array$',
                                  },
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
                                type: 'callParentCustomFunc',
                                dataId: 168654933030954900,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '115292',
                                  pageJsonId: '537892',
                                  pathname: '/auditOrderPrepare',
                                  pageId: '884045146848604160',
                                  customFuncName: 'getFactor',
                                  customFuncParams: '$data.sceneSubmit$',
                                  modalPath: '/auditOrderPrepare',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168655582339309540,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '429442',
                              pageJsonId: '537892',
                              dataSourceId: 170202608908322900,
                              dataSourceName: 'feeInfo',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '2471286',
                                  code: 'setMealPackage',
                                  name: '套餐',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackage'],
                                  _idpath: ['2471286'],
                                },
                                {
                                  attrId: '174431',
                                  code: 'setMealPackageType',
                                  name: '套餐包类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackageType'],
                                  _idpath: ['174431'],
                                },
                                {
                                  attrId: '5098645',
                                  code: 'dirPrice',
                                  name: '功能费目录价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['dirPrice'],
                                  _idpath: ['5098645'],
                                },
                                {
                                  attrId: '8328933',
                                  code: 'firstReducedPrice',
                                  name: '一次优惠后功能费',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['firstReducedPrice'],
                                  _idpath: ['8328933'],
                                },
                                {
                                  attrId: '845346',
                                  code: 'firstReducedDiscount',
                                  name: '一次折扣',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['firstReducedDiscount'],
                                  _idpath: ['845346'],
                                },
                                {
                                  attrId: '056819',
                                  code: 'lowPrice',
                                  name: '最低销售价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['lowPrice'],
                                  _idpath: ['056819'],
                                },
                                {
                                  attrId: '520389',
                                  code: 'secondReducedPrice',
                                  name: '二次优惠后功能费',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['secondReducedPrice'],
                                  _idpath: ['520389'],
                                },
                                {
                                  attrId: '263545',
                                  code: 'secondReducedDiscount',
                                  name: '二次优惠折扣',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['secondReducedDiscount'],
                                  _idpath: ['263545'],
                                },
                                {
                                  attrId: '376008',
                                  code: 'marketName',
                                  name: '营销活动名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['marketName'],
                                  _idpath: ['376008'],
                                },
                                {
                                  attrId: '652159',
                                  code: 'setMealPackageTypeName',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackageTypeName'],
                                  _idpath: ['652159'],
                                },
                                {
                                  attrId: '9380438',
                                  code: 'setMealPackageName',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['setMealPackageName'],
                                  _idpath: ['9380438'],
                                },
                              ],
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse441.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataifelse441, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_804191'] = r)}
              {...injectData}
            />
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
                title: '套餐',
                key: 'busiType',
                dataIndex: 'setMealPackageName',
                className: '',
                id: '7632392',
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
                title: '套餐包类型',
                key: 'accessLocation',
                dataIndex: 'setMealPackageTypeName',
                className: 'divider',
                id: '740624',
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
                title: '功能费目录价',
                key: 'setMealName',
                dataIndex: 'dirPrice',
                className: 'divider',
                id: '776625',
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
                title: '一次优惠后功能费',
                key: 'handingFeeMonth',
                dataIndex: 'firstReducedPrice',
                className: 'divider',
                id: '8135192',
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
                id: '057075',
                title: '一次折扣',
                dataIndex: 'firstReducedDiscount',
                key: '057075',
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
                title: '最低销售价',
                key: 'bandWidthText',
                dataIndex: 'lowPrice',
                className: 'divider',
                id: '5564085',
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
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.feeInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '修改',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '85229',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.feeInfo'}
            $$componentItem={{
              id: 'Table_009428',
              uid: 'Table_009428',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal117: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopy1copy',
                    pageId: '1050336965737771008',
                    modalPath: '/networkAcrossProvincecopy1copy',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166540314414141150,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '0855155',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_951698.rowId});data.feeInfo.push(okData_951698);var instList=[];for(var key in okData_951698){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_951698[key]})}}var instObj={"instCode":okData_951698.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_951698.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166540314414131400,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '539537',
                            pageJsonId: '537892',
                            dataSourceId: 170202608908322900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '2471286',
                                code: 'setMealPackage',
                                name: '套餐',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackage'],
                                _idpath: ['2471286'],
                              },
                              {
                                attrId: '174431',
                                code: 'setMealPackageType',
                                name: '套餐包类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageType'],
                                _idpath: ['174431'],
                              },
                              {
                                attrId: '5098645',
                                code: 'dirPrice',
                                name: '功能费目录价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['dirPrice'],
                                _idpath: ['5098645'],
                              },
                              {
                                attrId: '8328933',
                                code: 'firstReducedPrice',
                                name: '一次优惠后功能费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['firstReducedPrice'],
                                _idpath: ['8328933'],
                              },
                              {
                                attrId: '845346',
                                code: 'firstReducedDiscount',
                                name: '一次折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['firstReducedDiscount'],
                                _idpath: ['845346'],
                              },
                              {
                                attrId: '056819',
                                code: 'lowPrice',
                                name: '最低销售价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lowPrice'],
                                _idpath: ['056819'],
                              },
                              {
                                attrId: '520389',
                                code: 'secondReducedPrice',
                                name: '二次优惠后功能费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['secondReducedPrice'],
                                _idpath: ['520389'],
                              },
                              {
                                attrId: '263545',
                                code: 'secondReducedDiscount',
                                name: '二次优惠折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['secondReducedDiscount'],
                                _idpath: ['263545'],
                              },
                              {
                                attrId: '376008',
                                code: 'marketName',
                                name: '营销活动名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['marketName'],
                                _idpath: ['376008'],
                              },
                              {
                                attrId: '652159',
                                code: 'setMealPackageTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageTypeName'],
                                _idpath: ['652159'],
                              },
                              {
                                attrId: '9380438',
                                code: 'setMealPackageName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageName'],
                                _idpath: ['9380438'],
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
                          type: 'callParentCustomFunc',
                          dataId: 166540314414147520,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '7453836',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
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
              eventDatashowCustomModal117.params =
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
                eventDatashowCustomModal117,
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
            ref={(r: any) => (refs['Table_009428'] = r)}
            {...injectData}
          />
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
                title: '套餐',
                key: 'busiType',
                dataIndex: 'setMealPackageName',
                className: '',
                id: '7632392',
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
                title: '套餐包类型',
                key: 'accessLocation',
                dataIndex: 'setMealPackageTypeName',
                className: 'divider',
                id: '740624',
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
                title: '功能费目录价',
                key: 'setMealName',
                dataIndex: 'dirPrice',
                className: 'divider',
                id: '776625',
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
                title: '一次优惠后功能费',
                key: 'handingFeeMonth',
                dataIndex: 'firstReducedPrice',
                className: 'divider',
                id: '8135192',
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
                id: '057075',
                title: '一次折扣',
                dataIndex: 'firstReducedDiscount',
                key: '057075',
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
                title: '最低销售价',
                key: 'bandWidthText',
                dataIndex: 'lowPrice',
                className: 'divider',
                id: '5564085',
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
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.feeInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '195144',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.feeInfo'}
            $$componentItem={{
              id: 'Table_937379',
              uid: 'Table_937379',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal118: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopy1copy',
                    pageId: '1050336965737771008',
                    modalPath: '/networkAcrossProvincecopy1copy',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166540314414141150,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '0855155',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_951698.rowId});data.feeInfo.push(okData_951698);var instList=[];for(var key in okData_951698){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_951698[key]})}}var instObj={"instCode":okData_951698.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_951698.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166540314414131400,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '539537',
                            pageJsonId: '537892',
                            dataSourceId: 170202608908322900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '2471286',
                                code: 'setMealPackage',
                                name: '套餐',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackage'],
                                _idpath: ['2471286'],
                              },
                              {
                                attrId: '174431',
                                code: 'setMealPackageType',
                                name: '套餐包类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageType'],
                                _idpath: ['174431'],
                              },
                              {
                                attrId: '5098645',
                                code: 'dirPrice',
                                name: '功能费目录价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['dirPrice'],
                                _idpath: ['5098645'],
                              },
                              {
                                attrId: '8328933',
                                code: 'firstReducedPrice',
                                name: '一次优惠后功能费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['firstReducedPrice'],
                                _idpath: ['8328933'],
                              },
                              {
                                attrId: '845346',
                                code: 'firstReducedDiscount',
                                name: '一次折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['firstReducedDiscount'],
                                _idpath: ['845346'],
                              },
                              {
                                attrId: '056819',
                                code: 'lowPrice',
                                name: '最低销售价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lowPrice'],
                                _idpath: ['056819'],
                              },
                              {
                                attrId: '520389',
                                code: 'secondReducedPrice',
                                name: '二次优惠后功能费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['secondReducedPrice'],
                                _idpath: ['520389'],
                              },
                              {
                                attrId: '263545',
                                code: 'secondReducedDiscount',
                                name: '二次优惠折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['secondReducedDiscount'],
                                _idpath: ['263545'],
                              },
                              {
                                attrId: '376008',
                                code: 'marketName',
                                name: '营销活动名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['marketName'],
                                _idpath: ['376008'],
                              },
                              {
                                attrId: '652159',
                                code: 'setMealPackageTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageTypeName'],
                                _idpath: ['652159'],
                              },
                              {
                                attrId: '9380438',
                                code: 'setMealPackageName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageName'],
                                _idpath: ['9380438'],
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
                          type: 'callParentCustomFunc',
                          dataId: 166540314414147520,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '7453836',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
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
              eventDatashowCustomModal118.params =
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
                eventDatashowCustomModal118,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal119: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170226303784244700,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '964204',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopy1copy',
                    pageId: '1050336965737771008',
                    modalPath: '/networkAcrossProvincecopy1copy',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isEdit: 'TRUE',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isEdit: 'TRUE',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170226303784207170,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '982533',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_964204.rowId});data.feeInfo.push(okData_964204);var instList=[];for(var key in okData_964204){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_964204[key]})}}var instObj={"instCode":okData_964204.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_964204.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 170226303784254560,
                          shielding: true,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '784574',
                            pageJsonId: '537892',
                            dataSourceId: 170202608908322900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '2471286',
                                code: 'setMealPackage',
                                name: '套餐',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackage'],
                                _idpath: ['2471286'],
                              },
                              {
                                attrId: '174431',
                                code: 'setMealPackageType',
                                name: '套餐包类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageType'],
                                _idpath: ['174431'],
                              },
                              {
                                attrId: '5098645',
                                code: 'dirPrice',
                                name: '功能费目录价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['dirPrice'],
                                _idpath: ['5098645'],
                              },
                              {
                                attrId: '8328933',
                                code: 'firstReducedPrice',
                                name: '一次优惠后功能费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['firstReducedPrice'],
                                _idpath: ['8328933'],
                              },
                              {
                                attrId: '845346',
                                code: 'firstReducedDiscount',
                                name: '一次折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['firstReducedDiscount'],
                                _idpath: ['845346'],
                              },
                              {
                                attrId: '056819',
                                code: 'lowPrice',
                                name: '最低销售价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lowPrice'],
                                _idpath: ['056819'],
                              },
                              {
                                attrId: '520389',
                                code: 'secondReducedPrice',
                                name: '二次优惠后功能费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['secondReducedPrice'],
                                _idpath: ['520389'],
                              },
                              {
                                attrId: '263545',
                                code: 'secondReducedDiscount',
                                name: '二次优惠折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['secondReducedDiscount'],
                                _idpath: ['263545'],
                              },
                              {
                                attrId: '376008',
                                code: 'marketName',
                                name: '营销活动名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['marketName'],
                                _idpath: ['376008'],
                              },
                              {
                                attrId: '652159',
                                code: 'setMealPackageTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageTypeName'],
                                _idpath: ['652159'],
                              },
                              {
                                attrId: '9380438',
                                code: 'setMealPackageName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['setMealPackageName'],
                                _idpath: ['9380438'],
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
                          type: 'callParentCustomFunc',
                          dataId: 170226303784285600,
                          shielding: true,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '380833',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
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
              eventDatashowCustomModal119.params =
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
                eventDatashowCustomModal119,
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
            ref={(r: any) => (refs['Table_937379'] = r)}
            {...injectData}
          />
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_851124_14685846',
              uid: 'Row_851124_14685846',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            ref={(r: any) => (refs['Row_851124_14685846'] = r)}
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
              colSpace={12}
              rowSpace={16}
              formCode={'Form_395851'}
              $$componentItem={{
                id: 'Form_395851_1727917_661735_319855_152442_180382',
                uid: 'Form_395851_1727917_661735_319855_152442_180382',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs['Form_395851_1727917_661735_319855_152442_180382'] = r)
              }
              {...injectData}
            >
              <Select
                name={'附件'}
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
                attr={{}}
                placeholder={'请选择'}
                fieldName={'accessory'}
                formItemIndex={0}
                $$componentItem={{
                  id: 'Input_690228_5400337_280164_0694544_38738_7545196',
                  uid: 'Input_690228_5400337_280164_0694544_38738_7545196',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_690228_5400337_280164_0694544_38738_7545196'] =
                    r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_9117364_899382_548798_637825',
                  uid: 'View_22346374_875512_9117364_899382_548798_637825',
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
                  (refs['View_22346374_875512_9117364_899382_548798_637825'] =
                    r)
                }
                {...injectData}
              >
                <StdUpload
                  name={'附件上传'}
                  uploadStyle={'click'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  fileNameEncode={false}
                  isWatermark={false}
                  optionalFile={false}
                  fileName={'file'}
                  selfSpan={''}
                  labelCol={'8'}
                  wrapperCol={16}
                  acceptType={[]}
                  withCredentials={true}
                  numberLimit={5}
                  singleFileMaxSize={50}
                  uploadText={'点击上传'}
                  deleteIcon={{
                    deleteIconTheme: 'outlined',
                    deleteIconType: 'delete',
                    deleteIconIsIconFont: false,
                    showRemoveIcon: false,
                  }}
                  downloadIcon={{
                    downloadIconTheme: 'outlined',
                    downloadIconType: 'download',
                    downloadIconIsIconFont: false,
                    showDownloadIcon: false,
                  }}
                  previewIcon={{
                    previewIconTheme: 'outlined',
                    previewIconType: 'eye',
                    previewIconIsIconFont: false,
                    showPreviewIcon: false,
                  }}
                  fieldName={'uploading'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'StdUpload_6230546_867413_762296_170428_730988_094988',
                    uid: 'StdUpload_6230546_867413_762296_170428_730988_094988',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ margin: '0px 0px 0px 0px' }}
                  onFinishUpload={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatagetSelectedData193: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166372683775767040,
                        options: {
                          compId:
                            'Input_690228_5400337_280164_0694544_38738_7545196',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '424238',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166372684330134400,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '99325',
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
                                  value: {
                                    type: ['context', '$file?.name$'],
                                    code: '',
                                  },
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
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_424238[0].value$',
                                  },
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
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.filePathInServer$',
                                  },
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
                                  value: {
                                    type: ['customize'],
                                    code: '$state.tacheCode$',
                                  },
                                },
                                {
                                  attrId: '7419638',
                                  code: 'fileCode',
                                  name: '文件编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: [
                                      'context',
                                      '$file?.response?.resultObject?.fileId$',
                                    ],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '097484',
                                  code: 'createTime',
                                  name: '创建时间',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.statusDate$',
                                  },
                                },
                                {
                                  attrId: '604675',
                                  code: 'createStaff',
                                  name: '创建人',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$state.createStaff$',
                                  },
                                },
                                {
                                  attrId: '729925',
                                  code: 'fileTypeName',
                                  name: '附件类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_424238[0].label$',
                                  },
                                },
                              ],
                              operateType: 0,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 166372684330136800,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '2501218',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166372684330169120,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '213682',
                                      pageJsonId: '537892',
                                      pathname: '/commonAuditOrder',
                                      pageId: '872682457815691264',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
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
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166372688410723070,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '306514',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData193.params =
                      [
                        { title: '文件对象', name: 'file', value: '$file$' },
                        {
                          title: '文件列表',
                          name: 'fileList',
                          value: '$fileList$',
                        },
                        {
                          title: '文件ID',
                          name: 'fileId',
                          value: '$file?.response?.resultObject?.fileId$',
                        },
                        {
                          title: '文件大小',
                          name: 'fileSize',
                          value: '$file?.size$',
                        },
                        {
                          title: '文件名称',
                          name: 'fileName',
                          value: '$file?.name$',
                        },
                        {
                          title: '响应信息',
                          name: 'fileResponse',
                          value: '$file?.response$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatagetSelectedData193,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'getSelectedData',
                      {
                        id: 'getSelectedData',
                        name: 'getSelectedData',
                        type: 'getSelectedData',
                        platform: 'pc',
                      },
                    );
                  }}
                  onListenUploading={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatacustomActionCode490: any = [
                      {
                        type: 'customActionCode',
                        dataId: 166192905624837500,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5697634',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode490.params =
                      [
                        { title: '文件对象', name: 'file', value: '$file$' },
                        {
                          title: '文件列表',
                          name: 'fileList',
                          value: '$fileList$',
                        },
                        {
                          title: '文件ID',
                          name: 'fileId',
                          value: '$file?.response?.resultObject?.fileId$',
                        },
                        {
                          title: '文件大小',
                          name: 'fileSize',
                          value: '$file?.size$',
                        },
                        {
                          title: '文件名称',
                          name: 'fileName',
                          value: '$file?.name$',
                        },
                        {
                          title: '响应信息',
                          name: 'fileResponse',
                          value: '$file?.response$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacustomActionCode490,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'customActionCode',
                      {
                        id: 'customActionCode',
                        name: 'customActionCode',
                        type: 'customActionCode',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) =>
                    (refs[
                      'StdUpload_6230546_867413_762296_170428_730988_094988'
                    ] = r)
                  }
                  {...injectData}
                />
              </View>
            </Form>
          </Row>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_7915488',
            uid: 'View_4949093_7915488',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_4949093_7915488'] = r)}
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
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '948989',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
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
              id: 'Table_5369494_494011',
              uid: 'Table_5369494_494011',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode491: any = [
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
              eventDatacustomActionCode491.params =
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
                eventDatacustomActionCode491,
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
              const eventDatadownloadByFileId35: any = [
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
              eventDatadownloadByFileId35.params =
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
                eventDatadownloadByFileId35,
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
            ref={(r: any) => (refs['Table_5369494_494011'] = r)}
            {...injectData}
          />
        </View>
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => (refs['BOFramer_4149305_609402'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0011_0002$$Page, {
  pageId: '930364949744459776',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
