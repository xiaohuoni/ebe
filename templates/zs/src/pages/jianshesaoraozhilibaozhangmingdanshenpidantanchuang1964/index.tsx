// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { DatePicker, Form, Input, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Jianshesaoraozhilibaozhangmingdanshenpidantanchuang1964$$Modal: React.FC<
  PageProps
> = ({
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
  const onOk = () => {
    const eventDatavalidateCurrentForm51: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169684696235270140,
        options: {
          compId: 'Form_4688755',
          compLib: 'comm',
          pageJsonId: '3531993',
          compName: 'Form',
          id: '470482',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169684697791866340,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '279902',
              pageJsonId: '3531993',
              code: 'function main(data,state,success,fail){var expiredTime=Form_4688755.expiredTime;data.governList["expiredTime"]=expiredTime;success(data.governList)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 169684706537323550,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '24642404',
                  pageJsonId: '3531993',
                  params: '$data_279902$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 169690110311878660,
                options: { compId: 'page', compName: 'page', id: '979094' },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm51.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm51, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal58: any = [
      {
        type: 'closeModal',
        dataId: '755706_1',
        options: { compId: 'page', compName: 'page', id: '763702' },
        line_number: 1,
      },
    ];
    eventDatacloseModal58.params = [] || [];
    CMDGenerator(eventDatacloseModal58, {}, 'closeModal', {
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
    const eventDatacustomActionCode265: any = [
      {
        type: 'customActionCode',
        dataId: 169684724317991970,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '916056',
          pageJsonId: '3531993',
          code: 'function main(data,state,success,fail){data.governList=state.governInfo;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169684725912761380,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '895637',
              pageJsonId: '3531993',
              dataSourceId: 169684653203181250,
              dataSourceName: 'governList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '285151',
                  code: 'city',
                  name: '地市',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '8031115',
                  code: 'area',
                  name: '区县',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '1266423',
                  code: 'msisdn',
                  name: '号码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '8746678',
                  code: 'groupId',
                  name: '集团编号',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '3650594',
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '746123',
                  code: 'tradeclassTop',
                  name: '行业类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '215997',
                  code: 'customerType',
                  name: '客户类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '613671',
                  code: 'recommendEnsuredType',
                  name: '建议保障类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '659825',
                  code: 'expiredTime',
                  name: '到期时间',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '8531576',
                  code: 'cityName',
                  name: '地市名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '5670035',
                  code: 'areaName',
                  name: '区县名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '254537',
                  code: 'tradeclassTopName',
                  name: '行业类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '456323',
                  code: 'customerTypeName',
                  name: '客户类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '6858923',
                  code: 'recommendEnsuredTypeName',
                  name: '建议保障类型名称',
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
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode265.params = [] || [];
    CMDGenerator(eventDatacustomActionCode265, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode266: any = [
      {
        type: 'customActionCode',
        dataId: 169690483321029570,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '455282',
          pageJsonId: '339053',
          actionTitle: '设置最大到期时间（三个月）',
          code: 'function main(data,state,success,fail){var currentDate=new Date;currentDate.setMonth(currentDate.getMonth()+3);var year=currentDate.getFullYear();var month=currentDate.getMonth()+1;var day=currentDate.getDate();month=month<10?"0"+month:month;day=day<10?"0"+day:day;var formattedDate=year+"-"+month+"-"+day;console.log("\\u683C\\u5F0F\\u5316\\u540E\\u7684\\u65F6\\u95F4 = ",formattedDate);success(formattedDate)};',
        },
        line_number: 3,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169690483321025060,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '424367',
              pageJsonId: '339053',
              dataSourceId: 169690485032018800,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '774225',
                  code: 'maxDate',
                  name: '最大时间',
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
        callback2: [],
      },
    ];
    eventDatacustomActionCode266.params = [] || [];
    CMDGenerator(eventDatacustomActionCode266, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_3531993__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_3531993_1',
          uid: 'View_3531993_1',
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
        ref={(r: any) => (refs['View_3531993_1'] = r)}
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
          formCode={'Form_4688755'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.governList}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_4688755',
            uid: 'Form_4688755',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource186: any = [
              {
                type: 'setDataSource',
                dataId: 169684677445194900,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '373709',
                  pageJsonId: '3531993',
                  dataSourceId: 169684653203181250,
                  dataSourceName: 'governList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '285151',
                      code: 'city',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'city',
                      },
                    },
                    {
                      attrId: '8031115',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'area',
                      },
                    },
                    {
                      attrId: '1266423',
                      code: 'msisdn',
                      name: '号码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'msisdn',
                      },
                    },
                    {
                      attrId: '8746678',
                      code: 'groupId',
                      name: '集团编号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'groupId',
                      },
                    },
                    {
                      attrId: '3650594',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'groupName',
                      },
                    },
                    {
                      attrId: '746123',
                      code: 'tradeclassTop',
                      name: '行业类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'tradeclassTop',
                      },
                    },
                    {
                      attrId: '215997',
                      code: 'customerType',
                      name: '客户类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'customerType',
                      },
                    },
                    {
                      attrId: '613671',
                      code: 'recommendEnsuredType',
                      name: '建议保障类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'recommendEnsuredType',
                      },
                    },
                    {
                      attrId: '659825',
                      code: 'expiredTime',
                      name: '到期时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_4688755', 'getFieldsValue'],
                        code: 'expiredTime',
                      },
                    },
                    {
                      attrId: '8531576',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '5670035',
                      code: 'areaName',
                      name: '区县名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '254537',
                      code: 'tradeclassTopName',
                      name: '行业类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '456323',
                      code: 'customerTypeName',
                      name: '客户类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '6858923',
                      code: 'recommendEnsuredTypeName',
                      name: '建议保障类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource186.params =
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
              eventDatasetDataSource186,
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
          ref={(r: any) => (refs['Form_4688755'] = r)}
          {...injectData}
        >
          <Input
            name={'地市'}
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
            fieldName={'cityName'}
            value={data?.governList?.cityName}
            formItemIndex={0}
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
              id: 'Input_city_0947392',
              uid: 'Input_city_0947392',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_city_0947392'] = r)}
            {...injectData}
          />
          <Input
            name={'区县'}
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
            fieldName={'areaName'}
            value={data?.governList?.areaName}
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
              id: 'Input_area_708369',
              uid: 'Input_area_708369',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_area_708369'] = r)}
            {...injectData}
          />
          <Input
            name={'号码'}
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
            fieldName={'msisdn'}
            value={data?.governList?.msisdn}
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
              id: 'Input_msisdn_563737',
              uid: 'Input_msisdn_563737',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_msisdn_563737'] = r)}
            {...injectData}
          />
          <Input
            name={'集团编号'}
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
            fieldName={'groupId'}
            value={data?.governList?.groupId}
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
              id: 'Input_groupId_617653',
              uid: 'Input_groupId_617653',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_groupId_617653'] = r)}
            {...injectData}
          />
          <Input
            name={'集团名称'}
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
            fieldName={'groupName'}
            value={data?.governList?.groupName}
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
              id: 'Input_groupName_756192',
              uid: 'Input_groupName_756192',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_groupName_756192'] = r)}
            {...injectData}
          />
          <Input
            name={'行业类型'}
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
            fieldName={'tradeclassTopName'}
            value={data?.governList?.tradeclassTopName}
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
              id: 'Input_tradeclassTop_8316912',
              uid: 'Input_tradeclassTop_8316912',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_tradeclassTop_8316912'] = r)}
            {...injectData}
          />
          <Input
            name={'客户类型'}
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
            fieldName={'customerTypeName'}
            value={data?.governList?.customerTypeName}
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
              id: 'Input_customerType_592422',
              uid: 'Input_customerType_592422',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_customerType_592422'] = r)}
            {...injectData}
          />
          <Input
            name={'建议保障类型'}
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
            fieldName={'recommendEnsuredTypeName'}
            value={data?.governList?.recommendEnsuredTypeName}
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
              id: 'Input_recommendEnsuredType_1776988',
              uid: 'Input_recommendEnsuredType_1776988',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_recommendEnsuredType_1776988'] = r)}
            {...injectData}
          />
          <DatePicker
            name={'到期时间'}
            timeMode={'date'}
            format={'YYYY-MM-DD'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            limitRange={'period'}
            endTime={''}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            fieldName={'expiredTime'}
            formItemIndex={8}
            allowClear={false}
            customExpression={''}
            $$componentItem={{
              id: 'Input_expiredTime_348851',
              uid: 'Input_expiredTime_348851',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            defaultValue={undefined}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_expiredTime_348851'] = r)}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(
  Jianshesaoraozhilibaozhangmingdanshenpidantanchuang1964$$Modal,
  {
    pageId: '1028611675218784256',
    hasLogin: false,
    dataSource,
    defaultState: { bizId: '', sceneCode: '', bizData: '', governInfo: '' },
  },
);
