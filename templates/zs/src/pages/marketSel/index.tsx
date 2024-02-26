// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '899632499889246208';
const MarketSel$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {
    const eventDatagetTableSelected13: any = [
      {
        type: 'getTableSelected',
        dataId: 166797450591608220,
        options: {
          compId: 'Table_08098',
          compLib: 'comm',
          pageJsonId: '6584614',
          compName: 'Table',
          id: '757539',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '7166544',
                options: {
                  context: '$selectedRows_757539$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166797454687588480,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166797458465044480,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166797458930673660,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '024042',
                      pageJsonId: '6584614',
                      type: 'error',
                      value: '请选择营销案',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    line_number: 5,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166797458930673660,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '024042',
                      pageJsonId: '6584614',
                      type: 'error',
                      value: '请选择营销案',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 166797456945203040,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '618805',
                  pageJsonId: '6584614',
                  params: '$selectedRows_757539$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 166797457278787170,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '822762',
                  pageJsonId: '6584614',
                },
                line_number: 4,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelected13.params = [] || [];
    CMDGenerator(eventDatagetTableSelected13, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal117: any = [
      {
        type: 'closeModal',
        dataId: '8772976_1',
        options: { compId: 'page', compName: 'page', id: '64313' },
        line_number: 1,
      },
    ];
    eventDatacloseModal117.params = [] || [];
    CMDGenerator(eventDatacloseModal117, {}, 'closeModal', {
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
    const eventDatareloadDataSource62: any = [
      {
        type: 'reloadDataSource',
        dataId: 166797395461902560,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '908014',
          pageJsonId: '6584614',
          dataSourceId: 166797366047139300,
          dataSourceName: 'queryMarketCaseInfo',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '8829294',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '0805984',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '617624',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '1044376',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '7333488',
                  code: 'saleId',
                  name: '营销案编码',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '4385291',
                  code: 'saleName',
                  name: '营销案名称',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '892457',
                  code: 'marketTypeLabel',
                  name: '营销案类型',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '570374',
                  code: 'homeCity',
                  name: '地市',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '0655817',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '89966086',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2516822',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '407794',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'objectArray',
              children: [
                {
                  attrId: '5669',
                  code: 'area',
                  name: 'area',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '878562',
                  code: 'assumeAmount',
                  name: 'assumeAmount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '033644',
                  code: 'prestoreMaxMultiple',
                  name: 'prestoreMaxMultiple',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '296816',
                  code: 'saleId',
                  name: 'saleId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5486203',
                  code: 'consumptionType',
                  name: 'consumptionType',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '79768',
                  code: 'saleDesc',
                  name: 'saleDesc',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '968902',
                  code: 'lastDiscount',
                  name: 'lastDiscount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2420083',
                  code: 'saleName',
                  name: 'saleName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '424659',
                  code: 'expireTime',
                  name: 'expireTime',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '77818443',
                  code: 'inureType',
                  name: 'inureType',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '407493',
                  code: 'acceptMul',
                  name: 'acceptMul',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '41256',
                  code: 'inureTime',
                  name: 'inureTime',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8870129',
                  code: 'prestoreInfo',
                  name: 'prestoreInfo',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '2968595',
                      code: 'prestoreAmount',
                      name: 'prestoreAmount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '952629',
                      code: 'billitemInfo',
                      name: 'billitemInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '992075',
                          code: 'discountAmount',
                          name: 'discountAmount',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                      ],
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
    eventDatareloadDataSource62.params = [] || [];
    CMDGenerator(eventDatareloadDataSource62, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_6584614__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_6584614_1',
          uid: 'View_6584614_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_6584614_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_415392',
            uid: 'View_415392',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_415392')}
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
            formCode={'Form_490502'}
            $$componentItem={{
              id: 'Form_490502',
              uid: 'Form_490502',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_490502')}
            {...injectData}
          >
            <Input
              name={'营销案编码'}
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
              fieldName={'saleId'}
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
                id: 'Input_1569666',
                uid: 'Input_1569666',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_1569666')}
              {...injectData}
            />
            <Input
              name={'营销案名称'}
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
              fieldName={'saleName'}
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
                id: 'Input_322461',
                uid: 'Input_322461',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_322461')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_989063',
                uid: 'View_989063',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
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
              ref={(r: any) => refs.setComponentRef(r, 'View_989063')}
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
                disabled={false}
                visible={true}
                type={'primary'}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_9758254',
                  uid: 'Button_9758254',
                  type: 'Button',
                  ...componentItem,
                }}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                onClick={(e: any) => {
                  const eventDatagetCurrentFormValues42: any = [
                    {
                      type: 'getCurrentFormValues',
                      dataId: 166797433871441440,
                      options: {
                        compId: 'Form_490502',
                        compLib: 'comm',
                        pageJsonId: '6584614',
                        compName: 'Form',
                        id: '0652195',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 166797436723592800,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '8182643',
                            pageJsonId: '6584614',
                            dataSourceId: 166797366047139300,
                            dataSourceName: 'queryMarketCaseInfo',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '8829294',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '0805984',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '617624',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '1044376',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '7333488',
                                    code: 'saleId',
                                    name: '营销案编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_490502',
                                        'getFieldsValue',
                                      ],
                                      code: 'saleId',
                                    },
                                  },
                                  {
                                    attrId: '4385291',
                                    code: 'saleName',
                                    name: '营销案名称',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_490502',
                                        'getFieldsValue',
                                      ],
                                      code: 'saleName',
                                    },
                                  },
                                  {
                                    attrId: '892457',
                                    code: 'marketTypeLabel',
                                    name: '营销案类型',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '570374',
                                    code: 'homeCity',
                                    name: '地市',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                ],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '0655817',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '89966086',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2516822',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '407794',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '5669',
                                    code: 'area',
                                    name: 'area',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '878562',
                                    code: 'assumeAmount',
                                    name: 'assumeAmount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '033644',
                                    code: 'prestoreMaxMultiple',
                                    name: 'prestoreMaxMultiple',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '296816',
                                    code: 'saleId',
                                    name: 'saleId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '5486203',
                                    code: 'consumptionType',
                                    name: 'consumptionType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '79768',
                                    code: 'saleDesc',
                                    name: 'saleDesc',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '968902',
                                    code: 'lastDiscount',
                                    name: 'lastDiscount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2420083',
                                    code: 'saleName',
                                    name: 'saleName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '424659',
                                    code: 'expireTime',
                                    name: 'expireTime',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '77818443',
                                    code: 'inureType',
                                    name: 'inureType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '407493',
                                    code: 'acceptMul',
                                    name: 'acceptMul',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '41256',
                                    code: 'inureTime',
                                    name: 'inureTime',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8870129',
                                    code: 'prestoreInfo',
                                    name: 'prestoreInfo',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '2968595',
                                        code: 'prestoreAmount',
                                        name: 'prestoreAmount',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '952629',
                                        code: 'billitemInfo',
                                        name: 'billitemInfo',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'objectArray',
                                        children: [
                                          {
                                            attrId: '992075',
                                            code: 'discountAmount',
                                            name: 'discountAmount',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                        ],
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
                      ],
                    },
                  ];
                  eventDatagetCurrentFormValues42.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetCurrentFormValues42,
                    { e },
                    'getCurrentFormValues',
                    {
                      id: 'getCurrentFormValues',
                      name: 'getCurrentFormValues',
                      type: 'getCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_9758254')}
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
                disabled={false}
                visible={true}
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_9067789',
                  uid: 'Button_9067789',
                  type: 'Button',
                  ...componentItem,
                }}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
                onClick={(e: any) => {
                  const forms212 = getFormByCompId('Form_490502', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms212) ? forms212 : [forms212]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_9067789')}
                {...injectData}
              />
            </View>
          </Form>
        </View>
        <Table
          name={'表格'}
          isFlexColumn={false}
          pageSize={10}
          current={1}
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
              title: '营销案编码',
              key: 'saleId',
              dataIndex: 'saleId',
              className: '',
              id: '2480826',
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
              title: '营销案名称',
              key: 'saleName',
              dataIndex: 'saleName',
              className: 'divider',
              id: '823689',
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
              title: '营销案描述',
              key: 'saleDesc',
              dataIndex: 'saleDesc',
              className: 'divider',
              id: '267554',
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
              title: '生效时间',
              key: 'inureTime',
              dataIndex: 'inureTime',
              id: '665663',
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
              title: '失效时间',
              key: 'expireTime',
              dataIndex: 'expireTime',
              id: '030299',
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
          rowKeyType={'auto'}
          visible={true}
          editMode={'single'}
          selectType={functorsMap?.IF(
            state?.multiple === '1',
            'radio',
            'checkbox',
          )}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={{
            type: functorsMap?.IF(state?.multiple === '1', 'radio', 'checkbox'),
          }}
          showHead={false}
          showTotal={false}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.queryMarketCaseInfo?.resultData}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.queryMarketCaseInfo.resultData'}
          $$componentItem={{
            id: 'Table_08098',
            uid: 'Table_08098',
            type: 'Table',
            ...componentItem,
          }}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDoubleClick={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode898: any = [
              {
                type: 'customActionCode',
                dataId: 166627075396474000,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '729138',
                  pageJsonId: '6584614',
                  code: 'function main(data,state,success,fail){var resRt=row;var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;resRt.rowId=rowId;success(resRt)};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 166627075914085100,
                    shielding: true,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '6051767',
                      pageJsonId: '6584614',
                      params: '$data_729138$',
                    },
                    line_number: 2,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166627076165370140,
                    shielding: true,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '9257062',
                      pageJsonId: '6584614',
                    },
                    line_number: 3,
                  },
                ],
                callback2: [],
              },
            ];
            eventDatacustomActionCode898.params =
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
              eventDatacustomActionCode898,
              { rowId, row, index },
              'customActionCode',
              {
                id: 'customActionCode',
                name: 'customActionCode',
                type: 'customActionCode',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Table_08098')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(MarketSel$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', multiple: '' },
});
