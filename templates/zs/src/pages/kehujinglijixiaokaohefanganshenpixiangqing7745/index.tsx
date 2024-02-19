// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Table, TextArea, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Kehujinglijixiaokaohefanganshenpixiangqing7745$$Modal: React.FC<
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
  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal40: any = [
      {
        type: 'closeModal',
        dataId: '1878214_1',
        options: { compId: 'page', compName: 'page', id: '165699' },
        line_number: 1,
      },
    ];
    eventDatacloseModal40.params = [] || [];
    CMDGenerator(eventDatacloseModal40, {}, 'closeModal', {
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
    const eventDatacustomActionCode259: any = [
      {
        type: 'customActionCode',
        dataId: 168017940987371420,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '255151',
          pageJsonId: '687791',
          code: 'function main(data,state,success,fail){data.formData=state.feeInfo;data.quotaConfigInfoList=state.feeInfo.quotaConfigInfoList;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168017946356558050,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '127448',
              pageJsonId: '687791',
              dataSourceId: 168017906544640350,
              dataSourceName: 'formData',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '2309644',
                  code: 'checkProject',
                  name: '考核项目',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9489846',
                  code: 'targetValue',
                  name: '目标值',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '0425401',
                  code: 'fullMarksValue',
                  name: '满分值',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9551903',
                  code: 'checkBore',
                  name: '考核口径',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 168017964988690240,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '755812',
              pageJsonId: '687791',
              dataSourceId: 168017953451279360,
              dataSourceName: 'quotaConfigInfoList',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '487757',
                  code: 'cityName',
                  name: '归属地市',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '295407',
                  code: 'userName',
                  name: '人员姓名',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9746961',
                  code: 'quotaValue',
                  name: '指标值',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode259.params = [] || [];
    CMDGenerator(eventDatacustomActionCode259, {}, 'customActionCode', {
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
      className="__CustomClass_687791__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_687791_1',
          uid: 'View_687791_1',
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
        ref={(r: any) => (refs['View_687791_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_9453773',
            uid: 'View_9453773',
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
            margin: '0px 0px 12px 0px',
          }}
          ref={(r: any) => (refs['View_9453773'] = r)}
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
            formCode={'Form_506804'}
            relationDataSource={data?.formData}
            busiObjectId={''}
            fieldName={'formData'}
            $$componentItem={{
              id: 'Form_506804',
              uid: 'Form_506804',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 8px 0px' }}
            ref={(r: any) => (refs['Form_506804'] = r)}
            {...injectData}
          >
            <Input
              name={'考核项目'}
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
              formItemIndex={0}
              fieldName={'checkProject'}
              value={data?.formData?.checkProject}
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
                id: 'Input_968695',
                uid: 'Input_968695',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_968695'] = r)}
              {...injectData}
            />
            <Input
              name={'输入框'}
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
              formItemIndex={1}
              fieldName={'1'}
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
                id: 'Input_38268',
                uid: 'Input_38268',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_38268'] = r)}
              {...injectData}
            />
            <Input
              name={'目标值'}
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
              formItemIndex={2}
              fieldName={'targetValue'}
              value={data?.formData?.targetValue}
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
                id: 'Input_968695_010072',
                uid: 'Input_968695_010072',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_968695_010072'] = r)}
              {...injectData}
            />
            <Input
              name={'满分值'}
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
              formItemIndex={3}
              fieldName={'fullMarksValue'}
              value={data?.formData?.fullMarksValue}
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
                id: 'Input_968695_235303',
                uid: 'Input_968695_235303',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_968695_235303'] = r)}
              {...injectData}
            />
          </Form>
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_506804'}
            busiObjectId={''}
            fieldName={'formData'}
            $$componentItem={{
              id: 'Form_506804_052913',
              uid: 'Form_506804_052913',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_506804_052913'] = r)}
            {...injectData}
          >
            <TextArea
              name={'考核口径'}
              selfSpan={''}
              labelCol={'4'}
              wrapperCol={20}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'checkBore'}
              value={data?.formData?.checkBore}
              $$componentItem={{
                id: 'TextArea_35215',
                uid: 'TextArea_35215',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_35215'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <Table
          name={'表格'}
          isFlexColumn={false}
          extendNum={3}
          adjustModel={'auto'}
          pageSize={5}
          current={1}
          tableTitle={'指标配置明细'}
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
              title: '地市',
              key: 'cityName',
              dataIndex: 'cityName',
              className: '',
              id: '7844714',
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
              title: '姓名',
              key: 'userName',
              dataIndex: 'userName',
              className: 'divider',
              id: '59630505',
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
              title: '指标值',
              key: 'quotaValue',
              dataIndex: 'quotaValue',
              className: 'divider',
              id: '941686',
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
          page={true}
          rowKeyType={'auto'}
          editMode={'single'}
          selectType={'checkbox'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={undefined}
          showHead={true}
          showTotal={false}
          showSizeChanger={true}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          customNum={3}
          dataSource={data?.quotaConfigInfoList}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.quotaConfigInfoList'}
          $$componentItem={{
            id: 'Table_32729',
            uid: 'Table_32729',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => (refs['Table_32729'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(
  Kehujinglijixiaokaohefanganshenpixiangqing7745$$Modal,
  {
    pageId: '958700622213050368',
    hasLogin: false,
    dataSource,
    defaultState: { bizId: '', sceneCode: '', feeInfo: '' },
  },
);
