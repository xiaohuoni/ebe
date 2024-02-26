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
  Text,
  RangePicker,
  Button,
  TextArea,
  Row,
  StdUpload,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '986568286420525056';
const ClsCp_0011_0005$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_6628063: any) => {
    const eventDatacustomActionCode175: any = [
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
    eventDatacustomActionCode175.params =
      [
        {
          title: '事件入参',
          name: 'options_6628063',
          value: '$options_6628063$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode175,
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
    const eventDatagetValue93: any = [
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
    eventDatagetValue93.params =
      [
        {
          title: '事件入参',
          name: 'options_087246',
          value: '$options_087246$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue93, { options_087246 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calSecondDiscount = (options_887791: any) => {
    const eventDatagetValue94: any = [
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
    eventDatagetValue94.params =
      [
        {
          title: '事件入参',
          name: 'options_887791',
          value: '$options_887791$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue94, { options_887791 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const feeVerification = (options_074375: any) => {
    const eventDatagetValue95: any = [
      {
        type: 'getValue',
        dataId: 168674300124827620,
        options: {
          compId: 'Input_2136805',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '581559',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168674300929188830,
            options: {
              compId: 'Input_291297',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '042335',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168674301592124200,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '5523745',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var secondReducedValue=parseFloat(value_042335);var firstReducedValue=parseFloat(value_581559);console.log("\\u4E00\\u6B21\\u4F18\\u60E0\\u540E\\uFF1A",firstReducedValue);console.log("\\u4E8C\\u6B21\\u4F18\\u60E0\\u540E\\uFF1A",secondReducedValue);if(!secondReducedValue&&secondReducedValue!=0){console.log("111111");success()}else if(!firstReducedValue){console.log("222222");fail(firstReducedValue)}else if(firstReducedValue>=secondReducedValue){console.log("333333");success()}else{console.log("444444");fail(firstReducedValue)}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168674301592167070,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '26564',
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
                          value: { type: [], code: '' },
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
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 168674301592189020,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '643696',
                      pageJsonId: '537892',
                      type: 'info',
                      value: '二次优惠必须大于等于一次优惠',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'setValue',
                    dataId: 168674538090867870,
                    options: {
                      compId: 'Input_291297',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '6361686',
                      valueList: { Input_291297: '$value_581559$' },
                    },
                    line_number: 6,
                    callback1: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue95.params =
      [
        {
          title: '事件入参',
          name: 'options_074375',
          value: '$options_074375$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue95, { options_074375 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const updateSetMealInfo = (options_6437462: any) => {
    const eventDatagetValue96: any = [
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
                  code: 'function main(data,state,success,fail){var _data$setMealInfoList;var opType=options_6437462.opType;var setMealPackage=value_41646;var setMealPackageType=value_543034;var info=(_data$setMealInfoList=data.setMealInfoList)===null||_data$setMealInfoList===void 0?void 0:_data$setMealInfoList.totalInfo;var list=info[setMealPackage];var setMealPackageTypeList=list.map(function(item){return item.setMealPackageType});if(opType=="setMealPackage"&&!!info){success({setMealPackageType:setMealPackageTypeList})}else if(opType=="setMealPackageType"&&!!info){var setMealInfo=list.filter(function(item){var _item$setMealPackageT;return(item===null||item===void 0?void 0:(_item$setMealPackageT=item.setMealPackageType)===null||_item$setMealPackageT===void 0?void 0:_item$setMealPackageT.attrValue)==setMealPackageType});console.log("\\u5F53\\u524D\\u83B7\\u5F97\\u7684\\u5957\\u9910\\u6570\\u636E\\uFF1A",setMealInfo[0]);fail({unit:setMealInfo[0].unit,dirPrice:setMealInfo[0].dirPrice,probation:setMealInfo[0].probation})}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 168681535779736700,
                    options: {
                      compId: ['Input_6868266', 'Input_setMealType_045128'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '563617',
                      valueList: {
                        Input_6868266: '',
                        Input_setMealType_045128: '',
                      },
                      compid: ['Input_6868266', 'Input_setMealType_045128'],
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
                    line_number: 9,
                    callback1: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue96.params =
      [
        {
          title: '事件入参',
          name: 'options_6437462',
          value: '$options_6437462$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue96, { options_6437462 }, 'getValue', {
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
    const eventDataapiRequest480: any = [
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
    eventDataapiRequest480.params = [] || [];
    CMDGenerator(eventDataapiRequest480, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest481: any = [
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
        line_number: 3,
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
            line_number: 4,
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
            line_number: 5,
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
                    },
                    {
                      attrId: '826504',
                      code: 'setMealPackageType',
                      name: '套餐包类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '385292',
                      code: 'dirPrice',
                      name: '目录价（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '473367',
                      code: 'unit',
                      name: '单位',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '0570536',
                      code: 'probation',
                      name: '试用期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '0528904',
                      code: 'totalInfo',
                      name: '总套餐信息',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_4385158$'], code: '' },
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
    ];
    eventDataapiRequest481.params = [] || [];
    CMDGenerator(eventDataapiRequest481, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest482: any = [
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
        line_number: 7,
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
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest482.params = [] || [];
    CMDGenerator(eventDataapiRequest482, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest483: any = [
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
        line_number: 9,
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
            line_number: 10,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest483.params = [] || [];
    CMDGenerator(eventDataapiRequest483, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest484: any = [
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
        line_number: 11,
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
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest484.params = [] || [];
    CMDGenerator(eventDataapiRequest484, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest485: any = [
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
        line_number: 13,
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
            line_number: 14,
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
                line_number: 15,
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
    eventDataapiRequest485.params = [] || [];
    CMDGenerator(eventDataapiRequest485, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse252: any = [
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
        line_number: 16,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 17,
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
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busyDeadlineEnd'],
                      _idpath: ['407031'],
                    },
                    {
                      attrId: '18277721',
                      code: 'busyDeadlineBegin',
                      name: '业务期限（起）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busyDeadlineBegin'],
                      _idpath: ['18277721'],
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
                line_number: 19,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4256436',
                    options: {
                      context: '$data_9981685.market$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167506960671921950,
                elseIfs: [],
                line_number: 20,
                callback1: [
                  {
                    type: 'setRequired',
                    dataId: 167506963920409820,
                    options: {
                      compId: [
                        'Input_marketProtoReturnMonth_042798',
                        'Input_secondDiscountFunctionFee_0610156',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '2465166',
                      required: 'true',
                      compid: [
                        'Input_marketProtoReturnMonth_042798',
                        'Input_secondDiscountFunctionFee_0610156',
                      ],
                    },
                    line_number: 21,
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
            line_number: 22,
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
                line_number: 23,
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
                line_number: 24,
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
                    line_number: 25,
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
            line_number: 26,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167342281795236400,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                  ],
                  compName: 'page',
                  id: '391765',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                  ],
                },
                line_number: 27,
              },
              {
                type: 'sysSetVisible',
                dataId: 167342284248845920,
                options: {
                  compId: ['Row_851124_14685846'],
                  compName: 'page',
                  id: '974426',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Row_851124_14685846'],
                },
                line_number: 28,
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
                  ],
                },
                line_number: 29,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse252.params = [] || [];
    CMDGenerator(eventDataifelse252, {}, 'ifelse', {
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_939141')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'企业视频彩铃资费'}
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
          ref={(r: any) => refs.setComponentRef(r, 'Divider_27607_9559912')}
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_683494')}
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_8085894')
            }
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
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_641214')}
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
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_302551_716304_5234815_85629',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'企业视频彩铃资费'}
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
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_292792_78633593_084225_440485',
                    )
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_855319_4239901')
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
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    )
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
              const eventDatasetDataSource219: any = [
                {
                  type: 'setDataSource',
                  dataId: 166124391997578100,
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
                        attrId: '08707745',
                        code: 'setMealPackage',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772',
                            'getFieldsValue',
                          ],
                          code: 'setMealPackage',
                        },
                      },
                      {
                        attrId: '446449',
                        code: 'setMealPackageType',
                        name: '套餐包类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772',
                            'getFieldsValue',
                          ],
                          code: 'setMealPackageType',
                        },
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
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772',
                            'getFieldsValue',
                          ],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '963369',
                        code: 'marketName',
                        name: '营销案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772',
                            'getFieldsValue',
                          ],
                          code: 'marketName',
                        },
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
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366244013133920,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '395614',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366244013131500,
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
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource219.params =
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
                eventDatasetDataSource219,
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
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Form_449441_1900385_965292_804694_950772',
              )
            }
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
              value={data?.factorForm?.setMealPackage}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_setMeal_2651496',
                uid: 'Input_setMeal_2651496',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc631: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168681587315945920,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '644626',
                      pageJsonId: '537892',
                      customFuncName: 'updateSetMealInfo',
                      customFuncParams: 'object',
                      paramsObj: { opType: 'setMealPackage' },
                      paramsObjKeyValueMap: { opType: 'setMealPackage' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168681801061301540,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '7165463',
                          pageJsonId: '537892',
                          customFuncName: 'calFirstReducedDiscount',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 168681801538157100,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '728992',
                          pageJsonId: '537892',
                          customFuncName: 'calSecondDiscount',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc631.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc631, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_setMeal_2651496')}
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
              value={data?.factorForm?.setMealPackageType}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_setMealType_045128',
                uid: 'Input_setMealType_045128',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc632: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168681798954728220,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '166195',
                      pageJsonId: '537892',
                      customFuncName: 'updateSetMealInfo',
                      customFuncParams: 'object',
                      paramsObj: { opType: 'setMealPackageType' },
                      paramsObjKeyValueMap: { opType: 'setMealPackageType' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168681799429816480,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '137102',
                          pageJsonId: '537892',
                          customFuncName: 'calFirstReducedDiscount',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 168681799821904300,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '7792742',
                          pageJsonId: '537892',
                          customFuncName: 'calSecondDiscount',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc632.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc632, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_setMealType_045128')
              }
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
              postfix={'元/成员'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'dirPrice'}
              value={data?.factorForm?.dirPrice}
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
                id: 'Input_6868266',
                uid: 'Input_6868266',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_6868266')}
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
              postfix={'元/成员'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'firstReducedPrice'}
              value={data?.factorForm?.firstReducedPrice}
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
                id: 'Input_2136805',
                uid: 'Input_2136805',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc633: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168629295600834600,
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
                eventDatacallSelfFunc633.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc633, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc634: any = [
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
                eventDatacallSelfFunc634.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc634, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2136805')}
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
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'firstReducedDiscount'}
              value={data?.factorForm?.firstReducedDiscount}
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
                id: 'Input_7727055',
                uid: 'Input_7727055',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7727055')}
              {...injectData}
            />
            <Input
              name={'营销活动名称'}
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
              fieldName={'marketName'}
              value={data?.factorForm?.marketName}
              formItemIndex={5}
              icon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              allowClear={true}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_market_74126',
                uid: 'Input_market_74126',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue233: any = [
                  {
                    type: 'getValue',
                    dataId: 167342469531024770,
                    shielding: true,
                    options: {
                      compId: 'Input_market_74126',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '506791',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '451653',
                            options: {
                              context: '$value_506791$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167350922656538180,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167350924277111360,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167350924616197980,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_secondDiscountFunctionFee_0610156',
                                    'Input_marketProtoReturnMonth_042798',
                                  ],
                                  compName: 'page',
                                  id: '558251',
                                  pageJsonId: '537892',
                                  required: '',
                                  compid: [
                                    'Input_secondDiscountFunctionFee_0610156',
                                    'Input_marketProtoReturnMonth_042798',
                                  ],
                                },
                                actionObjId: 'sysSetRequired',
                                actionObjName: 'page',
                                value: 'sysSetRequired',
                                shielding: true,
                                line_number: 4,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'sysSetRequired',
                                dataId: 167350924616197980,
                                shielding: true,
                                options: {
                                  compId: [
                                    'Input_secondDiscountFunctionFee_0610156',
                                    'Input_marketProtoReturnMonth_042798',
                                  ],
                                  compName: 'page',
                                  id: '558251',
                                  pageJsonId: '537892',
                                  required: '',
                                  compid: [
                                    'Input_secondDiscountFunctionFee_0610156',
                                    'Input_marketProtoReturnMonth_042798',
                                  ],
                                },
                                line_number: 4,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'sysSetRequired',
                            dataId: 167350924045666430,
                            shielding: true,
                            options: {
                              compId: [
                                'Input_secondDiscountFunctionFee_0610156',
                                'Input_marketProtoReturnMonth_042798',
                              ],
                              compName: 'page',
                              id: '106904',
                              pageJsonId: '537892',
                              required: 'true',
                              compid: [
                                'Input_secondDiscountFunctionFee_0610156',
                                'Input_marketProtoReturnMonth_042798',
                              ],
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue233.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue233, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_market_74126')}
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
              postfix={'元/成员'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={6}
              fieldName={'secondReducedPrice'}
              value={data?.factorForm?.secondReducedPrice}
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
                id: 'Input_291297',
                uid: 'Input_291297',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc635: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168629296625557280,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '1011696',
                      pageJsonId: '537892',
                      customFuncName: 'calSecondDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc635.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc635, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc636: any = [
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
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc636.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc636, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_291297')}
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
              placeholder={'请输入'}
              formItemIndex={7}
              fieldName={'secondReducedDiscount'}
              value={data?.factorForm?.secondReducedDiscount}
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
                id: 'Input_54708496',
                uid: 'Input_54708496',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_54708496')}
              {...injectData}
            />
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
                  formItemIndex: 8,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'right',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_427188')}
              {...injectData}
            >
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
                  textAlign: 'right',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: 'fit-content',
                  flex: 4,
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Text_813967')}
                {...injectData}
              />
              <View
                name={'布局容器'}
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
                  textAlign: 'right',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 10,
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_85103835')}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_343581',
                    uid: 'View_343581',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    flex: 12,
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_343581')}
                  {...injectData}
                >
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_592509',
                      uid: 'View_592509',
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
                      width: '100px',
                      flex: 5,
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_592509')}
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
                      defaultValue={['2023-01-01', 'Invalid date']}
                      showTime={false}
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
                        const eventDatagetValue234: any = [
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
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '900113',
                                    options: {
                                      context: '$e$',
                                      operate: 'notEmpty',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168682080036280540,
                                elseIfs: [],
                                line_number: 2,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 168682084998577600,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '459843',
                                      pageJsonId: '537892',
                                      actionTitle: '',
                                      code: 'function main(data,state,success,fail){var attrList=[];if(e[0]!="2023-01-01"){e[0]="2023-01-01";e[1]="";fail()}data.factorForm.busyDeadlineBegin=e[0];data.factorForm.busyDeadlineEnd=e[1];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                    },
                                    line_number: 3,
                                    callback1: [
                                      {
                                        type: 'callParentCustomFunc',
                                        dataId: 168682084998568540,
                                        options: {
                                          compId: 'callParentCustomFunc',
                                          compName: 'system',
                                          id: '273919',
                                          pageJsonId: '537892',
                                          pathname: '/commonAuditOrder',
                                          pageId: '872682457815691264',
                                          customFuncName: 'getFactor',
                                          customFuncParams:
                                            '$data.sceneSubmit$',
                                          modalPath: '/commonAuditOrder',
                                        },
                                        line_number: 4,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                    callback2: [
                                      {
                                        type: 'showMessage',
                                        dataId: 168682084998547800,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '821657',
                                          pageJsonId: '537892',
                                          type: 'error',
                                          value: '业务期限应该开始于2023-01-01',
                                        },
                                        line_number: 5,
                                      },
                                      {
                                        type: 'setRangeValue',
                                        dataId: 168682084998577060,
                                        options: {
                                          compId: 'RangePicker_157477',
                                          compLib: 'comm',
                                          pageJsonId: '537892',
                                          compName: 'RangePicker',
                                          id: '25804454',
                                          startVal: '2023-01-01',
                                        },
                                        line_number: 6,
                                        callback1: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ];
                        eventDatagetValue234.params =
                          [
                            {
                              title: '时间段选择框取值',
                              name: 'e',
                              value: '$e$',
                            },
                          ] || [];
                        CMDGenerator(eventDatagetValue234, { e }, 'getValue', {
                          id: 'getValue',
                          name: 'getValue',
                          type: 'getValue',
                          platform: 'pc',
                        });
                      }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'RangePicker_157477')
                      }
                      {...injectData}
                    />
                  </View>
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
                      width: '100px',
                      flex: 1,
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_426957')}
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
                        const eventDataifelse522: any = [
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
                            dataId: 168682198981238370,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168682198981262880,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168682198981293380,
                                    children: [],
                                    todoOptions: ['disabled', 'selectComp'],
                                    options: {
                                      compId: 'RangePicker_157477',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'RangePicker',
                                      id: '406429',
                                      disabled: 'true',
                                    },
                                    actionObjId: 'RangePicker_157477',
                                    actionObjName: 'RangePicker',
                                    value: 'setDisable',
                                    compLib: 'comm',
                                    line_number: 6,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168682198981298300,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168682198981234560,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 168682198981264300,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 168682198981261950,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                              },
                                            ],
                                            todoOptions: ['startVal', 'endVal'],
                                            options: {
                                              compId: 'RangePicker_157477',
                                              compLib: 'comm',
                                              pageJsonId: '537892',
                                              compName: 'RangePicker',
                                              id: '4693285',
                                              startVal: '2023-01-01',
                                              endVal: '2043-01-01',
                                            },
                                            actionObjId: 'RangePicker_157477',
                                            actionObjName: 'RangePicker',
                                            value: 'setRangeValue',
                                            compLib: 'comm',
                                            line_number: 8,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168682198981294800,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: ['actionTitle', 'editorCode'],
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '627987',
                                      pageJsonId: '537892',
                                      actionTitle: '',
                                      code: 'function main(data,state,success,fail){var attrList=[];data.factorForm.busyDeadlineBegin="2023-01-01";data.factorForm.busyDeadlineEnd="2043-01-01";var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                    },
                                    actionObjId: 'customActionCode',
                                    actionObjName: 'page',
                                    value: 'customActionCode',
                                    line_number: 7,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168682198981283360,
                                    children: [],
                                    todoOptions: ['name', 'icon'],
                                    options: {
                                      compId: 'Button_791758',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Button',
                                      id: '6526905',
                                      name: '取消',
                                    },
                                    actionObjId: 'Button_791758',
                                    actionObjName: 'Button',
                                    value: 'changeContent',
                                    compLib: 'comm',
                                    line_number: 9,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168682198981205500,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168682198981267300,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168682198981202720,
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
                                      id: '987204',
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
                                    line_number: 10,
                                  },
                                ],
                                condition: [],
                                value: 'elseIf',
                                callback: [
                                  {
                                    type: 'setDisable',
                                    dataId: 168682198981293380,
                                    options: {
                                      compId: 'RangePicker_157477',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'RangePicker',
                                      id: '406429',
                                      disabled: 'true',
                                    },
                                    line_number: 6,
                                  },
                                  {
                                    type: 'customActionCode',
                                    dataId: 168682198981298300,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '627987',
                                      pageJsonId: '537892',
                                      actionTitle: '',
                                      code: 'function main(data,state,success,fail){var attrList=[];data.factorForm.busyDeadlineBegin="2023-01-01";data.factorForm.busyDeadlineEnd="2043-01-01";var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                    },
                                    line_number: 7,
                                    callback1: [
                                      {
                                        type: 'setRangeValue',
                                        dataId: 168682198981264300,
                                        options: {
                                          compId: 'RangePicker_157477',
                                          compLib: 'comm',
                                          pageJsonId: '537892',
                                          compName: 'RangePicker',
                                          id: '4693285',
                                          startVal: '2023-01-01',
                                          endVal: '2043-01-01',
                                        },
                                        line_number: 8,
                                        callback1: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                  {
                                    type: 'changeContent',
                                    dataId: 168682198981283360,
                                    options: {
                                      compId: 'Button_791758',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Button',
                                      id: '6526905',
                                      name: '取消',
                                    },
                                    line_number: 9,
                                  },
                                  {
                                    type: 'setDataSource',
                                    dataId: 168682198981205500,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '987204',
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
                                    line_number: 10,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 1,
                            callback1: [
                              {
                                type: 'setDisable',
                                dataId: 168682198981238720,
                                options: {
                                  compId: 'RangePicker_157477',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'RangePicker',
                                  id: '2017385',
                                  disabled: '',
                                },
                                line_number: 2,
                              },
                              {
                                type: 'changeContent',
                                dataId: 168682198981264640,
                                options: {
                                  compId: 'Button_791758',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Button',
                                  id: '0272635',
                                  name: '长期',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'setDataSource',
                                dataId: 168682198981294980,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '539524',
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
                              {
                                type: 'setRangeValue',
                                dataId: 168682203353994700,
                                options: {
                                  compId: 'RangePicker_157477',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'RangePicker',
                                  id: '616344',
                                  startVal: '2023-01-01',
                                },
                                line_number: 5,
                                callback1: [],
                              },
                            ],
                          },
                        ];
                        eventDataifelse522.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(eventDataifelse522, { e }, 'ifelse', {
                          id: 'ifelse',
                          name: 'ifelse',
                          type: 'ifelse',
                          platform: 'pc',
                        });
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Button_791758')}
                      {...injectData}
                    />
                  </View>
                </View>
              </View>
            </View>
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
              formItemIndex={9}
              fieldName={'serviceFee'}
              value={data?.factorForm?.serviceFee}
              $$componentItem={{
                id: 'Select_9391529',
                uid: 'Select_9391529',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse523: any = [
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
                              compId: ['Input_427622', 'Input_460679'],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '5597229',
                              disabled: '',
                              compid: ['Input_427622', 'Input_460679'],
                            },
                            actionObjId: 'Input_427622',
                            actionObjName: 'Input',
                            value: 'setDisable',
                            compLib: 'comm',
                            line_number: 4,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'setDisable',
                            dataId: 168673829779413660,
                            options: {
                              compId: ['Input_427622', 'Input_460679'],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '5597229',
                              disabled: '',
                              compid: ['Input_427622', 'Input_460679'],
                            },
                            line_number: 4,
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
                          compId: ['Input_427622', 'Input_460679'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '8042656',
                          disabled: 'true',
                          compid: ['Input_427622', 'Input_460679'],
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDataifelse523.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse523, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_9391529')}
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
              formItemIndex={10}
              fieldName={'serviceFeeReducedFee'}
              value={data?.factorForm?.serviceFeeReducedFee}
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
                id: 'Input_427622',
                uid: 'Input_427622',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_427622')}
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
              formItemIndex={11}
              fieldName={'serviceFeeTakeNum'}
              value={data?.factorForm?.serviceFeeTakeNum}
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
                id: 'Input_460679',
                uid: 'Input_460679',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_460679')}
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
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'probation'}
              value={data?.factorForm?.probation}
              formItemIndex={12}
              $$componentItem={{
                id: 'Input_255085',
                uid: 'Input_255085',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_255085')}
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
              formItemIndex={13}
              fieldName={'servicePayment'}
              value={data?.factorForm?.servicePayment}
              $$componentItem={{
                id: 'Select_287734',
                uid: 'Select_287734',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_287734')}
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
              formItemIndex={14}
              fieldName={'contractExpiredHandle'}
              value={data?.factorForm?.contractExpiredHandle}
              $$componentItem={{
                id: 'Select_339532',
                uid: 'Select_339532',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_339532')}
              {...injectData}
            />
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
              formItemIndex={15}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'TextArea_908595_147348')
              }
              {...injectData}
            />
          </Form>
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
            ref={(r: any) => refs.setComponentRef(r, 'Row_851124_14685846')}
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
                refs.setComponentRef(
                  r,
                  'Form_395851_1727917_661735_319855_152442_180382',
                )
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
                  refs.setComponentRef(
                    r,
                    'Input_690228_5400337_280164_0694544_38738_7545196',
                  )
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
                  refs.setComponentRef(
                    r,
                    'View_22346374_875512_9117364_899382_548798_637825',
                  )
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
                    const eventDatagetSelectedData393: any = [
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
                    eventDatagetSelectedData393.params =
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
                      eventDatagetSelectedData393,
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
                    const eventDatacustomActionCode724: any = [
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
                    eventDatacustomActionCode724.params =
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
                      eventDatacustomActionCode724,
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
                    refs.setComponentRef(
                      r,
                      'StdUpload_6230546_867413_762296_170428_730988_094988',
                    )
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
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093_7915488')}
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
              const eventDatacustomActionCode725: any = [
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
              eventDatacustomActionCode725.params =
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
                eventDatacustomActionCode725,
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
              const eventDatadownloadByFileId87: any = [
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
              eventDatadownloadByFileId87.params =
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
                eventDatadownloadByFileId87,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_5369494_494011')}
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_4149305_609402')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0011_0005$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
