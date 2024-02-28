// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Card, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '884359982098653184';
const HrOrganizationManagement$$Page: React.FC<PageProps> = ({
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
  parentEngineId = pageId,
}) => {
  const refreshHrOrg = (options_618734: any) => {
    const eventDatasetLoading36: any = [
      {
        type: 'setLoading',
        dataId: 166244934936272540,
        options: {
          compId: 'Table_311334_1784965',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '341589',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading36.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading36, { options_618734 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource50: any = [
      {
        type: 'reloadDataSource',
        dataId: 166244941124861440,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '37341',
          pageJsonId: '4868135',
          dataSourceId: 166246358930017800,
          dataSourceName: 'qryDcHrActPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '5452545',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '01342',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '8147156',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '702246',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '417852',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                },
                {
                  attrId: '834066',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                },
                {
                  attrId: '6898356',
                  code: 'actUdfNum',
                  name: 'actUdfNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.actUdfNum',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'actUdfNum',
                  },
                },
                {
                  attrId: '27708959',
                  code: 'actName',
                  name: 'actName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.actName',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'actName',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '275236',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '358211',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '748982',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '1915302',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '785211',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '03545',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '017575',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '061759',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '945113',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '353926',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '6107225',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '840015',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '9822892',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '507061',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '603641',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '616757',
                      code: 'actUdfComcode',
                      name: 'actUdfComcode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '082477',
                      code: 'actUpdate',
                      name: 'actUpdate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '18956',
                      code: 'actUdfFunc',
                      name: 'actUdfFunc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '530556',
                      code: 'actKey',
                      name: 'actKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '751488',
                      code: 'actUdfMgr',
                      name: 'actUdfMgr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2967213',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '735512',
                      code: 'actUdfTel',
                      name: 'actUdfTel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '23815',
                      code: 'actUdfFax',
                      name: 'actUdfFax',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '72887',
                      code: 'actName',
                      name: 'actName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8126651',
                      code: 'actUdfZip',
                      name: 'actUdfZip',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5848175',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '931296',
                      code: 'actUpdateby',
                      name: 'actUpdateby',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '209691',
                      code: 'actUdfDspname',
                      name: 'actUdfDspname',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2002232',
                      code: 'actUdfSupvsr',
                      name: 'actUdfSupvsr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '573175',
                      code: 'isGe',
                      name: 'isGe',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '064085',
                      code: 'actCustType',
                      name: 'actCustType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4609282',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '755074',
                      code: 'actStatus',
                      name: 'actStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '595867',
                      code: 'actCreateby',
                      name: 'actCreateby',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '20052896',
                      code: 'actUdfErpid',
                      name: 'actUdfErpid',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3618196',
                      code: 'actUdfLoc',
                      name: 'actUdfLoc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '34712706',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '88596354',
                      code: 'parentActUdfNum',
                      name: 'parentActUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4678699',
                      code: 'actCreate',
                      name: 'actCreate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0057',
                      code: 'actUdfAddr',
                      name: 'actUdfAddr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6754644',
                      code: 'actRemark',
                      name: 'actRemark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '433552',
                      code: 'updateStaff',
                      name: 'updateStaff',
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
            dataId: 166244946179397470,
            options: {
              compId: 'Table_311334_1784965',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '4948883',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166244947263189400,
            options: {
              compId: 'Table_311334_1784965',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '292337',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource50.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource50,
      { options_618734 },
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
    refreshHrOrg,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_4868135__"
    >
      <View
        className="View_View_4868135_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_4868135_1',
          uid: 'View_4868135_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_4868135_1')}
        {...injectData}
      >
        <Card
          name={'属性配置'}
          cardIconType={'middle'}
          title={'HR组织管理'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          visible={true}
          hasIcon={true}
          extend={[]}
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
            id: 'Card_839649_655036',
            uid: 'Card_839649_655036',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          onClickBtn1={(e: any) => {
            const eventDatashowCustomModal299: any = [
              {
                type: 'showCustomModal',
                dataId: 166097860339693730,
                options: {
                  compId: 'showCustomModal',
                  compName: 'page',
                  id: '224256',
                  pageJsonId: '4868135',
                  modalname: '/addAttrSpec',
                  pageId: '878168778216050688',
                  paramsObj: { sceneCode: 'A' },
                  paramsObjKeyValueMap: { sceneCode: 'A' },
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158503467206600,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '562974',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshAttrTable',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatashowCustomModal299.params =
              [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatashowCustomModal299,
              { e },
              'showCustomModal',
              {
                id: 'showCustomModal',
                name: 'showCustomModal',
                type: 'showCustomModal',
                platform: 'pc',
              },
            );
          }}
          onClickBtn2={(e: any) => {
            const eventDataapiRequest809: any = [
              {
                type: 'apiRequest',
                dataId: 166158950075825400,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '353892',
                  pageJsonId: '4868135',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'SYS_reloadAllAttrSpecToCache',
                  _apiCode: 'reloadAllAttrSpecToCache',
                  _source: 'rhin',
                  _serviceId: '880731651817832448',
                  _serviceTitle:
                    '重新加载所有规格属性到缓存中: reloadAllAttrSpecToCache',
                  params: 'object',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166158954380214140,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '244975',
                      pageJsonId: '4868135',
                      type: 'success',
                      value: '刷新成功',
                    },
                    line_number: 2,
                  },
                ],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 166158956052114430,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '647432',
                      pageJsonId: '4868135',
                      type: 'error',
                      value: '未知系统异常',
                    },
                    line_number: 3,
                  },
                ],
              },
            ];
            eventDataapiRequest809.params =
              [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDataapiRequest809, { e }, 'apiRequest', {
              id: 'apiRequest',
              name: 'apiRequest',
              type: 'apiRequest',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_839649_655036')}
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
              id: 'Form_148709_2103377',
              uid: 'Form_148709_2103377',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_148709_2103377')}
            {...injectData}
          >
            <Input
              name={'组织编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'HR组织编码'}
              formItemIndex={0}
              fieldName={'actUdfNum'}
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
                id: 'Input_3889064_9887114',
                uid: 'Input_3889064_9887114',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc811: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshHrOrg',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc811.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc811, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3889064_9887114')}
              {...injectData}
            />
            <Input
              name={'组织名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'HR组织名称模糊查询'}
              formItemIndex={1}
              fieldName={'actName'}
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
                id: 'Input_33684855_0267973',
                uid: 'Input_33684855_0267973',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc812: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshHrOrg',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc812.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc812, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_0267973')
              }
              {...injectData}
            />
            <View
              className="View_View_841498_8261476"
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_8261476',
                uid: 'View_841498_8261476',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_841498_8261476')}
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
                  id: 'Button_224226_9699964',
                  uid: 'Button_224226_9699964',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc813: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166244950814363230,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '2910313',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshHrOrg',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc813.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc813,
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
                  refs.setComponentRef(r, 'Button_224226_9699964')
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
                  id: 'Button_499055_253437',
                  uid: 'Button_499055_253437',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const forms206 = getFormByCompId('Form_148709', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms206) ? forms206 : [forms206]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_499055_253437')
                }
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'current'}
            isFlexColumn={false}
            pageSize={10}
            current={data?.qryDcHrActPage?.resultData?.current}
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
                title: 'ERP组织编码',
                dataIndex: 'actUdfNum',
                key: 'actUdfNum',
                edittype: 'string',
                id: '827391',
                className: '',
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
                title: 'ERP组织名称',
                dataIndex: 'actName',
                key: 'actName',
                edittype: 'string',
                id: '468511',
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
                title: '部门功能',
                dataIndex: 'actUdfFunc',
                key: 'actUdfFunc',
                edittype: 'string',
                id: '6785038',
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
                title: '是否政企',
                dataIndex: 'isGe',
                key: 'isGe',
                edittype: 'string',
                id: '507436',
                className: 'divider',
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
                title: '类型',
                dataIndex: 'actCustType',
                key: 'actCustType',
                edittype: 'string',
                id: '66306',
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
                title: '部门经理',
                dataIndex: 'actUdfMgr',
                key: 'actUdfMgr',
                edittype: 'string',
                id: '6281033',
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
                title: '部门电话',
                dataIndex: 'actUdfTel',
                key: 'actUdfTel',
                edittype: 'string',
                id: '5456986',
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
                title: '部门地址',
                dataIndex: 'actUdfAddr',
                key: 'actUdfAddr',
                edittype: 'string',
                id: '184783',
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
            rowKeyType={'specified'}
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'actKey'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '087564',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '88461124',
                checked: true,
              },
            ]}
            extend={[]}
            dataSource={data?.qryDcHrActPage?.resultData?.records}
            total={data?.qryDcHrActPage?.resultData?.total}
            fieldName={'data.qryDcOaOrgPage.resultData.current'}
            dataSourceFromDataSourceConfig={
              'data.qryDcHrActPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_311334_1784965',
              uid: 'Table_311334_1784965',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '12px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource134: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166176656973352100,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '194285',
                    pageJsonId: '4868135',
                    dataSourceId: 166246358930017800,
                    dataSourceName: 'qryDcHrActPage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '5452545',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '01342',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '8147156',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '702246',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '417852',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageSize' },
                            type: 'long',
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '834066',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageNum' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '6898356',
                            code: 'actUdfNum',
                            name: 'actUdfNum',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.actUdfNum',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377',
                                'getFieldsValue',
                              ],
                              code: 'actUdfNum',
                            },
                          },
                          {
                            attrId: '27708959',
                            code: 'actName',
                            name: 'actName',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.actName',
                            value: {
                              type: [
                                'form',
                                'Form_148709_2103377',
                                'getFieldsValue',
                              ],
                              code: 'actName',
                            },
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '502013',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '75379275',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '423387',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '049416',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '2255704',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '6807631',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '605772',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '197374',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '020249',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '5386885',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '5118628',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '4803873',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '23876',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '049075',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '598235',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '289168',
                                code: 'actUdfComcode',
                                name: 'actUdfComcode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '138258',
                                code: 'actUpdate',
                                name: 'actUpdate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '282997',
                                code: 'actUdfFunc',
                                name: 'actUdfFunc',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6148806',
                                code: 'actKey',
                                name: 'actKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '086826',
                                code: 'actUdfMgr',
                                name: 'actUdfMgr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '451871',
                                code: 'updateDate',
                                name: 'updateDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '79772284',
                                code: 'actUdfTel',
                                name: 'actUdfTel',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '982692',
                                code: 'actUdfFax',
                                name: 'actUdfFax',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '624036',
                                code: 'actName',
                                name: 'actName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '977004',
                                code: 'actUdfZip',
                                name: 'actUdfZip',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '039935',
                                code: 'actUdfNum',
                                name: 'actUdfNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8333922',
                                code: 'actUpdateby',
                                name: 'actUpdateby',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '656843',
                                code: 'actUdfDspname',
                                name: 'actUdfDspname',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '523474',
                                code: 'actUdfSupvsr',
                                name: 'actUdfSupvsr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '589715',
                                code: 'isGe',
                                name: 'isGe',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '74624',
                                code: 'actCustType',
                                name: 'actCustType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '705271',
                                code: 'createDate',
                                name: 'createDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '773753',
                                code: 'actStatus',
                                name: 'actStatus',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2599944',
                                code: 'actCreateby',
                                name: 'actCreateby',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '317663',
                                code: 'actUdfErpid',
                                name: 'actUdfErpid',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '035005',
                                code: 'actUdfLoc',
                                name: 'actUdfLoc',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '736905',
                                code: 'createStaff',
                                name: 'createStaff',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '979966',
                                code: 'parentActUdfNum',
                                name: 'parentActUdfNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2524117',
                                code: 'actCreate',
                                name: 'actCreate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '505514',
                                code: 'actUdfAddr',
                                name: 'actUdfAddr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1477162',
                                code: 'actRemark',
                                name: 'actRemark',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '83722',
                                code: 'updateStaff',
                                name: 'updateStaff',
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
              eventDatareloadDataSource134.params =
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
                eventDatareloadDataSource134,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              // console 166244462173542600
              console.log(row);
              const eventDatashowCustomModal300: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166158498374371460,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '454329',
                    pageJsonId: '4868135',
                    modalname: '/editHrOrganization',
                    pageId: '884409061105180672',
                    paramsObj: {
                      bizId: '$rowId$',
                      sceneCode: 'M',
                      dcOaOrg: '$row$',
                      dcHrAct: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      bizId: '$rowId$',
                      sceneCode: 'M',
                      dcOaOrg: '$row$',
                      dcHrAct: '$row$',
                    },
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 166244960486146850,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '585512',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshHrOrg',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal300.params =
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
                eventDatashowCustomModal300,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal301: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166245228331504450,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '7441835',
                    pageJsonId: '4868135',
                    modalname: '/detailHrOrganization',
                    pageId: '884416328521490432',
                    paramsObj: {
                      dcOaOrg: '$row$',
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcHrAct: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      dcOaOrg: '$row$',
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcHrAct: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal301.params =
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
                eventDatashowCustomModal301,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_311334_1784965')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(HrOrganizationManagement$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
