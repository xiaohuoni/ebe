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
  TextArea,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1014041888992493568';
const ClsCp_0002_0022$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1783384: any) => {
    const eventDatacustomActionCode154: any = [
      {
        type: 'customActionCode',
        dataId: 169338732385885100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9111964',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_46757335;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 169338732385849630,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '964249',
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
    eventDatacustomActionCode154.params =
      [
        {
          title: '事件入参',
          name: 'options_1783384',
          value: '$options_1783384$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode154,
      { options_1783384 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
  }));

  useEffect(() => {
    const eventDataifelse232: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '989006',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169337308710677600,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169337308710641000,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9632803',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){if(itemList.attrList[i].attrCode=="preInvoiceAmount"&&itemList.attrList[i].attrValue!=null&&itemList.attrList[i].attrValue!=""){itemList.attrList[i].attrValue=parseFloat(itemList.attrList[i].attrValue)/100}if(itemList.attrList[i].attrCode=="customerType"&&itemList.attrList[i].attrValue!=null&&itemList.attrList[i].attrValue!=""){itemList.attrList[i].attrValue="\\u96C6\\u56E2\\u5BA2\\u6237"}form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}data.dataform=form;success(form)};',
              actionTitle: '表单加载',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 169337308710667500,
                options: {
                  compId: ['Input_195994'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '7679584',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_195994: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_195994'],
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 169337316153027780,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '081753',
                  pageJsonId: '831017',
                  dataSourceId: 169337306051553440,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'customerType',
                      name: '客户类型',
                      type: 'string',
                      attrId: '4145377',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'customerCode',
                      name: '客户编码',
                      type: 'string',
                      attrId: '329524',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'accountCode',
                      name: '账户编码',
                      type: 'string',
                      attrId: '3964065',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'preInvoiceAmount',
                      name: '预开发票额度',
                      type: 'string',
                      attrId: '529515',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      attrId: '71446273',
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
                line_number: 4,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse232.params = [] || [];
    CMDGenerator(eventDataifelse232, {}, 'ifelse', {
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
      className="__CustomClass_831017__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_831017_1',
          uid: 'View_831017_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_831017_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_3432586',
            uid: 'View_3432586',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_3432586')}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'预开预存发票额度申请'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_379535',
              uid: 'Divider_379535',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_379535')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_223878',
              uid: 'View_223878',
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
              overflowY: 'hidden',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_223878')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_7450078',
                uid: 'HorizontalView_7450078',
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
                height: 'auto',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'HorizontalView_7450078')
              }
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_454299',
                  uid: 'View_454299',
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
                  height: 'auto',
                  overflowY: 'hidden',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_454299')}
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
                    id: 'Form_129741',
                    uid: 'Form_129741',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_129741')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'预开预存发票额度申请'}
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
                      id: 'Checkbox_594285',
                      uid: 'Checkbox_594285',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Checkbox_594285')}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_021995',
                      uid: 'View_021995',
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
                      textAlign: 'left',
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_021995')}
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
                      id: 'Input_195994',
                      uid: 'Input_195994',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_195994')}
                    {...injectData}
                  />
                </Form>
              </View>
            </HorizontalView>
          </View>
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
              id: 'Form_915521',
              uid: 'Form_915521',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_915521')}
            {...injectData}
          >
            <Input
              name={'客户类型'}
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
              formItemIndex={0}
              fieldName={'customerType'}
              value={data?.dataform?.customerType}
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
                id: 'Input_7381878',
                uid: 'Input_7381878',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7381878')}
              {...injectData}
            />
            <Input
              name={'客户编码'}
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
              formItemIndex={1}
              fieldName={'customerCode'}
              value={data?.dataform?.customerCode}
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
                id: 'Input_4819757',
                uid: 'Input_4819757',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_4819757')}
              {...injectData}
            />
            <Input
              name={'账户编码'}
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
              fieldName={'accountCode'}
              value={data?.dataform?.accountCode}
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
                id: 'Input_616936',
                uid: 'Input_616936',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_616936')}
              {...injectData}
            />
            <Input
              name={'预开发票额度(元)'}
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
              fieldName={'preInvoiceAmount'}
              value={data?.dataform?.preInvoiceAmount}
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
                id: 'Input_051907',
                uid: 'Input_051907',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_051907')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'reason'}
              value={data?.dataform?.reason}
              formItemIndex={4}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={'目前已合作XX业务等，因xx原因需申请集团拆分建档。'}
              $$componentItem={{
                id: 'TextArea_4348892',
                uid: 'TextArea_4348892',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_4348892')}
              {...injectData}
            />
          </Form>
          <BusiComp0521965
            busiCompId={'922396081753948160'}
            name={'附件'}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_10902')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0022$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
