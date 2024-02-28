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

const pageId = '945945165751009280';
const CreateRejectOrderClsCp_0007_0015$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse286: any = [
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
        dataId: 167713769912521340,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167713769912548450,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '438369',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue;if(instList[i].attrCode==="marketList"){feeObj[instList[i].attrCode]=JSON.parse(instList[i].attrValue)}}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});success(feeInfoList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167713769912536320,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '63578',
                  pageJsonId: '537892',
                  dataSourceId: 167713765714599650,
                  dataSourceName: 'feeInfo',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '8418473',
                      code: 'orderType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '271625',
                      code: 'orderTypeName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '4385753',
                      code: 'bandWidthName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0880356',
                      code: 'bandWidth',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '209441',
                      code: 'busiTypeName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '671113',
                      code: 'busiType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '81275',
                      code: 'testMonth',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '692993',
                      code: 'testMonthName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_438369$',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167713778854141950,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '3164673',
                      pageJsonId: '998316',
                      code: 'function main(data,state,success,fail){success(data.feeInfo.length)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setCompContentValue',
                        dataId: 167713783828506020,
                        options: {
                          compId: 'Text_4468414_420767',
                          compLib: 'custom',
                          pageJsonId: '998316',
                          compName: 'Text',
                          id: '881624',
                          value: '$data_3164673$',
                        },
                        line_number: 5,
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
        ],
      },
    ];
    eventDataifelse286.params = [] || [];
    CMDGenerator(eventDataifelse286, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest572: any = [
      {
        type: 'apiRequest',
        dataId: 167713785341624300,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '441032',
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
                  context: '$reply_441032?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_441032?.resultData$',
                  operate: 'notEmpty',
                },
                condId: '785758',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167713785341627940,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167713785341617280,
                children: [],
                condition: [],
                elseIfs: [],
              },
            ],
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167713785341676700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '4229847',
                  pageJsonId: '537892',
                  dataSourceId: 167713767700722800,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '0343469673',
                      code: 'fileCount',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$reply_441032?.resultData$'],
                        code: 'acceptanceSuccessCount',
                      },
                    },
                    {
                      attrId: '26545',
                      code: 'sceneCount',
                      name: '属性',
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
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest572.params = [] || [];
    CMDGenerator(eventDataapiRequest572, {}, 'apiRequest', {
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
      className="__CustomClass_998316__"
    >
      <View
        className="View_View_998316_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_998316_1',
          uid: 'View_998316_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_998316_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'互联网专线业务测试月数审批'}
          $$componentItem={{
            id: 'Divider_52558_185475_5957383',
            uid: 'Divider_52558_185475_5957383',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Divider_52558_185475_5957383')
          }
          {...injectData}
        />
        <HorizontalView
          name={'左右布局'}
          visible={true}
          formItemIndex={0}
          $$componentItem={{
            id: 'HorizontalView_004602_63707_184292',
            uid: 'HorizontalView_004602_63707_184292',
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
            refs.setComponentRef(r, 'HorizontalView_004602_63707_184292')
          }
          {...injectData}
        >
          <View
            className="View_View_339406_281032_646688"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_339406_281032_646688',
              uid: 'View_339406_281032_646688',
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
              refs.setComponentRef(r, 'View_339406_281032_646688')
            }
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              $$componentItem={{
                id: 'HorizontalView_806975_615337',
                uid: 'HorizontalView_806975_615337',
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
                refs.setComponentRef(r, 'HorizontalView_806975_615337')
              }
              {...injectData}
            >
              <View
                className="View_View_9690203_764231"
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_9690203_764231',
                  uid: 'View_9690203_764231',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_9690203_764231')}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  text={'互联网专线业务测试月数审批'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_850025',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_850025',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  onChange={(e: any) => {
                    const eventDatacustomActionCode803: any = [
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
                                          customFuncParams: '$state.sceneCode$',
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
                                            actionObjId: 'callParentCustomFunc',
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
                                            actionObjId: 'callParentCustomFunc',
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
                                          customFuncParams: '$state.sceneCode$',
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
                                  compId: [
                                    'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_850025',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Checkbox',
                                  id: '4457195',
                                  valueList: {
                                    Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_850025:
                                      '$false$',
                                  },
                                  compid: [
                                    'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_850025',
                                  ],
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
                    eventDatacustomActionCode803.params =
                      [
                        {
                          title: '复选框取值',
                          name: 'e',
                          value: '$e.target.checked$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacustomActionCode803,
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
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_850025',
                    )
                  }
                  {...injectData}
                />
              </View>
              <View
                className="View_View_200544_2254418"
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_200544_2254418',
                  uid: 'View_200544_2254418',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_200544_2254418')}
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
                    id: 'Text_35633157_932619',
                    uid: 'Text_35633157_932619',
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
                    refs.setComponentRef(r, 'Text_35633157_932619')
                  }
                  {...injectData}
                />
              </View>
              <View
                className="View_View_200544_764009_235065"
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_200544_764009_235065',
                  uid: 'View_200544_764009_235065',
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
                  refs.setComponentRef(r, 'View_200544_764009_235065')
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
                    id: 'Text_4468414_420767',
                    uid: 'Text_4468414_420767',
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
                    refs.setComponentRef(r, 'Text_4468414_420767')
                  }
                  {...injectData}
                />
              </View>
              <View
                className="View_View_741146_4429651_1314985"
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_741146_4429651_1314985',
                  uid: 'View_741146_4429651_1314985',
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
                  refs.setComponentRef(r, 'View_741146_4429651_1314985')
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
                    id: 'Text_456671_992346',
                    uid: 'Text_456671_992346',
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
                    refs.setComponentRef(r, 'Text_456671_992346')
                  }
                  {...injectData}
                />
              </View>
              <View
                className="View_View_741146_4429651_673978_949314"
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_741146_4429651_673978_949314',
                  uid: 'View_741146_4429651_673978_949314',
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
                  refs.setComponentRef(r, 'View_741146_4429651_673978_949314')
                }
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={data?.pageData?.fileCount}
                  textType={'span'}
                  version={'1.0'}
                  visible={true}
                  showHtml={false}
                  fieldName={'fileCount'}
                  $$componentItem={{
                    id: 'Text_269337_825089',
                    uid: 'Text_269337_825089',
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
                    refs.setComponentRef(r, 'Text_269337_825089')
                  }
                  {...injectData}
                />
              </View>
            </HorizontalView>
          </View>
        </HorizontalView>
        <View
          className="View_View_6806553_618556_511396"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_618556_511396',
            uid: 'View_6806553_618556_511396',
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
            refs.setComponentRef(r, 'View_6806553_618556_511396')
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
                title: '类型',
                key: 'orderTypeName',
                dataIndex: 'orderTypeName',
                className: '',
                id: '136854',
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
                key: 'busiTypeName',
                dataIndex: 'busiTypeName',
                id: '939446',
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
                title: '带宽',
                key: 'bandWidthName',
                dataIndex: 'bandWidthName',
                className: 'divider',
                id: '262435',
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
                title: '测试月数',
                key: 'testMonthName',
                dataIndex: 'testMonthName',
                className: 'divider',
                id: '807358',
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
              id: 'Table_8700198_489761_029143_2441613',
              uid: 'Table_8700198_489761_029143_2441613',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_8700198_489761_029143_2441613')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreateRejectOrderClsCp_0007_0015$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { itemList: '', sceneCode: '', busiObjNbr: '' },
});
