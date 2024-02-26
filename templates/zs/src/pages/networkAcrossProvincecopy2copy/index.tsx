// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Divider, Form, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1054577968876183552';
const NetworkAcrossProvincecopy2copy$$Modal: React.FC<PageProps> = ({
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
  const change = (options_3945594: any) => {
    const eventDatagetValue18: any = [
      {
        type: 'getValue',
        dataId: 170324373434366300,
        options: {
          compId: 'Input_865734',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '6544325',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170324373700024060,
            options: {
              compId: 'Input_255701',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '697246',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '766176',
                    options: { context: '$value_697246$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_6544325$',
                      operate: 'notEmpty',
                    },
                    condId: '1590896',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170324401706710080,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170324864871200450,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170324865287790000,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: [
                            'View_1338847',
                            'Input_41549',
                            'Input_1468814',
                            'Input_6826115',
                            'Input_6531785',
                            'Input_1760864',
                            'Input_555456',
                            'Input_308601',
                            'Input_839886',
                            'Input_397516',
                            'Input_557107',
                            'Input_48113',
                            'Input_3896351',
                            'Input_2036187',
                            'Input_813179',
                            'Input_432288',
                            'Input_4639525',
                            'Input_01706',
                            'Input_330617',
                            'Input_450806',
                          ],
                          compName: 'page',
                          id: '398073',
                          pageJsonId: '8430824',
                          visible: '',
                          compid: [
                            'View_1338847',
                            'Input_41549',
                            'Input_1468814',
                            'Input_6826115',
                            'Input_6531785',
                            'Input_1760864',
                            'Input_555456',
                            'Input_308601',
                            'Input_839886',
                            'Input_397516',
                            'Input_557107',
                            'Input_48113',
                            'Input_3896351',
                            'Input_2036187',
                            'Input_813179',
                            'Input_432288',
                            'Input_4639525',
                            'Input_01706',
                            'Input_330617',
                            'Input_450806',
                          ],
                        },
                        actionObjId: 'sysSetVisible',
                        actionObjName: 'page',
                        value: 'sysSetVisible',
                        line_number: 18,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'sysSetVisible',
                        dataId: 170324865287790000,
                        options: {
                          compId: [
                            'View_1338847',
                            'Input_41549',
                            'Input_1468814',
                            'Input_6826115',
                            'Input_6531785',
                            'Input_1760864',
                            'Input_555456',
                            'Input_308601',
                            'Input_839886',
                            'Input_397516',
                            'Input_557107',
                            'Input_48113',
                            'Input_3896351',
                            'Input_2036187',
                            'Input_813179',
                            'Input_432288',
                            'Input_4639525',
                            'Input_01706',
                            'Input_330617',
                            'Input_450806',
                          ],
                          compName: 'page',
                          id: '398073',
                          pageJsonId: '8430824',
                          visible: '',
                          compid: [
                            'View_1338847',
                            'Input_41549',
                            'Input_1468814',
                            'Input_6826115',
                            'Input_6531785',
                            'Input_1760864',
                            'Input_555456',
                            'Input_308601',
                            'Input_839886',
                            'Input_397516',
                            'Input_557107',
                            'Input_48113',
                            'Input_3896351',
                            'Input_2036187',
                            'Input_813179',
                            'Input_432288',
                            'Input_4639525',
                            'Input_01706',
                            'Input_330617',
                            'Input_450806',
                          ],
                        },
                        line_number: 18,
                      },
                    ],
                  },
                ],
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '350109',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$value_697246$',
                          operate: '==',
                          manualValue: '2',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$value_6544325$',
                          operate: '==',
                          manualValue: '2',
                        },
                        condId: '529608',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 170324402002185820,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 170324402002186750,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 170324602421923330,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_6531785',
                                'Input_813179',
                                'Input_432288',
                                'Input_308601',
                                'Input_839886',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_48113',
                                'Input_450806',
                                'Input_557107',
                              ],
                              compName: 'page',
                              id: '933847',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_6531785',
                                'Input_813179',
                                'Input_432288',
                                'Input_308601',
                                'Input_839886',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_48113',
                                'Input_450806',
                                'Input_557107',
                              ],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 8,
                          },
                          {
                            dataName: 'action',
                            dataId: 170324608027092480,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_397516',
                                'Input_1760864',
                                'Input_555456',
                                'Input_41549',
                                'Input_1468814',
                                'Input_6826115',
                              ],
                              compName: 'page',
                              id: '964261',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: [
                                'Input_397516',
                                'Input_1760864',
                                'Input_555456',
                                'Input_41549',
                                'Input_1468814',
                                'Input_6826115',
                              ],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 9,
                          },
                          {
                            dataName: 'action',
                            dataId: 170324610914257120,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: [
                                'Input_48113',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_330617',
                                'Input_308601',
                                'Input_6531785',
                              ],
                              compName: 'page',
                              id: '112742',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: [
                                'Input_48113',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_330617',
                                'Input_308601',
                                'Input_6531785',
                              ],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 10,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_697246$',
                              operate: '==',
                              manualValue: '2',
                            },
                            condId: '174768',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_6544325$',
                              operate: '==',
                              manualValue: '1',
                            },
                            condId: '281144',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'sysSetVisible',
                            dataId: 170324602421923330,
                            options: {
                              compId: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_6531785',
                                'Input_813179',
                                'Input_432288',
                                'Input_308601',
                                'Input_839886',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_48113',
                                'Input_450806',
                                'Input_557107',
                              ],
                              compName: 'page',
                              id: '933847',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_6531785',
                                'Input_813179',
                                'Input_432288',
                                'Input_308601',
                                'Input_839886',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_48113',
                                'Input_450806',
                                'Input_557107',
                              ],
                            },
                            line_number: 8,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 170324608027092480,
                            options: {
                              compId: [
                                'Input_397516',
                                'Input_1760864',
                                'Input_555456',
                                'Input_41549',
                                'Input_1468814',
                                'Input_6826115',
                              ],
                              compName: 'page',
                              id: '964261',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: [
                                'Input_397516',
                                'Input_1760864',
                                'Input_555456',
                                'Input_41549',
                                'Input_1468814',
                                'Input_6826115',
                              ],
                            },
                            line_number: 9,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 170324610914257120,
                            options: {
                              compId: [
                                'Input_48113',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_330617',
                                'Input_308601',
                                'Input_6531785',
                              ],
                              compName: 'page',
                              id: '112742',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: [
                                'Input_48113',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_330617',
                                'Input_308601',
                                'Input_6531785',
                              ],
                            },
                            line_number: 10,
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 170324402002139680,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 170324625945426180,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_01706',
                                'Input_48113',
                              ],
                              compName: 'page',
                              id: '753354',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_01706',
                                'Input_48113',
                              ],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 11,
                          },
                          {
                            dataName: 'action',
                            dataId: 170324630086261250,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_1468814',
                                'Input_557107',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                              ],
                              compName: 'page',
                              id: '807474',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: [
                                'Input_1468814',
                                'Input_557107',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                              ],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 12,
                          },
                          {
                            dataName: 'action',
                            dataId: 170324633026391100,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: [
                                'Input_48113',
                                'Input_308601',
                                'Input_555456',
                                'Input_1760864',
                                'Input_6531785',
                                'Input_6826115',
                                'Input_41549',
                              ],
                              compName: 'page',
                              id: '553683',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: [
                                'Input_48113',
                                'Input_308601',
                                'Input_555456',
                                'Input_1760864',
                                'Input_6531785',
                                'Input_6826115',
                                'Input_41549',
                              ],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 13,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_697246$',
                              operate: '==',
                              manualValue: '1',
                            },
                            condId: '174768',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_6544325$',
                              operate: '==',
                              manualValue: '2',
                            },
                            condId: '281144',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'sysSetVisible',
                            dataId: 170324625945426180,
                            options: {
                              compId: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_01706',
                                'Input_48113',
                              ],
                              compName: 'page',
                              id: '753354',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_01706',
                                'Input_48113',
                              ],
                            },
                            line_number: 11,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 170324630086261250,
                            options: {
                              compId: [
                                'Input_1468814',
                                'Input_557107',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                              ],
                              compName: 'page',
                              id: '807474',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: [
                                'Input_1468814',
                                'Input_557107',
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                              ],
                            },
                            line_number: 12,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 170324633026391100,
                            options: {
                              compId: [
                                'Input_48113',
                                'Input_308601',
                                'Input_555456',
                                'Input_1760864',
                                'Input_6531785',
                                'Input_6826115',
                                'Input_41549',
                              ],
                              compName: 'page',
                              id: '553683',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: [
                                'Input_48113',
                                'Input_308601',
                                'Input_555456',
                                'Input_1760864',
                                'Input_6531785',
                                'Input_6826115',
                                'Input_41549',
                              ],
                            },
                            line_number: 13,
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 170324402002117630,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 170324638114695070,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_557107',
                                'Input_48113',
                              ],
                              compName: 'page',
                              id: '688147',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_557107',
                                'Input_48113',
                              ],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 14,
                          },
                          {
                            dataName: 'action',
                            dataId: 170324641582749280,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_450806',
                                'Input_1468814',
                              ],
                              compName: 'page',
                              id: '1165548',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_450806',
                                'Input_1468814',
                              ],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 15,
                          },
                          {
                            dataName: 'action',
                            dataId: 170324644531552930,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_48113',
                              ],
                              compName: 'page',
                              id: '7174764',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_48113',
                              ],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 16,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'sysSetVisible',
                            dataId: 170324638114695070,
                            options: {
                              compId: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_557107',
                                'Input_48113',
                              ],
                              compName: 'page',
                              id: '688147',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_839886',
                                'Input_397516',
                                'Input_557107',
                                'Input_48113',
                              ],
                            },
                            line_number: 14,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 170324641582749280,
                            options: {
                              compId: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_450806',
                                'Input_1468814',
                              ],
                              compName: 'page',
                              id: '1165548',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: [
                                'Input_3896351',
                                'Input_2036187',
                                'Input_813179',
                                'Input_432288',
                                'Input_4639525',
                                'Input_01706',
                                'Input_330617',
                                'Input_450806',
                                'Input_1468814',
                              ],
                            },
                            line_number: 15,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 170324644531552930,
                            options: {
                              compId: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_48113',
                              ],
                              compName: 'page',
                              id: '7174764',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: [
                                'Input_41549',
                                'Input_6826115',
                                'Input_6531785',
                                'Input_1760864',
                                'Input_555456',
                                'Input_308601',
                                'Input_48113',
                              ],
                            },
                            line_number: 16,
                          },
                        ],
                      },
                    ],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 170324405550563780,
                        options: {
                          compId: [
                            'Input_1468814',
                            'Input_6826115',
                            'Input_6531785',
                            'Input_1760864',
                            'Input_555456',
                            'Input_308601',
                            'Input_839886',
                            'Input_397516',
                            'Input_557107',
                            'Input_48113',
                          ],
                          compName: 'page',
                          id: '463271',
                          pageJsonId: '8430824',
                          visible: 'true',
                          compid: [
                            'Input_1468814',
                            'Input_6826115',
                            'Input_6531785',
                            'Input_1760864',
                            'Input_555456',
                            'Input_308601',
                            'Input_839886',
                            'Input_397516',
                            'Input_557107',
                            'Input_48113',
                          ],
                        },
                        line_number: 5,
                      },
                      {
                        type: 'sysSetRequired',
                        dataId: 170324405858707070,
                        options: {
                          compId: [
                            'Input_48113',
                            'Input_308601',
                            'Input_555456',
                            'Input_1760864',
                            'Input_6531785',
                            'Input_1468814',
                            'Input_41549',
                            'Input_6826115',
                          ],
                          compName: 'page',
                          id: '5551585',
                          pageJsonId: '8430824',
                          required: 'true',
                          compid: [
                            'Input_48113',
                            'Input_308601',
                            'Input_555456',
                            'Input_1760864',
                            'Input_6531785',
                            'Input_1468814',
                            'Input_41549',
                            'Input_6826115',
                          ],
                        },
                        line_number: 6,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 170324564517802750,
                        options: {
                          compId: [
                            'Input_3896351',
                            'Input_2036187',
                            'Input_813179',
                            'Input_432288',
                            'Input_4639525',
                            'Input_01706',
                            'Input_330617',
                            'Input_450806',
                            'Input_41549',
                          ],
                          compName: 'page',
                          id: '0458163',
                          pageJsonId: '8430824',
                          visible: '',
                          compid: [
                            'Input_3896351',
                            'Input_2036187',
                            'Input_813179',
                            'Input_432288',
                            'Input_4639525',
                            'Input_01706',
                            'Input_330617',
                            'Input_450806',
                            'Input_41549',
                          ],
                        },
                        line_number: 7,
                      },
                    ],
                  },
                  {
                    type: 'console',
                    dataId: 170324584378335420,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '94199',
                      pageJsonId: '8430824',
                      value: ['==变化=='],
                    },
                    line_number: 17,
                  },
                ],
              },
              {
                type: 'console',
                dataId: 170324577985194240,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '8799657',
                  pageJsonId: '8430824',
                  value: ['$value_697246$', '$value_6544325$'],
                },
                line_number: 19,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue18.params =
      [
        {
          title: '事件入参',
          name: 'options_3945594',
          value: '$options_3945594$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue18, { options_3945594 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    }); // console 170324576659846530
    console.log('===类型变化===');
  };
  const caluRe = (options_3628508: any) => {
    const eventDatagetValue19: any = [
      {
        type: 'getValue',
        dataId: 17032620945579742,
        options: {
          compId: 'Input_41549',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '141649',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170326210230600300,
            options: {
              compId: 'Input_6826115',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '5085106',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170326210850757470,
                options: {
                  compId: 'Input_308601',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '906114',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170326244537920420,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '57448',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var h=parseFloat(value_906114);var c=parseFloat(value_5085106);var z=parseFloat(value_141649);if(h!=null&&h!=undefined&&c!=null&&c!=undefined&&z!=null&&z!=undefined){var r=(z/(c*h)).toFixed(3);if(r!=NaN&&r!="NaN"){success(r)}}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170326244537946530,
                        options: {
                          compId: 'Input_01706',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '7011672',
                          valueList: { Input_01706: '$data_57448$' },
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
    eventDatagetValue19.params =
      [
        {
          title: '事件入参',
          name: 'options_3628508',
          value: '$options_3628508$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue19, { options_3628508 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluBe = (options_5198078: any) => {
    const eventDatagetValue20: any = [
      {
        type: 'getValue',
        dataId: 170326249533575840,
        options: {
          compId: 'Input_6826115',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '063562',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170326249816819800,
            options: {
              compId: 'Input_1760864',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '965945',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170346802074194100,
                options: {
                  compId: 'Input_308601',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '740876',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'getValue',
                    dataId: 170346802520512160,
                    options: {
                      compId: 'Input_839886',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '394631',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170346803309127170,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '867925',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var z=parseFloat(value_394631);var h=parseFloat(value_740876);var y=parseFloat(value_965945);var cs=parseFloat(value_063562);console.log(z,h,y,cs);if(z!=null&&z!=undefined&&h!=null&&h!=undefined&&y!=null&&y!=undefined&&cs!=null&&cs!=undefined){var r=((cs-y)*h/z).toFixed(3);console.log("result:",r);if(r!=NaN&&r!="NaN"){success(r)}}};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 170346803309170940,
                            options: {
                              compId: 'Input_557107',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '2065427',
                              valueList: { Input_557107: '$data_867925$' },
                            },
                            line_number: 6,
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
        ],
      },
    ];
    eventDatagetValue20.params =
      [
        {
          title: '事件入参',
          name: 'options_5198078',
          value: '$options_5198078$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue20, { options_5198078 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    }); // console 170326286753047580
    console.log('--');
  };
  const caluTotal = (options_344144: any) => {
    const eventDatagetValue21: any = [
      {
        type: 'getValue',
        dataId: 170326349470805120,
        options: {
          compId: 'Input_1468814',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '595679',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170326349819020450,
            options: {
              compId: 'Input_6531785',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '732744',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170326350068382940,
                options: {
                  compId: 'Input_555456',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '3753286',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170326350920687600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '98639',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var r=parseFloat(value_3753286);var c=parseFloat(value_732744);var q=parseFloat(value_595679);if(r!=null&&r!=undefined&&c!=null&&c!=undefined&&q!=null&&q!=undefined){var r=(r+c+q).toFixed(3);if(r!=NaN&&r!="NaN"){success(r)}}};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170326359543623940,
                        options: {
                          compId: 'Input_839886',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '747889',
                          valueList: { Input_839886: '$data_98639$' },
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
    eventDatagetValue21.params =
      [
        {
          title: '事件入参',
          name: 'options_344144',
          value: '$options_344144$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue21, { options_344144 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
    const eventDatagetValue22: any = [
      {
        type: 'getValue',
        dataId: 170357759750253120,
        options: {
          compId: 'Input_41549',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '3467467',
        },
        line_number: 6,
        callback1: [
          {
            type: 'getValue',
            dataId: 170357760039769380,
            options: {
              compId: 'Input_6531785',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '4060174',
            },
            line_number: 7,
            callback1: [
              {
                type: 'getValue',
                dataId: 170357760039748450,
                options: {
                  compId: 'Input_555456',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '610014',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170357760039706780,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '9038714',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var r=parseFloat(value_610014);var c=parseFloat(value_4060174);var z=parseFloat(value_3467467);if(r!=null&&r!=undefined&&c!=null&&c!=undefined&&z!=null&&z!=undefined){var r=(r+c+z).toFixed(3);if(r!=NaN&&r!="NaN"){success(r)}}};',
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170357760039708540,
                        options: {
                          compId: 'Input_839886',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '672991',
                          valueList: { Input_839886: '$data_9038714$' },
                        },
                        line_number: 10,
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
    eventDatagetValue22.params =
      [
        {
          title: '事件入参',
          name: 'options_344144',
          value: '$options_344144$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue22, { options_344144 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluValue = (options_6477735: any) => {
    const eventDatagetValue23: any = [
      {
        type: 'getValue',
        dataId: 170326366394905060,
        options: {
          compId: 'Input_6826115',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '1425925',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170326366642798270,
            options: {
              compId: 'Input_308601',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '330751',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170326366954961250,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '759389',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var h=parseFloat(value_330751);var c=parseFloat(value_1425925);if(h!=null&&h!=undefined&&c!=null&&c!=undefined){var r=(h*c).toFixed(3);if(r!=NaN&&r!="NaN"){success(r)}}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 170326372783849120,
                    options: {
                      compId: 'Input_397516',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '260737',
                      valueList: { Input_397516: '$data_759389$' },
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
      },
    ];
    eventDatagetValue23.params =
      [
        {
          title: '事件入参',
          name: 'options_6477735',
          value: '$options_6477735$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue23, { options_6477735 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluZ = (options_066371: any) => {
    const eventDatagetValue24: any = [
      {
        type: 'getValue',
        dataId: 170326380829339550,
        options: {
          compId: 'Input_2036187',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '7515314',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170326381333251650,
            options: {
              compId: 'Input_813179',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '3132757',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170326382246685900,
                options: {
                  compId: 'Input_330617',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '367204',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'getValue',
                    dataId: 170326382869337660,
                    options: {
                      compId: 'Input_4639525',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '2523',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170326383398158000,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '862955',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var f=parseFloat(value_2523);var ld=parseFloat(value_367204);var lw=parseFloat(value_3132757);var x=parseFloat(value_7515314);if(f!=null&&f!=undefined&&ld!=null&&ld!=undefined&&lw!=null&&lw!=undefined&&x!=null&&x!=undefined){var r=(f+ld+lw+x).toFixed(3);if(r!=NaN&&r!="NaN"){success(r)}}};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 170326392614468000,
                            options: {
                              compId: 'Input_450806',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '4234066',
                              valueList: { Input_450806: '$data_862955$' },
                            },
                            line_number: 6,
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
        ],
      },
    ];
    eventDatagetValue24.params =
      [
        {
          title: '事件入参',
          name: 'options_066371',
          value: '$options_066371$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue24, { options_066371 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    change,
    caluRe,
    caluBe,
    caluTotal,
    caluValue,
    caluZ,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm17: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169923828373921540,
        options: {
          compId: 'Form_981467',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Form',
          id: '128072',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170326469334431330,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6287975',
              pageJsonId: '8430824',
              dataSourceId: 166452624216490180,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'msisdn',
                  name: '属性',
                  type: 'string',
                  attrId: '7920964',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'msisdn',
                  },
                  _codePath: ['msisdn'],
                  _idpath: ['7920964'],
                },
                {
                  code: 'groupId',
                  name: '属性',
                  type: 'string',
                  attrId: '685634',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'groupId',
                  },
                  _codePath: ['groupId'],
                  _idpath: ['685634'],
                },
                {
                  code: 'groupName',
                  name: '属性',
                  type: 'string',
                  attrId: '261156',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'groupName',
                  },
                  _codePath: ['groupName'],
                  _idpath: ['261156'],
                },
                {
                  code: 'valueTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '263324',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'valueTypeName',
                  },
                  _codePath: ['valueTypeName'],
                  _idpath: ['263324'],
                },
                {
                  code: 'valuableFlagName',
                  name: '属性',
                  type: 'string',
                  attrId: '8685033',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'valuableFlagName',
                  },
                  _codePath: ['valuableFlagName'],
                  _idpath: ['8685033'],
                },
                {
                  code: 'createTime',
                  name: '属性',
                  type: 'string',
                  attrId: '5624691',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'createTime',
                  },
                  _codePath: ['createTime'],
                  _idpath: ['5624691'],
                },
                {
                  code: 'officialLevelName',
                  name: '属性',
                  type: 'string',
                  attrId: '192954',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'officialLevelName',
                  },
                  _codePath: ['officialLevelName'],
                  _idpath: ['192954'],
                },
                {
                  code: 'memberTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '3485473',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'memberTypeName',
                  },
                  _codePath: ['memberTypeName'],
                  _idpath: ['3485473'],
                },
                {
                  code: 'duty',
                  name: '属性',
                  type: 'string',
                  attrId: '837962',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'duty',
                  },
                  _codePath: ['duty'],
                  _idpath: ['837962'],
                },
                {
                  code: 'keyTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '852426',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'keyTypeName',
                  },
                  _codePath: ['keyTypeName'],
                  _idpath: ['852426'],
                },
                {
                  code: 'name',
                  name: '属性',
                  type: 'string',
                  attrId: '783899',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'name',
                  },
                  _codePath: ['name'],
                  _idpath: ['783899'],
                },
                {
                  code: 'bossName',
                  name: '属性',
                  type: 'string',
                  attrId: '293281',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'bossName',
                  },
                  _codePath: ['bossName'],
                  _idpath: ['293281'],
                },
                {
                  code: 'staffTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '815256',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'staffTypeName',
                  },
                  _codePath: ['staffTypeName'],
                  _idpath: ['815256'],
                },
                {
                  code: 'ageTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '661524',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'ageTypeName',
                  },
                  _codePath: ['ageTypeName'],
                  _idpath: ['661524'],
                },
                {
                  code: 'saleId',
                  name: '属性',
                  type: 'string',
                  attrId: '012048',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'saleId',
                  },
                  _codePath: ['saleId'],
                  _idpath: ['012048'],
                },
                {
                  code: 'saleName',
                  name: '属性',
                  type: 'string',
                  attrId: '590825398',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'saleName',
                  },
                  _codePath: ['saleName'],
                  _idpath: ['590825398'],
                },
                {
                  code: 'acceptCity',
                  name: '属性',
                  type: 'string',
                  attrId: '490918',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['acceptCity'],
                  _idpath: ['490918'],
                },
                {
                  code: 'startTime',
                  name: '属性',
                  type: 'string',
                  attrId: '663852',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'startTime',
                  },
                  _codePath: ['startTime'],
                  _idpath: ['663852'],
                },
                {
                  code: 'endTime',
                  name: '属性',
                  type: 'string',
                  attrId: '499428',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'endTime',
                  },
                  _codePath: ['endTime'],
                  _idpath: ['499428'],
                },
                {
                  code: 'storedFeeAmount',
                  name: '属性',
                  type: 'string',
                  attrId: '172115',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'storedFeeAmount',
                  },
                  _codePath: ['storedFeeAmount'],
                  _idpath: ['172115'],
                },
                {
                  code: 'underTotalAmount',
                  name: '属性',
                  type: 'string',
                  attrId: '622645',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'underTotalAmount',
                  },
                  _codePath: ['underTotalAmount'],
                  _idpath: ['622645'],
                },
                {
                  code: 'giftFeeTotalAmount',
                  name: '属性',
                  type: 'string',
                  attrId: '843049',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'giftFeeTotalAmount',
                  },
                  _codePath: ['giftFeeTotalAmount'],
                  _idpath: ['843049'],
                },
                {
                  code: 'storedElementsMultiples',
                  name: '属性',
                  type: 'string',
                  attrId: '1164233',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'storedElementsMultiples',
                  },
                  _codePath: ['storedElementsMultiples'],
                  _idpath: ['1164233'],
                },
                {
                  code: 'inureTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '4824734',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'inureTypeName',
                  },
                  _codePath: ['inureTypeName'],
                  _idpath: ['4824734'],
                },
                {
                  code: 'goodsType',
                  name: '属性',
                  type: 'string',
                  attrId: '573803',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'goodsType',
                  },
                  _codePath: ['goodsType'],
                  _idpath: ['573803'],
                },
                {
                  code: 'goodsName',
                  name: '属性',
                  type: 'string',
                  attrId: '169278',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'goodsName',
                  },
                  _codePath: ['goodsName'],
                  _idpath: ['169278'],
                },
                {
                  code: 'description',
                  name: '属性',
                  type: 'string',
                  attrId: '7496425',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'description',
                  },
                  _codePath: ['description'],
                  _idpath: ['7496425'],
                },
                {
                  code: 'bindingProductNames',
                  name: '属性',
                  type: 'string',
                  attrId: '119406',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'bindingProductNames',
                  },
                  _codePath: ['bindingProductNames'],
                  _idpath: ['119406'],
                },
                {
                  code: 'saleType',
                  name: '属性',
                  type: 'string',
                  attrId: '9888495',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'saleType',
                  },
                  _codePath: ['saleType'],
                  _idpath: ['9888495'],
                },
                {
                  code: 'terminalCost',
                  name: '属性',
                  type: 'string',
                  attrId: '6435975',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'terminalCost',
                  },
                  _codePath: ['terminalCost'],
                  _idpath: ['6435975'],
                },
                {
                  code: 'terminal',
                  name: '属性',
                  type: 'string',
                  attrId: '347536',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'terminal',
                  },
                  _codePath: ['terminal'],
                  _idpath: ['347536'],
                },
                {
                  code: 'otherCost',
                  name: '属性',
                  type: 'string',
                  attrId: '8026161',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'otherCost',
                  },
                  _codePath: ['otherCost'],
                  _idpath: ['8026161'],
                },
                {
                  code: 'distributeIncome',
                  name: '属性',
                  type: 'string',
                  attrId: '305236',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'distributeIncome',
                  },
                  _codePath: ['distributeIncome'],
                  _idpath: ['305236'],
                },
                {
                  code: 'reward',
                  name: '属性',
                  type: 'string',
                  attrId: '530997',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'reward',
                  },
                  _codePath: ['reward'],
                  _idpath: ['530997'],
                },
                {
                  code: 'oldDistributeIncome',
                  name: '属性',
                  type: 'string',
                  attrId: '43587',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'oldDistributeIncome',
                  },
                  _codePath: ['oldDistributeIncome'],
                  _idpath: ['43587'],
                },
                {
                  code: 'doubleAllowance',
                  name: '属性',
                  type: 'string',
                  attrId: '5477967',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'doubleAllowance',
                  },
                  _codePath: ['doubleAllowance'],
                  _idpath: ['5477967'],
                },
                {
                  code: 'contractPeriod',
                  name: '属性',
                  type: 'string',
                  attrId: '0742437',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'contractPeriod',
                  },
                  _codePath: ['contractPeriod'],
                  _idpath: ['0742437'],
                },
                {
                  code: 'totalCost',
                  name: '属性',
                  type: 'string',
                  attrId: '9198543',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'totalCost',
                  },
                  _codePath: ['totalCost'],
                  _idpath: ['9198543'],
                },
                {
                  code: 'periodValue',
                  name: '属性',
                  type: 'string',
                  attrId: '386273',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'periodValue',
                  },
                  _codePath: ['periodValue'],
                  _idpath: ['386273'],
                },
                {
                  code: 'benefitRatio',
                  name: '属性',
                  type: 'string',
                  attrId: '4992753',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'benefitRatio',
                  },
                  _codePath: ['benefitRatio'],
                  _idpath: ['4992753'],
                },
                {
                  code: 'activityTotalAmount',
                  name: '属性',
                  type: 'string',
                  attrId: '098701',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'activityTotalAmount',
                  },
                  _codePath: ['activityTotalAmount'],
                  _idpath: ['098701'],
                },
                {
                  code: 'onceDiscount',
                  name: '属性',
                  type: 'string',
                  attrId: '4458256',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'onceDiscount',
                  },
                  _codePath: ['onceDiscount'],
                  _idpath: ['4458256'],
                },
                {
                  code: 'arpu',
                  name: '属性',
                  type: 'string',
                  attrId: '188227',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'arpu',
                  },
                  _codePath: ['arpu'],
                  _idpath: ['188227'],
                },
                {
                  code: 'improveRevenue',
                  name: '属性',
                  type: 'string',
                  attrId: '370447',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'improveRevenue',
                  },
                  _codePath: ['improveRevenue'],
                  _idpath: ['370447'],
                },
                {
                  code: 'secondDiscount',
                  name: '属性',
                  type: 'string',
                  attrId: '985374',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'secondDiscount',
                  },
                  _codePath: ['secondDiscount'],
                  _idpath: ['985374'],
                },
                {
                  code: 'antiIncome',
                  name: '属性',
                  type: 'string',
                  attrId: '0470527',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'antiIncome',
                  },
                  _codePath: ['antiIncome'],
                  _idpath: ['0470527'],
                },
                {
                  code: 'feedBackRate',
                  name: '属性',
                  type: 'string',
                  attrId: '840057',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'feedBackRate',
                  },
                  _codePath: ['feedBackRate'],
                  _idpath: ['840057'],
                },
                {
                  code: 'retainedIncome',
                  name: '属性',
                  type: 'string',
                  attrId: '8038904',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'retainedIncome',
                  },
                  _codePath: ['retainedIncome'],
                  _idpath: ['8038904'],
                },
                {
                  code: 'totalRevenue',
                  name: '属性',
                  type: 'string',
                  attrId: '919577',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'totalRevenue',
                  },
                  _codePath: ['totalRevenue'],
                  _idpath: ['919577'],
                },
                {
                  code: 'memberHomeCityName',
                  name: '属性',
                  type: 'string',
                  attrId: '887338',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_981467', 'getFieldsValue'],
                    code: 'memberHomeCityName',
                  },
                  _codePath: ['memberHomeCityName'],
                  _idpath: ['887338'],
                },
                {
                  code: 'memberHomeCity',
                  name: '属性',
                  type: 'string',
                  attrId: '183894',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['memberHomeCity'],
                  _idpath: ['183894'],
                },
                {
                  attrId: '1058253',
                  code: 'rowId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['1058253'],
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'rowId',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170326469334400640,
                options: {
                  compId: 'Input_4646994',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '918412',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170326472274117340,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '5672625',
                      pageJsonId: '8430824',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}success(data.feeInfo)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 170326472274196500,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '123323',
                          pageJsonId: '8430824',
                          params: '$data_5672625$',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 170326472274180600,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '6224388',
                          pageJsonId: '8430824',
                        },
                        line_number: 6,
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
    ];
    eventDatavalidateCurrentForm17.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm17, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal3: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal3.params = [] || [];
    CMDGenerator(eventDatacloseModal3, {}, 'closeModal', {
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
    const eventDataapiRequest121: any = [
      {
        type: 'apiRequest',
        dataId: 169900481883135940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6640853',
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
                      dataKey: '6640853_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
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
                      dataKey: '6640853_root.body.attrCode',
                      value: { type: ['customize'], code: 'yesOrNot' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '6640853_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '6640853_root.header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '6640853_root.path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                  id: 'root.query',
                  dataKey: '6640853_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '6640853_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170324570398671360,
            options: {
              compId: 'Input_255701',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '701928',
              data: '$reply_6640853?.resultData$',
              labelKey: 'attrValue',
              valueKey: 'attrValueCode',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest121.params = [] || [];
    CMDGenerator(eventDataapiRequest121, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest122: any = [
      {
        type: 'apiRequest',
        dataId: 170324353578554240,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '83058011',
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
                      dataKey: '83058011_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
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
                      dataKey: '83058011_root.body.attrCode',
                      value: { type: ['customize'], code: 'saleType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '83058011_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '83058011_root.header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '83058011_root.path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                  id: 'root.query',
                  dataKey: '83058011_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '83058011_root',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170324570748388960,
            options: {
              compId: 'Input_865734',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '151517',
              data: '$reply_83058011?.resultData$',
              labelKey: 'attrValue',
              valueKey: 'attrValueCode',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest122.params = [] || [];
    CMDGenerator(eventDataapiRequest122, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse82: any = [
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
        dataId: 167386144145118720,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 170326818283465540,
            options: {
              compId: 'Form_981467',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Form',
              id: '730665',
              params: '$state.feeInfo$',
            },
            line_number: 6,
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '074357',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.isDetails$',
                  operate: '==',
                  manualValue: 'true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169934962822190980,
            elseIfs: [],
            line_number: 7,
            callback1: [
              {
                type: 'sysSetDisable',
                dataId: 169934962822120320,
                options: {
                  compId: ['Form_981467'],
                  compName: 'page',
                  id: '854506',
                  pageJsonId: '8430824',
                  disabled: 'true',
                  compid: ['Form_981467'],
                },
                line_number: 8,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse82.params = [] || [];
    CMDGenerator(eventDataifelse82, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc16: any = [
      {
        type: 'callSelfFunc',
        dataId: 170326925755250370,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '5818525',
          pageJsonId: '8430824',
          customFuncName: 'change',
        },
        line_number: 9,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc16.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc16, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    }); // console 170326943571530720
    console.log(state?.feeInfo);

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
        <Divider
          name={'分割线'}
          orientation={'left'}
          type={'horizontal'}
          dashed={false}
          dividerText={'集团成员信息'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_9073224',
            uid: 'Divider_9073224',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_9073224')}
          {...injectData}
        />
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
              const eventDatasetDataSource47: any = [
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
                        code: 'msisdn',
                        name: '属性',
                        type: 'string',
                        attrId: '7920964',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'groupId',
                        name: '属性',
                        type: 'string',
                        attrId: '685634',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'groupName',
                        name: '属性',
                        type: 'string',
                        attrId: '261156',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'valueTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '263324',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'valuableFlagName',
                        name: '属性',
                        type: 'string',
                        attrId: '8685033',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'createTime',
                        name: '属性',
                        type: 'string',
                        attrId: '5624691',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'officialLevelName',
                        name: '属性',
                        type: 'string',
                        attrId: '192954',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'memberTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '3485473',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'duty',
                        name: '属性',
                        type: 'string',
                        attrId: '837962',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'keyTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '852426',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'name',
                        name: '属性',
                        type: 'string',
                        attrId: '783899',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'bossName',
                        name: '属性',
                        type: 'string',
                        attrId: '293281',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'staffTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '815256',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'ageTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '661524',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'saleId',
                        name: '属性',
                        type: 'string',
                        attrId: '012048',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'saleName',
                        name: '属性',
                        type: 'string',
                        attrId: '590825398',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'acceptCity',
                        name: '属性',
                        type: 'string',
                        attrId: '490918',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'startTime',
                        name: '属性',
                        type: 'string',
                        attrId: '663852',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'endTime',
                        name: '属性',
                        type: 'string',
                        attrId: '499428',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'storedFeeAmount',
                        name: '属性',
                        type: 'string',
                        attrId: '172115',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'underTotalAmount',
                        name: '属性',
                        type: 'string',
                        attrId: '622645',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'giftFeeTotalAmount',
                        name: '属性',
                        type: 'string',
                        attrId: '843049',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'storedElementsMultiples',
                        name: '属性',
                        type: 'string',
                        attrId: '1164233',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'inureTypeName',
                        name: '属性',
                        type: 'string',
                        attrId: '4824734',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'goodsType',
                        name: '属性',
                        type: 'string',
                        attrId: '573803',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'goodsName',
                        name: '属性',
                        type: 'string',
                        attrId: '169278',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'description',
                        name: '属性',
                        type: 'string',
                        attrId: '7496425',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'bindingProductNames',
                        name: '属性',
                        type: 'string',
                        attrId: '119406',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'saleType',
                        name: '属性',
                        type: 'string',
                        attrId: '9888495',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'terminalCost',
                        name: '属性',
                        type: 'string',
                        attrId: '6435975',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'terminal',
                        name: '属性',
                        type: 'string',
                        attrId: '347536',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'otherCost',
                        name: '属性',
                        type: 'string',
                        attrId: '8026161',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'distributeIncome',
                        name: '属性',
                        type: 'string',
                        attrId: '305236',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'reward',
                        name: '属性',
                        type: 'string',
                        attrId: '530997',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'oldDistributeIncome',
                        name: '属性',
                        type: 'string',
                        attrId: '43587',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'doubleAllowance',
                        name: '属性',
                        type: 'string',
                        attrId: '5477967',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'contractPeriod',
                        name: '属性',
                        type: 'string',
                        attrId: '0742437',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'totalCost',
                        name: '属性',
                        type: 'string',
                        attrId: '9198543',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'periodValue',
                        name: '属性',
                        type: 'string',
                        attrId: '386273',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'benefitRatio',
                        name: '属性',
                        type: 'string',
                        attrId: '4992753',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'activityTotalAmount',
                        name: '属性',
                        type: 'string',
                        attrId: '098701',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'onceDiscount',
                        name: '属性',
                        type: 'string',
                        attrId: '4458256',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'arpu',
                        name: '属性',
                        type: 'string',
                        attrId: '188227',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'improveRevenue',
                        name: '属性',
                        type: 'string',
                        attrId: '370447',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'secondDiscount',
                        name: '属性',
                        type: 'string',
                        attrId: '985374',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'antiIncome',
                        name: '属性',
                        type: 'string',
                        attrId: '0470527',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'feedBackRate',
                        name: '属性',
                        type: 'string',
                        attrId: '840057',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'retainedIncome',
                        name: '属性',
                        type: 'string',
                        attrId: '8038904',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'totalRevenue',
                        name: '属性',
                        type: 'string',
                        attrId: '919577',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'memberHomeCityName',
                        name: '属性',
                        type: 'string',
                        attrId: '887338',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        code: 'memberHomeCity',
                        name: '属性',
                        type: 'string',
                        attrId: '183894',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                      },
                      {
                        attrId: '1058253',
                        code: 'rowId',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource47.params = [] || [];
              CMDGenerator(eventDatasetDataSource47, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
              const eventDatagetSelectedData69: any = [
                {
                  type: 'getSelectedData',
                  dataId: 169875289486480600,
                  shielding: true,
                  options: {
                    compId: 'Input_standardPrice_89896',
                    compLib: 'comm',
                    pageJsonId: '8430824',
                    compName: 'Select',
                    id: '899419',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getSelectedData',
                      dataId: 169875289875937440,
                      shielding: true,
                      options: {
                        compId: 'Select_8264436',
                        compLib: 'comm',
                        pageJsonId: '8430824',
                        compName: 'Select',
                        id: '799304',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '9681593',
                              options: {
                                context: '$selectedData_799304[0]$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                            {
                              options: {
                                context: '$selectedData_899419[0]$',
                                operate: 'notEmpty',
                              },
                              condId: '3613044',
                              connector: '&&',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 169875292421196960,
                          elseIfs: [],
                          line_number: 4,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 169875294674558600,
                              shielding: true,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '828449',
                                pageJsonId: '8430824',
                                actionTitle: '设置分成——成功则都不为福建',
                                code: 'function main(data,state,success,fail){var a=selectedData_899419[0];var z=selectedData_799304[0];if(a.label!="\\u798F\\u5EFA"&&z.label!="\\u798F\\u5EFA"){success()}else{fail()}};',
                              },
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'sysSetRequired',
                                  dataId: 169875304978034780,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '3112177',
                                    pageJsonId: '8430824',
                                    required: 'true',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 6,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169875305526468400,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '547191',
                                    pageJsonId: '8430824',
                                    visible: 'true',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 7,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169932774602647100,
                                  shielding: true,
                                  options: {
                                    compId: ['Icon_2621727'],
                                    compName: 'page',
                                    id: '9642044',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Icon_2621727'],
                                  },
                                  line_number: 8,
                                },
                              ],
                              callback2: [
                                {
                                  type: 'sysSetRequired',
                                  dataId: 169875316454089800,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '220912',
                                    pageJsonId: '8430824',
                                    required: '',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 9,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169875316654176300,
                                  shielding: true,
                                  options: {
                                    compId: ['Icon_2621727'],
                                    compName: 'page',
                                    id: '049108',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Icon_2621727'],
                                  },
                                  line_number: 10,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169932775536531200,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '120287',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 11,
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
              ];
              eventDatagetSelectedData69.params = [] || [];
              CMDGenerator(eventDatagetSelectedData69, {}, 'getSelectedData', {
                id: 'getSelectedData',
                name: 'getSelectedData',
                type: 'getSelectedData',
                platform: 'pc',
              });
              const eventDatacallSelfFunc128: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 169934149049188480,
                  shielding: true,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '679593',
                    pageJsonId: '8430824',
                    customFuncName: 'luYear',
                  },
                  line_number: 12,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc128.params = [] || [];
              CMDGenerator(eventDatacallSelfFunc128, {}, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_981467')}
            {...injectData}
          >
            <Input
              name={'手机号码'}
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
              fieldName={'msisdn'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_887653',
                uid: 'Input_887653',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue137: any = [
                  {
                    type: 'getValue',
                    dataId: 166349953501112500,
                    options: {
                      compId: 'Input_887653',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Input',
                      id: '79444',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167867780210385200,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '882543',
                          pageJsonId: 31,
                          code: 'function main(data,state,success,fail){var phone=/^1[3-9]\\d{9}$/g;if(phone.test(value_79444)){success()}else{fail("\\u6E05\\u8F93\\u5165\\u6B63\\u786E\\u7684\\u624B\\u673A\\u53F7\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u67E5\\u8BE2")}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '64352496',
                                options: {
                                  context: '$value_79444$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167868724212472260,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 167868724212444700,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167868724212429820,
                                    children: [],
                                    todoOptions: ['msgType', 'value'],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '647203',
                                      pageJsonId: 31,
                                      type: 'error',
                                      value: '请输入手机号码',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    line_number: 8,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'showMessage',
                                    dataId: 167868724212429820,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '647203',
                                      pageJsonId: 31,
                                      type: 'error',
                                      value: '请输入手机号码',
                                    },
                                    line_number: 8,
                                  },
                                ],
                              },
                            ],
                            line_number: 3,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 167868724212423870,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '6236527',
                                  pageJsonId: 31,
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'queryGroupMemberInfo',
                                  _apiCode: 'queryGroupMemberInfo',
                                  _source: 'rhin',
                                  _serviceId: '887259504713355264',
                                  _serviceTitle:
                                    '查询集团成员详细信息服务-hdb: queryGroupMemberInfo',
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
                                      dataKey: '6236527_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '6236527_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '6236527_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'orderNbr',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.orderNbr',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.orderNbr',
                                          dataKey: '6236527_body.orderNbr',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.orderNbr$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          code: 'homeCity',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.homeCity',
                                          compType: 'Input',
                                          name: 'homeCity',
                                          parents: ['body'],
                                          id: 'body.homeCity',
                                          dataKey: '6236527_body.homeCity',
                                        },
                                        {
                                          code: 'objType',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.objType',
                                          compType: 'Input',
                                          name: 'objType',
                                          parents: ['body'],
                                          id: 'body.objType',
                                          dataKey: '6236527_body.objType',
                                          value: {
                                            type: ['customize'],
                                            code: '2',
                                          },
                                        },
                                        {
                                          code: 'objId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.objId',
                                          compType: 'Input',
                                          name: 'objId',
                                          parents: ['body'],
                                          id: 'body.objId',
                                          dataKey: '6236527_body.objId',
                                          value: {
                                            type: ['context', '$value_79444$'],
                                            code: '',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '6236527_body',
                                    },
                                  ],
                                  _sourceName: '查询集团成员详细信息服务-hdb',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 167868724212474370,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '692266',
                                      pageJsonId: 31,
                                      code: 'function main(data,state,success,fail){var resultData=reply_6236527.resultData;if((resultData===null||resultData===void 0?void 0:resultData.length)>0){success(resultData[0])}else{fail("\\u67E5\\u8BE2\\u4E0D\\u5230\\u8BE5\\u624B\\u673A\\u53F7\\u5173\\u8054\\u7684\\u96C6\\u56E2\\u4FE1\\u606F")}};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setCurrentFormValues',
                                        dataId: 170323430192186900,
                                        options: {
                                          compId: 'Form_981467',
                                          compLib: 'comm',
                                          pageJsonId: '8430824',
                                          compName: 'Form',
                                          id: '246779',
                                          params: '$data_692266$',
                                        },
                                        line_number: 6,
                                      },
                                      {
                                        type: 'setDataSource',
                                        dataId: 170323541863863140,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '97601',
                                          pageJsonId: '8430824',
                                          dataSourceId: 166452624216490180,
                                          dataSourceName: 'feeInfo',
                                          dataSourceRelType: 'custom',
                                          dataSourceSetValue: [
                                            {
                                              code: 'msisdn',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '7920964',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['7920964'],
                                              _codePath: ['msisdn'],
                                            },
                                            {
                                              code: 'groupId',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '685634',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['685634'],
                                              _codePath: ['groupId'],
                                            },
                                            {
                                              code: 'groupName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '261156',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['261156'],
                                              _codePath: ['groupName'],
                                            },
                                            {
                                              code: 'valueTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '263324',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['263324'],
                                              _codePath: ['valueTypeName'],
                                            },
                                            {
                                              code: 'valuableFlagName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '8685033',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['8685033'],
                                              _codePath: ['valuableFlagName'],
                                            },
                                            {
                                              code: 'createTime',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '5624691',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['5624691'],
                                              _codePath: ['createTime'],
                                            },
                                            {
                                              code: 'officialLevelName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '192954',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['192954'],
                                              _codePath: ['officialLevelName'],
                                            },
                                            {
                                              code: 'memberTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '3485473',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['3485473'],
                                              _codePath: ['memberTypeName'],
                                            },
                                            {
                                              code: 'duty',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '837962',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['837962'],
                                              _codePath: ['duty'],
                                            },
                                            {
                                              code: 'keyTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '852426',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['852426'],
                                              _codePath: ['keyTypeName'],
                                            },
                                            {
                                              code: 'name',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '783899',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['783899'],
                                              _codePath: ['name'],
                                            },
                                            {
                                              code: 'bossName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '293281',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['293281'],
                                              _codePath: ['bossName'],
                                            },
                                            {
                                              code: 'staffTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '815256',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['815256'],
                                              _codePath: ['staffTypeName'],
                                            },
                                            {
                                              code: 'ageTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '661524',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['661524'],
                                              _codePath: ['ageTypeName'],
                                            },
                                            {
                                              code: 'saleId',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '012048',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['012048'],
                                              _codePath: ['saleId'],
                                            },
                                            {
                                              code: 'saleName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '590825398',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['590825398'],
                                              _codePath: ['saleName'],
                                            },
                                            {
                                              code: 'acceptCity',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '490918',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['490918'],
                                              _codePath: ['acceptCity'],
                                            },
                                            {
                                              code: 'startTime',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '663852',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['663852'],
                                              _codePath: ['startTime'],
                                            },
                                            {
                                              code: 'endTime',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '499428',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['499428'],
                                              _codePath: ['endTime'],
                                            },
                                            {
                                              code: 'storedFeeAmount',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '172115',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['172115'],
                                              _codePath: ['storedFeeAmount'],
                                            },
                                            {
                                              code: 'underTotalAmount',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '622645',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['622645'],
                                              _codePath: ['underTotalAmount'],
                                            },
                                            {
                                              code: 'giftFeeTotalAmount',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '843049',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['843049'],
                                              _codePath: ['giftFeeTotalAmount'],
                                            },
                                            {
                                              code: 'inureTypeName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '4824734',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['4824734'],
                                              _codePath: ['inureTypeName'],
                                            },
                                            {
                                              code: 'goodsType',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '573803',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['573803'],
                                              _codePath: ['goodsType'],
                                            },
                                            {
                                              code: 'goodsName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '169278',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['169278'],
                                              _codePath: ['goodsName'],
                                            },
                                            {
                                              code: 'description',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '7496425',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['7496425'],
                                              _codePath: ['description'],
                                            },
                                            {
                                              code: 'bindingProductNames',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '119406',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['119406'],
                                              _codePath: [
                                                'bindingProductNames',
                                              ],
                                            },
                                            {
                                              code: 'saleType',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '9888495',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['9888495'],
                                              _codePath: ['saleType'],
                                            },
                                            {
                                              code: 'terminalCost',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '6435975',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['6435975'],
                                              _codePath: ['terminalCost'],
                                            },
                                            {
                                              code: 'terminal',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '347536',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['347536'],
                                              _codePath: ['terminal'],
                                            },
                                            {
                                              code: 'otherCost',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '8026161',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['8026161'],
                                              _codePath: ['otherCost'],
                                            },
                                            {
                                              code: 'distributeIncome',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '305236',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['305236'],
                                              _codePath: ['distributeIncome'],
                                            },
                                            {
                                              code: 'reward',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '530997',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['530997'],
                                              _codePath: ['reward'],
                                            },
                                            {
                                              code: 'oldDistributeIncome',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '43587',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['43587'],
                                              _codePath: [
                                                'oldDistributeIncome',
                                              ],
                                            },
                                            {
                                              code: 'doubleAllowance',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '5477967',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['5477967'],
                                              _codePath: ['doubleAllowance'],
                                            },
                                            {
                                              code: 'contractPeriod',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '0742437',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['0742437'],
                                              _codePath: ['contractPeriod'],
                                            },
                                            {
                                              code: 'totalCost',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '9198543',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['9198543'],
                                              _codePath: ['totalCost'],
                                            },
                                            {
                                              code: 'periodValue',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '386273',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['386273'],
                                              _codePath: ['periodValue'],
                                            },
                                            {
                                              code: 'benefitRatio',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '4992753',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['4992753'],
                                              _codePath: ['benefitRatio'],
                                            },
                                            {
                                              code: 'activityTotalAmount',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '098701',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['098701'],
                                              _codePath: [
                                                'activityTotalAmount',
                                              ],
                                            },
                                            {
                                              code: 'onceDiscount',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '4458256',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['4458256'],
                                              _codePath: ['onceDiscount'],
                                            },
                                            {
                                              code: 'arpu',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '188227',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['188227'],
                                              _codePath: ['arpu'],
                                            },
                                            {
                                              code: 'improveRevenue',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '370447',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['370447'],
                                              _codePath: ['improveRevenue'],
                                            },
                                            {
                                              code: 'secondDiscount',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '985374',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['985374'],
                                              _codePath: ['secondDiscount'],
                                            },
                                            {
                                              code: 'antiIncome',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '0470527',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['0470527'],
                                              _codePath: ['antiIncome'],
                                            },
                                            {
                                              code: 'feedBackRate',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '840057',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['840057'],
                                              _codePath: ['feedBackRate'],
                                            },
                                            {
                                              code: 'retainedIncome',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '8038904',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['8038904'],
                                              _codePath: ['retainedIncome'],
                                            },
                                            {
                                              code: 'totalRevenue',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '919577',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _idpath: ['919577'],
                                              _codePath: ['totalRevenue'],
                                            },
                                            {
                                              code: 'memberHomeCityName',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '887338',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_692266$',
                                                ],
                                                code: 'memberHomeCityName',
                                              },
                                              _idpath: ['887338'],
                                              _codePath: ['memberHomeCityName'],
                                            },
                                            {
                                              code: 'memberHomeCity',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '183894',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_692266$',
                                                ],
                                                code: 'memberHomeCity',
                                              },
                                              _idpath: ['183894'],
                                              _codePath: ['memberHomeCity'],
                                            },
                                            {
                                              code: 'storedElementsMultiples',
                                              name: '属性',
                                              type: 'string',
                                              attrId: '1164233',
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              parentKey: '1',
                                              parentType: 'object',
                                              showInput: true,
                                              _codePath: [
                                                'storedElementsMultiples',
                                              ],
                                              _idpath: ['1164233'],
                                            },
                                            {
                                              attrId: '1058253',
                                              code: 'rowId',
                                              name: '属性',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                              _codePath: ['rowId'],
                                              _idpath: ['1058253'],
                                            },
                                          ],
                                          operateType: 1,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 7,
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
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 167868722083534300,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '29844205',
                              pageJsonId: 31,
                              type: 'error',
                              value: '$fail_882543$',
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue137.params = [] || [];
                CMDGenerator(eventDatagetValue137, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_887653')}
              {...injectData}
            />
            <Input
              name={'集团编码'}
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
              fieldName={'groupId'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={1}
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
                id: 'Input_776918',
                uid: 'Input_776918',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_776918')}
              {...injectData}
            />
            <Input
              name={'集团名称'}
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
              fieldName={'groupName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={2}
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
                id: 'Input_22832',
                uid: 'Input_22832',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_22832')}
              {...injectData}
            />
            <Input
              name={'价值等级'}
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
              fieldName={'valueTypeName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={3}
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
                id: 'Input_3169715',
                uid: 'Input_3169715',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3169715')}
              {...injectData}
            />
            <Input
              name={'重要客户标识'}
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
              fieldName={'valuableFlagName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_3755025',
                uid: 'Input_3755025',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3755025')}
              {...injectData}
            />
            <Input
              name={'加入时间'}
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
              fieldName={'createTime'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={5}
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
                id: 'Input_618576',
                uid: 'Input_618576',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_618576')}
              {...injectData}
            />
            <Input
              name={'行政级别'}
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
              fieldName={'officialLevelName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_732757',
                uid: 'Input_732757',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_732757')}
              {...injectData}
            />
            <Input
              name={'成员类型'}
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
              fieldName={'memberTypeName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_391855',
                uid: 'Input_391855',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_391855')}
              {...injectData}
            />
            <Input
              name={'职务'}
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
              fieldName={'duty'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_620459',
                uid: 'Input_620459',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_620459')}
              {...injectData}
            />
            <Input
              name={'关键人标识'}
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
              fieldName={'keyTypeName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_511463',
                uid: 'Input_511463',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_511463')}
              {...injectData}
            />
            <Input
              name={'姓名'}
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
              fieldName={'name'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={10}
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
                id: 'Input_715973',
                uid: 'Input_715973',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_715973')}
              {...injectData}
            />
            <Input
              name={'使用人'}
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
              fieldName={'bossName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_931137',
                uid: 'Input_931137',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_931137')}
              {...injectData}
            />
            <Input
              name={'是否员工及亲友'}
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
              fieldName={'staffTypeName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={12}
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
                id: 'Input_72339117',
                uid: 'Input_72339117',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_72339117')}
              {...injectData}
            />
            <Input
              name={'年龄是否异常'}
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
              fieldName={'ageTypeName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
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
                id: 'Input_021679',
                uid: 'Input_021679',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_021679')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_7906375',
                uid: 'View_7906375',
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
                  formItemIndex: 14,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_7906375')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopy2copy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
    isDetails: '',
  },
});
