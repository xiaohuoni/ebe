// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Condition,
  Description,
  Divider,
  Form,
  GridView,
  HorizontalView,
  Input,
  Row,
  Table,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp371631 from '@/components/BusiComp371631';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsJc_0008_0001$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest101: any = [
      {
        type: 'apiRequest',
        dataId: 170191775908980160,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '130323',
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
            dataId: 170191775908940380,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '093922',
              pageJsonId: '0521965',
              value: [
                '查询SUPPORTED_PREVIEW_ATTACHMENT结果：',
                '$reply_130323?.resultData$',
              ],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 170191775908951700,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '561549',
              pageJsonId: '0521965',
              code: 'function main(data,state,success,fail){var _reply_;var list=((_reply_=reply_130323)===null||_reply_===void 0?void 0:_reply_.resultData)||[];var str="\\\\.(allSupported)$";if(list&&list.length>0){str=list.map(function(item){return item.attrValue}).join("|");console.log("str = ",str);str="\\\\.("+str+")$"}var reg=new RegExp(str,"i");success(reg)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'console',
                dataId: 170191775908946340,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '8196227',
                  pageJsonId: '0521965',
                  value: ['支持的文件预览格式：', '$data_561549$'],
                },
                line_number: 4,
              },
              {
                type: 'setDataSource',
                dataId: 170191775908964130,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '00699475',
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
                      value: { type: ['context', '$data_561549$'], code: '' },
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
    eventDataapiRequest101.params = [] || [];
    CMDGenerator(eventDataapiRequest101, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse71: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){if(attrList[i].attrValueDesc!=undefined&&""!=attrList[i].attrValueDesc){factorForm[attrList[i].attrCode]=attrList[i].attrValueDesc}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
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
                      showInput: true,
                      _codePath: ['flowType'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '359926',
                      code: 'workOrderNbr',
                      name: '已审批认领需求工单号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['workOrderNbr'],
                      _idpath: ['359926'],
                    },
                    {
                      attrId: '65306653',
                      code: 'validityDate',
                      name: '审批有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['validityDate'],
                      _idpath: ['65306653'],
                    },
                    {
                      attrId: '183177',
                      code: 'sceneCode',
                      name: '场景名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['sceneCode'],
                      _idpath: ['183177'],
                    },
                    {
                      attrId: '981621',
                      code: 'sceneDesc',
                      name: '场景说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['sceneDesc'],
                      _idpath: ['981621'],
                    },
                    {
                      attrId: '932317',
                      code: 'approvaItemDesc',
                      name: '审批事项说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approvaItemDesc'],
                      _idpath: ['932317'],
                    },
                    {
                      attrId: '2715976',
                      code: 'topUpAmount',
                      name: '充值金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['topUpAmount'],
                      _idpath: ['2715976'],
                    },
                    {
                      attrId: '867184',
                      code: 'extOrder',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['extOrder'],
                      _idpath: ['867184'],
                    },
                    {
                      attrId: '22337',
                      code: 'fundChange',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['fundChange'],
                      _idpath: ['22337'],
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
                dataId: 166436729866871200,
                options: {
                  compId: 'Input_361479_887285_2150708_0235518_772568_273065',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '7001685',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_0235518_772568_273065:
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var acceptBusiContextList=item.customObject.acceptBusi.acceptBusiContextList;var paymentIdentifies=[];if(item&&item.instList){for(var i=0;i<item.instList.length;++i){var paymentIdentifie={};var instNode=item.instList[i];paymentIdentifie.instCode=instNode.instCode;for(var j=0;j<instNode.instAttrList.length;++j){var instAttr=instNode.instAttrList[j];var attrValue=instAttr.attrValue;if("sceneCode"==instAttr.attrCode){attrValue=instAttr.attrValueDesc}if("validityStartDate"==instAttr.attrCode||"validityEndDate"==instAttr.attrCode){var pattern=/(\\d{4})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})/;attrValue=attrValue.replace(pattern,"$1-$2-$3 $4:$5:$6")}paymentIdentifie[instAttr.attrCode]=attrValue}paymentIdentifies.push(paymentIdentifie)}}var buyList=[];var marketList=[];var groupList=[];var iotList=[];var cashList=[];var upList=[];for(var i=0;i<acceptBusiContextList.length;i++){var inst=acceptBusiContextList[i];var busiName=inst.busiName;switch(busiName){case"\\u9884\\u6536\\u6B3E-\\u8D2D\\u4E70\\u5145\\u503C\\u5361":buyList.push(inst);break;case"\\u9884\\u6536\\u6B3E-\\u8425\\u9500\\u6D3B\\u52A8":marketList.push(inst);break;case"\\u96C6\\u56E2\\u4EBA\\u5DE5\\u7F34\\u8D39":groupList.push(inst);break;case"\\u8D2D\\u4E70\\u5145\\u503C\\u5361":buyList.push(inst);break;case"\\u4FDD\\u8BC1\\u91D1":cashList.push(inst);break;case"\\u8425\\u9500\\u6D3B\\u52A8":marketList.push(inst);break;case"\\u4EE3\\u5BA2\\u5145\\u503C":upList.push(inst);break;case"\\u7269\\u8054\\u7F51\\u7F34\\u8D39":iotList.push(inst);break;default:break;}}data.dataList.buyList=buyList;data.dataList.marketList=marketList;data.dataList.groupList=groupList;data.dataList.iotList=iotList;data.dataList.cashList=cashList;data.dataList.upList=upList;data.sceneSubmit=item;data.sceneSubmit.paymentIdentifies=paymentIdentifies;data.applyInfo=data.sceneSubmit.paymentIdentifies;success({fileInfo:item.fileInfo,buyList:buyList,marketList:marketList,groupList:groupList,iotList:iotList,cashList:cashList,upList:upList})};',
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
                  newData: '$data_859603.fileInfo$',
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
                callback1: [
                  {
                    type: 'reloadTableData',
                    dataId: 170623381903017470,
                    options: {
                      compId: 'Table_088834',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '363295024',
                      data: '$data.dataList.buyList$',
                    },
                    line_number: 17,
                    callback1: [],
                  },
                  {
                    type: 'reloadTableData',
                    dataId: 170623384982995550,
                    options: {
                      compId: 'Table_902235',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '240388',
                      data: '$data.dataList.marketList$',
                    },
                    line_number: 18,
                    callback1: [],
                  },
                  {
                    type: 'reloadTableData',
                    dataId: 170623386663896030,
                    options: {
                      compId: 'Table_4909574',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '943762',
                      data: '$data.dataList.groupList$',
                    },
                    line_number: 19,
                    callback1: [],
                  },
                  {
                    type: 'reloadTableData',
                    dataId: 170623387731009120,
                    options: {
                      compId: 'Table_900354',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '0771649',
                      data: '$data.dataList.iotList$',
                    },
                    line_number: 20,
                    callback1: [],
                  },
                  {
                    type: 'reloadTableData',
                    dataId: 170623388743153200,
                    options: {
                      compId: 'Table_290076',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '062939',
                      data: '$data.dataList.cashList$',
                    },
                    line_number: 21,
                    callback1: [],
                  },
                  {
                    type: 'reloadTableData',
                    dataId: 170623390514757660,
                    options: {
                      compId: 'Table_943125',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '846457',
                      data: '$data.dataList.upList$',
                    },
                    line_number: 22,
                    callback1: [],
                  },
                  {
                    type: 'console',
                    dataId: 170623415072333700,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '06754',
                      pageJsonId: '537892',
                      value: ['======DATA=====', '$data$'],
                    },
                    line_number: 23,
                  },
                ],
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
                      attrId: '519119',
                      code: 'invoiceIsRelGroup',
                      name: '是否关联集团开票',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['invoiceIsRelGroup'],
                      _idpath: ['519119'],
                    },
                    {
                      attrId: '891078',
                      code: 'groupAccountRel',
                      name: '关联集团账户',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupAccountRel'],
                      _idpath: ['891078'],
                    },
                    {
                      attrId: '2782249',
                      code: 'groupCodeRel',
                      name: '关联集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupCodeRel'],
                      _idpath: ['2782249'],
                    },
                    {
                      attrId: '28384926',
                      code: 'returnAmountRel',
                      name: '关联未回款金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['returnAmountRel'],
                      _idpath: ['28384926'],
                    },
                    {
                      attrId: '958086',
                      code: 'isWhitelist',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['isWhitelist'],
                      _idpath: ['958086'],
                    },
                    {
                      attrId: '086487',
                      code: 'isPayment',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['isPayment'],
                      _idpath: ['086487'],
                    },
                  ],
                  newData:
                    '$data.sceneSubmit.customObject?.invoice?.invoiceContextList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 24,
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
                      showInput: false,
                      _codePath: ['contactPhone'],
                      _idpath: ['9646364'],
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
                      showInput: false,
                      _codePath: ['paymentAcctCode'],
                      _idpath: ['832191'],
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
                      showInput: false,
                      _codePath: ['paymentAcctName'],
                      _idpath: ['210465'],
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
                      showInput: false,
                      _codePath: ['paymentBankName'],
                      _idpath: ['528637'],
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
                      showInput: false,
                      _codePath: ['remindObject'],
                      _idpath: ['526286'],
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
                      showInput: false,
                      _codePath: ['reminder'],
                      _idpath: ['784928'],
                    },
                    {
                      attrId: '173379',
                      code: 'optType',
                      name: '操作标识',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['optType'],
                      _idpath: ['173379'],
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data.sceneSubmit.customObject.reminder$',
                },
                line_number: 25,
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
                line_number: 26,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 169330884204663040,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '326126',
                  pageJsonId: '537892',
                  dataSourceId: 169330862045695000,
                  dataSourceName: 'paymentIdentifies',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '7571355',
                      code: 'sceneCode',
                      name: '场景编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['sceneCode'],
                      _idpath: ['7571355'],
                    },
                    {
                      attrId: '6897383',
                      code: 'sceneDesc',
                      name: '场景说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['sceneDesc'],
                      _idpath: ['6897383'],
                    },
                    {
                      attrId: '116175',
                      code: 'groupAccountCode',
                      name: '集团账户编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupAccountCode'],
                      _idpath: ['116175'],
                    },
                    {
                      attrId: '787053',
                      code: 'payBankAccount',
                      name: '付费银行账户',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['payBankAccount'],
                      _idpath: ['787053'],
                    },
                    {
                      attrId: '8889225',
                      code: 'isEstablishedBindRelation',
                      name: '是否已建立绑定关系',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['isEstablishedBindRelation'],
                      _idpath: ['8889225'],
                    },
                    {
                      attrId: '288721',
                      code: 'bindRelationSource',
                      name: '绑定关系来源',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bindRelationSource'],
                      _idpath: ['288721'],
                    },
                    {
                      attrId: '292465',
                      code: 'acceptNo',
                      name: '受理流水号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['acceptNo'],
                      _idpath: ['292465'],
                    },
                    {
                      attrId: '681405',
                      code: 'createDate',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['createDate'],
                      _idpath: ['681405'],
                    },
                    {
                      attrId: '274397',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['createStaff'],
                      _idpath: ['274397'],
                    },
                    {
                      attrId: '297235',
                      code: 'validityDate',
                      name: '付费有效期字段',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['validityDate'],
                      _idpath: ['297235'],
                    },
                    {
                      attrId: '85264835',
                      code: 'instCode',
                      name: '序号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['instCode'],
                      _idpath: ['85264835'],
                    },
                    {
                      attrId: '1387877',
                      code: 'validityStartDate',
                      name: '付费有效期生效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['validityStartDate'],
                      _idpath: ['1387877'],
                    },
                    {
                      attrId: '5942374',
                      code: 'validityEndDate',
                      name: '付费有效期失效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['validityEndDate'],
                      _idpath: ['5942374'],
                    },
                  ],
                  newData: '$data.sceneSubmit.paymentIdentifies$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 27,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 169416194470927500,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '704838',
                  pageJsonId: '537892',
                  value: [
                    '账户关系数据',
                    '$data.sceneSubmit$',
                    '$data.bankAccountList$',
                  ],
                },
                line_number: 28,
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '512113',
                    options: { context: '$data_859603$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166745822672869400,
                elseIfs: [],
                line_number: 29,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166745828126503040,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '8532682',
                    },
                    line_number: 30,
                  },
                ],
              },
              {
                type: 'setCompContentValue',
                dataId: 170649701163572770,
                options: {
                  compId: 'Text_2328527',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '231373',
                  value:
                    '$data.sceneSubmit.customObject.acceptBusi.handleMethod$',
                },
                line_number: 31,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 170649947636261860,
                options: {
                  compId: 'Text_605866',
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'Text',
                  id: '125578',
                  value: '$data.factorForm.fundChange$',
                },
                line_number: 32,
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
            line_number: 33,
          },
        ],
      },
    ];
    eventDataifelse71.params = [] || [];
    CMDGenerator(eventDataifelse71, {}, 'ifelse', {
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
          dividerText={'转账单认领（固化流程）'}
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
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 12px 0px',
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
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
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
                  id: 'Form_4311097_9385662_1929847_738917_68642',
                  uid: 'Form_4311097_9385662_1929847_738917_68642',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_1929847_738917_68642'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'转账单认领（固化流程）'}
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
                    id: 'Checkbox_882584_5289015_934499_57326296_002468_16388665',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468_16388665',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_57326296_002468_16388665'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_949332',
                    uid: 'View_949332',
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
                  ref={(r: any) => (refs['View_949332'] = r)}
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
                    id: 'Input_361479_887285_2150708_0235518_772568_273065',
                    uid: 'Input_361479_887285_2150708_0235518_772568_273065',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_361479_887285_2150708_0235518_772568_273065'] =
                      r)
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
            id: 'Form_412511_107682',
            uid: 'Form_412511_107682',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource38: any = [
              {
                type: 'setDataSource',
                dataId: 166633960707292060,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '997058',
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
                        type: ['form', 'Form_412511_107682', 'getFieldsValue'],
                        code: 'flowType',
                      },
                      showInput: true,
                      _codePath: ['flowType'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '359926',
                      code: 'workOrderNbr',
                      name: '已审批认领需求工单号',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511_107682', 'getFieldsValue'],
                        code: 'workOrderNbr',
                      },
                      showInput: true,
                      _codePath: ['workOrderNbr'],
                      _idpath: ['359926'],
                    },
                    {
                      attrId: '65306653',
                      code: 'validityDate',
                      name: '审批有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['validityDate'],
                      _idpath: ['65306653'],
                    },
                    {
                      attrId: '183177',
                      code: 'sceneCode',
                      name: '场景名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['sceneCode'],
                      _idpath: ['183177'],
                    },
                    {
                      attrId: '981621',
                      code: 'sceneDesc',
                      name: '场景说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['sceneDesc'],
                      _idpath: ['981621'],
                    },
                    {
                      attrId: '932317',
                      code: 'approvaItemDesc',
                      name: '审批事项说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511_107682', 'getFieldsValue'],
                        code: 'approvaItemDesc',
                      },
                      showInput: true,
                      _codePath: ['approvaItemDesc'],
                      _idpath: ['932317'],
                    },
                    {
                      attrId: '2715976',
                      code: 'topUpAmount',
                      name: '充值金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['topUpAmount'],
                      _idpath: ['2715976'],
                    },
                    {
                      attrId: '867184',
                      code: 'extOrder',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['extOrder'],
                      _idpath: ['867184'],
                    },
                    {
                      attrId: '22337',
                      code: 'fundChange',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['fundChange'],
                      _idpath: ['22337'],
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource38.params = [] || [];
            CMDGenerator(eventDatasetDataSource38, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Form_412511_107682'] = r)}
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
              id: 'Input_flowType_5008433',
              uid: 'Input_flowType_5008433',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_flowType_5008433'] = r)}
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
            placeholder={'已审批认领需求工单号'}
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
              id: 'Input_workOrderNbr_146745',
              uid: 'Input_workOrderNbr_146745',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_workOrderNbr_146745'] = r)}
            {...injectData}
          />
          <Input
            name={'外部审批工单号'}
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
            placeholder={'已审批认领需求工单号'}
            fieldName={'extOrder'}
            value={data?.factorForm?.extOrder}
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
              id: 'Input_380435',
              uid: 'Input_380435',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_380435'] = r)}
            {...injectData}
          />
          <TextArea
            name={'审批内容'}
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
            formItemIndex={3}
            $$componentItem={{
              id: 'Input_approvaItemDesc_0698245',
              uid: 'Input_approvaItemDesc_0698245',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_approvaItemDesc_0698245'] = r)}
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
            id: 'Row_26691126',
            uid: 'Row_26691126',
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
          ref={(r: any) => (refs['Row_26691126'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 银行到账信息'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_9164415',
              uid: 'Text_9164415',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ fontSize: 15, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => (refs['Text_9164415'] = r)}
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
                      <BusiComp371631
                        busiCompId={'887951573912219648'}
                        name={'银行到账信息'}
                        busiCompStates={{ bankAccount: item }}
                        style={{ margin: '0 0 12px 0' }}
                        ref={(r: any) => (refs['BOFramer_299744'] = r)}
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
          ref={(r: any) => (refs['Row_2802134_078966'] = r)}
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
            ref={(r: any) => (refs['Text_467514_235314'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_919028',
              uid: 'View_919028',
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
            ref={(r: any) => (refs['View_919028'] = r)}
            {...injectData}
          >
            <Condition
              name={'条件容器'}
              header={'标题'}
              $$componentItem={{
                id: 'Condition_671699',
                uid: 'Condition_671699',
                type: 'Condition',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.dataList?.buyList != null &&
                    data?.dataList?.buyList?.length > 0,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.dataList?.buyList != null &&
                    data?.dataList?.buyList?.length > 0,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.dataList?.buyList != null &&
                    data?.dataList?.buyList?.length > 0,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['Condition_671699'] = r)}
              {...injectData}
            >
              <Divider
                name={'分割线'}
                orientation={'left'}
                type={'horizontal'}
                dashed={false}
                dividerText={'购买充值卡/预收款-购买充值卡'}
                showTitle={true}
                $$componentItem={{
                  id: 'Divider_227786',
                  uid: 'Divider_227786',
                  type: 'Divider',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0 12px 0', height: 'auto' }}
                ref={(r: any) => (refs['Divider_227786'] = r)}
                {...injectData}
              />
              <Table
                name={'购买充值卡'}
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
                    title: '业务类型',
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
                    title: '经办人名称',
                    key: 'subAcctName',
                    dataIndex: 'handlerName',
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
                    title: '经办人名称手机号码',
                    key: 'depositType',
                    dataIndex: 'handlerPhone',
                    id: '7693634',
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
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 2,
                    field: 'riskKint',
                    foreColor: 'rgba(252, 2, 31, 1)',
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
                ref={(r: any) => (refs['Table_088834'] = r)}
                {...injectData}
              />
            </Condition>
            <Condition
              name={'条件容器'}
              header={'标题'}
              $$componentItem={{
                id: 'Condition_236354',
                uid: 'Condition_236354',
                type: 'Condition',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.dataList?.marketList != null &&
                    data?.dataList?.marketList?.length > 0,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.dataList?.marketList != null &&
                    data?.dataList?.marketList?.length > 0,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.dataList?.marketList != null &&
                    data?.dataList?.marketList?.length > 0,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['Condition_236354'] = r)}
              {...injectData}
            >
              <Divider
                name={'分割线'}
                orientation={'left'}
                type={'horizontal'}
                dashed={false}
                dividerText={'营销活动/预收款-营销活动'}
                showTitle={true}
                $$componentItem={{
                  id: 'Divider_333768',
                  uid: 'Divider_333768',
                  type: 'Divider',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0 12px 0', height: 'auto' }}
                ref={(r: any) => (refs['Divider_333768'] = r)}
                {...injectData}
              />
              <Table
                name={'营销活动'}
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
                    title: '业务类型',
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
                    title: '营销案名称',
                    key: 'subAcctName',
                    dataIndex: 'marketName',
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
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 2,
                    field: 'riskKint',
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                rowKey={undefined}
                dataSourceFromDataSourceConfig={'data.acceptBusiContextList'}
                $$componentItem={{
                  id: 'Table_902235',
                  uid: 'Table_902235',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Table_902235'] = r)}
                {...injectData}
              />
            </Condition>
            <Condition
              name={'条件容器'}
              header={'标题'}
              $$componentItem={{
                id: 'Condition_8688958',
                uid: 'Condition_8688958',
                type: 'Condition',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.dataList?.groupList != null &&
                    data?.dataList?.groupList?.length > 0,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.dataList?.groupList != null &&
                    data?.dataList?.groupList?.length > 0,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.dataList?.groupList != null &&
                    data?.dataList?.groupList?.length > 0,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['Condition_8688958'] = r)}
              {...injectData}
            >
              <Divider
                name={'分割线'}
                orientation={'left'}
                type={'horizontal'}
                dashed={false}
                dividerText={'集团缴费(含旧欠及托收现金缴费)'}
                showTitle={true}
                $$componentItem={{
                  id: 'Divider_727703',
                  uid: 'Divider_727703',
                  type: 'Divider',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0 12px 0', height: 'auto' }}
                ref={(r: any) => (refs['Divider_727703'] = r)}
                {...injectData}
              />
              <Table
                name={'集团缴费'}
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
                    title: '业务类型',
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
                    title: '集团分账户编码',
                    key: 'subAcctName',
                    dataIndex: 'subAcctCode',
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
                    title: '账户标识',
                    key: 'depositType',
                    dataIndex: 'accountFlag',
                    id: '7693634',
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
                    key: 'amount',
                    dataIndex: 'subAcctName',
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
                    title: '受理方式',
                    key: 'riskKint',
                    dataIndex: 'handleMethod',
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
                  {
                    type: 'staticCol',
                    id: '059549',
                    title: '是否所管辖集团',
                    dataIndex: 'isChargeGroup',
                    key: '059549',
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
                    id: '18452',
                    title: '客户经理工号',
                    dataIndex: 'managerId',
                    key: '18452',
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
                    id: '3678354',
                    title: '客户经理名称',
                    dataIndex: 'managerName',
                    key: '3678354',
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
                    id: '5039098',
                    title: '客户经理手机号',
                    dataIndex: 'managerPhone',
                    key: '5039098',
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
                    id: '633335',
                    title: '风险提示',
                    dataIndex: 'riskKint',
                    key: '633335',
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
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 2,
                    field: 'riskKint',
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                rowKey={undefined}
                dataSourceFromDataSourceConfig={'data.acceptBusiContextList'}
                $$componentItem={{
                  id: 'Table_4909574',
                  uid: 'Table_4909574',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Table_4909574'] = r)}
                {...injectData}
              />
            </Condition>
            <Condition
              name={'条件容器'}
              header={'标题'}
              $$componentItem={{
                id: 'Condition_985687',
                uid: 'Condition_985687',
                type: 'Condition',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.dataList?.iotList != null &&
                    data?.dataList?.iotList?.length > 0,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.dataList?.iotList != null &&
                    data?.dataList?.iotList?.length > 0,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.dataList?.iotList != null &&
                    data?.dataList?.iotList?.length > 0,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['Condition_985687'] = r)}
              {...injectData}
            >
              <Divider
                name={'分割线'}
                orientation={'left'}
                type={'horizontal'}
                dashed={false}
                dividerText={'物联网缴费'}
                showTitle={true}
                $$componentItem={{
                  id: 'Divider_702503',
                  uid: 'Divider_702503',
                  type: 'Divider',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0 12px 0', height: 'auto' }}
                ref={(r: any) => (refs['Divider_702503'] = r)}
                {...injectData}
              />
              <Table
                name={'物联网缴费'}
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
                    title: '业务类型',
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
                    title: '集团分账户编码',
                    key: 'subAcctName',
                    dataIndex: 'subAcctCode',
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
                    title: '集团分账户名称',
                    key: 'amount',
                    dataIndex: 'subAcctName',
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
                    title: '全网客户编码',
                    key: 'depositType',
                    dataIndex: 'netManagerCode',
                    id: '7693634',
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
                    type: 'staticCol',
                    id: '059549',
                    title: '是否所管辖集团',
                    dataIndex: 'isChargeGroup',
                    key: '059549',
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
                    id: '18452',
                    title: '客户经理工号',
                    dataIndex: 'managerId',
                    key: '18452',
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
                    id: '3678354',
                    title: '客户经理名称',
                    dataIndex: 'managerName',
                    key: '3678354',
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
                    id: '5039098',
                    title: '客户经理手机号',
                    dataIndex: 'managerPhone',
                    key: '5039098',
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
                    id: '633335',
                    title: '风险提示',
                    dataIndex: 'riskKint',
                    key: '633335',
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
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 2,
                    field: 'riskKint',
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                rowKey={undefined}
                dataSourceFromDataSourceConfig={'data.acceptBusiContextList'}
                $$componentItem={{
                  id: 'Table_900354',
                  uid: 'Table_900354',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Table_900354'] = r)}
                {...injectData}
              />
            </Condition>
            <Condition
              name={'条件容器'}
              header={'标题'}
              $$componentItem={{
                id: 'Condition_526522',
                uid: 'Condition_526522',
                type: 'Condition',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.dataList?.cashList != null &&
                    data?.dataList?.cashList?.length > 0,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.dataList?.cashList != null &&
                    data?.dataList?.cashList?.length > 0,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.dataList?.cashList != null &&
                    data?.dataList?.cashList?.length > 0,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['Condition_526522'] = r)}
              {...injectData}
            >
              <Divider
                name={'分割线'}
                orientation={'left'}
                type={'horizontal'}
                dashed={false}
                dividerText={'保证金'}
                showTitle={true}
                $$componentItem={{
                  id: 'Divider_6317116',
                  uid: 'Divider_6317116',
                  type: 'Divider',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0 12px 0', height: 'auto' }}
                ref={(r: any) => (refs['Divider_6317116'] = r)}
                {...injectData}
              />
              <Table
                name={'保证金'}
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
                    title: '业务类型',
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
                    title: '保证金类型',
                    key: 'subAcctName',
                    dataIndex: 'depositType',
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
                    title: '保证金说明',
                    key: 'depositType',
                    dataIndex: 'depositExplain',
                    id: '7693634',
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
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 2,
                    field: 'riskKint',
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                rowKey={undefined}
                dataSourceFromDataSourceConfig={'data.acceptBusiContextList'}
                $$componentItem={{
                  id: 'Table_290076',
                  uid: 'Table_290076',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Table_290076'] = r)}
                {...injectData}
              />
            </Condition>
            <Condition
              name={'条件容器'}
              header={'标题'}
              $$componentItem={{
                id: 'Condition_312308',
                uid: 'Condition_312308',
                type: 'Condition',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.dataList?.upList != null &&
                    data?.dataList?.upList?.length > 0,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.dataList?.upList != null &&
                    data?.dataList?.upList?.length > 0,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.dataList?.upList != null &&
                    data?.dataList?.upList?.length > 0,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['Condition_312308'] = r)}
              {...injectData}
            >
              <Divider
                name={'分割线'}
                orientation={'left'}
                type={'horizontal'}
                dashed={false}
                dividerText={'代客充值'}
                showTitle={true}
                $$componentItem={{
                  id: 'Divider_87821',
                  uid: 'Divider_87821',
                  type: 'Divider',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0 12px 0', height: 'auto' }}
                ref={(r: any) => (refs['Divider_87821'] = r)}
                {...injectData}
              />
              <Table
                name={'代客充值'}
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
                    title: '业务类型',
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
                    title: '集团分账户编码',
                    key: 'subAcctName',
                    dataIndex: 'subAcctCode',
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
                    title: '经办人名称手机号码',
                    key: 'depositType',
                    dataIndex: 'handlerPhone',
                    id: '7693634',
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
                    key: 'amount',
                    dataIndex: 'subAcctName',
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
                    title: '充值账号',
                    key: 'quantity',
                    dataIndex: 'serviceNumber',
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
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 2,
                    field: 'riskKint',
                    foreColor: 'rgba(252, 2, 31, 1)',
                    backColor: null,
                    conditions: [],
                  },
                ]}
                rowKey={undefined}
                dataSourceFromDataSourceConfig={'data.acceptBusiContextList'}
                $$componentItem={{
                  id: 'Table_943125',
                  uid: 'Table_943125',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Table_943125'] = r)}
                {...injectData}
              />
            </Condition>
          </View>
        </Row>
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
          ref={(r: any) => (refs['Row_9301746_9484946'] = r)}
          {...injectData}
        >
          <View
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
            ref={(r: any) => (refs['View_58611_6287033'] = r)}
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
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(252, 2, 31, 1)',
              }}
              ref={(r: any) => (refs['Text_9945374_550461'] = r)}
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
              ref={(r: any) => (refs['Text_2451_168378'] = r)}
              {...injectData}
            />
          </View>
          <View
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
            ref={(r: any) => (refs['View_58611'] = r)}
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
              style={{ fontSize: '14px', lineHeight: '24px', color: '#fc021f' }}
              ref={(r: any) => (refs['Text_9945374'] = r)}
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
              ref={(r: any) => (refs['Text_2451'] = r)}
              {...injectData}
            />
          </View>
          <View
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
            ref={(r: any) => (refs['View_58611_717376'] = r)}
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
              ref={(r: any) => (refs['Text_9945374_8459843'] = r)}
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
              ref={(r: any) => (refs['Text_2451_4726555'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1032745',
              uid: 'View_1032745',
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
            ref={(r: any) => (refs['View_1032745'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'受理方式：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_669756',
                uid: 'Text_669756',
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
              ref={(r: any) => (refs['Text_669756'] = r)}
              {...injectData}
            />
            <Text
              name={'受理方式'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2328527',
                uid: 'Text_2328527',
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
              ref={(r: any) => (refs['Text_2328527'] = r)}
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
          ref={(r: any) => (refs['Row_2802134'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 预开发票平票信息'}
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
            ref={(r: any) => (refs['Text_467514'] = r)}
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
              id: '335524',
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
              id: '77753',
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
              id: '829445',
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
              id: '983526',
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
              id: '481105',
              title: '是否先票后款',
              dataIndex: 'isPayment',
              key: '481105',
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
              id: '361365',
              title: '是否白名单',
              dataIndex: 'isWhitelist',
              key: '361365',
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
          ref={(r: any) => (refs['Table_9211005'] = r)}
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
          ref={(r: any) => (refs['Row_9301746'] = r)}
          {...injectData}
        >
          <View
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
            ref={(r: any) => (refs['View_58611_99175'] = r)}
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
              ref={(r: any) => (refs['Text_9945374_739862'] = r)}
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
              ref={(r: any) => (refs['Text_2451_3083706'] = r)}
              {...injectData}
            />
          </View>
        </Row>
        <Row
          name={'行容器'}
          colSpan={12}
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
          ref={(r: any) => (refs['Row_2802134_5819016'] = r)}
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
            ref={(r: any) => (refs['Text_467514_503441'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_009264',
              uid: 'View_009264',
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
            ref={(r: any) => (refs['View_009264'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'资金变动提醒人员是否变更：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_349893',
                uid: 'Text_349893',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(0, 0, 0, 1)',
              }}
              ref={(r: any) => (refs['Text_349893'] = r)}
              {...injectData}
            />
            <Text
              name={'资金变动提醒人员是否变更'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_605866',
                uid: 'Text_605866',
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
              ref={(r: any) => (refs['Text_605866'] = r)}
              {...injectData}
            />
          </View>
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
              type: 'staticCol',
              id: '67239',
              title: '操作标识',
              dataIndex: 'optType',
              key: '67239',
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
          ref={(r: any) => (refs['Table_9211005_1611749'] = r)}
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
          ref={(r: any) => (refs['Row_2802134_078966_035446'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'● 申请信息'}
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
            ref={(r: any) => (refs['Text_467514_235314_557867'] = r)}
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
              title: '序号',
              key: 'seq',
              dataIndex: 'instCode',
              className: '',
              id: '288461',
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
              id: '153992',
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
              id: '91298',
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
              id: '698903',
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
              id: '876537',
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
              id: '492193',
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
              id: '642148',
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
              id: '038536',
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
              id: '6368144',
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
              id: '77283617',
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
              id: '9509323',
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
              id: '666382',
              dataIndex: 'validityEndDate',
              title: '付费有效期失效时间',
              key: '666382',
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
          dataSource={data?.paymentIdentifies}
          tableColorFormat={[
            {
              formStyle: 2,
              field: 'riskKint',
              foreColor: 'rgba(252, 2, 31, 1)',
              backColor: null,
              conditions: [],
            },
          ]}
          colorFormatInfo={[
            {
              formStyle: 2,
              field: 'riskKint',
              foreColor: 'rgba(252, 2, 31, 1)',
              backColor: null,
              conditions: [],
            },
          ]}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.paymentIdentifies'}
          $$componentItem={{
            id: 'Table_23071',
            uid: 'Table_23071',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          ref={(r: any) => (refs['Table_23071'] = r)}
          {...injectData}
        />
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
          value={data?.paymentIdentifies}
          gridData={data?.paymentIdentifies}
          $$componentItem={{
            id: 'GridView_9617166',
            uid: 'GridView_9617166',
            type: 'GridView',
            ...componentItem,
          }}
          style={{ minHeight: 40 }}
          ref={(r: any) => (refs['GridView_9617166'] = r)}
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
                      <Description
                        name={'描述列表'}
                        columns={[
                          {
                            title: '集团账户编码',
                            key: 'groupAccountCode',
                            dataIndex: 'groupAccountCode',
                            label: '集团账户编码',
                            id: '1343355',
                            customRendering: undefined,
                          },
                          {
                            title: '付费银行账户',
                            key: 'payBankAccount',
                            dataIndex: 'payBankAccount',
                            label: '付费银行账户',
                            id: '116738',
                            type: 'ROW',
                            customRendering: undefined,
                          },
                          {
                            title: '是否已建立绑定关系',
                            key: 'isEstablishedBindRelation',
                            dataIndex: 'isEstablishedBindRelation',
                            label: '是否已建立绑定关系',
                            id: '779698',
                            type: 'ROW',
                            customRendering: undefined,
                          },
                          {
                            title: '场景编码',
                            key: 'sceneCode',
                            dataIndex: 'sceneCode',
                            label: '场景编码',
                            id: '7817846',
                            span: 24,
                            customRendering: undefined,
                          },
                          {
                            title: '业务办理凭证',
                            key: 'certificate',
                            dataIndex: 'certificate',
                            label: '业务办理凭证',
                            id: '7462191',
                            type: 'ROW',
                            span: 24,
                            customRendering: undefined,
                          },
                          {
                            title: '场景说明',
                            key: 'sceneDesc',
                            dataIndex: 'sceneDesc',
                            label: '场景说明',
                            id: '481213',
                            span: 24,
                            customRendering: undefined,
                          },
                          {
                            title: '审批级别',
                            key: 'approveLevel',
                            dataIndex: 'approveLevel',
                            label: '审批级别',
                            id: '4183504',
                            type: 'ROW',
                            span: 24,
                            customRendering: undefined,
                          },
                          {
                            title: '付费有效期字段',
                            key: 'validityDate',
                            dataIndex: 'validityDate',
                            label: '付费有效期',
                            id: '714301',
                            customRendering: undefined,
                          },
                          {
                            title: '付费有效期生效时间',
                            key: 'validityStartDate',
                            dataIndex: 'validityStartDate',
                            label: '付费生效时间',
                            id: '58244',
                            customRendering: undefined,
                          },
                          {
                            title: '付费有效期失效时间',
                            key: 'validityEndDate',
                            dataIndex: 'validityEndDate',
                            label: '付费失效时间',
                            id: '889133',
                            customRendering: undefined,
                          },
                        ]}
                        bordered={true}
                        labelWidth={undefined}
                        colSpan={8}
                        colon={true}
                        labelAlign={'left'}
                        dataSource={data?.applyInfo}
                        descColumns={[
                          {
                            title: '集团账户编码',
                            key: 'groupAccountCode',
                            dataIndex: 'groupAccountCode',
                            label: '集团账户编码',
                            id: '1343355',
                          },
                          {
                            title: '付费银行账户',
                            key: 'payBankAccount',
                            dataIndex: 'payBankAccount',
                            label: '付费银行账户',
                            id: '116738',
                            type: 'ROW',
                          },
                          {
                            title: '是否已建立绑定关系',
                            key: 'isEstablishedBindRelation',
                            dataIndex: 'isEstablishedBindRelation',
                            label: '是否已建立绑定关系',
                            id: '779698',
                            type: 'ROW',
                          },
                          {
                            title: '场景编码',
                            key: 'sceneCode',
                            dataIndex: 'sceneCode',
                            label: '场景编码',
                            id: '7817846',
                            span: 24,
                          },
                          {
                            title: '业务办理凭证',
                            key: 'certificate',
                            dataIndex: 'certificate',
                            label: '业务办理凭证',
                            id: '7462191',
                            type: 'ROW',
                            span: 24,
                          },
                          {
                            title: '场景说明',
                            key: 'sceneDesc',
                            dataIndex: 'sceneDesc',
                            label: '场景说明',
                            id: '481213',
                            span: 24,
                          },
                          {
                            title: '审批级别',
                            key: 'approveLevel',
                            dataIndex: 'approveLevel',
                            label: '审批级别',
                            id: '4183504',
                            type: 'ROW',
                            span: 24,
                          },
                          {
                            title: '付费有效期字段',
                            key: 'validityDate',
                            dataIndex: 'validityDate',
                            label: '付费有效期',
                            id: '714301',
                          },
                          {
                            title: '付费有效期生效时间',
                            key: 'validityStartDate',
                            dataIndex: 'validityStartDate',
                            label: '付费生效时间',
                            id: '58244',
                          },
                          {
                            title: '付费有效期失效时间',
                            key: 'validityEndDate',
                            dataIndex: 'validityEndDate',
                            label: '付费失效时间',
                            id: '889133',
                          },
                        ]}
                        labelSize={'120px'}
                        $$componentItem={{
                          id: 'Description_566961',
                          uid: 'Description_566961',
                          type: 'Description',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) => (refs['Description_566961'] = r)}
                        {...injectData}
                      />
                    </>
                  );
                },
              },
            };
          }}
        />
        <View
          name={'布局容器'}
          formItemIndex={4}
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
              {
                id: '111542',
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
              const eventDatacustomActionCode335: any = [
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
              eventDatacustomActionCode335.params =
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
                eventDatacustomActionCode335,
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
              const eventDatadownloadByFileId10: any = [
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
              eventDatadownloadByFileId10.params =
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
                eventDatadownloadByFileId10,
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
              const eventDatapreviewFile4: any = [
                {
                  type: 'previewFile',
                  dataId: 170191826159631040,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '4846662',
                    pageJsonId: '0521965',
                    fileId: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatapreviewFile4.params =
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
                eventDatapreviewFile4,
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
            ref={(r: any) => (refs['Table_5369494'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0008_0001$$Page, {
  pageId: '1069099557607952384',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
