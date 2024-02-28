// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Input,
  Select,
  TextArea,
  DatePicker,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '990866780278415360';
const ClsCp_0017_0001Cost$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal48: any = [
      {
        type: 'closeModal',
        dataId: '906329_1',
        options: { compId: 'page', compName: 'page', id: '166269' },
        line_number: 1,
      },
    ];
    eventDatacloseModal48.params = [] || [];
    CMDGenerator(eventDatacloseModal48, {}, 'closeModal', {
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
    // console 168791996061152670
    console.log('====1+N+N 资费state======', state);
    const eventDatasetCurrentFormValues1: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 168785840295950850,
        options: {
          compId: 'Form_721236',
          compLib: 'comm',
          pageJsonId: '5517586',
          compName: 'Form',
          id: '877206',
          params: '$state.formData$',
        },
        line_number: 2,
      },
    ];
    eventDatasetCurrentFormValues1.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues1, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDatacustomActionCode261: any = [
      {
        type: 'customActionCode',
        dataId: 168800434097915300,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '246017',
          pageJsonId: '5517586',
          actionTitle: '表格数据回填',
          code: 'function main(data,state,success,fail){var result=[];if(state.formData&&state.formData.Parameter&&state.formData.Parameter.length>0){result=state.formData.Parameter.map(function(item){return Object.assign(item,item.parameterRules)})}success(result)};',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 168800443554058300,
            options: {
              compId: 'Table_250964',
              compLib: 'comm',
              pageJsonId: '5517586',
              compName: 'Table',
              id: '4083977',
              data: '$data_246017$',
              current: '1',
              total: '$data_246017r.length$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode261.params = [] || [];
    CMDGenerator(eventDatacustomActionCode261, {}, 'customActionCode', {
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
      className="__CustomClass_5517586__"
    >
      <View
        className="View_View_5517586_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_5517586_1',
          uid: 'View_5517586_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_5517586_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={'9'}
          wrapperCol={15}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_721236'}
          $$componentItem={{
            id: 'Form_721236',
            uid: 'Form_721236',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 16px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_721236')}
          {...injectData}
        >
          <Input
            name={'资费计划标识'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
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
            fieldName={'ratePlanID'}
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
              id: 'Input_991502',
              uid: 'Input_991502',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_991502')}
            {...injectData}
          />
          <Input
            name={'资费计划名称'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
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
            fieldName={'ratePlanName'}
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
              id: 'Input_402144',
              uid: 'Input_402144',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_402144')}
            {...injectData}
          />
          <Select
            name={'资费类别'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={2}
            fieldName={'ratePlanSort'}
            $$componentItem={{
              id: 'Select_032717',
              uid: 'Select_032717',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_032717')}
            {...injectData}
          />
          <TextArea
            name={'资费描述'}
            selfSpan={24}
            labelCol={'3'}
            wrapperCol={21}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={3}
            fieldName={'Description'}
            $$componentItem={{
              id: 'TextArea_8760378',
              uid: 'TextArea_8760378',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_8760378')}
            {...injectData}
          />
          <Input
            name={'资费周期类型'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
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
            fieldName={'platformChargeType'}
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
              id: 'Input_253171',
              uid: 'Input_253171',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_253171')}
            {...injectData}
          />
          <Input
            name={'交付方式'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
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
            fieldName={'deliveryMethod'}
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
              id: 'Input_724239',
              uid: 'Input_724239',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_724239')}
            {...injectData}
          />
          <View
            className="View_View_657823"
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            labels={[]}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_657823',
              uid: 'View_657823',
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
                formItemIndex: 6,
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
            ref={(r: any) => refs.setComponentRef(r, 'View_657823')}
            {...injectData}
          />
          <Input
            name={'叠加包周期'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={7}
            fieldName={'packetPeriod'}
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
              id: 'Input_3773636',
              uid: 'Input_3773636',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_3773636')}
            {...injectData}
          />
          <Select
            name={'资费计划类型'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={8}
            fieldName={'ratePlanType'}
            $$componentItem={{
              id: 'Select_841245',
              uid: 'Select_841245',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_841245')}
            {...injectData}
          />
          <Input
            name={'省内资费编码'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={9}
            fieldName={'ratePlanProvID'}
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
              id: 'Input_9594916',
              uid: 'Input_9594916',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_9594916')}
            {...injectData}
          />
          <DatePicker
            name={'期望生效时间'}
            timeMode={'date'}
            format={'YYYY-MM-DD'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            formItemIndex={10}
            fieldName={'startDate'}
            $$componentItem={{
              id: 'DatePicker_932592',
              uid: 'DatePicker_932592',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            defaultValue={{}}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'DatePicker_932592')}
            {...injectData}
          />
          <DatePicker
            name={'期望失效时间'}
            timeMode={'date'}
            format={'YYYY-MM-DD'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            formItemIndex={11}
            fieldName={'endDate'}
            $$componentItem={{
              id: 'DatePicker_54731925',
              uid: 'DatePicker_54731925',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            defaultValue={{}}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'DatePicker_54731925')}
            {...injectData}
          />
          <Select
            name={'操作类型'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={12}
            fieldName={'Action'}
            $$componentItem={{
              id: 'Select_420895',
              uid: 'Select_420895',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_420895')}
            {...injectData}
          />
        </Form>
        <Table
          name={'表格'}
          isFlexColumn={false}
          extendNum={3}
          adjustModel={'auto'}
          pageSize={10}
          current={1}
          tableTitle={'表格名称'}
          headBtnNum={3}
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
              title: '参数编码',
              dataIndex: 'parameterNumber',
              key: 'column1',
              className: '',
              id: '5482174',
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
              title: '参数名',
              dataIndex: 'parameterName',
              key: 'column2',
              className: 'divider',
              id: '659193',
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
              title: '参数单位',
              dataIndex: 'parameterUnit',
              key: 'column3',
              className: 'divider',
              id: '147927',
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
              title: '参数是否可变更',
              dataIndex: 'canModify',
              key: 'column4',
              className: 'divider',
              id: '570179',
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
              id: '7839855',
              dataIndex: 'defaultValue',
              title: '参数默认值',
              key: '7839855',
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
              type: 'staticCol',
              id: '3602581',
              dataIndex: 'maxValue',
              title: '参数最大长度',
              key: '3602581',
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
              type: 'staticCol',
              id: '260005',
              dataIndex: 'minValue',
              title: '参数最小长度',
              key: '260005',
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
              type: 'staticCol',
              id: '386324',
              title: '输入框要显示的填写说明',
              dataIndex: 'placeHolder',
              key: '386324',
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
              type: 'staticCol',
              id: '7592053',
              title: '参数备注',
              dataIndex: 'remark',
              key: '7592053',
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
              type: 'staticCol',
              id: '222803',
              title: '参数描述',
              dataIndex: 'parameterDesc',
              key: '222803',
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
          customNum={3}
          rowKey={'key'}
          $$componentItem={{
            id: 'Table_250964',
            uid: 'Table_250964',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Table_250964')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0017_0001Cost$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    formData: '',
    title: '',
  },
});
