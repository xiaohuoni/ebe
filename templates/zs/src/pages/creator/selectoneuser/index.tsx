// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Tree,
  Text,
  Input,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '900338214677487616';
const CreatorSelectoneuser$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetCurrentFormValues16: any = [
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
    eventDatagetCurrentFormValues16.params = [] || [];
    CMDGenerator(eventDatagetCurrentFormValues16, {}, 'getCurrentFormValues', {
      id: 'getCurrentFormValues',
      name: 'getCurrentFormValues',
      type: 'getCurrentFormValues',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal91: any = [
      {
        type: 'closeModal',
        dataId: '285762_1',
        options: { compId: 'page', compName: 'page', id: '059026' },
        line_number: 1,
      },
    ];
    eventDatacloseModal91.params = [] || [];
    CMDGenerator(eventDatacloseModal91, {}, 'closeModal', {
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
    const eventDataapiRequest585: any = [
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
              parents: [],
              id: 'header',
              dataKey: '122621_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '122621_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '122621_query',
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
                  parents: ['body'],
                  id: 'body.flowCode',
                  dataKey: '122621_body.flowCode',
                  value: { type: ['context', '$state.flowCode$'], code: '' },
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
                  parents: ['body'],
                  id: 'body.workItemId',
                  dataKey: '122621_body.workItemId',
                  value: { type: ['context', '$state.workItemId$'], code: '' },
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
                  parents: ['body'],
                  id: 'body.meetingFlag',
                  dataKey: '122621_body.meetingFlag',
                  value: { type: ['customize'], code: 'FQR' },
                },
                {
                  code: 'tacheCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.tacheCode',
                  compType: 'Input',
                  name: 'tacheCode',
                  parents: ['body'],
                  id: 'body.tacheCode',
                  dataKey: '122621_body.tacheCode',
                  value: { type: ['context', '$state.tacheCode$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '122621_body',
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
                dataId: 167051106354588480,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'setTreeSelectedKey',
                    dataId: 167051106354586780,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '2889597',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'setExpandedKey',
                    dataId: 167051106354560860,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '976311',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 5,
                  },
                ],
              },
              {
                type: 'setLoading',
                dataId: 167051117636116380,
                options: {
                  compId: 'Table_2310769_112',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Table',
                  id: '164439',
                  loading: true,
                },
                line_number: 6,
              },
              {
                type: 'getTreeSelectedKey',
                dataId: 167051118493603260,
                options: {
                  compId: 'Tree_443137',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Tree',
                  id: '730431',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'getValue',
                    dataId: 167051118493669500,
                    options: {
                      compId: 'Input_262276',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '4243685',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'reloadDataSource',
                        dataId: 167051118493641820,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '059517',
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
                            },
                            {
                              attrId: '6952216',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                            },
                            {
                              attrId: '321962',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
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
                                    type: ['context', '$value_4243685$'],
                                    code: '',
                                  },
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
                                      '$selectedKeys_730431[0]$',
                                    ],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '879186',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '1' },
                                },
                                {
                                  attrId: '8683064',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '10' },
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
                                },
                                {
                                  attrId: '267257',
                                  code: 'meetingFlag',
                                  name: '是否会签',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: ['customize'], code: 'FQR' },
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
                                },
                              ],
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
                            dataId: 167051118493694400,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '384352',
                              loading: false,
                            },
                            line_number: 10,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 167051118493621860,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '831241',
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
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest585.params = [] || [];
    CMDGenerator(eventDataapiRequest585, {}, 'apiRequest', {
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
        className="View_View_2310769_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_2310769_1',
          uid: 'View_2310769_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
          padding: 0,
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_2310769_1')}
        {...injectData}
      >
        <Card
          name={'查询面板'}
          title={'查询条件'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          visible={true}
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
          style={{
            width: '300px',
            padding: '12px 12px 12px 12px',
            height: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_2310769_12')}
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
            $$componentItem={{
              id: 'Form_2310769_121',
              uid: 'Form_2310769_121',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '16px 16px 16px 16px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_2310769_121')}
            {...injectData}
          >
            <Tree
              name={'组织树'}
              visible={true}
              defaultExpandAll={false}
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
                selectedService: {
                  busiApiId: '876407465902501888',
                  busiApiNbr: 'fetchUserOrgTree',
                  busiApiName: '查询用户机构树信息-tzp',
                  busiObjId: '876407465902501888',
                  apiParam:
                    '[{"apiId":876407465902501888,"apiParamId":876407465957027840,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222144,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222144,"serviceObjectPath":"876407465961222144","statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222144,"paramType":"1000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222145,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222146,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222146,"serviceObjectPath":"876407465961222146","statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222146,"paramType":"2000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222147,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222148,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222148,"serviceObjectPath":"876407465961222148","statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222148,"paramType":"3000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222149,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点","rootServiceObjectId":876407465961222150,"serviceObject":[],"serviceObjectAttrs":[{"attrId":4340,"attrSpec":{"attrId":4340,"attrName":"flowCode","attrNbr":"flowCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666014847460,"createStaff":50171,"exampleValue":"CHANNEL_CITY_FLOW","mustFlag":"F","serviceObjAttrId":899294209860407296,"serviceObjectId":876407465961222150,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":873869939408785408,"attrSpec":{"attrId":873869939408785408,"attrName":"workItemId","attrNbr":"workItemId","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666014847460,"createStaff":50171,"defaultValue":"","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"","mustFlag":"F","remark":"流程环节实例id","serviceObjAttrId":899294209864601600,"serviceObjectId":876407465961222150,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":899252656085372929,"attrSpec":{"attrId":899252656085372929,"attrName":"meetingFlag","attrNbr":"meetingFlag","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1666004940284,"createStaff":50171,"defaultValue":"","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"","mustFlag":"F","remark":"是否会签","serviceObjAttrId":899252656085372928,"serviceObjectId":876407465961222150,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":873874531156643841,"attrSpec":{"attrId":873874531156643841,"attrName":"tacheCode","attrNbr":"tacheCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1665988038198,"createStaff":50171,"exampleValue":"CITY_BRANCH_LEADER","mustFlag":"F","serviceObjAttrId":899181763908833280,"serviceObjectId":876407465961222150,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":876407465961222150,"serviceObjectPath":"876407465961222150","statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222150,"paramType":"4000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222151,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":876407465961222152,"serviceObject":[{"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"isList":"T","level":2,"parServiceObjectId":876407465961222152,"paramType":"5000","rootServiceObjectId":876407465961222152,"serviceObject":[],"serviceObjectAttrs":[{"attrId":1516,"attrSpec":{"attrId":1516,"attrName":"orgId","attrNbr":"orgId","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"1","mustFlag":"F","serviceObjAttrId":876452546446012416,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":1512,"attrSpec":{"attrId":1512,"attrName":"orgName","attrNbr":"orgName","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"福建省公司","mustFlag":"F","serviceObjAttrId":876452546450206720,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546450206722,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1665992295008,"createStaff":50171,"defaultValue":"","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"","mustFlag":"F","remark":"新增节点","serviceObjAttrId":899199619006701568,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":876452546202742784,"serviceObjectPath":"876407465961222152,876452546202742784","statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":842306878819315712,"attrSpec":{"attrId":842306878819315712,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":876452546508926976,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":842306878819315714,"attrSpec":{"attrId":842306878819315714,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"SUCCESS","mustFlag":"F","serviceObjAttrId":876452546508926977,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546508926978,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":876407465961222152,"serviceObjectPath":"876407465961222152","statusCd":"1000","statusDate":1666014847460,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222152,"paramType":"5000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"}]',
                  request: {
                    code: 'root',
                    name: '根节点',
                    attrType: 'object',
                    children: [
                      {
                        code: 'header',
                        name: '请求头参数',
                        attrType: 'object',
                        _id: 'header',
                        compType: 'Input',
                        parents: [],
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
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
                            parents: ['body'],
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
                            parents: ['body'],
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
                            parents: ['body'],
                          },
                          {
                            code: 'tacheCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.tacheCode',
                            compType: 'Input',
                            name: 'tacheCode',
                            parents: ['body'],
                          },
                        ],
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
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
                        type: 'string',
                        mustFlag: 'F',
                        _id: 'resultCode',
                        name: 'resultCode',
                      },
                      {
                        code: 'resultMsg',
                        attrType: 'field',
                        type: 'string',
                        mustFlag: 'F',
                        _id: 'resultMsg',
                        name: 'resultMsg',
                      },
                      {
                        code: 'resultMsgCode',
                        attrType: 'field',
                        type: 'string',
                        mustFlag: 'F',
                        _id: 'resultMsgCode',
                        name: 'resultMsgCode',
                      },
                      {
                        code: 'resultData',
                        attrType: 'objectArray',
                        children: [
                          {
                            code: 'orgId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'resultData.orgId',
                            name: 'orgId',
                          },
                          {
                            code: 'orgName',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'resultData.orgName',
                            name: 'orgName',
                          },
                          {
                            code: 'children',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'resultData.children',
                            name: 'children',
                          },
                          {
                            code: 'isCheck',
                            name: '新增节点',
                            attrType: 'field',
                            type: 'boolean',
                            mustFlag: 'F',
                            defaultValue: '',
                            _id: 'resultData.isCheck',
                          },
                        ],
                        _id: 'resultData',
                        name: 'resultData',
                      },
                    ],
                  },
                  isServiceParam: true,
                  productId: '11052',
                  api: '/app/rhin/gateway/callRhinEngine',
                  _source: 'rhin',
                  _serviceId: '876407465902501888',
                  _serviceTitle: '查询用户机构树信息-tzp: fetchUserOrgTree',
                  _capabilityCode: 'fetchUserOrgTree',
                  _apiCode: 'fetchUserOrgTree',
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
              }}
              asyncColumns={{ selectedService: null }}
              className={'huiqianchulirenxuanze'}
              $$componentItem={{
                id: 'Tree_443137',
                uid: 'Tree_443137',
                type: 'Tree',
                ...componentItem,
              }}
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
                const eventDatasetLoading221: any = [
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
                eventDatasetLoading221.params =
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
                  eventDatasetLoading221,
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
                const eventDataclearValue207: any = [
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
                eventDataclearValue207.params =
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
                  eventDataclearValue207,
                  { selectedKeys, node },
                  'clearValue',
                  {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  },
                );
                const eventDataifelse542: any = [
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
                eventDataifelse542.params =
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
                  eventDataifelse542,
                  { selectedKeys, node },
                  'ifelse',
                  {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  },
                );
                const eventDatareloadDataSource129: any = [
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
                        },
                        {
                          attrId: '6952216',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'path',
                        },
                        {
                          attrId: '321962',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          type: 'object',
                          key: 'query',
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
                            },
                            {
                              attrId: '716607',
                              code: 'keyLike',
                              name: 'keyLike',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '8683064',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: { type: ['customize'], code: '10' },
                            },
                            {
                              attrId: '879186',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: { type: ['customize'], code: '1' },
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
                            },
                            {
                              attrId: '267257',
                              code: 'meetingFlag',
                              name: '是否会签',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: { type: ['customize'], code: 'FQR' },
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
                            },
                          ],
                          key: 'body',
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
                eventDatareloadDataSource129.params =
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
                  eventDatareloadDataSource129,
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
              ref={(r: any) => refs.setComponentRef(r, 'Tree_443137')}
              {...injectData}
            />
          </Form>
        </Card>
        <View
          className="View_View_2310769_11"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_2310769_11',
            uid: 'View_2310769_11',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            padding: '12px 12px 12px 12px',
            width: '600px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_2310769_11')}
          {...injectData}
        >
          <Text
            name={'文本'}
            visible={false}
            content={'默认查询左侧组织下的用户'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            disabled={false}
            readOnly={false}
            $$componentItem={{
              id: 'Text_895823',
              uid: 'Text_895823',
              type: 'Text',
              ...componentItem,
            }}
            style={{
              fontSize: '14px',
              lineHeight: '24px',
              color: 'rgba(208, 2, 27, 1)',
              fontWeight: '',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_895823')}
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
              const eventDatasetLoading222: any = [
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
              eventDatasetLoading222.params = [] || [];
              CMDGenerator(eventDatasetLoading222, {}, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDatagetTreeSelectedKey12: any = [
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
                  line_number: 2,
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
                      line_number: 3,
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
                              },
                              {
                                attrId: '6952216',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '321962',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
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
                                        '$selectedKeys_290214[0]$',
                                      ],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '879186',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '1' },
                                  },
                                  {
                                    attrId: '8683064',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '10' },
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
                                  },
                                  {
                                    attrId: '267257',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'FQR' },
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
                                  },
                                ],
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
                              dataId: 166599455670912830,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '251762',
                                loading: false,
                              },
                              line_number: 5,
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
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ];
              eventDatagetTreeSelectedKey12.params = [] || [];
              CMDGenerator(
                eventDatagetTreeSelectedKey12,
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
              const eventDatasetLoading223: any = [
                {
                  type: 'setLoading',
                  dataId: 167004615230405920,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '2564183',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading223.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatasetLoading223, { e }, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDatagetTreeSelectedKey13: any = [
                {
                  type: 'getTreeSelectedKey',
                  dataId: 167004616060928740,
                  options: {
                    compId: 'Tree_443137',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Tree',
                    id: '32751',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getValue',
                      dataId: 167004616060944700,
                      options: {
                        compId: 'Input_262276',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '918856',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 167004616060924930,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '909594',
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
                              },
                              {
                                attrId: '6952216',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '321962',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
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
                                      type: ['context', '$value_918856$'],
                                      code: '',
                                    },
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
                                        '$selectedKeys_32751[0]$',
                                      ],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '879186',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '1' },
                                  },
                                  {
                                    attrId: '8683064',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '10' },
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
                                  },
                                  {
                                    attrId: '267257',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'FQR' },
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
                                  },
                                ],
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
                              dataId: 167004616060957300,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '831627',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 167004616060933470,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '71470936',
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
              eventDatagetTreeSelectedKey13.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(
                eventDatagetTreeSelectedKey13,
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
            ref={(r: any) => refs.setComponentRef(r, 'Input_262276')}
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
            visible={true}
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
            scroll={{ y: 215 }}
            pageSize={data?.staffList?.resultData?.size}
            current={data?.staffList?.resultData?.current}
            total={data?.staffList?.resultData?.total}
            dataSource={data?.staffList?.resultData?.records}
            fieldName={'data.staffList.resultData.total'}
            dataSourceFromDataSourceConfig={'data.staffList.resultData.records'}
            $$componentItem={{
              id: 'Table_2310769_112',
              uid: 'Table_2310769_112',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
              const eventDatagetTableSelected80: any = [
                {
                  type: 'getTableSelected',
                  dataId: 166027340676290750,
                  options: {
                    compId: 'Table_2310769_112',
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
              eventDatagetTableSelected80.params =
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
                eventDatagetTableSelected80,
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
              const eventDatasetLoading224: any = [
                {
                  type: 'setLoading',
                  dataId: 166366187257393150,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '336772',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading224.params =
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
                eventDatasetLoading224,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatagetTreeSelectedKey14: any = [
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
                              },
                              {
                                attrId: '6952216',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '321962',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
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
                                  },
                                  {
                                    attrId: '267257',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'FQR' },
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
                                  },
                                ],
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
                                compId: 'Table_2310769_112',
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
                                compId: 'Table_2310769_112',
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
              eventDatagetTreeSelectedKey14.params =
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
                eventDatagetTreeSelectedKey14,
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
              const eventDatagetCurrentFormValues39: any = [
                {
                  type: 'getCurrentFormValues',
                  dataId: 167020949815985820,
                  options: {
                    compId: 'Form_486003',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Form',
                    id: '698734',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'okCallbackData',
                      dataId: 167020949815914850,
                      options: {
                        compId: 'okCallbackData',
                        compName: 'page',
                        id: '033818',
                        pageJsonId: '2310769',
                        params: '$Form_486003$',
                      },
                      line_number: 2,
                    },
                    {
                      type: 'closeModal',
                      dataId: 167020949815904260,
                      options: {
                        compId: 'closeModal',
                        compName: 'page',
                        id: '834658',
                        pageJsonId: '2310769',
                      },
                      line_number: 3,
                    },
                  ],
                },
              ];
              eventDatagetCurrentFormValues39.params =
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
                eventDatagetCurrentFormValues39,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_2310769_112')}
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
            visible={true}
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
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_486003')}
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
              disabled={false}
              visible={false}
              readOnly={false}
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
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3184618')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreatorSelectoneuser$$Modal, {
  pageId,
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
