// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1064466374871572480';
const ClsCp_0019_0005MultiPage$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode230: any = [
      {
        type: 'customActionCode',
        dataId: 170547047528440770,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '236676',
          pageJsonId: '1225915',
          code: 'function main(data,state,success,fail){var _state$customObject;var groupInfoList=(state===null||state===void 0?void 0:(_state$customObject=state.customObject)===null||_state$customObject===void 0?void 0:_state$customObject.multiGroup)||[];for(var i=0;i<groupInfoList.length;i++){var item=groupInfoList[i];var groupInfo=item["groupInfo"]||{};var applyInfo=item["applyInfo"]||{};var associatedGroupArrearageList=item["associatedGroupArrearageList"]||{};var idInfo=associatedGroupArrearageList["idInfo"]||{};Object.assign(item,groupInfo,applyInfo,idInfo)}data.groupInfoList=groupInfoList;success(groupInfoList)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 170547100315873470,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '425296344',
              pageJsonId: '1225915',
              value: ['多集团页面数据：', '$data_236676$'],
            },
            line_number: 2,
          },
          {
            type: 'setDataSource',
            dataId: 170547055307052600,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '398598',
              pageJsonId: '1225915',
              dataSourceId: 170546225534746560,
              dataSourceName: 'groupInfoList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupInfo',
                  children: [
                    {
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      attrId: '372929',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'belongCityText'],
                      _idpath: ['386816', '372929'],
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '924627',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'belongAreaText'],
                      _idpath: ['386816', '924627'],
                    },
                    {
                      code: 'customerCreditRate',
                      name: '客户征信等级',
                      type: 'string',
                      attrId: '6238991',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'customerCreditRate'],
                      _idpath: ['386816', '6238991'],
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '282335',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupName'],
                      _idpath: ['386816', '282335'],
                    },
                    {
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      attrId: '9645075',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupId'],
                      _idpath: ['386816', '9645075'],
                    },
                    {
                      code: 'groupBelongRegion',
                      name: '集团归属区域',
                      type: 'string',
                      attrId: '18833',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'groupBelongRegion'],
                      _idpath: ['386816', '18833'],
                    },
                    {
                      code: 'custManagerName',
                      name: '客户经理姓名',
                      type: 'string',
                      attrId: '430183',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'custManagerName'],
                      _idpath: ['386816', '430183'],
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '048679',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'custManagerPhone'],
                      _idpath: ['386816', '048679'],
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '725121',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'custManagerCreditRate'],
                      _idpath: ['386816', '725121'],
                    },
                    {
                      code: 'earliestOverdueYearMonth',
                      name: '最早欠费年月',
                      type: 'string',
                      attrId: '310726',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'earliestOverdueYearMonth'],
                      _idpath: ['386816', '310726'],
                    },
                    {
                      code: 'totalArrearage',
                      name: '累计欠费（元）',
                      type: 'string',
                      attrId: '258068',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'totalArrearage'],
                      _idpath: ['386816', '258068'],
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '025117',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'maxOverdueMonth'],
                      _idpath: ['386816', '025117'],
                    },
                    {
                      code: 'cumulativeOverdueFee',
                      name: '累计逾期欠费（元）',
                      type: 'string',
                      attrId: '753108',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'cumulativeOverdueFee'],
                      _idpath: ['386816', '753108'],
                    },
                    {
                      code: 'predictPaymentWithinThreeMonnth',
                      name: '预计近3月回款（元）',
                      type: 'string',
                      attrId: '672043',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: [
                        'groupInfo',
                        'predictPaymentWithinThreeMonnth',
                      ],
                      _idpath: ['386816', '672043'],
                    },
                    {
                      code: 'predictPaymentWithinYear',
                      name: '预计年内回款（元）',
                      type: 'string',
                      attrId: '302746',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'predictPaymentWithinYear'],
                      _idpath: ['386816', '302746'],
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求',
                      type: 'string',
                      attrId: '9192889',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'lastCollectionRequireYear'],
                      _idpath: ['386816', '9192889'],
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '598439',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'lastCollectionTimeYear'],
                      _idpath: ['386816', '598439'],
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作',
                      type: 'string',
                      attrId: '22636',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupInfo', 'lastCollectionActionYear'],
                      _idpath: ['386816', '22636'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '386816',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['groupInfo'],
                  _idpath: ['386816'],
                },
                {
                  code: 'associatedGroupArrearageList',
                  children: [
                    {
                      code: 'idInfo',
                      children: [
                        {
                          code: 'idType',
                          name: '证件类型',
                          type: 'string',
                          attrId: '6743938',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'idType',
                          ],
                          _idpath: ['017034', '2645341', '6743938'],
                        },
                        {
                          code: 'idNum',
                          name: '证件号码',
                          type: 'string',
                          attrId: '420878',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'idNum',
                          ],
                          _idpath: ['017034', '2645341', '420878'],
                        },
                        {
                          code: 'enterpriseName',
                          name: '企业名称',
                          type: 'string',
                          attrId: '2488358',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'enterpriseName',
                          ],
                          _idpath: ['017034', '2645341', '2488358'],
                        },
                        {
                          code: 'sameIdCumulativeArrearage',
                          name: '同一证件号累计欠费（元）',
                          type: 'string',
                          attrId: '667513',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'sameIdCumulativeArrearage',
                          ],
                          _idpath: ['017034', '2645341', '667513'],
                        },
                        {
                          code: 'sameIdOverdueArrearage',
                          name: '同一证件号累计逾期欠费（元）',
                          type: 'string',
                          attrId: '174522',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'sameIdOverdueArrearage',
                          ],
                          _idpath: ['017034', '2645341', '174522'],
                        },
                        {
                          code: 'sameIdMaxOverdueMonth',
                          name: '同一证件号最大逾期月数',
                          type: 'string',
                          attrId: '018502',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'sameIdMaxOverdueMonth',
                          ],
                          _idpath: ['017034', '2645341', '018502'],
                        },
                        {
                          code: 'sameIdProvinceArchiveGroupNum',
                          name: '同一证件号省内建档集团数',
                          type: 'string',
                          attrId: '579428',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'sameIdProvinceArchiveGroupNum',
                          ],
                          _idpath: ['017034', '2645341', '579428'],
                        },
                        {
                          code: 'blacklistReason',
                          name: '纳黑原因',
                          type: 'string',
                          attrId: '245382',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: false,
                          _codePath: [
                            'associatedGroupArrearageList',
                            'idInfo',
                            'blacklistReason',
                          ],
                          _idpath: ['017034', '2645341', '245382'],
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '2645341',
                      initialData: { type: 'static' },
                      parentKey: 'associatedGroupArrearageList',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['associatedGroupArrearageList', 'idInfo'],
                      _idpath: ['017034', '2645341'],
                    },
                    {
                      code: 'associatedGroupList',
                      children: [
                        {
                          code: 'groupName',
                          name: '关联集团名称',
                          type: 'string',
                          attrId: '577861',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                          _codePath: [
                            'associatedGroupArrearageList',
                            'associatedGroupList',
                            'groupName',
                          ],
                          _idpath: ['017034', '342735', '577861'],
                        },
                        {
                          code: 'groupId',
                          name: '集团编码',
                          type: 'string',
                          attrId: '569387',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                          _codePath: [
                            'associatedGroupArrearageList',
                            'associatedGroupList',
                            'groupId',
                          ],
                          _idpath: ['017034', '342735', '569387'],
                        },
                        {
                          code: 'earliestOverdueYearMonth',
                          name: '最早欠费年月',
                          type: 'string',
                          attrId: '209385',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                          _codePath: [
                            'associatedGroupArrearageList',
                            'associatedGroupList',
                            'earliestOverdueYearMonth',
                          ],
                          _idpath: ['017034', '342735', '209385'],
                        },
                        {
                          code: 'totalArrearage',
                          name: '累计欠费（元）',
                          type: 'string',
                          attrId: '269983',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                          _codePath: [
                            'associatedGroupArrearageList',
                            'associatedGroupList',
                            'totalArrearage',
                          ],
                          _idpath: ['017034', '342735', '269983'],
                        },
                        {
                          code: 'maxOverdueMonth',
                          name: '最大逾期月数（月）',
                          type: 'string',
                          attrId: '938087',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                          _codePath: [
                            'associatedGroupArrearageList',
                            'associatedGroupList',
                            'maxOverdueMonth',
                          ],
                          _idpath: ['017034', '342735', '938087'],
                        },
                        {
                          code: 'cumulativeOverdueFee',
                          name: '累计逾期欠费（元）',
                          type: 'string',
                          attrId: '464022',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                          _codePath: [
                            'associatedGroupArrearageList',
                            'associatedGroupList',
                            'cumulativeOverdueFee',
                          ],
                          _idpath: ['017034', '342735', '464022'],
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '342735',
                      initialData: { type: 'static' },
                      parentKey: 'associatedGroupArrearageList',
                      parentType: 'object',
                      showInput: false,
                      _codePath: [
                        'associatedGroupArrearageList',
                        'associatedGroupList',
                      ],
                      _idpath: ['017034', '342735'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '017034',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['associatedGroupArrearageList'],
                  _idpath: ['017034'],
                },
                {
                  code: 'applyInfo',
                  children: [
                    {
                      code: 'whitelistType',
                      name: '白名单类型',
                      type: 'string',
                      attrId: '806322',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'whitelistType'],
                      _idpath: ['517412', '806322'],
                    },
                    {
                      code: 'appliedWhiteListNumYear',
                      name: '当年己申请白名单次数（次）',
                      type: 'string',
                      attrId: '2166021',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'appliedWhiteListNumYear'],
                      _idpath: ['517412', '2166021'],
                    },
                    {
                      code: 'appliedWhiteListUpNumYear',
                      name: '当年白名单申请上线次数（次）',
                      type: 'string',
                      attrId: '969624',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'appliedWhiteListUpNumYear'],
                      _idpath: ['517412', '969624'],
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '白名单申请天数',
                      type: 'string',
                      attrId: '231753',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'appliedWhiteListDay'],
                      _idpath: ['517412', '231753'],
                    },
                    {
                      code: 'predictEffectiveTime',
                      name: '预计白名单生效时间',
                      type: 'string',
                      attrId: '924179',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'predictEffectiveTime'],
                      _idpath: ['517412', '924179'],
                    },
                    {
                      code: 'predictDeadTime',
                      name: '预计白名单失效时间',
                      type: 'string',
                      attrId: '997452',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'predictDeadTime'],
                      _idpath: ['517412', '997452'],
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '0371064',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'arrearsReason'],
                      _idpath: ['517412', '0371064'],
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '4119235',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'collectionCondition'],
                      _idpath: ['517412', '4119235'],
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '5867755',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['applyInfo', 'riskAssessment'],
                      _idpath: ['517412', '5867755'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '517412',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  _codePath: ['applyInfo'],
                  _idpath: ['517412'],
                },
                {
                  attrId: '54352',
                  code: 'earliestOverdueYearMonth',
                  name: '最早欠费年月',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['earliestOverdueYearMonth'],
                  _idpath: ['54352'],
                },
                {
                  attrId: '90023',
                  code: 'predictPaymentWithinYear',
                  name: '预计年内回款（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['predictPaymentWithinYear'],
                  _idpath: ['90023'],
                },
                {
                  attrId: '121975',
                  code: 'sameIdCumulativeArrearage',
                  name: '同一证件号累计欠费（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['sameIdCumulativeArrearage'],
                  _idpath: ['121975'],
                },
                {
                  attrId: '266508',
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['groupName'],
                  _idpath: ['266508'],
                },
                {
                  attrId: '562576',
                  code: 'customerCreditRate',
                  name: '客户征信等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['customerCreditRate'],
                  _idpath: ['562576'],
                },
                {
                  attrId: '569526',
                  code: 'belongCityText',
                  name: '归属地市',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['belongCityText'],
                  _idpath: ['569526'],
                },
                {
                  attrId: '576667',
                  code: 'sameIdProvinceArchiveGroupNum',
                  name: '同一证件号省内建档集团数（家）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['sameIdProvinceArchiveGroupNum'],
                  _idpath: ['576667'],
                },
                {
                  attrId: '824087',
                  code: 'totalArrearage',
                  name: '累计欠费（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['totalArrearage'],
                  _idpath: ['824087'],
                },
                {
                  attrId: '837213',
                  code: 'custManagerCreditRate',
                  name: '客户经理征信等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['custManagerCreditRate'],
                  _idpath: ['837213'],
                },
                {
                  attrId: '917465',
                  code: 'whitelistType',
                  name: '白名单类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['whitelistType'],
                  _idpath: ['917465'],
                },
                {
                  attrId: '4253578',
                  code: 'maxOverdueMonth',
                  name: '最大逾期月数 （月）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['maxOverdueMonth'],
                  _idpath: ['4253578'],
                },
                {
                  attrId: '6497082',
                  code: 'cumulativeOverdueFee',
                  name: '累计逾期欠费（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['cumulativeOverdueFee'],
                  _idpath: ['6497082'],
                },
                {
                  attrId: '23131164',
                  code: 'predictPaymentWithinThreeMonnth',
                  name: '预计近3月回款（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['predictPaymentWithinThreeMonnth'],
                  _idpath: ['23131164'],
                },
                {
                  attrId: '0975525',
                  code: 'sameIdOverdueArrearage',
                  name: '同一证件号累计逾期欠费（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['sameIdOverdueArrearage'],
                  _idpath: ['0975525'],
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
    eventDatacustomActionCode230.params = [] || [];
    CMDGenerator(eventDatacustomActionCode230, {}, 'customActionCode', {
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
      className="__CustomClass_1225915__"
    >
      <View
        className="View_View_1225915_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_1225915_1',
          uid: 'View_1225915_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_1225915_1')}
        {...injectData}
      >
        <View
          className="View_View_0811095"
          name={'标题容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_0811095',
            uid: 'View_0811095',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_0811095')}
          {...injectData}
        >
          <View
            className="View_View_451888"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_451888',
              uid: 'View_451888',
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
              flex: 8,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_451888')}
            {...injectData}
          >
            <Text
              name={'集团信息风险提示'}
              content={'友情提醒：信控调整，谁经办谁负责，谁审批谁负责！'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_813961',
                uid: 'Text_813961',
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
                backgroundColor: '#FFFF80',
                letterSpacing: '',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_813961')}
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
              title: '白名单类型',
              key: 'whitelistType',
              dataIndex: 'whitelistType',
              className: '',
              id: '871721',
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
              key: 'groupName',
              dataIndex: 'groupName',
              className: 'divider',
              id: '2664387',
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
              title: '归属地市',
              key: 'belongCityText',
              dataIndex: 'belongCityText',
              className: 'divider',
              id: '5250368',
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
              id: '0910877',
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
              title: '客户征信等级',
              key: 'customerCreditRate',
              dataIndex: 'customerCreditRate',
              className: 'divider',
              id: '2496524',
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
              title: '最早欠费年月',
              key: 'earliestOverdueYearMonth',
              dataIndex: 'earliestOverdueYearMonth',
              className: 'divider',
              id: '544893',
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
              title: '累计欠费（元）',
              key: 'totalArrearage',
              dataIndex: 'totalArrearage',
              className: 'divider',
              id: '43866197',
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
              title: '最大逾期月数 （月）',
              key: 'maxOverdueMonth',
              dataIndex: 'maxOverdueMonth',
              className: 'divider',
              id: '730069',
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
              title: '累计逾期欠费（元）',
              key: 'cumulativeOverdueFee',
              dataIndex: 'cumulativeOverdueFee',
              className: 'divider',
              id: '3153914',
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
              title: '同一证件号省内建档集团数（家）',
              key: 'sameIdProvinceArchiveGroupNum',
              dataIndex: 'sameIdProvinceArchiveGroupNum',
              className: 'divider',
              id: '401901',
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
              title: '同一证件号累计欠费（元）',
              key: 'sameIdCumulativeArrearage',
              dataIndex: 'sameIdCumulativeArrearage',
              className: 'divider',
              id: '0796775',
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
              title: '同一证件号累计逾期欠费（元）',
              key: 'sameIdOverdueArrearage',
              dataIndex: 'sameIdOverdueArrearage',
              className: 'divider',
              id: '75105134',
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
              title: '预计近三月回款金额（元）',
              key: 'predictPaymentWithinThreeMonnth',
              dataIndex: 'predictPaymentWithinThreeMonnth',
              className: 'divider',
              id: '353493',
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
              title: '预计年内回款金额（元）',
              key: 'predictPaymentWithinYear',
              dataIndex: 'predictPaymentWithinYear',
              className: 'divider',
              id: '3152744',
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
          fieldName={'groupInfoList'}
          dataSource={data?.groupInfoList}
          rowActions={[
            {
              title: '详情',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'file-search' },
              type: 'detail',
              id: '252311',
              checked: true,
            },
          ]}
          extend={[]}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.groupInfoList'}
          $$componentItem={{
            id: 'Table_3885125',
            uid: 'Table_3885125',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          onRowDetail={(rowId: any, row: any, index: any) => {
            const eventDatashowCustomModal61: any = [
              {
                type: 'showCustomModal',
                dataId: 170547798133068380,
                options: {
                  compId: 'showCustomModal',
                  compName: 'page',
                  id: '080379',
                  pageJsonId: '1225915',
                  modalname: '/duojituanbaimingdanxinxi4961',
                  pageId: '1064813919203217408',
                  modalPath: '/duojituanbaimingdanxinxi4961',
                  paramsObj: { singleGroup: '$row$' },
                  paramsObjKeyValueMap: { singleGroup: '$row$' },
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatashowCustomModal61.params =
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
              eventDatashowCustomModal61,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_3885125')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0005MultiPage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', customObject: '' },
});
