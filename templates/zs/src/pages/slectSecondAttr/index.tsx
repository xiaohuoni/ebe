// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Card, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '1003212115501813760';
const SlectSecondAttr$$Modal: React.FC<PageProps> = ({
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
  const refleshAttr = (options_832907: any) => {
    const eventDatareloadDataSource27: any = [
      {
        type: 'reloadDataSource',
        dataId: 169079102205714750,
        shielding: true,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '541404',
          pageJsonId: '203067',
          dataSourceId: 169079079516701920,
          dataSourceName: 'qryAttrSpecPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '749047',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '370457',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '2049067',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '923075',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '919468',
                  code: 'attrName',
                  name: 'attrName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrName',
                  value: {
                    type: ['form', 'Form_9560711', 'getFieldsValue'],
                    code: 'attrName',
                  },
                },
                {
                  attrId: '8757244',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '381513',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '7599374',
                  code: 'attrCode',
                  name: 'attrCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrCode',
                  value: {
                    type: ['form', 'Form_9560711', 'getFieldsValue'],
                    code: 'attrCode',
                  },
                },
              ],
              key: 'body',
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
    eventDatareloadDataSource27.params =
      [
        {
          title: '事件入参',
          name: 'options_832907',
          value: '$options_832907$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource27,
      { options_832907 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatareloadDataSource28: any = [
      {
        type: 'reloadDataSource',
        dataId: 169085874282212900,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '993172',
          pageJsonId: '203067',
          dataSourceId: 169079079516701920,
          dataSourceName: 'qryAttrSpecPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '749047',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'header',
            },
            {
              attrId: '370457',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'path',
            },
            {
              attrId: '2049067',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'query',
            },
            {
              attrId: '923075',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '635977',
                  code: 'attrId',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: {
                    type: 'static',
                    value: '$state.bizData.attrId$',
                  },
                  key: 'body.attrId',
                  value: { type: ['context', '$state.bizData$'], code: '' },
                },
                {
                  attrId: '919468',
                  code: 'attrName',
                  name: 'attrName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrName',
                  value: {
                    type: ['form', 'Form_9560711', 'getFieldsValue'],
                    code: 'attrName',
                  },
                },
                {
                  attrId: '8757244',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '381513',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '7599374',
                  code: 'attrCode',
                  name: 'attrCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrCode',
                  value: {
                    type: ['form', 'Form_9560711', 'getFieldsValue'],
                    code: 'attrCode',
                  },
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource28.params =
      [
        {
          title: '事件入参',
          name: 'options_832907',
          value: '$options_832907$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource28,
      { options_832907 },
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
    refleshAttr,
  }));

  const onOk = () => {
    const eventDatagetTableSelected5: any = [
      {
        type: 'getTableSelected',
        dataId: 169079198427287260,
        options: {
          compId: 'Table_646217',
          compLib: 'comm',
          pageJsonId: '203067',
          compName: 'Table',
          id: '7062169',
        },
        line_number: 1,
        callback1: [
          {
            type: 'closeModal',
            dataId: 169079213053271900,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '249091',
              pageJsonId: '203067',
            },
            line_number: 2,
          },
          {
            type: 'callCustomPageFunc',
            dataId: 169079253266830000,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '7375309',
              pageJsonId: '203067',
              pathname: '/attrValueRel',
              pageId: '1001785141604552704',
              modalPath: '/attrValueRel',
              customFuncName: 'setSecondData',
              customFuncParams: '$selectedRows_7062169[0]$',
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelected5.params = [] || [];
    CMDGenerator(eventDatagetTableSelected5, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal61: any = [
      {
        type: 'closeModal',
        dataId: '244066_1',
        options: { compId: 'page', compName: 'page', id: '832066' },
        line_number: 1,
      },
    ];
    eventDatacloseModal61.params = [] || [];
    CMDGenerator(eventDatacloseModal61, {}, 'closeModal', {
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
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_203067__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_203067_1',
          uid: 'View_203067_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_203067_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_840584',
            uid: 'View_840584',
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
            height: '30%',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_840584')}
          {...injectData}
        >
          <Card
            name={'属性配置'}
            cardIconType={'middle'}
            title={'属性配置'}
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
              id: 'Card_5377033',
              uid: 'Card_5377033',
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
            ref={(r: any) => refs.setComponentRef(r, 'Card_5377033')}
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
              formCode={'Form_148709'}
              $$componentItem={{
                id: 'Form_9560711',
                uid: 'Form_9560711',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_9560711')}
              {...injectData}
            >
              <Input
                name={'属性名称'}
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
                formItemIndex={0}
                fieldName={'attrName'}
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
                  id: 'Input_814637',
                  uid: 'Input_814637',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc562: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166158470687467620,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '2038827',
                        pageJsonId: '4868135',
                        customFuncName: 'refleshAttr',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc562.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc562,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_814637')}
                {...injectData}
              />
              <Input
                name={'属性编码'}
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
                formItemIndex={1}
                fieldName={'attrCode'}
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
                  id: 'Input_35766145',
                  uid: 'Input_35766145',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc563: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166158471466083070,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '64209',
                        pageJsonId: '4868135',
                        customFuncName: 'refleshAttr',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc563.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc563,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_35766145')}
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_467733',
                  uid: 'View_467733',
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
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_467733')}
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
                    id: 'Button_523439',
                    uid: 'Button_523439',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc564: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158469460298370,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '6966413',
                          pageJsonId: '4868135',
                          customFuncName: 'refleshAttr',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc564.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc564,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Button_523439')}
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
                  labelCol={8}
                  wrapperCol={16}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_938407',
                    uid: 'Button_938407',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const forms127 = getFormByCompId('Form_9560711', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms127) ? forms127 : [forms127]).forEach(
                      (form) => form?.resetFields(),
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_938407')}
                  {...injectData}
                />
              </View>
            </Form>
            <Table
              name={'属性列表'}
              isFlexColumn={false}
              pageSize={5}
              current={data?.qryAttrSpecPage?.resultData?.current}
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
                  title: '属性标识',
                  key: 'attrId',
                  dataIndex: 'attrId',
                  id: '175877',
                  className: '',
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
                  title: '属性名称',
                  key: 'attrName',
                  dataIndex: 'attrName',
                  className: 'divider',
                  id: '281068',
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
                  title: '属性编码',
                  key: 'attrCode',
                  dataIndex: 'attrCode',
                  className: 'divider',
                  id: '16555',
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
                  title: '属性值类型',
                  key: 'attrValueType',
                  dataIndex: 'attrValueType',
                  id: '359927',
                  className: 'divider',
                  staticService: {
                    labelKey: 'attrValueName',
                    valueKey: 'attrValue',
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
                  title: '属性值数据类型',
                  key: 'attrValueDataType',
                  dataIndex: 'attrValueDataType',
                  id: '1025746',
                  className: 'divider',
                  staticService: {
                    labelKey: 'attrValueName',
                    valueKey: 'attrValue',
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
              selectType={'radio'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'radio' }}
              showHead={false}
              showTotal={true}
              showSizeChanger={false}
              showQuickJumper={true}
              pageSizeOptions={'[5,10,20]'}
              rowKey={'attrId'}
              rowActions={[
                {
                  title: '详情',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'file-search' },
                  type: 'detail',
                  id: '460721',
                  checked: true,
                },
              ]}
              extend={[]}
              dataSource={data?.qryAttrSpecPage?.resultData?.records}
              total={data?.qryAttrSpecPage?.resultData?.total}
              fieldName={'data.qryAttrSpecPage.resultData.current'}
              dataSourceFromDataSourceConfig={
                'data.qryAttrSpecPage.resultData.records'
              }
              $$componentItem={{
                id: 'Table_646217',
                uid: 'Table_646217',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '12px 0px 0px 0px' }}
              onRowDetail={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal210: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166632026172642500,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '3913474',
                      pageJsonId: '4868135',
                      modalname: '/guigeshuxingxiangqing3867',
                      pageId: '900572788518785024',
                      modalPath: '/guigeshuxingxiangqing3867',
                      paramsObj: {
                        bizId: '$rowId$',
                        sceneCode: 'V',
                        attrId: '$rowId$',
                        attrObj: '$row$',
                      },
                      paramsObjKeyValueMap: {
                        bizId: '$rowId$',
                        sceneCode: 'V',
                        attrId: '$rowId$',
                        attrObj: '$row$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal210.params =
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
                  eventDatashowCustomModal210,
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
              onPageChange={(page: any, pageSize: any) => {
                const eventDatareloadDataSource93: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 169085880318598880,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '721277105',
                      pageJsonId: '203067',
                      dataSourceId: 169079079516701920,
                      dataSourceName: 'qryAttrSpecPage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '749047',
                          code: 'header',
                          name: '请求头参数',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'header',
                          _codePath: ['header'],
                          _idpath: ['749047'],
                        },
                        {
                          attrId: '370457',
                          code: 'path',
                          name: '请求路径参数',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'path',
                          _codePath: ['path'],
                          _idpath: ['370457'],
                        },
                        {
                          attrId: '2049067',
                          code: 'query',
                          name: 'URL 参数',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'query',
                          _codePath: ['query'],
                          _idpath: ['2049067'],
                        },
                        {
                          attrId: '923075',
                          code: 'body',
                          name: '请求体',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          children: [
                            {
                              attrId: '635977',
                              code: 'attrId',
                              name: '新增节点',
                              type: 'long',
                              sort: { isSort: true },
                              initialData: {
                                type: 'static',
                                value: '$state.bizData$',
                              },
                              key: 'body.attrId',
                              value: {
                                type: ['context', '$state.bizData$'],
                                code: '',
                              },
                              _codePath: ['body', 'attrId'],
                              _idpath: ['923075', '635977'],
                            },
                            {
                              attrId: '919468',
                              code: 'attrName',
                              name: 'attrName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              key: 'body.attrName',
                              value: {
                                type: [
                                  'form',
                                  'Form_9560711',
                                  'getFieldsValue',
                                ],
                                code: 'attrName',
                              },
                              _codePath: ['body', 'attrName'],
                              _idpath: ['923075', '919468'],
                            },
                            {
                              attrId: '8757244',
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
                              _idpath: ['923075', '8757244'],
                            },
                            {
                              attrId: '381513',
                              code: 'pageSize',
                              name: 'pageSize',
                              type: 'long',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '5' },
                              key: 'body.pageSize',
                              value: {
                                type: ['context', '$pageSize$'],
                                hideAttr: true,
                                code: '',
                              },
                              _codePath: ['body', 'pageSize'],
                              _idpath: ['923075', '381513'],
                            },
                            {
                              attrId: '7599374',
                              code: 'attrCode',
                              name: 'attrCode',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              key: 'body.attrCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_9560711',
                                  'getFieldsValue',
                                ],
                                code: 'attrCode',
                              },
                              _codePath: ['body', 'attrCode'],
                              _idpath: ['923075', '7599374'],
                            },
                          ],
                          key: 'body',
                          _codePath: ['body'],
                          _idpath: ['923075'],
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
                eventDatareloadDataSource93.params =
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
                  eventDatareloadDataSource93,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_646217')}
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(SlectSecondAttr$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
