// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '953478278846369792';
const Xuanzerenyuanguanlianzuzhi3072copy$$Modal: React.FC<PageProps> = ({
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
    const eventDatasetLoading34: any = [
      {
        type: 'setLoading',
        dataId: 167894969462760200,
        options: {
          compId: 'Table_5176025_615394',
          compLib: 'comm',
          pageJsonId: '482782',
          compName: 'Table',
          id: '3382007',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading34.params =
      [
        {
          title: '事件入参',
          name: 'options_572314',
          value: '$options_572314$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading34, { options_572314 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource46: any = [
      {
        type: 'reloadDataSource',
        dataId: 167888208259954600,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '335538',
          pageJsonId: '482782',
          dataSourceId: 167894965464141730,
          dataSourceName: 'qryDcOaRolePageExcludeSelected',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '4140266',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '456877',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '781137',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '196486',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '954626',
                  code: 'usrKey',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKey',
                  value: { type: ['context', '$state.usrKey$'], code: '' },
                },
                {
                  attrId: '747029',
                  code: 'roleCode',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.roleCode',
                  value: {
                    type: [
                      'form',
                      'Form_148709_2103377_216161_486727',
                      'getFieldsValue',
                    ],
                    code: 'roleCode',
                  },
                },
                {
                  attrId: '0897162',
                  code: 'roleName',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.roleName',
                  value: {
                    type: [
                      'form',
                      'Form_148709_2103377_216161_486727',
                      'getFieldsValue',
                    ],
                    code: 'roleName',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '087331',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '017467',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '9186122',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '867295',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '5583216',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '53482',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '9629445',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8367896',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '598328',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '657811',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '223154',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '47948',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '381809',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '59463',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '997009',
                      code: 'roleId',
                      name: 'roleId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8183505',
                      code: 'roleCode',
                      name: 'roleCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '24133',
                      code: 'roleName',
                      name: 'roleName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5297191',
                      code: 'roleDesc',
                      name: 'roleDesc',
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
            dataId: 167894970001464130,
            options: {
              compId: 'Table_5176025_615394',
              compLib: 'comm',
              pageJsonId: '482782',
              compName: 'Table',
              id: '7491364',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167894970197715900,
            options: {
              compId: 'Table_5176025_615394',
              compLib: 'comm',
              pageJsonId: '482782',
              compName: 'Table',
              id: '131082',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource46.params =
      [
        {
          title: '事件入参',
          name: 'options_572314',
          value: '$options_572314$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource46,
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
    const eventDatagetTableSelected9: any = [
      {
        type: 'getTableSelected',
        dataId: 167894973486283200,
        options: {
          compId: 'Table_5176025_615394',
          compLib: 'comm',
          pageJsonId: '482782',
          compName: 'Table',
          id: '692606',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '480732',
                options: {
                  context: '$selectedRows_692606$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167894974621622500,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167894974621607550,
                children: [
                  {
                    actionObjId: 'page',
                    actionObjName: 'page',
                    children: [],
                    dataId: 167894974621681860,
                    dataName: 'action',
                    options: { compId: 'page', compName: 'page', id: '016626' },
                    todoOptions: [],
                    value: 'closeModal',
                    elseIfs: [],
                    line_number: 7,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'closeModal',
                    dataId: 167894974621681860,
                    options: { compId: 'page', compName: 'page', id: '016626' },
                    line_number: 7,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167894974621608770,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '880604',
                  pageJsonId: '482782',
                  code: 'function main(data,state,success,fail){var arr=selectedRows_692606||[];console.log("\\u9009\\u4E2D\\u7684\\u6570\\u636E\\uFF1A",selectedRows_692606);var keys=[];for(var i=0;i<arr.length;i++){keys.push(arr[i]["roleId"])}success(keys)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 167894974621671550,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '251792',
                      pageJsonId: '482782',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'batchAddDcUserRoleRel',
                      _apiCode: 'batchAddDcUserRoleRel',
                      _source: 'rhin',
                      _serviceId: '953553321644474368',
                      _serviceTitle:
                        '单用户批量添加多角色-hyj: batchAddDcUserRoleRel',
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
                          dataKey: '251792_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '251792_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '251792_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'usrKey',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.usrKey',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.usrKey',
                              dataKey: '251792_body.usrKey',
                              value: {
                                type: ['context', '$state.usrKey$'],
                                code: '',
                              },
                            },
                            {
                              code: 'roleIds',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.roleIds',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.roleIds',
                              dataKey: '251792_body.roleIds',
                              value: {
                                type: ['context', '$data_880604$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '251792_body',
                        },
                      ],
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 167895354218674750,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '457842',
                          pageJsonId: '482782',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 167894974621677540,
                        options: {
                          compId: 'page',
                          compName: 'page',
                          id: '567201',
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [],
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
    eventDatagetTableSelected9.params = [] || [];
    CMDGenerator(eventDatagetTableSelected9, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal84: any = [
      {
        type: 'closeModal',
        dataId: '978597_1',
        options: { compId: 'page', compName: 'page', id: '9833394' },
        line_number: 1,
      },
    ];
    eventDatacloseModal84.params = [] || [];
    CMDGenerator(eventDatacloseModal84, {}, 'closeModal', {
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
    const eventDatacallSelfFunc45: any = [
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
    eventDatacallSelfFunc45.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc45, {}, 'callSelfFunc', {
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
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_482782_1_2245467',
          uid: 'View_482782_1_2245467',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_482782_1_2245467')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_947999_9714262',
            uid: 'View_947999_9714262',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_947999_9714262')}
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
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_148709_2103377_216161_486727',
              uid: 'Form_148709_2103377_216161_486727',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 12px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_148709_2103377_216161_486727')
            }
            {...injectData}
          >
            <Input
              name={'角色编码'}
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
              fieldName={'roleCode'}
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
                id: 'Input_3889064_9887114_660871_69896',
                uid: 'Input_3889064_9887114_660871_69896',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc773: any = [
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
                eventDatacallSelfFunc773.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc773, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_3889064_9887114_660871_69896')
              }
              {...injectData}
            />
            <Input
              name={'角色名称'}
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
              fieldName={'roleName'}
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
                id: 'Input_33684855_0267973_1469488_875336',
                uid: 'Input_33684855_0267973_1469488_875336',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc774: any = [
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
                eventDatacallSelfFunc774.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc774, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_0267973_1469488_875336')
              }
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_8261476_979664_9421495',
                uid: 'View_841498_8261476_979664_9421495',
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
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'flex-start',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_841498_8261476_979664_9421495')
              }
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_110211_6102645_905926',
                  uid: 'View_110211_6102645_905926',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 40px',
                  width: '100%',
                  textAlign: 'left',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_110211_6102645_905926')
                }
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
                    id: 'Button_224226_9699964_7583217_144538',
                    uid: 'Button_224226_9699964_7583217_144538',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc775: any = [
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
                    eventDatacallSelfFunc775.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc775,
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
                    refs.setComponentRef(
                      r,
                      'Button_224226_9699964_7583217_144538',
                    )
                  }
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
                  labelCol={8}
                  wrapperCol={16}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_499055_253437_90213_884171',
                    uid: 'Button_499055_253437_90213_884171',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const forms189 = getFormByCompId(
                      'Form_148709_2103377_216161_486727',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms189) ? forms189 : [forms189]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacallSelfFunc776: any = [
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
                    eventDatacallSelfFunc776.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc776,
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
                    refs.setComponentRef(r, 'Button_499055_253437_90213_884171')
                  }
                  {...injectData}
                />
              </View>
            </View>
          </Form>
        </View>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_740935_509061',
            uid: 'View_740935_509061',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_740935_509061')}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={data?.qryDcOaRolePageExcludeSelected?.resultData?.current}
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
                title: '角色编码',
                key: 'roleCode',
                dataIndex: 'roleCode',
                className: '',
                id: '480832',
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
                title: '角色名称',
                key: 'roleName',
                dataIndex: 'roleName',
                className: 'divider',
                id: '655104',
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
                title: '角色描述',
                key: 'roleDesc',
                dataIndex: 'roleDesc',
                className: 'divider',
                id: '455033',
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
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'roleId'}
            dataSource={
              data?.qryDcOaRolePageExcludeSelected?.resultData?.records
            }
            fieldName={'current'}
            total={data?.qryDcOaRolePageExcludeSelected?.resultData?.total}
            dataSourceFromDataSourceConfig={
              'data.qryDcOaRolePageExcludeSelected.resultData.records'
            }
            $$componentItem={{
              id: 'Table_5176025_615394',
              uid: 'Table_5176025_615394',
              type: 'Table',
              ...componentItem,
            }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading219: any = [
                {
                  type: 'setLoading',
                  dataId: 167895009042302560,
                  options: {
                    compId: 'Table_5176025_615394',
                    compLib: 'comm',
                    pageJsonId: '482782',
                    compName: 'Table',
                    id: '05334915',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading219.params =
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
                eventDatasetLoading219,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatareloadDataSource122: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 167895010028356350,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '2473424',
                    pageJsonId: '482782',
                    dataSourceId: 167894965464141730,
                    dataSourceName: 'qryDcOaRolePageExcludeSelected',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '4140266',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '456877',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '781137',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '196486',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '954626',
                            code: 'usrKey',
                            name: '新增节点',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.usrKey',
                            value: {
                              type: ['context', '$state.usrKey$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '747029',
                            code: 'roleCode',
                            name: '新增节点',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.roleCode',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377_216161_486727',
                                'getFieldsValue',
                              ],
                              code: 'roleCode',
                            },
                          },
                          {
                            attrId: '0897162',
                            code: 'roleName',
                            name: '新增节点',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.roleName',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377_216161_486727',
                                'getFieldsValue',
                              ],
                              code: 'roleName',
                            },
                          },
                          {
                            attrId: '724226',
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
                            attrId: '362686',
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
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '087331',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '017467',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '9186122',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '867295',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '5583216',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '53482',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '9629445',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '8367896',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '598328',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '657811',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '223154',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '47948',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '381809',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '59463',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '997009',
                                code: 'roleId',
                                name: 'roleId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8183505',
                                code: 'roleCode',
                                name: 'roleCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '24133',
                                code: 'roleName',
                                name: 'roleName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5297191',
                                code: 'roleDesc',
                                name: 'roleDesc',
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
                      dataId: 167895017416500540,
                      options: {
                        compId: 'Table_5176025_615394',
                        compLib: 'comm',
                        pageJsonId: '482782',
                        compName: 'Table',
                        id: '3799876',
                        loading: false,
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 167895017560999420,
                      options: {
                        compId: 'Table_5176025_615394',
                        compLib: 'comm',
                        pageJsonId: '482782',
                        compName: 'Table',
                        id: '8596417',
                        loading: false,
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatareloadDataSource122.params =
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
                eventDatareloadDataSource122,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_5176025_615394')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Xuanzerenyuanguanlianzuzhi3072copy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', usrKey: '' },
});
