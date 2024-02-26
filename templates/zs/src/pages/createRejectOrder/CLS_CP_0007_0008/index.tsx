// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Checkbox,
  Text,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '910634439596978176';
const CreateRejectOrderClsCp_0007_0008$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode298: any = [
      {
        type: 'customActionCode',
        dataId: 166871869035396540,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '592778',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var item=state.itemList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue;if(instList[i].attrCode==="marketList"){feeObj[instList[i].attrCode]=JSON.parse(instList[i].attrValue)}}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});success(feeInfoList)};',
          actionTitle: '设置界面初始化值',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166871869035371800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '04985424',
              pageJsonId: '537892',
              dataSourceId: 166519807387797900,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '739205',
                  code: 'busiType',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '137802',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '963826',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5031659',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '6377456',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '665968',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '754893',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '6429123',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '197527',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2152803',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '017672',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '26139435',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '62643',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9425584',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '442519',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '3700349',
                  code: 'areaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '7190864',
                  code: 'joinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '026113',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9865009',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '262314',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '4672304',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '567251',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9620426',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '1137346',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '467282',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '801439',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '252243',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5486426',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '758304',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2798624',
                  code: 'ipv4BeyondCost',
                  name: 'IPv4超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '8081859',
                  code: 'exceedPrice\t',
                  name: 'IPV4超出单价',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              newData: '$data_592778$',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166871869035378980,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '1315266',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){success(data.feeInfo.length)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setCompContentValue',
                    dataId: 166925798144795140,
                    options: {
                      compId: 'Text_4468414_6071205',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '402552',
                      value: '$data_1315266$',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 167108777183358140,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '035076',
                      pageJsonId: '537892',
                      dataSourceId: 167108776130279800,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '834042',
                          code: 'fileCount',
                          name: '成功受理数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '555516',
                          code: 'sceneCount',
                          name: '实例总数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$data_1315266$'],
                            code: '',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 5,
                    callback1: [],
                    callback2: [],
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
    eventDatacustomActionCode298.params = [] || [];
    CMDGenerator(eventDatacustomActionCode298, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDataapiRequest606: any = [
      {
        type: 'apiRequest',
        dataId: 166986127820416320,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '217792',
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
              dataKey: '217792_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '217792_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '217792_query',
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
                  dataKey: '217792_body.acceptanceSuccessCount',
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
                  dataKey: '217792_body.busiObjNbr',
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
                  dataKey: '217792_body.createDate',
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
                  dataKey: '217792_body.createStaff',
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
                  dataKey: '217792_body.salesNumber',
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
                  dataKey: '217792_body.salesOrderFileId',
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
                  dataKey: '217792_body.sceneCode',
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
                  dataKey: '217792_body.updateDate',
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
                  dataKey: '217792_body.updateStaff',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '217792_body',
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
                  context: '$reply_217792?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_217792?.resultData$',
                  operate: 'notEmpty',
                },
                condId: '8119597',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166986127820443780,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166986127820407170,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166986130300766700,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 166986130300771400,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: ['value'],
                    options: {
                      compId: 'Text_793025',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '809991',
                      value: '0',
                    },
                    actionObjId: 'Text_793025',
                    actionObjName: 'Text',
                    value: 'setCompContentValue',
                    compLib: 'custom',
                    line_number: 10,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'setCompContentValue',
                    dataId: 166986130300766700,
                    options: {
                      compId: 'Text_793025',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '809991',
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
                type: 'setCompContentValue',
                dataId: 166986129284938780,
                options: {
                  compId: 'Text_793025',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '259411',
                  value: '$reply_217792?.resultData.acceptanceSuccessCount$',
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 167108781232234900,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '254837',
                  pageJsonId: '537892',
                  dataSourceId: 167108776130279800,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '834042',
                      code: 'fileCount',
                      name: '成功受理数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_217792?.resultData.acceptanceSuccessCount$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '555516',
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
                line_number: 9,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest606.params = [] || [];
    CMDGenerator(eventDataapiRequest606, {}, 'apiRequest', {
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
          id: 'View_537892_1_538963',
          uid: 'View_537892_1_538963',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_538963')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'广域网专线资费审批'}
          $$componentItem={{
            id: 'Divider_52558_9594',
            uid: 'Divider_52558_9594',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558_9594')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_449831_089676',
            uid: 'View_6806553_449831_089676',
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
            refs.setComponentRef(r, 'View_6806553_449831_089676')
          }
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_63707_195444',
              uid: 'HorizontalView_004602_63707_195444',
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_63707_195444')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_281032_297273',
                uid: 'View_339406_281032_297273',
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_339406_281032_297273')
              }
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_806975_384555',
                  uid: 'HorizontalView_806975_384555',
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'HorizontalView_806975_384555')
                }
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_9690203_589474',
                    uid: 'View_9690203_589474',
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
                    refs.setComponentRef(r, 'View_9690203_589474')
                  }
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    visible={true}
                    text={'广域网专线资费审批'}
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
                      id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_326552',
                      uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_326552',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    onChange={(e: any) => {
                      const eventDatacustomActionCode861: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167108783801991550,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '4309854',
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
                                    context: '$data_4309854$',
                                    operate: '== true',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167108783801972670,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167108783801966240,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 167108784837011200,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 16710878483704296,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167108784837095800,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 167108784837018050,
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
                                            id: '515299',
                                            pageJsonId: '537892',
                                            pathname:
                                              '/faqishuaidantanchuang7958',
                                            pageId: '908274270111293440',
                                            customFuncName: 'pushSceneCodeList',
                                            customFuncParams:
                                              '$state.sceneCode$',
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
                                          dataId: 167108784837044480,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167108784837027840,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167108784837050620,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167108784837068320,
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
                                                id: '588619',
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
                                              dataId: 167108784837027840,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '588619',
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
                                      line_number: 5,
                                    },
                                  ],
                                  condition: [],
                                  elseIfs: [],
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
                                      dataId: 167108784837011200,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167108784837044480,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167108784837027840,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167108784837050620,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167108784837068320,
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
                                                id: '588619',
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
                                              dataId: 167108784837027840,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '588619',
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
                                          dataId: 16710878483704296,
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '515299',
                                            pageJsonId: '537892',
                                            pathname:
                                              '/faqishuaidantanchuang7958',
                                            pageId: '908274270111293440',
                                            customFuncName: 'pushSceneCodeList',
                                            customFuncParams:
                                              '$state.sceneCode$',
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
                                  dataId: 167108783801945100,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '7304007',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    title: '选择失败',
                                    content:
                                      '该场景成功受理数已大于/等于最大实例数,无法再次甩单',
                                  },
                                  line_number: 3,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setValue',
                                  dataId: 167108785646155600,
                                  options: {
                                    compId:
                                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_326552',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Checkbox',
                                    id: '5053808',
                                    valueList: {
                                      Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_326552:
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
                      eventDatacustomActionCode861.params =
                        [
                          {
                            title: '复选框取值',
                            name: 'e',
                            value: '$e.target.checked$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode861,
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
                      refs.setComponentRef(
                        r,
                        'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_326552',
                      )
                    }
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_115993',
                    uid: 'View_200544_115993',
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_200544_115993')
                  }
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
                      id: 'Text_35633157_019218',
                      uid: 'Text_35633157_019218',
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Text_35633157_019218')
                    }
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_764009_0226035',
                    uid: 'View_200544_764009_0226035',
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_200544_764009_0226035')
                  }
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
                      id: 'Text_4468414_6071205',
                      uid: 'Text_4468414_6071205',
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Text_4468414_6071205')
                    }
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_741146_4429651_804104',
                    uid: 'View_741146_4429651_804104',
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_741146_4429651_804104')
                  }
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
                      id: 'Text_776239',
                      uid: 'Text_776239',
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
                    ref={(r: any) => refs.setComponentRef(r, 'Text_776239')}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_741146_4429651_673978_7050843',
                    uid: 'View_741146_4429651_673978_7050843',
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
                    refs.setComponentRef(
                      r,
                      'View_741146_4429651_673978_7050843',
                    )
                  }
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
                      id: 'Text_793025',
                      uid: 'Text_793025',
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
                    ref={(r: any) => refs.setComponentRef(r, 'Text_793025')}
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
                title: '业务类型',
                key: 'busiTypeName',
                dataIndex: 'busiTypeName',
                id: '939446',
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
                title: '区域类型',
                key: 'areaTypeName',
                dataIndex: 'areaTypeName',
                className: 'divider',
                id: '4458297',
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
                title: '接入方式',
                key: 'joinWayName',
                dataIndex: 'joinWayName',
                className: 'divider',
                id: '74763726',
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
                title: '带宽',
                key: 'bandwidthName',
                dataIndex: 'bandwidthName',
                id: '0398142',
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
                title: '标准价格',
                key: 'standardPrice',
                dataIndex: 'standardPrice',
                id: '894124',
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
                title: '实收价',
                key: 'receiptsPrice',
                dataIndex: 'receiptsPrice',
                className: 'divider',
                id: '107778',
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
                title: '营销案',
                key: 'market',
                dataIndex: 'market',
                className: 'divider',
                id: '9942444',
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
                title: '最终折扣(折)',
                key: 'lastDiscount',
                dataIndex: 'lastDiscount',
                className: 'divider',
                id: '322947',
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
            page={true}
            rowKeyType={'specified'}
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.feeInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.feeInfo'}
            $$componentItem={{
              id: 'Table_8700198_3717786_44182994',
              uid: 'Table_8700198_3717786_44182994',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal278: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/networkFeeAudit',
                    pageId: '897009883231784960',
                    modalPath: '/networkFeeAudit',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166540314414141150,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '0855155',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_951698.rowId});data.feeInfo.push(okData_951698);var instList=[];for(var key in okData_951698){if(key!="rowId"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_951698[key]})}}var instObj={"instCode":okData_951698.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.rowId!=okData_951698.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166540314414131400,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '539537',
                            pageJsonId: '537892',
                            dataSourceId: 166519807387797900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '739205',
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '252243',
                                code: 'standardPrice',
                                name: '标准价格',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '137802',
                                code: 'receiptsPrice',
                                name: '实收价',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '963826',
                                code: 'bandwidth',
                                name: '带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '5031659',
                                code: 'ipv6GiveNum',
                                name: 'IPv6赠送数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '6377456',
                                code: 'ipv4GiveNum',
                                name: 'IPv4赠送数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '665968',
                                code: 'ipv6DemandNum',
                                name: 'IPv6需求数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '754893',
                                code: 'ipv4DemandNum',
                                name: 'IPv4需求数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '6429123',
                                code: 'ipv6BeyondSel',
                                name: 'IPv6超出选择',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '197527',
                                code: 'ipv4BeyondNum',
                                name: 'IPv4超出个数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '2152803',
                                code: 'ipv6BeyondCost',
                                name: 'IPv6超出费用',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '017672',
                                code: 'ipv4BeyondCount',
                                name: 'IPv4元/月/个',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '26139435',
                                code: 'unitPrice',
                                name: '单价（元/G）',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '62643',
                                code: 'lastDiscount',
                                name: '最终折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '9425584',
                                code: 'market',
                                name: '营销案',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '442519',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '3700349',
                                code: 'areaType',
                                name: '区域类型',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '7190864',
                                code: 'joinWay',
                                name: '接入方式',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '026113',
                                code: 'bandwidthUp',
                                name: '上行宽带',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '9865009',
                                code: 'bandwidthDown',
                                name: '下行宽带',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '262314',
                                code: 'bandwidthPort',
                                name: 'SDWAN端口带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '4672304',
                                code: 'singleUseFee',
                                name: '一次性费用',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '567251',
                                code: 'portFee',
                                name: '端口费',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '9620426',
                                code: 'ipv6BeyondNum',
                                name: 'IPv6超出个数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '1137346',
                                code: 'ipv6BeyondCount',
                                name: 'IPv6元/月/个',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '467282',
                                code: 'standardPriceSdWan',
                                name: 'SDWAN标准价格',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '801439',
                                code: 'receiptsPriceSdWan',
                                name: 'SDWAN实收价格',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '5486426',
                                code: 'bandwidthName',
                                name: '带宽名称',
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
                          type: 'callParentCustomFunc',
                          dataId: 166540314414147520,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '7453836',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                          },
                          line_number: 4,
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
              eventDatashowCustomModal278.params =
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
                eventDatashowCustomModal278,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_8700198_3717786_44182994')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreateRejectOrderClsCp_0007_0008$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', itemList: '', busiObjNbr: '' },
});
