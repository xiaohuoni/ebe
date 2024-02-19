// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  Button,
  Card,
  Form,
  Input,
  Switch,
  Table,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const QryFlowTemplateCache$$Page: React.FC<PageProps> = ({
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
}) => {
  const refreshFlowTemplate = (options_618734: any) => {
    const eventDatasetLoading42: any = [
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
    eventDatasetLoading42.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading42, { options_618734 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource55: any = [
      {
        type: 'reloadDataSource',
        dataId: 166363874340334660,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '19124',
          pageJsonId: '4868135',
          dataSourceId: 166363847839556400,
          dataSourceName: 'qryAllFlowTemplateByCache',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '712831',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '920067',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '419916',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '515463',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '464551',
                  code: 'flowCode',
                  name: 'flowCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'flowCode',
                  },
                },
                {
                  attrId: '653412',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '072626',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '3991354',
                  code: 'flowName',
                  name: 'flowName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'flowName',
                  },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '8121983',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '549585',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '719664',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '737375',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'objectArray',
              children: [
                {
                  attrId: '4713963',
                  code: 'whetherCache',
                  name: 'whetherCache',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '480778',
                  code: 'flowCode',
                  name: 'flowCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2827664',
                  code: 'cacheKey',
                  name: 'cacheKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '179732',
                  code: 'whetherConfig',
                  name: 'whetherConfig',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '506464',
                  code: 'templateMessage',
                  name: 'templateMessage',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '427725',
                  code: 'flowVersion',
                  name: 'flowVersion',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '472922',
                  code: 'state',
                  name: 'state',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '261387',
                  code: 'flowName',
                  name: 'flowName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '792796',
                  code: 'enabled',
                  name: 'enabled',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
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
            dataId: 166363875327794850,
            options: {
              compId: 'Table_311334_1784965',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '0524762',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166363875459054050,
            options: {
              compId: 'Table_311334_1784965',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '673185',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource55.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource55,
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
    refreshFlowTemplate,
  }));

  useEffect(() => {
    const eventDatasetValue25: any = [
      {
        type: 'setValue',
        dataId: 166374816770867680,
        options: {
          compId: 'Switch_2205034',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Switch',
          id: '845786',
          value: '$data.getSysConfigCacheByCode.resultData.cfValue == 1$',
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue25.params = [] || [];
    CMDGenerator(eventDatasetValue25, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_4868135__"
    >
      <View
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
        ref={(r: any) => (refs['View_4868135_1'] = r)}
        {...injectData}
      >
        <Card
          name={'属性配置'}
          cardIconType={'middle'}
          title={'流程模板缓存'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          visible={true}
          hasIcon={true}
          extend={[
            {
              id: '379956',
              title: '刷新所有缓存',
              iconPos: 'left',
              btnType: 'primary',
              icon: { theme: 'outlined', type: 'sync', isIconFont: false },
            },
          ]}
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
            const eventDatashowModal26: any = [
              {
                type: 'showModal',
                dataId: 166364327319911170,
                options: {
                  compId: 'showModal',
                  compName: 'page',
                  id: '769301',
                  pageJsonId: '4868135',
                  type: 'confirm',
                  title: '刷新缓存',
                  content: '确定刷新所有流程模板缓存吗？',
                  okText: '确定',
                  cancelText: '取消',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166364327946647200,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '0398735',
                      pageJsonId: '4868135',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'refreshAllFlowTemplate',
                      _apiCode: 'refreshAllFlowTemplate',
                      _source: 'rhin',
                      _serviceId: '889346486599290880',
                      _serviceTitle:
                        '刷新所有流程模板缓存-zzz: refreshAllFlowTemplate',
                      params: 'object',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166364327946653060,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '9972724',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshFlowTemplate',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatashowModal26.params =
              [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatashowModal26, { e }, 'showModal', {
              id: 'showModal',
              name: 'showModal',
              type: 'showModal',
              platform: 'pc',
            });
          }}
          onClickBtn2={(e: any) => {
            const eventDataapiRequest814: any = [
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
            eventDataapiRequest814.params =
              [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDataapiRequest814, { e }, 'apiRequest', {
              id: 'apiRequest',
              name: 'apiRequest',
              type: 'apiRequest',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Card_839649_655036'] = r)}
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
            ref={(r: any) => (refs['Form_148709_2103377'] = r)}
            {...injectData}
          >
            <Input
              name={'流程编码'}
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
              placeholder={'流程编码模糊查询'}
              formItemIndex={0}
              fieldName={'flowCode'}
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
                const eventDatacallSelfFunc850: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshFlowTemplate',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc850.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc850, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_3889064_9887114'] = r)}
              {...injectData}
            />
            <Input
              name={'流程名称'}
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
              placeholder={'流程名称模糊查询'}
              formItemIndex={1}
              fieldName={'flowName'}
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
                const eventDatacallSelfFunc851: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshFlowTemplate',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc851.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc851, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_33684855_0267973'] = r)}
              {...injectData}
            />
            <View
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
              ref={(r: any) => (refs['View_841498_8261476'] = r)}
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
                  const eventDatacallSelfFunc852: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166244950814363230,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '2910313',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshFlowTemplate',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc852.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc852,
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
                ref={(r: any) => (refs['Button_224226_9699964'] = r)}
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
                  const forms215 = getFormByCompId('Form_148709', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms215) ? forms215 : [forms215]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) => (refs['Button_499055_253437'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                visible={true}
                content={'        '}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_975282',
                  uid: 'Text_975282',
                  type: 'Text',
                  ...componentItem,
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                }}
                ref={(r: any) => (refs['Text_975282'] = r)}
                {...injectData}
              />
              <Popover
                options={{
                  tipType: '2',
                  trigger: 'hover',
                  content: '是否开启流程模板缓存',
                }}
                id={'Switch_2205034'}
                {...injectData}
              >
                <Switch
                  name={'开关'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={8}
                  wrapperCol={16}
                  disabled={false}
                  visible={true}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={false}
                  fieldName={'cfValue'}
                  $$componentItem={{
                    id: 'Switch_2205034',
                    uid: 'Switch_2205034',
                    type: 'Switch',
                    ...componentItem,
                  }}
                  onChange={(e: any) => {
                    const eventDatashowModal28: any = [
                      {
                        type: 'showModal',
                        dataId: 166375333130712320,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '01473',
                          pageJsonId: '4868135',
                          type: 'confirm',
                          title: '缓存模板',
                          content: '是否确认修改流程模板缓存状态？',
                          okText: '确认',
                          cancelText: '取消',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '737909',
                                options: { operate: '== true' },
                                conditionType: 'checkValue',
                                objType: 'Switch',
                                objId: 'Switch_2205034',
                              },
                            ],
                            dataId: 166375445697408670,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166375454261233340,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166375454501002200,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166375454501012350,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166381250909724580,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166381250909711070,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166381315098755200,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166381315098708030,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                        elseIfs: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166381315098703400,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                        elseIfs: [],
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'modalType',
                                                      'title',
                                                      'content',
                                                      'okText',
                                                      'cancelText',
                                                    ],
                                                    options: {
                                                      compId: 'showModal',
                                                      compName: 'page',
                                                      id: '606873',
                                                      pageJsonId: '4868135',
                                                      type: 'info',
                                                      title:
                                                        '模板缓存开关操作成功',
                                                      content:
                                                        '模板缓存开关修改成关闭',
                                                      okText: '确认',
                                                    },
                                                    actionObjId: 'showModal',
                                                    actionObjName: 'page',
                                                    value: 'showModal',
                                                    elseIfs: [],
                                                    line_number: 9,
                                                  },
                                                ],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Switch_2205034',
                                              compLib: 'comm',
                                              pageJsonId: '4868135',
                                              compName: 'Switch',
                                              id: '9015164',
                                              value: 'false',
                                            },
                                            actionObjId: 'Switch_2205034',
                                            actionObjName: 'Switch',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 8,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166381271969921540,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166381271969975800,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 166381271969964130,
                                                children: [],
                                                value: 'callback2',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: [
                                              'selectServerDataSource',
                                              'dataSourceReloadFilter',
                                            ],
                                            options: {
                                              compId: 'reloadDataSource',
                                              compName: 'page',
                                              id: '7590487',
                                              pageJsonId: '4868135',
                                              dataSourceId: 166375256726915360,
                                              dataSourceName:
                                                'getSysConfigCacheByCode',
                                              dataSourceRelType: 'service',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '29567254',
                                                  code: 'header',
                                                  name: '请求头参数',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                  type: 'object',
                                                  key: 'header',
                                                },
                                                {
                                                  attrId: '368381',
                                                  code: 'path',
                                                  name: '请求路径参数',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                  type: 'object',
                                                  key: 'path',
                                                },
                                                {
                                                  attrId: '8490836',
                                                  code: 'query',
                                                  name: 'URL 参数',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                  type: 'object',
                                                  key: 'query',
                                                },
                                                {
                                                  attrId: '2052266',
                                                  code: 'body',
                                                  name: '请求体',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                  type: 'object',
                                                  children: [
                                                    {
                                                      attrId: '52228',
                                                      code: 'cfGroupCode',
                                                      name: '新增节点',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                        value: 'UNIFLOW',
                                                      },
                                                      type: 'string',
                                                      key: 'body.cfGroupCode',
                                                      value: {
                                                        type: ['customize'],
                                                        code: 'UNIFLOW',
                                                      },
                                                    },
                                                    {
                                                      attrId: '184623',
                                                      code: 'cfCode',
                                                      name: '新增节点',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                        value:
                                                          'UNIFLOW_TEMPLATE_CACHE',
                                                      },
                                                      type: 'string',
                                                      key: 'body.cfCode',
                                                      value: {
                                                        type: ['customize'],
                                                        code: 'UNIFLOW_TEMPLATE_CACHE',
                                                      },
                                                    },
                                                  ],
                                                  key: 'body',
                                                },
                                              ],
                                              dataSourceSetValue: [
                                                {
                                                  attrId: '200799',
                                                  code: 'resultCode',
                                                  name: 'resultCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '3135362',
                                                  code: 'resultMsgCode',
                                                  name: 'resultMsgCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '956176',
                                                  code: 'resultMsg',
                                                  name: 'resultMsg',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '579589',
                                                  code: 'resultData',
                                                  name: 'resultData',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'object',
                                                  children: [
                                                    {
                                                      attrId: '1068666',
                                                      code: 'cfId',
                                                      name: 'cfId',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'long',
                                                    },
                                                    {
                                                      attrId: '7579239',
                                                      code: 'cfGroupCode',
                                                      name: 'cfGroupCode',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '978562',
                                                      code: 'cfGroupName',
                                                      name: 'cfGroupName',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '778247',
                                                      code: 'remark',
                                                      name: 'remark',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '241372',
                                                      code: 'cfName',
                                                      name: 'cfName',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '6866613',
                                                      code: 'cfCode',
                                                      name: 'cfCode',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '0464204',
                                                      code: 'cfValue',
                                                      name: 'cfValue',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                  ],
                                                },
                                              ],
                                              otherObjectArrayOptions: {},
                                            },
                                            actionObjId: 'reloadDataSource',
                                            actionObjName: 'page',
                                            value: 'reloadDataSource',
                                            elseIfs: [],
                                            line_number: 10,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166375454501069820,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: [
                                      'actionTitle',
                                      'sync',
                                      'url',
                                      'params',
                                    ],
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '4607776',
                                      pageJsonId: '4868135',
                                      sync: false,
                                      actionTitle: '',
                                      method: 'post',
                                      url: '/app/rhin/gateway/callRhinEngine',
                                      _capabilityCode:
                                        'modSysConfigInfoAndRefresh',
                                      _apiCode: 'modSysConfigInfoAndRefresh',
                                      _source: 'rhin',
                                      _serviceId: '889808197429104640',
                                      _serviceTitle:
                                        '根据分组和编码更新并刷新缓存-zzz: modSysConfigInfoAndRefresh',
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
                                          dataKey: '4607776_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '4607776_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '4607776_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'cfId',
                                              attrType: 'field',
                                              type: 'long',
                                              mustFlag: 'F',
                                              _id: 'body.cfId',
                                              compType: 'Input',
                                              name: 'cfId',
                                              parents: ['body'],
                                              id: 'body.cfId',
                                              dataKey: '4607776_body.cfId',
                                            },
                                            {
                                              code: 'cfGroupCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfGroupCode',
                                              compType: 'Input',
                                              name: 'cfGroupCode',
                                              parents: ['body'],
                                              id: 'body.cfGroupCode',
                                              dataKey:
                                                '4607776_body.cfGroupCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'UNIFLOW',
                                              },
                                            },
                                            {
                                              code: 'cfGroupName',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfGroupName',
                                              compType: 'Input',
                                              name: 'cfGroupName',
                                              parents: ['body'],
                                              id: 'body.cfGroupName',
                                              dataKey:
                                                '4607776_body.cfGroupName',
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
                                              dataKey: '4607776_body.remark',
                                            },
                                            {
                                              code: 'cfName',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfName',
                                              compType: 'Input',
                                              name: 'cfName',
                                              parents: ['body'],
                                              id: 'body.cfName',
                                              dataKey: '4607776_body.cfName',
                                            },
                                            {
                                              code: 'cfCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfCode',
                                              compType: 'Input',
                                              name: 'cfCode',
                                              parents: ['body'],
                                              id: 'body.cfCode',
                                              dataKey: '4607776_body.cfCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'UNIFLOW_TEMPLATE_CACHE',
                                              },
                                            },
                                            {
                                              code: 'cfValue',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfValue',
                                              compType: 'Input',
                                              name: 'cfValue',
                                              parents: ['body'],
                                              id: 'body.cfValue',
                                              dataKey: '4607776_body.cfValue',
                                              value: {
                                                type: ['customize'],
                                                code: '0',
                                              },
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '4607776_body',
                                        },
                                      ],
                                    },
                                    actionObjId: 'apiRequest',
                                    actionObjName: 'system',
                                    value: 'apiRequest',
                                    elseIfs: [],
                                    line_number: 7,
                                  },
                                ],
                                condition: [],
                                elseIfs: [],
                                callback: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 166375454501002200,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '4607776',
                                      pageJsonId: '4868135',
                                      sync: false,
                                      actionTitle: '',
                                      method: 'post',
                                      url: '/app/rhin/gateway/callRhinEngine',
                                      _capabilityCode:
                                        'modSysConfigInfoAndRefresh',
                                      _apiCode: 'modSysConfigInfoAndRefresh',
                                      _source: 'rhin',
                                      _serviceId: '889808197429104640',
                                      _serviceTitle:
                                        '根据分组和编码更新并刷新缓存-zzz: modSysConfigInfoAndRefresh',
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
                                          dataKey: '4607776_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '4607776_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '4607776_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'cfId',
                                              attrType: 'field',
                                              type: 'long',
                                              mustFlag: 'F',
                                              _id: 'body.cfId',
                                              compType: 'Input',
                                              name: 'cfId',
                                              parents: ['body'],
                                              id: 'body.cfId',
                                              dataKey: '4607776_body.cfId',
                                            },
                                            {
                                              code: 'cfGroupCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfGroupCode',
                                              compType: 'Input',
                                              name: 'cfGroupCode',
                                              parents: ['body'],
                                              id: 'body.cfGroupCode',
                                              dataKey:
                                                '4607776_body.cfGroupCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'UNIFLOW',
                                              },
                                            },
                                            {
                                              code: 'cfGroupName',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfGroupName',
                                              compType: 'Input',
                                              name: 'cfGroupName',
                                              parents: ['body'],
                                              id: 'body.cfGroupName',
                                              dataKey:
                                                '4607776_body.cfGroupName',
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
                                              dataKey: '4607776_body.remark',
                                            },
                                            {
                                              code: 'cfName',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfName',
                                              compType: 'Input',
                                              name: 'cfName',
                                              parents: ['body'],
                                              id: 'body.cfName',
                                              dataKey: '4607776_body.cfName',
                                            },
                                            {
                                              code: 'cfCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfCode',
                                              compType: 'Input',
                                              name: 'cfCode',
                                              parents: ['body'],
                                              id: 'body.cfCode',
                                              dataKey: '4607776_body.cfCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'UNIFLOW_TEMPLATE_CACHE',
                                              },
                                            },
                                            {
                                              code: 'cfValue',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.cfValue',
                                              compType: 'Input',
                                              name: 'cfValue',
                                              parents: ['body'],
                                              id: 'body.cfValue',
                                              dataKey: '4607776_body.cfValue',
                                              value: {
                                                type: ['customize'],
                                                code: '0',
                                              },
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '4607776_body',
                                        },
                                      ],
                                    },
                                    line_number: 7,
                                    callback1: [
                                      {
                                        type: 'setValue',
                                        dataId: 166381250909724580,
                                        options: {
                                          compId: 'Switch_2205034',
                                          compLib: 'comm',
                                          pageJsonId: '4868135',
                                          compName: 'Switch',
                                          id: '9015164',
                                          value: 'false',
                                        },
                                        line_number: 8,
                                        callback1: [
                                          {
                                            type: 'showModal',
                                            dataId: 166381315098755200,
                                            options: {
                                              compId: 'showModal',
                                              compName: 'page',
                                              id: '606873',
                                              pageJsonId: '4868135',
                                              type: 'info',
                                              title: '模板缓存开关操作成功',
                                              content: '模板缓存开关修改成关闭',
                                              okText: '确认',
                                            },
                                            line_number: 9,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                      },
                                      {
                                        type: 'reloadDataSource',
                                        dataId: 166381271969921540,
                                        options: {
                                          compId: 'reloadDataSource',
                                          compName: 'page',
                                          id: '7590487',
                                          pageJsonId: '4868135',
                                          dataSourceId: 166375256726915360,
                                          dataSourceName:
                                            'getSysConfigCacheByCode',
                                          dataSourceRelType: 'service',
                                          dataSourceReloadFilter: [
                                            {
                                              attrId: '29567254',
                                              code: 'header',
                                              name: '请求头参数',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              key: 'header',
                                            },
                                            {
                                              attrId: '368381',
                                              code: 'path',
                                              name: '请求路径参数',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              key: 'path',
                                            },
                                            {
                                              attrId: '8490836',
                                              code: 'query',
                                              name: 'URL 参数',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              key: 'query',
                                            },
                                            {
                                              attrId: '2052266',
                                              code: 'body',
                                              name: '请求体',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              children: [
                                                {
                                                  attrId: '52228',
                                                  code: 'cfGroupCode',
                                                  name: '新增节点',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: 'UNIFLOW',
                                                  },
                                                  type: 'string',
                                                  key: 'body.cfGroupCode',
                                                  value: {
                                                    type: ['customize'],
                                                    code: 'UNIFLOW',
                                                  },
                                                },
                                                {
                                                  attrId: '184623',
                                                  code: 'cfCode',
                                                  name: '新增节点',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value:
                                                      'UNIFLOW_TEMPLATE_CACHE',
                                                  },
                                                  type: 'string',
                                                  key: 'body.cfCode',
                                                  value: {
                                                    type: ['customize'],
                                                    code: 'UNIFLOW_TEMPLATE_CACHE',
                                                  },
                                                },
                                              ],
                                              key: 'body',
                                            },
                                          ],
                                          dataSourceSetValue: [
                                            {
                                              attrId: '200799',
                                              code: 'resultCode',
                                              name: 'resultCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '3135362',
                                              code: 'resultMsgCode',
                                              name: 'resultMsgCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '956176',
                                              code: 'resultMsg',
                                              name: 'resultMsg',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '579589',
                                              code: 'resultData',
                                              name: 'resultData',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'object',
                                              children: [
                                                {
                                                  attrId: '1068666',
                                                  code: 'cfId',
                                                  name: 'cfId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'long',
                                                },
                                                {
                                                  attrId: '7579239',
                                                  code: 'cfGroupCode',
                                                  name: 'cfGroupCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '978562',
                                                  code: 'cfGroupName',
                                                  name: 'cfGroupName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '778247',
                                                  code: 'remark',
                                                  name: 'remark',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '241372',
                                                  code: 'cfName',
                                                  name: 'cfName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '6866613',
                                                  code: 'cfCode',
                                                  name: 'cfCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '0464204',
                                                  code: 'cfValue',
                                                  name: 'cfValue',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                              ],
                                            },
                                          ],
                                          otherObjectArrayOptions: {},
                                        },
                                        line_number: 10,
                                        callback1: [],
                                        callback2: [],
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
                                type: 'apiRequest',
                                dataId: 166375453805805570,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '8478573',
                                  pageJsonId: '4868135',
                                  sync: false,
                                  actionTitle: '',
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'modSysConfigInfoAndRefresh',
                                  _apiCode: 'modSysConfigInfoAndRefresh',
                                  _source: 'rhin',
                                  _serviceId: '889808197429104640',
                                  _serviceTitle:
                                    '根据分组和编码更新并刷新缓存-zzz: modSysConfigInfoAndRefresh',
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
                                      dataKey: '8478573_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '8478573_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '8478573_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'cfId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.cfId',
                                          compType: 'Input',
                                          name: 'cfId',
                                          parents: ['body'],
                                          id: 'body.cfId',
                                          dataKey: '8478573_body.cfId',
                                        },
                                        {
                                          code: 'cfGroupCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.cfGroupCode',
                                          compType: 'Input',
                                          name: 'cfGroupCode',
                                          parents: ['body'],
                                          id: 'body.cfGroupCode',
                                          dataKey: '8478573_body.cfGroupCode',
                                          value: {
                                            type: ['customize'],
                                            code: 'UNIFLOW',
                                          },
                                        },
                                        {
                                          code: 'cfGroupName',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.cfGroupName',
                                          compType: 'Input',
                                          name: 'cfGroupName',
                                          parents: ['body'],
                                          id: 'body.cfGroupName',
                                          dataKey: '8478573_body.cfGroupName',
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
                                          dataKey: '8478573_body.remark',
                                        },
                                        {
                                          code: 'cfName',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.cfName',
                                          compType: 'Input',
                                          name: 'cfName',
                                          parents: ['body'],
                                          id: 'body.cfName',
                                          dataKey: '8478573_body.cfName',
                                        },
                                        {
                                          code: 'cfCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.cfCode',
                                          compType: 'Input',
                                          name: 'cfCode',
                                          parents: ['body'],
                                          id: 'body.cfCode',
                                          dataKey: '8478573_body.cfCode',
                                          value: {
                                            type: ['customize'],
                                            code: 'UNIFLOW_TEMPLATE_CACHE',
                                          },
                                        },
                                        {
                                          code: 'cfValue',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.cfValue',
                                          compType: 'Input',
                                          name: 'cfValue',
                                          parents: ['body'],
                                          id: 'body.cfValue',
                                          dataKey: '8478573_body.cfValue',
                                          value: {
                                            type: ['customize'],
                                            code: '1',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '8478573_body',
                                    },
                                  ],
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'setValue',
                                    dataId: 166381252871177200,
                                    options: {
                                      compId: 'Switch_2205034',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Switch',
                                      id: '072869',
                                      value: 'true',
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'showModal',
                                        dataId: 166381313960300830,
                                        options: {
                                          compId: 'showModal',
                                          compName: 'page',
                                          id: '534953',
                                          pageJsonId: '4868135',
                                          type: 'info',
                                          title: '模板缓存开关操作成功',
                                          content: '模板缓存开关修改成打开',
                                          okText: '确认',
                                        },
                                        line_number: 5,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'reloadDataSource',
                                    dataId: 166381268864863260,
                                    options: {
                                      compId: 'reloadDataSource',
                                      compName: 'page',
                                      id: '217341',
                                      pageJsonId: '4868135',
                                      dataSourceId: 166375256726915360,
                                      dataSourceName: 'getSysConfigCacheByCode',
                                      dataSourceRelType: 'service',
                                      dataSourceReloadFilter: [
                                        {
                                          attrId: '29567254',
                                          code: 'header',
                                          name: '请求头参数',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                          key: 'header',
                                        },
                                        {
                                          attrId: '368381',
                                          code: 'path',
                                          name: '请求路径参数',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                          key: 'path',
                                        },
                                        {
                                          attrId: '8490836',
                                          code: 'query',
                                          name: 'URL 参数',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                          key: 'query',
                                        },
                                        {
                                          attrId: '2052266',
                                          code: 'body',
                                          name: '请求体',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                          type: 'object',
                                          children: [
                                            {
                                              attrId: '52228',
                                              code: 'cfGroupCode',
                                              name: '新增节点',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: 'UNIFLOW',
                                              },
                                              type: 'string',
                                              key: 'body.cfGroupCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'UNIFLOW',
                                              },
                                            },
                                            {
                                              attrId: '184623',
                                              code: 'cfCode',
                                              name: '新增节点',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: 'UNIFLOW_TEMPLATE_CACHE',
                                              },
                                              type: 'string',
                                              key: 'body.cfCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'UNIFLOW_TEMPLATE_CACHE',
                                              },
                                            },
                                          ],
                                          key: 'body',
                                        },
                                      ],
                                      dataSourceSetValue: [
                                        {
                                          attrId: '200799',
                                          code: 'resultCode',
                                          name: 'resultCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '3135362',
                                          code: 'resultMsgCode',
                                          name: 'resultMsgCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '956176',
                                          code: 'resultMsg',
                                          name: 'resultMsg',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '579589',
                                          code: 'resultData',
                                          name: 'resultData',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                          children: [
                                            {
                                              attrId: '1068666',
                                              code: 'cfId',
                                              name: 'cfId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                            {
                                              attrId: '7579239',
                                              code: 'cfGroupCode',
                                              name: 'cfGroupCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '978562',
                                              code: 'cfGroupName',
                                              name: 'cfGroupName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '778247',
                                              code: 'remark',
                                              name: 'remark',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '241372',
                                              code: 'cfName',
                                              name: 'cfName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '6866613',
                                              code: 'cfCode',
                                              name: 'cfCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '0464204',
                                              code: 'cfValue',
                                              name: 'cfValue',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                          ],
                                        },
                                      ],
                                      otherObjectArrayOptions: {},
                                    },
                                    line_number: 6,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [
                          {
                            type: 'setValue',
                            dataId: 166375409884659500,
                            options: {
                              compId: 'Switch_2205034',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Switch',
                              id: '869353',
                              value:
                                '$data.getSysConfigCacheByCode.resultData.cfValue == 1$',
                            },
                            line_number: 11,
                            callback1: [],
                          },
                        ],
                      },
                    ];
                    eventDatashowModal28.params =
                      [{ title: '开关取值', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(eventDatashowModal28, { e }, 'showModal', {
                      id: 'showModal',
                      name: 'showModal',
                      type: 'showModal',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => (refs['Switch_2205034'] = r)}
                  {...injectData}
                />
              </Popover>
              <Text
                visible={true}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_17574',
                  uid: 'Text_17574',
                  type: 'Text',
                  ...componentItem,
                }}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                }}
                ref={(r: any) => (refs['Text_17574'] = r)}
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'current'}
            isFlexColumn={false}
            pageSize={10}
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
                title: '流程编码',
                key: 'flowCode',
                dataIndex: 'flowCode',
                className: '',
                id: '965149',
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
                title: '流程名称',
                key: 'flowName',
                dataIndex: 'flowName',
                className: 'divider',
                id: '9594216',
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
                title: '流程版本',
                key: 'flowVersion',
                dataIndex: 'flowVersion',
                className: 'divider',
                id: '204336',
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
                title: '缓存KEY值',
                key: 'cacheKey',
                dataIndex: 'cacheKey',
                className: 'divider',
                id: '131148',
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
                title: '是否缓存',
                key: 'whetherCache',
                dataIndex: 'whetherCache',
                className: 'divider',
                id: '26769164',
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
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                className: 'divider',
                id: '2047256',
                staticDataSource: [
                  { id: '489302', label: '新建', value: '1' },
                  { id: '3606743', label: '发布', value: '2' },
                ],
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
            rowKey={'orgKey'}
            rowActions={[]}
            extend={[
              {
                id: '427197',
                title: '模板',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'file-search',
                  isIconFont: false,
                },
                checked: true,
              },
              {
                id: '102737',
                title: '刷新缓存',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'sync', isIconFont: false },
                checked: true,
              },
            ]}
            dataSource={data?.qryAllFlowTemplateByCache?.resultData}
            fieldName={'data.qryDcOaOrgPage.resultData.current'}
            dataSourceFromDataSourceConfig={
              'data.qryAllFlowTemplateByCache.resultData'
            }
            $$componentItem={{
              id: 'Table_311334_1784965',
              uid: 'Table_311334_1784965',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '12px 0px 0px 0px' }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal311: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166364066985714700,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '484256',
                    pageJsonId: '4868135',
                    modalname: '/flowTemplateMessage',
                    pageId: '889334293367492608',
                    paramsObj: {
                      sceneCode: 'V',
                      templateMessage: '$row.templateMessage$',
                      flowName: '$row.flowName$',
                      flowCode: '$row.flowCode$',
                    },
                    paramsObjKeyValueMap: {
                      sceneCode: 'V',
                      templateMessage: '$row.templateMessage$',
                      flowName: '$row.flowName$',
                      flowCode: '$row.flowCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal311.params =
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
                eventDatashowCustomModal311,
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
            onClickBtn2={(rowId: any, row: any, index: any) => {
              const eventDataapiRequest815: any = [
                {
                  type: 'apiRequest',
                  dataId: 166364241989169660,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '310018',
                    pageJsonId: '4868135',
                    sync: false,
                    actionTitle: '',
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'refreshFlowTemplate',
                    _apiCode: 'refreshFlowTemplate',
                    _source: 'rhin',
                    _serviceId: '889343168263098368',
                    _serviceTitle: '刷新流程模板缓存-zzz: refreshFlowTemplate',
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
                        dataKey: '310018_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '310018_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '310018_query',
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
                            dataKey: '310018_body.flowCode',
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'flowCode',
                            },
                          },
                        ],
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '310018_body',
                      },
                    ],
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '571409',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$reply_310018?.resultCode$',
                            operate: '==',
                            manualValue: '0',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166364257963413280,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166364273545313150,
                          children: [],
                          condition: [],
                          desc: 'resultCode != 0',
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 166364272862988000,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '8589367',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshFlowTemplate',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest815.params =
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
                eventDataapiRequest815,
                { rowId, row, index },
                'apiRequest',
                {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_311334_1784965'] = r)}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(QryFlowTemplateCache$$Page, {
  pageId: '889327002878611456',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
