// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, DatePicker, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1039444395193061376';
const Jituanduancaixindailishangtuichubaobeidanxinzeng4730copycopy$$Modal: React.FC<
  PageProps
> = ({
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
    const eventDatavalidateCurrentForm37: any = [
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
            type: 'customActionCode',
            dataId: 169932247763489660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6555517',
              pageJsonId: '558169',
              code: 'function main(data,state,success,fail){var formInfo=Form_775282;var backAgencyList=state.backAgencyList||[];var list=backAgencyList.filter(function(item){return item.backAgencyName==formInfo.backAgencyName});if(list.length>0){fail("\\u5F53\\u524D\\u540E\\u5907\\u4EE3\\u7406\\u5546\\u540D\\u79F0\\u4E0E\\u5E8F\\u53F7\\u4E3A ".concat(list[0]["rowId"]," \\u7684\\u91CD\\u590D"))}else{success()}};',
            },
            line_number: 2,
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
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 169932266915595040,
                options: { compId: 'page', compName: 'page', id: '576596' },
                line_number: 4,
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
                line_number: 5,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm37.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm37, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal33: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal33.params = [] || [];
    CMDGenerator(eventDatacloseModal33, {}, 'closeModal', {
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
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_558169_1')}
        {...injectData}
      >
        <View
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
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_480919')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={'6'}
            wrapperCol={'17'}
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
              name={'正式落地代理商名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'17'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'officialAgencyName'}
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
                id: 'Input_786694',
                uid: 'Input_786694',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_786694')}
              {...injectData}
            />
            <DatePicker
              name={'后备引入时间'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'17'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              limitRange={'no'}
              startTime={''}
              endTime={''}
              placeholder={'请选择日期'}
              pickerType={'DatePicker'}
              customTip={''}
              formItemIndex={1}
              fieldName={'backImportDate'}
              $$componentItem={{
                id: 'DatePicker_502621',
                uid: 'DatePicker_502621',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={undefined}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'DatePicker_502621')}
              {...injectData}
            />
            <Input
              name={'引入评审得分'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'17'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'分'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入0-100的整数'}
              formItemIndex={2}
              fieldName={'judgeScore'}
              regexp={[
                {
                  id: '2046186',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入0-100的整数',
                  pattern: '/^(?!0\\d)(\\d{1,2}|100)$/',
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
                id: 'Input_356793',
                uid: 'Input_356793',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_356793')}
              {...injectData}
            />
            <Input
              name={'承诺季度预存金额'}
              size={'default'}
              selfSpan={24}
              labelCol={'6'}
              wrapperCol={'17'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'万元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'promiseQuarterPrestoreFee'}
              allowClear={false}
              regexp={[
                {
                  id: '586804',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0的数',
                  pattern: '/^(?!0\\d)\\d+(\\.\\d+)?$/',
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
                id: 'Input_675725',
                uid: 'Input_675725',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_675725')}
              {...injectData}
            />
            <TextArea
              name={'代理商简介'}
              selfSpan={24}
              labelCol={'6'}
              wrapperCol={'17'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'agencyProfile'}
              maxLength={500}
              allowClear={true}
              $$componentItem={{
                id: 'TextArea_806731',
                uid: 'TextArea_806731',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_806731')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(
  Jituanduancaixindailishangtuichubaobeidanxinzeng4730copycopy$$Modal,
  {
    pageId,
    hasLogin: false,
    defaultState: {
      bizId: '',
      sceneCode: '',
      bizData: '',
      officialAgencyList: '',
    },
  },
);
