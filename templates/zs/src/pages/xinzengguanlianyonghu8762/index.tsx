// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '952497066237513728';
const Xinzengguanlianyonghu8762$$Modal: React.FC<PageProps> = ({
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
  const refreshUserTable = (options_897314: any) => {
    const eventDatasetLoading27: any = [
      {
        type: 'setLoading',
        dataId: 167869989308154240,
        options: {
          compId: 'Table_294608',
          compLib: 'comm',
          pageJsonId: '6923175',
          compName: 'Table',
          id: '317475',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading27.params =
      [
        {
          title: '事件入参',
          name: 'options_897314',
          value: '$options_897314$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading27, { options_897314 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource37: any = [
      {
        type: 'reloadDataSource',
        dataId: 168924250840853000,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '9206689',
          pageJsonId: '6923175',
          dataSourceId: 167879323467857820,
          dataSourceName: 'qryDcOaUserPageExcludeSelected',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '5960687',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '0435886',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '4761935',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '102728',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '7546389',
                  code: 'pageSize',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '10' },
                },
                {
                  attrId: '65163',
                  code: 'pageNum',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '103706',
                  code: 'usrLogin',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_340102', 'getFieldsValue'],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '304606',
                  code: 'orgCode',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.orgInfo$'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '474094',
                  code: 'usrLastName',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_340102', 'getFieldsValue'],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '767602',
                  code: 'usrUdfMobile',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_340102', 'getFieldsValue'],
                    code: 'usrUdfMobile',
                  },
                },
                {
                  attrId: '2862017',
                  code: 'usrKeys',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 168924257578582820,
            options: {
              compId: 'Table_294608',
              compLib: 'comm',
              pageJsonId: '6923175',
              compName: 'Table',
              id: '523611',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 168924257747177700,
            options: {
              compId: 'Table_294608',
              compLib: 'comm',
              pageJsonId: '6923175',
              compName: 'Table',
              id: '418123',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource37.params =
      [
        {
          title: '事件入参',
          name: 'options_897314',
          value: '$options_897314$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource37,
      { options_897314 },
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
    refreshUserTable,
  }));

  const onOk = () => {
    const eventDatagetTableSelected7: any = [
      {
        type: 'getTableSelected',
        dataId: 167878113315514880,
        options: {
          compId: 'Table_294608',
          compLib: 'comm',
          pageJsonId: '6923175',
          compName: 'Table',
          id: '6732567',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 167878114104192260,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '969134',
              pageJsonId: '6923175',
              value: ['当前选中行数组：', '$selectedRows_6732567$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 167878118476784930,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '4430788',
              pageJsonId: '6923175',
              code: 'function main(data,state,success,fail){var arr=selectedRows_6732567;var keys=[];for(var i=0;i<arr.length;i++){keys.push(arr[i]["usrKey"])}success(keys)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167878128720344060,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '857254',
                  pageJsonId: '6923175',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'batchAddDcOaOrgUserRel',
                  _apiCode: 'batchAddDcOaOrgUserRel',
                  _source: 'rhin',
                  _serviceId: '952836342804402176',
                  _serviceTitle:
                    '批量新增OA组织和用户关系-hyj: batchAddDcOaOrgUserRel',
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
                      dataKey: '857254_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '857254_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '857254_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'usrKeys',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.usrKeys',
                          compType: 'Input',
                          name: 'usrKeys',
                          parents: ['body'],
                          id: 'body.usrKeys',
                          dataKey: '857254_body.usrKeys',
                          value: {
                            type: ['context', '$data_4430788$'],
                            code: '',
                          },
                        },
                        {
                          code: 'relDataType',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.relDataType',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.relDataType',
                          dataKey: '857254_body.relDataType',
                          value: { type: ['customize'], code: '1002' },
                        },
                        {
                          code: 'orgName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orgName',
                          compType: 'Input',
                          name: 'orgName',
                          parents: ['body'],
                          id: 'body.orgName',
                          dataKey: '857254_body.orgName',
                          value: {
                            type: ['context', '$state.orgInfo$'],
                            code: 'orgName',
                          },
                        },
                        {
                          code: 'orgShortName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orgShortName',
                          compType: 'Input',
                          name: 'orgShortName',
                          parents: ['body'],
                          id: 'body.orgShortName',
                          dataKey: '857254_body.orgShortName',
                          value: {
                            type: ['context', '$state.orgInfo$'],
                            code: 'orgShortName',
                          },
                        },
                        {
                          code: 'orgCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orgCode',
                          compType: 'Input',
                          name: 'orgCode',
                          parents: ['body'],
                          id: 'body.orgCode',
                          dataKey: '857254_body.orgCode',
                          value: {
                            type: ['context', '$state.orgInfo$'],
                            code: 'orgCode',
                          },
                        },
                        {
                          code: 'orgOrder',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orgOrder',
                          compType: 'Input',
                          name: 'orgOrder',
                          parents: ['body'],
                          id: 'body.orgOrder',
                          dataKey: '857254_body.orgOrder',
                          value: {
                            type: ['context', '$state.orgInfo$'],
                            code: 'orgOrder',
                          },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '857254_body',
                    },
                  ],
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 167878306286609900,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '564032',
                      pageJsonId: '6923175',
                      type: 'success',
                      value: '添加成功！',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'closeModal',
                    dataId: 167878305272786720,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '85562',
                      pageJsonId: '6923175',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'callParentCustomFunc',
                    dataId: 167884713276591100,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '144315',
                      pageJsonId: '6923175',
                      pathname: '/oaOrganizationManagement',
                      pageId: '884248856254066688',
                      customFuncName: 'refreshUserTable',
                    },
                    line_number: 7,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelected7.params = [] || [];
    CMDGenerator(eventDatagetTableSelected7, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal69: any = [
      {
        type: 'closeModal',
        dataId: '30791_1',
        options: { compId: 'page', compName: 'page', id: '151865' },
        line_number: 1,
      },
    ];
    eventDatacloseModal69.params = [] || [];
    CMDGenerator(eventDatacloseModal69, {}, 'closeModal', {
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
    const eventDatacallSelfFunc40: any = [
      {
        type: 'callSelfFunc',
        dataId: 167877255510061900,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '619568',
          pageJsonId: '6923175',
          customFuncName: 'refreshUserTable',
          customFuncParams: 'object',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc40.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc40, {}, 'callSelfFunc', {
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
      className="__CustomClass_6923175__"
    >
      <View
        className="View_View_6923175_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_6923175_1',
          uid: 'View_6923175_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_6923175_1')}
        {...injectData}
      >
        <View
          className="View_View_9525654"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_9525654',
            uid: 'View_9525654',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_9525654')}
          {...injectData}
        >
          <View
            className="View_View_25796"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_25796',
              uid: 'View_25796',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_25796')}
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
              formCode={'Form_340102'}
              $$componentItem={{
                id: 'Form_340102',
                uid: 'Form_340102',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 8px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_340102')}
              {...injectData}
            >
              <Input
                name={'用户名称'}
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
                fieldName={'usrLastName'}
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
                  id: 'Input_479977',
                  uid: 'Input_479977',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc609: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167877373871358180,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '777533',
                        pageJsonId: '6923175',
                        customFuncName: 'refreshUserTable',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc609.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc609,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_479977')}
                {...injectData}
              />
              <Input
                name={'用户账号'}
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
                fieldName={'usrLogin'}
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
                  id: 'Input_616777',
                  uid: 'Input_616777',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc610: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167877373393102980,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '194254',
                        pageJsonId: '6923175',
                        customFuncName: 'refreshUserTable',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc610.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc610,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_616777')}
                {...injectData}
              />
              <View
                className="View_View_181456"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_181456',
                  uid: 'View_181456',
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
                  padding: '0px 0px 0px 20px',
                  width: '100%',
                  textAlign: 'left',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_181456')}
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
                    id: 'Button_4951626',
                    uid: 'Button_4951626',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc611: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167875904604818850,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '655528',
                          pageJsonId: '6923175',
                          customFuncName: 'refreshUserTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc611.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc611,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Button_4951626')}
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
                    id: 'Button_7669509',
                    uid: 'Button_7669509',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                  onClick={(e: any) => {
                    const forms143 = getFormByCompId('Form_340102', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms143) ? forms143 : [forms143]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacallSelfFunc612: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167877384369050080,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '04892',
                          pageJsonId: '6923175',
                          customFuncName: 'refreshUserTable',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc612.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc612,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Button_7669509')}
                  {...injectData}
                />
              </View>
            </Form>
          </View>
          <Table
            name={'表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={data?.qryDcOaUserPageExcludeSelected?.resultData?.current}
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
                title: '用户名称',
                key: 'usrLastName',
                dataIndex: 'usrLastName',
                className: '',
                id: '2320824',
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
                title: '用户账号',
                key: 'usrLogin',
                dataIndex: 'usrLogin',
                className: 'divider',
                id: '1242035',
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
                title: '手机号码',
                key: 'usrUdfMobile',
                dataIndex: 'usrUdfMobile',
                className: 'divider',
                id: '80777',
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
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'usrKey'}
            dataSource={
              data?.qryDcOaUserPageExcludeSelected?.resultData?.records
            }
            fieldName={'total'}
            total={data?.qryDcOaUserPageExcludeSelected?.resultData?.total}
            dataSourceFromDataSourceConfig={
              'data.qryDcOaUserPageExcludeSelected.resultData.records'
            }
            $$componentItem={{
              id: 'Table_294608',
              uid: 'Table_294608',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading209: any = [
                {
                  type: 'setLoading',
                  dataId: 167875930981546240,
                  options: {
                    compId: 'Table_294608',
                    compLib: 'comm',
                    pageJsonId: '6923175',
                    compName: 'Table',
                    id: '5062974',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading209.params =
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
                eventDatasetLoading209,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatareloadDataSource106: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 168924262897304350,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '6941326',
                    pageJsonId: '6923175',
                    dataSourceId: 167879323467857820,
                    dataSourceName: 'qryDcOaUserPageExcludeSelected',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '5960687',
                        code: 'header',
                        name: '请求头参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '0435886',
                        code: 'path',
                        name: '请求路径参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '4761935',
                        code: 'query',
                        name: 'URL 参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '102728',
                        code: 'body',
                        name: '请求体',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        children: [
                          {
                            attrId: '7546389',
                            code: 'pageSize',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: '10' },
                          },
                          {
                            attrId: '65163',
                            code: 'pageNum',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$page$'],
                              code: '',
                              hideAttr: true,
                            },
                          },
                          {
                            attrId: '103706',
                            code: 'usrLogin',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '304606',
                            code: 'orgCode',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$state.orgInfo$'],
                              code: 'orgCode',
                            },
                          },
                          {
                            attrId: '474094',
                            code: 'usrLastName',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: ['form', 'Form_340102', 'getFieldsValue'],
                              code: 'usrLastName',
                            },
                          },
                          {
                            attrId: '767602',
                            code: 'usrUdfMobile',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: ['form', 'Form_340102', 'getFieldsValue'],
                              code: 'usrUdfMobile',
                            },
                          },
                          {
                            attrId: '2862017',
                            code: 'usrKeys',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                          },
                        ],
                      },
                    ],
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'setLoading',
                      dataId: 168924262897352200,
                      options: {
                        compId: 'Table_294608',
                        compLib: 'comm',
                        pageJsonId: '6923175',
                        compName: 'Table',
                        id: '742606',
                        loading: false,
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 168924262897341100,
                      options: {
                        compId: 'Table_294608',
                        compLib: 'comm',
                        pageJsonId: '6923175',
                        compName: 'Table',
                        id: '9125476',
                        loading: false,
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatareloadDataSource106.params =
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
                eventDatareloadDataSource106,
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
            onRowClick={(rowId: any, row: any, index: any) => {
              // console 167879059270983200
              console.log(row);
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_294608')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Xinzengguanlianyonghu8762$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', orgInfo: '' },
});
