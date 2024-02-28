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
  Text,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1061951684824096768';
const ClsCp_0019_0001$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode33: any = [
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
    eventDatacustomActionCode33.params =
      [
        {
          title: '事件入参',
          name: 'options_263015',
          value: '$options_263015$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode33,
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
    const eventDatacustomActionCode34: any = [
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
    eventDatacustomActionCode34.params =
      [
        {
          title: '事件入参',
          name: 'options_9020026',
          value: '$options_9020026$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode34,
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
    const eventDataapiRequest119: any = [
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
    eventDataapiRequest119.params = [] || [];
    CMDGenerator(eventDataapiRequest119, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse81: any = [
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
            dataId: 170480022284559230,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '725008',
              pageJsonId: '537892',
              actionTitle: '判断集团类型，获取子页面地址',
              code: 'function main(data,state,success,fail){var _state$itemList,_state$itemList$custo;console.log("\\u9875\\u9762\\u5165\\u53C2\\uFF1A",state===null||state===void 0?void 0:state.itemList);var isMultiGroup=state===null||state===void 0?void 0:(_state$itemList=state.itemList)===null||_state$itemList===void 0?void 0:(_state$itemList$custo=_state$itemList.customObject)===null||_state$itemList$custo===void 0?void 0:_state$itemList$custo.isMultiGroup;if(isMultiGroup==1){success("/CLS_CP_0019_0001/MultiPage")}else if(isMultiGroup==0){success("/CLS_CP_0019_0001/SinglePage")}else{fail("\\u6570\\u636E\\u5F02\\u5E38\\uFF01\\u65E0\\u6CD5\\u5224\\u65AD\\u96C6\\u56E2\\u7C7B\\u578B\\uFF01")}};',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 170485527210680930,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '494195',
                  pageJsonId: '537892',
                  dataSourceId: 170485524081632350,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '020686',
                      code: 'pageUrl',
                      name: '页面容器地址',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_725008$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170485583381321800,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '567471',
                      pageJsonId: '537892',
                      value: ['$data.pageData$', 'pageData'],
                    },
                    line_number: 7,
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 170480046218554560,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '418981',
                  pageJsonId: '537892',
                  type: 'error',
                  value: '$fail_725008$',
                },
                line_number: 8,
              },
              {
                type: 'callCustomPageFunc',
                dataId: 170485466426408640,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '650939',
                  pageJsonId: '537892',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                  customFuncParams: 'object',
                },
                line_number: 9,
                callback1: [],
                callback2: [],
              },
            ],
          },
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;console.log("zrj",item);var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;console.log(data.factorForm,"factorForm");data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;success()};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 10,
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
                line_number: 11,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 170487144743986850,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '81131',
                  pageJsonId: '537892',
                  dataSourceId: 167049030475764160,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '417081',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '375159',
                      code: 'paymentStatus',
                      name: '缴费情况',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '212965',
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '9907835',
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 12,
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
            line_number: 13,
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
                line_number: 14,
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
                line_number: 15,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                    'Form_063831',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                    'Form_063831',
                  ],
                },
                line_number: 16,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse81.params = [] || [];
    CMDGenerator(eventDataifelse81, {}, 'ifelse', {
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
          dividerText={'集团账户信用度及缴费期调整'}
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
                overflowY: 'hidden',
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
                  text={'集团账户信用度及缴费期调整'}
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
          <Pageview
            name={'页面容器'}
            pageViewCompState={{ customObject: state?.itemList?.customObject }}
            fieldName={'pageUrl'}
            pageSrc={data?.pageData?.pageUrl}
            style={{ height: 'auto', width: '100%' }}
            ref={(r: any) => refs.setComponentRef(r, 'Pageview_886705')}
            {...injectData}
            parentEngineId={parentEngineId}
          />
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_22304545'}
            $$componentItem={{
              id: 'Form_063831',
              uid: 'Form_063831',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {}}
            ref={(r: any) => refs.setComponentRef(r, 'Form_063831')}
            {...injectData}
          >
            <TextArea
              name={'欠费原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={0}
              fieldName={'arrearsReason'}
              value={data?.factorForm?.arrearsReason}
              $$componentItem={{
                id: 'TextArea_739311',
                uid: 'TextArea_739311',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_739311')}
              {...injectData}
            />
            <TextArea
              name={'缴费情况'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={1}
              fieldName={'paymentStatus'}
              value={data?.factorForm?.paymentStatus}
              $$componentItem={{
                id: 'TextArea_2012576',
                uid: 'TextArea_2012576',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_2012576')}
              {...injectData}
            />
            <TextArea
              name={'风险评估'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={2}
              fieldName={'risk'}
              value={data?.factorForm?.riskAssessment}
              $$componentItem={{
                id: 'TextArea_2434036',
                uid: 'TextArea_2434036',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_2434036')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              formItemIndex={3}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_75462695',
                uid: 'TextArea_75462695',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_75462695')}
              {...injectData}
            />
          </Form>
        </View>
        <View
          className="View_View_9361649"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: '#ffff80' }}
          $$componentItem={{
            id: 'View_9361649',
            uid: 'View_9361649',
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
            width: 'fit-content',
            margin: '8px 0px 4px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_9361649')}
          {...injectData}
        >
          <Text
            name={'风险提示2'}
            content={
              '1、针对ICT账户，需含ICT个性化合同及合同审批单。\n2、针对调整信用度等级，需含客户催缴函及回执单，或客户免停机申请需求单。'
            }
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_758448',
              uid: 'Text_758448',
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
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_758448')}
            {...injectData}
          />
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_866214')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
