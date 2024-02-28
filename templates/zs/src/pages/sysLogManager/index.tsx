// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Select,
  Input,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '984380475535167488';
const SysLogManager$$Page: React.FC<PageProps> = ({
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
  const refresh_table = (options_763614: any) => {
    const eventDatasetLoading29: any = [
      {
        type: 'setLoading',
        dataId: 166450031887347520,
        options: {
          compId: 'Table_833694',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Table',
          id: '0058102',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading29.params =
      [
        {
          title: '事件入参',
          name: 'options_763614',
          value: '$options_763614$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading29, { options_763614 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource40: any = [
      {
        type: 'reloadDataSource',
        dataId: 166537097940409950,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '367424',
          pageJsonId: '302536',
          dataSourceId: 168630236470528000,
          dataSourceName: 'qrySysLogPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '670191',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '158392',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '817316',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '5800733',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '654994',
                  code: 'logType',
                  name: 'logType',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.logType',
                  value: {
                    type: ['form', 'Form_2804244', 'getFieldsValue'],
                    code: 'logType',
                  },
                },
                {
                  attrId: '902345',
                  code: 'logModule',
                  name: 'logModule',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.logModule',
                  value: {
                    type: ['form', 'Form_2804244', 'getFieldsValue'],
                    code: 'logModule',
                  },
                },
                {
                  attrId: '751409',
                  code: 'logContent',
                  name: 'logContent',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.logContent',
                  value: {
                    type: ['form', 'Form_2804244', 'getFieldsValue'],
                    code: 'logContent',
                  },
                },
                {
                  attrId: '533816',
                  code: 'createStaffName',
                  name: 'createStaffName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.createStaffName',
                  value: {
                    type: ['form', 'Form_2804244', 'getFieldsValue'],
                    code: 'createStaffName',
                  },
                },
                {
                  attrId: '748983',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  key: 'body.pageNum',
                },
                {
                  attrId: '2212774',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '10' },
                  key: 'body.pageSize',
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166537103659258940,
            options: {
              compId: 'Table_833694',
              compLib: 'comm',
              pageJsonId: '302536',
              compName: 'Table',
              id: '868221',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166537105713669660,
            options: {
              compId: 'Table_833694',
              compLib: 'comm',
              pageJsonId: '302536',
              compName: 'Table',
              id: '8205145',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource40.params =
      [
        {
          title: '事件入参',
          name: 'options_763614',
          value: '$options_763614$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource40,
      { options_763614 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refresh_table,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_302536__"
    >
      <View
        className="View_View_302536_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_302536_1',
          uid: 'View_302536_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_302536_1')}
        {...injectData}
      >
        <Card
          name={'日志列表'}
          cardIconType={'middle'}
          title={'日志列表'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          extend={[]}
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
            id: 'Card_11411',
            uid: 'Card_11411',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_11411')}
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
            formCode={'Form_2804244'}
            $$componentItem={{
              id: 'Form_2804244',
              uid: 'Form_2804244',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_2804244')}
            {...injectData}
          >
            <Select
              name={'日志类型'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'logType'}
              formItemIndex={0}
              allowClear={true}
              dataSource={[
                { id: '4847096', label: '新增', value: '1001' },
                { id: '568318', label: '修改', value: '1002' },
                { id: '58144', label: '删除', value: '1003' },
              ]}
              $$componentItem={{
                id: 'Input_881668',
                uid: 'Input_881668',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_881668')}
              {...injectData}
            />
            <Input
              name={'日志模块'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'logModule'}
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
                id: 'Input_5254568',
                uid: 'Input_5254568',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc653: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168630413873032640,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '6098005',
                      pageJsonId: '302536',
                      customFuncName: 'refresh_table',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc653.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc653, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5254568')}
              {...injectData}
            />
            <View
              className="View_View_432067"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_432067',
                uid: 'View_432067',
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
                  formItemIndex: 2,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_432067')}
              {...injectData}
            />
            <Input
              name={'日志内容'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
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
              fieldName={'logContent'}
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
                id: 'Input_736686',
                uid: 'Input_736686',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc654: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168630415179157800,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '698233',
                      pageJsonId: '302536',
                      customFuncName: 'refresh_table',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc654.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc654, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_736686')}
              {...injectData}
            />
            <Input
              name={'创建人名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
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
              fieldName={'createStaffName'}
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
                id: 'Input_064485',
                uid: 'Input_064485',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc655: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168630419347634400,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '591628',
                      pageJsonId: '302536',
                      customFuncName: 'refresh_table',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc655.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc655, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_064485')}
              {...injectData}
            />
            <View
              className="View_View_131191"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_131191',
                uid: 'View_131191',
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
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_131191')}
              {...injectData}
            >
              <Button
                name={'查询'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'primary'}
                formItemIndex={3}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_7271396',
                  uid: 'Button_7271396',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc656: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166452136409338620,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '4488067',
                        pageJsonId: '302536',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc656.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc656,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_7271396')}
                {...injectData}
              />
              <Button
                name={'重置'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'default'}
                formItemIndex={4}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_5706071',
                  uid: 'Button_5706071',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const forms154 = getFormByCompId('Form_2804244', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms154) ? forms154 : [forms154]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDatacallSelfFunc657: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 168630273337668930,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '022613',
                        pageJsonId: '302536',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc657.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc657,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_5706071')}
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'total'}
            isFlexColumn={true}
            pageSize={7}
            current={data?.qrySysLogPage?.resultData?.current}
            tableTitle={'表格名称'}
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
                title: 'ID',
                key: 'sysLogId',
                dataIndex: 'sysLogId',
                className: '',
                id: '8088075',
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
                title: '日志类型',
                key: 'logType',
                dataIndex: 'logType',
                className: 'divider',
                id: '7617336',
                staticDataSource: [
                  { id: '79894', label: '新增', value: '1001' },
                  { id: '708604', label: '修改', value: '1002' },
                  { id: '4721682', label: '删除', value: '1003' },
                ],
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
                title: '日志模块',
                key: 'logModule',
                dataIndex: 'logModule',
                className: 'divider',
                id: '79524',
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
                title: '日志内容',
                key: 'logContent',
                dataIndex: 'logContent',
                className: 'divider',
                id: '0317775',
                lineNum: 1,
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
                title: '创建人名称',
                dataIndex: 'createStaffName',
                key: 'createStaffName',
                edittype: 'string',
                id: '058634',
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
                title: '创建员工',
                key: 'createStaff',
                dataIndex: 'createStaff',
                className: 'divider',
                id: '2063652',
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
                key: 'createDate',
                dataIndex: 'createDate',
                className: 'divider',
                id: '8271817',
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
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={true}
            rowSelection={undefined}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'sysLogId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '704245',
                checked: true,
              },
            ]}
            extend={[]}
            dataSource={data?.qrySysLogPage?.resultData?.records}
            fieldName={'data.qryAbilityServiceInfoPage.resultData.total'}
            total={data?.qrySysLogPage?.resultData?.total}
            actionWidth={50}
            hiddenAction={false}
            dataSourceFromDataSourceConfig={
              'data.qrySysLogPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_833694',
              uid: 'Table_833694',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '16px 16px 16px 16px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource108: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166444499254809280,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '6621153',
                    pageJsonId: '302536',
                    dataSourceId: 168630236470528000,
                    dataSourceName: 'qrySysLogPage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '670191',
                        code: 'header',
                        name: '请求头参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        key: 'header',
                        _codePath: ['header'],
                        _idpath: ['670191'],
                      },
                      {
                        attrId: '158392',
                        code: 'path',
                        name: '请求路径参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        key: 'path',
                        _codePath: ['path'],
                        _idpath: ['158392'],
                      },
                      {
                        attrId: '817316',
                        code: 'query',
                        name: 'URL 参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        key: 'query',
                        _codePath: ['query'],
                        _idpath: ['817316'],
                      },
                      {
                        attrId: '5800733',
                        code: 'body',
                        name: '请求体',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        children: [
                          {
                            attrId: '654994',
                            code: 'logType',
                            name: 'logType',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.logType',
                            value: {
                              type: ['form', 'Form_2804244', 'getFieldsValue'],
                              code: 'logType',
                            },
                            _codePath: ['body', 'logType'],
                            _idpath: ['5800733', '654994'],
                          },
                          {
                            attrId: '902345',
                            code: 'logModule',
                            name: 'logModule',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.logModule',
                            value: {
                              type: ['form', 'Form_2804244', 'getFieldsValue'],
                              code: 'logModule',
                            },
                            _codePath: ['body', 'logModule'],
                            _idpath: ['5800733', '902345'],
                          },
                          {
                            attrId: '751409',
                            code: 'logContent',
                            name: 'logContent',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.logContent',
                            value: {
                              type: ['form', 'Form_2804244', 'getFieldsValue'],
                              code: 'logContent',
                            },
                            _codePath: ['body', 'logContent'],
                            _idpath: ['5800733', '751409'],
                          },
                          {
                            attrId: '533816',
                            code: 'createStaffName',
                            name: 'createStaffName',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.createStaffName',
                            value: {
                              type: ['form', 'Form_2804244', 'getFieldsValue'],
                              code: 'createStaffName',
                            },
                            _codePath: ['body', 'createStaffName'],
                            _idpath: ['5800733', '533816'],
                          },
                          {
                            attrId: '748983',
                            code: 'pageNum',
                            name: 'pageNum',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '1' },
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                            _codePath: ['body', 'pageNum'],
                            _idpath: ['5800733', '748983'],
                          },
                          {
                            attrId: '2212774',
                            code: 'pageSize',
                            name: 'pageSize',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '7' },
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                            _codePath: ['body', 'pageSize'],
                            _idpath: ['5800733', '2212774'],
                          },
                        ],
                        key: 'body',
                        _codePath: ['body'],
                        _idpath: ['5800733'],
                      },
                    ],
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatareloadDataSource108.params =
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
                eventDatareloadDataSource108,
                { page, pageSize },
                'reloadDataSource',
                {
                  id: 'reloadDataSource',
                  name: 'reloadDataSource',
                  type: 'reloadDataSource',
                  platform: 'pc',
                },
              );
            }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal240: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168630263767499780,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '53391228',
                    pageJsonId: '302536',
                    modalname: '/rizhiguanlitanchuang6205',
                    pageId: '984385291984474112',
                    modalPath: '/rizhiguanlitanchuang6205',
                    paramsObj: { logInfo: '$row$' },
                    paramsObjKeyValueMap: { logInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal240.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatashowCustomModal240,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            onRowDoubleClick={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal241: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168630259509852100,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '6565333',
                    pageJsonId: '302536',
                    modalname: '/rizhiguanlitanchuang6205',
                    pageId: '984385291984474112',
                    modalPath: '/rizhiguanlitanchuang6205',
                    paramsObj: { logInfo: '$row$' },
                    paramsObjKeyValueMap: { logInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal241.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatashowCustomModal241,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_833694')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(SysLogManager$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
