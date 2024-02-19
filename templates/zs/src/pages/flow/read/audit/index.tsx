// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const FlowReadAudit$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode310: any = [
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
    eventDatacustomActionCode310.params = [] || [];
    CMDGenerator(eventDatacustomActionCode310, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
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
        ref={(r: any) => (refs['View_30_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => (refs['VerticalView_30_11'] = r)}
          {...injectData}
        >
          <View
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
            ref={(r: any) => (refs['View_30_1122'] = r)}
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
                const eventDatahistoryGoBack5: any = [
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
                eventDatahistoryGoBack5.params =
                  [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatahistoryGoBack5, { e }, 'historyGoBack', {
                  id: 'historyGoBack',
                  name: 'historyGoBack',
                  type: 'historyGoBack',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_30_122'] = r)}
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
                const eventDatasetLoading234: any = [
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
                eventDatasetLoading234.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading234, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDataapiRequest813: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166582437932054850,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '199337',
                      pageJsonId: 30,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      serviceVersionId: '882904961025191936',
                      versionCode: '1.0',
                      _serviceType: 'orchestration',
                      _source: 'rhin',
                      _serviceId: '898464857954422784',
                      _serviceTitle: '待阅处理-tzp: dealReadTask',
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
                          dataKey: '199337_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '199337_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '199337_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                              dataKey: '199337_body.workItemId',
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
                              dataKey: '199337_body.busiObjNbr',
                              value: {
                                type: ['context', '$urlParam.busiObjNbr$'],
                                code: '',
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
                              dataKey: '199337_body.workId',
                              value: {
                                type: ['context', '$urlParam.workId$'],
                                code: '',
                              },
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
                              dataKey: '199337_body.parentWorkItemId',
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
                              dataKey: '199337_body.parentWorkId',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '199337_body',
                        },
                      ],
                      actionTitle: '',
                      _capabilityCode: 'dealReadTask',
                      _apiCode: 'dealReadTask',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '323013',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_199337?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166582437932029860,
                        elseIfs: [],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166582437932016030,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '028247',
                              pageJsonId: 30,
                              type: 'success',
                              value: '阅办处理成功',
                            },
                            line_number: 4,
                          },
                          {
                            type: 'historyGoBack',
                            dataId: 166582437932045540,
                            options: {
                              compId: 'historyGoBack',
                              compName: 'system',
                              id: '369315',
                              pageJsonId: 30,
                            },
                            line_number: 5,
                          },
                        ],
                      },
                      {
                        type: 'setLoading',
                        dataId: 166582437932060220,
                        options: {
                          compId: 'Button_30_121',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '5697208',
                          loading: false,
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166582437932065440,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '346883',
                          pageJsonId: 30,
                          type: 'warn',
                          value: '阅办处理失败',
                        },
                        line_number: 7,
                      },
                      {
                        type: 'setLoading',
                        dataId: 166582437932080400,
                        options: {
                          compId: 'Button_30_121',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '066178',
                          loading: false,
                        },
                        line_number: 8,
                      },
                    ],
                  },
                ];
                eventDataapiRequest813.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest813, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_30_121'] = r)}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FlowReadAudit$$Page, {
  pageId: '898391867027853312',
  hasLogin: false,
  defaultState: {},
});
