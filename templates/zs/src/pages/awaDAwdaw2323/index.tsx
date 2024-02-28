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
  TextArea,
  Table,
  Row,
  Text,
  GridView,
} from '@/components/factory';

import BusiComp371631 from '@/components/BusiComp371631';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '887883146584788992';
const AwaDAwdaw2323$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest124: any = [
      {
        type: 'apiRequest',
        dataId: 170191907397174800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '088536',
          pageJsonId: '0521965',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
          valueType: 'object',
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
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '717262_root.header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrCode',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'T',
                      defaultValue: '',
                      _id: 'root.path.attrCode',
                      compType: 'Input',
                      parents: ['root', 'path'],
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                      id: 'root.path.attrCode',
                      dataKey: '717262_root.path.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'SUPPORTED_PREVIEW_ATTACHMENT',
                      },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '717262_root.path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                  id: 'root.query',
                  dataKey: '717262_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '717262_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '717262_root',
            },
          ],
          params: 'object',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 170191907397161020,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '7490643',
              pageJsonId: '0521965',
              value: [
                '查询SUPPORTED_PREVIEW_ATTACHMENT结果：',
                '$reply_088536?.resultData$',
              ],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 170191907397171970,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '251283',
              pageJsonId: '0521965',
              code: 'function main(data,state,success,fail){var _reply_;var list=((_reply_=reply_088536)===null||_reply_===void 0?void 0:_reply_.resultData)||[];var str="\\\\.(allSupported)$";if(list&&list.length>0){str=list.map(function(item){return item.attrValue}).join("|");console.log("str = ",str);str="\\\\.("+str+")$"}var reg=new RegExp(str,"i");success(reg)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'console',
                dataId: 170191907397103070,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '8951785',
                  pageJsonId: '0521965',
                  value: ['支持的文件预览格式：', '$data_251283$'],
                },
                line_number: 4,
              },
              {
                type: 'setDataSource',
                dataId: 170191907397114800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '5078134',
                  pageJsonId: '0521965',
                  dataSourceId: 170191783249413440,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '135699',
                      code: 'supportedSuffix',
                      name: '支持的文件后缀',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_251283$'], code: '' },
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
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest124.params = [] || [];
    CMDGenerator(eventDataapiRequest124, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse84: any = [
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
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){if(attrList[i].attrValueDesc!=undefined&&""!=attrList[i].attrValueDesc){factorForm[attrList[i].attrCode]=attrList[i].attrValueDesc}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;console.log("\\u5904\\u7406\\u5B8C\\u540E\\u7684factorForm = ",data.factorForm);success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
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
                line_number: 8,
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
                line_number: 9,
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var paymentIdentifies=[];if(item&&item.instList){for(var i=0;i<item.instList.length;++i){var paymentIdentifie={};var instNode=item.instList[i];paymentIdentifie.instCode=instNode.instCode;for(var j=0;j<instNode.instAttrList.length;++j){var instAttr=instNode.instAttrList[j];var attrValue=instAttr.attrValue;if("sceneCode"==instAttr.attrCode){attrValue=instAttr.attrValueDesc}if("validityStartDate"==instAttr.attrCode||"validityEndDate"==instAttr.attrCode){var pattern=/(\\d{4})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})/;attrValue=attrValue.replace(pattern,"$1-$2-$3 $4:$5:$6")}paymentIdentifie[instAttr.attrCode]=attrValue}paymentIdentifies.push(paymentIdentifie)}}data.sceneSubmit=item;data.sceneSubmit.paymentIdentifies=paymentIdentifies;success(item.fileInfo)};',
            },
            line_number: 10,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132828894265800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '391128',
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
                      initialData: { type: 'static', value: '附件文件路径' },
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
                      initialData: { type: 'static', value: '附件分类-细类' },
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
                  newData: '$data_859603$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 11,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166330790642940350,
                options: {
                  compId: 'Text_2451',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '424694',
                  value:
                    '$data.sceneSubmit.customObject.acceptBusi.claimAmount$',
                },
                line_number: 12,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166330797762035400,
                options: {
                  compId: 'Text_2451_168378',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '5774545',
                  value:
                    '$data.sceneSubmit.customObject.acceptBusi.realAmount$',
                },
                line_number: 13,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166330799597228160,
                options: {
                  compId: 'Text_2451_4726555',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '62452',
                  value:
                    '$data.sceneSubmit.customObject.acceptBusi.bToaAmount$',
                },
                line_number: 14,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166330801707626560,
                options: {
                  compId: 'Text_2451_3083706',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '877372',
                  value: '$data.sceneSubmit.customObject.invoice?.totalAmount$',
                },
                line_number: 15,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 166436613332825860,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3462454',
                  pageJsonId: '537892',
                  dataSourceId: 166436577312580640,
                  dataSourceName: 'acceptBusiContextList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'amount',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '0.20',
                      defaultValue: '',
                      name: '金额（元）',
                      attrId: '2070192',
                      initialData: { type: 'static', value: '0.20' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'busiDesc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      name: '业务名称(描述)',
                      attrId: '681856',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'busiName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '保证金',
                      defaultValue: '',
                      name: '业务名称',
                      attrId: '8921601',
                      initialData: { type: 'static', value: '保证金' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'custCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '5911402326',
                      defaultValue: '',
                      name: '集团编码',
                      attrId: '731512',
                      initialData: { type: 'static', value: '5911402326' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'custName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '福建中鹭置业有限公司',
                      defaultValue: '',
                      name: '集团编码',
                      attrId: '296928',
                      initialData: {
                        type: 'static',
                        value: '福建中鹭置业有限公司',
                      },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'depositExplain',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      name: '保证金说明',
                      attrId: '48305',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'depositType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '1',
                      defaultValue: '',
                      name: '保证金类型',
                      attrId: '513131',
                      initialData: { type: 'static', value: '1' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'quantity',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      name: '数量',
                      attrId: '165654',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'riskKint',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue:
                        '集团名称：0%;单位证件名称 ：0%;个人户名相似度 ：0%;',
                      defaultValue: '',
                      name: '风险提示',
                      attrId: '364922',
                      initialData: {
                        type: 'static',
                        value:
                          '集团名称：0%;单位证件名称 ：0%;个人户名相似度 ：0%;',
                      },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'serviceNumber',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      name: '充值账号、密码接收号码 ',
                      attrId: '212926',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'subAcctCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      name: '充值账号、密码接收号码 ',
                      attrId: '886854',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'subAcctName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      name: '集团分账户名称',
                      attrId: '521565035',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'totalAmount',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '0.20',
                      defaultValue: '',
                      name: '合计金额（元',
                      attrId: '915277',
                      initialData: { type: 'static', value: '0.20' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                  ],
                  newData:
                    '$data.sceneSubmit.customObject.acceptBusi.acceptBusiContextList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 16,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 166436684643646940,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '430212',
                  pageJsonId: '537892',
                  dataSourceId: 166436636469697200,
                  dataSourceName: 'invoiceContextList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'amountOutstanding',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '未平账金额（元）',
                      defaultValue: '',
                      name: '未平账金额（元）',
                      attrId: '322326',
                      initialData: {
                        type: 'static',
                        value: '未平账金额（元）',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['amountOutstanding'],
                      _idpath: ['322326'],
                    },
                    {
                      code: 'invoiceAmount',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '发票金额（元）',
                      defaultValue: '',
                      name: '发票金额（元）',
                      attrId: '785233',
                      initialData: { type: 'static', value: '发票金额（元）' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoiceAmount'],
                      _idpath: ['785233'],
                    },
                    {
                      code: 'invoiceClerk',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '开票员',
                      defaultValue: '',
                      name: '开票员',
                      attrId: '9198094',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoiceClerk'],
                      _idpath: ['9198094'],
                    },
                    {
                      code: 'invoiceCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '发票编码',
                      defaultValue: '',
                      name: '发票编码',
                      attrId: '990238',
                      initialData: { type: 'static', value: '发票编码' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoiceCode'],
                      _idpath: ['990238'],
                    },
                    {
                      code: 'invoiceDate',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '开票时间',
                      defaultValue: '',
                      name: '开票时间',
                      attrId: '188049',
                      initialData: { type: 'static', value: '开票时间' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoiceDate'],
                      _idpath: ['188049'],
                    },
                    {
                      code: 'invoiceNumber',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '发票号码',
                      defaultValue: '',
                      name: '发票号码',
                      attrId: '701945',
                      initialData: { type: 'static', value: '发票号码' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoiceNumber'],
                      _idpath: ['701945'],
                    },
                    {
                      code: 'invoiceType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '发票类型',
                      defaultValue: '',
                      name: '发票类型',
                      attrId: '581928',
                      initialData: { type: 'static', value: '发票类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoiceType'],
                      _idpath: ['581928'],
                    },
                    {
                      code: 'invoicedAmount',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '已开票金额（元）',
                      defaultValue: '',
                      name: '已开票金额（元）',
                      attrId: '6564957',
                      initialData: {
                        type: 'static',
                        value: '已开票金额（元）',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['invoicedAmount'],
                      _idpath: ['6564957'],
                    },
                    {
                      code: 'purchase',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '购买信息',
                      defaultValue: '',
                      name: '购买信息',
                      attrId: '75598',
                      initialData: { type: 'static', value: '购买信息' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['purchase'],
                      _idpath: ['75598'],
                    },
                    {
                      code: 'redAccountAmount',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '本次平账金额（元）',
                      defaultValue: '',
                      name: '本次平账金额（元）',
                      attrId: '859346',
                      initialData: {
                        type: 'static',
                        value: '本次平账金额（元）',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['redAccountAmount'],
                      _idpath: ['859346'],
                    },
                    {
                      attrId: '75242',
                      code: 'invoiceIsRelGroup',
                      name: '是否关联集团开票',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['invoiceIsRelGroup'],
                      _idpath: ['75242'],
                    },
                    {
                      attrId: '837405',
                      code: 'groupAccountRel',
                      name: '关联集团账户',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupAccountRel'],
                      _idpath: ['837405'],
                    },
                    {
                      attrId: '937526',
                      code: 'groupCodeRel',
                      name: '关联集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupCodeRel'],
                      _idpath: ['937526'],
                    },
                    {
                      attrId: '3663035',
                      code: 'returnAmountRel',
                      name: '关联未回款金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['returnAmountRel'],
                      _idpath: ['3663035'],
                    },
                  ],
                  newData:
                    '$data.sceneSubmit.customObject.invoice?.invoiceContextList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 17,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 166436684780302720,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '2632987',
                  pageJsonId: '537892',
                  dataSourceId: 166436660515770720,
                  dataSourceName: 'reminder',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'contactPhone',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '联系电话',
                      defaultValue: '',
                      name: '联系电话',
                      attrId: '9646364',
                      initialData: { type: 'static', value: '联系电话' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'paymentAcctCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '转账方账号',
                      defaultValue: '',
                      name: '转账方账号',
                      attrId: '832191',
                      initialData: { type: 'static', value: '转账方账号' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'paymentAcctName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '转账方户名',
                      defaultValue: '',
                      name: '转账方户名',
                      attrId: '210465',
                      initialData: { type: 'static', value: '转账方户名' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'paymentBankName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '转账方银行',
                      defaultValue: '',
                      name: '转账方银行',
                      attrId: '528637',
                      initialData: { type: 'static', value: '转账方银行' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'remindObject',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '提醒方',
                      defaultValue: '',
                      name: '提醒方',
                      attrId: '526286',
                      initialData: { type: 'static', value: '提醒方' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'reminder',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '资金变动提醒人',
                      defaultValue: '',
                      name: '资金变动提醒人',
                      attrId: '784928',
                      initialData: { type: 'static', value: '资金变动提醒人' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data.sceneSubmit.customObject.reminder$',
                },
                line_number: 18,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 166436684853300100,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '048234',
                  pageJsonId: '537892',
                  dataSourceId: 166436680090600930,
                  dataSourceName: 'bankAccountList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'isGovEnterprise',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '是否政企专户',
                      defaultValue: '',
                      name: '属性',
                      attrId: '523756',
                      initialData: { type: 'static', value: '是否政企专户' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'payeeAcctCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '收款方账号',
                      defaultValue: '',
                      name: '属性',
                      attrId: '09153434',
                      initialData: { type: 'static', value: '收款方账号' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'payeeAcctName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '收款方户名',
                      defaultValue: '',
                      name: '属性',
                      attrId: '215613',
                      initialData: { type: 'static', value: '收款方户名' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'paymentAcctCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '账户方账号',
                      defaultValue: '',
                      name: '属性',
                      attrId: '645119',
                      initialData: { type: 'static', value: '账户方账号' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'paymentAcctName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '转账方户名',
                      defaultValue: '',
                      name: '属性',
                      attrId: '9718804',
                      initialData: { type: 'static', value: '转账方户名' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'paymentBankName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '转账方银行',
                      defaultValue: '',
                      name: '属性',
                      attrId: '057783',
                      initialData: { type: 'static', value: '转账方银行' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'postscript',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附言',
                      defaultValue: '',
                      name: '属性',
                      attrId: '094515',
                      initialData: { type: 'static', value: '附言' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'summary',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '摘要',
                      defaultValue: '',
                      name: '属性',
                      attrId: '88878',
                      initialData: { type: 'static', value: '摘要' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'tradeAmount',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '交易金额（元）',
                      defaultValue: '',
                      name: '属性',
                      attrId: '4089053',
                      initialData: { type: 'static', value: '交易金额（元）' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'tradeTime',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '交易时间',
                      defaultValue: '',
                      name: '属性',
                      attrId: '99743002',
                      initialData: { type: 'static', value: '交易时间' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data.sceneSubmit.customObject.bankAccountList$',
                },
                line_number: 19,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 169416298387803870,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '068374',
                  pageJsonId: '537892',
                  dataSourceId: 169330967645143200,
                  dataSourceName: 'paymentIdentifies',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '49563',
                      code: 'sceneDesc',
                      name: '场景说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['sceneDesc'],
                      _idpath: ['49563'],
                    },
                    {
                      attrId: '584233',
                      code: 'groupAccountCode',
                      name: '集团账户编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupAccountCode'],
                      _idpath: ['584233'],
                    },
                    {
                      attrId: '850937',
                      code: 'payBankAccount',
                      name: '付费银行账户',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['payBankAccount'],
                      _idpath: ['850937'],
                    },
                    {
                      attrId: '383236',
                      code: 'isEstablishedBindRelation',
                      name: '是否已建立绑定关系',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['isEstablishedBindRelation'],
                      _idpath: ['383236'],
                    },
                    {
                      attrId: '2470496',
                      code: 'bindRelationSource',
                      name: '绑定关系来源',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bindRelationSource'],
                      _idpath: ['2470496'],
                    },
                    {
                      attrId: '529911',
                      code: 'acceptNo',
                      name: '受理流水号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['acceptNo'],
                      _idpath: ['529911'],
                    },
                    {
                      attrId: '9254276',
                      code: 'createDate',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['createDate'],
                      _idpath: ['9254276'],
                    },
                    {
                      attrId: '278444',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['createStaff'],
                      _idpath: ['278444'],
                    },
                    {
                      attrId: '7968324',
                      code: 'validityDate',
                      name: '付费有效期字段',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['validityDate'],
                      _idpath: ['7968324'],
                    },
                    {
                      attrId: '2531253',
                      code: 'instCode',
                      name: '序号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['instCode'],
                      _idpath: ['2531253'],
                    },
                    {
                      attrId: '320705',
                      code: 'sceneCode',
                      name: '缴费场景',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['sceneCode'],
                      _idpath: ['320705'],
                    },
                    {
                      attrId: '179487',
                      code: 'validityStartDate',
                      name: '付费有效期生效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['validityStartDate'],
                      _idpath: ['179487'],
                    },
                    {
                      attrId: '263707',
                      code: 'validityEndDate',
                      name: '付费有效期失效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['validityEndDate'],
                      _idpath: ['263707'],
                    },
                  ],
                  newData: '$data.sceneSubmit.paymentIdentifies$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 20,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '76333114',
                    options: { context: '$data_859603$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166745853691269540,
                elseIfs: [],
                line_number: 21,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166745857131919600,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '201327',
                    },
                    line_number: 22,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDisable',
            dataId: 166436762834754240,
            options: {
              compId: 'Form_412511',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Form',
              id: '538402',
              disabled: 'true',
            },
            line_number: 23,
          },
        ],
      },
    ];
    eventDataifelse84.params = [] || [];
    CMDGenerator(eventDataifelse84, {}, 'ifelse', {
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'转账单认领及缴费（固化流程）'}
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
          ref={(r: any) => refs.setComponentRef(r, 'Divider_719552')}
          {...injectData}
        />
        <View
          className="View_View_6806553"
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
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553')}
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
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_004602')}
            {...injectData}
          >
            <View
              className="View_View_339406"
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
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406')}
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
                  refs.setComponentRef(r, 'Form_4311097_9385662_1929847_738917')
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'转账单认领及缴费（固化流程）'}
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
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_57326296_002468',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_0477386"
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_0477386')}
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
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_0235518_772568',
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
            const eventDatasetDataSource49: any = [
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
                      code: 'flowType',
                      name: '流程类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'flowType',
                      },
                    },
                    {
                      attrId: '359926',
                      code: 'workOrderNbr',
                      name: '已审批认领需求工单号',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'workOrderNbr',
                      },
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
                      value: {
                        type: ['form', 'Form_412511', 'getFieldsValue'],
                        code: 'approvaItemDesc',
                      },
                    },
                    {
                      attrId: '2715976',
                      code: 'topUpAmount',
                      name: '充值金额',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource49.params = [] || [];
            CMDGenerator(eventDatasetDataSource49, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_412511')}
          {...injectData}
        >
          <Input
            name={'流程类型'}
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
            fieldName={'flowType'}
            value={data?.factorForm?.flowType}
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
              id: 'Input_flowType_257926',
              uid: 'Input_flowType_257926',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_flowType_257926')}
            {...injectData}
          />
          <Input
            name={'已审批工单号'}
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
            fieldName={'workOrderNbr'}
            value={data?.factorForm?.workOrderNbr}
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
              id: 'Input_workOrderNbr_177299',
              uid: 'Input_workOrderNbr_177299',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_workOrderNbr_177299')
            }
            {...injectData}
          />
          <TextArea
            name={'审批事项说明'}
            selfSpan={24}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            fieldName={'approvaItemDesc'}
            value={data?.factorForm?.approvaItemDesc}
            formItemIndex={2}
            $$componentItem={{
              id: 'Input_approvaItemDesc_867514',
              uid: 'Input_approvaItemDesc_867514',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_approvaItemDesc_867514')
            }
            {...injectData}
          />
        </Form>
        <View
          className="View_View_4949093"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093')}
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
              {
                id: '2698535',
                title: '预览',
                iconPos: 'left',
                icon: {
                  type: 'eye',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                },
                rule: '!(data.pageData.supportedSuffix.test(row.fileName))',
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
              const eventDatacustomActionCode383: any = [
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
              eventDatacustomActionCode383.params =
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
                eventDatacustomActionCode383,
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
              const eventDatadownloadByFileId16: any = [
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
              eventDatadownloadByFileId16.params =
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
                eventDatadownloadByFileId16,
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
            onClickBtn2={(rowId: any, row: any, index: any) => {
              const eventDatapreviewFile10: any = [
                {
                  type: 'previewFile',
                  dataId: 170191918891620480,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '189226',
                    pageJsonId: '0521965',
                    fileId: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatapreviewFile10.params =
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
                eventDatapreviewFile10,
                { rowId, row, index },
                'previewFile',
                {
                  id: 'previewFile',
                  name: 'previewFile',
                  type: 'previewFile',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_5369494')}
            {...injectData}
          />
        </View>
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_066705',
            uid: 'Row_066705',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Row_066705')}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 账户关系信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_335109',
              uid: 'Text_335109',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              fontSize: 15,
              lineHeight: '24px',
              color: '#1c242e',
              backgroundColor: 'rgba(255, 255, 255,0)',
              fontWeight: 700,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_335109')}
            {...injectData}
          />
        </Row>
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
              key: 'seq',
              dataIndex: 'instCode',
              className: '',
              id: '628444',
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
              title: '缴费场景',
              key: 'sceneCode',
              dataIndex: 'sceneCode',
              className: 'divider',
              id: '3070196',
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
              title: '场景说明',
              key: 'sceneDesc',
              dataIndex: 'sceneDesc',
              className: 'divider',
              id: '1111965',
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
              title: '集团账户编码',
              key: 'groupAccountCode',
              dataIndex: 'groupAccountCode',
              className: 'divider',
              id: '833347',
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
              title: '付费银行账户',
              key: 'payBankAccount',
              dataIndex: 'payBankAccount',
              className: 'divider',
              id: '4860255',
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
              title: '是否已建立绑定关系',
              key: 'isEstablishedBindRelation',
              dataIndex: 'isEstablishedBindRelation',
              className: 'divider',
              id: '887891',
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
              title: '绑定关系来源',
              key: 'bindRelationSource',
              dataIndex: 'bindRelationSource',
              className: 'divider',
              id: '8283827',
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
              title: '受理流水号',
              key: 'acceptNo',
              dataIndex: 'acceptNo',
              className: 'divider',
              id: '5733556',
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
              key: 'createDate',
              dataIndex: 'createDate',
              className: 'divider',
              id: '184991',
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
              id: '461006',
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
              title: '付费有效期生效时间',
              key: 'validityDate',
              dataIndex: 'validityStartDate',
              className: 'divider',
              id: '749301',
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
              id: '456496',
              title: '付费有效期失效时间',
              dataIndex: 'validityEndDate',
              key: '456496',
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
          dataSource={data?.paymentIdentifies}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.paymentIdentifies'}
          $$componentItem={{
            id: 'Table_76657',
            uid: 'Table_76657',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Table_76657')}
          {...injectData}
        />
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134_078966_035446',
            uid: 'Row_2802134_078966_035446',
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
          ref={(r: any) => refs.setComponentRef(r, 'Row_2802134_078966_035446')}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 银行到账信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514_235314_557867',
              uid: 'Text_467514_235314_557867',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Text_467514_235314_557867')
            }
            {...injectData}
          />
        </Row>
        <GridView
          name={'银行到账信息(bankAccountList)'}
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
          fieldName={'data.bankAccountList'}
          value={data?.bankAccountList}
          gridData={data?.bankAccountList}
          $$componentItem={{
            id: 'GridView_45004',
            uid: 'GridView_45004',
            type: 'GridView',
            ...componentItem,
          }}
          style={{ minHeight: 40 }}
          ref={(r: any) => refs.setComponentRef(r, 'GridView_45004')}
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
                      <BusiComp371631
                        pageId={pageId}
                        busiCompId={'887951573912219648'}
                        name={'银行到账信息'}
                        busiCompStates={{ bankAccount: item }}
                        style={{ margin: '0 0 12px 0' }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'BOFramer_299744')
                        }
                        {...injectData}
                      />
                    </>
                  );
                },
              },
            };
          }}
        />
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134_078966',
            uid: 'Row_2802134_078966',
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
          ref={(r: any) => refs.setComponentRef(r, 'Row_2802134_078966')}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 业务办理信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514_235314',
              uid: 'Text_467514_235314',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_467514_235314')}
            {...injectData}
          />
        </Row>
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
              type: 'orderCol',
              title: '序号',
              dataIndex: '-',
              id: '9870513',
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
              title: '业务名称',
              key: 'busiName',
              dataIndex: 'busiName',
              id: '662612',
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
              title: '集团编码',
              key: 'custCode',
              dataIndex: 'custCode',
              id: '338378',
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
              title: '集团名称',
              key: 'custName',
              dataIndex: 'custName',
              id: '87407',
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
              id: '5965484',
              title: '集团分账户编码',
              dataIndex: 'subAcctCode',
              key: '5965484',
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
              title: '集团分账户名称',
              key: 'subAcctName',
              dataIndex: 'subAcctName',
              id: '269246',
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
              title: '金额（元）',
              key: 'amount',
              dataIndex: 'amount',
              id: '442923',
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
              title: '数量',
              key: 'quantity',
              dataIndex: 'quantity',
              id: '6704335',
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
              title: '保证金类型',
              key: 'depositType',
              dataIndex: 'depositType',
              id: '104517',
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
              title: '保证金说明',
              key: 'depositExplain',
              dataIndex: 'depositExplain',
              id: '078703',
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
              title: '充值账号、密码接收号码',
              key: 'serviceNumber',
              dataIndex: 'serviceNumber',
              id: '3795298',
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
              title: '业务名称(描述)',
              key: 'busiDesc',
              dataIndex: 'busiDesc',
              id: '398251',
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
              title: '合计金额（元）',
              key: 'totalAmount',
              dataIndex: 'totalAmount',
              id: '333444',
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
              title: '风险提示',
              key: 'riskKint',
              dataIndex: 'riskKint',
              id: '949131',
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
          dataSource={data?.acceptBusiContextList}
          tableColorFormat={[
            {
              formStyle: 2,
              field: 'riskKint',
              foreColor: 'rgba(252, 2, 2, 1)',
              backColor: null,
              conditions: [],
            },
          ]}
          colorFormatInfo={[
            {
              formStyle: 2,
              field: 'riskKint',
              foreColor: 'rgba(252, 2, 2, 1)',
              backColor: null,
              conditions: [],
            },
          ]}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.acceptBusiContextList'}
          $$componentItem={{
            id: 'Table_088834',
            uid: 'Table_088834',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Table_088834')}
          {...injectData}
        />
        <Row
          name={'行容器'}
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
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ 'line-height': '32ox' }}
          ref={(r: any) => refs.setComponentRef(r, 'Row_9301746_9484946')}
          {...injectData}
        >
          <View
            className="View_View_58611_6287033"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611_6287033',
              uid: 'View_58611_6287033',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_58611_6287033')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'银企实收金额(元)B：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374_550461',
                uid: 'Text_9945374_550461',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#fc021f' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_9945374_550461')}
              {...injectData}
            />
            <Text
              name={'  银企实收金额'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451_168378',
                uid: 'Text_2451_168378',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(252, 2, 31, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_2451_168378')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_58611"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611',
              uid: 'View_58611',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_58611')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'认领需求金额（元）A：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374',
                uid: 'Text_9945374',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(252, 2, 31, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_9945374')}
              {...injectData}
            />
            <Text
              name={'需求金额'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451',
                uid: 'Text_2451',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(252, 2, 31, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_2451')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_58611_717376"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611_717376',
              uid: 'View_58611_717376',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_58611_717376')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'银企实收金额-认领需求金额（元）B-A：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374_8459843',
                uid: 'Text_9945374_8459843',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(252, 2, 31, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_9945374_8459843')}
              {...injectData}
            />
            <Text
              name={'银企实收金额-认领需求金额'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451_4726555',
                uid: 'Text_2451_4726555',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(252, 2, 31, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_2451_4726555')}
              {...injectData}
            />
          </View>
        </Row>
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134',
            uid: 'Row_2802134',
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
          ref={(r: any) => refs.setComponentRef(r, 'Row_2802134')}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 已开票缴费信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514',
              uid: 'Text_467514',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_467514')}
            {...injectData}
          />
        </Row>
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
              type: 'orderCol',
              title: '序号',
              dataIndex: '-',
              id: '223895',
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
              title: '购方名称',
              key: 'purchase',
              dataIndex: 'purchase',
              className: 'divider',
              id: '660895',
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
              title: '开票时间',
              key: 'invoiceDate',
              dataIndex: 'invoiceDate',
              className: 'divider',
              id: '3088331',
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
              title: '发票类型',
              key: 'invoiceType',
              dataIndex: 'invoiceType',
              className: 'divider',
              id: '6840867',
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
              title: '发票编码',
              key: 'invoiceCode',
              dataIndex: 'invoiceCode',
              className: 'divider',
              id: '555017',
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
              title: '发票号码',
              key: 'invoiceNumber',
              dataIndex: 'invoiceNumber',
              className: 'divider',
              id: '404199',
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
              title: '发票金额（元）',
              key: 'invoiceAmount',
              dataIndex: 'invoiceAmount',
              className: 'divider',
              id: '305975',
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
              title: '开票员',
              key: 'invoiceClerk',
              dataIndex: 'invoiceClerk',
              className: 'divider',
              id: '325587',
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
              title: '已回款总金额（元）',
              key: 'invoicedAmount',
              dataIndex: 'invoicedAmount',
              className: 'divider',
              id: '857406',
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
              title: '未回款总金额（元）',
              key: 'amountOutstanding',
              dataIndex: 'amountOutstanding',
              className: 'divider',
              id: '6184032',
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
              title: '是否关联集团开票',
              key: 'invoiceIsRelGroup',
              dataIndex: 'invoiceIsRelGroup',
              id: '3079357',
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
              title: '关联集团编码',
              key: 'groupCodeRel',
              dataIndex: 'groupCodeRel',
              id: '941893',
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
              title: '关联集团账户',
              key: 'groupAccountRel',
              dataIndex: 'groupAccountRel',
              id: '321025',
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
              title: '关联未回款金额（元）',
              key: 'returnAmountRel',
              dataIndex: 'returnAmountRel',
              id: '5157498',
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
              title: '本次回款金额（元）',
              key: 'redAccountAmount',
              dataIndex: 'redAccountAmount',
              className: 'divider',
              id: '205041',
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
          dataSource={data?.invoiceContextList}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.invoiceContextList'}
          $$componentItem={{
            id: 'Table_9211005',
            uid: 'Table_9211005',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Table_9211005')}
          {...injectData}
        />
        <Row
          name={'行容器'}
          colSpan={8}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_9301746',
            uid: 'Row_9301746',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ 'line-height': '32ox' }}
          ref={(r: any) => refs.setComponentRef(r, 'Row_9301746')}
          {...injectData}
        >
          <View
            className="View_View_58611_99175"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_58611_99175',
              uid: 'View_58611_99175',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_58611_99175')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'本次合计平账金额（元）A：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_9945374_739862',
                uid: 'Text_9945374_739862',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_9945374_739862')}
              {...injectData}
            />
            <Text
              name={'本次合计平账金额（元）A'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2451_3083706',
                uid: 'Text_2451_3083706',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_2451_3083706')}
              {...injectData}
            />
          </View>
        </Row>
        <Row
          name={'行容器'}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_2802134_5819016',
            uid: 'Row_2802134_5819016',
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
          ref={(r: any) => refs.setComponentRef(r, 'Row_2802134_5819016')}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 资金变动提醒人员信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_467514_503441',
              uid: 'Text_467514_503441',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_467514_503441')}
            {...injectData}
          />
        </Row>
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
              type: 'orderCol',
              title: '序号',
              dataIndex: '-',
              id: '2394514',
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
              title: '转账方银行',
              key: 'paymentBankName',
              dataIndex: 'paymentBankName',
              id: '377841',
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
              title: '转账方户名',
              key: 'paymentAcctName',
              dataIndex: 'paymentAcctName',
              id: '212419',
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
              title: '转账方账号',
              key: 'paymentAcctCode',
              dataIndex: 'paymentAcctCode',
              id: '520713',
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
              title: '资金变动提醒人',
              key: 'reminder',
              dataIndex: 'reminder',
              id: '334676',
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
              title: '联系电话',
              key: 'contactPhone',
              dataIndex: 'contactPhone',
              id: '5854034',
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
              title: '提醒方',
              key: 'remindObject',
              dataIndex: 'remindObject',
              id: '522781',
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
          dataSource={data?.reminder}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.reminder'}
          $$componentItem={{
            id: 'Table_9211005_1611749',
            uid: 'Table_9211005_1611749',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Table_9211005_1611749')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(AwaDAwdaw2323$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
