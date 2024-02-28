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

const pageId = '1041261900601544704';
const ClsJc_0012_0006$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode122: any = [
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
    eventDatacustomActionCode122.params =
      [
        {
          title: '事件入参',
          name: 'options_144734',
          value: '$options_144734$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode122,
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
    const eventDataapiRequest348: any = [
      {
        type: 'apiRequest',
        dataId: 170055570161960060,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0849772',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectCataLogTierByCode',
          _apiCode: 'selectCataLogTierByCode',
          _source: 'rhin',
          _serviceId: '879306380283035648',
          _serviceTitle:
            '根据类目编码获取类目层级信息-hdb: selectCataLogTierByCode',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: ['root'],
              id: 'header',
              dataKey: '9817429_header',
              parentType: 'object',
              parentKey: '0',
              key: '0-0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: ['root'],
              id: 'path',
              dataKey: '9817429_path',
              parentType: 'object',
              parentKey: '0',
              key: '0-1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: ['root'],
              id: 'query',
              dataKey: '9817429_query',
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['root', 'body'],
                  id: 'body.catalogCode',
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '9817429_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
            },
          ],
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170055570161947500,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '187956',
              pageJsonId: '537892',
              dataSourceId: 170055566928845380,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'catalogCode',
                  name: '属性',
                  type: 'string',
                  attrId: '469433',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'approveGrade',
                  name: '属性',
                  type: 'string',
                  attrId: '498654',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'approveGrade',
                  },
                },
                {
                  code: 'attrList',
                  name: '属性',
                  type: 'objectArray',
                  attrId: '78655066',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'attrList',
                  },
                },
                {
                  code: 'fileInfo',
                  name: '属性',
                  type: 'objectArray',
                  attrId: '368512',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'fileInfo',
                  },
                },
                {
                  code: 'catalogItemCode',
                  name: '属性',
                  type: 'string',
                  attrId: '053345',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'catalogItemCode',
                  },
                },
                {
                  code: 'catalogItemSubType',
                  name: '属性',
                  type: 'string',
                  attrId: '1477617',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'catalogItemSubType',
                  },
                },
                {
                  code: 'childCatalogCode',
                  name: '属性',
                  type: 'string',
                  attrId: '462605',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'childCatalogCode',
                  },
                },
                {
                  code: 'parentCatalogCode',
                  name: '属性',
                  type: 'string',
                  attrId: '9907814',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'parentCatalogCode',
                  },
                },
                {
                  code: 'parentCatalogItemCode',
                  name: '属性',
                  type: 'string',
                  attrId: '20885',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'parentCatalogItemCode',
                  },
                },
                {
                  code: 'childCatalogDesc',
                  name: '属性',
                  type: 'string',
                  attrId: '4595233',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'childCatalogDesc',
                  },
                },
                {
                  code: 'approveGradeName',
                  name: '属性',
                  type: 'string',
                  attrId: '581987',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'approveGradeName',
                  },
                },
                {
                  code: 'custMemberList',
                  name: '属性',
                  type: 'objectArray',
                  attrId: '48666436',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'custMemberList',
                  },
                },
                {
                  code: 'instList',
                  name: '属性',
                  type: 'objectArray',
                  attrId: '2746001',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_0849772$'],
                    hideAttr: false,
                    code: 'instList',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 170055570161943000,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '6572879',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditOrderPrepare',
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
    eventDataapiRequest348.params = [] || [];
    CMDGenerator(eventDataapiRequest348, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse189: any = [
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
        line_number: 4,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167962339531892060,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '67819',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var attrList=item.attrList;var formData={};for(var i=0;i<attrList.length;++i){formData[attrList[i].attrCode]=attrList[i].attrValue}data.formData=formData;var feeInfoList=[];var customObject=item.customObject;customObject===null||customObject===void 0?void 0:customObject.checkProjectList.forEach(function(v){var feeObj={};for(var name in v){feeObj[name]=v[name]}feeObj.rowId=v.seq;feeInfoList.push(feeObj)});console.log("sfasfasfsafa",feeInfoList);success(feeInfoList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167962339531840700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '7662834',
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
                  newData: '$data_67819$',
                },
                line_number: 6,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 167989915421871040,
                options: {
                  compId:
                    'Input_361479_887285_2150708_923492_98259415_5553247_91933',
                  compLib: 'comm',
                  pageJsonId: '724622414',
                  compName: 'Input',
                  id: '27064',
                  valueList: {
                    Input_361479_887285_2150708_923492_98259415_5553247_91933:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 7,
                callback1: [],
              },
            ],
            callback2: [],
          },
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
            line_number: 8,
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
                line_number: 9,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse189.params = [] || [];
    CMDGenerator(eventDataifelse189, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 170055424513595500
    console.log('=====DATA====', state);
    const eventDataapiRequest349: any = [
      {
        type: 'apiRequest',
        dataId: 170064715817075650,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '648078',
          pageJsonId: '724622414',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getFlowItemSimpleInfo',
          _apiCode: 'getFlowItemSimpleInfo',
          _source: 'rhin',
          _sourceName: '获取流程环节实例简要信息-tzp',
          _serviceId: '874132034304221184',
          _serviceTitle: '获取流程环节实例简要信息-tzp: getFlowItemSimpleInfo',
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
                  dataKey: '648078_root.header',
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
                  dataKey: '648078_root.path',
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
                  dataKey: '648078_root.query',
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
                      dataKey: '648078_root.body.workItemId',
                      value: {
                        type: ['customize'],
                        code: '$state.workItemId$',
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
                  dataKey: '648078_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '648078_root',
            },
          ],
          params: 'object',
        },
        line_number: 11,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170064718157943070,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '73608',
              pageJsonId: '724622414',
              actionTitle: '隐藏上传附件',
              code: 'function main(data,state,success,fail){var result=reply_648078.resultData;console.log("===\\u9690\\u85CF\\u9644\\u4EF6\\u8FDB\\u5165==",reply_648078);var traceCode=result.traceCode;if(traceCode!=null&&traceCode!=undefined&&traceCode!="AREA_ADMIN"){success()}};',
            },
            line_number: 12,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest349.params = [] || [];
    CMDGenerator(eventDataapiRequest349, {}, 'apiRequest', {
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
          dividerText={'客户经理绩效考核方案复核'}
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
                  text={'客户经理绩效考核方案复核审批'}
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
            colSpan={8}
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
              const eventDatasetDataSource151: any = [
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
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'cityName',
                        },
                      },
                      {
                        attrId: '834218',
                        code: 'checkMonth',
                        name: '考核结束月',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'checkMonth',
                        },
                      },
                      {
                        attrId: '159253',
                        code: 'referenceProvinceTpl',
                        name: '引用省级模版',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '1318727',
                        code: 'checkCaseName',
                        name: '考核方案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'checkCaseName',
                        },
                      },
                      {
                        attrId: '250067',
                        code: 'countyName',
                        name: '归属区县',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_2854379_5693923',
                            'getFieldsValue',
                          ],
                          code: 'countyName',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource151.params =
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
                eventDatasetDataSource151,
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
              fieldName={'cityName'}
              value={data?.formData?.cityName}
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
            <Input
              name={'归属区县'}
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
              fieldName={'countyName'}
              value={data?.formData?.countyName}
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
              name={'考核月份'}
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
              fieldName={'checkMonth'}
              value={data?.formData?.checkMonth}
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
                id: 'Input_852809',
                uid: 'Input_852809',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_852809')}
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
              title: '考核项目名称',
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
              title: '考核项目编码',
              key: 'targetValue',
              dataIndex: 'projectCode',
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
              title: '创建人',
              key: 'fullMarksValue',
              dataIndex: 'creator',
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
            const eventDatacustomActionCode592: any = [
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
            eventDatacustomActionCode592.params =
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
              eventDatacustomActionCode592,
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
            const eventDatacustomActionCode593: any = [
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
                        '/kehujinglijixiaokaohefanganshenpixiangqing7745copy',
                      pageId: '1041266295925952512',
                      modalPath:
                        '/kehujinglijixiaokaohefanganshenpixiangqing7745copy',
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
            eventDatacustomActionCode593.params =
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
              eventDatacustomActionCode593,
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
        <BusiComp0521965
          pageId={pageId}
          busiCompId={'922396081753948160'}
          name={'附件'}
          formItemIndex={5}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: functorsMap?.IF(state?.sceneOrigin == 'U', '', 'V'),
            fileList: state?.itemList?.fileInfo,
            isUpload: 'TRUE',
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_667596')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0012_0006$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
