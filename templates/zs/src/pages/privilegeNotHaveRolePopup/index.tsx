// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Form,
  Input,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '952538378574790656';
const PrivilegeNotHaveRolePopup$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetTableSelectedKey5: any = [
      {
        type: 'getTableSelectedKey',
        dataId: 167870955984036800,
        options: {
          compId: 'Table_554268_831796',
          compLib: 'comm',
          pageJsonId: '2694965',
          compName: 'Table',
          id: '5579818',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '186807',
                options: {
                  context: '$selectedRowKeys_5579818$',
                  operate: 'empty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167870971491132350,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167870973926331300,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167870974456858750,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167870974456862180,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 167870974456872960,
                            children: [
                              {
                                actionObjId: 'page',
                                actionObjName: 'page',
                                children: [],
                                dataId: 167870974456807000,
                                dataName: 'action',
                                options: {
                                  compId: 'page',
                                  compName: 'page',
                                  id: '8537503',
                                },
                                todoOptions: [],
                                value: 'closeModal',
                                elseIfs: [],
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 167871005888884830,
                                children: [],
                                todoOptions: ['setParams'],
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '7916686',
                                  pageJsonId: '2694965',
                                },
                                actionObjId: 'okCallbackData',
                                actionObjName: 'page',
                                value: 'okCallbackData',
                                line_number: 7,
                              },
                            ],
                            elseIfs: [],
                            condition: [
                              {
                                condId: '2855047',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_1272129.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            line_number: 5,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 167870974456868260,
                        children: [],
                        value: 'callback2',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '1272129',
                      pageJsonId: '2694965',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'addDcOaRolePrivilegeRel',
                      _apiCode: 'addDcOaRolePrivilegeRel',
                      _source: 'rhin',
                      _serviceId: '952497818460770304',
                      _serviceTitle:
                        '新增角色权限关联关系--tzp: addDcOaRolePrivilegeRel',
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
                          dataKey: '249935_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '249935_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '249935_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                              dataKey: '249935_body.createDate',
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
                              dataKey: '249935_body.createStaff',
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
                              dataKey: '249935_body.createStaffName',
                            },
                            {
                              code: 'privilegeId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.privilegeId',
                              compType: 'Input',
                              name: 'privilegeId',
                              parents: ['body'],
                              id: 'body.privilegeId',
                              dataKey: '249935_body.privilegeId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
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
                              dataKey: '249935_body.remark',
                            },
                            {
                              code: 'roleId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.roleId',
                              compType: 'Input',
                              name: 'roleId',
                              parents: ['body'],
                              id: 'body.roleId',
                              dataKey: '249935_body.roleId',
                            },
                            {
                              code: 'roleIdList',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.roleIdList.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'roleIdList'],
                                  id: 'body.roleIdList.listItem',
                                  dataKey: '249935_body.roleIdList.listItem',
                                },
                              ],
                              _id: 'body.roleIdList',
                              compType: 'Input',
                              name: 'roleIdList',
                              parents: ['body'],
                              id: 'body.roleIdList',
                              dataKey: '249935_body.roleIdList',
                              value: {
                                type: ['context', '$selectedRowKeys_5579818$'],
                                code: '',
                              },
                            },
                            {
                              code: 'rolePrivilegeRelId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.rolePrivilegeRelId',
                              compType: 'Input',
                              name: 'rolePrivilegeRelId',
                              parents: ['body'],
                              id: 'body.rolePrivilegeRelId',
                              dataKey: '249935_body.rolePrivilegeRelId',
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
                              dataKey: '249935_body.statusCd',
                            },
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
                              dataKey: '249935_body.updateDate',
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
                              dataKey: '249935_body.updateStaff',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '249935_body',
                        },
                      ],
                    },
                    actionObjId: 'apiRequest',
                    actionObjName: 'system',
                    value: 'apiRequest',
                    elseIfs: [],
                    line_number: 4,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'apiRequest',
                    dataId: 167870974456858750,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '1272129',
                      pageJsonId: '2694965',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'addDcOaRolePrivilegeRel',
                      _apiCode: 'addDcOaRolePrivilegeRel',
                      _source: 'rhin',
                      _serviceId: '952497818460770304',
                      _serviceTitle:
                        '新增角色权限关联关系--tzp: addDcOaRolePrivilegeRel',
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
                          dataKey: '249935_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '249935_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '249935_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                              dataKey: '249935_body.createDate',
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
                              dataKey: '249935_body.createStaff',
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
                              dataKey: '249935_body.createStaffName',
                            },
                            {
                              code: 'privilegeId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.privilegeId',
                              compType: 'Input',
                              name: 'privilegeId',
                              parents: ['body'],
                              id: 'body.privilegeId',
                              dataKey: '249935_body.privilegeId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
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
                              dataKey: '249935_body.remark',
                            },
                            {
                              code: 'roleId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.roleId',
                              compType: 'Input',
                              name: 'roleId',
                              parents: ['body'],
                              id: 'body.roleId',
                              dataKey: '249935_body.roleId',
                            },
                            {
                              code: 'roleIdList',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.roleIdList.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'roleIdList'],
                                  id: 'body.roleIdList.listItem',
                                  dataKey: '249935_body.roleIdList.listItem',
                                },
                              ],
                              _id: 'body.roleIdList',
                              compType: 'Input',
                              name: 'roleIdList',
                              parents: ['body'],
                              id: 'body.roleIdList',
                              dataKey: '249935_body.roleIdList',
                              value: {
                                type: ['context', '$selectedRowKeys_5579818$'],
                                code: '',
                              },
                            },
                            {
                              code: 'rolePrivilegeRelId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.rolePrivilegeRelId',
                              compType: 'Input',
                              name: 'rolePrivilegeRelId',
                              parents: ['body'],
                              id: 'body.rolePrivilegeRelId',
                              dataKey: '249935_body.rolePrivilegeRelId',
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
                              dataKey: '249935_body.statusCd',
                            },
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
                              dataKey: '249935_body.updateDate',
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
                              dataKey: '249935_body.updateStaff',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '249935_body',
                        },
                      ],
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '2855047',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_1272129.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167870974456872960,
                        elseIfs: [],
                        line_number: 5,
                        callback1: [
                          {
                            type: 'closeModal',
                            dataId: 167870974456807000,
                            options: {
                              compId: 'page',
                              compName: 'page',
                              id: '8537503',
                            },
                            line_number: 6,
                          },
                          {
                            type: 'okCallbackData',
                            dataId: 167871005888884830,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '7916686',
                              pageJsonId: '2694965',
                            },
                            line_number: 7,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'showMessage',
                dataId: 167870976072011070,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '4340745',
                  pageJsonId: '2694965',
                  type: 'info',
                  value: '请选择权限要关联的角色',
                },
                line_number: 3,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelectedKey5.params = [] || [];
    CMDGenerator(eventDatagetTableSelectedKey5, {}, 'getTableSelectedKey', {
      id: 'getTableSelectedKey',
      name: 'getTableSelectedKey',
      type: 'getTableSelectedKey',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal83: any = [
      {
        type: 'closeModal',
        dataId: '675472_1',
        options: { compId: 'page', compName: 'page', id: '77216' },
        line_number: 1,
      },
    ];
    eventDatacloseModal83.params = [] || [];
    CMDGenerator(eventDatacloseModal83, {}, 'closeModal', {
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
      className="__CustomClass_2694965__"
    >
      <View
        className="View_View_2694965_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_2694965_1',
          uid: 'View_2694965_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_2694965_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_632783',
            uid: 'VerticalView_632783',
            type: 'VerticalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_632783')}
          {...injectData}
        >
          <View
            className="View_View_563648"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_563648',
              uid: 'View_563648',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '30%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_563648')}
            {...injectData}
          >
            <Form
              name={'角色查询表单'}
              colSpan={8}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_5336927'}
              $$componentItem={{
                id: 'Form_5336927_5441987',
                uid: 'Form_5336927_5441987',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_5336927_5441987')}
              {...injectData}
            >
              <Input
                name={'角色编码'}
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
                  id: 'Input_510699_196741',
                  uid: 'Input_510699_196741',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_510699_196741')}
                {...injectData}
              />
              <Input
                name={'角色名称'}
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
                  id: 'Input_0129142_45762604',
                  uid: 'Input_0129142_45762604',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_0129142_45762604')
                }
                {...injectData}
              />
              <View
                className="View_View_756929_0062074_7390883_0416838"
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_756929_0062074_7390883_0416838',
                  uid: 'View_756929_0062074_7390883_0416838',
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
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'View_756929_0062074_7390883_0416838')
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
                    id: 'Button_508625_7684763_98176_9864996',
                    uid: 'Button_508625_7684763_98176_9864996',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const eventDatareloadDataSource120: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 167870938354380830,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '1560388',
                          pageJsonId: '2694965',
                          dataSourceId: 167870917800453630,
                          dataSourceName: 'roleNotHavePrivilegePage',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '759836',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'header',
                            },
                            {
                              attrId: '800066',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '15245675',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
                            },
                            {
                              attrId: '809832',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '1723355',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '1' },
                                  type: 'long',
                                  key: 'body.pageNum',
                                  value: { type: ['customize'], code: '1' },
                                },
                                {
                                  attrId: '861798',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '5' },
                                  type: 'long',
                                  key: 'body.pageSize',
                                  value: { type: ['customize'], code: '5' },
                                },
                                {
                                  attrId: '422657',
                                  code: 'roleName',
                                  name: 'roleName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.roleName',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_5336927_5441987',
                                      'getFieldsValue',
                                    ],
                                    code: 'roleName',
                                  },
                                },
                                {
                                  attrId: '1762207',
                                  code: 'roleCode',
                                  name: 'roleCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.roleCode',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_5336927_5441987',
                                      'validateFields',
                                    ],
                                    code: 'roleCode',
                                  },
                                },
                                {
                                  attrId: '271664',
                                  code: 'privilegeId',
                                  name: 'privilegeId',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$state.bizId$',
                                  },
                                  type: 'long',
                                  key: 'body.privilegeId',
                                  value: {
                                    type: ['context', '$state.bizId$'],
                                    code: '',
                                  },
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '994962',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '446253',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '838418',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '2988973',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '85518',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '063319',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '6117673',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '4029',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '162125',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '910741',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '739428',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '940584',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '752746',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '048657',
                                  code: 'isSearchCount',
                                  name: 'isSearchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '314328',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '787819',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '088395',
                                      code: 'rolePrivilegeRelId',
                                      name: 'rolePrivilegeRelId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '4497927',
                                      code: 'roleId',
                                      name: 'roleId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '899391',
                                      code: 'roleCode',
                                      name: 'roleCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '748086',
                                      code: 'roleName',
                                      name: 'roleName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '515382',
                                      code: 'createDate',
                                      name: 'createDate',
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
                    eventDatareloadDataSource120.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatareloadDataSource120,
                      { e },
                      'reloadDataSource',
                      {
                        id: 'reloadDataSource',
                        name: 'reloadDataSource',
                        type: 'reloadDataSource',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Button_508625_7684763_98176_9864996',
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
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_228714_24039_080445_397017',
                    uid: 'Button_228714_24039_080445_397017',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const forms187 = getFormByCompId(
                      'Form_5336927_5441987',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms187) ? forms187 : [forms187]).forEach(
                      (form) => form?.resetFields(),
                    );
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Button_228714_24039_080445_397017')
                  }
                  {...injectData}
                />
              </View>
            </Form>
          </View>
          <View
            className="View_View_3108781"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_3108781',
              uid: 'View_3108781',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_3108781')}
            {...injectData}
          >
            <Table
              name={'角色表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={data?.roleNotHavePrivilegePage?.resultData?.size}
              current={data?.roleNotHavePrivilegePage?.resultData?.current}
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
                  title: '角色ID',
                  key: 'roleId',
                  dataIndex: 'roleId',
                  className: '',
                  id: '5299474',
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
                  title: '角色编码',
                  key: 'roleCode',
                  dataIndex: 'roleCode',
                  className: 'divider',
                  id: '1902881',
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
                  id: '3862',
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
                  key: 'createStaffName',
                  dataIndex: 'createStaffName',
                  className: 'divider',
                  id: '976003',
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
                  id: '81685',
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
              dataSource={data?.roleNotHavePrivilegePage?.resultData?.records}
              rowActions={[]}
              extend={[]}
              fieldName={'current$"'}
              total={data?.roleNotHavePrivilegePage?.resultData?.total}
              scroll={{ y: 240 }}
              dataSourceFromDataSourceConfig={
                'data.roleNotHavePrivilegePage.resultData.records'
              }
              $$componentItem={{
                id: 'Table_554268_831796',
                uid: 'Table_554268_831796',
                type: 'Table',
                ...componentItem,
              }}
              style={{ margin: '20px 0px 0px 0px', flex: '', width: '100%' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatareloadDataSource121: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 167870946157633200,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '897244',
                      pageJsonId: '2694965',
                      dataSourceId: 167870917800453630,
                      dataSourceName: 'roleNotHavePrivilegePage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '759836',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'header',
                        },
                        {
                          attrId: '800066',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'path',
                        },
                        {
                          attrId: '15245675',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'query',
                        },
                        {
                          attrId: '809832',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          children: [
                            {
                              attrId: '1723355',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '1' },
                              type: 'long',
                              key: 'body.pageNum',
                              value: {
                                type: ['context', '$page$'],
                                code: '',
                                hideAttr: true,
                              },
                            },
                            {
                              attrId: '861798',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '5' },
                              type: 'long',
                              key: 'body.pageSize',
                              value: {
                                type: ['context', '$pageSize$'],
                                code: '',
                                hideAttr: true,
                              },
                            },
                            {
                              attrId: '422657',
                              code: 'roleName',
                              name: 'roleName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.roleName',
                              value: {
                                type: [
                                  'form',
                                  'Form_5336927_5441987',
                                  'getFieldsValue',
                                ],
                                code: 'roleName',
                              },
                            },
                            {
                              attrId: '1762207',
                              code: 'roleCode',
                              name: 'roleCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.roleCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_5336927_5441987',
                                  'validateFields',
                                ],
                                code: 'roleCode',
                              },
                            },
                            {
                              attrId: '271664',
                              code: 'privilegeId',
                              name: 'privilegeId',
                              sort: { isSort: true },
                              initialData: {
                                type: 'static',
                                value: '$state.bizId$',
                              },
                              type: 'long',
                              key: 'body.privilegeId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
                              },
                            },
                          ],
                          key: 'body',
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '994962',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '446253',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '838418',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2988973',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '85518',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '063319',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '6117673',
                              code: 'hitCount',
                              name: 'hitCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '4029',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '162125',
                              code: 'optimizeCountSql',
                              name: 'optimizeCountSql',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '910741',
                              code: 'maxLimit',
                              name: 'maxLimit',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '739428',
                              code: 'orders',
                              name: 'orders',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '940584',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                            },
                            {
                              attrId: '752746',
                              code: 'countId',
                              name: 'countId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '048657',
                              code: 'isSearchCount',
                              name: 'isSearchCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '314328',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '787819',
                                  code: 'createStaffName',
                                  name: 'createStaffName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '088395',
                                  code: 'rolePrivilegeRelId',
                                  name: 'rolePrivilegeRelId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '4497927',
                                  code: 'roleId',
                                  name: 'roleId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '899391',
                                  code: 'roleCode',
                                  name: 'roleCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '748086',
                                  code: 'roleName',
                                  name: 'roleName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '515382',
                                  code: 'createDate',
                                  name: 'createDate',
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
                eventDatareloadDataSource121.params =
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
                  eventDatareloadDataSource121,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_554268_831796')}
              {...injectData}
            />
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(PrivilegeNotHaveRolePopup$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '' },
});
