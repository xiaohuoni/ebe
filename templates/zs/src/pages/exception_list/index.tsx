// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Table,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const ExceptionList$$Page: React.FC<PageProps> = ({
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
  const 刷新分页 = (options_2822727: any) => {
    const eventDatasetLoading4: any = [
      {
        type: 'setLoading',
        dataId: 167962855104597380,
        options: {
          compId: 'Table_5254274_122',
          compLib: 'comm',
          pageJsonId: '5254274',
          compName: 'Table',
          id: '5125554',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading4.params =
      [
        {
          title: '事件入参',
          name: 'options_2822727',
          value: '$options_2822727$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading4, { options_2822727 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDataclearTableSelected: any = [
      {
        type: 'clearTableSelected',
        dataId: 167963745327949500,
        options: {
          compId: 'Table_5254274_122',
          compLib: 'comm',
          pageJsonId: '5254274',
          compName: 'Table',
          id: '0991',
        },
        line_number: 2,
      },
    ];
    eventDataclearTableSelected.params =
      [
        {
          title: '事件入参',
          name: 'options_2822727',
          value: '$options_2822727$',
        },
      ] || [];
    CMDGenerator(
      eventDataclearTableSelected,
      { options_2822727 },
      'clearTableSelected',
      {
        id: 'clearTableSelected',
        name: 'clearTableSelected',
        type: 'clearTableSelected',
        platform: 'undefined',
      },
    );
    const forms = getFormByCompId('Form_7756987_259648_631751_665634', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms) ? forms : [forms]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatagetCurrentFormValues: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 167962856721388380,
        options: {
          compId: 'Form_7756987_259648_251493',
          compLib: 'comm',
          pageJsonId: '5254274',
          compName: 'Form',
          id: '6462475',
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadDataSource',
            dataId: 170608820470639400,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '314054',
              pageJsonId: '5254274',
              dataSourceId: 167962741017368060,
              dataSourceName: 'exceptionInstPage',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '596074',
                  code: 'header',
                  name: '请求头参数',
                  type: 'object',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '786397',
                  code: 'path',
                  name: '请求路径参数',
                  type: 'object',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '869621',
                  code: 'query',
                  name: 'URL 参数',
                  type: 'object',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '858785',
                  code: 'body',
                  name: '请求体',
                  type: 'object',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  children: [
                    {
                      attrId: '008703056',
                      code: 'methodCode',
                      name: 'methodCode',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$Form_7756987_259648_251493$'],
                        code: 'methodCode',
                      },
                    },
                    {
                      attrId: '7419725',
                      code: 'busiObjNbr',
                      name: 'busiObjNbr',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$Form_7756987_259648_251493$'],
                        code: 'busiObjNbr',
                      },
                    },
                    {
                      attrId: '895312',
                      code: 'traceId',
                      name: '新增节点',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$Form_7756987_259648_251493$'],
                        code: 'traceId',
                      },
                    },
                    {
                      attrId: '1491',
                      code: 'exceptionStatus',
                      name: 'exceptionStatus',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '00A' },
                      value: {
                        type: ['context', '$Form_7756987_259648_251493$'],
                        code: 'exceptionStatus',
                      },
                    },
                    {
                      attrId: '29549',
                      code: 'pageSize',
                      name: 'pageSize',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '5' },
                      value: { type: ['customize'], code: '5' },
                    },
                    {
                      attrId: '293828',
                      code: 'exceptionContent',
                      name: '异常内容',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$Form_7756987_259648_251493$'],
                        code: 'exceptionContent',
                      },
                    },
                    {
                      attrId: '013747',
                      code: 'pageNum',
                      name: 'pageNum',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '1' },
                      value: {
                        type: ['context', '$options_2822727$'],
                        code: 'pageNum',
                      },
                    },
                  ],
                },
              ],
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 5,
            callback1: [
              {
                type: 'setLoading',
                dataId: 170608822284622940,
                options: {
                  compId: 'Table_5254274_122',
                  compLib: 'comm',
                  pageJsonId: '5254274',
                  compName: 'Table',
                  id: '330206',
                  loading: false,
                },
                line_number: 6,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 170608823139697660,
                options: {
                  compId: 'Table_5254274_122',
                  compLib: 'comm',
                  pageJsonId: '5254274',
                  compName: 'Table',
                  id: '78698',
                  loading: false,
                },
                line_number: 7,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues.params =
      [
        {
          title: '事件入参',
          name: 'options_2822727',
          value: '$options_2822727$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues,
      { options_2822727 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    刷新分页,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_5254274__"
    >
      <View
        name={'布局容器'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_5254274_1',
          uid: 'View_5254274_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{ minHeight: '100%' }}
        ref={(r: any) => (refs['View_5254274_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_5254274_11',
            uid: 'View_5254274_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            padding: '12px 20px 12px 20px',
            lineHeight: '24px',
            boxShadow: '0 -1px 0 0 #E5E5E5 inset',
          }}
          ref={(r: any) => (refs['View_5254274_11'] = r)}
          {...injectData}
        >
          <Text
            name={'页面名称'}
            content={'异常管理'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_5254274_111',
              uid: 'Text_5254274_111',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#1c242e',
              lineHeight: '24px',
            }}
            ref={(r: any) => (refs['Text_5254274_111'] = r)}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_5254274_12',
            uid: 'View_5254274_12',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            padding: '20px 20px 16px 20px',
          }}
          ref={(r: any) => (refs['View_5254274_12'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_5254274_121',
              uid: 'View_5254274_121',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              border: '1px solid transparent',
              flexDirection: 'column',
            }}
            ref={(r: any) => (refs['View_5254274_121'] = r)}
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
              formCode={'Form_7756987'}
              $$componentItem={{
                id: 'Form_7756987_259648_251493',
                uid: 'Form_7756987_259648_251493',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_7756987_259648_251493'] = r)}
              {...injectData}
            >
              <Input
                name={'日志跟踪ID'}
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
                fieldName={'traceId'}
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
                  id: 'Input_8704715',
                  uid: 'Input_8704715',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc174: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 168981860105747870,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '282269',
                        pageJsonId: '5254274',
                        customFuncName: '刷新分页',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc174.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc174,
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
                ref={(r: any) => (refs['Input_8704715'] = r)}
                {...injectData}
              />
              <Select
                name={'异常状态'}
                size={'default'}
                selfSpan={8}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                formItemIndex={1}
                fieldName={'exceptionStatus'}
                defaultValue={'00A'}
                dataSource={getStaticDataSourceService(
                  data?.exceptionStatusList?.resultData,
                  'attrValueName',
                  'attrValue',
                )}
                $$componentItem={{
                  id: 'Select_953604_715414',
                  uid: 'Select_953604_715414',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Select_953604_715414'] = r)}
                {...injectData}
              />
              <Input
                name={'异常内容'}
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
                fieldName={'exceptionContent'}
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
                  id: 'Input_1680794',
                  uid: 'Input_1680794',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc175: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 169992621904057250,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '635917',
                        pageJsonId: '8383459',
                        customFuncName: '刷新分页',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc175.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc175,
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
                ref={(r: any) => (refs['Input_1680794'] = r)}
                {...injectData}
              />
              <Input
                name={'方法编码'}
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
                formItemIndex={4}
                fieldName={'methodCode'}
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
                  id: 'Input_650422_201996_997685',
                  uid: 'Input_650422_201996_997685',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc176: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166671258219248900,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '8695752',
                        pageJsonId: '8383459',
                        customFuncName: '刷新分页',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc176.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc176,
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
                ref={(r: any) => (refs['Input_650422_201996_997685'] = r)}
                {...injectData}
              />
              <Input
                name={'业务编码'}
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
                formItemIndex={5}
                fieldName={'busiObjNbr'}
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
                  id: 'Input_984985_229345_21446956',
                  uid: 'Input_984985_229345_21446956',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc177: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166671259378888060,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '80086',
                        pageJsonId: '8383459',
                        customFuncName: '刷新分页',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc177.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc177,
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
                ref={(r: any) => (refs['Input_984985_229345_21446956'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_756929_0062074_3365063',
                  uid: 'View_756929_0062074_3365063',
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
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  textAlign: 'center',
                }}
                ref={(r: any) => (refs['View_756929_0062074_3365063'] = r)}
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
                  labelCol={8}
                  wrapperCol={16}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_508625_7684763_529381',
                    uid: 'Button_508625_7684763_529381',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc178: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 16796287029014462,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '806968',
                          pageJsonId: '5254274',
                          customFuncName: '刷新分页',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '1' },
                          paramsObjKeyValueMap: { pageNum: '1' },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc178.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc178,
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
                  ref={(r: any) => (refs['Button_508625_7684763_529381'] = r)}
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
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_228714_24039_42666',
                    uid: 'Button_228714_24039_42666',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                  onClick={(e: any) => {
                    const forms19 = getFormByCompId(
                      'Form_7756987_259648_251493',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms19) ? forms19 : [forms19]).forEach(
                      (form) => form?.resetFields(),
                    );
                  }}
                  ref={(r: any) => (refs['Button_228714_24039_42666'] = r)}
                  {...injectData}
                />
              </View>
            </Form>
          </View>
          <Table
            name={'表格'}
            columns={[
              {
                title: '异常ID',
                key: 'exceptionInstId',
                dataIndex: 'exceptionInstId',
                className: '',
                id: '15586',
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
                title: '日志跟踪ID',
                key: 'traceId',
                dataIndex: 'traceId',
                id: '264578',
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
                title: '业务编码',
                key: 'busiObjNbr',
                dataIndex: 'busiObjNbr',
                className: 'divider',
                id: '263354',
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
                title: '异常方法',
                key: 'methodCode',
                dataIndex: 'methodCode',
                className: 'divider',
                id: '582607',
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
                title: '异常状态',
                key: 'exceptionStatus',
                dataIndex: 'exceptionStatusName',
                className: 'divider',
                id: '4024162',
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
                title: '触发人',
                key: 'createStaffName',
                dataIndex: 'createStaffName',
                className: 'divider',
                id: '194439',
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
                title: '触发时间',
                key: 'createDate',
                dataIndex: 'createDate',
                className: 'divider',
                id: '810166',
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
            selectType={'radio'}
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
            extendNum={3}
            customNum={3}
            rowKey={'exceptionInstId'}
            rowActions={[
              {
                title: '不处理',
                iconPos: 'left',
                icon: '',
                type: 'detail',
                id: '5906088',
                rule: "row.exceptionStatus == '00X'",
                checked: true,
              },
              {
                title: '已处理',
                iconPos: 'left',
                type: 'edit',
                id: '516991',
                rule: "row.exceptionStatus == '00B'",
                checked: true,
              },
              {
                title: '外系统处理',
                iconPos: 'left',
                type: 'delete',
                id: '8750774',
                rule: "row.exceptionStatus == '00C'",
                checked: true,
              },
            ]}
            pageSize={data?.exceptionInstPage?.resultData?.size}
            current={data?.exceptionInstPage?.resultData?.current}
            total={data?.exceptionInstPage?.resultData?.total}
            dataSource={data?.exceptionInstPage?.resultData?.records}
            extend={[]}
            fieldName={'total'}
            dataSourceFromDataSourceConfig={
              'data.exceptionInstPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_5254274_122',
              uid: 'Table_5254274_122',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '20px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatacallSelfFunc179: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 167962873094980500,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '64773',
                    pageJsonId: '5254274',
                    customFuncName: '刷新分页',
                    customFuncParams: 'object',
                    paramsObj: { pageNum: '$page$' },
                    paramsObjKeyValueMap: { pageNum: '$page$' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc179.params =
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
                eventDatacallSelfFunc179,
                { page, pageSize },
                'callSelfFunc',
                {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                },
              );
            }}
            onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
              const eventDatasetCurrentFormValues8: any = [
                {
                  type: 'setCurrentFormValues',
                  dataId: 167963726437442340,
                  options: {
                    compId: 'Form_7756987_259648_631751_665634',
                    compLib: 'comm',
                    pageJsonId: '5254274',
                    compName: 'Form',
                    id: '6959114',
                    params: '$selectedRows[0]$',
                  },
                  line_number: 1,
                },
              ];
              eventDatasetCurrentFormValues8.params =
                [
                  {
                    title: '表格选中行id(单选)',
                    name: 'selectedRowKeys',
                    value: '$selectedRowKeys[0]$',
                  },
                  {
                    title: '表格选中行id(多选)',
                    name: 'selectedRowKeys',
                    value: '$selectedRowKeys$',
                    attrType: 'array',
                  },
                  {
                    title: '表格选中行数据(单选)',
                    name: 'selectedRows',
                    value: '$selectedRows[0]$',
                    attrType: 'object',
                  },
                  {
                    title: '表格选中行数据(多选)',
                    name: 'selectedRows',
                    value: '$selectedRows$',
                    attrType: 'objectArray',
                  },
                ] || [];
              CMDGenerator(
                eventDatasetCurrentFormValues8,
                { selectedRowKeys, selectedRows },
                'setCurrentFormValues',
                {
                  id: 'setCurrentFormValues',
                  name: 'setCurrentFormValues',
                  type: 'setCurrentFormValues',
                  platform: 'pc',
                },
              );
            }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowModal: any = [
                {
                  type: 'showModal',
                  dataId: 167963760444136600,
                  options: {
                    compId: 'showModal',
                    compName: 'page',
                    id: '60904',
                    pageJsonId: '5254274',
                    type: 'confirm',
                    title: '不处理',
                    content: '您确定不处理该异常吗？',
                    okText: '确认',
                    cancelText: '取消',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 167963766496689280,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '5093216',
                        pageJsonId: '5254274',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'modDcExceptionInst',
                        _apiCode: 'modDcExceptionInst',
                        _source: 'rhin',
                        _serviceId: '956386877654183936',
                        _serviceTitle: '修改异常信息--tzp: modDcExceptionInst',
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
                            dataKey: '5093216_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '5093216_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '5093216_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'updateDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.updateDate',
                                compType: 'Input',
                                name: 'updateDate',
                                parents: ['body'],
                                id: 'body.updateDate',
                                dataKey: '5093216_body.updateDate',
                              },
                              {
                                code: 'exceptionInstId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'body.exceptionInstId',
                                compType: 'Input',
                                name: 'exceptionInstId',
                                parents: ['body'],
                                id: 'body.exceptionInstId',
                                dataKey: '5093216_body.exceptionInstId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                              {
                                code: 'statusCd',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.statusCd',
                                compType: 'Input',
                                name: 'statusCd',
                                parents: ['body'],
                                id: 'body.statusCd',
                                dataKey: '5093216_body.statusCd',
                              },
                              {
                                code: 'remark',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.remark',
                                compType: 'Input',
                                name: 'remark',
                                parents: ['body'],
                                id: 'body.remark',
                                dataKey: '5093216_body.remark',
                              },
                              {
                                code: 'methodCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.methodCode',
                                compType: 'Input',
                                name: 'methodCode',
                                parents: ['body'],
                                id: 'body.methodCode',
                                dataKey: '5093216_body.methodCode',
                              },
                              {
                                code: 'busiObjNbr',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.busiObjNbr',
                                compType: 'Input',
                                name: 'busiObjNbr',
                                parents: ['body'],
                                id: 'body.busiObjNbr',
                                dataKey: '5093216_body.busiObjNbr',
                              },
                              {
                                code: 'createStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createStaff',
                                compType: 'Input',
                                name: 'createStaff',
                                parents: ['body'],
                                id: 'body.createStaff',
                                dataKey: '5093216_body.createStaff',
                              },
                              {
                                code: 'taskHandleId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.taskHandleId',
                                compType: 'Input',
                                name: 'taskHandleId',
                                parents: ['body'],
                                id: 'body.taskHandleId',
                                dataKey: '5093216_body.taskHandleId',
                              },
                              {
                                code: 'createStaffName',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createStaffName',
                                compType: 'Input',
                                name: 'createStaffName',
                                parents: ['body'],
                                id: 'body.createStaffName',
                                dataKey: '5093216_body.createStaffName',
                              },
                              {
                                code: 'objInstId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.objInstId',
                                compType: 'Input',
                                name: 'objInstId',
                                parents: ['body'],
                                id: 'body.objInstId',
                                dataKey: '5093216_body.objInstId',
                              },
                              {
                                code: 'exceptionStatus',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.exceptionStatus',
                                compType: 'Input',
                                name: 'exceptionStatus',
                                parents: ['body'],
                                id: 'body.exceptionStatus',
                                dataKey: '5093216_body.exceptionStatus',
                                value: { type: ['customize'], code: '00X' },
                              },
                              {
                                code: 'exceptionContent',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.exceptionContent',
                                compType: 'Input',
                                name: 'exceptionContent',
                                parents: ['body'],
                                id: 'body.exceptionContent',
                                dataKey: '5093216_body.exceptionContent',
                              },
                              {
                                code: 'createDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createDate',
                                compType: 'Input',
                                name: 'createDate',
                                parents: ['body'],
                                id: 'body.createDate',
                                dataKey: '5093216_body.createDate',
                              },
                              {
                                code: 'updateStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.updateStaff',
                                compType: 'Input',
                                name: 'updateStaff',
                                parents: ['body'],
                                id: 'body.updateStaff',
                                dataKey: '5093216_body.updateStaff',
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '5093216_body',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '0641142',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_5093216?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167963772218345630,
                          elseIfs: [],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 167963775053303230,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '702309',
                                pageJsonId: '5254274',
                                type: 'success',
                                value: '处理成功',
                              },
                              line_number: 4,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167965075422014880,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '867579',
                                pageJsonId: '5254274',
                                customFuncName: '刷新分页',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
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
              eventDatashowModal.params =
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
                eventDatashowModal,
                { rowId, row, index },
                'showModal',
                {
                  id: 'showModal',
                  name: 'showModal',
                  type: 'showModal',
                  platform: 'pc',
                },
              );
            }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowModal1: any = [
                {
                  type: 'showModal',
                  dataId: 167963778583866900,
                  options: {
                    compId: 'showModal',
                    compName: 'page',
                    id: '286982',
                    pageJsonId: '5254274',
                    type: 'confirm',
                    title: '已处理',
                    content: '您确定已处理完成该异常吗？',
                    okText: '确认',
                    cancelText: '取消',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 167963778583811360,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '313957',
                        pageJsonId: '5254274',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'modDcExceptionInst',
                        _apiCode: 'modDcExceptionInst',
                        _source: 'rhin',
                        _serviceId: '956386877654183936',
                        _serviceTitle: '修改异常信息--tzp: modDcExceptionInst',
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
                            dataKey: '313957_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '313957_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '313957_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'updateDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.updateDate',
                                compType: 'Input',
                                name: 'updateDate',
                                parents: ['body'],
                                id: 'body.updateDate',
                                dataKey: '313957_body.updateDate',
                              },
                              {
                                code: 'exceptionInstId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'body.exceptionInstId',
                                compType: 'Input',
                                name: 'exceptionInstId',
                                parents: ['body'],
                                id: 'body.exceptionInstId',
                                dataKey: '313957_body.exceptionInstId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                              {
                                code: 'statusCd',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.statusCd',
                                compType: 'Input',
                                name: 'statusCd',
                                parents: ['body'],
                                id: 'body.statusCd',
                                dataKey: '313957_body.statusCd',
                              },
                              {
                                code: 'remark',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.remark',
                                compType: 'Input',
                                name: 'remark',
                                parents: ['body'],
                                id: 'body.remark',
                                dataKey: '313957_body.remark',
                              },
                              {
                                code: 'methodCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.methodCode',
                                compType: 'Input',
                                name: 'methodCode',
                                parents: ['body'],
                                id: 'body.methodCode',
                                dataKey: '313957_body.methodCode',
                              },
                              {
                                code: 'busiObjNbr',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.busiObjNbr',
                                compType: 'Input',
                                name: 'busiObjNbr',
                                parents: ['body'],
                                id: 'body.busiObjNbr',
                                dataKey: '313957_body.busiObjNbr',
                              },
                              {
                                code: 'createStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createStaff',
                                compType: 'Input',
                                name: 'createStaff',
                                parents: ['body'],
                                id: 'body.createStaff',
                                dataKey: '313957_body.createStaff',
                              },
                              {
                                code: 'taskHandleId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.taskHandleId',
                                compType: 'Input',
                                name: 'taskHandleId',
                                parents: ['body'],
                                id: 'body.taskHandleId',
                                dataKey: '313957_body.taskHandleId',
                              },
                              {
                                code: 'createStaffName',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createStaffName',
                                compType: 'Input',
                                name: 'createStaffName',
                                parents: ['body'],
                                id: 'body.createStaffName',
                                dataKey: '313957_body.createStaffName',
                              },
                              {
                                code: 'objInstId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.objInstId',
                                compType: 'Input',
                                name: 'objInstId',
                                parents: ['body'],
                                id: 'body.objInstId',
                                dataKey: '313957_body.objInstId',
                              },
                              {
                                code: 'exceptionStatus',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.exceptionStatus',
                                compType: 'Input',
                                name: 'exceptionStatus',
                                parents: ['body'],
                                id: 'body.exceptionStatus',
                                dataKey: '313957_body.exceptionStatus',
                                value: { type: ['customize'], code: '00B' },
                              },
                              {
                                code: 'exceptionContent',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.exceptionContent',
                                compType: 'Input',
                                name: 'exceptionContent',
                                parents: ['body'],
                                id: 'body.exceptionContent',
                                dataKey: '313957_body.exceptionContent',
                              },
                              {
                                code: 'createDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createDate',
                                compType: 'Input',
                                name: 'createDate',
                                parents: ['body'],
                                id: 'body.createDate',
                                dataKey: '313957_body.createDate',
                              },
                              {
                                code: 'updateStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.updateStaff',
                                compType: 'Input',
                                name: 'updateStaff',
                                parents: ['body'],
                                id: 'body.updateStaff',
                                dataKey: '313957_body.updateStaff',
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '313957_body',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '0641142',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_313957?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167963778583826560,
                          elseIfs: [],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 167963778583840260,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '690975',
                                pageJsonId: '5254274',
                                type: 'success',
                                value: '处理成功',
                              },
                              line_number: 4,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167965076868061500,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '28054',
                                pageJsonId: '5254274',
                                customFuncName: '刷新分页',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
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
              eventDatashowModal1.params =
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
                eventDatashowModal1,
                { rowId, row, index },
                'showModal',
                {
                  id: 'showModal',
                  name: 'showModal',
                  type: 'showModal',
                  platform: 'pc',
                },
              );
            }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatashowModal2: any = [
                {
                  type: 'showModal',
                  dataId: 167963785292776960,
                  options: {
                    compId: 'showModal',
                    compName: 'page',
                    id: '2796673',
                    pageJsonId: '5254274',
                    type: 'confirm',
                    title: '已处理',
                    content: '您确定交由外体统处理该异常吗？',
                    okText: '确认',
                    cancelText: '取消',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 167963785292702530,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '7877953',
                        pageJsonId: '5254274',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'modDcExceptionInst',
                        _apiCode: 'modDcExceptionInst',
                        _source: 'rhin',
                        _serviceId: '956386877654183936',
                        _serviceTitle: '修改异常信息--tzp: modDcExceptionInst',
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
                            dataKey: '7877953_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '7877953_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '7877953_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'updateDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.updateDate',
                                compType: 'Input',
                                name: 'updateDate',
                                parents: ['body'],
                                id: 'body.updateDate',
                                dataKey: '7877953_body.updateDate',
                              },
                              {
                                code: 'exceptionInstId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'body.exceptionInstId',
                                compType: 'Input',
                                name: 'exceptionInstId',
                                parents: ['body'],
                                id: 'body.exceptionInstId',
                                dataKey: '7877953_body.exceptionInstId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                              {
                                code: 'statusCd',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.statusCd',
                                compType: 'Input',
                                name: 'statusCd',
                                parents: ['body'],
                                id: 'body.statusCd',
                                dataKey: '7877953_body.statusCd',
                              },
                              {
                                code: 'remark',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.remark',
                                compType: 'Input',
                                name: 'remark',
                                parents: ['body'],
                                id: 'body.remark',
                                dataKey: '7877953_body.remark',
                              },
                              {
                                code: 'methodCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.methodCode',
                                compType: 'Input',
                                name: 'methodCode',
                                parents: ['body'],
                                id: 'body.methodCode',
                                dataKey: '7877953_body.methodCode',
                              },
                              {
                                code: 'busiObjNbr',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.busiObjNbr',
                                compType: 'Input',
                                name: 'busiObjNbr',
                                parents: ['body'],
                                id: 'body.busiObjNbr',
                                dataKey: '7877953_body.busiObjNbr',
                              },
                              {
                                code: 'createStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createStaff',
                                compType: 'Input',
                                name: 'createStaff',
                                parents: ['body'],
                                id: 'body.createStaff',
                                dataKey: '7877953_body.createStaff',
                              },
                              {
                                code: 'taskHandleId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.taskHandleId',
                                compType: 'Input',
                                name: 'taskHandleId',
                                parents: ['body'],
                                id: 'body.taskHandleId',
                                dataKey: '7877953_body.taskHandleId',
                              },
                              {
                                code: 'createStaffName',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createStaffName',
                                compType: 'Input',
                                name: 'createStaffName',
                                parents: ['body'],
                                id: 'body.createStaffName',
                                dataKey: '7877953_body.createStaffName',
                              },
                              {
                                code: 'objInstId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.objInstId',
                                compType: 'Input',
                                name: 'objInstId',
                                parents: ['body'],
                                id: 'body.objInstId',
                                dataKey: '7877953_body.objInstId',
                              },
                              {
                                code: 'exceptionStatus',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.exceptionStatus',
                                compType: 'Input',
                                name: 'exceptionStatus',
                                parents: ['body'],
                                id: 'body.exceptionStatus',
                                dataKey: '7877953_body.exceptionStatus',
                                value: { type: ['customize'], code: '00C' },
                              },
                              {
                                code: 'exceptionContent',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.exceptionContent',
                                compType: 'Input',
                                name: 'exceptionContent',
                                parents: ['body'],
                                id: 'body.exceptionContent',
                                dataKey: '7877953_body.exceptionContent',
                              },
                              {
                                code: 'createDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createDate',
                                compType: 'Input',
                                name: 'createDate',
                                parents: ['body'],
                                id: 'body.createDate',
                                dataKey: '7877953_body.createDate',
                              },
                              {
                                code: 'updateStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.updateStaff',
                                compType: 'Input',
                                name: 'updateStaff',
                                parents: ['body'],
                                id: 'body.updateStaff',
                                dataKey: '7877953_body.updateStaff',
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '7877953_body',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '0641142',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_7877953?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167963785292720930,
                          elseIfs: [],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 167963785292755520,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '7413785',
                                pageJsonId: '5254274',
                                type: 'success',
                                value: '处理成功',
                              },
                              line_number: 4,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167965077339291230,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '956559',
                                pageJsonId: '5254274',
                                customFuncName: '刷新分页',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
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
              eventDatashowModal2.params =
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
                eventDatashowModal2,
                { rowId, row, index },
                'showModal',
                {
                  id: 'showModal',
                  name: 'showModal',
                  type: 'showModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_5254274_122'] = r)}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_49_21119_559187',
            uid: 'View_49_21119_559187',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%' }}
          ref={(r: any) => (refs['View_49_21119_559187'] = r)}
          {...injectData}
        >
          <Card
            name={'表单面板'}
            title={'采集状态详情'}
            bordered={true}
            size={'default'}
            hasHeader={false}
            hasIcon={true}
            cardIconType={'middle'}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
            extendNum={3}
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
              id: 'Card_49_21114_047747',
              uid: 'Card_49_21114_047747',
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
            ref={(r: any) => (refs['Card_49_21114_047747'] = r)}
            {...injectData}
          >
            <Form
              name={'详情表单'}
              colSpan={12}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_7756987'}
              $$componentItem={{
                id: 'Form_7756987_259648_631751_665634',
                uid: 'Form_7756987_259648_631751_665634',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_7756987_259648_631751_665634'] = r)}
              {...injectData}
            >
              <Input
                name={'日志跟踪ID'}
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
                fieldName={'traceId'}
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
                  id: 'Input_650422_201996_788381_487096',
                  uid: 'Input_650422_201996_788381_487096',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_650422_201996_788381_487096'] = r)
                }
                {...injectData}
              />
              <Input
                name={'待办ID'}
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
                fieldName={'taskHandleId'}
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
                  id: 'Input_650422_201996_788381_6178676_740382_745151',
                  uid: 'Input_650422_201996_788381_6178676_740382_745151',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_650422_201996_788381_6178676_740382_745151'] = r)
                }
                {...injectData}
              />
              <Input
                name={'业务编码'}
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
                formItemIndex={2}
                fieldName={'busiObjNbr'}
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
                  id: 'Input_984985_229345_5159784_7451863',
                  uid: 'Input_984985_229345_5159784_7451863',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_984985_229345_5159784_7451863'] = r)
                }
                {...injectData}
              />
              <Input
                name={'关联实例'}
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
                formItemIndex={3}
                fieldName={'objInstId'}
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
                  id: 'Input_650422_201996_788381_6178676_740382_460571',
                  uid: 'Input_650422_201996_788381_6178676_740382_460571',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_650422_201996_788381_6178676_740382_460571'] = r)
                }
                {...injectData}
              />
              <Input
                name={'异常方法'}
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
                formItemIndex={4}
                fieldName={'methodCode'}
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
                  id: 'Input_650422_201996_788381_6178676_740382',
                  uid: 'Input_650422_201996_788381_6178676_740382',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_650422_201996_788381_6178676_740382'] = r)
                }
                {...injectData}
              />
              <Select
                name={'异常状态'}
                size={'default'}
                selfSpan={12}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                formItemIndex={5}
                fieldName={'exceptionStatus'}
                dataSource={getStaticDataSourceService(
                  data?.exceptionStatusList?.resultData,
                  'attrValueName',
                  'attrValue',
                )}
                $$componentItem={{
                  id: 'Select_953604_583598_738995',
                  uid: 'Select_953604_583598_738995',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Select_953604_583598_738995'] = r)}
                {...injectData}
              />
              <TextArea
                name={'异常内容'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={6}
                fieldName={'exceptionContent'}
                $$componentItem={{
                  id: 'TextArea_7406107_9765545',
                  uid: 'TextArea_7406107_9765545',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['TextArea_7406107_9765545'] = r)}
                {...injectData}
              />
              <Input
                name={'请求地址'}
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
                formItemIndex={7}
                fieldName={'requestUrl'}
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
                  id: 'Input_580008',
                  uid: 'Input_580008',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_580008'] = r)}
                {...injectData}
              />
              <Input
                name={'浏览器信息'}
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
                formItemIndex={8}
                fieldName={'requestBrowser'}
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
                  id: 'Input_410694',
                  uid: 'Input_410694',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_410694'] = r)}
                {...injectData}
              />
              <TextArea
                name={'请求报文'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={'20'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={9}
                fieldName={'requestBody'}
                $$componentItem={{
                  id: 'TextArea_3030646',
                  uid: 'TextArea_3030646',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                style={{ minHeight: '100px' }}
                ref={(r: any) => (refs['TextArea_3030646'] = r)}
                {...injectData}
              />
              <TextArea
                name={'堆栈信息'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={10}
                fieldName={'exceptionStack'}
                $$componentItem={{
                  id: 'TextArea_302016',
                  uid: 'TextArea_302016',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                style={{ minHeight: '100px' }}
                ref={(r: any) => (refs['TextArea_302016'] = r)}
                {...injectData}
              />
              <Input
                name={'创建人'}
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
                formItemIndex={11}
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
                  id: 'Input_406219_578572',
                  uid: 'Input_406219_578572',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_406219_578572'] = r)}
                {...injectData}
              />
              <Input
                name={'创建时间'}
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
                formItemIndex={12}
                fieldName={'createDate'}
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
                  id: 'Input_104648_785464',
                  uid: 'Input_104648_785464',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_104648_785464'] = r)}
                {...injectData}
              />
              <Input
                name={'修改人'}
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
                formItemIndex={13}
                fieldName={'updateStaff'}
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
                  id: 'Input_768435_595437',
                  uid: 'Input_768435_595437',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_768435_595437'] = r)}
                {...injectData}
              />
              <Input
                name={'修改时间'}
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
                formItemIndex={14}
                fieldName={'updateDate'}
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
                  id: 'Input_825004_149151',
                  uid: 'Input_825004_149151',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_825004_149151'] = r)}
                {...injectData}
              />
              <TextArea
                name={'关联备注'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={15}
                fieldName={'remark'}
                $$componentItem={{
                  id: 'TextArea_7406107_9765545_399073',
                  uid: 'TextArea_7406107_9765545_399073',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['TextArea_7406107_9765545_399073'] = r)}
                {...injectData}
              />
              <Input
                name={'异常ID'}
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
                formItemIndex={16}
                fieldName={'exceptionInstId'}
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
                  id: 'Input_533442',
                  uid: 'Input_533442',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_533442'] = r)}
                {...injectData}
              />
            </Form>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ExceptionList$$Page, {
  pageId: '956370582359519232',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
