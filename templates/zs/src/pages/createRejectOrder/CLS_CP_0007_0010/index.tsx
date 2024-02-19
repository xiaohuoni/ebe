// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Select,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const CreateRejectOrderClsCp_0007_0010$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse304: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;success(factorForm)};',
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
                      code: 'city',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '182276',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '905721',
                      code: 'country',
                      name: '街道/乡/镇',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '500673',
                      code: 'district',
                      name: '片区',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '007551',
                      code: 'street',
                      name: '街、路、行政村、居委会',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '087569',
                      code: 'houseNum',
                      name: '门牌号(含胡同)',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '303741',
                      code: 'doorplate',
                      name: '写字楼、小区（组团）、单位大院、自然村等',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '725859',
                      code: 'floorName',
                      name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7467836',
                      code: 'element',
                      name: '楼号或单元号',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '1586552',
                      code: 'roomName',
                      name: '房间号、户名',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '996532',
                      code: 'installAddr',
                      name: '安装地址',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7370567',
                      code: 'setMeal',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '8998593',
                      code: 'bandwidthUp',
                      name: '上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '569754',
                      code: 'total',
                      name: '条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '410393',
                      code: 'totalBandwidthUp',
                      name: '总上行带宽',
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
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse304.params = [] || [];
    CMDGenerator(eventDataifelse304, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasetDisable71: any = [
      {
        type: 'setDisable',
        dataId: 166925894588194240,
        options: {
          compId: ['Form_449441_1900385_068038_8436435'],
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '1790195',
          disabled: 'true',
          compid: ['Form_449441_1900385_068038_8436435'],
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable71.params = [] || [];
    CMDGenerator(eventDatasetDisable71, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataapiRequest610: any = [
      {
        type: 'apiRequest',
        dataId: 167046690264575870,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '27568745',
          pageJsonId: '537892',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryOneByDcSalesOrderFileInfo',
          _apiCode: 'qryOneByDcSalesOrderFileInfo',
          _source: 'rhin',
          _serviceId: '915178807448723456',
          _serviceTitle:
            '通过参数获取销售中心甩单归档表信息-lzs: qryOneByDcSalesOrderFileInfo',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '535255_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '535255_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '535255_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'acceptanceSuccessCount',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.acceptanceSuccessCount',
                  compType: 'Input',
                  name: 'acceptanceSuccessCount',
                  parents: ['body'],
                  id: 'body.acceptanceSuccessCount',
                  dataKey: '535255_body.acceptanceSuccessCount',
                },
                {
                  code: 'busiObjNbr',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.busiObjNbr',
                  compType: 'Input',
                  name: 'busiObjNbr',
                  parents: ['body'],
                  id: 'body.busiObjNbr',
                  dataKey: '535255_body.busiObjNbr',
                  value: { type: ['context', '$state.busiObjNbr$'], code: '' },
                },
                {
                  code: 'createDate',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.createDate',
                  compType: 'Input',
                  name: 'createDate',
                  parents: ['body'],
                  id: 'body.createDate',
                  dataKey: '535255_body.createDate',
                },
                {
                  code: 'createStaff',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.createStaff',
                  compType: 'Input',
                  name: 'createStaff',
                  parents: ['body'],
                  id: 'body.createStaff',
                  dataKey: '535255_body.createStaff',
                },
                {
                  code: 'salesNumber',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.salesNumber',
                  compType: 'Input',
                  name: 'salesNumber',
                  parents: ['body'],
                  id: 'body.salesNumber',
                  dataKey: '535255_body.salesNumber',
                },
                {
                  code: 'salesOrderFileId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.salesOrderFileId',
                  compType: 'Input',
                  name: 'salesOrderFileId',
                  parents: ['body'],
                  id: 'body.salesOrderFileId',
                  dataKey: '535255_body.salesOrderFileId',
                },
                {
                  code: 'sceneCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.sceneCode',
                  compType: 'Input',
                  name: 'sceneCode',
                  parents: ['body'],
                  id: 'body.sceneCode',
                  dataKey: '535255_body.sceneCode',
                  value: { type: ['context', '$state.sceneCode$'], code: '' },
                },
                {
                  code: 'updateDate',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.updateDate',
                  compType: 'Input',
                  name: 'updateDate',
                  parents: ['body'],
                  id: 'body.updateDate',
                  dataKey: '535255_body.updateDate',
                },
                {
                  code: 'updateStaff',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.updateStaff',
                  compType: 'Input',
                  name: 'updateStaff',
                  parents: ['body'],
                  id: 'body.updateStaff',
                  dataKey: '535255_body.updateStaff',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '535255_body',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2790316',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_27568745?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_27568745?.resultData$',
                  operate: 'notEmpty',
                },
                condId: '785758',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167046690264578500,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167046690264546270,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167046698156970000,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167046698156920000,
                        children: [],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: ['value'],
                    options: {
                      compId: 'Text_357702_530844',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '342377',
                      value: '0',
                    },
                    actionObjId: 'Text_357702_530844',
                    actionObjName: 'Text',
                    value: 'setCompContentValue',
                    compLib: 'custom',
                    elseIfs: [],
                    line_number: 8,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'setCompContentValue',
                    dataId: 167046698156970000,
                    options: {
                      compId: 'Text_357702_530844',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '342377',
                      value: '0',
                    },
                    line_number: 8,
                    callback1: [],
                  },
                ],
              },
            ],
            line_number: 6,
            callback1: [
              {
                type: 'setCompContentValue',
                dataId: 167046693106099680,
                options: {
                  compId: 'Text_357702_530844',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '3919638',
                  value: '$reply_27568745?.resultData.acceptanceSuccessCount$',
                },
                line_number: 7,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest610.params = [] || [];
    CMDGenerator(eventDataapiRequest610, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
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
        $$componentItem={{
          id: 'View_537892_1_253094',
          uid: 'View_537892_1_253094',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => (refs['View_537892_1_253094'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'商务快线同址多宽审批'}
          $$componentItem={{
            id: 'Divider_27607_927229',
            uid: 'Divider_27607_927229',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_27607_927229'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_879207',
            uid: 'View_6806553_879207',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_6806553_879207'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_660456',
              uid: 'HorizontalView_004602_660456',
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
            ref={(r: any) => (refs['HorizontalView_004602_660456'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_935323',
                uid: 'View_339406_935323',
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
              ref={(r: any) => (refs['View_339406_935323'] = r)}
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
                  id: 'Form_4311097_9385662_302551_802694_1715533',
                  uid: 'Form_4311097_9385662_302551_802694_1715533',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_302551_802694_1715533'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  text={'商务快线同址多宽审批'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={false}
                  disabled={false}
                  tipIcon={{
                    type: '',
                    theme: '',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  readOnly={false}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_292792_8224843_884786',
                    uid: 'Checkbox_882584_5289015_934499_292792_8224843_884786',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  onChange={(e: any) => {
                    const eventDataifelse547: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '712658',
                            options: {
                              context: '$e.target.checked$',
                              operate: '== true',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166871805701767140,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166910823278497180,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166910823278404200,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166910823278450400,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166910823278422800,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: [
                                  'pathname',
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '655321',
                                  pageJsonId: '537892',
                                  pathname: '/faqishuaidantanchuang7958',
                                  pageId: '908274270111293440',
                                  customFuncName: 'delScenceCodeList',
                                  customFuncParams: '$state.sceneCode$',
                                },
                                actionObjId: 'callParentCustomFunc',
                                actionObjName: 'system',
                                value: 'callParentCustomFunc',
                                elseIfs: [],
                                line_number: 3,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            callback: [
                              {
                                type: 'callParentCustomFunc',
                                dataId: 166910823278404200,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '655321',
                                  pageJsonId: '537892',
                                  pathname: '/faqishuaidantanchuang7958',
                                  pageId: '908274270111293440',
                                  customFuncName: 'delScenceCodeList',
                                  customFuncParams: '$state.sceneCode$',
                                },
                                line_number: 3,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 1,
                        callback1: [
                          {
                            type: 'callParentCustomFunc',
                            dataId: 166871805701739700,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '3363534',
                              pageJsonId: '537892',
                              pathname: '/faqishuaidantanchuang7958',
                              pageId: '908274270111293440',
                              customFuncName: 'pushSceneCodeList',
                              customFuncParams: '$state.sceneCode$',
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDataifelse547.params =
                      [
                        {
                          title: '复选框取值',
                          name: 'e',
                          value: '$e.target.checked$',
                        },
                      ] || [];
                    CMDGenerator(eventDataifelse547, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_292792_8224843_884786'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_971391_984792_7041997',
                    uid: 'View_971391_984792_7041997',
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
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['View_971391_984792_7041997'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'成功受理数：'}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    labelCol={8}
                    wrapperCol={16}
                    $$componentItem={{
                      id: 'Text_357702',
                      uid: 'Text_357702',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => (refs['Text_357702'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_9544207',
                    uid: 'View_9544207',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
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
                  ref={(r: any) => (refs['View_9544207'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'null'}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    labelCol={8}
                    wrapperCol={16}
                    $$componentItem={{
                      id: 'Text_357702_530844',
                      uid: 'Text_357702_530844',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => (refs['Text_357702_530844'] = r)}
                    {...injectData}
                  />
                </View>
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
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
            formCode={'Form_449441'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            formColumns={[
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '动作',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'action',
                  value: data?.factorForm?.action,
                  formItemIndex: 8,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_action_124461',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理商名称',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'agentName',
                  value: data?.factorForm?.agentName,
                  formItemIndex: 9,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_agentName_3011749',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '法人代表',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'legalRep',
                  value: data?.factorForm?.legalRep,
                  formItemIndex: 10,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_legalRep_4905766',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '续签合约日期',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'contractTime',
                  value: data?.factorForm?.contractTime,
                  formItemIndex: 11,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_contractTime_637706',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '电话',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'phone',
                  value: data?.factorForm?.phone,
                  formItemIndex: 12,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_phone_089928',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理业务范围',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'busiScope',
                  value: data?.factorForm?.busiScope,
                  formItemIndex: 13,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_busiScope_198144',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '业绩评估',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'performance',
                  value: data?.factorForm?.performance,
                  formItemIndex: 14,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_performance_8186807',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '申请原因',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'reason',
                  value: data?.factorForm?.reason,
                  formItemIndex: 15,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_reason_4525674',
              },
            ]}
            formItemIndex={1}
            $$componentItem={{
              id: 'Form_449441_1900385_068038_8436435',
              uid: 'Form_449441_1900385_068038_8436435',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 150px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource284: any = [
                {
                  type: 'setDataSource',
                  dataId: 166124391997578100,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '3788211',
                    pageJsonId: '537892',
                    dataSourceId: 166124254360037760,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '08707745',
                        code: 'city',
                        name: '地市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'city',
                        },
                      },
                      {
                        attrId: '182276',
                        code: 'area',
                        name: '区县',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'area',
                        },
                      },
                      {
                        attrId: '905721',
                        code: 'country',
                        name: '街道/乡/镇',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'country',
                        },
                      },
                      {
                        attrId: '500673',
                        code: 'district',
                        name: '片区',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'district',
                        },
                      },
                      {
                        attrId: '007551',
                        code: 'street',
                        name: '街、路、行政村、居委会',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'street',
                        },
                      },
                      {
                        attrId: '087569',
                        code: 'houseNum',
                        name: '门牌号(含胡同)',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'houseNum',
                        },
                      },
                      {
                        attrId: '303741',
                        code: 'doorplate',
                        name: '写字楼、小区（组团）、单位大院、自然村等',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'doorplate',
                        },
                      },
                      {
                        attrId: '725859',
                        code: 'floorName',
                        name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'floorName',
                        },
                      },
                      {
                        attrId: '7467836',
                        code: 'element',
                        name: '楼号或单元号',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'element',
                        },
                      },
                      {
                        attrId: '1586552',
                        code: 'roomName',
                        name: '房间号、户名',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'roomName',
                        },
                      },
                      {
                        attrId: '996532',
                        code: 'installAddr',
                        name: '安装地址',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'installAddr',
                        },
                      },
                      {
                        attrId: '7370567',
                        code: 'setMeal',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'setMeal',
                        },
                      },
                      {
                        attrId: '8998593',
                        code: 'bandwidthUp',
                        name: '上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'bandwidthUp',
                        },
                      },
                      {
                        attrId: '569754',
                        code: 'total',
                        name: '条数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'total',
                        },
                      },
                      {
                        attrId: '410393',
                        code: 'totalBandwidthUp',
                        name: '总上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_8436435',
                            'getFieldsValue',
                          ],
                          code: 'totalBandwidthUp',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366244013133920,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '395614',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366244013131500,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '384369',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
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
              eventDatasetDataSource284.params =
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
                eventDatasetDataSource284,
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
            ref={(r: any) => (refs['Form_449441_1900385_068038_8436435'] = r)}
            {...injectData}
          >
            <Select
              name={'地市'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'city'}
              value={data?.factorForm?.city}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_city_753123_357863',
                uid: 'Input_city_753123_357863',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue215: any = [
                  {
                    type: 'clearValue',
                    dataId: 166600111973233150,
                    options: {
                      compId: 'Input_area_647813_438398',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '315082',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue215.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue215, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatagetSelectedData461: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166599846272350100,
                    options: {
                      compId: 'Input_city_753123_357863',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '574924',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166599846995575300,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '8209674',
                          pageJsonId: '537892',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'SYS_qryRegionListByParentId',
                          _apiCode: 'qryRegionListByParentId',
                          _source: 'rhin',
                          _serviceId: '878100790201982976',
                          _serviceTitle:
                            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
                          params: 'object',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '8209674_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '8209674_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '8209674_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'includeParent',
                                  attrType: 'field',
                                  type: 'boolean',
                                  mustFlag: 'F',
                                  _id: 'body.includeParent',
                                  compType: 'Input',
                                  name: 'includeParent',
                                  parents: ['body'],
                                  id: 'body.includeParent',
                                  dataKey: '8209674_body.includeParent',
                                  value: { type: ['customize'], code: 'false' },
                                },
                                {
                                  code: 'parentRegionId',
                                  attrType: 'field',
                                  type: 'long',
                                  mustFlag: 'F',
                                  _id: 'body.parentRegionId',
                                  compType: 'Input',
                                  name: 'parentRegionId',
                                  parents: ['body'],
                                  id: 'body.parentRegionId',
                                  dataKey: '8209674_body.parentRegionId',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_574924[0].value$',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '8209674_body',
                            },
                          ],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 166599852491633120,
                            options: {
                              compId: 'Input_area_647813_438398',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '542582',
                              data: '$reply_8209674?.resultData$',
                              labelKey: 'regionName',
                              valueKey: 'regionId',
                            },
                            line_number: 4,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData461.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData461,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_city_753123_357863'] = r)}
              {...injectData}
            />
            <Select
              name={'区县'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'area'}
              value={data?.factorForm?.area}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_area_647813_438398',
                uid: 'Input_area_647813_438398',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_area_647813_438398'] = r)}
              {...injectData}
            />
            <Input
              name={'街道/乡/镇'}
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
              fieldName={'country'}
              value={data?.factorForm?.country}
              formItemIndex={2}
              icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_country_582901_2510113',
                uid: 'Input_country_582901_2510113',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_country_582901_2510113'] = r)}
              {...injectData}
            />
            <Input
              name={'片区'}
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
              fieldName={'district'}
              value={data?.factorForm?.district}
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
                id: 'Input_district_820203_239022',
                uid: 'Input_district_820203_239022',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_district_820203_239022'] = r)}
              {...injectData}
            />
            <Input
              name={'街、路、行政村、居委会'}
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
              fieldName={'street'}
              value={data?.factorForm?.street}
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
                id: 'Input_street_1527572_510143',
                uid: 'Input_street_1527572_510143',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_street_1527572_510143'] = r)}
              {...injectData}
            />
            <Input
              name={'门牌号(含胡同)'}
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
              fieldName={'houseNum'}
              value={data?.factorForm?.param4}
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
                id: 'Input_param4_692314_056716',
                uid: 'Input_param4_692314_056716',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_param4_692314_056716'] = r)}
              {...injectData}
            />
            <Input
              name={'写字楼、自然村等'}
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
              placeholder={'写字楼、小区（组团）、单位大院、自然村等'}
              fieldName={'doorplate'}
              value={data?.factorForm?.doorplate}
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
                id: 'Input_doorplate_0544844_713736',
                uid: 'Input_doorplate_0544844_713736',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_doorplate_0544844_713736'] = r)}
              {...injectData}
            />
            <Input
              name={'楼名、楼号、村民组'}
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
              placeholder={'楼名、楼号(门面房前加"门面"标志)、村民组'}
              fieldName={'floorName'}
              value={data?.factorForm?.floorName}
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
                id: 'Input_floorName_609729_27075',
                uid: 'Input_floorName_609729_27075',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_floorName_609729_27075'] = r)}
              {...injectData}
            />
            <Input
              name={'楼号或单元号'}
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
              fieldName={'element'}
              value={data?.factorForm?.element}
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
                id: 'Input_element_152438_704777',
                uid: 'Input_element_152438_704777',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_element_152438_704777'] = r)}
              {...injectData}
            />
            <Input
              name={'房间号、户名'}
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
              fieldName={'roomName'}
              value={data?.factorForm?.roomName}
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
                id: 'Input_roomName_081681_366366',
                uid: 'Input_roomName_081681_366366',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_roomName_081681_366366'] = r)}
              {...injectData}
            />
            <Input
              name={'安装地址'}
              size={'default'}
              selfSpan={16}
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
              fieldName={'installAddr'}
              value={data?.factorForm?.installAddr}
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
                id: 'Input_installAddr_72918684_489387',
                uid: 'Input_installAddr_72918684_489387',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_installAddr_72918684_489387'] = r)}
              {...injectData}
            />
            <Input
              name={'套餐'}
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
              fieldName={'setMeal'}
              value={data?.factorForm?.setMeal}
              formItemIndex={11}
              icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_setMeal_339143_613107',
                uid: 'Input_setMeal_339143_613107',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_setMeal_339143_613107'] = r)}
              {...injectData}
            />
            <Input
              name={'上行带宽'}
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
              fieldName={'bandwidthUp'}
              value={data?.factorForm?.bandwidthUp}
              formItemIndex={12}
              disabled={false}
              visible={true}
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
                id: 'Input_bandwidthUp_7220704_3153634',
                uid: 'Input_bandwidthUp_7220704_3153634',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_bandwidthUp_7220704_3153634'] = r)}
              {...injectData}
            />
            <Input
              name={'条数'}
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
              fieldName={'total'}
              value={data?.factorForm?.total}
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
                id: 'Input_total_8367775_54868',
                uid: 'Input_total_8367775_54868',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_total_8367775_54868'] = r)}
              {...injectData}
            />
            <Input
              name={'总上行带宽'}
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
              fieldName={'totalBandwidthUp'}
              value={data?.factorForm?.totalBandwidthUp}
              formItemIndex={14}
              disabled={false}
              visible={true}
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
                id: 'Input_totalBandwidthUp_874141_296079',
                uid: 'Input_totalBandwidthUp_874141_296079',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_totalBandwidthUp_874141_296079'] = r)
              }
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreateRejectOrderClsCp_0007_0010$$Page, {
  pageId: '910631636283568128',
  hasLogin: false,
  dataSource,
  defaultState: { itemList: '', sceneCode: '' },
});
