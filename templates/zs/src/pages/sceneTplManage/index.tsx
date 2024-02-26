// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '1059760450592399360';
const SceneTplManage$$Page: React.FC<PageProps> = ({
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
  const queryData = (options_291597: any) => {
    const eventDatareloadDataSource17: any = [
      {
        type: 'reloadDataSource',
        dataId: 170433274087050000,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '801245',
          pageJsonId: '0268335',
          dataSourceId: 170433138537737120,
          dataSourceName: 'querySceneTplPageByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '047945',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '10416',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '065748',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '2971855',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '635093',
                  code: 'pageNum',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '2275433',
                  code: 'pageSize',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: [], code: '' },
                },
                {
                  attrId: '005399',
                  code: 'sceneTplType',
                  name: 'sceneTplType',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_869119', 'getFieldsValue'],
                    code: 'sceneTplType',
                  },
                },
                {
                  attrId: '642328',
                  code: 'sceneTplName',
                  name: 'sceneTplName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_869119', 'getFieldsValue'],
                    code: 'sceneTplName',
                  },
                },
                {
                  attrId: '920405',
                  code: 'sceneTplDesc',
                  name: 'sceneTplDesc',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_869119', 'getFieldsValue'],
                    code: 'sceneTplDesc',
                  },
                },
                {
                  attrId: '121332',
                  code: 'sceneTplCode',
                  name: 'sceneTplCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_869119', 'getFieldsValue'],
                    code: 'sceneTplCode',
                  },
                },
              ],
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
    eventDatareloadDataSource17.params =
      [
        {
          title: '事件入参',
          name: 'options_291597',
          value: '$options_291597$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource17,
      { options_291597 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const forms3 = getFormByCompId('Form_6700227', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms3) ? forms3 : [forms3]).forEach((form) =>
      form?.resetFields(),
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    queryData,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_0268335__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_0268335_1',
          uid: 'View_0268335_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_0268335_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_060452',
            uid: 'View_060452',
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
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_060452')}
          {...injectData}
        >
          <Card
            name={'场景凭证模板管理'}
            cardIconType={'middle'}
            extendNum={3}
            title={'场景凭证模板管理'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
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
              id: 'Card_380913',
              uid: 'Card_380913',
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
            onClickBtn1={(e: any) => {
              const eventDatashowCustomModal114: any = [
                {
                  type: 'showCustomModal',
                  dataId: 167290315612024450,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '0490035',
                    pageJsonId: '5031917',
                    modalname: '/wenjianmubanxinzeng3140',
                    pageId: '928103651163254784',
                    modalPath: '/wenjianmubanxinzeng3140',
                    paramsObj: {},
                    paramsObjKeyValueMap: {},
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 167290515330215580,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '9296365',
                        pageJsonId: '5031917',
                        customFuncName: 'refresh_table',
                        customFuncParams: 'object',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [
                    {
                      type: 'console',
                      dataId: 167290315612003040,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '910457',
                        pageJsonId: '5031917',
                        value: ['点击取消'],
                      },
                      line_number: 3,
                    },
                  ],
                },
              ];
              eventDatashowCustomModal114.params =
                [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal114,
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
            ref={(r: any) => refs.setComponentRef(r, 'Card_380913')}
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
              formCode={'Form_4818053'}
              $$componentItem={{
                id: 'Form_869119',
                uid: 'Form_869119',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_869119')}
              {...injectData}
            >
              <Input
                name={'场景模板编码'}
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
                fieldName={'sceneTplCode'}
                allowClear={false}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                minLength={0}
                maxLength={0}
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
                  id: 'Input_33469',
                  uid: 'Input_33469',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                style={{ flex: '' }}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc382: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167290332170314900,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '550614',
                        pageJsonId: '5031917',
                        customFuncName: 'queryData',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc382.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc382,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_33469')}
                {...injectData}
              />
              <Input
                name={'场景模板名称'}
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
                fieldName={'sceneTplName'}
                allowClear={false}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                minLength={0}
                maxLength={0}
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
                  id: 'Input_4319877',
                  uid: 'Input_4319877',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                style={{ flex: '' }}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc383: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167290332170314900,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '550614',
                        pageJsonId: '5031917',
                        customFuncName: 'queryData',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc383.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc383,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_4319877')}
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_77596',
                  uid: 'View_77596',
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
                  display: 'block',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  textAlign: 'center',
                  height: '100%',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_77596')}
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
                    id: 'Button_18118',
                    uid: 'Button_18118',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc384: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167289926267411650,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '574038',
                          pageJsonId: '5031917',
                          customFuncName: 'queryData',
                          customFuncParams: 'object',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc384.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc384,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Button_18118')}
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
                    id: 'Button_872716',
                    uid: 'Button_872716',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const forms97 = getFormByCompId('Form_869119', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms97) ? forms97 : [forms97]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const forms98 = getFormByCompId('Form_6700227', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms98) ? forms98 : [forms98]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacallSelfFunc385: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 170433288613830200,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '748853',
                          pageJsonId: '0268335',
                          customFuncName: 'queryData',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc385.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc385,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Button_872716')}
                  {...injectData}
                />
              </View>
              <Select
                name={'场景模板类型'}
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
                fieldName={'sceneTplType'}
                formItemIndex={3}
                dataSource={[
                  { id: '4873372', label: '审批凭证', value: '2000' },
                ]}
                $$componentItem={{
                  id: 'Input_1317317',
                  uid: 'Input_1317317',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_1317317')}
                {...injectData}
              />
              <Input
                name={'场景模板描述'}
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
                fieldName={'sceneTplDesc'}
                allowClear={false}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                minLength={0}
                maxLength={0}
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
                  id: 'Input_612903',
                  uid: 'Input_612903',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                style={{ flex: '' }}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc386: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167290332170314900,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '550614',
                        pageJsonId: '5031917',
                        customFuncName: 'queryData',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc386.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc386,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_612903')}
                {...injectData}
              />
            </Form>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_9572742',
                uid: 'View_9572742',
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
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_9572742')}
              {...injectData}
            >
              <Table
                name={'表格'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={5}
                current={data?.querySceneTplPageByReq?.resultData?.current}
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
                    title: '模板ID',
                    key: 'sceneTplId',
                    dataIndex: 'sceneTplId',
                    className: '',
                    id: '5970248',
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
                    title: '场景模板编码',
                    key: 'sceneTplCode',
                    dataIndex: 'sceneTplCode',
                    className: 'divider',
                    id: '48783',
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
                    title: '场景模板名称',
                    key: 'sceneTplName',
                    dataIndex: 'sceneTplName',
                    className: 'divider',
                    id: '9675852',
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
                    title: '场景编码',
                    key: 'sceneNbr',
                    dataIndex: 'sceneNbr',
                    className: 'divider',
                    id: '237334',
                    hiddenRule: true,
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
                    title: '场景模板类型',
                    key: 'sceneTplType',
                    dataIndex: 'sceneTplType',
                    className: 'divider',
                    id: '060875',
                    customRendering:
                      'function renderFunc(text, row, index) {  if (text == \'2000\') {    return "审批凭证";  }  return text ? "" + text : "";}',
                    originCustomRendering: [
                      ' /**',
                      ' * 自定义渲染函数',
                      ' * @param {String} text 单元格显示的文字内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {number} index 行索引',
                      ' * @returns 渲染的内容：可以是 html 模板字符串',
                      ' */',
                      'function renderFunc(text, row, index) {',
                      "\tif (text == '2000') {",
                      '\t  return "审批凭证"',
                      '\t}',
                      '    return text ? `${text}` : ""',
                      '}',
                    ],
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
                    title: '场景模板描述',
                    key: 'sceneTplDesc',
                    dataIndex: 'sceneTplDesc',
                    id: '603641',
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
                    title: '创建时间',
                    key: 'createDate',
                    dataIndex: 'createDate',
                    className: 'divider',
                    id: '889588',
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
                    key: 'createStaff',
                    dataIndex: 'createStaff',
                    id: '095923',
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
                    title: '更新人',
                    key: 'updateStaff',
                    dataIndex: 'updateStaff',
                    className: 'divider',
                    id: '097352',
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
                    title: '更新时间',
                    key: 'updateDate',
                    dataIndex: 'updateDate',
                    className: 'divider',
                    id: '084182',
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
                fixedAction={false}
                rowSelection={undefined}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'fileTemplateId'}
                dataSource={data?.querySceneTplPageByReq?.resultData?.records}
                fieldName={'current'}
                total={data?.querySceneTplPageByReq?.resultData?.total}
                rowActions={[]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.querySceneTplPageByReq.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_780292',
                  uid: 'Table_780292',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '24px 0px 0px 0px' }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatareloadDataSource81: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 167290218451170180,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '2988936',
                        pageJsonId: '5031917',
                        dataSourceId: 170433138537737120,
                        dataSourceName: 'querySceneTplPageByReq',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '047945',
                            code: 'header',
                            name: '请求头参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'header',
                            _codePath: ['header'],
                            _idpath: ['047945'],
                          },
                          {
                            attrId: '10416',
                            code: 'path',
                            name: '请求路径参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'path',
                            _codePath: ['path'],
                            _idpath: ['10416'],
                          },
                          {
                            attrId: '065748',
                            code: 'query',
                            name: 'URL 参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'query',
                            _codePath: ['query'],
                            _idpath: ['065748'],
                          },
                          {
                            attrId: '2971855',
                            code: 'body',
                            name: '请求体',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            children: [
                              {
                                attrId: '121332',
                                code: 'sceneTplCode',
                                name: 'sceneTplCode',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.sceneTplCode',
                                value: {
                                  type: [
                                    'form',
                                    'Form_869119',
                                    'getFieldsValue',
                                  ],
                                  code: 'sceneTplCode',
                                },
                                _codePath: ['body', 'sceneTplCode'],
                                _idpath: ['2971855', '121332'],
                              },
                              {
                                attrId: '642328',
                                code: 'sceneTplName',
                                name: 'sceneTplName',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.sceneTplName',
                                value: {
                                  type: [
                                    'form',
                                    'Form_869119',
                                    'getFieldsValue',
                                  ],
                                  code: 'sceneTplName',
                                },
                                _codePath: ['body', 'sceneTplName'],
                                _idpath: ['2971855', '642328'],
                              },
                              {
                                attrId: '920405',
                                code: 'sceneTplDesc',
                                name: 'sceneTplDesc',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.sceneTplDesc',
                                value: {
                                  type: [
                                    'form',
                                    'Form_869119',
                                    'getFieldsValue',
                                  ],
                                  code: 'sceneTplDesc',
                                },
                                _codePath: ['body', 'sceneTplDesc'],
                                _idpath: ['2971855', '920405'],
                              },
                              {
                                attrId: '005399',
                                code: 'sceneTplType',
                                name: 'sceneTplType',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.sceneTplType',
                                value: {
                                  type: [
                                    'form',
                                    'Form_869119',
                                    'getFieldsValue',
                                  ],
                                  code: 'sceneTplType',
                                },
                                _codePath: ['body', 'sceneTplType'],
                                _idpath: ['2971855', '005399'],
                              },
                              {
                                attrId: '635093',
                                code: 'pageNum',
                                name: '新增节点',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['body', 'pageNum'],
                                _idpath: ['2971855', '635093'],
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '2275433',
                                code: 'pageSize',
                                name: '新增节点',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['body', 'pageSize'],
                                _idpath: ['2971855', '2275433'],
                                value: {
                                  type: ['context', '$pageSize$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                            ],
                            key: 'body',
                            _codePath: ['body'],
                            _idpath: ['2971855'],
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
                  eventDatareloadDataSource81.params =
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
                    eventDatareloadDataSource81,
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
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest716: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167290655057745300,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '2020655',
                        pageJsonId: '5031917',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delDcFileTemplateById',
                        _apiCode: 'delDcFileTemplateById',
                        _source: 'rhin',
                        _serviceId: '928198984827490304',
                        _serviceTitle:
                          '删除文件模板-hyj: delDcFileTemplateById',
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
                            dataKey: '2020655_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'dcFileTemplateId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'path.dcFileTemplateId',
                                compType: 'Input',
                                name: 'dcFileTemplateId',
                                parents: ['path'],
                                id: 'path.dcFileTemplateId',
                                dataKey: '2020655_path.dcFileTemplateId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '2020655_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '2020655_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '2020655_body',
                          },
                        ],
                        _sourceName: '删除文件模板-hyj',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 167290658162765250,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '8259086',
                            pageJsonId: '5031917',
                            type: 'success',
                            value: '删除成功！',
                          },
                          line_number: 2,
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167290696170139680,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '199782',
                            pageJsonId: '5031917',
                            customFuncName: 'refresh_table',
                            customFuncParams: 'object',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest716.params =
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
                    eventDataapiRequest716,
                    { rowId, row, index },
                    'apiRequest',
                    {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    },
                  );
                }}
                onClickBtn1={(rowId: any, row: any, index: any) => {
                  const eventDatadownloadByFileId34: any = [
                    {
                      type: 'downloadByFileId',
                      dataId: 167290716517975100,
                      options: {
                        compId: 'downloadByFileId',
                        compName: 'system',
                        id: '651857',
                        pageJsonId: '5031917',
                        data: '$row.fileId$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatadownloadByFileId34.params =
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
                    eventDatadownloadByFileId34,
                    { rowId, row, index },
                    'downloadByFileId',
                    {
                      id: 'downloadByFileId',
                      name: 'downloadByFileId',
                      type: 'downloadByFileId',
                      platform: 'pc',
                    },
                  );
                }}
                onClickBtn2={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal115: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 169871792691230600,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '967732',
                        pageJsonId: '5031917',
                        modalname: '/wenjianmubanxinzeng3140',
                        pageId: '928103651163254784',
                        modalPath: '/wenjianmubanxinzeng3140',
                        paramsObj: {
                          isCover: '1',
                          sceneCode: '$row.sceneCode$',
                          sceneId: '$row.sceneId$',
                        },
                        paramsObjKeyValueMap: {
                          isCover: '1',
                          sceneCode: '$row.sceneCode$',
                          sceneId: '$row.sceneId$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 169871792691286700,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '398211',
                            pageJsonId: '5031917',
                            customFuncName: 'refresh_table',
                            customFuncParams: 'object',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [
                        {
                          type: 'console',
                          dataId: 169871792691290100,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '8059477',
                            pageJsonId: '5031917',
                            value: ['点击取消'],
                          },
                          line_number: 3,
                        },
                      ],
                    },
                  ];
                  eventDatashowCustomModal115.params =
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
                    eventDatashowCustomModal115,
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
                onRowClick={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues18: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 170433406169260200,
                      options: {
                        compId: 'Form_6700227',
                        compLib: 'comm',
                        pageJsonId: '0268335',
                        compName: 'Form',
                        id: '4088135',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues18.params =
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
                    eventDatasetCurrentFormValues18,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_780292')}
                {...injectData}
              />
            </View>
          </Card>
          <Card
            name={'卡片'}
            cardIconType={'middle'}
            title={'模板详情'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
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
              id: 'Card_897562',
              uid: 'Card_897562',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '30px 0px 16px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_897562')}
            {...injectData}
          >
            <Form
              name={'详情表单'}
              colSpan={12}
              labelCol={'6'}
              wrapperCol={'18'}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_69639772'}
              $$componentItem={{
                id: 'Form_6700227',
                uid: 'Form_6700227',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_6700227')}
              {...injectData}
            >
              <Input
                name={'模板ID'}
                size={'default'}
                selfSpan={12}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={0}
                fieldName={'sceneTplId'}
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
                  id: 'Input_3233426',
                  uid: 'Input_3233426',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_3233426')}
                {...injectData}
              />
              <Input
                name={'模板编码'}
                size={'default'}
                selfSpan={12}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={1}
                fieldName={'sceneTplCode'}
                regexp={[]}
                maxLength={30}
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
                  id: 'Input_4921618',
                  uid: 'Input_4921618',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_4921618')}
                {...injectData}
              />
              <Input
                name={'模板名称'}
                size={'default'}
                selfSpan={12}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={2}
                fieldName={'sceneTplName'}
                allowClear={false}
                maxLength={128}
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
                  id: 'Input_732881',
                  uid: 'Input_732881',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_732881')}
                {...injectData}
              />
              <Input
                name={'场景编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={3}
                fieldName={'sceneNbr'}
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
                  id: 'Input_5512436',
                  uid: 'Input_5512436',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_5512436')}
                {...injectData}
              />
              <Select
                name={'模板类型'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                formItemIndex={4}
                fieldName={'sceneTplType'}
                allowClear={false}
                dataSource={[{ id: '15095', label: '审批凭证', value: '2000' }]}
                $$componentItem={{
                  id: 'Select_985583',
                  uid: 'Select_985583',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_985583')}
                {...injectData}
              />
              <Input
                name={'模板描述'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={5}
                fieldName={'sceneTplDesc'}
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
                  id: 'Input_502628',
                  uid: 'Input_502628',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_502628')}
                {...injectData}
              />
              <TextArea
                name={'模板内容'}
                selfSpan={24}
                labelCol={'3'}
                wrapperCol={'21'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                formItemIndex={6}
                fieldName={'sceneTplContent'}
                $$componentItem={{
                  id: 'TextArea_221912',
                  uid: 'TextArea_221912',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'TextArea_221912')}
                {...injectData}
              />
              <Input
                name={'创建人'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={7}
                fieldName={'createStaff'}
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
                  id: 'Input_1967627',
                  uid: 'Input_1967627',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_1967627')}
                {...injectData}
              />
              <Input
                name={'创建时间'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={8}
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
                  id: 'Input_4682584',
                  uid: 'Input_4682584',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_4682584')}
                {...injectData}
              />
              <Input
                name={'更新人'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={9}
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
                  id: 'Input_117588',
                  uid: 'Input_117588',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_117588')}
                {...injectData}
              />
              <Input
                name={'更新时间'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={'18'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                formItemIndex={10}
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
                  id: 'Input_921329',
                  uid: 'Input_921329',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_921329')}
                {...injectData}
              />
            </Form>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(SceneTplManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
