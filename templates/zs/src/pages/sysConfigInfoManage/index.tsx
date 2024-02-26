// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Card, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '881779005911814144';
const SysConfigInfoManage$$Page: React.FC<PageProps> = ({
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
  const refresh_table = (options_1935318: any) => {
    const eventDatasetLoading13: any = [
      {
        type: 'setLoading',
        dataId: 166338538284219070,
        options: {
          compId: 'Table_311334_1784965',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '85375',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading13.params =
      [
        {
          title: '事件入参',
          name: 'options_1935318',
          value: '$options_1935318$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading13, { options_1935318 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource8: any = [
      {
        type: 'reloadDataSource',
        dataId: 166338492604602500,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '667851',
          pageJsonId: '4868135',
          dataSourceId: 166338439569012500,
          dataSourceName: 'qryConfigInfoPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '7393942',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '929528',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '591812',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '66419',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '212755',
                  code: 'cfGroupCode',
                  name: 'cfGroupCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.cfGroupCode',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'cfGroupCode',
                  },
                },
                {
                  attrId: '7633623',
                  code: 'cfCode',
                  name: 'cfCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.cfCode',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'cfCode',
                  },
                },
                {
                  attrId: '94275484',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                },
                {
                  attrId: '02229',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '64702109',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '723327',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '970371',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '4645321',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '5114214',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '5032193',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '889754',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '1265801',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '902846',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '1193974',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '552357',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '590429',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '440396',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '992084',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '5434248',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '6458344',
                      code: 'cfId',
                      name: 'cfId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '750776',
                      code: 'cfGroupCode',
                      name: 'cfGroupCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '548914',
                      code: 'cfGroupName',
                      name: 'cfGroupName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '127207',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '261906',
                      code: 'cfName',
                      name: 'cfName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '318642',
                      code: 'cfCode',
                      name: 'cfCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5825037',
                      code: 'cfValue',
                      name: 'cfValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166338539205450620,
            options: {
              compId: 'Table_311334_1784965',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '10641',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166338539675701660,
            options: {
              compId: 'Table_311334_1784965',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '5874176',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource8.params =
      [
        {
          title: '事件入参',
          name: 'options_1935318',
          value: '$options_1935318$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource8,
      { options_1935318 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const enable_edit = (options_2172065: any) => {
    const eventDatasetDisable1: any = [
      {
        type: 'setDisable',
        dataId: 166338710181398080,
        options: {
          compId: 'Form_554639',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Form',
          id: '919948',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable1.params =
      [
        {
          title: '事件入参',
          name: 'options_2172065',
          value: '$options_2172065$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable1, { options_2172065 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable2: any = [
      {
        type: 'setDisable',
        dataId: 166338711898050200,
        options: {
          compId: 'Button_490913',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Button',
          id: '970973',
        },
        line_number: 2,
      },
    ];
    eventDatasetDisable2.params =
      [
        {
          title: '事件入参',
          name: 'options_2172065',
          value: '$options_2172065$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable2, { options_2172065 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable3: any = [
      {
        type: 'setDisable',
        dataId: 166338712269201250,
        options: {
          compId: 'Button_807328',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Button',
          id: '443787',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable3.params =
      [
        {
          title: '事件入参',
          name: 'options_2172065',
          value: '$options_2172065$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable3, { options_2172065 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };
  const disable_edit = (options_565758: any) => {
    const eventDatasetDisable4: any = [
      {
        type: 'setDisable',
        dataId: 166338715548745600,
        options: {
          compId: 'Form_554639',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Form',
          id: '541214',
          disabled: 'true',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable4.params =
      [
        {
          title: '事件入参',
          name: 'options_565758',
          value: '$options_565758$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable4, { options_565758 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const forms1 = getFormByCompId('Form_554639', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms1) ? forms1 : [forms1]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable5: any = [
      {
        type: 'setDisable',
        dataId: 166338717985403550,
        options: {
          compId: 'Button_490913',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Button',
          id: '640075',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable5.params =
      [
        {
          title: '事件入参',
          name: 'options_565758',
          value: '$options_565758$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable5, { options_565758 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable6: any = [
      {
        type: 'setDisable',
        dataId: 166338718336546750,
        options: {
          compId: 'Button_807328',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Button',
          id: '257265',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable6.params =
      [
        {
          title: '事件入参',
          name: 'options_565758',
          value: '$options_565758$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable6, { options_565758 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refresh_table,
    enable_edit,
    disable_edit,
  }));

  useEffect(() => {
    const eventDatacallSelfFunc22: any = [
      {
        type: 'callSelfFunc',
        dataId: 166338719970914400,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '1423548',
          pageJsonId: '4868135',
          customFuncName: 'disable_edit',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc22.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc22, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_4868135__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_4868135_1',
          uid: 'View_4868135_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_4868135_1')}
        {...injectData}
      >
        <Card
          name={'属性配置'}
          cardIconType={'middle'}
          title={'系统配置管理'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          extend={[
            {
              id: '2069554',
              title: '新增配置',
              iconPos: 'left',
              btnType: 'primary',
              isIcon: false,
              icon: { theme: 'outlined', type: 'plus', isIconFont: false },
            },
            {
              id: '2417865',
              title: '刷新缓存',
              iconPos: 'left',
              btnType: 'primary',
              icon: { theme: 'outlined', type: 'redo', isIconFont: false },
            },
          ]}
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
            id: 'Card_839649_655036',
            uid: 'Card_839649_655036',
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
            const eventDatasetDataSource85: any = [
              {
                type: 'setDataSource',
                dataId: 166338599403969440,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '835248',
                  pageJsonId: '4868135',
                  dataSourceId: 166338587828443040,
                  dataSourceName: 'local_vars',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '2751435',
                      code: 'op',
                      name: '动作',
                      type: 'string',
                      initialData: { type: 'static', value: 'add' },
                      value: { type: ['customize'], code: 'add' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource85.params =
              [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetDataSource85, { e }, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
            const eventDatacallSelfFunc266: any = [
              {
                type: 'callSelfFunc',
                dataId: 166338721278824000,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '467762',
                  pageJsonId: '4868135',
                  customFuncName: 'enable_edit',
                },
                line_number: 2,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallSelfFunc266.params =
              [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatacallSelfFunc266, { e }, 'callSelfFunc', {
              id: 'callSelfFunc',
              name: 'callSelfFunc',
              type: 'callSelfFunc',
              platform: 'pc',
            });
            const forms36 = getFormByCompId('Form_554639', refs);
            // 支持循环容器中的表单重置
            (Array.isArray(forms36) ? forms36 : [forms36]).forEach((form) =>
              form?.resetFields(),
            );
          }}
          onClickBtn2={(e: any) => {
            const eventDatasetLoading147: any = [
              {
                type: 'setLoading',
                dataId: 166340229479739800,
                options: {
                  compId: 'Table_311334_1784965',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Table',
                  id: '6448013',
                  loading: true,
                },
                line_number: 1,
              },
            ];
            eventDatasetLoading147.params =
              [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetLoading147, { e }, 'setLoading', {
              id: 'setLoading',
              name: 'setLoading',
              type: 'setLoading',
              platform: 'pc',
            });
            const eventDataapiRequest697: any = [
              {
                type: 'apiRequest',
                dataId: 166340229967047800,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '995275',
                  pageJsonId: '4868135',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'loadAllConfigInfosIntoCache',
                  _apiCode: 'loadAllConfigInfosIntoCache',
                  _source: 'rhin',
                  _serviceId: '888336125033803776',
                  _serviceTitle:
                    '刷新所有系统配置缓存: loadAllConfigInfosIntoCache',
                  params: 'object',
                },
                line_number: 2,
                callback1: [
                  {
                    type: 'setLoading',
                    dataId: 166340231800751500,
                    options: {
                      compId: 'Table_311334_1784965',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Table',
                      id: '138236',
                      loading: false,
                    },
                    line_number: 3,
                  },
                  {
                    type: 'showMessage',
                    dataId: 166340233553602850,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '0237773',
                      pageJsonId: '4868135',
                      type: 'success',
                      value: '刷新缓存成功',
                    },
                    line_number: 4,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 166340232330696900,
                    options: {
                      compId: 'Table_311334_1784965',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Table',
                      id: '486751',
                      loading: false,
                    },
                    line_number: 5,
                  },
                ],
              },
            ];
            eventDataapiRequest697.params =
              [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDataapiRequest697, { e }, 'apiRequest', {
              id: 'apiRequest',
              name: 'apiRequest',
              type: 'apiRequest',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_839649_655036')}
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
              id: 'Form_148709_2103377',
              uid: 'Form_148709_2103377',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_148709_2103377')}
            {...injectData}
          >
            <Input
              name={'配置编码'}
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
              placeholder={'CF_CODE'}
              formItemIndex={0}
              fieldName={'cfCode'}
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
                id: 'Input_3889064_9887114',
                uid: 'Input_3889064_9887114',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc270: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refresh_table',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc270.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc270, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3889064_9887114')}
              {...injectData}
            />
            <Input
              name={'分组编码'}
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
              placeholder={'CF_GROUP_CODE'}
              formItemIndex={1}
              fieldName={'cfGroupCode'}
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
                id: 'Input_33684855_0267973',
                uid: 'Input_33684855_0267973',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc271: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refresh_table',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc271.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc271, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_0267973')
              }
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_8261476',
                uid: 'View_841498_8261476',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_841498_8261476')}
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
                  id: 'Button_224226_9699964',
                  uid: 'Button_224226_9699964',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc272: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166338542324018100,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '0366163',
                        pageJsonId: '4868135',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc272.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc272,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_224226_9699964')
                }
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
                  id: 'Button_499055_253437',
                  uid: 'Button_499055_253437',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const forms38 = getFormByCompId('Form_148709_2103377', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms38) ? forms38 : [forms38]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_499055_253437')
                }
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'系统参数表格'}
            isFlexColumn={false}
            pageSize={data?.qryConfigInfoPage?.resultData?.size}
            current={data?.qryConfigInfoPage?.resultData?.current}
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
                title: '配置编码',
                key: 'cfCode',
                dataIndex: 'cfCode',
                className: '',
                id: '706082',
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
                title: '配置名称',
                key: 'cfName',
                dataIndex: 'cfName',
                className: 'divider',
                id: '92296455',
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
                title: '配置值',
                key: 'cfValue',
                dataIndex: 'cfValue',
                className: 'divider',
                id: '233743',
                lineNum: 4,
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
                title: '配置组名称',
                key: 'cfGroupName',
                dataIndex: 'cfGroupName',
                className: 'divider',
                id: '019133',
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
                title: '配置组编码',
                key: 'cfGroupCode',
                dataIndex: 'cfGroupCode',
                className: 'divider',
                id: '508397',
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
                className: 'divider',
                id: '49554993',
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
                title: 'cfId',
                key: 'cfId',
                dataIndex: 'cfId',
                id: '98426',
                hiddenRule: '1',
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
            showSizeChanger={true}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'cfId'}
            rowActions={[
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '88461124',
                checked: true,
              },
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '137833',
                checked: true,
              },
            ]}
            extend={[]}
            dataSource={data?.qryConfigInfoPage?.resultData?.records}
            total={data?.qryConfigInfoPage?.resultData?.total}
            fieldName={'data.qryConfigInfoPage.resultData.total'}
            dataSourceFromDataSourceConfig={
              'data.qryConfigInfoPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_311334_1784965',
              uid: 'Table_311334_1784965',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '16px 0px 0px 0px' }}
            onRowClick={(rowId: any, row: any, index: any) => {}}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource73: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166338470122181730,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '066414',
                    pageJsonId: '4868135',
                    dataSourceId: 166338439569012500,
                    dataSourceName: 'qryConfigInfoPage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '7393942',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '929528',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '591812',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '66419',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '212755',
                            code: 'cfGroupCode',
                            name: 'cfGroupCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.cfGroupCode',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377',
                                'getFieldsValue',
                              ],
                              code: 'cfGroupCode',
                            },
                          },
                          {
                            attrId: '7633623',
                            code: 'cfCode',
                            name: 'cfCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.cfCode',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377',
                                'getFieldsValue',
                              ],
                              code: 'cfCode',
                            },
                          },
                          {
                            attrId: '94275484',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '02229',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '64702109',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '723327',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '970371',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '4645321',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '5114214',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '5032193',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '889754',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '1265801',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '902846',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '1193974',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '552357',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '590429',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '440396',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '992084',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '5434248',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '6458344',
                                code: 'cfId',
                                name: 'cfId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '750776',
                                code: 'cfGroupCode',
                                name: 'cfGroupCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '548914',
                                code: 'cfGroupName',
                                name: 'cfGroupName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '127207',
                                code: 'remark',
                                name: 'remark',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '261906',
                                code: 'cfName',
                                name: 'cfName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '318642',
                                code: 'cfCode',
                                name: 'cfCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5825037',
                                code: 'cfValue',
                                name: 'cfValue',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    otherObjectArrayOptions: {},
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatareloadDataSource73.params =
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
                eventDatareloadDataSource73,
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
              const eventDatasetLoading148: any = [
                {
                  type: 'setLoading',
                  dataId: 166340139955389820,
                  options: {
                    compId: 'Table_311334_1784965',
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Table',
                    id: '6315133',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading148.params =
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
                eventDatasetLoading148,
                { rowId, row, index },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDataapiRequest698: any = [
                {
                  type: 'apiRequest',
                  dataId: 166340140470884260,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '4208543',
                    pageJsonId: '4868135',
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'delSysConfigInfo',
                    _apiCode: 'delSysConfigInfo',
                    _source: 'rhin',
                    _serviceId: '888329715558477824',
                    _serviceTitle: '删除系统配置: delSysConfigInfo',
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
                        dataKey: '4208543_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        children: [
                          {
                            code: 'cfId',
                            name: '新增节点',
                            attrType: 'field',
                            type: 'long',
                            mustFlag: 'T',
                            defaultValue: '',
                            _id: 'path.cfId',
                            compType: 'Input',
                            parents: ['path'],
                            id: 'path.cfId',
                            dataKey: '4208543_path.cfId',
                            value: { type: ['context', '$rowId$'], code: '' },
                          },
                        ],
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '4208543_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '4208543_query',
                      },
                      {
                        code: 'body',
                        name: '请求体',
                        attrType: 'object',
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '4208543_body',
                      },
                    ],
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 166340141988405300,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '816148',
                        pageJsonId: '4868135',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest698.params =
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
                eventDataapiRequest698,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatasetDataSource86: any = [
                {
                  type: 'setDataSource',
                  dataId: 166340011983393400,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '82892',
                    pageJsonId: '4868135',
                    dataSourceId: 166338587828443040,
                    dataSourceName: 'local_vars',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '2751435',
                        code: 'op',
                        name: '动作',
                        type: 'string',
                        initialData: { type: 'static', value: 'add' },
                        value: { type: ['customize'], code: 'edit' },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource86.params =
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
                eventDatasetDataSource86,
                { rowId, row, index },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
              const eventDatacallSelfFunc273: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 166340006582011100,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '850919',
                    pageJsonId: '4868135',
                    customFuncName: 'enable_edit',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166340008042524600,
                      options: {
                        compId: 'Form_554639',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '341324',
                        params: '$row$',
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc273.params =
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
                eventDatacallSelfFunc273,
                { rowId, row, index },
                'callSelfFunc',
                {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_311334_1784965')}
            {...injectData}
          >
            <View
              name={'页面'}
              $$componentItem={{
                id: 'View_852562_1_849143',
                uid: 'View_852562_1_849143',
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
              onRowClick={(rowId: any, row: any, index: any) => {
                const eventDatasetDataSource87: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166158806324216160,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '879912',
                      pageJsonId: '4868135',
                      dataSourceId: 166158805345111460,
                      dataSourceName: 'local_vars',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '591942',
                          code: 'row_attr_code',
                          name: '当前选中行attrCode',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$row$'],
                            hideAttr: false,
                            code: 'attrCode',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource87.params =
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
                  eventDatasetDataSource87,
                  { rowId, row, index },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
                const eventDatareloadDataSource74: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 166150492070030620,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '073867',
                      pageJsonId: '4868135',
                      dataSourceId: 166150476522938660,
                      dataSourceName: 'qryAttrValuePage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '7540705',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'header',
                        },
                        {
                          attrId: '875104',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'path',
                        },
                        {
                          attrId: '5216783',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'query',
                        },
                        {
                          attrId: '349798',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          children: [
                            {
                              attrId: '794537',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.pageNum',
                              value: { type: [], code: 'pageNum' },
                            },
                            {
                              attrId: '98835',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.pageSize',
                              value: { type: [], code: 'pageSize' },
                            },
                            {
                              attrId: '0703534',
                              code: 'attrCode',
                              name: 'attrCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.attrCode',
                              value: {
                                type: ['context', '$row$'],
                                code: 'attrCode',
                                hideAttr: false,
                              },
                            },
                          ],
                          key: 'body',
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '852703',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '023793',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '700767',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '7120073',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '744859',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '1587263',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '4649706',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '9461596',
                              code: 'orders',
                              name: 'orders',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '2496484',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                            },
                            {
                              attrId: '5602213',
                              code: 'optimizeCountSql',
                              name: 'optimizeCountSql',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '339778',
                              code: 'hitCount',
                              name: 'hitCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '29680425',
                              code: 'countId',
                              name: 'countId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '9162207',
                              code: 'maxLimit',
                              name: 'maxLimit',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8918133',
                              code: 'searchCount',
                              name: 'searchCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '173974',
                              code: 'pages',
                              name: 'pages',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '591955',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '3546205',
                                  code: 'attrValueId',
                                  name: 'attrValueId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '658568',
                                  code: 'attrCode',
                                  name: 'attrCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '53923',
                                  code: 'attrValueCode',
                                  name: 'attrValueCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '0457805',
                                  code: 'attrValueName',
                                  name: 'attrValueName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '984759',
                                  code: 'attrValue',
                                  name: 'attrValue',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '144674',
                                  code: 'sort',
                                  name: 'sort',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '690499',
                                  code: 'attrValueDesc',
                                  name: 'attrValueDesc',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '0124592',
                                  code: 'cfgVersion',
                                  name: 'cfgVersion',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '3331082',
                                  code: 'createDate',
                                  name: 'createDate',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '909175',
                                  code: 'createStaffName',
                                  name: 'createStaffName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '254081',
                                  code: 'createStaff',
                                  name: 'createStaff',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '656082',
                                  code: 'updateDate',
                                  name: 'updateDate',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '3472552',
                                  code: 'statusCd',
                                  name: 'statusCd',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '8415476',
                                  code: 'updateStaff',
                                  name: 'updateStaff',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '026749',
                                  code: 'remark',
                                  name: 'remark',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      otherObjectArrayOptions: {},
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatareloadDataSource74.params =
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
                  eventDatareloadDataSource74,
                  { rowId, row, index },
                  'reloadDataSource',
                  {
                    id: 'reloadDataSource',
                    name: 'reloadDataSource',
                    type: 'reloadDataSource',
                    platform: 'pc',
                  },
                );
              }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatareloadDataSource75: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 166338470122181730,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '066414',
                      pageJsonId: '4868135',
                      dataSourceId: 166338439569012500,
                      dataSourceName: 'qryConfigInfoPage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '7393942',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'header',
                        },
                        {
                          attrId: '929528',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'path',
                        },
                        {
                          attrId: '591812',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'query',
                        },
                        {
                          attrId: '66419',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          children: [
                            {
                              attrId: '212755',
                              code: 'cfGroupCode',
                              name: 'cfGroupCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.cfGroupCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_148709_2103377',
                                  'getFieldsValue',
                                ],
                                code: 'cfGroupCode',
                              },
                            },
                            {
                              attrId: '7633623',
                              code: 'cfCode',
                              name: 'cfCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.cfCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_148709_2103377',
                                  'getFieldsValue',
                                ],
                                code: 'cfCode',
                              },
                            },
                            {
                              attrId: '94275484',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.pageNum',
                              value: {
                                type: ['context', '$page$'],
                                hideAttr: true,
                                code: '',
                              },
                            },
                            {
                              attrId: '02229',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              key: 'body.pageSize',
                              value: {
                                type: ['context', '$pageSize$'],
                                hideAttr: true,
                                code: '',
                              },
                            },
                          ],
                          key: 'body',
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '64702109',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '723327',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '970371',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4645321',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '5114214',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '5032193',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '889754',
                              code: 'hitCount',
                              name: 'hitCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '1265801',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '902846',
                              code: 'optimizeCountSql',
                              name: 'optimizeCountSql',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '1193974',
                              code: 'maxLimit',
                              name: 'maxLimit',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '552357',
                              code: 'orders',
                              name: 'orders',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '590429',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                            },
                            {
                              attrId: '440396',
                              code: 'countId',
                              name: 'countId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '992084',
                              code: 'isSearchCount',
                              name: 'isSearchCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '5434248',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '6458344',
                                  code: 'cfId',
                                  name: 'cfId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '750776',
                                  code: 'cfGroupCode',
                                  name: 'cfGroupCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '548914',
                                  code: 'cfGroupName',
                                  name: 'cfGroupName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '127207',
                                  code: 'remark',
                                  name: 'remark',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '261906',
                                  code: 'cfName',
                                  name: 'cfName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '318642',
                                  code: 'cfCode',
                                  name: 'cfCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '5825037',
                                  code: 'cfValue',
                                  name: 'cfValue',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      otherObjectArrayOptions: {},
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatareloadDataSource75.params =
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
                  eventDatareloadDataSource75,
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
              onRowDelete={(rowId: any, row: any, index: any) => {}}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatasetDataSource88: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166340011983393400,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '82892',
                      pageJsonId: '4868135',
                      dataSourceId: 166338587828443040,
                      dataSourceName: 'local_vars',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '2751435',
                          code: 'op',
                          name: '动作',
                          type: 'string',
                          initialData: { type: 'static', value: 'add' },
                          value: { type: ['customize'], code: 'edit' },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource88.params =
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
                  eventDatasetDataSource88,
                  { rowId, row, index },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
                const eventDatacallSelfFunc274: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166340006582011100,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '850919',
                      pageJsonId: '4868135',
                      customFuncName: 'enable_edit',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'setCurrentFormValues',
                        dataId: 166340008042524600,
                        options: {
                          compId: 'Form_554639',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Form',
                          id: '341324',
                          params: '$row$',
                        },
                        line_number: 3,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc274.params =
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
                  eventDatacallSelfFunc274,
                  { rowId, row, index },
                  'callSelfFunc',
                  {
                    id: 'callSelfFunc',
                    name: 'callSelfFunc',
                    type: 'callSelfFunc',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_852562_1_849143')}
              {...injectData}
            />
          </Table>
        </Card>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_600173',
            uid: 'View_600173',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_600173')}
          {...injectData}
        >
          <Card
            name={'动作'}
            cardIconType={'middle'}
            title={functorsMap?.IF(
              data?.local_vars?.op == 'add',
              '新增系统配置',
              '编辑系统配置',
            )}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            fieldName={'data.local_vars.op'}
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
              id: 'Card_990192',
              uid: 'Card_990192',
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
            ref={(r: any) => refs.setComponentRef(r, 'Card_990192')}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={12}
              labelCol={'6'}
              wrapperCol={'18'}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_554639'}
              $$componentItem={{
                id: 'Form_554639',
                uid: 'Form_554639',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_554639')}
              {...injectData}
            >
              <Input
                name={'配置名称'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={0}
                fieldName={'cfName'}
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
                  id: 'Input_179302',
                  uid: 'Input_179302',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_179302')}
                {...injectData}
              />
              <Input
                name={'配置编码'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={1}
                fieldName={'cfCode'}
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
                  id: 'Input_815101',
                  uid: 'Input_815101',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_815101')}
                {...injectData}
              />
              <Input
                name={'配置值'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={2}
                fieldName={'cfValue'}
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
                  id: 'Input_31668',
                  uid: 'Input_31668',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_31668')}
                {...injectData}
              />
              <Input
                name={'配置组名称'}
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
                placeholder={'请输入'}
                formItemIndex={3}
                fieldName={'cfGroupName'}
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
                  id: 'Input_083551',
                  uid: 'Input_083551',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_083551')}
                {...injectData}
              />
              <Input
                name={'配置组编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={18}
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
                fieldName={'cfGroupCode'}
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
                  id: 'Input_81046206',
                  uid: 'Input_81046206',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_81046206')}
                {...injectData}
              />
              <Input
                name={'备注'}
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
                placeholder={'请输入'}
                formItemIndex={5}
                fieldName={'remark'}
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
                  id: 'Input_3702257',
                  uid: 'Input_3702257',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_3702257')}
                {...injectData}
              />
              <Input
                name={'主键'}
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
                formItemIndex={6}
                fieldName={'cfId'}
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
                  id: 'Input_7977357',
                  uid: 'Input_7977357',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_7977357')}
                {...injectData}
              />
            </Form>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_55858',
                uid: 'View_55858',
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
                margin: '16px 0px 0px 0px',
                justifyContent: 'center',
                gap: '12px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_55858')}
              {...injectData}
            >
              <Button
                name={'确定'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_490913',
                  uid: 'Button_490913',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatavalidateCurrentForm70: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 166338784311768220,
                      options: {
                        compId: 'Form_554639',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '452104',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166338785956644380,
                          options: {
                            compId: 'Button_490913',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Button',
                            id: '341065',
                            loading: true,
                          },
                          line_number: 2,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166338784981324700,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '510064',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'addSysConfigInfo',
                            _apiCode: 'addSysConfigInfo',
                            _source: 'rhin',
                            _serviceId: '888274066832494592',
                            _serviceTitle: '新增系统配置: addSysConfigInfo',
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
                                dataKey: '510064_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '510064_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '510064_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'cfGroupCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.cfGroupCode',
                                    compType: 'Input',
                                    name: 'cfGroupCode',
                                    parents: ['body'],
                                    id: 'body.cfGroupCode',
                                    dataKey: '510064_body.cfGroupCode',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'cfGroupCode',
                                    },
                                  },
                                  {
                                    code: 'cfValue',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.cfValue',
                                    compType: 'Input',
                                    name: 'cfValue',
                                    parents: ['body'],
                                    id: 'body.cfValue',
                                    dataKey: '510064_body.cfValue',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'cfValue',
                                    },
                                  },
                                  {
                                    code: 'cfName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.cfName',
                                    compType: 'Input',
                                    name: 'cfName',
                                    parents: ['body'],
                                    id: 'body.cfName',
                                    dataKey: '510064_body.cfName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'cfName',
                                    },
                                  },
                                  {
                                    code: 'cfCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.cfCode',
                                    compType: 'Input',
                                    name: 'cfCode',
                                    parents: ['body'],
                                    id: 'body.cfCode',
                                    dataKey: '510064_body.cfCode',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'cfCode',
                                    },
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
                                    dataKey: '510064_body.remark',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'remark',
                                    },
                                  },
                                  {
                                    code: 'cfGroupName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.cfGroupName',
                                    compType: 'Input',
                                    name: 'cfGroupName',
                                    parents: ['body'],
                                    id: 'body.cfGroupName',
                                    dataKey: '510064_body.cfGroupName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'cfGroupName',
                                    },
                                  },
                                  {
                                    code: 'cfId',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.cfId',
                                    compType: 'Input',
                                    parents: ['body'],
                                    id: 'body.cfId',
                                    dataKey: '510064_body.cfId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_554639',
                                        'validateFields',
                                      ],
                                      code: 'cfId',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '510064_body',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setLoading',
                              dataId: 166338784981387620,
                              options: {
                                compId: 'Button_490913',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '8012554',
                                loading: false,
                              },
                              line_number: 4,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166338784981332960,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '8485404',
                                pageJsonId: '4868135',
                                customFuncName: 'disable_edit',
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166338784981342720,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '8726813',
                                pageJsonId: '4868135',
                                customFuncName: 'refresh_table',
                              },
                              line_number: 6,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166338784981386370,
                              options: {
                                compId: 'Button_490913',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '005055',
                                loading: false,
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatavalidateCurrentForm70.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm70,
                    { e },
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_490913')}
                {...injectData}
              />
              <Button
                name={'取消'}
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
                  id: 'Button_807328',
                  uid: 'Button_807328',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc275: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166338724448968200,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '2724684',
                        pageJsonId: '4868135',
                        customFuncName: 'disable_edit',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc275.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc275,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_807328')}
                {...injectData}
              />
            </View>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(SysConfigInfoManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
