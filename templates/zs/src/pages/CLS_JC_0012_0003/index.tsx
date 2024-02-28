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
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '957487104396066816';
const ClsJc_0012_0003$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_144734: any) => {
    const eventDatacustomActionCode102: any = [
      {
        type: 'customActionCode',
        dataId: 168595620551210140,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '595547',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595620551371940,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '753699',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode102.params =
      [
        {
          title: '事件入参',
          name: 'options_144734',
          value: '$options_144734$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode102,
      { options_144734 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
  }));

  useEffect(() => {
    const eventDataifelse161: any = [
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
        dataId: 167962339531869060,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167962339531856420,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '02972',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;success(item.fileInfo)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167962339531887600,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '586789',
                  pageJsonId: '537892',
                  dataSourceId: 167953604007627170,
                  dataSourceName: 'fileInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '634755',
                      code: 'fileName',
                      name: '附件名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '513464',
                      code: 'filePath',
                      name: '附件文件路径',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '876905',
                      code: 'fileServerType',
                      name: '附件文件服务器类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '740156',
                      code: 'fileSubType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '261705',
                      code: 'fileType',
                      name: '附件分类-大类',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '091394',
                      code: 'fileUrl',
                      name: '附件URL地址',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '057793',
                      code: 'tacheCode',
                      name: '环节编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '353952',
                      code: 'fileCode',
                      name: '文件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '678656',
                      code: 'createTime',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '993821',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '592066',
                      code: 'fileTypeName',
                      name: '附件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_02972$',
                  operateType: 3,
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
          {
            type: 'customActionCode',
            dataId: 170012464266292030,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '189759',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var customObject=item.customObject;var citys=customObject.checkProjectList.flatMap(function(item){return item.quotaConfigInfoList.map(function(info){return info.cityName})});console.log("citys:",citys);var cityList=Array.from(new Set(citys));console.log("\\u8FC7\\u6EE4\\u540E\\u7684cityList:",cityList);success(cityList)};',
              actionTitle: '计算查询地市',
            },
            line_number: 4,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 170012472708436960,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '297556',
                  pageJsonId: '537892',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAreaAdmin',
                  _apiCode: 'qryAreaAdmin',
                  _source: 'rhin',
                  _serviceId: '1042348077190533120',
                  _serviceTitle: '区域管理员列表查询: qryAreaAdmin',
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
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-0',
                          id: 'root.header',
                          dataKey: '297556_root.header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'root.path',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-1',
                          id: 'root.path',
                          dataKey: '297556_root.path',
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
                          dataKey: '297556_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'pageSize',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'root.body.pageSize',
                              compType: 'Input',
                              name: 'pageSize',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.pageSize',
                              dataKey: '297556_root.body.pageSize',
                              value: { type: ['customize'], code: '100' },
                            },
                            {
                              code: 'pageNum',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'root.body.pageNum',
                              compType: 'Input',
                              name: 'pageNum',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.pageNum',
                              dataKey: '297556_root.body.pageNum',
                              value: { type: ['customize'], code: '1' },
                            },
                            {
                              code: 'usrAreaList',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'root.body.usrAreaList.listItem',
                                  compType: 'Input',
                                  parents: ['root', 'body', 'usrAreaList'],
                                  parentType: 'fieldArray',
                                  parentKey: '0-3-2',
                                  key: '0-3-2-0',
                                  parentCode: 'usrAreaList',
                                  id: 'root.body.usrAreaList.listItem',
                                  dataKey:
                                    '297556_root.body.usrAreaList.listItem',
                                },
                              ],
                              _id: 'root.body.usrAreaList',
                              compType: 'Input',
                              name: 'usrAreaList',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                              id: 'root.body.usrAreaList',
                              dataKey: '297556_root.body.usrAreaList',
                              value: {
                                type: ['context', '$data_189759$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                          id: 'root.body',
                          dataKey: '297556_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '297556_root',
                    },
                  ],
                  _sourceName: '区域管理员列表查询',
                  valueType: 'object',
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170012521475717020,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '3621674',
                      pageJsonId: '724622414',
                      actionTitle: '拼接会签人员',
                      code: 'function main(data,state,success,fail){var _reply_,_reply_$resultData;var item=state.itemList;var customObject=item.customObject;var userList=(_reply_=reply_297556)===null||_reply_===void 0?void 0:(_reply_$resultData=_reply_.resultData)===null||_reply_$resultData===void 0?void 0:_reply_$resultData.records;console.log("\\u533A\\u57DF\\u7BA1\\u7406\\u5458\\u67E5\\u8BE2\\u7ED3\\u679C\\uFF1A",userList);var staffIdList=customObject.checkProjectList.flatMap(function(item){return item.quotaConfigInfoList.map(function(info){var _info$oaAccount;return{userCode:(_info$oaAccount=info.oaAccount)===null||_info$oaAccount===void 0?void 0:_info$oaAccount.toUpperCase(),userName:info.userName}})});staffIdList=staffIdList.concat(userList);var uniqueStaffIdList=Array.from(new Set(staffIdList));console.log("\\u8FC7\\u6EE4\\u540E\\u7684staffIdList:",uniqueStaffIdList);var staffNameList=uniqueStaffIdList.flatMap(function(info){return info.userName}).join(",");console.log("\\u8FC7\\u6EE4\\u540E\\u7684staffNameList:",staffNameList);success({"staffNameList":staffNameList,"staffIdList":uniqueStaffIdList})};',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170081929455338180,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '192345',
                          pageJsonId: '724622414',
                          code: 'function main(data,state,success,fail){if(urlParam.scene=="U"&&urlParam.tacheCode=="APPLY_FINISH"){success()}};',
                          actionTitle: '如果为提交页面',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'callCustomPageFunc',
                            dataId: 170081930151554560,
                            options: {
                              compId: 'callCustomPageFunc',
                              compName: 'system',
                              id: '116545',
                              pageJsonId: '724622414',
                              pathname: '/flow/audit',
                              pageId: '874567207627108352',
                              modalPath: '/flow/audit',
                              customFuncName: 'assignApproveList',
                              customFuncParams: 'object',
                              paramsObj: { approveList: '$data_3621674$' },
                              paramsObjKeyValueMap: {
                                approveList: '$data_3621674$',
                              },
                            },
                            line_number: 8,
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
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 170018774184623800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '072326',
              pageJsonId: '724622414',
              sync: false,
              actionTitle: '查询审批单信息，为了会签人员保密设置',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'getFlowItemSimpleInfo',
              _apiCode: 'getFlowItemSimpleInfo',
              _source: 'rhin',
              _sourceName: '获取流程环节实例简要信息-tzp',
              _serviceId: '874132034304221184',
              _serviceTitle:
                '获取流程环节实例简要信息-tzp: getFlowItemSimpleInfo',
              valueType: 'object',
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
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-0',
                      id: 'root.header',
                      dataKey: '072326_root.header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'root.path',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-1',
                      id: 'root.path',
                      dataKey: '072326_root.path',
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
                      dataKey: '072326_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'workItemId',
                          name: '环节实例id',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.workItemId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.workItemId',
                          dataKey: '072326_root.body.workItemId',
                          value: {
                            type: ['customize'],
                            code: '$urlParam.workItemId$',
                          },
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '072326_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '072326_root',
                },
              ],
            },
            line_number: 9,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170018811550455680,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '3244665',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _state$itemList$custo,_state$itemList$custo2,_reply_,_reply_2;var item=state.itemList;var attrList=item.attrList;console.log("state:",state);var tmp=(_state$itemList$custo=state.itemList.customObject)===null||_state$itemList$custo===void 0?void 0:(_state$itemList$custo2=_state$itemList$custo.checkProjectList)===null||_state$itemList$custo2===void 0?void 0:_state$itemList$custo2.slice();console.log("tmp:",tmp);var formData={};for(var i=0;i<attrList.length;++i){formData[attrList[i].attrCode]=attrList[i].attrValue}data.formData=formData;var feeInfoList=[];var customObject=item.customObject;customObject===null||customObject===void 0?void 0:customObject.checkProjectList.forEach(function(v){var feeObj={};for(var name in v){feeObj[name]=v[name]}feeObj.rowId=v.seq;feeInfoList.push(feeObj)});console.log("feeInfoList:",feeInfoList);var traceCode=(_reply_=reply_072326)===null||_reply_===void 0?void 0:_reply_.resultData.traceCode;var dealUserCode=(_reply_2=reply_072326)===null||_reply_2===void 0?void 0:_reply_2.resultData.dealUserCode;console.log("====\\u5F00\\u59CB\\u8FC7\\u6EE4\\u4EBA\\u5458=====");if(traceCode!=null&&traceCode!=undefined&&traceCode=="COUNTERSIGN"){var filterResult=feeInfoList.map(function(item){var quotaConfigInfoList=item.quotaConfigInfoList.filter(function(quotaItem){var _quotaItem$oaAccount;return((_quotaItem$oaAccount=quotaItem.oaAccount)===null||_quotaItem$oaAccount===void 0?void 0:_quotaItem$oaAccount.toUpperCase())===dealUserCode});var result=item;result.quotaConfigInfoList=quotaConfigInfoList;return result}).filter(function(item){return item.quotaConfigInfoList.length>0});console.log("====\\u4EBA\\u5458\\u8FC7\\u6EE4\\u7ED3\\u679C=====",filterResult);if(filterResult.length>0){feeInfoList=filterResult}else{feeInfoList=tmp}}console.log("feeInfoList:",feeInfoList);success({"feeInfoList":feeInfoList})};',
                  actionTitle: '设置界面初始化值',
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 170018811550427230,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '1889273',
                      pageJsonId: '537892',
                      dataSourceId: 167947300166082140,
                      dataSourceName: 'feeInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '867207',
                          code: 'seq',
                          name: '序号',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '510774',
                          code: 'checkProject',
                          name: '考核项目',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '078696',
                          code: 'targetValue',
                          name: '目标值',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '5367473',
                          code: 'fullMarksValue',
                          name: '满分值',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '063775',
                          code: 'checkBore',
                          name: '考核口径',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      newData: '$data_3244665.feeInfoList$',
                    },
                    line_number: 11,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'setValue',
                    dataId: 170018811550416540,
                    options: {
                      compId:
                        'Input_361479_887285_2150708_923492_98259415_5553247_91933',
                      compLib: 'comm',
                      pageJsonId: '724622414',
                      compName: 'Input',
                      id: '7193346',
                      valueList: {
                        Input_361479_887285_2150708_923492_98259415_5553247_91933:
                          '$state.itemList.approveGradeName$',
                      },
                    },
                    line_number: 12,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse161.params = [] || [];
    CMDGenerator(eventDataifelse161, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 170001949644835260
    console.log('====DATA=====', data, urlParam, state);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_724622414__"
    >
      <View
        className="View_View_724622414_1_7199"
        name={'页面'}
        $$componentItem={{
          id: 'View_724622414_1_7199',
          uid: 'View_724622414_1_7199',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_724622414_1_7199')}
        {...injectData}
      >
        <Divider
          name={'客户经理绩效考核方案审批'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'客户经理绩效考核方案'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_6651058_9609896_644842_0492683',
            uid: 'Divider_6651058_9609896_644842_0492683',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: '0A' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Divider_6651058_9609896_644842_0492683')
          }
          {...injectData}
        />
        <View
          className="View_View_6806553_8058562_8839184_074887"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_8058562_8839184_074887',
            uid: 'View_6806553_8058562_8839184_074887',
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
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_6806553_8058562_8839184_074887')
          }
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_698859_3161244_235105',
              uid: 'HorizontalView_004602_698859_3161244_235105',
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
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'HorizontalView_004602_698859_3161244_235105',
              )
            }
            {...injectData}
          >
            <View
              className="View_View_339406_2087875_965124_980888"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_2087875_965124_980888',
                uid: 'View_339406_2087875_965124_980888',
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_339406_2087875_965124_980888')
              }
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
                  id: 'Form_4311097_9385662_0413915_5274814_3749432_190367',
                  uid: 'Form_4311097_9385662_0413915_5274814_3749432_190367',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_0413915_5274814_3749432_190367',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'客户经理绩效考核方案'}
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
                    id: 'Checkbox_882584_5289015_934499_6069114_916609_273782_1522356',
                    uid: 'Checkbox_882584_5289015_934499_6069114_916609_273782_1522356',
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
                      'Checkbox_882584_5289015_934499_6069114_916609_273782_1522356',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_5097806_1317393_2394241_119604"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_5097806_1317393_2394241_119604',
                    uid: 'View_5097806_1317393_2394241_119604',
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
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'View_5097806_1317393_2394241_119604',
                    )
                  }
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
                    id: 'Input_361479_887285_2150708_923492_98259415_5553247_91933',
                    uid: 'Input_361479_887285_2150708_923492_98259415_5553247_91933',
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
                      'Input_361479_887285_2150708_923492_98259415_5553247_91933',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
        <View
          className="View_View_4949093_2026766_78116154_9383766_0165402_428393"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2026766_78116154_9383766_0165402_428393',
            uid: 'View_4949093_2026766_78116154_9383766_0165402_428393',
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
            margin: '0px 0px 20px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(
              r,
              'View_4949093_2026766_78116154_9383766_0165402_428393',
            )
          }
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
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_2854379'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.formData}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_2854379_5693923',
              uid: 'Form_2854379_5693923',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource137: any = [
                {
                  type: 'setDataSource',
                  dataId: 167989865137231500,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '368915',
                    pageJsonId: '724622414',
                    dataSourceId: 167989863121023100,
                    dataSourceName: 'formData',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '280673',
                        code: 'cityName',
                        name: '地市名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'cityName',
                        },
                        showInput: true,
                        _codePath: ['cityName'],
                        _idpath: ['280673'],
                      },
                      {
                        attrId: '834218',
                        code: 'checkMonth',
                        name: '考核结束月',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'checkMonth',
                        },
                        showInput: true,
                        _codePath: ['checkMonth'],
                        _idpath: ['834218'],
                      },
                      {
                        attrId: '159253',
                        code: 'referenceProvinceTpl',
                        name: '引用省级模版',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'referenceProvinceTpl',
                        },
                        showInput: true,
                        _codePath: ['referenceProvinceTpl'],
                        _idpath: ['159253'],
                      },
                      {
                        attrId: '1318727',
                        code: 'checkCaseName',
                        name: '考核方案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'checkCaseName',
                        },
                        showInput: true,
                        _codePath: ['checkCaseName'],
                        _idpath: ['1318727'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource137.params =
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
                eventDatasetDataSource137,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_2854379_5693923')}
            {...injectData}
          >
            <Input
              name={'考核方案名称'}
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
              fieldName={'checkCaseName'}
              value={data?.formData?.checkCaseName}
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
                id: 'Input_checkCaseName_148218',
                uid: 'Input_checkCaseName_148218',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_checkCaseName_148218')
              }
              {...injectData}
            />
            <Input
              name={'引用省级模版'}
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
              fieldName={'referenceProvinceTpl'}
              value={data?.formData?.referenceProvinceTpl}
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
                id: 'Input_referenceProvinceTpl_541234',
                uid: 'Input_referenceProvinceTpl_541234',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_referenceProvinceTpl_541234')
              }
              {...injectData}
            />
            <Input
              name={'考核结束月'}
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
              fieldName={'checkMonth'}
              value={data?.formData?.checkMonth}
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
                id: 'Input_checkMonth_486525',
                uid: 'Input_checkMonth_486525',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_checkMonth_486525')
              }
              {...injectData}
            />
            <Input
              name={'归属地市'}
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
              fieldName={'cityName'}
              value={data?.formData?.cityName}
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
                id: 'Input_cityName_4350966',
                uid: 'Input_cityName_4350966',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_cityName_4350966')
              }
              {...injectData}
            />
          </Form>
        </View>
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
              title: '考核项目',
              key: 'checkProject',
              dataIndex: 'checkProject',
              className: '',
              id: '189895',
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
              title: '目标值',
              key: 'targetValue',
              dataIndex: 'targetValue',
              className: 'divider',
              id: '285022',
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
              title: '满分值',
              key: 'fullMarksValue',
              dataIndex: 'fullMarksValue',
              className: 'divider',
              id: '453405',
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
              title: '考核口径',
              key: 'checkBore',
              dataIndex: 'checkBore',
              className: 'divider',
              id: '1983396',
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
              title: '序号',
              key: 'seq',
              dataIndex: 'seq',
              id: '199105',
              hiddenRule: true,
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
          dataSource={data?.feeInfo}
          rowActions={[
            {
              title: '详情',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'file-search' },
              type: 'detail',
              id: '528312',
              checked: true,
            },
          ]}
          extend={[]}
          rowKey={'seq'}
          scroll={{ x: 1000, y: 240 }}
          adjustModel={'auto'}
          dataSourceFromDataSourceConfig={'data.feeInfo'}
          $$componentItem={{
            id: 'Table_5369494_486586_311575_923499_515778_091763',
            uid: 'Table_5369494_486586_311575_923499_515778_091763',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDelete={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode537: any = [
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
            eventDatacustomActionCode537.params =
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
              eventDatacustomActionCode537,
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
          onRowDetail={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode538: any = [
              {
                type: 'customActionCode',
                dataId: 168017877249403070,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '3802336',
                  pageJsonId: '724622414',
                  code: 'function main(data,state,success,fail){var feeInfoList=data.feeInfo;for(var i=0;i<feeInfoList.length;++i){if(rowId==feeInfoList[i].seq){success(feeInfoList[i])}}};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'showCustomModal',
                    dataId: 168017888837072540,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '4621035',
                      pageJsonId: '724622414',
                      modalname:
                        '/kehujinglijixiaokaohefanganshenpixiangqing7745',
                      pageId: '958700622213050368',
                      modalPath:
                        '/kehujinglijixiaokaohefanganshenpixiangqing7745',
                      paramsObj: { feeInfo: '$data_3802336$' },
                      paramsObjKeyValueMap: { feeInfo: '$data_3802336$' },
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatacustomActionCode538.params =
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
              eventDatacustomActionCode538,
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
          ref={(r: any) =>
            refs.setComponentRef(
              r,
              'Table_5369494_486586_311575_923499_515778_091763',
            )
          }
          {...injectData}
        />
        <View
          className="View_View_4949093_2026766_78116154_399058"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2026766_78116154_399058',
            uid: 'View_4949093_2026766_78116154_399058',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_4949093_2026766_78116154_399058')
          }
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
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '948989',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
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
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_5369494_486586_311575_7137243',
              uid: 'Table_5369494_486586_311575_7137243',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode539: any = [
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
              eventDatacustomActionCode539.params =
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
                eventDatacustomActionCode539,
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
              const eventDatadownloadByFileId46: any = [
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
              eventDatadownloadByFileId46.params =
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
                eventDatadownloadByFileId46,
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_5369494_486586_311575_7137243')
            }
            {...injectData}
          />
        </View>
        <BusiComp0521965
          pageId={pageId}
          busiCompId={'922396081753948160'}
          name={'附件'}
          formItemIndex={5}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_667596')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0012_0003$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
