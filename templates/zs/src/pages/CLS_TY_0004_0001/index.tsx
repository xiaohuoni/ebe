// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Row,
  Table,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsTy_0004_0001$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    const eventDataifelse245: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166132402524071650,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){if(attrList[i].attrValueDesc!=undefined&&""!=attrList[i].attrValueDesc){factorForm[attrList[i].attrCode]=attrList[i].attrValueDesc}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132641356637300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '172885',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '08707745',
                      code: 'totalOccurredWorkload',
                      name: '累计已发生工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '359926',
                      code: 'predictWorkload',
                      name: '预估工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '65306653',
                      code: 'secondPredictWorkload',
                      name: '二次预估工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '183177',
                      code: 'totalWorkload',
                      name: '累计工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '981621',
                      code: 'predictWorkloadOvertimeReason',
                      name: '预估工作量超时变更原因',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166330768809238530,
                options: {
                  compId: 'Input_361479_887285_2150708_0235518_772568',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '806092',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_0235518_772568:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 4,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDisable',
            dataId: 166436762834754240,
            options: {
              compId: ['Form_412511', 'Form_136577', 'Form_379443'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Form',
              id: '538402',
              disabled: 'true',
              compid: ['Form_412511', 'Form_136577', 'Form_379443'],
            },
            line_number: 5,
          },
          {
            type: 'setDataSource',
            dataId: 167749044206174660,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '337044',
              pageJsonId: '537892',
              dataSourceId: 167749005016382980,
              dataSourceName: 'busiInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '544528',
                  code: 'busiOppCode',
                  name: '商机编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.busiOppCode$',
                  },
                },
                {
                  attrId: '832242',
                  code: 'busiOppName',
                  name: '商机名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.busiOppName$',
                  },
                },
                {
                  attrId: '6310653',
                  code: 'custBudget',
                  name: '客户预算',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.custBudget$',
                  },
                },
                {
                  attrId: '266489',
                  code: 'busiBudget',
                  name: '业务预算',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.busiBudget$',
                  },
                },
                {
                  attrId: '94808',
                  code: 'busiOppBigType',
                  name: '商机大类',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.busiOppBigType$',
                  },
                },
                {
                  attrId: '689124',
                  code: 'busiOppLevel',
                  name: '商机等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.busiOppLevel$',
                  },
                },
                {
                  attrId: '98363',
                  code: 'belongCityText',
                  name: '商机归属地市',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.belongCityText$',
                  },
                },
                {
                  attrId: '782724',
                  code: 'belongAreaText',
                  name: '商机归属县市',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.busiOppInfoObj.belongAreaText$',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 6,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 167749058306839170,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '592797',
              pageJsonId: '537892',
              dataSourceId: 167749014258964030,
              dataSourceName: 'custInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '546414',
                  code: 'groupCode',
                  name: '集团编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.groupCode$',
                  },
                },
                {
                  attrId: '939348',
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.groupName$',
                  },
                },
                {
                  attrId: '4263487',
                  code: 'groupValueLevel',
                  name: '集团价值等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.groupValueLevel$',
                  },
                },
                {
                  attrId: '7801265',
                  code: 'enterpriseType',
                  name: '企业类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.enterpriseType$',
                  },
                },
                {
                  attrId: '1785994',
                  code: 'custManagerName',
                  name: '客户经理姓名',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.custManagerName$',
                  },
                },
                {
                  attrId: '37395284',
                  code: 'custManagerTel',
                  name: '客户经理电话',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.custManagerTel$',
                  },
                },
                {
                  attrId: '0440403',
                  code: 'belongCityText',
                  name: '集团归属地市',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.belongCityText$',
                  },
                },
                {
                  attrId: '2887267',
                  code: 'belongAreaText',
                  name: '集团归属县市',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.belongAreaText$',
                  },
                },
                {
                  attrId: '072044',
                  code: 'industryType',
                  name: '行业类型(大类)',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$state.itemList.customObject.groupInfoObj.industryType$',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 7,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse245.params = [] || [];
    CMDGenerator(eventDataifelse245, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_537892__"
    >
      <View
        name={'页面'}
        className={'fixed-form-item-label-width-120'}
        $$componentItem={{
          id: 'View_537892_1',
          uid: 'View_537892_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'visible',
          width: '100.',
          overflow: 'hidden',
        }}
        ref={(r: any) => (refs['View_537892_1'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'售前工作量预估'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_719552',
            uid: 'Divider_719552',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_719552'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553',
            uid: 'View_6806553',
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
            height: 'auto',
            overflowY: 'hidden',
            margin: '0px 0px 16px 0px',
          }}
          ref={(r: any) => (refs['View_6806553'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602',
              uid: 'HorizontalView_004602',
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
            ref={(r: any) => (refs['HorizontalView_004602'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406',
                uid: 'View_339406',
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
              ref={(r: any) => (refs['View_339406'] = r)}
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
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_1929847_738917',
                  uid: 'Form_4311097_9385662_1929847_738917',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_1929847_738917'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'售前工作量预估'}
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
                    id: 'Checkbox_882584_5289015_934499_57326296_002468',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Checkbox_882584_5289015_934499_57326296_002468'] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_0477386',
                    uid: 'View_0477386',
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
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['View_0477386'] = r)}
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
                    id: 'Input_361479_887285_2150708_0235518_772568',
                    uid: 'Input_361479_887285_2150708_0235518_772568',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_361479_887285_2150708_0235518_772568'] = r)
                  }
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
          formCode={'Form_412511'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.factorForm}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_412511',
            uid: 'Form_412511',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource202: any = [
              {
                type: 'setDataSource',
                dataId: 166633731803530800,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '7368834',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '08707745',
                      code: 'totalOccurredWorkload',
                      name: '累计已发生工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'totalOccurredWorkload',
                      },
                    },
                    {
                      attrId: '359926',
                      code: 'predictWorkload',
                      name: '预估工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'predictWorkload',
                      },
                    },
                    {
                      attrId: '65306653',
                      code: 'secondPredictWorkload',
                      name: '二次预估工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'secondPredictWorkload',
                      },
                    },
                    {
                      attrId: '183177',
                      code: 'totalWorkload',
                      name: '累计工作量',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '981621',
                      code: 'predictWorkloadOvertimeReason',
                      name: '预估工作量超时变更原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'predictWorkloadOvertimeReason',
                      },
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource202.params = [] || [];
            CMDGenerator(eventDatasetDataSource202, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Form_412511'] = r)}
          {...injectData}
        >
          <Input
            name={'累计已发生工作量'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'天'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'totalOccurredWorkload'}
            value={data?.factorForm?.totalOccurredWorkload}
            formItemIndex={0}
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
              id: 'Input_totalOccurredWorkload_9964',
              uid: 'Input_totalOccurredWorkload_9964',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_totalOccurredWorkload_9964'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_217266',
              uid: 'View_217266',
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
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_217266'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1154496',
              uid: 'View_1154496',
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
                formItemIndex: 2,
                style: undefined,
                selfSpan: undefined,
              },
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_1154496'] = r)}
            {...injectData}
          />
          <Input
            name={'预估工作量'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'天'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'predictWorkload'}
            value={data?.factorForm?.predictWorkload}
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
              id: 'Input_predictWorkload_2643264',
              uid: 'Input_predictWorkload_2643264',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_predictWorkload_2643264'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_5401066',
              uid: 'View_5401066',
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
                formItemIndex: 4,
                style: undefined,
                selfSpan: undefined,
              },
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_5401066'] = r)}
            {...injectData}
          />
          <Input
            name={'二次预估工作量'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'天'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'secondPredictWorkload'}
            value={data?.factorForm?.secondPredictWorkload}
            formItemIndex={5}
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
              id: 'Input_secondPredictWorkload_795008',
              uid: 'Input_secondPredictWorkload_795008',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_secondPredictWorkload_795008'] = r)}
            {...injectData}
          />
          <TextArea
            name={'预估工作量超时变更原因'}
            selfSpan={24}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            fieldName={'predictWorkloadOvertimeReason'}
            value={data?.factorForm?.predictWorkloadOvertimeReason}
            formItemIndex={6}
            $$componentItem={{
              id: 'Input_predictWorkloadOvertimeReason_149552',
              uid: 'Input_predictWorkloadOvertimeReason_149552',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              (refs['Input_predictWorkloadOvertimeReason_149552'] = r)
            }
            {...injectData}
          />
        </Form>
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134_9967395',
            uid: 'Row_2802134_9967395',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            margin: '10px 0px 0px 0px',
            'line-height': '32px',
            'font-weight': 'bold',
            display: 'flex',
          }}
          ref={(r: any) => (refs['Row_2802134_9967395'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 商机信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514_9618928',
              uid: 'Text_467514_9618928',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => (refs['Text_467514_9618928'] = r)}
            {...injectData}
          />
        </Row>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_637025',
            uid: 'View_637025',
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
          ref={(r: any) => (refs['View_637025'] = r)}
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
            formCode={'Form_136577'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.busiInfo}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_136577',
              uid: 'Form_136577',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource203: any = [
                {
                  type: 'setDataSource',
                  dataId: 167749016900184640,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '899835',
                    pageJsonId: '537892',
                    dataSourceId: 167749005016382980,
                    dataSourceName: 'busiInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '544528',
                        code: 'busiOppCode',
                        name: '商机编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'busiOppCode',
                        },
                      },
                      {
                        attrId: '832242',
                        code: 'busiOppName',
                        name: '商机名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'busiOppName',
                        },
                      },
                      {
                        attrId: '6310653',
                        code: 'custBudget',
                        name: '客户预算',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'custBudget',
                        },
                      },
                      {
                        attrId: '266489',
                        code: 'busiBudget',
                        name: '业务预算',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'busiBudget',
                        },
                      },
                      {
                        attrId: '94808',
                        code: 'busiOppBigType',
                        name: '商机大类',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'busiOppBigType',
                        },
                      },
                      {
                        attrId: '689124',
                        code: 'busiOppLevel',
                        name: '商机等级',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'busiOppLevel',
                        },
                      },
                      {
                        attrId: '98363',
                        code: 'belongCityText',
                        name: '商机归属地市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'belongCityText',
                        },
                      },
                      {
                        attrId: '782724',
                        code: 'belongAreaText',
                        name: '商机归属县市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_136577', 'getFieldsValue'],
                          code: 'belongAreaText',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource203.params =
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
                eventDatasetDataSource203,
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
            ref={(r: any) => (refs['Form_136577'] = r)}
            {...injectData}
          >
            <Input
              name={'商机编码'}
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
              fieldName={'busiOppCode'}
              value={data?.busiInfo?.busiOppCode}
              formItemIndex={0}
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
                id: 'Input_busiOppCode_7100048',
                uid: 'Input_busiOppCode_7100048',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_busiOppCode_7100048'] = r)}
              {...injectData}
            />
            <Input
              name={'商机名称'}
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
              fieldName={'busiOppName'}
              value={data?.busiInfo?.busiOppName}
              formItemIndex={1}
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
                id: 'Input_busiOppName_405015',
                uid: 'Input_busiOppName_405015',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_busiOppName_405015'] = r)}
              {...injectData}
            />
            <Input
              name={'客户预算'}
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
              fieldName={'custBudget'}
              value={data?.busiInfo?.custBudget}
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
                id: 'Input_custBudget_020255',
                uid: 'Input_custBudget_020255',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_custBudget_020255'] = r)}
              {...injectData}
            />
            <Input
              name={'业务预算'}
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
              fieldName={'busiBudget'}
              value={data?.busiInfo?.busiBudget}
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
                id: 'Input_busiBudget_6843243',
                uid: 'Input_busiBudget_6843243',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_busiBudget_6843243'] = r)}
              {...injectData}
            />
            <Input
              name={'商机大类'}
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
              fieldName={'busiOppBigType'}
              value={data?.busiInfo?.busiOppBigType}
              formItemIndex={4}
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
                id: 'Input_busiOppBigType_935045',
                uid: 'Input_busiOppBigType_935045',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_busiOppBigType_935045'] = r)}
              {...injectData}
            />
            <Input
              name={'商机等级'}
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
              fieldName={'busiOppLevel'}
              value={data?.busiInfo?.busiOppLevel}
              formItemIndex={5}
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
                id: 'Input_busiOppLevel_668737',
                uid: 'Input_busiOppLevel_668737',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_busiOppLevel_668737'] = r)}
              {...injectData}
            />
            <Input
              name={'商机归属地市'}
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
              fieldName={'belongCityText'}
              value={data?.busiInfo?.belongCityText}
              formItemIndex={6}
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
                id: 'Input_belongCityText_96204',
                uid: 'Input_belongCityText_96204',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_belongCityText_96204'] = r)}
              {...injectData}
            />
            <Input
              name={'商机归属县市'}
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
              fieldName={'belongAreaText'}
              value={data?.busiInfo?.belongAreaText}
              formItemIndex={7}
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
                id: 'Input_belongAreaText_3215141',
                uid: 'Input_belongAreaText_3215141',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_belongAreaText_3215141'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134_9967395_8869004',
            uid: 'Row_2802134_9967395_8869004',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            margin: '10px 0px 0px 0px',
            'line-height': '32px',
            'font-weight': 'bold',
            display: 'flex',
          }}
          ref={(r: any) => (refs['Row_2802134_9967395_8869004'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 集团信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514_9618928_417517',
              uid: 'Text_467514_9618928_417517',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => (refs['Text_467514_9618928_417517'] = r)}
            {...injectData}
          />
        </Row>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_686538',
            uid: 'View_686538',
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
          ref={(r: any) => (refs['View_686538'] = r)}
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
            formCode={'Form_379443'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.custInfo}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_379443',
              uid: 'Form_379443',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource204: any = [
                {
                  type: 'setDataSource',
                  dataId: 167749018346273860,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '0931835',
                    pageJsonId: '537892',
                    dataSourceId: 167749014258964030,
                    dataSourceName: 'custInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '546414',
                        code: 'groupCode',
                        name: '集团编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'groupCode',
                        },
                      },
                      {
                        attrId: '939348',
                        code: 'groupName',
                        name: '集团名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'groupName',
                        },
                      },
                      {
                        attrId: '4263487',
                        code: 'groupValueLevel',
                        name: '集团价值等级',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'groupValueLevel',
                        },
                      },
                      {
                        attrId: '7801265',
                        code: 'enterpriseType',
                        name: '企业类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'enterpriseType',
                        },
                      },
                      {
                        attrId: '1785994',
                        code: 'custManagerName',
                        name: '客户经理姓名',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'custManagerName',
                        },
                      },
                      {
                        attrId: '37395284',
                        code: 'custManagerTel',
                        name: '客户经理电话',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'custManagerTel',
                        },
                      },
                      {
                        attrId: '0440403',
                        code: 'belongCityText',
                        name: '集团归属地市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'belongCityText',
                        },
                      },
                      {
                        attrId: '2887267',
                        code: 'belongAreaText',
                        name: '集团归属县市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'belongAreaText',
                        },
                      },
                      {
                        attrId: '072044',
                        code: 'industryType',
                        name: '行业类型(大类)',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_379443', 'getFieldsValue'],
                          code: 'industryType',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource204.params =
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
                eventDatasetDataSource204,
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
            ref={(r: any) => (refs['Form_379443'] = r)}
            {...injectData}
          >
            <Input
              name={'集团编码'}
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
              fieldName={'groupCode'}
              value={data?.custInfo?.groupCode}
              formItemIndex={0}
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
                id: 'Input_groupCode_5453697',
                uid: 'Input_groupCode_5453697',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_groupCode_5453697'] = r)}
              {...injectData}
            />
            <Input
              name={'集团名称'}
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
              fieldName={'groupName'}
              value={data?.custInfo?.groupName}
              formItemIndex={1}
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
                id: 'Input_groupName_8451217',
                uid: 'Input_groupName_8451217',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_groupName_8451217'] = r)}
              {...injectData}
            />
            <Input
              name={'集团价值等级'}
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
              fieldName={'groupValueLevel'}
              value={data?.custInfo?.groupValueLevel}
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
                id: 'Input_groupValueLevel_161106',
                uid: 'Input_groupValueLevel_161106',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_groupValueLevel_161106'] = r)}
              {...injectData}
            />
            <Input
              name={'企业类型'}
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
              fieldName={'enterpriseType'}
              value={data?.custInfo?.enterpriseType}
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
                id: 'Input_enterpriseType_247945',
                uid: 'Input_enterpriseType_247945',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_enterpriseType_247945'] = r)}
              {...injectData}
            />
            <Input
              name={'客户经理姓名'}
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
              fieldName={'custManagerName'}
              value={data?.custInfo?.custManagerName}
              formItemIndex={4}
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
                id: 'Input_custManagerName_0180357',
                uid: 'Input_custManagerName_0180357',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_custManagerName_0180357'] = r)}
              {...injectData}
            />
            <Input
              name={'客户经理电话'}
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
              fieldName={'custManagerTel'}
              value={data?.custInfo?.custManagerTel}
              formItemIndex={5}
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
                id: 'Input_custManagerTel_3304574',
                uid: 'Input_custManagerTel_3304574',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_custManagerTel_3304574'] = r)}
              {...injectData}
            />
            <Input
              name={'集团归属地市'}
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
              fieldName={'belongCityText'}
              value={data?.custInfo?.belongCityText}
              formItemIndex={6}
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
                id: 'Input_belongCityText_6881933',
                uid: 'Input_belongCityText_6881933',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_belongCityText_6881933'] = r)}
              {...injectData}
            />
            <Input
              name={'集团归属县市'}
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
              fieldName={'belongAreaText'}
              value={data?.custInfo?.belongAreaText}
              formItemIndex={7}
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
                id: 'Input_belongAreaText_1238343',
                uid: 'Input_belongAreaText_1238343',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_belongAreaText_1238343'] = r)}
              {...injectData}
            />
            <Input
              name={'行业类型(大类)'}
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
              fieldName={'industryType'}
              value={data?.custInfo?.industryType}
              formItemIndex={8}
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
                id: 'Input_industryType_590738',
                uid: 'Input_industryType_590738',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_industryType_590738'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <View
          name={'布局容器'}
          formItemIndex={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093',
            uid: 'View_4949093',
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
          ref={(r: any) => (refs['View_4949093'] = r)}
          {...injectData}
        >
          <Table
            name={'附件'}
            isFlexColumn={false}
            pageSize={10}
            current={1}
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
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
                className: '',
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
                title: '附件类型',
                key: 'fileTypeName',
                dataIndex: 'fileTypeName',
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
                title: '创建人',
                key: 'createStaff',
                dataIndex: 'createStaff',
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
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
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
            page={false}
            rowKeyType={'specified'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.fileInfoList}
            rowActions={[]}
            extend={[
              {
                id: '5476746',
                title: '下载',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'download',
                  isIconFont: false,
                },
                checked: true,
              },
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_5369494',
              uid: 'Table_5369494',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode714: any = [
                {
                  type: 'customActionCode',
                  dataId: 166192918606345900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '8342055',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166193290759619360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '4133837',
                        pageJsonId: '537892',
                        dataSourceId: 166192841018643170,
                        dataSourceName: 'fileInfoList',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            code: 'fileName',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件名称',
                            defaultValue: '',
                            name: '附件名称',
                            attrId: '458544',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'filePath',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件路径',
                            defaultValue: '',
                            name: '附件文件路径',
                            attrId: '6354087',
                            initialData: {
                              type: 'static',
                              value: '附件文件路径',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileServerType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件服务器类型',
                            defaultValue: '',
                            name: '附件文件服务器类型',
                            attrId: '184934',
                            initialData: {
                              type: 'static',
                              value: '附件文件服务器类型',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileSubType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-细类',
                            defaultValue: '',
                            name: '属性',
                            attrId: '551676',
                            initialData: {
                              type: 'static',
                              value: '附件分类-细类',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-大类',
                            defaultValue: '',
                            name: '附件分类-大类',
                            attrId: '383524',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileUrl',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件url地址',
                            defaultValue: '',
                            name: '附件url地址',
                            attrId: '726875',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'tacheCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '环节编码',
                            defaultValue: '',
                            name: '环节编码',
                            attrId: '865444',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            attrId: '7419638',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '097484',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '604675',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '729925',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                        ],
                        newData: '$data_8342055$',
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166193296648446750,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '773871',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/commonAuditOrder',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode714.params =
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
                eventDatacustomActionCode714,
                { rowId, row, index },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatadownloadByFileId80: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166193298494793600,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '698245',
                    pageJsonId: '537892',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId80.params =
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
                eventDatadownloadByFileId80,
                { rowId, row, index },
                'downloadByFileId',
                {
                  id: 'downloadByFileId',
                  name: 'downloadByFileId',
                  type: 'downloadByFileId',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_5369494'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsTy_0004_0001$$Page, {
  pageId: '947412922834137088',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
