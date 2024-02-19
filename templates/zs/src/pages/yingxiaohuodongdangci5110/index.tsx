// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Form,
  Input,
  Select,
  TextArea,
  TreeSelect,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Yingxiaohuodongdangci5110$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
}) => {
  const onOk = () => {
    const eventDatavalidateCurrentForm55: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167333673087005470,
        options: {
          compId: 'Form_31_1121_886082',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '87632',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167333673622956320,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '183557',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){success(Form_31_1121_886082)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 167333686597483170,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '456475',
                  pageJsonId: 31,
                  params: '$data_183557$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 167333688731778370,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '8377234',
                  pageJsonId: 31,
                },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm55.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm55, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal68: any = [
      {
        type: 'closeModal',
        dataId: '199418_1',
        options: { compId: 'page', compName: 'page', id: '96693601' },
        line_number: 1,
      },
    ];
    eventDatacloseModal68.params = [] || [];
    CMDGenerator(eventDatacloseModal68, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    // console 167806823545533660
    console.log('档次下拉数据', state);
    const eventDatacustomActionCode291: any = [
      {
        type: 'customActionCode',
        dataId: 167878494369376350,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '6622386',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){if(state.tacheStatus=="0"||state.tacheStatus=="1"){success([{label:"\\u901A\\u8FC7",value:"1"},{label:"\\u4E0D\\u901A\\u8FC7",value:"0"}])}else{success([{label:"\\u901A\\u8FC7",value:"1"},{label:"\\u4E0D\\u901A\\u8FC7",value:"3"}])}};',
          actionTitle: '构建处理意见下拉选项',
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167878512663560130,
            options: {
              compId: 'Select_31_11213_350488',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '7255299',
              data: '$data_6622386$',
              labelKey: 'label',
              valueKey: 'value',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode291.params = [] || [];
    CMDGenerator(eventDatacustomActionCode291, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatareloadData: any = [
      {
        type: 'reloadData',
        dataId: 167713664499269570,
        shielding: true,
        options: {
          compId: 'TreeSelect_4164986',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'TreeSelect',
          id: '305455',
          data: '$state.gradeSelectorListData.activityTypeList$',
          labelKey: 'actName',
          nodeValueKey: 'actType',
          childrenKey: 'actChildList',
          selectable: 'checkAble',
        },
        line_number: 4,
        callback1: [],
      },
    ];
    eventDatareloadData.params = [] || [];
    CMDGenerator(eventDatareloadData, {}, 'reloadData', {
      id: 'reloadData',
      name: 'reloadData',
      type: 'reloadData',
      platform: 'undefined',
    });
    const eventDatacustomActionCode292: any = [
      {
        type: 'customActionCode',
        dataId: 168984333171750820,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8467891',
          pageJsonId: 31,
          actionTitle: '活动类型调整',
          code: 'function main(data,state,success,fail){var _state$gradeSelectorL;var transform=function _transform(arr){return arr===null||arr===void 0?void 0:arr.map(function(item){var _item$actChildList;if((item===null||item===void 0?void 0:(_item$actChildList=item.actChildList)===null||_item$actChildList===void 0?void 0:_item$actChildList.length)>0){item.checkAble=false;item.actChildList=_transform(item.actChildList)}else{item.checkAble=true}return item})};var activityTypeList=transform((state===null||state===void 0?void 0:(_state$gradeSelectorL=state.gradeSelectorListData)===null||_state$gradeSelectorL===void 0?void 0:_state$gradeSelectorL.activityTypeList)||[]);console.log("\\u7535\\u6E20-\\u6D3B\\u52A8\\u7C7B\\u578B-activityTypeList",activityTypeList);success(activityTypeList)};',
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadData',
            dataId: 168984334224298850,
            options: {
              compId: 'TreeSelect_4164986',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'TreeSelect',
              id: '460492',
              data: '$data_8467891$',
              labelKey: 'actName',
              nodeValueKey: 'actType',
              childrenKey: 'actChildList',
              selectable: 'checkAble',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode292.params = [] || [];
    CMDGenerator(eventDatacustomActionCode292, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatareloadSelectData14: any = [
      {
        type: 'reloadSelectData',
        dataId: 167713673995824060,
        options: {
          compId: 'Select_31_11218_751786',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Select',
          id: '996215',
          data: '$state.gradeSelectorListData.busiZoneList$',
          valueKey: 'typeKey',
          labelKey: 'typeName',
        },
        line_number: 7,
        callback1: [],
      },
    ];
    eventDatareloadSelectData14.params = [] || [];
    CMDGenerator(eventDatareloadSelectData14, {}, 'reloadSelectData', {
      id: 'reloadSelectData',
      name: 'reloadSelectData',
      type: 'reloadSelectData',
      platform: 'undefined',
    });
    const eventDatareloadSelectData15: any = [
      {
        type: 'reloadSelectData',
        dataId: 167713677713236130,
        options: {
          compId: 'Select_31_11218_751786_9747682',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Select',
          id: '4622372',
          data: '$state.gradeSelectorListData.cityZoneList$',
          labelKey: 'typeName',
          valueKey: 'typeKey',
        },
        line_number: 8,
        callback1: [],
      },
    ];
    eventDatareloadSelectData15.params = [] || [];
    CMDGenerator(eventDatareloadSelectData15, {}, 'reloadSelectData', {
      id: 'reloadSelectData',
      name: 'reloadSelectData',
      type: 'reloadSelectData',
      platform: 'undefined',
    });
    const eventDatasetCurrentFormValues4: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 167713995466335740,
        options: {
          compId: 'Form_31_1121_886082',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '040193',
          params: '$state.promotionPlanData$',
        },
        line_number: 9,
      },
    ];
    eventDatasetCurrentFormValues4.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues4, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDataifelse243: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '7161023',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneType$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167324679750433380,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167324684137587140,
            children: [
              {
                dataName: 'action',
                dataId: 167876155900467070,
                children: [],
                todoOptions: ['required', 'selectComp'],
                options: {
                  compId: ['Select_31_11213_350488'],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Input',
                  id: '4976168',
                  required: 'true',
                  compid: ['Select_31_11213_350488'],
                },
                actionObjId: 'Input_31_11211_0223722',
                actionObjName: 'Input',
                value: 'setRequired',
                compLib: 'comm',
                line_number: 12,
              },
              {
                dataName: 'condition',
                dataId: 167636074621701060,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167636076137863780,
                    children: [],
                    todoOptions: ['disabled', 'selectComp'],
                    options: {
                      compId: ['TreeSelect_4164986', 'Select_31_11213_350488'],
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Form',
                      id: '596968',
                      disabled: '',
                      compid: ['TreeSelect_4164986', 'Select_31_11213_350488'],
                    },
                    actionObjId: 'Form_31_1121_886082',
                    actionObjName: 'Form',
                    value: 'setDisable',
                    compLib: 'comm',
                    line_number: 14,
                  },
                  {
                    dataName: 'action',
                    dataId: 167876143050613800,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167876143050615520,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 167876143050643600,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167876143050615550,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'TreeSelect_4164986',
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '7092708',
                                  required: 'true',
                                },
                                actionObjId: 'TreeSelect_4164986',
                                actionObjName: 'TreeSelect',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 17,
                              },
                            ],
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 167876143623022720,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 16787614410722572,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'TreeSelect_4164986',
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '7566931',
                                      required: '',
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 18,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 16787614410722572,
                                    options: {
                                      compId: 'TreeSelect_4164986',
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '7566931',
                                      required: '',
                                    },
                                    line_number: 18,
                                  },
                                ],
                              },
                            ],
                            condition: [
                              {
                                condId: '532112',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$value_090488$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '通过',
                            line_number: 16,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: [],
                    options: {
                      compId: 'Select_31_11213_350488',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '090488',
                    },
                    actionObjId: 'Select_31_11213_350488',
                    actionObjName: 'Select',
                    value: 'getValue',
                    compLib: 'comm',
                    line_number: 15,
                  },
                  {
                    dataName: 'action',
                    dataId: 168672307679018270,
                    children: [],
                    todoOptions: ['valueArray'],
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '519576',
                      pageJsonId: 31,
                      value: ['弹窗-策划环节'],
                    },
                    actionObjId: 'debug',
                    actionObjName: 'system',
                    value: 'console',
                    line_number: 19,
                  },
                ],
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 167636084852161300,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167636087776187360,
                        children: [],
                        todoOptions: ['disabled', 'selectComp'],
                        options: {
                          compId: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Form',
                          id: '960284',
                          disabled: '',
                          compid: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                        },
                        actionObjId: 'Form_31_1121_886082',
                        actionObjName: 'Form',
                        value: 'setDisable',
                        compLib: 'comm',
                        line_number: 20,
                      },
                      {
                        dataName: 'action',
                        dataId: 167876145746509200,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167876145746535900,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 167876145746526560,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167876145746574940,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '8770136',
                                      required: 'true',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 23,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 167876145746571900,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167876145746553570,
                                        children: [],
                                        todoOptions: ['required', 'selectComp'],
                                        options: {
                                          compId: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: 31,
                                          compName: 'TreeSelect',
                                          id: '319746',
                                          required: '',
                                          compid: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                        },
                                        actionObjId: 'TreeSelect_4164986',
                                        actionObjName: 'TreeSelect',
                                        value: 'setRequired',
                                        compLib: 'comm',
                                        line_number: 24,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'setRequired',
                                        dataId: 167876145746553570,
                                        options: {
                                          compId: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: 31,
                                          compName: 'TreeSelect',
                                          id: '319746',
                                          required: '',
                                          compid: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                        },
                                        line_number: 24,
                                      },
                                    ],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '532112',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$value_87531745$',
                                      operate: '==',
                                      manualValue: '1',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                desc: '通过',
                                line_number: 22,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                          },
                        ],
                        todoOptions: [],
                        options: {
                          compId: 'Select_31_11213_350488',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '87531745',
                        },
                        actionObjId: 'Select_31_11213_350488',
                        actionObjName: 'Select',
                        value: 'getValue',
                        compLib: 'comm',
                        line_number: 21,
                      },
                      {
                        dataName: 'action',
                        dataId: 168672310653584830,
                        children: [],
                        todoOptions: ['valueArray'],
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '861482',
                          pageJsonId: 31,
                          value: ['弹窗-省经办'],
                        },
                        actionObjId: 'debug',
                        actionObjName: 'system',
                        value: 'console',
                        line_number: 25,
                      },
                    ],
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.tacheStatus$',
                          operate: '==',
                          manualValue: '2',
                        },
                        condId: '2600634',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    desc: '省经办',
                    callback: [
                      {
                        type: 'setDisable',
                        dataId: 167636087776187360,
                        options: {
                          compId: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Form',
                          id: '960284',
                          disabled: '',
                          compid: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                        },
                        line_number: 20,
                      },
                      {
                        type: 'getValue',
                        dataId: 167876145746509200,
                        options: {
                          compId: 'Select_31_11213_350488',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '87531745',
                        },
                        line_number: 21,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '532112',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$value_87531745$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167876145746526560,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 167876145746571900,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167876145746553570,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '319746',
                                      required: '',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 24,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 167876145746553570,
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '319746',
                                      required: '',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    line_number: 24,
                                  },
                                ],
                              },
                            ],
                            line_number: 22,
                            callback1: [
                              {
                                type: 'setRequired',
                                dataId: 167876145746574940,
                                options: {
                                  compId: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '8770136',
                                  required: 'true',
                                  compid: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                },
                                line_number: 23,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'console',
                        dataId: 168672310653584830,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '861482',
                          pageJsonId: 31,
                          value: ['弹窗-省经办'],
                        },
                        line_number: 25,
                      },
                    ],
                  },
                ],
                condition: [
                  {
                    condId: '646744',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.tacheStatus$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '策划环节',
                line_number: 13,
              },
            ],
            condition: [],
            desc: '编辑',
            callback: [
              {
                type: 'setRequired',
                dataId: 167876155900467070,
                options: {
                  compId: ['Select_31_11213_350488'],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Input',
                  id: '4976168',
                  required: 'true',
                  compid: ['Select_31_11213_350488'],
                },
                line_number: 12,
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '646744',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.tacheStatus$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167636074621701060,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 167636084852161300,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167636087776187360,
                        children: [],
                        todoOptions: ['disabled', 'selectComp'],
                        options: {
                          compId: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Form',
                          id: '960284',
                          disabled: '',
                          compid: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                        },
                        actionObjId: 'Form_31_1121_886082',
                        actionObjName: 'Form',
                        value: 'setDisable',
                        compLib: 'comm',
                        line_number: 20,
                      },
                      {
                        dataName: 'action',
                        dataId: 167876145746509200,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 167876145746535900,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 167876145746526560,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167876145746574940,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '8770136',
                                      required: 'true',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 23,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 167876145746571900,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167876145746553570,
                                        children: [],
                                        todoOptions: ['required', 'selectComp'],
                                        options: {
                                          compId: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: 31,
                                          compName: 'TreeSelect',
                                          id: '319746',
                                          required: '',
                                          compid: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                        },
                                        actionObjId: 'TreeSelect_4164986',
                                        actionObjName: 'TreeSelect',
                                        value: 'setRequired',
                                        compLib: 'comm',
                                        line_number: 24,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'setRequired',
                                        dataId: 167876145746553570,
                                        options: {
                                          compId: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: 31,
                                          compName: 'TreeSelect',
                                          id: '319746',
                                          required: '',
                                          compid: [
                                            'TreeSelect_4164986',
                                            'Select_31_11218_751786',
                                            'Select_31_11218_751786_9747682',
                                            'Select_31_11217_1911',
                                            'Input_31_11215_901165',
                                            'Input_31_11216_07830984',
                                            'TimePicker_31_11219_3337999',
                                            'Input_31_112110_990096',
                                          ],
                                        },
                                        line_number: 24,
                                      },
                                    ],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '532112',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$value_87531745$',
                                      operate: '==',
                                      manualValue: '1',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                desc: '通过',
                                line_number: 22,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                          },
                        ],
                        todoOptions: [],
                        options: {
                          compId: 'Select_31_11213_350488',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '87531745',
                        },
                        actionObjId: 'Select_31_11213_350488',
                        actionObjName: 'Select',
                        value: 'getValue',
                        compLib: 'comm',
                        line_number: 21,
                      },
                      {
                        dataName: 'action',
                        dataId: 168672310653584830,
                        children: [],
                        todoOptions: ['valueArray'],
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '861482',
                          pageJsonId: 31,
                          value: ['弹窗-省经办'],
                        },
                        actionObjId: 'debug',
                        actionObjName: 'system',
                        value: 'console',
                        line_number: 25,
                      },
                    ],
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.tacheStatus$',
                          operate: '==',
                          manualValue: '2',
                        },
                        condId: '2600634',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    desc: '省经办',
                    callback: [
                      {
                        type: 'setDisable',
                        dataId: 167636087776187360,
                        options: {
                          compId: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Form',
                          id: '960284',
                          disabled: '',
                          compid: [
                            'TreeSelect_4164986',
                            'Select_31_11213_350488',
                            'Select_31_11218_751786',
                            'Select_31_11218_751786_9747682',
                            'Select_31_11217_1911',
                            'Input_31_11215_901165',
                            'Input_31_11216_07830984',
                            'TimePicker_31_11219_3337999',
                            'Input_31_112110_990096',
                          ],
                        },
                        line_number: 20,
                      },
                      {
                        type: 'getValue',
                        dataId: 167876145746509200,
                        options: {
                          compId: 'Select_31_11213_350488',
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Select',
                          id: '87531745',
                        },
                        line_number: 21,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '532112',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$value_87531745$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167876145746526560,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 167876145746571900,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167876145746553570,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '319746',
                                      required: '',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 24,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 167876145746553570,
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '319746',
                                      required: '',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    line_number: 24,
                                  },
                                ],
                              },
                            ],
                            line_number: 22,
                            callback1: [
                              {
                                type: 'setRequired',
                                dataId: 167876145746574940,
                                options: {
                                  compId: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '8770136',
                                  required: 'true',
                                  compid: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                },
                                line_number: 23,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'console',
                        dataId: 168672310653584830,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '861482',
                          pageJsonId: 31,
                          value: ['弹窗-省经办'],
                        },
                        line_number: 25,
                      },
                    ],
                  },
                ],
                line_number: 13,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 167636076137863780,
                    options: {
                      compId: ['TreeSelect_4164986', 'Select_31_11213_350488'],
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Form',
                      id: '596968',
                      disabled: '',
                      compid: ['TreeSelect_4164986', 'Select_31_11213_350488'],
                    },
                    line_number: 14,
                  },
                  {
                    type: 'getValue',
                    dataId: 167876143050613800,
                    options: {
                      compId: 'Select_31_11213_350488',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '090488',
                    },
                    line_number: 15,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '532112',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_090488$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167876143050643600,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167876143623022720,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 16787614410722572,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'TreeSelect_4164986',
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '7566931',
                                  required: '',
                                },
                                actionObjId: 'TreeSelect_4164986',
                                actionObjName: 'TreeSelect',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 18,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'setRequired',
                                dataId: 16787614410722572,
                                options: {
                                  compId: 'TreeSelect_4164986',
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '7566931',
                                  required: '',
                                },
                                line_number: 18,
                              },
                            ],
                          },
                        ],
                        line_number: 16,
                        callback1: [
                          {
                            type: 'setRequired',
                            dataId: 167876143050615550,
                            options: {
                              compId: 'TreeSelect_4164986',
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'TreeSelect',
                              id: '7092708',
                              required: 'true',
                            },
                            line_number: 17,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'console',
                    dataId: 168672307679018270,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '519576',
                      pageJsonId: 31,
                      value: ['弹窗-策划环节'],
                    },
                    line_number: 19,
                  },
                ],
              },
            ],
          },
        ],
        line_number: 10,
        callback1: [
          {
            type: 'setDisable',
            dataId: 167324681671670100,
            shielding: true,
            options: {
              compId: [
                'Form_31_1121_886082',
                'Input_31_11211_0223722',
                'Input_31_11212_657783',
                'TextArea_31_112114_022705',
                'Input_31_11211_0223722_231151',
                'Input_31_11211_0223722_5758815',
                'Input_31_11211_0223722_9735233',
                'Input_31_11211_0223722_689949',
                'Select_31_11213_350488',
                'TreeSelect_4164986',
                'Select_31_11218_751786',
                'Select_31_11218_751786_9747682',
                'Select_31_11217_1911',
                'Input_31_11215_901165',
                'Input_31_11216_07830984',
                'TimePicker_31_11219_3337999',
                'Input_31_112110_990096',
              ],
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Form',
              id: '348233',
              disabled: 'true',
              compid: [
                'Form_31_1121_886082',
                'Input_31_11211_0223722',
                'Input_31_11212_657783',
                'TextArea_31_112114_022705',
                'Input_31_11211_0223722_231151',
                'Input_31_11211_0223722_5758815',
                'Input_31_11211_0223722_9735233',
                'Input_31_11211_0223722_689949',
                'Select_31_11213_350488',
                'TreeSelect_4164986',
                'Select_31_11218_751786',
                'Select_31_11218_751786_9747682',
                'Select_31_11217_1911',
                'Input_31_11215_901165',
                'Input_31_11216_07830984',
                'TimePicker_31_11219_3337999',
                'Input_31_112110_990096',
              ],
            },
            line_number: 11,
          },
        ],
      },
    ];
    eventDataifelse243.params = [] || [];
    CMDGenerator(eventDataifelse243, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse244: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '014719',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.tacheStatus$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$state.tacheStatus$',
              operate: '==',
              manualValue: '-1',
            },
            condId: '335365',
            connector: '||',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167807005933800160,
        elseIfs: [],
        line_number: 26,
        callback1: [
          {
            type: 'setValue',
            dataId: 167807013643950720,
            shielding: true,
            options: {
              compId: 'Select_31_11213_350488',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '98561',
              valueList: { Select_31_11213_350488: '1' },
            },
            line_number: 27,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse244.params = [] || [];
    CMDGenerator(eventDataifelse244, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_31_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_31_112_8719828',
            uid: 'View_31_112_8719828',
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
            margin: '0px 0px 0px 0px',
            borderRadius: '2px 2px 2px 2px',
          }}
          ref={(r: any) => (refs['View_31_112_8719828'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            header={'标题'}
            colSpan={12}
            colSpace={16}
            rowSpace={16}
            labelCol={'10'}
            wrapperCol={'14'}
            layout={'horizontal'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={''}
            $$componentItem={{
              id: 'Form_31_1121_886082',
              uid: 'Form_31_1121_886082',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '20px 20px 20px 20px' }}
            ref={(r: any) => (refs['Form_31_1121_886082'] = r)}
            {...injectData}
          >
            <Input
              name={'档次编码'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'gradeId'}
              required={false}
              formItemIndex={0}
              labelCol={'10'}
              wrapperCol={'14'}
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
                id: 'Input_31_11211_0223722',
                uid: 'Input_31_11211_0223722',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11211_0223722'] = r)}
              {...injectData}
            />
            <Input
              name={'档次名称'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'gradeName'}
              required={false}
              formItemIndex={1}
              labelCol={'10'}
              wrapperCol={'14'}
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
                id: 'Input_31_11212_657783',
                uid: 'Input_31_11212_657783',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11212_657783'] = r)}
              {...injectData}
            />
            <TextArea
              name={'档次描述'}
              placeholder={'请输入'}
              fieldName={'gradeDesc'}
              formItemIndex={2}
              selfSpan={24}
              labelCol={'5'}
              wrapperCol={'19'}
              allowClear={false}
              required={false}
              $$componentItem={{
                id: 'TextArea_31_112114_022705',
                uid: 'TextArea_31_112114_022705',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_31_112114_022705'] = r)}
              {...injectData}
            />
            <Input
              name={'针对客户属性'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'guestId'}
              required={false}
              formItemIndex={3}
              labelCol={'10'}
              wrapperCol={'14'}
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
                id: 'Input_31_11211_0223722_231151',
                uid: 'Input_31_11211_0223722_231151',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11211_0223722_231151'] = r)}
              {...injectData}
            />
            <Select
              name={'是否指定目标客户'}
              size={'default'}
              selfSpan={''}
              labelCol={'10'}
              wrapperCol={14}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              formItemIndex={4}
              fieldName={'openObjectType'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_302587',
                uid: 'Select_302587',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_302587'] = r)}
              {...injectData}
            />
            <Input
              name={'营销方案生效时间'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'gradeStartDate'}
              required={false}
              formItemIndex={5}
              labelCol={'10'}
              wrapperCol={'14'}
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
                id: 'Input_31_11211_0223722_9735233',
                uid: 'Input_31_11211_0223722_9735233',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11211_0223722_9735233'] = r)}
              {...injectData}
            />
            <Input
              name={'营销方案失效时间'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'gradeEndDate'}
              required={false}
              formItemIndex={6}
              labelCol={'10'}
              wrapperCol={'14'}
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
                id: 'Input_31_11211_0223722_689949',
                uid: 'Input_31_11211_0223722_689949',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11211_0223722_689949'] = r)}
              {...injectData}
            />
            <Select
              name={'处理意见'}
              placeholder={'请选择'}
              classification={'default'}
              fieldName={'handleIdea'}
              required={false}
              formItemIndex={7}
              labelCol={'10'}
              wrapperCol={'14'}
              dataSource={{ selectedService: {} }}
              $$componentItem={{
                id: 'Select_31_11213_350488',
                uid: 'Select_31_11213_350488',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse516: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '646744',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.tacheStatus$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167869973204309660,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 167869973204430660,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 167869981071981820,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167869983055064130,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '9375831',
                                  required: '',
                                  compid: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                },
                                actionObjId: 'TreeSelect_4164986',
                                actionObjName: 'TreeSelect',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 6,
                              },
                            ],
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 167869983887436260,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167869984593036830,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '53562',
                                      required: 'true',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 7,
                                  },
                                ],
                                condition: [],
                                desc: '通过',
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 167869984593036830,
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '53562',
                                      required: 'true',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    line_number: 7,
                                  },
                                ],
                              },
                            ],
                            condition: [
                              {
                                condId: '1102175',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$e$',
                                  operate: '==',
                                  manualValue: '3',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '不通过',
                            line_number: 5,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$state.tacheStatus$',
                              operate: '==',
                              manualValue: '2',
                            },
                            condId: '2600634',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '省经办',
                        elseIfs: [],
                        callback: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '1102175',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$e$',
                                  operate: '==',
                                  manualValue: '3',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167869981071981820,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 167869983887436260,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167869984593036830,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '53562',
                                      required: 'true',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    actionObjId: 'TreeSelect_4164986',
                                    actionObjName: 'TreeSelect',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 7,
                                  },
                                ],
                                condition: [],
                                desc: '通过',
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 167869984593036830,
                                    options: {
                                      compId: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: 31,
                                      compName: 'TreeSelect',
                                      id: '53562',
                                      required: 'true',
                                      compid: [
                                        'TreeSelect_4164986',
                                        'Select_31_11218_751786',
                                        'Select_31_11218_751786_9747682',
                                        'Select_31_11217_1911',
                                        'Input_31_11215_901165',
                                        'Input_31_11216_07830984',
                                        'TimePicker_31_11219_3337999',
                                        'Input_31_112110_990096',
                                      ],
                                    },
                                    line_number: 7,
                                  },
                                ],
                              },
                            ],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'setRequired',
                                dataId: 167869983055064130,
                                options: {
                                  compId: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '9375831',
                                  required: '',
                                  compid: [
                                    'TreeSelect_4164986',
                                    'Select_31_11218_751786',
                                    'Select_31_11218_751786_9747682',
                                    'Select_31_11217_1911',
                                    'Input_31_11215_901165',
                                    'Input_31_11216_07830984',
                                    'TimePicker_31_11219_3337999',
                                    'Input_31_112110_990096',
                                  ],
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '291376',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167869975496506700,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167869978199553800,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167869979011229300,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'TreeSelect_4164986',
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '165063',
                                  required: 'true',
                                },
                                actionObjId: 'TreeSelect_4164986',
                                actionObjName: 'TreeSelect',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 4,
                              },
                            ],
                            condition: [],
                            desc: '通过',
                            callback: [
                              {
                                type: 'setRequired',
                                dataId: 167869979011229300,
                                options: {
                                  compId: 'TreeSelect_4164986',
                                  compLib: 'comm',
                                  pageJsonId: 31,
                                  compName: 'TreeSelect',
                                  id: '165063',
                                  required: 'true',
                                },
                                line_number: 4,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setRequired',
                            dataId: 167869977765930600,
                            options: {
                              compId: 'TreeSelect_4164986',
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'TreeSelect',
                              id: '300242',
                              required: '',
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse516.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse516, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_31_11213_350488'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_58290555',
                uid: 'View_58290555',
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
                  formItemIndex: 8,
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
              ref={(r: any) => (refs['View_58290555'] = r)}
              {...injectData}
            />
            <TreeSelect
              name={'活动类型'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={''}
              labelCol={'10'}
              wrapperCol={'14'}
              treeDefaultExpandAll={true}
              size={'default'}
              showSearch={false}
              treeData={[
                {
                  title: '第一列',
                  key: 'column1',
                  selectable: true,
                  value: 'column1',
                  label: '第一列',
                  $$isParent: true,
                  children: [
                    {
                      title: '第二列',
                      key: 'column2',
                      value: 'column2',
                      selectable: true,
                      label: '第二列',
                    },
                  ],
                },
              ]}
              formItemIndex={9}
              fieldName={'activityType'}
              required={false}
              placeholder={'请选择'}
              filter={'local'}
              $$componentItem={{
                id: 'TreeSelect_4164986',
                uid: 'TreeSelect_4164986',
                type: 'TreeSelect',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(value: any, label: any, extra: any) => {
                const eventDatagetValue230: any = [
                  {
                    type: 'getValue',
                    dataId: 168014379665510240,
                    options: {
                      compId: 'TreeSelect_4164986',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'TreeSelect',
                      id: '814534',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 168014380116434370,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '9115377',
                          pageJsonId: 31,
                          code: 'function main(data,state,success,fail){var _label;var name="";if(((_label=label)===null||_label===void 0?void 0:_label.length)>0){name=label[0]}success(name)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 168014397828647200,
                            options: {
                              compId: 'Input_115146',
                              compLib: 'comm',
                              pageJsonId: 31,
                              compName: 'Input',
                              id: '2374567',
                              valueList: { Input_115146: '$data_9115377$' },
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetValue230.params =
                  [
                    { title: '节点key', name: 'value', value: '$value$' },
                    { title: '节点名称', name: 'label', value: '$label$' },
                    {
                      title: '节点数据',
                      name: 'extra',
                      value: '$extra.triggerNode.props.data$',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatagetValue230,
                  { value, label, extra },
                  'getValue',
                  {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['TreeSelect_4164986'] = r)}
              {...injectData}
            />
            <Select
              name={'业务专区'}
              attr={{}}
              placeholder={'请选择'}
              classification={'default'}
              fieldName={'busiZone'}
              required={false}
              formItemIndex={10}
              labelCol={'10'}
              wrapperCol={'14'}
              $$componentItem={{
                id: 'Select_31_11218_751786',
                uid: 'Select_31_11218_751786',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_31_11218_751786'] = r)}
              {...injectData}
            />
            <Select
              name={'地市专区'}
              attr={{}}
              placeholder={'请选择'}
              classification={'default'}
              fieldName={'cityZone'}
              required={false}
              formItemIndex={11}
              labelCol={'10'}
              wrapperCol={'14'}
              $$componentItem={{
                id: 'Select_31_11218_751786_9747682',
                uid: 'Select_31_11218_751786_9747682',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_31_11218_751786_9747682'] = r)}
              {...injectData}
            />
            <Select
              name={'是否纳入抽奖待选品活动'}
              placeholder={'请选择'}
              classification={'default'}
              required={false}
              fieldName={'isIncludedRaffleChangeActivity'}
              formItemIndex={12}
              labelCol={'10'}
              wrapperCol={'14'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_31_11217_1911',
                uid: 'Select_31_11217_1911',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_31_11217_1911'] = r)}
              {...injectData}
            />
            <Select
              name={'是否纳入主动弹窗营销项目'}
              size={'default'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'isIncludedPopProject'}
              formItemIndex={13}
              labelCol={'10'}
              wrapperCol={'14'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Input_31_11215_901165',
                uid: 'Input_31_11215_901165',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11215_901165'] = r)}
              {...injectData}
            />
            <Select
              name={'是否纳入服务回馈提醒项目'}
              size={'default'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'isIncludedServiceReminderProject'}
              formItemIndex={14}
              compType={null}
              labelCol={'10'}
              wrapperCol={'14'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Input_31_11216_07830984',
                uid: 'Input_31_11216_07830984',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_11216_07830984'] = r)}
              {...injectData}
            />
            <Input
              name={'模组链接1'}
              size={'default'}
              selfSpan={24}
              labelCol={'5'}
              wrapperCol={'19'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'moduleLinkFirst'}
              formItemIndex={15}
              regexp={[
                {
                  id: '4052215',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正确的链接',
                  pattern:
                    '/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)$/',
                },
              ]}
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
                id: 'TimePicker_31_11219_3337999',
                uid: 'TimePicker_31_11219_3337999',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TimePicker_31_11219_3337999'] = r)}
              {...injectData}
            />
            <Input
              name={'模组链接2'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'moduleLinkSecond'}
              formItemIndex={16}
              selfSpan={24}
              labelCol={'5'}
              wrapperCol={'19'}
              regexp={[
                {
                  id: '389692',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '清输入正确链接',
                  pattern:
                    '/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)$/',
                },
              ]}
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
                id: 'Input_31_112110_990096',
                uid: 'Input_31_112110_990096',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_31_112110_990096'] = r)}
              {...injectData}
            />
            <Input
              name={'活动类型名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'10'}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={17}
              fieldName={'activityTypeName'}
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
                id: 'Input_115146',
                uid: 'Input_115146',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_115146'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Yingxiaohuodongdangci5110$$Modal, {
  pageId: '928551575885271040',
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    sceneType: '',
    promotionPlanData: '',
    tacheStatus: '',
    gradeSelectorListData: '',
  },
});
