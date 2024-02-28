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
  Button,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '945149645892096000';
const ClsJc_0003_0002$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_263015: any) => {
    const eventDatacustomActionCode92: any = [
      {
        type: 'customActionCode',
        dataId: 167282099511652930,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '98874',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_263015;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282102130123700,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '343456',
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
    eventDatacustomActionCode92.params =
      [
        {
          title: '事件入参',
          name: 'options_263015',
          value: '$options_263015$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode92,
      { options_263015 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const updateTitle = (options_9020026: any) => {
    const eventDatacustomActionCode93: any = [
      {
        type: 'customActionCode',
        dataId: 167592245922136500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '83029816',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("data.MemberInfo",data.MemberInfo);var _value="";if(data.MemberInfo.length>0){_value=data.MemberInfo[0].groupName}success({catalogCode:"CLS_JC_0004_0002",value:_value})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167592277382884130,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '707431',
              pageJsonId: '537892',
              pathname: '/auditOrderPrepare',
              pageId: '884045146848604160',
              customFuncName: 'updateTitleJC0004',
              customFuncParams: '$data_83029816$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode93.params =
      [
        {
          title: '事件入参',
          name: 'options_9020026',
          value: '$options_9020026$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode93,
      { options_9020026 },
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
    updateTitle,
  }));

  useEffect(() => {
    const eventDataapiRequest261: any = [
      {
        type: 'apiRequest',
        dataId: 166125298599862820,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9817429',
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
              parents: [],
              id: 'header',
              dataKey: '9817429_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9817429_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9817429_query',
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
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9817429_body',
            },
          ],
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166139448631288800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6454073',
              pageJsonId: '537892',
              dataSourceId: 166096152690913730,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '154379',
                  code: 'catalogCode',
                  name: '类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.catalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '4562264',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'approveGrade' },
                },
                {
                  attrId: '63768',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'attrList' },
                },
                {
                  attrId: '919265',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [],
                  value: { type: [], code: 'fileInfo' },
                },
                {
                  attrId: '360171',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'catalogItemCode' },
                },
                {
                  attrId: '420623',
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '375466',
                  code: 'childCatalogCode',
                  name: '子类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '9257773',
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '5733013',
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '440627',
                  code: 'childCatalogDesc',
                  name: '子类目项描述',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '177104',
                  code: 'approveGradeName',
                  name: '审批等级名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '13154521',
                  code: 'custMemberList',
                  name: '成员信息',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444014329123680,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '0768954',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
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
    eventDataapiRequest261.params = [] || [];
    CMDGenerator(eventDataapiRequest261, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse147: any = [
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
        line_number: 4,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;console.log("zrj",item);data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;var redList=[];item.instList.forEach(function(v){var red={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){red[instList[i].attrCode]=instList[i].attrValue}red.rowId=v.instCode;if(red.isDelay==="1"){red.isDelayName="\\u5EF6\\u671F"}else if(red.isDelay==="0"){red.isDelayName="\\u4E0D\\u5EF6\\u671F"}if(red.ensureType==="1001"){red.ensureTypeName="\\u957F\\u671F\\u4FDD\\u969C"}else{red.ensureTypeName="\\u4E34\\u65F6\\u4FDD\\u969C"}redList.push(red)}});success(redList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setValue',
                dataId: 166392726700298140,
                options: {
                  compId: 'Input_361479_887285_2150708_936504_923334_755169',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '613165',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 6,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 166305500105467000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '013094',
                  pageJsonId: '537892',
                  dataSourceId: 167694850220096770,
                  dataSourceName: 'redList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '33386',
                      code: 'redListTel',
                      name: '红名单手机号码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '454754',
                      code: 'ensureType',
                      name: '保障类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '681023',
                      code: 'isDelay',
                      name: '是否延期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '2263976',
                      code: 'creditApplyValid',
                      name: '本次信用度申请有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '364945',
                      code: 'noDelayReason',
                      name: '不延期原因',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '1818128',
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9245063',
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '060261',
                      code: 'userCurrentStatus',
                      name: '用户当前状态',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '756424',
                      code: 'currentCreditLevel',
                      name: '当前信用等级',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '36479',
                      code: 'creditEffDate',
                      name: '信用度生效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '922378',
                      code: 'creditExpDate',
                      name: '信用度失效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '197264',
                      code: 'rowId',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '369543',
                      code: 'isDelayName',
                      name: '是否延期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '314395',
                      code: 'ensureTypeName',
                      name: '保障类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '626343',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'V',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'P',
                },
                condId: '7546792',
                connector: '||',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166176038635760700,
            elseIfs: [],
            line_number: 8,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167695862138840540,
                options: {
                  compId: [
                    'Table_8700198_047366',
                    'Input_361479_887285_2150708_936504_923334_755169',
                  ],
                  compName: 'page',
                  id: '7058517',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: [
                    'Table_8700198_047366',
                    'Input_361479_887285_2150708_936504_923334_755169',
                  ],
                },
                line_number: 9,
              },
              {
                type: 'sysSetVisible',
                dataId: 167695863893710180,
                options: {
                  compId: ['Table_8700198', 'View_278839'],
                  compName: 'page',
                  id: '460984',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Table_8700198', 'View_278839'],
                },
                line_number: 10,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                  ],
                },
                line_number: 11,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse147.params = [] || [];
    CMDGenerator(eventDataifelse147, {}, 'ifelse', {
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
        className="View_View_537892_1"
        name={'页面'}
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
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'红名单到期提醒'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558',
            uid: 'Divider_52558',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558')}
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769',
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
                    'Form_4311097_9385662_8411515_9167293_4337769',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'红名单到期提醒'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724',
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
                      'Checkbox_882584_5289015_934499_355644_646764_5265724',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234',
                    uid: 'View_6319234',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_6319234')}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <View
            className="View_View_278839"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_278839',
              uid: 'View_278839',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: 'auto',
              margin: 'px px px px',
              textAlign: 'left',
              justifyContent: 'flex-end',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_278839')}
            {...injectData}
          >
            <Button
              name={'批量修改'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'primary'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_683498',
                uid: 'Button_683498',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey51: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 167713682649704960,
                    options: {
                      compId: 'Table_8700198',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '310173',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '81082256',
                            options: {
                              context: '$selectedRowKeys_310173$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167713807412988320,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167714210713832000,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167714211061882850,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '9718281',
                                  pageJsonId: '537892',
                                  type: 'error',
                                  value: '请选择数据',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 7,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 167714211061882850,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '9718281',
                                  pageJsonId: '537892',
                                  type: 'error',
                                  value: '请选择数据',
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 167713809541069540,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '275599',
                              pageJsonId: '537892',
                              modalname: '/redBatchUpdate',
                              pageId: '945196540808511488',
                              paramsObj: {
                                phone: '$value_24586657$',
                                lanId: '$state.lanId$',
                                catalogCode: '$state.catalogCode$',
                                isCoreFlag: '0',
                              },
                              paramsObjKeyValueMap: {
                                phone: '$value_24586657$',
                                lanId: '$state.lanId$',
                                catalogCode: '$state.catalogCode$',
                                isCoreFlag: '0',
                              },
                              modalPath: '/redBatchUpdate',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 167713809541078000,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '2773825',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var newRedList=JSON.parse(JSON.stringify(data.redList));newRedList.forEach(function(row){if(selectedRowKeys_310173.includes(row.rowId)){if(okData_275599.isDelay==="1"){row.creditApplyValid=okData_275599.creditApplyValid;row.noDelayReason="";row.isDelayName="\\u5EF6\\u671F";row.isDelay="1"}else{row.creditApplyValid="";row.noDelayReason=okData_275599.noDelayReason;row.isDelayName="\\u4E0D\\u5EF6\\u671F";row.isDelay="0"}}});var instList=[];newRedList.forEach(function(v){var instAttrList=[];for(var key in v){if(key!="rowId"){instAttrList.push({"attrCode":key,"attrName":"","attrValue":v[key]})}}var instObj={"instCode":v.rowId,"instAttrList":instAttrList};instList.push(instObj)});data.sceneSubmit.instList=instList;console.log("\\u6B64\\u65F6\\u7684redList",newRedList);success({redList:newRedList})};',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 167713809541074270,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '068071',
                                      pageJsonId: '537892',
                                      dataSourceId: 167694850220096770,
                                      dataSourceName: 'redList',
                                      dataSourceRelType: 'custom',
                                      dataSourceReloadFilter: [],
                                      dataSourceSetValue: [
                                        {
                                          attrId: '33386',
                                          code: 'redListTel',
                                          name: '红名单手机号码',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '454754',
                                          code: 'ensureType',
                                          name: '保障类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '681023',
                                          code: 'isDelay',
                                          name: '是否延期',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '2263976',
                                          code: 'creditApplyValid',
                                          name: '本次信用度申请有效期',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '364945',
                                          code: 'noDelayReason',
                                          name: '不延期原因',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '1818128',
                                          code: 'belongCityText',
                                          name: '归属地市',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '9245063',
                                          code: 'belongAreaText',
                                          name: '归属区县',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '060261',
                                          code: 'userCurrentStatus',
                                          name: '用户当前状态',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '756424',
                                          code: 'currentCreditLevel',
                                          name: '当前信用等级',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '36479',
                                          code: 'creditEffDate',
                                          name: '信用度生效时间',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '922378',
                                          code: 'creditExpDate',
                                          name: '信用度失效时间',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '197264',
                                          code: 'rowId',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                      ],
                                      operateType: 3,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      newData: '$data_2773825.redList$',
                                    },
                                    line_number: 5,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 167713809541022340,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '4297546',
                                      pageJsonId: '537892',
                                      pathname: '/auditOrderPrepare',
                                      pageId: '884045146848604160',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
                                      modalPath: '/auditOrderPrepare',
                                    },
                                    line_number: 6,
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
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey51.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey51,
                  { e },
                  'getTableSelectedKey',
                  {
                    id: 'getTableSelectedKey',
                    name: 'getTableSelectedKey',
                    type: 'getTableSelectedKey',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_683498')}
              {...injectData}
            />
          </View>
          <Table
            name={'编辑'}
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
                title: '红名单手机号码',
                key: 'redListTel',
                dataIndex: 'redListTel',
                className: '',
                id: '175468',
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
                title: '保障类型',
                key: 'ensureTypeName',
                dataIndex: 'ensureTypeName',
                id: '535343',
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
                title: '是否延期',
                key: 'isDelayName',
                dataIndex: 'isDelayName',
                id: '573759',
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
                title: '本次信用度申请有效期',
                key: 'creditApplyValid',
                dataIndex: 'creditApplyValid',
                className: 'divider',
                id: '504729',
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
                title: '不延期原因',
                key: 'noDelayReason',
                dataIndex: 'noDelayReason',
                className: 'divider',
                id: '077417',
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
                title: '信用度生效时间',
                key: 'creditEffDate',
                dataIndex: 'creditEffDate',
                className: 'divider',
                id: '896523',
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
                title: '信用度失效时间',
                key: 'creditExpDate',
                dataIndex: 'creditExpDate',
                className: 'divider',
                id: '507241',
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
                id: '731346',
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
                title: '归属区县',
                key: 'belongAreaText',
                dataIndex: 'belongAreaText',
                className: 'divider',
                id: '069247',
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
                title: '用户当前状态',
                key: 'userCurrentStatus',
                dataIndex: 'userCurrentStatus',
                className: 'divider',
                id: '537127',
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
                title: '当前信用等级',
                key: 'currentCreditLevel',
                dataIndex: 'currentCreditLevel',
                className: 'divider',
                id: '033137',
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
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.redList}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '516892',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '00596118',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.redList'}
            $$componentItem={{
              id: 'Table_8700198',
              uid: 'Table_8700198',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected50: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167022168188970500,
                  options: {
                    compId: 'Table_8700198',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '3982443',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167022168471580930,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '058388',
                        pageJsonId: '537892',
                        modalname: '/redVerticalUpdate',
                        pageId: '945202588504145920',
                        paramsObj: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                          redObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                          redObj: '$row$',
                        },
                        modalPath: '/redVerticalUpdate',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167022168471569020,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '4812897',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.redList=data.redList.filter(function(v){return v.rowId!=okData_058388.rowId});data.redList.push(okData_058388);var instList=[];data.redList.forEach(function(v){var instAttrList=[];for(var key in v){if(key!="rowId"){instAttrList.push({"attrCode":key,"attrName":"","attrValue":v[key]})}}var instObj={"instCode":v.rowId,"instAttrList":instAttrList};instList.push(instObj)});data.sceneSubmit.instList=instList;success(data.redList)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167022168471587460,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '466345',
                                pageJsonId: '537892',
                                dataSourceId: 167694850220096770,
                                dataSourceName: 'redList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '33386',
                                    code: 'redListTel',
                                    name: '红名单手机号码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '454754',
                                    code: 'ensureType',
                                    name: '保障类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '681023',
                                    code: 'isDelay',
                                    name: '是否延期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2263976',
                                    code: 'creditApplyValid',
                                    name: '本次信用度申请有效期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '364945',
                                    code: 'noDelayReason',
                                    name: '不延期原因',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '1818128',
                                    code: 'belongCityText',
                                    name: '归属地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '9245063',
                                    code: 'belongAreaText',
                                    name: '归属区县',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '060261',
                                    code: 'userCurrentStatus',
                                    name: '用户当前状态',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '756424',
                                    code: 'currentCreditLevel',
                                    name: '当前信用等级',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '36479',
                                    code: 'creditEffDate',
                                    name: '信用度生效时间',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '922378',
                                    code: 'creditExpDate',
                                    name: '信用度失效时间',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '197264',
                                    code: 'rowId',
                                    name: '属性',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                newData: '$data_4812897$',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167022168471566430,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '418389',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'reloadTableData',
                              dataId: 170314692025372930,
                              options: {
                                compId: 'Table_8700198',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Table',
                                id: '16591',
                                data: '$data_4812897$',
                              },
                              line_number: 6,
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
              eventDatagetTableSelected50.params =
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
                eventDatagetTableSelected50,
                { rowId, row, index },
                'getTableSelected',
                {
                  id: 'getTableSelected',
                  name: 'getTableSelected',
                  type: 'getTableSelected',
                  platform: 'pc',
                },
              );
            }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal129: any = [
                {
                  type: 'showCustomModal',
                  dataId: 167696205007306140,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '991867',
                    pageJsonId: '537892',
                    modalname: '/redVerticalUpdate',
                    pageId: '945202588504145920',
                    modalPath: '/redVerticalUpdate',
                    paramsObj: {
                      sceneCode: 'V',
                      catalogCode: '$state.catalogCode$',
                      redObj: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      sceneCode: 'V',
                      catalogCode: '$state.catalogCode$',
                      redObj: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal129.params =
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
                eventDatashowCustomModal129,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198')}
            {...injectData}
          />
          <Table
            name={'详情'}
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
                title: '红名单手机号码',
                key: 'redListTel',
                dataIndex: 'redListTel',
                className: '',
                id: '5080915',
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
                title: '保障类型',
                key: 'ensureType',
                dataIndex: 'ensureTypeName',
                className: 'divider',
                id: '162753',
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
                title: '是否延期',
                key: 'isDelay',
                dataIndex: 'isDelayName',
                className: 'divider',
                id: '9189318',
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
                title: '本次信用度申请有效期',
                key: 'creditApplyValid',
                dataIndex: 'creditApplyValid',
                className: 'divider',
                id: '65969',
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
                title: '不延期原因',
                key: 'noDelayReason',
                dataIndex: 'noDelayReason',
                className: 'divider',
                id: '0377951',
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
                title: '信用度生效时间',
                key: 'creditEffDate',
                dataIndex: 'creditEffDate',
                className: 'divider',
                id: '441742',
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
                title: '信用度失效时间',
                key: 'creditExpDate',
                dataIndex: 'creditExpDate',
                className: 'divider',
                id: '4457319',
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
                id: '053747',
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
                title: '归属区县',
                key: 'belongAreaText',
                dataIndex: 'belongAreaText',
                className: 'divider',
                id: '576276',
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
                title: '用户当前状态',
                key: 'userCurrentStatus',
                dataIndex: 'userCurrentStatus',
                className: 'divider',
                id: '2671084',
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
                title: '当前信用等级',
                key: 'currentCreditLevel',
                dataIndex: 'currentCreditLevel',
                className: 'divider',
                id: '1436883',
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
            dataSource={data?.redList}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.redList'}
            $$componentItem={{
              id: 'Table_8700198_047366',
              uid: 'Table_8700198_047366',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected51: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167022168188970500,
                  options: {
                    compId: 'Table_8700198_047366',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '3982443',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167022168471580930,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '058388',
                        pageJsonId: '537892',
                        modalname: '/member',
                        pageId: '888741696593555456',
                        paramsObj: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                        },
                        paramsObjKeyValueMap: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                        },
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167022168471569020,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '4812897',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_058388.rowId});data.MemberInfo.push(okData_058388);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167022168471587460,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '466345',
                                pageJsonId: '537892',
                                dataSourceId: 166303981671487000,
                                dataSourceName: 'MemberInfo',
                                dataSourceRelType: 'object',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '308593',
                                    code: 'custValueLevel',
                                    name: '价值等级',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '76420078',
                                    code: 'memberJoinDate_end',
                                    name: '纳入成员骨干时间结束',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '754296',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '345095',
                                    code: 'industType',
                                    name: '行业类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '3229073',
                                    code: 'custId',
                                    name: '客户ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '874366',
                                    code: 'supervise',
                                    name: '监察人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '171017',
                                    code: 'cutOffTime_begin',
                                    name: '免扰截至时间开始',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '9418766',
                                    code: 'memberType',
                                    name: '成员类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '6734957',
                                    code: 'memberJoinDate',
                                    name: '纳入成员骨干时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '190524',
                                    code: 'cutOffTime_end',
                                    name: '免扰截至时间结束',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '90892034',
                                    code: 'cutOffTime',
                                    name: '免扰截至时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '948067',
                                    code: 'memberNbr',
                                    name: '手机号码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '720127',
                                    code: 'custCode',
                                    name: '集团编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '730646',
                                    code: 'administrativeLevel',
                                    name: '行政级别',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '664057',
                                    code: 'keyManFlag',
                                    name: '关键人标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '1988677',
                                    code: 'memberJoinDate_begin',
                                    name: '纳入成员骨干时间开始',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '3531835',
                                    code: 'custStatus',
                                    name: '集团状态',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '4681609',
                                    code: 'memberName',
                                    name: '姓名',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '824869',
                                    code: 'custName',
                                    name: '集团名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '619628',
                                    code: 'job',
                                    name: '职务',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '1412322',
                                    code: 'pageNum',
                                    name: '页数',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '915963',
                                    code: 'pageSize',
                                    name: '每页数量',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '750397',
                                    code: 'childNode',
                                    name: '从表子节点',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: '',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '6670664',
                                    code: 'msisdn',
                                    name: '手机号码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'msisdn',
                                    },
                                  },
                                  {
                                    attrId: '134739',
                                    code: 'memberJoinDate',
                                    name: '纳入成员骨干时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberJoinDate',
                                    },
                                  },
                                  {
                                    attrId: '528437',
                                    code: 'groupId',
                                    name: '集团编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupId',
                                    },
                                  },
                                  {
                                    attrId: '303036',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupName',
                                    },
                                  },
                                  {
                                    attrId: '240711',
                                    code: 'groupLevelName',
                                    name: '价值等级',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupLevelName',
                                    },
                                  },
                                  {
                                    attrId: '79206',
                                    code: 'statusName',
                                    name: '集团状态',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'statusName',
                                    },
                                  },
                                  {
                                    attrId: '716457',
                                    code: 'memberType',
                                    name: '成员类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberType',
                                    },
                                  },
                                  {
                                    attrId: '55781',
                                    code: 'officialLevel',
                                    name: '行政级别',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'officialLevel',
                                    },
                                  },
                                  {
                                    attrId: '866846',
                                    code: 'keyType',
                                    name: '关键人标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'keyType',
                                    },
                                  },
                                  {
                                    attrId: '9222634',
                                    code: 'duty',
                                    name: '职务',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'duty',
                                    },
                                  },
                                  {
                                    attrId: '8583146',
                                    code: 'cutOffTime',
                                    name: '免扰截至时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'cutOffTime',
                                    },
                                  },
                                  {
                                    attrId: '82682',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'noDisturbScope',
                                    },
                                  },
                                  {
                                    attrId: '6091965',
                                    code: 'name',
                                    name: '姓名',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'name',
                                    },
                                  },
                                  {
                                    attrId: '209821',
                                    code: 'tradeclassTop',
                                    name: '行业类型ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'tradeclassTop',
                                    },
                                  },
                                  {
                                    attrId: '47717',
                                    code: 'customerId',
                                    name: '客户ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'customerId',
                                    },
                                  },
                                  {
                                    attrId: '360409',
                                    code: 'supervise',
                                    name: '看管人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'supervise',
                                    },
                                  },
                                  {
                                    attrId: '4177873',
                                    code: 'keyTypeName',
                                    name: '关键人标识名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'keyTypeName',
                                    },
                                  },
                                  {
                                    attrId: '6475557',
                                    code: 'memberTypeName',
                                    name: '成员类型名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberTypeName',
                                    },
                                  },
                                  {
                                    attrId: '14827',
                                    code: 'officialLevelName',
                                    name: '行政级别名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'officialLevelName',
                                    },
                                  },
                                  {
                                    attrId: '112952',
                                    code: 'tradeclassTopName',
                                    name: '行业类型名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'tradeclassTopName',
                                    },
                                  },
                                  {
                                    attrId: '1971066',
                                    code: 'rowId',
                                    name: '行ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'rowId',
                                    },
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                newData: '$data_4812897$',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167592282663747330,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '941526',
                                    pageJsonId: '537892',
                                    customFuncName: 'updateTitle',
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167022168471566430,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '418389',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
                              },
                              line_number: 6,
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
              eventDatagetTableSelected51.params =
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
                eventDatagetTableSelected51,
                { rowId, row, index },
                'getTableSelected',
                {
                  id: 'getTableSelected',
                  name: 'getTableSelected',
                  type: 'getTableSelected',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198_047366')}
            {...injectData}
          />
        </View>
      </View>
      <BusiComp0521965
        pageId={pageId}
        busiCompId={'922396081753948160'}
        name={'附件'}
        busiCompStates={{
          catalogCode: state?.catalogCode,
          scene: state?.scene,
          fileList: state?.itemList?.fileInfo,
        }}
        style={{ margin: '0 0 12px 0' }}
        ref={(r: any) => refs.setComponentRef(r, 'BOFramer_231933')}
        {...injectData}
      />
    </div>
  );
};

export default withPageHOC(ClsJc_0003_0002$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
