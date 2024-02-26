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

const pageId = '948777538214596608';
const ClsDz_0002_0001$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse276: any = [
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
                      code: 'cityName',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '359926',
                      code: 'areaName',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0073597',
                      code: 'monthName',
                      name: '月份',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '426495',
                      code: 'periods',
                      name: '旬',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '398797',
                      code: 'reportDimension',
                      name: '报表维度',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '5032014',
                      code: 'reportType',
                      name: '报表类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '5011484',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '1111989',
                      code: 'reportName',
                      name: '报表名称',
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
                dataId: 166436729866871200,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_0235518_772568_273065_514098',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '7001685',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_0235518_772568_273065_514098:
                      '$state.itemList.approveGradeName$',
                  },
                  compid: [
                    'Input_361479_887285_2150708_0235518_772568_273065_514098',
                  ],
                },
                line_number: 4,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDisable',
            dataId: 166436756146657440,
            options: {
              compId: [
                'Form_412511_107682',
                'Form_412511_107682_5442757',
                'Input_361479_887285_2150708_0235518_772568_273065_514098',
              ],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Form',
              id: '089897',
              disabled: 'true',
              compid: [
                'Form_412511_107682',
                'Form_412511_107682_5442757',
                'Input_361479_887285_2150708_0235518_772568_273065_514098',
              ],
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDataifelse276.params = [] || [];
    CMDGenerator(eventDataifelse276, {}, 'ifelse', {
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
        visible={true}
        className={'fixed-form-item-label-width-120'}
        $$componentItem={{
          id: 'View_537892_1_660616',
          uid: 'View_537892_1_660616',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'visible',
          width: '100.',
          overflow: 'hidden',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_660616')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'财务报表重新归档申请'}
          $$componentItem={{
            id: 'Divider_719552_00105',
            uid: 'Divider_719552_00105',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_719552_00105')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_5539646',
            uid: 'View_6806553_5539646',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_5539646')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_688965',
              uid: 'HorizontalView_004602_688965',
              type: 'HorizontalView',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 8px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_688965')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_115985',
                uid: 'View_339406_115985',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_115985')}
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
                visible={true}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_1929847_738917_68642_7960323',
                  uid: 'Form_4311097_9385662_1929847_738917_68642_7960323',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_1929847_738917_68642_7960323',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  text={'财务报表重新归档申请'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={true}
                  disabled={true}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_57326296_002468_16388665_164257',
                    )
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_949332_8499233',
                    uid: 'View_949332_8499233',
                    type: 'View',
                    ...componentItem,
                  }}
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_949332_8499233')
                  }
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
                  disabled={true}
                  formItemIndex={2}
                  visible={true}
                  readOnly={false}
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
                    id: 'Input_361479_887285_2150708_0235518_772568_273065_514098',
                    uid: 'Input_361479_887285_2150708_0235518_772568_273065_514098',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_0235518_772568_273065_514098',
                    )
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
          visible={true}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_412511'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.factorForm}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_412511_107682_5442757',
            uid: 'Form_412511_107682_5442757',
            type: 'Form',
            ...componentItem,
          }}
          style={{ padding: '0px 0px 0px 0px', margin: '8px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource262: any = [
              {
                type: 'setDataSource',
                dataId: 166790031249398270,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '0043',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '08707745',
                      code: 'cityName',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'cityName',
                      },
                    },
                    {
                      attrId: '359926',
                      code: 'areaName',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'areaName',
                      },
                    },
                    {
                      attrId: '0073597',
                      code: 'monthName',
                      name: '月份',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'monthName',
                      },
                    },
                    {
                      attrId: '426495',
                      code: 'periods',
                      name: '旬',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'periods',
                      },
                    },
                    {
                      attrId: '398797',
                      code: 'reportDimension',
                      name: '报表维度',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'reportDimension',
                      },
                    },
                    {
                      attrId: '5032014',
                      code: 'reportType',
                      name: '报表类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'reportType',
                      },
                    },
                    {
                      attrId: '5011484',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'reason',
                      },
                    },
                    {
                      attrId: '1111989',
                      code: 'reportName',
                      name: '报表名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_412511_107682_5442757',
                          'getFieldsValue',
                        ],
                        code: 'reportName',
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
            eventDatasetDataSource262.params = [] || [];
            CMDGenerator(eventDatasetDataSource262, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Form_412511_107682_5442757')
          }
          {...injectData}
        >
          <Input
            name={'地市'}
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
            fieldName={'cityName'}
            value={data?.factorForm?.cityName}
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
              id: 'Input_cityName_514708',
              uid: 'Input_cityName_514708',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_cityName_514708')}
            {...injectData}
          />
          <Input
            name={'区县'}
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
            fieldName={'areaName'}
            value={data?.factorForm?.areaName}
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
              id: 'Input_areaName_19751',
              uid: 'Input_areaName_19751',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_areaName_19751')}
            {...injectData}
          />
          <Input
            name={'月份'}
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
            fieldName={'monthName'}
            value={data?.factorForm?.monthName}
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
              id: 'Input_monthName_503117',
              uid: 'Input_monthName_503117',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_monthName_503117')}
            {...injectData}
          />
          <Input
            name={'旬'}
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
            fieldName={'periods'}
            value={data?.factorForm?.periods}
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
              id: 'Input_periods_033512',
              uid: 'Input_periods_033512',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_periods_033512')}
            {...injectData}
          />
          <Input
            name={'报表维度'}
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
            fieldName={'reportDimension'}
            value={data?.factorForm?.reportDimension}
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
              id: 'Input_reportDimension_01904038',
              uid: 'Input_reportDimension_01904038',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_reportDimension_01904038')
            }
            {...injectData}
          />
          <Input
            name={'报表类型'}
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
            fieldName={'reportType'}
            value={data?.factorForm?.reportType}
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
              id: 'Input_reportType_994958',
              uid: 'Input_reportType_994958',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_reportType_994958')}
            {...injectData}
          />
          <Input
            name={'申请原因'}
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
            fieldName={'reason'}
            value={data?.factorForm?.reason}
            formItemIndex={6}
            disabled={false}
            visible={false}
            readOnly={false}
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
              id: 'Input_reason_750131',
              uid: 'Input_reason_750131',
              type: 'Input',
              ...componentItem,
            }}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_reason_750131')}
            {...injectData}
          />
          <Input
            name={'报表名称'}
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
            fieldName={'reportName'}
            value={data?.factorForm?.reportName}
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
              id: 'Input_reportName_564645',
              uid: 'Input_reportName_564645',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_reportName_564645')}
            {...injectData}
          />
        </Form>
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '10px 0px 12px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_524072')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsDz_0002_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
