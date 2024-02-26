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
  Select,
  TextArea,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1036299499569778688';
const ClsJc_0008_0004$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest372: any = [
      {
        type: 'apiRequest',
        dataId: 168629387834505660,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '68711',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.header',
                  dataKey: '68711_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '68711_root.path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '68711_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '68711_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '68711_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'whetherPartyArmyClient',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '68711_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '68711_root',
            },
          ],
          actionTitle: '是否党政军客户枚举加载',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169868312207598850,
            options: {
              compId: 'Select_906853',
              compLib: 'comm',
              pageJsonId: '285255',
              compName: 'Select',
              id: '5583857',
              data: '$reply_68711?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest372.params = [] || [];
    CMDGenerator(eventDataapiRequest372, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse198: any = [
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
        dataId: 168681811049866620,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168681830479293150,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '821324',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;if(itemList&&itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){var attrList=itemList.attrList[i];data.dataform[attrList.attrCode]=attrList.attrValue}}if(itemList&&itemList.customObject&&itemList.customObject.advanceAmountInfoGrid&&itemList.customObject.advanceAmountInfoGrid.length>0){data.advanceAmountInfoGrid=itemList.customObject.advanceAmountInfoGrid}data.fileInfoList=itemList.fileInfo;success()};',
              actionTitle: '表单赋值',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168681830479304320,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '0776066',
                  pageJsonId: '7946678',
                  dataSourceId: 168621770348862820,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'totalBusinessAmount',
                      name: '业务总金额(元)',
                      type: 'string',
                      attrId: '113211',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['totalBusinessAmount'],
                      _idpath: ['113211'],
                    },
                    {
                      code: 'rechargeCardAmount',
                      name: '充值卡金额(元)',
                      type: 'string',
                      attrId: '673323',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['rechargeCardAmount'],
                      _idpath: ['673323'],
                    },
                    {
                      code: 'totalAmountMarketingActivities',
                      name: '营销活动总金额(元)',
                      type: 'string',
                      attrId: '068131',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['totalAmountMarketingActivities'],
                      _idpath: ['068131'],
                    },
                    {
                      code: 'advanceAmount',
                      name: '预收款金额(元)',
                      type: 'string',
                      attrId: '94487',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['advanceAmount'],
                      _idpath: ['94487'],
                    },
                    {
                      code: 'prepaidAmountRechargeCard',
                      name: '充值卡预收款金额(元)',
                      type: 'string',
                      attrId: '3171068',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['prepaidAmountRechargeCard'],
                      _idpath: ['3171068'],
                    },
                    {
                      code: 'advanceAmountMarketingActivities',
                      name: '营销活动预收款金额(元)',
                      type: 'string',
                      attrId: '106662',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['advanceAmountMarketingActivities'],
                      _idpath: ['106662'],
                    },
                    {
                      attrId: '0838137',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _idpath: ['0838137'],
                      _codePath: ['reason'],
                    },
                    {
                      attrId: '359405',
                      code: 'operatorPhoneNumber',
                      name: '经办人电话',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['operatorPhoneNumber'],
                      _idpath: ['359405'],
                    },
                    {
                      attrId: '860004',
                      code: 'cardAmountCurrentMonth',
                      name: '当月累计购卡金额(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['cardAmountCurrentMonth'],
                      _idpath: ['860004'],
                    },
                    {
                      attrId: '988382',
                      code: 'riskStatement',
                      name: '风险提示',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['riskStatement'],
                      _idpath: ['988382'],
                    },
                    {
                      attrId: '1199958',
                      code: 'paymentValidityPeriod',
                      name: '付款有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['paymentValidityPeriod'],
                      _idpath: ['1199958'],
                    },
                    {
                      attrId: '2801132',
                      code: 'accumulatedCardAmountCurrentYear',
                      name: '当年累计购卡金额(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['accumulatedCardAmountCurrentYear'],
                      _idpath: ['2801132'],
                    },
                    {
                      attrId: '4836953',
                      code: 'operatorName',
                      name: '经办人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['operatorName'],
                      _idpath: ['4836953'],
                    },
                    {
                      attrId: '5000705',
                      code: 'cardPurchasesCurrentYear',
                      name: '当年累计购卡次数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['cardPurchasesCurrentYear'],
                      _idpath: ['5000705'],
                    },
                    {
                      attrId: '64001959',
                      code: 'annualCardPurchaseLimit',
                      name: '年度购卡限额(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['annualCardPurchaseLimit'],
                      _idpath: ['64001959'],
                    },
                    {
                      attrId: '030999',
                      code: 'cardPurchasesCurrentMonth',
                      name: '当月累计购卡次数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['cardPurchasesCurrentMonth'],
                      _idpath: ['030999'],
                    },
                    {
                      attrId: '05589',
                      code: 'whetherPartyArmyClient',
                      name: '是否党政军客户',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['whetherPartyArmyClient'],
                      _idpath: ['05589'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 5,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 168681830479329250,
                options: {
                  compId: ['Input_843825'],
                  compLib: 'comm',
                  pageJsonId: '724622414',
                  compName: 'Input',
                  id: '2214675',
                  valueList: {
                    Input_843825: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_843825'],
                },
                line_number: 6,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 170002986073559520,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '644736',
                  pageJsonId: '285255',
                  dataSourceId: 170002967080347500,
                  dataSourceName: 'advanceAmountInfoGrid',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '4995432',
                      code: 'amountUsedTime',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '952459',
                      code: 'advancePaymentTitle',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '109098',
                      code: 'advancePaymentSeq',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '851849',
                      code: 'unusedAdvancePayment',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse198.params = [] || [];
    CMDGenerator(eventDataifelse198, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasetDisable49: any = [
      {
        type: 'setDisable',
        dataId: 169868348190751600,
        options: {
          compId: 'Form_7590694',
          compLib: 'comm',
          pageJsonId: '285255',
          compName: 'Form',
          id: '910002',
          disabled: 'true',
        },
        line_number: 8,
      },
    ];
    eventDatasetDisable49.params = [] || [];
    CMDGenerator(eventDatasetDisable49, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_285255__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_285255_1',
          uid: 'View_285255_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_285255_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'预收款审批'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_812745',
            uid: 'Divider_812745',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_812745')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_715417',
            uid: 'View_715417',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_715417')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_284938',
              uid: 'HorizontalView_284938',
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
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_284938')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_8287427',
                uid: 'View_8287427',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_8287427')}
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
                  id: 'Form_754805',
                  uid: 'Form_754805',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_754805')}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'预收款审批'}
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
                    id: 'Checkbox_1925866',
                    uid: 'Checkbox_1925866',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Checkbox_1925866')}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_4158666',
                    uid: 'View_4158666',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_4158666')}
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
                    id: 'Input_843825',
                    uid: 'Input_843825',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_843825')}
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
          formCode={'Form_7590694'}
          fieldName={'dataform'}
          relationDataSource={data?.dataform}
          busiObjectId={''}
          genRuleType={'key'}
          formType={'normal'}
          $$componentItem={{
            id: 'Form_7590694',
            uid: 'Form_7590694',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource157: any = [
              {
                type: 'setDataSource',
                dataId: 169868239319481500,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '3921031',
                  pageJsonId: '285255',
                  dataSourceId: 168621770348862820,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'totalBusinessAmount',
                      name: '业务总金额(元)',
                      type: 'string',
                      attrId: '113211',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'totalBusinessAmount',
                      },
                      _codePath: ['totalBusinessAmount'],
                      _idpath: ['113211'],
                    },
                    {
                      code: 'rechargeCardAmount',
                      name: '充值卡金额(元)',
                      type: 'string',
                      attrId: '673323',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'rechargeCardAmount',
                      },
                      _codePath: ['rechargeCardAmount'],
                      _idpath: ['673323'],
                    },
                    {
                      code: 'totalAmountMarketingActivities',
                      name: '营销活动总金额(元)',
                      type: 'string',
                      attrId: '068131',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'totalAmountMarketingActivities',
                      },
                      _codePath: ['totalAmountMarketingActivities'],
                      _idpath: ['068131'],
                    },
                    {
                      code: 'advanceAmount',
                      name: '预收款金额(元)',
                      type: 'string',
                      attrId: '94487',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'advanceAmount',
                      },
                      _codePath: ['advanceAmount'],
                      _idpath: ['94487'],
                    },
                    {
                      code: 'prepaidAmountRechargeCard',
                      name: '充值卡预收款金额(元)',
                      type: 'string',
                      attrId: '3171068',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'prepaidAmountRechargeCard',
                      },
                      _codePath: ['prepaidAmountRechargeCard'],
                      _idpath: ['3171068'],
                    },
                    {
                      code: 'advanceAmountMarketingActivities',
                      name: '营销活动预收款金额(元)',
                      type: 'string',
                      attrId: '106662',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'advanceAmountMarketingActivities',
                      },
                      _codePath: ['advanceAmountMarketingActivities'],
                      _idpath: ['106662'],
                    },
                    {
                      attrId: '1199958',
                      code: 'paymentValidityPeriod',
                      name: '付款有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'paymentValidityPeriod',
                      },
                      _codePath: ['paymentValidityPeriod'],
                      _idpath: ['1199958'],
                    },
                    {
                      attrId: '4836953',
                      code: 'operatorName',
                      name: '经办人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'operatorName',
                      },
                      _codePath: ['operatorName'],
                      _idpath: ['4836953'],
                    },
                    {
                      attrId: '2801132',
                      code: 'accumulatedCardAmountCurrentYear',
                      name: '当年累计购卡金额(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'accumulatedCardAmountCurrentYear',
                      },
                      _codePath: ['accumulatedCardAmountCurrentYear'],
                      _idpath: ['2801132'],
                    },
                    {
                      attrId: '64001959',
                      code: 'annualCardPurchaseLimit',
                      name: '年度购卡限额(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'annualCardPurchaseLimit',
                      },
                      _codePath: ['annualCardPurchaseLimit'],
                      _idpath: ['64001959'],
                    },
                    {
                      attrId: '359405',
                      code: 'operatorPhoneNumber',
                      name: '经办人电话',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'operatorPhoneNumber',
                      },
                      _codePath: ['operatorPhoneNumber'],
                      _idpath: ['359405'],
                    },
                    {
                      attrId: '860004',
                      code: 'cardAmountCurrentMonth',
                      name: '当月累计购卡金额(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'cardAmountCurrentMonth',
                      },
                      _codePath: ['cardAmountCurrentMonth'],
                      _idpath: ['860004'],
                    },
                    {
                      attrId: '030999',
                      code: 'cardPurchasesCurrentMonth',
                      name: '当月累计购卡次数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'cardPurchasesCurrentMonth',
                      },
                      _codePath: ['cardPurchasesCurrentMonth'],
                      _idpath: ['030999'],
                    },
                    {
                      attrId: '5000705',
                      code: 'cardPurchasesCurrentYear',
                      name: '当年累计购卡次数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'cardPurchasesCurrentYear',
                      },
                      _codePath: ['cardPurchasesCurrentYear'],
                      _idpath: ['5000705'],
                    },
                    {
                      attrId: '0838137',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_7590694', 'getFieldsValue'],
                        code: 'reason',
                      },
                      _codePath: ['reason'],
                      _idpath: ['0838137'],
                    },
                    {
                      attrId: '988382',
                      code: 'riskStatement',
                      name: '风险提示',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['riskStatement'],
                      _idpath: ['988382'],
                    },
                    {
                      attrId: '05589',
                      code: 'whetherPartyArmyClient',
                      name: '是否党政军客户',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['whetherPartyArmyClient'],
                      _idpath: ['05589'],
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource157.params =
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
              eventDatasetDataSource157,
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
          ref={(r: any) => refs.setComponentRef(r, 'Form_7590694')}
          {...injectData}
        >
          <Input
            name={'业务总金额(元)'}
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
            required={true}
            placeholder={'请输入'}
            fieldName={'totalBusinessAmount'}
            value={data?.dataform?.totalBusinessAmount}
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
              id: 'Input_totalBusinessAmount_238291',
              uid: 'Input_totalBusinessAmount_238291',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_totalBusinessAmount_238291')
            }
            {...injectData}
          />
          <Input
            name={'充值卡金额(元)'}
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
            required={true}
            placeholder={'请输入'}
            fieldName={'rechargeCardAmount'}
            value={data?.dataform?.rechargeCardAmount}
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
              id: 'Input_rechargeCardAmount_9316145',
              uid: 'Input_rechargeCardAmount_9316145',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_rechargeCardAmount_9316145')
            }
            {...injectData}
          />
          <Input
            name={'营销活动总金额(元)'}
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
            fieldName={'totalAmountMarketingActivities'}
            value={data?.dataform?.totalAmountMarketingActivities}
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
              id: 'Input_totalAmountMarketingActivities_7208916',
              uid: 'Input_totalAmountMarketingActivities_7208916',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Input_totalAmountMarketingActivities_7208916',
              )
            }
            {...injectData}
          />
          <Input
            name={'预收款金额(元)'}
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
            fieldName={'advanceAmount'}
            value={data?.dataform?.advanceAmount}
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
              id: 'Input_advanceAmount_397765',
              uid: 'Input_advanceAmount_397765',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_advanceAmount_397765')
            }
            {...injectData}
          />
          <Input
            name={'充值卡预收款金额(元)'}
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
            fieldName={'prepaidAmountRechargeCard'}
            value={data?.dataform?.prepaidAmountRechargeCard}
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
              id: 'Input_prepaidAmountRechargeCard_363768',
              uid: 'Input_prepaidAmountRechargeCard_363768',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_prepaidAmountRechargeCard_363768')
            }
            {...injectData}
          />
          <Input
            name={'营销活动预收款金额(元)'}
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
            fieldName={'advanceAmountMarketingActivities'}
            value={data?.dataform?.advanceAmountMarketingActivities}
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
              id: 'Input_advanceAmountMarketingActivities_172902',
              uid: 'Input_advanceAmountMarketingActivities_172902',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Input_advanceAmountMarketingActivities_172902',
              )
            }
            {...injectData}
          />
          <Select
            name={'是否党政军客户'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={6}
            fieldName={'whetherPartyArmyClient'}
            allowClear={false}
            value={data?.dataform?.whetherPartyArmyClient}
            $$componentItem={{
              id: 'Select_906853',
              uid: 'Select_906853',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_906853')}
            {...injectData}
          />
          <Input
            name={'付款有效期'}
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
            required={true}
            placeholder={'请输入'}
            fieldName={'paymentValidityPeriod'}
            value={data?.dataform?.paymentValidityPeriod}
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
              id: 'Input_paymentValidityPeriod_360689',
              uid: 'Input_paymentValidityPeriod_360689',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_paymentValidityPeriod_360689')
            }
            {...injectData}
          />
          <Input
            name={'经办人姓名'}
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
            required={true}
            placeholder={'请输入'}
            fieldName={'operatorName'}
            value={data?.dataform?.operatorName}
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
              id: 'Input_operatorName_752637',
              uid: 'Input_operatorName_752637',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_operatorName_752637')
            }
            {...injectData}
          />
          <Input
            name={'当年累计购卡金额(元)'}
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
            fieldName={'accumulatedCardAmountCurrentYear'}
            value={data?.dataform?.accumulatedCardAmountCurrentYear}
            formItemIndex={9}
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
              id: 'Input_accumulatedCardAmountCurrentYear_655916',
              uid: 'Input_accumulatedCardAmountCurrentYear_655916',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Input_accumulatedCardAmountCurrentYear_655916',
              )
            }
            {...injectData}
          />
          <Input
            name={'年度购卡限额(元)'}
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
            fieldName={'annualCardPurchaseLimit'}
            value={data?.dataform?.annualCardPurchaseLimit}
            formItemIndex={10}
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
              id: 'Input_annualCardPurchaseLimit_881799',
              uid: 'Input_annualCardPurchaseLimit_881799',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_annualCardPurchaseLimit_881799')
            }
            {...injectData}
          />
          <Input
            name={'经办人电话'}
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
            required={true}
            placeholder={'请输入'}
            fieldName={'operatorPhoneNumber'}
            value={data?.dataform?.operatorPhoneNumber}
            formItemIndex={11}
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
              id: 'Input_operatorPhoneNumber_34187',
              uid: 'Input_operatorPhoneNumber_34187',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_operatorPhoneNumber_34187')
            }
            {...injectData}
          />
          <Input
            name={'当月累计购卡金额(元)'}
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
            fieldName={'cardAmountCurrentMonth'}
            value={data?.dataform?.cardAmountCurrentMonth}
            formItemIndex={12}
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
              id: 'Input_cardAmountCurrentMonth_2390565',
              uid: 'Input_cardAmountCurrentMonth_2390565',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_cardAmountCurrentMonth_2390565')
            }
            {...injectData}
          />
          <Input
            name={'当月累计购卡次数'}
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
            fieldName={'cardPurchasesCurrentMonth'}
            value={data?.dataform?.cardPurchasesCurrentMonth}
            formItemIndex={13}
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
              id: 'Input_cardPurchasesCurrentMonth_411173',
              uid: 'Input_cardPurchasesCurrentMonth_411173',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_cardPurchasesCurrentMonth_411173')
            }
            {...injectData}
          />
          <Input
            name={'当年累计购卡次数'}
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
            fieldName={'cardPurchasesCurrentYear'}
            value={data?.dataform?.cardPurchasesCurrentYear}
            formItemIndex={14}
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
              id: 'Input_cardPurchasesCurrentYear_1358338',
              uid: 'Input_cardPurchasesCurrentYear_1358338',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_cardPurchasesCurrentYear_1358338')
            }
            {...injectData}
          />
          <TextArea
            name={'申请原因'}
            selfSpan={24}
            labelCol={'11%'}
            wrapperCol={'89%'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            fieldName={'reason'}
            value={data?.dataform?.reason}
            formItemIndex={15}
            $$componentItem={{
              id: 'Input_reason_687988',
              uid: 'Input_reason_687988',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_reason_687988')}
            {...injectData}
          />
          <TextArea
            name={'风险提示'}
            selfSpan={24}
            labelCol={'11%'}
            wrapperCol={'89%'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            fieldName={'riskStatement'}
            value={data?.dataform?.riskStatement}
            formItemIndex={16}
            $$componentItem={{
              id: 'Input_857296',
              uid: 'Input_857296',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_857296')}
            {...injectData}
          />
        </Form>
        <View
          name={'布局容器'}
          formItemIndex={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_219288',
            uid: 'View_219288',
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
            margin: '16px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_219288')}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
            headBtnNum={3}
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
                title: '序号',
                dataIndex: 'advancePaymentSeq',
                key: 'column1',
                className: '',
                id: '257798',
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
                title: '标题',
                dataIndex: 'advancePaymentTitle',
                key: 'column2',
                className: 'divider',
                id: '081083',
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
                title: '未使用预收款(元)',
                dataIndex: 'unusedAdvancePayment',
                key: 'column3',
                className: 'divider',
                id: '341893',
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
                title: '本次使用金额(元)',
                dataIndex: 'amountUsedTime',
                key: 'column4',
                className: 'divider',
                id: '801037',
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
            rowKeyType={data?.advanceAmountInfoGrid?.advancePaymentSeq}
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
            customNum={3}
            fieldName={'advancePaymentSeq'}
            dataSource={data?.advanceAmountInfoGrid}
            rowKey={undefined}
            dataSourceFromDataSourceConfig={'data.advanceAmountInfoGrid;'}
            $$componentItem={{
              id: 'Table_138688',
              uid: 'Table_138688',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) => refs.setComponentRef(r, 'Table_138688')}
            {...injectData}
          />
        </View>
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: data?.fileInfoList,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_332082')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0008_0004$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
