// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1051702086871478272';
const AddCustActList$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm31: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169926622885245300,
        options: {
          compId: 'Form_775282',
          compLib: 'comm',
          pageJsonId: '558169',
          compName: 'Form',
          id: '562369',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 169994471678855600,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '122583',
              pageJsonId: '558169',
              value: ['$Form_775282$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 169932247763489660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6555517',
              pageJsonId: '558169',
              code: 'function main(data,state,success,fail){success()};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 169932266444533800,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '8433844',
                  pageJsonId: '558169',
                  params: '$data.groupInfo$',
                },
                line_number: 4,
              },
              {
                type: 'closeModal',
                dataId: 169932266915595040,
                options: { compId: 'page', compName: 'page', id: '576596' },
                line_number: 5,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 169932265282674180,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '675155',
                  pageJsonId: '558169',
                  type: 'warn',
                  value: '$fail_6555517$',
                },
                line_number: 6,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm31.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm31, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal26: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal26.params = [] || [];
    CMDGenerator(eventDatacloseModal26, {}, 'closeModal', {
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
      className="__CustomClass_558169__"
    >
      <View
        className="View_View_558169_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_558169_1',
          uid: 'View_558169_1',
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
          textAlign: 'left',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_558169_1')}
        {...injectData}
      >
        <View
          className="View_View_480919"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_480919',
            uid: 'View_480919',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'block',
            flexDirection: 'column',
            padding: '0px 20px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_480919')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={'6'}
            wrapperCol={18}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_775282'}
            $$componentItem={{
              id: 'Form_775282',
              uid: 'Form_775282',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource116: any = [
                {
                  type: 'setDataSource',
                  dataId: 170174332848524400,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '6605323',
                    pageJsonId: '558169',
                    dataSourceId: 170174310429008500,
                    dataSourceName: 'groupInfo',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '003967',
                        code: 'groupId',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'groupId',
                        },
                        _codePath: ['groupId'],
                        _idpath: ['003967'],
                      },
                      {
                        attrId: '102299',
                        code: 'groupName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'groupName',
                        },
                        _codePath: ['groupName'],
                        _idpath: ['102299'],
                      },
                      {
                        attrId: '921065',
                        code: 'msisdn',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'msisdn',
                        },
                        _codePath: ['msisdn'],
                        _idpath: ['921065'],
                      },
                      {
                        attrId: '443267',
                        code: 'custName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['custName'],
                        _idpath: ['443267'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'custName',
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource116.params =
                [
                  {
                    title: '表单当前改变字段编码',
                    name: 'changedFieldName',
                    value: '$changedFieldName$',
                  },
                  {
                    title: '表单当前改变字段值',
                    name: 'changedValue',
                    value: '$changedValue$',
                  },
                ] || [];
              CMDGenerator(
                eventDatasetDataSource116,
                { changedFieldName, changedValue },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_775282')}
            {...injectData}
          >
            <Input
              name={'集团编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请点击右侧按钮选择集团'}
              formItemIndex={0}
              fieldName={'groupId'}
              icon={{
                type: 'search',
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
                id: 'Input_3342',
                uid: 'Input_3342',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatashowCustomModal113: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 167755432297860260,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '048343',
                      pageJsonId: 31,
                      modalname: '/groupInfoSel',
                      pageId: '899848269504155648',
                      paramsObj: {
                        groupCode: '1000',
                        userCode: '$state.staffCode$',
                      },
                      paramsObjKeyValueMap: {
                        groupCode: '1000',
                        userCode: '$state.staffCode$',
                      },
                      modalPath: '/groupInfoSel',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167755432297814880,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '632962254',
                          pageJsonId: 31,
                          code: 'function main(data,state,success,fail){var _okData_;if(((_okData_=okData_048343)===null||_okData_===void 0?void 0:_okData_.length)>0){data.groupInfo.groupId=okData_048343[0].groupId;data.groupInfo.groupName=okData_048343[0].groupName;success(okData_048343[0])}else{fail()}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 169994294486518460,
                            options: {
                              compId: ['Input_3342', 'Input_341384'],
                              compLib: 'comm',
                              pageJsonId: '558169',
                              compName: 'Input',
                              id: '6994904',
                              valueList: {
                                Input_3342: '$data_632962254.groupId$',
                                Input_341384: '$data_632962254.groupName$',
                              },
                              compid: ['Input_3342', 'Input_341384'],
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal113.params = [] || [];
                CMDGenerator(
                  eventDatashowCustomModal113,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_3342')}
              {...injectData}
            />
            <Input
              name={'集团名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'选择集团后自动带出'}
              formItemIndex={1}
              fieldName={'groupName'}
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
                id: 'Input_341384',
                uid: 'Input_341384',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_341384')}
              {...injectData}
            />
            <Input
              name={'手机号'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'msisdn'}
              regexp={[
                {
                  id: '050565',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正确的手机号码',
                  pattern: '/^1[3-9]\\d{9}$/',
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
                id: 'Input_8230705',
                uid: 'Input_8230705',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8230705')}
              {...injectData}
            />
            <Input
              name={'客户姓名'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'custName'}
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
                id: 'Input_548785',
                uid: 'Input_548785',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_548785')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AddCustActList$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    infoList: '',
    staffCode: '',
    catalogCode: '',
  },
});
