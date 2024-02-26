// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '897014700989980672';
const AuditSelectonepostuser$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetTableSelected8: any = [
      {
        type: 'getTableSelected',
        dataId: 16654751526351346,
        options: {
          compId: 'Table_2310769_112',
          compLib: 'comm',
          pageJsonId: '2310769',
          compName: 'Table',
          id: '629279',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2652908',
                options: {
                  context: '$selectedRows_629279[0]$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166547575337347870,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166547581913221950,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166547584743723840,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '711589',
                      pageJsonId: '2310769',
                      type: 'info',
                      value: '请先选择用户',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    line_number: 5,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166547584743723840,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '711589',
                      pageJsonId: '2310769',
                      type: 'info',
                      value: '请先选择用户',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 166547579901272600,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '86645',
                  pageJsonId: '2310769',
                  params: '$selectedRows_629279[0]$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 166547581009457920,
                options: { compId: 'page', compName: 'page', id: '772832' },
                line_number: 4,
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'console',
            dataId: 166547546568744130,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '442732',
              pageJsonId: '2310769',
              value: ['获取选中行数据失败'],
            },
            line_number: 6,
          },
        ],
      },
    ];
    eventDatagetTableSelected8.params = [] || [];
    CMDGenerator(eventDatagetTableSelected8, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal79: any = [
      {
        type: 'closeModal',
        dataId: '285762_1',
        options: { compId: 'page', compName: 'page', id: '059026' },
        line_number: 1,
      },
    ];
    eventDatacloseModal79.params = [] || [];
    CMDGenerator(eventDatacloseModal79, {}, 'closeModal', {
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
    const eventDatasetLoading46: any = [
      {
        type: 'setLoading',
        dataId: 166911839591713700,
        options: {
          compId: 'Table_2310769_112',
          compLib: 'comm',
          pageJsonId: '2310769',
          compName: 'Table',
          id: '5516486',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading46.params = [] || [];
    CMDGenerator(eventDatasetLoading46, {}, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatasetLoading47: any = [
      {
        type: 'setLoading',
        dataId: 166911840397465300,
        options: {
          compId: 'Button_30_121_247817',
          compLib: 'comm',
          pageJsonId: '2310769',
          compName: 'Button',
          id: '0777408',
          loading: true,
        },
        line_number: 2,
      },
    ];
    eventDatasetLoading47.params = [] || [];
    CMDGenerator(eventDatasetLoading47, {}, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatavalidateCurrentForm61: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166911839014238620,
        options: {
          compId: 'Form_318666',
          compLib: 'comm',
          pageJsonId: '2310769',
          compName: 'Form',
          id: '8640698',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadDataSource',
            dataId: 166911839014269600,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '4172494',
              pageJsonId: '2310769',
              dataSourceId: 166547156178955620,
              dataSourceName: 'staffList',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '387121',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'header',
                },
                {
                  attrId: '112909',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'path',
                },
                {
                  attrId: '144517',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'query',
                },
                {
                  attrId: '008336',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '0479918',
                      code: 'postKeyLike',
                      name: 'postKeyLike',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.postKeyLike',
                      value: {
                        type: ['context', '$Form_318666$'],
                        code: 'postKeyLike',
                      },
                    },
                    {
                      attrId: '838306',
                      code: 'userKeyLike',
                      name: 'userKeyLike',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.userKeyLike',
                      value: {
                        type: ['context', '$Form_318666$'],
                        code: 'userKeyLike',
                      },
                    },
                    {
                      attrId: '854094',
                      code: 'orgKeyLike',
                      name: 'orgKeyLike',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.orgKeyLike',
                      value: {
                        type: ['context', '$Form_318666$'],
                        code: 'orgKeyLike',
                      },
                    },
                    {
                      attrId: '414984',
                      code: 'flowCode',
                      name: 'flowCode',
                      sort: { isSort: true },
                      initialData: {
                        type: 'static',
                        value: '$state.flowCode$',
                      },
                      type: 'string',
                      key: 'body.flowCode',
                      value: {
                        type: ['context', '$state.flowCode$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '040648',
                      code: 'tacheCode',
                      name: 'tacheCode',
                      sort: { isSort: true },
                      initialData: {
                        type: 'static',
                        value: '$state.tacheCode$',
                      },
                      type: 'string',
                      key: 'body.tacheCode',
                      value: {
                        type: ['context', '$state.tacheCode$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '440516',
                      code: 'pageNum',
                      name: 'pageNum',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '1' },
                      type: 'long',
                      key: 'body.pageNum',
                      value: { type: ['customize'], code: '1' },
                    },
                    {
                      attrId: '752086',
                      code: 'pageSize',
                      name: 'pageSize',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '5' },
                      type: 'long',
                      key: 'body.pageSize',
                      value: { type: ['customize'], code: '10' },
                    },
                  ],
                  key: 'body',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '769486',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '18964',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '301645',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5314673',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '107072',
                      code: 'total',
                      name: 'total',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '17050776',
                      code: 'current',
                      name: 'current',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '5392715',
                      code: 'hitCount',
                      name: 'hitCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '1556708',
                      code: 'size',
                      name: 'size',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '855199',
                      code: 'optimizeCountSql',
                      name: 'optimizeCountSql',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '427267',
                      code: 'maxLimit',
                      name: 'maxLimit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '405391',
                      code: 'orders',
                      name: 'orders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '411733',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                        },
                      ],
                    },
                    {
                      attrId: '404633',
                      code: 'countId',
                      name: 'countId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '500631',
                      code: 'isSearchCount',
                      name: 'isSearchCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '548052',
                      code: 'records',
                      name: 'records',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '9503333',
                          code: 'orgName',
                          name: 'orgName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '754507',
                          code: 'orgCode',
                          name: 'orgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '270255',
                          code: 'postName',
                          name: 'postName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '07562',
                          code: 'postCode',
                          name: 'postCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '9386674',
                          code: 'userName',
                          name: 'userName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '666348',
                          code: 'userId',
                          name: 'userId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '0734',
                          code: 'userCode',
                          name: 'userCode',
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
                dataId: 166911839014258850,
                options: {
                  compId: 'Table_2310769_112',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Table',
                  id: '2395787',
                  loading: false,
                },
                line_number: 5,
              },
              {
                type: 'setLoading',
                dataId: 166911839014293100,
                options: {
                  compId: 'Button_30_121_247817',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Button',
                  id: '606656',
                  loading: false,
                },
                line_number: 6,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 166911839014270200,
                options: {
                  compId: 'Table_2310769_112',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Table',
                  id: '805098',
                  loading: false,
                },
                line_number: 7,
              },
              {
                type: 'setLoading',
                dataId: 166911839014289180,
                options: {
                  compId: 'Button_30_121_247817',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Button',
                  id: '881156',
                  loading: false,
                },
                line_number: 8,
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166911839014220740,
            options: {
              compId: 'Table_2310769_112',
              compLib: 'comm',
              pageJsonId: '2310769',
              compName: 'Table',
              id: '783231',
              loading: false,
            },
            line_number: 9,
          },
          {
            type: 'setLoading',
            dataId: 166911839014249020,
            options: {
              compId: 'Button_30_121_247817',
              compLib: 'comm',
              pageJsonId: '2310769',
              compName: 'Button',
              id: '167722',
              loading: false,
            },
            line_number: 10,
          },
        ],
      },
    ];
    eventDatavalidateCurrentForm61.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm61, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
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
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_2310769_1')}
        {...injectData}
      >
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
            flex: '1 1 auto',
            padding: '12px 12px 12px 12px',
            width: '600px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_2310769_11')}
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
            formCode={'Form_318666'}
            $$componentItem={{
              id: 'Form_318666',
              uid: 'Form_318666',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_318666')}
            {...injectData}
          >
            <Input
              name={'用户'}
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
              fieldName={'userKeyLike'}
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
                id: 'Input_558255',
                uid: 'Input_558255',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_558255')}
              {...injectData}
            />
            <Input
              name={'岗位'}
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
              fieldName={'postKeyLike'}
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
                id: 'Input_76103245',
                uid: 'Input_76103245',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_76103245')}
              {...injectData}
            />
            <Input
              name={'部门'}
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
              formItemIndex={2}
              fieldName={'orgKeyLike'}
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
                id: 'Input_966705',
                uid: 'Input_966705',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_966705')}
              {...injectData}
            />
          </Form>
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_30_1122_2987',
              uid: 'View_30_1122_2987',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px 0px 0px 0px',
              width: '100%',
              borderRadius: '0px 0px 2px 2px',
              margin: '20px 0px 0px 0px',
              textAlign: 'center',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_1122_2987')}
            {...injectData}
          >
            <Button
              name={'查询'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              classification={'default'}
              type={'primary'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_121_247817',
                uid: 'Button_30_121_247817',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '0px 0px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatasetLoading211: any = [
                  {
                    type: 'setLoading',
                    dataId: 166547931761453700,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '3860567',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading211.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading211, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDatasetLoading212: any = [
                  {
                    type: 'setLoading',
                    dataId: 166547936507931300,
                    options: {
                      compId: 'Button_30_121_247817',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Button',
                      id: '561088',
                      loading: true,
                    },
                    line_number: 2,
                  },
                ];
                eventDatasetLoading212.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading212, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDatavalidateCurrentForm83: any = [
                  {
                    type: 'validateCurrentForm',
                    dataId: 166547338244182900,
                    options: {
                      compId: 'Form_318666',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Form',
                      id: '7073832',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'reloadDataSource',
                        dataId: 166547343530545150,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '6107191',
                          pageJsonId: '2310769',
                          dataSourceId: 166547156178955620,
                          dataSourceName: 'staffList',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '387121',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'header',
                            },
                            {
                              attrId: '112909',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '144517',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
                            },
                            {
                              attrId: '008336',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '0479918',
                                  code: 'postKeyLike',
                                  name: 'postKeyLike',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.postKeyLike',
                                  value: {
                                    type: ['context', '$Form_318666$'],
                                    code: 'postKeyLike',
                                  },
                                },
                                {
                                  attrId: '838306',
                                  code: 'userKeyLike',
                                  name: 'userKeyLike',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.userKeyLike',
                                  value: {
                                    type: ['context', '$Form_318666$'],
                                    code: 'userKeyLike',
                                  },
                                },
                                {
                                  attrId: '854094',
                                  code: 'orgKeyLike',
                                  name: 'orgKeyLike',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.orgKeyLike',
                                  value: {
                                    type: ['context', '$Form_318666$'],
                                    code: 'orgKeyLike',
                                  },
                                },
                                {
                                  attrId: '414984',
                                  code: 'flowCode',
                                  name: 'flowCode',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$state.flowCode$',
                                  },
                                  type: 'string',
                                  key: 'body.flowCode',
                                  value: {
                                    type: ['context', '$state.flowCode$'],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '040648',
                                  code: 'tacheCode',
                                  name: 'tacheCode',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$state.tacheCode$',
                                  },
                                  type: 'string',
                                  key: 'body.tacheCode',
                                  value: {
                                    type: ['context', '$state.tacheCode$'],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '440516',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '1' },
                                  type: 'long',
                                  key: 'body.pageNum',
                                  value: { type: ['customize'], code: '1' },
                                },
                                {
                                  attrId: '752086',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '5' },
                                  type: 'long',
                                  key: 'body.pageSize',
                                  value: { type: ['customize'], code: '10' },
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '769486',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '18964',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '301645',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '5314673',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '107072',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '17050776',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '5392715',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '1556708',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '855199',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '427267',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '405391',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'fieldArray',
                                  children: [
                                    {
                                      attrId: '411733',
                                      code: 'listItem',
                                      name: '列表元素',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                    },
                                  ],
                                },
                                {
                                  attrId: '404633',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '500631',
                                  code: 'isSearchCount',
                                  name: 'isSearchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'boolean',
                                },
                                {
                                  attrId: '548052',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '9503333',
                                      code: 'orgName',
                                      name: 'orgName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '754507',
                                      code: 'orgCode',
                                      name: 'orgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '270255',
                                      code: 'postName',
                                      name: 'postName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '07562',
                                      code: 'postCode',
                                      name: 'postCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '9386674',
                                      code: 'userName',
                                      name: 'userName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '666348',
                                      code: 'userId',
                                      name: 'userId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '0734',
                                      code: 'userCode',
                                      name: 'userCode',
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
                            dataId: 166547933579936830,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '822665',
                              loading: false,
                            },
                            line_number: 5,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166547937860873470,
                            options: {
                              compId: 'Button_30_121_247817',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Button',
                              id: '084226',
                              loading: false,
                            },
                            line_number: 6,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 166547934558354600,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '593751',
                              loading: false,
                            },
                            line_number: 7,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166547938628556960,
                            options: {
                              compId: 'Button_30_121_247817',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Button',
                              id: '029307',
                              loading: false,
                            },
                            line_number: 8,
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 166547934961599780,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '8812955',
                          loading: false,
                        },
                        line_number: 9,
                      },
                      {
                        type: 'setLoading',
                        dataId: 166547938905535520,
                        options: {
                          compId: 'Button_30_121_247817',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Button',
                          id: '4328384',
                          loading: false,
                        },
                        line_number: 10,
                      },
                    ],
                  },
                ];
                eventDatavalidateCurrentForm83.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatavalidateCurrentForm83,
                  { e },
                  'validateCurrentForm',
                  {
                    id: 'validateCurrentForm',
                    name: 'validateCurrentForm',
                    type: 'validateCurrentForm',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_121_247817')}
              {...injectData}
            />
            <Button
              name={'重置'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              classification={'default'}
              type={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_122_438833',
                uid: 'Button_30_122_438833',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const forms156 = getFormByCompId('Form_318666', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms156) ? forms156 : [forms156]).forEach(
                  (form) => form?.resetFields(),
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_122_438833')}
              {...injectData}
            />
          </View>
          <Table
            name={'total'}
            columns={[
              {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                className: '',
                id: '996483',
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
                title: '岗位',
                key: 'postName',
                dataIndex: 'postName',
                id: '780111',
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
                title: '岗位编码',
                key: 'postCode',
                dataIndex: 'postCode',
                id: '735356',
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
                title: '部门',
                key: 'orgName',
                dataIndex: 'orgName',
                className: 'divider',
                id: '356793',
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
                title: '部门编码',
                key: 'orgCode',
                dataIndex: 'orgCode',
                id: '356729',
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
            scroll={{ y: 240 }}
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
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading213: any = [
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
              eventDatasetLoading213.params =
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
                eventDatasetLoading213,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatavalidateCurrentForm84: any = [
                {
                  type: 'validateCurrentForm',
                  dataId: 166547359963418600,
                  options: {
                    compId: 'Form_318666',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Form',
                    id: '5961614',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'reloadDataSource',
                      dataId: 166547361157722980,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '314895',
                        pageJsonId: '2310769',
                        dataSourceId: 166547156178955620,
                        dataSourceName: 'staffList',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '387121',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                          },
                          {
                            attrId: '112909',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                          },
                          {
                            attrId: '144517',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                          },
                          {
                            attrId: '008336',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '0479918',
                                code: 'postKeyLike',
                                name: 'postKeyLike',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postKeyLike',
                                value: {
                                  type: ['context', '$Form_318666$'],
                                  code: 'postKeyLike',
                                },
                              },
                              {
                                attrId: '838306',
                                code: 'userKeyLike',
                                name: 'userKeyLike',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.userKeyLike',
                                value: {
                                  type: ['context', '$Form_318666$'],
                                  code: 'userKeyLike',
                                },
                              },
                              {
                                attrId: '854094',
                                code: 'orgKeyLike',
                                name: 'orgKeyLike',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.orgKeyLike',
                                value: {
                                  type: ['context', '$Form_318666$'],
                                  code: 'orgKeyLike',
                                },
                              },
                              {
                                attrId: '414984',
                                code: 'flowCode',
                                name: 'flowCode',
                                sort: { isSort: true },
                                initialData: {
                                  type: 'static',
                                  value: '$state.flowCode$',
                                },
                                type: 'string',
                                key: 'body.flowCode',
                                value: {
                                  type: ['context', '$state.flowCode$'],
                                  code: '',
                                },
                              },
                              {
                                attrId: '040648',
                                code: 'tacheCode',
                                name: 'tacheCode',
                                sort: { isSort: true },
                                initialData: {
                                  type: 'static',
                                  value: '$state.tacheCode$',
                                },
                                type: 'string',
                                key: 'body.tacheCode',
                                value: {
                                  type: ['context', '$state.tacheCode$'],
                                  code: '',
                                },
                              },
                              {
                                attrId: '440516',
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
                                attrId: '752086',
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
                            attrId: '769486',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '18964',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '301645',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '5314673',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '107072',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '17050776',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '5392715',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '1556708',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '855199',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '427267',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '405391',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '411733',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                  },
                                ],
                              },
                              {
                                attrId: '404633',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '500631',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '548052',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '9503333',
                                    code: 'orgName',
                                    name: 'orgName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '754507',
                                    code: 'orgCode',
                                    name: 'orgCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '270255',
                                    code: 'postName',
                                    name: 'postName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '07562',
                                    code: 'postCode',
                                    name: 'postCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9386674',
                                    code: 'userName',
                                    name: 'userName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '666348',
                                    code: 'userId',
                                    name: 'userId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0734',
                                    code: 'userCode',
                                    name: 'userCode',
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
                      line_number: 3,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166547361157826240,
                          options: {
                            compId: 'Table_2310769_112',
                            compLib: 'comm',
                            pageJsonId: '2310769',
                            compName: 'Table',
                            id: '884651',
                            loading: false,
                          },
                          line_number: 4,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 166547361157817200,
                          options: {
                            compId: 'Table_2310769_112',
                            compLib: 'comm',
                            pageJsonId: '2310769',
                            compName: 'Table',
                            id: '2744408',
                            loading: false,
                          },
                          line_number: 5,
                        },
                      ],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatavalidateCurrentForm84.params =
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
                eventDatavalidateCurrentForm84,
                { page, pageSize },
                'validateCurrentForm',
                {
                  id: 'validateCurrentForm',
                  name: 'validateCurrentForm',
                  type: 'validateCurrentForm',
                  platform: 'pc',
                },
              );
            }}
            onRowDoubleClick={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected72: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167020946075159400,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '2379464',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '2652908',
                          options: {
                            context: '$selectedRows_2379464[0]$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167020946075129280,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167020946075134940,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167020946075176930,
                              children: [],
                              todoOptions: ['msgType', 'value'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '429624',
                                pageJsonId: '2310769',
                                type: 'info',
                                value: '请先选择用户',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 167020946075176930,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '429624',
                                pageJsonId: '2310769',
                                type: 'info',
                                value: '请先选择用户',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'okCallbackData',
                          dataId: 167020946075179620,
                          options: {
                            compId: 'okCallbackData',
                            compName: 'page',
                            id: '891301',
                            pageJsonId: '2310769',
                            params: '$selectedRows_2379464[0]$',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'closeModal',
                          dataId: 167020946075159200,
                          options: {
                            compId: 'page',
                            compName: 'page',
                            id: '1024919',
                          },
                          line_number: 4,
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'console',
                      dataId: 167020946075169100,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '5568903',
                        pageJsonId: '2310769',
                        value: ['获取选中行数据失败'],
                      },
                      line_number: 6,
                    },
                  ],
                },
              ];
              eventDatagetTableSelected72.params =
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
                eventDatagetTableSelected72,
                { rowId, row, index },
                'getTableSelected',
                {
                  id: 'getTableSelected',
                  name: 'getTableSelected',
                  type: 'getTableSelected',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_2310769_112')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditSelectonepostuser$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', flowCode: '', tacheCode: '' },
});
