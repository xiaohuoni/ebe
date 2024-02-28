// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Button } from '@/components/factory';

import BusiComp6260603 from '@/components/BusiComp6260603';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '874478824942841856';
const FlowCreate$$Page: React.FC<PageProps> = ({
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
    const eventDatasetCompState4: any = [
      {
        type: 'setCompState',
        dataId: 166090116468754880,
        options: {
          compId: 'BOFramer_394303',
          compLib: '@/components',
          pageJsonId: 30,
          compName: 'BOFramer',
          id: '828272',
          paramsObj: { flowCode: 'CHANNEL_CITY_FLOW' },
          paramsObjKeyValueMap: { flowCode: 'CHANNEL_CITY_FLOW' },
        },
        line_number: 1,
      },
    ];
    eventDatasetCompState4.params = [] || [];
    CMDGenerator(eventDatasetCompState4, {}, 'setCompState', {
      id: 'setCompState',
      name: 'setCompState',
      type: 'setCompState',
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
          <View
            className="View_View_30_111"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_111',
              uid: 'View_30_111',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 20px 16px 20px',
              width: '100%',
              margin: '0px 0px 20px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_111')}
            {...injectData}
          >
            <Text
              name={'标题'}
              content={'流程发起'}
              textType={'h2'}
              version={'1.0'}
              visible={true}
              showHtml={false}
              $$componentItem={{
                id: 'Text_30_1111',
                uid: 'Text_30_1111',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: '32px',
                color: '#1c242e',
                margin: '0px 0px 4px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_30_1111')}
              {...injectData}
            />
            <Text
              name={'副标题'}
              content={
                '以下信息将会记录存档，请填写人员认真填写，并确保信息真实有效'
              }
              textType={'span'}
              version={'1.0'}
              visible={true}
              showHtml={false}
              $$componentItem={{
                id: 'Text_30_1112',
                uid: 'Text_30_1112',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 14,
                lineHeight: '20px',
                color: 'rgba(28,36,46,0.45)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_30_1112')}
              {...injectData}
            />
          </View>
          <BusiComp6260603
            pageId={pageId}
            name={'起草环节组件'}
            visible={true}
            busiCompId={'874216482399985664'}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_394303')}
            {...injectData}
          />
          <View
            className="View_View_30_112"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_112',
              uid: 'View_30_112',
              type: 'View',
              ...componentItem,
            }}
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              margin: '0px 0px 0px 0px',
              padding: '0px 0px 0px 0px',
              width: '100%',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_112')}
            {...injectData}
          >
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
                padding: '12px 0px 12px 0px',
                width: '100%',
                borderRadius: '0px 0px 2px 2px',
                backgroundColor: '#ffffff',
                boxShadow: '0px 1px 0px 0px #e7e8ea inset',
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
                  const eventDatahistoryGoBack3: any = [
                    {
                      type: 'historyGoBack',
                      dataId: 166009832542387040,
                      shielding: true,
                      options: {
                        compId: 'page',
                        compName: 'system',
                        id: '7030953',
                        pageJsonId: 30,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatahistoryGoBack3.params =
                    [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatahistoryGoBack3,
                    { e },
                    'historyGoBack',
                    {
                      id: 'historyGoBack',
                      name: 'historyGoBack',
                      type: 'historyGoBack',
                      platform: 'pc',
                    },
                  );
                  const eventDatahistory18: any = [
                    {
                      type: 'history',
                      dataId: 166717909379708060,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '2739694',
                        pageJsonId: 30,
                        type: 'push',
                        pathname: '/approveOrderTodo',
                        selectedType: 'page',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatahistory18.params =
                    [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDatahistory18, { e }, 'history', {
                    id: 'history',
                    name: 'history',
                    type: 'history',
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
                  const eventDatavalidateForm4: any = [
                    {
                      type: 'validateForm',
                      dataId: 166010236871887500,
                      options: {
                        compId: 'BOFramer_394303',
                        compLib: '@/components',
                        pageJsonId: 30,
                        compName: 'BOFramer',
                        id: '995227',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 166010239836703520,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '596627',
                            pageJsonId: 30,
                            value: ['表单数据', '$formValues$'],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166013373841017200,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '630242',
                            pageJsonId: 30,
                            sync: false,
                            method: 'post',
                            url: '/app/orchestration/run',
                            serviceVersionId: '882514373217726464',
                            serviceCode: 'flow_moka_start',
                            versionCode: '1.0',
                            _serviceType: 'orchestration',
                            _source: 'std',
                            _serviceId: '882514373217726464',
                            _serviceTitle: '启动摩卡流程: flow_moka_start',
                            params: 'object',
                            apiRequestSetParams: [
                              {
                                code: 'flowCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '流程编码',
                                defaultValue: '',
                                key: '1-0',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'flowCode',
                                compType: 'Input',
                                name: 'flowCode',
                                parents: [],
                                id: 'flowCode',
                                dataKey: '630242_flowCode',
                                value: {
                                  type: ['context', '$formValues$'],
                                  code: 'flowCode',
                                },
                              },
                              {
                                code: 'isSkip',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '是否跳过',
                                defaultValue: '',
                                key: '1-1',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'isSkip',
                                compType: 'Input',
                                name: 'isSkip',
                                parents: [],
                                id: 'isSkip',
                                dataKey: '630242_isSkip',
                                value: { type: ['customize'], code: 'Y' },
                              },
                              {
                                code: 'nextStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '下一个处理人',
                                defaultValue: '',
                                key: '1-2',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'nextStaff',
                                compType: 'Input',
                                name: 'nextStaff',
                                parents: [],
                                id: 'nextStaff',
                                dataKey: '630242_nextStaff',
                                value: {
                                  type: ['context', '$formValues$'],
                                  code: 'nextStaff',
                                },
                              },
                              {
                                code: 'nextTache',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '下一个环节',
                                defaultValue: '',
                                key: '1-3',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'nextTache',
                                compType: 'Input',
                                name: 'nextTache',
                                parents: [],
                                id: 'nextTache',
                                dataKey: '630242_nextTache',
                                value: {
                                  type: ['context', '$formValues$'],
                                  code: 'nextTache',
                                },
                              },
                              {
                                code: 'orderType',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '订单类型',
                                defaultValue: '',
                                key: '1-4',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'orderType',
                                compType: 'Input',
                                name: 'orderType',
                                parents: [],
                                id: 'orderType',
                                dataKey: '630242_orderType',
                                value: { type: ['customize'], code: '1100' },
                              },
                              {
                                code: 'tacheAttachments',
                                attrType: 'array',
                                children: [
                                  {
                                    code: 'listItem',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'fileId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        exampleValue: '115400',
                                        defaultValue: '',
                                        key: '1-5-0-0',
                                        parentKey: '1-5-0',
                                        parentType: 'object',
                                        _id: 'tacheAttachments.listItem.fileId',
                                        compType: 'Input',
                                        name: 'fileId',
                                        parents: [
                                          'tacheAttachments',
                                          'listItem',
                                        ],
                                        parentCode: 'listItem',
                                        id: 'tacheAttachments.listItem.fileId',
                                        dataKey:
                                          '630242_tacheAttachments.listItem.fileId',
                                      },
                                      {
                                        code: 'fileName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        exampleValue: 'test.png',
                                        defaultValue: '',
                                        key: '1-5-0-1',
                                        parentKey: '1-5-0',
                                        parentType: 'object',
                                        _id: 'tacheAttachments.listItem.fileName',
                                        compType: 'Input',
                                        name: 'fileName',
                                        parents: [
                                          'tacheAttachments',
                                          'listItem',
                                        ],
                                        parentCode: 'listItem',
                                        id: 'tacheAttachments.listItem.fileName',
                                        dataKey:
                                          '630242_tacheAttachments.listItem.fileName',
                                      },
                                      {
                                        code: 'url',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        exampleValue:
                                          'lcdp-app-platform-ystest-integration-pg/2e06f788-9ef1-4ea8-a62e-7ce2f1eeb4ac.png',
                                        defaultValue: '',
                                        key: '1-5-0-2',
                                        parentKey: '1-5-0',
                                        parentType: 'object',
                                        _id: 'tacheAttachments.listItem.url',
                                        compType: 'Input',
                                        name: 'url',
                                        parents: [
                                          'tacheAttachments',
                                          'listItem',
                                        ],
                                        parentCode: 'listItem',
                                        id: 'tacheAttachments.listItem.url',
                                        dataKey:
                                          '630242_tacheAttachments.listItem.url',
                                      },
                                    ],
                                    key: '1-5-0',
                                    parentKey: '1-5',
                                    parentType: 'array',
                                    _id: 'tacheAttachments.listItem',
                                    compType: 'Input',
                                    name: 'listItem',
                                    parents: ['tacheAttachments'],
                                    parentCode: 'tacheAttachments',
                                    id: 'tacheAttachments.listItem',
                                    dataKey: '630242_tacheAttachments.listItem',
                                  },
                                ],
                                key: '1-5',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'tacheAttachments',
                                compType: 'Input',
                                name: 'tacheAttachments',
                                parents: [],
                                id: 'tacheAttachments',
                                dataKey: '630242_tacheAttachments',
                                value: {
                                  type: ['context', '$formValues$'],
                                  code: 'tacheAttachments',
                                },
                              },
                              {
                                code: 'tacheRemark',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                key: '1-6',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'tacheRemark',
                                compType: 'Input',
                                name: 'tacheRemark',
                                parents: [],
                                id: 'tacheRemark',
                                dataKey: '630242_tacheRemark',
                                value: {
                                  type: ['customize'],
                                  code: '启动流程',
                                },
                              },
                              {
                                code: 'workOrderId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                key: '1-7',
                                parentKey: '1',
                                parentType: 'object',
                                _id: 'workOrderId',
                                compType: 'Input',
                                name: 'workOrderId',
                                parents: [],
                                id: 'workOrderId',
                                dataKey: '630242_workOrderId',
                              },
                              {
                                key: '1-8',
                                code: 'orderMesg',
                                attrType: 'object',
                                name: '新增节点',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                children: [],
                                parentKey: '1',
                                parentType: 'object',
                                preCodes: ['param', 'order'],
                                _id: 'orderMesg',
                                compType: 'Input',
                                parents: [],
                                id: 'orderMesg',
                                dataKey: '630242_orderMesg',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166013389668131780,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '841803',
                                pageJsonId: 30,
                                type: 'success',
                                value: '流程启动成功',
                              },
                              line_number: 4,
                            },
                          ],
                          callback2: [
                            {
                              type: 'showMessage',
                              dataId: 166013389877782900,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '957423',
                                pageJsonId: 30,
                                type: 'success',
                                value: '流程启动失败',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      callback2: [
                        {
                          type: 'showMessage',
                          dataId: 166013390190598600,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '195889',
                            pageJsonId: 30,
                            type: 'info',
                            value: '表单输出不完整',
                          },
                          line_number: 6,
                        },
                      ],
                    },
                  ];
                  eventDatavalidateForm4.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatavalidateForm4, { e }, 'validateForm', {
                    id: 'validateForm',
                    name: 'validateForm',
                    type: 'validateForm',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_30_121')}
                {...injectData}
              />
            </View>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FlowCreate$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
