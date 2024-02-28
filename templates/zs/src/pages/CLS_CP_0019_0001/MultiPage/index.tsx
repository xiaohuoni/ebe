// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1062298928165249024';
const ClsCp_0019_0001MultiPage$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode241: any = [
      {
        type: 'customActionCode',
        dataId: 170488054253042000,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '042557',
          pageJsonId: '360551',
          code: 'function main(data,state,success,fail){var customObject=(state===null||state===void 0?void 0:state.customObject)||{};var multiGroup=(customObject===null||customObject===void 0?void 0:customObject.multiGroup)||[];var showInfoList=[];for(var i=0;i<multiGroup.length;i++){var singleGroup=multiGroup[i];var item=JSON.parse(JSON.stringify(singleGroup));singleGroup["rowId"]=i;var groupInfo=item["groupInfo"]||{};var accountInfoList=item["accountInfoList"]||[];var showInfoItem={};showInfoItem=Object.assign(groupInfo,accountInfoList.length>0?accountInfoList[0]:{});showInfoItem["rowId"]=i;showInfoList.push(showInfoItem)}data.showInfoList=showInfoList;data.multiGroup=multiGroup;success()};',
          actionTitle: '构建展示信息',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170488142758538880,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '319106',
              pageJsonId: '360551',
              dataSourceId: 170487933833437920,
              dataSourceName: 'showInfoList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  attrId: '224266',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['groupName'],
                  _idpath: ['224266'],
                },
                {
                  code: 'groupCreditRate',
                  name: '集团征信等级',
                  type: 'string',
                  attrId: '544459',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['groupCreditRate'],
                  _idpath: ['544459'],
                },
                {
                  code: 'custManagerCreditRate',
                  name: '客户经理征信等级',
                  type: 'string',
                  attrId: '67435043',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['custManagerCreditRate'],
                  _idpath: ['67435043'],
                },
                {
                  code: 'accountNum',
                  name: '账户编号',
                  type: 'string',
                  attrId: '395082',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['accountNum'],
                  _idpath: ['395082'],
                },
                {
                  code: 'accountTitle',
                  name: '账户名称',
                  type: 'string',
                  attrId: '4267096',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['accountTitle'],
                  _idpath: ['4267096'],
                },
                {
                  code: 'isIctSubAccount',
                  name: '是否ICT分账户',
                  type: 'string',
                  attrId: '304574',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['isIctSubAccount'],
                  _idpath: ['304574'],
                },
                {
                  code: 'earliestOverdueTime',
                  name: '最早欠费时间',
                  type: 'string',
                  attrId: '966642',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['earliestOverdueTime'],
                  _idpath: ['966642'],
                },
                {
                  code: 'arrearage',
                  name: '欠费（元）',
                  type: 'string',
                  attrId: '741377',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['arrearage'],
                  _idpath: ['741377'],
                },
                {
                  code: 'overdueMonth',
                  name: '逾期月数（月）',
                  type: 'string',
                  attrId: '377582',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['overdueMonth'],
                  _idpath: ['377582'],
                },
                {
                  code: 'overdueFee',
                  name: '逾期欠费（元）',
                  type: 'string',
                  attrId: '9769528',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['overdueFee'],
                  _idpath: ['9769528'],
                },
                {
                  code: 'systemEvaluateCreditRate',
                  name: '系统评估信用度等级',
                  type: 'string',
                  attrId: '608006',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['systemEvaluateCreditRate'],
                  _idpath: ['608006'],
                },
                {
                  code: 'appointedPayMonth',
                  name: '原约定缴费月数（月）',
                  type: 'string',
                  attrId: '92682',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['appointedPayMonth'],
                  _idpath: ['92682'],
                },
                {
                  code: 'adjustedCreditRate',
                  name: '申请信用度等级',
                  type: 'string',
                  attrId: '693308953',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['adjustedCreditRate'],
                  _idpath: ['693308953'],
                },
                {
                  code: 'adjustCreditRateValidMonth',
                  name: '调整有效月数（月）',
                  type: 'string',
                  attrId: '395655',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['adjustCreditRateValidMonth'],
                  _idpath: ['395655'],
                },
                {
                  code: 'appliedRedListMonthYear',
                  name: '当年已申请红名单月数（月）',
                  type: 'string',
                  attrId: '644626',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['appliedRedListMonthYear'],
                  _idpath: ['644626'],
                },
                {
                  code: 'adjustedAppointedPayMonth',
                  name: '调整后约定缴费月数（月）',
                  type: 'string',
                  attrId: '4086247',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['adjustedAppointedPayMonth'],
                  _idpath: ['4086247'],
                },
                {
                  code: 'isShouldButNotStopped',
                  name: '是否应停未停',
                  type: 'string',
                  attrId: '189603',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['isShouldButNotStopped'],
                  _idpath: ['189603'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 170488143116164540,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '936693',
              pageJsonId: '360551',
              dataSourceId: 170487920429917300,
              dataSourceName: 'multiGroup',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupInfo',
                  children: [
                    {
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      attrId: '576902',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupId'],
                      _idpath: ['395397', '576902'],
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '314655',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupName'],
                      _idpath: ['395397', '314655'],
                    },
                    {
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      attrId: '74411',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupLevelName'],
                      _idpath: ['395397', '74411'],
                    },
                    {
                      code: 'paidNum',
                      name: '付费号码',
                      type: 'string',
                      attrId: '657779',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'paidNum'],
                      _idpath: ['395397', '657779'],
                    },
                    {
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      attrId: '733275',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'belongCityText'],
                      _idpath: ['395397', '733275'],
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '1805876',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'belongAreaText'],
                      _idpath: ['395397', '1805876'],
                    },
                    {
                      code: 'isAgencyGroup',
                      name: '是否代理商集团',
                      type: 'string',
                      attrId: '563155',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'isAgencyGroup'],
                      _idpath: ['395397', '563155'],
                    },
                    {
                      code: 'groupCreditRate',
                      name: '集团征信等级',
                      type: 'string',
                      attrId: '624671',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupCreditRate'],
                      _idpath: ['395397', '624671'],
                    },
                    {
                      code: 'institutionType',
                      name: '机构类型',
                      type: 'string',
                      attrId: '950089',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'institutionType'],
                      _idpath: ['395397', '950089'],
                    },
                    {
                      code: 'industryCategory',
                      name: '行业大类',
                      type: 'string',
                      attrId: '751592',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'industryCategory'],
                      _idpath: ['395397', '751592'],
                    },
                    {
                      code: 'customerType',
                      name: '客户类型',
                      type: 'string',
                      attrId: '09915',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'customerType'],
                      _idpath: ['395397', '09915'],
                    },
                    {
                      code: 'custManager',
                      name: '客户经理',
                      type: 'string',
                      attrId: '31104',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'custManager'],
                      _idpath: ['395397', '31104'],
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '078445',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'custManagerPhone'],
                      _idpath: ['395397', '078445'],
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '544625',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'custManagerCreditRate'],
                      _idpath: ['395397', '544625'],
                    },
                    {
                      code: 'appliedRedListNum',
                      name: '已申请红名单数（个）',
                      type: 'string',
                      attrId: '835273',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'appliedRedListNum'],
                      _idpath: ['395397', '835273'],
                    },
                    {
                      code: 'redControlNum',
                      name: '红名管控上线数（个）',
                      type: 'string',
                      attrId: '41742',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'redControlNum'],
                      _idpath: ['395397', '41742'],
                    },
                    {
                      code: 'appliedRedListNumYear',
                      name: '当年红名单已申请次数（次）',
                      type: 'string',
                      attrId: '630792',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'appliedRedListNumYear'],
                      _idpath: ['395397', '630792'],
                    },
                    {
                      code: 'groupEarliestOverdueTime',
                      name: '集团最早欠费时间',
                      type: 'string',
                      attrId: '963363',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupEarliestOverdueTime'],
                      _idpath: ['395397', '963363'],
                    },
                    {
                      code: 'groupTotalOverdueFee',
                      name: '集团总欠费（元）',
                      type: 'string',
                      attrId: '9916774',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupTotalOverdueFee'],
                      _idpath: ['395397', '9916774'],
                    },
                    {
                      code: 'appliedWhiteListNum',
                      name: '已申请白名单次数（次）',
                      type: 'string',
                      attrId: '14355',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'appliedWhiteListNum'],
                      _idpath: ['395397', '14355'],
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '356716',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'maxOverdueMonth'],
                      _idpath: ['395397', '356716'],
                    },
                    {
                      code: 'groupCumulativeOverdueFee',
                      name: '集团累计逾期（元）',
                      type: 'string',
                      attrId: '846431',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupCumulativeOverdueFee'],
                      _idpath: ['395397', '846431'],
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '已申请白名单天数（天）',
                      type: 'string',
                      attrId: '664493',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'appliedWhiteListDay'],
                      _idpath: ['395397', '664493'],
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求（近一年）',
                      type: 'string',
                      attrId: '9697585',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'lastCollectionRequireYear'],
                      _idpath: ['395397', '9697585'],
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '0148044',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'lastCollectionTimeYear'],
                      _idpath: ['395397', '0148044'],
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作（近一年）',
                      type: 'string',
                      attrId: '7138444',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'lastCollectionActionYear'],
                      _idpath: ['395397', '7138444'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '395397',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['groupInfo'],
                  _idpath: ['395397'],
                },
                {
                  code: 'accountInfoList',
                  children: [
                    {
                      code: 'accountNum',
                      name: '账户编号',
                      type: 'string',
                      attrId: '2209512',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'accountNum'],
                      _idpath: ['772379', '2209512'],
                    },
                    {
                      code: 'accountTitle',
                      name: '账户名称',
                      type: 'string',
                      attrId: '147863',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'accountTitle'],
                      _idpath: ['772379', '147863'],
                    },
                    {
                      code: 'isIctSubAccount',
                      name: '是否ICT分账户',
                      type: 'string',
                      attrId: '189687',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'isIctSubAccount'],
                      _idpath: ['772379', '189687'],
                    },
                    {
                      code: 'earliestOverdueTime',
                      name: '最早欠费时间',
                      type: 'string',
                      attrId: '037202',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'earliestOverdueTime'],
                      _idpath: ['772379', '037202'],
                    },
                    {
                      code: 'arrearage',
                      name: '欠费（元）',
                      type: 'string',
                      attrId: '162528',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'arrearage'],
                      _idpath: ['772379', '162528'],
                    },
                    {
                      code: 'overdueMonth',
                      name: '逾期月数（月）',
                      type: 'string',
                      attrId: '0146757',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'overdueMonth'],
                      _idpath: ['772379', '0146757'],
                    },
                    {
                      code: 'overdueFee',
                      name: '逾期欠费（元）',
                      type: 'string',
                      attrId: '532794',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'overdueFee'],
                      _idpath: ['772379', '532794'],
                    },
                    {
                      code: 'systemEvaluateCreditRate',
                      name: '系统评估信用度等级',
                      type: 'string',
                      attrId: '968119',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'systemEvaluateCreditRate',
                      ],
                      _idpath: ['772379', '968119'],
                    },
                    {
                      code: 'appointedPayMonth',
                      name: '原约定缴费月数（月）',
                      type: 'string',
                      attrId: '7189793',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'appointedPayMonth'],
                      _idpath: ['772379', '7189793'],
                    },
                    {
                      code: 'adjustedCreditRate',
                      name: '调整后信用等级',
                      type: 'string',
                      attrId: '9674984',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'adjustedCreditRate'],
                      _idpath: ['772379', '9674984'],
                    },
                    {
                      code: 'adjustCreditRateValidMonth',
                      name: '调整信用等级有效月数（月）',
                      type: 'string',
                      attrId: '297385',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'adjustCreditRateValidMonth',
                      ],
                      _idpath: ['772379', '297385'],
                    },
                    {
                      code: 'appliedRedListMonthYear',
                      name: '当年已申请红名单月数（月）',
                      type: 'string',
                      attrId: '877947',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'appliedRedListMonthYear'],
                      _idpath: ['772379', '877947'],
                    },
                    {
                      code: 'adjustedAppointedPayMonth',
                      name: '调整后约定缴费月数（月）',
                      type: 'string',
                      attrId: '45531',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'adjustedAppointedPayMonth',
                      ],
                      _idpath: ['772379', '45531'],
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '961755',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'arrearsReason'],
                      _idpath: ['772379', '961755'],
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '494076',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'collectionCondition'],
                      _idpath: ['772379', '494076'],
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '8099677',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'riskAssessment'],
                      _idpath: ['772379', '8099677'],
                    },
                    {
                      code: 'isShouldButNotStopped',
                      name: '是否应停未停',
                      type: 'string',
                      attrId: '454404',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'isShouldButNotStopped'],
                      _idpath: ['772379', '454404'],
                    },
                    {
                      code: 'creditExpiredRemindNum',
                      name: '信用度到期提醒号码',
                      type: 'string',
                      attrId: '3358633',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'creditExpiredRemindNum'],
                      _idpath: ['772379', '3358633'],
                    },
                    {
                      attrId: '902524',
                      code: 'accountApplication',
                      name: '账户用途',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['accountInfoList', 'accountApplication'],
                      _idpath: ['772379', '902524'],
                    },
                  ],
                  name: '',
                  type: 'objectArray',
                  attrId: '772379',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['accountInfoList'],
                  _idpath: ['772379'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode241.params = [] || [];
    CMDGenerator(eventDatacustomActionCode241, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_360551__"
    >
      <View
        className="View_View_360551_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_360551_1',
          uid: 'View_360551_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_360551_1')}
        {...injectData}
      >
        <View
          className="View_View_42937"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_42937',
            uid: 'View_42937',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0px 0px 4px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_42937')}
          {...injectData}
        >
          <View
            className="View_View_688274"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_688274',
              uid: 'View_688274',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flex: 1,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_688274')}
            {...injectData}
          >
            <View
              className="View_View_159945"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
              $$componentItem={{
                id: 'View_159945',
                uid: 'View_159945',
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
                width: '6px',
                height: '22px',
                borderRadius: '10px 10px 10px 10px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_159945')}
              {...injectData}
            />
            <Text
              name={'集团账户信息'}
              content={'集团账户信息'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_173086',
                uid: 'Text_173086',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
                margin: '0px 0px 0px 8px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_173086')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_1765626"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1765626',
              uid: 'View_1765626',
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
              flex: 13,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_1765626')}
            {...injectData}
          >
            <Text
              name={'集团信息风险提示'}
              content={
                '友情提醒：信控调整，谁经办谁负责，谁审批谁负责！\n风险提示：请关注集团评估征信等级，关注调整风险！'
              }
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_750665',
                uid: 'Text_750665',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#DA031C',
                backgroundColor: '#ffff80',
                letterSpacing: '',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_750665')}
              {...injectData}
            />
          </View>
        </View>
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
              title: '集团名称',
              key: 'groupName',
              dataIndex: 'groupName',
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
              title: '集团征信等级',
              key: 'groupCreditRate',
              dataIndex: 'groupCreditRate',
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
              title: '客户经理征信等级',
              key: 'custManagerCreditRate',
              dataIndex: 'custManagerCreditRate',
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
              title: '账户编号',
              key: 'accountNum',
              dataIndex: 'accountNum',
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
              title: '账户名称',
              key: 'accountTitle',
              dataIndex: 'accountTitle',
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
              title: '是否ICT分账户',
              key: 'isIctSubAccount',
              dataIndex: 'isIctSubAccount',
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
              title: '最早欠费时间',
              key: 'earliestOverdueTime',
              dataIndex: 'earliestOverdueTime',
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
              title: '欠费（元）',
              key: 'arrearage',
              dataIndex: 'arrearage',
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
              title: '逾期月数（月）',
              key: 'overdueMonth',
              dataIndex: 'overdueMonth',
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
              title: '逾期欠费（元）',
              key: 'overdueFee',
              dataIndex: 'overdueFee',
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
              title: '系统评估信用度等级',
              key: 'systemEvaluateCreditRate',
              dataIndex: 'systemEvaluateCreditRate',
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
              title: '原约定缴费月数（月）',
              key: 'appointedPayMonth',
              dataIndex: 'appointedPayMonth',
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
              title: '申请信用度等级',
              key: 'adjustedCreditRate',
              dataIndex: 'adjustedCreditRate',
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
              title: '调整有效月数（月）',
              key: 'adjustCreditRateValidMonth',
              dataIndex: 'adjustCreditRateValidMonth',
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
              title: '当年已申请红名单月数（月）',
              key: 'appliedRedListMonthYear',
              dataIndex: 'appliedRedListMonthYear',
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
              title: '调整后约定缴费月数（月）',
              key: 'adjustedAppointedPayMonth',
              dataIndex: 'adjustedAppointedPayMonth',
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
              title: '是否应停未停',
              key: 'isShouldButNotStopped',
              dataIndex: 'isShouldButNotStopped',
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
          dataSource={data?.showInfoList}
          rowActions={[
            {
              title: '详情',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'file-search' },
              type: 'detail',
              id: '777753',
              checked: true,
            },
          ]}
          extend={[]}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.showInfoList'}
          $$componentItem={{
            id: 'Table_5017878',
            uid: 'Table_5017878',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          onRowDetail={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode465: any = [
              {
                type: 'customActionCode',
                dataId: 170488214730193630,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '949495',
                  pageJsonId: '360551',
                  code: 'function main(data,state,success,fail){var multiGroup=data.multiGroup||[];var rowId=row.rowId;var filterGroup=multiGroup.filter(function(item){return item.rowId==rowId});if(filterGroup.length>0){success(filterGroup[0])}else{fail()}};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'showCustomModal',
                    dataId: 170493866614570600,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '812889',
                      pageJsonId: '360551',
                      modalname: '/duojituanzhanghuxinxi6332',
                      pageId: '1062544418106597376',
                      modalPath: '/duojituanzhanghuxinxi6332',
                      paramsObj: { singleGroup: '$data_949495$' },
                      paramsObjKeyValueMap: { singleGroup: '$data_949495$' },
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatacustomActionCode465.params =
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
              eventDatacustomActionCode465,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_5017878')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0001MultiPage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', customObject: '' },
});
