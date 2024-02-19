// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0002_0017$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_570217: any) => {
    const eventDatacustomActionCode158: any = [
      {
        type: 'customActionCode',
        dataId: 168551798763082300,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '919828',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168551798763065600,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '999033',
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
    eventDatacustomActionCode158.params =
      [
        {
          title: '事件入参',
          name: 'options_570217',
          value: '$options_570217$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode158,
      { options_570217 },
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
    const eventDatacustomActionCode272: any = [
      {
        type: 'customActionCode',
        dataId: 168239000340142750,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '961968',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}success(form)};',
          actionTitle: '表单加载',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168239000340103600,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '34787',
              pageJsonId: '7946678',
              dataSourceId: 168238985417875000,
              dataSourceName: '$dataform',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '502629',
                  code: 'ctGroupCode',
                  name: 'CT集团编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_961968$'],
                    code: 'ctGroupCode',
                  },
                  _codePath: ['ctGroupCode'],
                  _idpath: ['502629'],
                },
                {
                  attrId: '6421093',
                  code: 'ordSerialNum',
                  name: '订单流水',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_961968$'],
                    code: 'ordSerialNum',
                  },
                  _codePath: ['ordSerialNum'],
                  _idpath: ['6421093'],
                },
                {
                  attrId: '21013',
                  code: 'effTime',
                  name: '生效时间',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_961968$'],
                    code: 'effTime',
                  },
                  _codePath: ['effTime'],
                  _idpath: ['21013'],
                },
                {
                  attrId: '762376',
                  code: 'expTime',
                  name: '失效时间',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_961968$'],
                    code: 'expTime',
                  },
                  _codePath: ['expTime'],
                  _idpath: ['762376'],
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
            dataId: 168239000340116640,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '356521',
              pageJsonId: '7946678',
              value: ['awdawdasdawd'],
            },
            line_number: 3,
          },
          {
            type: 'setValue',
            dataId: 168247637646834100,
            options: {
              compId: ['Input_4043608'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '9847245',
              value: '$state.itemList.approveGradeName$',
              valueList: { Input_4043608: '$state.itemList.approveGradeName$' },
              compid: ['Input_4043608'],
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode272.params = [] || [];
    CMDGenerator(eventDatacustomActionCode272, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode273: any = [
      {
        type: 'customActionCode',
        dataId: 168482570357975780,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '0637513',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var fileInfo=itemList.fileInfo;success(fileInfo)};',
          actionTitle: '附件',
        },
        line_number: 5,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168482570357970240,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '117139',
              pageJsonId: '7946678',
              dataSourceId: 168238995184483040,
              dataSourceName: 'fileInfoList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'fileName',
                  name: '属性',
                  type: 'string',
                  attrId: '5458677',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'filePath',
                  name: '属性',
                  type: 'string',
                  attrId: '0572537',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'fileServerType',
                  name: '属性',
                  type: 'string',
                  attrId: '14289836',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'fileSubType',
                  name: '属性',
                  type: 'string',
                  attrId: '415685',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'fileType',
                  name: '属性',
                  type: 'string',
                  attrId: '587313',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'fileUrl',
                  name: '属性',
                  type: 'string',
                  attrId: '028297',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'tacheCode',
                  name: '属性',
                  type: 'string',
                  attrId: '436281',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'fileCode',
                  name: '属性',
                  type: 'string',
                  attrId: '308511',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'createTime',
                  name: '属性',
                  type: 'string',
                  attrId: '4755938',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'createStaff',
                  name: '属性',
                  type: 'string',
                  attrId: '4904',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'fileTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '1975315',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
              newData: ' $data_0637513$',
            },
            line_number: 6,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168482570357968030,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '731634',
              pageJsonId: '7946678',
              value: ['file', '$data_0637513$'],
            },
            line_number: 7,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode273.params = [] || [];
    CMDGenerator(eventDatacustomActionCode273, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetTimer5: any = [
      {
        type: 'setTimer',
        dataId: 168551684633559800,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '650077',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
          timername: '隐藏上一步按钮',
        },
        line_number: 8,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168551684633599260,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '4791767',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 9,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168835362706197220,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '2438056',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
              actionTitle: '不同意不允许重复提交',
            },
            line_number: 10,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168835362706175500,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '237931',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                },
                line_number: 11,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer5.params = [] || [];
    CMDGenerator(eventDatasetTimer5, {}, 'setTimer', {
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
      className="__CustomClass_841291__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_841291_1',
          uid: 'View_841291_1',
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
        ref={(r: any) => (refs['View_841291_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_0968674',
            uid: 'View_0968674',
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
          ref={(r: any) => (refs['View_0968674'] = r)}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'NB接入4G网络白名单'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_282876',
              uid: 'Divider_282876',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => (refs['Divider_282876'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_602102',
              uid: 'View_602102',
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
            ref={(r: any) => (refs['View_602102'] = r)}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_2533504',
                uid: 'HorizontalView_2533504',
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
              ref={(r: any) => (refs['HorizontalView_2533504'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_5909674',
                  uid: 'View_5909674',
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
                ref={(r: any) => (refs['View_5909674'] = r)}
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
                    id: 'Form_542065',
                    uid: 'Form_542065',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_542065'] = r)}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'NB接入4G网络白名单'}
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
                      id: 'Checkbox_514197',
                      uid: 'Checkbox_514197',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Checkbox_514197'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_9696068',
                      uid: 'View_9696068',
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
                    ref={(r: any) => (refs['View_9696068'] = r)}
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
                      id: 'Input_4043608',
                      uid: 'Input_4043608',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_4043608'] = r)}
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
              id: 'Form_777641',
              uid: 'Form_777641',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_777641'] = r)}
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
                id: 'Input_743019',
                uid: 'Input_743019',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_743019'] = r)}
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
                id: 'Input_155171',
                uid: 'Input_155171',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_155171'] = r)}
              {...injectData}
            />
            <Input
              name={'生效时间'}
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
              fieldName={'effTime'}
              value={data?.$dataform?.effTime}
              formItemIndex={2}
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
                id: 'Input_049222',
                uid: 'Input_049222',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_049222'] = r)}
              {...injectData}
            />
            <Input
              name={'失效时间'}
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
              fieldName={'expTime'}
              value={data?.$dataform?.expTime}
              formItemIndex={3}
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
                id: 'Input_40360073',
                uid: 'Input_40360073',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_40360073'] = r)}
              {...injectData}
            />
          </Form>
        </View>
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
          ref={(r: any) => (refs['BOFramer_625733'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0017$$Page, {
  pageId: '967975614291091456',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
