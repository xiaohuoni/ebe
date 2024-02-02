// 注意: 出码模块正在调试
import React from 'react';

import {
  Button,
  Dropdown,
  Form,
  Img,
  Input,
  LoopList,
  Pagination,
  Select,
  Text,
  TimePicker,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

styleInject(
  '.__CustomClass_746582__ .View_900735 .ued-loop-list-nobox{background-color:transparent!important;}.__CustomClass_746582__ .View_482699 .hidden{visibility:hidden;}.__CustomClass_746582__ .LoopList_824234 .pcfactory-row{flex-wrap:nowrap;}.__CustomClass_746582__ .Text_35846375 p{margin-bottom:0;}.__CustomClass_746582__ .View_248742 .gray{background-color:#a8a8b6!important;}.__CustomClass_746582__ .View_248742 .blue{background-color:#0052D9!important;}.__CustomClass_746582__ .View_248742 .green{background-color:#02B342!important;}.__CustomClass_746582__ .View_248742 .red{background-color:#F23030!important;}.__CustomClass_746582__ .View_09648 .hidden{visibility:hidden;}.__CustomClass_746582__ .View_09648 .pcfactory-space-item{white-space:nowrap;}.__CustomClass_746582__ .View_09648 .Dropdown_Dropdown_945589 .pcfactory-space-align-center .pcfactory-space-item:nth-child(2){display:none;}',

  '746582',
);

const Xinbankaoshishouye5627$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  attrDataMap = {},
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

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_746582__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(244, 249, 253, 1)' }}
        $$componentItem={{
          id: 'View_695027_1',
          uid: 'View_695027_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '15px 8.33%',
          flexDirection: 'column',
          overflowY: 'auto',
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
        ref={(r: any) => (refs['View_695027_1'] = r)}
        {...injectData}
      >
        <Img
          name={'图片'}
          srcType={'fileCode'}
          alt={'图片'}
          fileCode={'PIC_132653'}
          $$componentItem={{
            id: 'Img_206009',
            uid: 'Img_206009',
            type: 'Img',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '100%',
            height: '13.5%',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0',
          }}
          ref={(r: any) => (refs['Img_206009'] = r)}
          {...injectData}
        />
        <View
          name={'普通容器2'}
          backgroundType={{
            type: 'cleanColor',
            color: 'rgba(255, 255, 255, 0)',
          }}
          $$componentItem={{
            id: 'View_202597',
            uid: 'View_202597',
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
            flex: 1,
            height: '100%',
            zIndex: '1',
          }}
          ref={(r: any) => (refs['View_202597'] = r)}
          {...injectData}
        >
          <View
            name={'头部容器'}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            $$componentItem={{
              id: 'View_553049',
              uid: 'View_553049',
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
              alignItems: 'center',
              marginBottom: '2.5%',
            }}
            ref={(r: any) => (refs['View_553049'] = r)}
            {...injectData}
          >
            <Img
              name={'图片'}
              srcType={'fileCode'}
              alt={'图片'}
              fileCode={'PIC_868933'}
              $$componentItem={{
                id: 'Img_685444',
                uid: 'Img_685444',
                type: 'Img',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: '4.3%', height: '0F', marginRight: '0.833%' }}
              ref={(r: any) => (refs['Img_685444'] = r)}
              {...injectData}
            />
            <View
              name={'普通容器69'}
              backgroundType={{
                type: 'cleanColor',
                color: 'rgba(255, 255, 255, 0)',
              }}
              $$componentItem={{
                id: 'View_9543965',
                uid: 'View_9543965',
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
                width: 'fit-content',
              }}
              ref={(r: any) => (refs['View_9543965'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'早上好，' + data?._others_?.personInfo?.userName}
                textType={'span'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_19081',
                  uid: 'Text_19081',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '1.067vw',
                  lineHeight: 'normal',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  fontStyle: 'italic',
                  fontWeight: '400',
                }}
                onClick={() => {
                  // console 170383101532941730
                  console.log(data?.$_myRelaTabCtr?.selTab);
                }}
                ref={(r: any) => (refs['Text_19081'] = r)}
                {...injectData}
              />
            </View>
          </View>
          <View
            name={'普通容器54'}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            className={'View_900735'}
            $$componentItem={{
              id: 'View_900735',
              uid: 'View_900735',
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
              flex: 1,
              overflowY: 'auto',
              borderRadius: '4px 4px 4px 4px',
              position: 'relative',
            }}
            ref={(r: any) => (refs['View_900735'] = r)}
            {...injectData}
          >
            <View
              name={'实力容器'}
              backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
              className={'View_482699'}
              $$componentItem={{
                id: 'View_482699',
                uid: 'View_482699',
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
                borderRadius: '8px 8px 8px 8px',
                margin: '0px 0px 24px 0px',
              }}
              ref={(r: any) => (refs['View_482699'] = r)}
              {...injectData}
            >
              <Form
                name={'表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                layout={'horizontal'}
                colon={true}
                labelAlign={'right'}
                colSpace={0}
                rowSpace={16}
                $$componentItem={{
                  id: 'Form_1252646',
                  uid: 'Form_1252646',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '20px 16px 20px 16px', width: '100%' }}
                ref={(r: any) => (refs['Form_1252646'] = r)}
                {...injectData}
              >
                <TimePicker
                  name={'考试开始时间'}
                  size={'default'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipSize={'default'}
                  tipWidth={'240px'}
                  tipHeight={'auto'}
                  required={false}
                  limitRange={'no'}
                  startTime={''}
                  endTime={''}
                  format={'YYYY-MM-DD HH:mm:ss'}
                  timeMode={'time'}
                  pickerType={'TimePicker'}
                  placeholder={'请选择时间'}
                  customTip={''}
                  allowClear={true}
                  fieldName={'start_time'}
                  formItemIndex={0}
                  $$componentItem={{
                    id: 'TimePicker_47885496',
                    uid: 'TimePicker_47885496',
                    type: 'TimePicker',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['TimePicker_47885496'] = r)}
                  {...injectData}
                />
                <TimePicker
                  name={'考试截止时间'}
                  size={'default'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipSize={'default'}
                  tipWidth={'240px'}
                  tipHeight={'auto'}
                  required={false}
                  limitRange={'no'}
                  startTime={''}
                  endTime={''}
                  format={'YYYY-MM-DD HH:mm:ss'}
                  timeMode={'time'}
                  pickerType={'TimePicker'}
                  placeholder={'请选择时间'}
                  customTip={''}
                  allowClear={true}
                  fieldName={'end_time'}
                  formItemIndex={1}
                  $$componentItem={{
                    id: 'TimePicker_9934938',
                    uid: 'TimePicker_9934938',
                    type: 'TimePicker',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['TimePicker_9934938'] = r)}
                  {...injectData}
                />
                <Input
                  name={'考试标题'}
                  size={'default'}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipContent={''}
                  tipSize={'default'}
                  tipWidth={'240px'}
                  tipHeight={'auto'}
                  prefixIconPosition={'before'}
                  postfix={''}
                  postfixIconPosition={'before'}
                  required={false}
                  placeholder={'请输入'}
                  allowClear={true}
                  dataMask={''}
                  fieldName={'name'}
                  formItemIndex={2}
                  icon={{
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  prefixIcon={{
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  selfSpan={8}
                  $$componentItem={{
                    id: 'Input_2976845',
                    uid: 'Input_2976845',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_2976845'] = r)}
                  {...injectData}
                />
                <Select
                  name={'考试状态'}
                  size={'default'}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipSize={'default'}
                  tipWidth={'240px'}
                  tipHeight={'auto'}
                  required={false}
                  filter={'none'}
                  classification={'default'}
                  placeholder={'请选择'}
                  allowClear={true}
                  fieldName={'state'}
                  selfSpan={8}
                  formItemIndex={3}
                  dataSource={attrDataMap['exam_state']}
                  $$componentItem={{
                    id: 'Select_3710294',
                    uid: 'Select_3710294',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Select_3710294'] = r)}
                  {...injectData}
                />
                <Select
                  name={'考试类型'}
                  size={'default'}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipSize={'default'}
                  tipWidth={'240px'}
                  tipHeight={'auto'}
                  required={false}
                  filter={'none'}
                  classification={'default'}
                  placeholder={'请选择'}
                  allowClear={true}
                  fieldName={'type'}
                  selfSpan={8}
                  formItemIndex={4}
                  dataSource={attrDataMap['exam_type']}
                  $$componentItem={{
                    id: 'Select_766743',
                    uid: 'Select_766743',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Select_766743'] = r)}
                  {...injectData}
                />
                <View
                  name={'普通容器55'}
                  backgroundType={{ type: 'cleanColor' }}
                  $$componentItem={{
                    id: 'View_655575',
                    uid: 'View_655575',
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
                      formItemIndex: 5,
                      style: undefined,
                      selfSpan: undefined,
                    },
                  }}
                  style={{
                    textAlign: 'right',
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['View_655575'] = r)}
                  {...injectData}
                >
                  <Button
                    name={'重置'}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'default'}
                    btnIcon={'none'}
                    hasIcon={false}
                    shape={'default'}
                    loading={false}
                    btnText={'重置'}
                    $$componentItem={{
                      id: 'Button_8038937',
                      uid: 'Button_8038937',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: 400,
                      height: '32px',
                      color: '#1C242E',
                      margin: '0px 8px 0px 8px',
                    }}
                    onClick={(e: any) => {
                      const forms = getFormByCompId('Form_1252646', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms) ? forms : [forms]).forEach((form) =>
                        form?.resetFields(),
                      );
                    }}
                    ref={(r: any) => (refs['Button_8038937'] = r)}
                    {...injectData}
                  />
                  <Button
                    name={'查询'}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'primary'}
                    btnIcon={'none'}
                    hasIcon={false}
                    shape={'default'}
                    loading={false}
                    btnText={'查询'}
                    $$componentItem={{
                      id: 'Button_415877',
                      uid: 'Button_415877',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: 400,
                      height: '32px',
                      color: '#ffffff',
                    }}
                    onClick={(e: any) => {
                      const eventDatareloadDataSource4: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 170599626288708200,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'system',
                            id: '1449286',
                            pageJsonId: '0314043',
                            dataSourceId: 169967333835294300,
                            dataSourceName: 'LCDP_EXAMS',
                            dataSourceRelType: 'object',
                            dataSourceReloadFilter: [
                              {
                                attrId: '9492304',
                                code: 'creator_id',
                                name: '创建人',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016642',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '577821',
                                code: 'creator_id_introduce',
                                name: '创建人翻译',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016642-introduce-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '675272',
                                code: 'create_time_begin',
                                name: '创建时间开始',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016643-begin-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '03719236',
                                code: 'update_time_end',
                                name: '修改时间结束',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016645-end-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '624335',
                                code: 'start_time_end',
                                name: '考试开始时间结束',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016647-end-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '125663',
                                code: 'start_time',
                                name: '考试开始时间',
                                type: 'datetime',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016647',
                                sourceId: '1040454540625457153',
                                value: {
                                  code: 'start_time',
                                  type: [
                                    'form',
                                    'Form_1252646',
                                    'getFieldsValue',
                                  ],
                                },
                              },
                              {
                                attrId: '409998',
                                code: 'end_time',
                                name: '考试截止时间',
                                type: 'datetime',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016648',
                                sourceId: '1040454540625457153',
                                value: {
                                  code: 'end_time',
                                  type: [
                                    'form',
                                    'Form_1252646',
                                    'getFieldsValue',
                                  ],
                                },
                              },
                              {
                                attrId: '846415',
                                code: 'duration',
                                name: '考试时长(分钟)',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016650',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '805341',
                                code: 'end_time_begin',
                                name: '考试截止时间开始',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016648-begin-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '7756385',
                                code: 'id',
                                name: '主键',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016640',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '016523',
                                code: 'name',
                                name: '考试标题',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016641',
                                sourceId: '1040454540625457153',
                                value: {
                                  code: 'name',
                                  type: [
                                    'form',
                                    'Form_1252646',
                                    'getFieldsValue',
                                  ],
                                },
                              },
                              {
                                attrId: '2106768',
                                code: 'start_time_begin',
                                name: '考试开始时间开始',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016647-begin-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '06138',
                                code: 'create_time_end',
                                name: '创建时间结束',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016643-end-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '2417717',
                                code: 'description',
                                name: '考试描述',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016646',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '359369',
                                code: 'state',
                                name: '考试状态',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016649',
                                sourceId: '1040454540625457153',
                                value: {
                                  code: 'state',
                                  type: [
                                    'form',
                                    'Form_1252646',
                                    'getFieldsValue',
                                  ],
                                },
                              },
                              {
                                attrId: '719748',
                                code: 'type',
                                name: '考试类型',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040467867271442444',
                                sourceId: '1040454540625457153',
                                value: {
                                  code: 'type',
                                  type: [
                                    'form',
                                    'Form_1252646',
                                    'getFieldsValue',
                                  ],
                                },
                              },
                              {
                                attrId: '492608',
                                code: 'update_time_begin',
                                name: '修改时间开始',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016645-begin-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '685473',
                                code: 'updator_id',
                                name: '修改人',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016644',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '875747',
                                code: 'updator_id_introduce',
                                name: '修改人翻译',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016644-introduce-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '1883647',
                                code: 'end_time_end',
                                name: '考试截止时间结束',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _virtualAttrId:
                                  '1040454540508016648-end-virtual',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '577816',
                                code: 'create_time',
                                name: '创建时间',
                                type: 'datetime',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016643',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '0896792',
                                code: 'update_time',
                                name: '修改时间',
                                type: 'datetime',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016645',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '657948',
                                code: 'score',
                                name: '总分数',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                sourceAttrId: '1040454540508016651',
                                sourceId: '1040454540625457153',
                              },
                              {
                                attrId: '060786',
                                code: 'pageNum',
                                name: '页数',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  code: '$data.pageInfo.pageNum$',
                                  type: ['customize'],
                                },
                              },
                              {
                                attrId: '29290248',
                                code: 'pageSize',
                                name: '每页数量',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  code: 'pageSize',
                                  type: ['datasource', 'pageInfo', 'data'],
                                },
                              },
                              {
                                attrId: '3659173',
                                code: 'childNode',
                                name: '从表子节点',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                              },
                              {
                                type: 'string',
                                code: 'orderByAsc',
                                name: '正序列',
                                value: {
                                  hideAttr: false,
                                  code: '',
                                  type: ['customize'],
                                },
                              },
                              {
                                type: 'string',
                                code: 'orderByDesc',
                                name: '倒序列',
                                value: {
                                  hideAttr: false,
                                  code: '',
                                  type: ['customize'],
                                },
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                            sync: true,
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatareloadDataSource4.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatareloadDataSource4,
                        { e },
                        'reloadDataSource',
                        {
                          id: 'reloadDataSource',
                          name: 'reloadDataSource',
                          type: 'reloadDataSource',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Button_415877'] = r)}
                    {...injectData}
                  />
                </View>
              </Form>
            </View>
            <View
              name={'任务容器'}
              backgroundType={{
                type: 'cleanColor',
                color: 'rgba(255, 255, 255, 0)',
              }}
              $$componentItem={{
                id: 'View_3969296',
                uid: 'View_3969296',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 16px 0px 0px',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: '1%',
              }}
              ref={(r: any) => (refs['View_3969296'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'考试列表'}
                textType={'span'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_321291',
                  uid: 'Text_321291',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 17,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  fontWeight: 700,
                  width: 'fit-content',
                }}
                ref={(r: any) => (refs['Text_321291'] = r)}
                {...injectData}
              />
              <View
                name={'普通容器67'}
                backgroundType={{
                  type: 'cleanColor',
                  color: 'rgba(255, 255, 255, 0)',
                }}
                $$componentItem={{
                  id: 'View_652212',
                  uid: 'View_652212',
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
                  width: 'fit-content',
                }}
                ref={(r: any) => (refs['View_652212'] = r)}
                {...injectData}
              >
                <Button
                  name={'按钮'}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'default'}
                  btnIcon={'none'}
                  hasIcon={true}
                  shape={'default'}
                  loading={false}
                  btnText={'数据导出'}
                  icon={{
                    type: 'upload',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'Button_91386067',
                    uid: 'Button_91386067',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'center',
                    width: 'fit-content',
                    fontSize: 13,
                    marginRight: '16px',
                    padding: '5px 12px',
                  }}
                  onClick={(e: any) => {
                    const eventDataexportCustomBusiObjectData: any = [
                      {
                        type: 'exportCustomBusiObjectData',
                        dataId: 170599346928281470,
                        options: {
                          compId: 'exportCustomBusiObjectData',
                          compName: 'system',
                          id: '395834',
                          pageJsonId: '0314043',
                          busiObjectId: '1040454540625457153',
                          busiObjectFields: [
                            'id',
                            'name',
                            'description',
                            'start_time',
                            'end_time',
                            'state',
                            'duration',
                            'score',
                            'type',
                          ],
                          custFileName: 'LCDP_EXAMS-数据导出',
                          _sourceName: '考试实例',
                          async: 'sync',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDataexportCustomBusiObjectData.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDataexportCustomBusiObjectData,
                      { e },
                      'exportCustomBusiObjectData',
                      {
                        id: 'exportCustomBusiObjectData',
                        name: 'exportCustomBusiObjectData',
                        type: 'exportCustomBusiObjectData',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Button_91386067'] = r)}
                  {...injectData}
                />
                <Button
                  name={'按钮'}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'default'}
                  btnIcon={'none'}
                  hasIcon={true}
                  shape={'default'}
                  loading={false}
                  btnText={'数据导入'}
                  icon={{
                    type: 'download',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'Button_874106',
                    uid: 'Button_874106',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'center',
                    fontSize: 13,
                    marginRight: '16px',
                    padding: '5px 12px',
                  }}
                  onClick={(e: any) => {
                    const eventDataimportCustomBusiObjectData: any = [
                      {
                        type: 'importCustomBusiObjectData',
                        dataId: 170599345111201950,
                        options: {
                          compId: 'importCustomBusiObjectData',
                          compName: 'system',
                          id: '485948',
                          pageJsonId: '0314043',
                          busiObjectId: '1040454540625457153',
                          busiObjectFields: [
                            {
                              code: 'id',
                              checkCode: null,
                              checkMessage: null,
                              sort: 0,
                            },
                            {
                              code: 'name',
                              checkCode: null,
                              checkMessage: null,
                              sort: 1,
                            },
                            {
                              code: 'description',
                              checkCode: null,
                              checkMessage: null,
                              sort: 2,
                            },
                            {
                              code: 'start_time',
                              checkCode: null,
                              checkMessage: null,
                              sort: 3,
                            },
                            {
                              code: 'end_time',
                              checkCode: null,
                              checkMessage: null,
                              sort: 4,
                            },
                            {
                              code: 'state',
                              checkCode: null,
                              checkMessage: null,
                              sort: 5,
                            },
                            {
                              code: 'duration',
                              checkCode: null,
                              checkMessage: null,
                              sort: 6,
                            },
                            {
                              code: 'score',
                              checkCode: null,
                              checkMessage: null,
                              sort: 7,
                            },
                            {
                              code: 'type',
                              checkCode: null,
                              checkMessage: null,
                              sort: 8,
                            },
                          ],
                          showOnly: 'F',
                          name: '考试实例',
                          _sourceName: '考试实例',
                          customGroup: {},
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 170599699109157150,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'system',
                              id: '971348',
                              pageJsonId: '0314043',
                              dataSourceId: 169967333835294300,
                              dataSourceName: 'LCDP_EXAMS',
                              dataSourceRelType: 'object',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '9492304',
                                  code: 'creator_id',
                                  name: '创建人',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016642',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '577821',
                                  code: 'creator_id_introduce',
                                  name: '创建人翻译',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016642-introduce-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '675272',
                                  code: 'create_time_begin',
                                  name: '创建时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016643-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '03719236',
                                  code: 'update_time_end',
                                  name: '修改时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016645-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '624335',
                                  code: 'start_time_end',
                                  name: '考试开始时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016647-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '125663',
                                  code: 'start_time',
                                  name: '考试开始时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016647',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'start_time',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '409998',
                                  code: 'end_time',
                                  name: '考试截止时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016648',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'end_time',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '846415',
                                  code: 'duration',
                                  name: '考试时长(分钟)',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016650',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '805341',
                                  code: 'end_time_begin',
                                  name: '考试截止时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016648-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '7756385',
                                  code: 'id',
                                  name: '主键',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016640',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '016523',
                                  code: 'name',
                                  name: '考试标题',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016641',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'name',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '2106768',
                                  code: 'start_time_begin',
                                  name: '考试开始时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016647-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '06138',
                                  code: 'create_time_end',
                                  name: '创建时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016643-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '2417717',
                                  code: 'description',
                                  name: '考试描述',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016646',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '359369',
                                  code: 'state',
                                  name: '考试状态',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016649',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'state',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '719748',
                                  code: 'type',
                                  name: '考试类型',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040467867271442444',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'type',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '492608',
                                  code: 'update_time_begin',
                                  name: '修改时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016645-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '685473',
                                  code: 'updator_id',
                                  name: '修改人',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016644',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '875747',
                                  code: 'updator_id_introduce',
                                  name: '修改人翻译',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016644-introduce-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '1883647',
                                  code: 'end_time_end',
                                  name: '考试截止时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016648-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '577816',
                                  code: 'create_time',
                                  name: '创建时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016643',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '0896792',
                                  code: 'update_time',
                                  name: '修改时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016645',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '657948',
                                  code: 'score',
                                  name: '总分数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016651',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '060786',
                                  code: 'pageNum',
                                  name: '页数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  value: {
                                    code: '$data.pageInfo.pageNum$',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  attrId: '29290248',
                                  code: 'pageSize',
                                  name: '每页数量',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  value: {
                                    code: 'pageSize',
                                    type: ['datasource', 'pageInfo', 'data'],
                                  },
                                },
                                {
                                  attrId: '3659173',
                                  code: 'childNode',
                                  name: '从表子节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByAsc',
                                  name: '正序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByDesc',
                                  name: '倒序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                              ],
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                              sync: true,
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataimportCustomBusiObjectData.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDataimportCustomBusiObjectData,
                      { e },
                      'importCustomBusiObjectData',
                      {
                        id: 'importCustomBusiObjectData',
                        name: 'importCustomBusiObjectData',
                        type: 'importCustomBusiObjectData',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Button_874106'] = r)}
                  {...injectData}
                />
                <Button
                  name={'按钮'}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'primary'}
                  btnIcon={'none'}
                  hasIcon={true}
                  shape={'default'}
                  loading={false}
                  btnText={'新增'}
                  icon={{
                    type: 'plus',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'Button_103749',
                    uid: 'Button_103749',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'center',
                    margin: '0px 0px 0px 0px',
                    fontSize: 13,
                    padding: '5px 12px',
                  }}
                  onClick={(e: any) => {
                    const eventDatashowCustomModal: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 170599343697978880,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'system',
                          id: '103304',
                          pageJsonId: '0314043',
                          paramsObj: { sceneCode: 'A' },
                          paramsObjKeyValueMap: { sceneCode: 'A' },
                          modalname: '/chaxunfenyeshuju_7915695modal',
                          pageId: '1040468589346041856',
                          modalPath: '/chaxunfenyeshuju_7915695modal',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 170599699908170660,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'system',
                              id: '733311',
                              pageJsonId: '0314043',
                              dataSourceId: 169967333835294300,
                              dataSourceName: 'LCDP_EXAMS',
                              dataSourceRelType: 'object',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '9492304',
                                  code: 'creator_id',
                                  name: '创建人',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016642',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '577821',
                                  code: 'creator_id_introduce',
                                  name: '创建人翻译',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016642-introduce-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '675272',
                                  code: 'create_time_begin',
                                  name: '创建时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016643-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '03719236',
                                  code: 'update_time_end',
                                  name: '修改时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016645-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '624335',
                                  code: 'start_time_end',
                                  name: '考试开始时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016647-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '125663',
                                  code: 'start_time',
                                  name: '考试开始时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016647',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'start_time',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '409998',
                                  code: 'end_time',
                                  name: '考试截止时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016648',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'end_time',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '846415',
                                  code: 'duration',
                                  name: '考试时长(分钟)',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016650',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '805341',
                                  code: 'end_time_begin',
                                  name: '考试截止时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016648-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '7756385',
                                  code: 'id',
                                  name: '主键',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016640',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '016523',
                                  code: 'name',
                                  name: '考试标题',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016641',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'name',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '2106768',
                                  code: 'start_time_begin',
                                  name: '考试开始时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016647-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '06138',
                                  code: 'create_time_end',
                                  name: '创建时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016643-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '2417717',
                                  code: 'description',
                                  name: '考试描述',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016646',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '359369',
                                  code: 'state',
                                  name: '考试状态',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016649',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'state',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '719748',
                                  code: 'type',
                                  name: '考试类型',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040467867271442444',
                                  sourceId: '1040454540625457153',
                                  value: {
                                    code: 'type',
                                    type: [
                                      'form',
                                      'Form_1252646',
                                      'getFieldsValue',
                                    ],
                                  },
                                },
                                {
                                  attrId: '492608',
                                  code: 'update_time_begin',
                                  name: '修改时间开始',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016645-begin-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '685473',
                                  code: 'updator_id',
                                  name: '修改人',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016644',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '875747',
                                  code: 'updator_id_introduce',
                                  name: '修改人翻译',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016644-introduce-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '1883647',
                                  code: 'end_time_end',
                                  name: '考试截止时间结束',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _virtualAttrId:
                                    '1040454540508016648-end-virtual',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '577816',
                                  code: 'create_time',
                                  name: '创建时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016643',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '0896792',
                                  code: 'update_time',
                                  name: '修改时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016645',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '657948',
                                  code: 'score',
                                  name: '总分数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  sourceAttrId: '1040454540508016651',
                                  sourceId: '1040454540625457153',
                                },
                                {
                                  attrId: '060786',
                                  code: 'pageNum',
                                  name: '页数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  value: {
                                    code: '$data.pageInfo.pageNum$',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  attrId: '29290248',
                                  code: 'pageSize',
                                  name: '每页数量',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  value: {
                                    code: 'pageSize',
                                    type: ['datasource', 'pageInfo', 'data'],
                                  },
                                },
                                {
                                  attrId: '3659173',
                                  code: 'childNode',
                                  name: '从表子节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByAsc',
                                  name: '正序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByDesc',
                                  name: '倒序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                              ],
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                              sync: true,
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatashowCustomModal,
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
                  ref={(r: any) => (refs['Button_103749'] = r)}
                  {...injectData}
                />
              </View>
            </View>
            <View
              name={'普通容器56'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_95737',
                uid: 'View_95737',
                type: 'View',
                ...componentItem,
              }}
              disabled={basicStatus === '3'}
              visible={
                `${
                  data?.queryTaskByMyRelareController?.list?.length ? 1 : 2
                }` !== '2'
              }
              readOnly={
                `${
                  data?.queryTaskByMyRelareController?.list?.length ? 1 : 2
                }` === '4'
              }
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_95737'] = r)}
              {...injectData}
            >
              <LoopList
                name={'循环列表'}
                mode={1}
                pieceData={[]}
                defaultValue={[]}
                columnNum={1}
                span={24}
                vspace={16}
                hspace={16}
                itemKey={'rowData'}
                indexKey={'rowIndex'}
                gridMode={false}
                gridData={data?.LCDP_EXAMS?.list}
                valueKey={'id'}
                fixedWidth={false}
                className={'LoopList_824234'}
                $$componentItem={{
                  id: 'LoopList_824234',
                  uid: 'LoopList_824234',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={`${data?.LCDP_EXAMS?.list?.length ? 1 : 2}` === '3'}
                visible={`${data?.LCDP_EXAMS?.list?.length ? 1 : 2}` !== '2'}
                readOnly={`${data?.LCDP_EXAMS?.list?.length ? 1 : 2}` === '4'}
                style={{
                  minHeight: 40,
                  flexDirection: 'column',
                  marginLeft: '0',
                  marginRight: '0',
                  rowGap: '12px',
                }}
                ref={(r: any) => (refs['LoopList_824234'] = r)}
                {...injectData}
                getEngineApis={() => {
                  return {
                    ...injectData.getEngineApis(),
                    MemoRenderer: {
                      renderer: null,
                      MemoLoopItem: (props: any) => {
                        const rowData = props[props.itemKey] ?? props?.item;
                        const rowIndex = props[props.indexKey] ?? props?.i;
                        const item = props[props.itemKey] ?? props?.item;
                        const i = props[props.indexKey] ?? props?.i;
                        return (
                          <>
                            <View
                              name={'内容容器'}
                              backgroundType={{
                                type: 'cleanColor',
                                color: 'rgba(255, 255, 255, 1)',
                              }}
                              $$componentItem={{
                                id: 'View_679303',
                                uid: 'View_679303',
                                type: 'View',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '.5% 1%',
                                width: '100%',
                                borderRadius: '8px 8px 8px 8px',
                                alignItems: 'center',
                              }}
                              ref={(r: any) => (refs['View_679303'] = r)}
                              {...injectData}
                            >
                              <View
                                name={'普通容器57'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_4920784',
                                  uid: 'View_4920784',
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
                                  flex: 19,
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                }}
                                ref={(r: any) => (refs['View_4920784'] = r)}
                                {...injectData}
                              >
                                <Img
                                  name={'图片'}
                                  srcType={'fileCode'}
                                  alt={'图片'}
                                  fileCode={'PIC_874336'}
                                  $$componentItem={{
                                    id: 'Img_716987',
                                    uid: 'Img_716987',
                                    type: 'Img',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    width: '19%',
                                    height: 'fit-content',
                                    marginRight: '6.5%',
                                  }}
                                  ref={(r: any) => (refs['Img_716987'] = r)}
                                  {...injectData}
                                />
                                <View
                                  name={'普通容器58'}
                                  backgroundType={{
                                    type: 'cleanColor',
                                    color: 'rgba(255, 255, 255, 0)',
                                  }}
                                  $$componentItem={{
                                    id: 'View_767456',
                                    uid: 'View_767456',
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
                                  }}
                                  ref={(r: any) => (refs['View_767456'] = r)}
                                  {...injectData}
                                >
                                  <Text
                                    name={'文本'}
                                    content={item?.name}
                                    textType={'span'}
                                    showHtml={false}
                                    $$componentItem={{
                                      id: 'Text_671542',
                                      uid: 'Text_671542',
                                      type: 'Text',
                                      ...componentItem,
                                    }}
                                    disabled={false}
                                    visible={true}
                                    readOnly={false}
                                    style={{
                                      textAlign: 'left',
                                      fontSize: 13,
                                      lineHeight: '24px',
                                      color: 'rgba(28, 36, 46, 1)',
                                      backgroundColor: 'rgba(255, 255, 255,0)',
                                      fontWeight: 500,
                                      whiteSpace: 'nowrap',
                                    }}
                                    ref={(r: any) => (refs['Text_671542'] = r)}
                                    {...injectData}
                                  />
                                  <Text
                                    name={'文本'}
                                    content={item?.description}
                                    textType={'span'}
                                    showHtml={true}
                                    className={'Text_35846375'}
                                    $$componentItem={{
                                      id: 'Text_35846375',
                                      uid: 'Text_35846375',
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
                                      color: '#64677A',
                                      backgroundColor: 'rgba(255, 255, 255,0)',
                                    }}
                                    ref={(r: any) =>
                                      (refs['Text_35846375'] = r)
                                    }
                                    {...injectData}
                                  />
                                </View>
                              </View>
                              <View
                                name={'普通容器59'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_693963',
                                  uid: 'View_693963',
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
                                  flex: 8,
                                  justifyContent: 'center',
                                }}
                                ref={(r: any) => (refs['View_693963'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'考试类型'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_255857',
                                    uid: 'Text_255857',
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
                                    color: '#64677A',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_255857'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  content={String(item?.type)}
                                  textType={'span'}
                                  showHtml={false}
                                  textReg={{
                                    attr: {
                                      attrNbr: 'exam_type',
                                      attrName: '考试类型',
                                      attrId: '1040495250879819777',
                                    },
                                    attrNbrInfo: attrDataMap['exam_type'],
                                  }}
                                  $$componentItem={{
                                    id: 'Text_305166',
                                    uid: 'Text_305166',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 13,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_305166'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器61'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_668404',
                                  uid: 'View_668404',
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
                                  width: '15%',
                                  flex: 15,
                                  justifyContent: 'center',
                                }}
                                ref={(r: any) => (refs['View_668404'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'考试截止时间'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_10221768',
                                    uid: 'Text_10221768',
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
                                    color: '#64677A',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_10221768'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  content={item?.end_time}
                                  textType={'span'}
                                  showHtml={false}
                                  textReg={{
                                    attr: {
                                      attrNbr: 'TASK_CATEGORY',
                                      attrName: '任务类别',
                                      attrId: '1013090338506395649',
                                    },
                                    attrNbrInfo: attrDataMap['TASK_CATEGORY'],
                                  }}
                                  $$componentItem={{
                                    id: 'Text_7933993',
                                    uid: 'Text_7933993',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 13,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                  }}
                                  ref={(r: any) => (refs['Text_7933993'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器60'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_6223945',
                                  uid: 'View_6223945',
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
                                  width: '15%',
                                  flex: 15,
                                  justifyContent: 'center',
                                }}
                                ref={(r: any) => (refs['View_6223945'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'考试开始时间'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_580928',
                                    uid: 'Text_580928',
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
                                    color: '#64677A',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_580928'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  content={item?.start_time}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_974628',
                                    uid: 'Text_974628',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 13,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                  }}
                                  ref={(r: any) => (refs['Text_974628'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器62'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_327997',
                                  uid: 'View_327997',
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
                                  flex: 11,
                                  justifyContent: 'center',
                                }}
                                ref={(r: any) => (refs['View_327997'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'考试时长 (分钟)'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_994110033',
                                    uid: 'Text_994110033',
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
                                    color: '#64677A',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_994110033'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  content={item?.duration}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_441243',
                                    uid: 'Text_441243',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 13,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_441243'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器68'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_922473',
                                  uid: 'View_922473',
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
                                  flex: 6,
                                  justifyContent: 'center',
                                }}
                                ref={(r: any) => (refs['View_922473'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'总分数'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_5808805',
                                    uid: 'Text_5808805',
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
                                    color: '#64677A',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_5808805'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  content={item?.score}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_909244',
                                    uid: 'Text_909244',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 13,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_909244'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器63'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                className={'View_248742'}
                                $$componentItem={{
                                  id: 'View_248742',
                                  uid: 'View_248742',
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
                                  flex: 8,
                                  justifyContent: 'center',
                                  borderRadius: '0px 0px 0px 0px',
                                  alignItems: 'center',
                                }}
                                ref={(r: any) => (refs['View_248742'] = r)}
                                {...injectData}
                              >
                                <View
                                  name={'普通容器64'}
                                  backgroundType={{
                                    type: 'cleanColor',
                                    color: 'rgba(255, 255, 255, 1)',
                                  }}
                                  className={
                                    item?.state == 1000
                                      ? 'gray'
                                      : item?.state == 1001
                                      ? 'blue'
                                      : item?.state == 1002
                                      ? 'green'
                                      : 'red'
                                  }
                                  $$componentItem={{
                                    id: 'View_165777',
                                    uid: 'View_165777',
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
                                    width: '5px',
                                    height: '5px',
                                    borderRadius: '50% 50% 50% 50%',
                                    margin: '0px 8px 0px 0px',
                                  }}
                                  ref={(r: any) => (refs['View_165777'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  content={String(item?.state)}
                                  textType={'span'}
                                  showHtml={false}
                                  textReg={{
                                    attr: {
                                      attrNbr: 'exam_state',
                                      attrName: '考试状态',
                                      attrId: '1040487971040276481',
                                    },
                                    attrNbrInfo: attrDataMap['exam_state'],
                                  }}
                                  $$componentItem={{
                                    id: 'Text_556266',
                                    uid: 'Text_556266',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 13,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_556266'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器65'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                className={'View_09648'}
                                $$componentItem={{
                                  id: 'View_09648',
                                  uid: 'View_09648',
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
                                  flex: 18,
                                  justifyContent: 'center',
                                  alignItems: 'flex-end',
                                }}
                                ref={(r: any) => (refs['View_09648'] = r)}
                                {...injectData}
                              >
                                <Button
                                  name={'按钮'}
                                  classification={'default'}
                                  autoProcessFlow={false}
                                  flowProcessResult={'common'}
                                  iconPosition={'left'}
                                  ghost={false}
                                  block={false}
                                  size={'default'}
                                  type={'default'}
                                  btnIcon={'none'}
                                  hasIcon={false}
                                  shape={'default'}
                                  loading={false}
                                  btnText={'详情'}
                                  className={
                                    data?.tabData?.key === 'myCreate' &&
                                    item?.showModifyBtn == 'true'
                                      ? ''
                                      : 'hidden'
                                  }
                                  $$componentItem={{
                                    id: 'Button_518862',
                                    uid: 'Button_518862',
                                    type: 'Button',
                                    ...componentItem,
                                  }}
                                  disabled={
                                    `${
                                      data?.tabData?.key === 'myCreate'
                                        ? '1'
                                        : '2'
                                    }` === '3'
                                  }
                                  visible={
                                    `${
                                      data?.tabData?.key === 'myCreate'
                                        ? '1'
                                        : '2'
                                    }` !== '2'
                                  }
                                  readOnly={
                                    `${
                                      data?.tabData?.key === 'myCreate'
                                        ? '1'
                                        : '2'
                                    }` === '4'
                                  }
                                  style={{
                                    textAlign: 'center',
                                    width: 'fit-content',
                                    fontSize: 13,
                                    padding: '5px 12px',
                                    marginRight: '5%',
                                  }}
                                  onClick={(e: any) => {
                                    const eventDatashowCustomModal5: any = [
                                      {
                                        type: 'showCustomModal',
                                        dataId: 170599411579206720,
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'system',
                                          id: '4260835',
                                          pageJsonId: '0314043',
                                          paramsObj: {
                                            bizId: '$item.id$',
                                            sceneCode: 'VV',
                                          },
                                          paramsObjKeyValueMap: {
                                            bizId: '$item.id$',
                                            sceneCode: 'VV',
                                          },
                                          modalname:
                                            '/chaxunfenyeshuju_7915695modal',
                                          pageId: '1040468589346041856',
                                          modalPath:
                                            '/chaxunfenyeshuju_7915695modal',
                                        },
                                        line_number: 1,
                                        callback1: [
                                          {
                                            type: 'reloadDataSource',
                                            dataId: 170599631393856700,
                                            options: {
                                              compId: 'reloadDataSource',
                                              compName: 'system',
                                              id: '948639',
                                              pageJsonId: '0314043',
                                              dataSourceId: 169967333835294300,
                                              dataSourceName: 'LCDP_EXAMS',
                                              dataSourceRelType: 'object',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '9492304',
                                                  code: 'creator_id',
                                                  name: '创建人',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016642',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '577821',
                                                  code: 'creator_id_introduce',
                                                  name: '创建人翻译',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016642-introduce-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '675272',
                                                  code: 'create_time_begin',
                                                  name: '创建时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016643-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '03719236',
                                                  code: 'update_time_end',
                                                  name: '修改时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016645-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '624335',
                                                  code: 'start_time_end',
                                                  name: '考试开始时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016647-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '125663',
                                                  code: 'start_time',
                                                  name: '考试开始时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016647',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'start_time',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '409998',
                                                  code: 'end_time',
                                                  name: '考试截止时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016648',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'end_time',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '846415',
                                                  code: 'duration',
                                                  name: '考试时长(分钟)',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016650',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '805341',
                                                  code: 'end_time_begin',
                                                  name: '考试截止时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016648-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '7756385',
                                                  code: 'id',
                                                  name: '主键',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016640',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '016523',
                                                  code: 'name',
                                                  name: '考试标题',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016641',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'name',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '2106768',
                                                  code: 'start_time_begin',
                                                  name: '考试开始时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016647-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '06138',
                                                  code: 'create_time_end',
                                                  name: '创建时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016643-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '2417717',
                                                  code: 'description',
                                                  name: '考试描述',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016646',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '359369',
                                                  code: 'state',
                                                  name: '考试状态',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016649',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'state',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '719748',
                                                  code: 'type',
                                                  name: '考试类型',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040467867271442444',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'type',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '492608',
                                                  code: 'update_time_begin',
                                                  name: '修改时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016645-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '685473',
                                                  code: 'updator_id',
                                                  name: '修改人',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016644',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '875747',
                                                  code: 'updator_id_introduce',
                                                  name: '修改人翻译',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016644-introduce-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '1883647',
                                                  code: 'end_time_end',
                                                  name: '考试截止时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016648-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '577816',
                                                  code: 'create_time',
                                                  name: '创建时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016643',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '0896792',
                                                  code: 'update_time',
                                                  name: '修改时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016645',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '657948',
                                                  code: 'score',
                                                  name: '总分数',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016651',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '060786',
                                                  code: 'pageNum',
                                                  name: '页数',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  value: {
                                                    code: '$data.pageInfo.pageNum$',
                                                    type: ['customize'],
                                                  },
                                                },
                                                {
                                                  attrId: '29290248',
                                                  code: 'pageSize',
                                                  name: '每页数量',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  value: {
                                                    code: 'pageSize',
                                                    type: [
                                                      'datasource',
                                                      'pageInfo',
                                                      'data',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '3659173',
                                                  code: 'childNode',
                                                  name: '从表子节点',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                },
                                                {
                                                  type: 'string',
                                                  code: 'orderByAsc',
                                                  name: '正序列',
                                                  value: {
                                                    hideAttr: false,
                                                    code: '',
                                                    type: ['customize'],
                                                  },
                                                },
                                                {
                                                  type: 'string',
                                                  code: 'orderByDesc',
                                                  name: '倒序列',
                                                  value: {
                                                    hideAttr: false,
                                                    code: '',
                                                    type: ['customize'],
                                                  },
                                                },
                                              ],
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                              sync: true,
                                            },
                                            line_number: 2,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                        callback2: [],
                                      },
                                    ];
                                    eventDatashowCustomModal5.params =
                                      [
                                        {
                                          title: '事件对象',
                                          value: '$e$',
                                          name: 'e',
                                        },
                                      ] || [];
                                    CMDGenerator(
                                      eventDatashowCustomModal5,
                                      { e, item, i, rowData, rowIndex },
                                      'showCustomModal',
                                      {
                                        id: 'showCustomModal',
                                        name: 'showCustomModal',
                                        type: 'showCustomModal',
                                        platform: 'pc',
                                      },
                                    );
                                  }}
                                  ref={(r: any) => (refs['Button_518862'] = r)}
                                  {...injectData}
                                />
                                <Button
                                  name={'按钮'}
                                  classification={'default'}
                                  autoProcessFlow={false}
                                  flowProcessResult={'common'}
                                  iconPosition={'left'}
                                  ghost={false}
                                  block={false}
                                  size={'default'}
                                  type={'primary'}
                                  btnIcon={'none'}
                                  hasIcon={false}
                                  shape={'default'}
                                  loading={false}
                                  btnText={'编辑'}
                                  $$componentItem={{
                                    id: 'Button_572132',
                                    uid: 'Button_572132',
                                    type: 'Button',
                                    ...componentItem,
                                  }}
                                  disabled={
                                    `${
                                      data?.tabData?.key === 'myHandle'
                                        ? '1'
                                        : '2'
                                    }` === '3'
                                  }
                                  visible={
                                    `${
                                      data?.tabData?.key === 'myHandle'
                                        ? '1'
                                        : '2'
                                    }` !== '2'
                                  }
                                  readOnly={
                                    `${
                                      data?.tabData?.key === 'myHandle'
                                        ? '1'
                                        : '2'
                                    }` === '4'
                                  }
                                  style={{
                                    textAlign: 'center',
                                    width: 'fit-content',
                                    fontSize: 13,
                                    padding: '5px 12px',
                                    marginRight: '5%',
                                  }}
                                  onClick={(e: any) => {
                                    const eventDatashowCustomModal6: any = [
                                      {
                                        type: 'showCustomModal',
                                        dataId: 170599415305864480,
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'system',
                                          id: '1846935',
                                          pageJsonId: '0314043',
                                          paramsObj: {
                                            bizId: '$item.id$',
                                            sceneCode: 'M',
                                          },
                                          paramsObjKeyValueMap: {
                                            bizId: '$item.id$',
                                            sceneCode: 'M',
                                          },
                                          modalname:
                                            '/chaxunfenyeshuju_7915695modal',
                                          pageId: '1040468589346041856',
                                          modalPath:
                                            '/chaxunfenyeshuju_7915695modal',
                                        },
                                        line_number: 1,
                                        callback1: [
                                          {
                                            type: 'reloadDataSource',
                                            dataId: 170599629605438140,
                                            options: {
                                              compId: 'reloadDataSource',
                                              compName: 'system',
                                              id: '4161056',
                                              pageJsonId: '0314043',
                                              dataSourceId: 169967333835294300,
                                              dataSourceName: 'LCDP_EXAMS',
                                              dataSourceRelType: 'object',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '9492304',
                                                  code: 'creator_id',
                                                  name: '创建人',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016642',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '577821',
                                                  code: 'creator_id_introduce',
                                                  name: '创建人翻译',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016642-introduce-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '675272',
                                                  code: 'create_time_begin',
                                                  name: '创建时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016643-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '03719236',
                                                  code: 'update_time_end',
                                                  name: '修改时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016645-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '624335',
                                                  code: 'start_time_end',
                                                  name: '考试开始时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016647-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '125663',
                                                  code: 'start_time',
                                                  name: '考试开始时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016647',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'start_time',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '409998',
                                                  code: 'end_time',
                                                  name: '考试截止时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016648',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'end_time',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '846415',
                                                  code: 'duration',
                                                  name: '考试时长(分钟)',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016650',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '805341',
                                                  code: 'end_time_begin',
                                                  name: '考试截止时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016648-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '7756385',
                                                  code: 'id',
                                                  name: '主键',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016640',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '016523',
                                                  code: 'name',
                                                  name: '考试标题',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016641',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'name',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '2106768',
                                                  code: 'start_time_begin',
                                                  name: '考试开始时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016647-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '06138',
                                                  code: 'create_time_end',
                                                  name: '创建时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016643-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '2417717',
                                                  code: 'description',
                                                  name: '考试描述',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016646',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '359369',
                                                  code: 'state',
                                                  name: '考试状态',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016649',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'state',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '719748',
                                                  code: 'type',
                                                  name: '考试类型',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040467867271442444',
                                                  sourceId:
                                                    '1040454540625457153',
                                                  value: {
                                                    code: 'type',
                                                    type: [
                                                      'form',
                                                      'Form_1252646',
                                                      'getFieldsValue',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '492608',
                                                  code: 'update_time_begin',
                                                  name: '修改时间开始',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016645-begin-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '685473',
                                                  code: 'updator_id',
                                                  name: '修改人',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016644',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '875747',
                                                  code: 'updator_id_introduce',
                                                  name: '修改人翻译',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016644-introduce-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '1883647',
                                                  code: 'end_time_end',
                                                  name: '考试截止时间结束',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  _virtualAttrId:
                                                    '1040454540508016648-end-virtual',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '577816',
                                                  code: 'create_time',
                                                  name: '创建时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016643',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '0896792',
                                                  code: 'update_time',
                                                  name: '修改时间',
                                                  type: 'datetime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016645',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '657948',
                                                  code: 'score',
                                                  name: '总分数',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '1040454540508016651',
                                                  sourceId:
                                                    '1040454540625457153',
                                                },
                                                {
                                                  attrId: '060786',
                                                  code: 'pageNum',
                                                  name: '页数',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  value: {
                                                    code: '$data.pageInfo.pageNum$',
                                                    type: ['customize'],
                                                  },
                                                },
                                                {
                                                  attrId: '29290248',
                                                  code: 'pageSize',
                                                  name: '每页数量',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  value: {
                                                    code: 'pageSize',
                                                    type: [
                                                      'datasource',
                                                      'pageInfo',
                                                      'data',
                                                    ],
                                                  },
                                                },
                                                {
                                                  attrId: '3659173',
                                                  code: 'childNode',
                                                  name: '从表子节点',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                },
                                                {
                                                  type: 'string',
                                                  code: 'orderByAsc',
                                                  name: '正序列',
                                                  value: {
                                                    hideAttr: false,
                                                    code: '',
                                                    type: ['customize'],
                                                  },
                                                },
                                                {
                                                  type: 'string',
                                                  code: 'orderByDesc',
                                                  name: '倒序列',
                                                  value: {
                                                    hideAttr: false,
                                                    code: '',
                                                    type: ['customize'],
                                                  },
                                                },
                                              ],
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                              sync: true,
                                            },
                                            line_number: 2,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                        callback2: [],
                                      },
                                    ];
                                    eventDatashowCustomModal6.params =
                                      [
                                        {
                                          title: '事件对象',
                                          value: '$e$',
                                          name: 'e',
                                        },
                                      ] || [];
                                    CMDGenerator(
                                      eventDatashowCustomModal6,
                                      { e, item, i, rowData, rowIndex },
                                      'showCustomModal',
                                      {
                                        id: 'showCustomModal',
                                        name: 'showCustomModal',
                                        type: 'showCustomModal',
                                        platform: 'pc',
                                      },
                                    );
                                  }}
                                  ref={(r: any) => (refs['Button_572132'] = r)}
                                  {...injectData}
                                />
                                <Dropdown
                                  name={'更多'}
                                  trigger={['click']}
                                  isUsePrimary={false}
                                  clickClose={true}
                                  treeData={[
                                    {
                                      title: '删除',
                                      key: 'del',
                                      $$isParent: true,
                                      selectable: true,
                                      value: 'del',
                                      expandedIcon: {
                                        theme: 'outlined',
                                        type: 'delete',
                                      },
                                      closedIcon: {
                                        theme: 'outlined',
                                        type: 'delete',
                                      },
                                    },
                                    {
                                      title: '考题配置',
                                      key: 'ktpz',
                                      $$isParent: true,
                                      selectable: true,
                                      value: 'ktpz',
                                    },
                                    {
                                      title: '考生配置',
                                      key: 'kspz',
                                      $$isParent: true,
                                      selectable: true,
                                      value: 'kspz',
                                    },
                                    {
                                      title: '考试激活',
                                      key: 'ksjh',
                                      $$isParent: true,
                                      selectable: true,
                                      value: 'ksjh',
                                    },
                                  ]}
                                  menuType={'normal'}
                                  buttonType={'default'}
                                  placement={'bottomLeft'}
                                  size={'default'}
                                  buttonIcon={{
                                    isIconFont: false,
                                    theme: 'outlined',
                                    type: 'ellipsis',
                                  }}
                                  $$componentItem={{
                                    id: 'Dropdown_945589',
                                    uid: 'Dropdown_945589',
                                    type: 'Dropdown',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    fontSize: 13,
                                    lineHeight: 'unset',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    padding: '5px 12px',
                                    border: '1px solid #dcdde5',
                                    borderRadius: '4px',
                                  }}
                                  onClick={(key: any, url: any, node: any) => {
                                    // console 170599530761444830
                                    console.log(key);
                                    if (key == 'del') {
                                      const eventDataapiRequest3: any = [
                                        {
                                          type: 'apiRequest',
                                          dataId: 170599572431928220,
                                          options: {
                                            compId: 'apiRequest',
                                            pageJsonId: '0314043',
                                            compName: 'Page',
                                            id: '756399',
                                            params: 'object',
                                            _source: 'object',
                                            _serviceId: '10404545406254571533',
                                            _serviceTitle:
                                              '考试实例根据主键删除数据: /app/object/deleteByKey',
                                            method: 'post',
                                            url: '/app/object/deleteByKey',
                                            busiObjectId: '1040454540625457153',
                                            apiRequestSetParams: [
                                              {
                                                name: '业务对象属性值集合',
                                                code: 'attrs',
                                                attrType: 'object',
                                                type: null,
                                                children: [
                                                  {
                                                    name: '主键值',
                                                    code: 'primaryValue',
                                                    attrType: 'field',
                                                    primaryKey: true,
                                                    spec: null,
                                                    _id: 'attrs.primaryValue',
                                                    compType: 'InputNumber',
                                                    parents: ['attrs'],
                                                    id: 'attrs.primaryValue',
                                                    dataKey:
                                                      '756399_attrs.primaryValue',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '$item.id$',
                                                    },
                                                    type: 'long',
                                                    mainSourceId:
                                                      '1040454540625457153',
                                                    parentType: 'object',
                                                    parentKey: '0',
                                                    key: '0-0',
                                                  },
                                                ],
                                                primaryKey: null,
                                                spec: null,
                                                _id: 'root',
                                                compType: 'Input',
                                                isRoot: true,
                                                parents: [],
                                                id: 'attrs',
                                                dataKey: '756399_attrs',
                                                key: '0',
                                              },
                                            ],
                                            _sourceName: '考试实例',
                                            sync: false,
                                          },
                                          line_number: 3,
                                          callback1: [
                                            {
                                              type: 'showMessage',
                                              dataId: 170599572432063200,
                                              options: {
                                                pageJsonId: '0314043',
                                                compName: 'Page',
                                                id: '141197',
                                                type: 'success',
                                                value: '操作成功！',
                                              },
                                              line_number: 4,
                                            },
                                            {
                                              type: 'reloadDataSource',
                                              dataId: 170599632485473150,
                                              options: {
                                                compId: 'reloadDataSource',
                                                compName: 'system',
                                                id: '303673',
                                                pageJsonId: '0314043',
                                                dataSourceId: 169967333835294300,
                                                dataSourceName: 'LCDP_EXAMS',
                                                dataSourceRelType: 'object',
                                                dataSourceReloadFilter: [
                                                  {
                                                    attrId: '9492304',
                                                    code: 'creator_id',
                                                    name: '创建人',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016642',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '577821',
                                                    code: 'creator_id_introduce',
                                                    name: '创建人翻译',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016642-introduce-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '675272',
                                                    code: 'create_time_begin',
                                                    name: '创建时间开始',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016643-begin-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '03719236',
                                                    code: 'update_time_end',
                                                    name: '修改时间结束',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016645-end-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '624335',
                                                    code: 'start_time_end',
                                                    name: '考试开始时间结束',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016647-end-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '125663',
                                                    code: 'start_time',
                                                    name: '考试开始时间',
                                                    type: 'datetime',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016647',
                                                    sourceId:
                                                      '1040454540625457153',
                                                    value: {
                                                      code: 'start_time',
                                                      type: [
                                                        'form',
                                                        'Form_1252646',
                                                        'getFieldsValue',
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    attrId: '409998',
                                                    code: 'end_time',
                                                    name: '考试截止时间',
                                                    type: 'datetime',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016648',
                                                    sourceId:
                                                      '1040454540625457153',
                                                    value: {
                                                      code: 'end_time',
                                                      type: [
                                                        'form',
                                                        'Form_1252646',
                                                        'getFieldsValue',
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    attrId: '846415',
                                                    code: 'duration',
                                                    name: '考试时长(分钟)',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016650',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '805341',
                                                    code: 'end_time_begin',
                                                    name: '考试截止时间开始',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016648-begin-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '7756385',
                                                    code: 'id',
                                                    name: '主键',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016640',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '016523',
                                                    code: 'name',
                                                    name: '考试标题',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016641',
                                                    sourceId:
                                                      '1040454540625457153',
                                                    value: {
                                                      code: 'name',
                                                      type: [
                                                        'form',
                                                        'Form_1252646',
                                                        'getFieldsValue',
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    attrId: '2106768',
                                                    code: 'start_time_begin',
                                                    name: '考试开始时间开始',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016647-begin-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '06138',
                                                    code: 'create_time_end',
                                                    name: '创建时间结束',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016643-end-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '2417717',
                                                    code: 'description',
                                                    name: '考试描述',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016646',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '359369',
                                                    code: 'state',
                                                    name: '考试状态',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016649',
                                                    sourceId:
                                                      '1040454540625457153',
                                                    value: {
                                                      code: 'state',
                                                      type: [
                                                        'form',
                                                        'Form_1252646',
                                                        'getFieldsValue',
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    attrId: '719748',
                                                    code: 'type',
                                                    name: '考试类型',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040467867271442444',
                                                    sourceId:
                                                      '1040454540625457153',
                                                    value: {
                                                      code: 'type',
                                                      type: [
                                                        'form',
                                                        'Form_1252646',
                                                        'getFieldsValue',
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    attrId: '492608',
                                                    code: 'update_time_begin',
                                                    name: '修改时间开始',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016645-begin-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '685473',
                                                    code: 'updator_id',
                                                    name: '修改人',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016644',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '875747',
                                                    code: 'updator_id_introduce',
                                                    name: '修改人翻译',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016644-introduce-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '1883647',
                                                    code: 'end_time_end',
                                                    name: '考试截止时间结束',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    _virtualAttrId:
                                                      '1040454540508016648-end-virtual',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '577816',
                                                    code: 'create_time',
                                                    name: '创建时间',
                                                    type: 'datetime',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016643',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '0896792',
                                                    code: 'update_time',
                                                    name: '修改时间',
                                                    type: 'datetime',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016645',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '657948',
                                                    code: 'score',
                                                    name: '总分数',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '1040454540508016651',
                                                    sourceId:
                                                      '1040454540625457153',
                                                  },
                                                  {
                                                    attrId: '060786',
                                                    code: 'pageNum',
                                                    name: '页数',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    value: {
                                                      code: '$data.pageInfo.pageNum$',
                                                      type: ['customize'],
                                                    },
                                                  },
                                                  {
                                                    attrId: '29290248',
                                                    code: 'pageSize',
                                                    name: '每页数量',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    value: {
                                                      code: 'pageSize',
                                                      type: [
                                                        'datasource',
                                                        'pageInfo',
                                                        'data',
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    attrId: '3659173',
                                                    code: 'childNode',
                                                    name: '从表子节点',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                  },
                                                  {
                                                    type: 'string',
                                                    code: 'orderByAsc',
                                                    name: '正序列',
                                                    value: {
                                                      hideAttr: false,
                                                      code: '',
                                                      type: ['customize'],
                                                    },
                                                  },
                                                  {
                                                    type: 'string',
                                                    code: 'orderByDesc',
                                                    name: '倒序列',
                                                    value: {
                                                      hideAttr: false,
                                                      code: '',
                                                      type: ['customize'],
                                                    },
                                                  },
                                                ],
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
                                                sync: true,
                                              },
                                              line_number: 5,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ],
                                          callback2: [],
                                        },
                                      ];
                                      eventDataapiRequest3.params =
                                        [
                                          {
                                            title: '菜单项key',
                                            name: 'key',
                                            value: '$key$',
                                          },
                                          {
                                            title: '菜单项页面地址',
                                            name: 'url',
                                            value: '$url$',
                                          },
                                          {
                                            title: '菜单项数据',
                                            name: 'node',
                                            value: '$node.data$',
                                            attrType: 'object',
                                          },
                                        ] || [];
                                      CMDGenerator(
                                        eventDataapiRequest3,
                                        {
                                          key,
                                          url,
                                          node,
                                          item,
                                          i,
                                          rowData,
                                          rowIndex,
                                        },
                                        'apiRequest',
                                        {
                                          id: 'apiRequest',
                                          name: 'apiRequest',
                                          type: 'apiRequest',
                                          platform: 'pc',
                                        },
                                      );
                                    } else if (key == 'ktpz') {
                                      const eventDatahistory3: any = [
                                        {
                                          type: 'history',
                                          dataId: 170599582405819780,
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '437399',
                                            pageJsonId: '0314043',
                                            type: 'push',
                                            pathname: '/kaotipeizhi6839',
                                            selectedType: 'page',
                                            pageId: '1040511037455740928',
                                            modalPath: '/kaotipeizhi6839',
                                            paramsObj: { bizId: '$item.id$' },
                                            paramsObjKeyValueMap: {
                                              bizId: '$item.id$',
                                            },
                                          },
                                          line_number: 6,
                                        },
                                      ];
                                      eventDatahistory3.params =
                                        [
                                          {
                                            title: '菜单项key',
                                            name: 'key',
                                            value: '$key$',
                                          },
                                          {
                                            title: '菜单项页面地址',
                                            name: 'url',
                                            value: '$url$',
                                          },
                                          {
                                            title: '菜单项数据',
                                            name: 'node',
                                            value: '$node.data$',
                                            attrType: 'object',
                                          },
                                        ] || [];
                                      CMDGenerator(
                                        eventDatahistory3,
                                        {
                                          key,
                                          url,
                                          node,
                                          item,
                                          i,
                                          rowData,
                                          rowIndex,
                                        },
                                        'history',
                                        {
                                          id: 'history',
                                          name: 'history',
                                          type: 'history',
                                          platform: 'pc',
                                        },
                                      );
                                    } else if (key == 'ktyl') {
                                      const eventDatahistory4: any = [
                                        {
                                          type: 'history',
                                          dataId: 170599584893539780,
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '8851886',
                                            pageJsonId: '0314043',
                                            type: 'push',
                                            pathname: '/kaoshitimu9180',
                                            selectedType: 'page',
                                            pageId: '1040532731008397312',
                                            modalPath: '/kaoshitimu9180',
                                            paramsObj: { bizId: '$item.id$' },
                                            paramsObjKeyValueMap: {
                                              bizId: '$item.id$',
                                            },
                                          },
                                          line_number: 7,
                                        },
                                      ];
                                      eventDatahistory4.params =
                                        [
                                          {
                                            title: '菜单项key',
                                            name: 'key',
                                            value: '$key$',
                                          },
                                          {
                                            title: '菜单项页面地址',
                                            name: 'url',
                                            value: '$url$',
                                          },
                                          {
                                            title: '菜单项数据',
                                            name: 'node',
                                            value: '$node.data$',
                                            attrType: 'object',
                                          },
                                        ] || [];
                                      CMDGenerator(
                                        eventDatahistory4,
                                        {
                                          key,
                                          url,
                                          node,
                                          item,
                                          i,
                                          rowData,
                                          rowIndex,
                                        },
                                        'history',
                                        {
                                          id: 'history',
                                          name: 'history',
                                          type: 'history',
                                          platform: 'pc',
                                        },
                                      );
                                    } else if (key == 'kspz') {
                                      const eventDatashowCustomModal7: any = [
                                        {
                                          type: 'showCustomModal',
                                          dataId: 170599586778727900,
                                          options: {
                                            compId: 'showCustomModal',
                                            compName: 'system',
                                            id: '7586534',
                                            pageJsonId: '0314043',
                                            modalname: '/kaoshengpeizhi6102',
                                            pageId: '1052411612038131712',
                                            modalPath: '/kaoshengpeizhi6102',
                                            paramsObj: { exam_id: '$item.id$' },
                                            paramsObjKeyValueMap: {
                                              exam_id: '$item.id$',
                                            },
                                          },
                                          line_number: 8,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ];
                                      eventDatashowCustomModal7.params =
                                        [
                                          {
                                            title: '菜单项key',
                                            name: 'key',
                                            value: '$key$',
                                          },
                                          {
                                            title: '菜单项页面地址',
                                            name: 'url',
                                            value: '$url$',
                                          },
                                          {
                                            title: '菜单项数据',
                                            name: 'node',
                                            value: '$node.data$',
                                            attrType: 'object',
                                          },
                                        ] || [];
                                      CMDGenerator(
                                        eventDatashowCustomModal7,
                                        {
                                          key,
                                          url,
                                          node,
                                          item,
                                          i,
                                          rowData,
                                          rowIndex,
                                        },
                                        'showCustomModal',
                                        {
                                          id: 'showCustomModal',
                                          name: 'showCustomModal',
                                          type: 'showCustomModal',
                                          platform: 'pc',
                                        },
                                      );
                                    } else if (key == 'ksjh') {
                                      const eventDatashowModal3: any = [
                                        {
                                          type: 'showModal',
                                          dataId: 170599588658003260,
                                          options: {
                                            compId: 'showModal',
                                            compName: 'system',
                                            id: '248052',
                                            pageJsonId: '0314043',
                                            type: 'confirm',
                                            content: '确认激活当前考试',
                                            okText: '确认',
                                            cancelText: '取消',
                                          },
                                          line_number: 9,
                                          callback1: [
                                            {
                                              type: 'apiRequest',
                                              dataId: 170599588658011840,
                                              options: {
                                                compId: 'apiRequest',
                                                compName: 'system',
                                                id: '4170229',
                                                pageJsonId: '0314043',
                                                sync: false,
                                                method: 'post',
                                                url: '/app/object/updateByKey',
                                                busiObjectId:
                                                  '1040454540625457153',
                                                _source: 'object',
                                                _sourceName: '考试实例',
                                                _serviceId:
                                                  '10404545406254571535',
                                                _serviceTitle:
                                                  '考试实例根据主键更新数据: /app/object/updateByKey',
                                                valueType: 'object',
                                                params: 'object',
                                                apiRequestSetParams: [
                                                  {
                                                    name: '业务对象属性值集合',
                                                    code: 'attrs',
                                                    attrType: 'object',
                                                    type: null,
                                                    children: [
                                                      {
                                                        name: '主键',
                                                        code: 'id',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: true,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016640',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '主键',
                                                          attrCode: 'id',
                                                          compType:
                                                            'InputNumber',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542592',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 0,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType:
                                                            'integer',
                                                          dataType: '2000',
                                                          dataLength: '16',
                                                          dataScale: null,
                                                          primaryKey: 'T',
                                                          uniqueKey: 'T',
                                                          uniqueIndexCode: null,
                                                          nullable: 'F',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType:
                                                            'primary_key',
                                                          assignRuleCode: 'seq',
                                                          assignRuleObj:
                                                            'seq_lcdp_exams_id',
                                                          otherFieldRule: null,
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.id',
                                                        compType: 'InputNumber',
                                                        serviceAttrId:
                                                          '1040454540508016640',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-0',
                                                        id: 'attrs.id',
                                                        dataKey:
                                                          '4170229_attrs.id',
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$item.id$',
                                                        },
                                                      },
                                                      {
                                                        name: '考试标题',
                                                        code: 'name',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016641',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '考试标题',
                                                          attrCode: 'name',
                                                          compType: 'Input',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542593',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 1,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType: 'text',
                                                          dataType: '1000',
                                                          dataLength: '256',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'T',
                                                          systemFieldType:
                                                            'title',
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: null,
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.name',
                                                        compType: 'Input',
                                                        serviceAttrId:
                                                          '1040454540508016641',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-1',
                                                        id: 'attrs.name',
                                                        dataKey:
                                                          '4170229_attrs.name',
                                                      },
                                                      {
                                                        name: '创建人',
                                                        code: 'creator_id',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016642',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '创建人',
                                                          attrCode:
                                                            'creator_id',
                                                          compType:
                                                            'SuperSelect',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542594',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 2,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType:
                                                            'associated_field',
                                                          dataType: '2000',
                                                          dataLength: '16',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType:
                                                            'creator_id',
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          relObjectAttrId:
                                                            '1001',
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.creator_id',
                                                        compType: 'SuperSelect',
                                                        serviceAttrId:
                                                          '1040454540508016642',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-2',
                                                        id: 'attrs.creator_id',
                                                        dataKey:
                                                          '4170229_attrs.creator_id',
                                                      },
                                                      {
                                                        name: '创建人翻译',
                                                        code: 'creator_id_introduce',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016642',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '创建人',
                                                          attrCode:
                                                            'creator_id',
                                                          compType:
                                                            'SuperSelect',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'F',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542594',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 2,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType: 'text',
                                                          dataType: '2000',
                                                          dataLength: '16',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: null,
                                                          relObjectAttrId: null,
                                                          isVirtual: 'T',
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.creator_id_introduce',
                                                        compType: 'SuperSelect',
                                                        serviceAttrId:
                                                          '1040454540508016642-introduce-virtual',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-3',
                                                        id: 'attrs.creator_id_introduce',
                                                        dataKey:
                                                          '4170229_attrs.creator_id_introduce',
                                                      },
                                                      {
                                                        name: '创建时间',
                                                        code: 'create_time',
                                                        attrType: 'field',
                                                        type: 'datetime',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016643',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '创建时间',
                                                          attrCode:
                                                            'create_time',
                                                          compType:
                                                            'TimePicker',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542595',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 3,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType:
                                                            'datetime',
                                                          dataType: '3000',
                                                          dataLength: null,
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType:
                                                            'create_time',
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: null,
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.create_time',
                                                        compType: 'TimePicker',
                                                        serviceAttrId:
                                                          '1040454540508016643',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-4',
                                                        id: 'attrs.create_time',
                                                        dataKey:
                                                          '4170229_attrs.create_time',
                                                      },
                                                      {
                                                        name: '修改人',
                                                        code: 'updator_id',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016644',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '修改人',
                                                          attrCode:
                                                            'updator_id',
                                                          compType:
                                                            'SuperSelect',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542596',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 4,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType:
                                                            'associated_field',
                                                          dataType: '2000',
                                                          dataLength: '16',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType:
                                                            'updator_id',
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          relObjectAttrId:
                                                            '1001',
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.updator_id',
                                                        compType: 'SuperSelect',
                                                        serviceAttrId:
                                                          '1040454540508016644',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-5',
                                                        id: 'attrs.updator_id',
                                                        dataKey:
                                                          '4170229_attrs.updator_id',
                                                      },
                                                      {
                                                        name: '修改人翻译',
                                                        code: 'updator_id_introduce',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016644',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '修改人',
                                                          attrCode:
                                                            'updator_id',
                                                          compType:
                                                            'SuperSelect',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'F',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542596',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 4,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType: 'text',
                                                          dataType: '2000',
                                                          dataLength: '16',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: null,
                                                          relObjectAttrId: null,
                                                          isVirtual: 'T',
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.updator_id_introduce',
                                                        compType: 'SuperSelect',
                                                        serviceAttrId:
                                                          '1040454540508016644-introduce-virtual',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-6',
                                                        id: 'attrs.updator_id_introduce',
                                                        dataKey:
                                                          '4170229_attrs.updator_id_introduce',
                                                      },
                                                      {
                                                        name: '修改时间',
                                                        code: 'update_time',
                                                        attrType: 'field',
                                                        type: 'datetime',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016645',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '修改时间',
                                                          attrCode:
                                                            'update_time',
                                                          compType:
                                                            'TimePicker',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542597',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 5,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            null,
                                                          attrDataType:
                                                            'datetime',
                                                          dataType: '3000',
                                                          dataLength: null,
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType:
                                                            'update_time',
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: null,
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.update_time',
                                                        compType: 'TimePicker',
                                                        serviceAttrId:
                                                          '1040454540508016645',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-7',
                                                        id: 'attrs.update_time',
                                                        dataKey:
                                                          '4170229_attrs.update_time',
                                                      },
                                                      {
                                                        name: '考试描述',
                                                        code: 'description',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016646',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '考试描述',
                                                          attrCode:
                                                            'description',
                                                          compType: 'Input',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540562542598',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 6,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType: 'text',
                                                          dataType: '1000',
                                                          dataLength: '500',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.description',
                                                        compType: 'Input',
                                                        serviceAttrId:
                                                          '1040454540508016646',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-8',
                                                        id: 'attrs.description',
                                                        dataKey:
                                                          '4170229_attrs.description',
                                                      },
                                                      {
                                                        name: '考试开始时间',
                                                        code: 'start_time',
                                                        attrType: 'field',
                                                        type: 'datetime',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016647',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName:
                                                            '考试开始时间',
                                                          attrCode:
                                                            'start_time',
                                                          compType:
                                                            'TimePicker',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540566736896',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 7,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType:
                                                            'datetime',
                                                          dataType: '3000',
                                                          dataLength: null,
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.start_time',
                                                        compType: 'TimePicker',
                                                        serviceAttrId:
                                                          '1040454540508016647',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-9',
                                                        id: 'attrs.start_time',
                                                        dataKey:
                                                          '4170229_attrs.start_time',
                                                      },
                                                      {
                                                        name: '考试截止时间',
                                                        code: 'end_time',
                                                        attrType: 'field',
                                                        type: 'datetime',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016648',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName:
                                                            '考试截止时间',
                                                          attrCode: 'end_time',
                                                          compType:
                                                            'TimePicker',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: null,
                                                          checkCode: null,
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540566736897',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 8,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType:
                                                            'datetime',
                                                          dataType: '3000',
                                                          dataLength: null,
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.end_time',
                                                        compType: 'TimePicker',
                                                        serviceAttrId:
                                                          '1040454540508016648',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-10',
                                                        id: 'attrs.end_time',
                                                        dataKey:
                                                          '4170229_attrs.end_time',
                                                      },
                                                      {
                                                        name: '考试状态',
                                                        code: 'state',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId:
                                                            '752954877751296',
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime:
                                                            '2023-11-11 13:12:46',
                                                          statusTime:
                                                            '2023-11-11 13:12:46',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016649',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '考试状态',
                                                          attrCode: 'state',
                                                          compType:
                                                            'InputNumber',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: '1000',
                                                          checkCode:
                                                            '^(\\-|\\+)?\\d+$',
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540566736898',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 9,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType: 'short',
                                                          dataType: '2000',
                                                          dataLength: '4',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.state',
                                                        compType: 'InputNumber',
                                                        serviceAttrId:
                                                          '1040454540508016649',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-11',
                                                        id: 'attrs.state',
                                                        dataKey:
                                                          '4170229_attrs.state',
                                                        value: {
                                                          type: ['customize'],
                                                          code: '1001',
                                                        },
                                                      },
                                                      {
                                                        name: '考试时长(分钟)',
                                                        code: 'duration',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 10:35:17',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016650',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName:
                                                            '考试时长(分钟)',
                                                          attrCode: 'duration',
                                                          compType:
                                                            'InputNumber',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: '1000',
                                                          checkCode:
                                                            '^(\\-|\\+)?\\d+$',
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540566736899',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 10,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType:
                                                            'integer',
                                                          dataType: '2000',
                                                          dataLength: '8',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.duration',
                                                        compType: 'InputNumber',
                                                        serviceAttrId:
                                                          '1040454540508016650',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-12',
                                                        id: 'attrs.duration',
                                                        dataKey:
                                                          '4170229_attrs.duration',
                                                      },
                                                      {
                                                        name: '总分数',
                                                        code: 'score',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId:
                                                            '752954877751296',
                                                          createdTime:
                                                            '2023-11-11 10:35:17',
                                                          updatedTime:
                                                            '2023-11-11 11:13:35',
                                                          statusTime:
                                                            '2023-11-11 11:13:35',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040454540508016651',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '总分数',
                                                          attrCode: 'score',
                                                          compType:
                                                            'InputNumber',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: '1000',
                                                          checkCode:
                                                            '^(\\-|\\+)?\\d+$',
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040454540566736900',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 11,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType:
                                                            'integer',
                                                          dataType: '2000',
                                                          dataLength: '8',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.score',
                                                        compType: 'InputNumber',
                                                        serviceAttrId:
                                                          '1040454540508016651',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-13',
                                                        id: 'attrs.score',
                                                        dataKey:
                                                          '4170229_attrs.score',
                                                      },
                                                      {
                                                        name: '考试类型',
                                                        code: 'type',
                                                        attrType: 'field',
                                                        type: 'long',
                                                        primaryKey: false,
                                                        spec: {
                                                          statusCd: '00A',
                                                          creatorId:
                                                            '752954877751296',
                                                          updatorId: null,
                                                          createdTime:
                                                            '2023-11-11 11:28:14',
                                                          updatedTime: null,
                                                          statusTime:
                                                            '2023-11-11 11:28:14',
                                                          remark: null,
                                                          tenantCode: null,
                                                          busiObjectAttrId:
                                                            '1040467867271442444',
                                                          appId:
                                                            '1040452624180850688',
                                                          busiObjectId:
                                                            '1040454540625457153',
                                                          attrName: '考试类型',
                                                          attrCode: 'type',
                                                          compType:
                                                            'InputNumber',
                                                          staticCode: null,
                                                          attrGroupName: null,
                                                          desensitizationRuleCode:
                                                            null,
                                                          isNeedAuthControl:
                                                            null,
                                                          authCode: null,
                                                          isPersistence: 'T',
                                                          isCheck: null,
                                                          checkType: '1000',
                                                          checkCode:
                                                            '^(\\-|\\+)?\\d+$',
                                                          checkValue: null,
                                                          checkMessage: null,
                                                          appTableId:
                                                            '1040454540549959680',
                                                          tableColumnId:
                                                            '1040467867355328512',
                                                          isVerticalTableColumn:
                                                            'F',
                                                          verticalColumnId:
                                                            null,
                                                          verticalColumnCode:
                                                            null,
                                                          sort: 12,
                                                          colspanProportion:
                                                            null,
                                                          busiGroup: '1000',
                                                          defaultValue: null,
                                                          relPageUrl: null,
                                                          handlerClass: null,
                                                          isMoreShow: null,
                                                          introduceBusiObjId:
                                                            null,
                                                          introduceRelAttrCode:
                                                            null,
                                                          introduceShowAttrCode:
                                                            null,
                                                          parentAttrCode: null,
                                                          customizedAttribute:
                                                            '',
                                                          attrDataType: 'short',
                                                          dataType: '2000',
                                                          dataLength: '4',
                                                          dataScale: null,
                                                          primaryKey: 'F',
                                                          uniqueKey: 'F',
                                                          uniqueIndexCode: null,
                                                          nullable: 'T',
                                                          fuzzyQuery: 'F',
                                                          systemFieldType: null,
                                                          assignRuleCode: null,
                                                          assignRuleObj: null,
                                                          otherFieldRule: '',
                                                          relObjectAttrId: null,
                                                          isVirtual: null,
                                                          cryptoRuleCode: null,
                                                          cryptoRuleExt: null,
                                                        },
                                                        sourceId:
                                                          '1040454540625457153',
                                                        _id: 'attrs.type',
                                                        compType: 'InputNumber',
                                                        serviceAttrId:
                                                          '1040467867271442444',
                                                        parents: ['attrs'],
                                                        parentType: 'object',
                                                        parentKey: '0',
                                                        key: '0-14',
                                                        id: 'attrs.type',
                                                        dataKey:
                                                          '4170229_attrs.type',
                                                      },
                                                    ],
                                                    primaryKey: null,
                                                    spec: null,
                                                    _id: 'root',
                                                    compType: 'Input',
                                                    isRoot: true,
                                                    parents: [],
                                                    key: '0',
                                                    id: 'attrs',
                                                    dataKey: '4170229_attrs',
                                                  },
                                                ],
                                              },
                                              line_number: 10,
                                              callback1: [
                                                {
                                                  type: 'reloadDataSource',
                                                  dataId: 170599633414826800,
                                                  options: {
                                                    compId: 'reloadDataSource',
                                                    compName: 'system',
                                                    id: '6018183',
                                                    pageJsonId: '0314043',
                                                    dataSourceId: 169967333835294300,
                                                    dataSourceName:
                                                      'LCDP_EXAMS',
                                                    dataSourceRelType: 'object',
                                                    dataSourceReloadFilter: [
                                                      {
                                                        attrId: '9492304',
                                                        code: 'creator_id',
                                                        name: '创建人',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016642',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '577821',
                                                        code: 'creator_id_introduce',
                                                        name: '创建人翻译',
                                                        type: 'string',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016642-introduce-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '675272',
                                                        code: 'create_time_begin',
                                                        name: '创建时间开始',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016643-begin-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '03719236',
                                                        code: 'update_time_end',
                                                        name: '修改时间结束',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016645-end-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '624335',
                                                        code: 'start_time_end',
                                                        name: '考试开始时间结束',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016647-end-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '125663',
                                                        code: 'start_time',
                                                        name: '考试开始时间',
                                                        type: 'datetime',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016647',
                                                        sourceId:
                                                          '1040454540625457153',
                                                        value: {
                                                          code: 'start_time',
                                                          type: [
                                                            'form',
                                                            'Form_1252646',
                                                            'getFieldsValue',
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        attrId: '409998',
                                                        code: 'end_time',
                                                        name: '考试截止时间',
                                                        type: 'datetime',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016648',
                                                        sourceId:
                                                          '1040454540625457153',
                                                        value: {
                                                          code: 'end_time',
                                                          type: [
                                                            'form',
                                                            'Form_1252646',
                                                            'getFieldsValue',
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        attrId: '846415',
                                                        code: 'duration',
                                                        name: '考试时长(分钟)',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016650',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '805341',
                                                        code: 'end_time_begin',
                                                        name: '考试截止时间开始',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016648-begin-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '7756385',
                                                        code: 'id',
                                                        name: '主键',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016640',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '016523',
                                                        code: 'name',
                                                        name: '考试标题',
                                                        type: 'string',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016641',
                                                        sourceId:
                                                          '1040454540625457153',
                                                        value: {
                                                          code: 'name',
                                                          type: [
                                                            'form',
                                                            'Form_1252646',
                                                            'getFieldsValue',
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        attrId: '2106768',
                                                        code: 'start_time_begin',
                                                        name: '考试开始时间开始',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016647-begin-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '06138',
                                                        code: 'create_time_end',
                                                        name: '创建时间结束',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016643-end-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '2417717',
                                                        code: 'description',
                                                        name: '考试描述',
                                                        type: 'string',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016646',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '359369',
                                                        code: 'state',
                                                        name: '考试状态',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016649',
                                                        sourceId:
                                                          '1040454540625457153',
                                                        value: {
                                                          code: 'state',
                                                          type: [
                                                            'form',
                                                            'Form_1252646',
                                                            'getFieldsValue',
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        attrId: '719748',
                                                        code: 'type',
                                                        name: '考试类型',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040467867271442444',
                                                        sourceId:
                                                          '1040454540625457153',
                                                        value: {
                                                          code: 'type',
                                                          type: [
                                                            'form',
                                                            'Form_1252646',
                                                            'getFieldsValue',
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        attrId: '492608',
                                                        code: 'update_time_begin',
                                                        name: '修改时间开始',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016645-begin-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '685473',
                                                        code: 'updator_id',
                                                        name: '修改人',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016644',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '875747',
                                                        code: 'updator_id_introduce',
                                                        name: '修改人翻译',
                                                        type: 'string',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016644-introduce-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '1883647',
                                                        code: 'end_time_end',
                                                        name: '考试截止时间结束',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        _virtualAttrId:
                                                          '1040454540508016648-end-virtual',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '577816',
                                                        code: 'create_time',
                                                        name: '创建时间',
                                                        type: 'datetime',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016643',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '0896792',
                                                        code: 'update_time',
                                                        name: '修改时间',
                                                        type: 'datetime',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016645',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '657948',
                                                        code: 'score',
                                                        name: '总分数',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        sourceAttrId:
                                                          '1040454540508016651',
                                                        sourceId:
                                                          '1040454540625457153',
                                                      },
                                                      {
                                                        attrId: '060786',
                                                        code: 'pageNum',
                                                        name: '页数',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          code: '$data.pageInfo.pageNum$',
                                                          type: ['customize'],
                                                        },
                                                      },
                                                      {
                                                        attrId: '29290248',
                                                        code: 'pageSize',
                                                        name: '每页数量',
                                                        type: 'long',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          code: 'pageSize',
                                                          type: [
                                                            'datasource',
                                                            'pageInfo',
                                                            'data',
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        attrId: '3659173',
                                                        code: 'childNode',
                                                        name: '从表子节点',
                                                        type: 'string',
                                                        sort: { isSort: true },
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        type: 'string',
                                                        code: 'orderByAsc',
                                                        name: '正序列',
                                                        value: {
                                                          hideAttr: false,
                                                          code: '',
                                                          type: ['customize'],
                                                        },
                                                      },
                                                      {
                                                        type: 'string',
                                                        code: 'orderByDesc',
                                                        name: '倒序列',
                                                        value: {
                                                          hideAttr: false,
                                                          code: '',
                                                          type: ['customize'],
                                                        },
                                                      },
                                                    ],
                                                    otherObjectArrayOptions: {},
                                                    targetDataSourcePaths: [],
                                                    sync: true,
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
                                      ];
                                      eventDatashowModal3.params =
                                        [
                                          {
                                            title: '菜单项key',
                                            name: 'key',
                                            value: '$key$',
                                          },
                                          {
                                            title: '菜单项页面地址',
                                            name: 'url',
                                            value: '$url$',
                                          },
                                          {
                                            title: '菜单项数据',
                                            name: 'node',
                                            value: '$node.data$',
                                            attrType: 'object',
                                          },
                                        ] || [];
                                      CMDGenerator(
                                        eventDatashowModal3,
                                        {
                                          key,
                                          url,
                                          node,
                                          item,
                                          i,
                                          rowData,
                                          rowIndex,
                                        },
                                        'showModal',
                                        {
                                          id: 'showModal',
                                          name: 'showModal',
                                          type: 'showModal',
                                          platform: 'pc',
                                        },
                                      );
                                    }
                                  }}
                                  ref={(r: any) =>
                                    (refs['Dropdown_945589'] = r)
                                  }
                                  {...injectData}
                                />
                              </View>
                            </View>
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
            <View
              name={'普通容器66'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_279373',
                uid: 'View_279373',
                type: 'View',
                ...componentItem,
              }}
              disabled={`${data?.LCDP_EXAMS?.list?.length ? 2 : 1}` === '3'}
              visible={`${data?.LCDP_EXAMS?.list?.length ? 2 : 1}` !== '2'}
              readOnly={`${data?.LCDP_EXAMS?.list?.length ? 2 : 1}` === '4'}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
              ref={(r: any) => (refs['View_279373'] = r)}
              {...injectData}
            >
              <Img
                name={'图片'}
                srcType={'fileCode'}
                alt={'图片'}
                fileCode={'PIC_300815'}
                $$componentItem={{
                  id: 'Img_356763',
                  uid: 'Img_356763',
                  type: 'Img',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: '0F', height: 'fit-content' }}
                ref={(r: any) => (refs['Img_356763'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'暂无数据'}
                textType={'span'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_019173',
                  uid: 'Text_019173',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_019173'] = r)}
                {...injectData}
              />
            </View>
          </View>
          <Pagination
            name={'分页'}
            size={'small'}
            pageSize={data?.pageInfo?.pageSize}
            current={data?.pageInfo?.pageNum}
            showTotal={true}
            simple={false}
            showSizeChanger={true}
            showQuickJumper={true}
            total={data?.LCDP_EXAMS?.total || 0}
            pageSizeOptions={'[5,10,20]'}
            $$componentItem={{
              id: 'Pagination_752968',
              uid: 'Pagination_752968',
              type: 'Pagination',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '5px 5px 5px 5px', marginLeft: 'auto' }}
            onPageChange={(page: any, pageSize: any) => {
              // console 170375171043213100
              console.log(data?.$_pageInfo);
              const eventDatasetDataSource: any = [
                {
                  type: 'setDataSource',
                  dataId: 170478914382247580,
                  options: {
                    compId: 'setDataSource',
                    compName: 'system',
                    id: '785395',
                    pageJsonId: '639733',
                    dataSourceId: 170599609824314900,
                    dataSourceName: 'pageInfo',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '828819',
                        code: 'pageSize',
                        name: 'pageSize',
                        type: 'string',
                        initialData: { type: 'static', value: '10' },
                        showInput: true,
                        value: { type: ['context', '$pageSize$'], code: '' },
                        _codePath: ['pageSize'],
                        _idpath: ['828819'],
                      },
                      {
                        attrId: '8952627',
                        code: 'pageNum',
                        name: 'pageNum',
                        type: 'string',
                        initialData: { type: 'static', value: '1' },
                        showInput: true,
                        value: { type: ['context', '$page$'], code: '' },
                        _codePath: ['pageNum'],
                        _idpath: ['8952627'],
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
                      type: 'reloadDataSource',
                      dataId: 170599618072094900,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'system',
                        id: '80256',
                        pageJsonId: '0314043',
                        dataSourceId: 169967333835294300,
                        dataSourceName: 'LCDP_EXAMS',
                        dataSourceRelType: 'object',
                        dataSourceReloadFilter: [
                          {
                            attrId: '9492304',
                            code: 'creator_id',
                            name: '创建人',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016642',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '577821',
                            code: 'creator_id_introduce',
                            name: '创建人翻译',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId:
                              '1040454540508016642-introduce-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '675272',
                            code: 'create_time_begin',
                            name: '创建时间开始',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016643-begin-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '03719236',
                            code: 'update_time_end',
                            name: '修改时间结束',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016645-end-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '624335',
                            code: 'start_time_end',
                            name: '考试开始时间结束',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016647-end-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '125663',
                            code: 'start_time',
                            name: '考试开始时间',
                            type: 'datetime',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016647',
                            sourceId: '1040454540625457153',
                            value: {
                              code: 'start_time',
                              type: ['form', 'Form_1252646', 'getFieldsValue'],
                            },
                          },
                          {
                            attrId: '409998',
                            code: 'end_time',
                            name: '考试截止时间',
                            type: 'datetime',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016648',
                            sourceId: '1040454540625457153',
                            value: {
                              code: 'end_time',
                              type: ['form', 'Form_1252646', 'getFieldsValue'],
                            },
                          },
                          {
                            attrId: '846415',
                            code: 'duration',
                            name: '考试时长(分钟)',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016650',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '805341',
                            code: 'end_time_begin',
                            name: '考试截止时间开始',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016648-begin-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '7756385',
                            code: 'id',
                            name: '主键',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016640',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '016523',
                            code: 'name',
                            name: '考试标题',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016641',
                            sourceId: '1040454540625457153',
                            value: {
                              code: 'name',
                              type: ['form', 'Form_1252646', 'getFieldsValue'],
                            },
                          },
                          {
                            attrId: '2106768',
                            code: 'start_time_begin',
                            name: '考试开始时间开始',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016647-begin-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '06138',
                            code: 'create_time_end',
                            name: '创建时间结束',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016643-end-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '2417717',
                            code: 'description',
                            name: '考试描述',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016646',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '359369',
                            code: 'state',
                            name: '考试状态',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016649',
                            sourceId: '1040454540625457153',
                            value: {
                              code: 'state',
                              type: ['form', 'Form_1252646', 'getFieldsValue'],
                            },
                          },
                          {
                            attrId: '719748',
                            code: 'type',
                            name: '考试类型',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040467867271442444',
                            sourceId: '1040454540625457153',
                            value: {
                              code: 'type',
                              type: ['form', 'Form_1252646', 'getFieldsValue'],
                            },
                          },
                          {
                            attrId: '492608',
                            code: 'update_time_begin',
                            name: '修改时间开始',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016645-begin-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '685473',
                            code: 'updator_id',
                            name: '修改人',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016644',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '875747',
                            code: 'updator_id_introduce',
                            name: '修改人翻译',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId:
                              '1040454540508016644-introduce-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '1883647',
                            code: 'end_time_end',
                            name: '考试截止时间结束',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            _virtualAttrId: '1040454540508016648-end-virtual',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '577816',
                            code: 'create_time',
                            name: '创建时间',
                            type: 'datetime',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016643',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '0896792',
                            code: 'update_time',
                            name: '修改时间',
                            type: 'datetime',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016645',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '657948',
                            code: 'score',
                            name: '总分数',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '1040454540508016651',
                            sourceId: '1040454540625457153',
                          },
                          {
                            attrId: '060786',
                            code: 'pageNum',
                            name: '页数',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              code: '$data.pageInfo.pageNum$',
                              type: ['customize'],
                            },
                          },
                          {
                            attrId: '29290248',
                            code: 'pageSize',
                            name: '每页数量',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              code: 'pageSize',
                              type: ['datasource', 'pageInfo', 'data'],
                            },
                          },
                          {
                            attrId: '3659173',
                            code: 'childNode',
                            name: '从表子节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                          },
                          {
                            type: 'string',
                            code: 'orderByAsc',
                            name: '正序列',
                            value: {
                              hideAttr: false,
                              code: '',
                              type: ['customize'],
                            },
                          },
                          {
                            type: 'string',
                            code: 'orderByDesc',
                            name: '倒序列',
                            value: {
                              hideAttr: false,
                              code: '',
                              type: ['customize'],
                            },
                          },
                        ],
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                        sync: true,
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource.params =
                [
                  {
                    title: '当前页码取值',
                    name: 'page',
                    value: '$page$',
                    attrType: 'number',
                  },
                  {
                    title: '当前页尺寸',
                    name: 'pageSize',
                    value: '$pageSize$',
                    attrType: 'number',
                  },
                ] || [];
              CMDGenerator(
                eventDatasetDataSource,
                { page, pageSize },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Pagination_752968'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Xinbankaoshishouye5627$$Page, {
  pageId: '1066920654087147520',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
