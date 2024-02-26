// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '966590459412455424';
const ClsCp_0002_0015$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_515159: any) => {
    const eventDatacustomActionCode157: any = [
      {
        type: 'customActionCode',
        dataId: 168595626434946370,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '727705',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595626434964600,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '867786',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode157.params =
      [
        {
          title: '事件入参',
          name: 'options_515159',
          value: '$options_515159$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode157,
      { options_515159 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
  }));

  useEffect(() => {
    const eventDatacustomActionCode269: any = [
      {
        type: 'customActionCode',
        dataId: 168232164327147650,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '572351',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}success(form)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168232164327182140,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '984044',
              pageJsonId: '7946678',
              dataSourceId: 168204812158261920,
              dataSourceName: '$dataform',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '765472',
                  code: 'ctGroupCode',
                  name: 'CT集团编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_572351$'],
                    code: 'ctGroupCode',
                  },
                },
                {
                  attrId: '6207827',
                  code: 'ordSerialNum',
                  name: '订单流水',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_572351$'],
                    code: 'ordSerialNum',
                  },
                },
                {
                  attrId: '4427544',
                  code: 'validityDate',
                  name: '有效期（自然天）',
                  type: 'number',
                  initialData: { type: 'static', value: '' },
                  showInput: true,
                  value: { type: [], code: '' },
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
          {
            type: 'console',
            dataId: 168232164327104900,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '6338146',
              pageJsonId: '7946678',
              value: ['$data_572351$'],
            },
            line_number: 3,
          },
          {
            type: 'setValue',
            dataId: 168247325817747040,
            options: {
              compId: ['Input_482962'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '4011626',
              value: '$state.itemList.approveGradeName$',
              valueList: { Input_482962: '$state.itemList.approveGradeName$' },
              compid: ['Input_482962'],
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode269.params = [] || [];
    CMDGenerator(eventDatacustomActionCode269, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacallCustomPageFunc2: any = [
      {
        type: 'callCustomPageFunc',
        dataId: 168431588908915620,
        shielding: true,
        options: {
          compId: 'callCustomPageFunc',
          compName: 'system',
          id: '482766',
          pageJsonId: '841291',
          pathname: '/flow/audit',
          pageId: '874567207627108352',
          modalPath: '/flow/audit',
          customFuncName: 'hidePreviousStep',
        },
        line_number: 5,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallCustomPageFunc2.params = [] || [];
    CMDGenerator(eventDatacallCustomPageFunc2, {}, 'callCustomPageFunc', {
      id: 'callCustomPageFunc',
      name: 'callCustomPageFunc',
      type: 'callCustomPageFunc',
      platform: 'undefined',
    });
    const eventDatacustomActionCode270: any = [
      {
        type: 'customActionCode',
        dataId: 168432054868824800,
        shielding: true,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '34391526',
          pageJsonId: '841291',
          code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
        },
        line_number: 6,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168432054868897630,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '324049',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'disableSubmit',
            },
            line_number: 7,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode270.params = [] || [];
    CMDGenerator(eventDatacustomActionCode270, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode271: any = [
      {
        type: 'customActionCode',
        dataId: 168482572994603550,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '993591',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var fileInfo=itemList.fileInfo;success(fileInfo)};',
        },
        line_number: 8,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168482572994625920,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '152498',
              pageJsonId: '7946678',
              dataSourceId: 168239016010182340,
              dataSourceName: 'fileInfoList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'fileName',
                  name: '属性',
                  type: 'string',
                  attrId: '211202',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileName',
                  },
                },
                {
                  code: 'filePath',
                  name: '属性',
                  type: 'string',
                  attrId: '799282',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'filePath',
                  },
                },
                {
                  code: 'fileServerType',
                  name: '属性',
                  type: 'string',
                  attrId: '0985954',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileServerType',
                  },
                },
                {
                  code: 'fileSubType',
                  name: '属性',
                  type: 'string',
                  attrId: '15741',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileSubType',
                  },
                },
                {
                  code: 'fileType',
                  name: '属性',
                  type: 'string',
                  attrId: '191375',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileType',
                  },
                },
                {
                  code: 'fileUrl',
                  name: '属性',
                  type: 'string',
                  attrId: '414466',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileUrl',
                  },
                },
                {
                  code: 'tacheCode',
                  name: '属性',
                  type: 'string',
                  attrId: '97181',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'tacheCode',
                  },
                },
                {
                  code: 'fileCode',
                  name: '属性',
                  type: 'string',
                  attrId: '5021635',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileCode',
                  },
                },
                {
                  code: 'createTime',
                  name: '属性',
                  type: 'string',
                  attrId: '908357',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'createTime',
                  },
                },
                {
                  code: 'createStaff',
                  name: '属性',
                  type: 'string',
                  attrId: '867941',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'createStaff',
                  },
                },
                {
                  code: 'fileTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '529226',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_993591$'],
                    code: 'fileTypeName',
                  },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
              newData: '$data_993591$',
            },
            line_number: 9,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168482572994646850,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '287936',
              pageJsonId: '7946678',
              value: ['file', '$data_993591$'],
            },
            line_number: 10,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode271.params = [] || [];
    CMDGenerator(eventDatacustomActionCode271, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetTimer4: any = [
      {
        type: 'setTimer',
        dataId: 168835417662826000,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '510825',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
        },
        line_number: 11,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168835417662892640,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '636363',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 12,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168835417662838720,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '5420067',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
            },
            line_number: 13,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168835417662826180,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '955791',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                },
                line_number: 14,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer4.params = [] || [];
    CMDGenerator(eventDatasetTimer4, {}, 'setTimer', {
      id: 'setTimer',
      name: 'setTimer',
      type: 'setTimer',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_887424__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_887424_1',
          uid: 'View_887424_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_887424_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_254915',
            uid: 'View_254915',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_254915')}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'逾期欠费白名单'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_811515',
              uid: 'Divider_811515',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_811515')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_659479',
              uid: 'View_659479',
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
              overflowY: 'hidden',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_659479')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_1128569',
                uid: 'HorizontalView_1128569',
                type: 'HorizontalView',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: 'auto',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'HorizontalView_1128569')
              }
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_515422',
                  uid: 'View_515422',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  height: 'auto',
                  overflowY: 'hidden',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_515422')}
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
                  formCode={'Form_4311097'}
                  $$componentItem={{
                    id: 'Form_159307',
                    uid: 'Form_159307',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_159307')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'逾期欠费白名单'}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={true}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    $$componentItem={{
                      id: 'Checkbox_4777784',
                      uid: 'Checkbox_4777784',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Checkbox_4777784')
                    }
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_955453',
                      uid: 'View_955453',
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
                        formItemIndex: 1,
                        style: undefined,
                        selfSpan: undefined,
                      },
                    }}
                    style={{
                      textAlign: 'left',
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_955453')}
                    {...injectData}
                  />
                  <Input
                    name={'场景最高审批等级'}
                    size={'default'}
                    selfSpan={8}
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
                    fieldName={'auditClass'}
                    formItemIndex={2}
                    className={'fixed-form-item-label-width-150'}
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
                      id: 'Input_482962',
                      uid: 'Input_482962',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_482962')}
                    {...injectData}
                  />
                </Form>
              </View>
            </HorizontalView>
          </View>
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
            formCode={'Form_1354964'}
            fieldName={'$dataform'}
            relationDataSource={data?.$dataform}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_522345',
              uid: 'Form_522345',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_522345')}
            {...injectData}
          >
            <Input
              name={'CT集团编码'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'ctGroupCode'}
              value={data?.$dataform?.ctGroupCode}
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
                id: 'Input_230927',
                uid: 'Input_230927',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_230927')}
              {...injectData}
            />
            <Input
              name={'订单流水'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'ordSerialNum'}
              value={data?.$dataform?.ordSerialNum}
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
                id: 'Input_635685',
                uid: 'Input_635685',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_635685')}
              {...injectData}
            />
          </Form>
          <BusiComp0521965
            busiCompId={'922396081753948160'}
            name={'附件'}
            formItemIndex={5}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_252152')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0015$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', itemList: '' },
});
