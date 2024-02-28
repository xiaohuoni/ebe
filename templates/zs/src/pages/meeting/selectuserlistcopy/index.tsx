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

const pageId = '928476935495102464';
const MeetingSelectuserlistcopy$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetCurrentFormValues17: any = [
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
    eventDatagetCurrentFormValues17.params = [] || [];
    CMDGenerator(eventDatagetCurrentFormValues17, {}, 'getCurrentFormValues', {
      id: 'getCurrentFormValues',
      name: 'getCurrentFormValues',
      type: 'getCurrentFormValues',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal94: any = [
      {
        type: 'closeModal',
        dataId: '285762_1',
        options: { compId: 'page', compName: 'page', id: '059026' },
        line_number: 1,
      },
    ];
    eventDatacloseModal94.params = [] || [];
    CMDGenerator(eventDatacloseModal94, {}, 'closeModal', {
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
    const eventDataapiRequest602: any = [
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
                  value: { type: ['customize'], code: 'Y' },
                },
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
                dataId: 167051098485056450,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'setTreeSelectedKey',
                    dataId: 167051098485087740,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '50131',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'setExpandedKey',
                    dataId: 167051098485065660,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '2332174',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
          },
          {
            type: 'setLoading',
            dataId: 167051114584114270,
            options: {
              compId: 'Table_2310769_112',
              compLib: 'comm',
              pageJsonId: '2310769',
              compName: 'Table',
              id: '440981',
              loading: true,
            },
            line_number: 6,
          },
          {
            type: 'getTreeSelectedKey',
            dataId: 167051115577881400,
            options: {
              compId: 'Tree_443137',
              compLib: 'comm',
              pageJsonId: '2310769',
              compName: 'Tree',
              id: '2330226',
            },
            line_number: 7,
            callback1: [
              {
                type: 'getValue',
                dataId: 167051115577845120,
                options: {
                  compId: 'Input_262276',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Input',
                  id: '700014',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'reloadDataSource',
                    dataId: 167051115577835200,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '334763',
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
                                type: ['context', '$value_700014$'],
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
                                type: ['context', '$selectedKeys_2330226[0]$'],
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
                              attrId: '623196',
                              code: 'flowCode',
                              name: '流程编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '275837',
                              code: 'meetingFlag',
                              name: '是否会签',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: { type: ['customize'], code: 'Y' },
                            },
                            {
                              attrId: '015829',
                              code: 'tacheCode',
                              name: '环节编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
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
                        dataId: 167051115577871650,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '2784914',
                          loading: false,
                        },
                        line_number: 10,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167051115577845540,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '370209',
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
        callback2: [],
      },
    ];
    eventDataapiRequest602.params = [] || [];
    CMDGenerator(eventDataapiRequest602, {}, 'apiRequest', {
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
                  busiApiName: '查询用户机构树信息',
                  busiObjId: '876407465902501888',
                  apiParam:
                    '[{"apiId":876407465902501888,"apiParamId":876407465957027840,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222144,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222144,"serviceObjectPath":"876407465961222144","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222144,"paramType":"1000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222145,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222146,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222146,"serviceObjectPath":"876407465961222146","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222146,"paramType":"2000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222147,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222148,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222148,"serviceObjectPath":"876407465961222148","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222148,"paramType":"3000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222149,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222150,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222150,"serviceObjectPath":"876407465961222150","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222150,"paramType":"4000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222151,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":876407465961222152,"serviceObject":[{"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"isList":"T","level":2,"parServiceObjectId":876407465961222152,"paramType":"5000","rootServiceObjectId":876407465961222152,"serviceObject":[],"serviceObjectAttrs":[{"attrId":1516,"attrSpec":{"attrId":1516,"attrName":"orgId","attrNbr":"orgId","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"1","mustFlag":"F","serviceObjAttrId":876452546446012416,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":1512,"attrSpec":{"attrId":1512,"attrName":"orgName","attrNbr":"orgName","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"福建省公司","mustFlag":"F","serviceObjAttrId":876452546450206720,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546450206722,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":876452546202742784,"serviceObjectPath":"876407465961222152,876452546202742784","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":842306878819315712,"attrSpec":{"attrId":842306878819315712,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":876452546508926976,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":842306878819315714,"attrSpec":{"attrId":842306878819315714,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"SUCCESS","mustFlag":"F","serviceObjAttrId":876452546508926977,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546508926978,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":876407465961222152,"serviceObjectPath":"876407465961222152","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222152,"paramType":"5000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"}]',
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
                      { code: 'body', name: '请求体', attrType: 'object' },
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
                        ],
                      },
                    ],
                  },
                  productId: '11052',
                  api: '/app/rhin/gateway/callRhinEngine',
                  _source: 'rhin',
                  _serviceId: '876407465902501888',
                  _serviceTitle: '查询用户机构树信息: fetchUserOrgTree',
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
              }}
              asyncColumns={{ selectedService: null }}
              checkable={false}
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
                const eventDatasetLoading226: any = [
                  {
                    type: 'setLoading',
                    dataId: 166366204910037800,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '0040435',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading226.params =
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
                  eventDatasetLoading226,
                  { selectedKeys, node },
                  'setLoading',
                  {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  },
                ); // console 166057071693987300
                console.log(node?.props?.data);
                const eventDataifelse545: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '217069',
                        options: {
                          context: '$selectedKeys[0]$',
                          operate: 'empty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166366195796566900,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166366198784546140,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 16636619893428332,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166366198934284930,
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
                              id: '414669',
                              value: '$node.props.data.data.orgName$',
                            },
                            actionObjId: 'Text_895823',
                            actionObjName: 'Text',
                            value: 'setCompContentValue',
                            compLib: 'custom',
                            elseIfs: [],
                            line_number: 5,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        callback: [
                          {
                            type: 'setCompContentValue',
                            dataId: 16636619893428332,
                            options: {
                              compId: 'Text_895823',
                              compLib: 'custom',
                              pageJsonId: '2310769',
                              compName: 'Text',
                              id: '414669',
                              value: '$node.props.data.data.orgName$',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                    line_number: 3,
                    callback1: [
                      {
                        type: 'setCompContentValue',
                        dataId: 166366198630181700,
                        options: {
                          compId: 'Text_895823',
                          compLib: 'custom',
                          pageJsonId: '2310769',
                          compName: 'Text',
                          id: '8577567',
                          value: '默认查询所有组织下的用户',
                        },
                        line_number: 4,
                        callback1: [],
                      },
                    ],
                  },
                ];
                eventDataifelse545.params =
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
                  eventDataifelse545,
                  { selectedKeys, node },
                  'ifelse',
                  {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  },
                );
                const eventDataclearValue209: any = [
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
                    line_number: 6,
                  },
                ];
                eventDataclearValue209.params =
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
                  eventDataclearValue209,
                  { selectedKeys, node },
                  'clearValue',
                  {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  },
                );
                const eventDatareloadDataSource131: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 166057047314173800,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '541624',
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
                              attrId: '623196',
                              code: 'flowCode',
                              name: '流程编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '275837',
                              code: 'meetingFlag',
                              name: '是否会签',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: { type: ['customize'], code: 'Y' },
                            },
                            {
                              attrId: '015829',
                              code: 'tacheCode',
                              name: '环节编码',
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
                        dataId: 166366206023601730,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '903994',
                          loading: false,
                        },
                        line_number: 8,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 166366206181375600,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '752733',
                          loading: false,
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ];
                eventDatareloadDataSource131.params =
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
                  eventDatareloadDataSource131,
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
            content={'默认查询所有组织下的用户'}
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
            labelCol={8}
            wrapperCol={16}
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
              const eventDatasetLoading227: any = [
                {
                  type: 'setLoading',
                  dataId: 166366207968525800,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '775871',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading227.params = [] || [];
              CMDGenerator(eventDatasetLoading227, {}, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDatagetTreeSelectedKey15: any = [
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
                          dataId: 166185783703143870,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '503449',
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
                                    attrId: '623196',
                                    code: 'flowCode',
                                    name: '流程编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '275837',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'Y' },
                                  },
                                  {
                                    attrId: '015829',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
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
                              dataId: 166366208769535500,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '570138',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166366208926168100,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '68951',
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
              eventDatagetTreeSelectedKey15.params = [] || [];
              CMDGenerator(
                eventDatagetTreeSelectedKey15,
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
              const eventDatasetLoading228: any = [
                {
                  type: 'setLoading',
                  dataId: 167004610220808000,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '9070466',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading228.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatasetLoading228, { e }, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDatagetTreeSelectedKey16: any = [
                {
                  type: 'getTreeSelectedKey',
                  dataId: 167004611120848500,
                  options: {
                    compId: 'Tree_443137',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Tree',
                    id: '985717',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getValue',
                      dataId: 167004611121701250,
                      options: {
                        compId: 'Input_262276',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '970466',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 167004611121716380,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '266101',
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
                                      type: ['context', '$value_970466$'],
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
                                        '$selectedKeys_985717[0]$',
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
                                    attrId: '623196',
                                    code: 'flowCode',
                                    name: '流程编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '275837',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'Y' },
                                  },
                                  {
                                    attrId: '015829',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
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
                              dataId: 167004611121732260,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '6631856',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 167004611121748400,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '309504',
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
              eventDatagetTreeSelectedKey16.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(
                eventDatagetTreeSelectedKey16,
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
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'checkbox' }}
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
            scroll={{ y: 190 }}
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
              const eventDatagetTableSelected81: any = [
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
                        value: '$selectedRows$',
                        valueList: { Input_3184618: '$selectedRows$' },
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'getValue',
                          dataId: 166028671884136900,
                          options: {
                            compId: 'Input_3184618',
                            compLib: 'comm',
                            pageJsonId: '2310769',
                            compName: 'Input',
                            id: '401664',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 166028673212361860,
                              shielding: true,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '616605',
                                pageJsonId: '2310769',
                                value: ['$value_401664$'],
                              },
                              line_number: 4,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'setValue',
                      dataId: 166027386516010140,
                      options: {
                        compId: 'Input_1845436',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '747766',
                        value:
                          "$selectedRows?.map((value, item) => {return value?.userName}).join(',')$",
                        valueList: {
                          Input_1845436:
                            "$(selectedRows || []).map(function (value, item) {return value && value.userName;}).join(',')$",
                        },
                      },
                      line_number: 5,
                      callback1: [],
                    },
                    {
                      type: 'console',
                      dataId: 166817777582561020,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '615861',
                        pageJsonId: '2310769',
                        value: [
                          "$selectedRows?.map((value, item) => {return value?.userName}).join(',')$",
                        ],
                      },
                      line_number: 6,
                    },
                    {
                      type: 'console',
                      dataId: 166817779180365540,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '815803',
                        pageJsonId: '2310769',
                        value: ['$selectedRowKeys$'],
                      },
                      line_number: 7,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected81.params =
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
                eventDatagetTableSelected81,
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
              const eventDatasetLoading229: any = [
                {
                  type: 'setLoading',
                  dataId: 166366210194307070,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '7593027',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading229.params =
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
                eventDatasetLoading229,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatagetTreeSelectedKey17: any = [
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
                                    attrId: '623196',
                                    code: 'flowCode',
                                    name: '流程编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '275837',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'Y' },
                                  },
                                  {
                                    attrId: '015829',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
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
                              dataId: 166366210590949380,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '47848',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166366210745363650,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '3152',
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
              eventDatagetTreeSelectedKey17.params =
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
                eventDatagetTreeSelectedKey17,
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
              name={'已选用户'}
              size={'default'}
              selfSpan={''}
              labelCol={'4'}
              wrapperCol={20}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'清空'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'staffNameList'}
              postfixStyle={'2'}
              icon={{ theme: 'outlined', type: 'delete', isIconFont: false }}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_1845436',
                uid: 'Input_1845436',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ flex: '', paddingTop: '10px' }}
              onIconClick={() => {
                const eventDataclearTableSelected16: any = [
                  {
                    type: 'clearTableSelected',
                    dataId: 166115507313936670,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '083599',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearTableSelected16.params = [] || [];
                CMDGenerator(
                  eventDataclearTableSelected16,
                  {},
                  'clearTableSelected',
                  {
                    id: 'clearTableSelected',
                    name: 'clearTableSelected',
                    type: 'clearTableSelected',
                    platform: 'pc',
                  },
                );
                const eventDataclearValue212: any = [
                  {
                    type: 'clearValue',
                    dataId: 166115509531483170,
                    options: {
                      compId: 'Input_1845436',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '8784126',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearValue212.params = [] || [];
                CMDGenerator(eventDataclearValue212, {}, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue213: any = [
                  {
                    type: 'clearValue',
                    dataId: 166115510137801470,
                    options: {
                      compId: 'Input_3184618',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '032033',
                    },
                    line_number: 3,
                  },
                ];
                eventDataclearValue213.params = [] || [];
                CMDGenerator(eventDataclearValue213, {}, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_1845436')}
              {...injectData}
            />
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
              fieldName={'staffIdList'}
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

export default withPageHOC(MeetingSelectuserlistcopy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '' },
});
