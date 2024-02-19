// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Form,
  Input,
  Select,
  Table,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const SdWanFeeAudit$$Modal: React.FC<PageProps> = ({
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
  const calculV4Num = (options_8722644: any) => {
    const eventDatagetValue39: any = [
      {
        type: 'getValue',
        dataId: 166537135425869100,
        options: {
          compId: 'Input_ipv4GiveNum_383367',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '3901342',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 166537137621704200,
            options: {
              compId: 'Input_ipv4DemandNum_1451523902',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '339068',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '56996',
                    options: { context: '$value_339068$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_3901342$',
                      operate: 'notEmpty',
                    },
                    condId: '166062',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166537137895364160,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166537142696375580,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '326378',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var exceed=value_339068-value_3901342;if(exceed<=0){exceed=0}success(exceed)};',
                      actionTitle: '计算超出个数',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166537152763438240,
                        options: {
                          compId: 'Input_ipv4BeyondNum_198033',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '9571777',
                          value: '$data_326378$',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 166537167865809440,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '6125886',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var price=data_326378*50;success(price)};',
                              actionTitle: '计算超出费用',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 166556662372460350,
                                options: {
                                  compId: 'Input_9380693',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '2651354',
                                  value: '$data_6125886$',
                                },
                                line_number: 7,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '814759',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data_326378$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168622345605807650,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168622350310855680,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168622352452289920,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: 'Input_9380693',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '1770824',
                                  visible: 'true',
                                },
                                actionObjId: 'Input_9380693',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            desc: '',
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 168622352452289920,
                                options: {
                                  compId: 'Input_9380693',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '1770824',
                                  visible: 'true',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 8,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 168622349303877280,
                            options: {
                              compId: 'Input_9380693',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '89270525',
                              visible: '',
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue39.params =
      [
        {
          title: '事件入参',
          name: 'options_8722644',
          value: '$options_8722644$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue39, { options_8722644 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculEndDiscount = (options_824845: any) => {
    const eventDatagetValue40: any = [
      {
        type: 'getValue',
        dataId: 166598706138664000,
        options: {
          compId: 'Input_901541',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '0763053',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 166598707096832500,
            options: {
              compId: 'Input_593321',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '858738',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '596476',
                    options: { context: '$value_858738$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_0763053$',
                      operate: 'notEmpty',
                    },
                    condId: '246182',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166598708142337660,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166598711086471580,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '1726305',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var price=value_0763053*10/value_858738;var discount=price.toFixed(3);success(discount)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166598711086432060,
                        options: {
                          compId: 'Input_lastDiscount_72621',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '855478',
                          value: '$data_1726305$',
                        },
                        line_number: 5,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue40.params =
      [
        {
          title: '事件入参',
          name: 'options_824845',
          value: '$options_824845$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue40, { options_824845 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculV6Num = (options_427563: any) => {
    const eventDatagetValue41: any = [
      {
        type: 'getValue',
        dataId: 166556718853344060,
        options: {
          compId: 'Input_ipv6GiveNum_389494',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '479542',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 166556720014145920,
            shielding: true,
            options: {
              compId: 'Input_ipv6DemandNum_94541',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '103932',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166979309907125300,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '996583',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var freeNum=value_479542;var needNum=value_103932;console.log("needNum",needNum);console.log("freeNum",freeNum);if(freeNum!==null&&freeNum!==undefined&&freeNum>=0){var _result=needNum-freeNum;console.log("_result",_result);if(_result>=1){success()}else{fail()}}else{fail()}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 166979324824189730,
                    shielding: true,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '792921',
                      disabled: '',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'setRequired',
                    dataId: 167082994040816670,
                    shielding: true,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '680965',
                      required: 'true',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'getSelectedData',
                    dataId: 166979325792848100,
                    shielding: true,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '294956',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166979327643850800,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '2983306',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var exceed=value_103932-value_479542;if(exceed<=0){exceed=0}var price=parseInt(selectedData_294956[0].value);var count=exceed*price;success(count)};',
                          actionTitle: '超出费用',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166979327643835230,
                            shielding: true,
                            options: {
                              compId: 'Input_1045175',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '752123',
                              value: '$data_2983306$',
                              valueList: { Input_1045175: '$data_2983306$' },
                            },
                            line_number: 8,
                            callback1: [],
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
                    type: 'setDisable',
                    dataId: 166979320296842020,
                    shielding: true,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '555817',
                      disabled: 'true',
                    },
                    line_number: 9,
                  },
                  {
                    type: 'setRequired',
                    dataId: 167082995437052130,
                    shielding: true,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '120122',
                      required: '',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'setValue',
                    dataId: 166979323194975000,
                    shielding: true,
                    options: {
                      compId: 'Input_1045175',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '213739',
                      valueList: { Input_1045175: '0' },
                    },
                    line_number: 11,
                    callback1: [],
                  },
                  {
                    type: 'clearValue',
                    dataId: 166979397508633400,
                    shielding: true,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '014068',
                    },
                    line_number: 12,
                  },
                ],
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2682482',
                options: { context: '$value_479542$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168120567210837500,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 168120567210967600,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168120567210947460,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 168120567210908500,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: ['compId', 'valueList'],
                    options: {
                      compId: [],
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '742053',
                      valueList: { Input_ipv6DemandNum_94541: '0' },
                      compid: [],
                    },
                    actionObjId: 'Input_ipv6DemandNum_94541',
                    actionObjName: 'Input',
                    value: 'setValue',
                    compLib: 'comm',
                    line_number: 26,
                  },
                  {
                    dataName: 'action',
                    dataId: 168120570090810460,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 168120570090864960,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: ['compId', 'valueList'],
                    options: {
                      compId: 'Input_ipv6DemandNum_94541',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '337998',
                      valueList: { Input_ipv6DemandNum_94541: '0' },
                    },
                    actionObjId: 'Input_ipv6DemandNum_94541',
                    actionObjName: 'Input',
                    value: 'setValue',
                    compLib: 'comm',
                    line_number: 27,
                  },
                ],
                condition: [],
                desc: 'IPv6赠送数为空时IPv6需求数仅允许填0',
                callback: [
                  {
                    type: 'setValue',
                    dataId: 168120567210947460,
                    options: {
                      compId: [],
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '742053',
                      valueList: { Input_ipv6DemandNum_94541: '0' },
                      compid: [],
                    },
                    line_number: 26,
                    callback1: [],
                  },
                  {
                    type: 'setValue',
                    dataId: 168120570090810460,
                    options: {
                      compId: 'Input_ipv6DemandNum_94541',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '337998',
                      valueList: { Input_ipv6DemandNum_94541: '0' },
                    },
                    line_number: 27,
                    callback1: [],
                  },
                ],
              },
            ],
            line_number: 13,
            callback1: [
              {
                type: 'getValue',
                dataId: 168120567210963330,
                shielding: true,
                options: {
                  compId: 'Input_ipv6DemandNum_94541',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '89882174',
                },
                line_number: 14,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168120567210975230,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '271492',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var needNum=value_103932;var freeNum=value_479542;console.log("needNum",needNum);console.log("freeNum",freeNum);if(freeNum!==null&&freeNum!==undefined&&freeNum>=0){var _result=needNum-freeNum;console.log("_result",_result);if(_result>=1){success()}else{fail()}}else{fail()}};',
                    },
                    line_number: 15,
                    callback1: [
                      {
                        type: 'setDisable',
                        dataId: 168120567210980700,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '548211',
                          disabled: '',
                        },
                        line_number: 16,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168120567210995040,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '00018',
                          required: 'true',
                        },
                        line_number: 17,
                      },
                      {
                        type: 'getSelectedData',
                        dataId: 168120567210913570,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '7364857',
                        },
                        line_number: 18,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168120567210992600,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '615125',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var needNum=value_103932;var freeNum=value_479542;var _result=needNum-freeNum;var ipv6Type=selectedData_260533[0].value;var price=0;if(ipv6Type==="64"){price=50}else if(ipv6Type==="60"){price=800}else if(ipv6Type==="56"){price=6400}success(parseInt(_result)*price)};',
                            },
                            line_number: 19,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 168120567210971100,
                                shielding: true,
                                options: {
                                  compId: 'Input_1045175',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '197921',
                                  value: '$data_615125$',
                                  valueList: { Input_1045175: '$data_615125$' },
                                },
                                line_number: 20,
                                callback1: [],
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
                        type: 'setDisable',
                        dataId: 168120567210972160,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '0501854',
                          disabled: 'true',
                        },
                        line_number: 21,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168120567210926430,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '55926383',
                          required: '',
                        },
                        line_number: 22,
                      },
                      {
                        type: 'setValue',
                        dataId: 168120567210953950,
                        shielding: true,
                        options: {
                          compId: 'Input_1045175',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '503492',
                          valueList: { Input_1045175: '0' },
                        },
                        line_number: 23,
                        callback1: [],
                      },
                      {
                        type: 'clearValue',
                        dataId: 168120567210913730,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '478676',
                        },
                        line_number: 24,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'clearValue',
                dataId: 168120568980048300,
                options: {
                  compId: 'Input_ipv6DemandNum_94541',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '5053507',
                },
                line_number: 25,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue41.params =
      [
        {
          title: '事件入参',
          name: 'options_427563',
          value: '$options_427563$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue41, { options_427563 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculBusiEndDiscount = (options_171974: any) => {
    const eventDatagetValue42: any = [
      {
        type: 'getValue',
        dataId: 166608232622027170,
        options: {
          compId: 'Input_standardPrice_89896',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '670359',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 166608233353105200,
            options: {
              compId: 'Input_receiptsPrice_488443',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '839794',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5285135',
                    options: { context: '$value_839794$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_670359$', operate: 'notEmpty' },
                    condId: '0670755',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166608233505826880,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166608233969995840,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '2130632',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var price=value_839794*10/value_670359;var discount=price.toFixed(3);success(discount)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166608239522896740,
                        options: {
                          compId: 'Input_303496',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '3065665',
                          value: '$data_2130632$',
                        },
                        line_number: 5,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue42.params =
      [
        {
          title: '事件入参',
          name: 'options_171974',
          value: '$options_171974$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue42, { options_171974 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    calculV4Num,
    calculEndDiscount,
    calculV6Num,
    calculBusiEndDiscount,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm26: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166538297886250000,
        options: {
          compId: 'Form_981467',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Form',
          id: '1304908',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '88138',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data.marketList.length$',
                  operate: '>',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166539616703540030,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166539621826567000,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166539622297927520,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '40315744',
                      pageJsonId: '8430824',
                      type: 'error',
                      value: '请选择营销案',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    shielding: true,
                    line_number: 7,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166539622297927520,
                    shielding: true,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '40315744',
                      pageJsonId: '8430824',
                      type: 'error',
                      value: '请选择营销案',
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166562598739984100,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '808251',
                  pageJsonId: '8430824',
                  dataSourceId: 166452624216490180,
                  dataSourceName: 'feeInfo',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '982351',
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'busiType' },
                      showInput: true,
                      _codePath: ['busiType'],
                      _idpath: ['982351'],
                    },
                    {
                      attrId: '674311',
                      code: 'standardPrice',
                      name: '标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'standardPrice',
                      },
                      showInput: true,
                      _codePath: ['standardPrice'],
                      _idpath: ['674311'],
                    },
                    {
                      attrId: '384707',
                      code: 'receiptsPrice',
                      name: '实收价',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'receiptsPrice',
                      },
                      showInput: true,
                      _codePath: ['receiptsPrice'],
                      _idpath: ['384707'],
                    },
                    {
                      attrId: '7058047',
                      code: 'bandwidth',
                      name: '带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidth'],
                      _idpath: ['7058047'],
                    },
                    {
                      attrId: '323129',
                      code: 'ipv6GiveNum',
                      name: 'IPv6赠送数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv6GiveNum',
                      },
                      showInput: true,
                      _codePath: ['ipv6GiveNum'],
                      _idpath: ['323129'],
                    },
                    {
                      attrId: '535103',
                      code: 'ipv4GiveNum',
                      name: 'IPv4赠送数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv4GiveNum',
                      },
                      showInput: true,
                      _codePath: ['ipv4GiveNum'],
                      _idpath: ['535103'],
                    },
                    {
                      attrId: '547733',
                      code: 'ipv6DemandNum',
                      name: 'IPv6需求数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv6DemandNum',
                      },
                      showInput: true,
                      _codePath: ['ipv6DemandNum'],
                      _idpath: ['547733'],
                    },
                    {
                      attrId: '8454034',
                      code: 'ipv4DemandNum',
                      name: 'IPv4需求数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv4DemandNum',
                      },
                      showInput: true,
                      _codePath: ['ipv4DemandNum'],
                      _idpath: ['8454034'],
                    },
                    {
                      attrId: '618242',
                      code: 'ipv6BeyondSel',
                      name: 'IPv6超出选择',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'ipv6BeyondSel' },
                      showInput: true,
                      _codePath: ['ipv6BeyondSel'],
                      _idpath: ['618242'],
                    },
                    {
                      attrId: '167631',
                      code: 'ipv4BeyondNum',
                      name: 'IPv4超出个数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv4BeyondNum',
                      },
                      showInput: true,
                      _codePath: ['ipv4BeyondNum'],
                      _idpath: ['167631'],
                    },
                    {
                      attrId: '1633704',
                      code: 'ipv6BeyondCost',
                      name: 'IPv6超出费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv6BeyondCost',
                      },
                      showInput: true,
                      _codePath: ['ipv6BeyondCost'],
                      _idpath: ['1633704'],
                    },
                    {
                      attrId: '841439',
                      code: 'ipv4BeyondCount',
                      name: 'IPv4元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv4BeyondCount'],
                      _idpath: ['841439'],
                    },
                    {
                      attrId: '755452',
                      code: 'unitPrice',
                      name: '单价（元/G）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['unitPrice'],
                      _idpath: ['755452'],
                    },
                    {
                      attrId: '546822',
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'lastDiscount',
                      },
                      showInput: true,
                      _codePath: ['lastDiscount'],
                      _idpath: ['546822'],
                    },
                    {
                      attrId: '359579',
                      code: 'market',
                      name: '营销案',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['market'],
                      _idpath: ['359579'],
                    },
                    {
                      attrId: '122027',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiTypeName'],
                      _idpath: ['122027'],
                    },
                    {
                      attrId: '500349',
                      code: 'areaType',
                      name: '区域类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['areaType'],
                      _idpath: ['500349'],
                    },
                    {
                      attrId: '2669222',
                      code: 'joinWay',
                      name: '接入方式',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['joinWay'],
                      _idpath: ['2669222'],
                    },
                    {
                      attrId: '8788325',
                      code: 'bandwidthUp',
                      name: '上行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'bandwidthUp' },
                      showInput: true,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['8788325'],
                    },
                    {
                      attrId: '155411',
                      code: 'bandwidthDown',
                      name: '下行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'bandwidthDown' },
                      showInput: true,
                      _codePath: ['bandwidthDown'],
                      _idpath: ['155411'],
                    },
                    {
                      attrId: '568368',
                      code: 'bandwidthPort',
                      name: 'SDWAN端口带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'bandwidthPort' },
                      showInput: true,
                      _codePath: ['bandwidthPort'],
                      _idpath: ['568368'],
                    },
                    {
                      attrId: '2474105',
                      code: 'singleUseFee',
                      name: '一次性费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['singleUseFee'],
                      _idpath: ['2474105'],
                    },
                    {
                      attrId: '937028',
                      code: 'portFee',
                      name: '端口费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['portFee'],
                      _idpath: ['937028'],
                    },
                    {
                      attrId: '214875',
                      code: 'ipv6BeyondNum',
                      name: 'IPv6超出个数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv6BeyondNum',
                      },
                      showInput: true,
                      _codePath: ['ipv6BeyondNum'],
                      _idpath: ['214875'],
                    },
                    {
                      attrId: '198626',
                      code: 'ipv6BeyondCount',
                      name: 'IPv6元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['ipv6BeyondCount'],
                      _idpath: ['198626'],
                    },
                    {
                      attrId: '300842',
                      code: 'standardPriceSdWan',
                      name: 'SDWAN标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'standardPriceSdWan',
                      },
                      showInput: true,
                      _codePath: ['standardPriceSdWan'],
                      _idpath: ['300842'],
                    },
                    {
                      attrId: '39146',
                      code: 'receiptsPriceSdWan',
                      name: 'SDWAN实收价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'receiptsPriceSdWan',
                      },
                      showInput: true,
                      _codePath: ['receiptsPriceSdWan'],
                      _idpath: ['39146'],
                    },
                    {
                      attrId: '684821',
                      code: 'rowId',
                      name: '行id',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['rowId'],
                      _idpath: ['684821'],
                    },
                    {
                      attrId: '7134342',
                      code: 'bandwidthUpName',
                      name: '上行宽带名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthUpName'],
                      _idpath: ['7134342'],
                    },
                    {
                      attrId: '1659093',
                      code: 'bandwidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthName'],
                      _idpath: ['1659093'],
                    },
                    {
                      attrId: '14809',
                      code: 'bandwidthDownName',
                      name: '下行宽带名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthDownName'],
                      _idpath: ['14809'],
                    },
                    {
                      attrId: '246587',
                      code: 'ipv4BeyondCost',
                      name: 'IPv4超出费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'ipv4BeyondCost',
                      },
                      showInput: true,
                      _codePath: ['ipv4BeyondCost'],
                      _idpath: ['246587'],
                    },
                    {
                      attrId: '82243',
                      code: 'busiLastDiscount',
                      name: '商务快线最终折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiLastDiscount'],
                      _idpath: ['82243'],
                    },
                    {
                      attrId: '223337',
                      code: 'joinLineType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['joinLineType'],
                      _idpath: ['223337'],
                    },
                    {
                      attrId: '477975',
                      code: 'marketList',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['marketList'],
                      _idpath: ['477975'],
                    },
                    {
                      attrId: '6604794',
                      code: 'specialLine',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['specialLine'],
                      _idpath: ['6604794'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166562602505649760,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '882111',
                      pageJsonId: '8430824',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var market="";for(var i=0;i<data.marketList.length;i++){if(i!=data.marketList.length-1){market+=data.marketList[i].saleId+";"}else{market+=data.marketList[i].saleId}}data.feeInfo.market=market;data.feeInfo.marketList=data.marketList;success(data.feeInfo)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 166562602505654880,
                        shielding: true,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '11542',
                          pageJsonId: '8430824',
                          params: '$data_882111$',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 166562602505638460,
                        shielding: true,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '576515',
                          pageJsonId: '8430824',
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'setDataSource',
            dataId: 166970461467605630,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '088524',
              pageJsonId: '8430824',
              dataSourceId: 166452624216490180,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '982351',
                  code: 'busiType',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'busiType' },
                  showInput: true,
                  _codePath: ['busiType'],
                  _idpath: ['982351'],
                },
                {
                  attrId: '674311',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'standardPrice',
                  },
                  showInput: true,
                  _codePath: ['standardPrice'],
                  _idpath: ['674311'],
                },
                {
                  attrId: '384707',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'receiptsPrice',
                  },
                  showInput: true,
                  _codePath: ['receiptsPrice'],
                  _idpath: ['384707'],
                },
                {
                  attrId: '7058047',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidth'],
                  _idpath: ['7058047'],
                },
                {
                  attrId: '323129',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv6GiveNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6GiveNum'],
                  _idpath: ['323129'],
                },
                {
                  attrId: '535103',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv4GiveNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4GiveNum'],
                  _idpath: ['535103'],
                },
                {
                  attrId: '547733',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv6DemandNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6DemandNum'],
                  _idpath: ['547733'],
                },
                {
                  attrId: '8454034',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv4DemandNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4DemandNum'],
                  _idpath: ['8454034'],
                },
                {
                  attrId: '618242',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'validateFields'],
                    code: 'ipv6BeyondSel',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondSel'],
                  _idpath: ['618242'],
                },
                {
                  attrId: '167631',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv4BeyondNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondNum'],
                  _idpath: ['167631'],
                },
                {
                  attrId: '1633704',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv6BeyondCost',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondCost'],
                  _idpath: ['1633704'],
                },
                {
                  attrId: '841439',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv4BeyondCount'],
                  _idpath: ['841439'],
                },
                {
                  attrId: '755452',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['unitPrice'],
                  _idpath: ['755452'],
                },
                {
                  attrId: '546822',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'lastDiscount',
                  },
                  showInput: true,
                  _codePath: ['lastDiscount'],
                  _idpath: ['546822'],
                },
                {
                  attrId: '359579',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_719112', 'getFieldsValue'],
                    code: 'market',
                  },
                  showInput: true,
                  _codePath: ['market'],
                  _idpath: ['359579'],
                },
                {
                  attrId: '122027',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['busiTypeName'],
                  _idpath: ['122027'],
                },
                {
                  attrId: '500349',
                  code: 'areaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['areaType'],
                  _idpath: ['500349'],
                },
                {
                  attrId: '2669222',
                  code: 'joinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['joinWay'],
                  _idpath: ['2669222'],
                },
                {
                  attrId: '8788325',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'bandwidthUp' },
                  showInput: true,
                  _codePath: ['bandwidthUp'],
                  _idpath: ['8788325'],
                },
                {
                  attrId: '155411',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'bandwidthDown' },
                  showInput: true,
                  _codePath: ['bandwidthDown'],
                  _idpath: ['155411'],
                },
                {
                  attrId: '568368',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'bandwidthPort' },
                  showInput: true,
                  _codePath: ['bandwidthPort'],
                  _idpath: ['568368'],
                },
                {
                  attrId: '2474105',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['singleUseFee'],
                  _idpath: ['2474105'],
                },
                {
                  attrId: '937028',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['portFee'],
                  _idpath: ['937028'],
                },
                {
                  attrId: '214875',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv6BeyondNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondNum'],
                  _idpath: ['214875'],
                },
                {
                  attrId: '198626',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['ipv6BeyondCount'],
                  _idpath: ['198626'],
                },
                {
                  attrId: '300842',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'standardPriceSdWan',
                  },
                  showInput: true,
                  _codePath: ['standardPriceSdWan'],
                  _idpath: ['300842'],
                },
                {
                  attrId: '39146',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'receiptsPriceSdWan',
                  },
                  showInput: true,
                  _codePath: ['receiptsPriceSdWan'],
                  _idpath: ['39146'],
                },
                {
                  attrId: '684821',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['684821'],
                },
                {
                  attrId: '7134342',
                  code: 'bandwidthUpName',
                  name: '上行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthUpName'],
                  _idpath: ['7134342'],
                },
                {
                  attrId: '1659093',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthName'],
                  _idpath: ['1659093'],
                },
                {
                  attrId: '14809',
                  code: 'bandwidthDownName',
                  name: '下行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['bandwidthDownName'],
                  _idpath: ['14809'],
                },
                {
                  attrId: '246587',
                  code: 'ipv4BeyondCost',
                  name: 'IPv4超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv4BeyondCost',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondCost'],
                  _idpath: ['246587'],
                },
                {
                  attrId: '82243',
                  code: 'busiLastDiscount',
                  name: '商务快线最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['busiLastDiscount'],
                  _idpath: ['82243'],
                },
                {
                  attrId: '477975',
                  code: 'marketList',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['marketList'],
                  _idpath: ['477975'],
                },
                {
                  attrId: '223337',
                  code: 'joinLineType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['joinLineType'],
                  _idpath: ['223337'],
                },
                {
                  attrId: '6604794',
                  code: 'specialLine',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['specialLine'],
                  _idpath: ['6604794'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 8,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166970461467677000,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '7510415',
                  pageJsonId: '8430824',
                  actionTitle: '',
                  code: 'function main(data,state,success,fail){var _data$marketList;var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var price=parseInt(data.feeInfo.ipv4BeyondCost)/parseInt(data.feeInfo.ipv4BeyondNum);data.feeInfo.exceedPrice=price;var market="";if(data!==null&&data!==void 0&&(_data$marketList=data.marketList)!==null&&_data$marketList!==void 0&&_data$marketList.length){for(var i=0;i<data.marketList.length;i++){if(i!=data.marketList.length-1){market+=data.marketList[i].saleId+";"}else{market+=data.marketList[i].saleId}}}data.feeInfo.market=market;data.feeInfo.marketList=data.marketList||[];success(data.feeInfo)};',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 166970461467688640,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '3965727',
                      pageJsonId: '8430824',
                      params: '$data_7510415$',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166970461467629660,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '516192',
                      pageJsonId: '8430824',
                    },
                    line_number: 11,
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
    eventDatavalidateCurrentForm26.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm26, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal15: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal15.params = [] || [];
    CMDGenerator(eventDatacloseModal15, {}, 'closeModal', {
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
    const eventDataapiRequest177: any = [
      {
        type: 'apiRequest',
        dataId: 166539187537183580,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '559387',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryMarketCaseInfo',
          _apiCode: 'queryMarketCaseInfo',
          _source: 'rhin',
          _serviceId: '896680797913452544',
          _serviceTitle: '查询营销案信息: queryMarketCaseInfo',
          params: 'object',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166539191817800480,
            shielding: true,
            options: {
              compId: 'Input_672199',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '8723175',
              data: '$reply_559387?.resultData$',
              labelKey: 'name',
              valueKey: 'code',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'setDataSource',
            dataId: 166539367958529820,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '3698476',
              pageJsonId: '8430824',
              dataSourceId: 166539345524605820,
              dataSourceName: 'marketCaseInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '852366',
                  code: 'code',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '795578',
                  code: 'name',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '690458',
                  code: 'desc',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              newData: '$reply_559387?.resultData$',
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 3,
            callback1: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '452131',
                    options: {
                      context: '$state.feeInfo$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166539708773773000,
                elseIfs: [],
                line_number: 4,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166539708773839300,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '3874338',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var market=state.feeInfo.market;var markets=market.split(";");var marketList=[];for(var i=0;i<data.marketCaseInfo.length;i++){var exit=markets.findIndex(function(item){return item===data.marketCaseInfo[i].code});if(exit!=-1){marketList.push(data.marketCaseInfo[i])}}success(marketList)};',
                    },
                    line_number: 5,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166539849783559740,
                        shielding: true,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '863879',
                          pageJsonId: '8430824',
                          dataSourceId: 166452752557535940,
                          dataSourceName: 'marketList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '302396',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '969052',
                              code: 'saleId',
                              name: '营销案编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '395448',
                              code: 'saleName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7610088',
                              code: 'saleDesc',
                              name: '营销案描述',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_3874338$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 166540269101210050,
                    shielding: true,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '101353',
                      pageJsonId: '8430824',
                      dataSourceId: 166452624216490180,
                      dataSourceName: 'feeInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '982351',
                          code: 'busiType',
                          name: '业务类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'busiType',
                          },
                          showInput: true,
                          _codePath: ['busiType'],
                          _idpath: ['982351'],
                        },
                        {
                          attrId: '674311',
                          code: 'standardPrice',
                          name: '标准价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'standardPrice',
                          },
                          showInput: true,
                          _codePath: ['standardPrice'],
                          _idpath: ['674311'],
                        },
                        {
                          attrId: '384707',
                          code: 'receiptsPrice',
                          name: '实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'receiptsPrice',
                          },
                          showInput: true,
                          _codePath: ['receiptsPrice'],
                          _idpath: ['384707'],
                        },
                        {
                          attrId: '7058047',
                          code: 'bandwidth',
                          name: '带宽',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidth',
                          },
                          showInput: true,
                          _codePath: ['bandwidth'],
                          _idpath: ['7058047'],
                        },
                        {
                          attrId: '323129',
                          code: 'ipv6GiveNum',
                          name: 'IPv6赠送数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6GiveNum',
                          },
                          showInput: true,
                          _codePath: ['ipv6GiveNum'],
                          _idpath: ['323129'],
                        },
                        {
                          attrId: '535103',
                          code: 'ipv4GiveNum',
                          name: 'IPv4赠送数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4GiveNum',
                          },
                          showInput: true,
                          _codePath: ['ipv4GiveNum'],
                          _idpath: ['535103'],
                        },
                        {
                          attrId: '547733',
                          code: 'ipv6DemandNum',
                          name: 'IPv6需求数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6DemandNum',
                          },
                          showInput: true,
                          _codePath: ['ipv6DemandNum'],
                          _idpath: ['547733'],
                        },
                        {
                          attrId: '8454034',
                          code: 'ipv4DemandNum',
                          name: 'IPv4需求数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4DemandNum',
                          },
                          showInput: true,
                          _codePath: ['ipv4DemandNum'],
                          _idpath: ['8454034'],
                        },
                        {
                          attrId: '618242',
                          code: 'ipv6BeyondSel',
                          name: 'IPv6超出选择',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondSel',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondSel'],
                          _idpath: ['618242'],
                        },
                        {
                          attrId: '167631',
                          code: 'ipv4BeyondNum',
                          name: 'IPv4超出个数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4BeyondNum',
                          },
                          showInput: true,
                          _codePath: ['ipv4BeyondNum'],
                          _idpath: ['167631'],
                        },
                        {
                          attrId: '1633704',
                          code: 'ipv6BeyondCost',
                          name: 'IPv6超出费用',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondCost',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondCost'],
                          _idpath: ['1633704'],
                        },
                        {
                          attrId: '841439',
                          code: 'ipv4BeyondCount',
                          name: 'IPv4元/月/个',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4BeyondCount',
                          },
                          showInput: true,
                          _codePath: ['ipv4BeyondCount'],
                          _idpath: ['841439'],
                        },
                        {
                          attrId: '755452',
                          code: 'unitPrice',
                          name: '单价（元/G）',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'unitPrice',
                          },
                          showInput: true,
                          _codePath: ['unitPrice'],
                          _idpath: ['755452'],
                        },
                        {
                          attrId: '546822',
                          code: 'lastDiscount',
                          name: '最终折扣',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'lastDiscount',
                          },
                          showInput: true,
                          _codePath: ['lastDiscount'],
                          _idpath: ['546822'],
                        },
                        {
                          attrId: '359579',
                          code: 'market',
                          name: '营销案',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: [], code: 'market' },
                          showInput: true,
                          _codePath: ['market'],
                          _idpath: ['359579'],
                        },
                        {
                          attrId: '122027',
                          code: 'busiTypeName',
                          name: '业务类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'busiTypeName',
                          },
                          showInput: true,
                          _codePath: ['busiTypeName'],
                          _idpath: ['122027'],
                        },
                        {
                          attrId: '500349',
                          code: 'areaType',
                          name: '区域类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'areaType',
                          },
                          showInput: true,
                          _codePath: ['areaType'],
                          _idpath: ['500349'],
                        },
                        {
                          attrId: '2669222',
                          code: 'joinWay',
                          name: '接入方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'joinWay',
                          },
                          showInput: true,
                          _codePath: ['joinWay'],
                          _idpath: ['2669222'],
                        },
                        {
                          attrId: '8788325',
                          code: 'bandwidthUp',
                          name: '上行宽带',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthUp',
                          },
                          showInput: true,
                          _codePath: ['bandwidthUp'],
                          _idpath: ['8788325'],
                        },
                        {
                          attrId: '155411',
                          code: 'bandwidthDown',
                          name: '下行宽带',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthDown',
                          },
                          showInput: true,
                          _codePath: ['bandwidthDown'],
                          _idpath: ['155411'],
                        },
                        {
                          attrId: '568368',
                          code: 'bandwidthPort',
                          name: 'SDWAN端口带宽',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthPort',
                          },
                          showInput: true,
                          _codePath: ['bandwidthPort'],
                          _idpath: ['568368'],
                        },
                        {
                          attrId: '2474105',
                          code: 'singleUseFee',
                          name: '一次性费用',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'singleUseFee',
                          },
                          showInput: true,
                          _codePath: ['singleUseFee'],
                          _idpath: ['2474105'],
                        },
                        {
                          attrId: '937028',
                          code: 'portFee',
                          name: '端口费',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'portFee',
                          },
                          showInput: true,
                          _codePath: ['portFee'],
                          _idpath: ['937028'],
                        },
                        {
                          attrId: '214875',
                          code: 'ipv6BeyondNum',
                          name: 'IPv6超出个数',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondNum',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondNum'],
                          _idpath: ['214875'],
                        },
                        {
                          attrId: '198626',
                          code: 'ipv6BeyondCount',
                          name: 'IPv6元/月/个',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv6BeyondCount',
                          },
                          showInput: true,
                          _codePath: ['ipv6BeyondCount'],
                          _idpath: ['198626'],
                        },
                        {
                          attrId: '300842',
                          code: 'standardPriceSdWan',
                          name: 'SDWAN标准价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'standardPriceSdWan',
                          },
                          showInput: true,
                          _codePath: ['standardPriceSdWan'],
                          _idpath: ['300842'],
                        },
                        {
                          attrId: '39146',
                          code: 'receiptsPriceSdWan',
                          name: 'SDWAN实收价格',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'receiptsPriceSdWan',
                          },
                          showInput: true,
                          _codePath: ['receiptsPriceSdWan'],
                          _idpath: ['39146'],
                        },
                        {
                          attrId: '684821',
                          code: 'rowId',
                          name: '行id',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'rowId',
                          },
                          showInput: true,
                          _codePath: ['rowId'],
                          _idpath: ['684821'],
                        },
                        {
                          attrId: '7134342',
                          code: 'bandwidthUpName',
                          name: '上行宽带名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthUpName',
                          },
                          showInput: true,
                          _codePath: ['bandwidthUpName'],
                          _idpath: ['7134342'],
                        },
                        {
                          attrId: '1659093',
                          code: 'bandwidthName',
                          name: '带宽名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthName',
                          },
                          showInput: true,
                          _codePath: ['bandwidthName'],
                          _idpath: ['1659093'],
                        },
                        {
                          attrId: '14809',
                          code: 'bandwidthDownName',
                          name: '下行宽带名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'bandwidthDownName',
                          },
                          showInput: true,
                          _codePath: ['bandwidthDownName'],
                          _idpath: ['14809'],
                        },
                        {
                          attrId: '246587',
                          code: 'ipv4BeyondCost',
                          name: 'IPv4超出费用',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'ipv4BeyondCost',
                          },
                          showInput: true,
                          _codePath: ['ipv4BeyondCost'],
                          _idpath: ['246587'],
                        },
                        {
                          attrId: '82243',
                          code: 'busiLastDiscount',
                          name: '商务快线最终折扣',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$state.feeInfo$'],
                            code: 'busiLastDiscount',
                          },
                          showInput: true,
                          _codePath: ['busiLastDiscount'],
                          _idpath: ['82243'],
                        },
                        {
                          attrId: '477975',
                          code: 'marketList',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['marketList'],
                          _idpath: ['477975'],
                        },
                        {
                          attrId: '223337',
                          code: 'joinLineType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['joinLineType'],
                          _idpath: ['223337'],
                        },
                        {
                          attrId: '6604794',
                          code: 'specialLine',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['specialLine'],
                          _idpath: ['6604794'],
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 7,
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
    ];
    eventDataapiRequest177.params = [] || [];
    CMDGenerator(eventDataapiRequest177, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse106: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '580941',
            options: {
              context: '$state.feeInfo.bandwidthUp$',
              operate: 'notEmpty',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167024013313811940,
        elseIfs: [],
        line_number: 8,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167024013313817180,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '986086',
              pageJsonId: '8430824',
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'getLineConfig',
              _apiCode: 'getLineConfig',
              _source: 'rhin',
              _serviceId: '896590341456502784',
              _serviceTitle: '获取专线配置信息-hdb: getLineConfig',
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
                  dataKey: '140684_header',
                  key: '0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '140684_path',
                  key: '1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '140684_query',
                  key: '2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'busiType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.busiType',
                      compType: 'Input',
                      name: 'busiType',
                      parents: ['body'],
                      id: 'body.busiType',
                      dataKey: '140684_body.busiType',
                      value: { type: ['customize'], code: 'busiFeeAudit' },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-0',
                    },
                    {
                      code: 'bandWitch',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.bandWitch',
                      compType: 'Input',
                      name: 'bandWitch',
                      parents: ['body'],
                      id: 'body.bandWitch',
                      dataKey: '140684_body.bandWitch',
                      value: {
                        type: ['customize'],
                        code: '$state.feeInfo.bandwidthUpName$',
                      },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-1',
                    },
                    {
                      code: 'bandwitchDown',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.bandwitchDown',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.bandwitchDown',
                      dataKey: '140684_body.bandwitchDown',
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-2',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '140684_body',
                  key: '3',
                },
              ],
              _sourceName: '获取专线配置信息-hdb',
            },
            line_number: 9,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 167024013313849000,
                options: {
                  compId: 'Input_306376',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '7264',
                  data: '$reply_986086?.resultData$',
                  labelKey: 'bandwitchDown',
                  valueKey: 'localPrice',
                },
                line_number: 10,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse106.params = [] || [];
    CMDGenerator(eventDataifelse106, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest178: any = [
      {
        type: 'apiRequest',
        dataId: 166530115300733630,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '14766',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '14766_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '14766_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '14766_query',
              key: '2',
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
                  dataKey: '14766_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '14766_body.attrCode',
                  value: { type: ['customize'], code: 'busiType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '14766_body',
              key: '3',
            },
          ],
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166530137693066660,
            options: {
              compId: 'Input_busiType_956176',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '908097',
              data: '$reply_14766?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest178.params = [] || [];
    CMDGenerator(eventDataapiRequest178, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest179: any = [
      {
        type: 'apiRequest',
        dataId: 166530305308729150,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '240965',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '240965_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '240965_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '240965_query',
              key: '2',
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
                  dataKey: '240965_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '240965_body.attrCode',
                  value: { type: ['customize'], code: 'bandwidthUp' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '240965_body',
              key: '3',
            },
          ],
        },
        line_number: 13,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166547804112045400,
            shielding: true,
            options: {
              compId: 'Input_4083588',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '059996',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_240965?.resultData$',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest179.params = [] || [];
    CMDGenerator(eventDataapiRequest179, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest180: any = [
      {
        type: 'apiRequest',
        dataId: 166530185199332640,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '485509',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '485509_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '485509_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '485509_query',
              key: '2',
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
                  dataKey: '485509_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '485509_body.attrCode',
                  value: { type: ['customize'], code: 'bandwidthPort' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '485509_body',
              key: '3',
            },
          ],
        },
        line_number: 15,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166598612352895520,
            options: {
              compId: 'Input_4206103',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '2810137',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_485509?.resultData$',
            },
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest180.params = [] || [];
    CMDGenerator(eventDataapiRequest180, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest181: any = [
      {
        type: 'apiRequest',
        dataId: 166597735543940930,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '104072',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '104072_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '104072_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '104072_query',
              key: '2',
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
                  dataKey: '104072_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '104072_body.attrCode',
                  value: { type: ['customize'], code: 'ipv6BeyondSel' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '104072_body',
              key: '3',
            },
          ],
        },
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166597736440925400,
            options: {
              compId: 'Input_713501',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '567986',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_104072?.resultData$',
            },
            line_number: 18,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 167082997464611800,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '3953886',
                  pageJsonId: '8430824',
                  customFuncName: 'calculV6Num',
                },
                line_number: 19,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest181.params = [] || [];
    CMDGenerator(eventDataapiRequest181, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse107: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '452131',
            options: { context: '$state.feeInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166798375577374820,
        elseIfs: [],
        line_number: 20,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166798375577337860,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '69583',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){var market=state.feeInfo.marketList;success(market)};',
            },
            line_number: 21,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166798375577317920,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '0004261',
                  pageJsonId: '8430824',
                  dataSourceId: 166452752557535940,
                  dataSourceName: 'marketList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '302396',
                      code: 'rowId',
                      name: '行id',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_69583$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 22,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 166798375577301200,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '29185',
              pageJsonId: '8430824',
              dataSourceId: 166452624216490180,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '982351',
                  code: 'busiType',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiType',
                  },
                  showInput: true,
                  _codePath: ['busiType'],
                  _idpath: ['982351'],
                },
                {
                  attrId: '674311',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'standardPrice',
                  },
                  showInput: true,
                  _codePath: ['standardPrice'],
                  _idpath: ['674311'],
                },
                {
                  attrId: '384707',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'receiptsPrice',
                  },
                  showInput: true,
                  _codePath: ['receiptsPrice'],
                  _idpath: ['384707'],
                },
                {
                  attrId: '7058047',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidth',
                  },
                  showInput: true,
                  _codePath: ['bandwidth'],
                  _idpath: ['7058047'],
                },
                {
                  attrId: '323129',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6GiveNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6GiveNum'],
                  _idpath: ['323129'],
                },
                {
                  attrId: '535103',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4GiveNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4GiveNum'],
                  _idpath: ['535103'],
                },
                {
                  attrId: '547733',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6DemandNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6DemandNum'],
                  _idpath: ['547733'],
                },
                {
                  attrId: '8454034',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4DemandNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4DemandNum'],
                  _idpath: ['8454034'],
                },
                {
                  attrId: '618242',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondSel',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondSel'],
                  _idpath: ['618242'],
                },
                {
                  attrId: '167631',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4BeyondNum',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondNum'],
                  _idpath: ['167631'],
                },
                {
                  attrId: '1633704',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondCost',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondCost'],
                  _idpath: ['1633704'],
                },
                {
                  attrId: '841439',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4BeyondCount',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondCount'],
                  _idpath: ['841439'],
                },
                {
                  attrId: '755452',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'unitPrice',
                  },
                  showInput: true,
                  _codePath: ['unitPrice'],
                  _idpath: ['755452'],
                },
                {
                  attrId: '546822',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'lastDiscount',
                  },
                  showInput: true,
                  _codePath: ['lastDiscount'],
                  _idpath: ['546822'],
                },
                {
                  attrId: '359579',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'market',
                  },
                  showInput: true,
                  _codePath: ['market'],
                  _idpath: ['359579'],
                },
                {
                  attrId: '122027',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiTypeName',
                  },
                  showInput: true,
                  _codePath: ['busiTypeName'],
                  _idpath: ['122027'],
                },
                {
                  attrId: '500349',
                  code: 'areaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'areaType',
                  },
                  showInput: true,
                  _codePath: ['areaType'],
                  _idpath: ['500349'],
                },
                {
                  attrId: '2669222',
                  code: 'joinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'joinWay',
                  },
                  showInput: true,
                  _codePath: ['joinWay'],
                  _idpath: ['2669222'],
                },
                {
                  attrId: '8788325',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthUp',
                  },
                  showInput: true,
                  _codePath: ['bandwidthUp'],
                  _idpath: ['8788325'],
                },
                {
                  attrId: '155411',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthDown',
                  },
                  showInput: true,
                  _codePath: ['bandwidthDown'],
                  _idpath: ['155411'],
                },
                {
                  attrId: '568368',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthPort',
                  },
                  showInput: true,
                  _codePath: ['bandwidthPort'],
                  _idpath: ['568368'],
                },
                {
                  attrId: '2474105',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'singleUseFee',
                  },
                  showInput: true,
                  _codePath: ['singleUseFee'],
                  _idpath: ['2474105'],
                },
                {
                  attrId: '937028',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'portFee',
                  },
                  showInput: true,
                  _codePath: ['portFee'],
                  _idpath: ['937028'],
                },
                {
                  attrId: '214875',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondNum',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondNum'],
                  _idpath: ['214875'],
                },
                {
                  attrId: '198626',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv6BeyondCount',
                  },
                  showInput: true,
                  _codePath: ['ipv6BeyondCount'],
                  _idpath: ['198626'],
                },
                {
                  attrId: '300842',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'standardPriceSdWan',
                  },
                  showInput: true,
                  _codePath: ['standardPriceSdWan'],
                  _idpath: ['300842'],
                },
                {
                  attrId: '39146',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'receiptsPriceSdWan',
                  },
                  showInput: true,
                  _codePath: ['receiptsPriceSdWan'],
                  _idpath: ['39146'],
                },
                {
                  attrId: '684821',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'rowId',
                  },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['684821'],
                },
                {
                  attrId: '7134342',
                  code: 'bandwidthUpName',
                  name: '上行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthUpName',
                  },
                  showInput: true,
                  _codePath: ['bandwidthUpName'],
                  _idpath: ['7134342'],
                },
                {
                  attrId: '1659093',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthName',
                  },
                  showInput: true,
                  _codePath: ['bandwidthName'],
                  _idpath: ['1659093'],
                },
                {
                  attrId: '14809',
                  code: 'bandwidthDownName',
                  name: '下行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandwidthDownName',
                  },
                  showInput: true,
                  _codePath: ['bandwidthDownName'],
                  _idpath: ['14809'],
                },
                {
                  attrId: '246587',
                  code: 'ipv4BeyondCost',
                  name: 'IPv4超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'ipv4BeyondCost',
                  },
                  showInput: true,
                  _codePath: ['ipv4BeyondCost'],
                  _idpath: ['246587'],
                },
                {
                  attrId: '82243',
                  code: 'busiLastDiscount',
                  name: '商务快线最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiLastDiscount',
                  },
                  showInput: true,
                  _codePath: ['busiLastDiscount'],
                  _idpath: ['82243'],
                },
                {
                  attrId: '477975',
                  code: 'marketList',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'marketList',
                  },
                  showInput: true,
                  _codePath: ['marketList'],
                  _idpath: ['477975'],
                },
                {
                  attrId: '223337',
                  code: 'joinLineType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['joinLineType'],
                  _idpath: ['223337'],
                },
                {
                  attrId: '6604794',
                  code: 'specialLine',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['specialLine'],
                  _idpath: ['6604794'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 23,
            callback1: [],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '4572047',
                options: {
                  context: '$state.feeInfo.ipv4BeyondNum$',
                  operate: 'notEmpty',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  context: '$state.feeInfo.ipv4BeyondNum$',
                  operate: '==',
                  manualValue: '0',
                },
                condId: '529251',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168622358520998140,
            elseIfs: [],
            line_number: 24,
            callback1: [
              {
                type: 'setVisible',
                dataId: 168622358520920830,
                options: {
                  compId: 'Input_9380693',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '655224',
                  visible: '',
                },
                line_number: 25,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse107.params = [] || [];
    CMDGenerator(eventDataifelse107, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest182: any = [
      {
        type: 'apiRequest',
        dataId: 167566483534523800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '7857943',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryGroupLineRate',
          _apiCode: 'queryGroupLineRate',
          _source: 'rhin',
          _serviceId: '929637906224861184',
          _serviceTitle: '查询专线资费信息: queryGroupLineRate',
          params: 'object',
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
                  id: 'root.header',
                  dataKey: '7857943_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '7857943_root.path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '7857943_root.query',
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
                      code: 'bandWidth',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.bandWidth',
                      compType: 'Input',
                      name: 'bandWidth',
                      parents: ['root', 'body'],
                      id: 'root.body.bandWidth',
                      dataKey: '7857943_root.body.bandWidth',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                    {
                      code: 'lineType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.lineType',
                      compType: 'Input',
                      name: 'lineType',
                      parents: ['root', 'body'],
                      id: 'root.body.lineType',
                      dataKey: '7857943_root.body.lineType',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'productId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.productId',
                      compType: 'Input',
                      name: 'productId',
                      parents: ['root', 'body'],
                      id: 'root.body.productId',
                      dataKey: '7857943_root.body.productId',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                    },
                    {
                      code: 'status',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.status',
                      compType: 'Input',
                      name: 'status',
                      parents: ['root', 'body'],
                      id: 'root.body.status',
                      dataKey: '7857943_root.body.status',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                    },
                    {
                      code: 'transferMode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.transferMode',
                      compType: 'Input',
                      name: 'transferMode',
                      parents: ['root', 'body'],
                      id: 'root.body.transferMode',
                      dataKey: '7857943_root.body.transferMode',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-4',
                    },
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '7857943_root.body.catalogCode',
                      value: { type: ['customize'], code: 'CLS_CP_0007_0009' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-5',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '7857943_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '7857943_root',
            },
          ],
          actionTitle: '与需求沟通后请求使用商务快线的场景编码',
        },
        line_number: 26,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167566483534557200,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '77264',
              pageJsonId: '8430824',
              actionTitle: '',
              code: 'function main(data,state,success,fail){var groupLineRateList=reply_7857943.resultData.groupLineRateInfo;var bandWidthUpList=[];var bandWidthDownList=[];var _loop=function _loop(i){var groupLineRateInfo=groupLineRateList[i];if(groupLineRateInfo.productId!=3367){return"continue"}if(!bandWidthUpList.some(function(item){return item.bandWidth===groupLineRateInfo.bandWidth})){bandWidthUpList.push({bandWidth:groupLineRateInfo.bandWidth,bandWidthName:groupLineRateInfo.bandWidthName});var _loop2=function _loop2(_j2){if(groupLineRateList[_j2].bandWidth!==groupLineRateInfo.bandWidth){return"continue"}if(groupLineRateList[_j2].bandWidthDown&&!bandWidthDownList.some(function(item){return item.bandWidth===groupLineRateList[_j2].bandWidth&&item.bandWidthDown===groupLineRateList[_j2].bandWidthDown})){bandWidthDownList.push({bandWidth:groupLineRateList[_j2].bandWidth,bandWidthName:groupLineRateList[_j2].bandWidthName,bandWidthDown:groupLineRateList[_j2].bandWidthDown,bandWidthDownName:groupLineRateList[_j2].bandWidthDownName,lineRateInfo:groupLineRateList[_j2]})}};for(var _j2=0;_j2<groupLineRateList.length;++_j2){var _ret2=_loop2(_j2);if(_ret2==="continue")continue}}};for(var i=0;i<groupLineRateList.length;++i){var _ret=_loop(i);if(_ret==="continue")continue}for(var _i=0;_i<bandWidthUpList.length;++_i){for(var j=_i+1;j<bandWidthUpList.length;++j){var bandWidthCompara=-1;if(bandWidthUpList[j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(bandWidthUpList[j].bandWidthName.split("M")[0])}else if(bandWidthUpList[j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(bandWidthUpList[j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(bandWidthUpList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(bandWidthUpList[_i].bandWidthName.split("M")[0])}else if(bandWidthUpList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(bandWidthUpList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=bandWidthUpList[_i];bandWidthUpList[_i]=bandWidthUpList[j];bandWidthUpList[j]=temp}}}for(var _i2=0;_i2<bandWidthDownList.length;++_i2){for(var _j=_i2+1;_j<bandWidthDownList.length;++_j){var _bandWidthCompara=-1;if(bandWidthDownList[_j].bandWidthDownName.indexOf("M")!=-1){_bandWidthCompara=parseFloat(bandWidthDownList[_j].bandWidthDownName.split("M")[0])}else if(bandWidthDownList[_j].bandWidthDownName.indexOf("G")!=-1){_bandWidthCompara=parseFloat(bandWidthDownList[_j].bandWidthDownName.split("G")[0])*1024}var _bandWidth=-1;if(bandWidthDownList[_i2].bandWidthDownName.indexOf("M")!=-1){_bandWidth=parseFloat(bandWidthDownList[_i2].bandWidthDownName.split("M")[0])}else if(bandWidthDownList[_i2].bandWidthDownName.indexOf("G")!=-1){_bandWidth=parseFloat(bandWidthDownList[_i2].bandWidthDownName.split("G")[0])*1024}if(_bandWidth>_bandWidthCompara){var temp=bandWidthDownList[_i2];bandWidthDownList[_i2]=bandWidthDownList[_j];bandWidthDownList[_j]=temp}}}console.log("\\u7EC4\\u88C5\\u540E\\u7684\\u4E0A\\u884C\\u5E26\\u5BBD\\u6570\\u7EC4",bandWidthUpList);console.log("\\u7EC4\\u88C5\\u540E\\u7684\\u4E0B\\u884C\\u5E26\\u5BBD\\u6570\\u7EC4",bandWidthDownList);success({bandWidthUpList:bandWidthUpList,bandWidthDownList:bandWidthDownList})};',
            },
            line_number: 27,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167566483534515800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '602084',
                  pageJsonId: '8430824',
                  dataSourceId: 167565490693789060,
                  dataSourceName: 'bandWidthUpList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '27314045',
                      code: 'bandWidth',
                      name: '带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '468783',
                      code: 'bandWidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_77264.bandWidthUpList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 28,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167566509080150240,
                    options: {
                      compId: 'Input_4083588',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '681665',
                      data: '$data.bandWidthUpList$',
                      labelKey: 'bandWidthName',
                      valueKey: 'bandWidth',
                    },
                    line_number: 29,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '3488367',
                            options: {
                              context: '$state.feeInfo$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168656294591926800,
                        elseIfs: [],
                        line_number: 30,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168656294591949760,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '66802',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var bandWidth=state.feeInfo.bandwidthUp;var bandWidthDownList=data_77264.bandWidthDownList;var successData=[];for(var i=0;i<bandWidthDownList.length;++i){if(bandWidth===bandWidthDownList[i].bandWidth){successData.push(bandWidthDownList[i])}}success({bandWidthDownList:successData})};',
                            },
                            line_number: 31,
                            callback1: [
                              {
                                type: 'reloadSelectData',
                                dataId: 168656294591903840,
                                options: {
                                  compId: 'Input_306376',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Select',
                                  id: '708219',
                                  data: '$data_66802.bandWidthDownList$',
                                  labelKey: 'bandWidthDownName',
                                  valueKey: 'bandWidthDown',
                                },
                                line_number: 32,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 167566483534542370,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '426685',
                  pageJsonId: '8430824',
                  dataSourceId: 167566464687620540,
                  dataSourceName: 'bandWidthDownList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'lineRateInfo',
                      attrType: 'object',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'bandWidth',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '10',
                          defaultValue: '',
                          name: '属性',
                          attrId: '251484',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'configTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '20190114172350',
                          defaultValue: '',
                          name: '属性',
                          attrId: '530378',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'portPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '150400000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '41754',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'productId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '3423',
                          defaultValue: '',
                          name: '属性',
                          attrId: '8831836',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'linePrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '44000000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '220075',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '99827',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '233379',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'lineTypeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '5885994',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'lowDiscount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '4',
                          defaultValue: '',
                          name: '属性',
                          attrId: '419231',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'bandWidthDownName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '241116',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'configOperator',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '9990967',
                          defaultValue: '',
                          name: '属性',
                          attrId: '82305884',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'transferModeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: 'PON',
                          defaultValue: '',
                          name: '属性',
                          attrId: '7746728',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipv6Price',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '552947',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipv6Amount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '679977',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'bandWidthName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '155M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '8517873',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'bandWidthDown',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '0710427',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'lineType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '4203445',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'transferMode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '4',
                          defaultValue: '',
                          name: '属性',
                          attrId: '942144',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'name',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '集团MPLS-VPN专线',
                          defaultValue: '',
                          name: '属性',
                          attrId: '968124',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'statusName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '生效',
                          defaultValue: '',
                          name: '属性',
                          attrId: '117484',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'status',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '0',
                          defaultValue: '',
                          name: '属性',
                          attrId: '2070177',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '94774',
                      initialData: { type: 'static' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'bandWidth',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '2',
                      defaultValue: '',
                      name: '属性',
                      attrId: '0570729',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      attrId: '987805',
                      code: 'bandWidthName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '863911',
                      code: 'bandWidthDown',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '060927',
                      code: 'bandWidthDownName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_77264.bandWidthDownList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 33,
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
    eventDataapiRequest182.params = [] || [];
    CMDGenerator(eventDataapiRequest182, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest183: any = [
      {
        type: 'apiRequest',
        dataId: 170599438146919420,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '673942',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
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
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '673942_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '673942_root.body.attrCode',
                      value: { type: ['customize'], code: 'joinLineType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '673942_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '673942_root',
              _deletable: true,
            },
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              key: '2',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 34,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170599440224396670,
            options: {
              compId: 'Select_823017',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '1726668',
              data: '$reply_673942?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 35,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest183.params = [] || [];
    CMDGenerator(eventDataapiRequest183, {}, 'apiRequest', {
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
      className="__CustomClass_8430824__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_8430824_1',
          uid: 'View_8430824_1',
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
        ref={(r: any) => (refs['View_8430824_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911',
            uid: 'View_917911',
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
          ref={(r: any) => (refs['View_917911'] = r)}
          {...injectData}
        >
          <Form
            name={'SDWAN省内'}
            colSpan={12}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_981467'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.feeInfo}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_981467',
              uid: 'Form_981467',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={() => {
              const eventDatasetDataSource92: any = [
                {
                  type: 'setDataSource',
                  dataId: 166452673655220600,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '74294704',
                    pageJsonId: '8430824',
                    dataSourceId: 166452624216490180,
                    dataSourceName: 'feeInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '982351',
                        code: 'busiType',
                        name: '业务类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'busiType',
                        },
                        showInput: true,
                        _codePath: ['busiType'],
                        _idpath: ['982351'],
                      },
                      {
                        attrId: '674311',
                        code: 'standardPrice',
                        name: '标准价格',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'standardPrice',
                        },
                        showInput: true,
                        _codePath: ['standardPrice'],
                        _idpath: ['674311'],
                      },
                      {
                        attrId: '384707',
                        code: 'receiptsPrice',
                        name: '实收价',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPrice',
                        },
                        showInput: true,
                        _codePath: ['receiptsPrice'],
                        _idpath: ['384707'],
                      },
                      {
                        attrId: '7058047',
                        code: 'bandwidth',
                        name: '带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidth'],
                        _idpath: ['7058047'],
                      },
                      {
                        attrId: '323129',
                        code: 'ipv6GiveNum',
                        name: 'IPv6赠送数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv6GiveNum',
                        },
                        showInput: true,
                        _codePath: ['ipv6GiveNum'],
                        _idpath: ['323129'],
                      },
                      {
                        attrId: '535103',
                        code: 'ipv4GiveNum',
                        name: 'IPv4赠送数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv4GiveNum',
                        },
                        showInput: true,
                        _codePath: ['ipv4GiveNum'],
                        _idpath: ['535103'],
                      },
                      {
                        attrId: '547733',
                        code: 'ipv6DemandNum',
                        name: 'IPv6需求数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv6DemandNum',
                        },
                        showInput: true,
                        _codePath: ['ipv6DemandNum'],
                        _idpath: ['547733'],
                      },
                      {
                        attrId: '8454034',
                        code: 'ipv4DemandNum',
                        name: 'IPv4需求数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv4DemandNum',
                        },
                        showInput: true,
                        _codePath: ['ipv4DemandNum'],
                        _idpath: ['8454034'],
                      },
                      {
                        attrId: '618242',
                        code: 'ipv6BeyondSel',
                        name: 'IPv6超出选择',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'data.feeInfo.ipv6BeyondSel',
                        },
                        showInput: true,
                        _codePath: ['ipv6BeyondSel'],
                        _idpath: ['618242'],
                      },
                      {
                        attrId: '167631',
                        code: 'ipv4BeyondNum',
                        name: 'IPv4超出个数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv4BeyondNum',
                        },
                        showInput: true,
                        _codePath: ['ipv4BeyondNum'],
                        _idpath: ['167631'],
                      },
                      {
                        attrId: '1633704',
                        code: 'ipv6BeyondCost',
                        name: 'IPv6超出费用',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'data.feeInfo.ipv6BeyondCost',
                        },
                        showInput: true,
                        _codePath: ['ipv6BeyondCost'],
                        _idpath: ['1633704'],
                      },
                      {
                        attrId: '841439',
                        code: 'ipv4BeyondCount',
                        name: 'IPv4元/月/个',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv4BeyondCount'],
                        _idpath: ['841439'],
                      },
                      {
                        attrId: '755452',
                        code: 'unitPrice',
                        name: '单价（元/G）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['unitPrice'],
                        _idpath: ['755452'],
                      },
                      {
                        attrId: '546822',
                        code: 'lastDiscount',
                        name: '最终折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'lastDiscount',
                        },
                        showInput: true,
                        _codePath: ['lastDiscount'],
                        _idpath: ['546822'],
                      },
                      {
                        attrId: '359579',
                        code: 'market',
                        name: '营销案',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['market'],
                        _idpath: ['359579'],
                      },
                      {
                        attrId: '122027',
                        code: 'busiTypeName',
                        name: '业务类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['busiTypeName'],
                        _idpath: ['122027'],
                      },
                      {
                        attrId: '500349',
                        code: 'areaType',
                        name: '区域类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['areaType'],
                        _idpath: ['500349'],
                      },
                      {
                        attrId: '2669222',
                        code: 'joinWay',
                        name: '接入方式',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['joinWay'],
                        _idpath: ['2669222'],
                      },
                      {
                        attrId: '8788325',
                        code: 'bandwidthUp',
                        name: '上行宽带',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'bandwidthUp',
                        },
                        showInput: true,
                        _codePath: ['bandwidthUp'],
                        _idpath: ['8788325'],
                      },
                      {
                        attrId: '155411',
                        code: 'bandwidthDown',
                        name: '下行宽带',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'bandwidthDown',
                        },
                        showInput: true,
                        _codePath: ['bandwidthDown'],
                        _idpath: ['155411'],
                      },
                      {
                        attrId: '568368',
                        code: 'bandwidthPort',
                        name: 'SDWAN端口带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'bandwidthPort',
                        },
                        showInput: true,
                        _codePath: ['bandwidthPort'],
                        _idpath: ['568368'],
                      },
                      {
                        attrId: '2474105',
                        code: 'singleUseFee',
                        name: '一次性费用',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['singleUseFee'],
                        _idpath: ['2474105'],
                      },
                      {
                        attrId: '937028',
                        code: 'portFee',
                        name: '端口费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['portFee'],
                        _idpath: ['937028'],
                      },
                      {
                        attrId: '214875',
                        code: 'ipv6BeyondNum',
                        name: 'IPv6超出个数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6BeyondNum'],
                        _idpath: ['214875'],
                      },
                      {
                        attrId: '198626',
                        code: 'ipv6BeyondCount',
                        name: 'IPv6元/月/个',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['ipv6BeyondCount'],
                        _idpath: ['198626'],
                      },
                      {
                        attrId: '300842',
                        code: 'standardPriceSdWan',
                        name: 'SDWAN标准价格',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'standardPriceSdWan',
                        },
                        showInput: true,
                        _codePath: ['standardPriceSdWan'],
                        _idpath: ['300842'],
                      },
                      {
                        attrId: '39146',
                        code: 'receiptsPriceSdWan',
                        name: 'SDWAN实收价格',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPriceSdWan',
                        },
                        showInput: true,
                        _codePath: ['receiptsPriceSdWan'],
                        _idpath: ['39146'],
                      },
                      {
                        attrId: '684821',
                        code: 'rowId',
                        name: '行id',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['rowId'],
                        _idpath: ['684821'],
                      },
                      {
                        attrId: '7134342',
                        code: 'bandwidthUpName',
                        name: '上行宽带名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthUpName'],
                        _idpath: ['7134342'],
                      },
                      {
                        attrId: '1659093',
                        code: 'bandwidthName',
                        name: '带宽名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthName'],
                        _idpath: ['1659093'],
                      },
                      {
                        attrId: '14809',
                        code: 'bandwidthDownName',
                        name: '下行宽带名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['bandwidthDownName'],
                        _idpath: ['14809'],
                      },
                      {
                        attrId: '246587',
                        code: 'ipv4BeyondCost',
                        name: 'IPv4超出费用',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv4BeyondCost',
                        },
                        showInput: true,
                        _codePath: ['ipv4BeyondCost'],
                        _idpath: ['246587'],
                      },
                      {
                        attrId: '82243',
                        code: 'busiLastDiscount',
                        name: '商务快线最终折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'busiLastDiscount',
                        },
                        showInput: true,
                        _codePath: ['busiLastDiscount'],
                        _idpath: ['82243'],
                      },
                      {
                        attrId: '477975',
                        code: 'marketList',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['marketList'],
                        _idpath: ['477975'],
                      },
                      {
                        attrId: '223337',
                        code: 'joinLineType',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['joinLineType'],
                        _idpath: ['223337'],
                      },
                      {
                        attrId: '6604794',
                        code: 'specialLine',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['specialLine'],
                        _idpath: ['6604794'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource92.params = [] || [];
              CMDGenerator(eventDatasetDataSource92, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Form_981467'] = r)}
            {...injectData}
          >
            <Select
              name={'业务类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'busiType'}
              value={data?.feeInfo?.busiType}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_busiType_956176',
                uid: 'Input_busiType_956176',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData146: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166562565278430850,
                    options: {
                      compId: 'Input_busiType_956176',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '19817',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166562590352649200,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '302356',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '982351',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_19817[0].value$',
                              },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_19817[0].label$',
                              },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['areaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUpName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDownName'],
                              _idpath: ['14809'],
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCost'],
                              _idpath: ['246587'],
                            },
                            {
                              attrId: '82243',
                              code: 'busiLastDiscount',
                              name: '商务快线最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiLastDiscount'],
                              _idpath: ['82243'],
                            },
                            {
                              attrId: '223337',
                              code: 'joinLineType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinLineType'],
                              _idpath: ['223337'],
                            },
                            {
                              attrId: '477975',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['477975'],
                            },
                            {
                              attrId: '6604794',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['6604794'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData146.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData146,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_busiType_956176'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_937235',
                uid: 'View_937235',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_937235'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                formItemIndex={1}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_001221',
                  uid: 'View_001221',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => (refs['View_001221'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  formItemIndex={1}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_536092',
                    uid: 'View_536092',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['View_536092'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'*'}
                    content={'*'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_062895',
                      uid: 'Text_062895',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'right',
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#ff4d4f',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                      flex: 1.9,
                      padding: '0px 4px 0px 0px',
                    }}
                    ref={(r: any) => (refs['Text_062895'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'专线编码'}
                    content={'专线编码：'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_6076956',
                      uid: 'Text_6076956',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{
                      textAlign: 'right',
                      fontSize: 12,
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                      width: '60px',
                    }}
                    ref={(r: any) => (refs['Text_6076956'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_550961',
                      uid: 'View_550961',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{
                      textAlign: 'right',
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      flex: 6.5,
                    }}
                    ref={(r: any) => (refs['View_550961'] = r)}
                    {...injectData}
                  >
                    <View
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_110599',
                        uid: 'View_110599',
                        type: 'View',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={false}
                      readOnly={false}
                      style={{
                        textAlign: 'left',
                        display: 'block',
                        flexDirection: 'column',
                        padding: '0px 0px 0px 0px',
                        width: '100%',
                        flex: 4,
                      }}
                      ref={(r: any) => (refs['View_110599'] = r)}
                      {...injectData}
                    >
                      <Input
                        name={'专线编码'}
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
                        fieldName={'specialLine'}
                        value={data?.feeInfo?.specialLine}
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
                          id: 'Input_821244',
                          uid: 'Input_821244',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) => (refs['Input_821244'] = r)}
                        {...injectData}
                      />
                    </View>
                    <View
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_344628',
                        uid: 'View_344628',
                        type: 'View',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={false}
                      readOnly={false}
                      style={{
                        textAlign: 'left',
                        display: 'block',
                        padding: '0px 0px 0px 0px',
                        width: '100px',
                        flex: 1,
                      }}
                      ref={(r: any) => (refs['View_344628'] = r)}
                      {...injectData}
                    >
                      <Button
                        shape={null}
                        classification={'default'}
                        autoProcessFlow={false}
                        flowProcessResult={'common'}
                        iconPosition={'left'}
                        ghost={false}
                        block={false}
                        size={'default'}
                        type={'default'}
                        icon={{
                          type: 'search',
                          theme: 'outlined',
                          fontAddress: '',
                          isIconFont: false,
                          iconFileInfo: {},
                        }}
                        iconType={'search'}
                        hasIcon={true}
                        $$componentItem={{
                          id: 'Button_0317846',
                          uid: 'Button_0317846',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={false}
                        readOnly={false}
                        style={{ width: '100%' }}
                        onClick={(e: any) => {
                          const eventDatacallCustomPageFunc13: any = [
                            {
                              type: 'callCustomPageFunc',
                              dataId: 168793854799980830,
                              options: {
                                compId: 'callCustomPageFunc',
                                compName: 'system',
                                id: '598112',
                                pageJsonId: '8430824',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                modalPath: '/auditOrderPrepare',
                                customFuncName: 'getGroupInfo',
                              },
                              line_number: 1,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '3960426',
                                      options: {
                                        context: '$CustoPageFuncs_598112$',
                                        operate: 'notEmpty',
                                        manualValue: 'undefined',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 168793937014273150,
                                  elseIfs: [
                                    {
                                      dataName: 'elseIf',
                                      dataId: 168793977986279580,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168793982300429950,
                                          children: [],
                                          todoOptions: [
                                            'msgType',
                                            'value',
                                            'duration',
                                          ],
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '5000003',
                                            pageJsonId: '8430824',
                                            type: 'info',
                                            value: '请先选择集团',
                                          },
                                          actionObjId: 'showMessage',
                                          actionObjName: 'system',
                                          value: 'showMessage',
                                          tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                          line_number: 26,
                                        },
                                      ],
                                      condition: [],
                                      value: 'elseIf',
                                      callback: [
                                        {
                                          type: 'showMessage',
                                          dataId: 168793982300429950,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '5000003',
                                            pageJsonId: '8430824',
                                            type: 'info',
                                            value: '请先选择集团',
                                          },
                                          line_number: 26,
                                        },
                                      ],
                                    },
                                  ],
                                  line_number: 2,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 168793978507618980,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '104488',
                                        pageJsonId: '8430824',
                                        dataSourceId: 170591186033942240,
                                        dataSourceName: 'pageData',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '173395',
                                            code: 'groupId',
                                            name: '属性',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            value: {
                                              type: [
                                                'context',
                                                '$CustoPageFuncs_598112$',
                                              ],
                                              code: '',
                                            },
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 3,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'showCustomModal',
                                      dataId: 168794008217604300,
                                      options: {
                                        compId: 'showCustomModal',
                                        compName: 'page',
                                        id: '5905692',
                                        pageJsonId: '8430824',
                                        modalname: '/queryLine',
                                        pageId: '991181819535351808',
                                        modalPath: '/queryLine',
                                        paramsObj: {
                                          groupId: '$CustoPageFuncs_598112$',
                                          prodId: '3514',
                                          prodName: '广域网专线',
                                        },
                                        paramsObjKeyValueMap: {
                                          groupId: '$CustoPageFuncs_598112$',
                                          prodId: '3514',
                                          prodName: '广域网专线',
                                        },
                                      },
                                      line_number: 4,
                                      callback1: [
                                        {
                                          type: 'console',
                                          dataId: 168794173738251360,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '661837',
                                            pageJsonId: '8430824',
                                            value: [
                                              '$okData_5905692$',
                                              '弹窗确认回调',
                                            ],
                                          },
                                          line_number: 5,
                                        },
                                        {
                                          type: 'customActionCode',
                                          dataId: 168913057481113900,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '783205',
                                            pageJsonId: '8430824',
                                            code: 'function main(data,state,success,fail){console.log("1111111111",okData_5905692.bandwidth);var bandwidth=okData_5905692.bandwidth;var unit=bandwidth.charAt(bandwidth.length-1);var totalNum=bandwidth;if(unit=="G"){var str=bandwidth.slice(0,bandwidth.length-1);var num=parseFloat(str);totalNum=num*1024}if(unit=="M"){var str=bandwidth.slice(0,bandwidth.length-1);totalNum=parseFloat(str)}console.log("totalNum",totalNum);success(totalNum)};',
                                          },
                                          line_number: 6,
                                          callback1: [
                                            {
                                              type: 'setDataSource',
                                              dataId: 168913099458917440,
                                              options: {
                                                compId: 'setDataSource',
                                                compName: 'page',
                                                id: '844573',
                                                pageJsonId: '8430824',
                                                dataSourceId: 166452624216490180,
                                                dataSourceName: 'feeInfo',
                                                dataSourceRelType: 'custom',
                                                dataSourceSetValue: [
                                                  {
                                                    attrId: '982351',
                                                    code: 'busiType',
                                                    name: '业务类型',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['busiType'],
                                                    _idpath: ['982351'],
                                                  },
                                                  {
                                                    attrId: '674311',
                                                    code: 'standardPrice',
                                                    name: '标准价格',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'standardPrice',
                                                    ],
                                                    _idpath: ['674311'],
                                                  },
                                                  {
                                                    attrId: '384707',
                                                    code: 'receiptsPrice',
                                                    name: '实收价',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'receiptsPrice',
                                                    ],
                                                    _idpath: ['384707'],
                                                  },
                                                  {
                                                    attrId: '7058047',
                                                    code: 'bandwidth',
                                                    name: '带宽',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$data_783205$',
                                                      ],
                                                      code: '',
                                                    },
                                                    _codePath: ['bandwidth'],
                                                    _idpath: ['7058047'],
                                                  },
                                                  {
                                                    attrId: '323129',
                                                    code: 'ipv6GiveNum',
                                                    name: 'IPv6赠送数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['ipv6GiveNum'],
                                                    _idpath: ['323129'],
                                                  },
                                                  {
                                                    attrId: '535103',
                                                    code: 'ipv4GiveNum',
                                                    name: 'IPv4赠送数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['ipv4GiveNum'],
                                                    _idpath: ['535103'],
                                                  },
                                                  {
                                                    attrId: '547733',
                                                    code: 'ipv6DemandNum',
                                                    name: 'IPv6需求数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv6DemandNum',
                                                    ],
                                                    _idpath: ['547733'],
                                                  },
                                                  {
                                                    attrId: '8454034',
                                                    code: 'ipv4DemandNum',
                                                    name: 'IPv4需求数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv4DemandNum',
                                                    ],
                                                    _idpath: ['8454034'],
                                                  },
                                                  {
                                                    attrId: '618242',
                                                    code: 'ipv6BeyondSel',
                                                    name: 'IPv6超出选择',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv6BeyondSel',
                                                    ],
                                                    _idpath: ['618242'],
                                                  },
                                                  {
                                                    attrId: '167631',
                                                    code: 'ipv4BeyondNum',
                                                    name: 'IPv4超出个数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv4BeyondNum',
                                                    ],
                                                    _idpath: ['167631'],
                                                  },
                                                  {
                                                    attrId: '1633704',
                                                    code: 'ipv6BeyondCost',
                                                    name: 'IPv6超出费用',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv6BeyondCost',
                                                    ],
                                                    _idpath: ['1633704'],
                                                  },
                                                  {
                                                    attrId: '841439',
                                                    code: 'ipv4BeyondCount',
                                                    name: 'IPv4元/月/个',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv4BeyondCount',
                                                    ],
                                                    _idpath: ['841439'],
                                                  },
                                                  {
                                                    attrId: '755452',
                                                    code: 'unitPrice',
                                                    name: '单价（元/G）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['unitPrice'],
                                                    _idpath: ['755452'],
                                                  },
                                                  {
                                                    attrId: '546822',
                                                    code: 'lastDiscount',
                                                    name: '最终折扣',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['lastDiscount'],
                                                    _idpath: ['546822'],
                                                  },
                                                  {
                                                    attrId: '359579',
                                                    code: 'market',
                                                    name: '营销案',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['market'],
                                                    _idpath: ['359579'],
                                                  },
                                                  {
                                                    attrId: '122027',
                                                    code: 'busiTypeName',
                                                    name: '业务类型名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['busiTypeName'],
                                                    _idpath: ['122027'],
                                                  },
                                                  {
                                                    attrId: '500349',
                                                    code: 'areaType',
                                                    name: '区域类型',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['areaType'],
                                                    _idpath: ['500349'],
                                                  },
                                                  {
                                                    attrId: '2669222',
                                                    code: 'joinWay',
                                                    name: '接入方式',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'transferMode',
                                                    },
                                                    _codePath: ['joinWay'],
                                                    _idpath: ['2669222'],
                                                  },
                                                  {
                                                    attrId: '8788325',
                                                    code: 'bandwidthUp',
                                                    name: '上行宽带',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['bandwidthUp'],
                                                    _idpath: ['8788325'],
                                                  },
                                                  {
                                                    attrId: '155411',
                                                    code: 'bandwidthDown',
                                                    name: '下行宽带',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'bandwidthDown',
                                                    ],
                                                    _idpath: ['155411'],
                                                  },
                                                  {
                                                    attrId: '568368',
                                                    code: 'bandwidthPort',
                                                    name: 'SDWAN端口带宽',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'bandwidthPort',
                                                    ],
                                                    _idpath: ['568368'],
                                                  },
                                                  {
                                                    attrId: '2474105',
                                                    code: 'singleUseFee',
                                                    name: '一次性费用',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['singleUseFee'],
                                                    _idpath: ['2474105'],
                                                  },
                                                  {
                                                    attrId: '937028',
                                                    code: 'portFee',
                                                    name: '端口费',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['portFee'],
                                                    _idpath: ['937028'],
                                                  },
                                                  {
                                                    attrId: '214875',
                                                    code: 'ipv6BeyondNum',
                                                    name: 'IPv6超出个数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv6BeyondNum',
                                                    ],
                                                    _idpath: ['214875'],
                                                  },
                                                  {
                                                    attrId: '198626',
                                                    code: 'ipv6BeyondCount',
                                                    name: 'IPv6元/月/个',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv6BeyondCount',
                                                    ],
                                                    _idpath: ['198626'],
                                                  },
                                                  {
                                                    attrId: '300842',
                                                    code: 'standardPriceSdWan',
                                                    name: 'SDWAN标准价格',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'standardPriceSdWan',
                                                    ],
                                                    _idpath: ['300842'],
                                                  },
                                                  {
                                                    attrId: '39146',
                                                    code: 'receiptsPriceSdWan',
                                                    name: 'SDWAN实收价格',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'receiptsPriceSdWan',
                                                    ],
                                                    _idpath: ['39146'],
                                                  },
                                                  {
                                                    attrId: '684821',
                                                    code: 'rowId',
                                                    name: '行id',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['rowId'],
                                                    _idpath: ['684821'],
                                                  },
                                                  {
                                                    attrId: '7134342',
                                                    code: 'bandwidthUpName',
                                                    name: '上行宽带名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'bandwidthUpName',
                                                    ],
                                                    _idpath: ['7134342'],
                                                  },
                                                  {
                                                    attrId: '1659093',
                                                    code: 'bandwidthName',
                                                    name: '带宽名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'bandwidthName',
                                                    ],
                                                    _idpath: ['1659093'],
                                                  },
                                                  {
                                                    attrId: '477975',
                                                    code: 'marketList',
                                                    name: '属性',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['477975'],
                                                    children: [],
                                                  },
                                                  {
                                                    attrId: '501067',
                                                    code: 'busiEnsureGrade',
                                                    name: '业务保障等级\t',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'bizSecurityLvName',
                                                    },
                                                    _codePath: [
                                                      'busiEnsureGrade',
                                                    ],
                                                    _idpath: ['501067'],
                                                    _deletable: true,
                                                  },
                                                  {
                                                    attrId: '5532275',
                                                    code: 'accessLocation',
                                                    name: '接入地址',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'installAddr',
                                                    },
                                                    _codePath: [
                                                      'accessLocation',
                                                    ],
                                                    _idpath: ['5532275'],
                                                    _deletable: true,
                                                  },
                                                  {
                                                    attrId: '6604794',
                                                    code: 'specialLine',
                                                    name: '属性',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['6604794'],
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'specialLine',
                                                    },
                                                  },
                                                  {
                                                    attrId: '14809',
                                                    code: 'bandwidthDownName',
                                                    name: '下行宽带名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'bandwidthDownName',
                                                    ],
                                                    _idpath: ['14809'],
                                                  },
                                                  {
                                                    attrId: '82243',
                                                    code: 'busiLastDiscount',
                                                    name: '商务快线最终折扣',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'busiLastDiscount',
                                                    ],
                                                    _idpath: ['82243'],
                                                  },
                                                  {
                                                    attrId: '223337',
                                                    code: 'joinLineType',
                                                    name: '属性',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['joinLineType'],
                                                    _idpath: ['223337'],
                                                  },
                                                  {
                                                    attrId: '246587',
                                                    code: 'ipv4BeyondCost',
                                                    name: 'IPv4超出费用',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'ipv4BeyondCost',
                                                    ],
                                                    _idpath: ['246587'],
                                                  },
                                                ],
                                                operateType: 1,
                                                onlySetPatch: true,
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
                                              },
                                              line_number: 7,
                                              callback1: [
                                                {
                                                  type: 'setValue',
                                                  dataId: 168913099458927260,
                                                  options: {
                                                    compId: [
                                                      'Input_821244',
                                                      'Input_bandwidth_198362',
                                                    ],
                                                    compLib: 'comm',
                                                    pageJsonId: '8430824',
                                                    compName: 'Select',
                                                    id: '870508',
                                                    valueList: {
                                                      Input_bandwidth_198362:
                                                        '$data_783205$',
                                                      Input_821244:
                                                        '$okData_5905692.specialLine$',
                                                    },
                                                    compid: [
                                                      'Input_821244',
                                                      'Input_bandwidth_198362',
                                                    ],
                                                  },
                                                  line_number: 8,
                                                  callback1: [
                                                    {
                                                      type: 'getSelectedData',
                                                      dataId: 168913099458964580,
                                                      options: {
                                                        compId:
                                                          'Input_bandwidth_198362',
                                                        compLib: 'comm',
                                                        pageJsonId: '8430824',
                                                        compName: 'Select',
                                                        id: '899798',
                                                      },
                                                      line_number: 9,
                                                      callback1: [
                                                        {
                                                          type: 'customActionCode',
                                                          dataId: 168913099458983260,
                                                          options: {
                                                            compId:
                                                              'customActionCode',
                                                            compName: 'page',
                                                            id: '9624546',
                                                            pageJsonId:
                                                              '8430824',
                                                            code: 'function main(data,state,success,fail){console.log("\\u9009\\u4E2D\\u5BBD\\u5E26:",selectedData_899798[0]);for(var i=0;i<data.groupLineRateData.groupLineRateInfo.length;++i){var item=data.groupLineRateData.groupLineRateInfo[i];if(item.bandWidth==selectedData_899798[0].value){var linePrice=parseFloat(item.linePrice)/1000;success({item:item,linePrice:linePrice})}}};',
                                                          },
                                                          line_number: 10,
                                                          callback1: [
                                                            {
                                                              type: 'setValue',
                                                              dataId: 168913099458925250,
                                                              options: {
                                                                compId:
                                                                  'Input_standardPrice_89896',
                                                                compLib: 'comm',
                                                                pageJsonId:
                                                                  '8430824',
                                                                compName:
                                                                  'Input',
                                                                id: '607042',
                                                                value:
                                                                  '$reply_489762?.resultData[0].localPrice$',
                                                                valueList: {
                                                                  Input_standardPrice_89896:
                                                                    '$data_9624546.linePrice$',
                                                                },
                                                              },
                                                              line_number: 11,
                                                              callback1: [
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 168913099458951420,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '505815',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculEndDiscount',
                                                                  },
                                                                  line_number: 12,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 168913099458932220,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '057929',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculPrice',
                                                                  },
                                                                  line_number: 13,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 168913099458995330,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '14523',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculReceiptsPriceSum',
                                                                  },
                                                                  line_number: 14,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                          callback2: [],
                                                        },
                                                        {
                                                          type: 'ifelse',
                                                          shielding: true,
                                                          condition: [
                                                            {
                                                              condId: '8945507',
                                                              options: {
                                                                useManual: true,
                                                                useObject:
                                                                  false,
                                                                operate: '==',
                                                                manualValue:
                                                                  '2',
                                                              },
                                                              conditionType:
                                                                'checkValue',
                                                              objType: 'Select',
                                                              objId:
                                                                'Input_busiType_956176',
                                                            },
                                                          ],
                                                          dataId: 168913099458978850,
                                                          elseIfs: [],
                                                          line_number: 15,
                                                          callback1: [
                                                            {
                                                              type: 'customActionCode',
                                                              dataId: 168913099458920400,
                                                              shielding: true,
                                                              options: {
                                                                compId:
                                                                  'customActionCode',
                                                                compName:
                                                                  'page',
                                                                id: '4626977',
                                                                pageJsonId:
                                                                  '8430824',
                                                                actionTitle:
                                                                  '计算宽带是否大于1G',
                                                                code: 'function main(data,state,success,fail){console.log("\\u9009\\u4E2D\\u5BBD\\u5E26:",selectedData_899798[0].label);var bandwidth=selectedData_899798[0].label;var unit=bandwidth.charAt(bandwidth.length-1);if(unit=="M"){data.pageData.isBig=0;return fail()}if(unit=="G"){var str=bandwidth.slice(0,bandwidth.length-1);console.log(str);data.pageData.isBig=1;if(str>=1){return success()}}data.pageData.isBig=0;return fail()};',
                                                              },
                                                              line_number: 16,
                                                              callback1: [
                                                                {
                                                                  type: 'sysSetVisible',
                                                                  dataId: 168913099458973380,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId: [
                                                                      'Card_08175294',
                                                                    ],
                                                                    compName:
                                                                      'page',
                                                                    id: '082132',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    visible:
                                                                      'true',
                                                                    compid: [
                                                                      'Card_08175294',
                                                                    ],
                                                                  },
                                                                  line_number: 17,
                                                                },
                                                                {
                                                                  type: 'sysSetRequired',
                                                                  dataId: 168913099458917220,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId: [
                                                                      'Select_3511824',
                                                                      'Select_087001',
                                                                      'Input_665791',
                                                                      'Select_5731432',
                                                                      'Input_015922',
                                                                    ],
                                                                    compName:
                                                                      'page',
                                                                    id: '054444',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    required:
                                                                      'true',
                                                                    compid: [
                                                                      'Select_3511824',
                                                                      'Select_087001',
                                                                      'Input_665791',
                                                                      'Select_5731432',
                                                                      'Input_015922',
                                                                    ],
                                                                  },
                                                                  line_number: 18,
                                                                },
                                                                {
                                                                  type: 'setDataSource',
                                                                  dataId: 168913099458923140,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId:
                                                                      'setDataSource',
                                                                    compName:
                                                                      'page',
                                                                    id: '620306',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    dataSourceId: 166452624216490180,
                                                                    dataSourceName:
                                                                      'feeInfo',
                                                                    dataSourceRelType:
                                                                      'custom',
                                                                    dataSourceSetValue:
                                                                      [
                                                                        {
                                                                          attrId:
                                                                            '982351',
                                                                          code: 'busiType',
                                                                          name: '业务类型',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'busiType',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '982351',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '674311',
                                                                          code: 'standardPrice',
                                                                          name: '标准价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'standardPrice',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '674311',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '384707',
                                                                          code: 'receiptsPrice',
                                                                          name: '实收价',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'receiptsPrice',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '384707',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7058047',
                                                                          code: 'bandwidth',
                                                                          name: '带宽',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidth',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '7058047',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '323129',
                                                                          code: 'ipv6GiveNum',
                                                                          name: 'IPv6赠送数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6GiveNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '323129',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '535103',
                                                                          code: 'ipv4GiveNum',
                                                                          name: 'IPv4赠送数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4GiveNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '535103',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '547733',
                                                                          code: 'ipv6DemandNum',
                                                                          name: 'IPv6需求数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6DemandNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '547733',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '8454034',
                                                                          code: 'ipv4DemandNum',
                                                                          name: 'IPv4需求数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4DemandNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '8454034',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '618242',
                                                                          code: 'ipv6BeyondSel',
                                                                          name: 'IPv6超出选择',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondSel',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '618242',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '167631',
                                                                          code: 'ipv4BeyondNum',
                                                                          name: 'IPv4超出个数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4BeyondNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '167631',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '1633704',
                                                                          code: 'ipv6BeyondCost',
                                                                          name: 'IPv6超出费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondCost',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '1633704',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '841439',
                                                                          code: 'ipv4BeyondCount',
                                                                          name: 'IPv4元/月/个',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4BeyondCount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '841439',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '755452',
                                                                          code: 'unitPrice',
                                                                          name: '单价（元/G）',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'unitPrice',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '755452',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '546822',
                                                                          code: 'lastDiscount',
                                                                          name: '最终折扣',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'lastDiscount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '546822',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '359579',
                                                                          code: 'market',
                                                                          name: '营销案',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'market',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '359579',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '122027',
                                                                          code: 'busiTypeName',
                                                                          name: '业务类型名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'busiTypeName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '122027',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '500349',
                                                                          code: 'areaType',
                                                                          name: '区域类型',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'areaType',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '500349',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '2669222',
                                                                          code: 'joinWay',
                                                                          name: '接入方式',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'joinWay',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '2669222',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '8788325',
                                                                          code: 'bandwidthUp',
                                                                          name: '上行宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthUp',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '8788325',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '155411',
                                                                          code: 'bandwidthDown',
                                                                          name: '下行宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthDown',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '155411',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '568368',
                                                                          code: 'bandwidthPort',
                                                                          name: 'SDWAN端口带宽',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthPort',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '568368',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '2474105',
                                                                          code: 'singleUseFee',
                                                                          name: '一次性费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'singleUseFee',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '2474105',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '937028',
                                                                          code: 'portFee',
                                                                          name: '端口费',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'portFee',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '937028',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '214875',
                                                                          code: 'ipv6BeyondNum',
                                                                          name: 'IPv6超出个数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '214875',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '198626',
                                                                          code: 'ipv6BeyondCount',
                                                                          name: 'IPv6元/月/个',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondCount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '198626',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '300842',
                                                                          code: 'standardPriceSdWan',
                                                                          name: 'SDWAN标准价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'standardPriceSdWan',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '300842',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '39146',
                                                                          code: 'receiptsPriceSdWan',
                                                                          name: 'SDWAN实收价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'receiptsPriceSdWan',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '39146',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '684821',
                                                                          code: 'rowId',
                                                                          name: '行id',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'rowId',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '684821',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7134342',
                                                                          code: 'bandwidthUpName',
                                                                          name: '上行宽带名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthUpName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '7134342',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '1659093',
                                                                          code: 'bandwidthName',
                                                                          name: '带宽名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '1659093',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '477975',
                                                                          code: 'marketList',
                                                                          name: '属性',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _idpath:
                                                                            [
                                                                              '477975',
                                                                            ],
                                                                          children:
                                                                            [],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '70285',
                                                                          code: 'isBig',
                                                                          name: '大带宽标识',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                              value:
                                                                                'false',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          value:
                                                                            {
                                                                              type: [
                                                                                'customize',
                                                                              ],
                                                                              code: '1',
                                                                            },
                                                                          _codePath:
                                                                            [
                                                                              'isBig',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '70285',
                                                                            ],
                                                                          _deletable:
                                                                            true,
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '6604794',
                                                                          code: 'specialLine',
                                                                          name: '属性',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _idpath:
                                                                            [
                                                                              '6604794',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '14809',
                                                                          code: 'bandwidthDownName',
                                                                          name: '下行宽带名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthDownName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '14809',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '82243',
                                                                          code: 'busiLastDiscount',
                                                                          name: '商务快线最终折扣',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'busiLastDiscount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '82243',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '223337',
                                                                          code: 'joinLineType',
                                                                          name: '属性',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'joinLineType',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '223337',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '246587',
                                                                          code: 'ipv4BeyondCost',
                                                                          name: 'IPv4超出费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4BeyondCost',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '246587',
                                                                            ],
                                                                        },
                                                                      ],
                                                                    operateType: 1,
                                                                    onlySetPatch:
                                                                      true,
                                                                    otherObjectArrayOptions:
                                                                      {},
                                                                    targetDataSourcePaths:
                                                                      [],
                                                                  },
                                                                  line_number: 19,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'setDataSource',
                                                                  dataId: 168915465295429660,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId:
                                                                      'setDataSource',
                                                                    compName:
                                                                      'page',
                                                                    id: '361119',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    dataSourceId: 168785075175965400,
                                                                    dataSourceName:
                                                                      'pageData',
                                                                    dataSourceRelType:
                                                                      'custom',
                                                                    dataSourceSetValue:
                                                                      [
                                                                        {
                                                                          attrId:
                                                                            '701447',
                                                                          code: 'isBig',
                                                                          name: '是否为大宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          value:
                                                                            {
                                                                              type: [
                                                                                'customize',
                                                                              ],
                                                                              code: '1',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '4719166',
                                                                          code: 'groupId',
                                                                          name: '集团编号',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                        },
                                                                      ],
                                                                    operateType: 1,
                                                                    onlySetPatch:
                                                                      true,
                                                                    otherObjectArrayOptions:
                                                                      {},
                                                                    targetDataSourcePaths:
                                                                      [],
                                                                  },
                                                                  line_number: 20,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                              ],
                                                              callback2: [
                                                                {
                                                                  type: 'sysSetVisible',
                                                                  dataId: 168913099458942460,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId: [
                                                                      'Card_08175294',
                                                                    ],
                                                                    compName:
                                                                      'page',
                                                                    id: '660866',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    visible: '',
                                                                    compid: [
                                                                      'Card_08175294',
                                                                    ],
                                                                  },
                                                                  line_number: 21,
                                                                },
                                                                {
                                                                  type: 'sysSetRequired',
                                                                  dataId: 168913099458937920,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId: [
                                                                      'Select_3511824',
                                                                      'Select_087001',
                                                                      'Input_665791',
                                                                      'Select_5731432',
                                                                      'Input_015922',
                                                                    ],
                                                                    compName:
                                                                      'page',
                                                                    id: '163496',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    required:
                                                                      '',
                                                                    compid: [
                                                                      'Select_3511824',
                                                                      'Select_087001',
                                                                      'Input_665791',
                                                                      'Select_5731432',
                                                                      'Input_015922',
                                                                    ],
                                                                  },
                                                                  line_number: 22,
                                                                },
                                                                {
                                                                  type: 'setDataSource',
                                                                  dataId: 168913099458993700,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId:
                                                                      'setDataSource',
                                                                    compName:
                                                                      'page',
                                                                    id: '0208',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    dataSourceId: 166452624216490180,
                                                                    dataSourceName:
                                                                      'feeInfo',
                                                                    dataSourceRelType:
                                                                      'custom',
                                                                    dataSourceSetValue:
                                                                      [
                                                                        {
                                                                          attrId:
                                                                            '982351',
                                                                          code: 'busiType',
                                                                          name: '业务类型',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'busiType',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '982351',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '674311',
                                                                          code: 'standardPrice',
                                                                          name: '标准价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'standardPrice',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '674311',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '384707',
                                                                          code: 'receiptsPrice',
                                                                          name: '实收价',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'receiptsPrice',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '384707',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7058047',
                                                                          code: 'bandwidth',
                                                                          name: '带宽',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidth',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '7058047',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '323129',
                                                                          code: 'ipv6GiveNum',
                                                                          name: 'IPv6赠送数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6GiveNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '323129',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '535103',
                                                                          code: 'ipv4GiveNum',
                                                                          name: 'IPv4赠送数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4GiveNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '535103',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '547733',
                                                                          code: 'ipv6DemandNum',
                                                                          name: 'IPv6需求数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6DemandNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '547733',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '8454034',
                                                                          code: 'ipv4DemandNum',
                                                                          name: 'IPv4需求数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4DemandNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '8454034',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '618242',
                                                                          code: 'ipv6BeyondSel',
                                                                          name: 'IPv6超出选择',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondSel',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '618242',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '167631',
                                                                          code: 'ipv4BeyondNum',
                                                                          name: 'IPv4超出个数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4BeyondNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '167631',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '1633704',
                                                                          code: 'ipv6BeyondCost',
                                                                          name: 'IPv6超出费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondCost',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '1633704',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '841439',
                                                                          code: 'ipv4BeyondCount',
                                                                          name: 'IPv4元/月/个',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4BeyondCount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '841439',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '755452',
                                                                          code: 'unitPrice',
                                                                          name: '单价（元/G）',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'unitPrice',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '755452',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '546822',
                                                                          code: 'lastDiscount',
                                                                          name: '最终折扣',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'lastDiscount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '546822',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '359579',
                                                                          code: 'market',
                                                                          name: '营销案',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'market',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '359579',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '122027',
                                                                          code: 'busiTypeName',
                                                                          name: '业务类型名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'busiTypeName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '122027',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '500349',
                                                                          code: 'areaType',
                                                                          name: '区域类型',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'areaType',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '500349',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '2669222',
                                                                          code: 'joinWay',
                                                                          name: '接入方式',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'joinWay',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '2669222',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '8788325',
                                                                          code: 'bandwidthUp',
                                                                          name: '上行宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthUp',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '8788325',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '155411',
                                                                          code: 'bandwidthDown',
                                                                          name: '下行宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthDown',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '155411',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '568368',
                                                                          code: 'bandwidthPort',
                                                                          name: 'SDWAN端口带宽',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthPort',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '568368',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '2474105',
                                                                          code: 'singleUseFee',
                                                                          name: '一次性费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'singleUseFee',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '2474105',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '937028',
                                                                          code: 'portFee',
                                                                          name: '端口费',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'portFee',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '937028',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '214875',
                                                                          code: 'ipv6BeyondNum',
                                                                          name: 'IPv6超出个数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondNum',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '214875',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '198626',
                                                                          code: 'ipv6BeyondCount',
                                                                          name: 'IPv6元/月/个',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv6BeyondCount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '198626',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '300842',
                                                                          code: 'standardPriceSdWan',
                                                                          name: 'SDWAN标准价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'standardPriceSdWan',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '300842',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '39146',
                                                                          code: 'receiptsPriceSdWan',
                                                                          name: 'SDWAN实收价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'receiptsPriceSdWan',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '39146',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '684821',
                                                                          code: 'rowId',
                                                                          name: '行id',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'rowId',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '684821',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7134342',
                                                                          code: 'bandwidthUpName',
                                                                          name: '上行宽带名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthUpName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '7134342',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '1659093',
                                                                          code: 'bandwidthName',
                                                                          name: '带宽名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '1659093',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '477975',
                                                                          code: 'marketList',
                                                                          name: '属性',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _idpath:
                                                                            [
                                                                              '477975',
                                                                            ],
                                                                          children:
                                                                            [],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '70285',
                                                                          code: 'isBig',
                                                                          name: '大带宽标识',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                              value:
                                                                                'false',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          value:
                                                                            {
                                                                              type: [
                                                                                'customize',
                                                                              ],
                                                                              code: '0',
                                                                            },
                                                                          _codePath:
                                                                            [
                                                                              'isBig',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '70285',
                                                                            ],
                                                                          _deletable:
                                                                            true,
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '6604794',
                                                                          code: 'specialLine',
                                                                          name: '属性',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _idpath:
                                                                            [
                                                                              '6604794',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '14809',
                                                                          code: 'bandwidthDownName',
                                                                          name: '下行宽带名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'bandwidthDownName',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '14809',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '82243',
                                                                          code: 'busiLastDiscount',
                                                                          name: '商务快线最终折扣',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'busiLastDiscount',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '82243',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '223337',
                                                                          code: 'joinLineType',
                                                                          name: '属性',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'joinLineType',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '223337',
                                                                            ],
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '246587',
                                                                          code: 'ipv4BeyondCost',
                                                                          name: 'IPv4超出费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          _codePath:
                                                                            [
                                                                              'ipv4BeyondCost',
                                                                            ],
                                                                          _idpath:
                                                                            [
                                                                              '246587',
                                                                            ],
                                                                        },
                                                                      ],
                                                                    operateType: 1,
                                                                    onlySetPatch:
                                                                      true,
                                                                    otherObjectArrayOptions:
                                                                      {},
                                                                    targetDataSourcePaths:
                                                                      [],
                                                                  },
                                                                  line_number: 23,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'setDataSource',
                                                                  dataId: 168915466480135360,
                                                                  shielding:
                                                                    true,
                                                                  options: {
                                                                    compId:
                                                                      'setDataSource',
                                                                    compName:
                                                                      'page',
                                                                    id: '117555',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    dataSourceId: 168785075175965400,
                                                                    dataSourceName:
                                                                      'pageData',
                                                                    dataSourceRelType:
                                                                      'custom',
                                                                    dataSourceSetValue:
                                                                      [
                                                                        {
                                                                          attrId:
                                                                            '701447',
                                                                          code: 'isBig',
                                                                          name: '是否为大宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                          value:
                                                                            {
                                                                              type: [
                                                                                'customize',
                                                                              ],
                                                                              code: '1',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '4719166',
                                                                          code: 'groupId',
                                                                          name: '集团编号',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                          showInput:
                                                                            true,
                                                                        },
                                                                      ],
                                                                    operateType: 1,
                                                                    onlySetPatch:
                                                                      true,
                                                                    otherObjectArrayOptions:
                                                                      {},
                                                                    targetDataSourcePaths:
                                                                      [],
                                                                  },
                                                                  line_number: 24,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      callback2: [
                                                        {
                                                          type: 'console',
                                                          dataId: 168913099458938660,
                                                          options: {
                                                            compId: 'debug',
                                                            compName: 'system',
                                                            id: '908995',
                                                            pageJsonId:
                                                              '8430824',
                                                            value: [
                                                              'adasdasdasd',
                                                            ],
                                                          },
                                                          line_number: 25,
                                                        },
                                                      ],
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
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                              callback2: [],
                            },
                          ];
                          eventDatacallCustomPageFunc13.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallCustomPageFunc13,
                            { e },
                            'callCustomPageFunc',
                            {
                              id: 'callCustomPageFunc',
                              name: 'callCustomPageFunc',
                              type: 'callCustomPageFunc',
                              platform: 'pc',
                            },
                          );
                        }}
                        ref={(r: any) => (refs['Button_0317846'] = r)}
                        {...injectData}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Select
              name={'接入类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'joinLineType'}
              value={data?.feeInfo?.joinLineType}
              formItemIndex={2}
              $$componentItem={{
                id: 'Select_823017',
                uid: 'Select_823017',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData147: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166598756470437470,
                    options: {
                      compId: 'Select_823017',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '7670493',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '5654',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_7670493[0].value$',
                              operate: '==',
                              manualValue: '互联网专线',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170599529798446750,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170599538611144770,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170599538961836450,
                                children: [],
                                todoOptions: ['disabled', 'selectComp'],
                                options: {
                                  compId: 'Input_4083588',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Select',
                                  id: '271677',
                                  disabled: '',
                                },
                                actionObjId: 'Input_4083588',
                                actionObjName: 'Select',
                                value: 'setDisable',
                                compLib: 'comm',
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 170599554535540580,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'Input_4083588',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Select',
                                  id: '002206',
                                  required: 'true',
                                },
                                actionObjId: 'Input_4083588',
                                actionObjName: 'Select',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 7,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'setDisable',
                                dataId: 170599538961836450,
                                options: {
                                  compId: 'Input_4083588',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Select',
                                  id: '271677',
                                  disabled: '',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'setRequired',
                                dataId: 170599554535540580,
                                options: {
                                  compId: 'Input_4083588',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Select',
                                  id: '002206',
                                  required: 'true',
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'clearValue',
                            dataId: 170599537631760670,
                            options: {
                              compId: 'Input_4083588',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '301175',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'setDisable',
                            dataId: 170599537955893630,
                            options: {
                              compId: 'Input_4083588',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '76436',
                              disabled: 'true',
                            },
                            line_number: 4,
                          },
                          {
                            type: 'setRequired',
                            dataId: 170599554089433900,
                            options: {
                              compId: 'Input_4083588',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '4479086',
                              required: '',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData147.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData147,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Select_823017'] = r)}
              {...injectData}
            />
            <Select
              name={'上行带宽'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'bandwidthUp'}
              value={data?.feeInfo?.bandwidthUp}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_4083588',
                uid: 'Input_4083588',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData148: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166556452944583780,
                    options: {
                      compId: 'Input_4083588',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '916446',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166556453397140830,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '581019',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '982351',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['areaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_916446[0].value$',
                              },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_916446[0].label$',
                              },
                              showInput: true,
                              _codePath: ['bandwidthUpName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: { type: [], code: 'bandwidthDownName' },
                              showInput: true,
                              _codePath: ['bandwidthDownName'],
                              _idpath: ['14809'],
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCost'],
                              _idpath: ['246587'],
                            },
                            {
                              attrId: '82243',
                              code: 'busiLastDiscount',
                              name: '商务快线最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiLastDiscount'],
                              _idpath: ['82243'],
                            },
                            {
                              attrId: '223337',
                              code: 'joinLineType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinLineType'],
                              _idpath: ['223337'],
                            },
                            {
                              attrId: '477975',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['477975'],
                            },
                            {
                              attrId: '6604794',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['6604794'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166556457863682900,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '3651693',
                          pageJsonId: '8430824',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'getLineConfig',
                          _apiCode: 'getLineConfig',
                          _source: 'rhin',
                          _serviceId: '896590341456502784',
                          _serviceTitle: '获取专线配置信息-hdb: getLineConfig',
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
                              dataKey: '3651693_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '3651693_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '3651693_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'busiType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.busiType',
                                  compType: 'Input',
                                  name: 'busiType',
                                  parents: ['body'],
                                  id: 'body.busiType',
                                  dataKey: '3651693_body.busiType',
                                  value: {
                                    type: ['customize'],
                                    code: 'busiFeeAudit',
                                  },
                                },
                                {
                                  code: 'bandWitch',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.bandWitch',
                                  compType: 'Input',
                                  name: 'bandWitch',
                                  parents: ['body'],
                                  id: 'body.bandWitch',
                                  dataKey: '3651693_body.bandWitch',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_916446[0].label$',
                                  },
                                },
                                {
                                  code: 'bandwitchDown',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.bandwitchDown',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.bandwitchDown',
                                  dataKey: '3651693_body.bandwitchDown',
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '3651693_body',
                            },
                          ],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 166556466385250340,
                            shielding: true,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '920314',
                              data: '$reply_3651693?.resultData$',
                              labelKey: 'bandwitchDown',
                              valueKey: 'localPrice',
                            },
                            line_number: 4,
                            callback1: [],
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901708917370200,
                            shielding: true,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '007238',
                            },
                            line_number: 5,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901709844724380,
                            shielding: true,
                            options: {
                              compId: 'Input_standardPrice_89896',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '468015',
                            },
                            line_number: 6,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901712107498340,
                            shielding: true,
                            options: {
                              compId: 'Input_303496',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '6731816',
                            },
                            line_number: 7,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901712470539330,
                            shielding: true,
                            options: {
                              compId: 'Input_ipv6GiveNum_389494',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '0276469',
                            },
                            line_number: 8,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901712821258100,
                            shielding: true,
                            options: {
                              compId: 'Input_ipv4GiveNum_383367',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '001796',
                            },
                            line_number: 9,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901713244184350,
                            shielding: true,
                            options: {
                              compId: 'Input_ipv4BeyondNum_198033',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '994229',
                            },
                            line_number: 10,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901713955537660,
                            shielding: true,
                            options: {
                              compId: 'Input_9380693',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '8088076',
                            },
                            line_number: 11,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 166979405532596480,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '4965633',
                              pageJsonId: '8430824',
                              customFuncName: 'calculV6Num',
                            },
                            line_number: 12,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'customActionCode',
                        dataId: 167566519270489000,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '347793',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var bandWidth=selectedData_916446[0].value;var bandWidthDownList=data.bandWidthDownList;var successData=[];for(var i=0;i<bandWidthDownList.length;++i){if(bandWidth===bandWidthDownList[i].bandWidth){successData.push(bandWidthDownList[i])}}success({bandWidthDownList:successData})};',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 167566519270490050,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '34465',
                              data: '$data_347793.bandWidthDownList$',
                              labelKey: 'bandWidthDownName',
                              valueKey: 'bandWidthDown',
                            },
                            line_number: 14,
                            callback1: [],
                          },
                          {
                            type: 'clearValue',
                            dataId: 167566519270489660,
                            options: {
                              compId: 'Input_standardPrice_89896',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '1756125',
                            },
                            line_number: 15,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167566519270439260,
                            options: {
                              compId: 'Input_ipv6GiveNum_389494',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '600494',
                            },
                            line_number: 16,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167566519270474000,
                            options: {
                              compId: 'Input_ipv4GiveNum_383367',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '903663',
                            },
                            line_number: 17,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167566519270427870,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '132801',
                            },
                            line_number: 18,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167566519270486240,
                            options: {
                              compId: 'Input_9380693',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '775456',
                            },
                            line_number: 19,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167566519270457380,
                            options: {
                              compId: 'Input_lastDiscount_72621',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '5793617',
                            },
                            line_number: 20,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 167566519270463870,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '138021',
                              pageJsonId: '8430824',
                              customFuncName: 'calculV6Num',
                            },
                            line_number: 21,
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
                eventDatagetSelectedData148.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData148,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_4083588'] = r)}
              {...injectData}
            />
            <Input
              name={'标准价格'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'standardPrice'}
              value={data?.feeInfo?.standardPrice}
              formItemIndex={4}
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
                id: 'Input_standardPrice_89896',
                uid: 'Input_standardPrice_89896',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_standardPrice_89896'] = r)}
              {...injectData}
            />
            <Select
              name={'下行带宽'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'bandwidthDown'}
              value={data?.feeInfo?.bandwidthDown}
              formItemIndex={5}
              $$componentItem={{
                id: 'Input_306376',
                uid: 'Input_306376',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData149: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166556473545372160,
                    options: {
                      compId: 'Input_306376',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '568059',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166556490109169500,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '7195531',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '982351',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['areaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_568059[0].value$',
                              },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUpName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_568059[0].label$',
                              },
                              showInput: true,
                              _codePath: ['bandwidthDownName'],
                              _idpath: ['14809'],
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCost'],
                              _idpath: ['246587'],
                            },
                            {
                              attrId: '82243',
                              code: 'busiLastDiscount',
                              name: '商务快线最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiLastDiscount'],
                              _idpath: ['82243'],
                            },
                            {
                              attrId: '223337',
                              code: 'joinLineType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinLineType'],
                              _idpath: ['223337'],
                            },
                            {
                              attrId: '477975',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['477975'],
                            },
                            {
                              attrId: '6604794',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['6604794'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'getSelectedData',
                        dataId: 166556503714965980,
                        options: {
                          compId: 'Input_4083588',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '165631',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 166556504640493380,
                            shielding: true,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '990125',
                              pageJsonId: '8430824',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'getLineConfig',
                              _apiCode: 'getLineConfig',
                              _source: 'rhin',
                              _serviceId: '896590341456502784',
                              _serviceTitle:
                                '获取专线配置信息-hdb: getLineConfig',
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
                                  dataKey: '990125_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '990125_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '990125_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'busiType',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.busiType',
                                      compType: 'Input',
                                      name: 'busiType',
                                      parents: ['body'],
                                      id: 'body.busiType',
                                      dataKey: '990125_body.busiType',
                                      value: {
                                        type: ['customize'],
                                        code: 'busiFeeAudit',
                                      },
                                    },
                                    {
                                      code: 'bandWitch',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.bandWitch',
                                      compType: 'Input',
                                      name: 'bandWitch',
                                      parents: ['body'],
                                      id: 'body.bandWitch',
                                      dataKey: '990125_body.bandWitch',
                                      value: {
                                        type: ['customize'],
                                        code: '$selectedData_165631[0].label$',
                                      },
                                    },
                                    {
                                      code: 'bandwitchDown',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.bandwitchDown',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.bandwitchDown',
                                      dataKey: '990125_body.bandwitchDown',
                                      value: {
                                        type: ['customize'],
                                        code: '$selectedData_568059[0].label$',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '990125_body',
                                },
                              ],
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 166556527967753200,
                                shielding: true,
                                options: {
                                  compId: 'Input_standardPrice_89896',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '62447',
                                  value:
                                    '$reply_990125?.resultData[0].localPrice$',
                                  valueList: {
                                    Input_standardPrice_89896:
                                      '$reply_990125?.resultData[0].localPrice$',
                                  },
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166556540994044670,
                                    shielding: true,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '543499',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculBusiEndDiscount',
                                    },
                                    line_number: 6,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'setValue',
                                dataId: 166556528678826240,
                                shielding: true,
                                options: {
                                  compId: 'Input_ipv6GiveNum_389494',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '6380498',
                                  value:
                                    '$reply_990125?.resultData[0].ipv6Addr$',
                                  valueList: {
                                    Input_ipv6GiveNum_389494:
                                      '$reply_990125?.resultData[0].ipv6Addr$',
                                  },
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166556538700477920,
                                    shielding: true,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '32272',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculV6Num',
                                    },
                                    line_number: 8,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'setValue',
                                dataId: 166556529347672300,
                                shielding: true,
                                options: {
                                  compId: 'Input_ipv4GiveNum_383367',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '40407',
                                  value:
                                    '$reply_990125?.resultData[0].ipv4Addr$',
                                  valueList: {
                                    Input_ipv4GiveNum_383367:
                                      '$reply_990125?.resultData[0].ipv4Addr$',
                                  },
                                },
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166556539683613250,
                                    shielding: true,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '967987',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculV4Num',
                                    },
                                    line_number: 10,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'customActionCode',
                            dataId: 167566639065163900,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '129211',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var bandWidth=selectedData_165631[0].value;var bandWidthDown=selectedData_568059[0].value;var bandWidthList=data.bandWidthDownList;var bandWidthInfo=bandWidthList.filter(function(item){return item.bandWidth==bandWidth&&item.bandWidthDown==bandWidthDown});bandWidthInfo[0].lineRateInfo.linePrice=parseFloat(bandWidthInfo[0].lineRateInfo.linePrice)/1000;success({lineRateInfo:bandWidthInfo[0].lineRateInfo})};',
                            },
                            line_number: 11,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 167566639065190180,
                                options: {
                                  compId: 'Input_standardPrice_89896',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '609012',
                                  value:
                                    '$reply_990125?.resultData[0].localPrice$',
                                  valueList: {
                                    Input_standardPrice_89896:
                                      '$data_129211.lineRateInfo.linePrice$',
                                  },
                                },
                                line_number: 12,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167566639065103700,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '265045',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculEndDiscount',
                                    },
                                    line_number: 13,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 168510429259139500,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '115489',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculBusiEndDiscount',
                                    },
                                    line_number: 14,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'setValue',
                                dataId: 167566639065151580,
                                options: {
                                  compId: 'Input_ipv6GiveNum_389494',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '315407',
                                  value:
                                    '$reply_990125?.resultData[0].ipv6Addr$',
                                  valueList: {
                                    Input_ipv6GiveNum_389494:
                                      '$data_129211.lineRateInfo.ipv6Amount$',
                                  },
                                },
                                line_number: 15,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167566639065109700,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '447517',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculV6Num',
                                    },
                                    line_number: 16,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'setValue',
                                dataId: 167566639065172860,
                                options: {
                                  compId: 'Input_ipv4GiveNum_383367',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '420424',
                                  value:
                                    '$reply_990125?.resultData[0].ipv4Addr$',
                                  valueList: {
                                    Input_ipv4GiveNum_383367:
                                      '$data_129211.lineRateInfo.ipAmount$',
                                  },
                                },
                                line_number: 17,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167566639065162200,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '757296',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculV4Num',
                                    },
                                    line_number: 18,
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
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData149.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData149,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_306376'] = r)}
              {...injectData}
            />
            <Input
              name={'专线使用费'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'receiptsPrice'}
              value={data?.feeInfo?.receiptsPrice}
              formItemIndex={6}
              regexp={[
                {
                  id: '6038938',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_receiptsPrice_488443',
                uid: 'Input_receiptsPrice_488443',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc299: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166608244125125060,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '685053',
                      pageJsonId: '8430824',
                      customFuncName: 'calculBusiEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc299.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc299, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_receiptsPrice_488443'] = r)}
              {...injectData}
            />
            <Input
              name={'专线最终折扣'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={7}
              fieldName={'busiLastDiscount'}
              value={data?.feeInfo?.busiLastDiscount}
              postfix={'折'}
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
                id: 'Input_303496',
                uid: 'Input_303496',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_303496'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv6赠送数'}
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
              fieldName={'ipv6GiveNum'}
              value={data?.feeInfo?.ipv6GiveNum}
              formItemIndex={8}
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
                id: 'Input_ipv6GiveNum_389494',
                uid: 'Input_ipv6GiveNum_389494',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_ipv6GiveNum_389494'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv4赠送数'}
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
              fieldName={'ipv4GiveNum'}
              value={data?.feeInfo?.ipv4GiveNum}
              formItemIndex={9}
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
                id: 'Input_ipv4GiveNum_383367',
                uid: 'Input_ipv4GiveNum_383367',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc300: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166538182847281470,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2534342',
                      pageJsonId: '8430824',
                      customFuncName: 'calculV4Num',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc300.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc300, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_ipv4GiveNum_383367'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv6需求数'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'个'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'ipv6DemandNum'}
              value={data?.feeInfo?.ipv6DemandNum}
              formItemIndex={10}
              regexp={[
                {
                  id: '003231',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0的整数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))$/',
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
                id: 'Input_ipv6DemandNum_94541',
                uid: 'Input_ipv6DemandNum_94541',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc301: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166556773159760420,
                    shielding: true,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2954465',
                      pageJsonId: '8430824',
                      customFuncName: 'calculV6Num',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc301.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc301, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatagetValue158: any = [
                  {
                    type: 'getValue',
                    dataId: 168120572868415870,
                    shielding: true,
                    options: {
                      compId: 'Input_ipv6GiveNum_389494',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '6082576',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '860716',
                            options: {
                              context: '$value_6082576$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              context: '$e.target.value$',
                              operate: 'notEmpty',
                            },
                            condId: '621274',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168120572868459600,
                        elseIfs: [],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168120572868433630,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '886377',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){success(parseInt(e.target.value)<=parseInt(value_6082576))};',
                              actionTitle: '判断需求数是否小于等于赠送数',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '340314',
                                    options: {
                                      context: '$data_886377$',
                                      operate: '== false',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168120572868427740,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 168120572868498500,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168120572868492930,
                                        children: [],
                                        todoOptions: [
                                          'validateType',
                                          'validateMsg',
                                        ],
                                        options: {
                                          compId: 'Input_ipv6DemandNum_94541',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '97332',
                                          validateStatus: '',
                                        },
                                        actionObjId:
                                          'Input_ipv6DemandNum_94541',
                                        actionObjName: 'Input',
                                        value: 'validateMsg',
                                        compLib: 'comm',
                                        shielding: true,
                                        line_number: 7,
                                      },
                                    ],
                                    condition: [],
                                    shielding: true,
                                    callback: [
                                      {
                                        type: 'validateMsg',
                                        dataId: 168120572868492930,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_ipv6DemandNum_94541',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '97332',
                                          validateStatus: '',
                                        },
                                        line_number: 7,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'validateMsg',
                                    dataId: 168120572868481900,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_ipv6DemandNum_94541',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '0185795',
                                      validateStatus: 'error',
                                      help: 'IPv6需求数应小于等于IPv6赠送数',
                                    },
                                    line_number: 6,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '0023195',
                            options: {
                              context: '$value_6082576$',
                              operate: 'empty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              context: '$e.target.value$',
                              operate: 'notEmpty',
                            },
                            condId: '184296',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168120572868447000,
                        elseIfs: [],
                        line_number: 8,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168120572868437500,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '551387',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){success(parseInt(e.target.value)>0)};',
                              actionTitle: '',
                            },
                            line_number: 9,
                            callback1: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '340314',
                                    options: {
                                      context: '$data_551387$',
                                      operate: '== true',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168120572868419040,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 168120572868495070,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168120572868497820,
                                        children: [],
                                        todoOptions: [
                                          'validateType',
                                          'validateMsg',
                                        ],
                                        options: {
                                          compId: 'Input_ipv6DemandNum_94541',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '127336',
                                          validateStatus: '',
                                        },
                                        actionObjId:
                                          'Input_ipv6DemandNum_94541',
                                        actionObjName: 'Input',
                                        value: 'validateMsg',
                                        compLib: 'comm',
                                        shielding: true,
                                        line_number: 12,
                                      },
                                    ],
                                    condition: [],
                                    shielding: true,
                                    callback: [
                                      {
                                        type: 'validateMsg',
                                        dataId: 168120572868497820,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_ipv6DemandNum_94541',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '127336',
                                          validateStatus: '',
                                        },
                                        line_number: 12,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 10,
                                callback1: [
                                  {
                                    type: 'validateMsg',
                                    dataId: 168120572868481380,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_ipv6DemandNum_94541',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '914374',
                                      validateStatus: 'error',
                                      help: 'IPv6赠送数为空时IPv6需求数仅能填0',
                                    },
                                    line_number: 11,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue158.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue158, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_ipv6DemandNum_94541'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv4需求数'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'个'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'ipv4DemandNum'}
              value={data?.feeInfo?.ipv4DemandNum}
              formItemIndex={11}
              regexp={[
                {
                  id: '527431',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0的整数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))$/',
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
                id: 'Input_ipv4DemandNum_1451523902',
                uid: 'Input_ipv4DemandNum_1451523902',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc302: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166538184127309470,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5057985',
                      pageJsonId: '8430824',
                      customFuncName: 'calculV4Num',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc302.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc302, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_ipv4DemandNum_1451523902'] = r)}
              {...injectData}
            />
            <Select
              name={'IPv6超出选择'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'ipv6BeyondSel'}
              value={data?.feeInfo?.ipv6BeyondSel}
              formItemIndex={12}
              $$componentItem={{
                id: 'Input_713501',
                uid: 'Input_713501',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc303: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166597712853685200,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '930213',
                      pageJsonId: '8430824',
                      customFuncName: 'calculV6Num',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc303.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc303, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatagetSelectedData150: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166598756470437470,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '7670493',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166598756836866560,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '24482',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '982351',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_7670493[0].value$',
                              },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['areaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUpName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDownName'],
                              _idpath: ['14809'],
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCost'],
                              _idpath: ['246587'],
                            },
                            {
                              attrId: '82243',
                              code: 'busiLastDiscount',
                              name: '商务快线最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiLastDiscount'],
                              _idpath: ['82243'],
                            },
                            {
                              attrId: '223337',
                              code: 'joinLineType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinLineType'],
                              _idpath: ['223337'],
                            },
                            {
                              attrId: '477975',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['477975'],
                            },
                            {
                              attrId: '6604794',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['6604794'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData150.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData150,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_713501'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv4超出个数'}
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
              fieldName={'ipv4BeyondNum'}
              value={data?.feeInfo?.ipv4BeyondNum}
              formItemIndex={13}
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
                id: 'Input_ipv4BeyondNum_198033',
                uid: 'Input_ipv4BeyondNum_198033',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_ipv4BeyondNum_198033'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv6超出费用'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={14}
              fieldName={'ipv6BeyondCost'}
              value={data?.feeInfo?.ipv6BeyondCost}
              regexp={[
                {
                  id: '976303',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_1045175',
                uid: 'Input_1045175',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_1045175'] = r)}
              {...injectData}
            />
            <Input
              name={'IPv4超出费用'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={15}
              fieldName={'ipv4BeyondCost'}
              value={data?.feeInfo?.ipv4BeyondCost}
              regexp={[
                {
                  id: '263001',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_9380693',
                uid: 'Input_9380693',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_9380693'] = r)}
              {...injectData}
            />
            <Select
              name={'SDWAN端口带宽'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'bandwidthPort'}
              value={data?.feeInfo?.bandwidthPort}
              formItemIndex={16}
              $$componentItem={{
                id: 'Input_4206103',
                uid: 'Input_4206103',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData151: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166598691233597380,
                    options: {
                      compId: 'Input_4206103',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '124755',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166598691498426800,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '1906254',
                          pageJsonId: '8430824',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'getLineConfig',
                          _apiCode: 'getLineConfig',
                          _source: 'rhin',
                          _serviceId: '896590341456502784',
                          _serviceTitle: '获取专线配置信息-hdb: getLineConfig',
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
                              dataKey: '1906254_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '1906254_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '1906254_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'busiType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.busiType',
                                  compType: 'Input',
                                  name: 'busiType',
                                  parents: ['body'],
                                  id: 'body.busiType',
                                  dataKey: '1906254_body.busiType',
                                  value: {
                                    type: ['customize'],
                                    code: 'sdWanFeeAudit',
                                  },
                                },
                                {
                                  code: 'bandWitch',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.bandWitch',
                                  compType: 'Input',
                                  name: 'bandWitch',
                                  parents: ['body'],
                                  id: 'body.bandWitch',
                                  dataKey: '1906254_body.bandWitch',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_124755[0].label$',
                                  },
                                },
                                {
                                  code: 'bandwitchDown',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.bandwitchDown',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.bandwitchDown',
                                  dataKey: '1906254_body.bandwitchDown',
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '1906254_body',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166598696082467230,
                            options: {
                              compId: 'Input_593321',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '340063',
                              value:
                                '$reply_1906254?.resultData[0].localPrice$',
                              valueList: {
                                Input_593321:
                                  '$reply_1906254?.resultData[0].localPrice$',
                              },
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166798448794473150,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '867379',
                                  pageJsonId: '8430824',
                                  customFuncName: 'calculEndDiscount',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 166598761854613920,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '371654',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '982351',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['982351'],
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['674311'],
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['384707'],
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_124755[0].value$',
                              },
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['7058047'],
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6GiveNum'],
                              _idpath: ['323129'],
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4GiveNum'],
                              _idpath: ['535103'],
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6DemandNum'],
                              _idpath: ['547733'],
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4DemandNum'],
                              _idpath: ['8454034'],
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondSel'],
                              _idpath: ['618242'],
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondNum'],
                              _idpath: ['167631'],
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCost'],
                              _idpath: ['1633704'],
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCount'],
                              _idpath: ['841439'],
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['unitPrice'],
                              _idpath: ['755452'],
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['546822'],
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['market'],
                              _idpath: ['359579'],
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['122027'],
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['areaType'],
                              _idpath: ['500349'],
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinWay'],
                              _idpath: ['2669222'],
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUp'],
                              _idpath: ['8788325'],
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDown'],
                              _idpath: ['155411'],
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthPort'],
                              _idpath: ['568368'],
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['singleUseFee'],
                              _idpath: ['2474105'],
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['portFee'],
                              _idpath: ['937028'],
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondNum'],
                              _idpath: ['214875'],
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv6BeyondCount'],
                              _idpath: ['198626'],
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['standardPriceSdWan'],
                              _idpath: ['300842'],
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['receiptsPriceSdWan'],
                              _idpath: ['39146'],
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['684821'],
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthUpName'],
                              _idpath: ['7134342'],
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_124755[0].label$',
                              },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['1659093'],
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthDownName'],
                              _idpath: ['14809'],
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['ipv4BeyondCost'],
                              _idpath: ['246587'],
                            },
                            {
                              attrId: '82243',
                              code: 'busiLastDiscount',
                              name: '商务快线最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiLastDiscount'],
                              _idpath: ['82243'],
                            },
                            {
                              attrId: '223337',
                              code: 'joinLineType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['joinLineType'],
                              _idpath: ['223337'],
                            },
                            {
                              attrId: '477975',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['marketList'],
                              _idpath: ['477975'],
                            },
                            {
                              attrId: '6604794',
                              code: 'specialLine',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['specialLine'],
                              _idpath: ['6604794'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 5,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData151.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData151,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_4206103'] = r)}
              {...injectData}
            />
            <Input
              name={'SD-WAN端口月功能费'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={17}
              fieldName={'receiptsPriceSdWan'}
              value={data?.feeInfo?.receiptsPriceSdWan}
              regexp={[
                {
                  id: '9484435',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_901541',
                uid: 'Input_901541',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc304: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166598724894389340,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '6265296',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc304.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc304, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_901541'] = r)}
              {...injectData}
            />
            <Input
              name={'SDWAN标准价格'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={18}
              fieldName={'standardPriceSdWan'}
              value={data?.feeInfo?.standardPriceSdWan}
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
                id: 'Input_593321',
                uid: 'Input_593321',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc305: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166598726219178980,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '49164',
                      pageJsonId: '8430824',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc305.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc305, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_593321'] = r)}
              {...injectData}
            />
            <Input
              name={'SDWAN最终折扣'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'折'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'lastDiscount'}
              value={data?.feeInfo?.lastDiscount}
              formItemIndex={19}
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
                id: 'Input_lastDiscount_72621',
                uid: 'Input_lastDiscount_72621',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_lastDiscount_72621'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <Form
          name={'表单'}
          colSpan={12}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_719112'}
          $$componentItem={{
            id: 'Form_719112',
            uid: 'Form_719112',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
          ref={(r: any) => (refs['Form_719112'] = r)}
          {...injectData}
        >
          <Input
            name={'营销案'}
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
            required={true}
            placeholder={'请输入'}
            fieldName={'market'}
            value={data?.feeInfo?.market}
            formItemIndex={0}
            icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_672199',
              uid: 'Input_672199',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onIconClick={() => {
              const eventDatagetValue160: any = [
                {
                  type: 'getValue',
                  dataId: 166627044507807550,
                  options: {
                    compId: 'Input_672199',
                    compLib: 'comm',
                    pageJsonId: '8430824',
                    compName: 'Input',
                    id: '194411',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '644396',
                          options: {
                            context: '$value_194411$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166627046158720770,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166627047646702500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166627048746044130,
                              children: [],
                              todoOptions: ['msgType', 'value'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '682232',
                                pageJsonId: '8430824',
                                type: 'error',
                                value: '请填写营销案信息',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              elseIfs: [],
                              line_number: 6,
                            },
                          ],
                          condition: [],
                          desc: '',
                          elseIfs: [],
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 166627048746044130,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '682232',
                                pageJsonId: '8430824',
                                type: 'error',
                                value: '请填写营销案信息',
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'showCustomModal',
                          dataId: 166627057423032060,
                          options: {
                            compId: 'showCustomModal',
                            compName: 'page',
                            id: '7736526',
                            pageJsonId: '8430824',
                            modalname: '/marketSel',
                            pageId: '899632499889246208',
                            paramsObj: { marketCode: '$value_194411$' },
                            paramsObjKeyValueMap: {
                              marketCode: '$value_194411$',
                            },
                            modalPath: '/marketSel',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 166627095932468670,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '0874507',
                                pageJsonId: '8430824',
                                code: 'function main(data,state,success,fail){data.marketList=data.marketList.filter(function(v){return v.code!=okData_7736526.code});data.marketList.push(okData_7736526);success(data.marketList)};',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 166627128795779100,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '6866396',
                                    pageJsonId: '8430824',
                                    dataSourceId: 166452752557535940,
                                    dataSourceName: 'marketList',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '302396',
                                        code: 'rowId',
                                        name: '行id',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                      },
                                    ],
                                    newData: '$data_0874507$',
                                    operateType: 3,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 5,
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
                },
              ];
              eventDatagetValue160.params = [] || [];
              CMDGenerator(eventDatagetValue160, {}, 'getValue', {
                id: 'getValue',
                name: 'getValue',
                type: 'getValue',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Input_672199'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_015288',
              uid: 'View_015288',
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
            ref={(r: any) => (refs['View_015288'] = r)}
            {...injectData}
          >
            <Button
              name={'删除'}
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
                id: 'Button_096039',
                uid: 'Button_096039',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey32: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166539451768850700,
                    options: {
                      compId: 'Table_6112271',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Table',
                      id: '18599',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '225119',
                            options: {
                              context: '$selectedRowKeys_18599$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166539467943390200,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166539469740832500,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166539470305867650,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '8825895',
                                  pageJsonId: '8430824',
                                  type: 'error',
                                  value: '请勾选营销案',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166539470305867650,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '8825895',
                                  pageJsonId: '8430824',
                                  type: 'error',
                                  value: '请勾选营销案',
                                },
                                line_number: 5,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 166539472968132200,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '963319',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var sel=selectedRowKeys_18599;var marketList=[];console.log(sel);data.marketList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){marketList.push(v)}});success(marketList)};',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 166539492477862080,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '618361',
                                  pageJsonId: '8430824',
                                  dataSourceId: 166452752557535940,
                                  dataSourceName: 'marketList',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '302396',
                                      code: 'rowId',
                                      name: '行id',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                  ],
                                  newData: '$data_963319$',
                                  operateType: 3,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                },
                                line_number: 4,
                                callback1: [],
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
                eventDatagetTableSelectedKey32.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey32,
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
              ref={(r: any) => (refs['Button_096039'] = r)}
              {...injectData}
            />
          </View>
        </Form>
        <View
          name={'布局容器'}
          formItemIndex={2}
          labelCol={8}
          wrapperCol={16}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_015288_239109_6528729_3449095_643503',
            uid: 'View_015288_239109_6528729_3449095_643503',
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
            textAlign: 'right',
            margin: '10px 0px 0px 0px',
          }}
          ref={(r: any) =>
            (refs['View_015288_239109_6528729_3449095_643503'] = r)
          }
          {...injectData}
        >
          <Button
            name={'添加营销案'}
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
              id: 'Button_898304_051444_817773_2709943_217698',
              uid: 'Button_898304_051444_817773_2709943_217698',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatashowCustomModal59: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166797487658661060,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '518004',
                    pageJsonId: '8430824',
                    modalname: '/marketSel',
                    pageId: '899632499889246208',
                    paramsObj: { marketCode: '$value_755259$' },
                    paramsObjKeyValueMap: { marketCode: '$value_755259$' },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166797487658744700,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '17368196',
                        pageJsonId: '8430824',
                        code: 'function main(data,state,success,fail){var res=data.marketList;okData_518004.forEach(function(y){var exit=data.marketList.findIndex(function(item){return item.saleId===y.saleId});if(exit===-1){res.push(y)}});data.marketList=res;success(res)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166797487658756400,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '792043',
                            pageJsonId: '8430824',
                            dataSourceId: 166452752557535940,
                            dataSourceName: 'marketList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '302396',
                                code: 'rowId',
                                name: '行id',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_17368196$',
                            operateType: 3,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
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
              eventDatashowCustomModal59.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal59,
                { e },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
              const eventDatashowCustomModal60: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166969155541740350,
                  shielding: true,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '0568342',
                    pageJsonId: '8430824',
                    modalname: '/yingxiaoanfangweixuanzhe',
                    pageId: '914478259933954048',
                  },
                  line_number: 4,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166969156118537100,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '7707667',
                        pageJsonId: '8430824',
                        code: 'function main(data,state,success,fail){var res=data.marketList;okData_0568342.forEach(function(y){var exit=data.marketList.findIndex(function(item){return item.saleId===y.saleId});if(exit===-1){res.push(y)}});data.marketList=res;success(res)};',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166969156118516030,
                          shielding: true,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '4110016',
                            pageJsonId: '8430824',
                            dataSourceId: 166452752557535940,
                            dataSourceName: 'marketList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '302396',
                                code: 'rowId',
                                name: '行id',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_7707667$',
                            operateType: 3,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
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
              ];
              eventDatashowCustomModal60.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal60,
                { e },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) =>
              (refs['Button_898304_051444_817773_2709943_217698'] = r)
            }
            {...injectData}
          />
          <Button
            name={'删除'}
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
              id: 'Button_096039_453083_336442_869852_4170704',
              uid: 'Button_096039_453083_336442_869852_4170704',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              const eventDatagetTableSelectedKey33: any = [
                {
                  type: 'getTableSelectedKey',
                  dataId: 166539451768850700,
                  options: {
                    compId: 'Table_6112271',
                    compLib: 'comm',
                    pageJsonId: '8430824',
                    compName: 'Table',
                    id: '18599',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '225119',
                          options: {
                            context: '$selectedRowKeys_18599$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166539467943390200,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166539469740832500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166539470305867650,
                              children: [],
                              todoOptions: ['msgType', 'value'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '8825895',
                                pageJsonId: '8430824',
                                type: 'error',
                                value: '请勾选营销案',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 166539470305867650,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '8825895',
                                pageJsonId: '8430824',
                                type: 'error',
                                value: '请勾选营销案',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166539472968132200,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '963319',
                            pageJsonId: '8430824',
                            code: 'function main(data,state,success,fail){var sel=selectedRowKeys_18599;var marketList=[];data.marketList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.saleId});if(exit===-1){marketList.push(v)}});success(marketList)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166539492477862080,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '618361',
                                pageJsonId: '8430824',
                                dataSourceId: 166452752557535940,
                                dataSourceName: 'marketList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '302396',
                                    code: 'rowId',
                                    name: '行id',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                ],
                                newData: '$data_963319$',
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 4,
                              callback1: [],
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
              eventDatagetTableSelectedKey33.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatagetTableSelectedKey33,
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
            ref={(r: any) =>
              (refs['Button_096039_453083_336442_869852_4170704'] = r)
            }
            {...injectData}
          />
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
              title: '营销案编码',
              key: 'saleId',
              dataIndex: 'saleId',
              className: '',
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
              title: '营销案名称',
              key: 'saleName',
              dataIndex: 'saleName',
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
              title: '营销案描述',
              key: 'saleDesc',
              dataIndex: 'saleDesc',
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
          ]}
          page={false}
          rowKeyType={'specified'}
          editMode={'single'}
          selectType={'checkbox'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={{ type: 'checkbox' }}
          showHead={false}
          showTotal={false}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.marketList}
          rowKey={'saleId'}
          dataSourceFromDataSourceConfig={'data.marketList'}
          $$componentItem={{
            id: 'Table_6112271',
            uid: 'Table_6112271',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          ref={(r: any) => (refs['Table_6112271'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(SdWanFeeAudit$$Modal, {
  pageId: '899130537225986048',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
  },
});
