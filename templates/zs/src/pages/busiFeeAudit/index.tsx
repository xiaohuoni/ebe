// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Select,
  Text,
  Input,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '897035286583414784';
const BusiFeeAudit$$Modal: React.FC<PageProps> = ({
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
  parentEngineId = pageId,
}) => {
  const calculV4Num = (options_8722644: any) => {
    const eventDatagetValue31: any = [
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
                          valueList: {
                            Input_ipv4BeyondNum_198033: '$data_326378$',
                          },
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
                                  valueList: {
                                    Input_9380693: '$data_6125886$',
                                  },
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
                            condId: '023349',
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
                        dataId: 168622282507264740,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168622289970741920,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168622290502123520,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Input_9380693'],
                                  compName: 'page',
                                  id: '1765294',
                                  pageJsonId: '8430824',
                                  visible: 'true',
                                  compid: ['Input_9380693'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'sysSetVisible',
                                dataId: 168622290502123520,
                                options: {
                                  compId: ['Input_9380693'],
                                  compName: 'page',
                                  id: '1765294',
                                  pageJsonId: '8430824',
                                  visible: 'true',
                                  compid: ['Input_9380693'],
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 8,
                        callback1: [
                          {
                            type: 'sysSetVisible',
                            dataId: 168622289213595260,
                            options: {
                              compId: ['Input_9380693'],
                              compName: 'page',
                              id: '4781223',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Input_9380693'],
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
    eventDatagetValue31.params =
      [
        {
          title: '事件入参',
          name: 'options_8722644',
          value: '$options_8722644$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue31, { options_8722644 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculEndDiscount = (options_824845: any) => {
    const eventDatagetValue32: any = [
      {
        type: 'getValue',
        dataId: 166547434165217120,
        options: {
          compId: 'Input_receiptsPrice_488443',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '452537',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 166547434662148200,
            options: {
              compId: 'Input_standardPrice_89896',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '9306214',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5647076',
                    options: {
                      context: '$value_9306214$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_452537$', operate: 'notEmpty' },
                    condId: '7926664',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166547436421292480,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166547439728658600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '504822',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var price=value_452537*10/value_9306214;var discount=price.toFixed(3);success(discount)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166547445408678200,
                        options: {
                          compId: 'Input_lastDiscount_72621',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '459421',
                          value: '$data_504822$',
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
    eventDatagetValue32.params =
      [
        {
          title: '事件入参',
          name: 'options_824845',
          value: '$options_824845$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue32, { options_824845 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculV6Num = (options_427563: any) => {
    const eventDatagetValue33: any = [
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
            dataId: 168111551415390340,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 168111552252693150,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168111554741246980,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 168111554741267000,
                        children: [],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: ['compId', 'valueList'],
                    options: {
                      compId: 'Input_ipv6DemandNum_94541',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '523305',
                      valueList: { Input_ipv6DemandNum_94541: '0' },
                    },
                    actionObjId: 'Input_ipv6DemandNum_94541',
                    actionObjName: 'Input',
                    value: 'setValue',
                    compLib: 'comm',
                    elseIfs: [],
                    line_number: 15,
                  },
                ],
                condition: [],
                desc: 'IPv6赠送数为空时IPv6需求数仅允许填0',
                elseIfs: [],
                callback: [
                  {
                    type: 'setValue',
                    dataId: 168111554741246980,
                    options: {
                      compId: 'Input_ipv6DemandNum_94541',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '523305',
                      valueList: { Input_ipv6DemandNum_94541: '0' },
                    },
                    line_number: 15,
                    callback1: [],
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 168111812974224420,
                shielding: true,
                options: {
                  compId: 'Input_ipv6DemandNum_94541',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '3232635',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168111812974213700,
                    shielding: true,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '40318735',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var needNum=value_103932;var freeNum=value_479542;console.log("needNum",needNum);console.log("freeNum",freeNum);if(freeNum!==null&&freeNum!==undefined&&freeNum>=0){var _result=needNum-freeNum;console.log("_result",_result);if(_result>=1){success()}else{fail()}}else{fail()}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setDisable',
                        dataId: 168111812974227500,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '355632',
                          disabled: '',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168111812974224160,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '36519',
                          required: 'true',
                        },
                        line_number: 6,
                      },
                      {
                        type: 'getSelectedData',
                        dataId: 168111812974255100,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '959147',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168111812974296100,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '961194',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var needNum=value_103932;var freeNum=value_479542;var _result=needNum-freeNum;var ipv6Type=selectedData_260533[0].value;var price=0;if(ipv6Type==="64"){price=50}else if(ipv6Type==="60"){price=800}else if(ipv6Type==="56"){price=6400}success(parseInt(_result)*price)};',
                            },
                            line_number: 8,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 168111812974273200,
                                shielding: true,
                                options: {
                                  compId: 'Input_1045175',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '073399',
                                  value: '$data_961194$',
                                  valueList: { Input_1045175: '$data_961194$' },
                                },
                                line_number: 9,
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
                        dataId: 168111812974223170,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '8376757',
                          disabled: 'true',
                        },
                        line_number: 10,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168111812974218850,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '8435435',
                          required: '',
                        },
                        line_number: 11,
                      },
                      {
                        type: 'setValue',
                        dataId: 168111812974204200,
                        shielding: true,
                        options: {
                          compId: 'Input_1045175',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '469212',
                          valueList: { Input_1045175: '0' },
                        },
                        line_number: 12,
                        callback1: [],
                      },
                      {
                        type: 'clearValue',
                        dataId: 168111812974227500,
                        shielding: true,
                        options: {
                          compId: 'Input_713501',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '2374454',
                        },
                        line_number: 13,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'clearValue',
                dataId: 168111832000956130,
                options: {
                  compId: 'Input_ipv6DemandNum_94541',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '6203234',
                },
                line_number: 14,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue33.params =
      [
        {
          title: '事件入参',
          name: 'options_427563',
          value: '$options_427563$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue33, { options_427563 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
    const eventDatasetDisable: any = [
      {
        type: 'setDisable',
        dataId: 168111921140031230,
        options: {
          compId: 'Input_ipv6DemandNum_94541',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '6045823',
          disabled: '',
        },
        line_number: 16,
      },
    ];
    eventDatasetDisable.params =
      [
        {
          title: '事件入参',
          name: 'options_427563',
          value: '$options_427563$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable, { options_427563 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };
  const calculReceiptsPriceSum = (options_2257254: any) => {
    const eventDatagetValue34: any = [
      {
        type: 'getValue',
        dataId: 167117843567782430,
        options: {
          compId: 'Input_264884',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '59677',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 167117864932180580,
            options: {
              compId: 'Input_receiptsPrice_488443',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '55598',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '079984',
                    options: { context: '$value_55598$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_59677$', operate: 'notEmpty' },
                    condId: '53004',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167117865291768930,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167117879975880350,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '156487',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var sum=value_55598*parseInt(value_59677);sum=sum.toFixed(2);success(sum)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 167117888716804450,
                        options: {
                          compId: 'Input_183431',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '067678972',
                          valueList: { Input_183431: '$data_156487$' },
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
    eventDatagetValue34.params =
      [
        {
          title: '事件入参',
          name: 'options_2257254',
          value: '$options_2257254$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue34, { options_2257254 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculUnitPrice = (options_4949184: any) => {
    const eventDatagetSelectedData12: any = [
      {
        type: 'getSelectedData',
        dataId: 167290638092195500,
        options: {
          compId: 'Input_4083588',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '7221482',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 167290639199432030,
            options: {
              compId: 'Input_receiptsPrice_488443',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '33854',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167290641110776060,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '928491',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var _selectedData_;var receiptsPrice=value_33854||"";var bandWithup=((_selectedData_=selectedData_7221482[0])===null||_selectedData_===void 0?void 0:_selectedData_.value)||"";console.log("receiptsPrice",receiptsPrice);console.log("bandWithup",bandWithup);if(receiptsPrice&&bandWithup){var price=parseFloat(receiptsPrice)/parseInt(bandWithup)*1024;success(price.toFixed(2))}else{success("")}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 167290641110767260,
                    options: {
                      compId: ['Input_unitPrice_897297_396663'],
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '421255',
                      value: '$data_928491$',
                      valueList: {
                        Input_unitPrice_897297_396663: '$data_928491$',
                      },
                      compid: ['Input_unitPrice_897297_396663'],
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'console',
            dataId: 167290690463263840,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '27405',
              pageJsonId: '8430824',
              value: ['fail'],
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDatagetSelectedData12.params =
      [
        {
          title: '事件入参',
          name: 'options_4949184',
          value: '$options_4949184$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData12,
      { options_4949184 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    );
  };
  const setPrice = (options_230112: any) => {
    const eventDatagetSelectedData13: any = [
      {
        type: 'getSelectedData',
        dataId: 170608427396802780,
        options: {
          compId: 'Input_306376',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '541991',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170608427396879740,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '237201',
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
                },
                {
                  attrId: '674311',
                  code: 'standardPrice',
                  name: '标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '384707',
                  code: 'receiptsPrice',
                  name: '实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '7058047',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '323129',
                  code: 'ipv6GiveNum',
                  name: 'IPv6赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '535103',
                  code: 'ipv4GiveNum',
                  name: 'IPv4赠送数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '547733',
                  code: 'ipv6DemandNum',
                  name: 'IPv6需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '8454034',
                  code: 'ipv4DemandNum',
                  name: 'IPv4需求数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '618242',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '167631',
                  code: 'ipv4BeyondNum',
                  name: 'IPv4超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '1633704',
                  code: 'ipv6BeyondCost',
                  name: 'IPv6超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '841439',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '755452',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '546822',
                  code: 'lastDiscount',
                  name: '最终折扣',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '359579',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '122027',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '500349',
                  code: 'areaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2669222',
                  code: 'joinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '8788325',
                  code: 'bandwidthUp',
                  name: '上行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '155411',
                  code: 'bandwidthDown',
                  name: '下行宽带',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$selectedData_541991[0].value$',
                  },
                },
                {
                  attrId: '568368',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2474105',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '937028',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '214875',
                  code: 'ipv6BeyondNum',
                  name: 'IPv6超出个数',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '198626',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '300842',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '39146',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '684821',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '7134342',
                  code: 'bandwidthUpName',
                  name: '上行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '1659093',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '14809',
                  code: 'bandwidthDownName',
                  name: '下行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$selectedData_541991[0].label$',
                  },
                },
                {
                  attrId: '246587',
                  code: 'ipv4BeyondCost',
                  name: 'IPv4超出费用',
                  type: 'string',
                  initialData: { type: 'static' },
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
            dataId: 170608427396860670,
            options: {
              compId: 'Input_4083588',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '940775',
            },
            line_number: 3,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170608427396856670,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '359454',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var bandWidth=selectedData_940775[0].value;var bandWidthDown=selectedData_541991[0].value;var bandWidthList=data.bandWidthDownList;var bandWidthInfo=bandWidthList.filter(function(item){return item.bandWidth==bandWidth&&item.bandWidthDown==bandWidthDown});bandWidthInfo[0].lineRateInfo.linePrice=parseFloat(bandWidthInfo[0].lineRateInfo.linePrice)/1000;success({lineRateInfo:bandWidthInfo[0].lineRateInfo})};',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170608427396848860,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '0552755',
                      pageJsonId: '8430824',
                      value: ['资费信息'],
                    },
                    line_number: 5,
                  },
                  {
                    type: 'console',
                    dataId: 170608427396887580,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '1371898',
                      pageJsonId: '8430824',
                      value: ['$data_359454$'],
                    },
                    line_number: 6,
                  },
                  {
                    type: 'setValue',
                    dataId: 170608427396838560,
                    options: {
                      compId: 'Input_standardPrice_89896',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '969605',
                      value: '$reply_990125?.resultData[0].localPrice$',
                      valueList: {
                        Input_standardPrice_89896:
                          '$data_359454.lineRateInfo.linePrice$',
                      },
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 170608427396819300,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '660270283',
                          pageJsonId: '8430824',
                          customFuncName: 'calculEndDiscount',
                        },
                        line_number: 8,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'setValue',
                    dataId: 170608427396873630,
                    options: {
                      compId: 'Input_ipv6GiveNum_389494',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '73738',
                      value: '$reply_990125?.resultData[0].ipv6Addr$',
                      valueList: {
                        Input_ipv6GiveNum_389494:
                          '$data_359454.lineRateInfo.ipv6Amount$',
                      },
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 170608427396876700,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '4956623',
                          pageJsonId: '8430824',
                          customFuncName: 'calculV6Num',
                        },
                        line_number: 10,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'setValue',
                    dataId: 170608427396836260,
                    options: {
                      compId: 'Input_ipv4GiveNum_383367',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '258326',
                      value: '$reply_990125?.resultData[0].ipv4Addr$',
                      valueList: {
                        Input_ipv4GiveNum_383367:
                          '$data_359454.lineRateInfo.ipAmount$',
                      },
                    },
                    line_number: 11,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 170608427396821630,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '728136',
                          pageJsonId: '8430824',
                          customFuncName: 'calculV4Num',
                        },
                        line_number: 12,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 170608448819778020,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '9867602',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 13,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 170608450439448600,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '106072',
                      pageJsonId: '8430824',
                      customFuncName: 'calculUnitPrice',
                    },
                    line_number: 14,
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
    eventDatagetSelectedData13.params =
      [
        {
          title: '事件入参',
          name: 'options_230112',
          value: '$options_230112$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData13,
      { options_230112 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    calculV4Num,
    calculEndDiscount,
    calculV6Num,
    calculReceiptsPriceSum,
    calculUnitPrice,
    setPrice,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm22: any = [
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
                    },
                    {
                      attrId: '7058047',
                      code: 'bandwidth',
                      name: '带宽',
                      type: 'string',
                      initialData: { type: 'static' },
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
                    },
                    {
                      attrId: '618242',
                      code: 'ipv6BeyondSel',
                      name: 'IPv6超出选择',
                      type: 'string',
                      initialData: { type: 'static' },
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
                    },
                    {
                      attrId: '841439',
                      code: 'ipv4BeyondCount',
                      name: 'IPv4元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '755452',
                      code: 'unitPrice',
                      name: '单价（元/G）',
                      type: 'string',
                      initialData: { type: 'static' },
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
                    },
                    {
                      attrId: '359579',
                      code: 'market',
                      name: '营销案',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '122027',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '500349',
                      code: 'areaType',
                      name: '区域类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '2669222',
                      code: 'joinWay',
                      name: '接入方式',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '8788325',
                      code: 'bandwidthUp',
                      name: '上行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'bandwidthUp' },
                    },
                    {
                      attrId: '155411',
                      code: 'bandwidthDown',
                      name: '下行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'bandwidthDown' },
                    },
                    {
                      attrId: '568368',
                      code: 'bandwidthPort',
                      name: 'SDWAN端口带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '2474105',
                      code: 'singleUseFee',
                      name: '一次性费用',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '937028',
                      code: 'portFee',
                      name: '端口费',
                      type: 'string',
                      initialData: { type: 'static' },
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
                    },
                    {
                      attrId: '198626',
                      code: 'ipv6BeyondCount',
                      name: 'IPv6元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '300842',
                      code: 'standardPriceSdWan',
                      name: 'SDWAN标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '39146',
                      code: 'receiptsPriceSdWan',
                      name: 'SDWAN实收价格',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '684821',
                      code: 'rowId',
                      name: '行id',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7134342',
                      code: 'bandwidthUpName',
                      name: '上行宽带名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '1659093',
                      code: 'bandwidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '14809',
                      code: 'bandwidthDownName',
                      name: '下行宽带名称',
                      type: 'string',
                      initialData: { type: 'static' },
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
            dataId: 166970471150199330,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '561916',
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
                },
                {
                  attrId: '7058047',
                  code: 'bandwidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
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
                },
                {
                  attrId: '618242',
                  code: 'ipv6BeyondSel',
                  name: 'IPv6超出选择',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ipv6BeyondSel',
                  },
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
                },
                {
                  attrId: '841439',
                  code: 'ipv4BeyondCount',
                  name: 'IPv4元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '755452',
                  code: 'unitPrice',
                  name: '单价（元/G）',
                  type: 'string',
                  initialData: { type: 'static' },
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
                },
                {
                  attrId: '359579',
                  code: 'market',
                  name: '营销案',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '122027',
                  code: 'busiTypeName',
                  name: '业务类型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '500349',
                  code: 'areaType',
                  name: '区域类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2669222',
                  code: 'joinWay',
                  name: '接入方式',
                  type: 'string',
                  initialData: { type: 'static' },
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
                },
                {
                  attrId: '568368',
                  code: 'bandwidthPort',
                  name: 'SDWAN端口带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '2474105',
                  code: 'singleUseFee',
                  name: '一次性费用',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '937028',
                  code: 'portFee',
                  name: '端口费',
                  type: 'string',
                  initialData: { type: 'static' },
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
                },
                {
                  attrId: '198626',
                  code: 'ipv6BeyondCount',
                  name: 'IPv6元/月/个',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '300842',
                  code: 'standardPriceSdWan',
                  name: 'SDWAN标准价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '39146',
                  code: 'receiptsPriceSdWan',
                  name: 'SDWAN实收价格',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '684821',
                  code: 'rowId',
                  name: '行id',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '7134342',
                  code: 'bandwidthUpName',
                  name: '上行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '1659093',
                  code: 'bandwidthName',
                  name: '带宽名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '14809',
                  code: 'bandwidthDownName',
                  name: '下行宽带名称',
                  type: 'string',
                  initialData: { type: 'static' },
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
                },
                {
                  attrId: '218275',
                  code: 'marketList',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '763155',
                  code: 'exceedPrice',
                  name: 'IPV4超出单价',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '801899',
                  code: 'row',
                  name: '条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'row',
                  },
                },
                {
                  attrId: '080931',
                  code: 'receiptsPriceSum',
                  name: '总实收价（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'receiptsPriceSum',
                  },
                },
                {
                  attrId: '104496',
                  code: 'marketName',
                  name: '营销案名称',
                  type: 'string',
                  initialData: { type: 'static' },
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
                dataId: 166970471150111140,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '383463',
                  pageJsonId: '8430824',
                  actionTitle: '',
                  code: 'function main(data,state,success,fail){var _data$marketList;var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var price=parseInt(data.feeInfo.ipv4BeyondCost)/parseInt(data.feeInfo.ipv4BeyondNum);data.feeInfo.exceedPrice=price;var market="";var marketName="";if(data!==null&&data!==void 0&&(_data$marketList=data.marketList)!==null&&_data$marketList!==void 0&&_data$marketList.length){for(var i=0;i<data.marketList.length;i++){if(i!=data.marketList.length-1){market+=data.marketList[i].saleId+";";marketName+=data.marketList[i].saleName+";"}else{market+=data.marketList[i].saleId;marketName+=data.marketList[i].saleName+";"}}}data.feeInfo.marketName=marketName;data.feeInfo.market=market;data.feeInfo.marketList=data.marketList||[];success(data.feeInfo)};',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 166970471150133700,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '980443',
                      pageJsonId: '8430824',
                      params: '$data_383463$',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166970471150128400,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '325856',
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
    eventDatavalidateCurrentForm22.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm22, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal7: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal7.params = [] || [];
    CMDGenerator(eventDatacloseModal7, {}, 'closeModal', {
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
    const eventDataapiRequest157: any = [
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
            line_number: 2,
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
                line_number: 3,
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
                    line_number: 4,
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
                        line_number: 5,
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
                        },
                        {
                          attrId: '359579',
                          code: 'market',
                          name: '营销案',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: [], code: 'market' },
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
                        },
                        {
                          attrId: '246587',
                          code: 'ipv4BeyondCost',
                          name: 'IPv4超出费用',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '218275',
                          code: 'marketList',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '763155',
                          code: 'exceedPrice',
                          name: 'IPV4超出单价',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '801899',
                          code: 'row',
                          name: '条数',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '080931',
                          code: 'receiptsPriceSum',
                          name: '总实收价（元）',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '104496',
                          code: 'marketName',
                          name: '营销案名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 6,
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
    eventDataapiRequest157.params = [] || [];
    CMDGenerator(eventDataapiRequest157, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse98: any = [
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
        dataId: 166988322095483330,
        elseIfs: [],
        line_number: 7,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166988334284520600,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '140684',
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
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '140684_body',
                },
              ],
              _sourceName: '获取专线配置信息-hdb',
            },
            line_number: 8,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 166988334284563700,
                options: {
                  compId: 'Input_306376',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '782513',
                  data: '$reply_140684?.resultData$',
                  labelKey: 'bandwitchDown',
                  valueKey: 'localPrice',
                },
                line_number: 9,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse98.params = [] || [];
    CMDGenerator(eventDataifelse98, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest158: any = [
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '14766_body',
            },
          ],
        },
        line_number: 10,
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
            line_number: 11,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest158.params = [] || [];
    CMDGenerator(eventDataapiRequest158, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest159: any = [
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '240965_body',
            },
          ],
        },
        line_number: 12,
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
            line_number: 13,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest159.params = [] || [];
    CMDGenerator(eventDataapiRequest159, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest160: any = [
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
                  value: { type: ['customize'], code: 'ipv6BeyondSel' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '485509_body',
            },
          ],
        },
        line_number: 14,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166671467400246750,
            options: {
              compId: 'Input_713501',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '994793',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_485509?.resultData$',
            },
            line_number: 15,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 167083162172547620,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '183134',
                  pageJsonId: '8430824',
                  customFuncName: 'calculV6Num',
                },
                line_number: 16,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest160.params = [] || [];
    CMDGenerator(eventDataapiRequest160, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse99: any = [
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
        dataId: 166798239847194180,
        elseIfs: [],
        line_number: 17,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166798239847133900,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '432258',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){var market=state.feeInfo.marketList;success(market)};',
            },
            line_number: 18,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166798239847157380,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '9998134',
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
                  newData: '$data_432258$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 19,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 166798239847107500,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '4462954',
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
                },
                {
                  attrId: '218275',
                  code: 'marketList',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'marketList',
                  },
                },
                {
                  attrId: '763155',
                  code: 'exceedPrice',
                  name: 'IPV4超出单价',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'exceedPrice',
                  },
                },
                {
                  attrId: '801899',
                  code: 'row',
                  name: '条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.feeInfo$'], code: 'row' },
                },
                {
                  attrId: '080931',
                  code: 'receiptsPriceSum',
                  name: '总实收价（元）',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'receiptsPriceSum',
                  },
                },
                {
                  attrId: '104496',
                  code: 'marketName',
                  name: '营销案名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'marketName',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 20,
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
            dataId: 168622308856713150,
            elseIfs: [],
            line_number: 21,
            callback1: [
              {
                type: 'setVisible',
                dataId: 168622318221009820,
                options: {
                  compId: 'Input_9380693',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '5833533',
                  visible: '',
                },
                line_number: 22,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse99.params = [] || [];
    CMDGenerator(eventDataifelse99, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest161: any = [
      {
        type: 'apiRequest',
        dataId: 167343037145927400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '745239',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '0925_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '0925_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '0925_query',
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
                  _id: 'body.bandWidth',
                  compType: 'Input',
                  name: 'bandWidth',
                  parents: ['body'],
                  id: 'body.bandWidth',
                  dataKey: '0925_body.bandWidth',
                },
                {
                  code: 'lineType',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.lineType',
                  compType: 'Input',
                  name: 'lineType',
                  parents: ['body'],
                  id: 'body.lineType',
                  dataKey: '0925_body.lineType',
                },
                {
                  code: 'productId',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.productId',
                  compType: 'Input',
                  name: 'productId',
                  parents: ['body'],
                  id: 'body.productId',
                  dataKey: '0925_body.productId',
                },
                {
                  code: 'status',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.status',
                  compType: 'Input',
                  name: 'status',
                  parents: ['body'],
                  id: 'body.status',
                  dataKey: '0925_body.status',
                },
                {
                  code: 'transferMode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.transferMode',
                  compType: 'Input',
                  name: 'transferMode',
                  parents: ['body'],
                  id: 'body.transferMode',
                  dataKey: '0925_body.transferMode',
                },
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
                  dataKey: '0925_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0925_body',
            },
          ],
          actionTitle: '渲染上行带宽、保存上下行带宽数组',
        },
        line_number: 23,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167359531790834100,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '7267621',
              pageJsonId: '8430824',
              actionTitle: '',
              code: 'function main(data,state,success,fail){var groupLineRateList=reply_745239.resultData.groupLineRateInfo;var bandWidthUpList=[];var bandWidthDownList=[];console.log("\\u5546\\u52A1\\u5FEB\\u7EBF\\u4E13\\u7EBF\\u6E05\\u5355\\u5217\\u8868",groupLineRateList.filter(function(item){return item.productId==3367}));var _loop=function _loop(i){var groupLineRateInfo=groupLineRateList[i];if(groupLineRateInfo.productId!=3367){return"continue"}if(!bandWidthUpList.some(function(item){return item.bandWidth===groupLineRateInfo.bandWidth})){bandWidthUpList.push({bandWidth:groupLineRateInfo.bandWidth,bandWidthName:groupLineRateInfo.bandWidthName});var _loop2=function _loop2(_j2){if(groupLineRateList[_j2].bandWidth!==groupLineRateInfo.bandWidth){return"continue"}if(groupLineRateList[_j2].bandWidthDown&&!bandWidthDownList.some(function(item){return item.bandWidth===groupLineRateList[_j2].bandWidth&&item.bandWidthDown===groupLineRateList[_j2].bandWidthDown})){bandWidthDownList.push({bandWidth:groupLineRateList[_j2].bandWidth,bandWidthName:groupLineRateList[_j2].bandWidthName,bandWidthDown:groupLineRateList[_j2].bandWidthDown,bandWidthDownName:groupLineRateList[_j2].bandWidthDownName,lineRateInfo:groupLineRateList[_j2]})}};for(var _j2=0;_j2<groupLineRateList.length;++_j2){var _ret2=_loop2(_j2);if(_ret2==="continue")continue}}};for(var i=0;i<groupLineRateList.length;++i){var _ret=_loop(i);if(_ret==="continue")continue}for(var _i=0;_i<bandWidthUpList.length;++_i){for(var j=_i+1;j<bandWidthUpList.length;++j){var bandWidthCompara=-1;if(bandWidthUpList[j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(bandWidthUpList[j].bandWidthName.split("M")[0])}else if(bandWidthUpList[j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(bandWidthUpList[j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(bandWidthUpList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(bandWidthUpList[_i].bandWidthName.split("M")[0])}else if(bandWidthUpList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(bandWidthUpList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=bandWidthUpList[_i];bandWidthUpList[_i]=bandWidthUpList[j];bandWidthUpList[j]=temp}}}for(var _i2=0;_i2<bandWidthDownList.length;++_i2){for(var _j=_i2+1;_j<bandWidthDownList.length;++_j){var _bandWidthCompara=-1;if(bandWidthDownList[_j].bandWidthDownName.indexOf("M")!=-1){_bandWidthCompara=parseFloat(bandWidthDownList[_j].bandWidthDownName.split("M")[0])}else if(bandWidthDownList[_j].bandWidthDownName.indexOf("G")!=-1){_bandWidthCompara=parseFloat(bandWidthDownList[_j].bandWidthDownName.split("G")[0])*1024}var _bandWidth=-1;if(bandWidthDownList[_i2].bandWidthDownName.indexOf("M")!=-1){_bandWidth=parseFloat(bandWidthDownList[_i2].bandWidthDownName.split("M")[0])}else if(bandWidthDownList[_i2].bandWidthDownName.indexOf("G")!=-1){_bandWidth=parseFloat(bandWidthDownList[_i2].bandWidthDownName.split("G")[0])*1024}if(_bandWidth>_bandWidthCompara){var temp=bandWidthDownList[_i2];bandWidthDownList[_i2]=bandWidthDownList[_j];bandWidthDownList[_j]=temp}}}console.log("\\u7EC4\\u88C5\\u540E\\u7684\\u4E0A\\u884C\\u5E26\\u5BBD\\u6570\\u7EC4",bandWidthUpList);console.log("\\u7EC4\\u88C5\\u540E\\u7684\\u4E0B\\u884C\\u5E26\\u5BBD\\u6570\\u7EC4",bandWidthDownList);success({bandWidthUpList:bandWidthUpList,bandWidthDownList:bandWidthDownList})};',
            },
            line_number: 24,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167359938768829920,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '193015',
                  pageJsonId: '8430824',
                  dataSourceId: 167359850526023400,
                  dataSourceName: 'bandWidthUpList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '6813301',
                      code: 'bandWidth',
                      name: '上行带宽值',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '4655296',
                      code: 'bandWidthName',
                      name: '上行带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_7267621.bandWidthUpList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 25,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167359944680692450,
                    options: {
                      compId: 'Input_4083588',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '112276',
                      labelKey: 'bandWidthName',
                      valueKey: 'bandWidth',
                      data: '$data.bandWidthUpList$',
                    },
                    line_number: 26,
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
                        dataId: 168655906154086080,
                        elseIfs: [],
                        line_number: 27,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168655907541225060,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '826198',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var bandWidth=state.feeInfo.bandwidthUp;var bandWidthDownList=data_7267621.bandWidthDownList;var successData=[];for(var i=0;i<bandWidthDownList.length;++i){if(bandWidth===bandWidthDownList[i].bandWidth){successData.push(bandWidthDownList[i])}}success({bandWidthDownList:successData})};',
                            },
                            line_number: 28,
                            callback1: [
                              {
                                type: 'reloadSelectData',
                                dataId: 168655907541248300,
                                options: {
                                  compId: 'Input_306376',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Select',
                                  id: '924618',
                                  data: '$data_826198.bandWidthDownList$',
                                  labelKey: 'bandWidthDownName',
                                  valueKey: 'bandWidthDown',
                                },
                                line_number: 29,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'console',
                    dataId: 167359952373128600,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '8543977',
                      pageJsonId: '8430824',
                      value: ['数据源--上行带宽数组'],
                    },
                    line_number: 30,
                  },
                  {
                    type: 'console',
                    dataId: 167359954459086530,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '717129',
                      pageJsonId: '8430824',
                      value: ['$data.bandWidthUpList$'],
                    },
                    line_number: 31,
                  },
                ],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 167359992200422660,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '29294823',
                  pageJsonId: '8430824',
                  dataSourceId: 167359936235911700,
                  dataSourceName: 'bandWidthDownList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'bandWidth',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '1',
                      defaultValue: '',
                      name: '属性',
                      attrId: '5462564',
                      initialData: { type: 'static', value: '1' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'bandWidthName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '2M',
                      defaultValue: '',
                      name: '属性',
                      attrId: '1820724',
                      initialData: { type: 'static', value: '2M' },
                      parentKey: '1',
                      parentType: 'object',
                    },
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
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '4626056',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'configTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '20220417155847',
                          defaultValue: '',
                          name: '属性',
                          attrId: '623414',
                          initialData: {
                            type: 'static',
                            value: '20220417155847',
                          },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'portPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '486564',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'productId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '3367',
                          defaultValue: '',
                          name: '属性',
                          attrId: '29187',
                          initialData: { type: 'static', value: '3367' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'linePrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '200000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '953226',
                          initialData: { type: 'static', value: '200000' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '4492311',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '10000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '7513288',
                          initialData: { type: 'static', value: '10000' },
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
                          attrId: '487045',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'lowDiscount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '35',
                          defaultValue: '',
                          name: '属性',
                          attrId: '3222838',
                          initialData: { type: 'static', value: '35' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'bandWidthDownName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '2M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '0547574',
                          initialData: { type: 'static', value: '2M' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'configOperator',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1010112',
                          defaultValue: '',
                          name: '属性',
                          attrId: '148421',
                          initialData: { type: 'static', value: '1010112' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'transferModeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: 'SDH',
                          defaultValue: '',
                          name: '属性',
                          attrId: '77296117',
                          initialData: { type: 'static', value: 'SDH' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipv6Price',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '377342',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'ipv6Amount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '950012',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'bandWidthName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '2M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '1151286',
                          initialData: { type: 'static', value: '2M' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'bandWidthDown',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '52943727',
                          initialData: { type: 'static', value: '1' },
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
                          attrId: '004838',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'transferMode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '4244909',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                        {
                          code: 'name',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '集团商务快线套餐',
                          defaultValue: '',
                          name: '属性',
                          attrId: '184389',
                          initialData: {
                            type: 'static',
                            value: '集团商务快线套餐',
                          },
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
                          attrId: '62713629',
                          initialData: { type: 'static', value: '生效' },
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
                          attrId: '8967747',
                          initialData: { type: 'static', value: '0' },
                          parentKey: 'lineRateInfo',
                          parentType: 'object',
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '343675',
                      initialData: { type: 'static' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      attrId: '825352',
                      code: 'bandWidthDown',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '28835355',
                      code: 'bandWidthDownName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_7267621.bandWidthDownList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 32,
                callback1: [
                  {
                    type: 'console',
                    dataId: 167359994176473120,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '379817',
                      pageJsonId: '8430824',
                      value: ['数据源--下行带宽数组'],
                    },
                    line_number: 33,
                  },
                  {
                    type: 'console',
                    dataId: 167359995587046620,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '083865',
                      pageJsonId: '8430824',
                      value: ['$data.bandWidthDownList$'],
                    },
                    line_number: 34,
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
    eventDataapiRequest161.params = [] || [];
    CMDGenerator(eventDataapiRequest161, {}, 'apiRequest', {
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
        ref={(r: any) => refs.setComponentRef(r, 'View_8430824_1')}
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
          ref={(r: any) => refs.setComponentRef(r, 'View_917911')}
          {...injectData}
        >
          <Form
            name={'商务快线资费审批'}
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
              const eventDatasetDataSource71: any = [
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
                      },
                      {
                        attrId: '7058047',
                        code: 'bandwidth',
                        name: '带宽',
                        type: 'string',
                        initialData: { type: 'static' },
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
                      },
                      {
                        attrId: '618242',
                        code: 'ipv6BeyondSel',
                        name: 'IPv6超出选择',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'ipv6BeyondSel',
                        },
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
                      },
                      {
                        attrId: '841439',
                        code: 'ipv4BeyondCount',
                        name: 'IPv4元/月/个',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '755452',
                        code: 'unitPrice',
                        name: '单价（元/G）',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'unitPrice',
                        },
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
                      },
                      {
                        attrId: '359579',
                        code: 'market',
                        name: '营销案',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '122027',
                        code: 'busiTypeName',
                        name: '业务类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '500349',
                        code: 'areaType',
                        name: '区域类型',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '2669222',
                        code: 'joinWay',
                        name: '接入方式',
                        type: 'string',
                        initialData: { type: 'static' },
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
                      },
                      {
                        attrId: '568368',
                        code: 'bandwidthPort',
                        name: 'SDWAN端口带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '2474105',
                        code: 'singleUseFee',
                        name: '一次性费用',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '937028',
                        code: 'portFee',
                        name: '端口费',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '214875',
                        code: 'ipv6BeyondNum',
                        name: 'IPv6超出个数',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '198626',
                        code: 'ipv6BeyondCount',
                        name: 'IPv6元/月/个',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '300842',
                        code: 'standardPriceSdWan',
                        name: 'SDWAN标准价格',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '39146',
                        code: 'receiptsPriceSdWan',
                        name: 'SDWAN实收价格',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '684821',
                        code: 'rowId',
                        name: '行id',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '7134342',
                        code: 'bandwidthUpName',
                        name: '上行宽带名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '1659093',
                        code: 'bandwidthName',
                        name: '带宽名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '14809',
                        code: 'bandwidthDownName',
                        name: '下行宽带名称',
                        type: 'string',
                        initialData: { type: 'static' },
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
                      },
                      {
                        attrId: '218275',
                        code: 'marketList',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '763155',
                        code: 'exceedPrice',
                        name: 'IPV4超出单价',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '801899',
                        code: 'row',
                        name: '条数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'row',
                        },
                      },
                      {
                        attrId: '080931',
                        code: 'receiptsPriceSum',
                        name: '总实收价（元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPriceSum',
                        },
                      },
                      {
                        attrId: '104496',
                        code: 'marketName',
                        name: '营销案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 168610623927458600,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '051455',
                        pageJsonId: '8430824',
                        value: ['当前数据源：', '$data.feeInfo$'],
                      },
                      line_number: 2,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource71.params = [] || [];
              CMDGenerator(eventDatasetDataSource71, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_981467')}
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
                const eventDatagetSelectedData124: any = [
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
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
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
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '331495',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_215887[0].value$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170608108251357730,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 17060810825136126,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170608108251347600,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                    'View_997423',
                                    'View_05644',
                                    'View_3279738',
                                    'Text_5292066',
                                    'Text_151813',
                                    'View_114141',
                                    'View_3205255',
                                    'Input_7018495',
                                    'View_794476',
                                    'Button_5661896',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '7392379',
                                  visible: 'true',
                                  compid: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                    'View_997423',
                                    'View_05644',
                                    'View_3279738',
                                    'Text_5292066',
                                    'Text_151813',
                                    'View_114141',
                                    'View_3205255',
                                    'Input_7018495',
                                    'View_794476',
                                    'Button_5661896',
                                  ],
                                },
                                actionObjId: 'Input_40440484',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 170608108251347600,
                                options: {
                                  compId: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                    'View_997423',
                                    'View_05644',
                                    'View_3279738',
                                    'Text_5292066',
                                    'Text_151813',
                                    'View_114141',
                                    'View_3205255',
                                    'Input_7018495',
                                    'View_794476',
                                    'Button_5661896',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '7392379',
                                  visible: 'true',
                                  compid: [
                                    'View_9239465',
                                    'View_731177',
                                    'Text_78114',
                                    'Text_15943706',
                                    'View_30524',
                                    'View_646185',
                                    'View_08044',
                                    'Input_40440484',
                                    'Button_9404796',
                                    'View_997423',
                                    'View_05644',
                                    'View_3279738',
                                    'Text_5292066',
                                    'Text_151813',
                                    'View_114141',
                                    'View_3205255',
                                    'Input_7018495',
                                    'View_794476',
                                    'Button_5661896',
                                  ],
                                },
                                line_number: 5,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 170608108251388930,
                            options: {
                              compId: [
                                'View_9239465',
                                'View_731177',
                                'Text_78114',
                                'Text_15943706',
                                'View_30524',
                                'View_646185',
                                'View_08044',
                                'Input_40440484',
                                'Button_9404796',
                                'View_997423',
                                'View_05644',
                                'View_3279738',
                                'Text_5292066',
                                'Text_151813',
                                'View_114141',
                                'View_3205255',
                                'Input_7018495',
                                'View_794476',
                                'Button_5661896',
                              ],
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '8358553',
                              visible: '',
                              compid: [
                                'View_9239465',
                                'View_731177',
                                'Text_78114',
                                'Text_15943706',
                                'View_30524',
                                'View_646185',
                                'View_08044',
                                'Input_40440484',
                                'Button_9404796',
                                'View_997423',
                                'View_05644',
                                'View_3279738',
                                'Text_5292066',
                                'Text_151813',
                                'View_114141',
                                'View_3205255',
                                'Input_7018495',
                                'View_794476',
                                'Button_5661896',
                              ],
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData124.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData124,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_busiType_956176')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_997423',
                uid: 'View_997423',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
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
              ref={(r: any) => refs.setComponentRef(r, 'View_997423')}
              {...injectData}
            >
              <View
                name={'布局容器'}
                formItemIndex={1}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_05644',
                  uid: 'View_05644',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_05644')}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  formItemIndex={1}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_3279738',
                    uid: 'View_3279738',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_3279738')}
                  {...injectData}
                >
                  <Text
                    name={'*'}
                    content={'*'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_5292066',
                      uid: 'Text_5292066',
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
                    ref={(r: any) => refs.setComponentRef(r, 'Text_5292066')}
                    {...injectData}
                  />
                  <Text
                    name={'专线编码'}
                    content={'专线编码：'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_151813',
                      uid: 'Text_151813',
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
                    ref={(r: any) => refs.setComponentRef(r, 'Text_151813')}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_114141',
                      uid: 'View_114141',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_114141')}
                    {...injectData}
                  >
                    <View
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_3205255',
                        uid: 'View_3205255',
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_3205255')}
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
                          id: 'Input_7018495',
                          uid: 'Input_7018495',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_7018495')
                        }
                        {...injectData}
                      />
                    </View>
                    <View
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_794476',
                        uid: 'View_794476',
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_794476')}
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
                          id: 'Button_5661896',
                          uid: 'Button_5661896',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={false}
                        readOnly={false}
                        style={{ width: '100%' }}
                        onClick={(e: any) => {
                          const eventDatacallCustomPageFunc9: any = [
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
                                          line_number: 18,
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
                                          line_number: 18,
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
                                        dataSourceId: 170608328414486100,
                                        dataSourceName: 'pageData',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '61226',
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
                                          prodId: '3367',
                                          prodName: '商务快线',
                                        },
                                        paramsObjKeyValueMap: {
                                          groupId: '$CustoPageFuncs_598112$',
                                          prodId: '3367',
                                          prodName: '商务快线',
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
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'standardPrice',
                                                    },
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
                                                      type: [],
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
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'ipv4GiveNum',
                                                    },
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
                                                    code: 'crmAreaType',
                                                    name: '区域类型',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: ['crmAreaType'],
                                                    _idpath: ['500349'],
                                                  },
                                                  {
                                                    attrId: '2669222',
                                                    code: 'crmJoinWay',
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
                                                    _codePath: ['crmJoinWay'],
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
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'upstreamBandwidth',
                                                    },
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
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'downstreamBandwidth',
                                                    },
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
                                                    code: 'crmAreaTypeName',
                                                    name: '区域类型名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'crmAreaTypeName',
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
                                                    attrId: '007759',
                                                    code: 'marketList',
                                                    name: '属性',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['007759'],
                                                    children: [],
                                                  },
                                                  {
                                                    attrId: '628577',
                                                    code: 'row',
                                                    name: '条数',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['628577'],
                                                  },
                                                  {
                                                    attrId: '865421',
                                                    code: 'receiptsPriceSum',
                                                    name: '总实收价（元）',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['865421'],
                                                  },
                                                  {
                                                    attrId: '933879',
                                                    code: 'marketName',
                                                    name: '营销案名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['933879'],
                                                  },
                                                  {
                                                    attrId: '336101',
                                                    code: 'specialLine',
                                                    name: '属性',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _idpath: ['336101'],
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$okData_5905692$',
                                                      ],
                                                      code: 'specialLine',
                                                    },
                                                  },
                                                  {
                                                    attrId: '707421',
                                                    code: 'crmJoinWayName',
                                                    name: '接入方式名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: true,
                                                    _codePath: [
                                                      'crmJoinWayName',
                                                    ],
                                                    _idpath: ['707421'],
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
                                                      'Input_7018495',
                                                      'Input_4083588',
                                                      'Input_306376',
                                                    ],
                                                    compLib: 'comm',
                                                    pageJsonId: '8430824',
                                                    compName: 'Select',
                                                    id: '870508',
                                                    valueList: {
                                                      Input_7018495:
                                                        '$okData_5905692.specialLine$',
                                                      Input_4083588:
                                                        '$okData_5905692.upstreamBandwidth$',
                                                      Input_306376:
                                                        '$okData_5905692.downstreamBandwidth$',
                                                    },
                                                    compid: [
                                                      'Input_7018495',
                                                      'Input_4083588',
                                                      'Input_306376',
                                                    ],
                                                  },
                                                  line_number: 8,
                                                  callback1: [
                                                    {
                                                      type: 'customActionCode',
                                                      dataId: 170608388895697540,
                                                      options: {
                                                        compId:
                                                          'customActionCode',
                                                        compName: 'page',
                                                        id: '661691',
                                                        pageJsonId: '8430824',
                                                        code: 'function main(data,state,success,fail){success()};',
                                                      },
                                                      line_number: 9,
                                                      callback1: [
                                                        {
                                                          type: 'setValue',
                                                          dataId: 170608388895682460,
                                                          options: {
                                                            compId: [
                                                              'Input_standardPrice_89896',
                                                              'Input_receiptsPrice_488443',
                                                              'Input_ipv4GiveNum_383367',
                                                              'Input_ipv4DemandNum_1451523902',
                                                              'Input_ipv4BeyondNum_198033',
                                                              'Input_9380693',
                                                              'Input_unitPrice_897297_396663',
                                                              'Input_264884',
                                                            ],
                                                            compLib: 'comm',
                                                            pageJsonId:
                                                              '8430824',
                                                            compName: 'Input',
                                                            id: '219122',
                                                            value:
                                                              '$reply_489762?.resultData[0].localPrice$',
                                                            valueList: {
                                                              Input_standardPrice_89896:
                                                                '$data_661691.linePrice$',
                                                              Input_ipv4GiveNum_383367:
                                                                '$okData_5905692$',
                                                            },
                                                            compid: [
                                                              'Input_standardPrice_89896',
                                                              'Input_receiptsPrice_488443',
                                                              'Input_ipv4GiveNum_383367',
                                                              'Input_ipv4DemandNum_1451523902',
                                                              'Input_ipv4BeyondNum_198033',
                                                              'Input_9380693',
                                                              'Input_unitPrice_897297_396663',
                                                              'Input_264884',
                                                            ],
                                                          },
                                                          line_number: 10,
                                                          callback1: [
                                                            {
                                                              type: 'customActionCode',
                                                              dataId: 170608874827042300,
                                                              options: {
                                                                compId:
                                                                  'customActionCode',
                                                                compName:
                                                                  'page',
                                                                id: '438956',
                                                                pageJsonId:
                                                                  '8430824',
                                                                code: 'function main(data,state,success,fail){success()};',
                                                              },
                                                              line_number: 11,
                                                              callback1: [
                                                                {
                                                                  type: 'console',
                                                                  dataId: 170608874827077500,
                                                                  options: {
                                                                    compId:
                                                                      'debug',
                                                                    compName:
                                                                      'system',
                                                                    id: '9409267',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    value: [
                                                                      '资费信息',
                                                                    ],
                                                                  },
                                                                  line_number: 12,
                                                                },
                                                                {
                                                                  type: 'console',
                                                                  dataId: 170608874827006050,
                                                                  options: {
                                                                    compId:
                                                                      'debug',
                                                                    compName:
                                                                      'system',
                                                                    id: '42729',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    value: [
                                                                      '$data_438956$',
                                                                    ],
                                                                  },
                                                                  line_number: 13,
                                                                },
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 170608874827039840,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '034677',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculReceiptsPriceSum',
                                                                  },
                                                                  line_number: 14,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 170608874827065860,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '799458',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculUnitPrice',
                                                                  },
                                                                  line_number: 15,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 170608889906485500,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '212512',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculEndDiscount',
                                                                  },
                                                                  line_number: 16,
                                                                  callback1: [],
                                                                  callback2: [],
                                                                },
                                                                {
                                                                  type: 'callSelfFunc',
                                                                  dataId: 170608891445569500,
                                                                  options: {
                                                                    compId:
                                                                      'callSelfFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '589637',
                                                                    pageJsonId:
                                                                      '8430824',
                                                                    customFuncName:
                                                                      'calculV4Num',
                                                                  },
                                                                  line_number: 17,
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
                          eventDatacallCustomPageFunc9.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallCustomPageFunc9,
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
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_5661896')
                        }
                        {...injectData}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
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
              formItemIndex={2}
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
                const eventDatagetSelectedData125: any = [
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
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: { type: [], code: 'bandwidthDownName' },
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            dataId: 166901667753357100,
                            shielding: true,
                            options: {
                              compId: 'Input_standardPrice_89896',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '7009614',
                            },
                            line_number: 5,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901668403949700,
                            shielding: true,
                            options: {
                              compId: 'Input_ipv6GiveNum_389494',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '963375',
                            },
                            line_number: 6,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901668681815940,
                            shielding: true,
                            options: {
                              compId: 'Input_ipv4GiveNum_383367',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '736512',
                            },
                            line_number: 7,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901670768961660,
                            shielding: true,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '051214',
                            },
                            line_number: 8,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901695081032960,
                            shielding: true,
                            options: {
                              compId: 'Input_9380693',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '642429',
                            },
                            line_number: 9,
                          },
                          {
                            type: 'clearValue',
                            dataId: 166901695851794720,
                            shielding: true,
                            options: {
                              compId: 'Input_lastDiscount_72621',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '2218127',
                            },
                            line_number: 10,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 166979511275528960,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '437062',
                              pageJsonId: '8430824',
                              customFuncName: 'calculV6Num',
                            },
                            line_number: 11,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 167290659038212060,
                        shielding: true,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '177002',
                          pageJsonId: '8430824',
                          customFuncName: 'calculUnitPrice',
                        },
                        line_number: 12,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'customActionCode',
                        dataId: 167360048238100580,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7906955',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var bandWidth=selectedData_916446[0].value;var bandWidthDownList=data.bandWidthDownList;var successData=[];for(var i=0;i<bandWidthDownList.length;++i){if(bandWidth===bandWidthDownList[i].bandWidth){successData.push(bandWidthDownList[i])}}success({bandWidthDownList:successData})};',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 167360075639512100,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '63789',
                              pageJsonId: '8430824',
                              value: ['成功回调值'],
                            },
                            line_number: 14,
                          },
                          {
                            type: 'console',
                            dataId: 167360076344228260,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '161515',
                              pageJsonId: '8430824',
                              value: ['$data_7906955$'],
                            },
                            line_number: 15,
                          },
                          {
                            type: 'reloadSelectData',
                            dataId: 167360076634506050,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '2609074',
                              data: '$data_7906955.bandWidthDownList$',
                              labelKey: 'bandWidthDownName',
                              valueKey: 'bandWidthDown',
                            },
                            line_number: 16,
                            callback1: [],
                          },
                          {
                            type: 'clearValue',
                            dataId: 167360085683661220,
                            options: {
                              compId: 'Input_standardPrice_89896',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '0205185',
                            },
                            line_number: 17,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167360086184746850,
                            options: {
                              compId: 'Input_ipv6GiveNum_389494',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '542275',
                            },
                            line_number: 18,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167360086591971520,
                            options: {
                              compId: 'Input_ipv4GiveNum_383367',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '7555252',
                            },
                            line_number: 19,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167360087057492260,
                            options: {
                              compId: 'Input_306376',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Select',
                              id: '345503',
                            },
                            line_number: 20,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167360087447716220,
                            options: {
                              compId: 'Input_9380693',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '581413',
                            },
                            line_number: 21,
                          },
                          {
                            type: 'clearValue',
                            dataId: 167360087703260830,
                            options: {
                              compId: 'Input_lastDiscount_72621',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '3332144',
                            },
                            line_number: 22,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 167360087963117820,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '2380226',
                              pageJsonId: '8430824',
                              customFuncName: 'calculV6Num',
                            },
                            line_number: 23,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 167360088608983360,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '3623904',
                          pageJsonId: '8430824',
                          customFuncName: 'calculUnitPrice',
                        },
                        line_number: 24,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData125.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData125,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_4083588')}
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
              formItemIndex={3}
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
                const eventDatagetSelectedData126: any = [
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
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            type: 'customActionCode',
                            dataId: 167360207654811500,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '936761',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var bandWidth=selectedData_165631[0].value;var bandWidthDown=selectedData_568059[0].value;var bandWidthList=data.bandWidthDownList;var bandWidthInfo=bandWidthList.filter(function(item){return item.bandWidth==bandWidth&&item.bandWidthDown==bandWidthDown});bandWidthInfo[0].lineRateInfo.linePrice=parseFloat(bandWidthInfo[0].lineRateInfo.linePrice)/1000;success({lineRateInfo:bandWidthInfo[0].lineRateInfo})};',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 167360234221370620,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '255141',
                                  pageJsonId: '8430824',
                                  value: ['资费信息'],
                                },
                                line_number: 5,
                              },
                              {
                                type: 'console',
                                dataId: 167360234959451300,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '5086206',
                                  pageJsonId: '8430824',
                                  value: ['$data_936761$'],
                                },
                                line_number: 6,
                              },
                              {
                                type: 'setValue',
                                dataId: 167360239407916160,
                                options: {
                                  compId: 'Input_standardPrice_89896',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '730275',
                                  value:
                                    '$reply_990125?.resultData[0].localPrice$',
                                  valueList: {
                                    Input_standardPrice_89896:
                                      '$data_936761.lineRateInfo.linePrice$',
                                  },
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167360239408074000,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '673667',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculEndDiscount',
                                    },
                                    line_number: 8,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'setValue',
                                dataId: 167360262145011330,
                                options: {
                                  compId: 'Input_ipv6GiveNum_389494',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '125424',
                                  value:
                                    '$reply_990125?.resultData[0].ipv6Addr$',
                                  valueList: {
                                    Input_ipv6GiveNum_389494:
                                      '$data_936761.lineRateInfo.ipv6Amount$',
                                  },
                                },
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167360262145087800,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '502023',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculV6Num',
                                    },
                                    line_number: 10,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'setValue',
                                dataId: 167360265725528480,
                                options: {
                                  compId: 'Input_ipv4GiveNum_383367',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '0283476',
                                  value:
                                    '$reply_990125?.resultData[0].ipv4Addr$',
                                  valueList: {
                                    Input_ipv4GiveNum_383367:
                                      '$data_936761.lineRateInfo.ipAmount$',
                                  },
                                },
                                line_number: 11,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167360265725543740,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '973791',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculV4Num',
                                    },
                                    line_number: 12,
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
                eventDatagetSelectedData126.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData126,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_306376')}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_standardPrice_89896')
              }
              {...injectData}
            />
            <Input
              name={'单条实收价'}
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
              formItemIndex={5}
              regexp={[
                {
                  id: '32879',
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
                const eventDatacallSelfFunc161: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166547455827095460,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '386727',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc161.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc161, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc162: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167117953721899600,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '711546',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc162.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc162, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc163: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167290662752647260,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '503584',
                      pageJsonId: '8430824',
                      customFuncName: 'calculUnitPrice',
                    },
                    line_number: 3,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc163.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc163, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_receiptsPrice_488443')
              }
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
              formItemIndex={6}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_ipv6GiveNum_389494')
              }
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
              formItemIndex={7}
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
                const eventDatacallSelfFunc164: any = [
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
                eventDatacallSelfFunc164.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc164, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_ipv4GiveNum_383367')
              }
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
              formItemIndex={8}
              regexp={[
                {
                  id: '7466707',
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
                const eventDatacallSelfFunc165: any = [
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
                eventDatacallSelfFunc165.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc165, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatagetValue151: any = [
                  {
                    type: 'getValue',
                    dataId: 168111834703728030,
                    shielding: true,
                    options: {
                      compId: 'Input_ipv6GiveNum_389494',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '749014',
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
                              context: '$value_749014$',
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
                        dataId: 168111834979409900,
                        elseIfs: [],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168111844636754850,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '228447',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){success(parseInt(e.target.value)<=parseInt(value_749014))};',
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
                                      context: '$data_228447$',
                                      operate: '== false',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168111855554979360,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 168111975965243330,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168111978159208800,
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
                                          id: '165127',
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
                                        dataId: 168111978159208800,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_ipv6DemandNum_94541',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '165127',
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
                                    dataId: 168111857301103800,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_ipv6DemandNum_94541',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '506242',
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
                              context: '$value_749014$',
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
                        dataId: 168111936242509860,
                        elseIfs: [],
                        line_number: 8,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168111943965911870,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '28279736',
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
                                      context: '$data_28279736$',
                                      operate: '== true',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168111943965966700,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 168111985142741150,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168111986147036300,
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
                                          id: '507949',
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
                                        dataId: 168111986147036300,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_ipv6DemandNum_94541',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Input',
                                          id: '507949',
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
                                    dataId: 168111943965992220,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_ipv6DemandNum_94541',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '19787',
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
                eventDatagetValue151.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue151, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_ipv6DemandNum_94541')
              }
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
              formItemIndex={9}
              regexp={[
                {
                  id: '5603435',
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
                const eventDatacallSelfFunc166: any = [
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
                eventDatacallSelfFunc166.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc166, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_ipv4DemandNum_1451523902')
              }
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
              formItemIndex={10}
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
                const eventDatacallSelfFunc167: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166671372412804450,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '745238',
                      pageJsonId: '8430824',
                      customFuncName: 'calculV6Num',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc167.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc167, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatagetSelectedData127: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166798343050547040,
                    options: {
                      compId: 'Input_713501',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '787595',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166798343380067040,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '740968',
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
                            },
                            {
                              attrId: '674311',
                              code: 'standardPrice',
                              name: '标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '384707',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7058047',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '323129',
                              code: 'ipv6GiveNum',
                              name: 'IPv6赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '535103',
                              code: 'ipv4GiveNum',
                              name: 'IPv4赠送数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '547733',
                              code: 'ipv6DemandNum',
                              name: 'IPv6需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8454034',
                              code: 'ipv4DemandNum',
                              name: 'IPv4需求数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '618242',
                              code: 'ipv6BeyondSel',
                              name: 'IPv6超出选择',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_787595[0].value$',
                              },
                            },
                            {
                              attrId: '167631',
                              code: 'ipv4BeyondNum',
                              name: 'IPv4超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1633704',
                              code: 'ipv6BeyondCost',
                              name: 'IPv6超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '841439',
                              code: 'ipv4BeyondCount',
                              name: 'IPv4元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '755452',
                              code: 'unitPrice',
                              name: '单价（元/G）',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '546822',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '359579',
                              code: 'market',
                              name: '营销案',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '122027',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '500349',
                              code: 'areaType',
                              name: '区域类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2669222',
                              code: 'joinWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8788325',
                              code: 'bandwidthUp',
                              name: '上行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '155411',
                              code: 'bandwidthDown',
                              name: '下行宽带',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '568368',
                              code: 'bandwidthPort',
                              name: 'SDWAN端口带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '2474105',
                              code: 'singleUseFee',
                              name: '一次性费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '937028',
                              code: 'portFee',
                              name: '端口费',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '214875',
                              code: 'ipv6BeyondNum',
                              name: 'IPv6超出个数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '198626',
                              code: 'ipv6BeyondCount',
                              name: 'IPv6元/月/个',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '300842',
                              code: 'standardPriceSdWan',
                              name: 'SDWAN标准价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '39146',
                              code: 'receiptsPriceSdWan',
                              name: 'SDWAN实收价格',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '684821',
                              code: 'rowId',
                              name: '行id',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7134342',
                              code: 'bandwidthUpName',
                              name: '上行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1659093',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '14809',
                              code: 'bandwidthDownName',
                              name: '下行宽带名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '246587',
                              code: 'ipv4BeyondCost',
                              name: 'IPv4超出费用',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '218275',
                              code: 'marketList',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
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
                eventDatagetSelectedData127.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData127,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_713501')}
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
              formItemIndex={11}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_ipv4BeyondNum_198033')
              }
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
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={12}
              fieldName={'ipv6BeyondCost'}
              value={data?.feeInfo?.ipv6BeyondCost}
              regexp={[
                {
                  id: '2014697',
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_1045175')}
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
              formItemIndex={13}
              fieldName={'ipv4BeyondCost'}
              value={data?.feeInfo?.ipv4BeyondCost}
              regexp={[
                {
                  id: '9686715',
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_9380693')}
              {...injectData}
            />
            <Input
              name={'每G单价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/G'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'unitPrice'}
              value={data?.feeInfo?.unitPrice}
              formItemIndex={14}
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
                id: 'Input_unitPrice_897297_396663',
                uid: 'Input_unitPrice_897297_396663',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_unitPrice_897297_396663')
              }
              {...injectData}
            />
            <Input
              name={'最终折扣'}
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
              required={false}
              placeholder={'请输入'}
              fieldName={'lastDiscount'}
              value={data?.feeInfo?.lastDiscount}
              formItemIndex={15}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_lastDiscount_72621')
              }
              {...injectData}
            />
            <Input
              name={'安装条数'}
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
              formItemIndex={16}
              fieldName={'row'}
              value={data?.feeInfo?.row}
              regexp={[
                {
                  id: '952667',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
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
                id: 'Input_264884',
                uid: 'Input_264884',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc168: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167117954800974820,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '588233454',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc168.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc168, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_264884')}
              {...injectData}
            />
            <Input
              name={'总实收价'}
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
              postfixIconPosition={'after'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={17}
              fieldName={'receiptsPriceSum'}
              value={data?.feeInfo?.receiptsPriceSum}
              postfixStyle={'1'}
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
                id: 'Input_183431',
                uid: 'Input_183431',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_183431')}
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
          ref={(r: any) => refs.setComponentRef(r, 'Form_719112')}
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
            required={false}
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
            visible={false}
            readOnly={false}
            isFormRootChild={true}
            onIconClick={() => {
              const eventDatagetValue153: any = [
                {
                  type: 'getValue',
                  dataId: 166627245978212400,
                  options: {
                    compId: 'Input_672199',
                    compLib: 'comm',
                    pageJsonId: '8430824',
                    compName: 'Input',
                    id: '055959',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '084411',
                          options: {
                            context: '$value_055959$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166627246123889280,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166627247778216960,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166627248260719200,
                              children: [],
                              todoOptions: ['msgType', 'value'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '827507',
                                pageJsonId: '8430824',
                                type: 'error',
                                value: '请填写营销案信息',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              line_number: 6,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 166627248260719200,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '827507',
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
                          dataId: 166627249629665250,
                          options: {
                            compId: 'showCustomModal',
                            compName: 'page',
                            id: '839607',
                            pageJsonId: '8430824',
                            modalname: '/marketSel',
                            pageId: '899632499889246208',
                            paramsObj: { marketCode: '$value_055959$' },
                            paramsObjKeyValueMap: {
                              marketCode: '$value_055959$',
                            },
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 166627250564584480,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '65287',
                                pageJsonId: '8430824',
                                code: 'function main(data,state,success,fail){data.marketList=data.marketList.filter(function(v){return v.code!=okData_839607.code});data.marketList.push(okData_839607);success(data.marketList)};',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 166627252604600800,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '3511895',
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
                                    newData: '$data_65287$',
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
              eventDatagetValue153.params = [] || [];
              CMDGenerator(eventDatagetValue153, {}, 'getValue', {
                id: 'getValue',
                name: 'getValue',
                type: 'getValue',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_672199')}
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
            visible={false}
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
            ref={(r: any) => refs.setComponentRef(r, 'View_015288')}
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
                const eventDatagetTableSelectedKey23: any = [
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
                eventDatagetTableSelectedKey23.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey23,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_096039')}
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
            id: 'View_015288_239109_6528729_3449095',
            uid: 'View_015288_239109_6528729_3449095',
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
            textAlign: 'right',
            margin: '10px 0px 0px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_015288_239109_6528729_3449095')
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
              id: 'Button_898304_051444_817773_2709943',
              uid: 'Button_898304_051444_817773_2709943',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatashowCustomModal42: any = [
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
                    modalPath: '/marketSel',
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
              eventDatashowCustomModal42.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal42,
                { e },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
              const eventDatashowCustomModal43: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166969121309806460,
                  shielding: true,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '4604',
                    pageJsonId: '8430824',
                    modalname: '/yingxiaoanfangweixuanzhe',
                    pageId: '914478259933954048',
                  },
                  line_number: 4,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166969130587432130,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '5768774',
                        pageJsonId: '8430824',
                        code: 'function main(data,state,success,fail){var res=data.marketList;okData_4604.forEach(function(y){var exit=data.marketList.findIndex(function(item){return item.saleId===y.saleId});if(exit===-1){res.push(y)}});data.marketList=res;success(res)};',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166969130587418050,
                          shielding: true,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '9311836',
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
                            newData: '$data_5768774$',
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
              eventDatashowCustomModal43.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal43,
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
              refs.setComponentRef(r, 'Button_898304_051444_817773_2709943')
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
              id: 'Button_096039_453083_336442_869852',
              uid: 'Button_096039_453083_336442_869852',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              const eventDatagetTableSelectedKey24: any = [
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
              eventDatagetTableSelectedKey24.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatagetTableSelectedKey24,
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
              refs.setComponentRef(r, 'Button_096039_453083_336442_869852')
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_6112271')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(BusiFeeAudit$$Modal, {
  pageId,
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
