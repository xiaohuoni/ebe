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

const pageId = '967976937472368640';
const ClsCp_0002_0018$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_476935: any) => {
    const eventDatacustomActionCode162: any = [
      {
        type: 'customActionCode',
        dataId: 168595630068986020,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '276218',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595630068957300,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '993868',
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
    eventDatacustomActionCode162.params =
      [
        {
          title: '事件入参',
          name: 'options_476935',
          value: '$options_476935$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode162,
      { options_476935 },
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
    const eventDatacustomActionCode279: any = [
      {
        type: 'customActionCode',
        dataId: 168239017716552540,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9468497',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}success(form)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168239017716556300,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '072631',
              pageJsonId: '7946678',
              dataSourceId: 168239014390215800,
              dataSourceName: '$dataform',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '751562',
                  code: 'ctGroupCode',
                  name: 'CT集团编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_9468497$'],
                    code: 'ctGroupCode',
                  },
                },
                {
                  attrId: '451134',
                  code: 'ordSerialNum',
                  name: '订单流水',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_9468497$'],
                    code: 'ordSerialNum',
                  },
                },
                {
                  attrId: '588595',
                  code: 'effTime',
                  name: '生效时间',
                  type: 'date',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_9468497$'],
                    code: 'effTime',
                  },
                },
                {
                  attrId: '1662014',
                  code: 'expTime',
                  name: '失效时间',
                  type: 'date',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_9468497$'],
                    code: 'expTime',
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
          {
            type: 'console',
            dataId: 168239017716575070,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '560842',
              pageJsonId: '7946678',
              value: ['test', '$data_9468497$'],
            },
            line_number: 3,
          },
          {
            type: 'setValue',
            dataId: 168247635672031230,
            options: {
              compId: ['Input_680164'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '771878',
              value: '$state.itemList.approveGradeName$',
              valueList: { Input_680164: '$state.itemList.approveGradeName$' },
              compid: ['Input_680164'],
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode279.params = [] || [];
    CMDGenerator(eventDatacustomActionCode279, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode280: any = [
      {
        type: 'customActionCode',
        dataId: 168432053473595700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '794258',
          pageJsonId: '841291',
          code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
        },
        line_number: 5,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168432053473500300,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '102975',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'disableSubmit',
            },
            line_number: 6,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode280.params = [] || [];
    CMDGenerator(eventDatacustomActionCode280, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode281: any = [
      {
        type: 'customActionCode',
        dataId: 168482568553815550,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '482403',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var fileInfo=itemList.fileInfo;success(fileInfo)};',
        },
        line_number: 7,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168482568553832740,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '35725',
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
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
                    type: ['context', '$data_482403$'],
                    code: 'fileTypeName',
                  },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
              newData: '$data_482403$',
            },
            line_number: 8,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168482568553854660,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '222941',
              pageJsonId: '7946678',
              value: ['file', '$data_482403$'],
            },
            line_number: 9,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode281.params = [] || [];
    CMDGenerator(eventDatacustomActionCode281, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetTimer8: any = [
      {
        type: 'setTimer',
        dataId: 168551612843367330,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '798612',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
        },
        line_number: 10,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168551612843328580,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '2870263',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 11,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer8.params = [] || [];
    CMDGenerator(eventDatasetTimer8, {}, 'setTimer', {
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
      className="__CustomClass_0255876__"
    >
      <View
        className="View_View_0255876_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_0255876_1',
          uid: 'View_0255876_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_0255876_1')}
        {...injectData}
      >
        <View
          className="View_View_924135"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_924135',
            uid: 'View_924135',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_924135')}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'免收停机保号费白名单'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_988927',
              uid: 'Divider_988927',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_988927')}
            {...injectData}
          />
          <View
            className="View_View_120853"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_120853',
              uid: 'View_120853',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_120853')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_280735',
                uid: 'HorizontalView_280735',
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
              ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_280735')}
              {...injectData}
            >
              <View
                className="View_View_709283"
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_709283',
                  uid: 'View_709283',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_709283')}
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
                    id: 'Form_900632',
                    uid: 'Form_900632',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_900632')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'免收停机保号费白名单'}
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
                      id: 'Checkbox_863779',
                      uid: 'Checkbox_863779',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Checkbox_863779')}
                    {...injectData}
                  />
                  <View
                    className="View_View_263247"
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_263247',
                      uid: 'View_263247',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_263247')}
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
                      id: 'Input_680164',
                      uid: 'Input_680164',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_680164')}
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
              id: 'Form_1583186',
              uid: 'Form_1583186',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_1583186')}
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
                id: 'Input_1946759',
                uid: 'Input_1946759',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_1946759')}
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
                id: 'Input_5863596',
                uid: 'Input_5863596',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5863596')}
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
              formItemIndex={3}
              fieldName={'effTime'}
              value={data?.$dataform?.effTime}
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
                id: 'Input_5164583',
                uid: 'Input_5164583',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5164583')}
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
              formItemIndex={4}
              fieldName={'expTime'}
              value={data?.$dataform?.expTime}
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
                id: 'Input_634504',
                uid: 'Input_634504',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_634504')}
              {...injectData}
            />
          </Form>
          <BusiComp0521965
            pageId={pageId}
            busiCompId={'922396081753948160'}
            name={'附件'}
            formItemIndex={5}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_415396')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0018$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
