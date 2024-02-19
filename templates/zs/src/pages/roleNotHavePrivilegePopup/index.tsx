// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Form,
  Input,
  Table,
  VerticalView,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const RoleNotHavePrivilegePopup$$Modal: React.FC<PageProps> = ({
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
}) => {
  const onOk = () => {
    const eventDatagetTableSelectedKey4: any = [
      {
        type: 'getTableSelectedKey',
        dataId: 167888578818240450,
        options: {
          compId: 'Table_554268_831796_544988',
          compLib: 'comm',
          pageJsonId: '2694965',
          compName: 'Table',
          id: '635572',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '186807',
                options: {
                  context: '$selectedRowKeys_635572$',
                  operate: 'empty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888584431127740,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888584431163520,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888584431170980,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167888584431181150,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 167888584431191200,
                            children: [
                              {
                                actionObjId: 'page',
                                actionObjName: 'page',
                                children: [],
                                dataId: 167888584431172000,
                                dataName: 'action',
                                options: {
                                  compId: 'page',
                                  compName: 'page',
                                  id: '061743',
                                },
                                todoOptions: [],
                                value: 'closeModal',
                                elseIfs: [],
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 167888584431114000,
                                children: [],
                                todoOptions: ['setParams'],
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '305192',
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
                                  context: '$reply_6530002.resultCode$',
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
                        dataId: 167888584431126850,
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
                      id: '6530002',
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
                          dataKey: '6530002_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '6530002_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '6530002_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                                  dataKey: '6530002_body.roleIdList.listItem',
                                },
                              ],
                              _id: 'body.roleIdList',
                              compType: 'Input',
                              name: 'roleIdList',
                              parents: ['body'],
                              id: 'body.roleIdList',
                              dataKey: '6530002_body.roleIdList',
                              value: { type: [], code: '' },
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
                              dataKey: '6530002_body.updateDate',
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
                              dataKey: '6530002_body.updateStaff',
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
                              dataKey: '6530002_body.createDate',
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
                              dataKey: '6530002_body.createStaff',
                            },
                            {
                              code: 'privilegeIdList',
                              name: 'privilegeIdList',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.privilegeIdList.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'privilegeIdList'],
                                  id: 'body.privilegeIdList.listItem',
                                  dataKey:
                                    '6530002_body.privilegeIdList.listItem',
                                },
                              ],
                              _id: 'body.privilegeIdList',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.privilegeIdList',
                              dataKey: '6530002_body.privilegeIdList',
                              value: {
                                type: ['context', '$selectedRowKeys_635572$'],
                                code: '',
                              },
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
                              dataKey: '6530002_body.createStaffName',
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
                              dataKey: '6530002_body.privilegeId',
                              value: { type: [], code: '' },
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
                              dataKey: '6530002_body.remark',
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
                              dataKey: '6530002_body.rolePrivilegeRelId',
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
                              dataKey: '6530002_body.roleId',
                              value: {
                                type: ['context', '$state.bizId$'],
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
                              dataKey: '6530002_body.statusCd',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '6530002_body',
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
                    dataId: 167888584431170980,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '6530002',
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
                          dataKey: '6530002_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '6530002_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '6530002_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                                  dataKey: '6530002_body.roleIdList.listItem',
                                },
                              ],
                              _id: 'body.roleIdList',
                              compType: 'Input',
                              name: 'roleIdList',
                              parents: ['body'],
                              id: 'body.roleIdList',
                              dataKey: '6530002_body.roleIdList',
                              value: { type: [], code: '' },
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
                              dataKey: '6530002_body.updateDate',
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
                              dataKey: '6530002_body.updateStaff',
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
                              dataKey: '6530002_body.createDate',
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
                              dataKey: '6530002_body.createStaff',
                            },
                            {
                              code: 'privilegeIdList',
                              name: 'privilegeIdList',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.privilegeIdList.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'privilegeIdList'],
                                  id: 'body.privilegeIdList.listItem',
                                  dataKey:
                                    '6530002_body.privilegeIdList.listItem',
                                },
                              ],
                              _id: 'body.privilegeIdList',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.privilegeIdList',
                              dataKey: '6530002_body.privilegeIdList',
                              value: {
                                type: ['context', '$selectedRowKeys_635572$'],
                                code: '',
                              },
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
                              dataKey: '6530002_body.createStaffName',
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
                              dataKey: '6530002_body.privilegeId',
                              value: { type: [], code: '' },
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
                              dataKey: '6530002_body.remark',
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
                              dataKey: '6530002_body.rolePrivilegeRelId',
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
                              dataKey: '6530002_body.roleId',
                              value: {
                                type: ['context', '$state.bizId$'],
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
                              dataKey: '6530002_body.statusCd',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '6530002_body',
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
                              context: '$reply_6530002.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167888584431191200,
                        elseIfs: [],
                        line_number: 5,
                        callback1: [
                          {
                            type: 'closeModal',
                            dataId: 167888584431172000,
                            options: {
                              compId: 'page',
                              compName: 'page',
                              id: '061743',
                            },
                            line_number: 6,
                          },
                          {
                            type: 'okCallbackData',
                            dataId: 167888584431114000,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '305192',
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
                dataId: 167888584431120860,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '551065',
                  pageJsonId: '2694965',
                  type: 'info',
                  value: '请选择角色要关联的权限',
                },
                line_number: 3,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelectedKey4.params = [] || [];
    CMDGenerator(eventDatagetTableSelectedKey4, {}, 'getTableSelectedKey', {
      id: 'getTableSelectedKey',
      name: 'getTableSelectedKey',
      type: 'getTableSelectedKey',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal82: any = [
      {
        type: 'closeModal',
        dataId: '675472_1',
        options: { compId: 'page', compName: 'page', id: '77216' },
        line_number: 1,
      },
    ];
    eventDatacloseModal82.params = [] || [];
    CMDGenerator(eventDatacloseModal82, {}, 'closeModal', {
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
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_2694965_1_993205',
          uid: 'View_2694965_1_993205',
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
        ref={(r: any) => (refs['View_2694965_1_993205'] = r)}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_632783_224319',
            uid: 'VerticalView_632783_224319',
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
          ref={(r: any) => (refs['VerticalView_632783_224319'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_563648_3759885',
              uid: 'View_563648_3759885',
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
            ref={(r: any) => (refs['View_563648_3759885'] = r)}
            {...injectData}
          >
            <Form
              name={'权限查询表单'}
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
                id: 'Form_5336927_5441987_624807',
                uid: 'Form_5336927_5441987_624807',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_5336927_5441987_624807'] = r)}
              {...injectData}
            >
              <Input
                name={'权限编码'}
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
                fieldName={'privilegeCode'}
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
                  id: 'Input_510699_196741_413539',
                  uid: 'Input_510699_196741_413539',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_510699_196741_413539'] = r)}
                {...injectData}
              />
              <Input
                name={'权限名称'}
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
                fieldName={'privilegeName'}
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
                  id: 'Input_0129142_45762604_671757',
                  uid: 'Input_0129142_45762604_671757',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_0129142_45762604_671757'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_756929_0062074_7390883_0416838_926976',
                  uid: 'View_756929_0062074_7390883_0416838_926976',
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
                  (refs['View_756929_0062074_7390883_0416838_926976'] = r)
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
                    id: 'Button_508625_7684763_98176_9864996_379453',
                    uid: 'Button_508625_7684763_98176_9864996_379453',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const eventDatareloadDataSource117: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 167870938354380830,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '1560388',
                          pageJsonId: '2694965',
                          dataSourceId: 167888554081263100,
                          dataSourceName: 'privilegeList',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '285511',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'header',
                            },
                            {
                              attrId: '7583397',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '3696743',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
                            },
                            {
                              attrId: '071536',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '826328',
                                  code: 'roleId',
                                  name: 'roleId',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$state.bizId$',
                                  },
                                  type: 'long',
                                  key: 'body.roleId',
                                  value: {
                                    type: ['context', '$state.bizId$'],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '70338',
                                  code: 'privilegeCode',
                                  name: 'privilegeCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.privilegeCode',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_5336927_5441987_624807',
                                      'getFieldsValue',
                                    ],
                                    code: 'privilegeCode',
                                  },
                                },
                                {
                                  attrId: '022925',
                                  code: 'privilegeName',
                                  name: 'privilegeName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.privilegeName',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_5336927_5441987_624807',
                                      'getFieldsValue',
                                    ],
                                    code: 'privilegeName',
                                  },
                                },
                                {
                                  attrId: '5267207',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '1' },
                                  type: 'long',
                                  key: 'body.pageNum',
                                  value: { type: ['customize'], code: '1' },
                                },
                                {
                                  attrId: '936496',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '5' },
                                  type: 'long',
                                  key: 'body.pageSize',
                                  value: { type: ['customize'], code: '5' },
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '324525',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '39699',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '103475',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8761907',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '149409',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '776938',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '62568',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '534556',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '899494',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '255857',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '8495667',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '641863',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '277859',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '2984604',
                                  code: 'isSearchCount',
                                  name: 'isSearchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '443153',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '185181',
                                      code: 'rolePrivilegeRelId',
                                      name: 'rolePrivilegeRelId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '046653',
                                      code: 'privilegeId',
                                      name: 'privilegeId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '440332',
                                      code: 'privilegeName',
                                      name: 'privilegeName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '07481',
                                      code: 'createDate',
                                      name: 'createDate',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '300133',
                                      code: 'privilegeCode',
                                      name: 'privilegeCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '0347352',
                                      code: 'createStaffName',
                                      name: 'createStaffName',
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
                    eventDatareloadDataSource117.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatareloadDataSource117,
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
                    (refs['Button_508625_7684763_98176_9864996_379453'] = r)
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
                    id: 'Button_228714_24039_080445_397017_049885',
                    uid: 'Button_228714_24039_080445_397017_049885',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                  onClick={(e: any) => {
                    const forms185 = getFormByCompId(
                      'Form_5336927_5441987_624807',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms185) ? forms185 : [forms185]).forEach(
                      (form) => form?.resetFields(),
                    );
                  }}
                  ref={(r: any) =>
                    (refs['Button_228714_24039_080445_397017_049885'] = r)
                  }
                  {...injectData}
                />
              </View>
            </Form>
          </View>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_3108781_769266',
              uid: 'View_3108781_769266',
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
            ref={(r: any) => (refs['View_3108781_769266'] = r)}
            {...injectData}
          >
            <Table
              name={'权限表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={data?.privilegeList?.resultData?.size}
              current={data?.privilegeList?.resultData?.current}
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
                  title: '权限ID',
                  key: 'privilegeId',
                  dataIndex: 'privilegeId',
                  className: '',
                  id: '920792',
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
                  title: '权限编码',
                  key: 'privilegeCode',
                  dataIndex: 'privilegeCode',
                  className: 'divider',
                  id: '077708',
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
                  title: '权限名称',
                  key: 'privilegeName',
                  dataIndex: 'privilegeName',
                  className: 'divider',
                  id: '2024499',
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
              rowKey={'privilegeId'}
              dataSource={data?.privilegeList?.resultData?.records}
              rowActions={[]}
              extend={[]}
              fieldName={'current$"'}
              total={data?.privilegeList?.resultData?.total}
              scroll={{ y: 240 }}
              dataSourceFromDataSourceConfig={
                'data.privilegeList.resultData.records'
              }
              $$componentItem={{
                id: 'Table_554268_831796_544988',
                uid: 'Table_554268_831796_544988',
                type: 'Table',
                ...componentItem,
              }}
              style={{ margin: '20px 0px 0px 0px', flex: '', width: '100%' }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatareloadDataSource118: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 167870946157633200,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '897244',
                      pageJsonId: '2694965',
                      dataSourceId: 167888554081263100,
                      dataSourceName: 'privilegeList',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '285511',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'header',
                        },
                        {
                          attrId: '7583397',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'path',
                        },
                        {
                          attrId: '3696743',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'query',
                        },
                        {
                          attrId: '071536',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          children: [
                            {
                              attrId: '826328',
                              code: 'roleId',
                              name: 'roleId',
                              sort: { isSort: true },
                              initialData: {
                                type: 'static',
                                value: '$state.bizId$',
                              },
                              type: 'long',
                              key: 'body.roleId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
                              },
                            },
                            {
                              attrId: '70338',
                              code: 'privilegeCode',
                              name: 'privilegeCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.privilegeCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_5336927_5441987_624807',
                                  'getFieldsValue',
                                ],
                                code: 'privilegeCode',
                              },
                            },
                            {
                              attrId: '022925',
                              code: 'privilegeName',
                              name: 'privilegeName',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.privilegeName',
                              value: {
                                type: [
                                  'form',
                                  'Form_5336927_5441987_624807',
                                  'getFieldsValue',
                                ],
                                code: 'privilegeName',
                              },
                            },
                            {
                              attrId: '5267207',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '1' },
                              type: 'long',
                              key: 'body.pageNum',
                              value: {
                                type: ['context', '$page$'],
                                hideAttr: true,
                                code: '',
                              },
                            },
                            {
                              attrId: '936496',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '5' },
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
                          attrId: '324525',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '39699',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '103475',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '8761907',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '149409',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '776938',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '62568',
                              code: 'hitCount',
                              name: 'hitCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '534556',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '899494',
                              code: 'optimizeCountSql',
                              name: 'optimizeCountSql',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '255857',
                              code: 'maxLimit',
                              name: 'maxLimit',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8495667',
                              code: 'orders',
                              name: 'orders',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'fieldArray',
                              children: [
                                {
                                  attrId: '641863',
                                  code: 'listItem',
                                  name: '列表元素',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                },
                              ],
                            },
                            {
                              attrId: '277859',
                              code: 'countId',
                              name: 'countId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '2984604',
                              code: 'isSearchCount',
                              name: 'isSearchCount',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'boolean',
                            },
                            {
                              attrId: '443153',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '185181',
                                  code: 'rolePrivilegeRelId',
                                  name: 'rolePrivilegeRelId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '046653',
                                  code: 'privilegeId',
                                  name: 'privilegeId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '440332',
                                  code: 'privilegeName',
                                  name: 'privilegeName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '07481',
                                  code: 'createDate',
                                  name: 'createDate',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '300133',
                                  code: 'privilegeCode',
                                  name: 'privilegeCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '0347352',
                                  code: 'createStaffName',
                                  name: 'createStaffName',
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
                eventDatareloadDataSource118.params =
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
                  eventDatareloadDataSource118,
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
              ref={(r: any) => (refs['Table_554268_831796_544988'] = r)}
              {...injectData}
            />
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(RoleNotHavePrivilegePopup$$Modal, {
  pageId: '953183095901683712',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '' },
});
