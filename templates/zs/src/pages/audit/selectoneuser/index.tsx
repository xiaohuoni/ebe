// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Form,
  Input,
  Table,
  Text,
  Tree,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const AuditSelectoneuser$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetCurrentFormValues13: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 166061894447757800,
        options: {
          compId: 'Form_486003',
          compLib: 'comm',
          pageJsonId: '2310769',
          compName: 'Form',
          id: '7230334',
        },
        line_number: 1,
        callback1: [
          {
            type: 'okCallbackData',
            dataId: 166061895947703200,
            options: {
              compId: 'okCallbackData',
              compName: 'page',
              id: '7882048',
              pageJsonId: '2310769',
              params: '$Form_486003$',
            },
            line_number: 2,
          },
          {
            type: 'closeModal',
            dataId: 166061896871060480,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '876086',
              pageJsonId: '2310769',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues13.params = [] || [];
    CMDGenerator(eventDatagetCurrentFormValues13, {}, 'getCurrentFormValues', {
      id: 'getCurrentFormValues',
      name: 'getCurrentFormValues',
      type: 'getCurrentFormValues',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal30: any = [
      {
        type: 'closeModal',
        dataId: '285762_1',
        options: { compId: 'page', compName: 'page', id: '059026' },
        line_number: 1,
      },
    ];
    eventDatacloseModal30.params = [] || [];
    CMDGenerator(eventDatacloseModal30, {}, 'closeModal', {
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
    const eventDataapiRequest271: any = [
      {
        type: 'apiRequest',
        dataId: 166056541728129250,
        options: {
          compId: 'sys',
          compName: 'system',
          pageJsonId: '2310769',
          id: '122621',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'fetchUserOrgTree',
          _apiCode: 'fetchUserOrgTree',
          _source: 'rhin',
          _serviceId: '876407465902501888',
          _serviceTitle: '查询用户机构树信息: fetchUserOrgTree',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: ['root'],
              id: 'header',
              dataKey: '122621_header',
              parentType: 'object',
              parentKey: '0',
              key: '0-0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: ['root'],
              id: 'path',
              dataKey: '122621_path',
              parentType: 'object',
              parentKey: '0',
              key: '0-1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: ['root'],
              id: 'query',
              dataKey: '122621_query',
              parentType: 'object',
              parentKey: '0',
              key: '0-2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'flowCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.flowCode',
                  compType: 'Input',
                  name: 'flowCode',
                  parents: ['root', 'body'],
                  id: 'body.flowCode',
                  dataKey: '122621_body.flowCode',
                  value: { type: ['context', '$state.flowCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
                {
                  code: 'workItemId',
                  name: '流程环节实例id',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.workItemId',
                  compType: 'Input',
                  parents: ['root', 'body'],
                  id: 'body.workItemId',
                  dataKey: '122621_body.workItemId',
                  value: { type: ['context', '$state.workItemId$'], code: '' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-1',
                },
                {
                  code: 'meetingFlag',
                  name: '是否会签',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.meetingFlag',
                  compType: 'Input',
                  parents: ['root', 'body'],
                  id: 'body.meetingFlag',
                  dataKey: '122621_body.meetingFlag',
                  value: { type: ['customize'], code: 'N' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-2',
                },
                {
                  code: 'tacheCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.tacheCode',
                  compType: 'Input',
                  name: 'tacheCode',
                  parents: ['root', 'body'],
                  id: 'body.tacheCode',
                  dataKey: '122621_body.tacheCode',
                  value: { type: ['context', '$state.tacheCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-3',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '122621_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166056541728106750,
            options: {
              compId: 'Tree_443137',
              compName: 'Tree',
              compLib: 'comm',
              pageJsonId: '2310769',
              id: '673281',
              data: '$reply_122621?.resultData.treeNodes$',
              labelKey: 'orgName',
              nodeValueKey: 'orgId',
              selectable: 'isCheck',
              childrenKey: 'children',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '774459',
                    options: {
                      context: '$reply_122621?.resultData.defualtOrgCode$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167050906425075260,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'setTreeSelectedKey',
                    dataId: 167050909347428060,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '638461',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'setExpandedKey',
                    dataId: 167050909727431800,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '535803',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 5,
                  },
                ],
              },
              {
                type: 'setLoading',
                dataId: 167050914654533220,
                options: {
                  compId: 'Table_2310769_112',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Table',
                  id: '717767',
                  loading: true,
                },
                line_number: 6,
              },
              {
                type: 'getTreeSelectedKey',
                dataId: 167050915248251360,
                options: {
                  compId: 'Tree_443137',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Tree',
                  id: '5700691',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'getValue',
                    dataId: 167050915248296740,
                    options: {
                      compId: 'Input_262276',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '461162',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'reloadDataSource',
                        dataId: 167050915248281730,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '9326556',
                          pageJsonId: '2310769',
                          dataSourceId: 166057056526189100,
                          dataSourceName: 'staffList',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '873162',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              _codePath: ['header'],
                              _idpath: ['873162'],
                            },
                            {
                              attrId: '6952216',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              _codePath: ['path'],
                              _idpath: ['6952216'],
                            },
                            {
                              attrId: '321962',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              _codePath: ['query'],
                              _idpath: ['321962'],
                            },
                            {
                              attrId: '3621852',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '716607',
                                  code: 'keyLike',
                                  name: 'keyLike',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', '$value_461162$'],
                                    code: '',
                                  },
                                  _codePath: ['body', 'keyLike'],
                                  _idpath: ['3621852', '716607'],
                                },
                                {
                                  attrId: '882351',
                                  code: 'orgId',
                                  name: 'orgId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_122621?.resultData.defualtOrgCode$',
                                  },
                                  _codePath: ['body', 'orgId'],
                                  _idpath: ['3621852', '882351'],
                                },
                                {
                                  attrId: '879186',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '1' },
                                  _codePath: ['body', 'pageNum'],
                                  _idpath: ['3621852', '879186'],
                                },
                                {
                                  attrId: '8683064',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '10' },
                                  _codePath: ['body', 'pageSize'],
                                  _idpath: ['3621852', '8683064'],
                                },
                                {
                                  attrId: '2052625',
                                  code: 'flowCode',
                                  name: '流程编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', '$state.flowCode$'],
                                    code: '',
                                  },
                                  _codePath: ['body', 'flowCode'],
                                  _idpath: ['3621852', '2052625'],
                                },
                                {
                                  attrId: '08224994',
                                  code: 'workItemId',
                                  name: '流程环节实例id',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', '$state.workItemId$'],
                                    code: '',
                                  },
                                  _codePath: ['body', 'workItemId'],
                                  _idpath: ['3621852', '08224994'],
                                },
                                {
                                  attrId: '267257',
                                  code: 'meetingFlag',
                                  name: '是否会签',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: ['customize'], code: 'N' },
                                  _codePath: ['body', 'meetingFlag'],
                                  _idpath: ['3621852', '267257'],
                                },
                                {
                                  attrId: '7902673',
                                  code: 'tacheCode',
                                  name: '环节编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', '$state.tacheCode$'],
                                    code: '',
                                  },
                                  _codePath: ['body', 'tacheCode'],
                                  _idpath: ['3621852', '7902673'],
                                },
                              ],
                              _codePath: ['body'],
                              _idpath: ['3621852'],
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '8231372',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '977921',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '239828',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '199262',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '261807',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '009955',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '881268',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '548601',
                                  code: 'pages',
                                  name: 'pages',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '636447',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '0654394',
                                      code: 'userName',
                                      name: 'userName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '70561',
                                      code: 'userId',
                                      name: 'userId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '526672',
                                      code: 'userCode',
                                      name: 'userCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '2509664',
                                      code: 'userText',
                                      name: 'userText',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '557295',
                                      code: 'orgName',
                                      name: 'orgName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '4060293',
                                      code: 'orgCode',
                                      name: 'orgCode',
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
                        line_number: 9,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 167050915248296540,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '6567236',
                              loading: false,
                            },
                            line_number: 10,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 167050915248223330,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '35619',
                              loading: false,
                            },
                            line_number: 11,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'sysSetVisible',
            dataId: 168862907621270400,
            options: {
              compId: ['Form_2310769_121'],
              compName: 'page',
              id: '561511',
              pageJsonId: '2310769',
              visible: 'true',
              compid: ['Form_2310769_121'],
            },
            line_number: 12,
          },
        ],
        callback2: [
          {
            type: 'sysSetVisible',
            dataId: 168862908926757120,
            options: {
              compId: ['Form_2310769_121'],
              compName: 'page',
              id: '815',
              pageJsonId: '2310769',
              visible: 'true',
              compid: ['Form_2310769_121'],
            },
            line_number: 13,
          },
        ],
      },
    ];
    eventDataapiRequest271.params = [] || [];
    CMDGenerator(eventDataapiRequest271, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_2310769__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_2310769_1',
          uid: 'View_2310769_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
          padding: 0,
          minHeight: '300px',
        }}
        ref={(r: any) => (refs['View_2310769_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_883261',
            uid: 'View_883261',
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
            overflowY: 'visible',
            height: '100%',
          }}
          ref={(r: any) => (refs['View_883261'] = r)}
          {...injectData}
        >
          <Card
            name={'查询面板'}
            title={'查询条件'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            cardIconType={'middle'}
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
              id: 'Card_2310769_12',
              uid: 'Card_2310769_12',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              width: '300px',
              padding: '12px 12px 12px 12px',
              height: '350px',
            }}
            ref={(r: any) => (refs['Card_2310769_12'] = r)}
            {...injectData}
          >
            <Form
              name={'查询表单'}
              header={'标题'}
              colSpan={24}
              colSpace={16}
              rowSpace={16}
              labelCol={24}
              wrapperCol={24}
              layout={'vertical'}
              genRuleType={'key'}
              formType={'query'}
              relationDataSource={''}
              fieldName={'show'}
              $$componentItem={{
                id: 'Form_2310769_121',
                uid: 'Form_2310769_121',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ padding: '16px 16px 16px 16px' }}
              ref={(r: any) => (refs['Form_2310769_121'] = r)}
              {...injectData}
            >
              <Tree
                name={'组织树'}
                defaultExpandAll={true}
                showLine={true}
                selectable={true}
                isAsync={false}
                treeData={[
                  {
                    title: '第一列',
                    key: 'column1',
                    selectable: true,
                    value: 'column1',
                    label: '第一列',
                    $$isParent: true,
                    children: [
                      {
                        title: '第二列',
                        key: 'column2',
                        value: 'column2',
                        selectable: true,
                        label: '第二列',
                      },
                    ],
                  },
                ]}
                showLineIcon={false}
                labelCol={24}
                wrapperCol={24}
                treeColumns={{
                  key: 'orgId',
                  title: 'orgName',
                  children: 'children',
                  selectable: 'isCheck',
                  selectedService: {
                    busiApiId: '876407465902501888',
                    busiApiNbr: 'fetchUserOrgTree',
                    busiApiName: '查询用户机构树信息-tzp',
                    busiObjId: '876407465902501888',
                    apiParam:
                      '[{"apiId":876407465902501888,"apiParamId":876407465957027840,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222144,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222144,"serviceObjectPath":"876407465961222144","statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222144,"paramType":"1000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222145,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222146,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222146,"serviceObjectPath":"876407465961222146","statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222146,"paramType":"2000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222147,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222148,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222148,"serviceObjectPath":"876407465961222148","statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222148,"paramType":"3000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222149,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点","rootServiceObjectId":876407465961222150,"serviceObject":[],"serviceObjectAttrs":[{"attrId":4340,"attrSpec":{"attrId":4340,"attrName":"flowCode","attrNbr":"flowCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1665988038198,"createStaff":50171,"exampleValue":"CHANNEL_CITY_FLOW","mustFlag":"F","serviceObjAttrId":899181763904638976,"serviceObjectId":876407465961222150,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},{"attrId":873874531156643841,"attrSpec":{"attrId":873874531156643841,"attrName":"tacheCode","attrNbr":"tacheCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1665988038198,"createStaff":50171,"exampleValue":"CITY_BRANCH_LEADER","mustFlag":"F","serviceObjAttrId":899181763908833280,"serviceObjectId":876407465961222150,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":876407465961222150,"serviceObjectPath":"876407465961222150","statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222150,"paramType":"4000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222151,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":876407465961222152,"serviceObject":[{"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"isList":"T","level":2,"parServiceObjectId":876407465961222152,"paramType":"5000","rootServiceObjectId":876407465961222152,"serviceObject":[],"serviceObjectAttrs":[{"attrId":1516,"attrSpec":{"attrId":1516,"attrName":"orgId","attrNbr":"orgId","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"1","mustFlag":"F","serviceObjAttrId":876452546446012416,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},{"attrId":1512,"attrSpec":{"attrId":1512,"attrName":"orgName","attrNbr":"orgName","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"福建省公司","mustFlag":"F","serviceObjAttrId":876452546450206720,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546450206722,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1665992295008,"createStaff":50171,"defaultValue":"","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"","mustFlag":"F","remark":"新增节点","serviceObjAttrId":899199619006701568,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":876452546202742784,"serviceObjectPath":"876407465961222152,876452546202742784","statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":842306878819315712,"attrSpec":{"attrId":842306878819315712,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":876452546508926976,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},{"attrId":842306878819315714,"attrSpec":{"attrId":842306878819315714,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"SUCCESS","mustFlag":"F","serviceObjAttrId":876452546508926977,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546508926978,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":876407465961222152,"serviceObjectPath":"876407465961222152","statusCd":"1000","statusDate":1665992295008,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222152,"paramType":"5000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"}]',
                    request: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                        },
                        { code: 'query', name: 'URL 参数', attrType: 'object' },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'flowCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'tacheCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                          ],
                        },
                      ],
                    },
                    response: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'resultCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultMsg',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultMsgCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultData',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'orgId',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'orgName',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'children',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isCheck',
                              name: '新增节点',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                              defaultValue: '',
                            },
                          ],
                        },
                      ],
                    },
                    productId: '11052',
                    api: '/app/rhin/gateway/callRhinEngine',
                    _source: 'rhin',
                    _serviceId: '876407465902501888',
                    _serviceTitle: '查询用户机构树信息-tzp: fetchUserOrgTree',
                    _capabilityCode: 'fetchUserOrgTree',
                    _apiCode: 'fetchUserOrgTree',
                    isServiceParam: true,
                    requestType: 'object',
                    responseType: 'object',
                  },
                }}
                treeService={{
                  appId: '871672424566726656',
                  _serviceId: '876407465902501888',
                  _source: 'rhin',
                  api: '/app/rhin/gateway/callRhinEngine',
                  key: 'orgId',
                  title: 'orgName',
                  children: 'children',
                  selectable: 'isCheck',
                }}
                asyncColumns={{ selectedService: null }}
                className={'huiqianchulirenxuanze'}
                $$componentItem={{
                  id: 'Tree_443137',
                  uid: 'Tree_443137',
                  type: 'Tree',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                schema={{
                  compType: 3,
                  props: {
                    formItemIndex: 0,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                onSelect={(selectedKeys: any, { node }: any) => {
                  const eventDatasetLoading163: any = [
                    {
                      type: 'setLoading',
                      dataId: 166366169850192030,
                      options: {
                        compId: 'Table_2310769_112',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Table',
                        id: '271905',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading163.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetLoading163,
                    { selectedKeys, node },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  ); // console 166057071693987300
                  console.log(selectedKeys[0]);
                  const eventDataclearValue124: any = [
                    {
                      type: 'clearValue',
                      dataId: 166185791224698000,
                      options: {
                        compId: 'Input_262276',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '5945497',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDataclearValue124.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataclearValue124,
                    { selectedKeys, node },
                    'clearValue',
                    {
                      id: 'clearValue',
                      name: 'clearValue',
                      type: 'clearValue',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse452: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '488725',
                          options: {
                            context: '$selectedKeys[0]$',
                            operate: 'empty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166366127973360900,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166366134172336770,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166366137008674940,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166366137008646100,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: ['value'],
                              options: {
                                compId: 'Text_895823',
                                compLib: 'custom',
                                pageJsonId: '2310769',
                                compName: 'Text',
                                id: '351613',
                                value: '$node.props.data.data.orgName$',
                              },
                              actionObjId: 'Text_895823',
                              actionObjName: 'Text',
                              value: 'setCompContentValue',
                              compLib: 'custom',
                              elseIfs: [],
                              line_number: 6,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'setCompContentValue',
                              dataId: 166366137008674940,
                              options: {
                                compId: 'Text_895823',
                                compLib: 'custom',
                                pageJsonId: '2310769',
                                compName: 'Text',
                                id: '351613',
                                value: '$node.props.data.data.orgName$',
                              },
                              line_number: 6,
                              callback1: [],
                            },
                          ],
                        },
                      ],
                      line_number: 4,
                      callback1: [
                        {
                          type: 'setCompContentValue',
                          dataId: 166366154430160100,
                          options: {
                            compId: 'Text_895823',
                            compLib: 'custom',
                            pageJsonId: '2310769',
                            compName: 'Text',
                            id: '2029803',
                            value: '默认查询左侧组织下的用户',
                          },
                          line_number: 5,
                          callback1: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse452.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse452,
                    { selectedKeys, node },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatareloadDataSource83: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166366152116655100,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '0052258',
                        pageJsonId: '2310769',
                        dataSourceId: 166057056526189100,
                        dataSourceName: 'staffList',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '873162',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                            _codePath: ['header'],
                            _idpath: ['873162'],
                          },
                          {
                            attrId: '6952216',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                            _codePath: ['path'],
                            _idpath: ['6952216'],
                          },
                          {
                            attrId: '321962',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                            _codePath: ['query'],
                            _idpath: ['321962'],
                          },
                          {
                            attrId: '3621852',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '882351',
                                code: 'orgId',
                                name: 'orgId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.orgId',
                                value: {
                                  type: ['context', '$selectedKeys[0]$'],
                                  code: '',
                                },
                                _codePath: ['body', 'orgId'],
                                _idpath: ['3621852', '882351'],
                              },
                              {
                                attrId: '716607',
                                code: 'keyLike',
                                name: 'keyLike',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                _codePath: ['body', 'keyLike'],
                                _idpath: ['3621852', '716607'],
                              },
                              {
                                attrId: '8683064',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                value: { type: ['customize'], code: '10' },
                                _codePath: ['body', 'pageSize'],
                                _idpath: ['3621852', '8683064'],
                              },
                              {
                                attrId: '879186',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                value: { type: ['customize'], code: '1' },
                                _codePath: ['body', 'pageNum'],
                                _idpath: ['3621852', '879186'],
                              },
                              {
                                attrId: '2052625',
                                code: 'flowCode',
                                name: '流程编码',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: {
                                  type: ['context', '$state.flowCode$'],
                                  code: '',
                                },
                                _codePath: ['body', 'flowCode'],
                                _idpath: ['3621852', '2052625'],
                              },
                              {
                                attrId: '7902673',
                                code: 'tacheCode',
                                name: '环节编码',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: {
                                  type: ['context', '$state.tacheCode$'],
                                  code: '',
                                },
                                _codePath: ['body', 'tacheCode'],
                                _idpath: ['3621852', '7902673'],
                              },
                              {
                                attrId: '267257',
                                code: 'meetingFlag',
                                name: '是否会签',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: { type: ['customize'], code: 'N' },
                                _codePath: ['body', 'meetingFlag'],
                                _idpath: ['3621852', '267257'],
                              },
                              {
                                attrId: '08224994',
                                code: 'workItemId',
                                name: '流程环节实例id',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                value: {
                                  type: ['context', '$state.workItemId$'],
                                  code: '',
                                },
                                _codePath: ['body', 'workItemId'],
                                _idpath: ['3621852', '08224994'],
                              },
                            ],
                            key: 'body',
                            _codePath: ['body'],
                            _idpath: ['3621852'],
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '8231372',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '977921',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '239828',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '199262',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '378013405',
                                code: 'userName',
                                name: '用户名',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1145924',
                                code: 'userId',
                                name: '用户id',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                            ],
                          },
                        ],
                        otherObjectArrayOptions: {},
                      },
                      line_number: 7,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166366173434987200,
                          options: {
                            compId: 'Table_2310769_112',
                            compLib: 'comm',
                            pageJsonId: '2310769',
                            compName: 'Table',
                            id: '418513',
                            loading: false,
                          },
                          line_number: 8,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 166366174010956580,
                          options: {
                            compId: 'Table_2310769_112',
                            compLib: 'comm',
                            pageJsonId: '2310769',
                            compName: 'Table',
                            id: '244418',
                            loading: false,
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDatareloadDataSource83.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatareloadDataSource83,
                    { selectedKeys, node },
                    'reloadDataSource',
                    {
                      id: 'reloadDataSource',
                      name: 'reloadDataSource',
                      type: 'reloadDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Tree_443137'] = r)}
                {...injectData}
              />
            </Form>
          </Card>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_2310769_11',
              uid: 'View_2310769_11',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 11,
              padding: '12px 12px 12px 12px',
              width: '600px',
            }}
            ref={(r: any) => (refs['View_2310769_11'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'默认查询左侧组织下的用户'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_895823',
                uid: 'Text_895823',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(208, 2, 27, 1)',
                fontWeight: '',
              }}
              ref={(r: any) => (refs['Text_895823'] = r)}
              {...injectData}
            />
            <Input
              name={'用户条件'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'查询'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入用户查询信息'}
              fieldName={'keyLike'}
              postfixStyle={'3'}
              allowClear={true}
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
                id: 'Input_262276',
                uid: 'Input_262276',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              onIconClick={() => {
                const eventDatasetLoading164: any = [
                  {
                    type: 'setLoading',
                    dataId: 166366181887609180,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '313829',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading164.params = [] || [];
                CMDGenerator(eventDatasetLoading164, {}, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDataclearTreeSelectedKey: any = [
                  {
                    type: 'clearTreeSelectedKey',
                    dataId: 170298584993596860,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '075452',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearTreeSelectedKey.params = [] || [];
                CMDGenerator(
                  eventDataclearTreeSelectedKey,
                  {},
                  'clearTreeSelectedKey',
                  {
                    id: 'clearTreeSelectedKey',
                    name: 'clearTreeSelectedKey',
                    type: 'clearTreeSelectedKey',
                    platform: 'pc',
                  },
                );
                const eventDatagetTreeSelectedKey: any = [
                  {
                    type: 'getTreeSelectedKey',
                    dataId: 166185779197514560,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '290214',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 166185780129423900,
                        options: {
                          compId: 'Input_262276',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Input',
                          id: '4195108',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 166599455670922880,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '2602997',
                              pageJsonId: '2310769',
                              dataSourceId: 166057056526189100,
                              dataSourceName: 'staffList',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '873162',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['header'],
                                  _idpath: ['873162'],
                                },
                                {
                                  attrId: '6952216',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['path'],
                                  _idpath: ['6952216'],
                                },
                                {
                                  attrId: '321962',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['query'],
                                  _idpath: ['321962'],
                                },
                                {
                                  attrId: '3621852',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '716607',
                                      code: 'keyLike',
                                      name: 'keyLike',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$value_4195108$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'keyLike'],
                                      _idpath: ['3621852', '716607'],
                                    },
                                    {
                                      attrId: '882351',
                                      code: 'orgId',
                                      name: 'orgId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: { type: [], code: '' },
                                      _codePath: ['body', 'orgId'],
                                      _idpath: ['3621852', '882351'],
                                    },
                                    {
                                      attrId: '879186',
                                      code: 'pageNum',
                                      name: 'pageNum',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: { type: ['customize'], code: '1' },
                                      _codePath: ['body', 'pageNum'],
                                      _idpath: ['3621852', '879186'],
                                    },
                                    {
                                      attrId: '8683064',
                                      code: 'pageSize',
                                      name: 'pageSize',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: {
                                        type: ['customize'],
                                        code: '10',
                                      },
                                      _codePath: ['body', 'pageSize'],
                                      _idpath: ['3621852', '8683064'],
                                    },
                                    {
                                      attrId: '2052625',
                                      code: 'flowCode',
                                      name: '流程编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.flowCode$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'flowCode'],
                                      _idpath: ['3621852', '2052625'],
                                    },
                                    {
                                      attrId: '08224994',
                                      code: 'workItemId',
                                      name: '流程环节实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.workItemId$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'workItemId'],
                                      _idpath: ['3621852', '08224994'],
                                    },
                                    {
                                      attrId: '267257',
                                      code: 'meetingFlag',
                                      name: '是否会签',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: { type: ['customize'], code: 'N' },
                                      _codePath: ['body', 'meetingFlag'],
                                      _idpath: ['3621852', '267257'],
                                    },
                                    {
                                      attrId: '7902673',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.tacheCode$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'tacheCode'],
                                      _idpath: ['3621852', '7902673'],
                                    },
                                  ],
                                  _codePath: ['body'],
                                  _idpath: ['3621852'],
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '8231372',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '977921',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '239828',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '199262',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '261807',
                                      code: 'total',
                                      name: 'total',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '009955',
                                      code: 'size',
                                      name: 'size',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '881268',
                                      code: 'current',
                                      name: 'current',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '548601',
                                      code: 'pages',
                                      name: 'pages',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '636447',
                                      code: 'records',
                                      name: 'records',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '0654394',
                                          code: 'userName',
                                          name: 'userName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '70561',
                                          code: 'userId',
                                          name: 'userId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '526672',
                                          code: 'userCode',
                                          name: 'userCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '2509664',
                                          code: 'userText',
                                          name: 'userText',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '557295',
                                          code: 'orgName',
                                          name: 'orgName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '4060293',
                                          code: 'orgCode',
                                          name: 'orgCode',
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
                            line_number: 5,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 166599455670912830,
                                options: {
                                  compId: 'Table_2310769_112',
                                  compLib: 'comm',
                                  pageJsonId: '2310769',
                                  compName: 'Table',
                                  id: '251762',
                                  loading: false,
                                },
                                line_number: 6,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 166599455670986270,
                                options: {
                                  compId: 'Table_2310769_112',
                                  compLib: 'comm',
                                  pageJsonId: '2310769',
                                  compName: 'Table',
                                  id: '326061',
                                  loading: false,
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetTreeSelectedKey.params = [] || [];
                CMDGenerator(
                  eventDatagetTreeSelectedKey,
                  {},
                  'getTreeSelectedKey',
                  {
                    id: 'getTreeSelectedKey',
                    name: 'getTreeSelectedKey',
                    type: 'getTreeSelectedKey',
                    platform: 'pc',
                  },
                );
              }}
              onPressEnter={(e: any) => {
                const eventDatasetLoading165: any = [
                  {
                    type: 'setLoading',
                    dataId: 167004619418447230,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '812963',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading165.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatasetLoading165, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDataclearTreeSelectedKey1: any = [
                  {
                    type: 'clearTreeSelectedKey',
                    dataId: 170298608673587300,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '189789',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearTreeSelectedKey1.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataclearTreeSelectedKey1,
                  { e },
                  'clearTreeSelectedKey',
                  {
                    id: 'clearTreeSelectedKey',
                    name: 'clearTreeSelectedKey',
                    type: 'clearTreeSelectedKey',
                    platform: 'pc',
                  },
                );
                const eventDatagetTreeSelectedKey1: any = [
                  {
                    type: 'getTreeSelectedKey',
                    dataId: 167004619997625600,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '578228',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 167004619997681800,
                        options: {
                          compId: 'Input_262276',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Input',
                          id: '087165586',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 167004619997612670,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '4463887',
                              pageJsonId: '2310769',
                              dataSourceId: 166057056526189100,
                              dataSourceName: 'staffList',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '873162',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['header'],
                                  _idpath: ['873162'],
                                },
                                {
                                  attrId: '6952216',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['path'],
                                  _idpath: ['6952216'],
                                },
                                {
                                  attrId: '321962',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['query'],
                                  _idpath: ['321962'],
                                },
                                {
                                  attrId: '3621852',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '716607',
                                      code: 'keyLike',
                                      name: 'keyLike',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$value_087165586$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'keyLike'],
                                      _idpath: ['3621852', '716607'],
                                    },
                                    {
                                      attrId: '882351',
                                      code: 'orgId',
                                      name: 'orgId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: { type: [], code: '' },
                                      _codePath: ['body', 'orgId'],
                                      _idpath: ['3621852', '882351'],
                                    },
                                    {
                                      attrId: '879186',
                                      code: 'pageNum',
                                      name: 'pageNum',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: { type: ['customize'], code: '1' },
                                      _codePath: ['body', 'pageNum'],
                                      _idpath: ['3621852', '879186'],
                                    },
                                    {
                                      attrId: '8683064',
                                      code: 'pageSize',
                                      name: 'pageSize',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: {
                                        type: ['customize'],
                                        code: '10',
                                      },
                                      _codePath: ['body', 'pageSize'],
                                      _idpath: ['3621852', '8683064'],
                                    },
                                    {
                                      attrId: '2052625',
                                      code: 'flowCode',
                                      name: '流程编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.flowCode$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'flowCode'],
                                      _idpath: ['3621852', '2052625'],
                                    },
                                    {
                                      attrId: '08224994',
                                      code: 'workItemId',
                                      name: '流程环节实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.workItemId$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'workItemId'],
                                      _idpath: ['3621852', '08224994'],
                                    },
                                    {
                                      attrId: '267257',
                                      code: 'meetingFlag',
                                      name: '是否会签',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: { type: ['customize'], code: 'N' },
                                      _codePath: ['body', 'meetingFlag'],
                                      _idpath: ['3621852', '267257'],
                                    },
                                    {
                                      attrId: '7902673',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.tacheCode$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'tacheCode'],
                                      _idpath: ['3621852', '7902673'],
                                    },
                                  ],
                                  _codePath: ['body'],
                                  _idpath: ['3621852'],
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '8231372',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '977921',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '239828',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '199262',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '261807',
                                      code: 'total',
                                      name: 'total',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '009955',
                                      code: 'size',
                                      name: 'size',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '881268',
                                      code: 'current',
                                      name: 'current',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '548601',
                                      code: 'pages',
                                      name: 'pages',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '636447',
                                      code: 'records',
                                      name: 'records',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '0654394',
                                          code: 'userName',
                                          name: 'userName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '70561',
                                          code: 'userId',
                                          name: 'userId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '526672',
                                          code: 'userCode',
                                          name: 'userCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '2509664',
                                          code: 'userText',
                                          name: 'userText',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '557295',
                                          code: 'orgName',
                                          name: 'orgName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '4060293',
                                          code: 'orgCode',
                                          name: 'orgCode',
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
                            line_number: 5,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 167004619997636380,
                                options: {
                                  compId: 'Table_2310769_112',
                                  compLib: 'comm',
                                  pageJsonId: '2310769',
                                  compName: 'Table',
                                  id: '377917',
                                  loading: false,
                                },
                                line_number: 6,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 167004619997632200,
                                options: {
                                  compId: 'Table_2310769_112',
                                  compLib: 'comm',
                                  pageJsonId: '2310769',
                                  compName: 'Table',
                                  id: '518941',
                                  loading: false,
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetTreeSelectedKey1.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatagetTreeSelectedKey1,
                  { e },
                  'getTreeSelectedKey',
                  {
                    id: 'getTreeSelectedKey',
                    name: 'getTreeSelectedKey',
                    type: 'getTreeSelectedKey',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_262276'] = r)}
              {...injectData}
            />
            <Table
              name={'total'}
              columns={[
                {
                  title: '用户名',
                  key: 'userName',
                  dataIndex: 'userName',
                  className: '',
                  id: '996483',
                  width: 150,
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
                  title: '用户编码',
                  key: 'userCode',
                  dataIndex: 'userCode',
                  className: 'divider',
                  id: '414664',
                  width: 150,
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
                  title: '部门',
                  key: 'orgName',
                  dataIndex: 'orgName',
                  className: 'divider',
                  id: '356793',
                  width: 300,
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
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
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
              rowKey={'orgUserRelId'}
              pageSize={data?.staffList?.resultData?.size}
              current={data?.staffList?.resultData?.current}
              total={data?.staffList?.resultData?.total}
              dataSource={data?.staffList?.resultData?.records}
              fieldName={'data.staffList.resultData.total'}
              dataSourceFromDataSourceConfig={
                'data.staffList.resultData.records'
              }
              $$componentItem={{
                id: 'Table_2310769_112_40579678',
                uid: 'Table_2310769_112_40579678',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '10px 0px 0px 0px' }}
              onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
                const eventDatagetTableSelected54: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 166027340676290750,
                    options: {
                      compId: 'Table_2310769_112_40579678',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '273329',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166027451911338560,
                        options: {
                          compId: 'Input_3184618',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Input',
                          id: '674378',
                          value: '$selectedRows[0]$',
                        },
                        line_number: 2,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected54.params =
                  [
                    {
                      title: '表格选中行id(单选)',
                      name: 'selectedRowKeys',
                      value: '$selectedRowKeys[0]$',
                    },
                    {
                      title: '表格选中行id(多选)',
                      name: 'selectedRowKeys',
                      value: '$selectedRowKeys$',
                      attrType: 'array',
                    },
                    {
                      title: '表格选中行数据(单选)',
                      name: 'selectedRows',
                      value: '$selectedRows[0]$',
                      attrType: 'object',
                    },
                    {
                      title: '表格选中行数据(多选)',
                      name: 'selectedRows',
                      value: '$selectedRows$',
                      attrType: 'objectArray',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatagetTableSelected54,
                  { selectedRowKeys, selectedRows },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
              }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatasetLoading166: any = [
                  {
                    type: 'setLoading',
                    dataId: 166366187257393150,
                    options: {
                      compId: 'Table_2310769_112_40579678',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '336772',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading166.params =
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
                  eventDatasetLoading166,
                  { page, pageSize },
                  'setLoading',
                  {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  },
                );
                const eventDatagetTreeSelectedKey2: any = [
                  {
                    type: 'getTreeSelectedKey',
                    dataId: 166185330121298100,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '8050697',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 166185794207993380,
                        options: {
                          compId: 'Input_262276',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Input',
                          id: '039273',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 166185794725525950,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'page',
                              id: '4591678',
                              pageJsonId: '2310769',
                              dataSourceId: 166057056526189100,
                              dataSourceName: 'staffList',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '873162',
                                  code: 'header',
                                  name: '请求头参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['header'],
                                  _idpath: ['873162'],
                                },
                                {
                                  attrId: '6952216',
                                  code: 'path',
                                  name: '请求路径参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['path'],
                                  _idpath: ['6952216'],
                                },
                                {
                                  attrId: '321962',
                                  code: 'query',
                                  name: 'URL 参数',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  _codePath: ['query'],
                                  _idpath: ['321962'],
                                },
                                {
                                  attrId: '3621852',
                                  code: 'body',
                                  name: '请求体',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '716607',
                                      code: 'keyLike',
                                      name: 'keyLike',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$value_039273$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'keyLike'],
                                      _idpath: ['3621852', '716607'],
                                    },
                                    {
                                      attrId: '882351',
                                      code: 'orgId',
                                      name: 'orgId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: [
                                          'context',
                                          '$selectedKeys_8050697[0]$',
                                        ],
                                        code: '',
                                      },
                                      _codePath: ['body', 'orgId'],
                                      _idpath: ['3621852', '882351'],
                                    },
                                    {
                                      attrId: '879186',
                                      code: 'pageNum',
                                      name: 'pageNum',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: {
                                        type: ['context', '$page$'],
                                        hideAttr: true,
                                        code: '',
                                      },
                                      _codePath: ['body', 'pageNum'],
                                      _idpath: ['3621852', '879186'],
                                    },
                                    {
                                      attrId: '8683064',
                                      code: 'pageSize',
                                      name: 'pageSize',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                      value: {
                                        type: ['context', '$pageSize$'],
                                        hideAttr: true,
                                        code: '',
                                      },
                                      _codePath: ['body', 'pageSize'],
                                      _idpath: ['3621852', '8683064'],
                                    },
                                    {
                                      attrId: '2052625',
                                      code: 'flowCode',
                                      name: '流程编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.flowCode$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'flowCode'],
                                      _idpath: ['3621852', '2052625'],
                                    },
                                    {
                                      attrId: '08224994',
                                      code: 'workItemId',
                                      name: '流程环节实例id',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.workItemId$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'workItemId'],
                                      _idpath: ['3621852', '08224994'],
                                    },
                                    {
                                      attrId: '267257',
                                      code: 'meetingFlag',
                                      name: '是否会签',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: { type: ['customize'], code: 'N' },
                                      _codePath: ['body', 'meetingFlag'],
                                      _idpath: ['3621852', '267257'],
                                    },
                                    {
                                      attrId: '7902673',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                      value: {
                                        type: ['context', '$state.tacheCode$'],
                                        code: '',
                                      },
                                      _codePath: ['body', 'tacheCode'],
                                      _idpath: ['3621852', '7902673'],
                                    },
                                  ],
                                  _codePath: ['body'],
                                  _idpath: ['3621852'],
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '8231372',
                                  code: 'resultCode',
                                  name: 'resultCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '977921',
                                  code: 'resultMsg',
                                  name: 'resultMsg',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '239828',
                                  code: 'resultMsgCode',
                                  name: 'resultMsgCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '199262',
                                  code: 'resultData',
                                  name: 'resultData',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  children: [
                                    {
                                      attrId: '261807',
                                      code: 'total',
                                      name: 'total',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '009955',
                                      code: 'size',
                                      name: 'size',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '881268',
                                      code: 'current',
                                      name: 'current',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '548601',
                                      code: 'pages',
                                      name: 'pages',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'long',
                                    },
                                    {
                                      attrId: '636447',
                                      code: 'records',
                                      name: 'records',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'objectArray',
                                      children: [
                                        {
                                          attrId: '0654394',
                                          code: 'userName',
                                          name: 'userName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '70561',
                                          code: 'userId',
                                          name: 'userId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '526672',
                                          code: 'userCode',
                                          name: 'userCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '2509664',
                                          code: 'userText',
                                          name: 'userText',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '557295',
                                          code: 'orgName',
                                          name: 'orgName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '4060293',
                                          code: 'orgCode',
                                          name: 'orgCode',
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
                            line_number: 4,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 166366188066932260,
                                options: {
                                  compId: 'Table_2310769_112_40579678',
                                  compLib: 'comm',
                                  pageJsonId: '2310769',
                                  compName: 'Table',
                                  id: '648317',
                                  loading: false,
                                },
                                line_number: 5,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 166366188222904540,
                                options: {
                                  compId: 'Table_2310769_112_40579678',
                                  compLib: 'comm',
                                  pageJsonId: '2310769',
                                  compName: 'Table',
                                  id: '263261',
                                  loading: false,
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetTreeSelectedKey2.params =
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
                  eventDatagetTreeSelectedKey2,
                  { page, pageSize },
                  'getTreeSelectedKey',
                  {
                    id: 'getTreeSelectedKey',
                    name: 'getTreeSelectedKey',
                    type: 'getTreeSelectedKey',
                    platform: 'pc',
                  },
                );
              }}
              onRowDoubleClick={(rowId: any, row: any, index: any) => {
                const eventDatagetCurrentFormValues23: any = [
                  {
                    type: 'getCurrentFormValues',
                    dataId: 167020939258927970,
                    options: {
                      compId: 'Form_486003',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Form',
                      id: '139623',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 167020939258950000,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '966699',
                          pageJsonId: '2310769',
                          params: '$Form_486003$',
                        },
                        line_number: 2,
                      },
                      {
                        type: 'closeModal',
                        dataId: 167020939258936800,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '502008',
                          pageJsonId: '2310769',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDatagetCurrentFormValues23.params =
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
                  eventDatagetCurrentFormValues23,
                  { rowId, row, index },
                  'getCurrentFormValues',
                  {
                    id: 'getCurrentFormValues',
                    name: 'getCurrentFormValues',
                    type: 'getCurrentFormValues',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Table_2310769_112_40579678'] = r)}
              {...injectData}
            />
            <Form
              name={'表单'}
              colSpan={24}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_486003'}
              $$componentItem={{
                id: 'Form_486003',
                uid: 'Form_486003',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_486003'] = r)}
              {...injectData}
            >
              <Input
                name={'用户id隐藏框'}
                size={'default'}
                selfSpan={24}
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
                fieldName={'staffSelect'}
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
                  id: 'Input_3184618',
                  uid: 'Input_3184618',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_3184618'] = r)}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditSelectoneuser$$Modal, {
  pageId: '881887068344979456',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    flowCode: '',
    tacheCode: '',
    workItemId: '',
  },
});
