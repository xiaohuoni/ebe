// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Card, Form, Input, Table, TextArea, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0017_0001ProdInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse162: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '235795',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.actionType$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168794262357567260,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 168794306780192800,
            children: [
              {
                dataName: 'action',
                dataId: 168794307404033000,
                children: [],
                todoOptions: [],
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '1343493',
                  pageJsonId: '2331069',
                },
                actionObjId: 'closeModal',
                actionObjName: 'page',
                value: 'closeModal',
                line_number: 11,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '详情',
            callback: [
              {
                type: 'closeModal',
                dataId: 168794307404033000,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '1343493',
                  pageJsonId: '2331069',
                },
                line_number: 11,
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
                condId: '365129',
                options: {
                  context: '$state.editable.prod$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168794262357527840,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 168794282521594240,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168794287060819520,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 168794287060827040,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168794303699348670,
                            children: [],
                            todoOptions: ['setParams'],
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '041261',
                              pageJsonId: '2331069',
                              params: '$data.formData$',
                            },
                            actionObjId: 'okCallbackData',
                            actionObjName: 'page',
                            value: 'okCallbackData',
                            line_number: 8,
                          },
                          {
                            dataName: 'action',
                            dataId: 168794304095291870,
                            children: [],
                            todoOptions: [],
                            options: {
                              compId: 'closeModal',
                              compName: 'page',
                              id: '853772',
                              pageJsonId: '2331069',
                            },
                            actionObjId: 'closeModal',
                            actionObjName: 'page',
                            value: 'closeModal',
                            line_number: 9,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 168794287060892480,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 16879430592824894,
                            children: [],
                            todoOptions: ['msgType', 'value', 'duration'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '0496805',
                              pageJsonId: '2331069',
                              type: 'warn',
                              value: '$fail_154255$',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                            line_number: 10,
                          },
                        ],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'editorCode'],
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '154255',
                      pageJsonId: '2331069',
                      code: 'function main(data,state,success,fail){var _data$formData$produc;var _index=(_data$formData$produc=data.formData.productChargeItemInfo)===null||_data$formData$produc===void 0?void 0:_data$formData$produc.findIndex(function(item){return!item.productBillItem});if(_index>-1){fail("\\u8BF7\\u5B8C\\u5584\\u4EA7\\u54C1\\u7EA7\\u8D39\\u9879\\u4FE1\\u606F\\u4E2D\\u7701\\u5185\\u8D26\\u76EE\\u9879\\u4FE1\\u606F\\u540E\\u70B9\\u51FB\\u786E\\u8BA4")}else{console.log("\\u4EA7\\u54C1\\u89C4\\u683C\\u786E\\u8BA4\\u4FEE\\u6539",data.formData);success()}};',
                    },
                    actionObjId: 'customActionCode',
                    actionObjName: 'page',
                    value: 'customActionCode',
                    tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                    line_number: 7,
                  },
                ],
                condition: [
                  {
                    options: {
                      context: '$state.editable.account$',
                      operate: '== true',
                    },
                    condId: '232476',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                value: 'elseIf',
                desc: '账号编辑',
                callback: [
                  {
                    type: 'customActionCode',
                    dataId: 168794287060819520,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '154255',
                      pageJsonId: '2331069',
                      code: 'function main(data,state,success,fail){var _data$formData$produc;var _index=(_data$formData$produc=data.formData.productChargeItemInfo)===null||_data$formData$produc===void 0?void 0:_data$formData$produc.findIndex(function(item){return!item.productBillItem});if(_index>-1){fail("\\u8BF7\\u5B8C\\u5584\\u4EA7\\u54C1\\u7EA7\\u8D39\\u9879\\u4FE1\\u606F\\u4E2D\\u7701\\u5185\\u8D26\\u76EE\\u9879\\u4FE1\\u606F\\u540E\\u70B9\\u51FB\\u786E\\u8BA4")}else{console.log("\\u4EA7\\u54C1\\u89C4\\u683C\\u786E\\u8BA4\\u4FEE\\u6539",data.formData);success()}};',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 168794303699348670,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '041261',
                          pageJsonId: '2331069',
                          params: '$data.formData$',
                        },
                        line_number: 8,
                      },
                      {
                        type: 'closeModal',
                        dataId: 168794304095291870,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '853772',
                          pageJsonId: '2331069',
                        },
                        line_number: 9,
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 16879430592824894,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '0496805',
                          pageJsonId: '2331069',
                          type: 'warn',
                          value: '$fail_154255$',
                        },
                        line_number: 10,
                      },
                    ],
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'validateCurrentForm',
                dataId: 168794264159707700,
                options: {
                  compId: 'Form_87556',
                  compLib: 'comm',
                  pageJsonId: '2331069',
                  compName: 'Form',
                  id: '2686103',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168794264960747360,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '087815',
                      pageJsonId: '2331069',
                      code: 'function main(data,state,success,fail){var result=Object.assign(data.formData,Form_87556);console.log("\\u4EA7\\u54C1\\u89C4\\u683C\\u786E\\u8BA4\\u4FEE\\u6539",result);success(result)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 168794279679907040,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '500014',
                          pageJsonId: '2331069',
                          params: '$data_087815$',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 168794281987151140,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '139102',
                          pageJsonId: '2331069',
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
        ],
      },
    ];
    eventDataifelse162.params = [] || [];
    CMDGenerator(eventDataifelse162, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal35: any = [
      {
        type: 'closeModal',
        dataId: '4063897_1',
        options: { compId: 'page', compName: 'page', id: '3638093' },
        line_number: 1,
      },
    ];
    eventDatacloseModal35.params = [] || [];
    CMDGenerator(eventDatacloseModal35, {}, 'closeModal', {
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
    // console 168792156285394880
    console.log('====1+N+N 产品规格 state======', state);
    const eventDatacustomActionCode248: any = [
      {
        type: 'customActionCode',
        dataId: 168793823733853300,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '55736974',
          pageJsonId: '2331069',
          actionTitle: '表单信息回填',
          code: 'function main(data,state,success,fail){data.formData=state.formData;success(state.formData)};',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 168793832332994940,
            options: {
              compId: 'Form_87556',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Form',
              id: '1688661',
              params: '$data_55736974$',
            },
            line_number: 3,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 168793833333718530,
            shielding: true,
            options: {
              compId: 'Form_7058647',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Form',
              id: '188398',
              params: '$data_55736974$',
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode248.params = [] || [];
    CMDGenerator(eventDatacustomActionCode248, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode249: any = [
      {
        type: 'customActionCode',
        dataId: 169960958731794180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '979273',
          pageJsonId: '2331069',
          actionTitle: '总部配置信息表单设置数据',
          code: 'function main(data,state,success,fail){data.formData=state.formData;success(Object.assign(state.formData,state.formData.productSpec))};',
        },
        line_number: 5,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 169960958731763900,
            shielding: true,
            options: {
              compId: 'Form_87556',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Form',
              id: '631026',
              params: '$data_979273$',
            },
            line_number: 6,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 169960958731797860,
            options: {
              compId: 'Form_7058647',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Form',
              id: '651128',
              params: '$data_979273$',
            },
            line_number: 7,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode249.params = [] || [];
    CMDGenerator(eventDatacustomActionCode249, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatareloadTableData: any = [
      {
        type: 'reloadTableData',
        dataId: 168793834979549820,
        options: {
          compId: 'Table_929924',
          compLib: 'comm',
          pageJsonId: '2331069',
          compName: 'Table',
          id: '886564',
          data: '$state.formData.productChargeItemInfo$',
          total: '$state.formData.productChargeItemInfo.length$',
          current: '1',
        },
        line_number: 8,
        callback1: [],
      },
    ];
    eventDatareloadTableData.params = [] || [];
    CMDGenerator(eventDatareloadTableData, {}, 'reloadTableData', {
      id: 'reloadTableData',
      name: 'reloadTableData',
      type: 'reloadTableData',
      platform: 'undefined',
    });
    const eventDatareloadTableData1: any = [
      {
        type: 'reloadTableData',
        dataId: 168793842148180960,
        options: {
          compId: 'Table_1947564',
          compLib: 'comm',
          pageJsonId: '2331069',
          compName: 'Table',
          id: '05168',
          data: '$state.formData.productRatePlans$',
          total: '$state.formData.productRatePlans.length$',
          current: '1',
        },
        line_number: 9,
        callback1: [],
      },
    ];
    eventDatareloadTableData1.params = [] || [];
    CMDGenerator(eventDatareloadTableData1, {}, 'reloadTableData', {
      id: 'reloadTableData',
      name: 'reloadTableData',
      type: 'reloadTableData',
      platform: 'undefined',
    });
    const eventDatacustomActionCode250: any = [
      {
        type: 'customActionCode',
        dataId: 168793918251773500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8257932',
          pageJsonId: '2331069',
          actionTitle: '产品属性数据回填',
          code: 'function main(data,state,success,fail){var _productSpecCharacters=state.formData.productSpecCharacters.map(function(item){var _item$valueSource,_item$valueSource$map;var valueSourceName=(_item$valueSource=item.valueSource)===null||_item$valueSource===void 0?void 0:(_item$valueSource$map=_item$valueSource.map(function(valueSourceItem){return valueSourceItem.enumName}))===null||_item$valueSource$map===void 0?void 0:_item$valueSource$map.toString();item.valueSourceName=valueSourceName;return item});success(_productSpecCharacters)};',
        },
        line_number: 10,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 168793932388335600,
            options: {
              compId: 'Table_093858',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '128872',
              data: '$data_8257932$',
              total: '$data_8257932.length$',
              current: '1',
            },
            line_number: 11,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode250.params = [] || [];
    CMDGenerator(eventDatacustomActionCode250, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode251: any = [
      {
        type: 'customActionCode',
        dataId: 168793860039486370,
        shielding: true,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '1071974',
          pageJsonId: '2331069',
          actionTitle: '业务规则表单回填',
          code: 'function main(data,state,success,fail){var orderRules=state.formData.productRules.orderRules;if(orderRules!=null&&orderRules!=undefined&&Array.isArray(orderRules)){state.formData.productRules.orderRules=orderRules.map(function(rule){return"("+rule.ruleId+";"+rule.ruleDesc+";"+rule.mutualexclRules+")"}).join(",")}var operationRules=state.formData.productRules.operationRules;if(operationRules!=null&&operationRules!=undefined&&Array.isArray(operationRules)){state.formData.productRules.operationRules=operationRules.map(function(rule){return"("+rule.ruleId+";"+rule.ruleDesc+";"+rule.mutualexclRules+")"}).join(",")}success(state.formData.productRules)};',
        },
        line_number: 12,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 168793864875467500,
            shielding: true,
            options: {
              compId: 'Form_2389804',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Form',
              id: '155314',
              params: '$data_1071974$',
            },
            line_number: 13,
          },
          {
            type: 'reloadTableData',
            dataId: 168793869325494900,
            shielding: true,
            options: {
              compId: 'Table_523567',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '5671966',
              data: '$data_1071974.characterRules$',
              total: '$data_1071974.characterRules.length$',
              current: '1',
            },
            line_number: 14,
            callback1: [],
          },
          {
            type: 'reloadTableData',
            dataId: 168793872766661440,
            shielding: true,
            options: {
              compId: 'Table_072023',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '5996496',
              data: '$data_1071974.rateRules$',
              total: '$data_1071974.rateRules.length$',
              current: '1',
            },
            line_number: 15,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode251.params = [] || [];
    CMDGenerator(eventDatacustomActionCode251, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode252: any = [
      {
        type: 'customActionCode',
        dataId: 170139671198607420,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '283314',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var _product$productOrder;var product=state.formData;console.log("product:",product);var memberSpecCharacters=(_product$productOrder=product.productOrderMembers[0])===null||_product$productOrder===void 0?void 0:_product$productOrder.memberSpecCharacters;if(memberSpecCharacters!=null&&memberSpecCharacters!=undefined&&Array.isArray(memberSpecCharacters)){for(var i=0;i<memberSpecCharacters.length;i++){var valueSource=memberSpecCharacters[i].valueSource;console.log("==\\u679A\\u4E3E\\u503C\\u8BBE\\u7F6E");valueSource=valueSource.map(function(rule){return"(\\u5C5E\\u6027\\u7F16\\u7801:"+rule.enumCode+";\\u5C5E\\u6027\\u540D\\u79F0:"+rule.enumName+";\\u5C5E\\u6027\\u72B6\\u6001:"+rule.state+")"}).join(",");memberSpecCharacters[i].valueSource=valueSource}}console.log("\\u5904\\u7406==",memberSpecCharacters);success(memberSpecCharacters)};',
          actionTitle: '成员操作处理',
        },
        line_number: 16,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 170139712513385660,
            options: {
              compId: 'Table_57481',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '004635',
              data: '$state.formData.productOrderMembers[0].memberSpecCharacters$',
              total:
                '$state.formData.productOrderMembers[0].memberSpecCharacters.length$',
            },
            line_number: 17,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode252.params = [] || [];
    CMDGenerator(eventDatacustomActionCode252, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetValue15: any = [
      {
        type: 'setValue',
        dataId: 170139671198673600,
        options: {
          compId: ['Input_26406'],
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '136412',
          valueList: {
            Input_26406: '$state.formData.productOrderMembers[0].action$',
          },
          compid: ['Input_26406'],
        },
        line_number: 18,
        callback1: [],
      },
    ];
    eventDatasetValue15.params = [] || [];
    CMDGenerator(eventDatasetValue15, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    }); // console 170139671198641660
    console.log('=====DATA', state);
    const eventDatacustomActionCode253: any = [
      {
        type: 'customActionCode',
        dataId: 170139671198678400,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '401027',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){success()};',
        },
        line_number: 20,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 170139796573993060,
            options: {
              compId: 'Table_864312',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '5160165',
              total: '$state.formData.productRules.orderRules.length$',
              current: '1',
              data: '$state.formData.productRules.orderRules$',
            },
            line_number: 21,
            callback1: [],
          },
          {
            type: 'reloadTableData',
            dataId: 170139797783030530,
            options: {
              compId: 'Table_64808',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '969735',
              data: '$state.formData.productRules.operationRules$',
              total: '$state.formData.productRules.operationRules.length$',
              current: '1',
            },
            line_number: 22,
            callback1: [],
          },
          {
            type: 'reloadTableData',
            dataId: 170139798418274370,
            options: {
              compId: 'Table_891887',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '68053',
              data: '$state.formData.productRules.characterRules$',
              total: '$state.formData.productRules.characterRules.length$',
              current: '1',
            },
            line_number: 23,
            callback1: [],
          },
          {
            type: 'reloadTableData',
            dataId: 170139799122734140,
            options: {
              compId: 'Table_942352',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '859054',
              data: '$state.formData.productRules.rateRules$',
              total: '$state.formData.productRules.rateRules.length$',
              current: '1',
            },
            line_number: 24,
            callback1: [],
          },
          {
            type: 'reloadTableData',
            dataId: 170139799455818180,
            options: {
              compId: 'Table_958712',
              compLib: 'comm',
              pageJsonId: '2331069',
              compName: 'Table',
              id: '253373',
              data: '$state.formData.productRules.productRelateRules$',
              total: '$state.formData.productRules.productRelateRules.length$',
              current: '1',
            },
            line_number: 25,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode253.params = [] || [];
    CMDGenerator(eventDatacustomActionCode253, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatareloadTableData2: any = [
      {
        type: 'reloadTableData',
        dataId: 170139694491997600,
        options: {
          compId: 'Table_775273',
          compLib: 'comm',
          pageJsonId: '2331069',
          compName: 'Table',
          id: '699116',
          data: '$state.formData.characterGroup$',
          total: '$state.formData.characterGroup.length$',
          current: '1',
        },
        line_number: 26,
        callback1: [],
      },
    ];
    eventDatareloadTableData2.params = [] || [];
    CMDGenerator(eventDatareloadTableData2, {}, 'reloadTableData', {
      id: 'reloadTableData',
      name: 'reloadTableData',
      type: 'reloadTableData',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {
    const eventDataifelse163: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '235795',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.actionType$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168794238428522100,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '365129',
                options: {
                  context: '$state.editable?.prod$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168794240352664260,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'setDisable',
                dataId: 168794243528006180,
                options: {
                  compId: [
                    'Input_263835',
                    'Input_712516',
                    'Input_529662',
                    'Input_586597',
                    'TextArea_662954',
                    'Input_943502',
                    'Input_90814',
                    'Input_3087559',
                  ],
                  compLib: 'comm',
                  pageJsonId: '2331069',
                  compName: 'Input',
                  id: '624576',
                  disabled: '',
                  compid: [
                    'Input_263835',
                    'Input_712516',
                    'Input_529662',
                    'Input_586597',
                    'TextArea_662954',
                    'Input_943502',
                    'Input_90814',
                    'Input_3087559',
                  ],
                },
                line_number: 3,
              },
              {
                type: 'setRequired',
                dataId: 168794244186258340,
                options: {
                  compId: [
                    'Input_263835',
                    'Input_712516',
                    'Input_529662',
                    'Input_586597',
                    'TextArea_662954',
                    'Input_943502',
                    'Input_90814',
                    'Input_3087559',
                  ],
                  compLib: 'comm',
                  pageJsonId: '2331069',
                  compName: 'Input',
                  id: '1478608',
                  required: 'true',
                  compid: [
                    'Input_263835',
                    'Input_712516',
                    'Input_529662',
                    'Input_586597',
                    'TextArea_662954',
                    'Input_943502',
                    'Input_90814',
                    'Input_3087559',
                  ],
                },
                line_number: 4,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse163.params = [] || [];
    CMDGenerator(eventDataifelse163, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_2331069__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_2331069_1',
          uid: 'View_2331069_1',
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
        ref={(r: any) => (refs['View_2331069_1'] = r)}
        {...injectData}
      >
        <Card
          name={'省内配置信息卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'省内配置信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_6886166',
            uid: 'Card_6886166',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_6886166'] = r)}
          {...injectData}
        >
          <Form
            name={'省内配置信息表单'}
            colSpan={8}
            labelCol={'9'}
            wrapperCol={15}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_7058647'}
            $$componentItem={{
              id: 'Form_87556',
              uid: 'Form_87556',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_87556'] = r)}
            {...injectData}
          >
            <Input
              name={'省内产品编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
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
              fieldName={'ngProductId'}
              maxLength={12}
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
                id: 'Input_263835',
                uid: 'Input_263835',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_263835'] = r)}
              {...injectData}
            />
            <Input
              name={'省内产品名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'ngProductName'}
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
                id: 'Input_712516',
                uid: 'Input_712516',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_712516'] = r)}
              {...injectData}
            />
            <Input
              name={'省内产品大类'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'ngProductClass'}
              maxLength={4}
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
                id: 'Input_529662',
                uid: 'Input_529662',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_529662'] = r)}
              {...injectData}
            />
            <Input
              name={'省内产品大类名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'ngProductClassName'}
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
                id: 'Input_943502',
                uid: 'Input_943502',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_943502'] = r)}
              {...injectData}
            />
            <Input
              name={'省内产品小类'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'ngProductClassSmall'}
              maxLength={6}
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
                id: 'Input_586597',
                uid: 'Input_586597',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_586597'] = r)}
              {...injectData}
            />
            <Input
              name={'省内产品小类名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'ngProductClassSmallName'}
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
                id: 'Input_90814',
                uid: 'Input_90814',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_90814'] = r)}
              {...injectData}
            />
            <Input
              name={'省内产品描述'}
              size={'default'}
              selfSpan={24}
              labelCol={'3'}
              wrapperCol={21}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={6}
              fieldName={'ngProductDesc'}
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
                id: 'Input_3087559',
                uid: 'Input_3087559',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_3087559'] = r)}
              {...injectData}
            />
          </Form>
        </Card>
        <Card
          name={'总部配置信息卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'总部配置信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_915262',
            uid: 'Card_915262',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_915262'] = r)}
          {...injectData}
        >
          <Form
            name={'总部配置信息表单'}
            colSpan={8}
            labelCol={'9'}
            wrapperCol={15}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_7058647'}
            $$componentItem={{
              id: 'Form_7058647',
              uid: 'Form_7058647',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_7058647'] = r)}
            {...injectData}
          >
            <Input
              name={'产品规格编号'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
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
              fieldName={'productSpecNumber'}
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
                id: 'Input_94665',
                uid: 'Input_94665',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_94665'] = r)}
              {...injectData}
            />
            <Input
              name={'产品规格名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'productSpecName'}
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
                id: 'Input_7320262',
                uid: 'Input_7320262',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_7320262'] = r)}
              {...injectData}
            />
            <Input
              name={'产品规格状态'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'status'}
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
                id: 'Input_6616407',
                uid: 'Input_6616407',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_6616407'] = r)}
              {...injectData}
            />
            <TextArea
              name={'产品描述'}
              selfSpan={24}
              labelCol={'3'}
              wrapperCol={21}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'description'}
              $$componentItem={{
                id: 'TextArea_272829',
                uid: 'TextArea_272829',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_272829'] = r)}
              {...injectData}
            />
            <Input
              name={'标签'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'tags'}
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
                id: 'Input_418493',
                uid: 'Input_418493',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_418493'] = r)}
              {...injectData}
            />
            <Input
              name={'产品别名'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'productAlias'}
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
                id: 'Input_93513411',
                uid: 'Input_93513411',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_93513411'] = r)}
              {...injectData}
            />
            <Input
              name={'是否需要装填'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={6}
              fieldName={'install'}
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
                id: 'Input_4614138',
                uid: 'Input_4614138',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_4614138'] = r)}
              {...injectData}
            />
            <Input
              name={'平台内部标识'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={7}
              fieldName={'platformOfferId'}
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
                id: 'Input_081636',
                uid: 'Input_081636',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_081636'] = r)}
              {...injectData}
            />
            <Input
              name={'操作类型'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={8}
              fieldName={'productAction'}
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
                id: 'Input_896678',
                uid: 'Input_896678',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_896678'] = r)}
              {...injectData}
            />
            <Input
              name={'产品可支持的操作类型'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={9}
              fieldName={'operationSubTypeID'}
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
                id: 'Input_591078',
                uid: 'Input_591078',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_591078'] = r)}
              {...injectData}
            />
            <Input
              name={'一经通信和信息化产品编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={10}
              fieldName={'productBICode'}
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
                id: 'Input_568869',
                uid: 'Input_568869',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_568869'] = r)}
              {...injectData}
            />
          </Form>
        </Card>
        <Card
          name={'产品级费项信息卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'产品级费项信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_8795367',
            uid: 'Card_8795367',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_8795367'] = r)}
          {...injectData}
        >
          <Table
            name={'产品级费用项表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
            headBtnNum={3}
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
                title: '省内账目项',
                dataIndex: 'productBillItem',
                key: 'column1',
                className: '',
                id: '241872',
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
                title: '一级费项编码',
                dataIndex: 'chargeCode1',
                key: 'column2',
                className: 'divider',
                id: '8488322',
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
                title: '一级费项名称',
                dataIndex: 'chargeName1',
                key: 'column3',
                className: 'divider',
                id: '94884',
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
                title: '二级费项编码',
                dataIndex: 'chargeCode2',
                key: 'column4',
                className: 'divider',
                id: '5736897',
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
                title: '二级费项名称',
                dataIndex: 'chargeName2',
                key: 'column5',
                className: 'divider',
                id: '8739753',
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
                type: 'staticCol',
                id: '087608',
                dataIndex: 'chargeCode3',
                title: '三级费项编码',
                key: '087608',
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
                type: 'staticCol',
                id: '636443',
                dataIndex: 'chargeName3',
                title: '三级费项名称',
                key: '636443',
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
                type: 'staticCol',
                id: '720711',
                dataIndex: 'taxRate',
                title: '税率(%)',
                key: '720711',
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
            rowKeyType={'auto'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={true}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'rowKey'}
            scroll={{ x: 1000 }}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '157089',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '9678397',
                rule: '!state.editable.account',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_929924',
              uid: 'Table_929924',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal143: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168785802219369600,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '356496',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_feeInfo',
                    pageId: '990817782033211392',
                    modalPath: '/CLS_CP_0017_0001_feeInfo',
                    paramsObj: {
                      formData: '$row$',
                      actionType: 'V',
                      title: '产品',
                    },
                    paramsObjKeyValueMap: {
                      formData: '$row$',
                      actionType: 'V',
                      title: '产品',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal143.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatashowCustomModal143,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal144: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168793606143198700,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '933071',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_feeInfo',
                    pageId: '990817782033211392',
                    modalPath: '/CLS_CP_0017_0001_feeInfo',
                    paramsObj: {
                      formData: '$row$',
                      actionType: 'U',
                      title: '产品',
                    },
                    paramsObjKeyValueMap: {
                      formData: '$row$',
                      actionType: 'U',
                      title: '产品',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 168794195755054530,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '148392',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.formData.productChargeItemInfo[index].productBillItem=okData_933071.poBillItem;data.formData.productChargeItemInfo[index].productChargeItem=okData_933071.poChargeItem;data.formData.productChargeItemInfo[index].productChargeItemName=okData_933071.poChargeItemName;success(data.formData.productChargeItemInfo)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'reloadTableData',
                          dataId: 168796243566746300,
                          options: {
                            compId: 'Table_929924',
                            compLib: 'comm',
                            pageJsonId: '2331069',
                            compName: 'Table',
                            id: '878635',
                            data: '$data_148392$',
                            total: '$data_148392.length$',
                            current: '1',
                          },
                          line_number: 3,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal144.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatashowCustomModal144,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_929924'] = r)}
            {...injectData}
          />
        </Card>
        <Card
          name={'产品级资费卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'产品级资费'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_1271674',
            uid: 'Card_1271674',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_1271674'] = r)}
          {...injectData}
        >
          <Table
            name={'产品规格资费表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
            headBtnNum={3}
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
                title: '资费计划标识',
                dataIndex: 'ratePlanID',
                key: 'column1',
                className: '',
                id: '4464309',
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
                title: '资费计划名称',
                dataIndex: 'ratePlanName',
                key: 'column2',
                className: 'divider',
                id: '624083',
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
                title: '资费类别',
                dataIndex: 'ratePlanSort',
                key: 'column3',
                className: 'divider',
                id: '6890194',
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
                title: '资费描述',
                dataIndex: 'Description',
                key: 'column4',
                className: 'divider',
                id: '652131',
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
                title: '叠加包周期',
                dataIndex: 'packetPeriod',
                key: 'column5',
                className: 'divider',
                id: '464905',
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
                type: 'staticCol',
                id: '8959277',
                title: '资费计划类型',
                dataIndex: 'ratePlanType',
                key: '8959277',
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
                type: 'staticCol',
                id: '189247',
                title: '省内资费编码',
                dataIndex: 'ratePlanProvID',
                key: '189247',
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
                type: 'staticCol',
                id: '9296518',
                title: '期望生效时间',
                dataIndex: 'startDate',
                key: '9296518',
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
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'ratePlanID'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '157089',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_1947564',
              uid: 'Table_1947564',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal145: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168793597776002720,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '550661',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_cost',
                    pageId: '990866780278415360',
                    modalPath: '/CLS_CP_0017_0001_cost',
                    paramsObj: { title: '产品级资费', formData: '$row$' },
                    paramsObjKeyValueMap: {
                      title: '产品级资费',
                      formData: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal145.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatashowCustomModal145,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_1947564'] = r)}
            {...injectData}
          />
        </Card>
        <Card
          name={'产品属性卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'产品属性'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_425227',
            uid: 'Card_425227',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_425227'] = r)}
          {...injectData}
        >
          <Table
            name={'产品属性表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
            headBtnNum={3}
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
                title: '产品属性代码',
                dataIndex: 'productSpecCharacterNumber',
                key: 'column5',
                className: '',
                id: '6113055',
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
                type: 'staticCol',
                id: '6329137',
                title: '属性名称',
                dataIndex: 'name',
                key: '6329137',
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
                type: 'staticCol',
                id: '048607',
                title: '属性枚举值取值',
                dataIndex: 'valueSourceName',
                key: '048607',
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
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'productSpecCharacterNumber'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '51504594',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_093858',
              uid: 'Table_093858',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal146: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168793803529701800,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '7487377',
                    pageJsonId: '2331069',
                    modalname: '/CLS_CP_0017_0001_prodAttr',
                    pageId: '990878646190923776',
                    modalPath: '/CLS_CP_0017_0001_prodAttr',
                    paramsObj: { formData: '$row$' },
                    paramsObjKeyValueMap: { formData: '$row$' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal146.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatashowCustomModal146,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_093858'] = r)}
            {...injectData}
          />
        </Card>
        <Card
          name={'产品业务规则卡片'}
          cardIconType={'none'}
          extendNum={3}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_597682',
            uid: 'Card_597682',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_597682'] = r)}
          {...injectData}
        >
          <Card
            name={'产品属性组卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={'产品属性组'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
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
              id: 'Card_016051',
              uid: 'Card_016051',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            ref={(r: any) => (refs['Card_016051'] = r)}
            {...injectData}
          >
            <Table
              name={'产品属性组表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
              tableTitle={'表格名称'}
              headBtnNum={3}
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
                  title: '属性组编码',
                  dataIndex: 'characterGroupNumber',
                  key: 'column1',
                  className: '',
                  id: '4464309',
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
                  title: '属性组名称',
                  dataIndex: 'characterGroup',
                  key: 'column2',
                  className: 'divider',
                  id: '624083',
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
                  title: '属性组次数限制',
                  dataIndex: 'characterGroupLimit',
                  key: 'column3',
                  className: 'divider',
                  id: '6890194',
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
                  title: '产品属性代码',
                  dataIndex: 'containCharacterNumber',
                  key: 'column4',
                  className: 'divider',
                  id: '652131',
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
              rowSelection={undefined}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={'ratePlanID'}
              rowActions={[]}
              extend={[]}
              $$componentItem={{
                id: 'Table_775273',
                uid: 'Table_775273',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              onRowDetail={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal147: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168793597776002720,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '550661',
                      pageJsonId: '537892',
                      modalname: '/CLS_CP_0017_0001_cost',
                      pageId: '990866780278415360',
                      modalPath: '/CLS_CP_0017_0001_cost',
                      paramsObj: { title: '商品规格资费', formData: '$row$' },
                      paramsObjKeyValueMap: {
                        title: '商品规格资费',
                        formData: '$row$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal147.params =
                  [
                    { title: '行id', name: 'rowId', value: '$rowId$' },
                    {
                      title: '行对象',
                      name: 'row',
                      value: '$row$',
                      attrType: 'object',
                    },
                    { title: '行索引', name: 'index', value: '$index$' },
                  ] || [];
                CMDGenerator(
                  eventDatashowCustomModal147,
                  { rowId, row, index },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Table_775273'] = r)}
              {...injectData}
            />
          </Card>
          <Card
            name={'产品成员操作信息卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={'产品成员操作信息'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
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
              id: 'Card_41996754',
              uid: 'Card_41996754',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            ref={(r: any) => (refs['Card_41996754'] = r)}
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
              formCode={'Form_324845'}
              $$componentItem={{
                id: 'Form_168921',
                uid: 'Form_168921',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_168921'] = r)}
              {...injectData}
            >
              <Input
                name={'成员操作'}
                size={'default'}
                selfSpan={8}
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
                fieldName={'action'}
                maxLength={12}
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
                  id: 'Input_26406',
                  uid: 'Input_26406',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_26406'] = r)}
                {...injectData}
              />
            </Form>
            <Table
              name={'产品属性组表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
              tableTitle={'表格名称'}
              headBtnNum={3}
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
                  title: '产品属性编码',
                  dataIndex: 'productSpecCharacterNumber',
                  key: 'column1',
                  className: '',
                  id: '4464309',
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
                  title: '属性名称',
                  dataIndex: 'name',
                  key: 'column2',
                  className: 'divider',
                  id: '624083',
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
                  title: '属性枚举值取值',
                  dataIndex: 'valueSource',
                  key: 'column3',
                  className: 'divider',
                  id: '6890194',
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
              rowSelection={undefined}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={'ratePlanID'}
              rowActions={[]}
              extend={[]}
              $$componentItem={{
                id: 'Table_57481',
                uid: 'Table_57481',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              onRowDetail={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal148: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168793597776002720,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '550661',
                      pageJsonId: '537892',
                      modalname: '/CLS_CP_0017_0001_cost',
                      pageId: '990866780278415360',
                      modalPath: '/CLS_CP_0017_0001_cost',
                      paramsObj: { title: '商品规格资费', formData: '$row$' },
                      paramsObjKeyValueMap: {
                        title: '商品规格资费',
                        formData: '$row$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal148.params =
                  [
                    { title: '行id', name: 'rowId', value: '$rowId$' },
                    {
                      title: '行对象',
                      name: 'row',
                      value: '$row$',
                      attrType: 'object',
                    },
                    { title: '行索引', name: 'index', value: '$index$' },
                  ] || [];
                CMDGenerator(
                  eventDatashowCustomModal148,
                  { rowId, row, index },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Table_57481'] = r)}
              {...injectData}
            />
          </Card>
          <Card
            name={'产品业务规则卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={'产品业务规则'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
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
              id: 'Card_073149',
              uid: 'Card_073149',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            ref={(r: any) => (refs['Card_073149'] = r)}
            {...injectData}
          >
            <Card
              name={'订购规则卡片'}
              cardIconType={'none'}
              extendNum={3}
              title={'订购规则'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
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
                id: 'Card_7507446',
                uid: 'Card_7507446',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => (refs['Card_7507446'] = r)}
              {...injectData}
            >
              <Table
                name={'订购规则'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={10}
                current={1}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    title: '规则编号',
                    dataIndex: 'ruleId',
                    key: 'column1',
                    className: '',
                    id: '4464309',
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
                    title: '规则描述',
                    dataIndex: 'ruleDesc',
                    key: 'column2',
                    className: 'divider',
                    id: '624083',
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
                    title: '操作规则',
                    dataIndex: 'mutualexclRules',
                    key: 'column3',
                    className: 'divider',
                    id: '6890194',
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
                rowSelection={undefined}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'ratePlanID'}
                rowActions={[]}
                extend={[]}
                $$componentItem={{
                  id: 'Table_864312',
                  uid: 'Table_864312',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal149: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168793597776002720,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '550661',
                        pageJsonId: '537892',
                        modalname: '/CLS_CP_0017_0001_cost',
                        pageId: '990866780278415360',
                        modalPath: '/CLS_CP_0017_0001_cost',
                        paramsObj: { title: '商品规格资费', formData: '$row$' },
                        paramsObjKeyValueMap: {
                          title: '商品规格资费',
                          formData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal149.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatashowCustomModal149,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_864312'] = r)}
                {...injectData}
              />
            </Card>
            <Card
              name={'操作规则卡片'}
              cardIconType={'none'}
              extendNum={3}
              title={'操作规则'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
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
                id: 'Card_703003',
                uid: 'Card_703003',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => (refs['Card_703003'] = r)}
              {...injectData}
            >
              <Table
                name={'操作规则'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={10}
                current={1}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    title: '规则编号',
                    dataIndex: 'ruleId',
                    key: 'column1',
                    className: '',
                    id: '4464309',
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
                    title: '规则描述',
                    dataIndex: 'ruleDesc',
                    key: 'column2',
                    className: 'divider',
                    id: '624083',
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
                    title: '操作规则',
                    dataIndex: 'mutualexclRules',
                    key: 'column3',
                    className: 'divider',
                    id: '6890194',
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
                rowSelection={undefined}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'ratePlanID'}
                rowActions={[]}
                extend={[]}
                $$componentItem={{
                  id: 'Table_64808',
                  uid: 'Table_64808',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal150: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168793597776002720,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '550661',
                        pageJsonId: '537892',
                        modalname: '/CLS_CP_0017_0001_cost',
                        pageId: '990866780278415360',
                        modalPath: '/CLS_CP_0017_0001_cost',
                        paramsObj: { title: '商品规格资费', formData: '$row$' },
                        paramsObjKeyValueMap: {
                          title: '商品规格资费',
                          formData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal150.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatashowCustomModal150,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_64808'] = r)}
                {...injectData}
              />
            </Card>
            <Card
              name={'属性规则卡片'}
              cardIconType={'none'}
              extendNum={3}
              title={'属性规则'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
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
                id: 'Card_2802727',
                uid: 'Card_2802727',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => (refs['Card_2802727'] = r)}
              {...injectData}
            >
              <Table
                name={'属性规则'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={10}
                current={1}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    title: '规则编号',
                    dataIndex: 'ruleId',
                    key: 'column1',
                    className: '',
                    id: '4464309',
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
                    title: '规则描述',
                    dataIndex: 'ruleDesc',
                    key: 'column2',
                    className: 'divider',
                    id: '624083',
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
                    title: '属性规则类型',
                    dataIndex: 'ruleType',
                    key: 'column3',
                    className: 'divider',
                    id: '6890194',
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
                    title: '属性编码',
                    dataIndex: 'enumCode',
                    key: 'column4',
                    className: 'divider',
                    id: '652131',
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
                    type: 'staticCol',
                    id: '047716',
                    dataIndex: 'dependEnumCodes',
                    title: '关联属性编码',
                    key: '047716',
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
                rowSelection={undefined}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'ratePlanID'}
                rowActions={[]}
                extend={[]}
                $$componentItem={{
                  id: 'Table_891887',
                  uid: 'Table_891887',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal151: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168793597776002720,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '550661',
                        pageJsonId: '537892',
                        modalname: '/CLS_CP_0017_0001_cost',
                        pageId: '990866780278415360',
                        modalPath: '/CLS_CP_0017_0001_cost',
                        paramsObj: { title: '商品规格资费', formData: '$row$' },
                        paramsObjKeyValueMap: {
                          title: '商品规格资费',
                          formData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal151.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatashowCustomModal151,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_891887'] = r)}
                {...injectData}
              />
            </Card>
            <Card
              name={'资费规则卡片'}
              cardIconType={'none'}
              extendNum={3}
              title={'资费规则'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
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
                id: 'Card_5813844',
                uid: 'Card_5813844',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => (refs['Card_5813844'] = r)}
              {...injectData}
            >
              <Table
                name={'资费规则'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={10}
                current={1}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    title: '规则编号',
                    dataIndex: 'ruleId',
                    key: 'column1',
                    className: '',
                    id: '4464309',
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
                    title: '规则描述',
                    dataIndex: 'ruleDesc',
                    key: 'column2',
                    className: 'divider',
                    id: '624083',
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
                    title: '资费规则类型',
                    dataIndex: 'ruleType',
                    key: 'column3',
                    className: 'divider',
                    id: '6890194',
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
                    title: '资费编码',
                    dataIndex: 'ratePlanID',
                    key: 'column4',
                    className: 'divider',
                    id: '652131',
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
                    type: 'staticCol',
                    id: '179603',
                    dataIndex: 'dependRatePlanIDs',
                    title: '关联资费编码',
                    key: '179603',
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
                rowSelection={undefined}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'ratePlanID'}
                rowActions={[]}
                extend={[]}
                $$componentItem={{
                  id: 'Table_942352',
                  uid: 'Table_942352',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal152: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168793597776002720,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '550661',
                        pageJsonId: '537892',
                        modalname: '/CLS_CP_0017_0001_cost',
                        pageId: '990866780278415360',
                        modalPath: '/CLS_CP_0017_0001_cost',
                        paramsObj: { title: '商品规格资费', formData: '$row$' },
                        paramsObjKeyValueMap: {
                          title: '商品规格资费',
                          formData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal152.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatashowCustomModal152,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_942352'] = r)}
                {...injectData}
              />
            </Card>
            <Card
              name={'产品规则卡片'}
              cardIconType={'none'}
              extendNum={3}
              title={'产品规则'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
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
                id: 'Card_085349',
                uid: 'Card_085349',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => (refs['Card_085349'] = r)}
              {...injectData}
            >
              <Table
                name={'产品规则'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={10}
                current={1}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    title: '规则编号',
                    dataIndex: 'ruleId',
                    key: 'column1',
                    className: '',
                    id: '4464309',
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
                    title: '规则描述',
                    dataIndex: 'ruleDesc',
                    key: 'column2',
                    className: 'divider',
                    id: '624083',
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
                    title: '产品规则类型',
                    dataIndex: 'ruleType',
                    key: 'column3',
                    className: 'divider',
                    id: '6890194',
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
                    title: '产品编码',
                    dataIndex: 'productSpecNumber',
                    key: 'column4',
                    className: 'divider',
                    id: '652131',
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
                    type: 'staticCol',
                    id: '0647853',
                    dataIndex: 'dependProductSpecNumber',
                    title: '关联产品编码',
                    key: '0647853',
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
                rowSelection={undefined}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'ratePlanID'}
                rowActions={[]}
                extend={[]}
                $$componentItem={{
                  id: 'Table_958712',
                  uid: 'Table_958712',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal153: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168793597776002720,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '550661',
                        pageJsonId: '537892',
                        modalname: '/CLS_CP_0017_0001_cost',
                        pageId: '990866780278415360',
                        modalPath: '/CLS_CP_0017_0001_cost',
                        paramsObj: { title: '商品规格资费', formData: '$row$' },
                        paramsObjKeyValueMap: {
                          title: '商品规格资费',
                          formData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal153.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatashowCustomModal153,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_958712'] = r)}
                {...injectData}
              />
            </Card>
          </Card>
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0017_0001ProdInfo$$Modal, {
  pageId: '990550518931316736',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    formData: '',
    actionType: '',
    editable: '',
  },
});
