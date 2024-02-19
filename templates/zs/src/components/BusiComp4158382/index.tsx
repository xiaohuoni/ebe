// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp4158382$$BusiComp: React.FC<PageProps> = ({
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
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    const eventDataapiRequest11: any = [
      {
        type: 'apiRequest',
        dataId: 166609225203746400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '195504',
          pageJsonId: '4158382',
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
              dataKey: '195504_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '195504_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '195504_query',
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
                  dataKey: '195504_body.catalogCode',
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
                  dataKey: '195504_body.attrCode',
                  value: { type: ['customize'], code: 'package' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '195504_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166616090990957900,
            options: {
              compId: 'Select_042379',
              compLib: 'comm',
              pageJsonId: '4158382',
              compName: 'Select',
              id: '814679',
              labelKey: 'attrValueName',
              data: '$reply_195504?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest11.params = [] || [];
    CMDGenerator(eventDataapiRequest11, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse10: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '999395',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166623448345329020,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'setDisable',
            dataId: 166623449862963200,
            options: {
              compId: 'Form_1965796',
              compLib: 'comm',
              pageJsonId: '4158382',
              compName: 'Form',
              id: '2567187',
              disabled: 'true',
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDataifelse10.params = [] || [];
    CMDGenerator(eventDataifelse10, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_4158382__"
    >
      <Form
        name={'表单'}
        colSpan={8}
        labelCol={'10'}
        wrapperCol={14}
        colon={true}
        layout={'horizontal'}
        labelAlign={'right'}
        visible={true}
        header={'标题'}
        colSpace={0}
        rowSpace={16}
        formCode={'Form_1965796'}
        $$componentItem={{
          id: 'Form_1965796',
          uid: 'Form_1965796',
          type: 'Form',
          ...componentItem,
        }}
        style={{ padding: '0px 0px 0px 0px' }}
        ref={(r: any) => (refs['Form_1965796'] = r)}
        {...injectData}
      >
        <Input
          name={'产品选择'}
          size={'default'}
          selfSpan={''}
          labelCol={'10'}
          wrapperCol={14}
          titleTip={'notext'}
          tipLocation={'after'}
          tipContent={''}
          tipPlacement={'top'}
          prefixIconPosition={'before'}
          postfix={''}
          postfixIconPosition={'before'}
          required={false}
          placeholder={'请输入'}
          formItemIndex={0}
          fieldName={'prod'}
          icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
          value={state?.item?.prod}
          prefixIcon={{
            type: undefined,
            theme: 'outlined',
            fontAddress: '',
            isIconFont: false,
            iconFileInfo: {},
          }}
          $$componentItem={{
            id: 'Input_387846',
            uid: 'Input_387846',
            type: 'Input',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          isFormRootChild={true}
          ref={(r: any) => (refs['Input_387846'] = r)}
          {...injectData}
        />
        <Select
          name={'资费套餐'}
          size={'default'}
          selfSpan={''}
          labelCol={'10'}
          wrapperCol={14}
          titleTip={'notext'}
          tipLocation={'after'}
          tipPlacement={'top'}
          required={false}
          filter={'none'}
          classification={'default'}
          placeholder={'请选择'}
          formItemIndex={1}
          fieldName={'package'}
          value={state?.item?.package}
          dataSource={{ selectedService: {} }}
          $$componentItem={{
            id: 'Select_042379',
            uid: 'Select_042379',
            type: 'Select',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          isFormRootChild={true}
          onChange={(e: any) => {
            const eventDatagetSelectedData7: any = [
              {
                type: 'getSelectedData',
                dataId: 166609258393445860,
                options: {
                  compId: 'Select_042379',
                  compLib: 'comm',
                  pageJsonId: '4158382',
                  compName: 'Select',
                  id: '232402',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 166609259795874530,
                    options: {
                      compId: 'Input_8013597',
                      compLib: 'comm',
                      pageJsonId: '4158382',
                      compName: 'Input',
                      id: '303799',
                      value: '$selectedData_232402[0].value$',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166609291951957860,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '531029',
                          pageJsonId: '4158382',
                          customFuncName: 'calculDiscount',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatagetSelectedData7.params =
              [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
            CMDGenerator(eventDatagetSelectedData7, { e }, 'getSelectedData', {
              id: 'getSelectedData',
              name: 'getSelectedData',
              type: 'getSelectedData',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Select_042379'] = r)}
          {...injectData}
        />
        <Input
          name={'一次折扣'}
          size={'default'}
          selfSpan={''}
          labelCol={'10'}
          wrapperCol={14}
          titleTip={'notext'}
          tipLocation={'after'}
          tipContent={''}
          tipPlacement={'top'}
          prefixIconPosition={'before'}
          postfix={''}
          postfixIconPosition={'before'}
          required={false}
          placeholder={'请输入'}
          formItemIndex={2}
          fieldName={'discount'}
          value={state?.item?.discount}
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
            id: 'Input_5707894',
            uid: 'Input_5707894',
            type: 'Input',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          isFormRootChild={true}
          onChange={(e: any) => {
            const eventDatacallSelfFunc1: any = [
              {
                type: 'callSelfFunc',
                dataId: 166609290717309980,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '6293284',
                  pageJsonId: '4158382',
                  customFuncName: 'calculDiscount',
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallSelfFunc1.params =
              [{ title: '输入框取值', name: 'e', value: '$e.target.value$' }] ||
              [];
            CMDGenerator(eventDatacallSelfFunc1, { e }, 'callSelfFunc', {
              id: 'callSelfFunc',
              name: 'callSelfFunc',
              type: 'callSelfFunc',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Input_5707894'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_7084194',
            uid: 'View_7084194',
            type: 'View',
            ...componentItem,
          }}
          isFormRootChild={true}
          schema={{
            compType: 0,
            props: { formItemIndex: 3, style: undefined, selfSpan: undefined },
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_7084194'] = r)}
          {...injectData}
        />
        <Input
          name={'标准价格（元）'}
          size={'default'}
          selfSpan={''}
          labelCol={'10'}
          wrapperCol={14}
          titleTip={'notext'}
          tipLocation={'after'}
          tipContent={''}
          tipPlacement={'top'}
          prefixIconPosition={'before'}
          postfix={''}
          postfixIconPosition={'before'}
          required={false}
          placeholder={'请输入'}
          formItemIndex={4}
          fieldName={'price'}
          value={state?.item?.price}
          disabled={false}
          visible={true}
          readOnly={false}
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
            id: 'Input_8013597',
            uid: 'Input_8013597',
            type: 'Input',
            ...componentItem,
          }}
          isFormRootChild={true}
          ref={(r: any) => (refs['Input_8013597'] = r)}
          {...injectData}
        />
        <Input
          name={'一次折扣后金额'}
          size={'default'}
          selfSpan={''}
          labelCol={'10'}
          wrapperCol={14}
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
          fieldName={'discountMoney'}
          value={state?.item?.discountMoney}
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
            id: 'Input_584501',
            uid: 'Input_584501',
            type: 'Input',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          isFormRootChild={true}
          ref={(r: any) => (refs['Input_584501'] = r)}
          {...injectData}
        />
        <Input
          name={'主键'}
          size={'default'}
          selfSpan={''}
          labelCol={'10'}
          wrapperCol={14}
          titleTip={'notext'}
          tipLocation={'after'}
          tipContent={''}
          tipPlacement={'top'}
          prefixIconPosition={'before'}
          postfix={''}
          postfixIconPosition={'before'}
          required={false}
          placeholder={'请输入'}
          formItemIndex={6}
          value={state?.item?.id}
          fieldName={'id'}
          disabled={false}
          visible={false}
          readOnly={false}
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
            id: 'Input_192829',
            uid: 'Input_192829',
            type: 'Input',
            ...componentItem,
          }}
          isFormRootChild={true}
          ref={(r: any) => (refs['Input_192829'] = r)}
          {...injectData}
        />
      </Form>
    </div>
  );
};

export default withPageHOC(BusiComp4158382$$BusiComp, {
  pageId: 'pageId 未找到',
  hasLogin: true,
  defaultState: { item: '', catalogCode: '', sceneCode: '' },
});
