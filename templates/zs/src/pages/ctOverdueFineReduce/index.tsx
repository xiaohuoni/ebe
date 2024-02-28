// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Checkbox } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '896996729089400832';
const CtOverdueFineReduce$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse263: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '418362',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '!=',
              manualValue: ' V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166554416577663740,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166554416577620200,
            children: [
              {
                dataName: 'action',
                dataId: 166554416577617600,
                children: [],
                todoOptions: [],
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '47658124',
                  pageJsonId: '308615',
                },
                actionObjId: 'closeModal',
                actionObjName: 'page',
                value: 'closeModal',
                line_number: 11,
              },
            ],
            condition: [],
            desc: '',
            callback: [
              {
                type: 'closeModal',
                dataId: 166554416577617600,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '47658124',
                  pageJsonId: '308615',
                },
                line_number: 11,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 166554418732803000,
            options: {
              compId: 'Form_174067',
              compLib: 'comm',
              pageJsonId: '308615',
              compName: 'Form',
              id: '6269929',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166554419688741470,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '376126',
                  pageJsonId: '308615',
                  code: 'function main(data,state,success,fail){var oldRowId=data.ctOverdueFineReduce.rowId;data.ctOverdueFineReduce=Form_174067;if(state.ctOverdueFineReduce==undefined||state.ctOverdueFineReduce==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.ctOverdueFineReduce.rowId=rowId}else{data.ctOverdueFineReduce.rowId=oldRowId}console.log(data.ctOverdueFineReduce);success(data.ctOverdueFineReduce)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 166554419688768000,
                    shielding: true,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '890724',
                      pageJsonId: '308615',
                      params: '$data.ctOverdueFineReduce$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166554419688757500,
                    shielding: true,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '692685',
                      pageJsonId: '308615',
                    },
                    line_number: 5,
                  },
                ],
                callback2: [],
              },
              {
                type: 'getValue',
                dataId: 168562296637685540,
                options: {
                  compId: 'Checkbox_755565',
                  compLib: 'comm',
                  pageJsonId: '308615',
                  compName: 'Checkbox',
                  id: '128534',
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'console',
                    dataId: 168562297039476260,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '371952',
                      pageJsonId: '308615',
                      value: ['$value_128534$'],
                    },
                    line_number: 7,
                  },
                  {
                    type: 'customActionCode',
                    dataId: 168562300400192930,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '48652',
                      pageJsonId: '308615',
                      code: 'function main(data,state,success,fail){var oldRowId=data.ctOverdueFineReduce.rowId;data.ctOverdueFineReduce=Form_174067;data.ctOverdueFineReduce.isCriterion=value_128534;if(state.ctOverdueFineReduce==undefined||state.ctOverdueFineReduce==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.ctOverdueFineReduce.rowId=rowId}else{data.ctOverdueFineReduce.rowId=oldRowId}console.log(data.ctOverdueFineReduce);success(data.ctOverdueFineReduce)};',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 168562300400100740,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '447112',
                          pageJsonId: '308615',
                          params: '$data.ctOverdueFineReduce$',
                        },
                        line_number: 9,
                      },
                      {
                        type: 'closeModal',
                        dataId: 168562300400121020,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '9002551',
                          pageJsonId: '308615',
                        },
                        line_number: 10,
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
      },
    ];
    eventDataifelse263.params = [] || [];
    CMDGenerator(eventDataifelse263, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal77: any = [
      {
        type: 'closeModal',
        dataId: '378802_1',
        options: { compId: 'page', compName: 'page', id: '599484' },
        line_number: 1,
      },
    ];
    eventDatacloseModal77.params = [] || [];
    CMDGenerator(eventDatacloseModal77, {}, 'closeModal', {
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
    const eventDatasetDataSource19: any = [
      {
        type: 'setDataSource',
        dataId: 166554201725251330,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '389421',
          pageJsonId: '308615',
          dataSourceId: 166547366786954300,
          dataSourceName: 'ctOverdueFineReduce',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '884727',
              code: 'accountCode',
              name: '集团CT账户编码',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'accountCode',
              },
            },
            {
              attrId: '083311',
              code: 'accountName',
              name: '账户名称',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'accountName',
              },
            },
            {
              attrId: '487409',
              code: 'principal',
              name: '本金（元）',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'principal',
              },
            },
            {
              attrId: '797517',
              code: 'isCriterion',
              name: '以最终产生滞纳金为准',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'isCriterion',
              },
            },
            {
              attrId: '568045',
              code: 'overdueFine',
              name: '滞纳金（元）',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'overdueFine',
              },
            },
            {
              attrId: '504982',
              code: 'reduceFine',
              name: '滞纳金减免金额（元）',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'reduceFine',
              },
            },
            {
              attrId: '298388',
              code: 'duration',
              name: '滞纳金产生时长（天）',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'duration',
              },
            },
            {
              attrId: '7481086',
              code: 'rowId',
              name: '行id',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['context', '$state.ctOverdueFineReduce$'],
                code: 'rowId',
              },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '8035445',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.sceneCode$',
                  operate: '==',
                  manualValue: 'V',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166554426030870980,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'setDisable',
                dataId: 166554429733432740,
                options: {
                  compId: 'Form_174067',
                  compLib: 'comm',
                  pageJsonId: '308615',
                  compName: 'Form',
                  id: '64607',
                  disabled: 'true',
                },
                line_number: 3,
              },
              {
                type: 'setDisable',
                dataId: 166554434542217860,
                options: {
                  compId: 'Checkbox_755565',
                  compLib: 'comm',
                  pageJsonId: '308615',
                  compName: 'Checkbox',
                  id: '818498',
                  disabled: 'true',
                },
                line_number: 4,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatasetDataSource19.params = [] || [];
    CMDGenerator(eventDatasetDataSource19, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_308615__"
    >
      <View
        className="View_View_308615_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_308615_1',
          uid: 'View_308615_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_308615_1')}
        {...injectData}
      >
        <View
          className="View_View_2909057"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_2909057',
            uid: 'View_2909057',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_2909057')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={12}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_174067'}
            $$componentItem={{
              id: 'Form_174067',
              uid: 'Form_174067',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_174067')}
            {...injectData}
          >
            <Input
              name={'集团CT账户编码'}
              size={'default'}
              selfSpan={12}
              labelCol={'8'}
              wrapperCol={'14'}
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
              fieldName={'accountCode'}
              value={data?.ctOverdueFineReduce?.accountCode}
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
                id: 'Input_799131',
                uid: 'Input_799131',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_799131')}
              {...injectData}
            />
            <Input
              name={'账户名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'14'}
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
              fieldName={'accountName'}
              value={data?.ctOverdueFineReduce?.accountName}
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
                id: 'Input_925934',
                uid: 'Input_925934',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_925934')}
              {...injectData}
            />
            <Checkbox
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'right'}
              text={'减免以最终产生的滞纳金为准'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              formItemIndex={2}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={'减免以最终产生的滞纳金为准'}
              fieldName={'isCriterion'}
              defaultChecked={true}
              required={false}
              value={data?.ctOverdueFineReduce?.isCriterion}
              $$componentItem={{
                id: 'Checkbox_755565',
                uid: 'Checkbox_755565',
                type: 'Checkbox',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ margin: '16px 0px 0px 60px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Checkbox_755565')}
              {...injectData}
            />
            <View
              className="View_View_0050885"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_0050885',
                uid: 'View_0050885',
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
                  formItemIndex: 3,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                padding: 'px px px px',
                width: '100%',
                height: '1px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_0050885')}
              {...injectData}
            />
            <Input
              name={'滞纳金'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'overdueFine'}
              value={data?.ctOverdueFineReduce?.overdueFine}
              regexp={[
                {
                  id: '604341',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_559022',
                uid: 'Input_559022',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_559022')}
              {...injectData}
            />
            <Input
              name={'滞纳金减免金额'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'reduceFine'}
              value={data?.ctOverdueFineReduce?.reduceFine}
              regexp={[
                {
                  id: '575141',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_479531',
                uid: 'Input_479531',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_479531')}
              {...injectData}
            />
            <Input
              name={'本金'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={6}
              fieldName={'principal'}
              value={data?.ctOverdueFineReduce?.principal}
              regexp={[
                {
                  id: '276672',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_04993',
                uid: 'Input_04993',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_04993')}
              {...injectData}
            />
            <Input
              name={'滞纳金产生时长'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'天'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={7}
              fieldName={'duration'}
              value={data?.ctOverdueFineReduce?.duration}
              regexp={[
                {
                  id: '011901',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
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
                id: 'Input_52206127',
                uid: 'Input_52206127',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_52206127')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CtOverdueFineReduce$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', ctOverdueFineReduce: '' },
});
