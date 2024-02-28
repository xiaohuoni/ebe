// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  Select,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '993433830689329152';
const UserSelectList$$Modal: React.FC<PageProps> = ({
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
  const refreshUserTable = (options_399369: any) => {
    const eventDatasetLoading28: any = [
      {
        type: 'setLoading',
        dataId: 168845946530283940,
        options: {
          compId: 'Table_311334',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '244417',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading28.params =
      [
        {
          title: '事件入参',
          name: 'options_399369',
          value: '$options_399369$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading28, { options_399369 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource38: any = [
      {
        type: 'reloadDataSource',
        dataId: 168846039366416960,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '915671',
          pageJsonId: '4868135',
          dataSourceId: 168845933318073600,
          dataSourceName: 'qryDcOaUserPageByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '783746',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '432891',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '0263444',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '199887',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '67011',
                  code: 'usrLogin',
                  name: 'usrLogin',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.usrLogin',
                  value: {
                    type: ['form', 'Form_012094', 'getFieldsValue'],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '3486798',
                  code: 'usrLastName',
                  name: 'usrLastName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.usrLastName',
                  value: {
                    type: ['form', 'Form_012094', 'getFieldsValue'],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '6977632',
                  code: 'usrUdfMobile',
                  name: 'usrUdfMobile',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.usrUdfMobile',
                  value: {
                    type: ['form', 'Form_012094', 'getFieldsValue'],
                    code: 'usrUdfMobile',
                  },
                },
                {
                  attrId: '143776',
                  code: 'usrKind',
                  name: 'usrKind',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.usrKind',
                  value: {
                    type: ['form', 'Form_012094', 'getFieldsValue'],
                    code: 'usrKind',
                  },
                },
                {
                  attrId: '2646804',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageNum',
                },
                {
                  attrId: '882702',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageSize',
                },
                {
                  attrId: '5187166',
                  code: 'usrKey',
                  name: 'usrKey',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.usrKey',
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [
          {
            type: 'clearValue',
            dataId: 168846039366536200,
            options: {
              compId: 'Input_3889064',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Input',
              id: '057414',
            },
            line_number: 3,
          },
          {
            type: 'clearValue',
            dataId: 168846039366530700,
            options: {
              compId: 'Input_33684855',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Input',
              id: '2850986',
            },
            line_number: 4,
          },
          {
            type: 'setLoading',
            dataId: 168846039366507680,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '3047235',
              loading: false,
            },
            line_number: 5,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 168846039366523780,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '4627392',
              loading: false,
            },
            line_number: 6,
          },
        ],
      },
    ];
    eventDatareloadDataSource38.params =
      [
        {
          title: '事件入参',
          name: 'options_399369',
          value: '$options_399369$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource38,
      { options_399369 },
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
    const eventDataokCallbackData: any = [
      {
        type: 'okCallbackData',
        dataId: 168860982471969470,
        options: {
          compId: 'okCallbackData',
          compName: 'page',
          id: '28555',
          pageJsonId: '084715',
          params: '$data.userData$',
        },
        line_number: 1,
      },
    ];
    eventDataokCallbackData.params = [] || [];
    CMDGenerator(eventDataokCallbackData, {}, 'okCallbackData', {
      id: 'okCallbackData',
      name: 'okCallbackData',
      type: 'okCallbackData',
      platform: 'undefined',
    });
    const eventDatacloseModal70: any = [
      {
        type: 'closeModal',
        dataId: 168861012208135140,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '467402',
          pageJsonId: '084715',
        },
        line_number: 2,
      },
    ];
    eventDatacloseModal70.params = [] || [];
    CMDGenerator(eventDatacloseModal70, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal71: any = [
      {
        type: 'closeModal',
        dataId: '841799_1',
        options: { compId: 'page', compName: 'page', id: '718173' },
        line_number: 1,
      },
    ];
    eventDatacloseModal71.params = [] || [];
    CMDGenerator(eventDatacloseModal71, {}, 'closeModal', {
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
      className="__CustomClass_084715__"
    >
      <View
        className="View_View_084715_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_084715_1',
          uid: 'View_084715_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_084715_1')}
        {...injectData}
      >
        <Card
          name={'授权审批'}
          cardIconType={'middle'}
          title={'授权审批'}
          bordered={true}
          size={'default'}
          hasHeader={false}
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
            id: 'Card_065792',
            uid: 'Card_065792',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          onClickBtn1={(e: any) => {
            const forms144 = getFormByCompId('Form_31_1121_054627', refs);
            // 支持循环容器中的表单重置
            (Array.isArray(forms144) ? forms144 : [forms144]).forEach((form) =>
              form?.resetFields(),
            );
            const eventDatasetDisable146: any = [
              {
                type: 'setDisable',
                dataId: 168784420471975500,
                options: {
                  compId: [
                    'Input_usrLastName_037923_275147',
                    'Input_usrFirstName_8337786_578625',
                    'Input_usrLogin_433893_90121',
                    'Select_118609',
                    'Input_usrUdfMobile_600937_4160645',
                    'Input_usrEmail_0709186_16864',
                    'Button_269697',
                    'Button_541288',
                    'Select_551558',
                  ],
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Form',
                  id: '953491',
                  disabled: '',
                  compid: [
                    'Input_usrLastName_037923_275147',
                    'Input_usrFirstName_8337786_578625',
                    'Input_usrLogin_433893_90121',
                    'Select_118609',
                    'Input_usrUdfMobile_600937_4160645',
                    'Input_usrEmail_0709186_16864',
                    'Button_269697',
                    'Button_541288',
                    'Select_551558',
                  ],
                },
                line_number: 2,
              },
            ];
            eventDatasetDisable146.params =
              [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetDisable146, { e }, 'setDisable', {
              id: 'setDisable',
              name: 'setDisable',
              type: 'setDisable',
              platform: 'pc',
            });
            const eventDatasetDisable147: any = [
              {
                type: 'setDisable',
                dataId: 168791623597497120,
                options: {
                  compId: [
                    'Input_usrStatus_233963_5067494',
                    'Button_578183',
                    'Button_789349',
                    'Input_7683',
                    'Button_302831',
                    'Form_493328_308943',
                    'Button_213218_267197',
                    'Button_221995_112914',
                    'Button_8258636_313289',
                    'Form_4812867',
                    'Input_514473',
                    'Input_272419',
                    'Button_556714',
                    'Button_087538',
                    'Button_8990255',
                    'Input_485159_451983',
                    'Input_4717291_1771768',
                  ],
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Form',
                  id: '072144',
                  disabled: 'true',
                  compid: [
                    'Input_usrStatus_233963_5067494',
                    'Button_578183',
                    'Button_789349',
                    'Input_7683',
                    'Button_302831',
                    'Form_493328_308943',
                    'Button_213218_267197',
                    'Button_221995_112914',
                    'Button_8258636_313289',
                    'Form_4812867',
                    'Input_514473',
                    'Input_272419',
                    'Button_556714',
                    'Button_087538',
                    'Button_8990255',
                    'Input_485159_451983',
                    'Input_4717291_1771768',
                  ],
                },
                line_number: 3,
              },
            ];
            eventDatasetDisable147.params =
              [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetDisable147, { e }, 'setDisable', {
              id: 'setDisable',
              name: 'setDisable',
              type: 'setDisable',
              platform: 'pc',
            });
            const eventDatasetActiveTabPane6: any = [
              {
                type: 'setActiveTabPane',
                dataId: 168784423415363600,
                options: {
                  compId: 'Tabs_852728',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Tabs',
                  id: '404733',
                  paramsObj: { activiKey: '1' },
                  paramsObjKeyValueMap: { activiKey: '1' },
                },
                line_number: 4,
              },
            ];
            eventDatasetActiveTabPane6.params =
              [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatasetActiveTabPane6,
              { e },
              'setActiveTabPane',
              {
                id: 'setActiveTabPane',
                name: 'setActiveTabPane',
                type: 'setActiveTabPane',
                platform: 'pc',
              },
            );
            const eventDatasetValue37: any = [
              {
                type: 'setValue',
                dataId: 168791432662050720,
                options: {
                  compId: 'Input_usrStatus_233963_5067494',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Select',
                  id: '798825',
                  valueList: { Input_usrStatus_233963_5067494: 'Active' },
                },
                line_number: 5,
                callback1: [],
              },
            ];
            eventDatasetValue37.params =
              [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetValue37, { e }, 'setValue', {
              id: 'setValue',
              name: 'setValue',
              type: 'setValue',
              platform: 'pc',
            });
          }}
          onClickBtn2={(e: any) => {
            const eventDatagetTableSelectedKey74: any = [
              {
                type: 'getTableSelectedKey',
                dataId: 166269001033683070,
                options: {
                  compId: 'Table_219745',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Table',
                  id: '661594',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '91961',
                        options: {
                          context: '$selectedRowKeys_661594$',
                          operate: 'notEmpty',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166269003465262000,
                    elseIfs: [],
                    line_number: 2,
                    callback1: [
                      {
                        type: 'showModal',
                        dataId: 166269014351427780,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '5668367',
                          pageJsonId: '4868135',
                          type: 'confirm',
                          title: '确定要删除该属性吗？',
                          content: '该操作为物理删除，请谨慎操作！',
                          okText: '确定',
                          cancelText: '取消',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166269014351411460,
                            options: {
                              compId: 'Table_219745',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '947292',
                              loading: true,
                            },
                            line_number: 4,
                          },
                          {
                            type: 'apiRequest',
                            dataId: 166269014351415500,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '555367',
                              pageJsonId: '4868135',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'delBatchDcPostUserRel',
                              _apiCode: 'delBatchDcPostUserRel',
                              _source: 'rhin',
                              _serviceId: '885347534908424192',
                              _serviceTitle:
                                '批量删除岗位人员关系-zzz: delBatchDcPostUserRel',
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
                                  dataKey: '555367_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '555367_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '555367_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'postUserRelIds',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.postUserRelIds',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.postUserRelIds',
                                      dataKey: '555367_body.postUserRelIds',
                                      value: {
                                        type: ['customize'],
                                        code: '$JSON.stringify(selectedRowKeys_661594)$',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '555367_body',
                                },
                              ],
                              _sourceName: '批量删除岗位人员关系-zzz',
                            },
                            line_number: 5,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166269014351413760,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '555645',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshUserPostRelTable',
                                },
                                line_number: 6,
                                callback1: [],
                                callback2: [],
                              },
                              {
                                type: 'setLoading',
                                dataId: 166269014351418750,
                                options: {
                                  compId: 'Table_219745',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '425615',
                                  loading: false,
                                },
                                line_number: 7,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 166269014351435620,
                                options: {
                                  compId: 'Table_219745',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '9527444',
                                  loading: false,
                                },
                                line_number: 8,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '599977',
                        options: {
                          context: '$selectedRowKeys_661594$',
                          operate: 'empty',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166269015117616930,
                    elseIfs: [],
                    line_number: 9,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166269021652461980,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '641424',
                          pageJsonId: '4868135',
                          type: 'info',
                          value: '请先选择需要删除的关联人员',
                        },
                        line_number: 10,
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatagetTableSelectedKey74.params =
              [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatagetTableSelectedKey74,
              { e },
              'getTableSelectedKey',
              {
                id: 'getTableSelectedKey',
                name: 'getTableSelectedKey',
                type: 'getTableSelectedKey',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_065792')}
          {...injectData}
        >
          <Form
            name={'人员查询表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_012094',
              uid: 'Form_012094',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_012094')}
            {...injectData}
          >
            <Input
              name={'登录账号'}
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
              placeholder={'请输入'}
              formItemIndex={0}
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
                id: 'Input_776408',
                uid: 'Input_776408',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc617: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshUserTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc617.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc617, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_776408')}
              {...injectData}
            />
            <Input
              name={'姓名'}
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
              placeholder={'请输入'}
              formItemIndex={1}
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
                id: 'Input_913217',
                uid: 'Input_913217',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc618: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshUserTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc618.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc618, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_913217')}
              {...injectData}
            />
            <View
              className="View_View_98842"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_98842',
                uid: 'View_98842',
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
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_98842')}
              {...injectData}
            />
            <Input
              name={'手机号码'}
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
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'usrUdfMobile'}
              regexp={[]}
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
                id: 'Input_801338',
                uid: 'Input_801338',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc619: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167897422888799400,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '44915',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshUserTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc619.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc619, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_801338')}
              {...injectData}
            />
            <Select
              name={'账号类型'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'usrKind'}
              formItemIndex={4}
              dataSource={[
                { id: '189377', label: 'OA', value: 'OA' },
                { id: '6774107', label: 'BOP', value: 'BOP' },
                { id: '178122', label: 'IOP', value: 'IOP' },
              ]}
              $$componentItem={{
                id: 'Select_142601',
                uid: 'Select_142601',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_142601')}
              {...injectData}
            />
            <View
              className="View_View_540917"
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_540917',
                uid: 'View_540917',
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
                  formItemIndex: 5,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_540917')}
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
                  id: 'Button_3922038',
                  uid: 'Button_3922038',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc620: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166158469460298370,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '6966413',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshUserTable',
                        customFuncParams: '$data.local_vars$',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc620.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc620,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_3922038')}
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
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_620306',
                  uid: 'Button_620306',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 12px 0px 12px' }}
                onClick={(e: any) => {
                  const forms146 = getFormByCompId('Form_012094', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms146) ? forms146 : [forms146]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_620306')}
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'用户列表'}
            isFlexColumn={false}
            pageSize={5}
            current={data?.qryDcOaUserPageByReq?.resultData?.current}
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
                title: '用户ID',
                key: 'usrKey',
                dataIndex: 'usrKey',
                id: '939022',
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
                title: '登录账号',
                key: 'usrLogin',
                dataIndex: 'usrLogin',
                id: '5001305',
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
                title: '姓名',
                key: 'usrLastName',
                dataIndex: 'usrLastName',
                id: '2801434',
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
                title: '手机号',
                key: 'usrUdfMobile',
                dataIndex: 'usrUdfMobile',
                id: '8883801',
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
                title: '账号类型',
                key: 'usrKind',
                dataIndex: 'usrKind',
                id: '11289326',
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
                title: '创建时间',
                key: 'usrCreated',
                dataIndex: 'usrCreate',
                className: 'divider',
                id: '5129749',
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
                key: 'usrStatus',
                dataIndex: 'usrStatus',
                id: '434239',
                customRendering:
                  '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  var fontColor = "#0000FF";  if (row.usrStatus === "Inactive") {    fontColor = "#FF0000";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                originCustomRendering: [
                  ' /**',
                  ' * 自定义渲染函数',
                  ' * @param {String} text 单元格显示的文字内容',
                  ' * @param {Object} row 行数据对象',
                  ' * @param {number} index 行索引',
                  ' * @returns 渲染的内容：可以是 html 模板字符串',
                  ' */',
                  'function renderFunc(text, row, index) {',
                  '        let fontColor = "#0000FF";',
                  '',
                  '      if (row.usrStatus === "Inactive") {',
                  '        fontColor = "#FF0000";',
                  '      }',
                  '    ',
                  '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                  '}',
                ],
                className: 'divider',
                staticDataSource: [
                  { id: '7432879', label: '在用', value: 'Active' },
                  { id: '461465', label: '失效', value: 'Inactive' },
                ],
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
            rowKeyType={'auto'}
            editMode={'single'}
            selectType={'radio'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'radio' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'orgUserRelId'}
            dataSource={data?.qryDcOaUserPageByReq?.resultData?.records}
            total={data?.qryDcOaUserPageByReq?.resultData?.total}
            fieldName={'data.qryAttrSpecPage.resultData.total'}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.qryDcOaUserPageByReq.resultData.records'
            }
            $$componentItem={{
              id: 'Table_219745',
              uid: 'Table_219745',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode718: any = [
                {
                  type: 'customActionCode',
                  dataId: 168791644769990620,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '74135275',
                    pageJsonId: '4868135',
                    code: 'function main(data,state,success,fail){var item={usrKey:row.usrKey,usrStatus:"Inactive"};success([item])};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 168791651706224740,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '955941',
                        pageJsonId: '4868135',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'saveOrUpdateDcOaUserBatch',
                        _apiCode: 'saveOrUpdateDcOaUserBatch',
                        _source: 'rhin',
                        _sourceName: '批量新增/修改OA工号信息-hyj',
                        _serviceId: '990807998886240256',
                        _serviceTitle:
                          '批量新增/修改OA工号信息-hyj: saveOrUpdateDcOaUserBatch',
                        valueType: 'object',
                        params: 'object',
                        apiRequestSetParams: [
                          {
                            code: 'root',
                            name: '根节点',
                            attrType: 'object',
                            children: [
                              {
                                code: 'header',
                                name: '请求头参数',
                                attrType: 'object',
                                _id: 'root.header',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-0',
                                id: 'root.header',
                                dataKey: '955941_root.header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'root.path',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-1',
                                id: 'root.path',
                                dataKey: '955941_root.path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'root.query',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-2',
                                id: 'root.query',
                                dataKey: '955941_root.query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'userDTOList',
                                    attrType: 'objectArray',
                                    children: [
                                      {
                                        code: 'usrKey',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrKey',
                                        compType: 'Input',
                                        name: 'usrKey',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-0',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrKey',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrKey',
                                      },
                                      {
                                        code: 'usrLastName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrLastName',
                                        compType: 'Input',
                                        name: 'usrLastName',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-1',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrLastName',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrLastName',
                                      },
                                      {
                                        code: 'usrFirstName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrFirstName',
                                        compType: 'Input',
                                        name: 'usrFirstName',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-2',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrFirstName',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrFirstName',
                                      },
                                      {
                                        code: 'usrLogin',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrLogin',
                                        compType: 'Input',
                                        name: 'usrLogin',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-3',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrLogin',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrLogin',
                                      },
                                      {
                                        code: 'usrUdfSex',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrUdfSex',
                                        compType: 'Input',
                                        name: 'usrUdfSex',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-4',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrUdfSex',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrUdfSex',
                                      },
                                      {
                                        code: 'usrUdfMobile',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrUdfMobile',
                                        compType: 'Input',
                                        name: 'usrUdfMobile',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-5',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrUdfMobile',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrUdfMobile',
                                      },
                                      {
                                        code: 'usrEmail',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrEmail',
                                        compType: 'Input',
                                        name: 'usrEmail',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-6',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrEmail',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrEmail',
                                      },
                                      {
                                        code: 'usrStatus',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.userDTOList.usrStatus',
                                        compType: 'Input',
                                        name: 'usrStatus',
                                        parents: [
                                          'root',
                                          'body',
                                          'userDTOList',
                                        ],
                                        parentType: 'objectArray',
                                        parentKey: '0-3-0',
                                        key: '0-3-0-7',
                                        parentCode: 'userDTOList',
                                        id: 'root.body.userDTOList.usrStatus',
                                        dataKey:
                                          '955941_root.body.userDTOList.usrStatus',
                                      },
                                    ],
                                    _id: 'root.body.userDTOList',
                                    compType: 'Input',
                                    name: 'userDTOList',
                                    parents: ['root', 'body'],
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-0',
                                    id: 'root.body.userDTOList',
                                    dataKey: '955941_root.body.userDTOList',
                                    value: {
                                      type: ['context', '$data_74135275$'],
                                      code: '',
                                    },
                                  },
                                ],
                                _id: 'root.body',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-3',
                                id: 'root.body',
                                dataKey: '955941_root.body',
                              },
                            ],
                            _id: 'root',
                            compType: 'Input',
                            isRoot: true,
                            parents: [],
                            key: '0',
                            id: 'root',
                            dataKey: '955941_root',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '465052',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_955941.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168791654931381540,
                          elseIfs: [],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 168793368762286500,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '916367',
                                pageJsonId: '4868135',
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'delDcOaUserRelByOaUserId',
                                _apiCode: 'delDcOaUserRelByOaUserId',
                                _source: 'rhin',
                                _sourceName:
                                  '根据OA工号删除对应的BOP关联关系-hyj',
                                _serviceId: '991228082817523712',
                                _serviceTitle:
                                  '根据OA工号删除对应的BOP关联关系-hyj: delDcOaUserRelByOaUserId',
                                valueType: 'object',
                                params: 'object',
                                apiRequestSetParams: [
                                  {
                                    code: 'root',
                                    name: '根节点',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'header',
                                        name: '请求头参数',
                                        attrType: 'object',
                                        _id: 'root.header',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-0',
                                        id: 'root.header',
                                        dataKey: '916367_root.header',
                                      },
                                      {
                                        code: 'path',
                                        name: '请求路径参数',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'oaUserId',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'T',
                                            defaultValue: '',
                                            _id: 'root.path.oaUserId',
                                            compType: 'Input',
                                            parents: ['root', 'path'],
                                            parentType: 'object',
                                            parentKey: '0-1',
                                            key: '0-1-0',
                                            id: 'root.path.oaUserId',
                                            dataKey:
                                              '916367_root.path.oaUserId',
                                            value: {
                                              type: ['context', '$row$'],
                                              hideAttr: false,
                                              code: 'usrLogin',
                                            },
                                          },
                                        ],
                                        _id: 'root.path',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-1',
                                        id: 'root.path',
                                        dataKey: '916367_root.path',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        _id: 'root.query',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-2',
                                        id: 'root.query',
                                        dataKey: '916367_root.query',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        _id: 'root.body',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-3',
                                        id: 'root.body',
                                        dataKey: '916367_root.body',
                                      },
                                    ],
                                    _id: 'root',
                                    compType: 'Input',
                                    isRoot: true,
                                    parents: [],
                                    key: '0',
                                    id: 'root',
                                    dataKey: '916367_root',
                                  },
                                ],
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '2939796',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$reply_916367?.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 168793372404714700,
                                  elseIfs: [],
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'showMessage',
                                      dataId: 168793374586563520,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '67640795',
                                        pageJsonId: '4868135',
                                        type: 'success',
                                        value: '删除成功！',
                                      },
                                      line_number: 6,
                                    },
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 168793375344340400,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '1756786',
                                        pageJsonId: '4868135',
                                        customFuncName: 'refreshUserTable',
                                        customFuncParams: 'object',
                                      },
                                      line_number: 7,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'setDisable',
                                      dataId: 168793375836204960,
                                      options: {
                                        compId: [
                                          'Form_493328_308943',
                                          'Input_485159_451983',
                                          'Input_4717291_1771768',
                                          'Button_213218_267197',
                                          'Button_221995_112914',
                                          'Button_8258636_313289',
                                          'Form_4812867',
                                          'Button_556714',
                                          'Button_087538',
                                          'Button_8990255',
                                          'Input_272419',
                                          'Input_514473',
                                          'Form_148709',
                                          'Input_3889064',
                                          'Input_33684855',
                                          'Button_224226',
                                          'Button_499055',
                                          'Button_578183',
                                          'Button_789349',
                                          'Form_635031',
                                          'Button_302831',
                                        ],
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Form',
                                        id: '29917',
                                        disabled: 'true',
                                        compid: [
                                          'Form_493328_308943',
                                          'Input_485159_451983',
                                          'Input_4717291_1771768',
                                          'Button_213218_267197',
                                          'Button_221995_112914',
                                          'Button_8258636_313289',
                                          'Form_4812867',
                                          'Button_556714',
                                          'Button_087538',
                                          'Button_8990255',
                                          'Input_272419',
                                          'Input_514473',
                                          'Form_148709',
                                          'Input_3889064',
                                          'Input_33684855',
                                          'Button_224226',
                                          'Button_499055',
                                          'Button_578183',
                                          'Button_789349',
                                          'Form_635031',
                                          'Button_302831',
                                        ],
                                      },
                                      line_number: 8,
                                    },
                                  ],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode718.params =
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
                eventDatacustomActionCode718,
                { rowId, row, index },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading210: any = [
                {
                  type: 'setLoading',
                  dataId: 166270972999910270,
                  options: {
                    compId: 'Table_219745',
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Table',
                    id: '699238',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading210.params =
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
                eventDatasetLoading210,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatareloadDataSource107: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166270361819417700,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '700099',
                    pageJsonId: '4868135',
                    dataSourceId: 168845933318073600,
                    dataSourceName: 'qryDcOaUserPageByReq',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '783746',
                        code: 'header',
                        name: '请求头参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        key: 'header',
                      },
                      {
                        attrId: '432891',
                        code: 'path',
                        name: '请求路径参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        key: 'path',
                      },
                      {
                        attrId: '0263444',
                        code: 'query',
                        name: 'URL 参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        key: 'query',
                      },
                      {
                        attrId: '199887',
                        code: 'body',
                        name: '请求体',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        children: [
                          {
                            attrId: '67011',
                            code: 'usrLogin',
                            name: 'usrLogin',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.usrLogin',
                            value: {
                              type: ['form', 'Form_012094', 'getFieldsValue'],
                              code: 'usrLogin',
                            },
                          },
                          {
                            attrId: '3486798',
                            code: 'usrLastName',
                            name: 'usrLastName',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.usrLastName',
                            value: {
                              type: ['form', 'Form_012094', 'getFieldsValue'],
                              code: 'usrLastName',
                            },
                          },
                          {
                            attrId: '6977632',
                            code: 'usrUdfMobile',
                            name: 'usrUdfMobile',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.usrUdfMobile',
                            value: {
                              type: ['form', 'Form_012094', 'getFieldsValue'],
                              code: 'usrUdfMobile',
                            },
                          },
                          {
                            attrId: '143776',
                            code: 'usrKind',
                            name: 'usrKind',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.usrKind',
                            value: {
                              type: ['form', 'Form_012094', 'getFieldsValue'],
                              code: 'usrKind',
                            },
                          },
                          {
                            attrId: '2646804',
                            code: 'pageNum',
                            name: 'pageNum',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '882702',
                            code: 'pageSize',
                            name: 'pageSize',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '5187166',
                            code: 'usrKey',
                            name: 'usrKey',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'body.usrKey',
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'setLoading',
                      dataId: 166270973585954080,
                      options: {
                        compId: 'Table_219745',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Table',
                        id: '991327',
                        loading: false,
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 166270973715261800,
                      options: {
                        compId: 'Table_219745',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Table',
                        id: '185867',
                        loading: false,
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatareloadDataSource107.params =
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
                eventDatareloadDataSource107,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal232: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166270379925162180,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '680228',
                    pageJsonId: '4868135',
                    modalname: '/detailOaUser',
                    pageId: '885082440567881728',
                    paramsObj: {
                      bizId: '$rowId$',
                      sceneCode: 'V',
                      dcOaUser: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      bizId: '$rowId$',
                      sceneCode: 'V',
                      dcOaUser: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal232.params =
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
                eventDatashowCustomModal232,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
              const eventDatasetDataSource206: any = [
                {
                  type: 'setDataSource',
                  dataId: 167888006087050140,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '5642315',
                    pageJsonId: '4868135',
                    dataSourceId: 166158805345111460,
                    dataSourceName: 'local_vars',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '2663016',
                        code: 'row_usr_key',
                        name: '当前选中行usrKey',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['context', '$row$'],
                          code: 'usrKey',
                          hideAttr: false,
                        },
                      },
                      {
                        attrId: '121923',
                        code: 'row_usr_login',
                        name: '当前选中行usrLogin',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['context', '$row$'],
                          code: 'usrLogin',
                          hideAttr: false,
                        },
                      },
                      {
                        attrId: '62575',
                        code: 'row_usr_last_name',
                        name: '当前选中行usrLastName',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['context', '$row$'],
                          code: 'usrLastName',
                          hideAttr: false,
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'clearValue',
                      dataId: 167888006087133120,
                      options: {
                        compId: 'Input_3889064',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Input',
                        id: '877237',
                      },
                      line_number: 3,
                    },
                    {
                      type: 'clearValue',
                      dataId: 167888006087193250,
                      options: {
                        compId: 'Input_33684855',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Input',
                        id: '048904',
                      },
                      line_number: 4,
                    },
                    {
                      type: 'reloadDataSource',
                      dataId: 167888006087138720,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '3047675',
                        pageJsonId: '4868135',
                        dataSourceId: 166270738136718940,
                        dataSourceName: 'qryDcPostInfoByUsrKey',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '599949',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                          },
                          {
                            attrId: '3751144',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                          },
                          {
                            attrId: '7799145',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                          },
                          {
                            attrId: '2466545',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '161157',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: {
                                  type: 'static',
                                  value: 'pageSize',
                                },
                                type: 'long',
                                key: 'body.pageSize',
                                value: { type: [], code: 'pageSize' },
                              },
                              {
                                attrId: '5926227',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: {
                                  type: 'static',
                                  value: 'pageNum',
                                },
                                type: 'long',
                                key: 'body.pageNum',
                                value: { type: [], code: 'pageNum' },
                              },
                              {
                                attrId: '4958816',
                                code: 'postCode',
                                name: 'postCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postCode',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709',
                                    'getFieldsValue',
                                  ],
                                  code: 'postCode',
                                },
                              },
                              {
                                attrId: '207693',
                                code: 'postName',
                                name: 'postName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postName',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709',
                                    'getFieldsValue',
                                  ],
                                  code: 'postName',
                                },
                              },
                              {
                                attrId: '144303',
                                code: 'usrKey',
                                name: 'usrKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.usrKey',
                                value: {
                                  type: ['context', '$row$'],
                                  hideAttr: false,
                                  code: 'usrKey',
                                },
                              },
                            ],
                            key: 'body',
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '966637',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '72217525',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '230439',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '9542645',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '187334',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '924569',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '039357',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '6339666',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '832981',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '722384',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '044174',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '232498',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                  },
                                ],
                              },
                              {
                                attrId: '418533',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '011619',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '860169',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '575352',
                                    code: 'statusDate',
                                    name: 'statusDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '508454',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '323099',
                                    code: 'areaId',
                                    name: 'areaId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2659633',
                                    code: 'postDesc',
                                    name: 'postDesc',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '512767',
                                    code: 'postUserRelId',
                                    name: 'postUserRelId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '629409',
                                    code: 'postName',
                                    name: 'postName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '614525',
                                    code: 'postCode',
                                    name: 'postCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '857535',
                                    code: 'statusCd',
                                    name: 'statusCd',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '005997',
                                    code: 'remark',
                                    name: 'remark',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '3095398',
                                    code: 'postId',
                                    name: 'postId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '268628',
                                    code: 'lanId',
                                    name: 'lanId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '268909',
                                    code: 'provinceId',
                                    name: 'provinceId',
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
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'callSelfFunc',
                      dataId: 167888006087187740,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '577012',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshOaUserRefTable',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'console',
                      dataId: 167888006087149000,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '879208',
                        pageJsonId: '4868135',
                        value: ['$data.local_vars$'],
                      },
                      line_number: 7,
                    },
                    {
                      type: 'console',
                      dataId: 167888006087106850,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '001714',
                        pageJsonId: '4868135',
                        value: ['选中行对象：', '$row$'],
                      },
                      line_number: 8,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource206.params =
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
                eventDatasetDataSource206,
                { rowId, row, index },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
              const eventDatasetCurrentFormValues31: any = [
                {
                  type: 'setCurrentFormValues',
                  dataId: 167888006951967650,
                  options: {
                    compId: 'Form_31_1121_054627',
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Form',
                    id: '24286',
                    params: '$selectedRows[0]$',
                  },
                  line_number: 9,
                },
              ];
              eventDatasetCurrentFormValues31.params =
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
                eventDatasetCurrentFormValues31,
                { rowId, row, index },
                'setCurrentFormValues',
                {
                  id: 'setCurrentFormValues',
                  name: 'setCurrentFormValues',
                  type: 'setCurrentFormValues',
                  platform: 'pc',
                },
              );
              const eventDatasetDisable148: any = [
                {
                  type: 'setDisable',
                  dataId: 167888007817412860,
                  options: {
                    compId: [
                      'Form_493328_308943',
                      'Input_485159_451983',
                      'Input_4717291_1771768',
                      'Button_213218_267197',
                      'Button_221995_112914',
                      'Button_8258636_313289',
                    ],
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Form',
                    id: '983028',
                    disabled: '',
                    compid: [
                      'Form_493328_308943',
                      'Input_485159_451983',
                      'Input_4717291_1771768',
                      'Button_213218_267197',
                      'Button_221995_112914',
                      'Button_8258636_313289',
                    ],
                  },
                  line_number: 10,
                },
              ];
              eventDatasetDisable148.params =
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
                eventDatasetDisable148,
                { rowId, row, index },
                'setDisable',
                {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                },
              );
            }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatasetActiveTabPane7: any = [
                {
                  type: 'setActiveTabPane',
                  dataId: 168783531082078000,
                  options: {
                    compId: 'Tabs_852728',
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Tabs',
                    id: '474384',
                    paramsObj: { activiKey: '1' },
                    paramsObjKeyValueMap: { activiKey: '1' },
                  },
                  line_number: 1,
                },
              ];
              eventDatasetActiveTabPane7.params =
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
                eventDatasetActiveTabPane7,
                { rowId, row, index },
                'setActiveTabPane',
                {
                  id: 'setActiveTabPane',
                  name: 'setActiveTabPane',
                  type: 'setActiveTabPane',
                  platform: 'pc',
                },
              );
              const eventDatasetDataSource207: any = [
                {
                  type: 'setDataSource',
                  dataId: 168785773833595780,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '397041',
                    pageJsonId: '4868135',
                    dataSourceId: 166158805345111460,
                    dataSourceName: 'local_vars',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '2663016',
                        code: 'row_usr_key',
                        name: '当前选中行usrKey',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['context', '$row$'],
                          code: 'usrKey',
                          hideAttr: false,
                        },
                      },
                      {
                        attrId: '121923',
                        code: 'row_usr_login',
                        name: '当前选中行usrLogin',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['context', '$row$'],
                          code: 'usrLogin',
                          hideAttr: false,
                        },
                      },
                      {
                        attrId: '62575',
                        code: 'row_usr_last_name',
                        name: '当前选中行usrLastName',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['context', '$row$'],
                          code: 'usrLastName',
                          hideAttr: false,
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'clearValue',
                      dataId: 168785773833578750,
                      options: {
                        compId: 'Input_3889064',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Input',
                        id: '6907293',
                      },
                      line_number: 3,
                    },
                    {
                      type: 'clearValue',
                      dataId: 168785773833526560,
                      options: {
                        compId: 'Input_33684855',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Input',
                        id: '284935',
                      },
                      line_number: 4,
                    },
                    {
                      type: 'reloadDataSource',
                      dataId: 168785773833544640,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '882067',
                        pageJsonId: '4868135',
                        dataSourceId: 166270738136718940,
                        dataSourceName: 'qryDcPostInfoByUsrKey',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '599949',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                          },
                          {
                            attrId: '3751144',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                          },
                          {
                            attrId: '7799145',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                          },
                          {
                            attrId: '2466545',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '161157',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: {
                                  type: 'static',
                                  value: 'pageSize',
                                },
                                type: 'long',
                                key: 'body.pageSize',
                                value: { type: [], code: 'pageSize' },
                              },
                              {
                                attrId: '5926227',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: {
                                  type: 'static',
                                  value: 'pageNum',
                                },
                                type: 'long',
                                key: 'body.pageNum',
                                value: { type: [], code: 'pageNum' },
                              },
                              {
                                attrId: '4958816',
                                code: 'postCode',
                                name: 'postCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postCode',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709',
                                    'getFieldsValue',
                                  ],
                                  code: 'postCode',
                                },
                              },
                              {
                                attrId: '207693',
                                code: 'postName',
                                name: 'postName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postName',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709',
                                    'getFieldsValue',
                                  ],
                                  code: 'postName',
                                },
                              },
                              {
                                attrId: '144303',
                                code: 'usrKey',
                                name: 'usrKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.usrKey',
                                value: {
                                  type: ['context', '$row$'],
                                  hideAttr: false,
                                  code: 'usrKey',
                                },
                              },
                            ],
                            key: 'body',
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '966637',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '72217525',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '230439',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '9542645',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '187334',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '924569',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '039357',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '6339666',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '832981',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '722384',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '044174',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '232498',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                  },
                                ],
                              },
                              {
                                attrId: '418533',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '011619',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '860169',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '575352',
                                    code: 'statusDate',
                                    name: 'statusDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '508454',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '323099',
                                    code: 'areaId',
                                    name: 'areaId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2659633',
                                    code: 'postDesc',
                                    name: 'postDesc',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '512767',
                                    code: 'postUserRelId',
                                    name: 'postUserRelId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '629409',
                                    code: 'postName',
                                    name: 'postName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '614525',
                                    code: 'postCode',
                                    name: 'postCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '857535',
                                    code: 'statusCd',
                                    name: 'statusCd',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '005997',
                                    code: 'remark',
                                    name: 'remark',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '3095398',
                                    code: 'postId',
                                    name: 'postId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '268628',
                                    code: 'lanId',
                                    name: 'lanId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '268909',
                                    code: 'provinceId',
                                    name: 'provinceId',
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
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'callSelfFunc',
                      dataId: 168785773833585150,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '943782',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshOaUserRefTable',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'callSelfFunc',
                      dataId: 168785773833576130,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '91185',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshOaRoleTable',
                        customFuncParams: 'object',
                      },
                      line_number: 7,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '342225',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$row.usrKind$',
                            operate: '==',
                            manualValue: 'OA',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 168791552178742900,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 168791556023882530,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 168791563263869000,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 168791563263834020,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 168791563263891000,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                },
                              ],
                              todoOptions: [
                                'selectServerDataSource',
                                'dataSourceReloadFilter',
                              ],
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '292825',
                                pageJsonId: '4868135',
                                dataSourceId: 168785438790334820,
                                dataSourceName: 'qryBopUserIdByOaUserIdPage',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '973192',
                                    code: 'header',
                                    name: '请求头参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8256182',
                                    code: 'path',
                                    name: '请求路径参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '684327',
                                    code: 'query',
                                    name: 'URL 参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '567351',
                                    code: 'body',
                                    name: '请求体',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    children: [
                                      {
                                        attrId: '873181',
                                        code: 'pageSize',
                                        name: '新增节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '5',
                                        },
                                        value: {
                                          type: ['customize'],
                                          code: '0',
                                        },
                                      },
                                      {
                                        attrId: '1052573',
                                        code: 'pageNum',
                                        name: '新增节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '1',
                                        },
                                        value: {
                                          type: ['customize'],
                                          code: '1',
                                        },
                                      },
                                      {
                                        attrId: '396546',
                                        code: 'oaUserId',
                                        name: 'OA工号',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['customize'],
                                          code: 'CESHIKONGSHUJU',
                                        },
                                      },
                                      {
                                        attrId: '988078',
                                        code: 'userId',
                                        name: 'BOP工号',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['customize'],
                                          code: '-32585',
                                        },
                                      },
                                    ],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              actionObjId: 'reloadDataSource',
                              actionObjName: 'page',
                              value: 'reloadDataSource',
                              line_number: 11,
                            },
                            {
                              dataName: 'action',
                              dataId: 168791597290310980,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '0474849',
                                disabled: 'true',
                                compid: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                              },
                              actionObjId: 'Button_302831',
                              actionObjName: 'Button',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 12,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'reloadDataSource',
                              dataId: 168791563263869000,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '292825',
                                pageJsonId: '4868135',
                                dataSourceId: 168785438790334820,
                                dataSourceName: 'qryBopUserIdByOaUserIdPage',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '973192',
                                    code: 'header',
                                    name: '请求头参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8256182',
                                    code: 'path',
                                    name: '请求路径参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '684327',
                                    code: 'query',
                                    name: 'URL 参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '567351',
                                    code: 'body',
                                    name: '请求体',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    children: [
                                      {
                                        attrId: '873181',
                                        code: 'pageSize',
                                        name: '新增节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '5',
                                        },
                                        value: {
                                          type: ['customize'],
                                          code: '0',
                                        },
                                      },
                                      {
                                        attrId: '1052573',
                                        code: 'pageNum',
                                        name: '新增节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '1',
                                        },
                                        value: {
                                          type: ['customize'],
                                          code: '1',
                                        },
                                      },
                                      {
                                        attrId: '396546',
                                        code: 'oaUserId',
                                        name: 'OA工号',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['customize'],
                                          code: 'CESHIKONGSHUJU',
                                        },
                                      },
                                      {
                                        attrId: '988078',
                                        code: 'userId',
                                        name: 'BOP工号',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['customize'],
                                          code: '-32585',
                                        },
                                      },
                                    ],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 11,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDisable',
                              dataId: 168791597290310980,
                              options: {
                                compId: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '0474849',
                                disabled: 'true',
                                compid: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                              },
                              line_number: 12,
                            },
                          ],
                        },
                      ],
                      line_number: 8,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 168791555679186500,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '9464752',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshBOPTable',
                            customFuncParams: 'object',
                          },
                          line_number: 9,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'setDisable',
                          dataId: 168791673814454850,
                          options: {
                            compId: [
                              'Button_302831',
                              'Button_578183',
                              'Button_789349',
                              'Input_7683',
                            ],
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Button',
                            id: '999965',
                            disabled: '',
                            compid: [
                              'Button_302831',
                              'Button_578183',
                              'Button_789349',
                              'Input_7683',
                            ],
                          },
                          line_number: 10,
                        },
                      ],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource207.params =
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
                eventDatasetDataSource207,
                { rowId, row, index },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
              const eventDatasetCurrentFormValues32: any = [
                {
                  type: 'setCurrentFormValues',
                  dataId: 168783168638906900,
                  options: {
                    compId: 'Form_31_1121_054627',
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Form',
                    id: '780046',
                    params: '$row$',
                  },
                  line_number: 13,
                },
              ];
              eventDatasetCurrentFormValues32.params =
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
                eventDatasetCurrentFormValues32,
                { rowId, row, index },
                'setCurrentFormValues',
                {
                  id: 'setCurrentFormValues',
                  name: 'setCurrentFormValues',
                  type: 'setCurrentFormValues',
                  platform: 'pc',
                },
              );
              const eventDatasetDisable149: any = [
                {
                  type: 'setDisable',
                  dataId: 168785494069868400,
                  options: {
                    compId: [
                      'Form_493328_308943',
                      'Input_485159_451983',
                      'Input_4717291_1771768',
                      'Button_213218_267197',
                      'Button_221995_112914',
                      'Button_8258636_313289',
                      'Form_4812867',
                      'Button_556714',
                      'Button_087538',
                      'Button_8990255',
                      'Input_272419',
                      'Input_514473',
                      'Form_148709',
                      'Input_3889064',
                      'Input_33684855',
                      'Button_224226',
                      'Button_499055',
                      'Input_usrLastName_037923_275147',
                      'Input_usrFirstName_8337786_578625',
                      'Input_usrLogin_433893_90121',
                      'Select_118609',
                      'Input_usrUdfMobile_600937_4160645',
                      'Input_usrEmail_0709186_16864',
                      'Input_usrStatus_233963_5067494',
                      'Button_269697',
                      'Button_541288',
                    ],
                    compLib: 'comm',
                    pageJsonId: '4868135',
                    compName: 'Form',
                    id: '580807',
                    disabled: '',
                    compid: [
                      'Form_493328_308943',
                      'Input_485159_451983',
                      'Input_4717291_1771768',
                      'Button_213218_267197',
                      'Button_221995_112914',
                      'Button_8258636_313289',
                      'Form_4812867',
                      'Button_556714',
                      'Button_087538',
                      'Button_8990255',
                      'Input_272419',
                      'Input_514473',
                      'Form_148709',
                      'Input_3889064',
                      'Input_33684855',
                      'Button_224226',
                      'Button_499055',
                      'Input_usrLastName_037923_275147',
                      'Input_usrFirstName_8337786_578625',
                      'Input_usrLogin_433893_90121',
                      'Select_118609',
                      'Input_usrUdfMobile_600937_4160645',
                      'Input_usrEmail_0709186_16864',
                      'Input_usrStatus_233963_5067494',
                      'Button_269697',
                      'Button_541288',
                    ],
                  },
                  line_number: 14,
                },
              ];
              eventDatasetDisable149.params =
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
                eventDatasetDisable149,
                { rowId, row, index },
                'setDisable',
                {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                },
              );
              const eventDatasysSetDisable8: any = [
                {
                  type: 'sysSetDisable',
                  dataId: 168791882963201280,
                  options: {
                    compId: ['Select_551558'],
                    compName: 'page',
                    id: '79457173',
                    pageJsonId: '4868135',
                    disabled: 'true',
                    compid: ['Select_551558'],
                  },
                  line_number: 15,
                },
              ];
              eventDatasysSetDisable8.params =
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
                eventDatasysSetDisable8,
                { rowId, row, index },
                'sysSetDisable',
                {
                  id: 'sysSetDisable',
                  name: 'sysSetDisable',
                  type: 'sysSetDisable',
                  platform: 'pc',
                },
              );
            }}
            onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
              // console 168846308758920060
              console.log(selectedRows[0]);
              const eventDatasetDataSource208: any = [
                {
                  type: 'setDataSource',
                  dataId: 168846484469867500,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '846917',
                    pageJsonId: '084715',
                    dataSourceId: 168846483071681660,
                    dataSourceName: 'userData',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '683341',
                        code: 'usrKey',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['context', '$selectedRows[0]$'],
                          hideAttr: false,
                          code: 'usrKey',
                        },
                        _codePath: ['usrKey'],
                        _idpath: ['683341'],
                      },
                      {
                        attrId: '035731',
                        code: 'usrLastName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['context', '$selectedRows[0]$'],
                          hideAttr: false,
                          code: 'usrLastName',
                        },
                        _codePath: ['usrLastName'],
                        _idpath: ['035731'],
                      },
                      {
                        attrId: '334575',
                        code: 'usrLogin',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['usrLogin'],
                        _idpath: ['334575'],
                        value: {
                          type: ['context', '$selectedRows[0]$'],
                          hideAttr: false,
                          code: 'usrLogin',
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 2,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource208.params =
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
                eventDatasetDataSource208,
                { selectedRowKeys, selectedRows },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_219745')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(UserSelectList$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
