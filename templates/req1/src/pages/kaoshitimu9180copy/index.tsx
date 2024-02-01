// 注意: 出码模块正在调试
import React from 'react';

import { Button, Layout, LoopList, Text, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_56899225__ .View_1843155 .pcfactory-row{row-gap:0px!important;}.__CustomClass_56899225__ .View_677376 .ued-loop-list-nobox{width:100%!important;}.__CustomClass_56899225__ .View_677376 .ued-loop-list-showIcon{width:100%!important;}.__CustomClass_56899225__ .View_677376 .ued-loop-list-blockSelect{align-items:baseline;}.__CustomClass_56899225__ .View_626395 .ued-loop-list-nobox{width:100%!important;}.__CustomClass_56899225__ .View_626395 .ued-loop-list-showIcon{width:100%!important;}.__CustomClass_56899225__ .View_626395 .ued-loop-list-blockSelect{align-items:baseline;}.__CustomClass_56899225__ .View_7107975 .ued-loop-list-nobox{width:100%!important;}.__CustomClass_56899225__ .View_7107975 .ued-loop-list-showIcon{width:100%!important;}.__CustomClass_56899225__ .View_7107975 .ued-loop-list-blockSelect{align-items:baseline;}.__CustomClass_56899225__ .View_1352845 .nocheck{background-color:#9b9b9b!important;}.__CustomClass_56899225__ .View_1352845 .yescheck{background-color:deepskyblue!important;}',

  '56899225',
);

const Kaoshitimu9180copy$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  attrDataMap = {},
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
    const eventDatashowModal: any = [
      {
        type: 'showModal',
        dataId: 170289377612137250,
        options: {
          compId: 'showModal',
          compName: 'system',
          id: '053419',
          pageJsonId: '56899225',
          type: 'confirm',
          okText: '确认',
          cancelText: '取消',
          title: '$data.LCDP_EXAMS.name$',
          content:
            '是否确认开始当前考试，如中途退出，在考试时长范围内，可继续考试，如继续考试将从头开始答题。',
        },
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170289400639027970,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '029948',
              pageJsonId: '56899225',
              sync: false,
              method: 'post',
              url: '/app/orchestration/run',
              serviceVersionId: '1053964452233703424',
              serviceCode: 'getExamInst',
              versionCode: '1.0',
              _serviceType: 'orchestration',
              _source: 'std',
              _sourceName: '获取考生考试实例',
              _serviceId: '1053964452233703424',
              _serviceTitle: '获取考生考试实例: getExamInst',
              valueType: 'object',
              params: 'object',
              apiRequestSetParams: [
                {
                  serviceAttrId: '188998797932',
                  key: '0',
                  code: 'root',
                  attrType: 'object',
                  name: '根节点',
                  mustFlag: 'F',
                  exampleValue: '',
                  defaultValue: '',
                  children: [
                    {
                      serviceAttrId: '6349666498141',
                      key: '0-0',
                      code: 'examId',
                      attrType: 'field',
                      name: '新增节点',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      parentKey: '0',
                      parentType: 'object',
                      type: 'string',
                      preAttrType: 'object',
                      preType: '1200',
                      preCodes: ['param'],
                      _id: 'root.examId',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.examId',
                      dataKey: '029948_root.examId',
                      value: {
                        type: ['context', '$urlParam.bizId$'],
                        code: '',
                      },
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  id: 'root',
                  dataKey: '029948_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '6723744',
                    options: {
                      context: '$reply_029948?.recordId$',
                      operate: 'empty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170289863328814100,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170289866498538780,
                    condition: [],
                    value: 'elseIf',
                    elseIfs: [],
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170289867416250720,
                        todoOptions: ['actionTitle', 'editorCode'],
                        options: {
                          compId: 'customActionCode',
                          compName: 'system',
                          id: '413852',
                          pageJsonId: '56899225',
                          code: 'function main(data,state,success,fail){var _reply_,_reply_2;state.pageShow="yes";state.timeDown=(_reply_=reply_029948)===null||_reply_===void 0?void 0:_reply_.countDown;state.recordId=(_reply_2=reply_029948)===null||_reply_2===void 0?void 0:_reply_2.recordId;success()};',
                        },
                        actionObjId: 'customActionCode',
                        actionObjName: 'system',
                        value: 'customActionCode',
                        elseIfs: [],
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 170289867416249920,
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170289867416255200,
                                todoOptions: [
                                  'timerType',
                                  'timername',
                                  'interval',
                                ],
                                options: {
                                  compId: 'setTimer',
                                  compName: 'system',
                                  id: '82401',
                                  pageJsonId: '56899225',
                                  type: 'interval',
                                  interval: 1000,
                                  timername: '考试倒计时',
                                },
                                actionObjId: 'setTimer',
                                actionObjName: 'system',
                                value: 'setTimer',
                                elseIfs: [],
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 170289867416213950,
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170289867416272350,
                                        todoOptions: [
                                          'customFuncName',
                                          'customFuncParams',
                                        ],
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '307422',
                                          pageJsonId: '56899225',
                                          customFuncName: 'countDown',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            targetTime: '1702888207700',
                                          },
                                          paramsObjKeyValueMap: {
                                            targetTime: '1702888207700',
                                          },
                                        },
                                        actionObjId: 'callSelfFunc',
                                        actionObjName: 'system',
                                        value: 'callSelfFunc',
                                        elseIfs: [],
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170289867416226660,
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                            children: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170289867416220100,
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                            children: [],
                                          },
                                        ],
                                        line_number: 8,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 7,
                              },
                            ],
                          },
                          {
                            dataName: 'callback',
                            dataId: 170289867416207000,
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                            children: [],
                          },
                        ],
                        line_number: 6,
                      },
                    ],
                    callback: [
                      {
                        type: 'customActionCode',
                        dataId: 170289867416250720,
                        options: {
                          compId: 'customActionCode',
                          compName: 'system',
                          id: '413852',
                          pageJsonId: '56899225',
                          code: 'function main(data,state,success,fail){var _reply_,_reply_2;state.pageShow="yes";state.timeDown=(_reply_=reply_029948)===null||_reply_===void 0?void 0:_reply_.countDown;state.recordId=(_reply_2=reply_029948)===null||_reply_2===void 0?void 0:_reply_2.recordId;success()};',
                        },
                        line_number: 6,
                        callback1: [
                          {
                            type: 'setTimer',
                            dataId: 170289867416255200,
                            options: {
                              compId: 'setTimer',
                              compName: 'system',
                              id: '82401',
                              pageJsonId: '56899225',
                              type: 'interval',
                              interval: 1000,
                              timername: '考试倒计时',
                            },
                            line_number: 7,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 170289867416272350,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '307422',
                                  pageJsonId: '56899225',
                                  customFuncName: 'countDown',
                                  customFuncParams: 'object',
                                  paramsObj: { targetTime: '1702888207700' },
                                  paramsObjKeyValueMap: {
                                    targetTime: '1702888207700',
                                  },
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
                    ],
                  },
                ],
                line_number: 3,
                callback1: [
                  {
                    type: 'showModal',
                    dataId: 170289869266975800,
                    options: {
                      compId: 'showModal',
                      compName: 'system',
                      id: '829998',
                      pageJsonId: '56899225',
                      type: 'error',
                      title: '$data.LCDP_EXAMS.name$',
                      content: '当前考试不存在或已失效',
                      okText: '返回',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'historyGoBack',
                        dataId: 170289875196446300,
                        options: {
                          compId: 'historyGoBack',
                          compName: 'system',
                          id: '474727',
                          pageJsonId: '56899225',
                        },
                        line_number: 5,
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'customActionCode',
                dataId: 170289443965860030,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'system',
                  id: '251774',
                  pageJsonId: '56899225',
                  code: 'function main(data,state,success,fail){var _reply_,_reply_2;state.pageShow="yes";state.timeDown=(_reply_=reply_029948)===null||_reply_===void 0?void 0:_reply_.countDown;state.recordId=(_reply_2=reply_029948)===null||_reply_2===void 0?void 0:_reply_2.recordId;success()};',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'setTimer',
                    dataId: 170289447194826620,
                    shielding: true,
                    options: {
                      compId: 'setTimer',
                      compName: 'system',
                      id: '8539347',
                      pageJsonId: '56899225',
                      type: 'interval',
                      interval: 1000,
                      timername: '考试倒计时',
                    },
                    line_number: 10,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 170289447194886270,
                        shielding: true,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2291564',
                          pageJsonId: '56899225',
                          customFuncName: 'countDown',
                          customFuncParams: 'object',
                          paramsObj: { targetTime: '1702888207700' },
                          paramsObjKeyValueMap: { targetTime: '1702888207700' },
                        },
                        line_number: 11,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'historyGoBack',
            dataId: 170289399103244770,
            options: {
              compId: 'historyGoBack',
              compName: 'system',
              id: '835689',
              pageJsonId: '56899225',
            },
            line_number: 12,
          },
        ],
      },
    ];
    eventDatashowModal.params = [] || [];
    CMDGenerator(eventDatashowModal, {}, 'showModal', {
      id: 'showModal',
      name: 'showModal',
      type: 'showModal',
      platform: 'pc',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_56899225__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(244, 248, 252, 1)' }}
        $$componentItem={{
          id: 'View_56899225_1',
          uid: 'View_56899225_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={
          `${(function () {
            if (state?.pageShow == 'yes') {
              return 1;
            } else {
              return 1;
            }
          })()}` === '3'
        }
        visible={
          `${(function () {
            if (state?.pageShow == 'yes') {
              return 1;
            } else {
              return 1;
            }
          })()}` !== '2'
        }
        readOnly={
          `${(function () {
            if (state?.pageShow == 'yes') {
              return 1;
            } else {
              return 1;
            }
          })()}` === '4'
        }
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_56899225_1'] = r)}
        {...injectData}
      >
        <View
          name={'考试标题'}
          $$componentItem={{
            id: 'View_78963',
            uid: 'View_78963',
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
            width: '100%',
          }}
          ref={(r: any) => (refs['View_78963'] = r)}
          {...injectData}
        >
          <Layout
            name={'布局容器'}
            layoutOptions={{
              grid: 12,
              colSpan: '3:6:3',
              colSpace: '16px',
              rowSpace: '16px',
            }}
            $$componentItem={{
              id: 'Layout_661242',
              uid: 'Layout_661242',
              type: 'Layout',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              position: 'relative',
              flexDirection: 'row',
              width: '100%',
              height: 'auto',
              backgroundColor: 'rgba(255, 255, 255, 0)',
            }}
            ref={(r: any) => (refs['Layout_661242'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器'}
              $$componentItem={{
                id: 'View_365364',
                uid: 'View_365364',
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
                width: '100%',
              }}
              ref={(r: any) => (refs['View_365364'] = r)}
              {...injectData}
            />
            <View
              name={'普通容器'}
              $$componentItem={{
                id: 'View_506605',
                uid: 'View_506605',
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
                width: '100%',
              }}
              ref={(r: any) => (refs['View_506605'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={data?.LCDP_EXAMS?.name}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_9011704',
                  uid: 'Text_9011704',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: '100%',
                }}
                ref={(r: any) => (refs['Text_9011704'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'普通容器'}
              $$componentItem={{
                id: 'View_9313814',
                uid: 'View_9313814',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                borderSetting: 'border-bottom 1px solid #9b9b9b',
                'border-bottom': '1px solid #9b9b9b',
              }}
              ref={(r: any) => (refs['View_9313814'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'剩余时间'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_209851',
                  uid: 'Text_209851',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: 'rgba(155, 155, 155, 1)',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_209851'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={state?.count_down}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_011144',
                  uid: 'Text_011144',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  lineHeight: '24px',
                  color: 'rgba(249, 71, 71, 1)',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_011144'] = r)}
                {...injectData}
              />
            </View>
          </Layout>
        </View>
        <Layout
          name={'布局容器'}
          layoutOptions={{
            grid: 12,
            colSpan: '9:3',
            colSpace: '16px',
            rowSpace: '16px',
          }}
          $$componentItem={{
            id: 'Layout_0330383',
            uid: 'Layout_0330383',
            type: 'Layout',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            width: '100%',
            height: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            flex: 1,
          }}
          ref={(r: any) => (refs['Layout_0330383'] = r)}
          {...injectData}
        >
          <View
            name={'答题区'}
            className={'View_1843155'}
            $$componentItem={{
              id: 'View_1843155',
              uid: 'View_1843155',
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
              width: '100%',
              overflowY: 'auto',
              height: '600px',
              overflowX: 'hidden',
            }}
            ref={(r: any) => (refs['View_1843155'] = r)}
            {...injectData}
          >
            <Layout
              name={'布局容器'}
              layoutOptions={{
                grid: 12,
                colSpan: '12:12:12',
                colSpace: '16px',
                rowSpace: '16px',
              }}
              $$componentItem={{
                id: 'Layout_609111',
                uid: 'Layout_609111',
                type: 'Layout',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'row',
                width: '100%',
                height: '0A',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                overflowY: 'visible',
              }}
              ref={(r: any) => (refs['Layout_609111'] = r)}
              {...injectData}
            >
              <View
                name={'单选题'}
                backgroundType={{
                  type: 'cleanColor',
                  color: 'rgba(255, 255, 255, 1)',
                }}
                $$componentItem={{
                  id: 'View_761736',
                  uid: 'View_761736',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  overflowY: 'visible',
                  borderRadius: '8px',
                  margin: '0px 0px 20px 0px',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) => (refs['View_761736'] = r)}
                {...injectData}
              >
                <View
                  name={'普通容器'}
                  backgroundType={{ type: 'cleanColor' }}
                  $$componentItem={{
                    id: 'View_191879',
                    uid: 'View_191879',
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
                  }}
                  ref={(r: any) => (refs['View_191879'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'一、单选题（'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_531393',
                      uid: 'Text_531393',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_531393'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'分值'}
                    content={'2'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_512853',
                      uid: 'Text_512853',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_512853'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'分/题，共'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_8835095',
                      uid: 'Text_8835095',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_8835095'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'题目个数'}
                    content={'20'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_266897',
                      uid: 'Text_266897',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_266897'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'题，'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_488512',
                      uid: 'Text_488512',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_488512'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'总分'}
                    content={'40'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_2133506',
                      uid: 'Text_2133506',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_2133506'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'分）'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_442961',
                      uid: 'Text_442961',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_442961'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'普通容器'}
                  backgroundType={{ type: 'cleanColor' }}
                  className={'View_677376'}
                  $$componentItem={{
                    id: 'View_677376',
                    uid: 'View_677376',
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
                    margin: '0px 0px 0px 20px',
                  }}
                  ref={(r: any) => (refs['View_677376'] = r)}
                  {...injectData}
                >
                  <LoopList
                    name={'循环单选列表'}
                    mode={1}
                    pieceData={[]}
                    defaultValue={[]}
                    columnNum={1}
                    span={'24'}
                    vspace={16}
                    hspace={16}
                    itemKey={'rowData'}
                    indexKey={'rowIndex'}
                    gridMode={false}
                    valueKey={'id'}
                    gridData={data?.getExamQuestrions?.multiple?.list}
                    fixedWidth={true}
                    $$componentItem={{
                      id: 'LoopList_643879',
                      uid: 'LoopList_643879',
                      type: 'LoopList',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ minHeight: 40, width: '100%' }}
                    ref={(r: any) => (refs['LoopList_643879'] = r)}
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const rowData = props[props.itemKey] ?? props?.item;
                            const rowIndex = props[props.indexKey] ?? props?.i;
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <View
                                  name={'普通容器1'}
                                  backgroundType={{
                                    type: 'cleanColor',
                                    color: 'rgba(255, 255, 255, 1)',
                                  }}
                                  $$componentItem={{
                                    id: 'View_885817',
                                    uid: 'View_885817',
                                    type: 'View',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    display: 'block',
                                    flexDirection: 'column',
                                    padding: '0px 0px 8px 0px',
                                    width: '100%',
                                    borderSetting:
                                      'border-bottom 1px solid #ebebf0',
                                    'border-bottom': '1px solid #ebebf0',
                                    margin: '0px 0px 16px 0px',
                                  }}
                                  ref={(r: any) => (refs['View_885817'] = r)}
                                  {...injectData}
                                >
                                  <View
                                    name={'题目信息'}
                                    className={'multiple' + rowIndex}
                                    backgroundType={{ type: 'cleanColor' }}
                                    $$componentItem={{
                                      id: 'View_932651',
                                      uid: 'View_932651',
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
                                    }}
                                    ref={(r: any) => (refs['View_932651'] = r)}
                                    {...injectData}
                                  >
                                    <Text
                                      name={'题目索引'}
                                      content={rowIndex + 1}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_19124',
                                        uid: 'Text_19124',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) => (refs['Text_19124'] = r)}
                                      {...injectData}
                                    />
                                    <Text
                                      name={'分割符'}
                                      content={'、'}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_946736',
                                        uid: 'Text_946736',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_946736'] = r)
                                      }
                                      {...injectData}
                                    />
                                    <Text
                                      name={'题目内容'}
                                      content={rowData?.question}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_531558',
                                        uid: 'Text_531558',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_531558'] = r)
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'选项'}
                                    backgroundType={{ type: 'cleanColor' }}
                                    $$componentItem={{
                                      id: 'View_795567',
                                      uid: 'View_795567',
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
                                      margin: '0px 0px 0px 0px',
                                    }}
                                    ref={(r: any) => (refs['View_795567'] = r)}
                                    {...injectData}
                                  >
                                    <LoopList
                                      name={'单选列表'}
                                      mode={2}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      columnNum={1}
                                      span={24}
                                      vspace={16}
                                      hspace={16}
                                      itemKey={'rowData'}
                                      indexKey={'rowIndex'}
                                      gridMode={false}
                                      valueKey={'id'}
                                      gridData={rowData?.options}
                                      backgroundType={{
                                        type: 'cleanColor',
                                        color: 'rgba(255, 255, 255, 1)',
                                      }}
                                      $$componentItem={{
                                        id: 'LoopList_194696',
                                        uid: 'LoopList_194696',
                                        type: 'LoopList',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        minHeight: 40,
                                        margin: '0px 0px 0px 0px',
                                        width: '100%',
                                        height: 'auto',
                                      }}
                                      onChange={(
                                        valueKeys: any,
                                        values: any,
                                      ) => {
                                        // console 169978318502556130
                                        console.log(values);
                                        const eventDatacustomActionCode2: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 169978691098767680,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'system',
                                                id: '458349',
                                                pageJsonId: '56899225',
                                                code: '\n\nfunction main(data, state, success, fail) {\n  console.log(values);\n\n  if (values) {\n    var answer = values[0];\n    var optionId = answer.id;\n    var questionId = answer.questionId;\n    var flag = 0;\n\n    for (var i = 0; i < data.oneAnswer.length; i++) {\n      if (data.oneAnswer[i].questionId == questionId) {\n        data.oneAnswer[i].optionId = optionId;\n        flag = 1;\n        break;\n      }\n    }\n\n    if (flag == 0) {\n      var _answer = {};\n      _answer.optionId = optionId;\n      _answer.questionId = questionId;\n      data.oneAnswer.push(_answer);\n    }\n\n    success();\n  }\n}\n\n;',
                                              },
                                              line_number: 2,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode2.params =
                                          [
                                            {
                                              title: '选中数据key',
                                              name: 'valueKeys',
                                              value: '$valueKeys$',
                                            },
                                            {
                                              title: '选中数据',
                                              name: 'values',
                                              value: '$values$',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode2,
                                          {
                                            valueKeys,
                                            values,
                                            item,
                                            i,
                                            rowData,
                                            rowIndex,
                                          },
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
                                        (refs['LoopList_194696'] = r)
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const rowData =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const rowIndex =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    name={'子选项'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color:
                                                        'rgba(236, 235, 237, 0)',
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_2561958',
                                                      uid: 'View_2561958',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
                                                    style={{
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      padding:
                                                        '5px 0px 0px 0px',
                                                      width: '100%',
                                                      flexWrap: 'nowrap',
                                                      margin: '0px 0px 0px 0px',
                                                    }}
                                                    ref={(r: any) =>
                                                      (refs['View_2561958'] = r)
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Text
                                                      name={'子选项索引'}
                                                      content={(function () {
                                                        if (rowIndex == 0) {
                                                          return 'A';
                                                        } else if (
                                                          rowIndex == 1
                                                        ) {
                                                          return 'B';
                                                        } else if (
                                                          rowIndex == 2
                                                        ) {
                                                          return 'C';
                                                        } else if (
                                                          rowIndex == 3
                                                        ) {
                                                          return 'D';
                                                        } else if (
                                                          rowIndex == 4
                                                        ) {
                                                          return 'E';
                                                        } else if (
                                                          rowIndex == 5
                                                        ) {
                                                          return 'F';
                                                        }
                                                      })()}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_0161289',
                                                        uid: 'Text_0161289',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_0161289'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                    <Text
                                                      name={'分割符'}
                                                      content={'、'}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_796423',
                                                        uid: 'Text_796423',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_796423'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                    <Text
                                                      name={'子选项内容'}
                                                      content={rowData?.option}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_632573',
                                                        uid: 'Text_632573',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_632573'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                  </View>
                                                </>
                                              );
                                            },
                                          },
                                        };
                                      }}
                                    />
                                  </View>
                                </View>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </View>
              </View>
              <View
                name={'多选题'}
                backgroundType={{
                  type: 'cleanColor',
                  color: 'rgba(255, 255, 255, 1)',
                }}
                $$componentItem={{
                  id: 'View_1886949',
                  uid: 'View_1886949',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'block',
                  width: '100%',
                  margin: '0px 0px 20px 0px',
                  borderRadius: '8px 8px 8px 8px',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) => (refs['View_1886949'] = r)}
                {...injectData}
              >
                <View
                  name={'普通容器'}
                  backgroundType={{ type: 'cleanColor' }}
                  $$componentItem={{
                    id: 'View_110402',
                    uid: 'View_110402',
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
                  }}
                  ref={(r: any) => (refs['View_110402'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'二、多选题（'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_713306',
                      uid: 'Text_713306',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_713306'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'分值'}
                    content={'4'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_9107776',
                      uid: 'Text_9107776',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_9107776'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'分/题，共'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_485303',
                      uid: 'Text_485303',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_485303'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'题目个数'}
                    content={'10'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_297235',
                      uid: 'Text_297235',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_297235'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'题，'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_74649338',
                      uid: 'Text_74649338',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_74649338'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'总分'}
                    content={'40'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_5213994',
                      uid: 'Text_5213994',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_5213994'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'分）'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_823952',
                      uid: 'Text_823952',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_823952'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'普通容器'}
                  backgroundType={{ type: 'cleanColor' }}
                  className={'View_626395'}
                  $$componentItem={{
                    id: 'View_626395',
                    uid: 'View_626395',
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
                    margin: '0px 0px 0px 20px',
                  }}
                  ref={(r: any) => (refs['View_626395'] = r)}
                  {...injectData}
                >
                  <LoopList
                    name={'循环多选列表'}
                    mode={1}
                    pieceData={[]}
                    defaultValue={[]}
                    columnNum={1}
                    span={24}
                    vspace={16}
                    hspace={16}
                    itemKey={'rowData'}
                    indexKey={'rowIndex'}
                    gridMode={false}
                    valueKey={'id'}
                    gridData={data?.getExamQuestrions?.multiples?.list}
                    fixedWidth={true}
                    $$componentItem={{
                      id: 'LoopList_179235',
                      uid: 'LoopList_179235',
                      type: 'LoopList',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ minHeight: 40, width: '100%' }}
                    ref={(r: any) => (refs['LoopList_179235'] = r)}
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const rowData = props[props.itemKey] ?? props?.item;
                            const rowIndex = props[props.indexKey] ?? props?.i;
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <View
                                  name={'普通容器2'}
                                  backgroundType={{
                                    type: 'cleanColor',
                                    color: 'rgba(255, 255, 255, 1)',
                                  }}
                                  $$componentItem={{
                                    id: 'View_389153',
                                    uid: 'View_389153',
                                    type: 'View',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    display: 'block',
                                    flexDirection: 'column',
                                    padding: '0px 0px 8px 0px',
                                    width: '100%',
                                    borderSetting:
                                      'border-bottom 1px solid #ebebf0',
                                    'border-bottom': '1px solid #ebebf0',
                                    margin: '0px 0px 16px 0px',
                                  }}
                                  ref={(r: any) => (refs['View_389153'] = r)}
                                  {...injectData}
                                >
                                  <View
                                    name={'题目信息'}
                                    className={'multiples' + rowIndex}
                                    backgroundType={{ type: 'cleanColor' }}
                                    $$componentItem={{
                                      id: 'View_221673',
                                      uid: 'View_221673',
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
                                    }}
                                    ref={(r: any) => (refs['View_221673'] = r)}
                                    {...injectData}
                                  >
                                    <Text
                                      name={'题目索引'}
                                      content={rowIndex + 1}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_755662',
                                        uid: 'Text_755662',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_755662'] = r)
                                      }
                                      {...injectData}
                                    />
                                    <Text
                                      name={'分割符'}
                                      content={'、'}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_509474',
                                        uid: 'Text_509474',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_509474'] = r)
                                      }
                                      {...injectData}
                                    />
                                    <Text
                                      name={'题目内容'}
                                      content={rowData?.question}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_6456307',
                                        uid: 'Text_6456307',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_6456307'] = r)
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'选项'}
                                    backgroundType={{ type: 'cleanColor' }}
                                    $$componentItem={{
                                      id: 'View_621442',
                                      uid: 'View_621442',
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
                                      margin: '0px 0px 0px 10px',
                                    }}
                                    ref={(r: any) => (refs['View_621442'] = r)}
                                    {...injectData}
                                  >
                                    <LoopList
                                      name={'多选列表'}
                                      mode={3}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      columnNum={1}
                                      span={24}
                                      vspace={16}
                                      hspace={16}
                                      itemKey={'rowData'}
                                      indexKey={'rowIndex'}
                                      gridMode={false}
                                      valueKey={'id'}
                                      gridData={rowData?.options}
                                      backgroundType={{
                                        type: 'cleanColor',
                                        color: 'rgba(236, 235, 237, 0)',
                                      }}
                                      $$componentItem={{
                                        id: 'LoopList_159536',
                                        uid: 'LoopList_159536',
                                        type: 'LoopList',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        minHeight: 40,
                                        margin: '0px 0px 0px 0px',
                                      }}
                                      onChange={(
                                        valueKeys: any,
                                        values: any,
                                      ) => {
                                        // console 169978330053342880
                                        console.log(values);
                                        const eventDatacustomActionCode4: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 169978788538728300,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'system',
                                                id: '614043',
                                                pageJsonId: '56899225',
                                                code: '\n\nfunction main(data, state, success, fail) {\n  if (values) {\n    var answer = values[0];\n    var optionId = "";\n    var questionId = answer.questionId;\n\n    for (var i = 0; i < data.twoAnswer.length; i++) {\n      if (data.twoAnswer[i].questionId == questionId) {\n        data.twoAnswer.splice(i, 1);\n        break;\n      }\n    }\n\n    for (var j = 0; j < values.length; j++) {\n      if (j == 0) {\n        optionId = values[j].id;\n      } else {\n        optionId = optionId + "," + values[j].id;\n      }\n    }\n\n    var _answer = {};\n    _answer.questionId = questionId;\n    _answer.optionId = optionId;\n    data.twoAnswer.push(_answer);\n    success();\n  }\n}\n\n;',
                                              },
                                              line_number: 2,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode4.params =
                                          [
                                            {
                                              title: '选中数据key',
                                              name: 'valueKeys',
                                              value: '$valueKeys$',
                                            },
                                            {
                                              title: '选中数据',
                                              name: 'values',
                                              value: '$values$',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode4,
                                          {
                                            valueKeys,
                                            values,
                                            item,
                                            i,
                                            rowData,
                                            rowIndex,
                                          },
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
                                        (refs['LoopList_159536'] = r)
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const rowData =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const rowIndex =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    name={'子选项'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color:
                                                        'rgba(236, 235, 237, 0)',
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_3891695',
                                                      uid: 'View_3891695',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
                                                    style={{
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      padding:
                                                        '10px 0px 0px 0px',
                                                      width: '100%',
                                                      flexWrap: 'nowrap',
                                                      margin: '0px 0px 0px 0px',
                                                    }}
                                                    ref={(r: any) =>
                                                      (refs['View_3891695'] = r)
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Text
                                                      name={'子选项索引'}
                                                      content={(function () {
                                                        if (rowIndex == 0) {
                                                          return 'A';
                                                        } else if (
                                                          rowIndex == 1
                                                        ) {
                                                          return 'B';
                                                        } else if (
                                                          rowIndex == 2
                                                        ) {
                                                          return 'C';
                                                        } else if (
                                                          rowIndex == 3
                                                        ) {
                                                          return 'D';
                                                        } else if (
                                                          rowIndex == 4
                                                        ) {
                                                          return 'E';
                                                        } else if (
                                                          rowIndex == 5
                                                        ) {
                                                          return 'F';
                                                        }
                                                      })()}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_796308',
                                                        uid: 'Text_796308',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_796308'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                    <Text
                                                      name={'分割符'}
                                                      content={'、'}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_487071',
                                                        uid: 'Text_487071',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_487071'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                    <Text
                                                      name={'子选项内容'}
                                                      content={rowData?.option}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_200865',
                                                        uid: 'Text_200865',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_200865'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                  </View>
                                                </>
                                              );
                                            },
                                          },
                                        };
                                      }}
                                    />
                                  </View>
                                </View>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </View>
              </View>
              <View
                name={'判断题'}
                backgroundType={{
                  type: 'cleanColor',
                  color: 'rgba(255, 255, 255, 1)',
                }}
                $$componentItem={{
                  id: 'View_822026',
                  uid: 'View_822026',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'block',
                  width: '100%',
                  borderRadius: '8px 8px 8px 8px',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) => (refs['View_822026'] = r)}
                {...injectData}
              >
                <View
                  name={'普通容器'}
                  backgroundType={{ type: 'cleanColor' }}
                  $$componentItem={{
                    id: 'View_0338295',
                    uid: 'View_0338295',
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
                  }}
                  ref={(r: any) => (refs['View_0338295'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'三、判断题（'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_94249',
                      uid: 'Text_94249',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_94249'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'分值'}
                    content={'2'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_1111578',
                      uid: 'Text_1111578',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_1111578'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'分/题，共'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_6304954',
                      uid: 'Text_6304954',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_6304954'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'题目个数'}
                    content={'10'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_117901',
                      uid: 'Text_117901',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_117901'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'题，'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_7737962',
                      uid: 'Text_7737962',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_7737962'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'总分'}
                    content={'20'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_131555',
                      uid: 'Text_131555',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_131555'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    content={'分）'}
                    textType={'h1'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_587217',
                      uid: 'Text_587217',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: 18,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_587217'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'普通容器'}
                  backgroundType={{ type: 'cleanColor' }}
                  className={'View_7107975'}
                  $$componentItem={{
                    id: 'View_7107975',
                    uid: 'View_7107975',
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
                    margin: '0px 0px 0px 20px',
                  }}
                  ref={(r: any) => (refs['View_7107975'] = r)}
                  {...injectData}
                >
                  <LoopList
                    name={'循环判断列表'}
                    mode={1}
                    pieceData={[]}
                    defaultValue={[]}
                    columnNum={1}
                    span={24}
                    vspace={16}
                    hspace={16}
                    itemKey={'rowData'}
                    indexKey={'rowIndex'}
                    gridMode={false}
                    valueKey={'id'}
                    gridData={data?.getExamQuestrions?.judge?.list}
                    fixedWidth={true}
                    $$componentItem={{
                      id: 'LoopList_762297',
                      uid: 'LoopList_762297',
                      type: 'LoopList',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ minHeight: 40, width: '100%' }}
                    ref={(r: any) => (refs['LoopList_762297'] = r)}
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const rowData = props[props.itemKey] ?? props?.item;
                            const rowIndex = props[props.indexKey] ?? props?.i;
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <View
                                  name={'普通容器3'}
                                  backgroundType={{
                                    type: 'cleanColor',
                                    color: 'rgba(255, 255, 255, 1)',
                                  }}
                                  $$componentItem={{
                                    id: 'View_8575',
                                    uid: 'View_8575',
                                    type: 'View',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    display: 'block',
                                    flexDirection: 'column',
                                    padding: '0px 0px 8px 0px',
                                    width: '100%',
                                    borderSetting:
                                      'border-bottom 1px solid #ebebf0',
                                    'border-bottom': '1px solid #ebebf0',
                                    margin: '0px 0px 16px 0px',
                                  }}
                                  ref={(r: any) => (refs['View_8575'] = r)}
                                  {...injectData}
                                >
                                  <View
                                    name={'题目信息'}
                                    className={'judge' + rowIndex}
                                    backgroundType={{ type: 'cleanColor' }}
                                    $$componentItem={{
                                      id: 'View_497281',
                                      uid: 'View_497281',
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
                                    }}
                                    ref={(r: any) => (refs['View_497281'] = r)}
                                    {...injectData}
                                  >
                                    <Text
                                      name={'题目索引'}
                                      content={rowIndex + 1}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_3906843',
                                        uid: 'Text_3906843',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_3906843'] = r)
                                      }
                                      {...injectData}
                                    />
                                    <Text
                                      name={'分割符'}
                                      content={'、'}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_172303',
                                        uid: 'Text_172303',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_172303'] = r)
                                      }
                                      {...injectData}
                                    />
                                    <Text
                                      name={'题目内容'}
                                      content={rowData?.question}
                                      textType={'h1'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_748395',
                                        uid: 'Text_748395',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        textAlign: 'left',
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        backgroundColor:
                                          'rgba(255, 255, 255,0)',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_748395'] = r)
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'选项'}
                                    backgroundType={{ type: 'cleanColor' }}
                                    $$componentItem={{
                                      id: 'View_349423',
                                      uid: 'View_349423',
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
                                      margin: '0px 0px 0px 10px',
                                    }}
                                    ref={(r: any) => (refs['View_349423'] = r)}
                                    {...injectData}
                                  >
                                    <LoopList
                                      name={'判断列表'}
                                      mode={2}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      columnNum={1}
                                      span={24}
                                      vspace={16}
                                      hspace={16}
                                      itemKey={'rowData'}
                                      indexKey={'rowIndex'}
                                      gridMode={false}
                                      valueKey={'id'}
                                      gridData={rowData?.options}
                                      backgroundType={{
                                        type: 'cleanColor',
                                        color: 'rgba(236, 235, 237, 0)',
                                      }}
                                      $$componentItem={{
                                        id: 'LoopList_51247',
                                        uid: 'LoopList_51247',
                                        type: 'LoopList',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        minHeight: 40,
                                        margin: '0px 0px 0px 0px',
                                      }}
                                      onChange={(
                                        valueKeys: any,
                                        values: any,
                                      ) => {
                                        // console 169978335980233730
                                        console.log(values);
                                        const eventDatacustomActionCode6: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 169978976314068860,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'system',
                                                id: '203197',
                                                pageJsonId: '56899225',
                                                code: '\n\nfunction main(data, state, success, fail) {\n  if (values) {\n    var answer = values[0];\n    var optionId = answer.id;\n    var questionId = answer.questionId;\n    var flag = 0;\n\n    for (var i = 0; i < data.threeAnswer.length; i++) {\n      if (data.threeAnswer[i].questionId == questionId) {\n        data.threeAnswer[i].optionId = optionId;\n        flag = 1;\n        break;\n      }\n    }\n\n    if (flag == 0) {\n      var _answer = {};\n      _answer.optionId = optionId;\n      _answer.questionId = questionId;\n      data.threeAnswer.push(_answer);\n    }\n\n    success();\n  }\n}\n\n;',
                                              },
                                              line_number: 2,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode6.params =
                                          [
                                            {
                                              title: '选中数据key',
                                              name: 'valueKeys',
                                              value: '$valueKeys$',
                                            },
                                            {
                                              title: '选中数据',
                                              name: 'values',
                                              value: '$values$',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode6,
                                          {
                                            valueKeys,
                                            values,
                                            item,
                                            i,
                                            rowData,
                                            rowIndex,
                                          },
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
                                        (refs['LoopList_51247'] = r)
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const rowData =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const rowIndex =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    name={'子选项'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color:
                                                        'rgba(236, 235, 237, 0)',
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_071155',
                                                      uid: 'View_071155',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
                                                    style={{
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      padding:
                                                        '10px 0px 0px 0px',
                                                      width: '100%',
                                                      flexWrap: 'nowrap',
                                                      margin: '0px 0px 0px 0px',
                                                    }}
                                                    ref={(r: any) =>
                                                      (refs['View_071155'] = r)
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Text
                                                      name={'子选项索引'}
                                                      content={(function () {
                                                        if (0 == rowIndex) {
                                                          return '❎';
                                                        } else {
                                                          return '✅';
                                                        }
                                                      })()}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_906983',
                                                        uid: 'Text_906983',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_906983'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                    <Text
                                                      name={'子选项内容'}
                                                      content={rowData?.option}
                                                      textType={'h1'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_241008',
                                                        uid: 'Text_241008',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        textAlign: 'left',
                                                        fontSize: 15,
                                                        lineHeight: 'autopx',
                                                        color: '#1c242e',
                                                        backgroundColor:
                                                          'rgba(255, 255, 255,0)',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_241008'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                  </View>
                                                </>
                                              );
                                            },
                                          },
                                        };
                                      }}
                                    />
                                  </View>
                                </View>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </View>
              </View>
            </Layout>
          </View>
          <View
            name={'答题卡'}
            className={'View_1352845'}
            $$componentItem={{
              id: 'View_1352845',
              uid: 'View_1352845',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: '20px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['View_1352845'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_728211',
                uid: 'View_728211',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'center',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_728211'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'答题卡'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_831294',
                  uid: 'Text_831294',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: 'rgba(155, 155, 155, 1)',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_831294'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'单选'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_0273717',
                uid: 'View_0273717',
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
                margin: '20px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_0273717'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器'}
                backgroundType={{ type: 'cleanColor' }}
                $$componentItem={{
                  id: 'View_6915038',
                  uid: 'View_6915038',
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
                }}
                ref={(r: any) => (refs['View_6915038'] = r)}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={'一、单选题'}
                  textType={'h1'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_166697',
                    uid: 'Text_166697',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    fontSize: 15,
                    lineHeight: '24px',
                    color: 'rgba(155, 155, 155, 1)',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                  }}
                  ref={(r: any) => (refs['Text_166697'] = r)}
                  {...injectData}
                />
              </View>
              <LoopList
                name={'循环列表'}
                mode={1}
                pieceData={[]}
                defaultValue={[]}
                columnNum={1}
                span={'24'}
                vspace={16}
                hspace={16}
                itemKey={'rowData'}
                indexKey={'rowIndex'}
                gridMode={false}
                gridData={data?.getExamQuestrions?.multiple?.list}
                valueKey={'id'}
                $$componentItem={{
                  id: 'LoopList_131146',
                  uid: 'LoopList_131146',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => (refs['LoopList_131146'] = r)}
                {...injectData}
                getEngineApis={() => {
                  return {
                    ...injectData.getEngineApis(),
                    MemoRenderer: {
                      renderer: null,
                      MemoLoopItem: (props: any) => {
                        const rowData = props[props.itemKey] ?? props?.item;
                        const rowIndex = props[props.indexKey] ?? props?.i;
                        const item = props[props.itemKey] ?? props?.item;
                        const i = props[props.indexKey] ?? props?.i;
                        return (
                          <>
                            <View
                              name={'圆点背景'}
                              backgroundType={{
                                type: 'cleanColor',
                                color: 'rgba(155, 155, 155, 1)',
                              }}
                              className={(function () {
                                for (
                                  var i = 0;
                                  i < data?.oneAnswer?.length;
                                  i++
                                ) {
                                  if (
                                    data?.oneAnswer[i]?.questionId ==
                                    rowData?.id
                                  ) {
                                    return 'yescheck';
                                  }
                                }
                                return 'nocheck';
                              })()}
                              $$componentItem={{
                                id: 'View_996042',
                                uid: 'View_996042',
                                type: 'View',
                                ...componentItem,
                              }}
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '0px 0px 0px 0px',
                                width: '28px',
                                height: '28px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50% 50% 50% 50%',
                                zIndex: '2',
                              }}
                              onClick={(e: any) => {
                                const eventDatagetLoopListValues2: any = [
                                  {
                                    type: 'getLoopListValues',
                                    dataId: 170288584681862400,
                                    shielding: 1,
                                    options: {
                                      compId: 'LoopList_131146',
                                      compLib: 'comm',
                                      pageJsonId: '56899225',
                                      compName: 'LoopList',
                                      id: '3026776',
                                    },
                                    line_number: 1,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 170288585353485250,
                                        shielding: 1,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'system',
                                          id: '196206',
                                          pageJsonId: '56899225',
                                          code: 'function main(data,state,success,fail){var c="multiple"+loopDataIndexs_3026776;var top=document.getElementsByClassName(c)[0].offsetTop;console.log(top);document.getElementsByClassName("View_View_1843155")[0].scrollTo({top:top,behavior:"smooth"});;};',
                                        },
                                        line_number: 2,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ];
                                eventDatagetLoopListValues2.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatagetLoopListValues2,
                                  { e, item, i, rowData, rowIndex },
                                  'getLoopListValues',
                                  {
                                    id: 'getLoopListValues',
                                    name: 'getLoopListValues',
                                    type: 'getLoopListValues',
                                    platform: 'pc',
                                  },
                                );
                                const eventDatacustomActionCode8: any = [
                                  {
                                    type: 'customActionCode',
                                    dataId: 170575901070837500,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'system',
                                      id: '3799485',
                                      pageJsonId: '56899225',
                                      code: "\n\nfunction main(data, state, success, fail) {\n  var c = 'multiple' + rowIndex;\n  var top = document.getElementsByClassName(c)[0].offsetTop;\n  console.log(top);\n  document.getElementsByClassName('View_View_1843155')[0].scrollTo({\n    top: top,\n    behavior: \"smooth\"\n  });\n  ;\n}\n\n;",
                                    },
                                    line_number: 3,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ];
                                eventDatacustomActionCode8.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatacustomActionCode8,
                                  { e, item, i, rowData, rowIndex },
                                  'customActionCode',
                                  {
                                    id: 'customActionCode',
                                    name: 'customActionCode',
                                    type: 'customActionCode',
                                    platform: 'pc',
                                  },
                                );
                              }}
                              ref={(r: any) => (refs['View_996042'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                content={1 + rowIndex}
                                textType={'span'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_6998024',
                                  uid: 'Text_6998024',
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
                                  color: 'rgba(255, 255, 255, 1)',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_6998024'] = r)}
                                {...injectData}
                              />
                            </View>
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
            <View
              name={'多选'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_362694',
                uid: 'View_362694',
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
                margin: '20px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_362694'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器'}
                backgroundType={{ type: 'cleanColor' }}
                $$componentItem={{
                  id: 'View_769273',
                  uid: 'View_769273',
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
                }}
                ref={(r: any) => (refs['View_769273'] = r)}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={'二、多选题'}
                  textType={'h1'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_381357',
                    uid: 'Text_381357',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    fontSize: 15,
                    lineHeight: '24px',
                    color: 'rgba(155, 155, 155, 1)',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                  }}
                  ref={(r: any) => (refs['Text_381357'] = r)}
                  {...injectData}
                />
              </View>
              <LoopList
                name={'循环列表'}
                mode={1}
                pieceData={[]}
                defaultValue={[]}
                columnNum={1}
                span={24}
                vspace={16}
                hspace={16}
                itemKey={'rowData'}
                indexKey={'rowIndex'}
                gridMode={false}
                gridData={data?.getExamQuestrions?.multiples?.list}
                valueKey={'id'}
                $$componentItem={{
                  id: 'LoopList_012335',
                  uid: 'LoopList_012335',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => (refs['LoopList_012335'] = r)}
                {...injectData}
                getEngineApis={() => {
                  return {
                    ...injectData.getEngineApis(),
                    MemoRenderer: {
                      renderer: null,
                      MemoLoopItem: (props: any) => {
                        const rowData = props[props.itemKey] ?? props?.item;
                        const rowIndex = props[props.indexKey] ?? props?.i;
                        const item = props[props.itemKey] ?? props?.item;
                        const i = props[props.indexKey] ?? props?.i;
                        return (
                          <>
                            <View
                              name={'圆点背景'}
                              backgroundType={{
                                type: 'cleanColor',
                                color: 'rgba(155, 155, 155, 1)',
                              }}
                              className={(function () {
                                for (
                                  var i = 0;
                                  i < data?.twoAnswer?.length;
                                  i++
                                ) {
                                  if (
                                    data?.twoAnswer[i]?.questionId ==
                                    rowData?.id
                                  ) {
                                    return 'yescheck';
                                  }
                                }
                                return 'nocheck';
                              })()}
                              $$componentItem={{
                                id: 'View_5165517',
                                uid: 'View_5165517',
                                type: 'View',
                                ...componentItem,
                              }}
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '0px 0px 0px 0px',
                                width: '28px',
                                height: '28px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50% 50% 50% 50%',
                                zIndex: '2',
                              }}
                              onClick={(e: any) => {
                                const eventDatagetLoopListValues4: any = [
                                  {
                                    type: 'getLoopListValues',
                                    dataId: 170288778424793800,
                                    shielding: 1,
                                    options: {
                                      compId: 'LoopList_012335',
                                      compLib: 'comm',
                                      pageJsonId: '56899225',
                                      compName: 'LoopList',
                                      id: '815824',
                                    },
                                    line_number: 1,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 170288778725533120,
                                        shielding: 1,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'system',
                                          id: '092212',
                                          pageJsonId: '56899225',
                                          code: "\n\nfunction main(data, state, success, fail) {\n  var c = 'multiples' + rowIndex;\n  var top = document.getElementsByClassName(c)[0].offsetTop;\n  document.getElementsByClassName('View_View_1843155')[0].scrollTo({\n    top: top,\n    behavior: \"smooth\"\n  });\n  ;\n}\n\n;",
                                        },
                                        line_number: 2,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ];
                                eventDatagetLoopListValues4.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatagetLoopListValues4,
                                  { e, item, i, rowData, rowIndex },
                                  'getLoopListValues',
                                  {
                                    id: 'getLoopListValues',
                                    name: 'getLoopListValues',
                                    type: 'getLoopListValues',
                                    platform: 'pc',
                                  },
                                );
                                const eventDatacustomActionCode10: any = [
                                  {
                                    type: 'customActionCode',
                                    dataId: 170575911627012670,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'system',
                                      id: '9939424',
                                      pageJsonId: '56899225',
                                      code: "\n\nfunction main(data, state, success, fail) {\n  var c = 'multiples' + rowIndex;\n  var top = document.getElementsByClassName(c)[0].offsetTop;\n  document.getElementsByClassName('View_View_1843155')[0].scrollTo({\n    top: top,\n    behavior: \"smooth\"\n  });\n  ;\n}\n\n;",
                                    },
                                    line_number: 3,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ];
                                eventDatacustomActionCode10.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatacustomActionCode10,
                                  { e, item, i, rowData, rowIndex },
                                  'customActionCode',
                                  {
                                    id: 'customActionCode',
                                    name: 'customActionCode',
                                    type: 'customActionCode',
                                    platform: 'pc',
                                  },
                                );
                              }}
                              ref={(r: any) => (refs['View_5165517'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                content={1 + rowIndex}
                                textType={'span'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_671401',
                                  uid: 'Text_671401',
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
                                  color: 'rgba(255, 255, 255, 1)',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_671401'] = r)}
                                {...injectData}
                              />
                            </View>
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
            <View
              name={'判断'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_33052',
                uid: 'View_33052',
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
                margin: '20px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_33052'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器'}
                backgroundType={{ type: 'cleanColor' }}
                $$componentItem={{
                  id: 'View_677016',
                  uid: 'View_677016',
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
                }}
                ref={(r: any) => (refs['View_677016'] = r)}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={'三、判断题'}
                  textType={'h1'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_738095',
                    uid: 'Text_738095',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    fontSize: 15,
                    lineHeight: '24px',
                    color: 'rgba(155, 155, 155, 1)',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                  }}
                  ref={(r: any) => (refs['Text_738095'] = r)}
                  {...injectData}
                />
              </View>
              <LoopList
                name={'循环列表'}
                mode={1}
                pieceData={[]}
                defaultValue={[]}
                columnNum={1}
                span={24}
                vspace={16}
                hspace={16}
                itemKey={'rowData'}
                indexKey={'rowIndex'}
                gridMode={false}
                gridData={data?.getExamQuestrions?.judge?.list}
                valueKey={'id'}
                $$componentItem={{
                  id: 'LoopList_518484',
                  uid: 'LoopList_518484',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => (refs['LoopList_518484'] = r)}
                {...injectData}
                getEngineApis={() => {
                  return {
                    ...injectData.getEngineApis(),
                    MemoRenderer: {
                      renderer: null,
                      MemoLoopItem: (props: any) => {
                        const rowData = props[props.itemKey] ?? props?.item;
                        const rowIndex = props[props.indexKey] ?? props?.i;
                        const item = props[props.itemKey] ?? props?.item;
                        const i = props[props.indexKey] ?? props?.i;
                        return (
                          <>
                            <View
                              name={'圆点背景'}
                              backgroundType={{
                                type: 'cleanColor',
                                color: 'rgba(155, 155, 155, 1)',
                              }}
                              className={(function () {
                                for (
                                  var i = 0;
                                  i < data?.threeAnswer?.length;
                                  i++
                                ) {
                                  if (
                                    data?.threeAnswer[i]?.questionId ==
                                    rowData?.id
                                  ) {
                                    return 'yescheck';
                                  }
                                }
                                return 'nocheck';
                              })()}
                              $$componentItem={{
                                id: 'View_977823',
                                uid: 'View_977823',
                                type: 'View',
                                ...componentItem,
                              }}
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '0px 0px 0px 0px',
                                width: '28px',
                                height: '28px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50% 50% 50% 50%',
                                zIndex: '2',
                              }}
                              onClick={(e: any) => {
                                const eventDatagetLoopListValues6: any = [
                                  {
                                    type: 'getLoopListValues',
                                    dataId: 170288781911368740,
                                    shielding: 1,
                                    options: {
                                      compId: 'LoopList_518484',
                                      compLib: 'comm',
                                      pageJsonId: '56899225',
                                      compName: 'LoopList',
                                      id: '594223',
                                    },
                                    line_number: 1,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 170288782154615360,
                                        shielding: 1,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'system',
                                          id: '0672716',
                                          pageJsonId: '56899225',
                                          code: "\n\nfunction main(data, state, success, fail) {\n  var c = 'judge' + rowIndex;\n  var top = document.getElementsByClassName(c)[0].offsetTop;\n  console.log(top);\n  document.getElementsByClassName('View_View_1843155')[0].scrollTo({\n    top: top,\n    behavior: \"smooth\"\n  });\n  ;\n}\n\n;",
                                        },
                                        line_number: 2,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ];
                                eventDatagetLoopListValues6.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatagetLoopListValues6,
                                  { e, item, i, rowData, rowIndex },
                                  'getLoopListValues',
                                  {
                                    id: 'getLoopListValues',
                                    name: 'getLoopListValues',
                                    type: 'getLoopListValues',
                                    platform: 'pc',
                                  },
                                );
                                const eventDatacustomActionCode12: any = [
                                  {
                                    type: 'customActionCode',
                                    dataId: 170575914694162980,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'system',
                                      id: '3089573',
                                      pageJsonId: '56899225',
                                      code: "\n\nfunction main(data, state, success, fail) {\n  var c = 'judge' + rowIndex;\n  var top = document.getElementsByClassName(c)[0].offsetTop;\n  console.log(top);\n  document.getElementsByClassName('View_View_1843155')[0].scrollTo({\n    top: top,\n    behavior: \"smooth\"\n  });\n  ;\n}\n\n;",
                                    },
                                    line_number: 3,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ];
                                eventDatacustomActionCode12.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatacustomActionCode12,
                                  { e, item, i, rowData, rowIndex },
                                  'customActionCode',
                                  {
                                    id: 'customActionCode',
                                    name: 'customActionCode',
                                    type: 'customActionCode',
                                    platform: 'pc',
                                  },
                                );
                              }}
                              ref={(r: any) => (refs['View_977823'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                content={1 + rowIndex}
                                textType={'span'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_3249149',
                                  uid: 'Text_3249149',
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
                                  color: 'rgba(255, 255, 255, 1)',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_3249149'] = r)}
                                {...injectData}
                              />
                            </View>
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_587047',
                uid: 'View_587047',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'center',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                margin: '100px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_587047'] = r)}
              {...injectData}
            >
              <Button
                name={'按钮'}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'primary'}
                btnIcon={'none'}
                hasIcon={false}
                shape={'default'}
                loading={false}
                btnText={'交卷'}
                $$componentItem={{
                  id: 'Button_183948',
                  uid: 'Button_183948',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 400,
                  height: '32px',
                  color: '#FFF',
                  borderSetting: 'border 1px solid ',
                  backgroundColor: '',
                  border: '1px solid ',
                }}
                onClick={(e: any) => {
                  // console 169978759368894850
                  console.log(data?.threeAnswer);
                  const eventDataapiRequest: any = [
                    {
                      type: 'apiRequest',
                      dataId: 169980478807011900,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '856345',
                        pageJsonId: '56899225',
                        sync: false,
                        method: 'post',
                        url: '/app/orchestration/run',
                        serviceVersionId: '1041006788204048384',
                        serviceCode: 'examScoring',
                        versionCode: '1.0',
                        _serviceType: 'orchestration',
                        _source: 'std',
                        _sourceName: '考生考试判分',
                        _serviceId: '1041006788204048384',
                        _serviceTitle: '考生考试判分: examScoring',
                        _requestType: 'object',
                        valueType: 'object',
                        params: 'object',
                        apiRequestSetParams: [
                          {
                            serviceAttrId: '233018691054',
                            key: '0',
                            code: 'root',
                            name: '根节点',
                            attrType: 'object',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            children: [
                              {
                                serviceAttrId: '460341032849',
                                key: '0-0',
                                parentKey: '0',
                                code: 'exam_id',
                                name: '考试id',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.exam_id',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                id: 'root.exam_id',
                                dataKey: '856345_root.exam_id',
                                value: {
                                  type: ['context', '$urlParam.bizId$'],
                                  code: '',
                                },
                              },
                              {
                                serviceAttrId: '85271900216748',
                                key: '0-1',
                                parentKey: '0',
                                code: 'record_id',
                                name: '考试记录id',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.record_id',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                id: 'root.record_id',
                                dataKey: '856345_root.record_id',
                                value: { type: ['customize'], code: '1' },
                              },
                              {
                                serviceAttrId: '083212516143',
                                busiObjectId: '1040462270148915201',
                                key: '0-2',
                                parentKey: '0',
                                code: 'oneAnswer',
                                name: '考试单选答题',
                                attrType: 'objectArray',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                children: [
                                  {
                                    serviceAttrId: '4847200567766',
                                    busiObjectAttrId: '1040463450807742466',
                                    busiObjectId: '1040462270148915201',
                                    key: '0-2-0',
                                    parentKey: '0-2',
                                    code: 'questionId',
                                    name: '题目内容',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    exampleValue: '',
                                    defaultValue: '',
                                    _id: 'root.oneAnswer.questionId',
                                    compType: 'Input',
                                    parents: ['root', 'oneAnswer'],
                                    parentType: 'objectArray',
                                    parentCode: 'oneAnswer',
                                    id: 'root.oneAnswer.questionId',
                                    dataKey: '856345_root.oneAnswer.questionId',
                                  },
                                  {
                                    serviceAttrId: '157845148209',
                                    busiObjectAttrId: '1040463450807742467',
                                    busiObjectId: '1040462270148915201',
                                    key: '0-2-1',
                                    parentKey: '0-2',
                                    code: 'optionId',
                                    name: '考试选项',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    exampleValue: '',
                                    defaultValue: '',
                                    _id: 'root.oneAnswer.optionId',
                                    compType: 'Input',
                                    parents: ['root', 'oneAnswer'],
                                    parentType: 'objectArray',
                                    parentCode: 'oneAnswer',
                                    id: 'root.oneAnswer.optionId',
                                    dataKey: '856345_root.oneAnswer.optionId',
                                  },
                                ],
                                _id: 'root.oneAnswer',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                id: 'root.oneAnswer',
                                dataKey: '856345_root.oneAnswer',
                                value: {
                                  type: ['customize'],
                                  code: '$data.oneAnswer$',
                                },
                              },
                              {
                                serviceAttrId: '751012629215',
                                key: '0-3',
                                parentKey: '0',
                                code: 'twoAnswer',
                                name: '考试多选答题',
                                attrType: 'objectArray',
                                type: '',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                children: [
                                  {
                                    serviceAttrId: '471448053288',
                                    key: '0-3-0',
                                    parentKey: '0-3',
                                    code: 'questionId',
                                    name: '题目内容',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    exampleValue: '',
                                    defaultValue: '',
                                    _id: 'root.twoAnswer.questionId',
                                    compType: 'Input',
                                    parents: ['root', 'twoAnswer'],
                                    parentType: 'objectArray',
                                    parentCode: 'twoAnswer',
                                    id: 'root.twoAnswer.questionId',
                                    dataKey: '856345_root.twoAnswer.questionId',
                                  },
                                  {
                                    serviceAttrId: '413491338912',
                                    key: '0-3-1',
                                    parentKey: '0-3',
                                    code: 'optionId',
                                    name: '考试选项',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    exampleValue: '',
                                    defaultValue: '',
                                    _id: 'root.twoAnswer.optionId',
                                    compType: 'Input',
                                    parents: ['root', 'twoAnswer'],
                                    parentType: 'objectArray',
                                    parentCode: 'twoAnswer',
                                    id: 'root.twoAnswer.optionId',
                                    dataKey: '856345_root.twoAnswer.optionId',
                                  },
                                ],
                                _id: 'root.twoAnswer',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                id: 'root.twoAnswer',
                                dataKey: '856345_root.twoAnswer',
                                value: {
                                  type: ['customize'],
                                  code: '$data.twoAnswer$',
                                },
                              },
                              {
                                serviceAttrId: '418693510948',
                                key: '0-4',
                                parentKey: '0',
                                code: 'threeAnswer',
                                name: '考试判断答题',
                                attrType: 'objectArray',
                                type: '',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                children: [
                                  {
                                    serviceAttrId: '652320149305',
                                    key: '0-4-0',
                                    parentKey: '0-4',
                                    code: 'questionId',
                                    name: '题目内容',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    exampleValue: '',
                                    defaultValue: '',
                                    _id: 'root.threeAnswer.questionId',
                                    compType: 'Input',
                                    parents: ['root', 'threeAnswer'],
                                    parentType: 'objectArray',
                                    parentCode: 'threeAnswer',
                                    id: 'root.threeAnswer.questionId',
                                    dataKey:
                                      '856345_root.threeAnswer.questionId',
                                  },
                                  {
                                    serviceAttrId: '96174332761',
                                    key: '0-4-1',
                                    parentKey: '0-4',
                                    code: 'optionId',
                                    name: '考试选项',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    exampleValue: '',
                                    defaultValue: '',
                                    _id: 'root.threeAnswer.optionId',
                                    compType: 'Input',
                                    parents: ['root', 'threeAnswer'],
                                    parentType: 'objectArray',
                                    parentCode: 'threeAnswer',
                                    id: 'root.threeAnswer.optionId',
                                    dataKey: '856345_root.threeAnswer.optionId',
                                  },
                                ],
                                _id: 'root.threeAnswer',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                id: 'root.threeAnswer',
                                dataKey: '856345_root.threeAnswer',
                                value: {
                                  type: ['customize'],
                                  code: '$data.threeAnswer$',
                                },
                              },
                            ],
                            _id: 'root',
                            compType: 'Input',
                            isRoot: true,
                            parents: [],
                            id: 'root',
                            dataKey: '856345_root',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'showModal',
                          dataId: 169980483469399600,
                          options: {
                            compId: 'showModal',
                            compName: 'system',
                            id: '69397',
                            pageJsonId: '56899225',
                            type: 'success',
                            content: '$reply_856345?.score$',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataapiRequest, { e }, 'apiRequest', {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_183948'] = r)}
                {...injectData}
              />
            </View>
          </View>
        </Layout>
      </View>
    </div>
  );
};

export default withPageHOC(Kaoshitimu9180copy$$Page, {
  pageId: '1053839668338454528',
  hasLogin: true,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    count_down: '',
    timeDown: '',
    pageShow: '',
    recordId: '',
  },
});
