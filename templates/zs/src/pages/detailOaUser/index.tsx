// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, TimePicker, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const DetailOaUser$$Modal: React.FC<PageProps> = ({
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
    const eventDatacloseModal106: any = [
      {
        type: 'closeModal',
        dataId: 166245278722159040,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '168315',
          pageJsonId: 31,
        },
        line_number: 1,
      },
    ];
    eventDatacloseModal106.params = [] || [];
    CMDGenerator(eventDatacloseModal106, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal107: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal107.params = [] || [];
    CMDGenerator(eventDatacloseModal107, {}, 'closeModal', {
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
    const eventDatacustomActionCode307: any = [
      {
        type: 'customActionCode',
        dataId: 166244620862574620,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '150081',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){data.dcOaUser=state.dcOaUser;success(state.dcOaUser)};',
          actionTitle: '',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 166263046721980930,
            options: {
              compId: 'console',
              compName: 'system',
              id: '517822',
              pageJsonId: 31,
              value: ['$data.dcOaUser$'],
            },
            line_number: 2,
          },
          {
            type: 'setDataSource',
            dataId: 166244625782259620,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '170053',
              pageJsonId: 31,
              dataSourceId: 166262879535735520,
              dataSourceName: 'dcOaUser',
              dataSourceRelType: 'object',
              dataSourceReloadFilter: [
                {
                  attrId: '002642',
                  code: 'primaryValue',
                  name: '主键值',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  key: 'primaryValue',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '023693',
                  code: 'usrKey',
                  name: 'OIM生成的用户主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrKey',
                  },
                },
                {
                  attrId: '9446396',
                  code: 'actKey',
                  name: 'ERP组织主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'actKey',
                  },
                },
                {
                  attrId: '7959107',
                  code: 'usrLastName',
                  name: '用户名（名）',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '7029351',
                  code: 'usrFirstName',
                  name: '用户名（姓）',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrFirstName',
                  },
                },
                {
                  attrId: '168295',
                  code: 'usrType',
                  name: '类型',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrType',
                  },
                },
                {
                  attrId: '54162435',
                  code: 'usrPassword',
                  name: '密码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrPassword',
                  },
                },
                {
                  attrId: '09260938',
                  code: 'usrStatus',
                  name: '状态',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrStatus',
                  },
                },
                {
                  attrId: '747218',
                  code: 'usrEmpType',
                  name: '雇佣类型',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrEmpType',
                  },
                },
                {
                  attrId: '791177',
                  code: 'usrLogin',
                  name: '登录名',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '7805397',
                  code: 'usrEmail',
                  name: '电子邮件',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrEmail',
                  },
                },
                {
                  attrId: '4935323',
                  code: 'usrLocked',
                  name: '是否锁定',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrLocked',
                  },
                },
                {
                  attrId: '946182',
                  code: 'usrChangePwdAtNextLogon',
                  name: '下次登录是否修改密码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrChangePwdAtNextLogon',
                  },
                },
                {
                  attrId: '5389448',
                  code: 'usrUdfDepartment',
                  name: '部门（无效字段）',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfDepartment',
                  },
                },
                {
                  attrId: '602077',
                  code: 'usrUdfEmployeeId',
                  name: '内部雇佣编号',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfEmployeeId',
                  },
                },
                {
                  attrId: '07113243',
                  code: 'usrUdfShortName',
                  name: '缩写名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfShortName',
                  },
                },
                {
                  attrId: '3370187',
                  code: 'usrCreated',
                  name: '创建完成时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrCreated',
                  },
                },
                {
                  attrId: '729038',
                  code: 'usrProvisionedDate',
                  name: '已预配日期',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrProvisionedDate',
                  },
                },
                {
                  attrId: '568031',
                  code: 'usrCreate',
                  name: '创建开始时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrCreate',
                  },
                },
                {
                  attrId: '697136',
                  code: 'usrUpdate',
                  name: '更新时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUpdate',
                  },
                },
                {
                  attrId: '4715002',
                  code: 'usrLoginAttemptsCtr',
                  name: '登录尝试次数',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrLoginAttemptsCtr',
                  },
                },
                {
                  attrId: '769148',
                  code: 'usrPwdResetAttemptsCtr',
                  name: '密码尝试次数',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrPwdResetAttemptsCtr',
                  },
                },
                {
                  attrId: '130715',
                  code: 'actName',
                  name: 'ERP组织名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'actName',
                  },
                },
                {
                  attrId: '275846',
                  code: 'usrUdfMobile',
                  name: '手机号码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfMobile',
                  },
                },
                {
                  attrId: '360082',
                  code: 'actUdfNum',
                  name: 'ERP组织20位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'actUdfNum',
                  },
                },
                {
                  attrId: '477575',
                  code: 'usrUdfOaOrg',
                  name: 'OA组织20位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfOaOrg',
                  },
                },
                {
                  attrId: '015113',
                  code: 'orgName',
                  name: 'OA组织名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'orgName',
                  },
                },
                {
                  attrId: '126745',
                  code: 'subUsrUdfOaOrgs',
                  name: 'OA组织编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'subUsrUdfOaOrgs',
                  },
                },
                {
                  attrId: '768508',
                  code: 'subOrgNames',
                  name: '下级OA组织名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'subOrgNames',
                  },
                },
                {
                  attrId: '731234',
                  code: 'usrUdfIdNum',
                  name: '身份证号码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfIdNum',
                  },
                },
                {
                  attrId: '948729',
                  code: 'usrUdfSex',
                  name: '性别',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfSex',
                  },
                },
                {
                  attrId: '8965114',
                  code: 'usrUdfJobLevel',
                  name: 'OA组织1级别',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfJobLevel',
                  },
                },
                {
                  attrId: '292897',
                  code: 'subUsrUdfJobLevels',
                  name: 'OA组织级别',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'subUsrUdfJobLevels',
                  },
                },
                {
                  attrId: '248333',
                  code: 'usrUdfOrgOrder',
                  name: 'OA组织1排序',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfOrgOrder',
                  },
                },
                {
                  attrId: '263555',
                  code: 'subUsrUdfOrgOrders',
                  name: 'OA组织排序',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'subUsrUdfOrgOrders',
                  },
                },
                {
                  attrId: '937792',
                  code: 'usrEndDate',
                  name: '结束日期',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrEndDate',
                  },
                },
                {
                  attrId: '969456',
                  code: 'usrUdfOaNum',
                  name: 'OA工单号',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfOaNum',
                  },
                },
                {
                  attrId: '642455',
                  code: 'usrUdfSysMask',
                  name: '系统掩码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfSysMask',
                  },
                },
                {
                  attrId: '543483',
                  code: 'usrUdfBelongComp',
                  name: '外部人员所属公司',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfBelongComp',
                  },
                },
                {
                  attrId: '6220506',
                  code: 'usrUdfMgrErpOrg',
                  name: '外部人员管理组织',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'usrUdfMgrErpOrg',
                  },
                },
                {
                  attrId: '0839406',
                  code: 'cardInfo',
                  name: '一卡通信息',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaUser', 'data'],
                    code: 'cardInfo',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode307.params = [] || [];
    CMDGenerator(eventDatacustomActionCode307, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_31_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => (refs['VerticalView_31_11'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              margin: '0px 0px 0px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => (refs['View_31_112'] = r)}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={12}
              colSpace={16}
              rowSpace={16}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              genRuleType={'object'}
              formType={'normal'}
              relationDataSource={data?.dcOaUser}
              formItemIndex={9}
              busiObjectId={'885089089978368001'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource302: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166262880808052350,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '901597',
                      pageJsonId: 31,
                      dataSourceId: 166262879535735520,
                      dataSourceName: 'dcOaUser',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '023693',
                          code: 'usrKey',
                          name: 'OIM生成的用户主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrKey',
                          },
                        },
                        {
                          attrId: '9446396',
                          code: 'actKey',
                          name: 'ERP组织主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actKey',
                          },
                        },
                        {
                          attrId: '7959107',
                          code: 'usrLastName',
                          name: '用户名（名）',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrLastName',
                          },
                        },
                        {
                          attrId: '7029351',
                          code: 'usrFirstName',
                          name: '用户名（姓）',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrFirstName',
                          },
                        },
                        {
                          attrId: '168295',
                          code: 'usrType',
                          name: '类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrType',
                          },
                        },
                        {
                          attrId: '54162435',
                          code: 'usrPassword',
                          name: '密码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '09260938',
                          code: 'usrStatus',
                          name: '状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrStatus',
                          },
                        },
                        {
                          attrId: '747218',
                          code: 'usrEmpType',
                          name: '雇佣类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrEmpType',
                          },
                        },
                        {
                          attrId: '791177',
                          code: 'usrLogin',
                          name: '登录名',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrLogin',
                          },
                        },
                        {
                          attrId: '7805397',
                          code: 'usrEmail',
                          name: '电子邮件',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrEmail',
                          },
                        },
                        {
                          attrId: '4935323',
                          code: 'usrLocked',
                          name: '是否锁定',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrLocked',
                          },
                        },
                        {
                          attrId: '946182',
                          code: 'usrChangePwdAtNextLogon',
                          name: '下次登录是否修改密码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '5389448',
                          code: 'usrUdfDepartment',
                          name: '部门（无效字段）',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '602077',
                          code: 'usrUdfEmployeeId',
                          name: '内部雇佣编号',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '07113243',
                          code: 'usrUdfShortName',
                          name: '缩写名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '3370187',
                          code: 'usrCreated',
                          name: '创建完成时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrCreated',
                          },
                        },
                        {
                          attrId: '729038',
                          code: 'usrProvisionedDate',
                          name: '已预配日期',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '568031',
                          code: 'usrCreate',
                          name: '创建开始时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '697136',
                          code: 'usrUpdate',
                          name: '更新时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrUpdate',
                          },
                        },
                        {
                          attrId: '4715002',
                          code: 'usrLoginAttemptsCtr',
                          name: '登录尝试次数',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '769148',
                          code: 'usrPwdResetAttemptsCtr',
                          name: '密码尝试次数',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '130715',
                          code: 'actName',
                          name: 'ERP组织名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actName',
                          },
                        },
                        {
                          attrId: '275846',
                          code: 'usrUdfMobile',
                          name: '手机号码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrUdfMobile',
                          },
                        },
                        {
                          attrId: '360082',
                          code: 'actUdfNum',
                          name: 'ERP组织20位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '477575',
                          code: 'usrUdfOaOrg',
                          name: 'OA组织20位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '015113',
                          code: 'orgName',
                          name: 'OA组织名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgName',
                          },
                        },
                        {
                          attrId: '126745',
                          code: 'subUsrUdfOaOrgs',
                          name: 'OA组织编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '768508',
                          code: 'subOrgNames',
                          name: '下级OA组织名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '731234',
                          code: 'usrUdfIdNum',
                          name: '身份证号码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '948729',
                          code: 'usrUdfSex',
                          name: '性别',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'usrUdfSex',
                          },
                        },
                        {
                          attrId: '8965114',
                          code: 'usrUdfJobLevel',
                          name: 'OA组织1级别',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '292897',
                          code: 'subUsrUdfJobLevels',
                          name: 'OA组织级别',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '248333',
                          code: 'usrUdfOrgOrder',
                          name: 'OA组织1排序',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '263555',
                          code: 'subUsrUdfOrgOrders',
                          name: 'OA组织排序',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '937792',
                          code: 'usrEndDate',
                          name: '结束日期',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '969456',
                          code: 'usrUdfOaNum',
                          name: 'OA工单号',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '642455',
                          code: 'usrUdfSysMask',
                          name: '系统掩码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '543483',
                          code: 'usrUdfBelongComp',
                          name: '外部人员所属公司',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '6220506',
                          code: 'usrUdfMgrErpOrg',
                          name: '外部人员管理组织',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '0839406',
                          code: 'cardInfo',
                          name: '一卡通信息',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource302.params = [] || [];
                CMDGenerator(eventDatasetDataSource302, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Form_31_1121'] = r)}
              {...injectData}
            >
              <Input
                name={'OIM用户主键'}
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
                fieldName={'usrKey'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrKey}
                formItemIndex={0}
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
                  id: 'Input_usrKey_302081',
                  uid: 'Input_usrKey_302081',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrKey_302081'] = r)}
                {...injectData}
              />
              <Input
                name={'ERP组织主键'}
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
                fieldName={'actKey'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.actKey}
                formItemIndex={1}
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
                  id: 'Input_actKey_2472835',
                  uid: 'Input_actKey_2472835',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_actKey_2472835'] = r)}
                {...injectData}
              />
              <Input
                name={'用户名（名）'}
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
                fieldName={'usrLastName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrLastName}
                formItemIndex={2}
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
                  id: 'Input_usrLastName_037923',
                  uid: 'Input_usrLastName_037923',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrLastName_037923'] = r)}
                {...injectData}
              />
              <Input
                name={'用户名（姓）'}
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
                fieldName={'usrFirstName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrFirstName}
                formItemIndex={3}
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
                  id: 'Input_usrFirstName_8337786',
                  uid: 'Input_usrFirstName_8337786',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrFirstName_8337786'] = r)}
                {...injectData}
              />
              <Input
                name={'登录名'}
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
                fieldName={'usrLogin'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrLogin}
                formItemIndex={4}
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
                  id: 'Input_usrLogin_433893',
                  uid: 'Input_usrLogin_433893',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrLogin_433893'] = r)}
                {...injectData}
              />
              <Input
                name={'性别'}
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
                fieldName={'usrUdfSex'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrUdfSex}
                formItemIndex={5}
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
                  id: 'Input_usrUdfSex_912767',
                  uid: 'Input_usrUdfSex_912767',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrUdfSex_912767'] = r)}
                {...injectData}
              />
              <Input
                name={'手机号码'}
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
                fieldName={'usrUdfMobile'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrUdfMobile}
                formItemIndex={6}
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
                  id: 'Input_usrUdfMobile_600937',
                  uid: 'Input_usrUdfMobile_600937',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrUdfMobile_600937'] = r)}
                {...injectData}
              />
              <Input
                name={'电子邮件'}
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
                fieldName={'usrEmail'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrEmail}
                formItemIndex={7}
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
                  id: 'Input_usrEmail_0709186',
                  uid: 'Input_usrEmail_0709186',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrEmail_0709186'] = r)}
                {...injectData}
              />
              <Select
                name={'类型'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'usrType'}
                value={data?.dcOaUser?.usrType}
                formItemIndex={8}
                dataSource={[
                  { id: '7224443', label: '终端用户', value: 'End-User' },
                  {
                    id: '477924',
                    label: '管理员',
                    value: 'End-User Administrator',
                  },
                ]}
                $$componentItem={{
                  id: 'Input_usrType_6807063',
                  uid: 'Input_usrType_6807063',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrType_6807063'] = r)}
                {...injectData}
              />
              <Select
                name={'雇佣类型'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'usrEmpType'}
                value={data?.dcOaUser?.usrEmpType}
                formItemIndex={9}
                dataSource={[
                  { id: '930306', label: '全职', value: 'Full-Time' },
                  { id: '3551174', label: '临时', value: 'Temp' },
                  { id: '937085', label: '实习', value: 'Intern' },
                  { id: '511966', label: '合作伙伴', value: 'Partner' },
                ]}
                $$componentItem={{
                  id: 'Input_usrEmpType_5389952',
                  uid: 'Input_usrEmpType_5389952',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrEmpType_5389952'] = r)}
                {...injectData}
              />
              <Select
                name={'状态'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                fieldName={'usrStatus'}
                value={data?.dcOaUser?.usrStatus}
                formItemIndex={10}
                dataSource={[{ id: '481681', label: '在用', value: 'Active' }]}
                $$componentItem={{
                  id: 'Input_usrStatus_233963',
                  uid: 'Input_usrStatus_233963',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrStatus_233963'] = r)}
                {...injectData}
              />
              <Input
                name={'是否锁定'}
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
                fieldName={'usrLocked'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrLocked}
                formItemIndex={11}
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
                  id: 'Input_usrLocked_365842',
                  uid: 'Input_usrLocked_365842',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_usrLocked_365842'] = r)}
                {...injectData}
              />
              <Input
                name={'ERP组织名称'}
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
                fieldName={'actName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.actName}
                formItemIndex={12}
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
                  id: 'Input_actName_007217',
                  uid: 'Input_actName_007217',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_actName_007217'] = r)}
                {...injectData}
              />
              <Input
                name={'OA组织名称'}
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
                fieldName={'orgName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.orgName}
                formItemIndex={13}
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
                  id: 'Input_orgName_9065583',
                  uid: 'Input_orgName_9065583',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_orgName_9065583'] = r)}
                {...injectData}
              />
              <TimePicker
                name={'更新时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'usrUpdate'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrUpdate}
                formItemIndex={14}
                isCurrent={'now'}
                $$componentItem={{
                  id: 'TimePicker_usrUpdate_5514014',
                  uid: 'TimePicker_usrUpdate_5514014',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['TimePicker_usrUpdate_5514014'] = r)}
                {...injectData}
              />
              <TimePicker
                name={'创建完成时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'usrCreated'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaUser?.usrCreated}
                formItemIndex={15}
                isCurrent={'now'}
                $$componentItem={{
                  id: 'TimePicker_usrCreated_017339',
                  uid: 'TimePicker_usrCreated_017339',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) => (refs['TimePicker_usrCreated_017339'] = r)}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(DetailOaUser$$Modal, {
  pageId: '885082440567881728',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', dcOaUser: '' },
});
