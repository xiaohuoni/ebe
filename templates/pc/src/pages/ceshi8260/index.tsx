// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  Button,
  DatePicker,
  Form,
  RangePicker,
  Table,
  TimePicker,
  View,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1024261720265998336';
const Ceshi8260$$Page: React.FC<PageProps> = ({
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
  const callFunctionTest = (options_856815: any) => {
    // console 170841413251678100
    console.log('父级事件调用成功');
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    callFunctionTest,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_057343__"
    >
      <View
        className="View_View_057343_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_057343_1',
          uid: 'View_057343_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_057343_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          layout={'vertical'}
          colon={true}
          labelAlign={'right'}
          colSpace={16}
          rowSpace={16}
          formCode={'Code_Form_369024'}
          $$componentItem={{
            id: 'Form_369024',
            uid: 'Form_369024',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_369024')}
          {...injectData}
        >
          <DatePicker
            name={'日期选择'}
            timeMode={'date'}
            size={'default'}
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
            format={'YYYY-MM-DD'}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            allowClear={true}
            formItemIndex={0}
            fieldName={'1221'}
            $$componentItem={{
              id: 'DatePicker_05751',
              uid: 'DatePicker_05751',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'DatePicker_05751')}
            {...injectData}
          />
          <TimePicker
            name={'时间选择'}
            size={'default'}
            showNow={true}
            selfSpan={''}
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
            formItemIndex={1}
            fieldName={'asdsa'}
            $$componentItem={{
              id: 'TimePicker_563977',
              uid: 'TimePicker_563977',
              type: 'TimePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TimePicker_563977')}
            {...injectData}
          />
          <RangePicker
            name={'时间段选择'}
            timeMode={'date'}
            separator={'~'}
            size={'default'}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            format={'YYYY-MM-DD'}
            pickerType={'RangePicker'}
            allowClear={true}
            formItemIndex={2}
            fieldName={'adss'}
            $$componentItem={{
              id: 'RangePicker_616162',
              uid: 'RangePicker_616162',
              type: 'RangePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'RangePicker_616162')}
            {...injectData}
          />
        </Form>
        <Pageview
          name={'页面容器'}
          pageViewCompState={{}}
          pageSrc={'/cdd5883'}
          pageId={'1028120483871506432'}
          style={{ height: 'auto', width: '100%' }}
          ref={(r: any) => refs.setComponentRef(r, 'Pageview_017745')}
          {...injectData}
          parentEngineId={parentEngineId}
        />
        <Table
          name={'表格'}
          headBtnNum={3}
          isFlexColumn={false}
          extendNum={3}
          pageSize={data?.lcdp_domain_user?.pageSize}
          current={data?.lcdp_domain_user?.pageNum}
          expandIconPosition={'left'}
          adjustModel={'auto'}
          tableTitle={'表格名称'}
          columns={[
            {
              title: '用户ID',
              key: 'user_id',
              dataIndex: 'user_id',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'InputNumber',
                selectoption: {
                  attr: { attrName: '用户ID', attrId: '1001', attrNbr: null },
                },
              },
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
              title: '用户名称',
              key: 'user_name',
              dataIndex: 'user_name',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '用户名称', attrId: '1002', attrNbr: null },
                },
              },
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
              title: '用户类型',
              key: 'user_type',
              dataIndex: 'user_type',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'InputNumber',
                selectoption: {
                  attr: { attrName: '用户类型', attrId: '1003', attrNbr: null },
                },
              },
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
              title: '手机',
              key: 'phone_no',
              dataIndex: 'phone_no',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '手机', attrId: '1004', attrNbr: null },
                },
              },
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
              title: '邮箱',
              key: 'email',
              dataIndex: 'email',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '邮箱', attrId: '1005', attrNbr: null },
                },
              },
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
              title: '密码',
              key: 'password',
              dataIndex: 'password',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '密码', attrId: '1006', attrNbr: null },
                },
              },
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
              title: '组织ID',
              key: 'org_id',
              dataIndex: 'org_id',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'InputNumber',
                selectoption: {
                  attr: { attrName: '组织ID', attrId: '1007', attrNbr: null },
                },
              },
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
              title: '创建人',
              key: 'creator_id',
              dataIndex: 'creator_id',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'InputNumber',
                selectoption: {
                  attr: { attrName: '创建人', attrId: '1008', attrNbr: null },
                },
              },
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
              title: '创建时间',
              key: 'created_time',
              dataIndex: 'created_time',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'TimePicker',
                selectoption: {
                  attr: { attrName: '创建时间', attrId: '1009', attrNbr: null },
                },
              },
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
              title: '状态',
              key: 'status_cd',
              dataIndex: 'status_cd',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '状态', attrId: '1010', attrNbr: null },
                },
              },
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
              title: '状态时间',
              key: 'status_time',
              dataIndex: 'status_time',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'TimePicker',
                selectoption: {
                  attr: { attrName: '状态时间', attrId: '1011', attrNbr: null },
                },
              },
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
              title: '修改人',
              key: 'updator_id',
              dataIndex: 'updator_id',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'InputNumber',
                selectoption: {
                  attr: { attrName: '修改人', attrId: '1012', attrNbr: null },
                },
              },
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
              title: '修改时间',
              key: 'updated_time',
              dataIndex: 'updated_time',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'TimePicker',
                selectoption: {
                  attr: { attrName: '修改时间', attrId: '1013', attrNbr: null },
                },
              },
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
              title: '备注',
              key: 'remark',
              dataIndex: 'remark',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '备注', attrId: '1014', attrNbr: null },
                },
              },
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
              title: '真实名称',
              key: 'real_name',
              dataIndex: 'real_name',
              titleLineNum: 1,
              lineNum: 1,
              editoption: {
                edittype: 'Input',
                selectoption: {
                  attr: { attrName: '真实名称', attrId: '1015', attrNbr: null },
                },
              },
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
          rowKeyType={'specified'}
          editMode={'single'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={{ type: 'radio' }}
          showHead={false}
          showTotal={true}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          showCustom={{
            hasCustom: false,
            customTitle: '自定义列',
            iconPosition: 'left',
            customStyle: 'default',
          }}
          customNum={3}
          dataSourceLoading={false}
          dataSource={data?.lcdp_domain_user?.list}
          total={data?.lcdp_domain_user?.total}
          rowKey={'user_id'}
          headExtends={[]}
          extend={[]}
          dataSourceFromDataSourceConfig={'data.lcdp_domain_user.list'}
          $$componentItem={{
            id: 'Table_2219999',
            uid: 'Table_2219999',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          onPageChange={(
            page: any,
            pageSize: any,
            ascendCol: any,
            descendCol: any,
          ) => {
            const eventDatareloadDataSource: any = [
              {
                type: 'reloadDataSource',
                dataId: 170849890403807800,
                options: {
                  pageJsonId: '057343',
                  compName: 'Page',
                  id: '749898',
                  dataSourceId: 170849889242777300,
                  dataSourceName: 'lcdp_domain_user',
                  dataSourceRelType: 'object',
                  dataSourceReloadFilter: [
                    {
                      attrId: '7420343',
                      code: 'user_id',
                      name: '用户ID',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1001',
                      sourceId: '1001',
                      value: {
                        code: 'user_id',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '172249',
                      code: 'remark',
                      name: '备注',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1014',
                      sourceId: '1001',
                      value: {
                        code: 'remark',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '862053',
                      code: 'status_time_end',
                      name: '状态时间结束',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1011-end-virtual',
                      sourceId: '1001',
                      value: {
                        code: 'status_time_end',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '97914727',
                      code: 'creator_id',
                      name: '创建人',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1008',
                      sourceId: '1001',
                      value: {
                        code: 'creator_id',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '0919507',
                      code: 'updated_time',
                      name: '修改时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1013',
                      sourceId: '1001',
                      value: {
                        code: 'updated_time',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '120606',
                      code: 'email',
                      name: '邮箱',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1005',
                      sourceId: '1001',
                      value: {
                        code: 'email',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '5461388',
                      code: 'password',
                      name: '密码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1006',
                      sourceId: '1001',
                      value: {
                        code: 'password',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '906774',
                      code: 'created_time_end',
                      name: '创建时间结束',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1009-end-virtual',
                      sourceId: '1001',
                      value: {
                        code: 'created_time_end',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '8331047',
                      code: 'updated_time_end',
                      name: '修改时间结束',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1013-end-virtual',
                      sourceId: '1001',
                      value: {
                        code: 'updated_time_end',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '8617574',
                      code: 'status_time_begin',
                      name: '状态时间开始',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1011-begin-virtual',
                      sourceId: '1001',
                      value: {
                        code: 'status_time_begin',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '305509',
                      code: 'user_name',
                      name: '用户名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1002',
                      sourceId: '1001',
                      value: {
                        code: 'user_name',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '833545',
                      code: 'user_type',
                      name: '用户类型',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1003',
                      sourceId: '1001',
                      value: {
                        code: 'user_type',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '525358',
                      code: 'created_time',
                      name: '创建时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1009',
                      sourceId: '1001',
                      value: {
                        code: 'created_time',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '198992',
                      code: 'status_cd',
                      name: '状态',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1010',
                      sourceId: '1001',
                      value: {
                        code: 'status_cd',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '589858',
                      code: 'org_id',
                      name: '组织ID',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1007',
                      sourceId: '1001',
                      value: {
                        code: 'org_id',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '8377828',
                      code: 'created_time_begin',
                      name: '创建时间开始',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1009-begin-virtual',
                      sourceId: '1001',
                      value: {
                        code: 'created_time_begin',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '648431',
                      code: 'updated_time_begin',
                      name: '修改时间开始',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _virtualAttrId: '1013-begin-virtual',
                      sourceId: '1001',
                      value: {
                        code: 'updated_time_begin',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '8369379',
                      code: 'phone_no',
                      name: '手机',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1004',
                      sourceId: '1001',
                      value: {
                        code: 'phone_no',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '272358',
                      code: 'real_name',
                      name: '真实名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1015',
                      sourceId: '1001',
                      value: {
                        code: 'real_name',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '079216',
                      code: 'status_time',
                      name: '状态时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1011',
                      sourceId: '1001',
                      value: {
                        code: 'status_time',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '947528',
                      code: 'updator_id',
                      name: '修改人',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '1012',
                      sourceId: '1001',
                      value: {
                        code: 'updator_id',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                    {
                      attrId: '775332',
                      code: 'pageNum',
                      name: '页数',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      mainSourceId: '1001',
                      value: { code: '', type: ['context', '$page$'] },
                    },
                    {
                      attrId: '4427763',
                      code: 'pageSize',
                      name: '每页数量',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      mainSourceId: '1001',
                      value: { code: '', type: ['context', '$pageSize$'] },
                    },
                    {
                      attrId: '382356',
                      code: 'childNode',
                      name: '从表子节点',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      mainSourceId: '1001',
                      value: {
                        code: 'childNode',
                        type: ['datasource', 'lcdp_domain_user', 'filterData'],
                      },
                    },
                  ],
                  _dataSourceReloadFilter: { code: '', type: ['customize'] },
                  sync: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatareloadDataSource.params =
              [
                {
                  title: '当前页码',
                  name: 'page',
                  value: '$page$',
                  attrType: 'number',
                },
                {
                  title: '当前每页条数',
                  name: 'pageSize',
                  value: '$pageSize$',
                  attrType: 'number',
                },
                { title: '正序字段', name: 'ascendCol', value: '$ascendCol$' },
                {
                  title: '倒序字段',
                  name: 'descendCol',
                  value: '$descendCol$',
                },
              ] || [];
            CMDGenerator(
              eventDatareloadDataSource,
              { page, pageSize, ascendCol, descendCol },
              'reloadDataSource',
              {
                id: 'reloadDataSource',
                name: 'reloadDataSource',
                type: 'reloadDataSource',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Table_2219999')}
          {...injectData}
        />
        <Popover
          page={{
            pagePath: '/qipao9952',
            pageId: '1077467890419003392',
            pageName: 'qipao',
            options: [
              { name: '业务主键', code: 'bizId' },
              { name: '业务场景', code: 'sceneCode' },
              { name: '业务数据', code: 'bizData' },
            ],
            tipType: '1',
            trigger: 'hover',
          }}
          id={'Button_778372'}
          {...injectData}
          parentEngineId={parentEngineId}
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
            btnText={'气泡'}
            $$componentItem={{
              id: 'Button_778372',
              uid: 'Button_778372',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ textAlign: 'center' }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_778372')}
            {...injectData}
          />
        </Popover>
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
          btnText={'调用自己'}
          $$componentItem={{
            id: 'Button_106325',
            uid: 'Button_106325',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatacallSelfFunc: any = [
              {
                type: 'callSelfFunc',
                dataId: 170848424025387420,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '7715386',
                  pageJsonId: '057343',
                  customFuncParams: 'object',
                  customFuncName: 'callFunctionTest',
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallSelfFunc.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatacallSelfFunc, { e }, 'callSelfFunc', {
              id: 'callSelfFunc',
              name: 'callSelfFunc',
              type: 'callSelfFunc',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Button_106325')}
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
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'打开弹窗'}
          $$componentItem={{
            id: 'Button_920658',
            uid: 'Button_920658',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatashowCustomModal: any = [
              {
                type: 'showCustomModal',
                dataId: 170848637018408540,
                options: {
                  compId: 'showCustomModal',
                  compName: 'system',
                  id: '23562',
                  pageJsonId: '057343',
                  modalname: '/modal0804',
                  pageId: '1077431851017072640',
                  modalPath: '/modal0804',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'closeModal',
                    dataId: 170848639918487040,
                    options: {
                      compId: 'closeModal',
                      compName: 'system',
                      id: '1691886',
                      pageJsonId: '057343',
                    },
                    line_number: 2,
                  },
                ],
                callback2: [
                  {
                    type: 'closeModal',
                    dataId: 170848640494115650,
                    options: {
                      compId: 'closeModal',
                      compName: 'system',
                      id: '30948',
                      pageJsonId: '057343',
                    },
                    line_number: 3,
                  },
                ],
              },
            ];
            eventDatashowCustomModal.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatashowCustomModal, { e }, 'showCustomModal', {
              id: 'showCustomModal',
              name: 'showCustomModal',
              type: 'showCustomModal',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Button_920658')}
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
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_0960666',
            uid: 'Button_0960666',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatagetTableSelected: any = [
              {
                type: 'getTableSelected',
                dataId: 170849895473863970,
                options: {
                  compId: 'Table_2219999',
                  compLib: 'comm',
                  pageJsonId: '057343',
                  compName: 'Table',
                  id: '479279',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170849896224767040,
                    options: {
                      compId: 'console',
                      compName: 'system',
                      id: '213066',
                      pageJsonId: '057343',
                      value: ['$selectedRows_479279[0]$'],
                    },
                    line_number: 2,
                  },
                ],
                callback2: [],
              },
            ];
            eventDatagetTableSelected.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatagetTableSelected, { e }, 'getTableSelected', {
              id: 'getTableSelected',
              name: 'getTableSelected',
              type: 'getTableSelected',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Button_0960666')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ceshi8260$$Page, {
  pageId,
  hasLogin: true,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
