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

const pageId = '966590874468196352';
const ClsCp_0002_0016$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_229866: any) => {
    const eventDatacustomActionCode161: any = [
      {
        type: 'customActionCode',
        dataId: 168595625006993570,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '584042',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595625006973400,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '477173',
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
    eventDatacustomActionCode161.params =
      [
        {
          title: '事件入参',
          name: 'options_229866',
          value: '$options_229866$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode161,
      { options_229866 },
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
    const eventDatacustomActionCode276: any = [
      {
        type: 'customActionCode',
        dataId: 168232163130481540,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '389286',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}success(form)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 168247310616304300,
            options: {
              compId: ['Input_484518'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '6788334',
              value: '$state.itemList.approveGradeName$',
              valueList: { Input_484518: '$state.itemList.approveGradeName$' },
              compid: ['Input_484518'],
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'setDataSource',
            dataId: 168232163130500000,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '917101',
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
                    type: ['context', '$data_389286$'],
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
                    type: ['context', '$data_389286$'],
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
            line_number: 3,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168232163130439970,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '401969',
              pageJsonId: '7946678',
              value: ['$data_389286$'],
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode276.params = [] || [];
    CMDGenerator(eventDatacustomActionCode276, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacallCustomPageFunc3: any = [
      {
        type: 'callCustomPageFunc',
        dataId: 168431587575036500,
        shielding: true,
        options: {
          compId: 'callCustomPageFunc',
          compName: 'system',
          id: '719735',
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
    eventDatacallCustomPageFunc3.params = [] || [];
    CMDGenerator(eventDatacallCustomPageFunc3, {}, 'callCustomPageFunc', {
      id: 'callCustomPageFunc',
      name: 'callCustomPageFunc',
      type: 'callCustomPageFunc',
      platform: 'undefined',
    });
    const eventDatacustomActionCode277: any = [
      {
        type: 'customActionCode',
        dataId: 168432055964613540,
        shielding: true,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '984721',
          pageJsonId: '841291',
          code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
        },
        line_number: 6,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168432055964646800,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '991834',
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
    eventDatacustomActionCode277.params = [] || [];
    CMDGenerator(eventDatacustomActionCode277, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode278: any = [
      {
        type: 'customActionCode',
        dataId: 168482572370971200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '635231',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var fileInfo=itemList.fileInfo;success(fileInfo)};',
        },
        line_number: 8,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168482572370919800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '2320536',
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
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
                    type: ['context', '$data_635231$'],
                    code: 'fileTypeName',
                  },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
              newData: '$data_635231$',
            },
            line_number: 9,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168482572370961020,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '073108',
              pageJsonId: '7946678',
              value: ['file', '$data_635231$'],
            },
            line_number: 10,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode278.params = [] || [];
    CMDGenerator(eventDatacustomActionCode278, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetTimer7: any = [
      {
        type: 'setTimer',
        dataId: 168835420867754180,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '397344',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
        },
        line_number: 11,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168835420867755970,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '0265271',
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
            dataId: 168835420867743400,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '486655',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
            },
            line_number: 13,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168835420867895420,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '119559',
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
    eventDatasetTimer7.params = [] || [];
    CMDGenerator(eventDatasetTimer7, {}, 'setTimer', {
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
      className="__CustomClass_450669__"
    >
      <View
        className="View_View_450669_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_450669_1',
          uid: 'View_450669_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_450669_1')}
        {...injectData}
      >
        <View
          className="View_View_892358"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_892358',
            uid: 'View_892358',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_892358')}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'测试卡集团白名单'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_3987022',
              uid: 'Divider_3987022',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_3987022')}
            {...injectData}
          />
          <View
            className="View_View_9283586"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_9283586',
              uid: 'View_9283586',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_9283586')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_3131409',
                uid: 'HorizontalView_3131409',
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
                refs.setComponentRef(r, 'HorizontalView_3131409')
              }
              {...injectData}
            >
              <View
                className="View_View_694982"
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_694982',
                  uid: 'View_694982',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_694982')}
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
                    id: 'Form_194321',
                    uid: 'Form_194321',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_194321')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'测试卡集团白名单'}
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
                      id: 'Checkbox_200994',
                      uid: 'Checkbox_200994',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Checkbox_200994')}
                    {...injectData}
                  />
                  <View
                    className="View_View_910347"
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_910347',
                      uid: 'View_910347',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_910347')}
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
                      id: 'Input_484518',
                      uid: 'Input_484518',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_484518')}
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
              id: 'Form_872523',
              uid: 'Form_872523',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_872523')}
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
                id: 'Input_568815',
                uid: 'Input_568815',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_568815')}
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
                id: 'Input_672462',
                uid: 'Input_672462',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_672462')}
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
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_977906')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0016$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', itemList: '' },
});
