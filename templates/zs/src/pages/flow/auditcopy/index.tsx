// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Row, Button } from '@/components/factory';

import BusiComp530274 from '@/components/BusiComp530274';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '915850728420368384';
const FlowAuditcopy$$Page: React.FC<PageProps> = ({
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
  const fillTacheRemark = (options_233843: any) => {
    const eventDatasetCompState2: any = [
      {
        type: 'setCompState',
        dataId: 166806934924247800,
        options: {
          compId: 'BOFramer_123191',
          compLib: '@/components',
          pageJsonId: 30,
          compName: 'BOFramer',
          id: '988503',
          paramsObj: {},
          paramsObjKeyValueMap: { optResultDesc: '' },
        },
        line_number: 1,
      },
    ];
    eventDatasetCompState2.params =
      [
        {
          title: '事件入参',
          name: 'options_233843',
          value: '$options_233843$',
        },
      ] || [];
    CMDGenerator(eventDatasetCompState2, { options_233843 }, 'setCompState', {
      id: 'setCompState',
      name: 'setCompState',
      type: 'setCompState',
      platform: 'undefined',
    }); // console 166807476200055840
    console.log('fill end');
    const eventDatasetCompState3: any = [
      {
        type: 'setCompState',
        dataId: 166807576850131740,
        options: {
          compId: 'BOFramer_123191',
          compLib: '@/components',
          pageJsonId: 30,
          compName: 'BOFramer',
          id: '8900405',
          paramsObj: { optResultDesc: '$options_233843.handleComment$' },
          paramsObjKeyValueMap: {
            optResultDesc: '$options_233843.handleComment$',
          },
        },
        line_number: 3,
      },
    ];
    eventDatasetCompState3.params =
      [
        {
          title: '事件入参',
          name: 'options_233843',
          value: '$options_233843$',
        },
      ] || [];
    CMDGenerator(eventDatasetCompState3, { options_233843 }, 'setCompState', {
      id: 'setCompState',
      name: 'setCompState',
      type: 'setCompState',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fillTacheRemark,
  }));

  useEffect(() => {
    const eventDatacustomActionCode300: any = [
      {
        type: 'customActionCode',
        dataId: 166936852024433920,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '419338',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var coding=urlParam.busiObjNbr;if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);success();return}}};',
          actionTitle: '设置审批单对象',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 166936874330952260,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '393443',
              pageJsonId: 30,
              value: ['======Qwoowoo====================111=============='],
            },
            line_number: 2,
          },
          {
            type: 'console',
            dataId: 166936866733476380,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '112063',
              pageJsonId: 30,
              value: ['$data.ordersSubmit$'],
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode300.params = [] || [];
    CMDGenerator(eventDatacustomActionCode300, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode301: any = [
      {
        type: 'customActionCode',
        dataId: 166391328106333060,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9657334',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_30_1122");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="58px"};',
        },
        line_number: 4,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode301.params = [] || [];
    CMDGenerator(eventDatacustomActionCode301, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    }); // console 166847562758437000
    console.log(urlParam?.scene);
    // console 166847613747020200
    console.log('zhe li  a aaaaaaa aaaaa--->');
    const eventDataifelse312: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '3877174',
            options: {
              context: '$urlParam.scene$',
              operate: 'notEmpty',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              context: '$urlParam.scene$',
              operate: '!=',
              manualValue: 'V',
            },
            condId: '4501066',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166385119415152930,
        elseIfs: [],
        line_number: 7,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166385154803742400,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '299965',
              pageJsonId: 30,
              dataSourceId: 166236345165384420,
              dataSourceName: 'globalParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '3661234',
                  code: 'workId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '工单id' },
                  value: { type: ['context', '$urlParam.workId$'], code: '' },
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
          {
            type: 'apiRequest',
            dataId: 166385155434054270,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '862299',
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
                  dataKey: '593559_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '593559_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '593559_query',
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
                      dataKey: '593559_body.workItemId',
                      value: { type: ['page', 'url'], code: 'workItemId' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '593559_body',
                },
              ],
            },
            line_number: 9,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '408733',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_862299?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166385155434039840,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166385155434019460,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166385155434028740,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '7283676',
                          pageJsonId: 30,
                          type: 'info',
                          value: '$reply_862299?.resultMsg$',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        elseIfs: [],
                        line_number: 21,
                      },
                    ],
                    condition: [],
                    elseIfs: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166385155434028740,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '7283676',
                          pageJsonId: 30,
                          type: 'info',
                          value: '$reply_862299?.resultMsg$',
                        },
                        line_number: 21,
                      },
                    ],
                  },
                ],
                line_number: 10,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '1752255',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.traceCode$',
                          operate: '==',
                          manualValue: 'APPLY_FINISH',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.firstTacheFlag$',
                          operate: '==',
                          manualValue: 'Y',
                        },
                        condId: '939063',
                        connector: '||',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166385155434043100,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166385155434091230,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166385155434008400,
                            children: [],
                            todoOptions: ['compState'],
                            options: {
                              compId: 'BOFramer_123191',
                              compLib: '@/components',
                              pageJsonId: 30,
                              compName: 'BOFramer',
                              id: '27724',
                              paramsObj: {
                                tacheCode:
                                  '$reply_862299?.resultData.traceCode$',
                                meetingType:
                                  '$reply_862299?.resultData.meetingType$',
                                endLevel: '$reply_862299?.resultData.endLevel$',
                                firstTacheFlag:
                                  '$reply_862299?.resultData.firstTacheFlag$',
                                meetingOrderType:
                                  '$reply_862299?.resultData.meetingOrderType$',
                                hidePass: 'N',
                                optResultDesc:
                                  '$reply_862299?.resultData.optResultDesc$',
                                flowCode: '$reply_862299?.resultData.flowCode$',
                                readHandleType:
                                  '$reply_862299?.resultData.readHandleType$',
                                workItemId:
                                  '$reply_862299?.resultData.workItemId$',
                              },
                              paramsObjKeyValueMap: {
                                tacheCode:
                                  '$reply_862299?.resultData.traceCode$',
                                meetingType:
                                  '$reply_862299?.resultData.meetingType$',
                                endLevel: '$reply_862299?.resultData.endLevel$',
                                firstTacheFlag:
                                  '$reply_862299?.resultData.firstTacheFlag$',
                                meetingOrderType:
                                  '$reply_862299?.resultData.meetingOrderType$',
                                hidePass: 'N',
                                optResultDesc:
                                  '$reply_862299?.resultData.optResultDesc$',
                                flowCode: '$reply_862299?.resultData.flowCode$',
                                readHandleType:
                                  '$reply_862299?.resultData.readHandleType$',
                                workItemId:
                                  '$reply_862299?.resultData.workItemId$',
                              },
                            },
                            actionObjId: 'BOFramer_123191',
                            actionObjName: 'BOFramer',
                            value: 'setCompState',
                            compLib: '@/components',
                            elseIfs: [],
                            line_number: 13,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        callback: [
                          {
                            type: 'setCompState',
                            dataId: 166385155434008400,
                            options: {
                              compId: 'BOFramer_123191',
                              compLib: '@/components',
                              pageJsonId: 30,
                              compName: 'BOFramer',
                              id: '27724',
                              paramsObj: {
                                tacheCode:
                                  '$reply_862299?.resultData.traceCode$',
                                meetingType:
                                  '$reply_862299?.resultData.meetingType$',
                                endLevel: '$reply_862299?.resultData.endLevel$',
                                firstTacheFlag:
                                  '$reply_862299?.resultData.firstTacheFlag$',
                                meetingOrderType:
                                  '$reply_862299?.resultData.meetingOrderType$',
                                hidePass: 'N',
                                optResultDesc:
                                  '$reply_862299?.resultData.optResultDesc$',
                                flowCode: '$reply_862299?.resultData.flowCode$',
                                readHandleType:
                                  '$reply_862299?.resultData.readHandleType$',
                                workItemId:
                                  '$reply_862299?.resultData.workItemId$',
                              },
                              paramsObjKeyValueMap: {
                                tacheCode:
                                  '$reply_862299?.resultData.traceCode$',
                                meetingType:
                                  '$reply_862299?.resultData.meetingType$',
                                endLevel: '$reply_862299?.resultData.endLevel$',
                                firstTacheFlag:
                                  '$reply_862299?.resultData.firstTacheFlag$',
                                meetingOrderType:
                                  '$reply_862299?.resultData.meetingOrderType$',
                                hidePass: 'N',
                                optResultDesc:
                                  '$reply_862299?.resultData.optResultDesc$',
                                flowCode: '$reply_862299?.resultData.flowCode$',
                                readHandleType:
                                  '$reply_862299?.resultData.readHandleType$',
                                workItemId:
                                  '$reply_862299?.resultData.workItemId$',
                              },
                            },
                            line_number: 13,
                          },
                        ],
                      },
                    ],
                    line_number: 11,
                    callback1: [
                      {
                        type: 'setCompState',
                        dataId: 166385155434024600,
                        options: {
                          compId: 'BOFramer_123191',
                          compLib: '@/components',
                          pageJsonId: 30,
                          compName: 'BOFramer',
                          id: '973576',
                          paramsObj: {
                            tacheCode: '$reply_862299?.resultData.traceCode$',
                            meetingType:
                              '$reply_862299?.resultData.meetingType$',
                            endLevel: '$reply_862299?.resultData.endLevel$',
                            firstTacheFlag:
                              '$reply_862299?.resultData.firstTacheFlag$',
                            meetingOrderType:
                              '$reply_862299?.resultData.meetingOrderType$',
                            hidePass: 'Y',
                            optResultDesc:
                              '$reply_862299?.resultData.optResultDesc$',
                            flowCode: '$reply_862299?.resultData.flowCode$',
                            workItemId: '$reply_862299?.resultData.workItemId$',
                          },
                          paramsObjKeyValueMap: {
                            tacheCode: '$reply_862299?.resultData.traceCode$',
                            meetingType:
                              '$reply_862299?.resultData.meetingType$',
                            endLevel: '$reply_862299?.resultData.endLevel$',
                            firstTacheFlag:
                              '$reply_862299?.resultData.firstTacheFlag$',
                            meetingOrderType:
                              '$reply_862299?.resultData.meetingOrderType$',
                            hidePass: 'Y',
                            optResultDesc:
                              '$reply_862299?.resultData.optResultDesc$',
                            flowCode: '$reply_862299?.resultData.flowCode$',
                            workItemId: '$reply_862299?.resultData.workItemId$',
                          },
                        },
                        line_number: 12,
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.firstTacheFlag$',
                          operate: '==',
                          manualValue: 'Y',
                        },
                        condId: '939063',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166867672411048160,
                    elseIfs: [],
                    line_number: 14,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166867676494136600,
                        options: {
                          compId: 'Button_3413253_309566',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '628698',
                          visible: 'true',
                        },
                        line_number: 15,
                      },
                    ],
                  },
                  {
                    type: 'setValue',
                    dataId: 166385155434043780,
                    options: {
                      compId: 'Input_576756',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Input',
                      id: '75218',
                      value: '$reply_862299?.resultData.traceCode$',
                    },
                    line_number: 16,
                    callback1: [],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '757617',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.showMeetingBtn$',
                          operate: '==',
                          manualValue: 'Y',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166385155434093820,
                    elseIfs: [],
                    line_number: 17,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166385155434057000,
                        options: {
                          compId: 'Button_3413253',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '844053',
                          visible: 'true',
                        },
                        line_number: 18,
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '981179',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.showSubmitBtn$',
                          operate: '==',
                          manualValue: 'N',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166385155434025600,
                    elseIfs: [],
                    line_number: 19,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166385155434082300,
                        options: {
                          compId: 'Button_30_121',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '8866812',
                        },
                        line_number: 20,
                      },
                    ],
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse312.params = [] || [];
    CMDGenerator(eventDataifelse312, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse313: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '363279',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.isRollback$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166572669135461120,
        elseIfs: [],
        line_number: 22,
        callback1: [
          {
            type: 'setVisible',
            dataId: 166572716548351360,
            options: {
              compId: 'Button_30_121_905546',
              compLib: 'comm',
              pageJsonId: 30,
              compName: 'Button',
              id: '759986',
              visible: 'true',
            },
            line_number: 23,
          },
        ],
      },
    ];
    eventDataifelse313.params = [] || [];
    CMDGenerator(eventDataifelse313, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
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
          id: 'View_30_1_249883',
          uid: 'View_30_1_249883',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
          height: '100%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1_249883')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11_556828',
            uid: 'VerticalView_30_11_556828',
            type: 'View',
            ...componentItem,
          }}
          style={{
            width: '100%',
            overflowY: 'auto',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11_556828')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'vertical'}
            labelAlign={'right'}
            visible={false}
            header={'标题'}
            colSpace={16}
            rowSpace={16}
            formCode={'Form_078676'}
            $$componentItem={{
              id: 'Form_078676_811245',
              uid: 'Form_078676_811245',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_078676_811245')}
            {...injectData}
          >
            <Input
              name={'状态变更触发器'}
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
              formItemIndex={0}
              fieldName={'stateTrigger'}
              disabled={false}
              visible={false}
              readOnly={false}
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
                id: 'Input_576756_8344003',
                uid: 'Input_576756_8344003',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_576756_8344003')}
              {...injectData}
            />
          </Form>
          <Row
            name={'行容器'}
            colSpan={12}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_061181_32513',
              uid: 'Row_061181_32513',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) => refs.setComponentRef(r, 'Row_061181_32513')}
            {...injectData}
          >
            <BusiComp530274
              name={'环节审批组件'}
              visible={true}
              busiCompId={'874552826138832896'}
              style={{ margin: '0 0 12px 0' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'BOFramer_123191_120668')
              }
              {...injectData}
            />
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/common/comment/listpage'}
              pageId={'907443177794400256'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Pageview_9057389_689963')
              }
              {...injectData}
              parentEngineId={parentEngineId}
            />
          </Row>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_30_1122_8434322',
              uid: 'View_30_1122_8434322',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_30_1122_8434322')}
            {...injectData}
          >
            <Button
              name={'返回'}
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
                id: 'Button_30_122_8377773',
                uid: 'Button_30_122_8377773',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatahistoryGoBack4: any = [
                  {
                    type: 'historyGoBack',
                    dataId: 166011929585577440,
                    shielding: true,
                    options: {
                      compId: 'page',
                      compName: 'system',
                      id: '901464',
                      pageJsonId: 30,
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistoryGoBack4.params =
                  [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatahistoryGoBack4, { e }, 'historyGoBack', {
                  id: 'historyGoBack',
                  name: 'historyGoBack',
                  type: 'historyGoBack',
                  platform: 'pc',
                });
                const eventDatahistory19: any = [
                  {
                    type: 'history',
                    dataId: 166718034098156350,
                    options: {
                      compId: 'history',
                      compName: 'system',
                      id: '024816',
                      pageJsonId: 30,
                      type: 'push',
                      pathname: '/approveOrderTodo',
                      selectedType: 'page',
                      pageId: '878815340415455232',
                      modalPath: '/approveOrderTodo',
                    },
                    line_number: 2,
                  },
                ];
                eventDatahistory19.params =
                  [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatahistory19, { e }, 'history', {
                  id: 'history',
                  name: 'history',
                  type: 'history',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_122_8377773')}
              {...injectData}
            />
            <Button
              name={'审批暂存'}
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
              type={'primary'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_542333_9381074',
                uid: 'Button_542333_9381074',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatasetLoading233: any = [
                  {
                    type: 'setLoading',
                    dataId: 166530499511444740,
                    options: {
                      compId: 'Button_542333_9381074',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Button',
                      id: '6889536',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading233.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading233, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDatagetFormValue8: any = [
                  {
                    type: 'getFormValue',
                    dataId: 166530520323480830,
                    options: {
                      compId: 'BOFramer_123191_120668',
                      compLib: '@/components',
                      pageJsonId: 30,
                      compName: 'BOFramer',
                      id: '059611',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166530522238570240,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '43256',
                          pageJsonId: 30,
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          serviceVersionId: '882904961025191936',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'rhin',
                          _serviceId: '891525378181304320',
                          _serviceTitle:
                            '保存临时审批意见不流转流程-tzp: saveOperateOpinion',
                          params: 'object',
                          _capabilityCode: 'saveOperateOpinion',
                          _apiCode: 'saveOperateOpinion',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '43256_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '43256_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '43256_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
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
                                  dataKey: '43256_body.tacheCode',
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
                                  dataKey: '43256_body.tacheRemark',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheRemark',
                                  },
                                },
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
                                  dataKey: '43256_body.nextStaff',
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
                                  dataKey: '43256_body.nextTache',
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
                                  dataKey: '43256_body.parentWorkId',
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
                                  dataKey: '43256_body.workItemId',
                                  value: {
                                    type: ['context', '$urlParam.workItemId$'],
                                    code: '',
                                  },
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
                                  dataKey: '43256_body.tachePass',
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
                                  dataKey: '43256_body.workId',
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
                                  dataKey: '43256_body.busiObjNbr',
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
                                  dataKey: '43256_body.endLevel',
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
                                  dataKey: '43256_body.parentWorkItemId',
                                },
                                {
                                  code: 'tacheAttachments',
                                  attrType: 'objectArray',
                                  children: [
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
                                        '43256_body.tacheAttachments.url',
                                    },
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
                                        '43256_body.tacheAttachments.fileId',
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
                                        '43256_body.tacheAttachments.fileName',
                                    },
                                  ],
                                  _id: 'body.tacheAttachments',
                                  compType: 'Input',
                                  name: 'tacheAttachments',
                                  parents: ['body'],
                                  id: 'body.tacheAttachments',
                                  dataKey: '43256_body.tacheAttachments',
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
                              dataKey: '43256_body',
                            },
                          ],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '387594',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_43256?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166530522238581900,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166564090126867000,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166564090892498300,
                                    children: [],
                                    todoOptions: ['msgType', 'value'],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '668634',
                                      pageJsonId: 30,
                                      type: 'info',
                                      value: '处理意见暂存失败',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    elseIfs: [],
                                    line_number: 7,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166564090892498300,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '668634',
                                      pageJsonId: 30,
                                      type: 'info',
                                      value: '处理意见暂存失败',
                                    },
                                    line_number: 7,
                                  },
                                ],
                              },
                            ],
                            line_number: 4,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166530522238528160,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '449923',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '处理意见暂存成功',
                                },
                                line_number: 5,
                              },
                              {
                                type: 'historyGoBack',
                                dataId: 166530522238527360,
                                options: {
                                  compId: 'historyGoBack',
                                  compName: 'system',
                                  id: '0178824',
                                  pageJsonId: 30,
                                },
                                line_number: 6,
                              },
                            ],
                          },
                          {
                            type: 'setLoading',
                            dataId: 166530522238535780,
                            options: {
                              compId: 'Button_542333_9381074',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '9415482',
                              loading: false,
                            },
                            line_number: 8,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166530522238555260,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '965022',
                              pageJsonId: 30,
                              type: 'info',
                              value: '处理意见暂存失败',
                            },
                            line_number: 9,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166530522238533700,
                            options: {
                              compId: 'Button_542333_9381074',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '5823178',
                              loading: false,
                            },
                            line_number: 10,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetFormValue8.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetFormValue8, { e }, 'getFormValue', {
                  id: 'getFormValue',
                  name: 'getFormValue',
                  type: 'getFormValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_542333_9381074')}
              {...injectData}
            />
            <Button
              name={'上一步'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              disabled={false}
              visible={false}
              classification={'default'}
              type={'primary'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_30_121_905546_8734944',
                uid: 'Button_30_121_905546_8734944',
                type: 'Button',
                ...componentItem,
              }}
              style={{ margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatahistory20: any = [
                  {
                    type: 'history',
                    dataId: 166571816327252770,
                    options: {
                      compId: 'history',
                      compName: 'system',
                      id: '0664674',
                      pageJsonId: 30,
                      pathname: '/auditOrderPrepare',
                      selectedType: 'page',
                      pageId: '884045146848604160',
                      type: 'push',
                      paramsObj: {
                        workId: '$urlParam.workId$',
                        workItemId: '$urlParam.workItemId$',
                        busiObjNbr: '$urlParam.busiObjNbr$',
                        instNbr: '$urlParam.busiObjNbr$',
                        isRollback: '$state.isRollback$',
                        scene: 'U',
                      },
                      paramsObjKeyValueMap: {
                        workId: '$urlParam.workId$',
                        workItemId: '$urlParam.workItemId$',
                        busiObjNbr: '$urlParam.busiObjNbr$',
                        instNbr: '$urlParam.busiObjNbr$',
                        isRollback: '$state.isRollback$',
                        scene: 'U',
                      },
                      modalPath: '/auditOrderPrepare',
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistory20.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatahistory20, { e }, 'history', {
                  id: 'history',
                  name: 'history',
                  type: 'history',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_30_121_905546_8734944')
              }
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
                id: 'Button_30_121_235733',
                uid: 'Button_30_121_235733',
                type: 'Button',
                ...componentItem,
              }}
              style={{ margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatavalidateForm5: any = [
                  {
                    type: 'validateForm',
                    dataId: 166867629015878530,
                    options: {
                      compId: 'BOFramer_123191_120668',
                      compLib: '@/components',
                      pageJsonId: 30,
                      compName: 'BOFramer',
                      id: '561883',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166867629015851520,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '6048286',
                          pageJsonId: 30,
                          code: 'function main(data,state,success,fail){var handleStaff={};console.log(state.ordersSubmit.svcCont);if(state.ordersSubmit.svcCont!=undefined&&state.ordersSubmit.svcCont!=null){handleStaff.handleStaffCode=formValues.nextStaff;handleStaff.handleStaffName=formValues.nextStaffName;state.ordersSubmit.svcCont.data.content.flowInfo.tacheNode=formValues.nextTache;state.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList=[];state.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList.push(handleStaff);window.localStorage.removeItem(state.ordersSubmit.svcCont.data.orderNbr)}success()};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 166867629015820960,
                            options: {
                              compId: 'Button_30_121_235733',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '132865',
                              loading: true,
                            },
                            line_number: 3,
                          },
                          {
                            type: 'apiRequest',
                            dataId: 166867629015888670,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '432126',
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
                              _capabilityCode: 'saveDataAndDealFlow',
                              _apiCode: 'saveDataAndDealFlow',
                              apiRequestSetParams: [
                                {
                                  code: 'header',
                                  name: '请求头参数',
                                  attrType: 'object',
                                  _id: 'header',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'header',
                                  dataKey: '432126_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '432126_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '432126_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
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
                                      dataKey: '432126_body.nextTache',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'nextTache',
                                      },
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
                                      dataKey: '432126_body.tacheCode',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'tacheCode',
                                      },
                                    },
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
                                      dataKey: '432126_body.nextStaff',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'nextStaff',
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
                                      dataKey: '432126_body.workItemId',
                                      value: {
                                        type: [
                                          'context',
                                          '$urlParam.workItemId$',
                                        ],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'orderMessage',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.orderMessage',
                                      compType: 'Input',
                                      name: 'orderMessage',
                                      parents: ['body'],
                                      id: 'body.orderMessage',
                                      dataKey: '432126_body.orderMessage',
                                      value: {
                                        type: ['customize'],
                                        code: '$data.ordersSubmit$',
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
                                      dataKey: '432126_body.workId',
                                      value: {
                                        type: ['context', '$urlParam.workId$'],
                                        code: '',
                                      },
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
                                      dataKey: '432126_body.tachePass',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'tachePass',
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
                                      dataKey: '432126_body.busiObjNbr',
                                      value: {
                                        type: [
                                          'context',
                                          '$urlParam.busiObjNbr$',
                                        ],
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
                                      dataKey: '432126_body.endLevel',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'endLevel',
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
                                      dataKey: '432126_body.parentWorkItemId',
                                    },
                                    {
                                      code: 'isRollback',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.isRollback',
                                      compType: 'Input',
                                      name: 'isRollback',
                                      parents: ['body'],
                                      id: 'body.isRollback',
                                      dataKey: '432126_body.isRollback',
                                      value: {
                                        type: ['customize'],
                                        code: '$urlParam.isRollback$',
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
                                      dataKey: '432126_body.tacheRemark',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'tacheRemark',
                                      },
                                    },
                                    {
                                      code: 'mergeTitle',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.mergeTitle',
                                      compType: 'Input',
                                      name: 'mergeTitle',
                                      parents: ['body'],
                                      id: 'body.mergeTitle',
                                      dataKey: '432126_body.mergeTitle',
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
                                      dataKey: '432126_body.parentWorkId',
                                    },
                                    {
                                      code: 'tacheAttachments',
                                      attrType: 'objectArray',
                                      children: [
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
                                            '432126_body.tacheAttachments.fileName',
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
                                            '432126_body.tacheAttachments.url',
                                        },
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
                                            '432126_body.tacheAttachments.fileId',
                                        },
                                      ],
                                      _id: 'body.tacheAttachments',
                                      compType: 'Input',
                                      name: 'tacheAttachments',
                                      parents: ['body'],
                                      id: 'body.tacheAttachments',
                                      dataKey: '432126_body.tacheAttachments',
                                      value: {
                                        type: ['context', '$formValues$'],
                                        code: 'tacheAttachments',
                                      },
                                    },
                                    {
                                      code: 'sameList',
                                      attrType: 'objectArray',
                                      children: [
                                        {
                                          code: 'tacheRemark',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.tacheRemark',
                                          compType: 'Input',
                                          name: 'tacheRemark',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.tacheRemark',
                                          dataKey:
                                            '432126_body.sameList.tacheRemark',
                                        },
                                        {
                                          code: 'nextStaff',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.nextStaff',
                                          compType: 'Input',
                                          name: 'nextStaff',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.nextStaff',
                                          dataKey:
                                            '432126_body.sameList.nextStaff',
                                        },
                                        {
                                          code: 'nextTache',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.nextTache',
                                          compType: 'Input',
                                          name: 'nextTache',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.nextTache',
                                          dataKey:
                                            '432126_body.sameList.nextTache',
                                        },
                                        {
                                          code: 'nextStaffName',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.nextStaffName',
                                          compType: 'Input',
                                          name: 'nextStaffName',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.nextStaffName',
                                          dataKey:
                                            '432126_body.sameList.nextStaffName',
                                        },
                                        {
                                          code: 'workItemId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.workItemId',
                                          compType: 'Input',
                                          name: 'workItemId',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.workItemId',
                                          dataKey:
                                            '432126_body.sameList.workItemId',
                                        },
                                        {
                                          code: 'busiObjNbr',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.busiObjNbr',
                                          compType: 'Input',
                                          name: 'busiObjNbr',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.busiObjNbr',
                                          dataKey:
                                            '432126_body.sameList.busiObjNbr',
                                        },
                                        {
                                          code: 'tachePass',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.tachePass',
                                          compType: 'Input',
                                          name: 'tachePass',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.tachePass',
                                          dataKey:
                                            '432126_body.sameList.tachePass',
                                        },
                                        {
                                          code: 'workId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.sameList.workId',
                                          compType: 'Input',
                                          name: 'workId',
                                          parents: ['body', 'sameList'],
                                          id: 'body.sameList.workId',
                                          dataKey:
                                            '432126_body.sameList.workId',
                                        },
                                      ],
                                      _id: 'body.sameList',
                                      compType: 'Input',
                                      name: 'sameList',
                                      parents: ['body'],
                                      id: 'body.sameList',
                                      dataKey: '432126_body.sameList',
                                    },
                                    {
                                      code: 'copyUserList',
                                      attrType: 'objectArray',
                                      children: [
                                        {
                                          code: 'userName',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.copyUserList.userName',
                                          compType: 'Input',
                                          name: 'userName',
                                          parents: ['body', 'copyUserList'],
                                          id: 'body.copyUserList.userName',
                                          dataKey:
                                            '432126_body.copyUserList.userName',
                                        },
                                        {
                                          code: 'userCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.copyUserList.userCode',
                                          compType: 'Input',
                                          name: 'userCode',
                                          parents: ['body', 'copyUserList'],
                                          id: 'body.copyUserList.userCode',
                                          dataKey:
                                            '432126_body.copyUserList.userCode',
                                        },
                                      ],
                                      _id: 'body.copyUserList',
                                      compType: 'Input',
                                      name: 'copyUserList',
                                      parents: ['body'],
                                      id: 'body.copyUserList',
                                      dataKey: '432126_body.copyUserList',
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '432126_body',
                                },
                              ],
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '387594',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_432126?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166867629015873060,
                                elseIfs: [],
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166867629015835970,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '190878',
                                      pageJsonId: 30,
                                      type: 'success',
                                      value: '流程流转成功',
                                    },
                                    line_number: 6,
                                  },
                                  {
                                    type: 'historyGoBack',
                                    dataId: 166867629015864130,
                                    shielding: true,
                                    options: {
                                      compId: 'historyGoBack',
                                      compName: 'system',
                                      id: '390192',
                                      pageJsonId: 30,
                                    },
                                    line_number: 7,
                                  },
                                  {
                                    type: 'history',
                                    dataId: 166867629015832770,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '413681',
                                      pageJsonId: 30,
                                      type: 'push',
                                      pathname: '/approveOrderTodo',
                                      selectedType: 'page',
                                    },
                                    line_number: 8,
                                  },
                                ],
                              },
                              {
                                type: 'setLoading',
                                dataId: 166867629015828930,
                                options: {
                                  compId: 'Button_30_121_235733',
                                  compLib: 'comm',
                                  pageJsonId: 30,
                                  compName: 'Button',
                                  id: '9861265',
                                  loading: false,
                                },
                                line_number: 9,
                              },
                            ],
                            callback2: [
                              {
                                type: 'showMessage',
                                dataId: 166867629015890400,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '672572',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程流转失败',
                                },
                                line_number: 10,
                              },
                              {
                                type: 'setLoading',
                                dataId: 166867629015885950,
                                options: {
                                  compId: 'Button_30_121_235733',
                                  compLib: 'comm',
                                  pageJsonId: 30,
                                  compName: 'Button',
                                  id: '126419',
                                  loading: false,
                                },
                                line_number: 11,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'console',
                        dataId: 166867629015855800,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '655907',
                          pageJsonId: 30,
                          value: ['$formValues$'],
                        },
                        line_number: 12,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166867629015878500,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '2186025',
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
                          _capabilityCode: 'saveDataAndDealFlow',
                          _apiCode: 'saveDataAndDealFlow',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '6716973_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '6716973_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '6716973_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
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
                                  dataKey: '6716973_body.tacheCode',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheCode',
                                  },
                                },
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
                                  dataKey: '6716973_body.nextStaff',
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
                                  _id: 'body.nextTache',
                                  compType: 'Input',
                                  name: 'nextTache',
                                  parents: ['body'],
                                  id: 'body.nextTache',
                                  dataKey: '6716973_body.nextTache',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'nextTache',
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
                                  dataKey: '6716973_body.workItemId',
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
                                  dataKey: '6716973_body.busiObjNbr',
                                  value: {
                                    type: ['context', '$urlParam.busiObjNbr$'],
                                    code: '',
                                  },
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
                                  dataKey: '6716973_body.tachePass',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tachePass',
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
                                  dataKey: '6716973_body.workId',
                                  value: {
                                    type: ['context', '$urlParam.workId$'],
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
                                  dataKey: '6716973_body.endLevel',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'endLevel',
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
                                  dataKey: '6716973_body.parentWorkItemId',
                                },
                                {
                                  code: 'isRollback',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.isRollback',
                                  compType: 'Input',
                                  name: 'isRollback',
                                  parents: ['body'],
                                  id: 'body.isRollback',
                                  dataKey: '6716973_body.isRollback',
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
                                  dataKey: '6716973_body.tacheRemark',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheRemark',
                                  },
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
                                  dataKey: '6716973_body.parentWorkId',
                                },
                                {
                                  code: 'tacheAttachments',
                                  attrType: 'objectArray',
                                  children: [
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
                                        '6716973_body.tacheAttachments.fileName',
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
                                        '6716973_body.tacheAttachments.url',
                                    },
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
                                        '6716973_body.tacheAttachments.fileId',
                                    },
                                  ],
                                  _id: 'body.tacheAttachments',
                                  compType: 'Input',
                                  name: 'tacheAttachments',
                                  parents: ['body'],
                                  id: 'body.tacheAttachments',
                                  dataKey: '6716973_body.tacheAttachments',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheAttachments',
                                  },
                                },
                                {
                                  code: 'copyUserList',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'userName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.copyUserList.userName',
                                      compType: 'Input',
                                      name: 'userName',
                                      parents: ['body', 'copyUserList'],
                                      id: 'body.copyUserList.userName',
                                      dataKey:
                                        '6716973_body.copyUserList.userName',
                                    },
                                    {
                                      code: 'userCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.copyUserList.userCode',
                                      compType: 'Input',
                                      name: 'userCode',
                                      parents: ['body', 'copyUserList'],
                                      id: 'body.copyUserList.userCode',
                                      dataKey:
                                        '6716973_body.copyUserList.userCode',
                                    },
                                  ],
                                  _id: 'body.copyUserList',
                                  compType: 'Input',
                                  name: 'copyUserList',
                                  parents: ['body'],
                                  id: 'body.copyUserList',
                                  dataKey: '6716973_body.copyUserList',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'copyUserList',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '6716973_body',
                            },
                          ],
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '387594',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_2186025?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166867629015848000,
                            elseIfs: [],
                            line_number: 14,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166867629015882560,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '954028',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程流转成功',
                                },
                                line_number: 15,
                              },
                              {
                                type: 'historyGoBack',
                                dataId: 166867629015813630,
                                shielding: true,
                                options: {
                                  compId: 'historyGoBack',
                                  compName: 'system',
                                  id: '538091',
                                  pageJsonId: 30,
                                },
                                line_number: 16,
                              },
                            ],
                          },
                          {
                            type: 'setLoading',
                            dataId: 166867629015849540,
                            shielding: true,
                            options: {
                              compId: 'Button_30_121_235733',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '92203',
                              loading: false,
                            },
                            line_number: 17,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166867629015818460,
                            shielding: true,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '63731',
                              pageJsonId: 30,
                              type: 'success',
                              value: '流程流转失败',
                            },
                            line_number: 18,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166867629015802750,
                            shielding: true,
                            options: {
                              compId: 'Button_30_121_235733',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '2201446',
                              loading: false,
                            },
                            line_number: 19,
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166867629015891840,
                        shielding: true,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '941055',
                          pageJsonId: 30,
                          type: 'warn',
                          value: '表单校验失败，请确认',
                        },
                        line_number: 20,
                      },
                      {
                        type: 'setLoading',
                        dataId: 166867629015850370,
                        options: {
                          compId: 'Button_30_121_235733',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '858371',
                          loading: false,
                        },
                        line_number: 21,
                      },
                    ],
                  },
                ];
                eventDatavalidateForm5.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatavalidateForm5, { e }, 'validateForm', {
                  id: 'validateForm',
                  name: 'validateForm',
                  type: 'validateForm',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_121_235733')}
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
                id: 'Button_3413253_0798622',
                uid: 'Button_3413253_0798622',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatagetFormValue9: any = [
                  {
                    type: 'getFormValue',
                    dataId: 166061974628521820,
                    options: {
                      compId: 'BOFramer_123191_120668',
                      compLib: '@/components',
                      pageJsonId: 30,
                      compName: 'BOFramer',
                      id: '264714',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166062011291171040,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '613187',
                          pageJsonId: 30,
                          value: ['$formValues$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'showCustomModal',
                        dataId: 166061975509227940,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '159445672',
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
                        line_number: 3,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 166098367341440320,
                            options: {
                              compId: 'Button_30_121_235733',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '495727',
                              visible: 'toggle',
                            },
                            line_number: 4,
                          },
                          {
                            type: 'history',
                            dataId: 166842316663452930,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '3132',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/approveOrderTodo',
                              selectedType: 'page',
                              pageId: '878815340415455232',
                              modalPath: '/approveOrderTodo',
                            },
                            line_number: 5,
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetFormValue9.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetFormValue9, { e }, 'getFormValue', {
                  id: 'getFormValue',
                  name: 'getFormValue',
                  type: 'getFormValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_3413253_0798622')
              }
              {...injectData}
            />
            <Button
              name={'作废'}
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
              readOnly={false}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_3413253_309566_452391',
                uid: 'Button_3413253_309566_452391',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatagetFormValue10: any = [
                  {
                    type: 'getFormValue',
                    dataId: 166867791710861700,
                    options: {
                      compId: 'BOFramer_123191_120668',
                      compLib: '@/components',
                      pageJsonId: 30,
                      compName: 'BOFramer',
                      id: '419596',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setLoading',
                        dataId: 166867793596446370,
                        options: {
                          compId: 'Button_3413253_309566_452391',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '884274',
                          loading: true,
                        },
                        line_number: 2,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166867794311610750,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '848768',
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
                          _capabilityCode: 'saveDataAndDealFlow',
                          _apiCode: 'saveDataAndDealFlow',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '848768_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '848768_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '848768_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
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
                                  dataKey: '848768_body.workId',
                                  value: {
                                    type: ['context', '$urlParam.workId$'],
                                    code: '',
                                  },
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
                                  dataKey: '848768_body.tachePass',
                                  value: {
                                    type: ['customize'],
                                    code: 'refuse',
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
                                  dataKey: '848768_body.busiObjNbr',
                                  value: {
                                    type: ['context', '$urlParam.busiObjNbr$'],
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
                                  dataKey: '848768_body.workItemId',
                                  value: {
                                    type: ['context', '$urlParam.workItemId$'],
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
                                  dataKey: '848768_body.endLevel',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'endLevel',
                                  },
                                },
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
                                  dataKey: '848768_body.nextStaff',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'nextStaff',
                                  },
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
                                  dataKey: '848768_body.tacheCode',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheCode',
                                  },
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
                                  dataKey: '848768_body.nextTache',
                                  value: { type: ['customize'], code: '_EOF' },
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
                                  dataKey: '848768_body.tacheRemark',
                                  value: {
                                    type: ['context', '$formValues$'],
                                    code: 'tacheRemark',
                                  },
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
                                  dataKey: '848768_body.parentWorkId',
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
                                  dataKey: '848768_body.parentWorkItemId',
                                },
                                {
                                  code: 'isRollback',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.isRollback',
                                  compType: 'Input',
                                  name: 'isRollback',
                                  parents: ['body'],
                                  id: 'body.isRollback',
                                  dataKey: '848768_body.isRollback',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'copyUserList',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'userName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.copyUserList.userName',
                                      compType: 'Input',
                                      name: 'userName',
                                      parents: ['body', 'copyUserList'],
                                      id: 'body.copyUserList.userName',
                                      dataKey:
                                        '848768_body.copyUserList.userName',
                                    },
                                    {
                                      code: 'userCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.copyUserList.userCode',
                                      compType: 'Input',
                                      name: 'userCode',
                                      parents: ['body', 'copyUserList'],
                                      id: 'body.copyUserList.userCode',
                                      dataKey:
                                        '848768_body.copyUserList.userCode',
                                    },
                                  ],
                                  _id: 'body.copyUserList',
                                  compType: 'Input',
                                  name: 'copyUserList',
                                  parents: ['body'],
                                  id: 'body.copyUserList',
                                  dataKey: '848768_body.copyUserList',
                                },
                                {
                                  code: 'orderMessage',
                                  name: '新增节点',
                                  attrType: 'object',
                                  _id: 'body.orderMessage',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.orderMessage',
                                  dataKey: '848768_body.orderMessage',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'tacheAttachments',
                                  attrType: 'objectArray',
                                  children: [
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
                                        '848768_body.tacheAttachments.fileName',
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
                                        '848768_body.tacheAttachments.url',
                                    },
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
                                        '848768_body.tacheAttachments.fileId',
                                    },
                                  ],
                                  _id: 'body.tacheAttachments',
                                  compType: 'Input',
                                  name: 'tacheAttachments',
                                  parents: ['body'],
                                  id: 'body.tacheAttachments',
                                  dataKey: '848768_body.tacheAttachments',
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
                              dataKey: '848768_body',
                            },
                          ],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '387594',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_848768?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166867794311612830,
                            elseIfs: [],
                            line_number: 4,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166867794311698500,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '540656',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程作废成功',
                                },
                                line_number: 5,
                              },
                              {
                                type: 'history',
                                dataId: 166867794311679420,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '703743',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                  modalPath: '/approveOrderTodo',
                                },
                                line_number: 6,
                              },
                            ],
                          },
                          {
                            type: 'setLoading',
                            dataId: 166867794311647600,
                            options: {
                              compId: 'Button_3413253_309566_452391',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '586045',
                              loading: false,
                            },
                            line_number: 7,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166867794311621120,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '7347884',
                              pageJsonId: 30,
                              type: 'success',
                              value: '流程作废失败',
                            },
                            line_number: 8,
                          },
                          {
                            type: 'setLoading',
                            dataId: 166867794311641150,
                            options: {
                              compId: 'Button_3413253_309566_452391',
                              compLib: 'comm',
                              pageJsonId: 30,
                              compName: 'Button',
                              id: '624095',
                              loading: false,
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetFormValue10.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetFormValue10, { e }, 'getFormValue', {
                  id: 'getFormValue',
                  name: 'getFormValue',
                  type: 'getFormValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_3413253_309566_452391')
              }
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FlowAuditcopy$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', isRollback: '' },
});
