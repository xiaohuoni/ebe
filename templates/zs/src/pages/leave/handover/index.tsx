// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Card,
  Form,
  RangePicker,
  Input,
  Switch,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '900624745539543040';
const LeaveHandover$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    const eventDatareloadDataSource61: any = [
      {
        type: 'reloadDataSource',
        dataId: 166260735708445900,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '18699',
          pageJsonId: '2540494',
          dataSourceId: 166640662640091330,
          dataSourceName: 'pageData',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '169664',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '7754405',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '49723',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '1076456',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '5467466',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '0870732',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
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
              attrId: '8691432',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '337825',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '979169',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '091769',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '5945626',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '540778',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '241258',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '01022',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '8195081',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '764668',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2036974',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '792841',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '5451695',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '680916',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '6817846',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '2986363',
                      code: 'leaveHandOverId',
                      name: 'leaveHandOverId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '2171975',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '503576',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5517412',
                      code: 'statusCdName',
                      name: 'statusCdName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '34298686',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '441682',
                      code: 'isAcceptTodoInfo',
                      name: 'isAcceptTodoInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '817613',
                      code: 'handOverId',
                      name: 'handOverId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6973434',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '084274',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '775532',
                      code: 'handOverName',
                      name: 'handOverName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6905775',
                      code: 'isAcceptTodoInfoName',
                      name: 'isAcceptTodoInfoName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '56831',
                      code: 'beginTime',
                      name: 'beginTime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '428066',
                      code: 'endTime',
                      name: 'endTime',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '337747',
                      code: 'acceptTodoInfoFlag',
                      name: 'acceptTodoInfoFlag',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '202877',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '37188',
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
    eventDatareloadDataSource61.params = [] || [];
    CMDGenerator(eventDatareloadDataSource61, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_2540494__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_2540494_1',
          uid: 'View_2540494_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_2540494_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_7691962',
            uid: 'VerticalView_7691962',
            type: 'VerticalView',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_7691962')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_115754',
              uid: 'View_115754',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_115754')}
            {...injectData}
          >
            <Card
              name={'离岗转办表单卡片'}
              cardIconType={'middle'}
              title={'离岗转办表单'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              visible={true}
              hasIcon={true}
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
                id: 'Card_685316',
                uid: 'Card_685316',
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_685316')}
              {...injectData}
            >
              <Form
                name={'离岗转办表单'}
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
                formCode={'Form_984095'}
                $$componentItem={{
                  id: 'Form_984095',
                  uid: 'Form_984095',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_984095')}
                {...injectData}
              >
                <RangePicker
                  name={'转办时间'}
                  timeMode={'time'}
                  format={'YYYY-MM-DD HH:mm:ss'}
                  separator={'~'}
                  size={'default'}
                  selfSpan={24}
                  labelCol={8}
                  wrapperCol={'8'}
                  disabled={false}
                  visible={true}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={true}
                  pickerType={'RangePicker'}
                  formItemIndex={0}
                  fieldName={'handoverTime'}
                  showTime={true}
                  $$componentItem={{
                    id: 'RangePicker_0811484_1228247',
                    uid: 'RangePicker_0811484_1228247',
                    type: 'RangePicker',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'RangePicker_0811484_1228247')
                  }
                  {...injectData}
                />
                <Input
                  name={'转办接收人'}
                  size={'default'}
                  selfSpan={24}
                  labelCol={8}
                  wrapperCol={'8'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipContent={''}
                  tipPlacement={'top'}
                  prefixIconPosition={'before'}
                  postfix={'搜索'}
                  postfixIconPosition={'before'}
                  required={true}
                  placeholder={'请输入'}
                  fieldName={'handOverName'}
                  formItemIndex={1}
                  prefixIcon={{
                    prefixIconType: '',
                    prefixIconTheme: '',
                    prefixIconFontAddress: '',
                    prefixIconIsIconFont: false,
                  }}
                  icon={{
                    theme: 'outlined',
                    type: 'search',
                    isIconFont: false,
                  }}
                  postfixStyle={'3'}
                  disabled={false}
                  visible={true}
                  readOnly={true}
                  allowClear={true}
                  $$componentItem={{
                    id: 'Input_836023_5814323',
                    uid: 'Input_836023_5814323',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  onIconClick={() => {
                    const eventDatashowCustomModal296: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 166372843814080600,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '659342',
                          pageJsonId: '541575',
                          modalname: '/creator/selectoneuser',
                          pageId: '900338214677487616',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166634573488100350,
                            options: {
                              compId: 'Input_836023_5814323',
                              compLib: 'comm',
                              pageJsonId: '2540494',
                              compName: 'Input',
                              id: '6953703',
                              value: '$okData_659342?.staffSelect?.userName$',
                            },
                            line_number: 2,
                            callback1: [],
                          },
                          {
                            type: 'setValue',
                            dataId: 166634573866545570,
                            options: {
                              compId: 'Input_479682',
                              compLib: 'comm',
                              pageJsonId: '2540494',
                              compName: 'Input',
                              id: '371434',
                              value: '$okData_659342?.staffSelect?.userId$',
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal296.params = [] || [];
                    CMDGenerator(
                      eventDatashowCustomModal296,
                      {},
                      'showCustomModal',
                      {
                        id: 'showCustomModal',
                        name: 'showCustomModal',
                        type: 'showCustomModal',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_836023_5814323')
                  }
                  {...injectData}
                />
                <Input
                  name={'接收人隐藏框'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={8}
                  wrapperCol={'8'}
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
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  fieldName={'handOverId'}
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
                    id: 'Input_479682',
                    uid: 'Input_479682',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_479682')}
                  {...injectData}
                />
                <Switch
                  name={'转办期间是否接收代办'}
                  size={'default'}
                  selfSpan={24}
                  labelCol={8}
                  wrapperCol={'8'}
                  disabled={false}
                  visible={true}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={false}
                  formItemIndex={3}
                  fieldName={'acceptTodoInfoFlag'}
                  defaultChecked={false}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  $$componentItem={{
                    id: 'Switch_2316286',
                    uid: 'Switch_2316286',
                    type: 'Switch',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Switch_2316286')}
                  {...injectData}
                />
              </Form>
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_994054',
                  uid: 'View_994054',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '20px 0px 0px 0px',
                  textAlign: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_994054')}
                {...injectData}
              >
                <Button
                  name={'新建转办'}
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
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_641249',
                    uid: 'Button_641249',
                    type: 'Button',
                    ...componentItem,
                  }}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDatavalidateCurrentForm103: any = [
                      {
                        type: 'validateCurrentForm',
                        dataId: 166634532707358820,
                        options: {
                          compId: 'Form_984095',
                          compLib: 'comm',
                          pageJsonId: '2540494',
                          compName: 'Form',
                          id: '9519287',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166640918404299740,
                            options: {
                              compId: 'Button_641249',
                              compLib: 'comm',
                              pageJsonId: '2540494',
                              compName: 'Button',
                              id: '675253',
                              loading: true,
                            },
                            line_number: 2,
                          },
                          {
                            type: 'apiRequest',
                            dataId: 166634674657072420,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '3590787',
                              pageJsonId: '2540494',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'addDcLeaveHandOver',
                              _apiCode: 'addDcLeaveHandOver',
                              _source: 'rhin',
                              _serviceId: '900666324060704768',
                              _serviceTitle:
                                '新增离岗转派记录--tzp: addDcLeaveHandOver',
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
                                  dataKey: '3590787_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '3590787_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '3590787_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'leaveHandOverId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'body.leaveHandOverId',
                                      compType: 'Input',
                                      name: 'leaveHandOverId',
                                      parents: ['body'],
                                      id: 'body.leaveHandOverId',
                                      dataKey: '3590787_body.leaveHandOverId',
                                    },
                                    {
                                      code: 'acceptTodoInfoFlag',
                                      name: '是否离岗期间继续接收待办消息开关',
                                      attrType: 'field',
                                      type: 'boolean',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.acceptTodoInfoFlag',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.acceptTodoInfoFlag',
                                      dataKey:
                                        '3590787_body.acceptTodoInfoFlag',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'getFieldsValue',
                                        ],
                                        code: 'acceptTodoInfoFlag',
                                      },
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
                                      dataKey: '3590787_body.updateDate',
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
                                      dataKey: '3590787_body.updateStaff',
                                    },
                                    {
                                      code: 'isAcceptTodoInfo',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.isAcceptTodoInfo',
                                      compType: 'Input',
                                      name: 'isAcceptTodoInfo',
                                      parents: ['body'],
                                      id: 'body.isAcceptTodoInfo',
                                      dataKey: '3590787_body.isAcceptTodoInfo',
                                      value: { type: [], code: '' },
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
                                      dataKey: '3590787_body.statusCd',
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
                                      dataKey: '3590787_body.createDate',
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
                                      dataKey: '3590787_body.createStaff',
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
                                      dataKey: '3590787_body.createStaffName',
                                    },
                                    {
                                      code: 'endTime',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.endTime',
                                      compType: 'Input',
                                      name: 'endTime',
                                      parents: ['body'],
                                      id: 'body.endTime',
                                      dataKey: '3590787_body.endTime',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'getFieldsValue',
                                        ],
                                        code: 'handoverTime[1]',
                                      },
                                    },
                                    {
                                      code: 'beginTime',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.beginTime',
                                      compType: 'Input',
                                      name: 'beginTime',
                                      parents: ['body'],
                                      id: 'body.beginTime',
                                      dataKey: '3590787_body.beginTime',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'getFieldsValue',
                                        ],
                                        code: 'handoverTime[0]',
                                      },
                                    },
                                    {
                                      code: 'handOverId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.handOverId',
                                      compType: 'Input',
                                      name: 'handOverId',
                                      parents: ['body'],
                                      id: 'body.handOverId',
                                      dataKey: '3590787_body.handOverId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'getFieldsValue',
                                        ],
                                        code: 'handOverId',
                                      },
                                    },
                                    {
                                      code: 'handOverName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.handOverName',
                                      compType: 'Input',
                                      name: 'handOverName',
                                      parents: ['body'],
                                      id: 'body.handOverName',
                                      dataKey: '3590787_body.handOverName',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'getFieldsValue',
                                        ],
                                        code: 'handOverName',
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
                                      dataKey: '3590787_body.remark',
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '3590787_body',
                                },
                              ],
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '6749365',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_3590787?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166634674657017820,
                                elseIfs: [],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166634674657097600,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '796336',
                                      pageJsonId: '2540494',
                                      type: 'success',
                                      value: '新建转派成功！',
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'reloadDataSource',
                                    dataId: 166634674657026620,
                                    options: {
                                      compId: 'reloadDataSource',
                                      compName: 'page',
                                      id: '620752',
                                      pageJsonId: '2540494',
                                      dataSourceId: 166640662640091330,
                                      dataSourceName: 'pageData',
                                      dataSourceRelType: 'service',
                                      dataSourceReloadFilter: [
                                        {
                                          attrId: '169664',
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
                                          attrId: '7754405',
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
                                          attrId: '49723',
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
                                          attrId: '1076456',
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
                                              attrId: '5467466',
                                              code: 'pageNum',
                                              name: 'pageNum',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                              key: 'body.pageNum',
                                              value: {
                                                type: ['customize'],
                                                code: '1',
                                              },
                                            },
                                            {
                                              attrId: '0870732',
                                              code: 'pageSize',
                                              name: 'pageSize',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                              key: 'body.pageSize',
                                              value: {
                                                type: ['customize'],
                                                code: '5',
                                              },
                                            },
                                          ],
                                          key: 'body',
                                        },
                                      ],
                                      dataSourceSetValue: [
                                        {
                                          attrId: '8691432',
                                          code: 'resultCode',
                                          name: 'resultCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '337825',
                                          code: 'resultMsgCode',
                                          name: 'resultMsgCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '979169',
                                          code: 'resultMsg',
                                          name: 'resultMsg',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '091769',
                                          code: 'resultData',
                                          name: 'resultData',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'object',
                                          children: [
                                            {
                                              attrId: '5945626',
                                              code: 'total',
                                              name: 'total',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                            {
                                              attrId: '540778',
                                              code: 'current',
                                              name: 'current',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                            {
                                              attrId: '241258',
                                              code: 'hitCount',
                                              name: 'hitCount',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'boolean',
                                            },
                                            {
                                              attrId: '01022',
                                              code: 'size',
                                              name: 'size',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                            {
                                              attrId: '8195081',
                                              code: 'optimizeCountSql',
                                              name: 'optimizeCountSql',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'boolean',
                                            },
                                            {
                                              attrId: '764668',
                                              code: 'maxLimit',
                                              name: 'maxLimit',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '2036974',
                                              code: 'orders',
                                              name: 'orders',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'fieldArray',
                                              children: [
                                                {
                                                  attrId: '792841',
                                                  code: 'listItem',
                                                  name: '列表元素',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'object',
                                                },
                                              ],
                                            },
                                            {
                                              attrId: '5451695',
                                              code: 'countId',
                                              name: 'countId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '680916',
                                              code: 'isSearchCount',
                                              name: 'isSearchCount',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'boolean',
                                            },
                                            {
                                              attrId: '6817846',
                                              code: 'records',
                                              name: 'records',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'objectArray',
                                              children: [
                                                {
                                                  attrId: '2986363',
                                                  code: 'leaveHandOverId',
                                                  name: 'leaveHandOverId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'long',
                                                },
                                                {
                                                  attrId: '2171975',
                                                  code: 'updateDate',
                                                  name: 'updateDate',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '503576',
                                                  code: 'statusCd',
                                                  name: 'statusCd',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '5517412',
                                                  code: 'statusCdName',
                                                  name: 'statusCdName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '34298686',
                                                  code: 'remark',
                                                  name: 'remark',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '441682',
                                                  code: 'isAcceptTodoInfo',
                                                  name: 'isAcceptTodoInfo',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '817613',
                                                  code: 'handOverId',
                                                  name: 'handOverId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '6973434',
                                                  code: 'createStaff',
                                                  name: 'createStaff',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '084274',
                                                  code: 'createStaffName',
                                                  name: 'createStaffName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '775532',
                                                  code: 'handOverName',
                                                  name: 'handOverName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '6905775',
                                                  code: 'isAcceptTodoInfoName',
                                                  name: 'isAcceptTodoInfoName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '56831',
                                                  code: 'beginTime',
                                                  name: 'beginTime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '428066',
                                                  code: 'endTime',
                                                  name: 'endTime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '337747',
                                                  code: 'acceptTodoInfoFlag',
                                                  name: 'acceptTodoInfoFlag',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '202877',
                                                  code: 'createDate',
                                                  name: 'createDate',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                                {
                                                  attrId: '37188',
                                                  code: 'updateStaff',
                                                  name: 'updateStaff',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                },
                                              ],
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
                                  {
                                    type: 'resetCurrentForm',
                                    dataId: 166634674657064540,
                                    options: {
                                      compId: 'Form_984095',
                                      compLib: 'comm',
                                      pageJsonId: '2540494',
                                      compName: 'Form',
                                      id: '597366',
                                    },
                                    line_number: 7,
                                  },
                                ],
                              },
                              {
                                type: 'setLoading',
                                dataId: 166640925043364670,
                                options: {
                                  compId: 'Button_641249',
                                  compLib: 'comm',
                                  pageJsonId: '2540494',
                                  compName: 'Button',
                                  id: '516893',
                                  loading: false,
                                },
                                line_number: 8,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 166640924519484480,
                                options: {
                                  compId: 'Button_641249',
                                  compLib: 'comm',
                                  pageJsonId: '2540494',
                                  compName: 'Button',
                                  id: '377225',
                                  loading: false,
                                },
                                line_number: 9,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatavalidateCurrentForm103.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatavalidateCurrentForm103,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Button_641249')}
                  {...injectData}
                />
              </View>
            </Card>
          </View>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_434019',
              uid: 'View_434019',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '30%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_434019')}
            {...injectData}
          >
            <Card
              name={'常用意见列表卡片'}
              cardIconType={'middle'}
              title={'转办记录'}
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
                id: 'Card_564259',
                uid: 'Card_564259',
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_564259')}
              {...injectData}
            >
              <Table
                name={'常用意见表格'}
                isFlexColumn={false}
                pageSize={
                  data?.qryPageStaffHandleCommentByReq?.resultData?.size
                }
                current={
                  data?.qryPageStaffHandleCommentByReq?.resultData?.current
                }
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
                    title: '开始时间',
                    key: 'beginTime',
                    dataIndex: 'beginTime',
                    className: '',
                    id: '7725805',
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
                    title: '结束时间',
                    key: 'endTime',
                    dataIndex: 'endTime',
                    className: 'divider',
                    id: '88169',
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
                    title: '转办接收人',
                    key: 'handOverName',
                    dataIndex: 'handOverName',
                    className: 'divider',
                    id: '204864',
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
                    title: '离岗转派期间是否接收待办',
                    key: 'isAcceptTodoInfoName',
                    dataIndex: 'isAcceptTodoInfoName',
                    className: 'divider',
                    id: '2140315',
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
                    title: '设置时间',
                    key: 'createDate',
                    dataIndex: 'createDate',
                    className: 'divider',
                    id: '018253',
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
                    key: 'statusCdName',
                    dataIndex: 'statusCdName',
                    className: 'divider',
                    id: '967655',
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
                fixedAction={true}
                rowSelection={undefined}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                dataSource={data?.pageData?.resultData?.records}
                rowKey={'leaveHandOverId'}
                fieldName={
                  'data.qryPageStaffHandleCommentByReq.resultData.total'
                }
                total={data?.qryPageStaffHandleCommentByReq?.resultData?.total}
                rowActions={[
                  {
                    title: '结束转办',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '066044',
                    rule: "row.statusCd!='1000'",
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.pageData.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_870854',
                  uid: 'Table_870854',
                  type: 'Table',
                  ...componentItem,
                }}
                style={{ margin: '20px 0px 0px 0px' }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatareloadDataSource133: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166260769089527460,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '693606',
                        pageJsonId: '2540494',
                        dataSourceId: 166640662640091330,
                        dataSourceName: 'pageData',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '169664',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                          },
                          {
                            attrId: '7754405',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                          },
                          {
                            attrId: '49723',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                          },
                          {
                            attrId: '1076456',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '5467466',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                key: 'body.pageNum',
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '0870732',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
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
                            attrId: '8691432',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '337825',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '979169',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '091769',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '5945626',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '540778',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '241258',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '01022',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '8195081',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '764668',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2036974',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '792841',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                  },
                                ],
                              },
                              {
                                attrId: '5451695',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '680916',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '6817846',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '2986363',
                                    code: 'leaveHandOverId',
                                    name: 'leaveHandOverId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '2171975',
                                    code: 'updateDate',
                                    name: 'updateDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '503576',
                                    code: 'statusCd',
                                    name: 'statusCd',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '5517412',
                                    code: 'statusCdName',
                                    name: 'statusCdName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '34298686',
                                    code: 'remark',
                                    name: 'remark',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '441682',
                                    code: 'isAcceptTodoInfo',
                                    name: 'isAcceptTodoInfo',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '817613',
                                    code: 'handOverId',
                                    name: 'handOverId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '6973434',
                                    code: 'createStaff',
                                    name: 'createStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '084274',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '775532',
                                    code: 'handOverName',
                                    name: 'handOverName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '6905775',
                                    code: 'isAcceptTodoInfoName',
                                    name: 'isAcceptTodoInfoName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '56831',
                                    code: 'beginTime',
                                    name: 'beginTime',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '428066',
                                    code: 'endTime',
                                    name: 'endTime',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '337747',
                                    code: 'acceptTodoInfoFlag',
                                    name: 'acceptTodoInfoFlag',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '202877',
                                    code: 'createDate',
                                    name: 'createDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '37188',
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
                  eventDatareloadDataSource133.params =
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
                    eventDatareloadDataSource133,
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
                  const eventDatasetLoading232: any = [
                    {
                      type: 'setLoading',
                      dataId: 166640930769865700,
                      options: {
                        compId: 'Table_870854',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Table',
                        id: '6771873',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading232.params =
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
                    eventDatasetLoading232,
                    { rowId, row, index },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDataapiRequest807: any = [
                    {
                      type: 'apiRequest',
                      dataId: 166640811957148500,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '6620016',
                        pageJsonId: '2540494',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'finishLeaveHandOver',
                        _apiCode: 'finishLeaveHandOver',
                        _source: 'rhin',
                        _serviceId: '900943362214830080',
                        _serviceTitle: '结束离岗转办--tzp: finishLeaveHandOver',
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
                            dataKey: '6620016_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '6620016_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '6620016_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'leaveHandOverId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'body.leaveHandOverId',
                                compType: 'Input',
                                name: 'leaveHandOverId',
                                parents: ['body'],
                                id: 'body.leaveHandOverId',
                                dataKey: '6620016_body.leaveHandOverId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '6620016_body',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '6749365',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_6620016?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166640819767690980,
                          elseIfs: [],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166640819767664130,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '48704',
                                pageJsonId: '2540494',
                                type: 'success',
                                value: '结束转派成功！',
                              },
                              line_number: 4,
                            },
                            {
                              type: 'reloadDataSource',
                              dataId: 166640819767625280,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '38701',
                                pageJsonId: '2540494',
                                dataSourceId: 166640662640091330,
                                dataSourceName: 'pageData',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '169664',
                                    code: 'header',
                                    name: '请求头参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'header',
                                  },
                                  {
                                    attrId: '7754405',
                                    code: 'path',
                                    name: '请求路径参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'path',
                                  },
                                  {
                                    attrId: '49723',
                                    code: 'query',
                                    name: 'URL 参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'query',
                                  },
                                  {
                                    attrId: '1076456',
                                    code: 'body',
                                    name: '请求体',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '5467466',
                                        code: 'pageNum',
                                        name: 'pageNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                        key: 'body.pageNum',
                                        value: {
                                          type: ['customize'],
                                          code: '1',
                                        },
                                      },
                                      {
                                        attrId: '0870732',
                                        code: 'pageSize',
                                        name: 'pageSize',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                        key: 'body.pageSize',
                                        value: {
                                          type: ['customize'],
                                          code: '5',
                                        },
                                      },
                                    ],
                                    key: 'body',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '8691432',
                                    code: 'resultCode',
                                    name: 'resultCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '337825',
                                    code: 'resultMsgCode',
                                    name: 'resultMsgCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '979169',
                                    code: 'resultMsg',
                                    name: 'resultMsg',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '091769',
                                    code: 'resultData',
                                    name: 'resultData',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '5945626',
                                        code: 'total',
                                        name: 'total',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '540778',
                                        code: 'current',
                                        name: 'current',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '241258',
                                        code: 'hitCount',
                                        name: 'hitCount',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'boolean',
                                      },
                                      {
                                        attrId: '01022',
                                        code: 'size',
                                        name: 'size',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '8195081',
                                        code: 'optimizeCountSql',
                                        name: 'optimizeCountSql',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'boolean',
                                      },
                                      {
                                        attrId: '764668',
                                        code: 'maxLimit',
                                        name: 'maxLimit',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2036974',
                                        code: 'orders',
                                        name: 'orders',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'fieldArray',
                                        children: [
                                          {
                                            attrId: '792841',
                                            code: 'listItem',
                                            name: '列表元素',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'object',
                                          },
                                        ],
                                      },
                                      {
                                        attrId: '5451695',
                                        code: 'countId',
                                        name: 'countId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '680916',
                                        code: 'isSearchCount',
                                        name: 'isSearchCount',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'boolean',
                                      },
                                      {
                                        attrId: '6817846',
                                        code: 'records',
                                        name: 'records',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'objectArray',
                                        children: [
                                          {
                                            attrId: '2986363',
                                            code: 'leaveHandOverId',
                                            name: 'leaveHandOverId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '2171975',
                                            code: 'updateDate',
                                            name: 'updateDate',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '503576',
                                            code: 'statusCd',
                                            name: 'statusCd',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '5517412',
                                            code: 'statusCdName',
                                            name: 'statusCdName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '34298686',
                                            code: 'remark',
                                            name: 'remark',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '441682',
                                            code: 'isAcceptTodoInfo',
                                            name: 'isAcceptTodoInfo',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '817613',
                                            code: 'handOverId',
                                            name: 'handOverId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '6973434',
                                            code: 'createStaff',
                                            name: 'createStaff',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '084274',
                                            code: 'createStaffName',
                                            name: 'createStaffName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '775532',
                                            code: 'handOverName',
                                            name: 'handOverName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '6905775',
                                            code: 'isAcceptTodoInfoName',
                                            name: 'isAcceptTodoInfoName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '56831',
                                            code: 'beginTime',
                                            name: 'beginTime',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '428066',
                                            code: 'endTime',
                                            name: 'endTime',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '337747',
                                            code: 'acceptTodoInfoFlag',
                                            name: 'acceptTodoInfoFlag',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '202877',
                                            code: 'createDate',
                                            name: 'createDate',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '37188',
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
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'resetCurrentForm',
                              dataId: 166640819767619780,
                              options: {
                                compId: 'Form_984095',
                                compLib: 'comm',
                                pageJsonId: '2540494',
                                compName: 'Form',
                                id: '466291',
                              },
                              line_number: 6,
                            },
                          ],
                        },
                        {
                          type: 'setLoading',
                          dataId: 166640932794906800,
                          options: {
                            compId: 'Table_870854',
                            compLib: 'comm',
                            pageJsonId: '2540494',
                            compName: 'Table',
                            id: '902735',
                            loading: false,
                          },
                          line_number: 7,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 166640934346624900,
                          options: {
                            compId: 'Table_870854',
                            compLib: 'comm',
                            pageJsonId: '2540494',
                            compName: 'Table',
                            id: '2882744',
                            loading: false,
                          },
                          line_number: 8,
                        },
                        {
                          type: 'showMessage',
                          dataId: 166640820566705340,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '6673062',
                            pageJsonId: '2540494',
                            type: 'error',
                            value: '结束转派失败！',
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest807.params =
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
                    eventDataapiRequest807,
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
                ref={(r: any) => refs.setComponentRef(r, 'Table_870854')}
                {...injectData}
              />
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(LeaveHandover$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
