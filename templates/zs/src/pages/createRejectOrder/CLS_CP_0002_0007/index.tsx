// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  HorizontalView,
  Table,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const CreateRejectOrderClsCp_0002_0007$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode296: any = [
      {
        type: 'customActionCode',
        dataId: 167513577221591700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '788068',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var item=state.itemList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue;if(instList[i].attrCode==="marketList"){feeObj[instList[i].attrCode]=JSON.parse(instList[i].attrValue)}}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});success(feeInfoList)};',
          actionTitle: '设置界面初始化值',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167513577221552030,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1339825',
              pageJsonId: '537892',
              dataSourceId: 166312529731561200,
              dataSourceName: 'feeList',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '43881',
                  code: 'productId',
                  name: '产品ID',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '936997',
                  code: 'productName',
                  name: '产品名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '57379',
                  code: 'fee',
                  name: '资费',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '1972676',
                  code: 'cost',
                  name: '成本',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2626565',
                  code: 'discount',
                  name: '折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '4898833',
                  code: 'income',
                  name: '收入',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '226486',
                  code: 'benefitProp',
                  name: '效益比',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '855367',
                  code: 'feeName',
                  name: '资费名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '803721',
                  code: 'rowId',
                  name: '行ID',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              newData: '$data_788068$',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167513577221525630,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '636382',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){success(data.feeList.length)};',
                  actionTitle: '计算实例总数',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167513577221561900,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '583686',
                      pageJsonId: '537892',
                      dataSourceId: 167513569577599200,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '964152',
                          code: 'fileCount',
                          name: '成功受理数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '509643',
                          code: 'sceneCount',
                          name: '实例总数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$data_636382$'],
                            code: '',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'setCompContentValue',
                    dataId: 167513595243926800,
                    options: {
                      compId: 'Text_4468414_703735',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '171151',
                      value: '$data_636382$',
                    },
                    line_number: 5,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode296.params = [] || [];
    CMDGenerator(eventDatacustomActionCode296, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDataapiRequest600: any = [
      {
        type: 'apiRequest',
        dataId: 167513596916106460,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6002214',
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
        line_number: 6,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2790316',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_6002214?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_6002214?.resultData$',
                  operate: 'notEmpty',
                },
                condId: '785758',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167513596916113100,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167513596916159460,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167513596916103300,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167513596916169730,
                        children: [],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: ['value'],
                    options: {
                      compId: 'Text_269337',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '990607',
                      value: '0',
                    },
                    actionObjId: 'Text_269337',
                    actionObjName: 'Text',
                    value: 'setCompContentValue',
                    compLib: 'custom',
                    elseIfs: [],
                    line_number: 10,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'setCompContentValue',
                    dataId: 167513596916103300,
                    options: {
                      compId: 'Text_269337',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '990607',
                      value: '0',
                    },
                    line_number: 10,
                    callback1: [],
                  },
                ],
              },
            ],
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167513596916144860,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '7452807',
                  pageJsonId: '537892',
                  dataSourceId: 167513569577599200,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '964152',
                      code: 'fileCount',
                      name: '成功受理数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_6002214?.resultData.acceptanceSuccessCount$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '509643',
                      code: 'sceneCount',
                      name: '实例总数',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 167513603684467840,
                options: {
                  compId: 'Text_269337_3231567',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '573101',
                  value: '$reply_6002214?.resultData.acceptanceSuccessCount$',
                },
                line_number: 9,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'console',
            dataId: 167513596916104220,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '24462',
              pageJsonId: '537892',
              value: ['失败失败'],
            },
            line_number: 11,
          },
        ],
      },
    ];
    eventDataapiRequest600.params = [] || [];
    CMDGenerator(eventDataapiRequest600, {}, 'apiRequest', {
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
          id: 'View_537892_1_232562',
          uid: 'View_537892_1_232562',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'hidden',
          width: '98%',
          overflow: 'hidden',
        }}
        ref={(r: any) => (refs['View_537892_1_232562'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'集团5G专网物联网资费'}
          $$componentItem={{
            id: 'Divider_95322766_8425169',
            uid: 'Divider_95322766_8425169',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_95322766_8425169'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_730932',
            uid: 'View_6806553_730932',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_6806553_730932'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_63707_2612714',
              uid: 'HorizontalView_004602_63707_2612714',
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
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['HorizontalView_004602_63707_2612714'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_281032_745525',
                uid: 'View_339406_281032_745525',
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
              ref={(r: any) => (refs['View_339406_281032_745525'] = r)}
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_806975_722668',
                  uid: 'HorizontalView_806975_722668',
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
                  height: '100%',
                  overflowY: 'auto',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => (refs['HorizontalView_806975_722668'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_9690203_631823',
                    uid: 'View_9690203_631823',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) => (refs['View_9690203_631823'] = r)}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    visible={true}
                    text={'集团5G专网物联网资费'}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={false}
                    disabled={false}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    readOnly={false}
                    $$componentItem={{
                      id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_588193',
                      uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_588193',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    onChange={(e: any) => {
                      const eventDatacustomActionCode854: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167091818482917060,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '70258',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){success(data.pageData.fileCount==data.pageData.sceneCount)};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '09204',
                                  options: {
                                    context: '$data_70258$',
                                    operate: '== true',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167091820673104830,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167091822645114780,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 167091823198976930,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167091823198907740,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167091823198904260,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 16709182319897972,
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
                                            id: '5911387',
                                            pageJsonId: '537892',
                                            pathname:
                                              '/faqishuaidantanchuang7958',
                                            pageId: '908274270111293440',
                                            customFuncName: 'pushSceneCodeList',
                                            customFuncParams:
                                              '$state.sceneCode$',
                                            modalPath:
                                              '/faqishuaidantanchuang7958',
                                          },
                                          actionObjId: 'callParentCustomFunc',
                                          actionObjName: 'system',
                                          value: 'callParentCustomFunc',
                                          elseIfs: [],
                                          line_number: 6,
                                        },
                                      ],
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167091823198965900,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167091823198906460,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198921760,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198917400,
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
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              actionObjId:
                                                'callParentCustomFunc',
                                              actionObjName: 'system',
                                              value: 'callParentCustomFunc',
                                              elseIfs: [],
                                              line_number: 7,
                                            },
                                          ],
                                          condition: [],
                                          elseIfs: [],
                                          callback: [
                                            {
                                              type: 'callParentCustomFunc',
                                              dataId: 167091823198906460,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              line_number: 7,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ],
                                        },
                                      ],
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
                                      desc: '审批场景新增/删减数组',
                                      line_number: 5,
                                    },
                                  ],
                                  condition: [],
                                  callback: [
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
                                      dataId: 167091823198976930,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167091823198965900,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167091823198906460,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198921760,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198917400,
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
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              actionObjId:
                                                'callParentCustomFunc',
                                              actionObjName: 'system',
                                              value: 'callParentCustomFunc',
                                              elseIfs: [],
                                              line_number: 7,
                                            },
                                          ],
                                          condition: [],
                                          elseIfs: [],
                                          callback: [
                                            {
                                              type: 'callParentCustomFunc',
                                              dataId: 167091823198906460,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              line_number: 7,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'callParentCustomFunc',
                                          dataId: 167091823198907740,
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '5911387',
                                            pageJsonId: '537892',
                                            pathname:
                                              '/faqishuaidantanchuang7958',
                                            pageId: '908274270111293440',
                                            customFuncName: 'pushSceneCodeList',
                                            customFuncParams:
                                              '$state.sceneCode$',
                                            modalPath:
                                              '/faqishuaidantanchuang7958',
                                          },
                                          line_number: 6,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'showModal',
                                  dataId: 167091826430071600,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '720637',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    title: '选择失败',
                                    content:
                                      '该场景成功受理数已等于/大于最大实例数,无法再次甩单',
                                  },
                                  line_number: 3,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setValue',
                                  dataId: 167091832755378530,
                                  options: {
                                    compId:
                                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_588193',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Checkbox',
                                    id: '4457195',
                                    valueList: {
                                      Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105:
                                        '$false$',
                                    },
                                  },
                                  line_number: 4,
                                  callback1: [],
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode854.params =
                        [
                          {
                            title: '复选框取值',
                            name: 'e',
                            value: '$e.target.checked$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode854,
                        { e },
                        'customActionCode',
                        {
                          id: 'customActionCode',
                          name: 'customActionCode',
                          type: 'customActionCode',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) =>
                      (refs[
                        'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_588193'
                      ] = r)
                    }
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_2986568',
                    uid: 'View_200544_2986568',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['View_200544_2986568'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'总数'}
                    content={'总数：'}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_35633157_94036',
                      uid: 'Text_35633157_94036',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                      textAlign: 'right',
                    }}
                    ref={(r: any) => (refs['Text_35633157_94036'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_764009_4859037',
                    uid: 'View_200544_764009_4859037',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['View_200544_764009_4859037'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'文本'}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_4468414_703735',
                      uid: 'Text_4468414_703735',
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
                    ref={(r: any) => (refs['Text_4468414_703735'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_741146_4429651_496981',
                    uid: 'View_741146_4429651_496981',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['View_741146_4429651_496981'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'成功受理数：'}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_456671_280083',
                      uid: 'Text_456671_280083',
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
                    ref={(r: any) => (refs['Text_456671_280083'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_741146_4429651_673978_87307074',
                    uid: 'View_741146_4429651_673978_87307074',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) =>
                    (refs['View_741146_4429651_673978_87307074'] = r)
                  }
                  {...injectData}
                >
                  <Text
                    name={'成功受理数'}
                    content={'null'}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_269337_3231567',
                      uid: 'Text_269337_3231567',
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
                    ref={(r: any) => (refs['Text_269337_3231567'] = r)}
                    {...injectData}
                  />
                </View>
              </HorizontalView>
            </View>
          </HorizontalView>
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
                title: '产品名称',
                key: 'productName',
                dataIndex: 'productName',
                className: '',
                id: '475514',
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
                title: '资费',
                key: 'feeName',
                dataIndex: 'feeName',
                id: '531567',
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
                title: '成本',
                key: 'cost',
                dataIndex: 'cost',
                className: 'divider',
                id: '117769',
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
                title: '折扣',
                key: 'discount',
                dataIndex: 'discount',
                className: 'divider',
                id: '1380425',
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
                title: '收入',
                key: 'income',
                dataIndex: 'income',
                className: 'divider',
                id: '4937812',
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
                title: '效益比',
                key: 'benefitProp',
                dataIndex: 'benefitProp',
                className: 'divider',
                id: '42818424',
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
            dataSource={data?.feeList}
            rowKey={'rowId'}
            dataSourceFromDataSourceConfig={'data.feeList'}
            $$componentItem={{
              id: 'Table_7669008_367679_0926046',
              uid: 'Table_7669008_367679_0926046',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Table_7669008_367679_0926046'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreateRejectOrderClsCp_0002_0007$$Page, {
  pageId: '937532223410704384',
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', itemList: '', busiObjNbr: '' },
});
