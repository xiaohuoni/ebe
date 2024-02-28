// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input, DatePicker } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '942326976701939712';
const Biaozhunhuayicixingdaeshenqingtanchuang5063$$Modal: React.FC<
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
  parentEngineId = pageId,
}) => {
  const onOk = () => {
    const eventDatavalidateCurrentForm56: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167627788229039780,
        options: {
          compId: 'Form_190088',
          compLib: 'comm',
          pageJsonId: '295317',
          compName: 'Form',
          id: '054312',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 167627792326637060,
            options: {
              compId: 'Select_092941',
              compLib: 'comm',
              pageJsonId: '295317',
              compName: 'Select',
              id: '407936',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167627792751425200,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '877826',
                  pageJsonId: '295317',
                  code: 'function main(data,state,success,fail){var _state$rowData;console.log("\\u4E0B\\u62C9\\u6846\\u9009\\u4E2D\\u6570\\u636E\\uFF1A",selectedData_407936[0]);console.log("state.rowData",state.rowData);var formData=Form_190088;if(Number(formData.agreementTotalAmount)<Number(formData.secondDiscountAmount)){fail("\\u534F\\u8BAE\\u603B\\u91D1\\u989D\\u9700\\u8981\\u5927\\u4E8E\\u7B49\\u4E8E\\u4E8C\\u6B21\\u4F18\\u60E0\\uFF0C\\u8BF7\\u91CD\\u65B0\\u7F16\\u8F91");return}if((_state$rowData=state.rowData)!==null&&_state$rowData!==void 0&&_state$rowData.key){var _prodItem=state.rowData;_prodItem.prodId=selectedData_407936[0].value;_prodItem.prodName=selectedData_407936[0].label;_prodItem.agreementTotalAmount=formData.agreementTotalAmount;_prodItem.secondDiscountAmount=formData.secondDiscountAmount;_prodItem.settlementAmount=formData.settlementAmount;_prodItem.otherCost=formData.otherCost;_prodItem.estimateOutBillDate=formData.estimateOutBillDate;console.log("\\u4FEE\\u6539\\u4EA7\\u54C1-prodItem\\uFF1A",_prodItem);success(_prodItem)}else{var prodItem={key:selectedData_407936[0].value+new Date().getTime(),prodId:selectedData_407936[0].value,prodName:selectedData_407936[0].label};prodItem.agreementTotalAmount=formData.agreementTotalAmount;prodItem.secondDiscountAmount=formData.secondDiscountAmount;prodItem.settlementAmount=formData.settlementAmount;prodItem.otherCost=formData.otherCost;prodItem.estimateOutBillDate=formData.estimateOutBillDate;console.log("\\u65B0\\u589E\\u4EA7\\u54C1-prodItem\\uFF1A",prodItem);success(prodItem)}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 167627874953816580,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '2138664',
                      pageJsonId: '295317',
                      params: '$data_877826$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 167628018160286140,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '4094305',
                      pageJsonId: '295317',
                    },
                    line_number: 5,
                  },
                ],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 168561239747230370,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '226155',
                      pageJsonId: '295317',
                      type: 'error',
                      value: '$fail_877826$',
                    },
                    line_number: 6,
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
    eventDatavalidateCurrentForm56.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm56, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal72: any = [
      {
        type: 'closeModal',
        dataId: '9387547_1',
        options: { compId: 'page', compName: 'page', id: '206118' },
        line_number: 1,
      },
    ];
    eventDatacloseModal72.params = [] || [];
    CMDGenerator(eventDatacloseModal72, {}, 'closeModal', {
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
    // console 167627603026882780
    console.log('产品实例信息弹窗', state?.prodList);
    const eventDatareloadSelectData16: any = [
      {
        type: 'reloadSelectData',
        dataId: 167627595648186800,
        shielding: true,
        options: {
          compId: 'Select_092941',
          compLib: 'comm',
          pageJsonId: '295317',
          compName: 'Select',
          id: '61668',
          data: '$state.prodList$',
          labelKey: 'attrValueName',
          valueKey: 'attrValue',
        },
        line_number: 2,
        callback1: [],
      },
    ];
    eventDatareloadSelectData16.params = [] || [];
    CMDGenerator(eventDatareloadSelectData16, {}, 'reloadSelectData', {
      id: 'reloadSelectData',
      name: 'reloadSelectData',
      type: 'reloadSelectData',
      platform: 'undefined',
    });
    const eventDataapiRequest478: any = [
      {
        type: 'apiRequest',
        dataId: 167939131367350660,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4116035',
          pageJsonId: '295317',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'criterionProductQry',
          _apiCode: 'criterionProductQry',
          _source: 'rhin',
          _serviceId: '955395622937067520',
          _serviceTitle:
            '标准化产品一次性大额出账产品列表-hdb: criterionProductQry',
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
              dataKey: '4116035_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4116035_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4116035_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'productName',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.productName',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.productName',
                  dataKey: '4116035_body.productName',
                },
                {
                  code: 'orderNbr',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.orderNbr',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.orderNbr',
                  dataKey: '4116035_body.orderNbr',
                  value: { type: ['context', '$state.orderNbr$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4116035_body',
            },
          ],
          _sourceName: '标准化产品一次性大额出账产品列表-hdb',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167939134764108580,
            options: {
              compId: 'Select_092941',
              compLib: 'comm',
              pageJsonId: '295317',
              compName: 'Select',
              id: '0678954',
              data: '$reply_4116035.resultData$',
              valueKey: 'productCode',
              labelKey: 'productName',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest478.params = [] || [];
    CMDGenerator(eventDataapiRequest478, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse249: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '562659',
            options: { context: '$state.rowData$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167628055278134560,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 167628059876659170,
            options: {
              compId: 'Form_190088',
              compLib: 'comm',
              pageJsonId: '295317',
              compName: 'Form',
              id: '029264',
              params: '$state.rowData$',
            },
            line_number: 6,
          },
        ],
      },
    ];
    eventDataifelse249.params = [] || [];
    CMDGenerator(eventDataifelse249, {}, 'ifelse', {
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
      className="__CustomClass_295317__"
    >
      <View
        className="View_View_295317_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_295317_1',
          uid: 'View_295317_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_295317_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={12}
          labelCol={'8'}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_190088'}
          $$componentItem={{
            id: 'Form_190088',
            uid: 'Form_190088',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_190088')}
          {...injectData}
        >
          <Select
            name={'产品'}
            size={'default'}
            selfSpan={''}
            labelCol={'8'}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            filter={'remote'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={0}
            fieldName={'prodId'}
            $$componentItem={{
              id: 'Select_092941',
              uid: 'Select_092941',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            filterOption={(e: any) => {
              const eventDataapiRequest785: any = [
                {
                  type: 'apiRequest',
                  dataId: 167939141893827840,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '669458',
                    pageJsonId: '295317',
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'criterionProductQry',
                    _apiCode: 'criterionProductQry',
                    _source: 'rhin',
                    _serviceId: '955395622937067520',
                    _serviceTitle:
                      '标准化产品一次性大额出账产品列表-hdb: criterionProductQry',
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
                        dataKey: '669458_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '669458_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '669458_query',
                      },
                      {
                        code: 'body',
                        name: '请求体',
                        attrType: 'object',
                        children: [
                          {
                            code: 'productName',
                            name: '新增节点',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            defaultValue: '',
                            _id: 'body.productName',
                            compType: 'Input',
                            parents: ['body'],
                            id: 'body.productName',
                            dataKey: '669458_body.productName',
                            value: { type: ['customize'], code: '$e$' },
                          },
                          {
                            code: 'orderNbr',
                            name: '新增节点',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            defaultValue: '',
                            _id: 'body.orderNbr',
                            compType: 'Input',
                            parents: ['body'],
                            id: 'body.orderNbr',
                            dataKey: '669458_body.orderNbr',
                            value: {
                              type: ['context', '$state.orderNbr$'],
                              code: '',
                            },
                          },
                        ],
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '669458_body',
                      },
                    ],
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'reloadSelectData',
                      dataId: 167939145071422270,
                      options: {
                        compId: 'Select_092941',
                        compLib: 'comm',
                        pageJsonId: '295317',
                        compName: 'Select',
                        id: '895463',
                        data: '$reply_669458.resultData$',
                        valueKey: 'productCode',
                        labelKey: 'productName',
                      },
                      line_number: 2,
                      callback1: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest785.params =
                [{ title: '下拉框过滤条件', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDataapiRequest785, { e }, 'apiRequest', {
                id: 'apiRequest',
                name: 'apiRequest',
                type: 'apiRequest',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Select_092941')}
            {...injectData}
          />
          <Input
            name={'协议总金额'}
            size={'default'}
            selfSpan={''}
            labelCol={'8'}
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
            formItemIndex={1}
            regexp={[
              {
                id: '6325315',
                title: '按钮1',
                iconPos: 'left',
                regexpType: 2,
                message: '请输入正数最多2位小数',
                pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
              },
            ]}
            fieldName={'agreementTotalAmount'}
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
              id: 'Input_844227',
              uid: 'Input_844227',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_844227')}
            {...injectData}
          />
          <Input
            name={'二次优惠'}
            size={'default'}
            selfSpan={''}
            labelCol={'8'}
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
            fieldName={'secondDiscountAmount'}
            regexp={[
              {
                id: '5180864',
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
              id: 'Input_5572083',
              uid: 'Input_5572083',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_5572083')}
            {...injectData}
          />
          <Input
            name={'结算金额'}
            size={'default'}
            selfSpan={''}
            labelCol={'8'}
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
            formItemIndex={3}
            fieldName={'settlementAmount'}
            regexp={[
              {
                id: '447817',
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
              id: 'Input_596891',
              uid: 'Input_596891',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_596891')}
            {...injectData}
          />
          <Input
            name={'其它成本'}
            size={'default'}
            selfSpan={''}
            labelCol={'8'}
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
            fieldName={'otherCost'}
            regexp={[
              {
                id: '9658888',
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
              id: 'Input_60608868',
              uid: 'Input_60608868',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_60608868')}
            {...injectData}
          />
          <DatePicker
            name={'预计出账日期'}
            timeMode={'date'}
            format={'YYYY-MM-DD'}
            size={'default'}
            selfSpan={''}
            labelCol={'8'}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            formItemIndex={5}
            fieldName={'estimateOutBillDate'}
            $$componentItem={{
              id: 'DatePicker_52349514',
              uid: 'DatePicker_52349514',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            defaultValue={undefined}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'DatePicker_52349514')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Biaozhunhuayicixingdaeshenqingtanchuang5063$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    prodList: '',
    rowData: '',
    orderNbr: '',
  },
});
