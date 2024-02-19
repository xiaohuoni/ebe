// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsJc_0013_0001$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_56073068: any) => {
    const eventDatacustomActionCode142: any = [
      {
        type: 'customActionCode',
        dataId: 169596479422124800,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '1443251',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_46757335;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 169596479422193570,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '178766',
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
    eventDatacustomActionCode142.params =
      [
        {
          title: '事件入参',
          name: 'options_56073068',
          value: '$options_56073068$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode142,
      { options_56073068 },
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
    const eventDataifelse221: any = [
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
        dataId: 169596482029239040,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169596482029262600,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9819886',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){if(itemList.attrList[i].attrValue!=null&&itemList.attrList[i].attrValue!=""&&(itemList.attrList[i].attrCode=="printType"||itemList.attrList[i].attrCode=="invoiceType"||itemList.attrList[i].attrCode=="invoiceScene"||itemList.attrList[i].attrCode=="remarkChang")){itemList.attrList[i].attrValue=itemList.attrList[i].attrValueDesc}form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}data.dataform=form;success(form)};',
              actionTitle: '表单加载',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 169596482029297300,
                options: {
                  compId: ['Input_757331'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '792376',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_757331: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_757331'],
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 169596482029244200,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '381391',
                  pageJsonId: '831017',
                  dataSourceId: 169596389375096960,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'printType',
                      name: '发票开具类型',
                      type: 'string',
                      attrId: '892181',
                      initialData: { type: 'static', value: '发票开具类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['printType'],
                      _idpath: ['892181'],
                    },
                    {
                      code: 'invoiceType',
                      name: '发票类型',
                      type: 'string',
                      attrId: '59212',
                      initialData: { type: 'static', value: '发票类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['invoiceType'],
                      _idpath: ['59212'],
                    },
                    {
                      code: 'invoiceScene',
                      name: '发票申请场景',
                      type: 'string',
                      attrId: '337936',
                      initialData: { type: 'static', value: '发票申请场景' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['invoiceScene'],
                      _idpath: ['337936'],
                    },
                    {
                      code: 'invoiceApplyTime',
                      name: '冲红申请开具时间',
                      type: 'string',
                      attrId: '2165256',
                      initialData: {
                        type: 'static',
                        value: '冲红申请开具时间',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['invoiceApplyTime'],
                      _idpath: ['2165256'],
                    },
                    {
                      code: 'operatorName',
                      name: '发票开具申请人',
                      type: 'string',
                      attrId: '092351',
                      initialData: { type: 'static', value: '发票开具申请人' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['operatorName'],
                      _idpath: ['092351'],
                    },
                    {
                      code: 'remarkChang',
                      name: '发票备注信息是否修改',
                      type: 'string',
                      attrId: '188173',
                      initialData: {
                        type: 'static',
                        value: '发票备注信息是否修改',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['remarkChang'],
                      _idpath: ['188173'],
                    },
                    {
                      code: 'instructionMatters',
                      name: '审批事项说明',
                      type: 'string',
                      attrId: '508886',
                      initialData: { type: 'static', value: '审批事项说明' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['instructionMatters'],
                      _idpath: ['508886'],
                    },
                    {
                      code: 'taxAmount',
                      name: '含税金额',
                      type: 'string',
                      attrId: '235876',
                      initialData: { type: 'static', value: '含税金额' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['taxAmount'],
                      _idpath: ['235876'],
                    },
                    {
                      code: 'otherSceneElements',
                      name: '其他场景要素',
                      type: 'string',
                      attrId: '705148',
                      initialData: { type: 'static', value: '其他场景要素' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['otherSceneElements'],
                      _idpath: ['705148'],
                    },
                    {
                      code: 'costType',
                      name: '费用类型',
                      type: 'string',
                      attrId: '596116',
                      initialData: { type: 'static', value: '费用类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['costType'],
                      _idpath: ['596116'],
                    },
                    {
                      code: 'reasonDesc',
                      name: '冲红原因类型',
                      type: 'string',
                      attrId: '1748553',
                      initialData: { type: 'static', value: '冲红原因类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['reasonDesc'],
                      _idpath: ['1748553'],
                    },
                    {
                      code: 'reason',
                      name: '冲红原因',
                      type: 'string',
                      attrId: '370175',
                      initialData: { type: 'static', value: '冲红原因' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['370175'],
                    },
                    {
                      attrId: '772323',
                      code: 'buyerSocialCode',
                      name: '购买方统一社会信用代码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['buyerSocialCode'],
                      _idpath: ['772323'],
                    },
                    {
                      attrId: '790053',
                      code: 'buyerName',
                      name: '购买方名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['buyerName'],
                      _idpath: ['790053'],
                    },
                    {
                      attrId: '869186',
                      code: 'salesSocialCode',
                      name: '销售方统一社会信用代码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['salesSocialCode'],
                      _idpath: ['869186'],
                    },
                    {
                      attrId: '914084',
                      code: 'salesName',
                      name: '销售方名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['salesName'],
                      _idpath: ['914084'],
                    },
                    {
                      attrId: '9461324',
                      code: 'invoiceRemark',
                      name: '发票备注',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['invoiceRemark'],
                      _idpath: ['9461324'],
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
    eventDataifelse221.params = [] || [];
    CMDGenerator(eventDataifelse221, {}, 'ifelse', {
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
      className="__CustomClass_533858__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_533858_1',
          uid: 'View_533858_1',
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
        ref={(r: any) => (refs['View_533858_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_782102',
            uid: 'View_782102',
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
          ref={(r: any) => (refs['View_782102'] = r)}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'账单类发票'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_525238',
              uid: 'Divider_525238',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => (refs['Divider_525238'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_078916',
              uid: 'View_078916',
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
            ref={(r: any) => (refs['View_078916'] = r)}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_049858',
                uid: 'HorizontalView_049858',
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
              ref={(r: any) => (refs['HorizontalView_049858'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_138784',
                  uid: 'View_138784',
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
                ref={(r: any) => (refs['View_138784'] = r)}
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
                    id: 'Form_47794',
                    uid: 'Form_47794',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_47794'] = r)}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'政企业务开具账单类发票'}
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
                      id: 'Checkbox_0631816',
                      uid: 'Checkbox_0631816',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Checkbox_0631816'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_804901',
                      uid: 'View_804901',
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
                    ref={(r: any) => (refs['View_804901'] = r)}
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
                      id: 'Input_757331',
                      uid: 'Input_757331',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_757331'] = r)}
                    {...injectData}
                  />
                </Form>
              </View>
            </HorizontalView>
          </View>
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
            formCode={'Form_1354964'}
            fieldName={'$dataform'}
            relationDataSource={data?.$dataform}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_2821044',
              uid: 'Form_2821044',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_2821044'] = r)}
            {...injectData}
          >
            <Input
              name={'发票开具类型'}
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
              formItemIndex={0}
              fieldName={'printType'}
              value={data?.dataform?.printType}
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
                id: 'Input_183938',
                uid: 'Input_183938',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_183938'] = r)}
              {...injectData}
            />
            <Input
              name={'发票类型'}
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
              formItemIndex={1}
              fieldName={'invoiceType'}
              value={data?.dataform?.invoiceType}
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
                id: 'Input_370364',
                uid: 'Input_370364',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_370364'] = r)}
              {...injectData}
            />
            <Input
              name={'发票申请开具时间'}
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
              fieldName={'invoiceScene'}
              value={data?.dataform?.invoiceApplyTime}
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
                id: 'Input_49669',
                uid: 'Input_49669',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_49669'] = r)}
              {...injectData}
            />
            <Input
              name={'发票申请场景'}
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
              fieldName={'invoiceApplyTime'}
              value={data?.dataform?.invoiceScene}
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
                id: 'Input_554804',
                uid: 'Input_554804',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_554804'] = r)}
              {...injectData}
            />
            <Input
              name={'发票开具申请人'}
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
              fieldName={'operatorName'}
              value={data?.dataform?.operatorName}
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
                id: 'Input_7193661',
                uid: 'Input_7193661',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_7193661'] = r)}
              {...injectData}
            />
            <Input
              name={'发票备注信息是否修改'}
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
              fieldName={'remarkChang'}
              value={data?.dataform?.remarkChang}
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
                id: 'Input_156007',
                uid: 'Input_156007',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_156007'] = r)}
              {...injectData}
            />
            <TextArea
              name={'审批事项说明'}
              selfSpan={16}
              labelCol={'8'}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'instructionMatters'}
              value={data?.dataform?.instructionMatters}
              formItemIndex={6}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={'目前已合作XX业务等，因xx原因需申请集团拆分建档。'}
              labels={[]}
              $$componentItem={{
                id: 'TextArea_43305304',
                uid: 'TextArea_43305304',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_43305304'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_793898',
                uid: 'Divider_793898',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 8,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_793898'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              dividerText={'发票信息'}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_214032',
                uid: 'Divider_214032',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 9,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_214032'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_947519',
                uid: 'Divider_947519',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 10,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_947519'] = r)}
              {...injectData}
            />
            <Input
              name={'销售方名称'}
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
              fieldName={'salesName'}
              value={data?.dataform?.salesName}
              formItemIndex={11}
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
                id: 'Input_4180044',
                uid: 'Input_4180044',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_4180044'] = r)}
              {...injectData}
            />
            <Input
              name={'销售方统一社会信用代码'}
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
              fieldName={'salesSocialCode'}
              value={data?.dataform?.salesSocialCode}
              formItemIndex={12}
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
                id: 'Input_7712748',
                uid: 'Input_7712748',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_7712748'] = r)}
              {...injectData}
            />
            <Input
              name={'购买方统一社会信用代码'}
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
              fieldName={'buyerSocialCode'}
              value={data?.dataform?.buyerSocialCode}
              formItemIndex={13}
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
                id: 'Input_59586',
                uid: 'Input_59586',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_59586'] = r)}
              {...injectData}
            />
            <Input
              name={'购买方名称'}
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
              fieldName={'buyerName'}
              value={data?.dataform?.buyerName}
              formItemIndex={14}
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
                id: 'Input_081924',
                uid: 'Input_081924',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_081924'] = r)}
              {...injectData}
            />
            <Input
              name={'含税金额'}
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
              fieldName={'taxAmount'}
              value={data?.dataform?.taxAmount}
              formItemIndex={15}
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
                id: 'Input_770168',
                uid: 'Input_770168',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_770168'] = r)}
              {...injectData}
            />
            <Input
              name={'发票备注'}
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
              fieldName={'invoiceRemark'}
              value={data?.dataform?.invoiceRemark}
              formItemIndex={16}
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
                id: 'Input_423563',
                uid: 'Input_423563',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_423563'] = r)}
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
            ref={(r: any) => (refs['BOFramer_4659663'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0013_0001$$Page, {
  pageId: '1024907067531210752',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
