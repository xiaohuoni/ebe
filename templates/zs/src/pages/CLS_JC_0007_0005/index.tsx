// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  GridView,
  HorizontalView,
  Input,
  Row,
  Table,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsJc_0007_0005$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse310: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success()};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132641356637300,
                shielding: true,
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
                      code: 'flowType',
                      name: '流程类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '359926',
                      code: 'workOrderNbr',
                      name: '已审批认领需求工单号',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '65306653',
                      code: 'validityDate',
                      name: '审批有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '183177',
                      code: 'sceneCode',
                      name: '场景名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '981621',
                      code: 'sceneDesc',
                      name: '场景说明',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '932317',
                      code: 'approvaItemDesc',
                      name: '审批事项说明',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '2715976',
                      code: 'topUpAmount',
                      name: '充值金额',
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
                dataId: 166632147536112740,
                options: {
                  compId:
                    'Input_361479_887285_2150708_0235518_772568_273065_8955167',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '582233',
                  value: '$state.itemList.approveGradeName$',
                },
                line_number: 4,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166132820169451970,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '859603',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.customObject.cashAccountLine)};',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132828894265800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '391128',
                  pageJsonId: '537892',
                  dataSourceId: 166631748910482780,
                  dataSourceName: 'cashAccountLine',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '470131',
                      code: 'accountId',
                      name: '账户标识',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '480806',
                      code: 'accountLineId',
                      name: '账本标识',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '3892031',
                      code: 'accountLineItem',
                      name: '账本科目',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '772615',
                      code: 'balance',
                      name: '账本余额',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '4287366',
                      code: 'cycle',
                      name: '账务周期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '300216',
                      code: 'limitBalance',
                      name: '账本余额（限额后）',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '3565284',
                      code: 'limitType',
                      name: '限额类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '3904335',
                      code: 'status',
                      name: '状态',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '307854',
                      code: 'type',
                      name: '账本类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_859603$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 6,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 166436613332825860,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3462454',
                  pageJsonId: '537892',
                  dataSourceId: 166631756956124300,
                  dataSourceName: 'dealRecord',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '390896',
                      code: 'accountBook',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [
                        {
                          attrId: '2753588',
                          code: 'accountLineId',
                          name: '账本标识',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'accountBook',
                          parentKey: 'accountBook',
                        },
                        {
                          attrId: '957747',
                          code: 'accountLineName',
                          name: '账本名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'accountBook',
                          parentKey: 'accountBook',
                        },
                        {
                          attrId: '710223',
                          code: 'transferAmount',
                          name: '转移金额',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'accountBook',
                          parentKey: 'accountBook',
                        },
                      ],
                    },
                    {
                      attrId: '187187',
                      code: 'inputAccountCode',
                      name: '转入账户',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '010543',
                      code: 'inputAccountName',
                      name: '转入账户名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$state.itemList.customObject.dealRecord$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166632163584994100,
                options: {
                  compId: 'Text_2451',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '17861666',
                  value: '$state.itemList.customObject.outputAccountCode$',
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166632163888239300,
                options: {
                  compId: 'Text_2451_168378',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '235407',
                  value: '$state.itemList.customObject.outputAccountName$',
                },
                line_number: 9,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166632164181070240,
                options: {
                  compId: 'Text_2451_4726555',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '576364',
                  value: '$state.itemList.customObject.outputAccountStatus$',
                },
                line_number: 10,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDisable',
            dataId: 166436756146657440,
            options: {
              compId: 'Form_412511_107682',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Form',
              id: '089897',
              disabled: 'true',
            },
            line_number: 11,
          },
        ],
      },
    ];
    eventDataifelse310.params = [] || [];
    CMDGenerator(eventDataifelse310, {}, 'ifelse', {
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
          id: 'View_537892_1',
          uid: 'View_537892_1',
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
        ref={(r: any) => (refs['View_537892_1'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'集团账户余额转移'}
          $$componentItem={{
            id: 'Divider_719552',
            uid: 'Divider_719552',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_719552'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553',
            uid: 'View_6806553',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_6806553'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602',
              uid: 'HorizontalView_004602',
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
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => (refs['HorizontalView_004602'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406',
                uid: 'View_339406',
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
              ref={(r: any) => (refs['View_339406'] = r)}
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
                visible={true}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_1929847_738917_68642_323428',
                  uid: 'Form_4311097_9385662_1929847_738917_68642_323428',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_1929847_738917_68642_323428'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  text={'集团账户余额转移'}
                  selfSpan={12}
                  labelCol={'4'}
                  wrapperCol={20}
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
                    id: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_884328',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_884328',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_57326296_002468_16388665_884328'
                    ] = r)
                  }
                  {...injectData}
                />
                <Input
                  name={'场景最高审批等级'}
                  size={'default'}
                  selfSpan={12}
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
                  formItemIndex={1}
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
                    id: 'Input_361479_887285_2150708_0235518_772568_273065_8955167',
                    uid: 'Input_361479_887285_2150708_0235518_772568_273065_8955167',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_0235518_772568_273065_8955167'
                    ] = r)
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
          relationDataSource={''}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_412511_107682',
            uid: 'Form_412511_107682',
            type: 'Form',
            ...componentItem,
          }}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource288: any = [
              {
                type: 'setDataSource',
                dataId: 166329517051158600,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '26847',
                  pageJsonId: '537892',
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource288.params = [] || [];
            CMDGenerator(eventDatasetDataSource288, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Form_412511_107682'] = r)}
          {...injectData}
        />
        <Row
          name={'行容器'}
          visible={true}
          colSpan={8}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_9301746_9484946',
            uid: 'Row_9301746_9484946',
            type: 'Row',
            ...componentItem,
          }}
          style={{ 'line-height': '32ox' }}
          ref={(r: any) => (refs['Row_9301746_9484946'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611',
              uid: 'View_58611',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_58611'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'转出账户：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374',
                uid: 'Text_9945374',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => (refs['Text_9945374'] = r)}
              {...injectData}
            />
            <Text
              name={'转出账户'}
              visible={true}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451',
                uid: 'Text_2451',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => (refs['Text_2451'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611_6287033',
              uid: 'View_58611_6287033',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_58611_6287033'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'转出账户名称：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374_550461',
                uid: 'Text_9945374_550461',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => (refs['Text_9945374_550461'] = r)}
              {...injectData}
            />
            <Text
              name={'转出账户名称'}
              visible={true}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451_168378',
                uid: 'Text_2451_168378',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => (refs['Text_2451_168378'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611_717376',
              uid: 'View_58611_717376',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_58611_717376'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'转出账户状态：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374_8459843',
                uid: 'Text_9945374_8459843',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => (refs['Text_9945374_8459843'] = r)}
              {...injectData}
            />
            <Text
              name={'转出账户状态'}
              visible={true}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451_4726555',
                uid: 'Text_2451_4726555',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => (refs['Text_2451_4726555'] = r)}
              {...injectData}
            />
          </View>
        </Row>
        <Row
          name={'行容器'}
          visible={true}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          formItemIndex={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134_078966_2556465',
            uid: 'Row_2802134_078966_2556465',
            type: 'Row',
            ...componentItem,
          }}
          style={{
            margin: '10px 0px 0px 0px',
            'line-height': '32px',
            'font-weight': 'bold',
            display: 'flex',
          }}
          ref={(r: any) => (refs['Row_2802134_078966_2556465'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            visible={true}
            content={'● 现金账本信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514_235314_446576',
              uid: 'Text_467514_235314_446576',
              type: 'Text',
              ...componentItem,
            }}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => (refs['Text_467514_235314_446576'] = r)}
            {...injectData}
          />
        </Row>
        <View
          name={'布局容器'}
          visible={true}
          formItemIndex={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093',
            uid: 'View_4949093',
            type: 'View',
            ...componentItem,
          }}
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
            name={'表格'}
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
                title: '账本标识',
                key: 'accountLineId',
                dataIndex: 'accountLineId',
                className: '',
                id: '2795834',
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
                title: '账本科目',
                key: 'accountLineItem',
                dataIndex: 'accountLineItem',
                className: 'divider',
                id: '255518',
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
                title: '账务周期',
                key: 'cycle',
                dataIndex: 'cycle',
                className: 'divider',
                id: '253620785',
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
                title: '状态',
                key: 'status',
                dataIndex: 'status',
                className: 'divider',
                id: '3654562',
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
                title: '账本类型',
                key: 'type',
                dataIndex: 'type',
                className: 'divider',
                id: '5752164',
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
                title: '账本余额',
                key: 'balance',
                dataIndex: 'balance',
                className: 'divider',
                id: '5891823',
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
                title: '账本余额（限额后）',
                key: 'limitBalance',
                dataIndex: 'limitBalance',
                className: 'divider',
                id: '1191703',
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
                title: '限额类型',
                key: 'limitType',
                dataIndex: 'limitType',
                className: 'divider',
                id: '3990083',
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
                title: '账户标识',
                key: 'accountId',
                dataIndex: 'accountId',
                id: '275327',
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
            rowKeyType={'auto'}
            visible={true}
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
            dataSource={data?.cashAccountLine}
            rowKey={undefined}
            dataSourceFromDataSourceConfig={'data.cashAccountLine'}
            $$componentItem={{
              id: 'Table_9211005',
              uid: 'Table_9211005',
              type: 'Table',
              ...componentItem,
            }}
            ref={(r: any) => (refs['Table_9211005'] = r)}
            {...injectData}
          />
        </View>
        <GridView
          name={'账本信息(dealRecord)'}
          itemKey={'item'}
          indexKey={'i'}
          pieceData={[]}
          defaultValue={[]}
          isChecked={false}
          isMultiple={false}
          columnNum={1}
          valueKey={'value'}
          span={24}
          vspace={16}
          hspace={16}
          isEditor={false}
          fieldName={'data.dealRecord'}
          value={data?.dealRecord}
          gridData={data?.dealRecord}
          $$componentItem={{
            id: 'GridView_45004',
            uid: 'GridView_45004',
            type: 'GridView',
            ...componentItem,
          }}
          style={{ minHeight: 40 }}
          ref={(r: any) => (refs['GridView_45004'] = r)}
          {...injectData}
          getEngineApis={() => {
            return {
              ...injectData.getEngineApis(),
              MemoRenderer: {
                renderer: null,
                MemoLoopItem: (props: any) => {
                  const item = props[props.itemKey] ?? props?.item;
                  const i = props[props.indexKey] ?? props?.i;
                  return (
                    <>
                      <Row
                        name={'行容器'}
                        visible={true}
                        colSpan={8}
                        gutterHorizontal={0}
                        gutterVertical={0}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'Row_9301746_9484946_123928',
                          uid: 'Row_9301746_9484946_123928',
                          type: 'Row',
                          ...componentItem,
                        }}
                        style={{ 'line-height': '32ox' }}
                        ref={(r: any) =>
                          (refs['Row_9301746_9484946_123928'] = r)
                        }
                        {...injectData}
                      >
                        <View
                          name={'布局容器'}
                          visible={true}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'View_58611_08291',
                            uid: 'View_58611_08291',
                            type: 'View',
                            ...componentItem,
                          }}
                          style={{
                            display: 'block',
                            flexDirection: 'column',
                            padding: '0px 0px 0px 0px',
                            width: '100%',
                          }}
                          ref={(r: any) => (refs['View_58611_08291'] = r)}
                          {...injectData}
                        >
                          <Text
                            name={'文本'}
                            visible={true}
                            content={'转出账户：'}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            $$componentItem={{
                              id: 'Text_9945374_34142',
                              uid: 'Text_9945374_34142',
                              type: 'Text',
                              ...componentItem,
                            }}
                            style={{
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#1c242e',
                            }}
                            ref={(r: any) => (refs['Text_9945374_34142'] = r)}
                            {...injectData}
                          />
                          <Text
                            name={'转出账户'}
                            visible={true}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            content={item?.inputAccountCode}
                            $$componentItem={{
                              id: 'Text_2451_9123759',
                              uid: 'Text_2451_9123759',
                              type: 'Text',
                              ...componentItem,
                            }}
                            style={{
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#1c242e',
                            }}
                            ref={(r: any) => (refs['Text_2451_9123759'] = r)}
                            {...injectData}
                          />
                        </View>
                        <View
                          name={'布局容器'}
                          visible={true}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'View_58611_6287033_724501',
                            uid: 'View_58611_6287033_724501',
                            type: 'View',
                            ...componentItem,
                          }}
                          style={{
                            display: 'block',
                            flexDirection: 'column',
                            padding: '0px 0px 0px 0px',
                            width: '100%',
                          }}
                          ref={(r: any) =>
                            (refs['View_58611_6287033_724501'] = r)
                          }
                          {...injectData}
                        >
                          <Text
                            name={'文本'}
                            visible={true}
                            content={'转入账户名称：'}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            $$componentItem={{
                              id: 'Text_9945374_550461_9030166',
                              uid: 'Text_9945374_550461_9030166',
                              type: 'Text',
                              ...componentItem,
                            }}
                            style={{
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#1c242e',
                            }}
                            ref={(r: any) =>
                              (refs['Text_9945374_550461_9030166'] = r)
                            }
                            {...injectData}
                          />
                          <Text
                            name={'转入账户名称'}
                            visible={true}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            content={item?.inputAccountName}
                            $$componentItem={{
                              id: 'Text_2451_168378_6081994',
                              uid: 'Text_2451_168378_6081994',
                              type: 'Text',
                              ...componentItem,
                            }}
                            style={{
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#1c242e',
                            }}
                            ref={(r: any) =>
                              (refs['Text_2451_168378_6081994'] = r)
                            }
                            {...injectData}
                          />
                        </View>
                      </Row>
                      <GridView
                        name={'循环块'}
                        itemKey={'itemBook'}
                        indexKey={'i'}
                        pieceData={[]}
                        defaultValue={[]}
                        isChecked={false}
                        isMultiple={false}
                        columnNum={1}
                        valueKey={'value'}
                        span={24}
                        vspace={16}
                        hspace={16}
                        isEditor={true}
                        gridData={item?.accountBook}
                        $$componentItem={{
                          id: 'GridView_498783',
                          uid: 'GridView_498783',
                          type: 'GridView',
                          ...componentItem,
                        }}
                        style={{ minHeight: 40 }}
                        ref={(r: any) => (refs['GridView_498783'] = r)}
                        {...injectData}
                        getEngineApis={() => {
                          return {
                            ...injectData.getEngineApis(),
                            MemoRenderer: {
                              renderer: null,
                              MemoLoopItem: (props: any) => {
                                const item =
                                  props[props.itemKey] ?? props?.item;
                                const i = props[props.indexKey] ?? props?.i;
                                const itemBook =
                                  props[props.itemKey] ?? props?.item;
                                return (
                                  <>
                                    <Row
                                      name={'行容器'}
                                      visible={true}
                                      colSpan={8}
                                      gutterHorizontal={0}
                                      gutterVertical={0}
                                      backgroundType={{
                                        type: 'cleanColor',
                                        color: undefined,
                                      }}
                                      $$componentItem={{
                                        id: 'Row_9301746_9484946_123928_718233',
                                        uid: 'Row_9301746_9484946_123928_718233',
                                        type: 'Row',
                                        ...componentItem,
                                      }}
                                      style={{ 'line-height': '32ox' }}
                                      ref={(r: any) =>
                                        (refs[
                                          'Row_9301746_9484946_123928_718233'
                                        ] = r)
                                      }
                                      {...injectData}
                                    >
                                      <View
                                        name={'布局容器'}
                                        visible={true}
                                        backgroundType={{
                                          type: 'cleanColor',
                                          color: undefined,
                                        }}
                                        $$componentItem={{
                                          id: 'View_58611_08291_132198',
                                          uid: 'View_58611_08291_132198',
                                          type: 'View',
                                          ...componentItem,
                                        }}
                                        style={{
                                          display: 'block',
                                          flexDirection: 'column',
                                          padding: '0px 0px 0px 0px',
                                          width: '100%',
                                        }}
                                        ref={(r: any) =>
                                          (refs['View_58611_08291_132198'] = r)
                                        }
                                        {...injectData}
                                      >
                                        <Text
                                          name={'文本'}
                                          visible={true}
                                          content={'账本标识：'}
                                          textType={'span'}
                                          version={'1.0'}
                                          showHtml={false}
                                          $$componentItem={{
                                            id: 'Text_9945374_34142_1820265',
                                            uid: 'Text_9945374_34142_1820265',
                                            type: 'Text',
                                            ...componentItem,
                                          }}
                                          style={{
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            color: '#1c242e',
                                          }}
                                          ref={(r: any) =>
                                            (refs[
                                              'Text_9945374_34142_1820265'
                                            ] = r)
                                          }
                                          {...injectData}
                                        />
                                        <Text
                                          name={'转出账户'}
                                          visible={true}
                                          textType={'span'}
                                          version={'1.0'}
                                          showHtml={false}
                                          content={itemBook?.accountLineId}
                                          $$componentItem={{
                                            id: 'Text_2451_9123759_175686',
                                            uid: 'Text_2451_9123759_175686',
                                            type: 'Text',
                                            ...componentItem,
                                          }}
                                          style={{
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            color: '#1c242e',
                                          }}
                                          ref={(r: any) =>
                                            (refs['Text_2451_9123759_175686'] =
                                              r)
                                          }
                                          {...injectData}
                                        />
                                      </View>
                                      <View
                                        name={'布局容器'}
                                        visible={true}
                                        backgroundType={{
                                          type: 'cleanColor',
                                          color: undefined,
                                        }}
                                        $$componentItem={{
                                          id: 'View_58611_6287033_724501_623026',
                                          uid: 'View_58611_6287033_724501_623026',
                                          type: 'View',
                                          ...componentItem,
                                        }}
                                        style={{
                                          display: 'block',
                                          flexDirection: 'column',
                                          padding: '0px 0px 0px 0px',
                                          width: '100%',
                                        }}
                                        ref={(r: any) =>
                                          (refs[
                                            'View_58611_6287033_724501_623026'
                                          ] = r)
                                        }
                                        {...injectData}
                                      >
                                        <Text
                                          name={'文本'}
                                          visible={true}
                                          content={'账本名称：'}
                                          textType={'span'}
                                          version={'1.0'}
                                          showHtml={false}
                                          $$componentItem={{
                                            id: 'Text_9945374_550461_9030166_745922',
                                            uid: 'Text_9945374_550461_9030166_745922',
                                            type: 'Text',
                                            ...componentItem,
                                          }}
                                          style={{
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            color: '#1c242e',
                                          }}
                                          ref={(r: any) =>
                                            (refs[
                                              'Text_9945374_550461_9030166_745922'
                                            ] = r)
                                          }
                                          {...injectData}
                                        />
                                        <Text
                                          name={'转入账户名称'}
                                          visible={true}
                                          textType={'span'}
                                          version={'1.0'}
                                          showHtml={false}
                                          content={itemBook?.accountLineName}
                                          $$componentItem={{
                                            id: 'Text_2451_168378_6081994_185231',
                                            uid: 'Text_2451_168378_6081994_185231',
                                            type: 'Text',
                                            ...componentItem,
                                          }}
                                          style={{
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            color: '#1c242e',
                                          }}
                                          ref={(r: any) =>
                                            (refs[
                                              'Text_2451_168378_6081994_185231'
                                            ] = r)
                                          }
                                          {...injectData}
                                        />
                                      </View>
                                      <View
                                        name={'布局容器'}
                                        visible={true}
                                        backgroundType={{
                                          type: 'cleanColor',
                                          color: undefined,
                                        }}
                                        $$componentItem={{
                                          id: 'View_58611_6287033_724501_623026_157274',
                                          uid: 'View_58611_6287033_724501_623026_157274',
                                          type: 'View',
                                          ...componentItem,
                                        }}
                                        style={{
                                          display: 'block',
                                          flexDirection: 'column',
                                          padding: '0px 0px 0px 0px',
                                          width: '100%',
                                        }}
                                        ref={(r: any) =>
                                          (refs[
                                            'View_58611_6287033_724501_623026_157274'
                                          ] = r)
                                        }
                                        {...injectData}
                                      >
                                        <Text
                                          name={'文本'}
                                          visible={true}
                                          content={'转移金额：'}
                                          textType={'span'}
                                          version={'1.0'}
                                          showHtml={false}
                                          $$componentItem={{
                                            id: 'Text_9945374_550461_9030166_745922_57163',
                                            uid: 'Text_9945374_550461_9030166_745922_57163',
                                            type: 'Text',
                                            ...componentItem,
                                          }}
                                          style={{
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            color: '#1c242e',
                                          }}
                                          ref={(r: any) =>
                                            (refs[
                                              'Text_9945374_550461_9030166_745922_57163'
                                            ] = r)
                                          }
                                          {...injectData}
                                        />
                                        <Text
                                          name={'转入账户名称'}
                                          visible={true}
                                          textType={'span'}
                                          version={'1.0'}
                                          showHtml={false}
                                          content={itemBook?.transferAmount}
                                          $$componentItem={{
                                            id: 'Text_2451_168378_6081994_185231_202574',
                                            uid: 'Text_2451_168378_6081994_185231_202574',
                                            type: 'Text',
                                            ...componentItem,
                                          }}
                                          style={{
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            color: '#1c242e',
                                          }}
                                          ref={(r: any) =>
                                            (refs[
                                              'Text_2451_168378_6081994_185231_202574'
                                            ] = r)
                                          }
                                          {...injectData}
                                        />
                                      </View>
                                    </Row>
                                  </>
                                );
                              },
                            },
                          };
                        }}
                      />
                    </>
                  );
                },
              },
            };
          }}
        />
        <Table
          name={'表格'}
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
          visible={false}
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
              icon: { theme: 'outlined', type: 'download', isIconFont: false },
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
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDelete={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode889: any = [
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
            eventDatacustomActionCode889.params =
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
              eventDatacustomActionCode889,
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
            const eventDatadownloadByFileId127: any = [
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
            eventDatadownloadByFileId127.params =
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
              eventDatadownloadByFileId127,
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
    </div>
  );
};

export default withPageHOC(ClsJc_0007_0005$$Page, {
  pageId: '900564755067936768',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
