// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Button } from '@/components/factory';

import BusiComp978237 from '@/components/BusiComp978237';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '875195010387558400';
const FlowMeetingAudit$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode311: any = [
      {
        type: 'customActionCode',
        dataId: 166391342781603140,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '5968757',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_30_1122");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="58px"};',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode311.params = [] || [];
    CMDGenerator(eventDatacustomActionCode311, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDataapiRequest645: any = [
      {
        type: 'apiRequest',
        dataId: 166098471353458020,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '035434',
          pageJsonId: 30,
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getFlowItemSimpleInfo',
          _apiCode: 'getFlowItemSimpleInfo',
          _source: 'rhin',
          _serviceId: '874132034304221184',
          _serviceTitle: '获取流程环节实例简要信息: getFlowItemSimpleInfo',
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
              dataKey: '035434_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '035434_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '035434_query',
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
                  _id: 'body.workItemId',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.workItemId',
                  dataKey: '035434_body.workItemId',
                  value: { type: ['page', 'url'], code: 'workItemId' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '035434_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'setCompState',
            dataId: 166098479823006600,
            options: {
              compId: 'BOFramer_52852726',
              compLib: '@/components',
              pageJsonId: 30,
              compName: 'BOFramer',
              id: '762907',
              paramsObj: {
                tacheCode: '$reply_035434?.resultData.traceCode$',
                meetingType: '$reply_035434?.resultData.meetingType$',
                meetingOrderType: '$reply_035434?.resultData.meetingOrderType$',
              },
              paramsObjKeyValueMap: {
                tacheCode: '$reply_035434?.resultData.traceCode$',
                meetingType: '$reply_035434?.resultData.meetingType$',
                meetingOrderType: '$reply_035434?.resultData.meetingOrderType$',
              },
            },
            line_number: 3,
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '62984',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_035434?.resultData.showMeetingBtn$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166098499017479040,
            elseIfs: [],
            line_number: 4,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166098502848649920,
                options: {
                  compId: 'Button_661945',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Button',
                  id: '8522623',
                  visible: 'true',
                },
                line_number: 5,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '8268837',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_035434?.resultData.showSubmitBtn$',
                  operate: '==',
                  manualValue: 'N',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166098499267019780,
            elseIfs: [],
            line_number: 6,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166098505873511970,
                options: {
                  compId: 'Button_30_121',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Button',
                  id: '095746',
                },
                line_number: 7,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest645.params = [] || [];
    CMDGenerator(eventDataapiRequest645, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        className="View_View_30_1"
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_30_1',
          uid: 'View_30_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1')}
        {...injectData}
      >
        <View
          className="View_VerticalView_30_11"
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11')}
          {...injectData}
        >
          <BusiComp978237
            pageId={pageId}
            name={'会签审批组件'}
            visible={true}
            busiCompId={'875193427660898304'}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_52852726')}
            {...injectData}
          />
          <View
            className="View_View_30_1122"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_30_1122',
              uid: 'View_30_1122',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px 0px 0px 0px',
              width: 'auto',
              borderRadius: '0px 0px 2px 2px',
              margin: '20px 0px 0px 0px',
              position: 'fixed',
              bottom: '0',
              left: '0',
              'background-color': '#f0f0f0',
              'z-index': '3',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_1122')}
            {...injectData}
          >
            <Button
              name={'取消'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              disabled={false}
              visible={true}
              classification={'default'}
              type={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_122',
                uid: 'Button_30_122',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatahistoryGoBack6: any = [
                  {
                    type: 'historyGoBack',
                    dataId: 166011929585577440,
                    options: {
                      compId: 'page',
                      compName: 'system',
                      id: '901464',
                      pageJsonId: 30,
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistoryGoBack6.params =
                  [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatahistoryGoBack6, { e }, 'historyGoBack', {
                  id: 'historyGoBack',
                  name: 'historyGoBack',
                  type: 'historyGoBack',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_122')}
              {...injectData}
            />
            <Button
              name={'提交'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              disabled={false}
              visible={true}
              classification={'default'}
              type={'primary'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_121',
                uid: 'Button_30_121',
                type: 'Button',
                ...componentItem,
              }}
              style={{ margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatasetLoading235: any = [
                  {
                    type: 'setLoading',
                    dataId: 166401206988085980,
                    options: {
                      compId: 'Button_30_121',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Button',
                      id: '901929',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading235.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading235, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDatashowMessage7: any = [
                  {
                    type: 'showMessage',
                    dataId: 166098614426141380,
                    shielding: true,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '382298',
                      pageJsonId: 30,
                      type: 'success',
                      value: '点击了我',
                    },
                    line_number: 2,
                  },
                ];
                eventDatashowMessage7.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatashowMessage7, { e }, 'showMessage', {
                  id: 'showMessage',
                  name: 'showMessage',
                  type: 'showMessage',
                  platform: 'pc',
                });
                const eventDatavalidateForm6: any = [
                  {
                    type: 'validateForm',
                    dataId: 166098621003647580,
                    options: {
                      compId: 'BOFramer_52852726',
                      compLib: '@/components',
                      pageJsonId: 30,
                      compName: 'BOFramer',
                      id: '9354422',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166098624326158850,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '610493',
                          pageJsonId: 30,
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          serviceVersionId: '882904961025191936',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'rhin',
                          _serviceId: '890049764606439424',
                          _serviceTitle:
                            '保存数据并流转摩卡流程-tzp: saveDataAndDealFlow',
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
                              dataKey: '610493_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '610493_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '610493_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'nextStaff',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.nextStaff',
                                  compType: 'Input',
                                  name: 'nextStaff',
                                  parents: ['body'],
                                  id: 'body.nextStaff',
                                  dataKey: '610493_body.nextStaff',
                                },
                                {
                                  code: 'nextTache',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.nextTache',
                                  compType: 'Input',
                                  name: 'nextTache',
                                  parents: ['body'],
                                  id: 'body.nextTache',
                                  dataKey: '610493_body.nextTache',
                                },
                                {
                                  code: 'parentWorkId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parentWorkId',
                                  compType: 'Input',
                                  name: 'parentWorkId',
                                  parents: ['body'],
                                  id: 'body.parentWorkId',
                                  dataKey: '610493_body.parentWorkId',
                                },
                                {
                                  code: 'parentWorkItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parentWorkItemId',
                                  compType: 'Input',
                                  name: 'parentWorkItemId',
                                  parents: ['body'],
                                  id: 'body.parentWorkItemId',
                                  dataKey: '610493_body.parentWorkItemId',
                                },
                                {
                                  code: 'tacheCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.tacheCode',
                                  compType: 'Input',
                                  name: 'tacheCode',
                                  parents: ['body'],
                                  id: 'body.tacheCode',
                                  dataKey: '610493_body.tacheCode',
                                },
                                {
                                  code: 'tachePass',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.tachePass',
                                  compType: 'Input',
                                  name: 'tachePass',
                                  parents: ['body'],
                                  id: 'body.tachePass',
                                  dataKey: '610493_body.tachePass',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tachePass',
                                  },
                                },
                                {
                                  code: 'tacheRemark',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.tacheRemark',
                                  compType: 'Input',
                                  name: 'tacheRemark',
                                  parents: ['body'],
                                  id: 'body.tacheRemark',
                                  dataKey: '610493_body.tacheRemark',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheRemark',
                                  },
                                },
                                {
                                  code: 'workId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.workId',
                                  compType: 'Input',
                                  name: 'workId',
                                  parents: ['body'],
                                  id: 'body.workId',
                                  dataKey: '610493_body.workId',
                                  value: {
                                    type: ['context', '$urlParam.workId$'],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'workItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.workItemId',
                                  compType: 'Input',
                                  name: 'workItemId',
                                  parents: ['body'],
                                  id: 'body.workItemId',
                                  dataKey: '610493_body.workItemId',
                                  value: {
                                    type: ['context', '$urlParam.workItemId$'],
                                    code: '',
                                  },
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
                                  dataKey: '610493_body.busiObjNbr',
                                  value: {
                                    type: ['context', '$urlParam.busiObjNbr$'],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'endLevel',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.endLevel',
                                  compType: 'Input',
                                  name: 'endLevel',
                                  parents: ['body'],
                                  id: 'body.endLevel',
                                  dataKey: '610493_body.endLevel',
                                },
                                {
                                  code: 'tacheAttachments',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'fileId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.tacheAttachments.fileId',
                                      compType: 'Input',
                                      name: 'fileId',
                                      parents: ['body', 'tacheAttachments'],
                                      id: 'body.tacheAttachments.fileId',
                                      dataKey:
                                        '610493_body.tacheAttachments.fileId',
                                    },
                                    {
                                      code: 'fileName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.tacheAttachments.fileName',
                                      compType: 'Input',
                                      name: 'fileName',
                                      parents: ['body', 'tacheAttachments'],
                                      id: 'body.tacheAttachments.fileName',
                                      dataKey:
                                        '610493_body.tacheAttachments.fileName',
                                    },
                                    {
                                      code: 'url',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.tacheAttachments.url',
                                      compType: 'Input',
                                      name: 'url',
                                      parents: ['body', 'tacheAttachments'],
                                      id: 'body.tacheAttachments.url',
                                      dataKey:
                                        '610493_body.tacheAttachments.url',
                                    },
                                  ],
                                  _id: 'body.tacheAttachments',
                                  compType: 'Input',
                                  name: 'tacheAttachments',
                                  parents: ['body'],
                                  id: 'body.tacheAttachments',
                                  dataKey: '610493_body.tacheAttachments',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheAttachments',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '610493_body',
                            },
                          ],
                          actionTitle: '',
                          _capabilityCode: 'saveDataAndDealFlow',
                          _apiCode: 'saveDataAndDealFlow',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '323013',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_610493?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166374778528379260,
                            elseIfs: [],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166374780994010080,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '298942',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程流转成功',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'historyGoBack',
                                dataId: 166374782186011100,
                                options: {
                                  compId: 'historyGoBack',
                                  compName: 'system',
                                  id: '7177875',
                                  pageJsonId: 30,
                                },
                                line_number: 7,
                              },
                            ],
                          },
                          {
                            type: 'setLoading',
                            dataId: 166401207821729250,
                            options: {
                              compId: 'Button_30_121',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '5216',
                              loading: false,
                            },
                            line_number: 8,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166098624326134660,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '226702',
                              pageJsonId: 30,
                              type: 'warn',
                              value: '流程流转失败',
                            },
                            line_number: 9,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166418823827491260,
                            options: {
                              compId: 'Button_30_121',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '393941',
                              loading: false,
                            },
                            line_number: 10,
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166098627800874980,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '51169733',
                          pageJsonId: 30,
                          type: 'warn',
                          value: '表单校验失败',
                        },
                        line_number: 11,
                      },
                      {
                        type: 'setLoading',
                        dataId: 166418824090670800,
                        options: {
                          compId: 'Button_30_121',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '36333',
                          loading: false,
                        },
                        line_number: 12,
                      },
                    ],
                  },
                ];
                eventDatavalidateForm6.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatavalidateForm6, { e }, 'validateForm', {
                  id: 'validateForm',
                  name: 'validateForm',
                  type: 'validateForm',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_121')}
              {...injectData}
            />
            <Button
              name={'会签'}
              shape={null}
              visible={false}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              disabled={false}
              type={'danger'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_661945',
                uid: 'Button_661945',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
              onClick={(e: any) => {
                const eventDatagetFormValue11: any = [
                  {
                    type: 'getFormValue',
                    dataId: 166184755885864400,
                    options: {
                      compId: 'BOFramer_52852726',
                      compLib: '@/components',
                      pageJsonId: 30,
                      compName: 'BOFramer',
                      id: '666899',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showCustomModal',
                        dataId: 166184757113130850,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '2786762',
                          pageJsonId: 30,
                          modalname: '/meeting/createpop',
                          pageId: '876645169117937664',
                          paramsObj: {
                            meetingType: '$formValues.meetingType$',
                            meetingOrderType: '$formValues.meetingOrderType$',
                          },
                          paramsObjKeyValueMap: {
                            meetingType: '$formValues.meetingType$',
                            meetingOrderType: '$formValues.meetingOrderType$',
                          },
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 166184757113171360,
                            options: {
                              compId: 'Button_30_121',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '3735418',
                            },
                            line_number: 3,
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetFormValue11.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetFormValue11, { e }, 'getFormValue', {
                  id: 'getFormValue',
                  name: 'getFormValue',
                  type: 'getFormValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_661945')}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FlowMeetingAudit$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
