// 注意: 出码模块正在调试
import React from 'react';

import {
  Form,
  Input,
  InputNumber,
  QuillEditor,
  Select,
  TimePicker,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Chaxunfenyeshuju_7915695modal$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
}) => {
  const onOk = () => {
    if (state?.sceneCode == 'VV') {
      const eventDatacloseModal3: any = [
        {
          type: 'closeModal',
          dataId: 169967344117356770,
          options: {
            compId: 'closeModal',
            pageJsonId: '0314043',
            compName: 'Page',
            id: '35645',
          },
          line_number: 2,
        },
      ];
      eventDatacloseModal3.params = [] || [];
      CMDGenerator(eventDatacloseModal3, {}, 'closeModal', {
        id: 'closeModal',
        name: 'closeModal',
        type: 'closeModal',
        platform: 'pc',
      });
    }
    if (state?.sceneCode != 'VV') {
      const eventDatapostObjectData: any = [
        {
          type: 'postObjectData',
          dataId: 169967344117373340,
          options: {
            compId: 'postObjectData',
            compName: 'system',
            id: '284942',
            pageJsonId: '49456',
            sync: false,
            hasEventExtService: 'F',
            postDataSource: ['LCDP_EXAMS'],
          },
          line_number: 4,
          callback1: [
            {
              type: 'showMessage',
              dataId: 169967344117377150,
              options: {
                pageJsonId: '49456',
                compName: 'Page',
                id: '625558',
                type: 'success',
                value: '操作成功',
              },
              line_number: 5,
            },
            {
              type: 'closeModal',
              dataId: 169967344117356740,
              options: {
                compId: 'closeModal',
                pageJsonId: '0314043',
                compName: 'Page',
                id: '200215',
              },
              line_number: 6,
            },
            {
              type: 'okCallbackData',
              dataId: 169967344117318530,
              options: {
                compId: 'okCallbackData',
                compName: 'system',
                id: '7040865',
                pageJsonId: '0314043',
              },
              line_number: 7,
            },
          ],
          callback2: [
            {
              type: 'showMessage',
              dataId: 169967344117362270,
              options: {
                pageJsonId: '49456',
                compName: 'Page',
                id: '2921767',
                type: 'error',
                value: '提交失败',
              },
              line_number: 8,
            },
          ],
        },
      ];
      eventDatapostObjectData.params = [] || [];
      CMDGenerator(eventDatapostObjectData, {}, 'postObjectData', {
        id: 'postObjectData',
        name: 'postObjectData',
        type: 'postObjectData',
        platform: 'pc',
      });
    }
  };

  const onCancel = () => {
    const eventDatacloseModal4: any = [
      {
        type: 'closeModal',
        dataId: 169967344117286270,
        options: {
          compId: 'closeModal',
          pageJsonId: '0314043',
          compName: 'Page',
          id: '4544612',
        },
        line_number: 1,
      },
    ];
    eventDatacloseModal4.params = [] || [];
    CMDGenerator(eventDatacloseModal4, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'pc',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    if (state?.sceneCode == 'VV') {
      const eventDatasysSetDisable: any = [
        {
          type: 'sysSetDisable',
          dataId: 169967344117399940,
          options: {
            compId: ['Form_3672555'],
            pageJsonId: '0314043',
            compName: 'system',
            id: '8342987',
            compValueList: { Form_3672555: 'true' },
            compid: ['Form_3672555'],
          },
          line_number: 2,
        },
      ];
      eventDatasysSetDisable.params = [] || [];
      CMDGenerator(eventDatasysSetDisable, {}, 'sysSetDisable', {
        id: 'sysSetDisable',
        name: 'sysSetDisable',
        type: 'sysSetDisable',
        platform: 'pc',
      });
    }

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_49456__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor' }}
        $$componentItem={{
          id: 'View_53688',
          uid: 'View_53688',
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
          overflowY: 'auto',
          height: '543px',
        }}
        ref={(r: any) => (refs['View_53688'] = r)}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={24}
          labelCol={'4'}
          wrapperCol={'18'}
          layout={'horizontal'}
          colon={true}
          labelAlign={'left'}
          colSpace={0}
          rowSpace={16}
          genRuleType={'object'}
          formType={'normal'}
          busiObjectId={'1040454540625457153'}
          relationDataSource={data?.LCDP_EXAMS}
          $$componentItem={{
            id: 'Form_3672555',
            uid: 'Form_3672555',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '20px 16px 20px 16px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource2: any = [
              {
                type: 'setDataSource',
                dataId: 169967342064298340,
                options: {
                  compId: 'setDataSource',
                  compName: 'system',
                  id: '002213',
                  pageJsonId: '49456',
                  dataSourceId: 169967333873908770,
                  dataSourceName: 'LCDP_EXAMS',
                  dataSourceRelType: 'object',
                  dataSourceSetValue: [
                    {
                      attrId: '471035',
                      code: 'id',
                      name: '主键',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016640',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '831098',
                      code: 'name',
                      name: '考试标题',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016641',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'name',
                      },
                    },
                    {
                      attrId: '129888',
                      code: 'creator_id',
                      name: '创建人',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016642',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '948019',
                      code: 'creator_id_introduce',
                      name: '创建人翻译',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1040454540508016642-introduce-virtual',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '126466',
                      code: 'create_time',
                      name: '创建时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016643',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '32760387',
                      code: 'updator_id',
                      name: '修改人',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016644',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '986007',
                      code: 'updator_id_introduce',
                      name: '修改人翻译',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1040454540508016644-introduce-virtual',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '022852',
                      code: 'update_time',
                      name: '修改时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016645',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '856417',
                      code: 'description',
                      name: '考试描述',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016646',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'description',
                      },
                    },
                    {
                      attrId: '9227775',
                      code: 'start_time',
                      name: '考试开始时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016647',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'start_time',
                      },
                    },
                    {
                      attrId: '1902202',
                      code: 'end_time',
                      name: '考试截止时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016648',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'end_time',
                      },
                    },
                    {
                      attrId: '470867',
                      code: 'state',
                      name: '考试状态',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016649',
                      sourceId: '1040454540625457153',
                    },
                    {
                      attrId: '1390985',
                      code: 'duration',
                      name: '考试时长(分钟)',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016650',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'duration',
                      },
                    },
                    {
                      attrId: '094605',
                      code: 'score',
                      name: '总分数',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040454540508016651',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'score',
                      },
                    },
                    {
                      attrId: '131333417',
                      code: 'type',
                      name: '考试类型',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1040467867271442444',
                      sourceId: '1040454540625457153',
                      value: {
                        type: ['form', 'Form_3672555', 'getFieldsValue'],
                        code: 'type',
                      },
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource2.params =
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
              eventDatasetDataSource2,
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
          ref={(r: any) => (refs['Form_3672555'] = r)}
          {...injectData}
        >
          <Input
            name={'考试标题'}
            size={'default'}
            labelCol={4}
            wrapperCol={20}
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
            hidden={false}
            showMore={false}
            defaultValue={null}
            attr={{}}
            value={data?.LCDP_EXAMS?.name}
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
            formItemIndex={0}
            selfSpan={24}
            $$componentItem={{
              id: 'Input_name_350046',
              uid: 'Input_name_350046',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_name_350046'] = r)}
            {...injectData}
          />
          <QuillEditor
            name={'考试描述'}
            heightType={'fixed'}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            selfSpan={24}
            labelCol={4}
            wrapperCol={20}
            height={200}
            imageType={'file'}
            fieldName={'description'}
            value={data?.LCDP_EXAMS?.description}
            formItemIndex={1}
            $$componentItem={{
              id: 'Input_description_680033',
              uid: 'Input_description_680033',
              type: 'QuillEditor',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_description_680033'] = r)}
            {...injectData}
          />
          <Select
            name={'考试类型'}
            size={'default'}
            labelCol={4}
            wrapperCol={20}
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
            selfSpan={24}
            value={data?.LCDP_EXAMS?.type}
            formItemIndex={2}
            dataSource={attrDataMap['exam_type']}
            $$componentItem={{
              id: 'InputNumber_type_549601',
              uid: 'InputNumber_type_549601',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['InputNumber_type_549601'] = r)}
            {...injectData}
          />
          <TimePicker
            name={'考试开始时间'}
            size={'default'}
            selfSpan={24}
            labelCol={4}
            wrapperCol={20}
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
            hidden={false}
            showMore={false}
            defaultValue={null}
            attr={{}}
            value={data?.LCDP_EXAMS?.start_time}
            formItemIndex={3}
            $$componentItem={{
              id: 'TimePicker_start_time_869324',
              uid: 'TimePicker_start_time_869324',
              type: 'TimePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['TimePicker_start_time_869324'] = r)}
            {...injectData}
          />
          <TimePicker
            name={'考试截止时间'}
            size={'default'}
            selfSpan={24}
            labelCol={4}
            wrapperCol={20}
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
            hidden={false}
            showMore={false}
            defaultValue={null}
            attr={{}}
            value={data?.LCDP_EXAMS?.end_time}
            formItemIndex={4}
            $$componentItem={{
              id: 'TimePicker_end_time_722612',
              uid: 'TimePicker_end_time_722612',
              type: 'TimePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['TimePicker_end_time_722612'] = r)}
            {...injectData}
          />
          <InputNumber
            name={'考试时长(分钟)'}
            size={'default'}
            labelCol={4}
            wrapperCol={20}
            step={1}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            min={1}
            formatting={''}
            fieldName={'duration'}
            hidden={false}
            showMore={false}
            defaultValue={null}
            attr={{}}
            value={data?.LCDP_EXAMS?.duration}
            formItemIndex={5}
            selfSpan={24}
            max={120}
            $$componentItem={{
              id: 'InputNumber_duration_2110427',
              uid: 'InputNumber_duration_2110427',
              type: 'InputNumber',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['InputNumber_duration_2110427'] = r)}
            {...injectData}
          />
          <InputNumber
            name={'总分数'}
            size={'default'}
            labelCol={4}
            wrapperCol={20}
            step={1}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            min={1}
            formatting={''}
            fieldName={'score'}
            hidden={false}
            showMore={false}
            defaultValue={null}
            attr={{}}
            value={data?.LCDP_EXAMS?.score}
            formItemIndex={6}
            selfSpan={24}
            max={200}
            $$componentItem={{
              id: 'InputNumber_score_701078',
              uid: 'InputNumber_score_701078',
              type: 'InputNumber',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['InputNumber_score_701078'] = r)}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Chaxunfenyeshuju_7915695modal$$Modal, {
  pageId: '1040468589346041856',
  hasLogin: true,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
