// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ProductInfoPop$$Modal: React.FC<PageProps> = ({
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
  const countBenefitProp = (options_358607: any) => {
    const eventDatagetValue99: any = [
      {
        type: 'getValue',
        dataId: 167031070154737570,
        options: {
          compId: 'Input_7398385',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Input',
          id: '0652968',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 167031070576987520,
            options: {
              compId: 'Input_964197',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Input',
              id: '3863986',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167031071174494940,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '613458',
                  pageJsonId: 31,
                  code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n=="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result=integer+"."+decimal.substr(0,n);var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var cost=value_0652968;var income=value_3863986;if(cost>0&&income>0){var _result=income/cost;success(toFixed(_result.toLocaleString("fullwide",{useGrouping:false}),3))}else{success("")}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 167031102432383170,
                    options: {
                      compId: 'Input_3553582',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Input',
                      id: '409434',
                      valueList: { Input_3553582: '$data_613458$' },
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue99.params =
      [
        {
          title: '事件入参',
          name: 'options_358607',
          value: '$options_358607$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue99, { options_358607 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    countBenefitProp,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm59: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166313511962145500,
        options: {
          compId: 'Form_1554167',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '071209',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 166313577383784700,
            options: {
              compId: 'Select_487982',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '1148983',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 166313617280610020,
                shielding: true,
                options: {
                  compId: 'Select_9967047',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Select',
                  id: '110162',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166313617695003140,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '24911365',
                      pageJsonId: 31,
                      code: 'function main(data,state,success,fail){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.productId=selectedData_1148983[0].value;data.feeInfo.productName=selectedData_1148983[0].label;data.feeInfo.fee=selectedData_110162[0].value;data.feeInfo.feeName=selectedData_110162[0].label;data.feeInfo.cost=Form_1554167.cost;data.feeInfo.discount=Form_1554167.discount;data.feeInfo.income=Form_1554167.income;data.feeInfo.benefitProp=Form_1554167.benefitProp;data.feeInfo.rowId=rowId;success()};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 166313661411847780,
                        shielding: true,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '612757',
                          pageJsonId: 31,
                          params: '$data.feeInfo$',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 166313661805418720,
                        shielding: true,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '655474',
                          pageJsonId: 31,
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'getValue',
                dataId: 166971307319208000,
                options: {
                  compId: 'Input_2688293',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Input',
                  id: '076024',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166971307615916600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '4676127',
                      pageJsonId: 31,
                      code: 'function main(data,state,success,fail){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.productId=selectedData_1148983[0].value;data.feeInfo.productName=selectedData_1148983[0].label;data.feeInfo.fee=value_076024;data.feeInfo.feeName=value_076024;data.feeInfo.cost=Form_1554167.cost;data.feeInfo.discount=Form_1554167.discount;data.feeInfo.income=Form_1554167.income;data.feeInfo.benefitProp=Form_1554167.benefitProp;data.feeInfo.rowId=rowId;success()};',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 166971307615942000,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '365737',
                          pageJsonId: 31,
                          params: '$data.feeInfo$',
                        },
                        line_number: 9,
                      },
                      {
                        type: 'closeModal',
                        dataId: 166971307615941440,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '289373',
                          pageJsonId: 31,
                        },
                        line_number: 10,
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 166313582505494140,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '2498883',
              pageJsonId: 31,
              value: ['$Form_1554167$'],
            },
            line_number: 11,
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm59.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm59, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal78: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal78.params = [] || [];
    CMDGenerator(eventDatacloseModal78, {}, 'closeModal', {
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
    const eventDataapiRequest516: any = [
      {
        type: 'apiRequest',
        dataId: 166312614336792060,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '623514',
          pageJsonId: 31,
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
              dataKey: '623514_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '623514_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '623514_query',
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
                  dataKey: '623514_body.catalogCode',
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
                  dataKey: '623514_body.attrCode',
                  value: { type: ['customize'], code: 'productId' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '623514_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166312617750030240,
            options: {
              compId: 'Select_487982',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '774196',
              data: '$reply_623514?.resultData$',
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
    eventDataapiRequest516.params = [] || [];
    CMDGenerator(eventDataapiRequest516, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_31_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%', overflowY: 'hidden' }}
          ref={(r: any) => (refs['VerticalView_31_11'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
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
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['View_31_112'] = r)}
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
              formCode={'Form_1554167'}
              $$componentItem={{
                id: 'Form_1554167',
                uid: 'Form_1554167',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: 'px px px px', margin: '0px 0px 12px 0px' }}
              ref={(r: any) => (refs['Form_1554167'] = r)}
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
                formItemIndex={0}
                fieldName={'busiType'}
                $$componentItem={{
                  id: 'Select_487982',
                  uid: 'Select_487982',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetValue241: any = [
                    {
                      type: 'getValue',
                      dataId: 166313412936744000,
                      options: {
                        compId: 'Select_487982',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '297669',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166313413994221150,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '675417',
                            pageJsonId: 31,
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'qryCatalogAttrValueList',
                            _apiCode: 'qryCatalogAttrValueList',
                            _source: 'rhin',
                            _serviceId: '889391610000404480',
                            _serviceTitle:
                              '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                                dataKey: '675417_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '675417_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '675417_query',
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
                                    dataKey: '675417_body.catalogCode',
                                    value: {
                                      type: ['customize'],
                                      code: '$state.catalogCode$',
                                    },
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
                                    dataKey: '675417_body.attrCode',
                                    value: { type: ['customize'], code: 'fee' },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '675417_body',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166313465551892900,
                              options: {
                                compId: 'Select_9967047',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '540396',
                                data: '$reply_675417?.resultData$',
                                labelKey: 'attrValueName',
                                valueKey: 'attrValue',
                              },
                              line_number: 3,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue241.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDatagetValue241, { e }, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Select_487982'] = r)}
                {...injectData}
              />
              <Input
                name={'资费套餐'}
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
                formItemIndex={1}
                fieldName={'fee'}
                regexp={[
                  {
                    id: '0412087',
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
                  id: 'Input_2688293',
                  uid: 'Input_2688293',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_2688293'] = r)}
                {...injectData}
              />
              <Input
                name={'成本'}
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
                formItemIndex={2}
                fieldName={'cost'}
                regexp={[
                  {
                    id: '677198',
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
                  id: 'Input_7398385',
                  uid: 'Input_7398385',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc660: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167031106625869900,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '552779',
                        pageJsonId: 31,
                        customFuncName: 'countBenefitProp',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc660.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc660,
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
                ref={(r: any) => (refs['Input_7398385'] = r)}
                {...injectData}
              />
              <Input
                name={'折扣'}
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
                formItemIndex={3}
                fieldName={'discount'}
                regexp={[
                  {
                    id: '53522',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入大于0小于10且最多2位小数的数',
                    pattern:
                      '/^([1-9](\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                  id: 'Input_117317',
                  uid: 'Input_117317',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_117317'] = r)}
                {...injectData}
              />
              <Input
                name={'收入'}
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
                formItemIndex={4}
                fieldName={'income'}
                regexp={[
                  {
                    id: '233614',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入正数最多2位小数',
                    pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                  id: 'Input_964197',
                  uid: 'Input_964197',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc661: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167031104641018270,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '356483',
                        pageJsonId: 31,
                        customFuncName: 'countBenefitProp',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc661.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc661,
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
                ref={(r: any) => (refs['Input_964197'] = r)}
                {...injectData}
              />
              <Input
                name={'收益比'}
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
                formItemIndex={5}
                fieldName={'benefitProp'}
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
                  id: 'Input_3553582',
                  uid: 'Input_3553582',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_3553582'] = r)}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ProductInfoPop$$Modal, {
  pageId: '887178055489683456',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', phone: '', catalogCode: '' },
});
