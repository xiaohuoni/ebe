// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '1067262045113536512';
const Xuanzerenyuanguanlianzu22223072copy$$Modal: React.FC<PageProps> = ({
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
  const refreshTable = (options_572314: any) => {
    const eventDatasetLoading5: any = [
      {
        type: 'setLoading',
        dataId: 167888207565480200,
        options: {
          compId: 'Table_5176025',
          compLib: 'comm',
          pageJsonId: '482782',
          compName: 'Table',
          id: '884059',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading5.params =
      [
        {
          title: '事件入参',
          name: 'options_572314',
          value: '$options_572314$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading5, { options_572314 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource1: any = [
      {
        type: 'reloadDataSource',
        dataId: 167888208259954600,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '335538',
          pageJsonId: '482782',
          dataSourceId: 167888146888583600,
          dataSourceName: 'qryDcOaOrgPageExcludeSelected',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '8959673',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '3829004',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '266759',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '57982',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '1953304',
                  code: 'orgCodes',
                  name: 'orgCodes',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.orgCodes',
                },
                {
                  attrId: '7175294',
                  code: 'usrKey',
                  name: 'usrKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKey',
                  value: { type: ['context', '$state.usrKey$'], code: '' },
                },
                {
                  attrId: '084764',
                  code: 'orgName',
                  name: 'orgName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.orgName',
                  value: {
                    type: [
                      'form',
                      'Form_148709_2103377_216161',
                      'getFieldsValue',
                    ],
                    code: 'orgName',
                  },
                },
                {
                  attrId: '93153',
                  code: 'orgCode',
                  name: 'orgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.orgCode',
                  value: {
                    type: [
                      'form',
                      'Form_148709_2103377_216161',
                      'getFieldsValue',
                    ],
                    code: 'orgCode',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '669437',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '296437',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '129386',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '346713',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '0106754',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '531578',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8111335',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '036441',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1116463',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1593937',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8196767',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '347364',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '815129',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '33019',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '9944954',
                      code: 'orgName',
                      name: 'orgName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6712927',
                      code: 'orgKeyPath',
                      name: 'orgKeyPath',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9663034',
                      code: 'orgDisabled',
                      name: 'orgDisabled',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3835',
                      code: 'parentOrgKey',
                      name: 'parentOrgKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '749061',
                      code: 'orgLevel',
                      name: 'orgLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '40455',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '997911',
                      code: 'orgDataType',
                      name: 'orgDataType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '658412',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '331932',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '040106',
                      code: 'orgOrder',
                      name: 'orgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '605645',
                      code: 'orgType',
                      name: 'orgType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '122223',
                      code: 'orgUpdateby',
                      name: 'orgUpdateby',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '036271',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '689291',
                      code: 'orgUpdate',
                      name: 'orgUpdate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '397776',
                      code: 'orgCreateby',
                      name: 'orgCreateby',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '236221',
                      code: 'orgCode',
                      name: 'orgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '589976',
                      code: 'isImportant',
                      name: 'isImportant',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '311319',
                      code: 'isGe',
                      name: 'isGe',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '908234',
                      code: 'orgKey',
                      name: 'orgKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '296604',
                      code: 'orgCreate',
                      name: 'orgCreate',
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
            dataId: 167888211322082100,
            options: {
              compId: 'Table_5176025',
              compLib: 'comm',
              pageJsonId: '482782',
              compName: 'Table',
              id: '908587',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167888211568855070,
            options: {
              compId: 'Table_5176025',
              compLib: 'comm',
              pageJsonId: '482782',
              compName: 'Table',
              id: '6009175',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource1.params =
      [
        {
          title: '事件入参',
          name: 'options_572314',
          value: '$options_572314$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource1,
      { options_572314 },
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
    refreshTable,
  }));

  const onOk = () => {
    const eventDatagetTableSelected2: any = [
      {
        type: 'getTableSelected',
        dataId: 167888175225145920,
        options: {
          compId: 'Table_5176025',
          compLib: 'comm',
          pageJsonId: '482782',
          compName: 'Table',
          id: '5524886',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '480732',
                options: {
                  context: '$selectedRows_5524886[0]$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888680427942980,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888683134280420,
                children: [
                  {
                    actionObjId: 'page',
                    actionObjName: 'page',
                    children: [],
                    dataId: 167888683844803360,
                    dataName: 'action',
                    options: { compId: 'page', compName: 'page', id: '574688' },
                    todoOptions: [],
                    value: 'closeModal',
                    line_number: 6,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'closeModal',
                    dataId: 167888683844803360,
                    options: { compId: 'page', compName: 'page', id: '574688' },
                    line_number: 6,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167888681856711460,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '200181',
                  pageJsonId: '482782',
                  code: 'function main(data,state,success,fail){var arr=selectedRows_5524886||[];console.log("\\u9009\\u4E2D\\u7684\\u6570\\u636E\\uFF1A",selectedRows_5524886);var keys=[];for(var i=0;i<arr.length;i++){keys.push(arr[i]["orgCode"])}success(keys)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 170608318031771840,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '245011',
                      pageJsonId: '482782',
                      params: '$selectedRows_5524886[0]$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 170608318848435070,
                    options: { compId: 'page', compName: 'page', id: '552098' },
                    line_number: 5,
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelected2.params = [] || [];
    CMDGenerator(eventDatagetTableSelected2, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal9: any = [
      {
        type: 'closeModal',
        dataId: '978597_1',
        options: { compId: 'page', compName: 'page', id: '9833394' },
        line_number: 1,
      },
    ];
    eventDatacloseModal9.params = [] || [];
    CMDGenerator(eventDatacloseModal9, {}, 'closeModal', {
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
    const eventDatacallSelfFunc19: any = [
      {
        type: 'callSelfFunc',
        dataId: 167888213225127260,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '813657',
          pageJsonId: '482782',
          customFuncName: 'refreshTable',
          customFuncParams: 'object',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc19.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc19, {}, 'callSelfFunc', {
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
      className="__CustomClass_482782__"
    >
      <View
        className="View_View_482782_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_482782_1',
          uid: 'View_482782_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_482782_1')}
        {...injectData}
      >
        <View
          className="View_View_947999"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_947999',
            uid: 'View_947999',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_947999')}
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
              id: 'Form_148709_2103377_216161',
              uid: 'Form_148709_2103377_216161',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 12px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_148709_2103377_216161')
            }
            {...injectData}
          >
            <Input
              name={'组织编码'}
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
              placeholder={'OA组织编码'}
              formItemIndex={0}
              fieldName={'orgCode'}
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
                id: 'Input_3889064_9887114_660871',
                uid: 'Input_3889064_9887114_660871',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc184: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc184.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc184, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDataokCallbackData3: any = [
                  {
                    type: 'okCallbackData',
                    dataId: 170608180402221250,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '427017',
                      pageJsonId: '482782',
                      params: '$data.batchAddDcOaOrgUserRelSingleUser$',
                    },
                    line_number: 2,
                  },
                ];
                eventDataokCallbackData3.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataokCallbackData3,
                  { e },
                  'okCallbackData',
                  {
                    id: 'okCallbackData',
                    name: 'okCallbackData',
                    type: 'okCallbackData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_3889064_9887114_660871')
              }
              {...injectData}
            />
            <Input
              name={'组织名称'}
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
              placeholder={'组织名称模糊查询'}
              formItemIndex={1}
              fieldName={'orgName'}
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
                id: 'Input_33684855_0267973_1469488',
                uid: 'Input_33684855_0267973_1469488',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc185: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc185.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc185, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_0267973_1469488')
              }
              {...injectData}
            />
            <View
              className="View_View_841498_8261476_979664"
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_8261476_979664',
                uid: 'View_841498_8261476_979664',
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
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'flex-start',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_841498_8261476_979664')
              }
              {...injectData}
            >
              <View
                className="View_View_110211_6102645"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_110211_6102645',
                  uid: 'View_110211_6102645',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 40px',
                  width: '100%',
                  textAlign: 'left',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_110211_6102645')}
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
                    id: 'Button_224226_9699964_7583217',
                    uid: 'Button_224226_9699964_7583217',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc186: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166244950814363230,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2910313',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc186.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc186,
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
                    refs.setComponentRef(r, 'Button_224226_9699964_7583217')
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
                    id: 'Button_499055_253437_90213',
                    uid: 'Button_499055_253437_90213',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const forms21 = getFormByCompId(
                      'Form_148709_2103377_216161',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms21) ? forms21 : [forms21]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacallSelfFunc187: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167877387567069220,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '890149',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshTable',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc187.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc187,
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
                    refs.setComponentRef(r, 'Button_499055_253437_90213')
                  }
                  {...injectData}
                />
              </View>
            </View>
          </Form>
        </View>
        <View
          className="View_View_740935"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_740935',
            uid: 'View_740935',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_740935')}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={data?.qryDcOaOrgPageExcludeSelected?.resultData?.current}
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
                title: '组织ID',
                key: 'orgKey',
                dataIndex: 'orgKey',
                className: '',
                id: '929889',
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
                title: '组织编码',
                key: 'orgCode',
                dataIndex: 'orgCode',
                className: 'divider',
                id: '4583686',
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
                title: '组织名称',
                key: 'orgName',
                dataIndex: 'orgName',
                className: 'divider',
                id: '278263',
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
                title: '上级组织',
                key: 'parentOrgKey',
                dataIndex: 'parentOrgKey',
                className: 'divider',
                id: '211608',
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
                title: '是否政企',
                key: 'isGe',
                dataIndex: 'isGe',
                className: 'divider',
                id: '34278',
                staticDataSource: attrDataMap['PUB_001'],
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
                title: '是否重客',
                key: 'isImportant',
                dataIndex: 'isImportant',
                className: 'divider',
                id: '4583917',
                staticDataSource: attrDataMap['PUB_001'],
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
                title: '组织等级',
                key: 'orgLevel',
                dataIndex: 'orgLevel',
                className: 'divider',
                id: '430192',
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
                title: '组织类型',
                key: 'orgDataType',
                dataIndex: 'orgDataType',
                className: 'divider',
                id: '38352',
                customRendering:
                  '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  var fontColor = "#00FF00";  if (row.orgDataType === "1002") {    fontColor = "#0000FF";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                originCustomRendering: [
                  ' /**',
                  ' * 自定义渲染函数',
                  ' * @param {String} text 单元格显示的文字内容',
                  ' * @param {Object} row 行数据对象',
                  ' * @param {number} index 行索引',
                  ' * @returns 渲染的内容：可以是 html 模板字符串',
                  ' */',
                  'function renderFunc(text, row, index) {',
                  '    let fontColor = "#00FF00";',
                  '',
                  '      if (row.orgDataType === "1002") {',
                  '        fontColor = "#0000FF";',
                  '      }',
                  '    ',
                  '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                  '}',
                ],
                staticDataSource: [
                  { id: '689755', label: '人工新增', value: '1002' },
                  { id: '763454', label: '接口同步', value: '1001' },
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
            ]}
            page={true}
            rowKeyType={'specified'}
            editMode={'single'}
            selectType={functorsMap?.IF(
              state?.isRadio == 1,
              'radio',
              'checkbox',
            )}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{
              type: functorsMap?.IF(state?.isRadio == 1, 'radio', 'checkbox'),
            }}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'orgKey'}
            dataSource={
              data?.qryDcOaOrgPageExcludeSelected?.resultData?.records
            }
            fieldName={'current'}
            total={data?.qryDcOaOrgPageExcludeSelected?.resultData?.total}
            dataSourceFromDataSourceConfig={
              'data.qryDcOaOrgPageExcludeSelected.resultData.records'
            }
            $$componentItem={{
              id: 'Table_5176025',
              uid: 'Table_5176025',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading116: any = [
                {
                  type: 'setLoading',
                  dataId: 167894990864195040,
                  options: {
                    compId: 'Table_5176025',
                    compLib: 'comm',
                    pageJsonId: '482782',
                    compName: 'Table',
                    id: '0487685',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading116.params =
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
                eventDatasetLoading116,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatareloadDataSource64: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 167894991627226370,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '7457895',
                    pageJsonId: '482782',
                    dataSourceId: 167888146888583600,
                    dataSourceName: 'qryDcOaOrgPageExcludeSelected',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '8959673',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                      },
                      {
                        attrId: '3829004',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                      },
                      {
                        attrId: '266759',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                      },
                      {
                        attrId: '57982',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '1953304',
                            code: 'orgCodes',
                            name: 'orgCodes',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: { type: [], code: '' },
                          },
                          {
                            attrId: '7175294',
                            code: 'usrKey',
                            name: 'usrKey',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: {
                              type: ['context', '$state.usrKey$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '084764',
                            code: 'orgName',
                            name: 'orgName',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377_216161',
                                'getFieldsValue',
                              ],
                              code: 'orgName',
                            },
                          },
                          {
                            attrId: '93153',
                            code: 'orgCode',
                            name: 'orgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377_216161',
                                'getFieldsValue',
                              ],
                              code: 'orgCode',
                            },
                          },
                          {
                            attrId: '20733',
                            code: 'pageSize',
                            name: '新增节点',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '657393',
                            code: 'pageNum',
                            name: '新增节点',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                        ],
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '669437',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '296437',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '129386',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '346713',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '0106754',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '531578',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '8111335',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '036441',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '1116463',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '1593937',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '8196767',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '347364',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '815129',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '33019',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '036271',
                                code: 'areaId',
                                name: 'areaId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '689291',
                                code: 'orgUpdate',
                                name: 'orgUpdate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '397776',
                                code: 'orgCreateby',
                                name: 'orgCreateby',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '236221',
                                code: 'orgCode',
                                name: 'orgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '589976',
                                code: 'isImportant',
                                name: 'isImportant',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '311319',
                                code: 'isGe',
                                name: 'isGe',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '908234',
                                code: 'orgKey',
                                name: 'orgKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '296604',
                                code: 'orgCreate',
                                name: 'orgCreate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '122223',
                                code: 'orgUpdateby',
                                name: 'orgUpdateby',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '697382',
                                code: 'orgDataTypeName',
                                name: '新增节点',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '040106',
                                code: 'orgOrder',
                                name: 'orgOrder',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '331932',
                                code: 'actUdfNum',
                                name: 'actUdfNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '658412',
                                code: 'provinceId',
                                name: 'provinceId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '997911',
                                code: 'orgDataType',
                                name: 'orgDataType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '40455',
                                code: 'lanId',
                                name: 'lanId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '749061',
                                code: 'orgLevel',
                                name: 'orgLevel',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3835',
                                code: 'parentOrgKey',
                                name: 'parentOrgKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9663034',
                                code: 'orgDisabled',
                                name: 'orgDisabled',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6712927',
                                code: 'orgKeyPath',
                                name: 'orgKeyPath',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9944954',
                                code: 'orgName',
                                name: 'orgName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '605645',
                                code: 'orgType',
                                name: 'orgType',
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
                      dataId: 167895003784563700,
                      options: {
                        compId: 'Table_5176025',
                        compLib: 'comm',
                        pageJsonId: '482782',
                        compName: 'Table',
                        id: '2013344',
                        loading: false,
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 167895004327445540,
                      options: {
                        compId: 'Table_5176025',
                        compLib: 'comm',
                        pageJsonId: '482782',
                        compName: 'Table',
                        id: '148193',
                        loading: false,
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatareloadDataSource64.params =
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
                eventDatareloadDataSource64,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_5176025')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Xuanzerenyuanguanlianzu22223072copy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', usrKey: '', isRadio: '' },
});
