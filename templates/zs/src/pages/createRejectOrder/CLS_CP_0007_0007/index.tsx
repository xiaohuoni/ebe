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

const pageId = '910491674221629440';
const CreateRejectOrderClsCp_0007_0007$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode268: any = [
      {
        type: 'customActionCode',
        dataId: 166869016955590700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '668923',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var item=state.itemList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue;if(instList[i].attrCode==="marketList"){feeObj[instList[i].attrCode]=JSON.parse(instList[i].attrValue)}}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});success(feeInfoList)};',
          actionTitle: '设置界面初始化值',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166869016955638880,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '220585',
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
                  showInput: false,
                  _codePath: ['busiType'],
                  _idpath: ['739205'],
                },
                {
                  attrId: '137802',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['receiptsPrice'],
                  _idpath: ['137802'],
                },
                {
                  attrId: '963826',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['bandwidth'],
                  _idpath: ['963826'],
                },
                {
                  attrId: '5031659',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv6GiveNum'],
                  _idpath: ['5031659'],
                },
                {
                  attrId: '6377456',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv4GiveNum'],
                  _idpath: ['6377456'],
                },
                {
                  attrId: '665968',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv6DemandNum'],
                  _idpath: ['665968'],
                },
                {
                  attrId: '754893',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv4DemandNum'],
                  _idpath: ['754893'],
                },
                {
                  attrId: '6429123',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv6BeyondSel'],
                  _idpath: ['6429123'],
                },
                {
                  attrId: '197527',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv4BeyondNum'],
                  _idpath: ['197527'],
                },
                {
                  attrId: '2152803',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv6BeyondCost'],
                  _idpath: ['2152803'],
                },
                {
                  attrId: '017672',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv4BeyondCount'],
                  _idpath: ['017672'],
                },
                {
                  attrId: '26139435',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['unitPrice'],
                  _idpath: ['26139435'],
                },
                {
                  attrId: '62643',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['lastDiscount'],
                  _idpath: ['62643'],
                },
                {
                  attrId: '9425584',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['market'],
                  _idpath: ['9425584'],
                },
                {
                  attrId: '442519',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['busiTypeName'],
                  _idpath: ['442519'],
                },
                {
                  attrId: '3700349',
                  code: 'areaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['areaType'],
                  _idpath: ['3700349'],
                },
                {
                  attrId: '7190864',
                  code: 'joinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['joinWay'],
                  _idpath: ['7190864'],
                },
                {
                  attrId: '026113',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['bandwidthUp'],
                  _idpath: ['026113'],
                },
                {
                  attrId: '9865009',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['bandwidthDown'],
                  _idpath: ['9865009'],
                },
                {
                  attrId: '262314',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['bandwidthPort'],
                  _idpath: ['262314'],
                },
                {
                  attrId: '4672304',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['singleUseFee'],
                  _idpath: ['4672304'],
                },
                {
                  attrId: '567251',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['portFee'],
                  _idpath: ['567251'],
                },
                {
                  attrId: '9620426',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv6BeyondNum'],
                  _idpath: ['9620426'],
                },
                {
                  attrId: '1137346',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv6BeyondCount'],
                  _idpath: ['1137346'],
                },
                {
                  attrId: '467282',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['standardPriceSdWan'],
                  _idpath: ['467282'],
                },
                {
                  attrId: '801439',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['receiptsPriceSdWan'],
                  _idpath: ['801439'],
                },
                {
                  attrId: '252243',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['standardPrice'],
                  _idpath: ['252243'],
                },
                {
                  attrId: '5486426',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['bandwidthName'],
                  _idpath: ['5486426'],
                },
                {
                  attrId: '758304',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['rowId'],
                  _idpath: ['758304'],
                },
                {
                  attrId: '2798624',
                  code: 'ipv4BeyondCost',
                  name: 'IPv4超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['ipv4BeyondCost'],
                  _idpath: ['2798624'],
                },
                {
                  attrId: '8081859',
                  code: 'exceedPrice\t',
                  name: 'IPV4超出单价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['exceedPrice\t'],
                  _idpath: ['8081859'],
                },
                {
                  attrId: '915507',
                  code: 'row',
                  name: '条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['row'],
                  _idpath: ['915507'],
                },
                {
                  attrId: '011859',
                  code: 'receiptsPriceSum',
                  name: '总实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['receiptsPriceSum'],
                  _idpath: ['011859'],
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              newData: '$data_668923$',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166869173218778660,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '045809',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){success(data.feeInfo.length)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setCompContentValue',
                    dataId: 166869176436373300,
                    options: {
                      compId: 'Text_4468414',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '792713',
                      value: '$data_045809$',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 167089691085957300,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '0049355',
                      pageJsonId: '537892',
                      dataSourceId: 167089689846015650,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '67681',
                          code: 'fileCount',
                          name: '成功受理数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '3975642',
                          code: 'sceneCount',
                          name: '实例总数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$data_045809$'],
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
    eventDatacustomActionCode268.params = [] || [];
    CMDGenerator(eventDatacustomActionCode268, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDataapiRequest435: any = [
      {
        type: 'apiRequest',
        dataId: 166986076902665800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '535255',
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
                  context: '$reply_535255?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_535255?.resultData$',
                  operate: 'notEmpty',
                },
                condId: '785758',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166986087001353380,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166986121381419460,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166986121689662750,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 166986121689650850,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: ['value'],
                    options: {
                      compId: 'Text_269337',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '273422',
                      value: '0',
                    },
                    actionObjId: 'Text_269337',
                    actionObjName: 'Text',
                    value: 'setCompContentValue',
                    compLib: 'custom',
                    line_number: 10,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'setCompContentValue',
                    dataId: 166986121689662750,
                    options: {
                      compId: 'Text_269337',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '273422',
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
                dataId: 166986090116274200,
                options: {
                  compId: 'Text_269337',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '367111',
                  value: '$reply_535255?.resultData.acceptanceSuccessCount$',
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 167089694995195400,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '438481',
                  pageJsonId: '537892',
                  dataSourceId: 167089689846015650,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '67681',
                      code: 'fileCount',
                      name: '成功受理数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_535255?.resultData.acceptanceSuccessCount$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '3975642',
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
        callback2: [
          {
            type: 'console',
            dataId: 167020825536919260,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '703031',
              pageJsonId: '537892',
              value: ['失败失败'],
            },
            line_number: 11,
          },
        ],
      },
    ];
    eventDataapiRequest435.params = [] || [];
    CMDGenerator(eventDataapiRequest435, {}, 'apiRequest', {
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
        className="View_View_537892_1_2061057"
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1_2061057',
          uid: 'View_537892_1_2061057',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_2061057')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'互联网专线资费审批'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558_0392997',
            uid: 'Divider_52558_0392997',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558_0392997')}
          {...injectData}
        />
        <View
          className="View_View_6806553_449831"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_449831',
            uid: 'View_6806553_449831',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_449831')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_63707',
              uid: 'HorizontalView_004602_63707',
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
              refs.setComponentRef(r, 'HorizontalView_004602_63707')
            }
            {...injectData}
          >
            <View
              className="View_View_339406_281032"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_281032',
                uid: 'View_339406_281032',
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
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_281032')}
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_806975',
                  uid: 'HorizontalView_806975',
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
                  refs.setComponentRef(r, 'HorizontalView_806975')
                }
                {...injectData}
              >
                <View
                  className="View_View_9690203"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_9690203',
                    uid: 'View_9690203',
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
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_9690203')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'互联网专线资费审批'}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={false}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    $$componentItem={{
                      id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105',
                      uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    onChange={(e: any) => {
                      const eventDatacustomActionCode708: any = [
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
                                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105',
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
                      eventDatacustomActionCode708.params =
                        [
                          {
                            title: '复选框取值',
                            name: 'e',
                            value: '$e.target.checked$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode708,
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
                        'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105',
                      )
                    }
                    {...injectData}
                  />
                </View>
                <View
                  className="View_View_200544"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544',
                    uid: 'View_200544',
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
                    textAlign: 'right',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_200544')}
                  {...injectData}
                >
                  <Text
                    name={'总数'}
                    content={'总数：'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_35633157',
                      uid: 'Text_35633157',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                      textAlign: 'right',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Text_35633157')}
                    {...injectData}
                  />
                </View>
                <View
                  className="View_View_200544_764009"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_764009',
                    uid: 'View_200544_764009',
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_200544_764009')
                  }
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'文本'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_4468414',
                      uid: 'Text_4468414',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Text_4468414')}
                    {...injectData}
                  />
                </View>
                <View
                  className="View_View_741146_4429651"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_741146_4429651',
                    uid: 'View_741146_4429651',
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
                    height: '100%',
                    overflowY: 'auto',
                    textAlign: 'right',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_741146_4429651')
                  }
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'成功受理数：'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_456671',
                      uid: 'Text_456671',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Text_456671')}
                    {...injectData}
                  />
                </View>
                <View
                  className="View_View_741146_4429651_673978"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_741146_4429651_673978',
                    uid: 'View_741146_4429651_673978',
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
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_741146_4429651_673978')
                  }
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'null'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_269337',
                      uid: 'Text_269337',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Text_269337')}
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
                title: 'IPv4赠送数',
                key: 'ipv4GiveNum',
                dataIndex: 'ipv4GiveNum',
                className: 'divider',
                id: '4179277',
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
                title: 'IPv4需求数',
                key: 'ipv4DemandNum',
                dataIndex: 'ipv4DemandNum',
                className: 'divider',
                id: '285969',
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
                title: 'IPv4超出费用（元/月）',
                key: 'ipv4BeyondCost',
                dataIndex: 'ipv4BeyondCost',
                id: '140418',
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
                title: '标准价格（元/月）',
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
                title: '单条实收价（元/月）',
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
                type: 'staticCol',
                id: '388486',
                title: '条数',
                dataIndex: 'row',
                key: '388486',
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
                type: 'staticCol',
                id: '045854',
                title: '总实收价（元/月）',
                dataIndex: 'receiptsPriceSum',
                key: '045854',
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
              id: 'Table_8700198_489761_4830966',
              uid: 'Table_8700198_489761_4830966',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_8700198_489761_4830966')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreateRejectOrderClsCp_0007_0007$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', itemList: '', busiObjNbr: '' },
});
