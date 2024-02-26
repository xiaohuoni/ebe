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
  Table,
  TextArea,
  Select,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '896272552489095168';
const SmsInfo$$Page: React.FC<PageProps> = ({
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
  const refresh_table = (options_453492: any) => {
    const eventDatasetLoading37: any = [
      {
        type: 'setLoading',
        dataId: 166529463734848200,
        options: {
          compId: 'Table_7176273',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Table',
          id: '59448',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading37.params =
      [
        {
          title: '事件入参',
          name: 'options_453492',
          value: '$options_453492$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading37, { options_453492 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource51: any = [
      {
        type: 'reloadDataSource',
        dataId: 166538361374166560,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '601595',
          pageJsonId: '324541',
          dataSourceId: 166528439487152740,
          dataSourceName: 'qrySmsInfoPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '045025',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '916869',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '884828',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '5753183',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '852852',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '334868',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '671957',
                  code: 'phone',
                  name: 'phone',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_777001', 'getFieldsValue'],
                    code: 'phone',
                  },
                },
                {
                  attrId: '2272593',
                  code: 'smsContent',
                  name: 'smsContent',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_777001', 'getFieldsValue'],
                    code: 'smsContent',
                  },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '178715',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '651925',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '203591',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '4351971',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '005985',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '74434',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '006247',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '013661',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '1564288',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '437743',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '685243',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '0069502',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '4965',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '124354',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '347515',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '998185',
                      code: 'execCount',
                      name: 'execCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6096636',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '137573',
                      code: 'smsInfoId',
                      name: 'smsInfoId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '9620126',
                      code: 'staffCode',
                      name: 'staffCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '972747',
                      code: 'phone',
                      name: 'phone',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '814989',
                      code: 'requestType',
                      name: 'requestType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5772363',
                      code: 'smsContent',
                      name: 'smsContent',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '026504',
                      code: 'isValid',
                      name: 'isValid',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '98923',
                      code: 'isSms',
                      name: 'isSms',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '360377',
                      code: 'setTime',
                      name: 'setTime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'datetime',
                    },
                    {
                      attrId: '652199',
                      code: 'statusDate',
                      name: 'statusDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '041283',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7616265',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '447601',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'datetime',
                    },
                    {
                      attrId: '794694',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '022022',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'datetime',
                    },
                    {
                      attrId: '140088',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '071734',
                      code: 'busiObjNbr',
                      name: 'busiObjNbr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4622598',
                      code: 'templateCode',
                      name: 'templateCode',
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
            dataId: 166538362206709250,
            options: {
              compId: 'Table_7176273',
              compLib: 'comm',
              pageJsonId: '324541',
              compName: 'Table',
              id: '1310277',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166538362698770000,
            options: {
              compId: 'Table_7176273',
              compLib: 'comm',
              pageJsonId: '324541',
              compName: 'Table',
              id: '174389',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource51.params =
      [
        {
          title: '事件入参',
          name: 'options_453492',
          value: '$options_453492$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource51,
      { options_453492 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const enable_edit = (options_397798: any) => {
    const eventDatasetDisable31: any = [
      {
        type: 'setDisable',
        dataId: 166529493626163700,
        options: {
          compId: 'Form_7102554',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Form',
          id: '120497',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable31.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable31, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable32: any = [
      {
        type: 'setDisable',
        dataId: 166529494365367400,
        options: {
          compId: 'Button_77357',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Button',
          id: '534508',
        },
        line_number: 2,
      },
    ];
    eventDatasetDisable32.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable32, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable33: any = [
      {
        type: 'setDisable',
        dataId: 166529494549784160,
        options: {
          compId: 'Button_393197',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Button',
          id: '072904',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable33.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable33, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable34: any = [
      {
        type: 'setDisable',
        dataId: 166529528508449540,
        options: {
          compId: 'Input_852248',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Input',
          id: '578765',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable34.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable34, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable35: any = [
      {
        type: 'setDisable',
        dataId: 166529528804356670,
        options: {
          compId: 'Input_767033',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Input',
          id: '0934918',
          disabled: 'true',
        },
        line_number: 5,
      },
    ];
    eventDatasetDisable35.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable35, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable36: any = [
      {
        type: 'setDisable',
        dataId: 166529529061893700,
        options: {
          compId: 'Input_619303',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Input',
          id: '474334',
          disabled: 'true',
        },
        line_number: 6,
      },
    ];
    eventDatasetDisable36.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable36, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable37: any = [
      {
        type: 'setDisable',
        dataId: 166529529346576160,
        options: {
          compId: 'Input_2797085',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Input',
          id: '454566',
          disabled: 'true',
        },
        line_number: 7,
      },
    ];
    eventDatasetDisable37.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable37, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable38: any = [
      {
        type: 'setDisable',
        dataId: 166530287800344060,
        options: {
          compId: 'Input_3082727',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Input',
          id: '9773838',
          disabled: 'true',
        },
        line_number: 8,
      },
    ];
    eventDatasetDisable38.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable38, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable39: any = [
      {
        type: 'setDisable',
        dataId: 166530290986242850,
        options: {
          compId: 'Input_835318',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Input',
          id: '18005',
          disabled: 'true',
        },
        line_number: 9,
      },
    ];
    eventDatasetDisable39.params =
      [
        {
          title: '事件入参',
          name: 'options_397798',
          value: '$options_397798$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable39, { options_397798 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };
  const disable_edit = (options_7347994: any) => {
    const eventDatasetDisable40: any = [
      {
        type: 'setDisable',
        dataId: 166529496923140640,
        options: {
          compId: 'Form_7102554',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Form',
          id: '32845',
          disabled: 'true',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable40.params =
      [
        {
          title: '事件入参',
          name: 'options_7347994',
          value: '$options_7347994$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable40, { options_7347994 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const forms13 = getFormByCompId('Form_7102554', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms13) ? forms13 : [forms13]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable41: any = [
      {
        type: 'setDisable',
        dataId: 166529497346563260,
        options: {
          compId: 'Button_77357',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Button',
          id: '654015',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable41.params =
      [
        {
          title: '事件入参',
          name: 'options_7347994',
          value: '$options_7347994$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable41, { options_7347994 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable42: any = [
      {
        type: 'setDisable',
        dataId: 166529497558142530,
        options: {
          compId: 'Button_393197',
          compLib: 'comm',
          pageJsonId: '324541',
          compName: 'Button',
          id: '2849763',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable42.params =
      [
        {
          title: '事件入参',
          name: 'options_7347994',
          value: '$options_7347994$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable42, { options_7347994 }, 'setDisable', {
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
    const eventDatacallSelfFunc50: any = [
      {
        type: 'callSelfFunc',
        dataId: 166529539076301760,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '74162',
          pageJsonId: '324541',
          customFuncName: 'disable_edit',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc50.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc50, {}, 'callSelfFunc', {
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
      className="__CustomClass_324541__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_324541_1',
          uid: 'View_324541_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_324541_1')}
        {...injectData}
      >
        <Card
          name={'短信列表'}
          cardIconType={'middle'}
          title={'短信列表'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          visible={true}
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
            id: 'Card_324043',
            uid: 'Card_324043',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_324043')}
          {...injectData}
        >
          <Form
            name={'短信列表'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_777001'}
            $$componentItem={{
              id: 'Form_777001',
              uid: 'Form_777001',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_777001')}
            {...injectData}
          >
            <Input
              name={'手机号'}
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
              fieldName={'phone'}
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
                id: 'Input_528228',
                uid: 'Input_528228',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc817: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166529551256452800,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '041831',
                      pageJsonId: '324541',
                      customFuncName: 'refresh_table',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc817.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc817, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_528228')}
              {...injectData}
            />
            <Input
              name={'短信内容'}
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
              fieldName={'smsContent'}
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
                id: 'Input_35058',
                uid: 'Input_35058',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc818: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166538246616847900,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '69983',
                      pageJsonId: '324541',
                      customFuncName: 'refresh_table',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc818.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc818, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_35058')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_9485957',
                uid: 'View_9485957',
                type: 'View',
                ...componentItem,
              }}
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
                padding: '0px 0px 0px 12px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_9485957')}
              {...injectData}
            >
              <Button
                name={'查询'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_576403',
                  uid: 'Button_576403',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc819: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166529557430542700,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '158955',
                        pageJsonId: '324541',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc819.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc819,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_576403')}
                {...injectData}
              />
              <Button
                name={'重置'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_113745',
                  uid: 'Button_113745',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const forms208 = getFormByCompId('Form_777001', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms208) ? forms208 : [forms208]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_113745')}
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'total'}
            isFlexColumn={false}
            pageSize={5}
            current={data?.qrySmsInfoPage?.resultData?.current}
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
                title: '手机号码',
                key: 'phone',
                dataIndex: 'phone',
                className: '',
                id: '51966',
                width: null,
                align: 'left',
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
                title: '请求类型',
                key: 'requestType',
                dataIndex: 'requestType',
                className: 'divider',
                id: '646291',
                width: null,
                align: 'left',
                staticDataSource: [
                  { id: '415542', label: '正常', value: '1000' },
                  { id: '787762', label: '紧急', value: '2000' },
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
                title: '是否失效',
                key: 'isValid',
                dataIndex: 'isValid',
                className: 'divider',
                id: '103664',
                width: null,
                align: 'left',
                staticDataSource: [
                  { id: '063502', label: '是', value: '1' },
                  { id: '360331', label: '否', value: '0' },
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
                title: '是否已发',
                key: 'isSms',
                dataIndex: 'isSms',
                className: 'divider',
                id: '251054',
                width: null,
                align: 'left',
                staticDataSource: [
                  { id: '053405', label: '是', value: '1' },
                  { id: '544917', label: '否', value: '0' },
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
                title: '固定时间发送',
                key: 'setTime',
                dataIndex: 'setTime',
                className: 'divider',
                id: '281143',
                width: null,
                align: 'left',
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
                title: '执行次数',
                key: 'execCount',
                dataIndex: 'execCount',
                className: 'divider',
                id: '51158',
                width: null,
                align: 'left',
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
                key: 'createStaffName',
                dataIndex: 'createStaffName',
                className: 'divider',
                id: '389653',
                width: null,
                align: 'left',
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
                id: '617963',
                width: null,
                align: 'left',
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
            visible={true}
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
            dataSource={data?.qrySmsInfoPage?.resultData?.records}
            rowKey={'smsInfoId'}
            fieldName={'data.qrySmsInfoPage.resultData.current'}
            total={data?.qrySmsInfoPage?.resultData?.total}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.qrySmsInfoPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_7176273',
              uid: 'Table_7176273',
              type: 'Table',
              ...componentItem,
            }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource135: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166529585740391580,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '766748',
                    pageJsonId: '324541',
                    dataSourceId: 166528439487152740,
                    dataSourceName: 'qrySmsInfoPage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '045025',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '916869',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '884828',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '5753183',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '852852',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '334868',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: { type: ['context', '$page$'], code: '' },
                          },
                          {
                            attrId: '671957',
                            code: 'phone',
                            name: 'phone',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '2272593',
                            code: 'smsContent',
                            name: 'smsContent',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '178715',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '651925',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '203591',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '4351971',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '005985',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '74434',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '006247',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '013661',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '1564288',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '437743',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '685243',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '0069502',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '4965',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '124354',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '347515',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '998185',
                                code: 'execCount',
                                name: 'execCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6096636',
                                code: 'statusCd',
                                name: 'statusCd',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '137573',
                                code: 'smsInfoId',
                                name: 'smsInfoId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '9620126',
                                code: 'staffCode',
                                name: 'staffCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '972747',
                                code: 'phone',
                                name: 'phone',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '814989',
                                code: 'requestType',
                                name: 'requestType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5772363',
                                code: 'smsContent',
                                name: 'smsContent',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '026504',
                                code: 'isValid',
                                name: 'isValid',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '98923',
                                code: 'isSms',
                                name: 'isSms',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '360377',
                                code: 'setTime',
                                name: 'setTime',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'datetime',
                              },
                              {
                                attrId: '652199',
                                code: 'statusDate',
                                name: 'statusDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '041283',
                                code: 'createStaff',
                                name: 'createStaff',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7616265',
                                code: 'createStaffName',
                                name: 'createStaffName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '447601',
                                code: 'createDate',
                                name: 'createDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'datetime',
                              },
                              {
                                attrId: '794694',
                                code: 'updateStaff',
                                name: 'updateStaff',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '022022',
                                code: 'updateDate',
                                name: 'updateDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'datetime',
                              },
                              {
                                attrId: '140088',
                                code: 'remark',
                                name: 'remark',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '071734',
                                code: 'busiObjNbr',
                                name: 'busiObjNbr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '4622598',
                                code: 'templateCode',
                                name: 'templateCode',
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
              eventDatareloadDataSource135.params =
                [
                  { title: '当前页码取值', name: 'page', value: '$page$' },
                  {
                    title: '当前页尺寸',
                    name: 'pageSize',
                    value: '$pageSize$',
                  },
                ] || [];
              CMDGenerator(
                eventDatareloadDataSource135,
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
              const eventDatasetCurrentFormValues39: any = [
                {
                  type: 'setCurrentFormValues',
                  dataId: 166538141949282600,
                  options: {
                    compId: 'Form_7102554',
                    compLib: 'comm',
                    pageJsonId: '324541',
                    compName: 'Form',
                    id: '8265054',
                    params: '$row$',
                  },
                  line_number: 1,
                },
              ];
              eventDatasetCurrentFormValues39.params =
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
                eventDatasetCurrentFormValues39,
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
            onRowClick={(rowId: any, row: any, index: any) => {
              const eventDatasetCurrentFormValues40: any = [
                {
                  type: 'setCurrentFormValues',
                  dataId: 166538179940578880,
                  options: {
                    compId: 'Form_7102554',
                    compLib: 'comm',
                    pageJsonId: '324541',
                    compName: 'Form',
                    id: '7021085',
                    params: '$row$',
                  },
                  line_number: 1,
                },
              ];
              eventDatasetCurrentFormValues40.params =
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
                eventDatasetCurrentFormValues40,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_7176273')}
            {...injectData}
          />
        </Card>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_186485',
            uid: 'View_186485',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_186485')}
          {...injectData}
        >
          <Card
            name={'短信详情'}
            cardIconType={'middle'}
            title={'短信详情'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            visible={true}
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
              id: 'Card_80665877',
              uid: 'Card_80665877',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_80665877')}
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
              visible={true}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_7102554'}
              $$componentItem={{
                id: 'Form_7102554',
                uid: 'Form_7102554',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_7102554')}
              {...injectData}
            >
              <Input
                name={'客户经理工号'}
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
                formItemIndex={0}
                fieldName={'staffCode'}
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
                  id: 'Input_2588383',
                  uid: 'Input_2588383',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_2588383')}
                {...injectData}
              />
              <Input
                name={'手机号码'}
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
                formItemIndex={1}
                fieldName={'phone'}
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
                  id: 'Input_6414946',
                  uid: 'Input_6414946',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_6414946')}
                {...injectData}
              />
              <TextArea
                name={'短信内容'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                readOnly={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'无'}
                fieldName={'smsContent'}
                formItemIndex={2}
                $$componentItem={{
                  id: 'Input_82301',
                  uid: 'Input_82301',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_82301')}
                {...injectData}
              />
              <Select
                name={'请求类型'}
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
                fieldName={'requestType'}
                formItemIndex={3}
                dataSource={[
                  { id: '523423', label: '正常', value: '1000' },
                  { id: '773925', label: '紧急', value: '2000' },
                ]}
                $$componentItem={{
                  id: 'Input_747164',
                  uid: 'Input_747164',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_747164')}
                {...injectData}
              />
              <Select
                name={'是否失效'}
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
                fieldName={'isValid'}
                formItemIndex={4}
                dataSource={[
                  { id: '670946', label: '是', value: '1' },
                  { id: '421286', label: '否', value: '0' },
                ]}
                $$componentItem={{
                  id: 'Input_641907',
                  uid: 'Input_641907',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_641907')}
                {...injectData}
              />
              <Select
                name={'是否已发'}
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
                fieldName={'isSms'}
                formItemIndex={5}
                dataSource={[
                  { id: '705406', label: '是', value: '1' },
                  { id: '7680483', label: '否', value: '0' },
                ]}
                $$componentItem={{
                  id: 'Input_9832584',
                  uid: 'Input_9832584',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_9832584')}
                {...injectData}
              />
              <Input
                name={'固定时间发送'}
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
                formItemIndex={6}
                fieldName={'setTime'}
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
                  id: 'Input_0847962',
                  uid: 'Input_0847962',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_0847962')}
                {...injectData}
              />
              <Input
                name={'执行次数'}
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
                formItemIndex={7}
                fieldName={'execCount'}
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
                  id: 'Input_345016',
                  uid: 'Input_345016',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_345016')}
                {...injectData}
              />
              <Input
                name={'创建人名称'}
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
                formItemIndex={8}
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
                  id: 'Input_852248',
                  uid: 'Input_852248',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_852248')}
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
                formItemIndex={9}
                fieldName={'createDate'}
                disabled={false}
                visible={true}
                readOnly={false}
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
                  id: 'Input_767033',
                  uid: 'Input_767033',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_767033')}
                {...injectData}
              />
              <Input
                name={'更新人'}
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
                formItemIndex={10}
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
                  id: 'Input_619303',
                  uid: 'Input_619303',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_619303')}
                {...injectData}
              />
              <Input
                name={'更新时间'}
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
                formItemIndex={11}
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
                  id: 'Input_2797085',
                  uid: 'Input_2797085',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_2797085')}
                {...injectData}
              />
              <TextArea
                name={'备注'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                readOnly={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'无'}
                fieldName={'remark'}
                formItemIndex={12}
                $$componentItem={{
                  id: 'Input_081212',
                  uid: 'Input_081212',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_081212')}
                {...injectData}
              />
            </Form>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(SmsInfo$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
