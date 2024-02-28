// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1041591175670190080';
const ClsCp_0018_0001Addinfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm46: any = [
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
              code: 'function main(data,state,success,fail){var formInfo=Form_775282;var infoList=state.infoList||[];if(!!formInfo.busiAccessNumber){var list=infoList.filter(function(item){return item.busiAccessNumber==formInfo.busiAccessNumber});if(list.length>0){fail("\\u5F53\\u524D\\u4E1A\\u52A1\\u63A5\\u5165\\u53F7\\u5DF2\\u88AB\\u6DFB\\u52A0\\uFF01\\u65E0\\u6CD5\\u65B0\\u589E")}else{success()}}else{success()}};',
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
                  params: '$Form_775282$',
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
    eventDatavalidateCurrentForm46.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm46, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal45: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal45.params = [] || [];
    CMDGenerator(eventDatacloseModal45, {}, 'closeModal', {
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_775282')}
            {...injectData}
          >
            <Input
              name={'集团编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
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
                const eventDatashowCustomModal180: any = [
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
                          code: 'function main(data,state,success,fail){var _okData_;if(((_okData_=okData_048343)===null||_okData_===void 0?void 0:_okData_.length)>0){success(okData_048343[0])}else{fail()}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 167756645514104800,
                            options: {
                              compId: [],
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'Input',
                              id: '6400774',
                              valueList: {
                                Input_3342: '$data_632962254.groupId$',
                              },
                              compid: [],
                            },
                            line_number: 3,
                            callback1: [],
                          },
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
                            line_number: 4,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal180.params = [] || [];
                CMDGenerator(
                  eventDatashowCustomModal180,
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
              labelCol={'6'}
              wrapperCol={18}
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
              name={'代理商名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
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
              fieldName={'agencyName'}
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
                id: 'Input_543601',
                uid: 'Input_543601',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_543601')}
              {...injectData}
            />
            <Input
              name={'基本接入号'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
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
              fieldName={'basicAccessNumber'}
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
              name={'业务接入号'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'busiAccessNumber'}
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

export default withPageHOC(ClsCp_0018_0001Addinfo$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    infoList: '',
    staffCode: '',
  },
});
